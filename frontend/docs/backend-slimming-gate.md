# Backend-Slimming Decision Gate

## Objective
Keep the platform maintainable as a solo-built, free-to-use product by limiting backend scope to user-state features and moving non-critical functionality to static/content-first delivery.

## Scope Classification
- Must stay backend:
  - Authentication/session validation
  - User profile identity
  - Progress events
  - Badge awarding and retrieval
- Should be static/content-first:
  - Lesson and curriculum rendering
  - Instructor guidance content
  - Marketing/informational pages
- Deferred:
  - Multi-author CMS/editor workflows
  - Instructor content editing permissions

## Anti-Bloat Rule
Do not add new backend endpoints unless at least one is true:
1. The feature depends on authenticated per-user state.
2. The feature requires trusted server-side secrets.
3. The feature cannot be safely implemented in static/content-first frontend architecture.

## Backend Change Checklist
For each proposed endpoint or backend feature:
1. Explain why frontend-only is insufficient.
2. Document persisted data and retention need.
3. Define failure mode and rollback strategy.
4. Estimate maintenance overhead for solo-dev operations.
5. Confirm alignment with no-paywall content policy.
