# Human expert review program (Priority 1)

This document is the **source of truth** for **Priority 1 (P1)** curriculum work: credentialed domain and pedagogy experts judging **factual accuracy**, **completeness against stated objectives**, **clarity and misconception risk**, **assessment alignment**, and **inclusive, accessible examples**. It is intentionally separate from the **structural / automated** SME pipeline described in `frontend/scripts/gen-sme-panel-review.ts` and the generated tables in `frontend/docs/sme-panel-lesson-review.md`.

---

## 1. What the automated generator does and does not cover

The script `gen-sme-panel-review.ts` rebuilds `sme-panel-lesson-review.md` from `deepCourseBlueprint`, `collectAllLessonKeys`, and merged `ALL_LESSONS` documents. Its **§2 per-lesson tables** apply **deterministic heuristics**, not human judgment.

### Covered well (automation)

- **Inventory contract**: lesson key parity between blueprint and `ALL_LESSONS`, counts, and references to registry assertions.
- **Constructed-response signal**: presence of `summativeReflection`, integrative-title token patterns vs missing rubric blocks, coarse coverage counts.
- **IA / navigation risk**: duplicate **display titles** across keys (collision awareness, not semantic equivalence of content).
- **Media debt flags**: bracketed diagram placeholder strings in authored blobs.
- **Triage hooks**: routing hints by **track** and **regex** (Statcast schema drift reminders, aerodynamics / ODE vocabulary, environmental climate keywords, inference/causal vocabulary in stats) and rotating “soft” lenses (math accuracy, writing clarity, worked-example counts, practice-set counts).

### Not covered (requires human P1 review)

- **Truth claims**: whether coefficients, mechanisms, causal stories, or league-ground-truth language are **correct** for the stated level and context.
- **Pedagogical sequence**: whether prerequisites, examples, and cognitive load match the intended learner; whether spiral vs redundancy is effective.
- **Objective ↔ content ↔ assessment fit**: whether objectives are fully addressed in chunks, whether items measure what objectives claim (beyond noting `summativeReflection` exists).
- **Misconception handling**: whether `commonMistakes`, coach voice, and formal notes **prevent** or **reinforce** errors.
- **Ethics, fairness, and representation**: stakeholder framing, dataset bias, harms, and inclusive language—beyond template flags.
- **Primary-source adequacy**: whether citations, “verify externally” qualifiers, and caveats match the strength of claims.

**Bottom line:** Automation produces a **prioritized backlog and consistency scan**. P1 human review decides **whether learners are served correctly**.

---

## 2. Priority 1 — definition

**Priority 1** means review by **credentialed or equivalent domain experts** plus **learning-science / instructional design reviewers** (pairing described in §4). Reviewers use a shared rubric and severity tags; **sign-off** is required before treating high-trust content as learner-ready.

### 2.1 Rubric dimensions (required)

| Dimension | Question the reviewer answers |
| --- | --- |
| **Factual accuracy** | Are definitions, quantities, mechanisms, and data-field descriptions correct and appropriately scoped? Are strong claims qualified or sourced? |
| **Scope completeness vs objectives** | Does the lesson body, examples, and summary address each stated objective without silent gaps? |
| **Clarity and misconceptions** | Is language precise at this level? Do examples, common mistakes, and transitions reduce known confusions? |
| **Assessment alignment** | Do warmup / core / stretch prompts and summative artifacts measure the objectives and avoid construct mismatch? |
| **Accessibility and inclusivity of examples** | Can diverse learners see themselves in scenarios? Are visuals/decisions described accessibly; are placeholders or jargon blockers flagged with remediation? |

### 2.2 Severity tagging (align with triage language)

Use tags consistently so engineering and curriculum can route work:

| Tag | Meaning |
| --- | --- |
| **blocker** | Wrong or misleading content, or assessment that misgrades understanding; must fix before ship. |
| **major** | Material gap, weak alignment, or trust risk that materially affects learning; fix in-wave. |
| **minor** | Improvement that raises quality but does not block correctness. |
| **note** | Observation, optional enhancement, or dependency on external drift (e.g., API docs). |

### 2.3 Sign-off expectations

- **Trust-bearing tracks** (physics aerodynamics, environmental quantitative narratives, Statcast pipelines, causal inference): **domain reviewer** signs factual accuracy; **pedagogy reviewer** signs scaffolding and assessment fit. For **blocker**/**major** findings, both must acknowledge resolution (comment in PR or checklist row marked resolved with initials + date).
- **Capstones and integrative artifacts**: additional **assessment lead** sign-off on rubrics and `summativeReflection` alignment to objectives.
- **Record**: Store outcomes in the lesson’s PR or linked issue; prefer immutable links (commit SHA) when citing reviewed versions of `handAuthored*.ts`.

---

## 3. Wave 1 scope, batching, and ordering

Wave 1 aligns with existing high-trust backlog rows and the **§2 “major”** integrative lessons already enumerated in `frontend/docs/sme-triage-tickets.md`.

### 3.1 Must-include (P0 domain review + physics / environment)

- **`sme-triage-tickets.md` P0 — Trust**: **P0-TRUST-01** and **P0-TRUST-02** (`handAuthoredPhysicsB.ts` lift/drag/air-density and related narrative; paired **`handAuthoredPhysicsA.ts`** prerequisites and title-collision crosswalks). Treat the whole **physics B “environment + aerodynamics + capstone” narrative block** as one logical batch for cross-lesson consistency.
- **High-trust physics / environment chunks** already flagged by automation or P0: lessons in `baseball-physics-foundations` touching **drag, lift, Magnus, Reynolds**, and **`environmental-science-for-baseball-systems`** lessons with climate / humidity / pressure / wind claims.

### 3.2 Statcast and ethics-adjacent batch

- **`data-analysis-with-statcast`** lessons: schema, cleaning, reproducibility—emphasize **data ethics**, **QA**, **leakage**, and **documentation drift** (automation only nudges “verify externally”; humans judge whether the lesson’s guidance is still valid and responsible).

### 3.3 §2 majors and capstones

- All rows under **“§2 Major rows — lesson keys”** in `sme-triage-tickets.md` (synthesis labs, practicums, capstones, communication defenses). Even where merge status is **Done**, P1 confirms **quality** of merged `summativeReflection` and integrative prompts, not just presence.

### 3.4 Suggested batch size and order

| Order | Batch theme | Approx. size | Rationale |
| --- | --- | --- | --- |
| 1 | Physics B: environment integration lab + aerodynamics practicum + adjacent mechanics | 3–6 lessons | Single author file, shared notation and “verify externally” contract; satisfies P0-TRUST-01/02 in one pass. |
| 2 | Statcast: cleaning + reproducibility + schema-heavy practicums | 3–5 lessons | Shared data-literacy and ethics lens; same reviewer pair can hold pipeline assumptions constant. |
| 3 | Cross-track capstones / synthesis / defense lessons from §2 majors | 4–8 per wave | Heavy assessment alignment; schedule after domain batches so rubrics reference corrected upstream narratives. |

**Batch size discipline:** Aim for **5–8 lessons per reviewer-week** for deep reads (full document + objectives + one practice set + summative), or **3 lessons** when bodies include long practicum narratives. Smaller batches beat shallow coverage.

---

## 4. Process

### 4.1 Reviewer pairing

- **Pair A (domain + pedagogy)**: Default for all Wave 1 lessons—e.g., physics or environmental scientist with learning engineer; Statcast analyst with assessment lead for pipeline lessons.
- **Pair B (spot-check)**: For capstones, add **communication / scientific literacy** reviewer when outputs are memos, defenses, or debates.
- **Conflict handling**: If domain and pedagogy disagree, escalate to curriculum lead; document decision in the checklist.

### 4.2 Artifact to produce

Each lesson receives a **completed checklist** (copy into PR description or attach `docs/reviews/<lesson-key>.md`). Minimum fields:

1. Lesson key + title + `handAuthored*.ts` module (from triage table where applicable).
2. Rubric dimension scores (pass / revise) with **one concrete cited snippet** per **blocker** or **major**.
3. Severity table with owner (content vs platform).
4. Sign-off lines (initials + date) for domain and pedagogy.

**PR comment template (short form):**

```text
P1 human review — <lesson key>
Domain: pass | revise (severity: …)
Pedagogy: pass | revise (severity: …)
Blockers: …
Follow-ups: …
Sign-off: <initials YYYY-MM-DD>
```

### 4.3 How outcomes feed back

| Outcome type | Primary edit surface | Secondary |
| --- | --- | --- |
| Narrative, examples, mistakes, objectives text, assessments | **`frontend/src/content/lessons/handwritten/handAuthored*.ts`** (or focused lesson module) | — |
| Display title collisions, unit ordering, lesson **identity** (rename non-integrative) | **`deepCourseBlueprint.ts`** (prefer sparing slug churn) | Coordinate with registry/tests |
| Global contracts (summative merge rules, integrative title policy) | Merge utilities / `allLessons` wiring | Document in triage / PR |

After substantive P1 edits, run targeted checks (e.g. LaTeX smoke tests for math-heavy lessons) as indicated in `sme-panel-lesson-review.md` executive summary; full suite optional for doc-only PRs.

---

## 5. Relationship to other artifacts

| Artifact | Role |
| --- | --- |
| `sme-panel-lesson-review.md` | Auto-generated **scan** and §2 line items—**not** a substitute for P1 sign-off. |
| `sme-triage-tickets.md` | **Backlog and status** for P0/P1/P2; link P1 checklist from rows as work completes. |
| This file (`sme-human-expert-review-program.md`) | **Policy and workflow** for human expert review (P1 accuracy and pedagogy). |

When automation and human review conflict, **human P1 conclusions win** for accuracy and learning effectiveness; update heuristics or authored content accordingly.
