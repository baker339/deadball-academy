//! One-off copy of application data from a legacy SQLite `academy_rust.db` into PostgreSQL.
//!
//! Prerequisites:
//! - Target Postgres already has the schema (run the API once against Neon so `sqlx migrate` applies,
//!   or run `sqlx migrate run` with `DATABASE_URL` pointing at Neon).
//! - Source SQLite file is from the pre-Postgres backend (same logical tables/columns).
//!
//! Usage:
//! ```text
//! export ACADEMY_RUST_DATABASE_URL="postgres://USER:PASS@HOST/DB?sslmode=require"
//! cargo run --bin migrate_sqlite_to_pg -- ./path/to/academy_rust.db --replace
//! ```
//!
//! `--replace` truncates all application tables (not `_sqlx_migrations`) before copying. Omit it
//! only when the target tables are already empty.

use std::env;
use std::path::PathBuf;

use anyhow::{Context, bail};
use chrono::{DateTime, NaiveDateTime, Utc};
use rusqlite::Connection as Sqlite;
use sqlx::postgres::PgPoolOptions;
use sqlx::PgPool;

fn parse_sqlite_timestamp(s: &str) -> anyhow::Result<DateTime<Utc>> {
    let s = s.trim();
    if let Ok(dt) = DateTime::parse_from_rfc3339(s) {
        return Ok(dt.with_timezone(&Utc));
    }
    if let Ok(n) = NaiveDateTime::parse_from_str(s, "%Y-%m-%d %H:%M:%S%.f") {
        return Ok(n.and_utc());
    }
    if let Ok(n) = NaiveDateTime::parse_from_str(s, "%Y-%m-%d %H:%M:%S") {
        return Ok(n.and_utc());
    }
    bail!("could not parse timestamp: {s:?}")
}

async fn truncate_app_tables(pg: &PgPool) -> anyhow::Result<()> {
    sqlx::query(
        r#"TRUNCATE curriculum_steps, curriculum_modules, review_decisions, review_notes,
           lesson_revisions, curriculum_lessons, curriculum_units, curriculum_tracks,
           progress_events, assessment_attempts, badge_awards, lessons, modules, courses, users
           RESTART IDENTITY CASCADE"#,
    )
    .execute(pg)
    .await?;
    Ok(())
}

async fn assert_empty_or_replace(pg: &PgPool, replace: bool) -> anyhow::Result<()> {
    let (n,): (i64,) = sqlx::query_as("SELECT COUNT(*)::bigint FROM users")
        .fetch_one(pg)
        .await?;
    if n > 0 && !replace {
        bail!(
            "target Postgres already has {n} user row(s). Re-run with --replace to truncate app tables first, or use an empty database."
        );
    }
    if replace {
        truncate_app_tables(pg).await?;
    }
    Ok(())
}

async fn reset_sequences(pg: &PgPool) -> anyhow::Result<()> {
    let tables = [
        "users",
        "courses",
        "modules",
        "lessons",
        "progress_events",
        "assessment_attempts",
        "badge_awards",
        "curriculum_tracks",
        "curriculum_units",
        "curriculum_lessons",
        "lesson_revisions",
        "review_notes",
        "review_decisions",
        "curriculum_modules",
        "curriculum_steps",
    ];
    for t in tables {
        let max: Option<i64> = sqlx::query_scalar(&format!("SELECT MAX(id) FROM {t}"))
            .fetch_one(pg)
            .await?;
        let seq: Option<String> =
            sqlx::query_scalar(&format!("SELECT pg_get_serial_sequence('{t}', 'id')::text"))
                .fetch_one(pg)
                .await?;
        let Some(seq) = seq else {
            continue;
        };
        let (val, is_called) = match max {
            Some(m) if m > 0 => (m, true),
            _ => (1, false),
        };
        sqlx::query("SELECT setval($1::regclass, $2, $3)")
            .bind(&seq)
            .bind(val)
            .bind(is_called)
            .execute(pg)
            .await
            .with_context(|| format!("setval {seq} for {t}"))?;
    }
    Ok(())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenvy::dotenv().ok();
    let mut args = env::args().skip(1);
    let mut replace = false;
    let mut sqlite_path: Option<PathBuf> = None;
    while let Some(a) = args.next() {
        match a.as_str() {
            "--replace" => replace = true,
            _ if !a.starts_with('-') => sqlite_path = Some(PathBuf::from(a)),
            other => bail!("unknown argument: {other}"),
        }
    }
    let sqlite_path = sqlite_path
        .or_else(|| env::var("SQLITE_SOURCE").ok().map(PathBuf::from))
        .context("pass path to SQLite .db file (arg) or set SQLITE_SOURCE")?;

    let pg_url = env::var("ACADEMY_RUST_DATABASE_URL")
        .context("set ACADEMY_RUST_DATABASE_URL to the target Postgres (e.g. Neon) connection string")?;

    let lite = Sqlite::open(&sqlite_path)
        .with_context(|| format!("open sqlite {}", sqlite_path.display()))?;
    let pg = PgPoolOptions::new()
        .max_connections(3)
        .connect(&pg_url)
        .await
        .context("connect postgres")?;

    assert_empty_or_replace(&pg, replace).await?;

    // --- users
    {
        let mut stmt = lite.prepare("SELECT id, email, full_name, hashed_password, tier, role, is_active, created_at, updated_at FROM users")?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            let id: i64 = r.get(0)?;
            let email: String = r.get(1)?;
            let full_name: String = r.get(2)?;
            let hashed_password: String = r.get(3)?;
            let tier: String = r.get(4)?;
            let role: String = r.get(5)?;
            let is_active: i64 = r.get(6)?;
            let created_at = parse_sqlite_timestamp(&r.get::<_, String>(7)?)?;
            let updated_at = parse_sqlite_timestamp(&r.get::<_, String>(8)?)?;
            sqlx::query(
                "INSERT INTO users (id, email, full_name, hashed_password, tier, role, is_active, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(id)
            .bind(&email)
            .bind(&full_name)
            .bind(&hashed_password)
            .bind(&tier)
            .bind(&role)
            .bind(is_active)
            .bind(created_at)
            .bind(updated_at)
            .execute(&pg)
            .await?;
        }
    }

    // --- courses
    {
        let mut stmt = lite.prepare("SELECT id, slug, title, description, level, is_premium FROM courses")?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO courses (id, slug, title, description, level, is_premium) VALUES ($1,$2,$3,$4,$5,$6)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, String>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- modules
    {
        let mut stmt = lite.prepare(
            "SELECT id, course_id, slug, title, description, module_order, estimated_minutes FROM modules",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO modules (id, course_id, slug, title, description, module_order, estimated_minutes)
                 VALUES ($1,$2,$3,$4,$5,$6,$7)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(r.get::<_, i64>(6)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- lessons
    {
        let mut stmt = lite.prepare(
            "SELECT id, module_id, slug, title, summary, lesson_order, estimated_minutes, track, route_path FROM lessons",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO lessons (id, module_id, slug, title, summary, lesson_order, estimated_minutes, track, route_path)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(r.get::<_, i64>(6)?)
            .bind(r.get::<_, String>(7)?)
            .bind(r.get::<_, String>(8)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- curriculum_tracks
    {
        let mut stmt = lite.prepare(
            "SELECT id, slug, title, description, track_order, is_published, created_at, updated_at FROM curriculum_tracks",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO curriculum_tracks (id, slug, title, description, track_order, is_published, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, String>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, i64>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(6)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(7)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- curriculum_units
    {
        let mut stmt = lite.prepare(
            "SELECT id, track_id, slug, title, description, unit_order, is_published, created_at, updated_at FROM curriculum_units",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO curriculum_units (id, track_id, slug, title, description, unit_order, is_published, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(r.get::<_, i64>(6)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(7)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- curriculum_lessons
    {
        let mut stmt = lite.prepare(
            "SELECT id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id, created_at, updated_at FROM curriculum_lessons",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO curriculum_lessons (id, unit_id, slug, title, lesson_order, status, latest_revision_id, published_revision_id, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, i64>(4)?)
            .bind(r.get::<_, String>(5)?)
            .bind(r.get::<_, Option<i64>>(6)?)
            .bind(r.get::<_, Option<i64>>(7)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(9)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- lesson_revisions
    {
        let mut stmt = lite.prepare(
            "SELECT id, lesson_id, revision_number, payload_json, status, created_at, updated_at FROM lesson_revisions",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO lesson_revisions (id, lesson_id, revision_number, payload_json, status, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, i64>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(5)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(6)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- curriculum_modules
    {
        let mut stmt = lite.prepare(
            "SELECT id, lesson_id, slug, title, module_type, module_order, archived, created_at, updated_at FROM curriculum_modules",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO curriculum_modules (id, lesson_id, slug, title, module_type, module_order, archived, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(r.get::<_, i64>(6)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(7)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- curriculum_steps
    {
        let mut stmt = lite.prepare(
            "SELECT id, module_id, slug, title, step_type, step_order, content_json, archived, created_at, updated_at FROM curriculum_steps",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO curriculum_steps (id, module_id, slug, title, step_type, step_order, content_json, archived, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, i64>(5)?)
            .bind(r.get::<_, String>(6)?)
            .bind(r.get::<_, i64>(7)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(9)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- progress_events
    {
        let mut stmt = lite.prepare(
            "SELECT id, user_id, course_slug, module_slug, lesson_slug, status, score, time_spent_seconds, created_at FROM progress_events",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO progress_events (id, user_id, course_slug, module_slug, lesson_slug, status, score, time_spent_seconds, created_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, String>(5)?)
            .bind(r.get::<_, Option<f64>>(6)?)
            .bind(r.get::<_, Option<i64>>(7)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- assessment_attempts
    {
        let mut stmt = lite.prepare(
            "SELECT id, user_id, lesson_slug, score, max_score, submitted_at FROM assessment_attempts",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO assessment_attempts (id, user_id, lesson_slug, score, max_score, submitted_at)
                 VALUES ($1,$2,$3,$4,$5,$6)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, f64>(3)?)
            .bind(r.get::<_, f64>(4)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(5)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- badge_awards
    {
        let mut stmt = lite.prepare(
            "SELECT id, user_id, badge_key, badge_type, title, description, course_slug, module_slug, awarded_at FROM badge_awards",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO badge_awards (id, user_id, badge_key, badge_type, title, description, course_slug, module_slug, awarded_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, String>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, String>(5)?)
            .bind(r.get::<_, String>(6)?)
            .bind(r.get::<_, Option<String>>(7)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- review_notes
    {
        let mut stmt = lite.prepare(
            "SELECT id, lesson_id, author_user_id, severity, category, note_text, status, created_at, updated_at FROM review_notes",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO review_notes (id, lesson_id, author_user_id, severity, category, note_text, status, created_at, updated_at)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, i64>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(r.get::<_, String>(5)?)
            .bind(r.get::<_, String>(6)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(7)?)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(8)?)?)
            .execute(&pg)
            .await?;
        }
    }

    // --- review_decisions
    {
        let mut stmt = lite.prepare(
            "SELECT id, lesson_id, reviewer_user_id, decision, notes, created_at FROM review_decisions",
        )?;
        let mut rows = stmt.query([])?;
        while let Some(r) = rows.next()? {
            sqlx::query(
                "INSERT INTO review_decisions (id, lesson_id, reviewer_user_id, decision, notes, created_at)
                 VALUES ($1,$2,$3,$4,$5,$6)",
            )
            .bind(r.get::<_, i64>(0)?)
            .bind(r.get::<_, i64>(1)?)
            .bind(r.get::<_, i64>(2)?)
            .bind(r.get::<_, String>(3)?)
            .bind(r.get::<_, String>(4)?)
            .bind(parse_sqlite_timestamp(&r.get::<_, String>(5)?)?)
            .execute(&pg)
            .await?;
        }
    }

    reset_sequences(&pg).await?;

    eprintln!(
        "Done. Copied rows from {} into Postgres. Sequences reset.",
        sqlite_path.display()
    );
    Ok(())
}
