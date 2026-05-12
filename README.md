# Deadball Tracker

A full-stack baseball analytics learning platform with a college-level curriculum and student progress tracking.

## Tech Stack

- **Frontend:** Next.js (TypeScript), Tailwind CSS, React
- **Backend:** Rust (Axum), SQLx, PostgreSQL
- **Data Storage:** PostgreSQL (managed or Docker locally; see `backend/RUNBOOK.md`)

## Monorepo Structure

```
backend/   # Rust API (auth, learning, admin, CMS)
frontend/  # Next.js app, curriculum, auth UI
shared/    # (optional) shared types, docs
```

## Core Capabilities

- Student authentication (register/login) and learning dashboard progress tracking
- Curriculum catalog with four college-level tracks and syllabus artifacts
- Monetization foundation (free + student paid + classroom tier plans)
- Marketing surfaces for students and instructors
- Note: Legacy chart-heavy analytics pages have been removed (see “Charts” below).

## Setup Instructions

### Backend
1. `cd backend`
2. Set backend environment variables in `backend/.env` (at minimum: `JWT_SECRET_KEY`, `FIRST_ADMIN_EMAIL`).
3. Run the Rust API:

```bash
cargo run
```

### Frontend
1. `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

The frontend expects backend APIs at `NEXT_PUBLIC_API_BASE_URL` (defaults to `http://localhost:8000`).

## Charts

Chart-heavy analytics routes (for example `/analytics` and `/explore/*`) have been removed from the codebase; older bookmarks may 404. The supported stack is the Rust API in `backend/` only.

## Curriculum rollout

The curriculum is shipped unit-by-unit. The canonical plan is in [shared/remaining-units-rollout-plan.md](shared/remaining-units-rollout-plan.md); follow its per-unit quality gates and delivery cadence.

Operationally:

- Author and review lessons through the CMS (`/cms`) and publish them.
- Keep the runtime lesson bundle in sync using [frontend/scripts/sync-cms-runtime.ts](frontend/scripts/sync-cms-runtime.ts).
- Verify everything resolves correctly in the lesson library at `/learn/library` after each unit.

## Quality and CI

- Backend tests: `cd backend && cargo test` (requires Postgres; see `backend/RUNBOOK.md`)
- Frontend lint + tests: `cd frontend && npm run lint && npm run test`
- GitHub Actions workflow: `.github/workflows/ci.yml`

---

For more details, see [backend/RUNBOOK.md](backend/RUNBOOK.md) and [frontend/README.md](frontend/README.md).