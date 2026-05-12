# SME triage tracker

Structured backlog derived from `frontend/docs/sme-panel-lesson-review.md` §2 **major** rows and §5 **P0** table. Status reflects implementation in-repo (constructed responses merged at `ALL_LESSONS` via unit-closer + integrative-title passes; explicit memo rubric on Algebra synthesis workshop).

**Human expert review (Priority 1):** Credentialed domain and pedagogy review per `frontend/docs/sme-human-expert-review-program.md` is the **authoritative** next step for factual accuracy, misconception risk, and learning effectiveness. Auto-generated §2 tables and `gen-sme-panel-review.ts` heuristics cover inventory and triage signals only—they do not replace human sign-off on trust-bearing physics, environment, Statcast, or inference content.

Legend: **AC** = acceptance criteria.

---

## P0 — Trust and assessment contract

| ID | Area | Target | Acceptance |
| --- | --- | --- | --- |
| P0-TRUST-01 | Aerodynamics / drag–lift numeric claims | `frontend/src/content/lessons/handwritten/handAuthoredPhysicsB.ts` (file-level SME comment + strengthened `Lift And Magnus…` formal note; air-density chunk qualification) | **AC:** No presented Cd/Cl/Re coefficient or seam-regime story reads as league-ground truth without “verify externally” or primary-source pointer. |
| P0-TRUST-02 | Environmental vs physics overlap | Same + paired `handAuthoredPhysicsA.ts` spiral prerequisites | **AC:** Physics revisits cite precalc/geometry lesson keys where titles collide; environmental narratives stay qualitatively consistent with physics framing. |
| P0-CONTRACT-01 | Integrative titles ↔ `summativeReflection` | `frontend/src/content/lessons/allLessons.ts` + `unitCloserSummativeMerge.ts` | **AC:** Every §2 **major** key resolves in runtime store with `summativeReflection` (explicit Algebra synthesis memo + `baseballIntegrativeSummative` / unit-closer merge + `ensureIntegrativeTitleSummatives`). |
| P0-CONTRACT-02 | Blueprint lesson count comment | `frontend/src/content/deepCourseBlueprint.ts` (`collectAllLessonKeys` comment) | **AC:** Comment matches `collectAllLessonKeys(deepCourseBlueprint).length` (currently **278**). |

---

## §2 Major rows — lesson keys (resolved in store)

Each row: canonical key → primary `handAuthored*.ts` module. **AC:** `summativeReflection` present at runtime **or** blueprint title renamed to non-integrative (slug churn avoided; content path used).

| # | Lesson key | Hand-authored module | Status |
| --- | --- | --- | --- |
| 1 | `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::algebra-foundations-synthesis-workshop` | `handAuthoredAlgebra.ts` | Done — explicit summative memo |
| 2 | `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::geometry-foundations-synthesis-lab` | `handAuthoredGeometry.ts` | Done — merge |
| 3 | `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::precalculus-signal-synthesis-workshop` | `handAuthoredTrigPrecalc.ts` | Done — merge |
| 4 | `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::precalculus-capstone-from-angle-to-decision` | `handAuthoredTrigPrecalc.ts` | Done — merge |
| 5 | `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::derivative-application-synthesis-lab` | `handAuthoredCalculus.ts` | Done — merge |
| 6 | `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::multivariable-integration-synthesis-workshop` | `handAuthoredMultivar.ts` | Done — merge |
| 7 | `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::differential-equations-capstone-integration` | `handAuthoredMultivar.ts` | Done — merge |
| 8 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions` | `handAuthoredPhysicsA.ts` | Done — merge |
| 9 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems` | `handAuthoredPhysicsA.ts` | Done — merge |
| 10 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newtonian-synthesis-lab-build-a-full-forward-simulator` | `handAuthoredPhysicsB.ts` | Done — merge |
| 11 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-practicum-inference-and-validation` | `handAuthoredPhysicsB.ts` | Done — merge |
| 12 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::environment-integration-lab-context-aware-distance-models` | `handAuthoredPhysicsB.ts` | Done — merge |
| 13 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::physics-capstone-milestone-technical-memo-draft` | `handAuthoredPhysicsB.ts` | Done — merge |
| 14 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-notebook-practicum-with-review-rubric` | `handAuthoredStatsA.ts` | Done — merge |
| 15 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regression-lab-build-compare-defend` | `handAuthoredStatsB.ts` | Done — merge |
| 16 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-dossier-workshop` | `handAuthoredStatsB.ts` | Done — merge |
| 17 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causality-debate-seminar-and-position-paper` | `handAuthoredStatsB.ts` | Done — merge |
| 18 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-cleaning-practicum-with-qa-checklist` | `handAuthoredStatcastA.ts` | Done — merge |
| 19 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-audit-practicum` | `handAuthoredStatcastB.ts` | Done — merge |
| 20 | `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::climate-impact-scenario-workshop` | `handAuthoredEnvironmental.ts` | Done — merge |
| 21 | `environmental-science-for-baseball-systems::environmental-decision-making::environmental-science-capstone-brief` | `handAuthoredEnvironmental.ts` | Done — merge |
| 22 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::framing-workshop-one-dataset-three-audiences` | `handAuthoredCommunicationA.ts` | Done — merge |
| 23 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::storytelling-critique-lab` | `handAuthoredCommunicationA.ts` | Done — merge |
| 24 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::methodology-rewrite-workshop` | `handAuthoredCommunicationB.ts` | Done — merge |
| 25 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::oral-defense-of-modeling-choices` | `handAuthoredCommunicationB.ts` | Done — integrative-title pass |
| 26 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::debate-formats-for-causal-claims` | `handAuthoredCommunicationB.ts` | Done — integrative-title pass |
| 27 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::live-seminar-simulation` | `handAuthoredCommunicationB.ts` | Done — merge |
| 28 | `communicating-sports-analytics-insights::capstone-composition-and-defense::capstone-topic-selection-and-proposal` | `handAuthoredCommunicationB.ts` | Done — integrative-title pass |
| 29 | `communicating-sports-analytics-insights::capstone-composition-and-defense::mock-defense-and-rubric-scoring` | `handAuthoredCommunicationB.ts` | Done — integrative-title pass |
| 30 | `communicating-sports-analytics-insights::capstone-composition-and-defense::final-capstone-submission-and-reflection` | `handAuthoredCommunicationB.ts` | Done — merge |
| 31 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::from-evidence-to-independent-judgment-decision-memo-workshop` | `handAuthoredCommunicationPaper.ts` | Done — merge |

---

## P1 / P2 follow-ups (not blocking this slice)

| ID | Item | Owner |
| --- | --- | --- |
| FU-01 | Continue diagram debt beyond `distance-formula…` figure | Curriculum media |
| FU-02 | Optional CI: `export-curriculum` lesson_count vs `collectAllLessonKeys` | Platform |
| FU-03 | Biostat “verify externally” rows in stats units (dated dataset citations) | SME stats |
