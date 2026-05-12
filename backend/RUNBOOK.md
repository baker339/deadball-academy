# Rust Academy Backend Local Runbook

This runbook runs the Rust Academy API against **PostgreSQL** (SQLx + Axum).

## 1) Run Postgres

**Docker Compose (repo root):**

```bash
docker compose up -d postgres
```

This creates database `academy_rust` with user/password `postgres`/`postgres`.

**Or** use any local Postgres 16+ and create a database (for example `academy_rust`).

## 2) Configure environment

Copy `backend/.env.example` to `backend/.env` and set:

- `ACADEMY_RUST_DATABASE_URL` — `postgres://USER:PASSWORD@HOST:PORT/DATABASE`
- `JWT_SECRET_KEY` — strong secret
- `FIRST_ADMIN_EMAIL` — first user promoted to admin on register

Optional:

- `ACADEMY_RUST_ADDR` (defaults to `127.0.0.1:8000`)
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

Set `CORS_ALLOW_ORIGINS` to every browser origin that calls this API (for example your Vercel URL). Restart after changes.

## 8) Tests

Tests require Postgres. Default URL:

`postgres://postgres:postgres@127.0.0.1:5432/academy_test`

Create the database once:

```bash
docker exec -it "$(docker ps -qf name=postgres)" psql -U postgres -c "CREATE DATABASE academy_test;"
```

(or use your admin client). Override with `TEST_DATABASE_URL` if needed.

```bash
cd backend
cargo test
```

## 9) Deployment (Neon / managed Postgres)

**Recommended: [Neon](https://neon.tech)** (serverless Postgres). Create a project and database in the Neon console, copy the connection string, and set:

- `ACADEMY_RUST_DATABASE_URL` — Neon’s URL, usually with **`?sslmode=require`** (add it if TLS is required and missing).
- Any other managed Postgres (Supabase, RDS, Render Postgres, etc.) works the same way: use the provider’s connection string and TLS parameters as documented.

Also set:

- `ACADEMY_RUST_ADDR=0.0.0.0:$PORT` when the host injects `PORT` (for example Render/Fly).
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

From the repo root: `docker compose up` starts Postgres, the API, and the Next.js frontend. The API waits on the `postgres` service and uses the internal hostname `postgres` in `ACADEMY_RUST_DATABASE_URL`.

For browser access from your laptop, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000`.
