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

## 9) Deployment (Render / etc.)

- Use **Render Postgres** (or another managed Postgres). Set `ACADEMY_RUST_DATABASE_URL` to the **connection string** from the provider (often includes `sslmode=require`).
- Set `ACADEMY_RUST_ADDR=0.0.0.0:$PORT` when the host injects `PORT`.
- No SQLite disk is required.

## 10) Docker Compose full stack

From the repo root: `docker compose up` starts Postgres, the API, and the Next.js frontend. The API waits on the `postgres` service and uses the internal hostname `postgres` in `ACADEMY_RUST_DATABASE_URL`.

For browser access from your laptop, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000`.
