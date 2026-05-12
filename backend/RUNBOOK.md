# Rust Academy Backend Local Runbook

This runbook runs the Rust Academy backend locally while keeping frontend API usage unchanged.

## 1) Configure environment

Copy `backend/.env.example` to `backend/.env` and set:

- `FIRST_ADMIN_EMAIL` to your admin account email
- `JWT_SECRET_KEY` to a secure local secret

Optional:

- `ACADEMY_RUST_DATABASE_URL` (defaults to `sqlite://academy_rust.db`)
- `ACADEMY_RUST_ADDR` (defaults to `127.0.0.1:8000`)
- `CMS_ENABLED=true`
- `CORS_ALLOW_ORIGINS` — comma-separated list of allowed browser origins (see below). If unset, defaults to local Next.js dev URLs.

## 2) Stop anything running on port 8000

```bash
lsof -ti tcp:8000 | xargs -r kill -9
```

## 3) Start Rust backend on port 8000

```bash
cd backend
cargo run
```

Or use the helper script:

```bash
cd backend
./scripts/use-rust-backend-local.sh
```

## 4) Start frontend normally

```bash
cd frontend
npm run dev
```

Frontend `apiFetch` defaults to `http://localhost:8000` when `NEXT_PUBLIC_API_BASE_URL` is unset.

## 5) Smoke checks

1. Register/login works (`/auth/register`, `/auth/login`).
2. `/learning/me` returns `role`.
3. Admin page loads and can assign roles (`/admin`).
4. CMS page can create track/unit/lesson, create revision, and publish (`/cms`).
5. `GET /cms/export/runtime` returns `{"lessons": ..., "count": ...}`.

## 6) CORS in production

The API only reflects **allowed origins** from `CORS_ALLOW_ORIGINS` (comma-separated). Include every frontend origin that should call the API directly from the browser, for example:

- Local: `http://localhost:3000,http://127.0.0.1:3000`
- Vercel production: `https://your-app.vercel.app`
- Preview deployments (optional): add patterns your host supports, or use a stable staging URL.

After changing origins or deploying a new frontend hostname, update this variable on the API host and restart the container.

## 7) Deployment sketch (Vercel + container API)

**Frontend (Vercel):** set project root to `frontend/`, build command `npm run build`, output Next defaults. Set `NEXT_PUBLIC_API_BASE_URL` to the public API origin (for example `https://api.example.com`).

**API (Docker):** build `backend/Dockerfile` and run with a **persistent volume** mounted at the SQLite file path referenced by `ACADEMY_RUST_DATABASE_URL` (same single-file SQLite model as local). Expose port **8000** and set `JWT_SECRET_KEY`, `FIRST_ADMIN_EMAIL`, `CORS_ALLOW_ORIGINS`, and `CMS_ENABLED` as required.

**Health checks:** use `GET /health` from your load balancer or platform probe.

## 8) Docker Compose (local full stack)

From the repo root, `docker compose up` builds the API and frontend images. For browser access from the host machine, point `NEXT_PUBLIC_API_BASE_URL` at `http://localhost:8000` (not the internal `backend` hostname) when testing the stack from your laptop.
