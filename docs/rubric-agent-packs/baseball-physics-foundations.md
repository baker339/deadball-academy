# Rubric agent pack: Baseball Physics Foundations

**Track slug:** `baseball-physics-foundations`

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
| 1 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields` | Coordinate Systems For Baseball Fields | **note** | 0 |
| 2 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::field-dimensions-symmetry-and-constraint-boundaries` | Field Dimensions, Symmetry, And Constraint Boundaries | **note** | 0 |
| 3 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry` | Arc Length, Curvature, And Outfield Wall Geometry | **note** | 0 |
| 4 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::launch-angle-as-a-geometric-object` | Launch Angle As A Geometric Object | **note** | 0 |
| 5 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::2d-to-3d-flight-geometry-transitions` | 2D To 3D Flight Geometry Transitions | **note** | 0 |
| 6 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::ballpark-topology-and-home-run-boundary-surfaces` | Ballpark Topology And Home Run Boundary Surfaces | **note** | 0 |
| 7 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometric-sensitivity-small-angle-changes-large-outcome-swings` | Geometric Sensitivity: Small Angle Changes, Large Outcome Swings | **note** | 0 |
| 8 | `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions` | Geometry Synthesis Lab: Mapping Ball Flight Regions | **note** | 0 |
| 9 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling` | Trigonometric Functions Refresher For Modeling | **note** | 0 |
| 10 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context` | Unit Circle, Radians, And Angular Velocity In Context | **note** | 0 |
| 11 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion` | SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion | **note** | 0 |
| 12 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions` | Inverse Trig For Reconstructing Launch Conditions | **note** | 0 |
| 13 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence` | Dot Product, Projection, And Directional Influence | **note** | 0 |
| 14 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation` | Cross Product Intuition For Spin And Orientation | **note** | 0 |
| 15 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions` | Polar, Cartesian, And Spherical Coordinate Conversions | **note** | 0 |
| 16 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals` | Phase Shift And Periodicity In Baseball Motion Signals | **note** | 0 |
| 17 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations` | Trig Identities For Simplifying Flight Equations | **note** | 0 |
| 18 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints` | Angle Optimization Under Physical Constraints | **note** | 0 |
| 19 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations` | Error Propagation In Trig-Based Calculations | **note** | 0 |
| 20 | `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems` | Trigonometry Mastery Workshop: Multi-Step Applied Problems | **note** | 0 |
| 21 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newton-s-laws-revisited-for-ball-bat-and-ball-air-systems` | Newton's Laws Revisited For Ball-Bat And Ball-Air Systems | **note** | 0 |
| 22 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::kinematics-in-one-and-two-dimensions` | Kinematics In One And Two Dimensions | **note** | 0 |
| 23 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::free-body-diagrams-for-batted-ball-motion` | Free-Body Diagrams For Batted Ball Motion | **note** | 0 |
| 24 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::initial-conditions-exit-velocity-launch-angle-spin-inputs` | Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs | **note** | 0 |
| 25 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::no-drag-projectile-derivation-from-first-principles` | No-Drag Projectile Derivation From First Principles | **note** | 0 |
| 26 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::time-of-flight-apex-and-range-relationships` | Time Of Flight, Apex, And Range Relationships | **note** | 0 |
| 27 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::energy-methods-vs-force-methods-in-ball-flight` | Energy Methods Vs Force Methods In Ball Flight | **note** | 0 |
| 28 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::momentum-transfer-in-contact-events` | Momentum Transfer In Contact Events | **note** | 0 |
| 29 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::introducing-drag-into-newton-s-second-law` | Introducing Drag Into Newton's Second Law | **note** | 0 |
| 30 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::solving-drag-inclusive-odes-numerically` | Solving Drag-Inclusive ODEs Numerically | **note** | 0 |
| 31 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::lift-and-magnus-contributions-to-trajectory-shape` | Lift And Magnus Contributions To Trajectory Shape | **note** | 0 |
| 32 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::comparing-vacuum-drag-only-and-drag-lift-models` | Comparing Vacuum, Drag-Only, And Drag+Lift Models | **note** | 0 |
| 33 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::parameter-sensitivity-and-stability-in-trajectory-models` | Parameter Sensitivity And Stability In Trajectory Models | **note** | 0 |
| 34 | `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newtonian-synthesis-lab-build-a-full-forward-simulator` | Newtonian Synthesis Lab: Build A Full Forward Simulator | **note** | 0 |
| 35 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::physical-meaning-of-drag-coefficient-in-baseball` | Physical Meaning Of Drag Coefficient In Baseball | **note** | 0 |
| 36 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::reynolds-number-regimes-and-seam-effects` | Reynolds Number Regimes And Seam Effects | **note** | 0 |
| 37 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::boundary-layers-turbulence-and-flight-consequences` | Boundary Layers, Turbulence, And Flight Consequences | **note** | 0 |
| 38 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::lift-coefficient-spin-rate-and-spin-axis` | Lift Coefficient, Spin Rate, And Spin Axis | **note** | 0 |
| 39 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::coupled-drag-lift-dynamics-in-flight` | Coupled Drag-Lift Dynamics In Flight | **note** | 0 |
| 40 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::estimating-aerodynamic-parameters-from-observational-data` | Estimating Aerodynamic Parameters From Observational Data | **note** | 0 |
| 41 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::identifiability-when-different-parameters-fit-similar-outcomes` | Identifiability: When Different Parameters Fit Similar Outcomes | **note** | 0 |
| 42 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-and-home-run-probability-pathways` | Aerodynamics And Home Run Probability Pathways | **note** | 0 |
| 43 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::model-misspecification-in-aerodynamic-inference` | Model Misspecification In Aerodynamic Inference | **note** | 0 |
| 44 | `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-practicum-inference-and-validation` | Aerodynamics Practicum: Inference And Validation | **note** | 0 |
| 45 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::air-density-temperature-pressure-and-humidity` | Air Density, Temperature, Pressure, And Humidity | **note** | 0 |
| 46 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::altitude-and-effective-resistance-landscapes` | Altitude And Effective Resistance Landscapes | **note** | 0 |
| 47 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::wind-vector-decomposition-relative-to-ball-path` | Wind Vector Decomposition Relative To Ball Path | **note** | 0 |
| 48 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::weather-variability-and-uncertainty-bands` | Weather Variability And Uncertainty Bands | **note** | 0 |
| 49 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::stadium-orientation-and-microclimate-interaction` | Stadium Orientation And Microclimate Interaction | **note** | 0 |
| 50 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::normalizing-outcomes-across-ballparks` | Normalizing Outcomes Across Ballparks | **note** | 0 |
| 51 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::environmental-counterfactuals-what-if-conditions-changed` | Environmental Counterfactuals (What If Conditions Changed?) | **note** | 0 |
| 52 | `baseball-physics-foundations::environmental-effects-and-ballpark-context::environment-integration-lab-context-aware-distance-models` | Environment Integration Lab: Context-Aware Distance Models | **note** | 0 |
| 53 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::end-to-end-model-architecture-for-ball-flight` | End-To-End Model Architecture For Ball Flight | **note** | 0 |
| 54 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::choosing-state-variables-and-parameter-priors` | Choosing State Variables And Parameter Priors | **note** | 0 |
| 55 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::numerical-solvers-step-size-and-convergence-tradeoffs` | Numerical Solvers, Step Size, And Convergence Tradeoffs | **note** | 0 |
| 56 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::calibration-with-statcast-style-observations` | Calibration With Statcast-Style Observations | **note** | 0 |
| 57 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::residual-analysis-and-diagnostic-workflows` | Residual Analysis And Diagnostic Workflows | **note** | 0 |
| 58 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::scenario-analysis-and-simulation-design` | Scenario Analysis And Simulation Design | **note** | 0 |
| 59 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::reproducible-reporting-for-physics-models` | Reproducible Reporting For Physics Models | **note** | 0 |
| 60 | `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::physics-capstone-milestone-technical-memo-draft` | Physics Capstone Milestone: Technical Memo Draft | **note** | 0 |

---

## Per-lesson detail

### 1. Coordinate Systems For Baseball Fields

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 2. Field Dimensions, Symmetry, And Constraint Boundaries

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::field-dimensions-symmetry-and-constraint-boundaries`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 3. Arc Length, Curvature, And Outfield Wall Geometry

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 4. Launch Angle As A Geometric Object

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::launch-angle-as-a-geometric-object`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 5. 2D To 3D Flight Geometry Transitions

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::2d-to-3d-flight-geometry-transitions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 6. Ballpark Topology And Home Run Boundary Surfaces

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::ballpark-topology-and-home-run-boundary-surfaces`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 7. Geometric Sensitivity: Small Angle Changes, Large Outcome Swings

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometric-sensitivity-small-angle-changes-large-outcome-swings`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 8. Geometry Synthesis Lab: Mapping Ball Flight Regions

- **lessonKey:** `baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 9. Trigonometric Functions Refresher For Modeling

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 10. Unit Circle, Radians, And Angular Velocity In Context

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 11. SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 12. Inverse Trig For Reconstructing Launch Conditions

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.390Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 13. Dot Product, Projection, And Directional Influence

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 14. Cross Product Intuition For Spin And Orientation

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 15. Polar, Cartesian, And Spherical Coordinate Conversions

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 16. Phase Shift And Periodicity In Baseball Motion Signals

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 17. Trig Identities For Simplifying Flight Equations

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 18. Angle Optimization Under Physical Constraints

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 19. Error Propagation In Trig-Based Calculations

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 20. Trigonometry Mastery Workshop: Multi-Step Applied Problems

- **lessonKey:** `baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 21. Newton's Laws Revisited For Ball-Bat And Ball-Air Systems

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newton-s-laws-revisited-for-ball-bat-and-ball-air-systems`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 22. Kinematics In One And Two Dimensions

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::kinematics-in-one-and-two-dimensions`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 23. Free-Body Diagrams For Batted Ball Motion

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::free-body-diagrams-for-batted-ball-motion`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 24. Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::initial-conditions-exit-velocity-launch-angle-spin-inputs`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 25. No-Drag Projectile Derivation From First Principles

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::no-drag-projectile-derivation-from-first-principles`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 26. Time Of Flight, Apex, And Range Relationships

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::time-of-flight-apex-and-range-relationships`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 27. Energy Methods Vs Force Methods In Ball Flight

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::energy-methods-vs-force-methods-in-ball-flight`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 28. Momentum Transfer In Contact Events

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::momentum-transfer-in-contact-events`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 29. Introducing Drag Into Newton's Second Law

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::introducing-drag-into-newton-s-second-law`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 30. Solving Drag-Inclusive ODEs Numerically

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::solving-drag-inclusive-odes-numerically`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.391Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 31. Lift And Magnus Contributions To Trajectory Shape

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::lift-and-magnus-contributions-to-trajectory-shape`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 32. Comparing Vacuum, Drag-Only, And Drag+Lift Models

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::comparing-vacuum-drag-only-and-drag-lift-models`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 33. Parameter Sensitivity And Stability In Trajectory Models

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::parameter-sensitivity-and-stability-in-trajectory-models`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 34. Newtonian Synthesis Lab: Build A Full Forward Simulator

- **lessonKey:** `baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newtonian-synthesis-lab-build-a-full-forward-simulator`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 35. Physical Meaning Of Drag Coefficient In Baseball

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::physical-meaning-of-drag-coefficient-in-baseball`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 36. Reynolds Number Regimes And Seam Effects

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::reynolds-number-regimes-and-seam-effects`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 37. Boundary Layers, Turbulence, And Flight Consequences

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::boundary-layers-turbulence-and-flight-consequences`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 38. Lift Coefficient, Spin Rate, And Spin Axis

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::lift-coefficient-spin-rate-and-spin-axis`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 39. Coupled Drag-Lift Dynamics In Flight

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::coupled-drag-lift-dynamics-in-flight`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 40. Estimating Aerodynamic Parameters From Observational Data

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::estimating-aerodynamic-parameters-from-observational-data`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 41. Identifiability: When Different Parameters Fit Similar Outcomes

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::identifiability-when-different-parameters-fit-similar-outcomes`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 42. Aerodynamics And Home Run Probability Pathways

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-and-home-run-probability-pathways`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 43. Model Misspecification In Aerodynamic Inference

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::model-misspecification-in-aerodynamic-inference`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 44. Aerodynamics Practicum: Inference And Validation

- **lessonKey:** `baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::aerodynamics-practicum-inference-and-validation`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.392Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 45. Air Density, Temperature, Pressure, And Humidity

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::air-density-temperature-pressure-and-humidity`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 46. Altitude And Effective Resistance Landscapes

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::altitude-and-effective-resistance-landscapes`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 47. Wind Vector Decomposition Relative To Ball Path

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::wind-vector-decomposition-relative-to-ball-path`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 48. Weather Variability And Uncertainty Bands

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::weather-variability-and-uncertainty-bands`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 49. Stadium Orientation And Microclimate Interaction

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::stadium-orientation-and-microclimate-interaction`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 50. Normalizing Outcomes Across Ballparks

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::normalizing-outcomes-across-ballparks`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 51. Environmental Counterfactuals (What If Conditions Changed?)

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::environmental-counterfactuals-what-if-conditions-changed`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 52. Environment Integration Lab: Context-Aware Distance Models

- **lessonKey:** `baseball-physics-foundations::environmental-effects-and-ballpark-context::environment-integration-lab-context-aware-distance-models`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 53. End-To-End Model Architecture For Ball Flight

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::end-to-end-model-architecture-for-ball-flight`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 54. Choosing State Variables And Parameter Priors

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::choosing-state-variables-and-parameter-priors`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 55. Numerical Solvers, Step Size, And Convergence Tradeoffs

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::numerical-solvers-step-size-and-convergence-tradeoffs`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 56. Calibration With Statcast-Style Observations

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::calibration-with-statcast-style-observations`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 57. Residual Analysis And Diagnostic Workflows

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::residual-analysis-and-diagnostic-workflows`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 58. Scenario Analysis And Simulation Design

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::scenario-analysis-and-simulation-design`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 59. Reproducible Reporting For Physics Models

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::reproducible-reporting-for-physics-models`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 

### 60. Physics Capstone Milestone: Technical Memo Draft

- **lessonKey:** `baseball-physics-foundations::synthesis-building-physics-based-ball-flight-models::physics-capstone-milestone-technical-memo-draft`
- **Heuristic overallSeverity:** **note**
- **Heuristic generatedAt:** 2026-05-11T22:42:13.393Z

**Heuristic findings:**
- _(none)_

#### Agent qualitative review

- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_
- **Notes:**
  - 
- **Excerpt citations (if any):**
  - 
