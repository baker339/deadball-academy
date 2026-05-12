<!-- Evidence: collectAllLessonKeys vs ALL_LESSONS; per-lesson heuristics on duplicate titles, summativeReflection, integrative title tokens, placeholders, Statcast/physics tokens. -->

> **Priority 1 (human expert review):** For factual accuracy, pedagogy, and learning effectiveness, follow [`sme-human-expert-review-program.md`](./sme-human-expert-review-program.md). The §2 tables below are generated heuristics (inventory, placeholders, title collisions, coarse assessment signals); they do **not** replace credentialed sign-off on physics, environment, Statcast, or inference-heavy lessons.

## Executive summary (five bullets)

1. **Inventory**: `deepCourseBlueprint` + `collectAllLessonKeys` yields **278** lessons; `ALL_LESSONS` (`frontend/src/content/lessons/allLessons.ts`) matches **exactly** (no missing docs, no stray keys)—same contract as `assertLessonStoreCoversBlueprint` in `frontend/src/content/lessonRegistry.ts`.
2. **Constructed response coverage**: **48** / 278 lessons include `summativeReflection` in the merged `ALL_LESSONS` store (unit-closer backfill + integrative-title pass; Algebra Unit 1 keeps richer explicit memo prompts).
3. **Title collisions**: **13** display titles repeat across earlier math tracks and `baseball-physics-foundations`; paired lessons are not copy-paste but learners may perceive duplication.
4. **Media placeholders**: Many chunks still embed bracketed diagram placeholders—accessibility and visual completeness remain open work.
5. **External verification**: Aerodynamics, environment, and Statcast-heavy lessons should cite primary sources for any quantitative mechanism claims you add during revision.

---

## SME panel roster

- **Dr. Mei Chen** — *Professor of Mathematics*: Notation, proof steps, dimensional consistency, calculus correctness
- **Jordan Ortiz** — *Player-development advisor*: Baseball plausibility, dugout-ready language, tactical framing
- **Sam Okonkwo** — *Learning engineer*: Scaffolding, cognitive load, spiral vs redundancy
- **Riley Nakamura** — *Assessment lead*: Objectives ↔ items ↔ rubrics, summative coverage
- **Alex Kim** — *Accessibility specialist*: Placeholder text, alt text, reading order
- **Dr. Priya Nandakumar** — *Biostatistician / Statcast analyst*: DGP, leakage, uncertainty, schema literacy
- **Taylor Brooks** — *Science editor*: Clarity, jargon, headline discipline
- **Dr. Luis Ramirez** — *Mechanical engineer (sports aerodynamics)*: Drag/Magnus/Reynolds claims—citation hygiene

## 1. Coverage inventory (blueprint ↔ store)

| Contract | Status |
| --- | --- |
| Blueprint lesson keys | **278** |
| `ALL_LESSONS` keys | **278** |
| Missing authored docs | **0** (assertLessonStoreCoversBlueprint would throw) |
| Stray store keys | **0** |
| Primary sources | `frontend/src/content/deepCourseBlueprint.ts`, `frontend/src/content/lessons/allLessons.ts`, `frontend/src/content/lessons/handwritten/*.ts` |

## 2. Per-lesson SME line items (batch by unit)

**Key** uses `track::unit::lesson` slugs from the blueprint.

### Algebra Foundations For Baseball Analytics — **Linear Expressions, Equations, And Constraints**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::variables-units-and-baseball-quantities` | Variables, Units, And Baseball Quantities | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::solving-one-step-and-multi-step-equations-reliably` | Solving One-Step And Multi-Step Equations Reliably | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::inequalities-for-performance-threshold-questions` | Inequalities For Performance Threshold Questions | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::rearranging-formulas-used-in-baseball-metrics` | Rearranging Formulas Used In Baseball Metrics | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::algebra-error-checking-and-sanity-bounds` | Algebra Error Checking And Sanity Bounds | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Algebra Foundations For Baseball Analytics — **Functions And Representations**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `algebra-foundations-for-baseball-analytics::functions-and-representations::function-notation-through-baseball-input-output-stories` | Function Notation Through Baseball Input-Output Stories | **Writing clarity**: Opening whyItMatters: "Baseball decision systems are mostly input-output stories in disguise…"—watch title repetition inside chunk headings. | note |
| `algebra-foundations-for-baseball-analytics::functions-and-representations::domain-range-and-physical-plausibility` | Domain, Range, And Physical Plausibility | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `algebra-foundations-for-baseball-analytics::functions-and-representations::linear-functions-and-rate-interpretations` | Linear Functions And Rate Interpretations | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `algebra-foundations-for-baseball-analytics::functions-and-representations::piecewise-models-for-regime-based-baseball-behavior` | Piecewise Models For Regime-Based Baseball Behavior | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `algebra-foundations-for-baseball-analytics::functions-and-representations::composing-functions-in-modeling-pipelines` | Composing Functions In Modeling Pipelines | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Algebra Foundations For Baseball Analytics — **Systems And Modeling Structure**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::two-equation-systems-from-baseball-scenario-constraints` | Two-Equation Systems From Baseball Scenario Constraints | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::substitution-vs-elimination-strategy-selection` | Substitution Vs Elimination Strategy Selection | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::interpreting-intersections-as-feasible-states` | Interpreting Intersections As Feasible States | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::matrix-form-for-small-linear-systems` | Matrix Form For Small Linear Systems | **Writing clarity**: Opening whyItMatters: "As baseball models add constraints, writing systems in scalar equatio…"—watch title repetition inside chunk headings. | note |
| `algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::algebra-foundations-synthesis-workshop` | Algebra Foundations Synthesis Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Geometry Foundations For Baseball Context — **Coordinate Geometry Essentials**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::coordinate-systems-for-baseball-fields` | Coordinate Systems For Baseball Fields | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::distance-formula-and-baseline-measurement` | Distance Formula And Baseline Measurement | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::midpoints-segments-and-position-landmarks` | Midpoints, Segments, And Position Landmarks | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::slope-as-directional-change-in-field-context` | Slope As Directional Change In Field Context | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::line-equations-for-defensive-alignment-paths` | Line Equations For Defensive Alignment Paths | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Geometry Foundations For Baseball Context — **Angles, Triangles, And Measurement**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `geometry-foundations-for-baseball-context::angles-triangles-and-measurement::angle-measure-conventions-for-motion-analysis` | Angle Measure Conventions For Motion Analysis | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `geometry-foundations-for-baseball-context::angles-triangles-and-measurement::triangle-similarity-in-camera-and-field-scaling` | Triangle Similarity In Camera And Field Scaling | **Writing clarity**: Opening whyItMatters: "This lesson matters because triangle similarity for camera-to-field s…"—watch title repetition inside chunk headings. | note |
| `geometry-foundations-for-baseball-context::angles-triangles-and-measurement::right-triangle-geometry-for-component-thinking` | Right Triangle Geometry For Component Thinking | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `geometry-foundations-for-baseball-context::angles-triangles-and-measurement::law-of-sines-and-law-of-cosines-in-stadium-problems` | Law Of Sines And Law Of Cosines In Stadium Problems | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `geometry-foundations-for-baseball-context::angles-triangles-and-measurement::geometric-proof-mindset-for-model-trust` | Geometric Proof Mindset For Model Trust | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Geometry Foundations For Baseball Context — **Circles, Arcs, And Curvature**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::circle-equations-and-radial-interpretations` | Circle Equations And Radial Interpretations | **Writing clarity**: Opening whyItMatters: "This lesson matters because circle equations and radial interpretatio…"—watch title repetition inside chunk headings. | note |
| `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::arc-length-curvature-and-outfield-wall-geometry` | Arc Length, Curvature, And Outfield Wall Geometry | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::sector-area-and-angular-coverage` | Sector Area And Angular Coverage | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::chord-vs-arc-interpretation-pitfalls` | Chord Vs Arc Interpretation Pitfalls | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::geometry-foundations-synthesis-lab` | Geometry Foundations Synthesis Lab | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Trigonometry And Precalculus For Baseball Modeling — **Trigonometric Core Concepts**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trigonometric-functions-refresher-for-modeling` | Trigonometric Functions Refresher For Modeling | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::unit-circle-radians-and-angular-velocity-in-context` | Unit Circle, Radians, And Angular Velocity In Context | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion` | SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::inverse-trig-for-reconstructing-launch-conditions` | Inverse Trig For Reconstructing Launch Conditions | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trig-identities-for-simplifying-flight-equations` | Trig Identities For Simplifying Flight Equations | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |

### Trigonometry And Precalculus For Baseball Modeling — **Functions, Transformations, And Signals**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::phase-shift-and-periodicity-in-baseball-motion-signals` | Phase Shift And Periodicity In Baseball Motion Signals | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::amplitude-frequency-and-signal-interpretation` | Amplitude, Frequency, And Signal Interpretation | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::polar-cartesian-and-spherical-coordinate-conversions` | Polar, Cartesian, And Spherical Coordinate Conversions | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::function-transformations-and-model-calibration` | Function Transformations And Model Calibration | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::precalculus-signal-synthesis-workshop` | Precalculus Signal Synthesis Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Trigonometry And Precalculus For Baseball Modeling — **Vectors And Optimization Preparation**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::dot-product-projection-and-directional-influence` | Dot Product, Projection, And Directional Influence | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::cross-product-intuition-for-spin-and-orientation` | Cross Product Intuition For Spin And Orientation | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::angle-optimization-under-physical-constraints` | Angle Optimization Under Physical Constraints | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::error-propagation-in-trig-based-calculations` | Error Propagation In Trig-Based Calculations | **Instructional design / IA**: Shares display title with `baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::precalculus-capstone-from-angle-to-decision` | Precalculus Capstone: From Angle To Decision | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Calculus I And II For Baseball Dynamics — **Limits, Continuity, And Derivatives**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives::limits-as-trend-questions-in-baseball-motion` | Limits As Trend Questions In Baseball Motion | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives::continuity-and-model-breakpoint-detection` | Continuity And Model Breakpoint Detection | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives::derivative-as-instantaneous-rate-of-change` | Derivative As Instantaneous Rate Of Change | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives::product-quotient-and-chain-rules-in-practice` | Product, Quotient, And Chain Rules In Practice | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives::implicit-differentiation-for-coupled-baseball-quantities` | Implicit Differentiation For Coupled Baseball Quantities | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Calculus I And II For Baseball Dynamics — **Derivative Applications**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::optimization-for-launch-decisions` | Optimization For Launch Decisions | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::related-rates-in-tracking-and-orientation` | Related Rates In Tracking And Orientation | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::second-derivative-and-curvature-interpretation` | Second Derivative And Curvature Interpretation | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::linearization-for-fast-approximation` | Linearization For Fast Approximation | **Writing clarity**: Opening whyItMatters: "Linearization For Fast Approximation is essential in baseball analyti…"—watch title repetition inside chunk headings. | note |
| `calculus-i-and-ii-for-baseball-dynamics::derivative-applications::derivative-application-synthesis-lab` | Derivative Application Synthesis Lab | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Calculus I And II For Baseball Dynamics — **Integrals And Accumulation**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation::definite-integral-as-accumulated-change` | Definite Integral As Accumulated Change | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation::fundamental-theorem-of-calculus-in-modeling-workflow` | Fundamental Theorem Of Calculus In Modeling Workflow | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation::substitution-and-integration-by-parts` | Substitution And Integration By Parts | **Writing clarity**: Opening whyItMatters: "Substitution And Integration By Parts is essential in baseball analyt…"—watch title repetition inside chunk headings. | note |
| `calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation::numerical-integration-for-real-data` | Numerical Integration For Real Data | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation::integral-interpretation-in-baseball-context` | Integral Interpretation In Baseball Context | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Multivariable Calculus And Differential Equations — **Multivariable Function Geometry**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `multivariable-calculus-and-differential-equations::multivariable-function-geometry::functions-of-several-variables-in-baseball-systems` | Functions Of Several Variables In Baseball Systems | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `multivariable-calculus-and-differential-equations::multivariable-function-geometry::partial-derivatives-and-marginal-effects` | Partial Derivatives And Marginal Effects | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `multivariable-calculus-and-differential-equations::multivariable-function-geometry::gradient-directional-derivative-and-sensitivity` | Gradient, Directional Derivative, And Sensitivity | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `multivariable-calculus-and-differential-equations::multivariable-function-geometry::tangent-planes-and-local-linear-models` | Tangent Planes And Local Linear Models | **Accessibility / media**: Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens. | minor |
| `multivariable-calculus-and-differential-equations::multivariable-function-geometry::multivariable-optimization-under-constraints` | Multivariable Optimization Under Constraints | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Multivariable Calculus And Differential Equations — **Multiple Integration And Vector Fields**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::double-integrals-over-physical-regions` | Double Integrals Over Physical Regions | **Writing clarity**: Opening whyItMatters: "Textbook framing: Many baseball questions are area accumulation quest…"—watch title repetition inside chunk headings. | note |
| `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::coordinate-changes-in-multivariable-integrals` | Coordinate Changes In Multivariable Integrals | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::vector-fields-and-flow-interpretation` | Vector Fields And Flow Interpretation | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::line-integrals-for-work-like-quantities` | Line Integrals For Work-Like Quantities | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::multivariable-integration-synthesis-workshop` | Multivariable Integration Synthesis Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Multivariable Calculus And Differential Equations — **Differential Equations For Dynamic Systems**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::first-order-odes-for-baseball-change-models` | First-Order ODEs For Baseball Change Models | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::second-order-odes-for-motion-dynamics` | Second-Order ODEs For Motion Dynamics | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::linear-systems-and-stability-intuition` | Linear Systems And Stability Intuition | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::numerical-ode-solvers-and-step-control` | Numerical ODE Solvers And Step Control | **Writing clarity**: Opening whyItMatters: "Textbook framing: Most baseball dynamic models become too complex for…"—watch title repetition inside chunk headings. | note |
| `multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::differential-equations-capstone-integration` | Differential Equations Capstone Integration | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Geometry Of The Field And Ball Flight**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields` | Coordinate Systems For Baseball Fields | **Instructional design / IA**: Shares display title with `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::coordinate-systems-for-baseball-fields`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::field-dimensions-symmetry-and-constraint-boundaries` | Field Dimensions, Symmetry, And Constraint Boundaries | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry` | Arc Length, Curvature, And Outfield Wall Geometry | **Instructional design / IA**: Shares display title with `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::arc-length-curvature-and-outfield-wall-geometry`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::launch-angle-as-a-geometric-object` | Launch Angle As A Geometric Object | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::2d-to-3d-flight-geometry-transitions` | 2D To 3D Flight Geometry Transitions | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::ballpark-topology-and-home-run-boundary-surfaces` | Ballpark Topology And Home Run Boundary Surfaces | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometric-sensitivity-small-angle-changes-large-outcome-swings` | Geometric Sensitivity: Small Angle Changes, Large Outcome Swings | **Writing clarity**: Opening whyItMatters: "This lesson matters because Geometric Sensitivity: Small Angle Change…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions` | Geometry Synthesis Lab: Mapping Ball Flight Regions | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Trigonometry And Vector Decomposition**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling` | Trigonometric Functions Refresher For Modeling | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trigonometric-functions-refresher-for-modeling`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context` | Unit Circle, Radians, And Angular Velocity In Context | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::unit-circle-radians-and-angular-velocity-in-context`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion` | SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions` | Inverse Trig For Reconstructing Launch Conditions | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::inverse-trig-for-reconstructing-launch-conditions`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence` | Dot Product, Projection, And Directional Influence | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::dot-product-projection-and-directional-influence`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation` | Cross Product Intuition For Spin And Orientation | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::cross-product-intuition-for-spin-and-orientation`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions` | Polar, Cartesian, And Spherical Coordinate Conversions | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::polar-cartesian-and-spherical-coordinate-conversions`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals` | Phase Shift And Periodicity In Baseball Motion Signals | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::phase-shift-and-periodicity-in-baseball-motion-signals`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations` | Trig Identities For Simplifying Flight Equations | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trig-identities-for-simplifying-flight-equations`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints` | Angle Optimization Under Physical Constraints | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::angle-optimization-under-physical-constraints`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations` | Error Propagation In Trig-Based Calculations | **Instructional design / IA**: Shares display title with `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::error-propagation-in-trig-based-calculations`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts. | minor |
| `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems` | Trigonometry Mastery Workshop: Multi-Step Applied Problems | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Newtonian Mechanics And Projectile Motion**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newton-s-laws-revisited-for-ball-bat-and-ball-air-systems` | Newton's Laws Revisited For Ball-Bat And Ball-Air Systems | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::kinematics-in-one-and-two-dimensions` | Kinematics In One And Two Dimensions | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::free-body-diagrams-for-batted-ball-motion` | Free-Body Diagrams For Batted Ball Motion | **Writing clarity**: Opening whyItMatters: "This lesson matters because Free-Body Diagrams For Batted Ball Motion…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::initial-conditions-exit-velocity-launch-angle-spin-inputs` | Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::no-drag-projectile-derivation-from-first-principles` | No-Drag Projectile Derivation From First Principles | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::time-of-flight-apex-and-range-relationships` | Time Of Flight, Apex, And Range Relationships | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::energy-methods-vs-force-methods-in-ball-flight` | Energy Methods Vs Force Methods In Ball Flight | **Writing clarity**: Opening whyItMatters: "This lesson matters because Energy Methods Vs Force Methods In Ball F…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::momentum-transfer-in-contact-events` | Momentum Transfer In Contact Events | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::introducing-drag-into-newton-s-second-law` | Introducing Drag Into Newton's Second Law | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::solving-drag-inclusive-odes-numerically` | Solving Drag-Inclusive ODEs Numerically | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::lift-and-magnus-contributions-to-trajectory-shape` | Lift And Magnus Contributions To Trajectory Shape | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::comparing-vacuum-drag-only-and-drag-lift-models` | Comparing Vacuum, Drag-Only, And Drag+Lift Models | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::parameter-sensitivity-and-stability-in-trajectory-models` | Parameter Sensitivity And Stability In Trajectory Models | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newtonian-synthesis-lab-build-a-full-forward-simulator` | Newtonian Synthesis Lab: Build A Full Forward Simulator | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Drag, Lift, And Aerodynamics Of The Baseball**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::physical-meaning-of-drag-coefficient-in-baseball` | Physical Meaning Of Drag Coefficient In Baseball | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::reynolds-number-regimes-and-seam-effects` | Reynolds Number Regimes And Seam Effects | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::boundary-layers-turbulence-and-flight-consequences` | Boundary Layers, Turbulence, And Flight Consequences | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::lift-coefficient-spin-rate-and-spin-axis` | Lift Coefficient, Spin Rate, And Spin Axis | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::coupled-drag-lift-dynamics-in-flight` | Coupled Drag-Lift Dynamics In Flight | **Writing clarity**: Opening whyItMatters: "Coupled Drag-Lift Dynamics In Flight matters because modern baseball …"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::estimating-aerodynamic-parameters-from-observational-data` | Estimating Aerodynamic Parameters From Observational Data | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::identifiability-when-different-parameters-fit-similar-outcomes` | Identifiability: When Different Parameters Fit Similar Outcomes | **Baseball physics (Dr. Ramirez)**: Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-and-home-run-probability-pathways` | Aerodynamics And Home Run Probability Pathways | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::model-misspecification-in-aerodynamic-inference` | Model Misspecification In Aerodynamic Inference | **Writing clarity**: Opening whyItMatters: "Model Misspecification In Aerodynamic Inference matters because moder…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-practicum-inference-and-validation` | Aerodynamics Practicum: Inference And Validation | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Environmental Effects And Ballpark Context**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::air-density-temperature-pressure-and-humidity` | Air Density, Temperature, Pressure, And Humidity | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::altitude-and-effective-resistance-landscapes` | Altitude And Effective Resistance Landscapes | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::wind-vector-decomposition-relative-to-ball-path` | Wind Vector Decomposition Relative To Ball Path | **Writing clarity**: Opening whyItMatters: "Wind Vector Decomposition Relative To Ball Path matters because moder…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::weather-variability-and-uncertainty-bands` | Weather Variability And Uncertainty Bands | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::stadium-orientation-and-microclimate-interaction` | Stadium Orientation And Microclimate Interaction | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::normalizing-outcomes-across-ballparks` | Normalizing Outcomes Across Ballparks | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::environmental-counterfactuals-what-if-conditions-changed` | Environmental Counterfactuals (What If Conditions Changed?) | **Writing clarity**: Opening whyItMatters: "Environmental Counterfactuals (What If Conditions Changed?) matters b…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::environmental-effects-and-ballpark-context::environment-integration-lab-context-aware-distance-models` | Environment Integration Lab: Context-Aware Distance Models | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Baseball Physics Foundations — **Synthesis — Building Physics-Based Ball-Flight Models**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::end-to-end-model-architecture-for-ball-flight` | End-To-End Model Architecture For Ball Flight | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::choosing-state-variables-and-parameter-priors` | Choosing State Variables And Parameter Priors | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::numerical-solvers-step-size-and-convergence-tradeoffs` | Numerical Solvers, Step Size, And Convergence Tradeoffs | **Writing clarity**: Opening whyItMatters: "Numerical Solvers, Step Size, And Convergence Tradeoffs matters becau…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::calibration-with-statcast-style-observations` | Calibration With Statcast-Style Observations | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::residual-analysis-and-diagnostic-workflows` | Residual Analysis And Diagnostic Workflows | **Instructional design**: 6 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::scenario-analysis-and-simulation-design` | Scenario Analysis And Simulation Design | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::reproducible-reporting-for-physics-models` | Reproducible Reporting For Physics Models | **Writing clarity**: Opening whyItMatters: "Reproducible Reporting For Physics Models matters because modern base…"—watch title repetition inside chunk headings. | note |
| `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::physics-capstone-milestone-technical-memo-draft` | Physics Capstone Milestone: Technical Memo Draft | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Statistical Modeling For Baseball — **Data Generating Processes In Baseball**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::what-is-a-data-generating-process` | What Is A Data Generating Process? | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::randomness-structure-and-measurement-error` | Randomness, Structure, And Measurement Error | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::selection-effects-in-public-baseball-data` | Selection Effects In Public Baseball Data | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::temporal-dependence-across-games-and-seasons` | Temporal Dependence Across Games And Seasons | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::confounding-patterns-in-outcome-metrics` | Confounding Patterns In Outcome Metrics | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::hierarchical-structure-player-team-park-era` | Hierarchical Structure: Player, Team, Park, Era | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::data-generating-processes-in-baseball::dgp-case-study-home-run-rate-dynamics` | DGP Case Study: Home Run Rate Dynamics | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Statistical Modeling For Baseball — **Exploratory Data Analysis And Sampling Pitfalls**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-framing-questions-before-charts` | EDA Framing: Questions Before Charts | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::distribution-shape-tail-behavior-and-robust-summaries` | Distribution Shape, Tail Behavior, And Robust Summaries | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::stratification-and-simpson-s-paradox-in-baseball` | Stratification And Simpson's Paradox In Baseball | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::missingness-mechanisms-and-practical-handling` | Missingness Mechanisms And Practical Handling | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::leakage-risks-during-data-filtering` | Leakage Risks During Data Filtering | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::sampling-windows-and-seasonality-bias` | Sampling Windows And Seasonality Bias | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::outliers-signal-noise-or-data-issue` | Outliers: Signal, Noise, Or Data Issue? | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls::eda-notebook-practicum-with-review-rubric` | EDA Notebook Practicum With Review Rubric | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Statistical Modeling For Baseball — **Regression And Generalized Linear Models For HR Probability**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::linear-regression-baseline-for-interpretability` | Linear Regression Baseline For Interpretability | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::feature-engineering-for-batted-ball-outcomes` | Feature Engineering For Batted-Ball Outcomes | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::logistic-regression-for-home-run-probability` | Logistic Regression For Home Run Probability | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::interaction-terms-launch-angle-exit-velocity` | Interaction Terms: Launch Angle × Exit Velocity | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regularization-l1-l2-for-stability` | Regularization (L1/L2) For Stability | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::nonlinearity-handling-splines-and-basis-expansion` | Nonlinearity Handling: Splines And Basis Expansion | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::model-comparison-aic-bic-and-cross-validation` | Model Comparison: AIC, BIC, And Cross-Validation | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::calibration-curves-and-probability-reliability` | Calibration Curves And Probability Reliability | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::thresholding-and-decision-utility` | Thresholding And Decision Utility | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability::regression-lab-build-compare-defend` | Regression Lab: Build, Compare, Defend | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Statistical Modeling For Baseball — **Uncertainty, Confidence Intervals, And Model Validation**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::sampling-distributions-in-practice` | Sampling Distributions In Practice | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::confidence-intervals-for-means-effects-and-probabilities` | Confidence Intervals For Means, Effects, And Probabilities | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::bootstrap-methods-for-complex-metrics` | Bootstrap Methods For Complex Metrics | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::hypothesis-testing-and-practical-significance` | Hypothesis Testing And Practical Significance | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-splits-cross-validation-and-drift` | Validation Splits, Cross-Validation, And Drift | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::error-decomposition-bias-variance-noise` | Error Decomposition: Bias, Variance, Noise | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::robustness-checks-and-sensitivity-analysis` | Robustness Checks And Sensitivity Analysis | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::communicating-uncertainty-without-overclaiming` | Communicating Uncertainty Without Overclaiming | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation::validation-dossier-workshop` | Validation Dossier Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Statistical Modeling For Baseball — **Causality Vs Correlation In Baseball Narratives**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::association-is-not-causation-formal-definitions` | Association Is Not Causation: Formal Definitions | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::dags-for-baseball-questions` | DAGs For Baseball Questions | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::confounders-mediators-and-colliders` | Confounders, Mediators, And Colliders | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::counterfactual-reasoning-for-policy-rule-changes` | Counterfactual Reasoning For Policy/Rule Changes | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::natural-experiments-and-quasi-experimental-design` | Natural Experiments And Quasi-Experimental Design | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causal-claims-in-public-baseball-media-critical-audit` | Causal Claims In Public Baseball Media: Critical Audit | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::translating-causal-limits-into-honest-language` | Translating Causal Limits Into Honest Language | **Biostatistics / inference**: Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally). | note |
| `statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives::causality-debate-seminar-and-position-paper` | Causality Debate Seminar And Position Paper | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Data Analysis With Statcast — **Statcast Schema And Data Cleaning**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::statcast-table-structure-and-core-fields` | Statcast Table Structure And Core Fields | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::type-systems-units-and-semantic-consistency` | Type Systems, Units, And Semantic Consistency | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::event-level-data-sources-and-measurement-pipelines` | Event-Level Data Sources And Measurement Pipelines | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-quality-audits-and-rule-checks` | Data Quality Audits And Rule Checks | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::join-strategies-for-context-enrichment` | Join Strategies For Context Enrichment | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::metric-reliability-across-parks-eras-and-sensors` | Metric Reliability Across Parks Eras And Sensors | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::time-alignment-across-events-and-metadata` | Time Alignment Across Events And Metadata | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::cleaning-pipelines-and-reproducible-transforms` | Cleaning Pipelines And Reproducible Transforms | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::versioning-datasets-for-repeatability` | Versioning Datasets For Repeatability | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::statcast-schema-and-data-cleaning::data-cleaning-practicum-with-qa-checklist` | Data Cleaning Practicum With QA Checklist | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Data Analysis With Statcast — **Feature Engineering For Ball Flight And HR Outcomes**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-engineering-principles-for-baseball-models` | Feature Engineering Principles For Baseball Models | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::derived-kinematic-features-from-raw-inputs` | Derived Kinematic Features From Raw Inputs | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::expected-statistics-construction-and-assumptions` | Expected Statistics Construction And Assumptions | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::scaling-normalization-and-cross-player-comparison` | Scaling Normalization And Cross-Player Comparison | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::context-features-park-weather-matchup` | Context Features: Park, Weather, Matchup | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::temporal-features-form-fatigue-and-sequence-effects` | Temporal Features: Form, Fatigue, And Sequence Effects | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::encoding-categorical-variables-at-scale` | Encoding Categorical Variables At Scale | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-leakage-detection-and-mitigation` | Feature Leakage Detection And Mitigation | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::interpretable-vs-high-capacity-feature-sets` | Interpretable Vs High-Capacity Feature Sets | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes::feature-store-mini-project` | Feature Store Mini-Project | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Data Analysis With Statcast — **Visualization Design For Baseball Questions**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::chart-selection-by-statistical-question-type` | Chart Selection By Statistical Question Type | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::designing-honest-axes-scales-and-encodings` | Designing Honest Axes, Scales, And Encodings | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::dense-scatter-hexbin-and-heatmap-tradeoffs` | Dense Scatter, Hexbin, And Heatmap Tradeoffs | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::time-series-decomposition-visual-patterns` | Time-Series Decomposition Visual Patterns | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::uncertainty-visualization-techniques` | Uncertainty Visualization Techniques | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::annotation-strategy-for-analytical-narratives` | Annotation Strategy For Analytical Narratives | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::accessibility-and-visual-clarity-standards` | Accessibility And Visual Clarity Standards | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::visualization-design-for-baseball-questions::visualization-critique-studio` | Visualization Critique Studio | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Data Analysis With Statcast — **Reproducible Pipelines And Notebooks**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-principles-in-applied-analytics` | Reproducibility Principles In Applied Analytics | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::notebook-structure-for-reviewability` | Notebook Structure For Reviewability | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::parameterized-analysis-workflows` | Parameterized Analysis Workflows | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::caching-determinism-and-performance` | Caching, Determinism, And Performance | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::testing-data-transformations` | Testing Data Transformations | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::diagnostics-for-drift-noise-and-confounding` | Diagnostics For Drift Noise And Confounding | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::packaging-results-for-reuse` | Packaging Results For Reuse | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::communicating-metric-limits-to-non-technical-audiences` | Communicating Metric Limits To Non-Technical Audiences | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::reproducible-pipelines-and-notebooks::reproducibility-audit-practicum` | Reproducibility Audit Practicum | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Data Analysis With Statcast — **Applied Projects — Recreating Deadball Tracker Figures**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::project-scoping-and-analytical-question-refinement` | Project Scoping And Analytical Question Refinement | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-drag-vs-hr-with-clear-assumptions` | Rebuilding Drag Vs HR With Clear Assumptions | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-expected-vs-actual-distance` | Rebuilding Expected Vs Actual Distance | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::rebuilding-exit-velocity-relationship-visuals` | Rebuilding Exit Velocity Relationship Visuals | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::extending-a-figure-with-uncertainty-overlays` | Extending A Figure With Uncertainty Overlays | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::error-analysis-against-prior-versions` | Error Analysis Against Prior Versions | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::publication-ready-figure-standards` | Publication-Ready Figure Standards | **Data / Statcast literacy**: Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally). | note |
| `data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures::applied-project-review-and-revision-cycle` | Applied Project Review And Revision Cycle | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Environmental Science For Baseball Systems — **Atmospheric Science Foundations**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `environmental-science-for-baseball-systems::atmospheric-science-foundations::air-composition-pressure-and-density-basics` | Air Composition, Pressure, And Density Basics | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::atmospheric-science-foundations::temperature-humidity-and-thermodynamic-effects` | Temperature, Humidity, And Thermodynamic Effects | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::atmospheric-science-foundations::wind-formation-and-boundary-layer-behavior` | Wind Formation And Boundary-Layer Behavior | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::atmospheric-science-foundations::microclimate-variation-across-ballparks` | Microclimate Variation Across Ballparks | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::atmospheric-science-foundations::atmospheric-science-applied-exercise-set` | Atmospheric Science Applied Exercise Set | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Environmental Science For Baseball Systems — **Climate, Variability, And Baseball Impacts**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::weather-vs-climate-in-baseball-analysis` | Weather Vs Climate In Baseball Analysis | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::long-term-climate-trends-and-ball-flight-implications` | Long-Term Climate Trends And Ball-Flight Implications | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::extreme-events-scheduling-and-safety-decisions` | Extreme Events, Scheduling, And Safety Decisions | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::environmental-uncertainty-communication` | Environmental Uncertainty Communication | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts::climate-impact-scenario-workshop` | Climate Impact Scenario Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Environmental Science For Baseball Systems — **Environmental Decision-Making**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `environmental-science-for-baseball-systems::environmental-decision-making::mitigation-and-adaptation-in-stadium-operations` | Mitigation And Adaptation In Stadium Operations | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::environmental-decision-making::sustainability-metrics-and-trade-off-analysis` | Sustainability Metrics And Trade-Off Analysis | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::environmental-decision-making::policy-ethics-and-environmental-justice-context` | Policy, Ethics, And Environmental Justice Context | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::environmental-decision-making::designing-environment-aware-baseball-studies` | Designing Environment-Aware Baseball Studies | **Environmental science**: Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally). | note |
| `environmental-science-for-baseball-systems::environmental-decision-making::environmental-science-capstone-brief` | Environmental Science Capstone Brief | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Framing Questions And Stakeholders**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::audience-analysis-students-coaches-analysts-public` | Audience Analysis: Students, Coaches, Analysts, Public | **Writing clarity**: Opening whyItMatters: "Sports analytics changes outcomes only when the right people understa…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::defining-decision-relevant-questions` | Defining Decision-Relevant Questions | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::scoping-claims-to-available-evidence` | Scoping Claims To Available Evidence | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::narrative-arcs-for-technical-findings` | Narrative Arcs For Technical Findings | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::risk-communication-for-high-variance-results` | Risk Communication For High-Variance Results | **Writing clarity**: Opening whyItMatters: "High-variance findings are common in sports analytics, especially in …"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::framing-questions-and-stakeholders::framing-workshop-one-dataset-three-audiences` | Framing Workshop: One Dataset, Three Audiences | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Visual Rhetoric And Chart Storytelling**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::story-structure-through-sequential-visuals` | Story Structure Through Sequential Visuals | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::emphasis-without-distortion` | Emphasis Without Distortion | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::comparative-framing-and-baseline-selection` | Comparative Framing And Baseline Selection | **Writing clarity**: Opening whyItMatters: "Comparisons drive most baseball analytics decisions, but poorly chose…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::annotation-as-argument` | Annotation As Argument | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::multi-panel-narrative-construction` | Multi-Panel Narrative Construction | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::common-misleading-patterns-and-how-to-avoid-them` | Common Misleading Patterns And How To Avoid Them | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling::storytelling-critique-lab` | Storytelling Critique Lab | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Writing Methodology And Caveats**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::methods-sections-readers-can-audit` | Methods Sections Readers Can Audit | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::assumption-registers-and-limitation-statements` | Assumption Registers And Limitation Statements | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::reporting-model-choices-transparently` | Reporting Model Choices Transparently | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::uncertainty-language-templates` | Uncertainty Language Templates | **Writing clarity**: Opening whyItMatters: "Uncertainty is often communicated inconsistently across baseball anal…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::reproducibility-statements-and-artifact-links` | Reproducibility Statements And Artifact Links | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::writing-for-technical-vs-non-technical-readers` | Writing For Technical Vs Non-Technical Readers | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::writing-methodology-and-caveats::methodology-rewrite-workshop` | Methodology Rewrite Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Presentations, Debates, And Peer Review**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::slide-architecture-for-analytical-arguments` | Slide Architecture For Analytical Arguments | **Writing clarity**: Opening whyItMatters: "In baseball decision meetings, slide architecture determines whether …"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::oral-defense-of-modeling-choices` | Oral Defense Of Modeling Choices | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::handling-cross-examination-and-objections` | Handling Cross-Examination And Objections | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::constructive-peer-review-rubrics` | Constructive Peer Review Rubrics | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::debate-formats-for-causal-claims` | Debate Formats For Causal Claims | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::revision-cycles-from-feedback` | Revision Cycles From Feedback | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::presentations-debates-and-peer-review::live-seminar-simulation` | Live Seminar Simulation | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Capstone Composition And Defense**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::capstone-topic-selection-and-proposal` | Capstone Topic Selection And Proposal | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::literature-positioning-and-prior-work-context` | Literature Positioning And Prior Work Context | **Writing clarity**: Opening whyItMatters: "A capstone claim is more credible when positioned against relevant pr…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::data-model-narrative-integration` | Data + Model + Narrative Integration | **Baseball domain**: 2 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::drafting-the-technical-report` | Drafting The Technical Report | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::building-the-executive-summary` | Building The Executive Summary | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::visual-appendix-and-reproducibility-bundle` | Visual Appendix And Reproducibility Bundle | **Writing clarity**: Opening whyItMatters: "Capstone claims remain useful only if supporting visuals and reproduc…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::mock-defense-and-rubric-scoring` | Mock Defense And Rubric Scoring | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |
| `communicating-sports-analytics-insights::capstone-composition-and-defense::final-capstone-submission-and-reflection` | Final Capstone Submission And Reflection | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

### Communicating Sports Analytics Insights — **Scientific Paper Literacy For Sports Analytics**

| Lesson key | Title | Primary SME concern | Sev |
| --- | --- | --- | --- |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::paper-structure-and-reading-strategy` | Paper Structure And Reading Strategy | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::methods-section-deconstruction` | Methods Section Deconstruction | **Writing clarity**: Opening whyItMatters: "Methods Section Deconstruction matters because baseball organizations…"—watch title repetition inside chunk headings. | note |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::statistical-claims-effect-sizes-and-uncertainty` | Statistical Claims Effect Sizes And Uncertainty | **Baseball domain**: 3 worked examples; scenarios should stay rule-plausible on next editorial pass. | note |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::reproducibility-data-access-and-supplementary-materials` | Reproducibility Data Access And Supplementary Materials | **Instructional design**: 7 practice prompts across practiceSets; warmup/core/stretch type contract appears consistent. | note |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::legitimacy-and-credibility-evaluation-framework` | Legitimacy And Credibility Evaluation Framework | **Math accuracy**: Objectives (3) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts. | note |
| `communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics::from-evidence-to-independent-judgment-decision-memo-workshop` | From Evidence To Independent Judgment Decision Memo Workshop | **Assessment alignment**: Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere. | note |

## 3. Unit-level analysis (each blueprint unit)

Each subsection is **2–4 sentences**: completeness vs typical college expectations, sequencing, and explicit gaps—without asserting baseball facts beyond the blueprint titles.

### Track: Algebra Foundations For Baseball Analytics

Covers service-course algebra through small matrices with baseball quantity motivation. Compared with a traditional college algebra syllabus, formal abstraction and proof are lighter—appropriate for applications-first analytics learners, but math specialists may want optional extensions (vector spaces, eigenmethods).

#### Linear Expressions, Equations, And Constraints (`algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints`)

This unit sequences **5** lessons from “Variables, Units, And Baseball Quantities” through “Algebra Error Checking And Sanity Bounds”. Early lessons (Variables, Units, And Baseball Quantities; Solving One-Step And Multi-Step Equations Reliably; Inequalities For Performance Threshold Questions) set up definitions and representations that later lessons apply. Versus a traditional college algebra / linear intro course, abstract structure (general vector spaces, isomorphism) is de-emphasized in favor of computable baseball constraints—appropriate for applications-first pathways.

#### Functions And Representations (`algebra-foundations-for-baseball-analytics::functions-and-representations`)

This unit sequences **5** lessons from “Function Notation Through Baseball Input-Output Stories” through “Composing Functions In Modeling Pipelines”. Early lessons (Function Notation Through Baseball Input-Output Stories; Domain, Range, And Physical Plausibility; Linear Functions And Rate Interpretations) set up definitions and representations that later lessons apply. Versus a traditional college algebra / linear intro course, abstract structure (general vector spaces, isomorphism) is de-emphasized in favor of computable baseball constraints—appropriate for applications-first pathways.

#### Systems And Modeling Structure (`algebra-foundations-for-baseball-analytics::systems-and-modeling-structure`)

This unit sequences **5** lessons from “Two-Equation Systems From Baseball Scenario Constraints” through “Algebra Foundations Synthesis Workshop”. Early lessons (Two-Equation Systems From Baseball Scenario Constraints; Substitution Vs Elimination Strategy Selection; Interpreting Intersections As Feasible States) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Versus a traditional college algebra / linear intro course, abstract structure (general vector spaces, isomorphism) is de-emphasized in favor of computable baseball constraints—appropriate for applications-first pathways.

### Track: Geometry Foundations For Baseball Context

High-school-to-early-college geometry with field overlays; strong on explicit frames before formulas. Typical college geometry courses may spend more on rigid motions and analytic conics—only partially represented.

#### Coordinate Geometry Essentials (`geometry-foundations-for-baseball-context::coordinate-geometry-essentials`)

This unit sequences **5** lessons from “Coordinate Systems For Baseball Fields” through “Line Equations For Defensive Alignment Paths”. Early lessons (Coordinate Systems For Baseball Fields; Distance Formula And Baseline Measurement; Midpoints, Segments, And Position Landmarks) set up definitions and representations that later lessons apply. Versus a standard college geometry or surveying course, transformational geometry and full analytic conics treatment are only partially implied by titles—fine for analytics service math, but geometry majors would need extensions.

#### Angles, Triangles, And Measurement (`geometry-foundations-for-baseball-context::angles-triangles-and-measurement`)

This unit sequences **5** lessons from “Angle Measure Conventions For Motion Analysis” through “Geometric Proof Mindset For Model Trust”. Early lessons (Angle Measure Conventions For Motion Analysis; Triangle Similarity In Camera And Field Scaling; Right Triangle Geometry For Component Thinking) set up definitions and representations that later lessons apply. Versus a standard college geometry or surveying course, transformational geometry and full analytic conics treatment are only partially implied by titles—fine for analytics service math, but geometry majors would need extensions.

#### Circles, Arcs, And Curvature (`geometry-foundations-for-baseball-context::circles-arcs-and-curvature`)

This unit sequences **5** lessons from “Circle Equations And Radial Interpretations” through “Geometry Foundations Synthesis Lab”. Early lessons (Circle Equations And Radial Interpretations; Arc Length, Curvature, And Outfield Wall Geometry; Sector Area And Angular Coverage) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Versus a standard college geometry or surveying course, transformational geometry and full analytic conics treatment are only partially implied by titles—fine for analytics service math, but geometry majors would need extensions.

### Track: Trigonometry And Precalculus For Baseball Modeling

Precalculus spine (trig, transforms, vectors) before calculus kinematics. Peer texts often include complex exponentials; absent here unless added later—call out if targeting honors STEM cohorts.

#### Trigonometric Core Concepts (`trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts`)

This unit sequences **5** lessons from “Trigonometric Functions Refresher For Modeling” through “Trig Identities For Simplifying Flight Equations”. Early lessons (Trigonometric Functions Refresher For Modeling; Unit Circle, Radians, And Angular Velocity In Context; SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion) set up definitions and representations that later lessons apply. Typical precalculus syllabi sometimes add complex numbers and deeper function families; those threads are not explicit in the unit title list—note if articulating to honors calculus.

#### Functions, Transformations, And Signals (`trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals`)

This unit sequences **5** lessons from “Phase Shift And Periodicity In Baseball Motion Signals” through “Precalculus Signal Synthesis Workshop”. Early lessons (Phase Shift And Periodicity In Baseball Motion Signals; Amplitude, Frequency, And Signal Interpretation; Polar, Cartesian, And Spherical Coordinate Conversions) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Typical precalculus syllabi sometimes add complex numbers and deeper function families; those threads are not explicit in the unit title list—note if articulating to honors calculus.

#### Vectors And Optimization Preparation (`trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation`)

This unit sequences **5** lessons from “Dot Product, Projection, And Directional Influence” through “Precalculus Capstone: From Angle To Decision”. Early lessons (Dot Product, Projection, And Directional Influence; Cross Product Intuition For Spin And Orientation; Angle Optimization Under Physical Constraints) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Typical precalculus syllabi sometimes add complex numbers and deeper function families; those threads are not explicit in the unit title list—note if articulating to honors calculus.

### Track: Calculus I And II For Baseball Dynamics

Calculus I–II topics with modeling emphasis; ε–δ depth and integration cookbook breadth are trimmed versus math-major tracks—documented tradeoff for readability.

#### Limits, Continuity, And Derivatives (`calculus-i-and-ii-for-baseball-dynamics::limits-continuity-and-derivatives`)

This unit sequences **5** lessons from “Limits As Trend Questions In Baseball Motion” through “Implicit Differentiation For Coupled Baseball Quantities”. Early lessons (Limits As Trend Questions In Baseball Motion; Continuity And Model Breakpoint Detection; Derivative As Instantaneous Rate Of Change) set up definitions and representations that later lessons apply. Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

#### Derivative Applications (`calculus-i-and-ii-for-baseball-dynamics::derivative-applications`)

This unit sequences **5** lessons from “Optimization For Launch Decisions” through “Derivative Application Synthesis Lab”. Early lessons (Optimization For Launch Decisions; Related Rates In Tracking And Orientation; Second Derivative And Curvature Interpretation) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

#### Integrals And Accumulation (`calculus-i-and-ii-for-baseball-dynamics::integrals-and-accumulation`)

This unit sequences **5** lessons from “Definite Integral As Accumulated Change” through “Integral Interpretation In Baseball Context”. Early lessons (Definite Integral As Accumulated Change; Fundamental Theorem Of Calculus In Modeling Workflow; Substitution And Integration By Parts) set up definitions and representations that later lessons apply. Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

### Track: Multivariable Calculus And Differential Equations

Partials through line integrals plus ODE capstone matches many engineering service courses; full Green/Stokes chain and transform methods are not center stage.

#### Multivariable Function Geometry (`multivariable-calculus-and-differential-equations::multivariable-function-geometry`)

This unit sequences **5** lessons from “Functions Of Several Variables In Baseball Systems” through “Multivariable Optimization Under Constraints”. Early lessons (Functions Of Several Variables In Baseball Systems; Partial Derivatives And Marginal Effects; Gradient, Directional Derivative, And Sensitivity) set up definitions and representations that later lessons apply. Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

#### Multiple Integration And Vector Fields (`multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields`)

This unit sequences **5** lessons from “Double Integrals Over Physical Regions” through “Multivariable Integration Synthesis Workshop”. Early lessons (Double Integrals Over Physical Regions; Coordinate Changes In Multivariable Integrals; Vector Fields And Flow Interpretation) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

#### Differential Equations For Dynamic Systems (`multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems`)

This unit sequences **5** lessons from “First-Order ODEs For Baseball Change Models” through “Differential Equations Capstone Integration”. Early lessons (First-Order ODEs For Baseball Change Models; Second-Order ODEs For Motion Dynamics; Linear Systems And Stability Intuition) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.

### Track: Baseball Physics Foundations

Large, modular physics-of-flight sequence from field maps through environment and reporting. Sequencing is coherent; overlap with earlier math tracks is intentional spiral. College physics lab evidence and instrument error are under-emphasized relative to analytic modeling—**verify externally** when tightening aerodynamic numbers.

#### Geometry Of The Field And Ball Flight (`baseball-physics-foundations::geometry-of-the-field-and-ball-flight`)

This unit sequences **8** lessons from “Coordinate Systems For Baseball Fields” through “Geometry Synthesis Lab: Mapping Ball Flight Regions”. Early lessons (Coordinate Systems For Baseball Fields; Field Dimensions, Symmetry, And Constraint Boundaries; Arc Length, Curvature, And Outfield Wall Geometry) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

#### Trigonometry And Vector Decomposition (`baseball-physics-foundations::trigonometry-and-vector-decomposition`)

This unit sequences **12** lessons from “Trigonometric Functions Refresher For Modeling” through “Trigonometry Mastery Workshop: Multi-Step Applied Problems”. Early lessons (Trigonometric Functions Refresher For Modeling; Unit Circle, Radians, And Angular Velocity In Context; SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

#### Newtonian Mechanics And Projectile Motion (`baseball-physics-foundations::newtonian-mechanics-and-projectile-motion`)

This unit sequences **14** lessons from “Newton's Laws Revisited For Ball-Bat And Ball-Air Systems” through “Newtonian Synthesis Lab: Build A Full Forward Simulator”. Early lessons (Newton's Laws Revisited For Ball-Bat And Ball-Air Systems; Kinematics In One And Two Dimensions; Free-Body Diagrams For Batted Ball Motion) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

#### Drag, Lift, And Aerodynamics Of The Baseball (`baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball`)

This unit sequences **10** lessons from “Physical Meaning Of Drag Coefficient In Baseball” through “Aerodynamics Practicum: Inference And Validation”. Early lessons (Physical Meaning Of Drag Coefficient In Baseball; Reynolds Number Regimes And Seam Effects; Boundary Layers, Turbulence, And Flight Consequences) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

#### Environmental Effects And Ballpark Context (`baseball-physics-foundations::environmental-effects-and-ballpark-context`)

This unit sequences **8** lessons from “Air Density, Temperature, Pressure, And Humidity” through “Environment Integration Lab: Context-Aware Distance Models”. Early lessons (Air Density, Temperature, Pressure, And Humidity; Altitude And Effective Resistance Landscapes; Wind Vector Decomposition Relative To Ball Path) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

#### Synthesis — Building Physics-Based Ball-Flight Models (`baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models`)

This unit sequences **8** lessons from “End-To-End Model Architecture For Ball Flight” through “Physics Capstone Milestone: Technical Memo Draft”. Early lessons (End-To-End Model Architecture For Ball Flight; Choosing State Variables And Parameter Priors; Numerical Solvers, Step Size, And Convergence Tradeoffs) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.

### Track: Statistical Modeling For Baseball

Modern DGP-first framing, EDA pitfalls, regression/GLM intro, validation, and causality—strong vs legacy “button-click” stats. Mixed models, survival, and hierarchical Bayes are out of scope—fine if labeled.

#### Data Generating Processes In Baseball (`statistical-modeling-for-baseball::data-generating-processes-in-baseball`)

This unit sequences **7** lessons from “What Is A Data Generating Process?” through “DGP Case Study: Home Run Rate Dynamics”. Early lessons (What Is A Data Generating Process?; Randomness, Structure, And Measurement Error; Selection Effects In Public Baseball Data) set up definitions and representations that later lessons apply. Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.

#### Exploratory Data Analysis And Sampling Pitfalls (`statistical-modeling-for-baseball::exploratory-data-analysis-and-sampling-pitfalls`)

This unit sequences **8** lessons from “EDA Framing: Questions Before Charts” through “EDA Notebook Practicum With Review Rubric”. Early lessons (EDA Framing: Questions Before Charts; Distribution Shape, Tail Behavior, And Robust Summaries; Stratification And Simpson's Paradox In Baseball) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.

#### Regression And Generalized Linear Models For HR Probability (`statistical-modeling-for-baseball::regression-and-generalized-linear-models-for-hr-probability`)

This unit sequences **10** lessons from “Linear Regression Baseline For Interpretability” through “Regression Lab: Build, Compare, Defend”. Early lessons (Linear Regression Baseline For Interpretability; Feature Engineering For Batted-Ball Outcomes; Logistic Regression For Home Run Probability) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.

#### Uncertainty, Confidence Intervals, And Model Validation (`statistical-modeling-for-baseball::uncertainty-confidence-intervals-and-model-validation`)

This unit sequences **9** lessons from “Sampling Distributions In Practice” through “Validation Dossier Workshop”. Early lessons (Sampling Distributions In Practice; Confidence Intervals For Means, Effects, And Probabilities; Bootstrap Methods For Complex Metrics) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.

#### Causality Vs Correlation In Baseball Narratives (`statistical-modeling-for-baseball::causality-vs-correlation-in-baseball-narratives`)

This unit sequences **8** lessons from “Association Is Not Causation: Formal Definitions” through “Causality Debate Seminar And Position Paper”. Early lessons (Association Is Not Causation: Formal Definitions; DAGs For Baseball Questions; Confounders, Mediators, And Colliders) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.

### Track: Data Analysis With Statcast

Professional-feeling pipeline from schema to reproducibility and figure recreation. SQL/DataFrame mechanics are implied in prose rather than a dedicated syntax module—acceptable if paired labs exist elsewhere.

#### Statcast Schema And Data Cleaning (`data-analysis-with-statcast::statcast-schema-and-data-cleaning`)

This unit sequences **10** lessons from “Statcast Table Structure And Core Fields” through “Data Cleaning Practicum With QA Checklist”. Early lessons (Statcast Table Structure And Core Fields; Type Systems, Units, And Semantic Consistency; Event-Level Data Sources And Measurement Pipelines) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.

#### Feature Engineering For Ball Flight And HR Outcomes (`data-analysis-with-statcast::feature-engineering-for-ball-flight-and-hr-outcomes`)

This unit sequences **10** lessons from “Feature Engineering Principles For Baseball Models” through “Feature Store Mini-Project”. Early lessons (Feature Engineering Principles For Baseball Models; Derived Kinematic Features From Raw Inputs; Expected Statistics Construction And Assumptions) set up definitions and representations that later lessons apply. Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.

#### Visualization Design For Baseball Questions (`data-analysis-with-statcast::visualization-design-for-baseball-questions`)

This unit sequences **8** lessons from “Chart Selection By Statistical Question Type” through “Visualization Critique Studio”. Early lessons (Chart Selection By Statistical Question Type; Designing Honest Axes, Scales, And Encodings; Dense Scatter, Hexbin, And Heatmap Tradeoffs) set up definitions and representations that later lessons apply. Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.

#### Reproducible Pipelines And Notebooks (`data-analysis-with-statcast::reproducible-pipelines-and-notebooks`)

This unit sequences **9** lessons from “Reproducibility Principles In Applied Analytics” through “Reproducibility Audit Practicum”. Early lessons (Reproducibility Principles In Applied Analytics; Notebook Structure For Reviewability; Parameterized Analysis Workflows) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.

#### Applied Projects — Recreating Deadball Tracker Figures (`data-analysis-with-statcast::applied-projects-recreating-deadball-tracker-figures`)

This unit sequences **8** lessons from “Project Scoping And Analytical Question Refinement” through “Applied Project Review And Revision Cycle”. Early lessons (Project Scoping And Analytical Question Refinement; Rebuilding Drag Vs HR With Clear Assumptions; Rebuilding Expected Vs Actual Distance) set up definitions and representations that later lessons apply. Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.

### Track: Environmental Science For Baseball Systems

Atmospheric literacy through decision brief; not a replacement for a full environmental science degree—scope should stay transparent in capstone prompts.

#### Atmospheric Science Foundations (`environmental-science-for-baseball-systems::atmospheric-science-foundations`)

This unit sequences **5** lessons from “Air Composition, Pressure, And Density Basics” through “Atmospheric Science Applied Exercise Set”. Early lessons (Air Composition, Pressure, And Density Basics; Temperature, Humidity, And Thermodynamic Effects; Wind Formation And Boundary-Layer Behavior) set up definitions and representations that later lessons apply. A full environmental science major expects chemistry, ecosystems, and field methods breadth; these units target atmospheric and decision lenses for baseball operations—keep capstone scope transparent.

#### Climate, Variability, And Baseball Impacts (`environmental-science-for-baseball-systems::climate-variability-and-baseball-impacts`)

This unit sequences **5** lessons from “Weather Vs Climate In Baseball Analysis” through “Climate Impact Scenario Workshop”. Early lessons (Weather Vs Climate In Baseball Analysis; Long-Term Climate Trends And Ball-Flight Implications; Extreme Events, Scheduling, And Safety Decisions) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). A full environmental science major expects chemistry, ecosystems, and field methods breadth; these units target atmospheric and decision lenses for baseball operations—keep capstone scope transparent.

#### Environmental Decision-Making (`environmental-science-for-baseball-systems::environmental-decision-making`)

This unit sequences **5** lessons from “Mitigation And Adaptation In Stadium Operations” through “Environmental Science Capstone Brief”. Early lessons (Mitigation And Adaptation In Stadium Operations; Sustainability Metrics And Trade-Off Analysis; Policy, Ethics, And Environmental Justice Context) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). A full environmental science major expects chemistry, ecosystems, and field methods breadth; these units target atmospheric and decision lenses for baseball operations—keep capstone scope transparent.

### Track: Communicating Sports Analytics Insights

Stakeholder analysis through defense and paper literacy mirrors technical communication minors; ensure capstone prompts require real artifact links (notebook, data hash) when LMS integration arrives.

#### Framing Questions And Stakeholders (`communicating-sports-analytics-insights::framing-questions-and-stakeholders`)

This unit sequences **6** lessons from “Audience Analysis: Students, Coaches, Analysts, Public” through “Framing Workshop: One Dataset, Three Audiences”. Early lessons (Audience Analysis: Students, Coaches, Analysts, Public; Defining Decision-Relevant Questions; Scoping Claims To Available Evidence) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

#### Visual Rhetoric And Chart Storytelling (`communicating-sports-analytics-insights::visual-rhetoric-and-chart-storytelling`)

This unit sequences **7** lessons from “Story Structure Through Sequential Visuals” through “Storytelling Critique Lab”. Early lessons (Story Structure Through Sequential Visuals; Emphasis Without Distortion; Comparative Framing And Baseline Selection) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

#### Writing Methodology And Caveats (`communicating-sports-analytics-insights::writing-methodology-and-caveats`)

This unit sequences **7** lessons from “Methods Sections Readers Can Audit” through “Methodology Rewrite Workshop”. Early lessons (Methods Sections Readers Can Audit; Assumption Registers And Limitation Statements; Reporting Model Choices Transparently) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

#### Presentations, Debates, And Peer Review (`communicating-sports-analytics-insights::presentations-debates-and-peer-review`)

This unit sequences **7** lessons from “Slide Architecture For Analytical Arguments” through “Live Seminar Simulation”. Early lessons (Slide Architecture For Analytical Arguments; Oral Defense Of Modeling Choices; Handling Cross-Examination And Objections) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

#### Capstone Composition And Defense (`communicating-sports-analytics-insights::capstone-composition-and-defense`)

This unit sequences **8** lessons from “Capstone Topic Selection And Proposal” through “Final Capstone Submission And Reflection”. Early lessons (Capstone Topic Selection And Proposal; Literature Positioning And Prior Work Context; Data + Model + Narrative Integration) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

#### Scientific Paper Literacy For Sports Analytics (`communicating-sports-analytics-insights::scientific-paper-literacy-for-sports-analytics`)

This unit sequences **6** lessons from “Paper Structure And Reading Strategy” through “From Evidence To Independent Judgment Decision Memo Workshop”. Early lessons (Paper Structure And Reading Strategy; Methods Section Deconstruction; Statistical Claims Effect Sizes And Uncertainty) set up definitions and representations that later lessons apply. The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched). Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.

## 4. Panel synthesis — recurring themes

1. **Summative constructed responses** — 48 / 278 lessons define summativeReflection in the merged lesson store. *Where:* `frontend/src/content/lessons/allLessons.ts` applies `mergeUnitCloserSummatives` then `ensureIntegrativeTitleSummatives`
2. **Integrative titles vs artifacts** — Lab/Workshop/Capstone titles now pair with honor-system rubrics by default. *Where:* §2 **major** density should drop after regeneration; keep lesson-specific memo quality on high-stakes units
3. **Cross-track duplicate display titles** — 13 titles appear twice (math + baseball-physics-foundations). *Where:* Includes coordinate systems, arc length, full trig stack—compare paired keys in §2
4. **Diagram placeholder debt** — Bracketed inline diagram tokens. *Where:* Most lessons with conceptChunks—see **minor** placeholder rows
5. **Spiral curriculum risk** — Physics track revisits trig/vector lessons. *Where:* Learners skipping precalculus track may miss foundations—prerequisites strings should cite prior keys
6. **Statcast + public data ethics** — Selection, leakage, sensor drift. *Where:* `statistical-modeling-for-baseball` + `data-analysis-with-statcast` units
7. **Uncertainty as cross-cutting skill** — Stats validation + communication tracks both stress honest limits. *Where:* Cross-link objectives so learners reuse same templates in code and memos
8. **MCQ-only depth ceiling** — assessmentItems universal. *Where:* Mitigate with summativeReflection rollouts per unit
9. **LaTeX fragility** — Inline math in JSON lesson sources. *Where:* `frontend/src/content/lessonLatexSmoke.test.ts`
10. **Environmental overlap** — Air density / wind in physics vs environmental tracks. *Where:* Coordinate examples so learners see physics model vs climate narrative distinction
11. **Causality depth** — DAG + quasi-experiments. *Where:* `causality-vs-correlation-in-baseball-narratives`—add reading list when expanding
12. **Reproducibility motif** — Notebooks, caching, determinism. *Where:* `reproducible-pipelines-and-notebooks` unit + communication methodology
13. **Accessibility of visuals** — figure.alt vs placeholder prose. *Where:* `lessonTypes.ts` ConceptChunk.figure underused vs placeholder text
14. **Formalism boundaries** — Proof-light calculus/multivar. *Where:* Declare in instructor-facing notes—not silent downgrade
15. **Objective templating** — Repeated objective verb patterns. *Where:* Editorial pass to tie each objective to one assessment item ID

## 5. Implementation backlog (P0 / P1 / P2)

### P0 — trust and contract

| Finding | Concrete repo action |
| --- | --- |
| Mechanism claims in aerodynamics / environment | Edit `frontend/src/content/lessons/handwritten/handAuthoredPhysicsB.ts` (and related chunks): cite peer-reviewed sources or qualify; add **verify externally** comments in JSON if awaiting refs. |
| Blueprint lesson-count comment | Keep `frontend/src/content/deepCourseBlueprint.ts` collectAllLessonKeys comment aligned with **278** whenever lessons are added or removed. |
| Integrative lesson titles without summatives | For each §2 **major** row: add `summativeReflection` to the matching `LessonDocument` in the correct `handAuthored*.ts` file OR rename lesson in blueprint (slug migration is higher risk). |

### P1 — pedagogy completeness

| Finding | Concrete repo action |
| Sparse summativeReflection | Clone rubric structure from algebra unit into unit closers in `handAuthoredGeometry.ts`, `handAuthoredTrigPrecalc.ts`, etc., one PR per track. |
| Duplicate titles in UI | Adjust `LessonDocument.title` strings (display only) to include track disambiguator, or update Next lesson UI component to prepend track acronym. |
| Spiral prerequisites | Populate `prerequisites` with explicit prior lesson keys for physics duplicates of trig lessons. |

### P2 — polish / tooling

| Finding | Concrete repo action |
| Diagram placeholders | Replace tokens with SVG/PNG under `frontend/public/curriculum/` and wire `ConceptChunk.figure`. |
| QA automation | Extend `frontend/scripts/curriculumFreshmanScan.ts` or add `frontend/src/content/summativePolicy.test.ts` encoding the capstone-title rule once policy is fixed; regenerate this document with `npx tsx scripts/gen-sme-panel-review.ts` after bulk curriculum edits. |
| Catalog comment accuracy | Keep `export-curriculum.ts` output in sync; optional CI step to diff lesson_count vs collectAllLessonKeys. |
