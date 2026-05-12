# Rubric agent pack: Statistical Modeling For Baseball

**Track slug:** `statistical-modeling-for-baseball`

**Rubric (canonical):** [lesson-editor-rubric.md](../lesson-editor-rubric.md)

**Preflight heuristics:** `runRubricLessonAuditForTrack` / `lessonRubricAudit.ts` (automatable criteria only; not editorial judgment).

---

## Agent instructions

You are reviewing **Baseball–STEM** curriculum lessons against the **lesson editor rubric**.

**Before qualitative review**, treat the embedded heuristic scorecard (from `runRubricLessonAudit` / `lessonRubricAudit.ts`) as **preflight only**—not a substitute for editorial judgment.

**Criteria to evaluate** (confirm each against the lesson content; full guidance in the rubric doc):

- `stem_topic_fidelity` — **STEM topic fidelity**
- `baseball_anchoring` — **Baseball anchoring**
- `examples_and_worked` — **Examples and worked reasoning**
- `visuals_where_helpful` — **Diagrams and figures**
- `integrity_uncertainty` — **Integrity and uncertainty**
- `non_medical_boundary` — **Non-medical boundary (body lessons)**
- `prerequisites_and_objectives` — **Prerequisites and objectives**
- `assessment_alignment` — **Assessment alignment**
- `accessibility_language` — **Accessibility and language**
- `summative_when_integrative` — **Summative reflection (integrative titles)**

**For each lesson:**
- Work through every row in `LESSON_EDITOR_RUBRIC` (use id + label above; open the linked rubric doc for definitions).
- When you flag an issue, give a **severity** (`blocker`, `major`, `minor`, or `note`) and **notes**.
- **Cite short excerpts** from the lesson (field names or quoted lines) when useful.
- Prefer constructive, specific fixes (what to add, change, or verify).

**Do not** perform medical diagnosis or prescribe treatment. For body/biomechanics content, enforce **coach-education / non-clinical** framing and defer clinical questions to qualified staff (see `non_medical_boundary`).

**Output:** complete the per-lesson **Agent qualitative review** sections in this pack with your severity + notes (separate from heuristic bullets above).

---

## Lesson overview (heuristic preflight)

| # | Lesson key | Title | overallSeverity | Finding count |
|---:|---|---|---|---:|
| 1 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::what-is-a-data-generating-process` | What Is A Data Generating Process? | **note** | 0 |
| 2 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::randomness-structure-and-measurement-error` | Randomness, Structure, And Measurement Error | **note** | 0 |
| 3 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::selection-effects-in-public-baseball-data` | Selection Effects In Public Baseball Data | **note** | 0 |
| 4 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::temporal-dependence-across-games-and-seasons` | Temporal Dependence Across Games And Seasons | **note** | 0 |
| 5 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::confounding-patterns-in-outcome-metrics` | Confounding Patterns In Outcome Metrics | **note** | 0 |
| 6 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::hierarchical-structure-player-team-park-era` | Hierarchical Structure: Player, Team, Park, Era | **note** | 0 |
| 7 | `statistical-modeling-for-baseball::data-generating-processes-in-baseball::dgp-case-study-home-run-rate-dynamics` | DGP Case Study: Home Run Rate Dynamics | **note** | 0 |
| 8 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-framing-questions-before-charts` | EDA Framing: Questions Before Charts | **note** | 0 |
| 9 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::distribution-shape-tail-behavior-and-robust-summaries` | Distribution Shape, Tail Behavior, And Robust Summaries | **note** | 0 |
| 10 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::stratification-and-simpson-s-paradox-in-baseball` | Stratification And Simpson's Paradox In Baseball | **note** | 0 |
| 11 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::missingness-mechanisms-and-practical-handling` | Missingness Mechanisms And Practical Handling | **note** | 0 |
| 12 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::leakage-risks-during-data-filtering` | Leakage Risks During Data Filtering | **note** | 0 |
| 13 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::sampling-windows-and-seasonality-bias` | Sampling Windows And Seasonality Bias | **note** | 0 |
| 14 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::outliers-signal-noise-or-data-issue` | Outliers: Signal, Noise, Or Data Issue? | **note** | 0 |
| 15 | `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-notebook-practicum-with-review-rubric` | EDA Notebook Practicum With Review Rubric | **note** | 0 |
| 16 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::linear-regression-baseline-for-interpretability` | Linear Regression Baseline For Interpretability | **note** | 0 |
| 17 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::feature-engineering-for-batted-ball-outcomes` | Feature Engineering For Batted-Ball Outcomes | **note** | 0 |
| 18 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::logistic-regression-for-home-run-probability` | Logistic Regression For Home Run Probability | **note** | 0 |
| 19 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::interaction-terms-launch-angle-exit-velocity` | Interaction Terms: Launch Angle × Exit Velocity | **note** | 0 |
| 20 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regularization-l1-l2-for-stability` | Regularization (L1/L2) For Stability | **note** | 0 |
| 21 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::nonlinearity-handling-splines-and-basis-expansion` | Nonlinearity Handling: Splines And Basis Expansion | **note** | 0 |
| 22 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::model-comparison-aic-bic-and-cross-validation` | Model Comparison: AIC, BIC, And Cross-Validation | **note** | 0 |
| 23 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::calibration-curves-and-probability-reliability` | Calibration Curves And Probability Reliability | **note** | 0 |
| 24 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::thresholding-and-decision-utility` | Thresholding And Decision Utility | **note** | 0 |
| 25 | `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regression-lab-build-compare-defend` | Regression Lab: Build, Compare, Defend | **note** | 0 |
| 26 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::sampling-distributions-in-practice` | Sampling Distributions In Practice | **note** | 0 |
| 27 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::confidence-intervals-for-means-effects-and-probabilities` | Confidence Intervals For Means, Effects, And Probabilities | **note** | 0 |
| 28 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::bootstrap-methods-for-complex-metrics` | Bootstrap Methods For Complex Metrics | **note** | 0 |
| 29 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::hypothesis-testing-and-practical-significance` | Hypothesis Testing And Practical Significance | **note** | 0 |
| 30 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-splits-cross-validation-and-drift` | Validation Splits, Cross-Validation, And Drift | **note** | 0 |
| 31 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::error-decomposition-bias-variance-noise` | Error Decomposition: Bias, Variance, Noise | **note** | 0 |
| 32 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::robustness-checks-and-sensitivity-analysis` | Robustness Checks And Sensitivity Analysis | **note** | 0 |
| 33 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::communicating-uncertainty-without-overclaiming` | Communicating Uncertainty Without Overclaiming | **note** | 0 |
| 34 | `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-dossier-workshop` | Validation Dossier Workshop | **note** | 0 |
| 35 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::association-is-not-causation-formal-definitions` | Association Is Not Causation: Formal Definitions | **note** | 0 |
| 36 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::dags-for-baseball-questions` | DAGs For Baseball Questions | **note** | 0 |
| 37 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::confounders-mediators-and-colliders` | Confounders, Mediators, And Colliders | **note** | 0 |
| 38 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::counterfactual-reasoning-for-policy-rule-changes` | Counterfactual Reasoning For Policy/Rule Changes | **note** | 0 |
| 39 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::natural-experiments-and-quasi-experimental-design` | Natural Experiments And Quasi-Experimental Design | **note** | 0 |
| 40 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causal-claims-in-public-baseball-media-critical-audit` | Causal Claims In Public Baseball Media: Critical Audit | **note** | 0 |
| 41 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::translating-causal-limits-into-honest-language` | Translating Causal Limits Into Honest Language | **note** | 0 |
| 42 | `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causality-debate-seminar-and-position-paper` | Causality Debate Seminar And Position Paper | **note** | 0 |

---

## Per-lesson detail

### 1. What Is A Data Generating Process?

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::what-is-a-data-generating-process`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 2. Randomness, Structure, And Measurement Error

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::randomness-structure-and-measurement-error`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 3. Selection Effects In Public Baseball Data

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::selection-effects-in-public-baseball-data`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 4. Temporal Dependence Across Games And Seasons

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::temporal-dependence-across-games-and-seasons`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 5. Confounding Patterns In Outcome Metrics

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::confounding-patterns-in-outcome-metrics`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 6. Hierarchical Structure: Player, Team, Park, Era

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::hierarchical-structure-player-team-park-era`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 7. DGP Case Study: Home Run Rate Dynamics

- **lessonKey:** `statistical-modeling-for-baseball::data-generating-processes-in-baseball::dgp-case-study-home-run-rate-dynamics`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 8. EDA Framing: Questions Before Charts

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-framing-questions-before-charts`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.402Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 9. Distribution Shape, Tail Behavior, And Robust Summaries

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::distribution-shape-tail-behavior-and-robust-summaries`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.405Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 10. Stratification And Simpson's Paradox In Baseball

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::stratification-and-simpson-s-paradox-in-baseball`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.405Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 11. Missingness Mechanisms And Practical Handling

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::missingness-mechanisms-and-practical-handling`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.405Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 12. Leakage Risks During Data Filtering

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::leakage-risks-during-data-filtering`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.405Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 13. Sampling Windows And Seasonality Bias

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::sampling-windows-and-seasonality-bias`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.405Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 14. Outliers: Signal, Noise, Or Data Issue?

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::outliers-signal-noise-or-data-issue`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 15. EDA Notebook Practicum With Review Rubric

- **lessonKey:** `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-notebook-practicum-with-review-rubric`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 16. Linear Regression Baseline For Interpretability

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::linear-regression-baseline-for-interpretability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 17. Feature Engineering For Batted-Ball Outcomes

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::feature-engineering-for-batted-ball-outcomes`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 18. Logistic Regression For Home Run Probability

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::logistic-regression-for-home-run-probability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 19. Interaction Terms: Launch Angle × Exit Velocity

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::interaction-terms-launch-angle-exit-velocity`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 20. Regularization (L1/L2) For Stability

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regularization-l1-l2-for-stability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 21. Nonlinearity Handling: Splines And Basis Expansion

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::nonlinearity-handling-splines-and-basis-expansion`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 22. Model Comparison: AIC, BIC, And Cross-Validation

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::model-comparison-aic-bic-and-cross-validation`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 23. Calibration Curves And Probability Reliability

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::calibration-curves-and-probability-reliability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 24. Thresholding And Decision Utility

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::thresholding-and-decision-utility`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 25. Regression Lab: Build, Compare, Defend

- **lessonKey:** `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regression-lab-build-compare-defend`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 26. Sampling Distributions In Practice

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::sampling-distributions-in-practice`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 27. Confidence Intervals For Means, Effects, And Probabilities

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::confidence-intervals-for-means-effects-and-probabilities`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 28. Bootstrap Methods For Complex Metrics

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::bootstrap-methods-for-complex-metrics`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 29. Hypothesis Testing And Practical Significance

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::hypothesis-testing-and-practical-significance`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 30. Validation Splits, Cross-Validation, And Drift

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-splits-cross-validation-and-drift`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.406Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 31. Error Decomposition: Bias, Variance, Noise

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::error-decomposition-bias-variance-noise`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 32. Robustness Checks And Sensitivity Analysis

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::robustness-checks-and-sensitivity-analysis`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 33. Communicating Uncertainty Without Overclaiming

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::communicating-uncertainty-without-overclaiming`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 34. Validation Dossier Workshop

- **lessonKey:** `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-dossier-workshop`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 35. Association Is Not Causation: Formal Definitions

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::association-is-not-causation-formal-definitions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 36. DAGs For Baseball Questions

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::dags-for-baseball-questions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 37. Confounders, Mediators, And Colliders

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::confounders-mediators-and-colliders`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 38. Counterfactual Reasoning For Policy/Rule Changes

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::counterfactual-reasoning-for-policy-rule-changes`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 39. Natural Experiments And Quasi-Experimental Design

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::natural-experiments-and-quasi-experimental-design`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 40. Causal Claims In Public Baseball Media: Critical Audit

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causal-claims-in-public-baseball-media-critical-audit`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 41. Translating Causal Limits Into Honest Language

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::translating-causal-limits-into-honest-language`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 42. Causality Debate Seminar And Position Paper

- **lessonKey:** `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causality-debate-seminar-and-position-paper`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.407Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 
