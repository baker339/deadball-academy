# Lesson alignment report (Baseball–STEM rubric)

**Status:** Living document. Initial version establishes the review matrix and batching plan; per-lesson human sign-off rows are filled incrementally by track.

**Rubric:** [`docs/lesson-editor-rubric.md`](lesson-editor-rubric.md) (canonical criteria and anchors).

**Machine-readable mirror:** [`frontend/src/content/lessonEditorRubric.ts`](../frontend/src/content/lessonEditorRubric.ts).

**Preflight automation (structural only, not editorial judgment):**

- `runRubricLessonAudit` in [`frontend/src/content/lessonRubricAudit.ts`](../frontend/src/content/lessonRubricAudit.ts) — Baseball–STEM heuristic scorecards (anchoring, diagrams, worked examples, uncertainty language, biomechanics non-medical boundary, integrative summatives, and related checks).
- `runRubricLessonAuditForTrack` / `buildTrackRubricAgentPack` in [`frontend/src/content/lessonRubricAuditByTrack.ts`](../frontend/src/content/lessonRubricAuditByTrack.ts) — same heuristics, scoped to one curriculum track for batched review.
- `runSinglePassLessonAudit` in [`frontend/src/content/lessonAgentAudit.ts`](../frontend/src/content/lessonAgentAudit.ts) — legacy four-dimension pass (legitimacy, cohesion, teaching effectiveness, verbiage).

Editors use the **Editor checklist** on each lesson’s CMS page (`ComposerV2`) for human sign-off alongside these tools.

### Agent-ready review packs (one file per track)

From the `frontend/` directory, regenerate markdown packs and a compact summary:

```bash
cd frontend && npm run rubric:agent-packs
```

This writes [`docs/rubric-agent-packs/`](rubric-agent-packs/) — one `.md` per track (slug filename) with embedded heuristic scorecards, rubric ids as a short checklist (full text remains in the rubric doc), and blank **Agent qualitative review** sections.

**Workflow:** assign **one Cursor agent (or human) per pack file** to fill the qualitative sections against [`docs/lesson-editor-rubric.md`](lesson-editor-rubric.md). Optionally use [`docs/rubric-agent-packs/summary.json`](rubric-agent-packs/summary.json) for per-track tallies after regeneration.

---

## 1. Review matrix (per lesson)

| Column | Question |
|--------|----------|
| **Topic fidelity** | Does the lesson teach the unit’s stated STEM topic with correct definitions and scope? |
| **Baseball anchoring** | Are there multiple concrete baseball scenarios (roles, situations, measurable outcomes)? |
| **Examples / worked** | Do worked examples show assumptions → steps → takeaway; does the practice ladder match objectives? |
| **Diagrams / math** | Where geometry, forces, workflows, or data matter, are there purposeful figures (with alt text)? |
| **Prerequisites** | Are prerequisites honest about reading level and prior-lesson dependencies? |
| **Tone** | For body and environment topics: non-diagnostic, uncertainty-aware, no fake precision? |

**Severity tags for human notes:** `OK` · `minor` · `major` · `blocker` (align with `ReviewSeverity` in code).

---

## 2. Batching plan (by track slug)

Reviewers work **one track at a time**. Prefer **`npm run rubric:agent-packs`** (from `frontend/`) so each track has a dedicated file under `docs/rubric-agent-packs/` with preflight heuristics plus qualitative templates.

Alternatively, for each lesson, add a row to the section’s table (or attach a linked CSV in PR) with: `lessonKey`, reviewer initials, date, matrix summary, and free-text notes.

| Order | Track slug | Human review status |
|------:|------------|---------------------|
| 1 | `algebra-foundations-for-baseball-analytics` | Pending |
| 2 | `geometry-foundations-for-baseball-context` | Pending |
| 3 | `trigonometry-and-precalculus-for-baseball-modeling` | Pending |
| 4 | `calculus-i-and-ii-for-baseball-dynamics` | Pending |
| 5 | `multivariable-calculus-and-differential-equations` | Pending |
| 6 | `environmental-science-for-baseball-systems` | Pending |
| 7 | `baseball-physics-foundations` | Pending |
| 8 | `statistical-modeling-for-baseball` | Pending |
| 9 | `data-analysis-with-statcast` | Pending |
| 10 | `biological-mechanics-of-baseball` | Pending (new track; authored against rubric v1) |
| 11 | `communicating-sports-analytics-insights` | Pending |

---

## 3. Track tables (append rows as reviews land)

### Template row

| lessonKey | Reviewer | Date | Summary | Notes |
|-----------|----------|------|---------|-------|
| _example-track_::unit-slug::lesson-slug | AB | 2026-05-11 | OK across matrix | Diagram alt text verified |

Replace `_example-track_` with the active track slug for the batch. Keep keys identical to `collectAllLessonKeys` output.

---

## 4. Ownership

Assign **one owner per track** — either one **pack file** in `docs/rubric-agent-packs/` (recommended) or one batch owner for the legacy table below — to avoid duplicate reviews. When a track moves to “Complete,” update the status column in section 2 and archive detailed notes in git history or an appendix file if the table grows too large.
