import type { TrackBlueprint, UnitBlueprint } from "./lessonTypes";

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeUnit(title: string, lessonTitles: string[]): UnitBlueprint {
  return {
    title,
    slug: slugify(title),
    lessons: lessonTitles.map((lessonTitle) => ({
      title: lessonTitle,
      slug: slugify(lessonTitle),
    })),
  };
}

export const deepCourseBlueprint: TrackBlueprint[] = [
  {
    title: "Algebra Foundations For Baseball Analytics",
    slug: "algebra-foundations-for-baseball-analytics",
    units: [
      makeUnit("Linear Expressions, Equations, And Constraints", [
        "Variables, Units, And Baseball Quantities",
        "Solving One-Step And Multi-Step Equations Reliably",
        "Inequalities For Performance Threshold Questions",
        "Rearranging Formulas Used In Baseball Metrics",
        "Algebra Error Checking And Sanity Bounds",
      ]),
      makeUnit("Functions And Representations", [
        "Function Notation Through Baseball Input-Output Stories",
        "Domain, Range, And Physical Plausibility",
        "Linear Functions And Rate Interpretations",
        "Piecewise Models For Regime-Based Baseball Behavior",
        "Composing Functions In Modeling Pipelines",
      ]),
      makeUnit("Systems And Modeling Structure", [
        "Two-Equation Systems From Baseball Scenario Constraints",
        "Substitution Vs Elimination Strategy Selection",
        "Interpreting Intersections As Feasible States",
        "Matrix Form For Small Linear Systems",
        "Algebra Foundations Synthesis Workshop",
      ]),
    ],
  },
  {
    title: "Geometry Foundations For Baseball Context",
    slug: "geometry-foundations-for-baseball-context",
    units: [
      makeUnit("Coordinate Geometry Essentials", [
        "Coordinate Systems For Baseball Fields",
        "Distance Formula And Baseline Measurement",
        "Midpoints, Segments, And Position Landmarks",
        "Slope As Directional Change In Field Context",
        "Line Equations For Defensive Alignment Paths",
      ]),
      makeUnit("Angles, Triangles, And Measurement", [
        "Angle Measure Conventions For Motion Analysis",
        "Triangle Similarity In Camera And Field Scaling",
        "Right Triangle Geometry For Component Thinking",
        "Law Of Sines And Law Of Cosines In Stadium Problems",
        "Geometric Proof Mindset For Model Trust",
      ]),
      makeUnit("Circles, Arcs, And Curvature", [
        "Circle Equations And Radial Interpretations",
        "Arc Length, Curvature, And Outfield Wall Geometry",
        "Sector Area And Angular Coverage",
        "Chord Vs Arc Interpretation Pitfalls",
        "Geometry Foundations Synthesis Lab",
      ]),
    ],
  },
  {
    title: "Trigonometry And Precalculus For Baseball Modeling",
    slug: "trigonometry-and-precalculus-for-baseball-modeling",
    units: [
      makeUnit("Trigonometric Core Concepts", [
        "Trigonometric Functions Refresher For Modeling",
        "Unit Circle, Radians, And Angular Velocity In Context",
        "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
        "Inverse Trig For Reconstructing Launch Conditions",
        "Trig Identities For Simplifying Flight Equations",
      ]),
      makeUnit("Functions, Transformations, And Signals", [
        "Phase Shift And Periodicity In Baseball Motion Signals",
        "Amplitude, Frequency, And Signal Interpretation",
        "Polar, Cartesian, And Spherical Coordinate Conversions",
        "Function Transformations And Model Calibration",
        "Precalculus Signal Synthesis Workshop",
      ]),
      makeUnit("Vectors And Optimization Preparation", [
        "Dot Product, Projection, And Directional Influence",
        "Cross Product Intuition For Spin And Orientation",
        "Angle Optimization Under Physical Constraints",
        "Error Propagation In Trig-Based Calculations",
        "Precalculus Capstone: From Angle To Decision",
      ]),
    ],
  },
  {
    title: "Calculus I And II For Baseball Dynamics",
    slug: "calculus-i-and-ii-for-baseball-dynamics",
    units: [
      makeUnit("Limits, Continuity, And Derivatives", [
        "Limits As Trend Questions In Baseball Motion",
        "Continuity And Model Breakpoint Detection",
        "Derivative As Instantaneous Rate Of Change",
        "Product, Quotient, And Chain Rules In Practice",
        "Implicit Differentiation For Coupled Baseball Quantities",
      ]),
      makeUnit("Derivative Applications", [
        "Optimization For Launch Decisions",
        "Related Rates In Tracking And Orientation",
        "Second Derivative And Curvature Interpretation",
        "Linearization For Fast Approximation",
        "Derivative Application Synthesis Lab",
      ]),
      makeUnit("Integrals And Accumulation", [
        "Definite Integral As Accumulated Change",
        "Fundamental Theorem Of Calculus In Modeling Workflow",
        "Substitution And Integration By Parts",
        "Numerical Integration For Real Data",
        "Integral Interpretation In Baseball Context",
      ]),
    ],
  },
  {
    title: "Multivariable Calculus And Differential Equations",
    slug: "multivariable-calculus-and-differential-equations",
    units: [
      makeUnit("Multivariable Function Geometry", [
        "Functions Of Several Variables In Baseball Systems",
        "Partial Derivatives And Marginal Effects",
        "Gradient, Directional Derivative, And Sensitivity",
        "Tangent Planes And Local Linear Models",
        "Multivariable Optimization Under Constraints",
      ]),
      makeUnit("Multiple Integration And Vector Fields", [
        "Double Integrals Over Physical Regions",
        "Coordinate Changes In Multivariable Integrals",
        "Vector Fields And Flow Interpretation",
        "Line Integrals For Work-Like Quantities",
        "Multivariable Integration Synthesis Workshop",
      ]),
      makeUnit("Differential Equations For Dynamic Systems", [
        "First-Order ODEs For Baseball Change Models",
        "Second-Order ODEs For Motion Dynamics",
        "Linear Systems And Stability Intuition",
        "Numerical ODE Solvers And Step Control",
        "Differential Equations Capstone Integration",
      ]),
    ],
  },
  {
    title: "Baseball Physics Foundations",
    slug: "baseball-physics-foundations",
    units: [
      makeUnit("Geometry Of The Field And Ball Flight", [
        "Coordinate Systems For Baseball Fields",
        "Field Dimensions, Symmetry, And Constraint Boundaries",
        "Arc Length, Curvature, And Outfield Wall Geometry",
        "Launch Angle As A Geometric Object",
        "2D To 3D Flight Geometry Transitions",
        "Ballpark Topology And Home Run Boundary Surfaces",
        "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings",
        "Geometry Synthesis Lab: Mapping Ball Flight Regions",
      ]),
      makeUnit("Trigonometry And Vector Decomposition", [
        "Trigonometric Functions Refresher For Modeling",
        "Unit Circle, Radians, And Angular Velocity In Context",
        "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
        "Inverse Trig For Reconstructing Launch Conditions",
        "Dot Product, Projection, And Directional Influence",
        "Cross Product Intuition For Spin And Orientation",
        "Polar, Cartesian, And Spherical Coordinate Conversions",
        "Phase Shift And Periodicity In Baseball Motion Signals",
        "Trig Identities For Simplifying Flight Equations",
        "Angle Optimization Under Physical Constraints",
        "Error Propagation In Trig-Based Calculations",
        "Trigonometry Mastery Workshop: Multi-Step Applied Problems",
      ]),
      makeUnit("Newtonian Mechanics And Projectile Motion", [
        "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems",
        "Kinematics In One And Two Dimensions",
        "Free-Body Diagrams For Batted Ball Motion",
        "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs",
        "No-Drag Projectile Derivation From First Principles",
        "Time Of Flight, Apex, And Range Relationships",
        "Energy Methods Vs Force Methods In Ball Flight",
        "Momentum Transfer In Contact Events",
        "Introducing Drag Into Newton's Second Law",
        "Solving Drag-Inclusive ODEs Numerically",
        "Lift And Magnus Contributions To Trajectory Shape",
        "Comparing Vacuum, Drag-Only, And Drag+Lift Models",
        "Parameter Sensitivity And Stability In Trajectory Models",
        "Newtonian Synthesis Lab: Build A Full Forward Simulator",
      ]),
      makeUnit("Drag, Lift, And Aerodynamics Of The Baseball", [
        "Physical Meaning Of Drag Coefficient In Baseball",
        "Reynolds Number Regimes And Seam Effects",
        "Boundary Layers, Turbulence, And Flight Consequences",
        "Lift Coefficient, Spin Rate, And Spin Axis",
        "Coupled Drag-Lift Dynamics In Flight",
        "Estimating Aerodynamic Parameters From Observational Data",
        "Identifiability: When Different Parameters Fit Similar Outcomes",
        "Aerodynamics And Home Run Probability Pathways",
        "Model Misspecification In Aerodynamic Inference",
        "Aerodynamics Practicum: Inference And Validation",
      ]),
      makeUnit("Environmental Effects And Ballpark Context", [
        "Air Density, Temperature, Pressure, And Humidity",
        "Altitude And Effective Resistance Landscapes",
        "Wind Vector Decomposition Relative To Ball Path",
        "Weather Variability And Uncertainty Bands",
        "Stadium Orientation And Microclimate Interaction",
        "Normalizing Outcomes Across Ballparks",
        "Environmental Counterfactuals (What If Conditions Changed?)",
        "Environment Integration Lab: Context-Aware Distance Models",
      ]),
      makeUnit("Synthesis — Building Physics-Based Ball-Flight Models", [
        "End-To-End Model Architecture For Ball Flight",
        "Choosing State Variables And Parameter Priors",
        "Numerical Solvers, Step Size, And Convergence Tradeoffs",
        "Calibration With Statcast-Style Observations",
        "Residual Analysis And Diagnostic Workflows",
        "Scenario Analysis And Simulation Design",
        "Reproducible Reporting For Physics Models",
        "Physics Capstone Milestone: Technical Memo Draft",
      ]),
    ],
  },
  {
    title: "Statistical Modeling For Baseball",
    slug: "statistical-modeling-for-baseball",
    units: [
      makeUnit("Data Generating Processes In Baseball", [
        "What Is A Data Generating Process?",
        "Randomness, Structure, And Measurement Error",
        "Selection Effects In Public Baseball Data",
        "Temporal Dependence Across Games And Seasons",
        "Confounding Patterns In Outcome Metrics",
        "Hierarchical Structure: Player, Team, Park, Era",
        "DGP Case Study: Home Run Rate Dynamics",
      ]),
      makeUnit("Exploratory Data Analysis And Sampling Pitfalls", [
        "EDA Framing: Questions Before Charts",
        "Distribution Shape, Tail Behavior, And Robust Summaries",
        "Stratification And Simpson's Paradox In Baseball",
        "Missingness Mechanisms And Practical Handling",
        "Leakage Risks During Data Filtering",
        "Sampling Windows And Seasonality Bias",
        "Outliers: Signal, Noise, Or Data Issue?",
        "EDA Notebook Practicum With Review Rubric",
      ]),
      makeUnit("Regression And Generalized Linear Models For HR Probability", [
        "Linear Regression Baseline For Interpretability",
        "Feature Engineering For Batted-Ball Outcomes",
        "Logistic Regression For Home Run Probability",
        "Interaction Terms: Launch Angle × Exit Velocity",
        "Regularization (L1/L2) For Stability",
        "Nonlinearity Handling: Splines And Basis Expansion",
        "Model Comparison: AIC, BIC, And Cross-Validation",
        "Calibration Curves And Probability Reliability",
        "Thresholding And Decision Utility",
        "Regression Lab: Build, Compare, Defend",
      ]),
      makeUnit("Uncertainty, Confidence Intervals, And Model Validation", [
        "Sampling Distributions In Practice",
        "Confidence Intervals For Means, Effects, And Probabilities",
        "Bootstrap Methods For Complex Metrics",
        "Hypothesis Testing And Practical Significance",
        "Validation Splits, Cross-Validation, And Drift",
        "Error Decomposition: Bias, Variance, Noise",
        "Robustness Checks And Sensitivity Analysis",
        "Communicating Uncertainty Without Overclaiming",
        "Validation Dossier Workshop",
      ]),
      makeUnit("Causality Vs Correlation In Baseball Narratives", [
        "Association Is Not Causation: Formal Definitions",
        "DAGs For Baseball Questions",
        "Confounders, Mediators, And Colliders",
        "Counterfactual Reasoning For Policy/Rule Changes",
        "Natural Experiments And Quasi-Experimental Design",
        "Causal Claims In Public Baseball Media: Critical Audit",
        "Translating Causal Limits Into Honest Language",
        "Causality Debate Seminar And Position Paper",
      ]),
    ],
  },
  {
    title: "Data Analysis With Statcast",
    slug: "data-analysis-with-statcast",
    units: [
      makeUnit("Statcast Schema And Data Cleaning", [
        "Statcast Table Structure And Core Fields",
        "Type Systems, Units, And Semantic Consistency",
        "Event-Level Data Sources And Measurement Pipelines",
        "Data Quality Audits And Rule Checks",
        "Join Strategies For Context Enrichment",
        "Metric Reliability Across Parks Eras And Sensors",
        "Time Alignment Across Events And Metadata",
        "Cleaning Pipelines And Reproducible Transforms",
        "Versioning Datasets For Repeatability",
        "Data Cleaning Practicum With QA Checklist",
      ]),
      makeUnit("Feature Engineering For Ball Flight And HR Outcomes", [
        "Feature Engineering Principles For Baseball Models",
        "Derived Kinematic Features From Raw Inputs",
        "Expected Statistics Construction And Assumptions",
        "Scaling Normalization And Cross-Player Comparison",
        "Context Features: Park, Weather, Matchup",
        "Temporal Features: Form, Fatigue, And Sequence Effects",
        "Encoding Categorical Variables At Scale",
        "Feature Leakage Detection And Mitigation",
        "Interpretable Vs High-Capacity Feature Sets",
        "Feature Store Mini-Project",
      ]),
      makeUnit("Visualization Design For Baseball Questions", [
        "Chart Selection By Statistical Question Type",
        "Designing Honest Axes, Scales, And Encodings",
        "Dense Scatter, Hexbin, And Heatmap Tradeoffs",
        "Time-Series Decomposition Visual Patterns",
        "Uncertainty Visualization Techniques",
        "Annotation Strategy For Analytical Narratives",
        "Accessibility And Visual Clarity Standards",
        "Visualization Critique Studio",
      ]),
      makeUnit("Reproducible Pipelines And Notebooks", [
        "Reproducibility Principles In Applied Analytics",
        "Notebook Structure For Reviewability",
        "Parameterized Analysis Workflows",
        "Caching, Determinism, And Performance",
        "Testing Data Transformations",
        "Diagnostics For Drift Noise And Confounding",
        "Packaging Results For Reuse",
        "Communicating Metric Limits To Non-Technical Audiences",
        "Reproducibility Audit Practicum",
      ]),
      makeUnit("Applied Projects — Recreating Deadball Tracker Figures", [
        "Project Scoping And Analytical Question Refinement",
        "Rebuilding Drag Vs HR With Clear Assumptions",
        "Rebuilding Expected Vs Actual Distance",
        "Rebuilding Exit Velocity Relationship Visuals",
        "Extending A Figure With Uncertainty Overlays",
        "Error Analysis Against Prior Versions",
        "Publication-Ready Figure Standards",
        "Applied Project Review And Revision Cycle",
      ]),
    ],
  },
  {
    title: "Environmental Science For Baseball Systems",
    slug: "environmental-science-for-baseball-systems",
    units: [
      makeUnit("Atmospheric Science Foundations", [
        "Air Composition, Pressure, And Density Basics",
        "Temperature, Humidity, And Thermodynamic Effects",
        "Wind Formation And Boundary-Layer Behavior",
        "Microclimate Variation Across Ballparks",
        "Atmospheric Science Applied Exercise Set",
      ]),
      makeUnit("Climate, Variability, And Baseball Impacts", [
        "Weather Vs Climate In Baseball Analysis",
        "Long-Term Climate Trends And Ball-Flight Implications",
        "Extreme Events, Scheduling, And Safety Decisions",
        "Environmental Uncertainty Communication",
        "Climate Impact Scenario Workshop",
      ]),
      makeUnit("Environmental Decision-Making", [
        "Mitigation And Adaptation In Stadium Operations",
        "Sustainability Metrics And Trade-Off Analysis",
        "Policy, Ethics, And Environmental Justice Context",
        "Designing Environment-Aware Baseball Studies",
        "Environmental Science Capstone Brief",
      ]),
    ],
  },
  {
    title: "Biological Mechanics Of Baseball",
    slug: "biological-mechanics-of-baseball",
    units: [
      makeUnit("Body Systems And Muscle Fundamentals", [
        "Cells Tissues And Baseball Demand Basics",
        "Muscle Contraction Types In Throwing And Hitting",
        "Motor Units Fatigue And Pitching Loads",
        "Warmup Progressions And Game Day Readiness",
        "Body Systems Synthesis Workshop",
      ]),
      makeUnit("Movement Running And The Kinetic Chain", [
        "Sprinting Versus Stealing Baseball Acceleration Basics",
        "Gait Asymmetry And Bilateral Training In Baseball",
        "Hip Shoulder Separation And Sequencing Fundamentals",
        "Interpreting Energy Transfer Language Critically",
        "Kinetic Chain Synthesis Lab",
      ]),
      makeUnit("Sports Science And Baseball Performance", [
        "What Biomechanists Measure In Pitching Labs",
        "Hitting Kinematics And Bat Path Research Questions",
        "Workload Proxies Innings Pitches And Recovery",
        "Ethics And Limits Non Medical Communication",
        "Biological Mechanics Capstone Brief",
      ]),
    ],
  },
  {
    title: "Communicating Sports Analytics Insights",
    slug: "communicating-sports-analytics-insights",
    units: [
      makeUnit("Framing Questions And Stakeholders", [
        "Audience Analysis: Students, Coaches, Analysts, Public",
        "Defining Decision-Relevant Questions",
        "Scoping Claims To Available Evidence",
        "Narrative Arcs For Technical Findings",
        "Risk Communication For High-Variance Results",
        "Framing Workshop: One Dataset, Three Audiences",
      ]),
      makeUnit("Visual Rhetoric And Chart Storytelling", [
        "Story Structure Through Sequential Visuals",
        "Emphasis Without Distortion",
        "Comparative Framing And Baseline Selection",
        "Annotation As Argument",
        "Multi-Panel Narrative Construction",
        "Common Misleading Patterns And How To Avoid Them",
        "Storytelling Critique Lab",
      ]),
      makeUnit("Writing Methodology And Caveats", [
        "Methods Sections Readers Can Audit",
        "Assumption Registers And Limitation Statements",
        "Reporting Model Choices Transparently",
        "Uncertainty Language Templates",
        "Reproducibility Statements And Artifact Links",
        "Writing For Technical Vs Non-Technical Readers",
        "Methodology Rewrite Workshop",
      ]),
      makeUnit("Presentations, Debates, And Peer Review", [
        "Slide Architecture For Analytical Arguments",
        "Oral Defense Of Modeling Choices",
        "Handling Cross-Examination And Objections",
        "Constructive Peer Review Rubrics",
        "Debate Formats For Causal Claims",
        "Revision Cycles From Feedback",
        "Live Seminar Simulation",
      ]),
      makeUnit("Capstone Composition And Defense", [
        "Capstone Topic Selection And Proposal",
        "Literature Positioning And Prior Work Context",
        "Data + Model + Narrative Integration",
        "Drafting The Technical Report",
        "Building The Executive Summary",
        "Visual Appendix And Reproducibility Bundle",
        "Mock Defense And Rubric Scoring",
        "Final Capstone Submission And Reflection",
      ]),
      makeUnit("Scientific Paper Literacy For Sports Analytics", [
        "Paper Structure And Reading Strategy",
        "Methods Section Deconstruction",
        "Statistical Claims Effect Sizes And Uncertainty",
        "Reproducibility Data Access And Supplementary Materials",
        "Legitimacy And Credibility Evaluation Framework",
        "From Evidence To Independent Judgment Decision Memo Workshop",
      ]),
    ],
  },
  {
    title: "Keeping The Book In Baseball",
    slug: "keeping-the-book-in-baseball",
    units: [
      makeUnit("Scorekeeping Essentials", [
        "Baseball Scorebook Symbols And Shorthand You Can Trust",
        "Pitch By Pitch Logging That Survives Review",
        "Defensive Positions And The Standard Grid",
        "Substitutions Courtesy Runners And The Lineup Strip",
        "Your Printable In Game Checklist",
      ]),
    ],
  },
  {
    title: "Intro To Economics And Accounting For Baseball Finance",
    slug: "intro-to-economics-and-accounting-for-baseball-finance",
    units: [
      makeUnit("Opportunity Cost And Organizational Tradeoffs", [
        "Opportunity Cost In Roster Construction And Payroll Buckets",
        "Marginal Analysis For Call Ups And Option Years",
        "Supply Demand Intuition For Baseball Labor Markets",
        "Budget Constraints Across MLB And Affiliate Operations",
      ]),
      makeUnit("Luxury Tax Revenue Sharing And CBT Accounting", [
        "Competitive Balance Tax Threshold Mechanics",
        "AAV Present Value And Luxury Tax Treatment Simplified",
        "Revenue Sharing And Pool Transparency For Staff Modeling",
        "Proration Trades Waivers And In Season Payroll Flex",
      ]),
      makeUnit("Deferred Compensation Payroll Cadence And Global Signing", [
        "Deferred Payments For Baseball Contracts And Cash Flow Timing",
        "Biweekly Versus Semi Monthly Payroll Cadence For Club Payrolls",
        "Minor League Stipends Staff Systems And Full Organization Liquidity",
        "International Signing Bonuses Pools And Periodization Basics",
      ]),
    ],
  },
];

/** All canonical lesson keys in syllabus order (310 entries; keep in sync with collectAllLessonKeys). */
export function collectAllLessonKeys(blueprint: TrackBlueprint[]): string[] {
  const keys: string[] = [];
  for (const track of blueprint) {
    for (const unit of track.units) {
      for (const lesson of unit.lessons) {
        keys.push(`${track.slug}::${unit.slug}::${lesson.slug}`);
      }
    }
  }
  return keys;
}
