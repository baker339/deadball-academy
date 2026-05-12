# Rubric agent pack: Data Analysis With Statcast

**Track slug:** `data-analysis-with-statcast`

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
| 1 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::statcast-table-structure-and-core-fields` | Statcast Table Structure And Core Fields | **note** | 0 |
| 2 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::type-systems-units-and-semantic-consistency` | Type Systems, Units, And Semantic Consistency | **note** | 0 |
| 3 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::event-level-data-sources-and-measurement-pipelines` | Event-Level Data Sources And Measurement Pipelines | **note** | 0 |
| 4 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-quality-audits-and-rule-checks` | Data Quality Audits And Rule Checks | **note** | 0 |
| 5 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::join-strategies-for-context-enrichment` | Join Strategies For Context Enrichment | **note** | 0 |
| 6 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::metric-reliability-across-parks-eras-and-sensors` | Metric Reliability Across Parks Eras And Sensors | **note** | 0 |
| 7 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::time-alignment-across-events-and-metadata` | Time Alignment Across Events And Metadata | **note** | 0 |
| 8 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::cleaning-pipelines-and-reproducible-transforms` | Cleaning Pipelines And Reproducible Transforms | **note** | 0 |
| 9 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::versioning-datasets-for-repeatability` | Versioning Datasets For Repeatability | **note** | 0 |
| 10 | `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-cleaning-practicum-with-qa-checklist` | Data Cleaning Practicum With QA Checklist | **note** | 0 |
| 11 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-engineering-principles-for-baseball-models` | Feature Engineering Principles For Baseball Models | **note** | 0 |
| 12 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::derived-kinematic-features-from-raw-inputs` | Derived Kinematic Features From Raw Inputs | **note** | 0 |
| 13 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::expected-statistics-construction-and-assumptions` | Expected Statistics Construction And Assumptions | **note** | 0 |
| 14 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::scaling-normalization-and-cross-player-comparison` | Scaling Normalization And Cross-Player Comparison | **note** | 0 |
| 15 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::context-features-park-weather-matchup` | Context Features: Park, Weather, Matchup | **note** | 0 |
| 16 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::temporal-features-form-fatigue-and-sequence-effects` | Temporal Features: Form, Fatigue, And Sequence Effects | **note** | 0 |
| 17 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::encoding-categorical-variables-at-scale` | Encoding Categorical Variables At Scale | **note** | 0 |
| 18 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-leakage-detection-and-mitigation` | Feature Leakage Detection And Mitigation | **note** | 0 |
| 19 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::interpretable-vs-high-capacity-feature-sets` | Interpretable Vs High-Capacity Feature Sets | **note** | 0 |
| 20 | `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-store-mini-project` | Feature Store Mini-Project | **note** | 0 |
| 21 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::chart-selection-by-statistical-question-type` | Chart Selection By Statistical Question Type | **note** | 0 |
| 22 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::designing-honest-axes-scales-and-encodings` | Designing Honest Axes, Scales, And Encodings | **note** | 0 |
| 23 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::dense-scatter-hexbin-and-heatmap-tradeoffs` | Dense Scatter, Hexbin, And Heatmap Tradeoffs | **note** | 0 |
| 24 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::time-series-decomposition-visual-patterns` | Time-Series Decomposition Visual Patterns | **note** | 0 |
| 25 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::uncertainty-visualization-techniques` | Uncertainty Visualization Techniques | **note** | 0 |
| 26 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::annotation-strategy-for-analytical-narratives` | Annotation Strategy For Analytical Narratives | **note** | 0 |
| 27 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::accessibility-and-visual-clarity-standards` | Accessibility And Visual Clarity Standards | **note** | 0 |
| 28 | `data-analysis-with-statcast::visualization-design-for-baseball-questions::visualization-critique-studio` | Visualization Critique Studio | **note** | 0 |
| 29 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-principles-in-applied-analytics` | Reproducibility Principles In Applied Analytics | **note** | 0 |
| 30 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::notebook-structure-for-reviewability` | Notebook Structure For Reviewability | **note** | 0 |
| 31 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::parameterized-analysis-workflows` | Parameterized Analysis Workflows | **note** | 0 |
| 32 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::caching-determinism-and-performance` | Caching, Determinism, And Performance | **note** | 0 |
| 33 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::testing-data-transformations` | Testing Data Transformations | **note** | 0 |
| 34 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::diagnostics-for-drift-noise-and-confounding` | Diagnostics For Drift Noise And Confounding | **note** | 0 |
| 35 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::packaging-results-for-reuse` | Packaging Results For Reuse | **note** | 0 |
| 36 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::communicating-metric-limits-to-non-technical-audiences` | Communicating Metric Limits To Non-Technical Audiences | **note** | 0 |
| 37 | `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-audit-practicum` | Reproducibility Audit Practicum | **note** | 0 |
| 38 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::project-scoping-and-analytical-question-refinement` | Project Scoping And Analytical Question Refinement | **note** | 0 |
| 39 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-drag-vs-hr-with-clear-assumptions` | Rebuilding Drag Vs HR With Clear Assumptions | **note** | 0 |
| 40 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-expected-vs-actual-distance` | Rebuilding Expected Vs Actual Distance | **note** | 0 |
| 41 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-exit-velocity-relationship-visuals` | Rebuilding Exit Velocity Relationship Visuals | **note** | 0 |
| 42 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::extending-a-figure-with-uncertainty-overlays` | Extending A Figure With Uncertainty Overlays | **note** | 0 |
| 43 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::error-analysis-against-prior-versions` | Error Analysis Against Prior Versions | **note** | 0 |
| 44 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::publication-ready-figure-standards` | Publication-Ready Figure Standards | **note** | 0 |
| 45 | `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::applied-project-review-and-revision-cycle` | Applied Project Review And Revision Cycle | **note** | 0 |

---

## Per-lesson detail

### 1. Statcast Table Structure And Core Fields

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::statcast-table-structure-and-core-fields`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.408Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 2. Type Systems, Units, And Semantic Consistency

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::type-systems-units-and-semantic-consistency`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.408Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 3. Event-Level Data Sources And Measurement Pipelines

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::event-level-data-sources-and-measurement-pipelines`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.408Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 4. Data Quality Audits And Rule Checks

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-quality-audits-and-rule-checks`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 5. Join Strategies For Context Enrichment

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::join-strategies-for-context-enrichment`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 6. Metric Reliability Across Parks Eras And Sensors

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::metric-reliability-across-parks-eras-and-sensors`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 7. Time Alignment Across Events And Metadata

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::time-alignment-across-events-and-metadata`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 8. Cleaning Pipelines And Reproducible Transforms

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::cleaning-pipelines-and-reproducible-transforms`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 9. Versioning Datasets For Repeatability

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::versioning-datasets-for-repeatability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 10. Data Cleaning Practicum With QA Checklist

- **lessonKey:** `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-cleaning-practicum-with-qa-checklist`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 11. Feature Engineering Principles For Baseball Models

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-engineering-principles-for-baseball-models`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 12. Derived Kinematic Features From Raw Inputs

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::derived-kinematic-features-from-raw-inputs`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 13. Expected Statistics Construction And Assumptions

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::expected-statistics-construction-and-assumptions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 14. Scaling Normalization And Cross-Player Comparison

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::scaling-normalization-and-cross-player-comparison`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 15. Context Features: Park, Weather, Matchup

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::context-features-park-weather-matchup`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 16. Temporal Features: Form, Fatigue, And Sequence Effects

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::temporal-features-form-fatigue-and-sequence-effects`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 17. Encoding Categorical Variables At Scale

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::encoding-categorical-variables-at-scale`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 18. Feature Leakage Detection And Mitigation

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-leakage-detection-and-mitigation`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 19. Interpretable Vs High-Capacity Feature Sets

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::interpretable-vs-high-capacity-feature-sets`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 20. Feature Store Mini-Project

- **lessonKey:** `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-store-mini-project`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.409Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 21. Chart Selection By Statistical Question Type

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::chart-selection-by-statistical-question-type`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 22. Designing Honest Axes, Scales, And Encodings

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::designing-honest-axes-scales-and-encodings`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 23. Dense Scatter, Hexbin, And Heatmap Tradeoffs

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::dense-scatter-hexbin-and-heatmap-tradeoffs`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 24. Time-Series Decomposition Visual Patterns

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::time-series-decomposition-visual-patterns`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 25. Uncertainty Visualization Techniques

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::uncertainty-visualization-techniques`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 26. Annotation Strategy For Analytical Narratives

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::annotation-strategy-for-analytical-narratives`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 27. Accessibility And Visual Clarity Standards

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::accessibility-and-visual-clarity-standards`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 28. Visualization Critique Studio

- **lessonKey:** `data-analysis-with-statcast::visualization-design-for-baseball-questions::visualization-critique-studio`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 29. Reproducibility Principles In Applied Analytics

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-principles-in-applied-analytics`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 30. Notebook Structure For Reviewability

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::notebook-structure-for-reviewability`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 31. Parameterized Analysis Workflows

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::parameterized-analysis-workflows`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 32. Caching, Determinism, And Performance

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::caching-determinism-and-performance`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 33. Testing Data Transformations

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::testing-data-transformations`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 34. Diagnostics For Drift Noise And Confounding

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::diagnostics-for-drift-noise-and-confounding`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.410Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 35. Packaging Results For Reuse

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::packaging-results-for-reuse`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 36. Communicating Metric Limits To Non-Technical Audiences

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::communicating-metric-limits-to-non-technical-audiences`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 37. Reproducibility Audit Practicum

- **lessonKey:** `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-audit-practicum`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 38. Project Scoping And Analytical Question Refinement

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::project-scoping-and-analytical-question-refinement`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 39. Rebuilding Drag Vs HR With Clear Assumptions

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-drag-vs-hr-with-clear-assumptions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 40. Rebuilding Expected Vs Actual Distance

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-expected-vs-actual-distance`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 41. Rebuilding Exit Velocity Relationship Visuals

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-exit-velocity-relationship-visuals`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 42. Extending A Figure With Uncertainty Overlays

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::extending-a-figure-with-uncertainty-overlays`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 43. Error Analysis Against Prior Versions

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::error-analysis-against-prior-versions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 44. Publication-Ready Figure Standards

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::publication-ready-figure-standards`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 45. Applied Project Review And Revision Cycle

- **lessonKey:** `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::applied-project-review-and-revision-cycle`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.411Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 
