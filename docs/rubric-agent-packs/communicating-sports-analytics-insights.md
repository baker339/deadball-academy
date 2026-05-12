# Rubric agent pack: Communicating Sports Analytics Insights

**Track slug:** `communicating-sports-analytics-insights`

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
| 1 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::audience-analysis-students-coaches-analysts-public` | Audience Analysis: Students, Coaches, Analysts, Public | **note** | 0 |
| 2 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::defining-decision-relevant-questions` | Defining Decision-Relevant Questions | **note** | 0 |
| 3 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::scoping-claims-to-available-evidence` | Scoping Claims To Available Evidence | **note** | 0 |
| 4 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::narrative-arcs-for-technical-findings` | Narrative Arcs For Technical Findings | **note** | 0 |
| 5 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::risk-communication-for-high-variance-results` | Risk Communication For High-Variance Results | **note** | 0 |
| 6 | `communicating-sports-analytics-insights::framing-questions-and-stakeholders::framing-workshop-one-dataset-three-audiences` | Framing Workshop: One Dataset, Three Audiences | **note** | 0 |
| 7 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::story-structure-through-sequential-visuals` | Story Structure Through Sequential Visuals | **note** | 0 |
| 8 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::emphasis-without-distortion` | Emphasis Without Distortion | **note** | 0 |
| 9 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::comparative-framing-and-baseline-selection` | Comparative Framing And Baseline Selection | **note** | 0 |
| 10 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::annotation-as-argument` | Annotation As Argument | **note** | 0 |
| 11 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::multi-panel-narrative-construction` | Multi-Panel Narrative Construction | **note** | 0 |
| 12 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::common-misleading-patterns-and-how-to-avoid-them` | Common Misleading Patterns And How To Avoid Them | **note** | 0 |
| 13 | `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::storytelling-critique-lab` | Storytelling Critique Lab | **note** | 0 |
| 14 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::methods-sections-readers-can-audit` | Methods Sections Readers Can Audit | **note** | 0 |
| 15 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::assumption-registers-and-limitation-statements` | Assumption Registers And Limitation Statements | **note** | 0 |
| 16 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::reporting-model-choices-transparently` | Reporting Model Choices Transparently | **note** | 0 |
| 17 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::uncertainty-language-templates` | Uncertainty Language Templates | **note** | 0 |
| 18 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::reproducibility-statements-and-artifact-links` | Reproducibility Statements And Artifact Links | **note** | 0 |
| 19 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::writing-for-technical-vs-non-technical-readers` | Writing For Technical Vs Non-Technical Readers | **note** | 0 |
| 20 | `communicating-sports-analytics-insights::writing-methodology-and-caveats::methodology-rewrite-workshop` | Methodology Rewrite Workshop | **note** | 0 |
| 21 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::slide-architecture-for-analytical-arguments` | Slide Architecture For Analytical Arguments | **note** | 0 |
| 22 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::oral-defense-of-modeling-choices` | Oral Defense Of Modeling Choices | **note** | 0 |
| 23 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::handling-cross-examination-and-objections` | Handling Cross-Examination And Objections | **note** | 0 |
| 24 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::constructive-peer-review-rubrics` | Constructive Peer Review Rubrics | **note** | 0 |
| 25 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::debate-formats-for-causal-claims` | Debate Formats For Causal Claims | **note** | 0 |
| 26 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::revision-cycles-from-feedback` | Revision Cycles From Feedback | **note** | 0 |
| 27 | `communicating-sports-analytics-insights::presentations-debates-and-peer-review::live-seminar-simulation` | Live Seminar Simulation | **note** | 0 |
| 28 | `communicating-sports-analytics-insights::capstone-composition-and-defense::capstone-topic-selection-and-proposal` | Capstone Topic Selection And Proposal | **note** | 0 |
| 29 | `communicating-sports-analytics-insights::capstone-composition-and-defense::literature-positioning-and-prior-work-context` | Literature Positioning And Prior Work Context | **note** | 0 |
| 30 | `communicating-sports-analytics-insights::capstone-composition-and-defense::data-model-narrative-integration` | Data + Model + Narrative Integration | **note** | 0 |
| 31 | `communicating-sports-analytics-insights::capstone-composition-and-defense::drafting-the-technical-report` | Drafting The Technical Report | **note** | 0 |
| 32 | `communicating-sports-analytics-insights::capstone-composition-and-defense::building-the-executive-summary` | Building The Executive Summary | **note** | 0 |
| 33 | `communicating-sports-analytics-insights::capstone-composition-and-defense::visual-appendix-and-reproducibility-bundle` | Visual Appendix And Reproducibility Bundle | **note** | 0 |
| 34 | `communicating-sports-analytics-insights::capstone-composition-and-defense::mock-defense-and-rubric-scoring` | Mock Defense And Rubric Scoring | **note** | 0 |
| 35 | `communicating-sports-analytics-insights::capstone-composition-and-defense::final-capstone-submission-and-reflection` | Final Capstone Submission And Reflection | **note** | 0 |
| 36 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::paper-structure-and-reading-strategy` | Paper Structure And Reading Strategy | **note** | 0 |
| 37 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::methods-section-deconstruction` | Methods Section Deconstruction | **note** | 0 |
| 38 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::statistical-claims-effect-sizes-and-uncertainty` | Statistical Claims Effect Sizes And Uncertainty | **note** | 0 |
| 39 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::reproducibility-data-access-and-supplementary-materials` | Reproducibility Data Access And Supplementary Materials | **note** | 0 |
| 40 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::legitimacy-and-credibility-evaluation-framework` | Legitimacy And Credibility Evaluation Framework | **note** | 0 |
| 41 | `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::from-evidence-to-independent-judgment-decision-memo-workshop` | From Evidence To Independent Judgment Decision Memo Workshop | **note** | 0 |

---

## Per-lesson detail

### 1. Audience Analysis: Students, Coaches, Analysts, Public

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::audience-analysis-students-coaches-analysts-public`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 2. Defining Decision-Relevant Questions

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::defining-decision-relevant-questions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 3. Scoping Claims To Available Evidence

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::scoping-claims-to-available-evidence`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 4. Narrative Arcs For Technical Findings

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::narrative-arcs-for-technical-findings`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 5. Risk Communication For High-Variance Results

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::risk-communication-for-high-variance-results`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 6. Framing Workshop: One Dataset, Three Audiences

- **lessonKey:** `communicating-sports-analytics-insights::framing-questions-and-stakeholders::framing-workshop-one-dataset-three-audiences`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 7. Story Structure Through Sequential Visuals

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::story-structure-through-sequential-visuals`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 8. Emphasis Without Distortion

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::emphasis-without-distortion`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 9. Comparative Framing And Baseline Selection

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::comparative-framing-and-baseline-selection`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 10. Annotation As Argument

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::annotation-as-argument`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 11. Multi-Panel Narrative Construction

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::multi-panel-narrative-construction`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 12. Common Misleading Patterns And How To Avoid Them

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::common-misleading-patterns-and-how-to-avoid-them`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 13. Storytelling Critique Lab

- **lessonKey:** `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::storytelling-critique-lab`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 14. Methods Sections Readers Can Audit

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::methods-sections-readers-can-audit`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 15. Assumption Registers And Limitation Statements

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::assumption-registers-and-limitation-statements`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 16. Reporting Model Choices Transparently

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::reporting-model-choices-transparently`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.419Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 17. Uncertainty Language Templates

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::uncertainty-language-templates`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 18. Reproducibility Statements And Artifact Links

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::reproducibility-statements-and-artifact-links`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 19. Writing For Technical Vs Non-Technical Readers

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::writing-for-technical-vs-non-technical-readers`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 20. Methodology Rewrite Workshop

- **lessonKey:** `communicating-sports-analytics-insights::writing-methodology-and-caveats::methodology-rewrite-workshop`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 21. Slide Architecture For Analytical Arguments

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::slide-architecture-for-analytical-arguments`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 22. Oral Defense Of Modeling Choices

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::oral-defense-of-modeling-choices`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 23. Handling Cross-Examination And Objections

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::handling-cross-examination-and-objections`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 24. Constructive Peer Review Rubrics

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::constructive-peer-review-rubrics`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 25. Debate Formats For Causal Claims

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::debate-formats-for-causal-claims`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 26. Revision Cycles From Feedback

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::revision-cycles-from-feedback`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 27. Live Seminar Simulation

- **lessonKey:** `communicating-sports-analytics-insights::presentations-debates-and-peer-review::live-seminar-simulation`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 28. Capstone Topic Selection And Proposal

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::capstone-topic-selection-and-proposal`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 29. Literature Positioning And Prior Work Context

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::literature-positioning-and-prior-work-context`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 30. Data + Model + Narrative Integration

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::data-model-narrative-integration`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 31. Drafting The Technical Report

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::drafting-the-technical-report`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 32. Building The Executive Summary

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::building-the-executive-summary`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 33. Visual Appendix And Reproducibility Bundle

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::visual-appendix-and-reproducibility-bundle`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 34. Mock Defense And Rubric Scoring

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::mock-defense-and-rubric-scoring`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 35. Final Capstone Submission And Reflection

- **lessonKey:** `communicating-sports-analytics-insights::capstone-composition-and-defense::final-capstone-submission-and-reflection`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 36. Paper Structure And Reading Strategy

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::paper-structure-and-reading-strategy`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.420Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 37. Methods Section Deconstruction

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::methods-section-deconstruction`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.421Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 38. Statistical Claims Effect Sizes And Uncertainty

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::statistical-claims-effect-sizes-and-uncertainty`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.421Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 39. Reproducibility Data Access And Supplementary Materials

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::reproducibility-data-access-and-supplementary-materials`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.421Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 40. Legitimacy And Credibility Evaluation Framework

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::legitimacy-and-credibility-evaluation-framework`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.421Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 41. From Evidence To Independent Judgment Decision Memo Workshop

- **lessonKey:** `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::from-evidence-to-independent-judgment-decision-memo-workshop`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.421Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 
