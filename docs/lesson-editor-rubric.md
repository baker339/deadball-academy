# Lesson editor rubric — Baseball–STEM quality

**Audience:** Content authors, editors, and reviewers using the CMS or hand-authored `LessonDocument` sources.  
**Canonical machine list:** [`frontend/src/content/lessonEditorRubric.ts`](../frontend/src/content/lessonEditorRubric.ts) (`LESSON_EDITOR_RUBRIC`) — keep this document aligned when criteria change.

---

## How to use this rubric

1. **While drafting:** Work top to bottom; fail-fast on **STEM topic fidelity** and **non-medical boundary** before polishing prose.  
2. **While reviewing:** Mark each criterion pass/fail with one sentence of evidence (quote or section pointer).  
3. **With automation:** `runRubricLessonAudit` (frontend tests) flags **heuristic** misses only — never a substitute for human judgment on tone, diagram correctness, or sourcing.

---

## Criteria (anchors match `LESSON_EDITOR_RUBRIC.id`)

### `stem_topic_fidelity`

The lesson teaches the **named STEM topic** (math, physics, stats, biology, etc.) with correct definitions and in-lesson practice. Baseball scenarios illustrate and motivate; they do not replace the technical core.

### `baseball_anchoring`

Use **specific** baseball anchors: roles (SP, RP, catcher, OF), game situations (RISP, double play turn, stolen base attempt), or measurable quantities (exit velocity bands, pitch clock stress, inning workload). Vague “in sports” copy is insufficient.

### `examples_and_worked`

Include at least one **worked example** with explicit assumptions and a **practice ladder** (warmup / core / stretch). Prompts should reward correct use of definitions in baseball language.

### `visuals_where_helpful`

If the concept involves spatial structure, forces, data flow, or timelines, add a **diagram** or `figure` with **alt text**. Skip decorative imagery.

### `integrity_uncertainty`

Call out **what is unknown**, **what would update beliefs**, and **when to verify externally** (e.g. health claims, climate coefficients, proprietary tracking). Avoid false precision.

### `non_medical_boundary`

**Blocker-level** for physiology content: never **diagnose**, **prescribe treatment**, or imply certainty about injury from mechanics or data. Teach concepts and research questions; direct players with symptoms to medical staff.

### `prerequisites_and_objectives`

Objectives must be **observable** (“explain…”, “compute…”, “interpret…”). Prerequisites must match actual dependencies on prior lessons or reading level.

### `assessment_alignment`

Checkpoints and MCQs should map to **objectives** and **common mistakes** listed in the lesson. Prefer distractors that reveal baseball-specific misconceptions.

### `accessibility_language`

Define terms on first use; keep paragraphs speakable; charts and diagrams have alt text. (Primarily **human-reviewed** — automation does not grade reading level.)

### `summative_when_integrative`

If the title signals synthesis (**Workshop**, **Lab**, **Defense**, **Capstone**, etc.), include **`summativeReflection`** or rename the lesson to match a narrower scope.

---

## CMS mechanics (brief)

- Prefer structured blocks in the composer that map to runtime sections (`whyItMatters`, `conceptChunks`, `workedExamples`, etc.).  
- After publish, run **`npm run test`** (includes rubric audit) before merging large curriculum changes.

---

## Related documents

- [`docs/brand-brief.md`](brand-brief.md) — product voice and naming.  
- [`docs/lesson-alignment-report.md`](lesson-alignment-report.md) — human alignment matrix and preflight snapshot (generated/updated during quality passes).
