# Rust Academy Backend Local Runbook

This runbook runs the Rust Academy API against **PostgreSQL** (SQLx + Axum).

## 0) What is the database?

**PostgreSQL** is the only database this backend uses. It stores users, curriculum metadata, CMS content, progress, and related tables. On startup the API connects using **`ACADEMY_RUST_DATABASE_URL`** in `backend/.env` (copy from `backend/.env.example`).

**This repo’s local Docker Postgres is published on host port `5433`**, not `5432`, so you can keep **5432** for another Postgres instance (for example work). Inside Docker, the service hostname `postgres` still uses container port **5432**; only the **host** mapping is `5433:5432`.

## 1) Run Postgres

**Docker Compose (repo root):**

```bash
docker compose up -d postgres
```

This creates database **`academy_rust`** with user/password **`postgres`/`postgres`**, reachable from your machine at **`127.0.0.1:5433`**.

**Or** use any Postgres 16+ you already run; set `ACADEMY_RUST_DATABASE_URL` with the correct **host, port, user, password, and database name**.

## 2) Configure environment

Copy `backend/.env.example` to `backend/.env` and set:

- `ACADEMY_RUST_DATABASE_URL` — with Docker as above: `postgres://postgres:postgres@127.0.0.1:5433/academy_rust`
- `JWT_SECRET_KEY` — strong secret
- `FIRST_ADMIN_EMAIL` — first user promoted to admin on register

Optional:

- `ACADEMY_RUST_ADDR` (defaults to `127.0.0.1:8000` when neither is set). If **`PORT`** is set (Render, Fly, Heroku), the API binds to **`0.0.0.0:$PORT`** and **ignores** `ACADEMY_RUST_ADDR` so a wrong baked-in address cannot break deploys.
- `CMS_ENABLED=true`
- `CORS_ALLOW_ORIGINS` — comma-separated browser origins (defaults to local Next.js URLs)

## 3) Stop anything on port 8000 (optional)

```bash
lsof -ti tcp:8000 | xargs -r kill -9
```

## 4) Start the API

```bash
cd backend
cargo run
```

Migrations run automatically on startup.

## 5) Start the frontend

```bash
cd frontend
npm run dev
```

Set `NEXT_PUBLIC_API_BASE_URL` if the API is not on `http://localhost:8000`.

## 6) Smoke checks

1. Register/login (`/auth/register`, `/auth/login`).
2. `/learning/me` returns `role`.
3. Admin and CMS flows (`/admin`, `/cms`).
4. `GET /cms/export/runtime` returns lessons JSON.
5. `GET /health`.

## 7) CORS in production

Set **`CORS_ALLOW_ORIGINS`** on the API host (for example Render) to **every HTTPS origin** that runs your frontend—comma-separated, **no spaces unless you trim** (the app trims each entry), **no trailing slash**.

Example (Vercel production + local dev during testing):

```text
CORS_ALLOW_ORIGINS=https://deadball-academy-qiho.vercel.app,http://localhost:3000
```

If you use **Vercel preview** deployments (`*.vercel.app` with random names), add each preview origin you need, or temporarily add your latest preview URL after deploy.

If this is wrong or unset in production, the browser shows a CORS error on `OPTIONS` / `POST` and the API logs the effective `CORS_ALLOW_ORIGINS` line at startup—fix the env and redeploy.

## 8) Tests

Tests require Postgres. Default URL:

`postgres://postgres:postgres@127.0.0.1:5433/academy_test`

Create the database once (example against this repo’s Docker Postgres on **5433**):

```bash
docker exec -it "$(docker ps -qf name=deadball-academy-postgres)" psql -U postgres -c "CREATE DATABASE academy_test;"
```

(or connect with `psql -h 127.0.0.1 -p 5433 -U postgres …`). Override with `TEST_DATABASE_URL` if needed.

```bash
cd backend
cargo test
```

## 9) Deployment (Neon / managed Postgres)

**Recommended: [Neon](https://neon.tech)** (serverless Postgres). Create a project and database in the Neon console, copy the connection string, and set:

- `ACADEMY_RUST_DATABASE_URL` — Neon’s URL, usually with **`?sslmode=require`** (add it if TLS is required and missing).
- Any other managed Postgres (Supabase, RDS, Render Postgres, etc.) works the same way: use the provider’s connection string and TLS parameters as documented.

Also configure the process:

- **Listen port:** Render (and similar hosts) set **`PORT`**. The API binds **`0.0.0.0:$PORT`** when `PORT` is present. Do **not** set `ACADEMY_RUST_ADDR=0.0.0.0:8000` in the Render dashboard unless the service really listens on 8000 inside the container.
- No SQLite file or persistent disk is required for the API at runtime.

## 10) Migrating data from legacy SQLite → Postgres (lessons / CMS)

If you still have an old **`academy_rust.db`** from the SQLite-backed API, you can copy rows into Postgres **without** losing curriculum and revisions.

1. **Apply schema on the target** (for example Neon): point `ACADEMY_RUST_DATABASE_URL` at Neon and run the API once (`cargo run`), or run `sqlx migrate run` with `DATABASE_URL` set to the same URL so all migrations exist before copying data.
2. **Run the migrator** from `backend/`:

   ```bash
   export ACADEMY_RUST_DATABASE_URL="postgres://USER:PASS@HOST/DB?sslmode=require"
   export SQLITE_SOURCE="/absolute/path/to/academy_rust.db"   # optional; or pass path as first arg
   cargo run --release --bin migrate_sqlite_to_pg -- /absolute/path/to/academy_rust.db --replace
   ```

   - **`--replace`**: truncates application tables (not `_sqlx_migrations`), then copies from SQLite and resets `id` sequences. Use this when repointing a fresh Neon database or when you intentionally want to overwrite app data with the SQLite snapshot.
   - **Omit `--replace`** only if every listed table is already empty; otherwise the tool exits if it sees existing users.

3. **Source schema**: the SQLite file must include the same logical tables the tool expects (including `curriculum_modules` / `curriculum_steps` if your old build had them). Very old dumps missing tables need a schema upgrade on SQLite first or a manual subset export.

## 11) Docker Compose full stack

The Compose file sets **`name: deadball-academy`**, so containers and volumes show under that project name in Docker Desktop (instead of a folder-derived name).

From the repo root: `docker compose up` starts Postgres, the API, and the Next.js frontend. The API uses the **internal** URL `postgres://postgres:postgres@postgres:5432/academy_rust` (hostname `postgres`, container port **5432**).

When you run **only** `docker compose up -d postgres` and the API with `cargo run` on your Mac, use **`127.0.0.1:5433`** in `ACADEMY_RUST_DATABASE_URL` (see section 0).

For browser access from your laptop, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000`.

## 12) Production curriculum rollout (empty database, Neon, CMS, backfill)

When the `courses` table is **empty**, the API runs `seed_curriculum` on startup. That path reads `curriculum_catalog.json` from `app/data/curriculum_catalog.json` (or sibling fallbacks) and inserts parallel rows into both the **LMS-style** tables (`courses`, `modules`, `lessons`, …) and the **CMS curriculum** tables (`curriculum_tracks`, `curriculum_units`, `curriculum_lessons`, …). If the file is missing, startup fails with a message to run the frontend export.

**Greenfield production (Neon or any empty Postgres):**

1. **Generate the catalog in CI or locally** from the same commit you deploy:

   ```bash
   cd frontend && npm run export-curriculum
   ```

   Commit or artifact the updated `backend/app/data/curriculum_catalog.json` (and any generated companion files your pipeline expects) so the runtime image always carries a catalog that matches the shipped lesson keys.

2. **Point `ACADEMY_RUST_DATABASE_URL` at Neon** (or your managed Postgres), run migrations once (`cargo run` or `sqlx migrate run`), then start the API with an **empty** `courses` table so `seed_curriculum` can populate both LMS and CMS skeletons in one pass.

3. **CMS and editorial overrides:** After seeding, authors can publish lesson revisions through CMS flows; runtime may merge CMS-published JSON over hand-authored documents depending on frontend configuration. Treat seed data as the baseline spine, not the final word.

4. **Backfill / replace:** If you already have partial data or an old snapshot, use the SQLite→Postgres migrator in section 10 when appropriate, or truncate application tables intentionally and re-seed—never assume `seed_curriculum` will rewrite non-empty `courses` (it exits early when rows exist).

5. **Frontend alignment:** Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin so metadata, Open Graph URLs, and JSON-LD in the Next.js app resolve consistently with the API’s `CORS_ALLOW_ORIGINS` (section 7).
