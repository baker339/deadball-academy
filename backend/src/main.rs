use std::{collections::HashMap, env, fs, net::SocketAddr, path::PathBuf};

use anyhow::Context;
use argon2::{
    Argon2,
    password_hash::{PasswordHash, PasswordHasher, PasswordVerifier, SaltString},
};
use axum::{
    Json, Router,
    extract::{Path, Query, State},
    http::{HeaderMap, HeaderValue, StatusCode},
    response::{IntoResponse, Response},
    routing::{get, patch, post},
};
use chrono::{DateTime, Duration, Utc};
use jsonwebtoken::{DecodingKey, EncodingKey, Header, Validation, decode, encode};
use rand_core::OsRng;
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use sqlx::postgres::{PgPool, PgPoolOptions};
use sqlx::FromRow;
use tower_http::cors::{AllowOrigin, Any, CorsLayer};
use tracing_subscriber::{EnvFilter, fmt};

#[derive(Clone)]
struct AppState {
    pool: PgPool,
    cfg: AppConfig,
}

#[derive(Clone)]
struct AppConfig {
    jwt_secret_key: String,
    access_token_expire_minutes: i64,
    first_admin_email: String,
    cms_enabled: bool,
}

#[derive(Debug, Default, Serialize)]
struct ProfessorNotesBackfillReport {
    scanned_revisions: i64,
    candidates: i64,
    inserted: i64,
    duplicates: i64,
    unmapped: Vec<String>,
}

#[derive(Debug, Serialize)]
struct ApiErrorBody {
    detail: String,
}

#[derive(Debug)]
struct AppError {
    status: StatusCode,
    detail: String,
}

impl AppError {
    fn new(status: StatusCode, detail: impl Into<String>) -> Self {
        Self {
            status,
            detail: detail.into(),
        }
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        (
            self.status,
            Json(ApiErrorBody {
                detail: self.detail,
            }),
        )
            .into_response()
    }
}

impl From<sqlx::Error> for AppError {
    fn from(value: sqlx::Error) -> Self {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Database error: {value}"),
        )
    }
}

impl From<anyhow::Error> for AppError {
    fn from(value: anyhow::Error) -> Self {
        AppError::new(StatusCode::INTERNAL_SERVER_ERROR, value.to_string())
    }
}

type AppResult<T> = Result<T, AppError>;

#[derive(Serialize, Deserialize)]
struct TokenResponse {
    access_token: String,
    token_type: String,
}

#[derive(Serialize, Deserialize)]
struct UserCreate {
    email: String,
    full_name: String,
    password: String,
}

#[derive(Serialize, Deserialize)]
struct UserLogin {
    email: String,
    password: String,
}

#[derive(Serialize, Deserialize, FromRow, Clone)]
struct UserPublic {
    id: i64,
    email: String,
    full_name: String,
    tier: String,
    role: String,
    is_active: i64,
    created_at: Option<DateTime<Utc>>,
}

#[derive(Serialize, Deserialize)]
struct ProgressEventCreate {
    course_slug: String,
    module_slug: String,
    lesson_slug: String,
    status: Option<String>,
    score: Option<f64>,
    time_spent_seconds: Option<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct ProgressEventPublic {
    id: i64,
    course_slug: String,
    module_slug: String,
    lesson_slug: String,
    status: String,
    score: Option<f64>,
    time_spent_seconds: Option<i64>,
    created_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct BadgePublic {
    id: i64,
    badge_key: String,
    badge_type: String,
    title: String,
    description: String,
    course_slug: String,
    module_slug: Option<String>,
    awarded_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
struct CompletedLessonKeys {
    keys: Vec<String>,
}

#[derive(Serialize, Deserialize)]
struct LearningDashboard {
    completed_lessons: i64,
    total_lessons: i64,
    completion_percent: f64,
    streak_days: i64,
    recent_progress: Vec<ProgressEventPublic>,
    badges: Vec<BadgePublic>,
}

#[derive(Serialize, Deserialize)]
struct LearningProfile {
    user: UserPublic,
    completed_lessons: i64,
    total_lessons: i64,
    completion_percent: f64,
    streak_days: i64,
    badges: Vec<BadgePublic>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CoursePublic {
    slug: String,
    title: String,
    description: String,
    level: String,
    is_premium: i64,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CourseModule {
    slug: String,
    title: String,
    description: String,
    module_order: i64,
    estimated_minutes: i64,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CourseLesson {
    slug: String,
    title: String,
    summary: String,
    lesson_order: i64,
    estimated_minutes: i64,
    track: String,
    route_path: String,
}

#[derive(Serialize, Deserialize)]
struct CourseWithModules {
    slug: String,
    title: String,
    description: String,
    level: String,
    is_premium: bool,
    modules: Vec<ModuleWithLessons>,
}

#[derive(Serialize, Deserialize)]
struct ModuleWithLessons {
    slug: String,
    title: String,
    description: String,
    module_order: i64,
    estimated_minutes: i64,
    lessons: Vec<CourseLesson>,
}

#[derive(Serialize, Deserialize)]
struct UserRoleUpdate {
    role: String,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CurriculumTrackPublic {
    id: i64,
    slug: String,
    title: String,
    description: String,
    track_order: i64,
    is_published: i64,
}

#[derive(Serialize, Deserialize)]
struct CurriculumTrackCreate {
    slug: String,
    title: String,
    description: Option<String>,
    track_order: Option<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CurriculumUnitPublic {
    id: i64,
    track_id: i64,
    slug: String,
    title: String,
    description: String,
    unit_order: i64,
    is_published: i64,
}

#[derive(Serialize, Deserialize)]
struct CurriculumUnitCreate {
    track_id: i64,
    slug: String,
    title: String,
    description: Option<String>,
    unit_order: Option<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CurriculumLessonPublic {
    id: i64,
    unit_id: i64,
    slug: String,
    title: String,
    lesson_order: i64,
    status: String,
    latest_revision_id: Option<i64>,
    published_revision_id: Option<i64>,
}

#[derive(Serialize, Deserialize)]
struct CurriculumLessonCreate {
    unit_id: i64,
    slug: String,
    title: String,
    lesson_order: Option<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CurriculumModulePublic {
    id: i64,
    lesson_id: i64,
    slug: String,
    title: String,
    module_type: String,
    module_order: i64,
    archived: i64,
}

#[derive(Serialize, Deserialize)]
struct CurriculumModuleCreate {
    lesson_id: i64,
    slug: String,
    title: String,
    module_type: Option<String>,
    module_order: Option<i64>,
}

#[derive(Serialize, Deserialize)]
struct CurriculumModuleUpdate {
    slug: Option<String>,
    title: Option<String>,
    module_type: Option<String>,
    module_order: Option<i64>,
    archived: Option<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct CurriculumStepPublic {
    id: i64,
    module_id: i64,
    slug: String,
    title: String,
    step_type: String,
    step_order: i64,
    content_json: String,
    archived: i64,
}

#[derive(Serialize, Deserialize)]
struct CurriculumStepCreate {
    module_id: i64,
    slug: String,
    title: String,
    step_type: Option<String>,
    step_order: Option<i64>,
    content_json: Option<String>,
}

#[derive(Serialize, Deserialize)]
struct CurriculumStepUpdate {
    slug: Option<String>,
    title: Option<String>,
    step_type: Option<String>,
    step_order: Option<i64>,
    content_json: Option<String>,
    archived: Option<i64>,
}

#[derive(Deserialize)]
struct ReorderPayload {
    ordered_ids: Vec<i64>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct LessonRevisionPublic {
    id: i64,
    lesson_id: i64,
    revision_number: i64,
    payload_json: String,
    status: String,
    created_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
struct LessonRevisionCreate {
    payload_json: String,
}

#[derive(Serialize, Deserialize, FromRow)]
struct ReviewNotePublic {
    id: i64,
    lesson_id: i64,
    author_user_id: i64,
    severity: String,
    category: String,
    note_text: String,
    status: String,
    created_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
struct ReviewNoteCreate {
    severity: String,
    category: String,
    note_text: String,
    status: Option<String>,
}

#[derive(Serialize, Deserialize, FromRow)]
struct ReviewDecisionPublic {
    id: i64,
    lesson_id: i64,
    reviewer_user_id: i64,
    decision: String,
    notes: String,
    created_at: DateTime<Utc>,
}

#[derive(Serialize, Deserialize)]
struct ReviewDecisionCreate {
    decision: String,
    notes: Option<String>,
}

#[derive(Serialize, Deserialize)]
struct Claims {
    sub: String,
    exp: usize,
}

#[derive(Deserialize)]
struct UnitsQuery {
    track_id: Option<i64>,
}

#[derive(Deserialize)]
struct LessonsQuery {
    unit_id: Option<i64>,
}

#[derive(Deserialize)]
struct ModulesQuery {
    lesson_id: Option<i64>,
}

#[derive(Deserialize)]
struct StepsQuery {
    module_id: Option<i64>,
}


#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let cli_args: Vec<String> = env::args().collect();
    let run_backfill = cli_args.iter().any(|arg| arg == "migrate-professor-notes");
    let dry_run = cli_args.iter().any(|arg| arg == "--dry-run");
    dotenvy::dotenv().ok();
    fmt().with_env_filter(EnvFilter::from_default_env()).init();

    let cfg = AppConfig {
        jwt_secret_key: env::var("JWT_SECRET_KEY")
            .unwrap_or_else(|_| "change-me-in-production".to_string()),
        access_token_expire_minutes: env::var("ACCESS_TOKEN_EXPIRE_MINUTES")
            .ok()
            .and_then(|v| v.parse::<i64>().ok())
            .unwrap_or(120),
        first_admin_email: env::var("FIRST_ADMIN_EMAIL")
            .unwrap_or_default()
            .to_lowercase(),
        cms_enabled: env::var("CMS_ENABLED")
            .map(|v| matches!(v.to_lowercase().as_str(), "1" | "true" | "yes" | "on"))
            .unwrap_or(true),
    };
    let database_url = env::var("ACADEMY_RUST_DATABASE_URL").unwrap_or_else(|_| {
        "postgres://postgres:postgres@127.0.0.1:5432/academy_rust".to_string()
    });
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
        .context("connect db (check ACADEMY_RUST_DATABASE_URL and that Postgres is reachable)")?;

    sqlx::migrate!("./migrations")
        .run(&pool)
        .await
        .context("run migrations")?;

    if run_backfill {
        let report = backfill_professor_notes_into_review_notes(&pool, dry_run)
            .await
            .map_err(|e| anyhow::anyhow!(e.detail.clone()))?;
        println!("{}", serde_json::to_string_pretty(&report)?);
        return Ok(());
    }

    seed_curriculum(&pool)
        .await
        .map_err(|e| anyhow::anyhow!(e.detail.clone()))?;
    repair_seeded_lesson_revisions(&pool)
        .await
        .map_err(|e| anyhow::anyhow!(e.detail.clone()))?;

    let state = AppState { pool, cfg };
    let app = build_router(state);

    let addr: SocketAddr = env::var("ACADEMY_RUST_ADDR")
        .unwrap_or_else(|_| "127.0.0.1:8000".to_string())
        .parse()
        .context("parse bind addr")?;

    tracing::info!("academy-backend-rust listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}

fn build_cors_layer() -> CorsLayer {
    let default_origins = "http://localhost:3000,http://127.0.0.1:3000";
    let raw = env::var("CORS_ALLOW_ORIGINS").unwrap_or_else(|_| default_origins.to_string());
    let mut origins: Vec<HeaderValue> = raw
        .split(',')
        .map(str::trim)
        .filter(|s| !s.is_empty())
        .filter_map(|s| s.parse::<HeaderValue>().ok())
        .collect();
    if origins.is_empty() {
        origins = vec![
            HeaderValue::from_static("http://localhost:3000"),
            HeaderValue::from_static("http://127.0.0.1:3000"),
        ];
    }
    CorsLayer::new()
        .allow_origin(AllowOrigin::list(origins))
        .allow_headers(Any)
        .allow_methods(Any)
}

fn build_router(state: AppState) -> Router {
    let cors = build_cors_layer();

    Router::new()
        .route("/", get(root))
        .route("/health", get(health))
        .route("/auth/register", post(register))
        .route("/auth/login", post(login))
        .route("/learning/me", get(me))
        .route("/learning/catalog", get(catalog))
        .route(
            "/learning/lessons/{track_slug}/{unit_slug}/{lesson_slug}",
            get(learning_lesson_payload),
        )
        .route("/learning/progress", post(record_progress))
        .route("/learning/dashboard", get(dashboard))
        .route(
            "/learning/completed-lesson-keys",
            get(completed_lesson_keys),
        )
        .route("/learning/profile", get(profile))
        .route("/admin/users", get(list_users))
        .route("/admin/users/{user_id}/role", patch(update_user_role))
        .route("/cms/tracks", get(list_tracks).post(create_track))
        .route(
            "/cms/tracks/{track_id}",
            patch(update_track).delete(delete_track),
        )
        .route("/cms/tracks/reorder", post(reorder_tracks))
        .route("/cms/tree", get(cms_tree))
        .route("/cms/review-queue", get(cms_review_queue))
        .route("/cms/units", get(list_units).post(create_unit))
        .route(
            "/cms/units/{unit_id}",
            patch(update_unit).delete(delete_unit),
        )
        .route("/cms/units/reorder", post(reorder_units))
        .route("/cms/lessons", get(list_lessons).post(create_lesson))
        .route(
            "/cms/lessons/{lesson_id}",
            patch(update_lesson).delete(delete_lesson),
        )
        .route("/cms/lessons/reorder", post(reorder_lessons))
        .route("/cms/modules", get(list_modules).post(create_module))
        .route(
            "/cms/modules/{module_id}",
            patch(update_module).delete(delete_module),
        )
        .route("/cms/modules/reorder", post(reorder_modules))
        .route("/cms/steps", get(list_steps).post(create_step))
        .route(
            "/cms/steps/{step_id}",
            patch(update_step).delete(delete_step),
        )
        .route("/cms/steps/reorder", post(reorder_steps))
        .route(
            "/cms/lessons/{lesson_id}/revisions",
            get(list_revisions).post(create_revision),
        )
        .route("/cms/lessons/{lesson_id}/publish", post(publish_lesson))
        .route("/cms/lessons/{lesson_id}/rollback", post(rollback_lesson))
        .route(
            "/cms/lessons/{lesson_id}/completeness",
            get(lesson_completeness),
        )
        .route("/cms/lessons/{lesson_id}/diff", get(lesson_diff))
        .route(
            "/cms/lessons/{lesson_id}/review-notes",
            get(list_review_notes).post(create_review_note),
        )
        .route(
            "/cms/lessons/{lesson_id}/review-decisions",
            get(list_review_decisions).post(create_review_decision),
        )
        .route("/cms/export/runtime", get(export_runtime))
        .with_state(state)
        .layer(cors)
}

async fn root() -> Json<Value> {
    Json(json!({ "message": "Welcome to Deadball Academy Rust API" }))
}

async fn health() -> Json<Value> {
    Json(json!({ "status": "ok" }))
}

fn norm_email(email: &str) -> String {
    email.trim().to_lowercase()
}

fn hash_password(password: &str) -> AppResult<String> {
    let salt = SaltString::generate(&mut OsRng);
    let argon = Argon2::default();
    let hashed = argon
        .hash_password(password.as_bytes(), &salt)
        .map_err(|e| {
            AppError::new(
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("hash failure: {e}"),
            )
        })?;
    Ok(hashed.to_string())
}

fn verify_password(hash: &str, password: &str) -> bool {
    PasswordHash::new(hash)
        .ok()
        .and_then(|parsed| {
            Argon2::default()
                .verify_password(password.as_bytes(), &parsed)
                .ok()
        })
        .is_some()
}

fn token_for(cfg: &AppConfig, subject: &str) -> AppResult<String> {
    let exp =
        (Utc::now() + Duration::minutes(cfg.access_token_expire_minutes)).timestamp() as usize;
    let claims = Claims {
        sub: subject.to_string(),
        exp,
    };
    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(cfg.jwt_secret_key.as_bytes()),
    )
    .map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("token encode error: {e}"),
        )
    })
}

fn claims_from_headers(cfg: &AppConfig, headers: &HeaderMap) -> AppResult<Claims> {
    let header = headers
        .get("Authorization")
        .ok_or_else(|| AppError::new(StatusCode::UNAUTHORIZED, "Missing authorization header"))?;
    let text = header
        .to_str()
        .map_err(|_| AppError::new(StatusCode::UNAUTHORIZED, "Invalid authorization header"))?;
    let token = text
        .strip_prefix("Bearer ")
        .ok_or_else(|| AppError::new(StatusCode::UNAUTHORIZED, "Invalid bearer token"))?;
    decode::<Claims>(
        token,
        &DecodingKey::from_secret(cfg.jwt_secret_key.as_bytes()),
        &Validation::default(),
    )
    .map(|d| d.claims)
    .map_err(|_| AppError::new(StatusCode::UNAUTHORIZED, "Invalid authentication token"))
}

async fn current_user(headers: &HeaderMap, state: &AppState) -> AppResult<UserPublic> {
    let claims = claims_from_headers(&state.cfg, headers)?;
    let user = sqlx::query_as::<_, UserPublic>(
        "SELECT id, email, full_name, tier, role, is_active, created_at FROM users WHERE email = $1",
    )
    .bind(norm_email(&claims.sub))
    .fetch_optional(&state.pool)
    .await?
    .ok_or_else(|| AppError::new(StatusCode::UNAUTHORIZED, "User not found"))?;
    Ok(user)
}

fn require_roles(user: &UserPublic, roles: &[&str]) -> AppResult<()> {
    if roles.iter().any(|r| *r == user.role) {
        Ok(())
    } else {
        Err(AppError::new(
            StatusCode::FORBIDDEN,
            "Insufficient permissions",
        ))
    }
}

fn has_non_empty_string(value: Option<&Value>) -> bool {
    value
        .and_then(Value::as_str)
        .is_some_and(|entry| !entry.trim().is_empty())
}

fn extract_key_triplet(lesson_key: &str) -> Option<(String, String, String)> {
    let parts: Vec<&str> = lesson_key.split("::").collect();
    if parts.len() != 3 {
        return None;
    }
    let track = parts[0].trim();
    let unit = parts[1].trim();
    let lesson = parts[2].trim();
    if track.is_empty() || unit.is_empty() || lesson.is_empty() {
        return None;
    }
    Some((track.to_string(), unit.to_string(), lesson.to_string()))
}

async fn resolve_lesson_id_from_key(pool: &PgPool, lesson_key: &str) -> AppResult<Option<i64>> {
    let Some((track_slug, unit_slug, lesson_slug)) = extract_key_triplet(lesson_key) else {
        return Ok(None);
    };
    let row: Option<(i64,)> = sqlx::query_as(
        "SELECT l.id
         FROM curriculum_lessons l
         JOIN curriculum_units u ON u.id = l.unit_id
         JOIN curriculum_tracks t ON t.id = u.track_id
         WHERE t.slug = $1 AND u.slug = $2 AND l.slug = $3",
    )
    .bind(track_slug)
    .bind(unit_slug)
    .bind(lesson_slug)
    .fetch_optional(pool)
    .await?;
    Ok(row.map(|(id,)| id))
}

async fn backfill_professor_notes_into_review_notes(
    pool: &PgPool,
    dry_run: bool,
) -> AppResult<ProfessorNotesBackfillReport> {
    let actor: Option<(i64,)> = sqlx::query_as(
        "SELECT id FROM users WHERE role IN ('admin', 'content_editor') ORDER BY id LIMIT 1",
    )
    .fetch_optional(pool)
    .await?;
    let actor_user_id = actor.map(|(id,)| id).ok_or_else(|| {
        AppError::new(
            StatusCode::BAD_REQUEST,
            "Backfill requires at least one admin or content_editor user",
        )
    })?;
    let revisions: Vec<(i64, i64, String)> =
        sqlx::query_as("SELECT id, lesson_id, payload_json FROM lesson_revisions ORDER BY id ASC")
            .fetch_all(pool)
            .await?;
    let mut report = ProfessorNotesBackfillReport {
        scanned_revisions: revisions.len() as i64,
        ..ProfessorNotesBackfillReport::default()
    };

    for (revision_id, revision_lesson_id, payload_json) in revisions {
        let Ok(parsed) = serde_json::from_str::<Value>(&payload_json) else {
            report
                .unmapped
                .push(format!("revision {revision_id}: invalid payload_json"));
            continue;
        };
        let professor_notes = parsed
            .get("professorNotes")
            .and_then(Value::as_str)
            .map(str::trim)
            .unwrap_or("");
        if professor_notes.is_empty() {
            continue;
        }
        report.candidates += 1;
        let has_direct_lesson: Option<(i64,)> =
            sqlx::query_as("SELECT id FROM curriculum_lessons WHERE id = $1")
                .bind(revision_lesson_id)
                .fetch_optional(pool)
                .await?;
        let resolved_lesson_id = if has_direct_lesson.is_some() {
            Some(revision_lesson_id)
        } else if let Some(key) = parsed.get("key").and_then(Value::as_str) {
            resolve_lesson_id_from_key(pool, key).await?
        } else {
            None
        };
        let Some(lesson_id) = resolved_lesson_id else {
            let key = parsed
                .get("key")
                .and_then(Value::as_str)
                .unwrap_or("<missing key>");
            report.unmapped.push(format!(
                "revision {revision_id}: unresolved lesson for key {key}"
            ));
            continue;
        };
        let existing: Option<(i64,)> = sqlx::query_as(
            "SELECT id FROM review_notes
             WHERE lesson_id = $1 AND category = 'review_notes' AND note_text = $2
             LIMIT 1",
        )
        .bind(lesson_id)
        .bind(professor_notes)
        .fetch_optional(pool)
        .await?;
        if existing.is_some() {
            report.duplicates += 1;
            continue;
        }
        if !dry_run {
            sqlx::query(
                "INSERT INTO review_notes(lesson_id, author_user_id, severity, category, note_text, status)
                 VALUES($1, $2, 'note', 'review_notes', $3, 'accepted')",
            )
            .bind(lesson_id)
            .bind(actor_user_id)
            .bind(professor_notes)
            .execute(pool)
            .await?;
        }
        report.inserted += 1;
    }
    Ok(report)
}

fn required_lesson_payload_missing_fields(parsed: &Value) -> AppResult<Vec<String>> {
    let obj = parsed
        .as_object()
        .ok_or_else(|| AppError::new(StatusCode::BAD_REQUEST, "payload_json must be an object"))?;

    let mut missing = Vec::new();

    let required_string_fields = [
        "key",
        "title",
        "trackTitle",
        "unitTitle",
        "whyItMatters",
        "lessonOpener",
        "lessonSummary",
        "synthesisPrompt",
        "nextLessonBridge",
    ];
    for field in required_string_fields {
        if !has_non_empty_string(obj.get(field)) {
            missing.push(field.to_string());
        }
    }

    let required_non_empty_arrays = [
        "narrativeFlow",
        "objectives",
        "prerequisites",
        "conceptChunks",
        "quickChecks",
        "workedExamples",
        "practiceSets",
        "commonMistakes",
    ];
    for field in required_non_empty_arrays {
        let is_valid = obj
            .get(field)
            .and_then(Value::as_array)
            .is_some_and(|items| !items.is_empty());
        if !is_valid {
            missing.push(field.to_string());
        }
    }

    let concept_chunks_valid = obj
        .get("conceptChunks")
        .and_then(Value::as_array)
        .and_then(|chunks| chunks.first())
        .and_then(Value::as_object)
        .is_some_and(|chunk| {
            has_non_empty_string(chunk.get("heading"))
                && (has_non_empty_string(chunk.get("explainLikeCoach"))
                    || has_non_empty_string(chunk.get("formalNote")))
        });
    if !concept_chunks_valid {
        missing.push("conceptChunks.content".to_string());
    }

    Ok(missing)
}

fn validate_canonical_lesson_payload(parsed: &Value) -> AppResult<()> {
    let obj = parsed
        .as_object()
        .ok_or_else(|| AppError::new(StatusCode::BAD_REQUEST, "payload_json must be an object"))?;
    let missing = required_lesson_payload_missing_fields(parsed)?;
    if !missing.is_empty() {
        return Err(AppError::new(
            StatusCode::BAD_REQUEST,
            format!(
                "Instructionally empty lesson payload. Missing/empty required fields: {}",
                missing.join(", ")
            ),
        ));
    }
    if let Some(modules) = obj.get("modules") {
        let modules_arr = modules.as_array().ok_or_else(|| {
            AppError::new(
                StatusCode::BAD_REQUEST,
                "modules must be an array when provided",
            )
        })?;
        for module in modules_arr {
            let module_obj = module.as_object().ok_or_else(|| {
                AppError::new(StatusCode::BAD_REQUEST, "module entries must be objects")
            })?;
            for f in ["id", "title", "type"] {
                if module_obj
                    .get(f)
                    .and_then(|v| v.as_str())
                    .unwrap_or("")
                    .trim()
                    .is_empty()
                {
                    return Err(AppError::new(
                        StatusCode::BAD_REQUEST,
                        format!("Module missing required field: {f}"),
                    ));
                }
            }
            let steps = module_obj
                .get("steps")
                .and_then(|v| v.as_array())
                .ok_or_else(|| {
                    AppError::new(StatusCode::BAD_REQUEST, "module.steps must be an array")
                })?;
            for step in steps {
                let step_obj = step.as_object().ok_or_else(|| {
                    AppError::new(StatusCode::BAD_REQUEST, "step entries must be objects")
                })?;
                for f in ["id", "title", "type"] {
                    if step_obj
                        .get(f)
                        .and_then(|v| v.as_str())
                        .unwrap_or("")
                        .trim()
                        .is_empty()
                    {
                        return Err(AppError::new(
                            StatusCode::BAD_REQUEST,
                            format!("Step missing required field: {f}"),
                        ));
                    }
                }
            }
        }
    }
    Ok(())
}

async fn maybe_promote_first_admin(state: &AppState, user_id: i64, email: &str) -> AppResult<()> {
    if state.cfg.first_admin_email.is_empty() || norm_email(email) != state.cfg.first_admin_email {
        return Ok(());
    }
    let admin_count: (i64,) =
        sqlx::query_as("SELECT COUNT(*) as count FROM users WHERE role = 'admin'")
            .fetch_one(&state.pool)
            .await?;
    if admin_count.0 == 0 {
        sqlx::query("UPDATE users SET role = 'admin' WHERE id = $1")
            .bind(user_id)
            .execute(&state.pool)
            .await?;
    }
    Ok(())
}

async fn register(
    State(state): State<AppState>,
    Json(payload): Json<UserCreate>,
) -> AppResult<impl IntoResponse> {
    let email = norm_email(&payload.email);
    let exists: Option<(i64,)> = sqlx::query_as("SELECT id FROM users WHERE email = $1")
        .bind(&email)
        .fetch_optional(&state.pool)
        .await?;
    if exists.is_some() {
        return Err(AppError::new(
            StatusCode::CONFLICT,
            "Email already registered",
        ));
    }
    let hashed = hash_password(&payload.password)?;
    let row = sqlx::query_as::<_, UserPublic>(
        "INSERT INTO users(email, full_name, hashed_password, tier, role, is_active) VALUES($1, $2, $3, 'free', 'student', 1)
         RETURNING id, email, full_name, tier, role, is_active, created_at",
    )
    .bind(email)
    .bind(payload.full_name.trim())
    .bind(hashed)
    .fetch_one(&state.pool)
    .await?;
    maybe_promote_first_admin(&state, row.id, &row.email).await?;
    let user = sqlx::query_as::<_, UserPublic>(
        "SELECT id, email, full_name, tier, role, is_active, created_at FROM users WHERE id = $1",
    )
    .bind(row.id)
    .fetch_one(&state.pool)
    .await?;
    Ok((StatusCode::CREATED, Json(user)))
}

async fn login(
    State(state): State<AppState>,
    Json(payload): Json<UserLogin>,
) -> AppResult<Json<TokenResponse>> {
    let email = norm_email(&payload.email);
    let row: Option<(i64, String, String)> =
        sqlx::query_as("SELECT id, email, hashed_password FROM users WHERE email = $1")
            .bind(&email)
            .fetch_optional(&state.pool)
            .await?;
    let (user_id, stored_email, hash) =
        row.ok_or_else(|| AppError::new(StatusCode::UNAUTHORIZED, "Invalid email or password"))?;
    if !verify_password(&hash, &payload.password) {
        return Err(AppError::new(
            StatusCode::UNAUTHORIZED,
            "Invalid email or password",
        ));
    }
    maybe_promote_first_admin(&state, user_id, &stored_email).await?;
    Ok(Json(TokenResponse {
        access_token: token_for(&state.cfg, &stored_email)?,
        token_type: "bearer".to_string(),
    }))
}

async fn me(State(state): State<AppState>, headers: HeaderMap) -> AppResult<Json<UserPublic>> {
    Ok(Json(current_user(&headers, &state).await?))
}

async fn catalog(State(state): State<AppState>) -> AppResult<Json<Vec<CourseWithModules>>> {
    let courses: Vec<CoursePublic> = sqlx::query_as(
        "SELECT slug, title, description, level, is_premium FROM courses ORDER BY id",
    )
    .fetch_all(&state.pool)
    .await?;
    let mut output = Vec::new();
    for c in courses {
        let modules: Vec<CourseModule> = sqlx::query_as(
            "SELECT slug, title, description, module_order, estimated_minutes FROM modules WHERE course_id = (SELECT id FROM courses WHERE slug = $1) ORDER BY module_order",
        )
        .bind(&c.slug)
        .fetch_all(&state.pool)
        .await?;
        let mut module_objs = Vec::new();
        for m in modules {
            let lessons: Vec<CourseLesson> = sqlx::query_as(
                "SELECT slug, title, summary, lesson_order, estimated_minutes, track, route_path FROM lessons WHERE module_id = (
                    SELECT id FROM modules WHERE slug = $1 AND course_id = (SELECT id FROM courses WHERE slug = $2)
                ) ORDER BY lesson_order",
            )
            .bind(&m.slug)
            .bind(&c.slug)
            .fetch_all(&state.pool)
            .await?;
            module_objs.push(ModuleWithLessons {
                slug: m.slug,
                title: m.title,
                description: m.description,
                module_order: m.module_order,
                estimated_minutes: m.estimated_minutes,
                lessons,
            });
        }
        output.push(CourseWithModules {
            slug: c.slug,
            title: c.title,
            description: c.description,
            level: c.level,
            is_premium: c.is_premium == 1,
            modules: module_objs,
        });
    }
    Ok(Json(output))
}

async fn record_progress(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ProgressEventCreate>,
) -> AppResult<Json<ProgressEventPublic>> {
    let user = current_user(&headers, &state).await?;
    let row = sqlx::query_as::<_, ProgressEventPublic>(
        "INSERT INTO progress_events(user_id, course_slug, module_slug, lesson_slug, status, score, time_spent_seconds)
         VALUES($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, course_slug, module_slug, lesson_slug, status, score, time_spent_seconds, created_at",
    )
    .bind(user.id)
    .bind(payload.course_slug)
    .bind(payload.module_slug)
    .bind(payload.lesson_slug)
    .bind(payload.status.unwrap_or_else(|| "completed".to_string()))
    .bind(payload.score)
    .bind(payload.time_spent_seconds)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn completed_lesson_keys(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<CompletedLessonKeys>> {
    let user = current_user(&headers, &state).await?;
    let rows: Vec<(String, String, String)> =
        sqlx::query_as("SELECT DISTINCT course_slug, module_slug, lesson_slug FROM progress_events WHERE user_id = $1 AND status = 'completed'")
            .bind(user.id)
            .fetch_all(&state.pool)
            .await?;
    let keys = rows
        .into_iter()
        .map(|(c, m, l)| format!("{c}::{m}::{l}"))
        .collect::<Vec<_>>();
    Ok(Json(CompletedLessonKeys { keys }))
}

async fn dashboard(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<LearningDashboard>> {
    let user = current_user(&headers, &state).await?;
    let total_lessons: (i64,) = sqlx::query_as("SELECT COUNT(*) as count FROM lessons")
        .fetch_one(&state.pool)
        .await?;
    let completed_lessons: (i64,) =
        sqlx::query_as("SELECT COUNT(DISTINCT course_slug || '::' || module_slug || '::' || lesson_slug) FROM progress_events WHERE user_id = $1 AND status = 'completed'")
            .bind(user.id)
            .fetch_one(&state.pool)
            .await?;
    let recent_progress: Vec<ProgressEventPublic> = sqlx::query_as(
        "SELECT id, course_slug, module_slug, lesson_slug, status, score, time_spent_seconds, created_at
         FROM progress_events WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10",
    )
    .bind(user.id)
    .fetch_all(&state.pool)
    .await?;
    let badges: Vec<BadgePublic> = sqlx::query_as(
        "SELECT id, badge_key, badge_type, title, description, course_slug, module_slug, awarded_at
         FROM badge_awards WHERE user_id = $1 ORDER BY awarded_at DESC",
    )
    .bind(user.id)
    .fetch_all(&state.pool)
    .await?;
    let completion_percent = if total_lessons.0 == 0 {
        0.0
    } else {
        (completed_lessons.0 as f64 / total_lessons.0 as f64) * 100.0
    };
    Ok(Json(LearningDashboard {
        completed_lessons: completed_lessons.0,
        total_lessons: total_lessons.0,
        completion_percent,
        streak_days: 0,
        recent_progress,
        badges,
    }))
}

async fn profile(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<LearningProfile>> {
    let user = current_user(&headers, &state).await?;
    let total_lessons: (i64,) = sqlx::query_as("SELECT COUNT(*) as count FROM lessons")
        .fetch_one(&state.pool)
        .await?;
    let completed_lessons: (i64,) =
        sqlx::query_as("SELECT COUNT(DISTINCT course_slug || '::' || module_slug || '::' || lesson_slug) FROM progress_events WHERE user_id = $1 AND status = 'completed'")
            .bind(user.id)
            .fetch_one(&state.pool)
            .await?;
    let badges: Vec<BadgePublic> = sqlx::query_as(
        "SELECT id, badge_key, badge_type, title, description, course_slug, module_slug, awarded_at
         FROM badge_awards WHERE user_id = $1 ORDER BY awarded_at DESC",
    )
    .bind(user.id)
    .fetch_all(&state.pool)
    .await?;
    let completion_percent = if total_lessons.0 == 0 {
        0.0
    } else {
        (completed_lessons.0 as f64 / total_lessons.0 as f64) * 100.0
    };
    Ok(Json(LearningProfile {
        user,
        completed_lessons: completed_lessons.0,
        total_lessons: total_lessons.0,
        completion_percent,
        streak_days: 0,
        badges,
    }))
}

async fn learning_lesson_payload(
    State(state): State<AppState>,
    Path((track_slug, unit_slug, lesson_slug)): Path<(String, String, String)>,
) -> AppResult<Json<Value>> {
    let payload: Option<(String,)> = sqlx::query_as(
        "SELECT lr.payload_json
         FROM curriculum_lessons l
         JOIN curriculum_units u ON u.id = l.unit_id
         JOIN curriculum_tracks t ON t.id = u.track_id
         JOIN lesson_revisions lr ON lr.id = l.published_revision_id
         WHERE t.slug = $1 AND u.slug = $2 AND l.slug = $3",
    )
    .bind(track_slug)
    .bind(unit_slug)
    .bind(lesson_slug)
    .fetch_optional(&state.pool)
    .await?;
    let payload_json = payload
        .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Published lesson payload not found"))?
        .0;
    let parsed: Value = serde_json::from_str(&payload_json).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Invalid published payload: {e}"),
        )
    })?;
    Ok(Json(parsed))
}

async fn list_users(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<Vec<UserPublic>>> {
    let current = current_user(&headers, &state).await?;
    require_roles(&current, &["admin"])?;
    let users: Vec<UserPublic> =
        sqlx::query_as("SELECT id, email, full_name, tier, role, is_active, created_at FROM users ORDER BY created_at DESC")
            .fetch_all(&state.pool)
            .await?;
    Ok(Json(users))
}

async fn update_user_role(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(user_id): Path<i64>,
    Json(payload): Json<UserRoleUpdate>,
) -> AppResult<Json<UserPublic>> {
    let current = current_user(&headers, &state).await?;
    require_roles(&current, &["admin"])?;
    if !["student", "content_editor", "admin"].contains(&payload.role.as_str()) {
        return Err(AppError::new(StatusCode::BAD_REQUEST, "Invalid role"));
    }
    let changed =
        sqlx::query("UPDATE users SET role = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind(payload.role)
            .bind(user_id)
            .execute(&state.pool)
            .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "User not found"));
    }
    let user = sqlx::query_as::<_, UserPublic>(
        "SELECT id, email, full_name, tier, role, is_active, created_at FROM users WHERE id = $1",
    )
    .bind(user_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(user))
}

fn cms_enabled(state: &AppState) -> AppResult<()> {
    if state.cfg.cms_enabled {
        Ok(())
    } else {
        Err(AppError::new(
            StatusCode::SERVICE_UNAVAILABLE,
            "CMS is disabled",
        ))
    }
}

async fn cms_user(headers: &HeaderMap, state: &AppState) -> AppResult<UserPublic> {
    let user = current_user(headers, state).await?;
    require_roles(&user, &["admin", "content_editor"])?;
    cms_enabled(state)?;
    Ok(user)
}

async fn list_tracks(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<Vec<CurriculumTrackPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<CurriculumTrackPublic> =
        sqlx::query_as("SELECT id, slug, title, description, track_order, is_published FROM curriculum_tracks ORDER BY track_order")
            .fetch_all(&state.pool)
            .await?;
    Ok(Json(rows))
}

#[derive(Serialize)]
struct CmsTreeLesson {
    id: i64,
    slug: String,
    title: String,
    status: String,
    severity: String,
}
#[derive(Serialize)]
struct CmsTreeUnit {
    id: i64,
    slug: String,
    title: String,
    lessons: Vec<CmsTreeLesson>,
}
#[derive(Serialize)]
struct CmsTreeTrack {
    id: i64,
    slug: String,
    title: String,
    units: Vec<CmsTreeUnit>,
}
#[derive(Serialize)]
struct CmsTreeResponse {
    tracks: Vec<CmsTreeTrack>,
}

async fn cms_tree(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<CmsTreeResponse>> {
    let _ = cms_user(&headers, &state).await?;
    let tracks: Vec<CurriculumTrackPublic> =
        sqlx::query_as("SELECT id, slug, title, description, track_order, is_published FROM curriculum_tracks ORDER BY track_order")
            .fetch_all(&state.pool)
            .await?;
    let mut out_tracks = Vec::new();
    for track in tracks {
        let units: Vec<CurriculumUnitPublic> = sqlx::query_as(
            "SELECT id, track_id, slug, title, description, unit_order, is_published FROM curriculum_units WHERE track_id = $1 ORDER BY unit_order",
        )
        .bind(track.id)
        .fetch_all(&state.pool)
        .await?;
        let mut out_units = Vec::new();
        for unit in units {
            let rows: Vec<(i64, String, String, String)> = sqlx::query_as(
                "SELECT l.id, l.slug, l.title, l.status FROM curriculum_lessons l WHERE l.unit_id = $1 ORDER BY l.lesson_order",
            )
            .bind(unit.id)
            .fetch_all(&state.pool)
            .await?;
            let mut lessons = Vec::new();
            for (lesson_id, slug, title, status) in rows {
                let sev: Option<(String,)> = sqlx::query_as(
                    "SELECT severity FROM review_notes WHERE lesson_id = $1 ORDER BY
                      CASE severity WHEN 'blocker' THEN 4 WHEN 'major' THEN 3 WHEN 'minor' THEN 2 ELSE 1 END DESC,
                      created_at DESC LIMIT 1",
                )
                .bind(lesson_id)
                .fetch_optional(&state.pool)
                .await?;
                lessons.push(CmsTreeLesson {
                    id: lesson_id,
                    slug,
                    title,
                    status,
                    severity: sev.map(|v| v.0).unwrap_or_else(|| "note".to_string()),
                });
            }
            out_units.push(CmsTreeUnit {
                id: unit.id,
                slug: unit.slug,
                title: unit.title,
                lessons,
            });
        }
        out_tracks.push(CmsTreeTrack {
            id: track.id,
            slug: track.slug,
            title: track.title,
            units: out_units,
        });
    }
    Ok(Json(CmsTreeResponse { tracks: out_tracks }))
}

#[derive(Serialize)]
struct ReviewQueueRow {
    lesson_id: i64,
    lesson_title: String,
    status: String,
    highest_severity: String,
    note_count: i64,
}

async fn cms_review_queue(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<Vec<ReviewQueueRow>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<(i64, String, String, i64, Option<String>)> = sqlx::query_as(
        "SELECT
            l.id,
            l.title,
            l.status,
            COUNT(rn.id) as note_count,
            (
              SELECT rn2.severity FROM review_notes rn2
              WHERE rn2.lesson_id = l.id
              ORDER BY CASE rn2.severity WHEN 'blocker' THEN 4 WHEN 'major' THEN 3 WHEN 'minor' THEN 2 ELSE 1 END DESC,
                       rn2.created_at DESC
              LIMIT 1
            ) as highest
         FROM curriculum_lessons l
         LEFT JOIN review_notes rn ON rn.lesson_id = l.id
         GROUP BY l.id, l.title, l.status, l.updated_at
         ORDER BY note_count DESC, l.updated_at DESC",
    )
    .fetch_all(&state.pool)
    .await?;
    Ok(Json(
        rows.into_iter()
            .map(
                |(lesson_id, lesson_title, status, note_count, highest)| ReviewQueueRow {
                    lesson_id,
                    lesson_title,
                    status,
                    highest_severity: highest.unwrap_or_else(|| "note".to_string()),
                    note_count,
                },
            )
            .collect(),
    ))
}

async fn create_track(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<CurriculumTrackCreate>,
) -> AppResult<Json<CurriculumTrackPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let row = sqlx::query_as::<_, CurriculumTrackPublic>(
        "INSERT INTO curriculum_tracks(slug, title, description, track_order, is_published)
         VALUES($1, $2, $3, $4, 0)
         RETURNING id, slug, title, description, track_order, is_published",
    )
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.description.unwrap_or_default())
    .bind(payload.track_order.unwrap_or(1))
    .fetch_one(&state.pool)
    .await
    .map_err(|e| AppError::new(StatusCode::CONFLICT, format!("Track create failed: {e}")))?;
    Ok(Json(row))
}

async fn update_track(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(track_id): Path<i64>,
    Json(payload): Json<CurriculumTrackCreate>,
) -> AppResult<Json<CurriculumTrackPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query(
        "UPDATE curriculum_tracks
         SET slug = $1, title = $2, description = $3, track_order = COALESCE($4, track_order), updated_at = CURRENT_TIMESTAMP
         WHERE id = $5",
    )
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.description.unwrap_or_default())
    .bind(payload.track_order)
    .bind(track_id)
    .execute(&state.pool)
    .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Track not found"));
    }
    let row: CurriculumTrackPublic = sqlx::query_as(
        "SELECT id, slug, title, description, track_order, is_published FROM curriculum_tracks WHERE id = $1",
    )
    .bind(track_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn delete_track(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(track_id): Path<i64>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query("DELETE FROM curriculum_tracks WHERE id = $1")
        .bind(track_id)
        .execute(&state.pool)
        .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Track not found"));
    }
    Ok(StatusCode::NO_CONTENT)
}

async fn reorder_tracks(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ReorderPayload>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    for (index, id) in payload.ordered_ids.iter().enumerate() {
        sqlx::query("UPDATE curriculum_tracks SET track_order = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind((index as i64) + 1)
            .bind(id)
            .execute(&state.pool)
            .await?;
    }
    Ok(StatusCode::OK)
}

async fn list_units(
    State(state): State<AppState>,
    headers: HeaderMap,
    Query(query): Query<UnitsQuery>,
) -> AppResult<Json<Vec<CurriculumUnitPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows = if let Some(track_id) = query.track_id {
        sqlx::query_as::<_, CurriculumUnitPublic>(
            "SELECT id, track_id, slug, title, description, unit_order, is_published FROM curriculum_units WHERE track_id = $1 ORDER BY unit_order",
        )
        .bind(track_id)
        .fetch_all(&state.pool)
        .await?
    } else {
        sqlx::query_as::<_, CurriculumUnitPublic>(
            "SELECT id, track_id, slug, title, description, unit_order, is_published FROM curriculum_units ORDER BY unit_order",
        )
        .fetch_all(&state.pool)
        .await?
    };
    Ok(Json(rows))
}

async fn create_unit(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<CurriculumUnitCreate>,
) -> AppResult<Json<CurriculumUnitPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let track_exists: Option<(i64,)> =
        sqlx::query_as("SELECT id FROM curriculum_tracks WHERE id = $1")
            .bind(payload.track_id)
            .fetch_optional(&state.pool)
            .await?;
    if track_exists.is_none() {
        return Err(AppError::new(
            StatusCode::BAD_REQUEST,
            "Cannot create a unit without a valid parent track. Select or create a track first.",
        ));
    }
    let row = sqlx::query_as::<_, CurriculumUnitPublic>(
        "INSERT INTO curriculum_units(track_id, slug, title, description, unit_order, is_published)
         VALUES($1, $2, $3, $4, $5, 0)
         RETURNING id, track_id, slug, title, description, unit_order, is_published",
    )
    .bind(payload.track_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.description.unwrap_or_default())
    .bind(payload.unit_order.unwrap_or(1))
    .fetch_one(&state.pool)
    .await
    .map_err(|e| AppError::new(StatusCode::CONFLICT, format!("Unit create failed: {e}")))?;
    Ok(Json(row))
}

async fn update_unit(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(unit_id): Path<i64>,
    Json(payload): Json<CurriculumUnitCreate>,
) -> AppResult<Json<CurriculumUnitPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query(
        "UPDATE curriculum_units
         SET track_id = $1, slug = $2, title = $3, description = $4, unit_order = COALESCE($5, unit_order), updated_at = CURRENT_TIMESTAMP
         WHERE id = $6",
    )
    .bind(payload.track_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.description.unwrap_or_default())
    .bind(payload.unit_order)
    .bind(unit_id)
    .execute(&state.pool)
    .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Unit not found"));
    }
    let row: CurriculumUnitPublic = sqlx::query_as(
        "SELECT id, track_id, slug, title, description, unit_order, is_published FROM curriculum_units WHERE id = $1",
    )
    .bind(unit_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn delete_unit(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(unit_id): Path<i64>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query("DELETE FROM curriculum_units WHERE id = $1")
        .bind(unit_id)
        .execute(&state.pool)
        .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Unit not found"));
    }
    Ok(StatusCode::NO_CONTENT)
}

async fn reorder_units(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ReorderPayload>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    for (index, id) in payload.ordered_ids.iter().enumerate() {
        sqlx::query("UPDATE curriculum_units SET unit_order = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind((index as i64) + 1)
            .bind(id)
            .execute(&state.pool)
            .await?;
    }
    Ok(StatusCode::OK)
}

async fn list_lessons(
    State(state): State<AppState>,
    headers: HeaderMap,
    Query(query): Query<LessonsQuery>,
) -> AppResult<Json<Vec<CurriculumLessonPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows = if let Some(unit_id) = query.unit_id {
        sqlx::query_as::<_, CurriculumLessonPublic>(
            "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id
             FROM curriculum_lessons WHERE unit_id = $1 ORDER BY lesson_order",
        )
        .bind(unit_id)
        .fetch_all(&state.pool)
        .await?
    } else {
        sqlx::query_as::<_, CurriculumLessonPublic>(
            "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id
             FROM curriculum_lessons ORDER BY lesson_order",
        )
        .fetch_all(&state.pool)
        .await?
    };
    Ok(Json(rows))
}

async fn create_lesson(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<CurriculumLessonCreate>,
) -> AppResult<Json<CurriculumLessonPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let unit_exists: Option<(i64,)> =
        sqlx::query_as("SELECT id FROM curriculum_units WHERE id = $1")
            .bind(payload.unit_id)
            .fetch_optional(&state.pool)
            .await?;
    if unit_exists.is_none() {
        return Err(AppError::new(
            StatusCode::BAD_REQUEST,
            "Cannot create a lesson without a valid parent unit. Select or create a unit first.",
        ));
    }
    let row = sqlx::query_as::<_, CurriculumLessonPublic>(
        "INSERT INTO curriculum_lessons(unit_id, slug, title, lesson_order, status)
         VALUES($1, $2, $3, $4, 'draft')
         RETURNING id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id",
    )
    .bind(payload.unit_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.lesson_order.unwrap_or(1))
    .fetch_one(&state.pool)
    .await
    .map_err(|e| AppError::new(StatusCode::CONFLICT, format!("Lesson create failed: {e}")))?;
    Ok(Json(row))
}

async fn update_lesson(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
    Json(payload): Json<CurriculumLessonCreate>,
) -> AppResult<Json<CurriculumLessonPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query(
        "UPDATE curriculum_lessons
         SET unit_id = $1, slug = $2, title = $3, lesson_order = COALESCE($4, lesson_order), updated_at = CURRENT_TIMESTAMP
         WHERE id = $5",
    )
    .bind(payload.unit_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.lesson_order)
    .bind(lesson_id)
    .execute(&state.pool)
    .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Lesson not found"));
    }
    let row: CurriculumLessonPublic = sqlx::query_as(
        "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id
         FROM curriculum_lessons WHERE id = $1",
    )
    .bind(lesson_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn delete_lesson(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query("DELETE FROM curriculum_lessons WHERE id = $1")
        .bind(lesson_id)
        .execute(&state.pool)
        .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Lesson not found"));
    }
    Ok(StatusCode::NO_CONTENT)
}

async fn reorder_lessons(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ReorderPayload>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    for (index, id) in payload.ordered_ids.iter().enumerate() {
        sqlx::query("UPDATE curriculum_lessons SET lesson_order = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind((index as i64) + 1)
            .bind(id)
            .execute(&state.pool)
            .await?;
    }
    Ok(StatusCode::OK)
}

async fn list_modules(
    State(state): State<AppState>,
    headers: HeaderMap,
    Query(query): Query<ModulesQuery>,
) -> AppResult<Json<Vec<CurriculumModulePublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows = if let Some(lesson_id) = query.lesson_id {
        sqlx::query_as::<_, CurriculumModulePublic>(
            "SELECT id, lesson_id, slug, title, module_type, module_order, archived
             FROM curriculum_modules WHERE lesson_id = $1 ORDER BY module_order",
        )
        .bind(lesson_id)
        .fetch_all(&state.pool)
        .await?
    } else {
        sqlx::query_as::<_, CurriculumModulePublic>(
            "SELECT id, lesson_id, slug, title, module_type, module_order, archived
             FROM curriculum_modules ORDER BY lesson_id, module_order",
        )
        .fetch_all(&state.pool)
        .await?
    };
    Ok(Json(rows))
}

async fn create_module(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<CurriculumModuleCreate>,
) -> AppResult<Json<CurriculumModulePublic>> {
    let _ = cms_user(&headers, &state).await?;
    let row = sqlx::query_as::<_, CurriculumModulePublic>(
        "INSERT INTO curriculum_modules(lesson_id, slug, title, module_type, module_order, archived)
         VALUES($1, $2, $3, $4, $5, 0)
         RETURNING id, lesson_id, slug, title, module_type, module_order, archived",
    )
    .bind(payload.lesson_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.module_type.unwrap_or_else(|| "custom".to_string()))
    .bind(payload.module_order.unwrap_or(1))
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn update_module(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(module_id): Path<i64>,
    Json(payload): Json<CurriculumModuleUpdate>,
) -> AppResult<Json<CurriculumModulePublic>> {
    let _ = cms_user(&headers, &state).await?;
    let existing: CurriculumModulePublic = sqlx::query_as(
        "SELECT id, lesson_id, slug, title, module_type, module_order, archived FROM curriculum_modules WHERE id = $1",
    )
    .bind(module_id)
    .fetch_optional(&state.pool)
    .await?
    .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Module not found"))?;
    sqlx::query(
        "UPDATE curriculum_modules
         SET slug = $1, title = $2, module_type = $3, module_order = $4, archived = $5, updated_at = CURRENT_TIMESTAMP
         WHERE id = $6",
    )
    .bind(payload.slug.unwrap_or(existing.slug))
    .bind(payload.title.unwrap_or(existing.title))
    .bind(payload.module_type.unwrap_or(existing.module_type))
    .bind(payload.module_order.unwrap_or(existing.module_order))
    .bind(payload.archived.unwrap_or(existing.archived))
    .bind(module_id)
    .execute(&state.pool)
    .await?;
    let row: CurriculumModulePublic = sqlx::query_as(
        "SELECT id, lesson_id, slug, title, module_type, module_order, archived FROM curriculum_modules WHERE id = $1",
    )
    .bind(module_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn delete_module(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(module_id): Path<i64>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query("DELETE FROM curriculum_modules WHERE id = $1")
        .bind(module_id)
        .execute(&state.pool)
        .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Module not found"));
    }
    Ok(StatusCode::NO_CONTENT)
}

async fn reorder_modules(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ReorderPayload>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    for (index, id) in payload.ordered_ids.iter().enumerate() {
        sqlx::query("UPDATE curriculum_modules SET module_order = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind((index as i64) + 1)
            .bind(id)
            .execute(&state.pool)
            .await?;
    }
    Ok(StatusCode::OK)
}

async fn list_steps(
    State(state): State<AppState>,
    headers: HeaderMap,
    Query(query): Query<StepsQuery>,
) -> AppResult<Json<Vec<CurriculumStepPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows = if let Some(module_id) = query.module_id {
        sqlx::query_as::<_, CurriculumStepPublic>(
            "SELECT id, module_id, slug, title, step_type, step_order, content_json, archived
             FROM curriculum_steps WHERE module_id = $1 ORDER BY step_order",
        )
        .bind(module_id)
        .fetch_all(&state.pool)
        .await?
    } else {
        sqlx::query_as::<_, CurriculumStepPublic>(
            "SELECT id, module_id, slug, title, step_type, step_order, content_json, archived
             FROM curriculum_steps ORDER BY module_id, step_order",
        )
        .fetch_all(&state.pool)
        .await?
    };
    Ok(Json(rows))
}

async fn create_step(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<CurriculumStepCreate>,
) -> AppResult<Json<CurriculumStepPublic>> {
    let _ = cms_user(&headers, &state).await?;
    if let Some(content_json) = &payload.content_json {
        let _: Value = serde_json::from_str(content_json).map_err(|e| {
            AppError::new(
                StatusCode::BAD_REQUEST,
                format!("Invalid step content_json: {e}"),
            )
        })?;
    }
    let row = sqlx::query_as::<_, CurriculumStepPublic>(
        "INSERT INTO curriculum_steps(module_id, slug, title, step_type, step_order, content_json, archived)
         VALUES($1, $2, $3, $4, $5, $6, 0)
         RETURNING id, module_id, slug, title, step_type, step_order, content_json, archived",
    )
    .bind(payload.module_id)
    .bind(payload.slug)
    .bind(payload.title)
    .bind(payload.step_type.unwrap_or_else(|| "custom".to_string()))
    .bind(payload.step_order.unwrap_or(1))
    .bind(payload.content_json.unwrap_or_else(|| "{}".to_string()))
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn update_step(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(step_id): Path<i64>,
    Json(payload): Json<CurriculumStepUpdate>,
) -> AppResult<Json<CurriculumStepPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let existing: CurriculumStepPublic = sqlx::query_as(
        "SELECT id, module_id, slug, title, step_type, step_order, content_json, archived
         FROM curriculum_steps WHERE id = $1",
    )
    .bind(step_id)
    .fetch_optional(&state.pool)
    .await?
    .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Step not found"))?;
    if let Some(content_json) = &payload.content_json {
        let _: Value = serde_json::from_str(content_json).map_err(|e| {
            AppError::new(
                StatusCode::BAD_REQUEST,
                format!("Invalid step content_json: {e}"),
            )
        })?;
    }
    sqlx::query(
        "UPDATE curriculum_steps
         SET slug = $1, title = $2, step_type = $3, step_order = $4, content_json = $5, archived = $6, updated_at = CURRENT_TIMESTAMP
         WHERE id = $7",
    )
    .bind(payload.slug.unwrap_or(existing.slug))
    .bind(payload.title.unwrap_or(existing.title))
    .bind(payload.step_type.unwrap_or(existing.step_type))
    .bind(payload.step_order.unwrap_or(existing.step_order))
    .bind(payload.content_json.unwrap_or(existing.content_json))
    .bind(payload.archived.unwrap_or(existing.archived))
    .bind(step_id)
    .execute(&state.pool)
    .await?;
    let row: CurriculumStepPublic = sqlx::query_as(
        "SELECT id, module_id, slug, title, step_type, step_order, content_json, archived
         FROM curriculum_steps WHERE id = $1",
    )
    .bind(step_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn delete_step(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(step_id): Path<i64>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    let changed = sqlx::query("DELETE FROM curriculum_steps WHERE id = $1")
        .bind(step_id)
        .execute(&state.pool)
        .await?;
    if changed.rows_affected() == 0 {
        return Err(AppError::new(StatusCode::NOT_FOUND, "Step not found"));
    }
    Ok(StatusCode::NO_CONTENT)
}

async fn reorder_steps(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(payload): Json<ReorderPayload>,
) -> AppResult<StatusCode> {
    let _ = cms_user(&headers, &state).await?;
    for (index, id) in payload.ordered_ids.iter().enumerate() {
        sqlx::query("UPDATE curriculum_steps SET step_order = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2")
            .bind((index as i64) + 1)
            .bind(id)
            .execute(&state.pool)
            .await?;
    }
    Ok(StatusCode::OK)
}

async fn list_revisions(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<Vec<LessonRevisionPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<LessonRevisionPublic> = sqlx::query_as(
        "SELECT id, lesson_id, revision_number, payload_json, status, created_at
         FROM lesson_revisions WHERE lesson_id = $1 ORDER BY revision_number DESC",
    )
    .bind(lesson_id)
    .fetch_all(&state.pool)
    .await?;
    Ok(Json(rows))
}

async fn create_revision(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
    Json(payload): Json<LessonRevisionCreate>,
) -> AppResult<Json<LessonRevisionPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let parsed_payload: Value = serde_json::from_str(&payload.payload_json).map_err(|e| {
        AppError::new(
            StatusCode::BAD_REQUEST,
            format!("Invalid payload_json: {e}"),
        )
    })?;
    validate_canonical_lesson_payload(&parsed_payload)?;
    let next_num: (i64,) = sqlx::query_as(
        "SELECT COALESCE(MAX(revision_number), 0) + 1 FROM lesson_revisions WHERE lesson_id = $1",
    )
    .bind(lesson_id)
    .fetch_one(&state.pool)
    .await?;
    let row = sqlx::query_as::<_, LessonRevisionPublic>(
        "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
         VALUES($1, $2, $3, 'draft')
         RETURNING id, lesson_id, revision_number, payload_json, status, created_at",
    )
    .bind(lesson_id)
    .bind(next_num.0)
    .bind(payload.payload_json)
    .fetch_one(&state.pool)
    .await?;
    sqlx::query("UPDATE curriculum_lessons SET latest_revision_id = $1, status = 'draft', updated_at = CURRENT_TIMESTAMP WHERE id = $2")
        .bind(row.id)
        .bind(lesson_id)
        .execute(&state.pool)
        .await?;
    Ok(Json(row))
}

async fn publish_lesson(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<CurriculumLessonPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let latest: Option<(Option<i64>,)> =
        sqlx::query_as("SELECT latest_revision_id FROM curriculum_lessons WHERE id = $1")
            .bind(lesson_id)
            .fetch_optional(&state.pool)
            .await?;
    let latest_id = latest
        .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Lesson not found"))?
        .0
        .ok_or_else(|| AppError::new(StatusCode::BAD_REQUEST, "No revision to publish"))?;
    let latest_payload: (String,) =
        sqlx::query_as("SELECT payload_json FROM lesson_revisions WHERE id = $1")
            .bind(latest_id)
            .fetch_one(&state.pool)
            .await?;
    let latest_parsed: Value = serde_json::from_str(&latest_payload.0).map_err(|e| {
        AppError::new(
            StatusCode::BAD_REQUEST,
            format!("Invalid latest revision payload: {e}"),
        )
    })?;
    let publish_missing = required_lesson_payload_missing_fields(&latest_parsed)?;
    if !publish_missing.is_empty() {
        return Err(AppError::new(
            StatusCode::BAD_REQUEST,
            format!(
                "Publish blocked: latest revision is incomplete. Missing/empty required fields: {}",
                publish_missing.join(", ")
            ),
        ));
    }
    sqlx::query(
        "UPDATE curriculum_lessons SET published_revision_id = $1, status = 'published', updated_at = CURRENT_TIMESTAMP WHERE id = $2",
    )
    .bind(latest_id)
    .bind(lesson_id)
    .execute(&state.pool)
    .await?;
    let row: CurriculumLessonPublic = sqlx::query_as(
        "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id
         FROM curriculum_lessons WHERE id = $1",
    )
    .bind(lesson_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn rollback_lesson(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<CurriculumLessonPublic>> {
    let _ = cms_user(&headers, &state).await?;
    let published: Option<(Option<i64>,)> =
        sqlx::query_as("SELECT published_revision_id FROM curriculum_lessons WHERE id = $1")
            .bind(lesson_id)
            .fetch_optional(&state.pool)
            .await?;
    let current_published = published
        .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Lesson not found"))?
        .0
        .ok_or_else(|| {
            AppError::new(
                StatusCode::BAD_REQUEST,
                "No published revision to rollback from",
            )
        })?;
    let prev: Option<(i64,)> = sqlx::query_as(
        "SELECT id FROM lesson_revisions WHERE lesson_id = $1 AND id < $2 ORDER BY id DESC LIMIT 1",
    )
    .bind(lesson_id)
    .bind(current_published)
    .fetch_optional(&state.pool)
    .await?;
    let prev_id = prev
        .ok_or_else(|| {
            AppError::new(
                StatusCode::BAD_REQUEST,
                "No prior revision available for rollback",
            )
        })?
        .0;
    sqlx::query("UPDATE curriculum_lessons SET published_revision_id = $1, latest_revision_id = $2, status = 'published', updated_at = CURRENT_TIMESTAMP WHERE id = $3")
        .bind(prev_id)
        .bind(prev_id)
        .bind(lesson_id)
        .execute(&state.pool)
        .await?;
    let row: CurriculumLessonPublic = sqlx::query_as(
        "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id
         FROM curriculum_lessons WHERE id = $1",
    )
    .bind(lesson_id)
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

#[derive(Serialize)]
struct CompletenessResult {
    score: i64,
    missing: Vec<String>,
    pass: bool,
}

async fn lesson_completeness(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<CompletenessResult>> {
    let _ = cms_user(&headers, &state).await?;
    let latest: Option<(Option<i64>,)> =
        sqlx::query_as("SELECT latest_revision_id FROM curriculum_lessons WHERE id = $1")
            .bind(lesson_id)
            .fetch_optional(&state.pool)
            .await?;
    let latest_id = latest
        .ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Lesson not found"))?
        .0
        .ok_or_else(|| AppError::new(StatusCode::BAD_REQUEST, "No latest revision"))?;
    let payload: (String,) =
        sqlx::query_as("SELECT payload_json FROM lesson_revisions WHERE id = $1")
            .bind(latest_id)
            .fetch_one(&state.pool)
            .await?;
    let parsed: Value = serde_json::from_str(&payload.0).map_err(|e| {
        AppError::new(
            StatusCode::BAD_REQUEST,
            format!("Invalid revision json: {e}"),
        )
    })?;
    let missing = required_lesson_payload_missing_fields(&parsed)?;
    let score = (100 - (missing.len() as i64 * 8)).max(0);
    Ok(Json(CompletenessResult {
        score,
        pass: missing.is_empty(),
        missing,
    }))
}

#[derive(Serialize)]
struct DiffResult {
    summary: Vec<String>,
    latest_revision_id: Option<i64>,
    published_revision_id: Option<i64>,
}

async fn lesson_diff(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<DiffResult>> {
    let _ = cms_user(&headers, &state).await?;
    let ids: Option<(Option<i64>, Option<i64>)> = sqlx::query_as(
        "SELECT latest_revision_id, published_revision_id FROM curriculum_lessons WHERE id = $1",
    )
    .bind(lesson_id)
    .fetch_optional(&state.pool)
    .await?;
    let (latest_id, published_id) =
        ids.ok_or_else(|| AppError::new(StatusCode::NOT_FOUND, "Lesson not found"))?;
    let mut summary = Vec::new();
    match (latest_id, published_id) {
        (Some(lat), Some(pub_id)) if lat == pub_id => {
            summary.push("Latest revision is already published.".to_string())
        }
        (Some(_), Some(_)) => {
            summary.push("Latest revision differs from currently published revision.".to_string())
        }
        (Some(_), None) => summary.push("Draft exists but no published revision yet.".to_string()),
        (None, Some(_)) => {
            summary.push("Published revision exists but no latest draft marker.".to_string())
        }
        (None, None) => summary.push("No revisions available yet.".to_string()),
    }
    if let Some(lat) = latest_id {
        let latest_status: Option<(String,)> =
            sqlx::query_as("SELECT status FROM lesson_revisions WHERE id = $1")
                .bind(lat)
                .fetch_optional(&state.pool)
                .await?;
        if let Some((status,)) = latest_status {
            summary.push(format!("Latest revision status: {status}."));
        }
    }
    Ok(Json(DiffResult {
        summary,
        latest_revision_id: latest_id,
        published_revision_id: published_id,
    }))
}

async fn create_review_note(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
    Json(payload): Json<ReviewNoteCreate>,
) -> AppResult<Json<ReviewNotePublic>> {
    let user = cms_user(&headers, &state).await?;
    let row = sqlx::query_as::<_, ReviewNotePublic>(
        "INSERT INTO review_notes(lesson_id, author_user_id, severity, category, note_text, status)
         VALUES($1, $2, $3, $4, $5, $6)
         RETURNING id, lesson_id, author_user_id, severity, category, note_text, status, created_at",
    )
    .bind(lesson_id)
    .bind(user.id)
    .bind(payload.severity)
    .bind(payload.category)
    .bind(payload.note_text)
    .bind(payload.status.unwrap_or_else(|| "pending".to_string()))
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn list_review_notes(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<Vec<ReviewNotePublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<ReviewNotePublic> = sqlx::query_as(
        "SELECT id, lesson_id, author_user_id, severity, category, note_text, status, created_at
         FROM review_notes WHERE lesson_id = $1 ORDER BY created_at DESC",
    )
    .bind(lesson_id)
    .fetch_all(&state.pool)
    .await?;
    Ok(Json(rows))
}

async fn create_review_decision(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
    Json(payload): Json<ReviewDecisionCreate>,
) -> AppResult<Json<ReviewDecisionPublic>> {
    let user = cms_user(&headers, &state).await?;
    let row = sqlx::query_as::<_, ReviewDecisionPublic>(
        "INSERT INTO review_decisions(lesson_id, reviewer_user_id, decision, notes)
         VALUES($1, $2, $3, $4)
         RETURNING id, lesson_id, reviewer_user_id, decision, notes, created_at",
    )
    .bind(lesson_id)
    .bind(user.id)
    .bind(payload.decision)
    .bind(payload.notes.unwrap_or_default())
    .fetch_one(&state.pool)
    .await?;
    Ok(Json(row))
}

async fn list_review_decisions(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path(lesson_id): Path<i64>,
) -> AppResult<Json<Vec<ReviewDecisionPublic>>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<ReviewDecisionPublic> = sqlx::query_as(
        "SELECT id, lesson_id, reviewer_user_id, decision, notes, created_at
         FROM review_decisions WHERE lesson_id = $1 ORDER BY created_at DESC",
    )
    .bind(lesson_id)
    .fetch_all(&state.pool)
    .await?;
    Ok(Json(rows))
}

async fn export_runtime(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> AppResult<Json<Value>> {
    let _ = cms_user(&headers, &state).await?;
    let rows: Vec<(String,)> = sqlx::query_as(
        "SELECT payload_json FROM lesson_revisions WHERE id IN (
            SELECT published_revision_id FROM curriculum_lessons WHERE published_revision_id IS NOT NULL
        )",
    )
    .fetch_all(&state.pool)
    .await?;
    let mut map: HashMap<String, Value> = HashMap::new();
    for (raw,) in rows {
        if let Ok(parsed) = serde_json::from_str::<Value>(&raw)
            && let Some(key) = parsed.get("key").and_then(|v| v.as_str())
        {
            map.insert(key.to_string(), parsed);
        }
    }
    Ok(Json(json!({ "lessons": map, "count": map.len() })))
}

#[derive(Deserialize)]
struct CatalogRoot {
    tracks: Vec<CatalogTrack>,
}
#[derive(Deserialize)]
struct CatalogTrack {
    slug: String,
    title: String,
    description: String,
    #[serde(default)]
    is_premium: bool,
    modules: Vec<CatalogModule>,
}
#[derive(Deserialize)]
struct CatalogModule {
    slug: String,
    title: String,
    description: String,
    estimated_minutes: i64,
    lessons: Vec<CatalogLesson>,
}
#[derive(Deserialize)]
struct CatalogLesson {
    slug: String,
    title: String,
    route_path: String,
    estimated_minutes: i64,
    lesson_order: i64,
}

fn canonical_seeded_lesson_payload(
    track: &CatalogTrack,
    module: &CatalogModule,
    lesson: &CatalogLesson,
) -> Value {
    let key = format!("{}::{}::{}", track.slug, module.slug, lesson.slug);
    let concept_heading = format!("{} in baseball decision making", lesson.title);
    json!({
        "key": key,
        "title": lesson.title,
        "trackTitle": track.title,
        "unitTitle": module.title,
        "whyItMatters": format!("{} helps you make better baseball decisions with real game context.", lesson.title),
        "lessonOpener": format!("Start with {} and connect it to tactical choices on the field.", lesson.title),
        "narrativeFlow": [
            format!("Define {}", lesson.title),
            "Apply the concept to game context",
            "Check understanding with quick prompts"
        ],
        "objectives": [
            format!("Explain the core idea behind {}", lesson.title),
            "Connect the concept to baseball decisions",
            "Use the concept in a simple scenario"
        ],
        "prerequisites": [
            "Basic baseball terminology",
            "Comfort reading simple stats"
        ],
        "conceptChunks": [{
            "heading": concept_heading,
            "explainLikeCoach": format!("Coach view: {} in plain language with baseball examples.", lesson.title),
            "formalNote": format!("Formal note: {} definition and constraints for analysis.", lesson.title)
        }],
        "quickChecks": [{
            "prompt": format!("What does {} tell you in this situation?", lesson.title),
            "answer": format!("It clarifies how to evaluate the decision using {}.", lesson.title),
            "explanation": "Use the concept to justify your reasoning."
        }],
        "workedExamples": [{
            "title": format!("{} worked example", lesson.title),
            "scenario": "Analyze a late-inning decision using the lesson concept.",
            "walkthrough": [
                "Identify the decision context",
                "Apply the lesson concept",
                "Interpret the outcome"
            ],
            "takeaway": format!("{} improves decision quality when used consistently.", lesson.title)
        }],
        "practiceSets": [{
            "level": "warmup",
            "prompts": [{
                "prompt": format!("Apply {} to a simple game scenario.", lesson.title),
                "answer": "Use the core concept and explain your reasoning.",
                "explanation": "Focus on decision process, not just the final choice."
            }]
        }],
        "commonMistakes": [
            "Overfitting one metric to every context",
            "Ignoring game state when interpreting data"
        ],
        "modules": [{
            "id": "module-intro",
            "title": "Topic Setup",
            "type": "narrative",
            "order": 1,
            "steps": [
                { "id": "step-why", "title": "Why this matters", "type": "intro" },
                { "id": "step-opener", "title": "Lesson opener", "type": "intro" }
            ]
        },{
            "id": "module-build",
            "title": "Build Understanding",
            "type": "concept",
            "order": 2,
            "steps": [
                { "id": "step-concepts", "title": "Concept chunks", "type": "build" },
                { "id": "step-checks", "title": "Quick checks", "type": "checkpoint" }
            ]
        },{
            "id": "module-apply",
            "title": "Apply The Ideas",
            "type": "practice",
            "order": 3,
            "steps": [
                { "id": "step-worked", "title": "Worked examples", "type": "apply" },
                { "id": "step-practice", "title": "Practice sets", "type": "apply" }
            ]
        },{
            "id": "module-summary",
            "title": "Wrap + Next Bridge",
            "type": "summary",
            "order": 4,
            "steps": [
                { "id": "step-summary", "title": "Summary and bridge", "type": "summary" }
            ]
        }],
        "lessonSummary": format!("{} gives you a repeatable way to reason about baseball choices.", lesson.title),
        "synthesisPrompt": format!("How would you use {} differently in two game contexts?", lesson.title),
        "nextLessonBridge": "Next, build on this foundation with a deeper tactical application.",
        "professorNotes": "Seeded canonical payload for deterministic CMS hydration."
    })
}

async fn seed_initial_published_revision(
    pool: &PgPool,
    lesson_id: i64,
    payload: &Value,
) -> AppResult<i64> {
    let payload_json = serde_json::to_string(payload).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("serialize canonical payload failed: {e}"),
        )
    })?;
    let revision_id: i64 = sqlx::query_scalar(
        "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
         VALUES($1, 1, $2, 'published')
         RETURNING id",
    )
    .bind(lesson_id)
    .bind(payload_json)
    .fetch_one(pool)
    .await?;
    sqlx::query(
        "UPDATE curriculum_lessons
         SET latest_revision_id = $1, published_revision_id = $2, status = 'published', updated_at = CURRENT_TIMESTAMP
         WHERE id = $3",
    )
    .bind(revision_id)
    .bind(revision_id)
    .bind(lesson_id)
    .execute(pool)
    .await?;
    Ok(revision_id)
}

async fn repair_seeded_lesson_revisions(pool: &PgPool) -> AppResult<()> {
    let candidates = [
        PathBuf::from("app/data/curriculum_catalog.json"),
        PathBuf::from("../backend/app/data/curriculum_catalog.json"),
        PathBuf::from("backend/app/data/curriculum_catalog.json"),
    ];
    let file = candidates.iter().find(|p| p.exists()).ok_or_else(|| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            "Missing curriculum_catalog.json (run `cd frontend && npm run export-curriculum`)",
        )
    })?;
    let text = fs::read_to_string(file).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("read catalog failed: {e}"),
        )
    })?;
    let parsed: CatalogRoot = serde_json::from_str(&text).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("parse catalog failed: {e}"),
        )
    })?;

    for track in &parsed.tracks {
        for module in &track.modules {
            for lesson in &module.lessons {
                let lesson_row: Option<(i64, Option<i64>, Option<i64>)> = sqlx::query_as(
                    "SELECT l.id, l.latest_revision_id, l.published_revision_id
                     FROM curriculum_lessons l
                     JOIN curriculum_units u ON u.id = l.unit_id
                     JOIN curriculum_tracks t ON t.id = u.track_id
                     WHERE t.slug = $1 AND u.slug = $2 AND l.slug = $3",
                )
                .bind(&track.slug)
                .bind(&module.slug)
                .bind(&lesson.slug)
                .fetch_optional(pool)
                .await?;

                let Some((lesson_id, latest_pointer, published_pointer)) = lesson_row else {
                    continue;
                };
                let payload = canonical_seeded_lesson_payload(track, module, lesson);
                let revisions: Vec<(i64, i64, String)> = sqlx::query_as(
                    "SELECT id, revision_number, status
                     FROM lesson_revisions
                     WHERE lesson_id = $1
                     ORDER BY revision_number DESC, id DESC",
                )
                .bind(lesson_id)
                .fetch_all(pool)
                .await?;

                if revisions.is_empty() {
                    seed_initial_published_revision(pool, lesson_id, &payload).await?;
                    continue;
                }

                let has_revision = |id: i64| revisions.iter().any(|(rev_id, _, _)| *rev_id == id);
                let mut target_latest = latest_pointer.filter(|id| has_revision(*id));
                let mut target_published = published_pointer.filter(|id| has_revision(*id));

                if target_latest.is_none() {
                    target_latest = revisions.first().map(|(id, _, _)| *id);
                }
                if target_published.is_none() {
                    target_published = revisions
                        .iter()
                        .find_map(|(id, _, status)| {
                            if status == "published" {
                                Some(*id)
                            } else {
                                None
                            }
                        })
                        .or(target_latest);
                }

                let Some(next_latest_id) = target_latest else {
                    seed_initial_published_revision(pool, lesson_id, &payload).await?;
                    continue;
                };
                let Some(next_published_id) = target_published else {
                    seed_initial_published_revision(pool, lesson_id, &payload).await?;
                    continue;
                };

                sqlx::query("UPDATE lesson_revisions SET status = 'published', updated_at = CURRENT_TIMESTAMP WHERE id = $1")
                    .bind(next_published_id)
                    .execute(pool)
                    .await?;
                sqlx::query(
                    "UPDATE curriculum_lessons
                     SET latest_revision_id = $1, published_revision_id = $2, status = 'published', updated_at = CURRENT_TIMESTAMP
                     WHERE id = $3",
                )
                .bind(next_latest_id)
                .bind(next_published_id)
                .bind(lesson_id)
                .execute(pool)
                .await?;
            }
        }
    }

    Ok(())
}

async fn seed_curriculum(pool: &PgPool) -> AppResult<()> {
    let count: (i64,) = sqlx::query_as("SELECT COUNT(*) FROM courses")
        .fetch_one(pool)
        .await?;
    if count.0 > 0 {
        return Ok(());
    }
    let candidates = [
        PathBuf::from("app/data/curriculum_catalog.json"),
        PathBuf::from("../backend/app/data/curriculum_catalog.json"),
        PathBuf::from("backend/app/data/curriculum_catalog.json"),
    ];
    let file = candidates.iter().find(|p| p.exists()).ok_or_else(|| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            "Missing curriculum_catalog.json (run `cd frontend && npm run export-curriculum`)",
        )
    })?;
    let text = fs::read_to_string(file).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("read catalog failed: {e}"),
        )
    })?;
    let parsed: CatalogRoot = serde_json::from_str(&text).map_err(|e| {
        AppError::new(
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("parse catalog failed: {e}"),
        )
    })?;
    for (track_idx, track) in parsed.tracks.iter().enumerate() {
        let course_id: i64 = sqlx::query_scalar(
            "INSERT INTO courses(slug, title, description, level, is_premium) VALUES($1, $2, $3, 'college', $4) RETURNING id",
        )
        .bind(&track.slug)
        .bind(&track.title)
        .bind(&track.description)
        .bind(if track.is_premium { 1 } else { 0 })
        .fetch_one(pool)
        .await?;
        sqlx::query(
            "INSERT INTO curriculum_tracks(slug, title, description, track_order, is_published) VALUES($1, $2, $3, $4, 1)",
        )
        .bind(&track.slug)
        .bind(&track.title)
        .bind(&track.description)
        .bind((track_idx as i64) + 1)
        .execute(pool)
        .await?;
        let cms_track_id: i64 =
            sqlx::query_scalar("SELECT id FROM curriculum_tracks WHERE slug = $1")
                .bind(&track.slug)
                .fetch_one(pool)
                .await?;

        for (mod_idx, module) in track.modules.iter().enumerate() {
            let module_id: i64 = sqlx::query_scalar(
                "INSERT INTO modules(course_id, slug, title, description, module_order, estimated_minutes)
                 VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
            )
            .bind(course_id)
            .bind(&module.slug)
            .bind(&module.title)
            .bind(&module.description)
            .bind((mod_idx as i64) + 1)
            .bind(module.estimated_minutes)
            .fetch_one(pool)
            .await?;
            sqlx::query(
                "INSERT INTO curriculum_units(track_id, slug, title, description, unit_order, is_published)
                 VALUES($1, $2, $3, $4, $5, 1)",
            )
            .bind(cms_track_id)
            .bind(&module.slug)
            .bind(&module.title)
            .bind(&module.description)
            .bind((mod_idx as i64) + 1)
            .execute(pool)
            .await?;
            let cms_unit_id: i64 = sqlx::query_scalar(
                "SELECT id FROM curriculum_units WHERE track_id = $1 AND slug = $2",
            )
            .bind(cms_track_id)
            .bind(&module.slug)
            .fetch_one(pool)
            .await?;

            for lesson in &module.lessons {
                sqlx::query(
                    "INSERT INTO lessons(module_id, slug, title, summary, lesson_order, estimated_minutes, track, route_path)
                     VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
                )
                .bind(module_id)
                .bind(&lesson.slug)
                .bind(&lesson.title)
                .bind(format!("{} applied to baseball analytics and decision making.", lesson.title))
                .bind(lesson.lesson_order)
                .bind(lesson.estimated_minutes)
                .bind(&track.slug)
                .bind(&lesson.route_path)
                .execute(pool)
                .await?;
                let cms_lesson_id: i64 = sqlx::query_scalar(
                    "INSERT INTO curriculum_lessons(unit_id, slug, title, lesson_order, status)
                     VALUES($1, $2, $3, $4, 'published')
                     RETURNING id",
                )
                .bind(cms_unit_id)
                .bind(&lesson.slug)
                .bind(&lesson.title)
                .bind(lesson.lesson_order)
                .fetch_one(pool)
                .await?;
                let payload = canonical_seeded_lesson_payload(track, module, lesson);
                seed_initial_published_revision(pool, cms_lesson_id, &payload).await?;
            }
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use axum::body::Body;
    use axum::http::{Method, Request};
    use http_body_util::BodyExt as _;
    use serde_json::Value;
    use tower::util::ServiceExt;

    use sqlx::postgres::PgPoolOptions;

    async fn setup_state() -> AppState {
        let url = std::env::var("TEST_DATABASE_URL").unwrap_or_else(|_| {
            "postgres://postgres:postgres@127.0.0.1:5432/academy_test".to_string()
        });
        let pool = PgPoolOptions::new()
            .max_connections(2)
            .connect(&url)
            .await
            .expect("Postgres required for tests (set TEST_DATABASE_URL or start Postgres; see backend/RUNBOOK.md)");
        sqlx::migrate!("./migrations").run(&pool).await.unwrap();
        sqlx::query(
            r#"TRUNCATE curriculum_steps, curriculum_modules, review_decisions, review_notes,
               lesson_revisions, curriculum_lessons, curriculum_units, curriculum_tracks,
               progress_events, assessment_attempts, badge_awards, lessons, modules, courses, users
               RESTART IDENTITY CASCADE"#,
        )
        .execute(&pool)
        .await
        .unwrap();
        let cfg = AppConfig {
            jwt_secret_key: "test-secret".to_string(),
            access_token_expire_minutes: 120,
            first_admin_email: "admin@example.com".to_string(),
            cms_enabled: true,
        };
        seed_curriculum(&pool).await.unwrap();
        repair_seeded_lesson_revisions(&pool).await.unwrap();
        AppState { pool, cfg }
    }

    async fn setup() -> Router {
        build_router(setup_state().await)
    }

    async fn cms_token(app: &Router) -> String {
        let reg_admin = Request::builder()
            .method(Method::POST)
            .uri("/auth/register")
            .header("content-type", "application/json")
            .body(Body::from(
                r#"{"email":"admin@example.com","full_name":"Admin","password":"password123"}"#,
            ))
            .unwrap();
        let _ = app.clone().oneshot(reg_admin).await.unwrap();
        let login = Request::builder()
            .method(Method::POST)
            .uri("/auth/login")
            .header("content-type", "application/json")
            .body(Body::from(
                r#"{"email":"admin@example.com","password":"password123"}"#,
            ))
            .unwrap();
        let login_resp = app.clone().oneshot(login).await.unwrap();
        let bytes = login_resp.into_body().collect().await.unwrap().to_bytes();
        let parsed: Value = serde_json::from_slice(&bytes).unwrap();
        parsed["access_token"].as_str().unwrap().to_string()
    }

    #[tokio::test]
    async fn register_login_and_me_contract() {
        let app = setup().await;
        let req = Request::builder()
            .method(Method::POST)
            .uri("/auth/register")
            .header("content-type", "application/json")
            .body(Body::from(
                r#"{"email":"admin@example.com","full_name":"Admin","password":"password123"}"#,
            ))
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::CREATED);

        let req = Request::builder()
            .method(Method::POST)
            .uri("/auth/login")
            .header("content-type", "application/json")
            .body(Body::from(
                r#"{"email":"admin@example.com","password":"password123"}"#,
            ))
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    #[tokio::test]
    async fn cms_requires_auth() {
        let app = setup().await;
        let req = Request::builder()
            .uri("/cms/tracks")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::UNAUTHORIZED);
    }

    #[tokio::test]
    async fn admin_and_cms_flow_contract() {
        let app = setup().await;
        let reg_student = Request::builder()
            .method(Method::POST)
            .uri("/auth/register")
            .header("content-type", "application/json")
            .body(Body::from(
                r#"{"email":"student@example.com","full_name":"Student","password":"password123"}"#,
            ))
            .unwrap();
        let _ = app.clone().oneshot(reg_student).await.unwrap();
        let token = cms_token(&app).await;

        let users_req = Request::builder()
            .uri("/admin/users")
            .header("Authorization", format!("Bearer {token}"))
            .body(Body::empty())
            .unwrap();
        let users_resp = app.clone().oneshot(users_req).await.unwrap();
        assert_eq!(users_resp.status(), StatusCode::OK);
    }

    #[tokio::test]
    async fn seeded_lessons_have_revision_pointers() {
        let state = setup_state().await;
        let row: (i64, i64,) = sqlx::query_as(
            "SELECT COUNT(*) as total,
                    COUNT(*) FILTER (WHERE latest_revision_id IS NOT NULL AND published_revision_id IS NOT NULL) as with_pointers
             FROM curriculum_lessons",
        )
        .fetch_one(&state.pool)
        .await
        .unwrap();
        assert!(row.0 > 0);
        assert_eq!(row.0, row.1);
    }

    #[tokio::test]
    async fn seeded_lesson_revisions_endpoint_returns_payload_rows() {
        let app = setup().await;
        let token = cms_token(&app).await;
        let lesson_id: i64 = {
            let req = Request::builder()
                .uri("/cms/lessons")
                .header("Authorization", format!("Bearer {token}"))
                .body(Body::empty())
                .unwrap();
            let resp = app.clone().oneshot(req).await.unwrap();
            let bytes = resp.into_body().collect().await.unwrap().to_bytes();
            let lessons: Vec<CurriculumLessonPublic> = serde_json::from_slice(&bytes).unwrap();
            lessons.first().unwrap().id
        };
        let req = Request::builder()
            .uri(format!("/cms/lessons/{lesson_id}/revisions"))
            .header("Authorization", format!("Bearer {token}"))
            .body(Body::empty())
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
        let bytes = resp.into_body().collect().await.unwrap().to_bytes();
        let revisions: Vec<LessonRevisionPublic> = serde_json::from_slice(&bytes).unwrap();
        assert!(!revisions.is_empty());
        assert!(!revisions[0].payload_json.trim().is_empty());
    }

    #[tokio::test]
    async fn repair_backfills_broken_seeded_lesson_pointers() {
        let state = setup_state().await;
        let lesson_id: i64 =
            sqlx::query_scalar("SELECT id FROM curriculum_lessons ORDER BY id LIMIT 1")
                .fetch_one(&state.pool)
                .await
                .unwrap();
        sqlx::query("DELETE FROM lesson_revisions WHERE lesson_id = $1")
            .bind(lesson_id)
            .execute(&state.pool)
            .await
            .unwrap();
        sqlx::query("UPDATE curriculum_lessons SET latest_revision_id = NULL, published_revision_id = NULL WHERE id = $1")
            .bind(lesson_id)
            .execute(&state.pool)
            .await
            .unwrap();

        repair_seeded_lesson_revisions(&state.pool).await.unwrap();

        let repaired: (Option<i64>, Option<i64>) = sqlx::query_as(
            "SELECT latest_revision_id, published_revision_id FROM curriculum_lessons WHERE id = $1",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        assert!(repaired.0.is_some());
        assert!(repaired.1.is_some());
        let revision_count: (i64,) =
            sqlx::query_as("SELECT COUNT(*) FROM lesson_revisions WHERE lesson_id = $1")
                .bind(lesson_id)
                .fetch_one(&state.pool)
                .await
                .unwrap();
        assert!(revision_count.0 >= 1);
    }

    #[tokio::test]
    async fn create_revision_rejects_instructionally_empty_payload() {
        let app = setup().await;
        let token = cms_token(&app).await;
        let lesson_id: i64 = {
            let req = Request::builder()
                .uri("/cms/lessons")
                .header("Authorization", format!("Bearer {token}"))
                .body(Body::empty())
                .unwrap();
            let resp = app.clone().oneshot(req).await.unwrap();
            let bytes = resp.into_body().collect().await.unwrap().to_bytes();
            let lessons: Vec<CurriculumLessonPublic> = serde_json::from_slice(&bytes).unwrap();
            lessons.first().unwrap().id
        };

        let invalid_payload = json!({
            "key": "track::unit::lesson",
            "title": "Broken lesson",
            "trackTitle": "Track",
            "unitTitle": "Unit",
            "whyItMatters": "   ",
            "lessonOpener": "",
            "narrativeFlow": [],
            "objectives": [],
            "prerequisites": [],
            "conceptChunks": [],
            "quickChecks": [],
            "workedExamples": [],
            "practiceSets": [],
            "commonMistakes": [],
            "lessonSummary": "",
            "synthesisPrompt": "",
            "nextLessonBridge": "",
            "professorNotes": ""
        });
        let req = Request::builder()
            .method(Method::POST)
            .uri(format!("/cms/lessons/{lesson_id}/revisions"))
            .header("Authorization", format!("Bearer {token}"))
            .header("content-type", "application/json")
            .body(Body::from(
                json!({ "payload_json": invalid_payload.to_string() }).to_string(),
            ))
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::BAD_REQUEST);
        let body = resp.into_body().collect().await.unwrap().to_bytes();
        let text = String::from_utf8(body.to_vec()).unwrap();
        assert!(text.contains("Instructionally empty lesson payload"));
    }

    #[tokio::test]
    async fn publish_blocks_when_latest_revision_is_incomplete() {
        let state = setup_state().await;
        let app = build_router(state.clone());
        let token = cms_token(&app).await;
        let lesson_id: i64 =
            sqlx::query_scalar("SELECT id FROM curriculum_lessons ORDER BY id LIMIT 1")
                .fetch_one(&state.pool)
                .await
                .unwrap();
        let latest_payload: (String,) = sqlx::query_as(
            "SELECT payload_json
             FROM lesson_revisions
             WHERE lesson_id = $1
             ORDER BY revision_number DESC, id DESC
             LIMIT 1",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        let mut parsed: Value = serde_json::from_str(&latest_payload.0).unwrap();
        parsed["lessonOpener"] = Value::String("   ".to_string());
        let broken_json = serde_json::to_string(&parsed).unwrap();
        let next_revision_number: i64 = sqlx::query_scalar(
            "SELECT COALESCE(MAX(revision_number), 0) + 1 FROM lesson_revisions WHERE lesson_id = $1",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        let broken_revision_id: i64 = sqlx::query_scalar(
            "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
             VALUES($1, $2, $3, 'draft')
             RETURNING id",
        )
        .bind(lesson_id)
        .bind(next_revision_number)
        .bind(broken_json)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        sqlx::query(
            "UPDATE curriculum_lessons SET latest_revision_id = $1, status = 'draft' WHERE id = $2",
        )
        .bind(broken_revision_id)
        .bind(lesson_id)
        .execute(&state.pool)
        .await
        .unwrap();

        let req = Request::builder()
            .method(Method::POST)
            .uri(format!("/cms/lessons/{lesson_id}/publish"))
            .header("Authorization", format!("Bearer {token}"))
            .body(Body::empty())
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::BAD_REQUEST);
        let body = resp.into_body().collect().await.unwrap().to_bytes();
        let text = String::from_utf8(body.to_vec()).unwrap();
        assert!(text.contains("Publish blocked"));
        assert!(text.contains("lessonOpener"));
    }

    #[tokio::test]
    async fn publish_allows_missing_professor_notes_field() {
        let state = setup_state().await;
        let app = build_router(state.clone());
        let token = cms_token(&app).await;
        let lesson_id: i64 =
            sqlx::query_scalar("SELECT id FROM curriculum_lessons ORDER BY id LIMIT 1")
                .fetch_one(&state.pool)
                .await
                .unwrap();
        let latest_payload: (String,) = sqlx::query_as(
            "SELECT payload_json
             FROM lesson_revisions
             WHERE lesson_id = $1
             ORDER BY revision_number DESC, id DESC
             LIMIT 1",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        let mut parsed: Value = serde_json::from_str(&latest_payload.0).unwrap();
        if let Some(obj) = parsed.as_object_mut() {
            obj.remove("professorNotes");
        }
        let payload_json = serde_json::to_string(&parsed).unwrap();
        let next_revision_number: i64 = sqlx::query_scalar(
            "SELECT COALESCE(MAX(revision_number), 0) + 1 FROM lesson_revisions WHERE lesson_id = $1",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        let revision_id: i64 = sqlx::query_scalar(
            "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
             VALUES($1, $2, $3, 'draft')
             RETURNING id",
        )
        .bind(lesson_id)
        .bind(next_revision_number)
        .bind(payload_json)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        sqlx::query(
            "UPDATE curriculum_lessons SET latest_revision_id = $1, status = 'draft' WHERE id = $2",
        )
        .bind(revision_id)
        .bind(lesson_id)
        .execute(&state.pool)
        .await
        .unwrap();

        let req = Request::builder()
            .method(Method::POST)
            .uri(format!("/cms/lessons/{lesson_id}/publish"))
            .header("Authorization", format!("Bearer {token}"))
            .body(Body::empty())
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    #[tokio::test]
    async fn professor_notes_backfill_is_idempotent_and_reports_unmapped() {
        let state = setup_state().await;
        let admin_id: i64 = sqlx::query_scalar("INSERT INTO users(email, full_name, hashed_password, tier, role, is_active) VALUES('seed-admin@example.com','Seed Admin','hash','free','admin',1) RETURNING id")
            .fetch_one(&state.pool)
            .await
            .unwrap();
        assert!(admin_id > 0);
        let lesson_id: i64 =
            sqlx::query_scalar("SELECT id FROM curriculum_lessons ORDER BY id LIMIT 1")
                .fetch_one(&state.pool)
                .await
                .unwrap();
        let payload = json!({
            "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry",
            "professorNotes": "Migrated notes payload"
        });
        let payload_json = payload.to_string();
        let revision_id: i64 = sqlx::query_scalar(
            "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
             VALUES($1, 99, $2, 'draft')
             RETURNING id",
        )
        .bind(lesson_id)
        .bind(payload_json)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        assert!(revision_id > 0);
        sqlx::query(
            "INSERT INTO lesson_revisions(lesson_id, revision_number, payload_json, status)
             VALUES($1, 100, 'not-json', 'draft')",
        )
        .bind(lesson_id)
        .execute(&state.pool)
        .await
        .unwrap();

        let first = backfill_professor_notes_into_review_notes(&state.pool, false)
            .await
            .unwrap();
        assert!(first.inserted >= 1);
        assert!(!first.unmapped.is_empty());
        let note_count_after_first: (i64,) = sqlx::query_as(
            "SELECT COUNT(*) FROM review_notes WHERE lesson_id = $1 AND category = 'review_notes' AND note_text = 'Migrated notes payload'",
        )
        .bind(lesson_id)
        .fetch_one(&state.pool)
        .await
        .unwrap();
        assert_eq!(note_count_after_first.0, 1);

        let second = backfill_professor_notes_into_review_notes(&state.pool, false)
            .await
            .unwrap();
        assert_eq!(second.inserted, 0);
        assert!(second.duplicates >= 1);
    }

    #[tokio::test]
    async fn create_unit_rejects_invalid_parent_track() {
        let app = setup().await;
        let token = cms_token(&app).await;
        let body = json!({
            "track_id": 9_999_999,
            "slug": "orphan-unit",
            "title": "Orphan unit",
            "description": "",
            "unit_order": 1
        });
        let req = Request::builder()
            .method(Method::POST)
            .uri("/cms/units")
            .header("Authorization", format!("Bearer {token}"))
            .header("content-type", "application/json")
            .body(Body::from(body.to_string()))
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::BAD_REQUEST);
        let bytes = resp.into_body().collect().await.unwrap().to_bytes();
        let parsed: Value = serde_json::from_slice(&bytes).unwrap();
        let detail = parsed["detail"].as_str().unwrap();
        assert!(detail.contains("track"));
    }

    #[tokio::test]
    async fn create_lesson_rejects_invalid_parent_unit() {
        let app = setup().await;
        let token = cms_token(&app).await;
        let body = json!({
            "unit_id": 9_999_999,
            "slug": "orphan-lesson",
            "title": "Orphan lesson",
            "lesson_order": 1
        });
        let req = Request::builder()
            .method(Method::POST)
            .uri("/cms/lessons")
            .header("Authorization", format!("Bearer {token}"))
            .header("content-type", "application/json")
            .body(Body::from(body.to_string()))
            .unwrap();
        let resp = app.clone().oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::BAD_REQUEST);
        let bytes = resp.into_body().collect().await.unwrap().to_bytes();
        let parsed: Value = serde_json::from_slice(&bytes).unwrap();
        let detail = parsed["detail"].as_str().unwrap();
        assert!(detail.contains("unit"));
    }
}
