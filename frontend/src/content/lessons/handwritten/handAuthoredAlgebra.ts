import type { LessonDocument } from "../../lessonTypes";
import { algebraUnit1SummativeRubric } from "../algebraUnit1Rubric";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

export const HAND_AUTHORED_ALGEBRA: Record<string, LessonDocument> = {
  "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::variables-units-and-baseball-quantities": {
    key: "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::variables-units-and-baseball-quantities",
    title: "Variables, Units, And Baseball Quantities",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Linear Expressions, Equations, And Constraints",
    whyItMatters:
      "Baseball analysis breaks down when numbers are treated as bare values without context. One column may be innings, another outs, another feet of lead distance, and another miles per hour of pitch velocity. A model can still run when those units are mixed incorrectly, but the recommendation can be wrong enough to change who starts, who rests, or who gets sent down. Variables are how we give each baseball quantity a clear role before solving anything. Units are how we keep those roles honest through every operation. Teams that manage these basics well produce cleaner reports, faster debugging, and better communication across coaches, analysts, and player development staff.",
    lessonOpener:
      "In a pregame meeting, a pitching coach might ask: if our starter averages about 16 pitches per inning, how many pitches should we expect through six innings? That question already uses variable relationships, even before symbols appear. If we define ppi as pitches per inning and i as innings, then total pitches is ppi times i. The same style appears in Statcast conversations, where analysts combine exit velocity, launch angle, and sprint speed from different systems. If units are not tracked, it is easy to blend incompatible values and report nonsense that still looks polished in a chart. This lesson treats symbols as baseball labels with responsibilities, not abstract letters. We will define quantities clearly, carry units through operations, and write expressions that stay meaningful under pressure.",
    narrativeFlow: [
      "Identify baseball quantities and map them to variables.",
      "Attach units to each symbol before operating.",
      "Build expressions from practical baseball questions.",
      "Validate meaning through unit compatibility checks.",
    ],
    objectives: [
      "Define variables with explicit baseball meaning and units.",
      "Distinguish valid and invalid unit operations.",
      "Translate plain-language baseball scenarios into expressions.",
    ],
    prerequisites: [
      "Comfort reading box score and Statcast fields.",
      "Basic arithmetic with decimals and fractions.",
      "Understanding that labels change numeric interpretation.",
    ],
    conceptChunks: [
      {
        heading: "Roster Card Variables With Unit Tags",
        explainLikeCoach:
          "Start by treating every symbol like a position assignment: it is not just a letter, it is a role with accountability. If \\(N\\) is total pitches and \\(i\\) is innings, you can ask a coaching question immediately: what pace did this outing require? The ratio \\(\\frac{N}{i}\\) answers that with a real baseball unit, pitches per inning. But \\(N+i\\) tries to merge different measurement worlds, so it sounds numeric but means nothing operationally. Train yourself to say units out loud at each step; this catches errors before they spread into reports. The schematic below summarizes the valid path versus the invalid sum. DiagramTitle: Variable Role Map For Unit-Safe Operations. DiagramPurpose: Contrast valid ratio construction versus invalid addition across incompatible units. DiagramInputs: \\(N\\) in pitches, \\(i\\) in innings, candidate operations \\(\\frac{N}{i}\\) and \\(N+i\\). DiagramInsight: Unit-aware structure determines whether an expression is interpretable before any number is plugged in. DiagramCaption: Only operations with compatible unit logic produce baseball-usable metrics. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Let \\(N\\) be measured in pitches and \\(i\\) in innings. Dimensional validity requires operations that preserve interpretable unit relationships: \\(\\frac{N}{i}\\) is valid with unit pitches per inning, while \\(N+i\\) is undefined in applied interpretation. A robust symbol dictionary stores semantic meaning, unit, and context window, so reused equations remain auditable across notebooks and dashboards.",
        equation: "\\[\\mathrm{pace} = \\frac{N}{i}\\]",
        figure: {
          src: "/curriculum/variable-pace-schematic.svg",
          alt: "Schematic: pitches N and innings i connect to pace N divided by i; N plus i is marked as not meaningful.",
        },
      },
      {
        heading: "Expression Building From Dugout Questions",
        explainLikeCoach:
          "When a coach asks, 'What does four extra hitters cost us?', you do not need a full simulation first; you need structure. Define \\(p\\) as pitches per hitter and \\(h\\) as additional hitters, then write \\(p\\cdot h\\). That expression is a planning scaffold: it tells you how workload scales before any final game state is known. This is why expressions matter operationally, not academically; they let staff compare scenarios quickly and consistently. [InlineDiagramCue: Timeline with baseline hitter count, then +4 hitters branch feeding into incremental pitch estimate.] DiagramTitle: Dugout Question To Expression Pipeline. DiagramPurpose: Show how natural-language planning questions become algebraic workload expressions. DiagramInputs: \\(p\\) (pitches per hitter), \\(h\\) (extra hitters), output \\(E=p\\cdot h\\). DiagramInsight: Expressions organize uncertainty and support fast what-if planning without waiting for complete data. DiagramCaption: A concise expression turns a vague workload concern into a testable decision input.",
        formalNote:
          "An expression specifies computational structure without requiring a solved target variable. For \\(p\\) in pitches per batter and \\(h\\) in batters, \\(E=p\\cdot h\\) encodes projected incremental workload. Metadata should clarify whether \\(p\\) is rolling, seasonal, or matchup-adjusted to prevent downstream interpretation drift.",
      },
      {
        heading: "Unit Compatibility As Data Hygiene",
        explainLikeCoach:
          "Analysts rarely fail because they cannot multiply; they fail because they multiply incompatible fields confidently. If one feed stores distance in feet and another in meters, direct merging corrupts every downstream rate built on those distances. The fix is procedural: normalize units before combining, and document the conversion step as part of data hygiene. [InlineDiagramCue: Two incoming data pipes labeled feet and meters, one conversion node, then a clean merged metric output.] DiagramTitle: Pre-Merge Unit Normalization Gate. DiagramPurpose: Visualize why conversion must happen before aggregation. DiagramInputs: \\(d_1\\) in feet, \\(d_2\\) in meters, conversion constant \\(3.28084\\). DiagramInsight: Unit normalization is a prerequisite quality gate, not optional cleanup. DiagramCaption: Convert first, combine second, model third.",
        formalNote:
          "Dimensional normalization must precede aggregation. If \\(d_1\\) is feet and \\(d_2\\) is meters, convert via \\(d_{2,ft}=3.28084\\cdot d_2\\) before combining with \\(d_1\\). Because algebraic outputs inherit measurement assumptions, ingestion contracts should enforce canonical units and reject ambiguous source fields.",
      },
      {
        heading: "Naming Conventions For Reusable Baseball Math",
        explainLikeCoach:
          "In live baseball workflows, naming is not cosmetic; it is control over meaning. Generic placeholders like \\(x\\) and \\(y\\) force teammates to re-interpret your math every time they read it. Names like \\(kRate\\), \\(ev\\), or \\(ttoPenalty\\) carry baseball semantics directly into discussion, reducing misreads when formulas move from analyst notebooks to coach-facing plans. [InlineDiagramCue: Side-by-side comparison of ambiguous formula names versus descriptive baseball-specific names with fewer interpretation questions.] DiagramTitle: Naming Clarity And Review Speed. DiagramPurpose: Show how descriptive notation reduces communication friction and reuse errors. DiagramInputs: Ambiguous symbols set \\(\\{x,y,z\\}\\) versus semantic symbols set \\(\\{kRate,ev,ttoPenalty\\}\\). DiagramInsight: Better symbol names lower cognitive load and improve cross-functional reliability. DiagramCaption: Reusable algebra starts with reusable naming.",
        formalNote:
          "Notation design is part of governance. Stable symbol registries containing definition, unit, and scope reduce semantic drift and improve reproducibility. Reusable equations should prefer interpretable identifiers over anonymous placeholders to support cross-functional review.",
      },
    ],
    quickChecks: [
      { prompt: "If p is pitches per batter and b is batters faced, what is p*b?", answer: "Estimated total pitches." },
      { prompt: "Why is mph plus degrees invalid?", answer: "Units are incompatible, so the sum has no baseball meaning." },
      { prompt: "What must happen before combining feet and meters?", answer: "Convert to a common unit system." },
    ],
    workedExamples: [
      {
        title: "Starter Workload Estimate",
        scenario: "Starter pace is 16.5 pitches per inning for 5.2 projected innings.",
        walkthrough: ["Define ppi=16.5 and i=5.2.", "Compute T=ppi*i.", "T=85.8, about 86 pitches.", "Compare with team pitch cap."],
        takeaway: "Meaningful variables and units produce usable outputs.",
      },
      {
        title: "Outs To Innings Conversion",
        scenario: "Reliever records 17 outs.",
        walkthrough: ["Set o=17 outs.", "Compute innings i=o/3.", "i=5.666..., baseball notation 5.2.", "Use i consistently in rates."],
        takeaway: "Unit conversion prevents hidden denominator errors.",
      },
      {
        title: "Invalid Metric Proposal",
        scenario: "Intern suggests \\(score = release\\_speed + spin\\_rate\\).",
        walkthrough: ["Identify mph and rpm units.", "Reject direct addition.", "Normalize metrics first if combining.", "Recheck interpretability."],
        takeaway: "Unit awareness catches seductive but invalid formulas.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Expression for batting average using h and ab?", answer: "hits divided by at-bats" }, { prompt: "Write runs per game from r and g.", answer: "runs divided by games" }] },
      { level: "core", prompts: [{ prompt: "Pitcher throws 92 pitches in 6 innings; compute pace.", answer: "92/6 = 15.33 pitches per inning." }, { prompt: "How to combine feet and meters safely?", answer: "Convert one to the other before operations." }] },
      { level: "stretch", prompts: [{ prompt: "Design a four-symbol dictionary for stolen-base modeling.", answer: "Example: lead_ft, jump_s, pop_s, success_prob." }, { prompt: "Why avoid x1,x2,x3 in coach-facing docs?", answer: "They hide baseball meaning and increase misread risk." }] },
    ],
    commonMistakes: [
      "Adding unlike units because arithmetic still returns a number.",
      "Leaving variable definitions implicit.",
      "Reusing one symbol for multiple baseball quantities.",
    ],
    lessonSummary:
      "Variables and units are foundational controls that keep baseball algebra interpretable, reusable, and safe for decision-making. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Pick one in-game decision and write variable names, units, and two valid expressions that support it.",
    nextLessonBridge:
      "With symbols and units grounded, we can solve equations that isolate unknown baseball targets.",
    professorNotes:
      "Have students verbalize units during every manipulation step. Require a symbol dictionary before any calculation and grade for semantic clarity, not just arithmetic correctness. This builds habits that transfer directly to production baseball analysis where communication quality matters as much as computation.",
    keyTerms: [
      { term: "variable", definition: "A symbol representing a measurable baseball quantity." },
      { term: "unit consistency", definition: "Requirement that combined quantities share compatible measurement units." },
    ],
    assessmentItems: [
      {
        id: "l1-mcq-1",
        type: "mcq",
        prompt: "What is the main issue with \\(sprint\\_speed\\_ft\\_s + jump\\_time\\_ms\\)?",
        options: ["Both are positive", "Different units are being added", "Only valid for catchers", "Needs a larger sample"],
        correctAnswer: "Different units are being added",
        explanation: "Incompatible dimensions cannot be combined directly.",
      },
      {
        id: "l1-exact-1",
        type: "exact",
        prompt: "If a reliever throws 27 pitches in 1.2 innings, what is pitches per inning?",
        correctAnswer: "20.25",
        acceptedAnswers: ["20.25 pitches per inning"],
        explanation: "1.2 innings is 4/3 innings, so 27 divided by 4/3 is 20.25.",
      },
      {
        id: "l1-exact-2",
        type: "exact",
        prompt: "Write expression for extra pitches with p pitches per batter and h extra batters.",
        correctAnswer: "p*h",
        acceptedAnswers: ["p * h"],
        explanation: "Rate times opportunities gives expected increment.",
      },
    ],
    summativeReflection: {
      id: "symbol-dictionary-memo",
      title: "Summative: Mini symbol dictionary + coach sentence",
      intro:
        "Draft a short artifact you could drop into a pregame packet. It is not auto-graded; use the rubric to self-check before sharing with peers or instructors.",
      taskPrompt:
        "List at least four symbols you would use for a single pitching workload question (e.g., pace, innings, total pitches, cap). For each, give meaning, units, and one sentence a coach could read aloud. Then write one valid compound expression and one intentionally invalid operation across units, explaining why the second fails.",
      rubric: algebraUnit1SummativeRubric,
    },
  },

  "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::solving-one-step-and-multi-step-equations-reliably": {
    key: "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::solving-one-step-and-multi-step-equations-reliably",
    title: "Solving One-Step And Multi-Step Equations Reliably",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Linear Expressions, Equations, And Constraints",
    whyItMatters:
      "Equation solving is at the core of baseball planning questions. Staff often knows a target output, like a pitch cap, expected run threshold, or desired rate, and needs to solve for the unknown input that achieves it. Errors in equation steps can cascade into poor bullpen timing, unrealistic hitter goals, or flawed workload recommendations. Reliable process matters more than speed because decisions are made quickly off these numbers. A repeatable solving routine with clear inverse operations and substitution checks gives analysts confidence and gives coaches transparent logic they can trust. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "If a manager asks how many innings a starter can cover under a 95-pitch cap at 15.8 pitches per inning, that is solving 15.8i = 95. Later, a hitting analyst may solve a multi-step equation to determine how many additional walks are needed to offset lower slugging in a projection model. The symbol contexts differ, but the solving logic is the same: simplify, isolate, solve, verify. Students often make mistakes by skipping lines, dropping signs, or distributing incorrectly. This lesson trains disciplined line-by-line solving tied to baseball use cases so answers stay dependable in live decision windows.",
    narrativeFlow: [
      "Frame equations from baseball constraints.",
      "Apply inverse operations with sign discipline.",
      "Handle distribution and like-term combination in multi-step forms.",
      "Verify with substitution into original equation.",
    ],
    objectives: [
      "Solve one-step baseball equations accurately.",
      "Execute multi-step linear solving without sign drift.",
      "Use substitution checks to validate final values.",
    ],
    prerequisites: [
      "Variable and unit fluency.",
      "Comfort with negative numbers and fractions.",
      "Understanding equality as balance.",
    ],
    conceptChunks: [
      {
        heading: "Pitch Cap Isolation Workflow",
        explainLikeCoach:
          "Solve equations like you unwind gear in reverse order: remove what was added, then remove what was multiplied. For \\(15.8i=95\\), divide by \\(15.8\\) to expose innings directly. For \\(12+14i=96\\), first remove the constant \\(12\\), then divide by \\(14\\). This sequence matters because it preserves the balance relationship at every line, which is exactly what you need in time-sensitive planning. [InlineDiagramCue: Balance scale animation with operation tags 'subtract 12' then 'divide 14' applied symmetrically.] DiagramTitle: Reverse-Order Isolation Ladder. DiagramPurpose: Reinforce operation order for reliable variable isolation. DiagramInputs: Equations \\(15.8i=95\\) and \\(12+14i=96\\), inverse operations list. DiagramInsight: Correct inverse order prevents hidden drift and yields auditable solving paths. DiagramCaption: Undo layers around the variable, one matched operation at a time. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For affine form \\(ax+b=c\\) with \\(a\\neq0\\), apply inverse operations in reverse order to obtain \\(x=\\frac{c-b}{a}\\). Each line should annotate operation type and unit status. Procedural transparency supports reproducibility and peer review in baseball analytics workflows.",
      },
      {
        heading: "Distribution And Like-Term Discipline",
        explainLikeCoach:
          "Distribution errors often start as shortcuts and end as wrong decisions. In \\(3(2x-4)+x=26\\), you must expand the entire parenthesis to \\(6x-12+x\\) before combining like terms. Skipping the negative term or partial expansion changes the equation itself, not just the notation. [InlineDiagramCue: Parenthesis expansion tree showing each term receiving multiplier 3, including negative branch.] DiagramTitle: Full Distribution Map. DiagramPurpose: Prevent partial-distribution mistakes under time pressure. DiagramInputs: Expression \\(3(2x-4)+x\\), expanded form \\(6x-12+x\\). DiagramInsight: Every term inside parentheses must receive the multiplier, including sign. DiagramCaption: Complete expansion preserves equivalence; shortcuts do not.",
        formalNote:
          "Distribution follows \\(k(a+b)=ka+kb\\) and \\(k(a-b)=ka-kb\\). Like terms may combine only when variable structure matches exactly. Correct simplification is a prerequisite for valid isolation and solution derivation.",
      },
      {
        heading: "Fractions, Decimals, And Precision Control",
        explainLikeCoach:
          "Representation choice is a coaching-quality issue, not just a math style choice. Baseball workflows mix decimals, percentages, and inning fractions, so early rounding can move recommendations by meaningful amounts. Keep exact forms as long as possible, then round once for communication at the end. [InlineDiagramCue: Two solution paths, one with early rounding and one with late rounding, ending at slightly different recommendations.] DiagramTitle: Precision Path Comparison. DiagramPurpose: Show why late rounding is safer for decision integrity. DiagramInputs: Same equation solved with early-round and late-round workflows. DiagramInsight: Rounding policy timing can alter actionable outputs in small margins. DiagramCaption: Preserve precision during solving; round only at reporting.",
        formalNote:
          "Precision management favors clearing denominators early or preserving rational form until terminal evaluation. Rounding policy should be explicit and separated from symbolic transformation to protect reproducibility.",
      },
      {
        heading: "Substitution Check As Postgame Audit",
        explainLikeCoach:
          "A solved value is a claim until it survives replay in the original equation. Substitute the candidate into the exact starting form, not a simplified midpoint, and confirm both sides match. If they do not, backtrack to the first line where equivalence was broken. [InlineDiagramCue: Solve path feeding into a verification checkpoint that branches to 'validated' or 'trace error' loop.] DiagramTitle: Solve-Then-Verify Loop. DiagramPurpose: Normalize substitution as mandatory quality control. DiagramInputs: Original equation, candidate solution \\(x^*\\), left/right substitution results. DiagramInsight: Verification catches hidden sign and arithmetic drift before reporting. DiagramCaption: No solution is final until substitution confirms it.",
        formalNote:
          "Given candidate \\(x^*\\), verify \\(f(x^*)=g(x^*)\\) under original domain assumptions. Substitution is a low-cost correctness check and should be embedded in template workflows before publishing outputs.",
      },
    ],
    quickChecks: [
      { prompt: "Solve 14i=84.", answer: "The inning count i equals six after dividing both sides by fourteen." },
      { prompt: "First step for 9+12x=93?", answer: "Subtract 9 from both sides." },
      { prompt: "Why substitute back?", answer: "To confirm the value solves the original equation." },
    ],
    workedExamples: [
      {
        title: "One-Step Inning Projection",
        scenario: "Pitch cap 90, pace 15 pitches per inning.",
        walkthrough: ["Write 15i=90.", "Divide both sides by 15.", "i=6.", "Check 15*6=90."],
        takeaway: "Inverse operations yield direct planning answers.",
      },
      {
        title: "Multi-Step Walk Requirement",
        scenario: "Run model gives 0.9+0.08w=1.7.",
        walkthrough: ["Subtract 0.9.", "0.08w=0.8.", "Divide by 0.08.", "w=10."],
        takeaway: "Multi-step solving quantifies compensation targets.",
      },
      {
        title: "Candidate Solution Check",
        scenario: "Given 3(2x-1)=21, test x=4.",
        walkthrough: ["Substitute x=4.", "Left side becomes 3(7)=21.", "Right side is 21.", "Candidate is valid."],
        takeaway: "Verification closes the loop.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Solve 18x=72.", answer: "x equals 4" }, { prompt: "Solve x+11=39.", answer: "x equals 28" }] },
      { level: "core", prompts: [{ prompt: "Solve h+31=42.", answer: "h equals 11" }, { prompt: "Solve 2(3x-5)=26.", answer: "x equals 6" }] },
      { level: "stretch", prompts: [{ prompt: "Solve 0.265=(H+2)/120.", answer: "H=29.8, about 30 hits." }, { prompt: "Create and solve a two-step baseball equation with verification.", answer: "Answers vary; must include valid setup and substitution check." }] },
    ],
    commonMistakes: [
      "Changing signs while 'moving terms' informally.",
      "Skipping distribution before combining terms.",
      "Not checking the result in the original equation.",
    ],
    lessonSummary:
      "Reliable equation solving in baseball depends on explicit inverse operations, careful simplification, and mandatory substitution checks.",
    synthesisPrompt:
      "Write one multi-step baseball equation from a planning constraint and solve it line by line with verification.",
    nextLessonBridge:
      "After equations, we turn to inequalities for threshold-based baseball decisions.",
    professorNotes:
      "Require one operation per line and a short reason for each move. Emphasize process fidelity over speed, then ask students whether their final value is baseball-plausible in context. This pairing of algebra and interpretation is what makes their work deployable.",
    keyTerms: [
      { term: "inverse operation", definition: "Operation that undoes another while preserving equality." },
      { term: "substitution check", definition: "Verifying a solution by plugging it into the original equation." },
    ],
    assessmentItems: [
      {
        id: "l2-mcq-1",
        type: "mcq",
        prompt: "First correct move for 12+14i=96?",
        options: ["Divide by 14", "Subtract 12", "Add 14", "Multiply by 12"],
        correctAnswer: "Subtract 12",
        explanation: "Isolate variable term before dividing coefficient.",
      },
      {
        id: "l2-exact-1",
        type: "exact",
        prompt: "Solve 15.8i=94.8.",
        correctAnswer: "6",
        explanation: "Divide both sides by 15.8.",
      },
      {
        id: "l2-exact-2",
        type: "exact",
        prompt: "Solve 3(2x-4)+x=26.",
        correctAnswer: "38/7",
        acceptedAnswers: ["x=38/7", "x = 38/7", "5.4285714286"],
        explanation: "Distribute, combine, isolate x.",
      },
    ],
    summativeReflection: {
      id: "equation-solve-memo",
      title: "Summative: Equation solve with audit trail",
      intro:
        "Show a complete solving path suitable for peer review. Save your draft locally and compare against the rubric.",
      taskPrompt:
        "Invent a two-step baseball constraint (e.g., pitch cap with a constant offset). Write the equation, solve with one operation per line annotated in plain language, then substitute back to verify. End with one sentence on baseball plausibility of the solution.",
      rubric: algebraUnit1SummativeRubric,
    },
  },

  "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::inequalities-for-performance-threshold-questions": {
    key: "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::inequalities-for-performance-threshold-questions",
    title: "Inequalities For Performance Threshold Questions",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Linear Expressions, Equations, And Constraints",
    whyItMatters:
      "Most baseball decisions are threshold checks, not exact-value checks. Teams ask whether chase rate is below a cutoff, whether inning workload is under a safety cap, or whether command score is above a minimum. Inequalities encode these policy boundaries directly. If analysts force these questions into equalities, they lose directional meaning and can misclassify players or game states. Strong inequality skills support safer usage planning and clearer communication around acceptable performance ranges. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A staff rule like 'starter should average no more than 17 pitches per inning' is naturally written as P/i <= 17. Another rule like 'zone contact should be at least 85%' becomes z >= 0.85. The symbols are simple, but solving and interpreting inequalities requires attention to direction and inclusivity. The negative-division flip rule is a frequent source of mistakes. In this lesson, we convert policy language into inequalities, solve them correctly, and interpret solution intervals as baseball eligibility zones.",
    narrativeFlow: [
      "Map policy language to inequality symbols.",
      "Solve inequalities with direction awareness.",
      "Interpret interval solutions as decision ranges.",
      "Use constraints for planning and compliance checks.",
    ],
    objectives: [
      "Write inequalities from baseball threshold statements.",
      "Solve inequalities including negative-direction flips.",
      "Communicate feasible intervals in coaching language.",
    ],
    prerequisites: [
      "Equation-solving fluency.",
      "Comfort with negative arithmetic.",
      "Basic understanding of baseball performance targets.",
    ],
    conceptChunks: [
      {
        heading: "Threshold Language To Symbol Direction",
        explainLikeCoach:
          "Comparator words are policy controls, not grammar details. 'At most' maps to \\(\\le\\), 'at least' maps to \\(\\ge\\), and strict words like 'above' or 'below' remove boundary inclusion. In baseball operations, that boundary decides who clears a standard and who enters intervention plans. [InlineDiagramCue: Word-to-symbol mapping panel with inclusion/exclusion dots on number lines.] DiagramTitle: Policy Language To Inequality Symbols. DiagramPurpose: Make comparator translation unambiguous for threshold rules. DiagramInputs: Phrases 'at most', 'at least', 'above', 'below' and corresponding operators. DiagramInsight: Small wording differences produce different eligibility outcomes. DiagramCaption: Translate comparator language before solving anything. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Natural-language comparators map to ordered relations on \\(\\mathbb{R}\\). Inclusive inequalities accept boundary values, while strict inequalities exclude them. Standardized wording-to-symbol mapping prevents implementation inconsistency across tools.",
      },
      {
        heading: "Solving With Order Preservation",
        explainLikeCoach:
          "Most solving steps behave exactly like equations until one critical moment: multiplying or dividing by a negative number. At that moment, order reverses, so the inequality symbol must flip. Missing this single rule can invert decisions and classify risk as safe. [InlineDiagramCue: Number line order reversal when both sides are scaled by \\(-1\\), with inequality arrow flipping.] DiagramTitle: Negative Scaling Direction Flip. DiagramPurpose: Explain why inequality direction changes under negative scaling. DiagramInputs: Example inequality and scaling operation by \\(-1\\). DiagramInsight: Direction flip is a structural order property, not a memorized exception. DiagramCaption: Negative scaling reverses order; symbol direction must follow.",
        formalNote:
          "Order-preserving transformations include adding, subtracting, and scaling by positive constants. Scaling by a negative constant reverses order and requires operator inversion. This follows ordered-field structure, not rote convention.",
      },
      {
        heading: "Intervals As Eligibility Zones",
        explainLikeCoach:
          "A solved inequality defines a region of acceptable performance, not a single magic number. If \\(x\\ge0.300\\), the entire interval at or above \\(0.300\\) qualifies. This range mindset matches baseball volatility, where daily values move but policy still needs consistent boundaries. [InlineDiagramCue: Number line shading for feasible interval with closed endpoint at \\(0.300\\).] DiagramTitle: Feasible Interval Visualization. DiagramPurpose: Shift interpretation from point estimates to policy ranges. DiagramInputs: Solved inequality \\(x\\ge0.300\\), endpoint inclusion marker. DiagramInsight: Intervals communicate eligibility under performance fluctuation. DiagramCaption: Threshold rules define zones, not single-point targets.",
        formalNote:
          "Linear inequality solutions form bounded or unbounded intervals. Decision systems often intersect multiple inequalities to define feasible tactical states.",
      },
      {
        heading: "Constraint Rewrites For Improvement Planning",
        explainLikeCoach:
          "A good constraint tells you what to change, not just whether you passed. If current chase rate is \\(c\\) and target is \\(c\\le0.27\\), define improvement \\(d\\) so \\(c-d\\le0.27\\). Now development staff gets a concrete minimum adjustment instead of vague direction. [InlineDiagramCue: Current metric bar, target line, and required drop segment labeled \\(d\\).] DiagramTitle: Constraint-To-Improvement Rewrite. DiagramPurpose: Convert compliance checks into actionable improvement bounds. DiagramInputs: Current value \\(c\\), threshold \\(0.27\\), improvement variable \\(d\\). DiagramInsight: Rewriting introduces an intervention variable that can be coached and tracked. DiagramCaption: Express the gap explicitly to design training targets.",
        formalNote:
          "Constraint reformulation isolates intervention variables, converting policy checks into actionable adjustment bounds. This supports optimization and individualized development planning.",
      },
    ],
    quickChecks: [
      { prompt: "Translate 'at most 90 pitches' with P.", answer: "Use P is less than or equal to ninety to cap total pitches." },
      { prompt: "Solve -2x>8.", answer: "Divide by negative two and flip the sign to get x is less than negative four." },
      { prompt: "What does x>=0.300 mean?", answer: "Values at or above .300 satisfy the target." },
    ],
    workedExamples: [
      {
        title: "Workload Ceiling",
        scenario: "16.5i<=102 for innings i.",
        walkthrough: ["Divide by 16.5.", "i<=6.1818...", "Practical ceiling around 6 innings.", "Use as planning bound."],
        takeaway: "Inequalities convert policy to actionable limits.",
      },
      {
        title: "Negative Flip Example",
        scenario: "-3r+4>10.",
        walkthrough: ["Subtract 4.", "-3r>6.", "Divide by -3 and flip.", "r<-2."],
        takeaway: "Direction reversal is mandatory on negative division.",
      },
      {
        title: "Required Chase Improvement",
        scenario: "Current chase 0.31, target <=0.27, reduction d.",
        walkthrough: ["Set 0.31-d<=0.27.", "Rearrange.", "d>=0.04.", "Need at least 4 percentage points."],
        takeaway: "Inequalities can quantify minimum intervention.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Write 'at least 7 innings' with i.", answer: "i is at least 7" }, { prompt: "Solve x+4<10.", answer: "x is less than 6" }] },
      { level: "core", prompts: [{ prompt: "Solve -5x+15<=0.", answer: "x is at least 3" }, { prompt: "Write hard-hit rate at least 0.42.", answer: "h is at least 0.42" }] },
      { level: "stretch", prompts: [{ prompt: "Current BB rate 0.095, target <=0.080. Required reduction d?", answer: "d>=0.015" }, { prompt: "Create two pitching constraints and solve overlap.", answer: "Answers vary; must report interval intersection." }] },
    ],
    commonMistakes: [
      "Using equality for threshold questions.",
      "Forgetting direction flip with negative scaling.",
      "Reporting one value instead of the full interval.",
    ],
    lessonSummary:
      "Inequalities preserve threshold direction and produce feasible ranges that map directly to baseball policy decisions. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Turn one hitting and one pitching team standard into inequalities and interpret the solution regions.",
    nextLessonBridge:
      "After thresholds, we rearrange formulas so any variable in a baseball metric can be isolated quickly.",
    professorNotes:
      "Have students underline comparator words before writing symbols. During solving, require them to call out when a negative scale step appears and whether direction flips. This ritual dramatically reduces classification errors in applied work.",
    keyTerms: [
      { term: "inequality", definition: "A directional comparison statement using <, <=, >, or >=." },
      { term: "feasible interval", definition: "Set of values that satisfy a performance constraint." },
    ],
    assessmentItems: [
      {
        id: "l3-mcq-1",
        type: "mcq",
        prompt: "No more than 28% chase rate is written as:",
        options: ["c>=0.28", "c<=0.28", "c=0.28", "c>0.28"],
        correctAnswer: "c<=0.28",
        explanation: "No more than means less than or equal to.",
      },
      {
        id: "l3-exact-1",
        type: "exact",
        prompt: "Solve -4x+6>18.",
        correctAnswer: "x<-3",
        acceptedAnswers: ["x < -3"],
        explanation: "Subtract 6, divide by -4, flip direction.",
      },
      {
        id: "l3-exact-2",
        type: "exact",
        prompt: "For 17i<=102, largest whole-inning i is?",
        correctAnswer: "6",
        explanation: "i<=6, so 6 is largest whole value.",
      },
    ],
    summativeReflection: {
      id: "threshold-inequality-brief",
      title: "Summative: Policy → inequality → interpretation",
      intro:
        "Translate a staff threshold into mathematics and explain the feasible region in baseball language.",
      taskPrompt:
        "Pick one rate-style rule (e.g., chase rate cap, minimum zone rate, max pitches per inning). Write the inequality with defined variables and units, solve for the variable a coach would scan first, and describe who is 'in policy' vs 'out of policy' using interval language.",
      rubric: algebraUnit1SummativeRubric,
    },
  },

  "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::rearranging-formulas-used-in-baseball-metrics": {
    key: "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::rearranging-formulas-used-in-baseball-metrics",
    title: "Rearranging Formulas Used In Baseball Metrics",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Linear Expressions, Equations, And Constraints",
    whyItMatters:
      "Baseball formulas are usually published in one orientation, but practical questions require solving for a different variable. Analysts often need hit targets from batting-average goals, allowable baserunners from WHIP plans, or earned-run limits from ERA constraints. Rearranging formulas gives direct answers and removes inefficient guess-and-check loops during time-sensitive planning windows. It also exposes assumptions and units clearly, helping coaches trust the calculation path. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "If AVG=H/AB and a coach asks how many hits are needed for a target average at a known at-bat total, you must isolate H as AVG*AB. Similar reversals happen with ERA and WHIP. Rearrangement is not a bag of tricks; it is deliberate inverse operation work that preserves equality and interpretation. We will practice converting reporting forms into decision forms, then checking each result against baseball feasibility constraints so mathematically valid but impossible answers are caught immediately.",
    narrativeFlow: [
      "Select known and unknown quantities in a baseball metric.",
      "Apply inverse operations to isolate target variable.",
      "Confirm unit coherence and domain constraints.",
      "Verify by substituting into original formula.",
    ],
    objectives: [
      "Rearrange common baseball metric formulas.",
      "Interpret solved forms for planning use.",
      "Validate rearranged outputs against baseball bounds.",
    ],
    prerequisites: [
      "Equation-solving fluency.",
      "Comfort with fraction manipulation.",
      "Basic familiarity with AVG, ERA, WHIP style metrics.",
    ],
    conceptChunks: [
      {
        heading: "Turning Rate Formulas Into Count Targets",
        explainLikeCoach:
          "Rates summarize, but decisions usually require counts. Rearranging \\(AVG=\\frac{H}{AB}\\) into \\(H=AVG\\cdot AB\\) translates an abstract target into a concrete hit goal players can act on. This is the practical power of rearrangement: same truth, different question answered. [InlineDiagramCue: Formula card rotating from rate form to count-target form with 'planning question' label.] DiagramTitle: Rate-To-Count Rearrangement. DiagramPurpose: Show how one identity answers different baseball planning questions. DiagramInputs: \\(AVG\\), \\(H\\), \\(AB\\), target rate scenario. DiagramInsight: Rearranged equivalents preserve meaning while changing operational usefulness. DiagramCaption: Rewriting a formula can turn a report metric into a coaching target. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For ratio \\(R=\\frac{N}{D}\\) with \\(D\\neq0\\), isolate numerator as \\(N=R\\cdot D\\), and denominator as \\(D=\\frac{N}{R}\\) when \\(R\\neq0\\). Equivalent forms support different decision questions while preserving identity.",
      },
      {
        heading: "Isolating Components In Composite Metrics",
        explainLikeCoach:
          "Composite metrics often hide controllable pieces. Starting from \\(WHIP=\\frac{BB+H}{IP}\\), clear the denominator to get \\(BB+H=WHIP\\cdot IP\\), then isolate \\(BB\\) or \\(H\\) depending on the planning lever. This separates command-driven walks from contact-driven hits so interventions are specific. [InlineDiagramCue: Composite total splitting into walk and hit branches after denominator clearing.] DiagramTitle: Composite Metric Component Isolation. DiagramPurpose: Decompose a bundled metric into actionable subcomponents. DiagramInputs: \\(WHIP\\), \\(BB\\), \\(H\\), \\(IP\\), chosen known component. DiagramInsight: Rearrangement reveals which subfactor must change to hit the overall target. DiagramCaption: Isolate components to assign responsibility clearly.",
        formalNote:
          "For \\(M=\\frac{A+B}{C}\\) with \\(C\\neq0\\), clear the denominator, then isolate component terms via subtraction. Component isolation supports counterfactual planning by linking outputs to controllable subfactors.",
      },
      {
        heading: "Cross-Multiplication With Interpretation",
        explainLikeCoach:
          "Cross-multiplication becomes reliable when you teach it as denominator clearing, not a trick. In proportion equations, multiplying through by denominators removes fractions and exposes equivalent event-count relationships over known opportunities. That framing keeps the operation interpretable and reduces mechanical mistakes. [InlineDiagramCue: Proportion with denominators highlighted, then both cleared in one step to a product equality.] DiagramTitle: Denominator Clearing In Proportions. DiagramPurpose: Reframe cross-multiplication as a transparent equivalence step. DiagramInputs: Proportion \\(\\frac{a}{b}=\\frac{c}{d}\\) with \\(b,d\\neq0\\). DiagramInsight: Clearing denominators preserves equality while improving interpretability for count planning. DiagramCaption: Treat cross-multiplication as controlled denominator removal.",
        formalNote:
          "If \\(\\frac{a}{b}=\\frac{c}{d}\\) with \\(b,d\\neq0\\), multiplying both sides by \\(bd\\) yields \\(ad=bc\\). Validity depends on denominator constraints, which must remain explicit in applied workflows.",
      },
      {
        heading: "Feasibility Screening After Rearrangement",
        explainLikeCoach:
          "Algebra can be correct while the baseball interpretation is impossible. After rearranging and solving, enforce feasibility: hits cannot exceed at-bats, innings cannot be negative, and probabilities must stay within \\([0,1]\\). This final gate protects staff from acting on mathematically polished nonsense. [InlineDiagramCue: Checklist gate after solution step with pass/fail tests for bounds and integer realism.] DiagramTitle: Post-Solve Feasibility Gate. DiagramPurpose: Ensure rearranged outputs satisfy baseball reality constraints. DiagramInputs: Candidate solved value, bound rules, contextual constraints. DiagramInsight: Context validation is a separate required step after symbolic correctness. DiagramCaption: Solve first, then prove the answer can exist in baseball.",
        formalNote:
          "Equivalence transformations preserve algebraic truth, not contextual plausibility. Post-solution validation should enforce nonnegativity, closed-interval bounds, and integer constraints where appropriate.",
      },
    ],
    quickChecks: [
      { prompt: "Solve AVG=H/AB for H.", answer: "H=AVG*AB" },
      { prompt: "From WHIP=(BB+H)/IP, isolate BB+H.", answer: "BB+H=WHIP*IP" },
      { prompt: "Why check feasibility after solving?", answer: "Algebraically valid results can still be impossible in baseball." },
    ],
    workedExamples: [
      {
        title: "Hits Needed For Target Average",
        scenario: "Target AVG .280 over 500 AB.",
        walkthrough: ["Use H=AVG*AB.", "H=0.280*500.", "H=140.", "Check 140<=500."],
        takeaway: "Rearrangement turns targets into actionable counts.",
      },
      {
        title: "WHIP Baserunner Limit",
        scenario: "WHIP target 1.20 over 6 innings.",
        walkthrough: ["Compute BB+H=1.20*6.", "Total=7.2.", "Interpret as about 7 allowed.", "Use for in-game pacing decisions."],
        takeaway: "Solved forms support quick pitching constraints.",
      },
      {
        title: "Isolating Walk Allowance",
        scenario: "WHIP 1.10, IP 7, projected H=5.",
        walkthrough: ["BB=WHIP*IP-H.", "BB=1.10*7-5.", "BB=2.7.", "Interpret as about 2-3 walks."],
        takeaway: "Component isolation helps target specific levers.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Solve K_rate=K/BF for K.", answer: "K=K_rate*BF" }, { prompt: "Solve BB_rate=BB/BF for BF.", answer: "BF=BB/BB_rate" }] },
      { level: "core", prompts: [{ prompt: "Solve ERA=9ER/IP for ER.", answer: "ER=(ERA*IP)/9" }, { prompt: "From WHIP=(BB+H)/IP solve for H.", answer: "H=WHIP*IP-BB" }] },
      { level: "stretch", prompts: [{ prompt: "If (S+a)/520=0.360 with S=170, find a.", answer: "a=17.2, about 18 successes." }, { prompt: "Create a baseball formula and solve for two different variables.", answer: "Answers vary; must preserve equivalence and constraints." }] },
    ],
    commonMistakes: [
      "Memorizing patterns without inverse-operation reasoning.",
      "Dropping denominator constraints after manipulation.",
      "Skipping realism checks on solved values.",
    ],
    lessonSummary:
      "Formula rearrangement converts baseball metrics from descriptive outputs into direct planning equations for unknown quantities. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Choose one hitting and one pitching formula, rearrange each for a new variable, and explain decision use.",
    nextLessonBridge:
      "Next we focus on algebra error checking and sanity bounds so outputs remain trustworthy.",
    professorNotes:
      "Ask students to explain each rearrangement step in baseball language, not just algebraic terms. Then require a feasibility check before finalizing the answer. This reinforces that analytical usefulness depends on interpretation and constraints as much as symbolic correctness.",
    keyTerms: [
      { term: "rearrangement", definition: "Equivalent algebraic rewriting to isolate a chosen variable." },
      { term: "domain constraint", definition: "Condition like nonzero denominator or feasible count bounds." },
    ],
    assessmentItems: [
      {
        id: "l4-mcq-1",
        type: "mcq",
        prompt: "Which is correct for ER from ERA=9ER/IP?",
        options: ["ER=ERA/(9IP)", "ER=ERA*IP", "ER=(ERA*IP)/9", "ER=9ERA/IP"],
        correctAnswer: "ER=(ERA*IP)/9",
        explanation: "Multiply by IP, divide by 9.",
      },
      {
        id: "l4-exact-1",
        type: "exact",
        prompt: "If AVG=.300 and AB=420, find H.",
        correctAnswer: "126",
        explanation: "H=.300*420.",
      },
      {
        id: "l4-exact-2",
        type: "exact",
        prompt: "If WHIP=1.25, IP=8, BB=3, solve H.",
        correctAnswer: "7",
        explanation: "H=1.25*8-3=7.",
      },
    ],
    summativeReflection: {
      id: "rearrangement-planning",
      title: "Summative: Two rearrangements, two decisions",
      intro:
        "Show how the same metric identity supports different planning questions when rearranged.",
      taskPrompt:
        "Choose AVG=H/AB and one pitching metric identity from the lesson (e.g., WHIP or ERA form). For each, rearrange for a different isolated variable than the usual display form. After each rearrangement, write one sentence: 'A coach uses this form when…' and run one feasibility check on a numeric example.",
      rubric: algebraUnit1SummativeRubric,
    },
  },

  "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::algebra-error-checking-and-sanity-bounds": {
    key: "algebra-foundations-for-baseball-analytics::linear-expressions-equations-and-constraints::algebra-error-checking-and-sanity-bounds",
    title: "Algebra Error Checking And Sanity Bounds",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Linear Expressions, Equations, And Constraints",
    whyItMatters:
      "In baseball operations, a mathematically polished report can still fail if outputs violate reality. Negative innings, probabilities over one, or impossible hit totals can appear from simple sign mistakes or dirty joins. Automated dashboards amplify these errors quickly across departments. Sanity bounds and algebra audits are the safety net that protects trust and decision quality. Analysts who build checking routines catch issues early and maintain credibility when recommendations influence lineups, workloads, and development goals. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Imagine a game-day packet projecting -1.8 innings for a planned reliever appearance. The chart may render cleanly, but the result is obviously impossible. Most failures like this come from skipped checks, not advanced math problems. This lesson builds a baseball-specific verification checklist: line-by-line equation audit, unit consistency, bound enforcement, and quick magnitude estimation. Students will learn to detect implausible outputs before they reach coaches and to trace root causes efficiently.",
    narrativeFlow: [
      "Identify common algebra and data errors.",
      "Apply substitution and derivation audits.",
      "Set baseball plausibility bounds on outputs.",
      "Compare exact values to rough estimates.",
    ],
    objectives: [
      "Detect and explain algebraic mistakes in workflows.",
      "Use sanity bounds to catch impossible results.",
      "Apply estimation as a fast plausibility filter.",
    ],
    prerequisites: [
      "Equation-solving and formula-rearrangement practice.",
      "Basic familiarity with baseball metric ranges.",
      "Comfort with unit interpretation.",
    ],
    conceptChunks: [
      {
        heading: "Replay-Review Audit Of Each Algebra Step",
        explainLikeCoach:
          "Treat derivations like a pitch log: every line must record one explicit move. When transitions are skipped, sign changes and dropped terms hide in plain sight, and the final output becomes hard to trust or debug. One-operation-per-line creates a replay trail that quickly reveals the first broken step. [InlineDiagramCue: Sequential equation lines with operation tags and a highlighted first error line.] DiagramTitle: Derivation Replay Trail. DiagramPurpose: Show how line-level traceability localizes algebra errors fast. DiagramInputs: Original equation, step list, operation annotations. DiagramInsight: Auditability depends on explicit step granularity, not just final answer accuracy. DiagramCaption: Traceable algebra workflows shorten root-cause time. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A derivation chain is a proof artifact in which each transformation must preserve equivalence. Operation tagging improves reproducibility and enables rapid peer validation in collaborative analytics settings.",
      },
      {
        heading: "Sanity Bounds From Baseball Reality",
        explainLikeCoach:
          "Sanity bounds are your fastest defense against elegant-looking bad outputs. Rates generally live in \\([0,1]\\), counts must be nonnegative, and events like hits cannot exceed opportunities like at-bats. These checks are simple by design, which is why they work well under deadline pressure. [InlineDiagramCue: Metric cards passing through a bounds filter with one impossible value rejected.] DiagramTitle: Baseball Plausibility Bounds Filter. DiagramPurpose: Operationalize domain constraints as automatic post-compute checks. DiagramInputs: Candidate metrics (rates, counts, opportunities), bound rules. DiagramInsight: Domain checks catch failures that pure algebraic validity cannot detect. DiagramCaption: Plausibility rules protect downstream decisions.",
        formalNote:
          "Domain-informed constraints act as post-computation predicates. Violations indicate upstream data faults, specification drift, or transformation errors and should trigger investigation before publication.",
      },
      {
        heading: "Magnitude Estimation Before Final Trust",
        explainLikeCoach:
          "Use estimation as a preflight check before trusting exact arithmetic. If pace is around \\(15\\) over about \\(6\\) innings, expected total should be near \\(90\\), so any result near \\(900\\) is an immediate red flag. Quick magnitude checks catch decimal and scaling errors that otherwise survive formatting and charting. [InlineDiagramCue: Rough-estimate bubble next to exact-computation output with tolerance band.] DiagramTitle: Estimate-Versus-Exact Sanity Check. DiagramPurpose: Detect order-of-magnitude defects quickly. DiagramInputs: Rough baseline estimate, exact computed value, acceptable deviation threshold. DiagramInsight: Large scale gaps signal structural error before deep debugging begins. DiagramCaption: A 10-second estimate can prevent a 10-hour bad recommendation.",
        formalNote:
          "Order-of-magnitude checks compare exact outputs against approximate baselines. Large relative deviation beyond tolerance is a diagnostic signal for algebraic or data-quality defects.",
      },
      {
        heading: "Cross-Source Benchmark Checks",
        explainLikeCoach:
          "An output can pass algebra checks and still be wrong because of joins, filters, or window definitions. Compare results against trusted feeds, player history, and league baselines to detect silent pipeline drift. Benchmarks give context that pure equation checks cannot provide. [InlineDiagramCue: Three reference sources feeding a comparison panel with variance flags.] DiagramTitle: Multi-Source Benchmark Triangulation. DiagramPurpose: Catch hidden pipeline defects via external consistency checks. DiagramInputs: Current model output, trusted feed value, historical baseline, variance threshold. DiagramInsight: Agreement across independent references increases confidence in reported outputs. DiagramCaption: Cross-source validation detects errors algebra alone cannot see.",
        formalNote:
          "Consistency validation uses independent references as secondary constraints. Significant residuals can expose window misalignment, key mismatches, or unintended preprocessing changes.",
      },
    ],
    quickChecks: [
      { prompt: "Is AVG=1.12 possible?", answer: "No, a batting average cannot exceed one in real baseball data." },
      { prompt: "Why estimate before exact computation?", answer: "To catch obvious scale errors quickly." },
      { prompt: "What if hits exceed at-bats?", answer: "Flag and investigate as impossible output." },
    ],
    workedExamples: [
      {
        title: "Bound Violation Detection",
        scenario: "Dashboard outputs OBP of 1.05.",
        walkthrough: ["Apply 0 to 1 bound.", "Flag violation.", "Trace denominator mapping.", "Correct source and recompute."],
        takeaway: "Bounds stop impossible values early.",
      },
      {
        title: "Factor-of-Ten Catch",
        scenario: "Estimated pitch total near 95, computed value 950.",
        walkthrough: ["Compare estimate and exact.", "Detect order mismatch.", "Find decimal placement error.", "Fix and rerun checks."],
        takeaway: "Magnitude checks prevent embarrassing outputs.",
      },
      {
        title: "Substitution Failure",
        scenario: "Solved x tested in original equation does not balance.",
        walkthrough: ["Substitute candidate.", "Observe mismatch.", "Trace first incorrect sign change.", "Repair and verify again."],
        takeaway: "Plug-back checks reveal hidden derivation faults.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Valid bounds for OBP?", answer: "0<=OBP<=1" }, { prompt: "Estimate 14.8*6.", answer: "About 89 to 90" }] },
      { level: "core", prompts: [{ prompt: "Output H=168 with AB=150. Valid?", answer: "No, impossible." }, { prompt: "Solved innings is -1.3. Give two likely causes.", answer: "Sign error or invalid inputs/assumptions." }] },
      { level: "stretch", prompts: [{ prompt: "Design three sanity checks for workload dashboard.", answer: "Example: nonnegative innings, plausible pitch counts, bounded pace." }, { prompt: "Describe estimate-vs-exact QA protocol.", answer: "Estimate, compute exact, compare tolerance, investigate deviations." }] },
    ],
    commonMistakes: [
      "Assuming algebraic execution guarantees realistic output.",
      "Ignoring range violations because charts look clean.",
      "Skipping benchmark comparisons against known references.",
    ],
    lessonSummary:
      "Reliable baseball algebra includes verification layers: derivation audit, feasibility bounds, estimation checks, and benchmark comparison. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Choose one metric workflow and document a complete quality gate from input checks to final output validation.",
    nextLessonBridge:
      "After robust checking, we transition into function notation and representation for reusable baseball models.",
    professorNotes:
      "Grade students on validation rigor, not just final numeric answers. Require them to present at least one failed-check example and how they diagnosed it. This mirrors production expectations where preventing bad outputs is often more valuable than producing a single clever formula.",
    keyTerms: [
      { term: "sanity bound", definition: "A domain-based limit used to reject implausible values." },
      { term: "magnitude check", definition: "A rough estimate used to test exact output plausibility." },
    ],
    assessmentItems: [
      {
        id: "l5-mcq-1",
        type: "mcq",
        prompt: "Which metric output is impossible and must be flagged?",
        options: ["WHIP 1.18", "K rate 0.24", "AVG 1.07", "OBP 0.351"],
        correctAnswer: "AVG 1.07",
        explanation: "Batting average cannot exceed 1.",
      },
      {
        id: "l5-exact-1",
        type: "exact",
        prompt: "Compute 15.6*6.1.",
        correctAnswer: "95.16",
        acceptedAnswers: ["95.2"],
        explanation: "Exact multiplication gives 95.16.",
      },
      {
        id: "l5-exact-2",
        type: "exact",
        prompt: "If H=142 and AB=130, pass sanity bounds? yes/no",
        correctAnswer: "no",
        acceptedAnswers: ["No", "NO"],
        explanation: "Hits cannot exceed at-bats.",
      },
    ],
    summativeReflection: {
      id: "qa-memo-unit-capstone",
      title: "Summative: One-page QA memo (unit capstone draft)",
      intro:
        "This is the exemplar deliverable for Algebra Unit 1. Draft a memo you could hand to a director of analytics; keep it under one page. Anchors show weak vs strong calibration; your draft is saved only in this browser.",
      taskPrompt:
        "Pick one realistic metric workflow (hitting or pitching). Document inputs, core formulas or equations, at least three explicit sanity checks (bounds, estimate-vs-exact, substitution, or cross-source), and what you would do when a check fails. Name one failure mode you intentionally hunt for.",
      rubric: algebraUnit1SummativeRubric,
      deliverableTemplate: [
        "Decision context & audience (3–4 sentences).",
        "Symbols & units table (minimum four rows).",
        "Computation path with at least one annotated step.",
        "Sanity checks table: check | pass/fail | action if fail.",
        "Closing: single recommendation + caveat line.",
      ],
      anchorResponses: [
        {
          label: "Below expectations (excerpt)",
          excerpt:
            "We ran the numbers and OBP is fine. The model says 1.05 so the hitter is elite. No further checks.",
          commentary:
            "No units, no bound on OBP, no investigation of impossible output; contradicts developing on every row.",
        },
        {
          label: "Strong sample (excerpt)",
          excerpt:
            "Context: platoon DH vs RHP, decision window tonight. Symbols: H, AB, AVG=H/AB with H, AB as counts. Checklist: (1) AVG in [0,1] — pass at 0.284; (2) H≤AB — pass; (3) rough magnitude: 0.28*120≈34 vs reported 34 H — consistent. If AVG>1, halt publish and trace denominator. Caveat: small AB sample; widen CI before roster claim.",
          commentary:
            "Specific scenario, explicit checks, feasible actions on failure—matches Excellent/Proficient columns.",
        },
      ],
    },
  },

  "algebra-foundations-for-baseball-analytics::functions-and-representations::function-notation-through-baseball-input-output-stories": {
    key: "algebra-foundations-for-baseball-analytics::functions-and-representations::function-notation-through-baseball-input-output-stories",
    title: "Function Notation Through Baseball Input-Output Stories",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Functions And Representations",
    whyItMatters:
      "Baseball decision systems are mostly input-output stories in disguise. Velocity goes in, whiff probability comes out. Rest days go in, projected stamina comes out. Plate appearances go in, expected runs come out. Function notation gives a reliable language for these stories so analysts can explain where numbers come from and why they differ across players. Without explicit function structure, teams confuse observed stats with modeled values and struggle to debug disagreements across tools. Strong function notation prevents that by making each mapping explicit and traceable. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Suppose w(v) represents expected whiff probability from fastball velocity. The expression w(97) is not just a math exercise; it is a baseball question asking for model output at a specific velocity context. If one analyst reports w(97)=0.31 and another reports 0.27, the difference might come from model definition, calibration data, or hidden inputs. Function notation helps isolate those sources by forcing clear argument definitions and output meaning. In this lesson, students turn baseball narratives into function notation, evaluate functions at concrete inputs, and communicate interpretations as full baseball sentences rather than symbol-only fragments.",
    narrativeFlow: [
      "Translate baseball relationships into function signatures.",
      "Evaluate function outputs at concrete inputs.",
      "Interpret values in tactical baseball language.",
      "Differentiate function rules from isolated raw observations.",
    ],
    objectives: [
      "Write correct function notation from baseball stories.",
      "Evaluate and compare function values at multiple inputs.",
      "Explain function outputs for coaching decisions.",
    ],
    prerequisites: [
      "Variables and expressions from prior lessons.",
      "Basic understanding of baseball metrics.",
      "Comfort with substitution and arithmetic.",
    ],
    conceptChunks: [
      {
        heading: "Pitch Story To Function Signature",
        explainLikeCoach:
          "When a coach says whiff chance depends on velocity, write w(v). The outside letter names output, the inside letter names input. This small structure immediately clarifies what can change and what is held fixed. It also makes disagreement easier to diagnose because everyone references the same input-output object instead of vague phrases. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A function maps each domain input to exactly one codomain output. Notation w:V->W with evaluation w(v0) is a compact contract describing valid inputs and expected output type. In baseball applications, include context qualifiers so identical symbols are not reused for incompatible models.",
      },
      {
        heading: "Evaluation As What-If Query Engine",
        explainLikeCoach:
          "Evaluating r(p) at p=38 asks what expected runs correspond to thirty-eight projected plate appearances under this model. Comparing r(38) and r(42) tells you marginal change from opportunity volume. That is exactly how lineup and pinch-hit what-if conversations happen in game prep.",
        formalNote:
          "Function evaluation substitutes an element of the domain into the rule to obtain one output. Comparative evaluation approximates sensitivity when derivatives are unnecessary. Interpretation should state ceteris paribus assumptions so stakeholders know what was held constant.",
      },
      {
        heading: "Representation Translation For Staff Communication",
        explainLikeCoach:
          "The same function can live as an equation, table, or graph. Analysts may compute from an equation but explain with a graph and verify with a table row. Maintaining consistent meaning across these formats prevents accidental reinterpretation during meetings.",
        formalNote:
          "Equivalent representations preserve mapping structure while emphasizing different properties. Algebra supports symbolic manipulation, tables preserve observed points, and graphs reveal shape. Translation among forms should document interpolation or smoothing assumptions.",
      },
      {
        heading: "Naming Functions In Pipeline Context",
        explainLikeCoach:
          "In production systems, numbers move through chained models. Naming functions clearly, like q_raw and q_park_adjusted, prevents confusion about what a value represents. Ambiguous naming creates avoidable disputes when outputs differ across reports.",
        formalNote:
          "Function identifiers should encode provenance and transformation stage. Typed interfaces and argument lists support traceability across pipelines and make debugging simpler when one stage drifts.",
      },
    ],
    quickChecks: [
      { prompt: "If h(a) maps at-bats to expected hits, what is h(4)?", answer: "Expected hits for four at-bats under rule h." },
      { prompt: "Can one input map to two outputs in a function?", answer: "No, that violates function rules." },
      { prompt: "Why keep argument names explicit?", answer: "To show which baseball quantities drive the output." },
    ],
    workedExamples: [
      {
        title: "Runs From Plate Appearances",
        scenario: "r(p)=0.11p+1.9.",
        walkthrough: ["Compute r(36)=5.86.", "Compute r(40)=6.3.", "Difference is 0.44.", "Interpret in lineup planning context."],
        takeaway: "Function evaluation supports tactical what-if analysis.",
      },
      {
        title: "Velocity To Whiff Mapping",
        scenario: "w(v)=0.012v-0.85.",
        walkthrough: ["w(95)=0.29.", "w(98)=0.326.", "Higher input raises output.", "Check domain validity before interpretation."],
        takeaway: "Inputs and domain constraints must be communicated together.",
      },
      {
        title: "Table-Based Function Read",
        scenario: "Function f(theta) from launch-angle lookup table.",
        walkthrough: ["Define theta as input.", "Read or interpolate f(18).", "State method used.", "Report uncertainty around interpolation."],
        takeaway: "Function notation unifies data and model representations.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Write notation for expected ERA from rest days d.", answer: "E of d notation" }, { prompt: "If f(x)=2x+3, find f(5).", answer: "f of 5 equals 13" }] },
      { level: "core", prompts: [{ prompt: "Given r(p)=0.1p+2.2, compare r(34) and r(39).", answer: "5.6 vs 6.1." }, { prompt: "Interpret h(a) at a=0.", answer: "Expected hits when no at-bats are taken." }] },
      { level: "stretch", prompts: [{ prompt: "Define two-input function for expected extra-base-hit probability.", answer: "Example: e(v,l) with clear domains." }, { prompt: "Explain one function in equation, table, and graph forms.", answer: "All represent the same mapping with different communication strengths." }] },
    ],
    commonMistakes: [
      "Using notation without defining the underlying rule.",
      "Evaluating inputs outside valid baseball domain.",
      "Confusing observed data points with model outputs.",
    ],
    lessonSummary:
      "Function notation gives baseball analytics a precise input-output language that improves interpretation, comparison, and debugging. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Create one baseball function, evaluate it at three inputs, and explain each value as a coaching-facing statement.",
    nextLessonBridge:
      "Next we formalize domain and range so model inputs and outputs stay physically plausible.",
    professorNotes:
      "Push students to speak function evaluations as complete baseball sentences: what changed, what stayed fixed, and what the output means. This communication skill is often the difference between a technically correct analysis and one that coaches can actually use.",
    keyTerms: [
      { term: "function", definition: "A mapping from each valid input to exactly one output." },
      { term: "evaluation", definition: "Computing a function output at a specific input." },
    ],
    assessmentItems: [
      {
        id: "l6-mcq-1",
        type: "mcq",
        prompt: "If w(v) maps velocity to whiff probability, w(97) is:",
        options: ["A velocity input", "An output probability at 97 mph", "A player ID", "A domain bound"],
        correctAnswer: "An output probability at 97 mph",
        explanation: "Function evaluation returns output for chosen input.",
      },
      { id: "l6-exact-1", type: "exact", prompt: "Given r(p)=0.12p+1.5, find r(35).", correctAnswer: "5.7", explanation: "0.12*35+1.5=5.7." },
      { id: "l6-exact-2", type: "exact", prompt: "If f(x)=2x-1, compute f(9).", correctAnswer: "17", explanation: "Substitute x=9." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::functions-and-representations::domain-range-and-physical-plausibility": {
    key: "algebra-foundations-for-baseball-analytics::functions-and-representations::domain-range-and-physical-plausibility",
    title: "Domain, Range, And Physical Plausibility",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Functions And Representations",
    whyItMatters:
      "A baseball function can be mathematically tidy and still useless if it accepts impossible inputs or produces impossible outputs. Domain defines where the model can be trusted, and range defines what outputs are credible. Ignoring these ideas leads to nonsense like negative pitch speeds, hit probabilities above one, or projections at conditions never observed in real games. Teams that enforce domain and range checks avoid bad decisions and protect trust in analytics products. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Consider an expected slugging model trained on exit velocities between 70 and 115 mph. If someone evaluates it at 30 mph or 140 mph, the software may return a value, but that value lacks evidence support. The same issue happens on outputs: if probability exceeds one, something is broken regardless of plot aesthetics. This lesson turns baseball common sense into formal constraints. Students will define valid input windows, enforce output bounds, and communicate applicability limits so tools are used responsibly.",
    narrativeFlow: [
      "Define plausible domains from baseball context.",
      "Specify expected output ranges by metric type.",
      "Detect out-of-range usage and extrapolation risk.",
      "Document model applicability boundaries for users.",
    ],
    objectives: [
      "Determine valid input domains for baseball models.",
      "Check whether outputs respect metric bounds.",
      "Communicate model validity limits clearly.",
    ],
    prerequisites: [
      "Function notation and evaluation basics.",
      "Metric interpretation familiarity.",
      "Understanding of baseball measurement realism.",
    ],
    conceptChunks: [
      {
        heading: "Defining Domains From Game Constraints",
        explainLikeCoach:
          "Domain is your eligibility list for inputs. If input is hits in a game, domain is nonnegative integers. If input is velocity, domain should reflect realistic competitive values and calibration coverage. Defining domain first blocks nonsense queries before they become false insights. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Domain combines mathematical admissibility and contextual plausibility. Formal model specs should include inequality bounds, data-type requirements, and calibration intervals to prevent invalid inference requests.",
      },
      {
        heading: "Range Integrity For Baseball Metrics",
        explainLikeCoach:
          "Some outputs have strict bounds, especially probabilities and rates. If output breaks those bounds, analysts should investigate root causes instead of clipping silently. Bound violations are strong indicators of scaling or transformation errors.",
        formalNote:
          "Range is image set R={f(x)|x in D}. For probability outputs, R must be subset of [0,1]. Violations imply misspecification, invalid inputs, or implementation defects requiring correction.",
      },
      {
        heading: "Extrapolation Beyond Observed Conditions",
        explainLikeCoach:
          "Models can look confident outside training space, but that confidence is often fake. A relation learned in normal velocity bands may fail at extremes. Analysts should mark calibrated windows and avoid overpromising outside them.",
        formalNote:
          "When use-domain exceeds training support, assumptions dominate predictions and uncertainty expands. Model cards should state support bounds and boundary behavior for out-of-range requests.",
      },
      {
        heading: "Communicating Boundary Warnings In Tools",
        explainLikeCoach:
          "Dashboard users need visible warnings when inputs exceed valid ranges. Clear notices prevent misuse and keep staff from treating every slider position as equally trustworthy. Transparent limits improve adoption, not reduce it.",
        formalNote:
          "Applicability metadata should be machine-enforced and user-visible. Boundary checks with explicit warnings reduce silent failure modes and improve accountability.",
      },
    ],
    quickChecks: [
      { prompt: "Can a probability output be 1.12?", answer: "No, any probability must stay between zero and one inclusive." },
      { prompt: "Why limit domain to calibrated ranges?", answer: "To avoid unsupported extrapolation." },
      { prompt: "Is 2.5 hits a valid game-count input?", answer: "No, hits are integer counts." },
    ],
    workedExamples: [
      {
        title: "Out-of-Domain Input",
        scenario: "Model valid for velocity 85-101 mph queried at 78.",
        walkthrough: ["Check against domain bounds.", "Flag as invalid.", "Warn user.", "Use fallback approach if needed."],
        takeaway: "Domain checks prevent unsupported inference.",
      },
      {
        title: "Output Bound Violation",
        scenario: "Home-run probability model returns 1.08.",
        walkthrough: ["Recognize impossible range value.", "Trace scaling stage.", "Fix normalization.", "Retest full output distribution."],
        takeaway: "Range checks catch hidden implementation issues.",
      },
      {
        title: "Count-Type Domain Guard",
        scenario: "Function p(n) uses innings count n, input entered as -1.",
        walkthrough: ["Apply nonnegative constraint.", "Reject input.", "Request corrected value.", "Log validation event."],
        takeaway: "Type and bound checks preserve realism.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "State valid probability range.", answer: "0 to 1 inclusive" }, { prompt: "Is launch angle 500 degrees plausible?", answer: "No, that is not plausible." }] },
      { level: "core", prompts: [{ prompt: "Domain [80,105]: classify 79,92,110.", answer: "invalid, valid, invalid" }, { prompt: "Expected runs output -0.8; immediate action?", answer: "Flag and diagnose model or data issue." }] },
      { level: "stretch", prompts: [{ prompt: "Propose domain/range for xBA(v,theta).", answer: "Example: v in [60,120], theta in [-90,90], xBA in [0,1]." }, { prompt: "Write a user warning for out-of-domain input.", answer: "Must state invalid input, valid range, and next step." }] },
    ],
    commonMistakes: [
      "Evaluating models outside realistic baseball conditions.",
      "Ignoring impossible outputs because code still runs.",
      "Failing to expose validity limits in user interfaces.",
    ],
    lessonSummary:
      "Domain and range constraints keep baseball models physically plausible, interpretable, and safe for decision workflows.",
    synthesisPrompt:
      "Document domain, range, and boundary handling for one model you currently use.",
    nextLessonBridge:
      "With plausibility controls set, we can interpret linear functions as baseline-plus-rate baseball models.",
    professorNotes:
      "Require a domain-range slide before students present any model performance chart. This order forces responsible framing and prevents overconfident extrapolation during discussion. Make boundary communication a graded criterion so it becomes an automatic habit.",
    keyTerms: [
      { term: "domain", definition: "Set of valid model inputs." },
      { term: "range", definition: "Set of plausible outputs from valid inputs." },
    ],
    assessmentItems: [
      {
        id: "l7-mcq-1",
        type: "mcq",
        prompt: "A probability model output of 1.05 indicates:",
        options: ["Strong certainty", "A range violation", "Valid extra-innings state", "Normal rounding"],
        correctAnswer: "A range violation",
        explanation: "Probability must remain within 0 and 1.",
      },
      { id: "l7-exact-1", type: "exact", prompt: "If domain is [85,102], is 103 valid? yes/no", correctAnswer: "no", acceptedAnswers: ["No", "NO"], explanation: "103 is outside the interval." },
      { id: "l7-exact-2", type: "exact", prompt: "Hits input n=4.5 valid? yes/no", correctAnswer: "no", acceptedAnswers: ["No", "NO"], explanation: "Hits are integer counts." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::functions-and-representations::linear-functions-and-rate-interpretations": {
    key: "algebra-foundations-for-baseball-analytics::functions-and-representations::linear-functions-and-rate-interpretations",
    title: "Linear Functions And Rate Interpretations",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Functions And Representations",
    whyItMatters:
      "Linear functions are common in baseball analytics because many short-window relationships can be approximated as baseline plus steady rate. Pitch count versus innings, expected runs versus plate appearances, and workload proxies versus usage often behave linearly over constrained ranges. Understanding slope and intercept lets analysts explain not just what a projection is, but why it moves. This interpretability improves coaching adoption and helps analysts detect when linear assumptions stop being valid.",
    lessonOpener:
      "Take p(i)=14.5i+8 where i is innings. The slope 14.5 means each additional inning adds about 14.5 pitches in this model context. The intercept 8 reflects baseline overhead at zero innings in model coordinates, which may represent warm-up or setup factors rather than literal game output. Parameter interpretation like this turns equations into operational language. In this lesson we link slope to marginal rate, intercept to baseline, units to meaning, and domain to trust boundaries.",
    narrativeFlow: [
      "Identify slope and intercept in baseball linear forms.",
      "Interpret slope as marginal change with units.",
      "Interpret intercept with domain awareness.",
      "Compare linear models for tactical insights.",
    ],
    objectives: [
      "Read baseball meaning from linear parameters.",
      "Compute marginal changes from slope values.",
      "Communicate valid scope for linear assumptions.",
    ],
    prerequisites: [
      "Function notation fluency.",
      "Arithmetic with signed and decimal values.",
      "Basic baseball rate metric familiarity.",
    ],
    conceptChunks: [
      {
        heading: "Slope As Marginal Baseball Rate",
        explainLikeCoach:
          "Slope answers how much output changes when input increases by one unit. In pitch-count models, that means extra pitches per extra inning. Different slopes across pitchers indicate different workload growth rates, which helps plan bullpen timing and risk management. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For y=mx+b, slope m equals Delta y / Delta x with units output-per-input. Comparisons require consistent variable definitions and sampling contexts to avoid confounded interpretation.",
      },
      {
        heading: "Intercept As Baseline State",
        explainLikeCoach:
          "Intercept is output at zero input, but zero may or may not be physically meaningful. Analysts must explain what baseline state intercept represents in model coordinates so staff does not misread it as literal gameplay output.",
        formalNote:
          "Intercept b is y at x=0. Interpretation depends on whether x=0 lies in practical domain and whether variables were centered or transformed before fitting.",
      },
      {
        heading: "Unit-Aware Parameter Communication",
        explainLikeCoach:
          "A coefficient without units invites misuse. If slope is runs per plate appearance, multiplying by opportunity changes gives expected run shift. Misreading units can reverse tactical conclusions, so every parameter should be spoken with its measurement context.",
        formalNote:
          "If y has unit Uy and x has unit Ux, then m has unit Uy/Ux and b has unit Uy. Dimensional annotation is required for coherent interpretation and model sharing.",
      },
      {
        heading: "Range Limits For Linear Utility",
        explainLikeCoach:
          "Linear models are often local approximations. They may fit well in mid-range game states but fail at extremes where fatigue, strategy, or nonlinear effects dominate. Analysts should state validity windows explicitly.",
        formalNote:
          "Constant marginal effect is a structural assumption. Residual diagnostics and segmented validation identify regimes where linearity deteriorates. Publish validity intervals with model outputs.",
      },
    ],
    quickChecks: [
      { prompt: "In y=3x+5, slope is?", answer: "The slope equals three, meaning y rises three units per one-unit increase in x." },
      { prompt: "If slope is pitches per inning, what does slope*2 represent?", answer: "Expected pitch increase for two more innings." },
      { prompt: "Is intercept always literal in baseball?", answer: "No, interpretation depends on domain and preprocessing." },
    ],
    workedExamples: [
      {
        title: "Pitch Count Growth",
        scenario: "p(i)=14.5i+8.",
        walkthrough: ["p(5)=80.5.", "p(6)=95.", "Difference 14.5.", "Interpret as one-inning marginal cost."],
        takeaway: "Slope gives immediate tactical rate meaning.",
      },
      {
        title: "Run Projection Rate",
        scenario: "r(a)=0.12a+1.6.",
        walkthrough: ["r(34)=5.68.", "r(40)=6.4.", "Gain is 0.72.", "Attribute change to slope times input shift."],
        takeaway: "Unit-tagged slope supports clear projection deltas.",
      },
      {
        title: "Comparing Pitcher Models",
        scenario: "A: p=14i+10, B: p=16i+6.",
        walkthrough: ["A has higher baseline, lower growth.", "B has lower baseline, faster growth.", "At larger i, B reaches cap sooner.", "Choose strategy by projected inning depth."],
        takeaway: "Parameter comparison guides deployment choices.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Find slope/intercept in y=4x-2.", answer: "slope 4, intercept -2" }, { prompt: "Compute y for x=3 in y=2x+5.", answer: "y equals 11" }] },
      { level: "core", prompts: [{ prompt: "For p(i)=15i+12, extra pitches from i=4 to i=6?", answer: "30 extra pitches" }, { prompt: "Interpret slope 0.09 in r(a)=0.09a+2.1.", answer: "0.09 expected runs per extra plate appearance." }] },
      { level: "stretch", prompts: [{ prompt: "m1=0.004/day and m2=0.001/day over 20 days; compare gains.", answer: "0.08 vs 0.02" }, { prompt: "Give a case where intercept is not physically literal.", answer: "When x=0 is outside realistic gameplay domain." }] },
    ],
    commonMistakes: [
      "Ignoring units while interpreting slope.",
      "Treating intercept as literal without context.",
      "Extending linear models far beyond validated ranges.",
    ],
    lessonSummary:
      "Linear baseball models are useful when slope, intercept, units, and validity range are interpreted together. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Take one baseball trend, write a linear model form, and explain both parameters as tactical statements.",
    nextLessonBridge:
      "Next we model regime changes using piecewise functions where one linear rule is not enough.",
    professorNotes:
      "During presentations, require students to define slope in plain baseball language with units before showing any equation. Then ask where the linear assumption might fail. This keeps focus on interpretability and model scope rather than rote algebra.",
    keyTerms: [
      { term: "slope", definition: "Marginal output change per unit input." },
      { term: "intercept", definition: "Model baseline output at zero input." },
    ],
    assessmentItems: [
      {
        id: "l8-mcq-1",
        type: "mcq",
        prompt: "In p(i)=16i+7, what does 16 represent?",
        options: ["Starting pitch count", "Pitches added per inning", "Innings cap", "Pitches at i=0"],
        correctAnswer: "Pitches added per inning",
        explanation: "Coefficient of i is slope.",
      },
      { id: "l8-exact-1", type: "exact", prompt: "Compute p(5) for p(i)=14i+10.", correctAnswer: "80", explanation: "14*5+10." },
      { id: "l8-exact-2", type: "exact", prompt: "If r(a)=0.1a+2 and a rises by 8, how much does r rise?", correctAnswer: "0.8", explanation: "Slope times change in input." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::functions-and-representations::piecewise-models-for-regime-based-baseball-behavior": {
    key: "algebra-foundations-for-baseball-analytics::functions-and-representations::piecewise-models-for-regime-based-baseball-behavior",
    title: "Piecewise Models For Regime-Based Baseball Behavior",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Functions And Representations",
    whyItMatters:
      "Baseball performance often changes by regime rather than following one rule everywhere. A starter can look stable early and decline after a pitch-count threshold. Hitter outcomes can shift by velocity band. Defensive run prevention can change by park and weather state. A single global function blurs these dynamics and can hide tactical inflection points. Piecewise models make regime changes explicit so staff can plan around them with transparent algebra. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Suppose expected run prevention cost grows slowly through five innings and then accelerates as fatigue sets in. One linear line cannot express both patterns well, but a piecewise function can assign one rule for i<=5 and another for i>5. The key is clear interval definitions and accurate branch selection. In this lesson, students define breakpoints from baseball context, evaluate piecewise functions correctly, and discuss whether transitions should be continuous or intentionally abrupt based on mechanism.",
    narrativeFlow: [
      "Identify baseball phenomena with regime shifts.",
      "Define branch intervals and corresponding formulas.",
      "Evaluate inputs at interior and boundary points.",
      "Interpret breakpoint effects for tactical planning.",
    ],
    objectives: [
      "Build piecewise models from baseball threshold behavior.",
      "Apply correct branch logic during evaluation.",
      "Explain continuity and breakpoint interpretation.",
    ],
    prerequisites: [
      "Function evaluation basics.",
      "Inequality interval fluency.",
      "Understanding of baseball regime changes.",
    ],
    conceptChunks: [
      {
        heading: "Through-The-Order Regime Definitions",
        explainLikeCoach:
          "Third-time-through penalties are a classic regime shift. Piecewise rules let analysts model one relationship before the threshold and another after, matching on-field experience and improving bullpen trigger planning. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Piecewise functions partition domain into disjoint intervals with distinct rules. Breakpoint selection should be evidence-based and interval coverage must be complete and non-overlapping.",
      },
      {
        heading: "Boundary Logic And Branch Selection",
        explainLikeCoach:
          "Most errors occur when the wrong branch is used at the boundary. If one branch is x<=18 and another is x>18, then x=18 belongs to the first branch. Tiny symbol differences can flip recommendations.",
        formalNote:
          "Branch selection is predicate evaluation on interval definitions. Inclusive and exclusive operators must be explicit to avoid undefined or multiply-defined points.",
      },
      {
        heading: "Continuity Versus Tactical Step Changes",
        explainLikeCoach:
          "Some baseball effects change smoothly, others jump after strategic events. Piecewise models should state whether continuity is expected so sudden output jumps are interpreted correctly.",
        formalNote:
          "Continuity at breakpoint c requires matching one-sided limits with function value. Discontinuity may be intentional for policy-triggered state changes and should be documented.",
      },
      {
        heading: "Using Piecewise Outputs In Game Decisions",
        explainLikeCoach:
          "Branch-aware predictions can drive bullpen warm-up timing, defensive alignment changes, or matchup choices once thresholds are crossed. The value is transparent conditional logic aligned with coaching decisions.",
        formalNote:
          "Piecewise outputs can feed rule-based decision layers. Near breakpoints, uncertainty annotation is recommended because small input perturbations can switch branches.",
      },
    ],
    quickChecks: [
      { prompt: "If branch is x<=10 and another is x>10, where does x=10 go?", answer: "First branch." },
      { prompt: "Why use piecewise models in baseball?", answer: "Because behavior changes across regimes." },
      { prompt: "What must be true of branch intervals?", answer: "They must cover valid inputs unambiguously." },
    ],
    workedExamples: [
      {
        title: "Fatigue Threshold Pitch Model",
        scenario: "p(i)=14i+5 for i<=5, and p(i)=18i-15 for i>5.",
        walkthrough: ["p(4)=61.", "p(7)=111.", "Check boundary p(5)=75 from first branch.", "Interpret steeper late slope."],
        takeaway: "Piecewise slopes capture changing workload dynamics.",
      },
      {
        title: "Velocity Band Contact Model",
        scenario: "c(v)=0.84 for v<95, c(v)=0.76 for v>=95.",
        walkthrough: ["v=94 -> 0.84.", "v=97 -> 0.76.", "Interpret reduced contact at high velocity.", "Use in matchup decisions."],
        takeaway: "Conditional bands improve tactical realism.",
      },
      {
        title: "Undefined Boundary Fix",
        scenario: "Original model used x<20 and x>20.",
        walkthrough: ["Detect missing x=20 case.", "Revise one branch to include boundary.", "Retest representative values.", "Document corrected rule set."],
        takeaway: "Piecewise definitions must cover all intended inputs.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Write two branches split at innings i=6.", answer: "Answers vary with clear inequalities." }, { prompt: "Evaluate f(x)=2x for x<=3 and f=x+4 for x>3 at x=2.", answer: "f of 2 equals 4" }] },
      { level: "core", prompts: [{ prompt: "For f=3x-1 when x<5 and f=2x+2 when x>=5, find f(5).", answer: "f of 5 equals 12" }, { prompt: "Why does x=5 use second branch?", answer: "Because condition is x>=5." }] },
      { level: "stretch", prompts: [{ prompt: "Create command-score piecewise model with breakpoint at 80 pitches.", answer: "Answers vary; include branch meaning." }, { prompt: "Choose constants for continuity at breakpoint.", answer: "Answers vary; left and right outputs must match." }] },
    ],
    commonMistakes: [
      "Misreading inclusive/exclusive boundary symbols.",
      "Leaving a gap where some inputs have no rule.",
      "Choosing breakpoints without baseball evidence.",
    ],
    lessonSummary:
      "Piecewise models represent baseball regime changes through explicit interval rules and breakpoint-aware interpretation.",
    synthesisPrompt:
      "Design a piecewise model for one tactical baseball phenomenon and justify your breakpoint with baseball reasoning.",
    nextLessonBridge:
      "After regime modeling, we compose functions to represent full multi-stage baseball analytics pipelines.",
    professorNotes:
      "Require students to circle branch conditions before each evaluation and explain why a specific input belongs to that branch. This simple habit sharply reduces errors. Also ask for a baseball justification of every breakpoint to keep piecewise complexity purposeful.",
    keyTerms: [
      { term: "piecewise function", definition: "Function defined by different formulas on different intervals." },
      { term: "breakpoint", definition: "Input value where piecewise rule changes." },
    ],
    assessmentItems: [
      {
        id: "l9-mcq-1",
        type: "mcq",
        prompt: "If f=x+2 for x<=4 and f=3x for x>4, rule at x=4 is:",
        options: ["x+2", "3x", "both", "neither"],
        correctAnswer: "x+2",
        explanation: "x=4 is included in first branch.",
      },
      { id: "l9-exact-1", type: "exact", prompt: "Evaluate f=2x for x<3 and f=x+5 for x>=3 at x=6.", correctAnswer: "11", explanation: "Use second branch." },
      { id: "l9-exact-2", type: "exact", prompt: "For p(i)=14i+5 when i<=5, compute p(5).", correctAnswer: "75", explanation: "Boundary belongs to first branch." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::functions-and-representations::composing-functions-in-modeling-pipelines": {
    key: "algebra-foundations-for-baseball-analytics::functions-and-representations::composing-functions-in-modeling-pipelines",
    title: "Composing Functions In Modeling Pipelines",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Functions And Representations",
    whyItMatters:
      "Modern baseball analytics is a chain of models, not a single equation. Raw events become features, features become intermediate scores, and those scores feed final projections used in strategy meetings. Function composition captures that chain exactly and helps analysts trace where changes originate. When projections move unexpectedly, composition-based thinking reveals whether the shift came from upstream feature logic or downstream conversion rules. This is also how analysts assign ownership during review: if one stage changed assumptions, the organization can localize follow-up work instead of debating the entire model stack. Composition therefore supports technical accountability, faster iteration, and clearer communication between data, coaching, and player-development groups. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "If f(w) maps workload to fatigue and g(u) maps fatigue to expected command, then g(f(w)) maps workload directly to command while preserving stage structure. This is how many practical pipelines work. Evaluating inside-out and logging intermediate values lets teams debug quickly and communicate which stage drove an output shift. In this lesson we compose baseball functions, test interface compatibility, and interpret sensitivity across linked stages. We will also treat composition as a reporting tool when the front office asks why a projection moved. Students should trace the chain stage by stage, name the first intermediate number that changed enough to matter, and say whether later stages reacted in a believable way or look like a modeling bug.",
    narrativeFlow: [
      "Describe baseball pipelines as composed functions.",
      "Evaluate compositions in correct inner-to-outer order.",
      "Validate scale and unit compatibility between stages.",
      "Trace output movement back to contributing layers.",
    ],
    objectives: [
      "Write and evaluate composed baseball functions.",
      "Track intermediate outputs for debugging and interpretation.",
      "Diagnose stage-level causes of projection changes.",
    ],
    prerequisites: [
      "Function notation fundamentals.",
      "Domain and range awareness.",
      "Basic familiarity with analytics pipeline structure.",
    ],
    conceptChunks: [
      {
        heading: "Pipeline Chains As Formal Composition",
        explainLikeCoach:
          "Composition is a relay handoff. One stage transforms the input, then the next stage uses that output. This framing helps coaches understand why a final projection changed even when raw box-score stats did not. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Composition is (g o f)(x)=g(f(x)) when codomain of f matches domain of g. Interface compatibility is a strict requirement, not a convenience.",
      },
      {
        heading: "Inside-Out Evaluation Discipline",
        explainLikeCoach:
          "Always compute inner function first. Skipping that order creates confusion and hides which stage introduced error. Recording intermediate values makes model review concrete and efficient.",
        formalNote:
          "Evaluation sequence follows argument dependence. Intermediate logging provides observability for stagewise diagnostics and drift detection.",
      },
      {
        heading: "Scale And Unit Contracts Between Stages",
        explainLikeCoach:
          "A common bug is feeding 0-100 output into a function expecting 0-1. Composition only works if handoff contracts match. If not, add a conversion stage explicitly.",
        formalNote:
          "Let f:X->U and g:V->Y. If U and V differ, insert mapping t:U->V so g(t(f(x))) is well-defined and interpretable.",
      },
      {
        heading: "Sensitivity Tracing Across Layers",
        explainLikeCoach:
          "Small upstream changes can become large downstream effects or get damped out. Composition helps identify leverage points for training and tactical intervention.",
        formalNote:
          "Layerwise finite differences or derivatives attribute output variation to inner and outer stage responses, supporting targeted intervention planning.",
      },
    ],
    quickChecks: [
      { prompt: "In h(x)=g(f(x)), which function is evaluated first?", answer: "Evaluate f first." },
      { prompt: "Why store intermediate outputs?", answer: "To diagnose where shifts or errors occur." },
      { prompt: "Can you compose mismatched stage scales directly?", answer: "No, align scales first." },
    ],
    workedExamples: [
      {
        title: "Workload To Command Pipeline",
        scenario: "f(w)=0.02w and g(u)=100-30u.",
        walkthrough: ["f(40)=0.8.", "g(0.8)=76.", "Interpret command score output.", "Check scale compatibility."],
        takeaway: "Composed evaluation links raw input to final decision metric.",
      },
      {
        title: "Interface Mismatch Repair",
        scenario: "f outputs 0-100 while g expects 0-1.",
        walkthrough: ["Detect mismatch.", "Insert t(z)=z/100.", "Use g(t(f(x))).", "Retest outputs for plausibility."],
        takeaway: "Explicit interface contracts prevent silent distortion.",
      },
      {
        title: "Stage Attribution",
        scenario: "Final projection drops despite stable raw velocity.",
        walkthrough: ["Inspect inner and outer stage outputs.", "Find fatigue transform shifted due to rest input.", "Confirm downstream stage behaved normally.", "Report root cause clearly."],
        takeaway: "Composition supports transparent debugging narratives.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "If f(x)=x+2 and g(u)=3u, compute g(f(4)).", answer: "g of f of 4 is 18" }, { prompt: "Write h(x)=g(f(x)) in words.", answer: "Apply f to x, then apply g to the result." }] },
      { level: "core", prompts: [{ prompt: "f(w)=0.05w, g(u)=1-u. Compute g(f(10)).", answer: "g of f of 10 is 0.5" }, { prompt: "State one reason to log intermediate values.", answer: "To isolate which stage caused output drift." }] },
      { level: "stretch", prompts: [{ prompt: "Design a three-stage baseball composition from workload to injury-risk score.", answer: "Answers vary; include stage definitions and scales." }, { prompt: "Give example of a unit mismatch and correction map.", answer: "Answers vary; must include explicit conversion stage." }] },
    ],
    commonMistakes: [
      "Evaluating outer function before inner result exists.",
      "Ignoring interface scale or unit mismatch.",
      "Treating pipeline output as a black box without stage attribution.",
    ],
    lessonSummary:
      "Function composition models baseball analytics pipelines as linked stages with clear order, interfaces, and interpretable dependencies. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Map one real pipeline in your workflow as composed functions and identify where you would monitor intermediate outputs.",
    nextLessonBridge:
      "We now move into systems of equations where multiple constraints interact simultaneously.",
    professorNotes:
      "Have students diagram composition as arrows between stages and annotate expected units at each handoff. Then require one debugging story where they locate a failure stage. This builds operational intuition beyond symbolic manipulation.",
    keyTerms: [
      { term: "composition", definition: "Applying one function to the output of another." },
      { term: "interface contract", definition: "Expected scale, unit, and type at stage handoffs." },
    ],
    assessmentItems: [
      {
        id: "l10-mcq-1",
        type: "mcq",
        prompt: "For h(x)=g(f(x)), correct evaluation order is:",
        options: ["g then f", "f then g", "either order", "depends only on x"],
        correctAnswer: "f then g",
        explanation: "Outer function requires inner output first.",
      },
      { id: "l10-exact-1", type: "exact", prompt: "If f(x)=x+1 and g(u)=2u, compute g(f(5)).", correctAnswer: "12", explanation: "f(5)=6 then g(6)=12." },
      { id: "l10-exact-2", type: "exact", prompt: "If f(w)=0.02w and g(u)=100-30u, compute g(f(50)).", correctAnswer: "70", explanation: "f(50)=1 then g(1)=70." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::two-equation-systems-from-baseball-scenario-constraints": {
    key: "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::two-equation-systems-from-baseball-scenario-constraints",
    title: "Two-Equation Systems From Baseball Scenario Constraints",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Systems And Modeling Structure",
    whyItMatters:
      "Many baseball decisions involve multiple constraints at once. A roster plan may require both total payroll and total innings coverage targets. A game strategy may require specific run-production mix and plate-appearance allocation. Single equations cannot represent these coupled requirements. Two-equation systems allow analysts to solve for unknown combinations that satisfy all constraints simultaneously, which is essential for coherent planning. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Imagine we need two hitters to combine for a fixed total of plate appearances and also hit a target weighted run contribution. That creates two equations with two unknowns. Solving the system provides a feasible allocation, while solving only one equation leaves many possibilities and no actionable recommendation. In this lesson students build systems directly from baseball narratives, solve them, and interpret the solution as the unique scenario state meeting all declared constraints.",
    narrativeFlow: [
      "Translate paired baseball constraints into two equations.",
      "Choose a solution method and solve systematically.",
      "Interpret ordered-pair solution in baseball terms.",
      "Check reasonableness and consistency with scenario limits.",
    ],
    objectives: [
      "Model baseball scenarios as two-equation systems.",
      "Solve systems accurately with clear steps.",
      "Interpret and validate solutions against context.",
    ],
    prerequisites: [
      "Equation-solving proficiency.",
      "Understanding of variables and units.",
      "Comfort with substitution and elimination basics.",
    ],
    conceptChunks: [
      {
        heading: "Constraint Pairing From Baseball Narratives",
        explainLikeCoach:
          "When coaches provide two independent requirements, analysts should write two equations immediately. Each equation captures a different rule of the scenario, and together they narrow to a single feasible plan. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A two-variable linear system encodes intersection of two affine constraints. Independent equations generally produce one solution pair, representing simultaneous satisfaction of both conditions.",
      },
      {
        heading: "Method Choice By Coefficient Shape",
        explainLikeCoach:
          "If one equation already isolates a variable, substitution is efficient. If coefficients align for cancellation, elimination may be faster. Method choice should optimize clarity and reduce arithmetic error risk.",
        formalNote:
          "Substitution and elimination are equivalent linear-algebra operations on system equations. Practical method selection can minimize computational complexity and rounding exposure.",
      },
      {
        heading: "Interpreting Solution Pairs Operationally",
        explainLikeCoach:
          "A solution like (x,y) is not abstract; it may mean two player workloads, two run components, or two resource allocations. Interpretation must include units and scenario meaning.",
        formalNote:
          "Solution vectors inherit variable semantics from model definition. Valid interpretation requires checking dimensional consistency and domain constraints on both components.",
      },
      {
        heading: "Consistency, Feasibility, And Data Alignment",
        explainLikeCoach:
          "Sometimes constraints conflict and no solution exists, which itself is important feedback to staff. Infeasible systems may indicate unrealistic goals or data-entry mismatch.",
        formalNote:
          "System classification includes unique solution, no solution, or infinite solutions based on equation geometry. Infeasibility signals contradictory constraints and should trigger scenario revision.",
      },
    ],
    quickChecks: [
      { prompt: "Why use two equations instead of one?", answer: "To satisfy two independent baseball constraints simultaneously." },
      { prompt: "When is elimination convenient?", answer: "When coefficients can cancel cleanly." },
      { prompt: "What does a solution pair represent?", answer: "Values of both unknowns that satisfy both equations." },
    ],
    workedExamples: [
      {
        title: "PA Allocation System",
        scenario: "x+y=18 and 2x+y=25.",
        walkthrough: ["Subtract first from second to get x=7.", "Then y=11.", "Check both equations.", "Interpret as player allocation plan."],
        takeaway: "Systems encode coupled planning constraints.",
      },
      {
        title: "Run Contribution Mix",
        scenario: "a+b=10 and 3a+2b=24.",
        walkthrough: ["From first, b=10-a.", "Substitute into second.", "Solve a=4, b=6.", "Verify and interpret roles."],
        takeaway: "Substitution links narrative constraints cleanly.",
      },
      {
        title: "Infeasible Constraint Detection",
        scenario: "x+y=12 and x+y=15.",
        walkthrough: ["Same left side, different constants.", "No ordered pair can satisfy both.", "Classify as inconsistent.", "Report scenario conflict."],
        takeaway: "No-solution result can still be analytically useful.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Solve x+y=9 and x-y=3.", answer: "x=6, y=3" }, { prompt: "Interpret ordered pair meaning in baseball context.", answer: "Depends on variable definitions." }] },
      { level: "core", prompts: [{ prompt: "Solve 2x+y=17 and x+y=11.", answer: "x=6, y=5" }, { prompt: "Classify x+y=7 and x+y=9.", answer: "No solution." }] },
      { level: "stretch", prompts: [{ prompt: "Build and solve two-equation system for bullpen innings split and pitch total.", answer: "Answers vary; must include interpretation and check." }, { prompt: "Create an inconsistent baseball planning system and explain why.", answer: "Answers vary; must show contradictory constraints." }] },
    ],
    commonMistakes: [
      "Modeling two constraints with only one equation.",
      "Solving algebraically but not interpreting the pair.",
      "Skipping consistency checks when constraints conflict.",
    ],
    lessonSummary:
      "Two-equation systems translate coupled baseball constraints into solvable structures that produce clear, interpretable allocations. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Write a two-equation system from a real baseball planning situation and explain what the solution pair means operationally.",
    nextLessonBridge:
      "Next we compare substitution and elimination strategically so method choice matches equation structure.",
    professorNotes:
      "Have students state each equation in words before solving. This prevents symbol drift and keeps interpretation anchored. During review, ask whether the final pair is feasible in baseball terms and what it implies for tactical decisions.",
    keyTerms: [
      { term: "system of equations", definition: "Multiple equations solved simultaneously for shared unknowns." },
      { term: "feasible solution", definition: "A value pair that satisfies all constraints and context bounds." },
    ],
    assessmentItems: [
      {
        id: "l11-mcq-1",
        type: "mcq",
        prompt: "What does solving x+y=18 and 2x+y=25 provide?",
        options: ["One equation equivalent", "A pair satisfying both constraints", "Only x value", "Only y value"],
        correctAnswer: "A pair satisfying both constraints",
        explanation: "System solution must satisfy both equations.",
      },
      { id: "l11-exact-1", type: "exact", prompt: "Solve x+y=18 and 2x+y=25 for x.", correctAnswer: "7", explanation: "Subtract equations." },
      { id: "l11-exact-2", type: "exact", prompt: "Using x=7 above, find y.", correctAnswer: "11", explanation: "Substitute into x+y=18." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::substitution-vs-elimination-strategy-selection": {
    key: "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::substitution-vs-elimination-strategy-selection",
    title: "Substitution Vs Elimination Strategy Selection",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Systems And Modeling Structure",
    whyItMatters:
      "Analysts often know multiple valid ways to solve a baseball system, but method choice affects speed, clarity, and error risk. In game prep windows, choosing the right strategy can be the difference between a confident recommendation and a rushed mistake. Substitution excels when one variable is already isolated. Elimination shines when coefficients align for quick cancellation. Knowing when to use each makes system solving reliable under time pressure and easier to communicate in mixed technical meetings. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Suppose one constraint is already written as y=18-x. Substitution lets you drop it directly into the second equation with minimal overhead. In contrast, if equations are 2x+y=17 and 3x-y=5, elimination can cancel y immediately by addition. Both paths are correct, but each fits different structure. This lesson trains students to scan systems for structural cues, choose a method intentionally, and justify that choice in baseball workflow terms.",
    narrativeFlow: [
      "Inspect system structure before computing.",
      "Choose substitution or elimination deliberately.",
      "Execute chosen method with clean step logging.",
      "Compare effort, error risk, and interpretability.",
    ],
    objectives: [
      "Select efficient solving strategy from equation form.",
      "Carry out substitution and elimination accurately.",
      "Explain method choice for collaborative analytics work.",
    ],
    prerequisites: [
      "Basic system-solving experience.",
      "Comfort with linear equation manipulation.",
      "Ability to interpret solution pairs in context.",
    ],
    conceptChunks: [
      {
        heading: "Fast Structural Scan Before Solving",
        explainLikeCoach:
          "Before calculating, read equation shape. If one variable is isolated or nearly isolated, substitution likely reduces steps. If coefficients can cancel with simple scaling, elimination may be cleaner. This scan prevents unnecessary algebra churn. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Method choice can be viewed as minimizing transformation complexity. Structural features such as explicit variable isolation and coefficient symmetry guide efficient operation selection.",
      },
      {
        heading: "Substitution For Already-Isolated Forms",
        explainLikeCoach:
          "Substitution is ideal when an equation already states one variable in terms of another. It preserves interpretability because each expression retains clear baseball meaning as you replace terms.",
        formalNote:
          "Given y=f(x), substitution into second equation yields a single-variable equation. This approach avoids coefficient scaling but may increase expression length depending on form complexity.",
      },
      {
        heading: "Elimination For Coefficient Cancellation",
        explainLikeCoach:
          "Elimination is efficient when variable coefficients match or can match quickly. Adding or subtracting equations to cancel one variable often reduces arithmetic noise and speeds to solution.",
        formalNote:
          "Row-operation-like combination of equations removes one variable dimension. Scaling equations before combination preserves equivalence and enables cancellation.",
      },
      {
        heading: "Method Justification In Team Communication",
        explainLikeCoach:
          "In collaborative baseball settings, explain why you chose a method. This helps peers audit quickly and keeps solving consistent across analysts, reducing handoff errors.",
        formalNote:
          "Transparent method rationale supports reproducibility and governance. Comparable systems may warrant standardized strategy guidelines to reduce variability in analyst outputs.",
      },
    ],
    quickChecks: [
      { prompt: "When is substitution usually fastest?", answer: "When a variable is already isolated." },
      { prompt: "When is elimination attractive?", answer: "When coefficients can cancel cleanly." },
      { prompt: "Should method choice be explained to teammates?", answer: "Yes, for clarity and reproducibility." },
    ],
    workedExamples: [
      {
        title: "Substitution-Preferred Case",
        scenario: "y=18-x and 2x+y=25.",
        walkthrough: ["Substitute y into second equation.", "2x+18-x=25.", "x=7 then y=11.", "Verify both constraints."],
        takeaway: "Isolated forms favor substitution.",
      },
      {
        title: "Elimination-Preferred Case",
        scenario: "2x+y=17 and 3x-y=5.",
        walkthrough: ["Add equations to cancel y.", "5x=22 so x=4.4.", "Back-solve y=8.2.", "Interpret and check."],
        takeaway: "Cancellation structure favors elimination.",
      },
      {
        title: "Method Comparison Debrief",
        scenario: "Solve same system both ways and compare effort.",
        walkthrough: ["Compute substitution path.", "Compute elimination path.", "Count arithmetic steps and risk points.", "Choose standard method for that structure."],
        takeaway: "Strategic selection improves reliability and speed.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Choose method: y=12-2x and x+y=9.", answer: "Substitution." }, { prompt: "Choose method: 2x+3y=10 and -2x+y=6.", answer: "Elimination." }] },
      { level: "core", prompts: [{ prompt: "Solve y=14-x and 3x+y=22.", answer: "x=4, y=10." }, { prompt: "Solve 4x+y=19 and 2x-y=1.", answer: "x=3.333..., y=5.666..." }] },
      { level: "stretch", prompts: [{ prompt: "Given one system, solve both methods and compare error hotspots.", answer: "Answers vary; must include rationale." }, { prompt: "Create a baseball allocation system where elimination is clearly superior.", answer: "Answers vary with coefficient justification." }] },
    ],
    commonMistakes: [
      "Choosing a method by habit instead of structure.",
      "Losing signs during elimination combination.",
      "Failing to explain method choice in shared work.",
    ],
    lessonSummary:
      "Method selection in system solving should be structural and deliberate, balancing efficiency, readability, and error control. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Take one baseball system and justify why substitution or elimination is the best first move.",
    nextLessonBridge:
      "With solving strategy set, we now interpret intersections as feasible baseball states.",
    professorNotes:
      "Require students to state their method choice before touching arithmetic. Then ask them to defend that choice after solving. This builds reflective problem solving and discourages mechanical execution without structure awareness.",
    keyTerms: [
      { term: "substitution", definition: "Replacing one variable using an equivalent expression from another equation." },
      { term: "elimination", definition: "Combining equations to cancel one variable." },
    ],
    assessmentItems: [
      {
        id: "l12-mcq-1",
        type: "mcq",
        prompt: "Best method for y=18-x with 2x+y=25 is:",
        options: ["Substitution", "Elimination only", "Graphing only", "Matrix inversion only"],
        correctAnswer: "Substitution",
        explanation: "One variable is already isolated.",
      },
      { id: "l12-exact-1", type: "exact", prompt: "Solve y=18-x and 2x+y=25 for x.", correctAnswer: "7", explanation: "Substitute and solve." },
      { id: "l12-exact-2", type: "exact", prompt: "Using x=7 above, compute y.", correctAnswer: "11", explanation: "y=18-7." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::interpreting-intersections-as-feasible-states": {
    key: "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::interpreting-intersections-as-feasible-states",
    title: "Interpreting Intersections As Feasible States",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Systems And Modeling Structure",
    whyItMatters:
      "In baseball modeling, solving equations is not the endpoint; interpretation is. The intersection of constraints represents feasible states where multiple requirements are satisfied at once. This viewpoint helps teams understand why a solution is actionable and why non-intersections indicate conflicting plans. Intersection thinking supports lineup construction, pitch-usage planning, and resource allocation where several constraints must hold simultaneously. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Graphically, each equation is a constraint line. Their intersection is the state where both statements are true. In baseball terms, that point might represent a workload split that satisfies both innings coverage and pitch cap limits. If lines do not intersect, constraints conflict. If lines overlap entirely, many feasible choices exist. This lesson teaches students to interpret geometry as policy logic, connecting algebraic solutions to operational feasibility.",
    narrativeFlow: [
      "Relate equations to geometric constraint sets.",
      "Interpret intersections as simultaneous feasibility.",
      "Classify no-intersection and overlap scenarios.",
      "Translate geometry findings into baseball decisions.",
    ],
    objectives: [
      "Interpret system solutions as feasible baseball states.",
      "Classify unique, none, and infinite-solution cases.",
      "Communicate operational implications of each case.",
    ],
    prerequisites: [
      "System-solving fundamentals.",
      "Coordinate-plane familiarity.",
      "Constraint-based reasoning in baseball contexts.",
    ],
    conceptChunks: [
      {
        heading: "Constraint Lines As Policy Statements",
        explainLikeCoach:
          "Each line expresses one policy or requirement. Where lines cross, both policies are satisfied, giving a valid operational state. This framing makes geometry useful for practical planning rather than abstract plotting. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Linear equations in two variables define affine sets. Intersections represent points in the joint feasible region where all active constraints hold simultaneously.",
      },
      {
        heading: "Unique Intersection As Single Plan",
        explainLikeCoach:
          "A single crossing point means one allocation meets all stated requirements. This provides clear guidance and limits debate about alternative values that would violate at least one condition.",
        formalNote:
          "Non-parallel distinct lines in R^2 intersect at exactly one point, producing a unique system solution.",
      },
      {
        heading: "Parallel And Coincident Interpretation",
        explainLikeCoach:
          "Parallel lines mean competing constraints that cannot both be true. Coincident lines mean constraints are redundant, so many feasible states exist and additional criteria are needed.",
        formalNote:
          "Parallel non-coincident lines yield no solution. Coincident lines define the same set and therefore infinite solutions along that line.",
      },
      {
        heading: "Decision Impact Of Feasibility Classes",
        explainLikeCoach:
          "Knowing solution class guides action: unique means execute, none means revise constraints, infinite means add priorities. This structure keeps meetings productive and evidence based.",
        formalNote:
          "Feasibility class is a modeling output that informs constraint revision, objective introduction, or direct implementation depending on system type.",
      },
    ],
    quickChecks: [
      { prompt: "What does intersection point mean in a system?", answer: "Values satisfying all constraints simultaneously." },
      { prompt: "Parallel distinct lines imply what?", answer: "No feasible solution." },
      { prompt: "Coincident lines imply what?", answer: "Infinitely many feasible states." },
    ],
    workedExamples: [
      {
        title: "Unique Feasible Allocation",
        scenario: "x+y=18 and 2x+y=25.",
        walkthrough: ["Solve to get (7,11).", "Interpret as one allocation satisfying both constraints.", "Check both equations.", "Report as feasible plan."],
        takeaway: "Intersection maps directly to actionable state.",
      },
      {
        title: "No-Feasible-State Case",
        scenario: "x+y=10 and x+y=13.",
        walkthrough: ["Recognize parallel equal-slope lines.", "No intersection exists.", "Classify as inconsistent constraints.", "Recommend policy revision."],
        takeaway: "No solution is meaningful operational feedback.",
      },
      {
        title: "Many-Feasible-States Case",
        scenario: "2x+2y=20 and x+y=10.",
        walkthrough: ["Identify equivalent constraints.", "Lines coincide.", "Infinite feasible pairs.", "Add objective to choose one."],
        takeaway: "Infinite solutions require extra decision criteria.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Classify x+y=7 and x+y=9.", answer: "No solution." }, { prompt: "Classify x+y=8 and 2x+2y=16.", answer: "Infinite solutions." }] },
      { level: "core", prompts: [{ prompt: "Interpret (4,6) if it solves two roster constraints.", answer: "A feasible allocation meeting both constraints." }, { prompt: "Why might no intersection still be useful?", answer: "It reveals conflicting requirements." }] },
      { level: "stretch", prompts: [{ prompt: "Create baseball system with unique intersection and explain tactical meaning.", answer: "Answers vary with valid interpretation." }, { prompt: "Create infinite-solution baseball system then add one new constraint.", answer: "Answers vary; must reduce feasible set." }] },
    ],
    commonMistakes: [
      "Stopping at numeric solution without interpreting feasibility.",
      "Confusing parallel and coincident line cases.",
      "Ignoring what no-solution means for planning assumptions.",
    ],
    lessonSummary:
      "System intersections represent feasible baseball states, and solution class directly informs whether to execute, revise, or refine plans.",
    synthesisPrompt:
      "Take a two-constraint baseball scenario and explain what each possible intersection class would mean operationally.",
    nextLessonBridge:
      "Next we express small systems in matrix form to support compact notation and scalable solving.",
    professorNotes:
      "Ask students to narrate every solution as a feasible-state story, not just an ordered pair. Then challenge them with no-solution and infinite-solution variants so they practice using algebra as a planning diagnostic tool rather than only a calculator.",
    keyTerms: [
      { term: "intersection", definition: "Common point satisfying all system constraints." },
      { term: "feasible state", definition: "A baseball scenario that meets every declared requirement." },
    ],
    assessmentItems: [
      {
        id: "l13-mcq-1",
        type: "mcq",
        prompt: "Distinct parallel system lines indicate:",
        options: ["Unique solution", "No solution", "Infinite solutions", "Always integer solution"],
        correctAnswer: "No solution",
        explanation: "Parallel non-coincident lines do not intersect.",
      },
      { id: "l13-exact-1", type: "exact", prompt: "Classify x+y=8 and 2x+2y=16.", correctAnswer: "infinite", acceptedAnswers: ["infinite solutions"], explanation: "Second equation is scalar multiple of first." },
      { id: "l13-exact-2", type: "exact", prompt: "Solve x+y=18 and 2x+y=25 for x.", correctAnswer: "7", explanation: "Subtract first equation from second." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::matrix-form-for-small-linear-systems": {
    key: "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::matrix-form-for-small-linear-systems",
    title: "Matrix Form For Small Linear Systems",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Systems And Modeling Structure",
    whyItMatters:
      "As baseball models add constraints, writing systems in scalar equation form becomes cumbersome. Matrix form organizes coefficients, variables, and constants compactly, making systems easier to store, share, and compute with software. Even for small systems, matrix notation improves consistency and prepares analysts for larger modeling tools used in optimization and projection pipelines. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A two-equation system can be written as A x = b, where A stores coefficients, x stores unknowns, and b stores constants. This format mirrors how analytics code passes data to linear solvers. Learning matrix form does not replace interpretation; it streamlines representation so analysts can move between human reasoning and computational workflows. In this lesson students translate systems into matrix form, solve simple cases, and read solutions back into baseball context.",
    narrativeFlow: [
      "Map equation coefficients into matrix structure.",
      "Represent unknowns as vector and constants as target vector.",
      "Solve small systems and verify against original equations.",
      "Interpret matrix-solved values in baseball terms.",
    ],
    objectives: [
      "Translate linear systems into A x = b form.",
      "Solve small matrix-form systems accurately.",
      "Connect matrix outputs to baseball decision variables.",
    ],
    prerequisites: [
      "Two-equation system fluency.",
      "Comfort with ordered pairs and coefficients.",
      "Basic familiarity with array-style data structures.",
    ],
    conceptChunks: [
      {
        heading: "Coefficient Layout As Matrix Encoding",
        explainLikeCoach:
          "Matrix form is a cleaner scoreboard for equations. Each row represents one constraint, each column one variable. This organization reduces transcription errors when systems grow and helps analysts check structure at a glance. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For system of n equations in n variables, coefficient matrix A contains linear coefficients, vector x contains unknowns, and b contains constants such that A x = b.",
      },
      {
        heading: "Vector Interpretation Of Unknowns",
        explainLikeCoach:
          "The variable vector x is not abstract decoration. In baseball it might represent workloads, lineup allocations, or component rates. Keeping variables in fixed order is critical so results are interpreted correctly.",
        formalNote:
          "Solution vector ordering defines semantic mapping of numeric components. Any permutation of variable order requires corresponding column permutation in A to preserve meaning.",
      },
      {
        heading: "Solving And Checking Small Matrix Systems",
        explainLikeCoach:
          "For small systems you can still solve by elimination mentally, but matrix form keeps your work aligned with software methods. After solving, plug values back into original equations to ensure translation and arithmetic stayed correct.",
        formalNote:
          "Equivalent scalar and matrix formulations should yield identical solutions. Verification by substitution checks both numerical correctness and mapping integrity between forms.",
      },
      {
        heading: "Bridge To Computational Baseball Workflows",
        explainLikeCoach:
          "Most real analytics stacks pass matrices into numerical libraries. Knowing matrix form helps analysts inspect inputs before solver calls and catch setup mistakes early, especially sign and column-order errors.",
        formalNote:
          "Matrix notation provides interoperability with linear algebra toolchains, enabling scalable solving, diagnostics, and optimization extensions in production environments.",
      },
    ],
    quickChecks: [
      { prompt: "In A x = b, what does A contain?", answer: "Equation coefficients." },
      { prompt: "Why does variable order matter?", answer: "It determines meaning of each solution component." },
      { prompt: "Should matrix solutions be checked in original equations?", answer: "Yes, always verify them." },
    ],
    workedExamples: [
      {
        title: "Two-Constraint Matrix Encoding",
        scenario: "x+y=18 and 2x+y=25.",
        walkthrough: ["A=[[1,1],[2,1]].", "x=[x,y].", "b=[18,25].", "Solve to x=7,y=11 and verify."],
        takeaway: "Matrix form compactly preserves system meaning.",
      },
      {
        title: "Order-Swap Caution",
        scenario: "Variables accidentally stored as [y,x].",
        walkthrough: ["Recognize mismatch with coefficient columns.", "Realign variable order.", "Recompute solution.", "Confirm corrected interpretation."],
        takeaway: "Order alignment is essential for valid interpretation.",
      },
      {
        title: "Matrix To Baseball Narrative",
        scenario: "Solved vector [4,6] for two roster slots.",
        walkthrough: ["Map first component to variable one.", "Map second to variable two.", "Check each against constraints.", "Translate into staffing recommendation."],
        takeaway: "Numeric vectors must be narrated with variable semantics.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "Write A,b for x+y=9 and 2x-y=3.", answer: "A=[[1,1],[2,-1]], b=[9,3]" }, { prompt: "State x vector ordering.", answer: "Example: [x,y]." }] },
      { level: "core", prompts: [{ prompt: "Encode 3x+2y=14 and x-y=1 in matrix form.", answer: "A=[[3,2],[1,-1]], b=[14,1]" }, { prompt: "Why is substitution check still needed?", answer: "To verify arithmetic and mapping correctness." }] },
      { level: "stretch", prompts: [{ prompt: "Create 3x3 baseball allocation system in matrix notation.", answer: "Answers vary; must define variable meanings." }, { prompt: "Describe one common matrix setup bug and prevention step.", answer: "Column-order mismatch; enforce named-column checks." }] },
    ],
    commonMistakes: [
      "Swapping variable order between equations and vector.",
      "Misplacing signs when filling coefficient matrix.",
      "Treating matrix output as context-free numbers.",
    ],
    lessonSummary:
      "Matrix form A x = b organizes baseball linear systems for cleaner representation, computation, and interpretation. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Rewrite one existing two-equation baseball model in matrix form and explain each matrix component in plain language.",
    nextLessonBridge:
      "The final workshop combines all algebra foundations into one integrated baseball modeling exercise.",
    professorNotes:
      "Make students annotate every matrix row and column with variable names before solving. This simple labeling rule prevents most mapping mistakes and reinforces that matrix notation is a communication device, not just symbolic compression.",
    keyTerms: [
      { term: "coefficient matrix", definition: "Matrix containing linear coefficients of system equations." },
      { term: "solution vector", definition: "Ordered unknown values solving A x = b." },
    ],
    assessmentItems: [
      {
        id: "l14-mcq-1",
        type: "mcq",
        prompt: "For x+y=18 and 2x+y=25, A is:",
        options: ["[[18,25],[1,1]]", "[[1,1],[2,1]]", "[[1,2],[1,1]]", "[[x,y],[x,y]]"],
        correctAnswer: "[[1,1],[2,1]]",
        explanation: "Rows are equation coefficients in variable order [x,y].",
      },
      { id: "l14-exact-1", type: "exact", prompt: "With A=[[1,1],[2,1]] and b=[18,25], solve for x.", correctAnswer: "7", explanation: "Equivalent to prior scalar system." },
      { id: "l14-exact-2", type: "exact", prompt: "Using x=7 above, solve y from x+y=18.", correctAnswer: "11", explanation: "y=18-7." },
    ],
  },

  "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::algebra-foundations-synthesis-workshop": {
    key: "algebra-foundations-for-baseball-analytics::systems-and-modeling-structure::algebra-foundations-synthesis-workshop",
    title: "Algebra Foundations Synthesis Workshop",
    trackTitle: "Algebra Foundations For Baseball Analytics",
    unitTitle: "Systems And Modeling Structure",
    whyItMatters:
      "Baseball analysts rarely use one isolated algebra skill at a time. Real work combines variable definitions, equation solving, inequalities, function interpretation, piecewise reasoning, systems, and quality checks in one workflow. The synthesis workshop helps students integrate these parts into a coherent modeling process that produces trustworthy, communicable recommendations. Teams value this integration because decisions happen under uncertainty, short timelines, and cross-functional scrutiny. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "In a realistic scenario, you might define variables for workload and performance, apply constraints with inequalities, solve a small system for feasible allocations, check outputs against domain bounds, and then communicate results with clear assumptions. Missing any one step can derail the decision. This workshop asks students to build a complete baseball analysis pipeline from question to validated recommendation. The focus is not fancy formulas; it is disciplined integration and communication.",
    narrativeFlow: [
      "Frame complete baseball question with clear variables and units.",
      "Build equations, inequalities, and functional relationships.",
      "Solve and classify feasible solutions under constraints.",
      "Run validation checks and communicate recommendations.",
    ],
    objectives: [
      "Integrate all algebra foundation skills in one scenario.",
      "Produce validated, interpretable baseball recommendations.",
      "Document assumptions, limits, and uncertainty transparently.",
    ],
    prerequisites: [
      "Completion of all prior algebra foundation lessons.",
      "Comfort with systems and function interpretation.",
      "Ability to perform and explain quality checks.",
    ],
    conceptChunks: [
      {
        heading: "End-To-End Modeling Blueprint For Game Decisions",
        explainLikeCoach:
          "Start with the baseball question, not the equation. Define symbols and units, write constraints, solve for feasible values, and check whether outputs make baseball sense. This ordered blueprint keeps analysis grounded and reproducible. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "An end-to-end algebra workflow should include specification, transformation, solution, validation, and reporting stages. Each stage has explicit artifacts to support auditability and reuse.",
      },
      {
        heading: "Constraint Layering And Feasibility Screening",
        explainLikeCoach:
          "Combine equations and inequalities to reflect both targets and limits. Feasible recommendations are those satisfying all layers simultaneously. If nothing is feasible, revise assumptions rather than forcing a bad answer.",
        formalNote:
          "Layered constraints define feasible set intersection. Empty feasible sets indicate model-policy inconsistency and require re-specification or relaxed bounds.",
      },
      {
        heading: "Validation Stack Before Recommendation",
        explainLikeCoach:
          "Before presenting, run substitution checks, bound checks, unit checks, and quick estimate checks. These controls catch silent errors and build trust with coaches who need actionable confidence, not just symbolic elegance.",
        formalNote:
          "Validation stack combines deterministic correctness checks with contextual plausibility screens. Multi-check protocols reduce false confidence in computational outputs.",
      },
      {
        heading: "Communicating Results With Assumptions And Tradeoffs",
        explainLikeCoach:
          "A final recommendation should include what assumptions were used, what range of uncertainty exists, and what tradeoffs the team accepts. Clear communication turns algebra into decision support.",
        formalNote:
          "Decision-grade reporting should include parameter assumptions, feasibility class, sensitivity notes, and implementation caveats to ensure responsible operational use.",
      },
    ],
    quickChecks: [
      { prompt: "What comes first in a full workflow: equation or question framing?", answer: "Question framing with variable definitions." },
      { prompt: "If feasible set is empty, what does that mean?", answer: "Constraints conflict and assumptions need revision." },
      { prompt: "Name one required pre-report validation.", answer: "Substitution or sanity-bound check." },
    ],
    workedExamples: [
      {
        title: "Integrated Bullpen Planning Case",
        scenario: "Need innings coverage, pitch cap, and minimum strike rate constraints.",
        walkthrough: ["Define variables and units.", "Write system plus inequalities.", "Solve feasible region and candidate point.", "Run validation and present recommendation."],
        takeaway: "Integrated algebra supports realistic tactical plans.",
      },
      {
        title: "Lineup Opportunity Allocation",
        scenario: "Allocate plate appearances under total and production constraints.",
        walkthrough: ["Model with equations.", "Apply threshold inequality for risk control.", "Solve and interpret pair.", "Check outputs against role limits."],
        takeaway: "Layered constraints convert goals into actionable allocation.",
      },
      {
        title: "Conflicting Constraint Diagnosis",
        scenario: "Targets and caps produce no feasible solution.",
        walkthrough: ["Detect inconsistency.", "Identify conflicting assumptions.", "Propose revised bound set.", "Recompute feasible plan."],
        takeaway: "No-solution outcomes guide better policy design.",
      },
    ],
    practiceSets: [
      { level: "warmup", prompts: [{ prompt: "List five steps in end-to-end algebra workflow.", answer: "Define, model, solve, validate, communicate." }, { prompt: "Give one baseball sanity bound.", answer: "0<=probability<=1." }] },
      { level: "core", prompts: [{ prompt: "Build mini-system with one equation and one inequality for pitcher usage.", answer: "Answers vary with valid constraints." }, { prompt: "Describe two checks before sharing output.", answer: "Example: substitution and unit consistency check." }] },
      { level: "stretch", prompts: [{ prompt: "Complete full integrated baseball modeling task with assumptions and recommendation.", answer: "Answers vary; must include full pipeline and validation." }, { prompt: "Perform sensitivity analysis on one assumption and report impact.", answer: "Answers vary; must quantify directional effect." }] },
    ],
    commonMistakes: [
      "Jumping into computation without scenario specification.",
      "Returning one numeric answer without feasibility or validation context.",
      "Omitting assumptions and uncertainty in final recommendation.",
    ],
    lessonSummary:
      "The synthesis workshop unifies algebra foundations into a disciplined, end-to-end baseball analytics workflow from question framing to validated recommendation.",
    synthesisPrompt:
      "Deliver a complete baseball analysis memo that includes model setup, solved values, validation results, and decision guidance.",
    nextLessonBridge:
      "From here, students are ready to apply algebra foundations to richer statistical modeling and optimization tracks.",
    professorNotes:
      "Assess students on integration quality rather than isolated algebra tricks. Require explicit assumptions, feasibility interpretation, and validation evidence in every submission. This mirrors professional analytics expectations and prepares learners for real baseball decision environments.",
    keyTerms: [
      { term: "workflow integration", definition: "Combining modeling, solving, validation, and communication into one process." },
      { term: "feasible set", definition: "All values satisfying the full constraint system." },
    ],
    assessmentItems: [
      {
        id: "l15-mcq-1",
        type: "mcq",
        prompt: "Which sequence best reflects robust baseball algebra workflow?",
        options: ["Solve, then define variables", "Define, model, solve, validate, communicate", "Graph only", "Compute and skip checks"],
        correctAnswer: "Define, model, solve, validate, communicate",
        explanation: "Integrated workflow prevents avoidable errors and improves usability.",
      },
      { id: "l15-exact-1", type: "exact", prompt: "If feasible set is empty, should recommendation be executed? yes/no", correctAnswer: "no", acceptedAnswers: ["No", "NO"], explanation: "Empty feasible set means constraints conflict." },
      { id: "l15-exact-2", type: "exact", prompt: "Name one mandatory validation before final recommendation.", correctAnswer: "substitution", acceptedAnswers: ["substitution check", "sanity bound check", "unit check"], explanation: "At least one explicit validation step is required." },
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "algebra-foundations-synthesis-memo",
      title: "Summative: Integrated algebra decision memo",
      intro:
        "Draft a one-page memo suitable for peer review. It is not auto-graded; use the rubric to self-check structure, units, and validation evidence before sharing.",
      taskPrompt:
        "Pick one baseball planning scenario that needs at least two equations or inequalities plus one feasibility interpretation. Document variables with units, solve, show an explicit validation stack (minimum two checks), and finish with a single actionable recommendation plus one stated assumption you would monitor.",
      deliverableTemplate: [
        "Scenario + audience (3–4 sentences).",
        "Symbol table with units.",
        "Model (equations/inequalities) and solution path.",
        "Validation table: check | pass/fail | follow-up.",
        "Recommendation + monitored assumption.",
      ],
    }),
  },
};
