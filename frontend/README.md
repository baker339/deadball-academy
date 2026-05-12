# Deadball Tracker Frontend

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy env file:
```bash
cp .env.example .env
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Routes

- `/` (home): learning hub—continue panel, curriculum shortcuts, and full **Learning paths** grid (`#learning-paths`). `/learn` redirects here.
- `/learn/tracks`: structured learning paths (track overview); `/learn/curriculum` redirects here (legacy URL)
- `/learn/syllabus`: grading + capstone requirements
- `/login`: student authentication
- `/dashboard`: progress tracking
- `/pricing`: subscriptions and checkout
- `/for-students` and `/for-instructors`: go-to-market pages

## Lesson agent audit

Running `npm run` scripts that execute `scripts/run-lesson-agent-audit.ts` writes generated memos and scorecards under `docs/agent-audit/`. Those artifacts are not ignored by git: treat new files as optional to commit or delete locally.

## Quality Commands

```bash
npm run lint
npm run test
```

The frontend expects backend APIs at `NEXT_PUBLIC_API_BASE_URL`.
