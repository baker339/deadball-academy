import type { LessonDocument } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

const HAND_AUTHORED_MULTIVAR_RAW: Record<string, LessonDocument> = {
  "multivariable-calculus-and-differential-equations::multivariable-function-geometry::functions-of-several-variables-in-baseball-systems": {
    key: "multivariable-calculus-and-differential-equations::multivariable-function-geometry::functions-of-several-variables-in-baseball-systems",
    title: "Functions Of Several Variables In Baseball Systems",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multivariable Function Geometry",
    whyItMatters:
      "A baseball decision almost never depends on one knob. A pitcher can gain a little velocity, but if release consistency drops the net run value can still fall. A hitter can improve attack angle, but if contact depth shifts too far out front the quality of contact may worsen against certain pitch families. Multivariable functions let us represent this coordinated reality directly, with each input carrying a clear baseball meaning and each output tied to a decision target such as expected runs allowed, hard hit probability, or chase rate. This matters for communication because coaches need to hear which combinations are useful, not just whether one variable has a positive trend on average. It also matters for model governance because feasibility limits, player specific ranges, and data support can be encoded into the domain from the start. The result is a stronger analysis loop where mathematical objects describe practical options, tradeoffs, and risk in language that can guide bullpens, cages, and game planning. Before optimizing anything, list which inputs the athlete can actually move together in one week of work—that list is your feasible region in plain English. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "An analyst is asked to explain why two hitters with the same average launch angle still produce very different barrel rates against high spin fastballs. The answer requires at least two additional variables, such as bat speed and contact depth, plus situational context. In this lesson, students build a multivariable function that maps a realistic baseball state into one measurable outcome and then interpret slices, contours, and feasible regions as decision tools. They practice describing which combinations are equivalent, which are unstable, and which are impossible under current movement constraints. By the end of the opener sequence, learners can translate between symbolic notation and staff language: they can say what is held fixed, why the domain is bounded by biomechanics and tactics, and how to use geometric structure for individualized adjustment plans instead of generic advice.",
    narrativeFlow: ["Model baseball outcomes as coordinated input systems.", "Define domain and feasible regions from real constraints.", "Interpret surfaces and level sets for tradeoffs.", "Translate symbols into staff-facing language."],
    objectives: ["Define multivariable functions in baseball contexts.", "Interpret feasible domain restrictions.", "Explain level-set tradeoffs for development plans."],
    prerequisites: ["Single-variable functions", "Basic graph interpretation", "Baseball metric familiarity"],
    conceptChunks: [
      {
        heading: "State-Space Function Blueprint For Game Context",
        explainLikeCoach:
          "Start by coaching the state, not isolated columns. One pitch or swing moment is one coordinated point in input space, so the staff can discuss where the athlete is now, which nearby moves are trainable this week, and where model behavior becomes unstable. Inline diagram cue: a single player-state point moving on a response surface shows why coordinated adjustments matter more than one-metric narratives. [Inline Diagram: Player state point on 3D response surface with local neighborhood arrows.] [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Model the system as \\(f: D \\subseteq \\mathbb{R}^n \\to \\mathbb{R}\\), where \\(x=(x_1,\\dots,x_n)\\) is a synchronized baseball state and \\(f(x)\\) is a measurable outcome. Surface, slice, and projection views convert interaction structure into operational decisions.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Input coordinates, feasible cloud \\(D\\), and mapping arrow \\(x \\mapsto f(x)\\).]"
      },
      {
        heading: "Feasible Domain Construction Before Fitting",
        explainLikeCoach:
          "Domain work is decision safety. If the model accepts impossible posture, timing, or role states, it can output confident but unusable recommendations. Build the feasible region first from biomechanics, tactics, and data support, then fit and interpret only inside that fence. Inline diagram cue: draw the trainable zone before drawing any optimization target. [Inline Diagram: Feasible region boundary with unsafe exterior shaded.]",
        formalNote:
          "Define \\(D\\) before inference so recommendations satisfy \\(x \\in D\\). Outside \\(D\\), extrapolation can violate smoothness assumptions and inflate confidence near sparse edges. Feasibility is part of the mathematics, not a post-hoc filter.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Bounded \\(D\\), sample-density gradient, and warning labels beyond the boundary.]"
      },
      {
        heading: "Contour Interpretation For Equivalent Outcomes",
        explainLikeCoach:
          "Contours separate output goals from mechanical routes. Two different adjustment packages can be equally effective if they live on the same contour, so coaches can choose the lower-risk or higher-repeatability path for a specific athlete while still targeting the same result. Inline diagram cue: multiple points on one contour represent multiple viable plans. [Inline Diagram: Two distinct adjustment points on the same contour level.]",
        formalNote:
          "For target \\(c\\), the level set is \\(L_c = \\{x \\in D : f(x)=c\\}\\). Its geometry reveals compensation structure, meaning one coordinate can increase while another decreases to preserve output.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Contour map with \\(L_{c_1}\\), \\(L_{c_2}\\), and arrows along an equal-output path.]"
      },
      {
        heading: "From Discrete Bins To Continuous Reasoning",
        explainLikeCoach:
          "Bins are descriptive snapshots; player development needs continuous local reasoning between bins. That is where small weekly adjustments live. By treating the map as locally smooth, staff can discuss sensitivity, direction, and stability instead of jumping between disconnected cells. Inline diagram cue: zoom from blocky heat map cells into a smooth neighborhood around the current point. [Inline Diagram: Heat-map bins transitioning into a smooth local patch.]",
        formalNote:
          "Given sampled states, smooth approximation supports first-order tools near \\(x_0\\), including partial derivatives and directional comparisons. This creates a coherent bridge from exploratory visuals to prescriptive adjustment logic.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Sample grid, interpolated surface, and highlighted neighborhood around \\(x_0\\).]"
      }
    ],
    quickChecks: [
      { prompt: "Why keep multiple inputs in one function?", answer: "It preserves interaction effects that one variable summaries hide." },
      { prompt: "What does a level set represent?", answer: "It lists input combinations with the same modeled baseball outcome." },
      { prompt: "Why define domain first?", answer: "It keeps every recommendation inside feasible baseball constraints." }
    ],
    workedExamples: [{ title: "Two-input hitting map", scenario: "f(depth,angle) maps to hard-hit probability.", walkthrough: ["Evaluate at two states.", "Compare equal-output contour points.", "Use contour interpretation for adjustment planning."], takeaway: "Equivalent outcomes can come from different input mixes." }, { title: "Domain filter", scenario: "Reject infeasible attack-angle region.", walkthrough: ["Sketch domain limits.", "Keep recommendations inside feasible set.", "Explain why outside-domain suggestions fail."], takeaway: "Feasibility is part of mathematics, not an afterthought." }, { title: "Contour coaching memo", scenario: "Target one output contour.", walkthrough: ["Identify nearest attainable contour.", "Choose low-risk movement direction.", "Write actionable cue language."], takeaway: "Geometry can be communicated without jargon." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name one baseball output with at least three inputs.", answer: "Expected run value can depend on location, speed, movement, and count." },
          { prompt: "Give one feasible-domain constraint.", answer: "Keep attack-angle recommendations inside the athlete's repeatable movement band." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "If two points share one contour, what is equal?", answer: "They produce the same modeled output value at that contour level." },
          { prompt: "Why is extrapolation risky?", answer: "Outside supported data regions, interaction patterns can change abruptly." },
          { prompt: "What should be reported with contour recommendations?", answer: "Include feasibility assumptions and uncertainty near sparse regions." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How would you explain a response surface to a coach?", answer: "Describe it as a map from coordinated inputs to expected baseball outcomes." },
          { prompt: "What does tight contour spacing imply?", answer: "Small input drift creates large output swings in that neighborhood." }
        ]
      }
    ],
    commonMistakes: ["Ignoring interactions", "Skipping feasible-domain definition", "Treating one contour point as universal for all players"],
    lessonSummary: "Multivariable functions model realistic baseball tradeoffs by mapping feasible input states to outcomes with interpretable geometry.",
    synthesisPrompt: "Write a short plan that uses one contour map to guide two coordinated hitting adjustments.",
    nextLessonBridge: "Next we quantify local marginal effects with partial derivatives.",
    professorNotes: "Require students to state variable units, feasible ranges, and decision relevance before symbolic manipulation. Emphasize that model geometry is an operations tool, not decoration.",
    keyTerms: [{ term: "Multivariable function", definition: "A mapping from several inputs to one output." }, { term: "Level set", definition: "Set of points with equal output value." }],
    assessmentItems: [
      {
        id: "fsv-1",
        type: "mcq",
        prompt: "A hitting model uses bat speed, contact depth, and attack angle. Why is this multivariable form valuable?",
        options: ["It removes uncertainty entirely", "It captures interaction structure", "It guarantees linear effects", "It avoids domain limits"],
        correctAnswer: "It captures interaction structure",
        explanation: "Baseball adjustments often depend on combinations, not isolated variables."
      },
      {
        id: "fsv-2",
        type: "exact",
        prompt: "Name the set of input points where f(x,y)=c for the same expected run value.",
        correctAnswer: "level set",
        acceptedAnswers: ["contour", "level curve"],
        explanation: "Equal-output collections are represented by contours or level sets."
      },
      {
        id: "fsv-3",
        type: "exact",
        prompt: "What is the formal name for the feasible collection of baseball input states?",
        correctAnswer: "domain",
        acceptedAnswers: ["feasible region"],
        explanation: "The domain defines where the model is intended to operate."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multivariable-function-geometry::partial-derivatives-and-marginal-effects": {
    key: "multivariable-calculus-and-differential-equations::multivariable-function-geometry::partial-derivatives-and-marginal-effects",
    title: "Partial Derivatives And Marginal Effects",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multivariable Function Geometry",
    whyItMatters:
      "Baseball intervention planning is usually a marginal question: if we move one controllable variable slightly, what local change should we expect while other factors stay fixed? Partial derivatives answer that exact question with units and state dependence. This is essential because global season averages can hide nonlinear interactions and create false certainty. A velocity gain may be highly valuable for one command profile and nearly neutral for another. A plate approach change may improve expected outcome only when timing variability stays inside a tight band. By focusing on local slope at the athlete's current state, we move from retrospective storytelling to prospective decision support. Analysts can rank candidate interventions by combining derivative size, realistic adjustment size, and implementation cost. That method gives coaches a transparent rationale and avoids overclaiming causality from broad observational differences. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "During a planning meeting, a pitching group asks whether a small increase in extension or a small increase in induced vertical break should be prioritized for next month. The staff does not want an abstract answer; they want a point specific estimate tied to current mechanics and command variance. Students frame that request as partial derivatives of an outcome model evaluated at the athlete's present coordinates. They compute and interpret sign, magnitude, and units, then combine those rates with feasible deltas to estimate practical gain. They also discuss why finite historical changes are not the same as infinitesimal local rates. The opener makes learners practice translating mathematics into a coaching memo that is precise, humble about uncertainty, and useful for sequencing development work.",
    narrativeFlow: ["Define partial derivatives from slices.", "Interpret sign and unit magnitude.", "Compare state-specific marginal effects.", "Convert derivatives into training priorities."],
    objectives: ["Compute partial derivatives.", "Interpret local marginal effects with units.", "Distinguish local effect from broad historical difference."],
    prerequisites: ["Derivative basics", "Multivariable function view", "Unit reasoning"],
    conceptChunks: [
      {
        heading: "Marginal Return Lens For One-Variable Moves",
        explainLikeCoach:
          "Partial derivatives answer the exact weekly planning question: if we nudge one controllable variable while holding the rest fixed, what immediate local return should we expect? This gives staff a clean shared language for micro-adjustments without pretending the athlete became a one-variable system. Inline diagram cue: hold one axis fixed and observe the slope of the surface slice through the current state. [Inline Diagram: Surface slice at fixed \\(y=b\\) with tangent slope at \\((a,b)\\).] [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For \\(f(x,y)\\), the partial derivative at \\((a,b)\\) is \\(f_x(a,b)=\\lim_{h\\to 0}\\frac{f(a+h,b)-f(a,b)}{h}\\). It measures local ceteris paribus sensitivity with units \\(\\frac{\\text{output units}}{\\text{x-units}}\\).\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Point \\((a,b)\\), fixed-\\(y\\) cross-section, and tangent line labeled \\(f_x(a,b)\\).]"
      },
      {
        heading: "State Dependence Of Marginal Effects",
        explainLikeCoach:
          "Never report a derivative without its location. The same intervention can be high value in one state and nearly neutral in another because interaction structure bends the surface differently across the domain. That is why intervention ranking should update as the athlete's profile moves. Inline diagram cue: compare slope at two points on the same variable axis but different companion context values. [Inline Diagram: Two states with different local slopes for the same coordinate move.]",
        formalNote:
          "When \\(f\\) contains nonlinear or interaction terms, \\(f_x\\) and \\(f_y\\) are functions over \\(D\\), not constants. Therefore marginal comparisons are point-specific statements, not global truths.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Heat map of \\(f_x(x,y)\\) over \\(D\\), highlighting two evaluation points with different magnitudes.]"
      },
      {
        heading: "Derivative Plus Feasible Delta Decision Rule",
        explainLikeCoach:
          "A steep derivative does not automatically mean best practical move. Multiply local slope by a realistic training delta, then compare that estimated gain against implementation cost, risk, and reliability. This simple discipline turns math output into coaching prioritization. Inline diagram cue: two candidate moves with different slopes and different feasible step sizes produce different net expected gains. [Inline Diagram: Side-by-side candidate moves showing slope, feasible delta, and estimated gain.]",
        formalNote:
          "For a small one-variable move, \\(\\Delta f \\approx f_x\\,\\Delta x\\). Ranking interventions should combine derivative magnitude, feasible \\(\\Delta x\\), and uncertainty in local model quality.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Formula panel \\(\\Delta f \\approx f_x\\Delta x\\) with comparison table for two candidate adjustments.]"
      },
      {
        heading: "Partial Effects Versus Historical Differences",
        explainLikeCoach:
          "Year-to-year performance differences include many simultaneous changes, so they are not the same as a local hold-others-fixed effect. Partial derivatives are still useful for near-term planning, but they must be communicated as model-based local sensitivity, not broad causal proof. Inline diagram cue: a tangled historical path through state space differs from one clean local axis move at the current point. [Inline Diagram: Historical path curve versus local infinitesimal axis step.]",
        formalNote:
          "Finite differences along observed trajectories are path-dependent and confounded. By contrast, partial derivatives describe infinitesimal local sensitivity in model space under explicit assumptions.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Curved historical trajectory with multiple changing variables, contrasted with a local ceteris paribus tangent move.]"
      }
    ],
    quickChecks: [
      { prompt: "What does hold-others-fixed mean?", answer: "Only one input moves while the others remain fixed locally." },
      { prompt: "Why can marginal effects differ by player state?", answer: "Interactions cause local slopes to change across the domain." },
      { prompt: "What is missing from a derivative without units?", answer: "It lacks actionable scale for real baseball decisions." }
    ],
    workedExamples: [{ title: "Compute local partials", scenario: "R(x,y)=2x+3y+xy/2.", walkthrough: ["Rx=2+y/2.", "Ry=3+x/2.", "Evaluate at current state."], takeaway: "Marginal effects are evaluated, not assumed global." }, { title: "Unit comparison", scenario: "Compare runs per mph vs runs per degree.", walkthrough: ["Multiply each derivative by realistic delta.", "Compare expected gains.", "Select feasible high-value target."], takeaway: "Decision ranking is derivative-plus-delta." }, { title: "Context shift", scenario: "fx increases with y.", walkthrough: ["Evaluate fx at two y values.", "Show larger return in improved context.", "Plan sequencing accordingly."], takeaway: "Interventions can be order-sensitive." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Define partial derivative in one sentence.", answer: "It is the local rate for one variable with others fixed." },
          { prompt: "If fx is negative, what does that mean nearby?", answer: "A small increase in x lowers output near that state." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "For f=x^2y, compute fx at (2,3).", answer: "Compute fx=2xy, then evaluate to get twelve." },
          { prompt: "Why not treat year-over-year change as a partial effect?", answer: "Many variables shifted together so ceteris paribus is violated." },
          { prompt: "What should accompany derivative rankings in reports?", answer: "Include feasible deltas, units, and confidence caveats." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How do you prioritize two derivative-based interventions?", answer: "Compare derivative size, feasible adjustment, and implementation risk together." },
          { prompt: "When can a near-zero partial still matter later?", answer: "Context shifts can move the athlete into steeper regions." }
        ]
      }
    ],
    commonMistakes: ["Confusing local and global effects", "Ignoring units", "Treating partials as constants across all states"],
    lessonSummary: "Partial derivatives provide local, state-specific marginal effects for practical baseball intervention design.",
    synthesisPrompt: "Compute and interpret partial derivatives for one two-input player model at current state.",
    nextLessonBridge: "Next we combine partial information into gradient and directional sensitivity.",
    professorNotes: "Every derivative statement must include point and units. Ask students to compare two candidate interventions using realistic deltas.",
    keyTerms: [{ term: "Partial derivative", definition: "Local ceteris paribus rate of change for one input." }, { term: "Marginal effect", definition: "Applied interpretation of a partial derivative." }],
    assessmentItems: [
      {
        id: "pd-1",
        type: "mcq",
        prompt: "A coach asks for the local effect of +0.5 mph at today's mechanics profile. What quantity is most direct?",
        options: ["Season average split", "Partial derivative at current state", "Total season difference", "Unconditional correlation"],
        correctAnswer: "Partial derivative at current state",
        explanation: "Partial derivatives provide local ceteris paribus rates at a chosen point."
      },
      {
        id: "pd-2",
        type: "exact",
        prompt: "For f(x,y)=x^2+y, what is fx?",
        correctAnswer: "2x",
        acceptedAnswers: ["2*x"],
        explanation: "Differentiate with respect to x and hold y constant."
      },
      {
        id: "pd-3",
        type: "exact",
        prompt: "What common model feature makes marginal effects vary by state?",
        correctAnswer: "interactions",
        acceptedAnswers: ["interaction terms"],
        explanation: "Interactions make one variable's slope depend on others."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multivariable-function-geometry::gradient-directional-derivative-and-sensitivity": {
    key: "multivariable-calculus-and-differential-equations::multivariable-function-geometry::gradient-directional-derivative-and-sensitivity",
    title: "Gradient, Directional Derivative, And Sensitivity",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multivariable Function Geometry",
    whyItMatters:
      "Most baseball adjustments happen in coordinated bundles, not single-axis moves. A hitter can shift posture, timing, and barrel entry together; a pitcher can alter release height and extension while preserving command constraints. Gradient tools summarize where the local model rises fastest, while directional derivatives evaluate any realistic path the athlete can execute. This matters because pure steepest ascent may conflict with injury risk, transfer timeline, or game readiness. The practical question is usually not what direction is mathematically maximal, but what feasible direction yields strong expected gain with manageable variance. Sensitivity vectors make that tradeoff explicit. They also improve communication because staff can compare candidate paths with one common quantitative language, instead of debating isolated cues without a shared expected-value frame. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "In a hitting lab review, analysts identify a high-value gradient direction for expected contact quality, but biomechanics staff flags that movement as too abrupt for the current training week. Students use directional derivatives to compare the ideal gradient route against safer alternatives constrained by workload and movement continuity. They calculate local gains for each unit direction, interpret alignment with the gradient, and write a recommendation that explains why a nonmaximal direction can still be optimal in practice. The opener emphasizes decision quality over symbolic speed: learners must normalize direction vectors, check signs and units, and translate a dot product result into a concrete baseball training choice with confidence notes.",
    narrativeFlow: ["Build gradient from partials.", "Interpret steepest local direction.", "Evaluate directional derivatives via dot product.", "Choose feasible high-value directions."],
    objectives: ["Compute gradients and directional derivatives.", "Interpret sensitivity maps.", "Evaluate practical tradeoffs between ideal and feasible directions."],
    prerequisites: ["Partial derivatives", "Dot product", "Unit-vector normalization"],
    conceptChunks: [
      {
        heading: "Gradient Compass For Coordinated Adjustments",
        explainLikeCoach:
          "The gradient is your local uphill compass: it summarizes many partial effects into one best-improvement direction at the current state. Coaches can use it as a baseline for opportunity, then layer feasibility and risk before selecting an actual plan. Inline diagram cue: draw contour lines and the perpendicular arrow showing the steepest local ascent direction. [Inline Diagram: Contour map with gradient arrow normal to contours at current point.] [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "The gradient is \\(\\nabla f=(f_x,f_y,\\dots)\\). At a point \\(x_0\\), it points in the direction of maximal first-order increase, and \\(\\|\\nabla f(x_0)\\|\\) equals the largest directional derivative over all unit vectors.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Level sets around \\(x_0\\), gradient vector \\(\\nabla f(x_0)\\), and labeled steepest-ascent direction.]"
      },
      {
        heading: "Directional Derivative For Real Feasible Paths",
        explainLikeCoach:
          "Players rarely move exactly in the gradient direction, so the real question is: how much local gain do we get along a feasible path we can actually train now? Directional derivatives score each candidate route on the same unit-step scale. Inline diagram cue: compare two feasible arrows from the same point and read projected gain along each. [Inline Diagram: Two feasible unit directions from one state with projected gains.]",
        formalNote:
          "For unit direction \\(u\\), the directional derivative is \\(D_u f=\\nabla f\\cdot u\\). The sign gives increase versus decrease; the magnitude gives local sensitivity along that chosen path.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Gradient vector and candidate unit vectors \\(u_1,u_2\\), with dot-product projection lengths.]"
      },
      {
        heading: "Angle Alignment Explains Gain Differences",
        explainLikeCoach:
          "Gain differences often reduce to alignment. Two routes can look similar in raw components but produce different returns if one points more directly uphill relative to the gradient. This helps coaches explain why one cue sequence yields faster improvement than another. Inline diagram cue: show equal-length direction arrows with different angles to the gradient. [Inline Diagram: Equal-length arrows at angles \\(\\theta_1\\) and \\(\\theta_2\\) to gradient.]",
        formalNote:
          "Because \\(D_u f=\\nabla f\\cdot u=\\|\\nabla f\\|\\cos\\theta\\), local gain scales with \\(\\cos\\theta\\). If \\(\\theta=90^\\circ\\), first-order gain is zero; if \\(\\theta>90^\\circ\\), first-order change is negative.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Triangle/projection geometry illustrating \\(\\|\\nabla f\\|\\cos\\theta\\) for multiple directions.]"
      },
      {
        heading: "Sensitivity Advice Requires Reliability Layer",
        explainLikeCoach:
          "A large directional score in thin data should trigger caution, not overconfidence. Good recommendations pair expected gain with reliability notes so staff can decide between immediate rollout and controlled trialing. Inline diagram cue: same directional derivative magnitude shown with high-support and low-support confidence bands. [Inline Diagram: Directional estimate with narrow vs wide uncertainty band by data density.]",
        formalNote:
          "Directional estimates inherit uncertainty from model error and sampling density. Decision-ready reporting should include \\(D_u f\\), support diagnostics, and uncertainty intervals.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Local region with data-density overlay and annotated confidence interval on \\(D_u f\\).]"
      }
    ],
    quickChecks: [{ prompt: "What does gradient magnitude represent?", answer: "Largest possible local directional derivative." }, { prompt: "Why normalize direction vector?", answer: "To compare per-unit-step effects consistently." }, { prompt: "What does negative directional derivative imply?", answer: "Small movement in that direction decreases output locally." }],
    workedExamples: [{ title: "Gradient at a point", scenario: "f=x^2+3xy.", walkthrough: ["fx=2x+3y, fy=3x.", "Evaluate at chosen point.", "Interpret steepest direction."], takeaway: "Gradient aggregates local first-order effects." }, { title: "Directional score", scenario: "Use grad and unit vector u.", walkthrough: ["Compute dot product.", "Interpret sign and size.", "Compare with second candidate direction."], takeaway: "Path evaluation is projection-based." }, { title: "Feasible tradeoff", scenario: "High-gain but high-risk direction vs safer moderate-gain direction.", walkthrough: ["Compute both directional derivatives.", "Apply feasibility constraint.", "Pick robust plan."], takeaway: "Best practical direction can differ from pure steepest ascent." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "State formula for directional derivative.", answer: "Use gradient dot unit direction at the same point." },
          { prompt: "If gradient is zero, what about first-order sensitivity?", answer: "All unit-direction first-order rates are zero there." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Given grad=(2,-1) and u=(1/sqrt2,1/sqrt2), compute D_u.", answer: "Compute dot product to get one over square root two." },
          { prompt: "Why compare multiple directions?", answer: "Feasible baseball paths differ in risk and expected local return." },
          { prompt: "What must be true of u in D_u f?", answer: "The direction vector should be normalized to unit length." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How do contour maps relate to gradient direction?", answer: "The gradient is normal to contours and points uphill." },
          { prompt: "What should accompany derivative advice in sparse regions?", answer: "Include uncertainty statements and validation plans for staff." }
        ]
      }
    ],
    commonMistakes: ["Using non-unit directions", "Ignoring feasibility constraints", "Overstating confidence in sparse regions"],
    lessonSummary: "Gradient and directional derivatives turn local sensitivity into actionable baseball path comparisons.",
    synthesisPrompt: "Compute one gradient and compare two feasible training directions with directional derivatives.",
    nextLessonBridge: "Next we approximate nonlinear response surfaces with tangent planes and local linear models.",
    professorNotes: "Make students draw arrows on contours and explain one non-gradient choice justified by feasibility.",
    keyTerms: [{ term: "Gradient", definition: "Vector of first partial derivatives." }, { term: "Directional derivative", definition: "Local rate of change along a chosen direction." }],
    assessmentItems: [
      {
        id: "gd-1",
        type: "mcq",
        prompt: "A feasible swing-change direction is known. Which expression gives expected local gain along that path?",
        options: ["nabla f dot u", "f divided by u", "u dot u", "gradient minus direction"],
        correctAnswer: "nabla f dot u",
        explanation: "Directional derivative is the gradient projection onto a unit path."
      },
      {
        id: "gd-2",
        type: "exact",
        prompt: "If grad=(3,4), what is its magnitude?",
        correctAnswer: "5",
        acceptedAnswers: ["5.0"],
        explanation: "Magnitude is the square root of 3 squared plus 4 squared."
      },
      {
        id: "gd-3",
        type: "exact",
        prompt: "In two-variable contour plots, gradient is perpendicular to what?",
        correctAnswer: "level sets",
        acceptedAnswers: ["contours"],
        explanation: "Gradient is normal to equal-value contour geometry."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multivariable-function-geometry::tangent-planes-and-local-linear-models": {
    key: "multivariable-calculus-and-differential-equations::multivariable-function-geometry::tangent-planes-and-local-linear-models",
    title: "Tangent Planes And Local Linear Models",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multivariable Function Geometry",
    whyItMatters:
      "Baseball operations staff often needs a near-immediate estimate after a small change, not a full nonlinear recomputation during every decision checkpoint. Tangent planes and local linear models provide that speed while preserving mathematical discipline about where the approximation is valid. If a hitter shifts setup slightly or a pitcher changes release point by a narrow amount, first-order linearization can estimate expected output movement quickly enough for in-session decisions. The value is practical: it gives a common, auditable approximation method for coaching dialogue, simulation triage, and between-series planning. It also builds scientific humility, because linearization must be attached to neighborhood size and residual checks. Used well, tangent models improve responsiveness without pretending local estimates are global truths. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A hitting coordinator asks for a rapid estimate of expected hard-hit change from two small mechanical adjustments made between rounds. Students construct the tangent plane at the current state, compute differential estimates, and compare those estimates against exact model output at increasing distances to show where error grows. The activity trains both speed and judgment: learners must report units, directional signs, and locality assumptions before giving the recommendation. They then write a short baseball-facing note that explains why the estimate is useful now, what range it is trustworthy in, and when the model should be re-centered as player state drifts.",
    narrativeFlow: ["Derive tangent-plane equation.", "Use differentials for quick estimates.", "Check local validity window.", "Communicate approximation uncertainty."],
    objectives: ["Build tangent planes from derivatives.", "Estimate small output changes.", "Recognize when local linearization breaks."],
    prerequisites: ["Gradients", "Partial derivatives", "Linear approximation idea"],
    conceptChunks: [
      {
        heading: "First-Order Plane Around Live Player State",
        explainLikeCoach:
          "When decisions are immediate, we replace local curvature with a tangent plane around the current state. That gives a fast, interpretable estimate for small coordinated changes without recomputing everything from scratch. Inline diagram cue: touch a plane to the surface at the present player state and read nearby values from that plane. [Inline Diagram: Curved surface with tangent plane touching at current state point.] [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "At \\((a,b)\\), linearization is \\(L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\). This first-order Taylor model matches value and first slopes at the expansion point.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Surface \\(z=f(x,y)\\), tangent plane \\(z=L(x,y)\\), and contact point \\((a,b,f(a,b))\\).]"
      },
      {
        heading: "Differentials For Fast Delta Estimates",
        explainLikeCoach:
          "Differentials turn coaching micro-adjustments into quick expected deltas. If the planned move is small enough, they provide useful first-pass guidance during a session while full recomputation is deferred. Inline diagram cue: represent a tiny input step \\((dx,dy)\\) and project it to an estimated output step \\(df\\). [Inline Diagram: Small horizontal displacement vector and corresponding vertical change estimate.]",
        formalNote:
          "For small changes \\(dx,dy\\), use \\(df \\approx f_x\\,dx + f_y\\,dy\\). Accuracy depends on neighborhood size and curvature magnitude.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Differential formula panel with vector step \\((dx,dy)\\) from base point and annotated \\(df\\).]"
      },
      {
        heading: "Local Validity And Re-Centering Policy",
        explainLikeCoach:
          "Local models should expire on purpose. As state drift grows, approximation error increases, so the right policy is to re-center the tangent model at the new operating point rather than stretching yesterday's linear map into today's context. Inline diagram cue: widening distance from base point corresponds to widening approximation gap. [Inline Diagram: Error band expanding as distance from expansion point increases.]",
        formalNote:
          "Linearization error grows with both distance from \\((a,b)\\) and local curvature (second-order behavior). A practical trust radius is established by residual checks and periodic re-centering.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Radius around base point marked 'trusted local zone' with larger-error outer ring.]"
      },
      {
        heading: "Reporting Approximation With Honest Caveats",
        explainLikeCoach:
          "Staff trust improves when analysts label these outputs as local approximations with explicit conditions. The report should say what was approximated, where it is reliable, and when to rerun the full model. Inline diagram cue: recommendation card that includes estimate, trust radius, and uncertainty note together. [Inline Diagram: Reporting template with estimate, range of validity, and caution banner.]",
        formalNote:
          "Operational communication should state approximation order, base point, assumed neighborhood, and uncertainty qualifiers. This prevents accidental reinterpretation of local first-order estimates as global truths.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Structured memo box listing \\(L(x,y)\\), validity neighborhood, and uncertainty caveats.]"
      }
    ],
    quickChecks: [{ prompt: "What inputs are needed for tangent plane?", answer: "Function value and first partials at expansion point." }, { prompt: "Why recenter linear model over time?", answer: "Because local validity degrades as state drifts." }, { prompt: "What does df approximate?", answer: "Small output change from small input changes." }],
    workedExamples: [{ title: "Construct local plane", scenario: "f=x^2+y^2 at (1,2).", walkthrough: ["Compute f, fx, fy.", "Write L(x,y).", "Use nearby point estimate."], takeaway: "Tangent planes enable quick local predictions." }, { title: "Delta estimate", scenario: "Known fx and fy with small dx,dy.", walkthrough: ["Compute df approx fx dx + fy dy.", "Interpret sign and magnitude.", "Recommend micro-adjustment."], takeaway: "Differentials support fast tactical calls." }, { title: "Breakdown case", scenario: "Large input jump from expansion point.", walkthrough: ["Compare linear estimate and exact model.", "Show error growth.", "Recommend relinearization."], takeaway: "Scope discipline prevents overuse." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write tangent-plane formula in words.", answer: "Use value at point plus partial slopes times coordinate deviations." },
          { prompt: "What does local mean in this context?", answer: "It means only small moves near the expansion state." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "If fx=3, fy=-2, dx=0.1, dy=0.2, estimate df.", answer: "Compute three tenths minus four tenths to get negative one tenth." },
          { prompt: "Why should tangent estimates include caveats?", answer: "They are first-order approximations with finite neighborhood validity." },
          { prompt: "When should staff re-center the model?", answer: "Re-center after state drift or rising approximation residuals." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Give one baseball case where tangent planes help.", answer: "They support between-round estimates for small mechanical changes." },
          { prompt: "What indicates need to re-center quickly?", answer: "Large movement from base point or persistent estimate error." }
        ]
      }
    ],
    commonMistakes: ["Using local model globally", "Ignoring units in differentials", "Reporting approximation as exact"],
    lessonSummary: "Tangent planes give fast local approximations for small baseball-state changes, with clear neighborhood limits.",
    synthesisPrompt: "Create a tangent-plane estimate memo for one near-term player adjustment scenario.",
    nextLessonBridge: "Next we optimize multivariable outcomes under real baseball constraints.",
    professorNotes: "Have learners compare exact vs linearized values at increasing distances to internalize local validity limits.",
    keyTerms: [{ term: "Tangent plane", definition: "First-order local linear approximation of a surface." }, { term: "Differential", definition: "Approximate output change from small input changes." }],
    assessmentItems: [
      {
        id: "tp-1",
        type: "mcq",
        prompt: "For small in-session baseball adjustments, tangent planes are primarily used for what?",
        options: ["Global season forecasting", "Local approximation", "Outlier removal only", "Discrete counting tasks"],
        correctAnswer: "Local approximation",
        explanation: "Tangent planes provide first-order estimates near one operating point."
      },
      {
        id: "tp-2",
        type: "exact",
        prompt: "For f(x,y)=xy, what is fx?",
        correctAnswer: "y",
        acceptedAnswers: ["1y"],
        explanation: "Differentiate with respect to x while holding y fixed."
      },
      {
        id: "tp-3",
        type: "exact",
        prompt: "Linearization corresponds to which Taylor order?",
        correctAnswer: "first",
        acceptedAnswers: ["first-order"],
        explanation: "The tangent model uses first-order terms only."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multivariable-function-geometry::multivariable-optimization-under-constraints": {
    key: "multivariable-calculus-and-differential-equations::multivariable-function-geometry::multivariable-optimization-under-constraints",
    title: "Multivariable Optimization Under Constraints",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multivariable Function Geometry",
    whyItMatters:
      "Baseball development plans always operate under constraints: recovery windows, biomechanical tolerance, role-specific workload, and roster deployment limits. Unconstrained maxima can look impressive mathematically but fail immediately in real implementation. Constrained optimization provides the right frame by searching for best feasible outcomes and clarifying which limits are binding. This gives a structured way to compare competing plans and to explain why a seemingly stronger option is unavailable this week. It also supports cross-functional communication because multipliers and active constraints can be translated into resource value language. Staff can ask not only what the best feasible point is, but which bottleneck is most expensive and whether a small policy adjustment is worth pursuing. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A pitching group wants to maximize expected run prevention through command and movement changes, but there is a strict cap on high-intensity throws and a constraint on bullpen schedule. Students model the objective and constraints, inspect interior and boundary candidates, and interpret final recommendations in baseball language. They practice showing why boundary checks are mandatory and how an active constraint can determine final strategy even when unconstrained calculus suggests another point. By the end, learners can write a memo that includes the chosen feasible optimum, what tradeoff caused the choice, and how much value might be gained by modestly relaxing one constraint.",
    narrativeFlow: ["Define constrained objective.", "Evaluate interior and boundary candidates.", "Use Lagrange condition for equality constraints.", "Interpret active constraints and tradeoff values."],
    objectives: ["Solve small constrained optimization problems.", "Interpret active constraints.", "Explain multiplier intuition in baseball terms."],
    prerequisites: ["Gradient basics", "Level sets", "Feasible-domain reasoning"],
    conceptChunks: [
      {
        heading: "Feasible Best Point Versus Fantasy Best Point",
        explainLikeCoach:
          "Optimization only helps if the answer is executable. An unconstrained best point can demand workload, mechanics, or schedule conditions that do not exist in practice, so the real objective is the best point inside the feasible baseball system. Inline diagram cue: compare unconstrained peak outside allowable region with constrained peak inside it. [Inline Diagram: Objective contours with unconstrained optimum outside feasible set and constrained optimum on feasible set.] [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Solve \\(\\max\\) or \\(\\min\\) of \\(f\\) over feasible set \\(D\\) defined by equalities and inequalities. A valid optimizer must satisfy objective criteria and all constraints \\(x\\in D\\).\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Feasible region \\(D\\), objective contours, and labeled unconstrained vs constrained solutions.]"
      },
      {
        heading: "Boundary And Corner Candidate Discipline",
        explainLikeCoach:
          "Boundary checks are not optional bookkeeping; they are where many realistic optima live. In baseball planning, policy caps and physical limits often become active, so corners and edges can beat interior points. Inline diagram cue: sweep interior critical points, then explicitly inspect boundary arcs and corners. [Inline Diagram: Feasible polygon/curve with interior candidate and boundary/corner candidates.]",
        formalNote:
          "Candidate enumeration must include interior stationary points, boundary manifolds, and corner points. Interior conditions alone cannot certify constrained optimality.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Candidate checklist map with labeled interior, boundary, and corner evaluation points.]"
      },
      {
        heading: "Multiplier As Constraint Value Signal",
        explainLikeCoach:
          "Lagrange multipliers translate math into resource language. If a constraint is tight, the multiplier estimates how much objective improvement we might buy by relaxing that limit slightly, which supports concrete staffing and scheduling tradeoff decisions. Inline diagram cue: tiny outward shift of the constraint boundary paired with predicted gain in optimal value. [Inline Diagram: Constraint boundary shift \\(c\\to c+\\Delta c\\) and resulting change in optimum.]",
        formalNote:
          "For equality constraint \\(g(x)=c\\), first-order conditions use \\(\\nabla f=\\lambda\\nabla g\\). Under regularity assumptions, \\(\\lambda\\approx \\frac{d f^*}{dc}\\), the shadow value of relaxing the constraint.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Tangency of objective contour and constraint with \\(\\nabla f\\), \\(\\nabla g\\), and multiplier label \\(\\lambda\\).]"
      },
      {
        heading: "Explain Active Limits In Baseball Language",
        explainLikeCoach:
          "Adoption depends on explanation quality. Coaches need the chosen point, which constraints were active, what tradeoff was accepted, and what might change if one policy limit moves. That narrative turns optimization from abstract output into implementable strategy. Inline diagram cue: final report card linking solution coordinates to active constraints and sensitivity notes. [Inline Diagram: Optimization summary card with optimal point, active constraints, and what-if sensitivity.]",
        formalNote:
          "A complete constrained-optimization report includes \\(x^*\\), active set identification, local sensitivity to bound changes, and operational implications for risk-managed deployment.\n\n[Dedicated Diagram Placeholder]\n[DIAGRAM: Annotated feasible map with \\(x^*\\), active boundaries highlighted, and marginal-value callouts.]"
      }
    ],
    quickChecks: [{ prompt: "Why can unconstrained optimum fail in practice?", answer: "It can violate feasibility limits." }, { prompt: "Where do constrained optima often occur?", answer: "On active boundaries." }, { prompt: "What does multiplier magnitude suggest?", answer: "How strongly that constraint limits objective value." }],
    workedExamples: [{ title: "Product with sum constraint", scenario: "Maximize xy with x+y=10.", walkthrough: ["Substitute y=10-x.", "Optimize quadratic.", "Get x=y=5."], takeaway: "Constraint changes optimum location." }, { title: "Workload cap model", scenario: "Linear gain under c+2m<=8.", walkthrough: ["Inspect boundary and corners.", "Find feasible best point.", "State active cap."], takeaway: "Binding limits drive solution." }, { title: "Shadow-value note", scenario: "Small cap relaxation increases optimum by delta.", walkthrough: ["Interpret as marginal value.", "Compare to resource cost.", "Use in planning discussion."], takeaway: "Optimization can inform resource allocation." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name one baseball constraint type.", answer: "A weekly high-intensity throw cap is a common constraint." },
          { prompt: "Why inspect corners in constrained domains?", answer: "Feasible extrema can occur at boundary corner points." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Maximize xy with x+y=12.", answer: "The balanced feasible optimum is x equals y equals six." },
          { prompt: "What does active constraint mean?", answer: "It is a limit that binds at the final optimum." },
          { prompt: "Why can unconstrained calculus fail here?", answer: "It can suggest points outside allowed baseball limits." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How would you explain lambda to coaches?", answer: "It estimates value of slightly loosening a limiting resource." },
          { prompt: "Risk of ignoring constraints?", answer: "Recommendations may be unsafe or impossible to execute consistently." }
        ]
      }
    ],
    commonMistakes: ["Skipping boundary analysis", "Returning unconstrained critical point only", "Ignoring interpretation of active constraints"],
    lessonSummary: "Constrained optimization finds best feasible baseball decisions and clarifies tradeoffs through active limits.",
    synthesisPrompt: "Solve one constrained baseball optimization and explain which limit is active and why.",
    nextLessonBridge: "Next we transition from local geometry to area accumulation with double integrals.",
    professorNotes: "Require every solution to include feasibility check and active-constraint explanation.",
    keyTerms: [{ term: "Constrained optimization", definition: "Extremum search under explicit feasibility limits." }, { term: "Active constraint", definition: "Constraint that is binding at optimum." }],
    assessmentItems: [
      {
        id: "co-1",
        type: "mcq",
        prompt: "In constrained baseball planning, why must analysts check boundary candidates?",
        options: ["Boundaries are always irrelevant", "Optima often occur where limits bind", "Boundaries remove all uncertainty", "Boundaries force linear models"],
        correctAnswer: "Optima often occur where limits bind",
        explanation: "Feasible best points frequently lie on active constraints."
      },
      {
        id: "co-2",
        type: "exact",
        prompt: "In the condition grad f = ___ grad g, fill the blank.",
        correctAnswer: "lambda",
        acceptedAnswers: ["λ"],
        explanation: "The Lagrange multiplier is denoted by lambda."
      },
      {
        id: "co-3",
        type: "exact",
        prompt: "What term describes the marginal value of relaxing a tight constraint?",
        correctAnswer: "shadow value",
        acceptedAnswers: ["shadow price"],
        explanation: "Multiplier interpretation is often called shadow value."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::double-integrals-over-physical-regions": {
    key: "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::double-integrals-over-physical-regions",
    title: "Double Integrals Over Physical Regions",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multiple Integration And Vector Fields",
    whyItMatters:
      "Many baseball questions are area accumulation questions: total expected value over a strike-zone subregion, weighted contact risk over an outfield sector, or aggregate exposure over a movement-location window. Double integrals provide the mathematically correct way to sum local contributions across a two-dimensional region. This is more than an algebra exercise because region geometry determines the meaning of the final number. If bounds are wrong, the result can be numerically clean and strategically useless. A strong double-integral workflow therefore ties setup, units, and interpretation together. Analysts can then communicate not just the total, but what part of the field or location map generated it and why that matters for tactical decisions. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students receive a local run-value density map over pitch location and are asked for expected aggregate effect inside a game-plan region. They begin by sketching geometry, setting bounds, and checking units before integrating. The lesson deliberately contrasts a correct setup with a polished but wrong-bound solution to show why diagram discipline matters. Learners then switch integration order when helpful and explain the output in baseball language rather than raw calculus notation. The opener reinforces that double integrals are operational tools for area-based decisions, not isolated symbolic drills.",
    narrativeFlow: ["Interpret integrand meaning.", "Sketch region and bounds.", "Compute iterated integrals.", "Tie results to baseball questions."],
    objectives: ["Set up double integrals on common region types.", "Interpret totals and weighted expectations.", "Switch order when helpful."],
    prerequisites: ["Single-variable integration", "Region graphing", "Unit interpretation"],
    conceptChunks: [
      {
        heading: "Area Accumulation For Zone-Level Decisions",
        explainLikeCoach:
          "A double integral sums local baseball value across every tiny patch in a region. This is exactly what we need when tactical questions involve sectors, zones, or coverage maps rather than a single point estimate. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "The quantity double integral over R of f dA is the Riemann-sum limit over area elements. Region R and integrand meaning jointly determine the physical interpretation of the result."
      },
      {
        heading: "Region Sketching Before Bound Writing",
        explainLikeCoach:
          "Bound mistakes are the most common source of decision errors in this topic. Drawing the region first prevents integrating the wrong geometry and gives staff confidence that the final number corresponds to the intended baseball question.",
        formalNote:
          "Type I and Type II bound representations encode geometry. Correctness depends on matching limits to region edges, not on symbolic manipulation speed."
      },
      {
        heading: "Integrand Units Control Interpretation",
        explainLikeCoach:
          "If the integrand is a density, the integral gives total mass-like quantity. If it is value times density, it gives weighted total impact. Unit tracking keeps analysis connected to operational meaning.",
        formalNote:
          "Dimensional analysis: integrand units multiplied by area units yield output units. This check catches many hidden setup mistakes before computation is finalized."
      },
      {
        heading: "Order Switching As Computational Strategy",
        explainLikeCoach:
          "Integration order is a tool, not a ritual. Reversing order can simplify algebra while preserving the same baseball region and interpretation, especially on nonrectangular domains.",
        formalNote:
          "Under standard regularity, Fubini's theorem permits order reversal. Equivalent iterated forms should integrate over the same geometric region R."
      }
    ],
    quickChecks: [{ prompt: "Why sketch region first?", answer: "To set correct bounds for intended physical area." }, { prompt: "What does integrand unit help with?", answer: "Interpreting final integral quantity." }, { prompt: "Why switch integration order?", answer: "To simplify computation while preserving meaning." }],
    workedExamples: [{ title: "Rectangle accumulation", scenario: "Integrate simple linear f over rectangle.", walkthrough: ["Integrate inner variable.", "Integrate outer variable.", "Interpret total."], takeaway: "Iterated integrals implement area accumulation." }, { title: "Triangular region", scenario: "Use y-from-0-to-x bounds.", walkthrough: ["Write nonrectangular limits.", "Evaluate iterated form.", "Connect to wedge region meaning."], takeaway: "Function bounds represent curved or slanted edges." }, { title: "Expectation map", scenario: "Integrate value*density.", walkthrough: ["Check density normalization.", "Compute weighted integral.", "Interpret as expected contribution."], takeaway: "Integral frameworks unify geometry and probability." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "What does double integral over R of f dA compute?", answer: "It gives total accumulated quantity across region R." },
          { prompt: "Name one baseball region for this method.", answer: "A strike-zone subregion or outfield sector works well." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Why can wrong bounds ruin correct algebra?", answer: "They compute a number for the wrong baseball area." },
          { prompt: "When is order switch useful?", answer: "Switch when alternative bounds simplify the inner antiderivative." },
          { prompt: "What should accompany final numeric totals?", answer: "Include region diagram and unit interpretation for coaches." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How do you explain expected run value via double integral?", answer: "Accumulate local value weighted by pitch-location density over the region." },
          { prompt: "What validation can check density setup?", answer: "Ensure density integrates to one on its support." }
        ]
      }
    ],
    commonMistakes: ["Skipping region sketch", "Losing unit meaning", "Treating order as fixed ritual"],
    lessonSummary: "Double integrals provide rigorous area accumulation for baseball location and region-based analysis.",
    synthesisPrompt: "Set up and interpret a double integral for a custom baseball location region.",
    nextLessonBridge: "Next we simplify curved-region integration using coordinate transformations and Jacobians.",
    professorNotes: "Grade setup diagrams and units explicitly, not only final numeric answers.",
    keyTerms: [{ term: "Double integral", definition: "Integral accumulating quantity over a 2D region." }, { term: "Iterated integral", definition: "Sequential integration form of a double integral." }],
    assessmentItems: [
      {
        id: "di-1",
        type: "mcq",
        prompt: "For a baseball location-density accumulation problem, what is the best first step?",
        options: ["Differentiate first", "Sketch region geometry", "Assume rectangle bounds", "Choose random order"],
        correctAnswer: "Sketch region geometry",
        explanation: "Bounds and interpretation both come from the region."
      },
      {
        id: "di-2",
        type: "exact",
        prompt: "If p is a probability density on region R, what is double integral of p over R?",
        correctAnswer: "1",
        acceptedAnswers: ["1.0"],
        explanation: "A valid probability density integrates to one."
      },
      {
        id: "di-3",
        type: "exact",
        prompt: "What symbol denotes area element in Cartesian two-variable integrals?",
        correctAnswer: "dA",
        acceptedAnswers: ["dxdy", "dydx"],
        explanation: "dA is the generic area element notation."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::coordinate-changes-in-multivariable-integrals": {
    key: "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::coordinate-changes-in-multivariable-integrals",
    title: "Coordinate Changes In Multivariable Integrals",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multiple Integration And Vector Fields",
    whyItMatters:
      "Many baseball regions are awkward in Cartesian coordinates but simple in transformed coordinates. Outfield spray sectors, radial distance bands, and elliptical influence zones can become clean rectangles or strips after a suitable change of variables. Coordinate transformation therefore improves both computational efficiency and interpretability. The key safeguard is Jacobian scaling, which preserves area or volume accounting after the map distorts local patches. Without that correction, transformed integrals can systematically undercount or overcount value. This lesson builds the habit of writing mapping, transformed bounds, and Jacobian together so every result remains physically meaningful for baseball decisions. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students analyze an outfield spray scenario where direct Cartesian bounds are cumbersome. They switch to a radial-angle description, derive transformed limits, include the Jacobian, and compare against known geometric area checks. The opener includes a deliberate missing-Jacobian trap so learners see how easy it is to produce plausible but incorrect totals. By the end, they can articulate why coordinate choice is strategic, how to verify transformed setups, and how to explain transformed results to coaches without hiding the scaling assumptions.",
    narrativeFlow: ["Match coordinates to geometry.", "Transform integrand and bounds.", "Apply Jacobian scaling.", "Validate magnitude and symmetry."],
    objectives: ["Set transformed integrals correctly.", "Compute Jacobians for standard transforms.", "Interpret scaling physically."],
    prerequisites: ["Double integrals", "Determinant basics", "Region geometry"],
    conceptChunks: [
      {
        heading: "Coordinate Choice Should Match Baseball Geometry",
        explainLikeCoach:
          "If the field region is radial or angular, forcing Cartesian bounds often creates unnecessary complexity. Choosing coordinates that match geometry lowers algebra burden and reduces setup mistakes during tactical analysis. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Use a smooth map T(u,v)=(x,y) from transformed region S to original region R. Integrals are then evaluated over S with transformed integrand and scaling."
      },
      {
        heading: "Jacobian As Local Distortion Accounting",
        explainLikeCoach:
          "A transformation stretches and compresses tiny area patches. Jacobian scaling keeps totals honest so integrated baseball value is neither artificially inflated nor suppressed.",
        formalNote:
          "Area element transforms as dA = |J_T(u,v)| dudv. In polar coordinates, |J|=r, so the element becomes r dr dtheta."
      },
      {
        heading: "Transform Bounds With Equal Care",
        explainLikeCoach:
          "Changing x and y formulas without rewriting region limits is a structural error. Correct transformed bounds are as important as the Jacobian and must be derived from the mapped region edges.",
        formalNote:
          "Boundary curves in R must be converted into constraints in (u,v) space. Valid setup requires transformed integrand, transformed domain, and Jacobian factor together."
      },
      {
        heading: "Sanity Checks Prevent Silent Bias",
        explainLikeCoach:
          "After transformation, run a quick benchmark such as integrating one over the region and comparing to known area. This catches many hidden mistakes before recommendations reach game planning.",
        formalNote:
          "Symmetry checks, known-area benchmarks, and dimensional consistency tests are robust diagnostics for coordinate-transform workflows."
      }
    ],
    quickChecks: [{ prompt: "Why include Jacobian?", answer: "To correct local scaling distortion under transformation." }, { prompt: "Common transform error?", answer: "Forgetting to transform bounds." }, { prompt: "Polar area element is?", answer: "r dr dtheta." }],
    workedExamples: [{ title: "Disk in polar", scenario: "Integrate radial function over disk.", walkthrough: ["Write r,theta bounds.", "Include Jacobian r.", "Evaluate cleanly."], takeaway: "Polar transform simplifies radial geometry." }, { title: "Sector mapping", scenario: "Angle-distance outfield wedge.", walkthrough: ["Set angle and radius intervals.", "Integrate with r factor.", "Interpret spray-sector total."], takeaway: "Coordinate choice should match baseball shape." }, { title: "Jacobian omission debug", scenario: "Result too small after transform.", walkthrough: ["Check missing r factor.", "Correct area scaling.", "Recompute."], takeaway: "Scaling omissions produce systematic bias." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write x and y in polar form.", answer: "Use x equals r cosine theta and y equals r sine theta." },
          { prompt: "What is the polar Jacobian factor?", answer: "The scaling factor is r in two dimensions." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Bounds for full disk radius a?", answer: "Set r from zero to a and theta from zero to two pi." },
          { prompt: "Why is region mapping separate from integrand transform?", answer: "Limits also change and must be rewritten in new coordinates." },
          { prompt: "What common omission causes undercounting in polar setup?", answer: "Forgetting the Jacobian r term causes systematic bias." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "One baseball geometry ideal for polar coordinates?", answer: "Outfield spray sectors centered at home plate are ideal." },
          { prompt: "One quick validation check?", answer: "Integrate one and compare with known geometric area." }
        ]
      }
    ],
    commonMistakes: ["Missing Jacobian", "Unchanged bounds after transformation", "No post-transform sanity check"],
    lessonSummary: "Coordinate transformations simplify integration when bounds and Jacobians are handled with full geometric discipline.",
    synthesisPrompt: "Transform one curved baseball-region integral and verify with an area sanity check.",
    nextLessonBridge: "Next we use vector fields to represent directional flow and influence across space.",
    professorNotes: "Enforce three-line setup: mapping, Jacobian, transformed bounds. Most errors vanish when this is explicit.",
    keyTerms: [{ term: "Jacobian", definition: "Determinant scaling factor in variable transformation." }, { term: "Coordinate transform", definition: "Change of variables used to simplify integration setup." }],
    assessmentItems: [
      {
        id: "ct-1",
        type: "mcq",
        prompt: "In transformed baseball-region integrals, Jacobian primarily corrects what?",
        options: ["Only variable names", "Local scaling distortion", "Derivative order", "Measurement units only"],
        correctAnswer: "Local scaling distortion",
        explanation: "Jacobian accounts for area distortion under coordinate mapping."
      },
      {
        id: "ct-2",
        type: "exact",
        prompt: "In polar coordinates, dA equals ___ dr dtheta.",
        correctAnswer: "r",
        acceptedAnswers: ["r*1"],
        explanation: "Polar area element requires the multiplicative r factor."
      },
      {
        id: "ct-3",
        type: "exact",
        prompt: "After changing variables, what must change besides the integrand?",
        correctAnswer: "bounds",
        acceptedAnswers: ["limits", "region"],
        explanation: "Mapped regions require transformed bounds to match geometry."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::vector-fields-and-flow-interpretation": {
    key: "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::vector-fields-and-flow-interpretation",
    title: "Vector Fields And Flow Interpretation",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multiple Integration And Vector Fields",
    whyItMatters:
      "Many baseball processes are directional and cannot be described well by scalar maps alone. Wind influence in ball flight, state-dependent movement pushes, and tactical flow tendencies are better represented as vector fields assigning an arrow to each point. This representation supports richer interpretation: we can discuss where trajectories tend to converge, where they spread, and where rotational behavior appears. For operations teams, vector-field language improves planning around positioning, route anticipation, and environmental adjustment. It also bridges qualitative visual intuition and formal derivatives such as divergence and curl-style diagnostics. The key value is turning a static map into a dynamic story with actionable implications. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students begin with arrow plots over a baseball-relevant plane and are asked to narrate what a particle or trajectory would do if it followed local vectors. They then connect that narrative to formal expressions for divergence and rotational tendency. The opener emphasizes translation skill: each symbolic calculation must be paired with a plain-language baseball interpretation about spreading, convergence, or circulation. By the end, learners can evaluate field vectors at points, sketch likely flow paths, and communicate uncertainty where data support is uneven.",
    narrativeFlow: ["Define vector-field components.", "Read arrow plots and flow lines.", "Interpret divergence and rotation intuition.", "Apply language to baseball dynamics."],
    objectives: ["Interpret 2D vector fields at points and regions.", "Describe flow behavior qualitatively.", "Connect field structure to baseball context."],
    prerequisites: ["Vectors", "Coordinate planes", "Basic derivative notation"],
    conceptChunks: [
      {
        heading: "Vector Arrow Maps For Spatial Baseball Effects",
        explainLikeCoach:
          "A vector field gives each location a direction and strength. That is ideal for representing directional influences such as drift tendencies or state pushes that scalar heat maps cannot fully express. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A planar vector field has the form F(x,y)=<P(x,y),Q(x,y)>. Evaluation at each point returns a vector, enabling local directional analysis and flow modeling."
      },
      {
        heading: "Flow Lines Convert Static Maps Into Dynamics",
        explainLikeCoach:
          "Flow lines answer the practical question: if an object follows local arrows, where does it go? This transforms visualization into process reasoning useful for baseball trajectory and positioning narratives.",
        formalNote:
          "Integral curves satisfy x'(t)=F(x(t)) under regularity conditions. Their geometry summarizes dynamic behavior implied by the field."
      },
      {
        heading: "Divergence As Local Spread Indicator",
        explainLikeCoach:
          "Divergence summarizes whether neighboring trajectories tend to spread out or compress near a point. That is a concise way to communicate source-like and sink-like behavior in a map.",
        formalNote:
          "In two dimensions, div F = partial P / partial x + partial Q / partial y. Positive values suggest local expansion, negative values suggest local contraction."
      },
      {
        heading: "Rotational Tendency For Circulation Patterns",
        explainLikeCoach:
          "Some vector fields create circulating behavior rather than pure spread or collapse. Recognizing this helps analysts explain curved route tendencies and rotational influences in baseball context.",
        formalNote:
          "The scalar curl analogue in 2D, partial Q / partial x minus partial P / partial y, indicates local rotational tendency and orientation."
      }
    ],
    quickChecks: [{ prompt: "What does each point in vector field store?", answer: "A vector with direction and magnitude." }, { prompt: "What does negative divergence suggest?", answer: "Local convergence/compression." }, { prompt: "What defines a flow line?", answer: "A path tangent to field arrows everywhere." }],
    workedExamples: [{ title: "Field evaluation", scenario: "F=<y,-x> at sample points.", walkthrough: ["Substitute coordinates.", "Plot arrows.", "Recognize rotation pattern."], takeaway: "Component rules generate geometric behavior." }, { title: "Divergence check", scenario: "F=<x,y>.", walkthrough: ["Compute div=1+1.", "Interpret as outward tendency.", "Connect to source-like behavior."], takeaway: "Derivative summaries aid qualitative interpretation." }, { title: "Baseball wind map", scenario: "Outfield vector grid.", walkthrough: ["Identify high-drift sectors.", "Mark convergence corridors.", "Discuss fielding implications."], takeaway: "Vector maps support tactical positioning." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Give one valid 2D vector field.", answer: "One example is F(x,y) equals angle bracket x comma negative y." },
          { prompt: "What indicates stronger local effect visually?", answer: "Longer arrows indicate greater local vector magnitude." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "For F=<y,x>, find F(2,-1).", answer: "Substitute values to get angle bracket negative one comma two." },
          { prompt: "Write flow-line differential form.", answer: "Use x prime of t equals F of x of t." },
          { prompt: "Why inspect divergence map regions?", answer: "It reveals where trajectories spread or contract locally." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How can divergence help coach communication?", answer: "It summarizes concentration versus spread in one interpretable metric." },
          { prompt: "Why combine plots with formulas?", answer: "Visual intuition and formal diagnostics reinforce each other." }
        ]
      }
    ],
    commonMistakes: ["Confusing vector field with scalar map", "Ignoring magnitude", "Mixing up contours and flow lines"],
    lessonSummary: "Vector fields provide directional structure for interpreting baseball flow-like systems across space or state. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Interpret a 2D vector map and write a short baseball-facing flow narrative.",
    nextLessonBridge: "Next we accumulate vector effects along paths using line integrals.",
    professorNotes: "Push students to narrate arrows in plain language before computing derivatives.",
    keyTerms: [{ term: "Vector field", definition: "Function assigning a vector to each point." }, { term: "Flow line", definition: "Trajectory tangent to field at every point." }],
    assessmentItems: [
      {
        id: "vf-1",
        type: "mcq",
        prompt: "At each point in a baseball vector map, what type of object is assigned?",
        options: ["A scalar only", "A vector", "A matrix always", "A probability only"],
        correctAnswer: "A vector",
        explanation: "Vector fields map each point to a directional vector."
      },
      {
        id: "vf-2",
        type: "exact",
        prompt: "For F=<y,-x>, what is F(2,3)?",
        correctAnswer: "<3,-2>",
        acceptedAnswers: ["3,-2", "(3,-2)"],
        explanation: "Replace y with three and x with two."
      },
      {
        id: "vf-3",
        type: "exact",
        prompt: "Name the expression dP/dx + dQ/dy in two dimensions.",
        correctAnswer: "divergence",
        acceptedAnswers: ["div"],
        explanation: "That sum of partial derivatives is divergence."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::line-integrals-for-work-like-quantities": {
    key: "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::line-integrals-for-work-like-quantities",
    title: "Line Integrals For Work-Like Quantities",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multiple Integration And Vector Fields",
    whyItMatters:
      "Some baseball quantities are inherently path based, not region based. Environmental effects along a ball trajectory, directional effort through a movement path, and cumulative field alignment all require integration along curves. Line integrals supply this framework and show when route choice changes total effect. This is practically important because two paths with similar endpoints can produce very different accumulated influence in nonconservative settings. The method also clarifies when endpoint shortcuts are valid, which can save time in tactical modeling pipelines. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students are given a vector field and two candidate trajectory paths between similar baseball states. They parameterize curves, compute line integrals, compare signs and magnitudes, and interpret why one route accumulates more influence. The opener includes orientation reversal to show sign changes and a conservative-field case to demonstrate endpoint simplification. Learners finish by writing a short baseball-facing explanation that distinguishes path dependence from endpoint dependence.",
    narrativeFlow: ["Define line-integral forms.", "Parameterize paths carefully.", "Compute vector work-like integrals.", "Interpret path dependence and endpoint shortcuts."],
    objectives: ["Set up vector and scalar line integrals.", "Interpret alignment-based accumulation.", "Differentiate conservative and path-dependent cases."],
    prerequisites: ["Vector fields", "Parametric curves", "Dot product"],
    conceptChunks: [
      {
        heading: "Curve-Based Accumulation For Trajectory Effects",
        explainLikeCoach:
          "Line integrals accumulate influence along the path the object actually follows. This makes them ideal for baseball trajectory and movement-route questions where route geometry affects outcome. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Vector line integral is integral over C of F dot dr, parameterized as integral of F(r(t)) dot r'(t) dt across the curve interval."
      },
      {
        heading: "Dot Product Alignment Governs Contribution",
        explainLikeCoach:
          "When path direction aligns with the field, contribution is positive; when it opposes, contribution is negative. This alignment logic gives clear intuition for sign and magnitude.",
        formalNote:
          "The dot product includes cosine of angle between field and tangent vectors, so orientation and local direction control local accumulation."
      },
      {
        heading: "Path Dependence Versus Endpoint Shortcut",
        explainLikeCoach:
          "In nonconservative fields, route choice matters and should be tested explicitly. In conservative fields, endpoint differences are enough, which greatly simplifies analysis.",
        formalNote:
          "If F equals gradient of potential phi on an appropriate domain, integral over C of F dot dr equals phi(B)-phi(A), independent of path."
      },
      {
        heading: "Orientation Reversal And Sign Flip",
        explainLikeCoach:
          "Running the same path backward changes interpretation because the accumulated directional contribution flips sign. Staff reports should note direction conventions clearly.",
        formalNote:
          "Reversing curve parameterization multiplies the vector line integral by negative one."
      }
    ],
    quickChecks: [{ prompt: "Core operation inside vector line integral?", answer: "Dot product of field and tangent." }, { prompt: "What changes sign under path reversal?", answer: "Vector line integral value." }, { prompt: "When endpoint shortcut works?", answer: "When field is conservative." }],
    workedExamples: [{ title: "Straight path", scenario: "F=<x,0> from (0,0) to (2,0).", walkthrough: ["Parameterize r(t).", "Compute F(r) and r'.", "Integrate dot product."], takeaway: "Parameterization drives setup." }, { title: "Two-path comparison", scenario: "Rotational field between same endpoints.", walkthrough: ["Compute integral on path A.", "Compute on path B.", "Compare results for path dependence."], takeaway: "Route can matter in nonconservative fields." }, { title: "Potential shortcut", scenario: "F=grad phi.", walkthrough: ["Evaluate phi endpoints.", "Skip full path integration.", "Interpret efficient computation."], takeaway: "Conservative structure simplifies workflow." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write vector line-integral formula with parameter t.", answer: "Integrate F of r of t dot r prime of t over time bounds." },
          { prompt: "Why does orientation matter?", answer: "Reversing direction flips tangent direction and integral sign." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "What is first step after choosing curve?", answer: "Parameterize the path and compute its tangent derivative." },
          { prompt: "How detect conservative opportunity?", answer: "Check for potential function conditions on a valid domain." },
          { prompt: "Why compare two paths with same endpoints?", answer: "It reveals path dependence in nonconservative baseball fields." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Give baseball interpretation of path dependence.", answer: "Different trajectories can accumulate different directional effects." },
          { prompt: "Why include geometry language in reports?", answer: "It clarifies route alignment versus endpoint effects." }
        ]
      }
    ],
    commonMistakes: ["Forgetting r'(t)", "Ignoring orientation", "Assuming conservative without verification"],
    lessonSummary: "Line integrals quantify path-based effects through alignment of local field direction and movement. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Compute and interpret one baseball trajectory line integral with a note on path dependence.",
    nextLessonBridge: "Next we combine multivariable integration tools in a full synthesis workshop.",
    professorNotes: "Have students verbalize integrand as alignment score before integrating.",
    keyTerms: [{ term: "Line integral", definition: "Integral accumulating quantity along a curve." }, { term: "Conservative field", definition: "Field with endpoint-only line integrals." }],
    assessmentItems: [
      {
        id: "li-1",
        type: "mcq",
        prompt: "In baseball trajectory analysis, a vector line integral mainly accumulates what?",
        options: ["Area size", "Field-path alignment", "Endpoint distance only", "Curvature alone"],
        correctAnswer: "Field-path alignment",
        explanation: "Dot-product alignment is integrated along the route."
      },
      {
        id: "li-2",
        type: "exact",
        prompt: "If path orientation reverses, what factor multiplies the vector line integral?",
        correctAnswer: "-1",
        acceptedAnswers: ["negative one"],
        explanation: "Reversing direction changes sign of the integral."
      },
      {
        id: "li-3",
        type: "exact",
        prompt: "What function exists when a vector field is conservative?",
        correctAnswer: "potential function",
        acceptedAnswers: ["potential"],
        explanation: "Conservative fields are gradients of potential functions."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::multivariable-integration-synthesis-workshop": {
    key: "multivariable-calculus-and-differential-equations::multiple-integration-and-vector-fields::multivariable-integration-synthesis-workshop",
    title: "Multivariable Integration Synthesis Workshop",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Multiple Integration And Vector Fields",
    whyItMatters:
      "Real baseball analytics does not arrive as isolated chapter exercises. One decision pipeline can require area accumulation for zone value, coordinate transforms for curved geometry, and line integrals for trajectory effects. The central professional skill is method selection under pressure, plus verification and communication that survive review. This synthesis lesson builds that habit by forcing students to classify question structure before computing anything. They learn to justify why each operator matches the physical question and to validate outputs with benchmark checks. That reduces silent setup errors and raises trust when recommendations move into staff planning. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Learners complete a three-part baseball case involving location-density accumulation, transformed sector integration, and path-based vector influence. They must choose methods explicitly, execute each with unit and geometry checks, then merge findings into one coherent recommendation memo. The opener intentionally includes tempting but wrong method shortcuts so students practice defending structure-aware choices. By the end, they can explain what was computed, why that tool was selected, and what assumptions bound the conclusion.",
    narrativeFlow: ["Classify question structure.", "Select matching integral tool.", "Execute with validation checks.", "Deliver coach-facing synthesis memo."],
    objectives: ["Select appropriate integration method.", "Execute mixed setups accurately.", "Communicate composite results with assumptions."],
    prerequisites: ["Double integrals", "Coordinate transformations", "Line integrals"],
    conceptChunks: [
      {
        heading: "Structure Classification Before Computation",
        explainLikeCoach:
          "The first question is where accumulation lives: region, transformed region, or path. Choosing the right operator from that structure prevents elegant calculations for the wrong baseball quantity. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Map semantic problem type to integral operator prior to algebra. Method mismatch is a primary source of structural analytic error."
      },
      {
        heading: "Setup Compute Validate Interpret Sequence",
        explainLikeCoach:
          "Each subtask should follow a disciplined sequence so assumptions and units are never lost between steps. This creates repeatable quality in multistage baseball analyses.",
        formalNote:
          "A robust workflow includes explicit setup, computation, independent checks, and contextual interpretation for every component before synthesis."
      },
      {
        heading: "Cross-Checks As Error-Control Layer",
        explainLikeCoach:
          "Magnitude checks, symmetry checks, and known benchmark comparisons catch many hidden setup mistakes that pure algebra review misses. This is especially important in mixed-method pipelines.",
        formalNote:
          "Independent validation reduces false confidence by testing geometric and dimensional plausibility beyond symbolic correctness."
      },
      {
        heading: "Action-Ready Synthesis Communication",
        explainLikeCoach:
          "Final outputs should lead with decision implications, then summarize method rationale and uncertainty. Coaches need clear actions anchored to transparent assumptions.",
        formalNote:
          "Synthesis reporting should include chosen methods, key outputs, assumptions, sensitivity notes, and operational recommendations."
      }
    ],
    quickChecks: [{ prompt: "What comes before integration choice?", answer: "Classify whether accumulation is over region, path, or transformed geometry." }, { prompt: "Why include validation checks?", answer: "To catch setup errors before acting on results." }, { prompt: "What makes synthesis useful to coaches?", answer: "Actionable conclusions with clear assumptions." }],
    workedExamples: [{ title: "Three-part case flow", scenario: "Area + transform + path subtasks.", walkthrough: ["Assign correct method to each subtask.", "Compute with explicit checks.", "Merge outputs into one memo."], takeaway: "Method selection is a core analytics skill." }, { title: "Bound error catch", scenario: "Unexpected result magnitude.", walkthrough: ["Recheck region mapping.", "Fix bounds/Jacobian.", "Update interpretation."], takeaway: "Validation protects decision quality." }, { title: "Coach summary", scenario: "Present composite results.", walkthrough: ["Lead with key decision.", "State confidence caveat.", "Link claim to computed metric."], takeaway: "Communication quality controls impact." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "When do you use line integrals?", answer: "Use them when accumulation occurs along a path." },
          { prompt: "Why is Jacobian mandatory in transforms?", answer: "It preserves correct local area scaling after mapping." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "One sanity check for transformed region?", answer: "Integrate one and compare with known geometric area." },
          { prompt: "What should a synthesis memo include?", answer: "Method rationale, key findings, assumptions, and actions." },
          { prompt: "Why classify structure before solving?", answer: "Correct tool selection depends on physical question type." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "What failure mode comes from wrong tool selection?", answer: "You compute precise numbers for the wrong baseball quantity." },
          { prompt: "How do you express uncertainty clearly?", answer: "Tie confidence language to assumptions and data support." }
        ]
      }
    ],
    commonMistakes: ["Choosing familiar method instead of correct one", "Skipping validation", "Delivering calculations without decision framing"],
    lessonSummary: "Synthesis work requires correct method selection, disciplined validation, and baseball-facing communication. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Complete a three-part integral case and write a one-page coach-facing summary.",
    nextLessonBridge: "Next we move from spatial accumulation to temporal dynamics with first-order ODE models.",
    professorNotes: "Grade method-choice rationale as strongly as final numeric results.",
    keyTerms: [{ term: "Method selection", definition: "Choosing the right mathematical operator for question structure." }, { term: "Validation", definition: "Independent checks that test setup/result plausibility." }],
    assessmentItems: [
      {
        id: "sw-1",
        type: "mcq",
        prompt: "In a mixed baseball calculus case, what is the best first step?",
        options: ["Differentiate everything", "Classify question type", "Use polar automatically", "Skip setup and compute"],
        correctAnswer: "Classify question type",
        explanation: "Method choice should follow problem structure."
      },
      {
        id: "sw-2",
        type: "exact",
        prompt: "Name the determinant used for scaling in coordinate transforms.",
        correctAnswer: "jacobian",
        acceptedAnswers: ["jacobian determinant"],
        explanation: "Jacobian handles local scale distortion after transformation."
      },
      {
        id: "sw-3",
        type: "exact",
        prompt: "What integral is used when accumulation follows a trajectory?",
        correctAnswer: "line integral",
        acceptedAnswers: ["path integral"],
        explanation: "Path-based accumulation uses line-integral machinery."
      }
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "multivar-integration-synthesis-memo",
      title: "Summative: Mixed integration coach memo",
      intro:
        "Combine region, transform, and path reasoning into one memo. Self-check with the rubric for method justification and validation evidence.",
      taskPrompt:
        "Outline a three-part baseball analytics case: (1) a double integral or area accumulation question, (2) a coordinate-transformed region, (3) a line integral or work-like quantity along a path. For each part, name the correct operator, one validation check, and merge conclusions into a single recommendation with explicit assumptions.",
    }),
  },
  "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::first-order-odes-for-baseball-change-models": {
    key: "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::first-order-odes-for-baseball-change-models",
    title: "First-Order ODEs For Baseball Change Models",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Differential Equations For Dynamic Systems",
    whyItMatters:
      "Baseball development unfolds through time, so snapshot models are incomplete for planning interventions. First-order ODEs encode rate laws that describe how a metric evolves based on current state and context. This allows analysts to estimate threshold timing, plateau behavior, and responsiveness under different training assumptions. In practice, that means more credible answers to questions like how quickly command can recover, when gains may stall, or how strongly a forcing input should be applied. The framework also supports scenario testing by changing parameters and initial conditions rather than relying on one historical trajectory. Used carefully, first-order dynamics convert qualitative coaching intuition about adaptation speed into explicit, testable models. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students start from verbal baseball statements such as improvement rate proportional to remaining gap and translate them into first-order differential equations. They solve separable and linear examples, apply initial conditions, and compute times to practical thresholds. The opener then asks learners to explain parameter meaning in coaching terms, including what happens if adaptation speed weakens during heavy schedule periods. This connects symbolic solutions to workload-aware planning and helps students distinguish model structure from data-estimation uncertainty.",
    narrativeFlow: ["Translate verbal dynamics to equations.", "Solve common first-order forms.", "Interpret parameters and equilibria.", "Use solutions for timing decisions."],
    objectives: ["Write first-order ODEs from baseball scenarios.", "Solve separable/linear examples.", "Interpret trajectories for coaching plans."],
    prerequisites: ["Derivative as rate", "Basic integration", "Exponential behavior"],
    conceptChunks: [
      {
        heading: "Rate-Law Translation From Baseball Narratives",
        explainLikeCoach:
          "A first-order ODE states current change rate as a function of current state. This matches how coaches talk about adaptation speed, decay, and response to focused training inputs. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "General first-order form y' = f(t,y) defines local evolution. Initial condition y(t0)=y0 selects a unique trajectory under standard existence assumptions."
      },
      {
        heading: "Separable Adaptation Models",
        explainLikeCoach:
          "Gap-closing and saturation stories often produce separable equations, which remain interpretable and useful for scheduling goals in baseball development cycles.",
        formalNote:
          "If y' = p(t)q(y), rewrite as dy/q(y)=p(t)dt, integrate both sides, then apply initial condition to determine constants."
      },
      {
        heading: "Linear Dynamics With External Forcing",
        explainLikeCoach:
          "Program inputs such as targeted drill intensity can be treated as forcing terms layered on natural drift. This helps compare intervention plans over time.",
        formalNote:
          "Linear first-order form y' + a(t)y = b(t) is solved via integrating factor methods, yielding homogeneous decay plus forced response components."
      },
      {
        heading: "Time-To-Threshold Planning Use Case",
        explainLikeCoach:
          "Decision makers often care about when a metric crosses a practical threshold. Solved ODE trajectories provide that time estimate and support contingency planning.",
        formalNote:
          "Set y(t*) equal to target, solve for t*, and report sensitivity to plausible parameter ranges to avoid overconfident scheduling claims."
      }
    ],
    quickChecks: [{ prompt: "What does y' encode?", answer: "Current rate of metric change over time." }, { prompt: "Why do gap models plateau?", answer: "Remaining gap shrinks, reducing rate." }, { prompt: "Practical output of solved ODE?", answer: "Estimated timeline to thresholds or steady states." }],
    workedExamples: [{ title: "Gap model", scenario: "y'=k(M-y).", walkthrough: ["Separate and solve.", "Use initial condition.", "Interpret k and M."], takeaway: "Saturating trajectories emerge naturally." }, { title: "Linear forcing", scenario: "y'+0.2y=1.", walkthrough: ["Use integrating factor.", "Compute solution form.", "Identify steady-state value."], takeaway: "Forcing plus decay gives interpretable dynamics." }, { title: "Time-to-target", scenario: "Solve y(t)=y* for t.", walkthrough: ["Rearrange solution.", "Compute t*.", "Use for plan timing."], takeaway: "ODEs can drive scheduling decisions." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write one saturation ODE form.", answer: "A common form is y prime equals k times C minus y." },
          { prompt: "What does larger k mean?", answer: "It indicates faster adaptation toward the same target." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Solve y'=2y with y(0)=3.", answer: "The solution is three times e to the two t." },
          { prompt: "Why include an initial condition?", answer: "It picks one trajectory from an infinite family." },
          { prompt: "What output is useful for planning staff?", answer: "Compute time needed to cross a practical threshold." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How do you report uncertain threshold time?", answer: "Provide a range based on plausible parameter variation." },
          { prompt: "When might first-order be insufficient?", answer: "Oscillation and lag often require higher-order coupled models." }
        ]
      }
    ],
    commonMistakes: ["Ignoring initial conditions", "Overinterpreting parameters outside context", "Using first-order model for oscillatory dynamics"],
    lessonSummary: "First-order ODEs model baseball change rates and provide interpretable trajectories for intervention timing. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Formulate and solve one first-order baseball change model, then extract a practical threshold time.",
    nextLessonBridge: "Next we model acceleration-driven processes using second-order ODEs.",
    professorNotes: "Demand parameter meanings and plausible ranges alongside every solved equation.",
    keyTerms: [{ term: "First-order ODE", definition: "Differential equation involving first derivative only." }, { term: "Equilibrium", definition: "State where modeled rate of change is zero." }],
    assessmentItems: [
      {
        id: "fo-1",
        type: "mcq",
        prompt: "In y'=k(M-y) for baseball adaptation, what does k primarily control?",
        options: ["Ceiling M", "Convergence speed", "Initial value", "Time direction"],
        correctAnswer: "Convergence speed",
        explanation: "k scales how quickly the state approaches M."
      },
      {
        id: "fo-2",
        type: "exact",
        prompt: "Solve y'=y with y(0)=2.",
        correctAnswer: "2e^t",
        acceptedAnswers: ["2*e^t"],
        explanation: "Exponential growth keeps the initial value as a multiplier."
      },
      {
        id: "fo-3",
        type: "exact",
        prompt: "What is the name of a state where y' equals zero?",
        correctAnswer: "equilibrium",
        acceptedAnswers: ["steady state"],
        explanation: "Zero rate of change indicates equilibrium."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::second-order-odes-for-motion-dynamics": {
    key: "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::second-order-odes-for-motion-dynamics",
    title: "Second-Order ODEs For Motion Dynamics",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Differential Equations For Dynamic Systems",
    whyItMatters:
      "Ball flight and biomechanical responses are acceleration-driven, so first-order dynamics alone can miss crucial behavior like overshoot, damping, and oscillation. Second-order ODEs capture these patterns and therefore provide better language for motion-control decisions in baseball settings. They help analysts interpret whether a system settles quickly, oscillates before stabilizing, or drifts under forcing. This has direct implications for training cadence and injury-aware progression because forcing frequency and damping characteristics can interact in costly ways. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students derive and interpret second-order motion equations, classify damping regimes from characteristic roots, and connect each regime to baseball-relevant response behavior. They compare underdamped oscillation, critical return, and overdamped sluggishness in plain language, then discuss how forcing terms can amplify motion if timing aligns poorly with system frequency. The opener emphasizes model humility by requiring learners to note where simple second-order approximations may fail against nonlinear, coupled human movement.",
    narrativeFlow: ["Interpret second derivatives physically.", "Solve constant-coefficient homogeneous equations.", "Classify damping regimes.", "Discuss forcing and resonance risk."],
    objectives: ["Formulate second-order motion models.", "Solve/classify linear constant-coefficient cases.", "Interpret damping behavior for coaching decisions."],
    prerequisites: ["First-order ODEs", "Characteristic equations", "Acceleration intuition"],
    conceptChunks: [
      {
        heading: "Acceleration Model For Baseball Motion Response",
        explainLikeCoach:
          "Second-order equations model how acceleration responds to state and forcing, which is essential for understanding overshoot and settling behavior in motion systems. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A standard linear form is m y'' + c y' + k y = F(t), combining inertia, damping, restoring effects, and external forcing."
      },
      {
        heading: "Damping Regime Classification By Discriminant",
        explainLikeCoach:
          "Underdamped systems oscillate, critically damped systems return quickly without oscillation, and overdamped systems recover slowly. This classification guides realistic coaching expectations.",
        formalNote:
          "For homogeneous m y'' + c y' + k y = 0, the sign of c^2-4mk determines root type and qualitative dynamics."
      },
      {
        heading: "Forcing Frequency And Amplification Risk",
        explainLikeCoach:
          "External periodic inputs can interact with system dynamics in ways that increase oscillation amplitude. Planning should account for this when designing repeated stimulus schedules.",
        formalNote:
          "Solutions combine homogeneous and particular parts. Near resonance, forcing frequency close to natural frequency can magnify response under low damping."
      },
      {
        heading: "Model Scope Limits In Human Systems",
        explainLikeCoach:
          "Human movement is nonlinear and multi-link coupled, so constant-coefficient second-order models should be treated as local approximations, not universal truths.",
        formalNote:
          "Trustworthy use requires parameter calibration, residual analysis, and explicit acknowledgment of approximation boundaries."
      }
    ],
    quickChecks: [{ prompt: "What does y'' represent?", answer: "Acceleration." }, { prompt: "Which regime oscillates?", answer: "Underdamped." }, { prompt: "What can near-resonant forcing do?", answer: "Amplify response magnitude." }],
    workedExamples: [{ title: "Repeated root case", scenario: "y''+4y'+4y=0.", walkthrough: ["Solve characteristic equation.", "Get repeated root -2.", "Write solution form."], takeaway: "Repeated roots change basis form." }, { title: "Complex roots", scenario: "y''+2y'+5y=0.", walkthrough: ["Find roots -1±2i.", "Write damped sinusoid.", "Interpret decaying oscillation."], takeaway: "Complex roots encode oscillatory decay." }, { title: "Forced intuition", scenario: "y''+y=sin t.", walkthrough: ["Discuss homogeneous + particular parts.", "Highlight resonance concern.", "Tie to stimulus-frequency planning."], takeaway: "External forcing interacts with intrinsic dynamics." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Classify y''+6y'+9y=0.", answer: "This equation is critically damped due to repeated root." },
          { prompt: "What term controls damping strength?", answer: "The coefficient on y prime controls damping." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Solve y''-y=0.", answer: "General solution is C one e to t plus C two e to minus t." },
          { prompt: "Why can simple second-order models fail?", answer: "Real baseball systems are nonlinear and strongly coupled." },
          { prompt: "What should accompany damping classification reports?", answer: "Include parameter assumptions and expected response limitations." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Explain critical damping to a coach.", answer: "It is fastest return without oscillatory overshoot." },
          { prompt: "How reduce resonance risk in practice plans?", answer: "Vary forcing frequency and monitor response amplitude trends." }
        ]
      }
    ],
    commonMistakes: ["Wrong damping classification", "Dropping repeated-root t factor", "Overgeneralizing simplified parameters"],
    lessonSummary: "Second-order ODEs capture acceleration dynamics, damping regimes, and forcing effects relevant to baseball motion systems.",
    synthesisPrompt: "Solve a second-order baseball motion model and interpret damping for training recommendations.",
    nextLessonBridge: "Next we analyze coupled state systems and stability with linear matrix models.",
    professorNotes: "Have students pair each root structure with one sentence of physical interpretation.",
    keyTerms: [{ term: "Second-order ODE", definition: "ODE involving second derivative." }, { term: "Damping ratio behavior", definition: "Qualitative response class based on system parameters." }],
    assessmentItems: [
      {
        id: "so-1",
        type: "mcq",
        prompt: "For m y'' + c y' + k y = 0, which condition gives underdamped baseball motion response?",
        options: ["c^2 > 4mk", "c^2 = 4mk", "c^2 < 4mk", "k = 0"],
        correctAnswer: "c^2 < 4mk",
        explanation: "Negative discriminant yields complex roots and oscillation."
      },
      {
        id: "so-2",
        type: "exact",
        prompt: "Name one basis function for solutions of y''+y=0.",
        correctAnswer: "sin t",
        acceptedAnswers: ["cos t"],
        explanation: "The solution space is spanned by sine and cosine."
      },
      {
        id: "so-3",
        type: "exact",
        prompt: "What is the physical meaning of y'' in motion models?",
        correctAnswer: "acceleration",
        acceptedAnswers: ["second derivative of position"],
        explanation: "Second derivative of position corresponds to acceleration."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::linear-systems-and-stability-intuition": {
    key: "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::linear-systems-and-stability-intuition",
    title: "Linear Systems And Stability Intuition",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Differential Equations For Dynamic Systems",
    whyItMatters:
      "Important baseball variables often evolve together, so separate one-dimensional models miss cross-effects that drive real behavior. Linear systems provide a compact way to represent coupling and to diagnose stability using eigenvalues. This helps staff identify whether a state pair converges, oscillates, or diverges under current assumptions. In practice, that means better monitoring priorities, earlier detection of unstable trends, and clearer rationale for intervention design. The framework is also communicable: phase portraits and mode interpretations allow analysts to explain multi-state behavior without overwhelming nontechnical audiences. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students model coupled state dynamics such as command-recovery interaction and analyze equilibrium behavior through matrix eigenvalues. They classify nodes, saddles, and spirals, then translate each class into baseball risk language. The opener requires both algebraic and visual reasoning: learners compute eigen-structure and verify interpretation with phase trajectories. They finish by recommending a monitoring strategy based on unstable directions and expected response speed. A final reflection asks which mode should trigger immediate intervention during a compressed game schedule.",
    narrativeFlow: ["Form coupled linear systems.", "Interpret matrix entries as self/cross effects.", "Use eigenvalues for stability classification.", "Map outcomes to intervention urgency."],
    objectives: ["Build and analyze 2D linear systems.", "Classify equilibrium stability from eigenvalues.", "Explain coupled-dynamics implications."],
    prerequisites: ["First-order ODEs", "Matrices", "Eigenvalue basics"],
    conceptChunks: [
      {
        heading: "Coupled Matrix Model For Co-Evolving Metrics",
        explainLikeCoach:
          "Linear systems encode how one baseball state can influence another, making interaction explicit and testable rather than hidden in separate regressions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "State model x' = A x uses off-diagonal matrix entries to represent cross-coupling effects between variables."
      },
      {
        heading: "Eigenvalue Signs As Stability Diagnostics",
        explainLikeCoach:
          "Eigenvalues summarize whether trajectories return to equilibrium or drift away. This is a fast, interpretable stability screen for multi-state baseball dynamics.",
        formalNote:
          "Real parts of eigenvalues govern local growth or decay rates near equilibrium in linear autonomous systems."
      },
      {
        heading: "Phase Portraits For Staff Communication",
        explainLikeCoach:
          "Trajectory plots make convergence, spiraling, and divergence visually obvious, helping coaches understand why certain interventions are urgent.",
        formalNote:
          "Two-dimensional linear systems exhibit qualitative classes such as nodes, saddles, and spirals determined by eigen-structure."
      },
      {
        heading: "Intervention Focus On Unstable Modes",
        explainLikeCoach:
          "If one mode is unstable, monitoring and control effort should prioritize that direction because it drives future risk most strongly.",
        formalNote:
          "Stabilization and policy design often target dominant unstable eigen-directions to achieve efficient control."
      }
    ],
    quickChecks: [{ prompt: "What do off-diagonal matrix entries represent?", answer: "Cross-effects between state variables." }, { prompt: "What does positive eigenvalue real part imply?", answer: "Local instability/divergence tendency." }, { prompt: "Why use phase portraits?", answer: "They visualize coupled dynamics clearly for interpretation." }],
    workedExamples: [{ title: "Decoupled baseline", scenario: "A diagonal A matrix.", walkthrough: ["Solve each equation separately.", "Classify each mode.", "Combine trajectory behavior."], takeaway: "Eigenmodes compose system behavior." }, { title: "Saddle detection", scenario: "One positive, one negative eigenvalue.", walkthrough: ["Compute eigenvalues.", "Identify stable/unstable directions.", "Interpret intervention urgency."], takeaway: "Mixed-sign eigenvalues create sensitive systems." }, { title: "Spiral behavior", scenario: "Complex eigenvalues with negative real part.", walkthrough: ["Classify as stable spiral.", "Describe oscillatory convergence.", "Connect to measured state cycles."], takeaway: "Oscillation can coexist with eventual stability." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write generic linear system form.", answer: "Use x prime equals A times x for state vector x." },
          { prompt: "What indicates coupling in matrix A?", answer: "Nonzero off-diagonal entries indicate cross-state influence." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "If eigenvalues are -1 and -3, classify stability.", answer: "This equilibrium is asymptotically stable with node-like behavior." },
          { prompt: "If one eigenvalue has positive real part?", answer: "The equilibrium is unstable in that corresponding mode." },
          { prompt: "Why inspect eigenvectors along with eigenvalues?", answer: "They reveal state directions associated with growth or decay." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How explain a saddle to a coach?", answer: "One direction self-corrects while another direction drifts away." },
          { prompt: "Why pair equations with phase plots?", answer: "Plots make coupled behavior easier to communicate quickly." }
        ]
      }
    ],
    commonMistakes: ["Ignoring coupling terms", "Misreading eigenvalue signs", "Skipping qualitative interpretation"],
    lessonSummary: "Linear systems reveal coupled baseball dynamics, and eigenvalues provide a practical stability diagnostic framework. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Analyze one 2-state linear model and explain its stability implications for monitoring strategy.",
    nextLessonBridge: "Next we solve these dynamics numerically with step-size control and error awareness.",
    professorNotes: "Require students to give both algebraic classification and plain-language stability story.",
    keyTerms: [{ term: "Linear system", definition: "Coupled first-order equations in matrix form." }, { term: "Stability", definition: "Whether trajectories return toward or move away from equilibrium." }],
    assessmentItems: [
      {
        id: "ls-1",
        type: "mcq",
        prompt: "If any eigenvalue has positive real part in a baseball state model, equilibrium is:",
        options: ["Asymptotically stable", "Unstable", "Always periodic", "Neutral by default"],
        correctAnswer: "Unstable",
        explanation: "Positive real part creates exponential growth in that mode."
      },
      {
        id: "ls-2",
        type: "exact",
        prompt: "What matrix entries usually encode coupling between two states?",
        correctAnswer: "off-diagonal",
        acceptedAnswers: ["off diagonal"],
        explanation: "Cross-effects are represented in off-diagonal terms."
      },
      {
        id: "ls-3",
        type: "exact",
        prompt: "What model type is x'=Ax?",
        correctAnswer: "linear system",
        acceptedAnswers: ["linear autonomous system"],
        explanation: "This is the canonical first-order linear matrix system."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::numerical-ode-solvers-and-step-control": {
    key: "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::numerical-ode-solvers-and-step-control",
    title: "Numerical ODE Solvers And Step Control",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Differential Equations For Dynamic Systems",
    whyItMatters:
      "Most baseball dynamic models become too complex for closed-form solutions once realistic forcing, coupling, and nonlinear effects are introduced. Numerical ODE solvers therefore become essential for simulation and planning. However, solver output quality depends heavily on step-size control, stability properties, and tolerance settings. Without these checks, simulation can produce confident but misleading trajectories. This lesson gives students a practical reliability framework so numerical outputs can support decisions rather than distort them. They learn how to compare methods, assess discretization sensitivity, and document solver settings in a way that operations staff can trust. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students run the same baseball ODE with Euler and higher-order methods, then compare trajectories under coarse and fine step sizes. They observe truncation behavior, identify instability symptoms, and apply adaptive step logic that tightens steps in rapidly changing regions. The opener prioritizes interpretability: every plot is paired with a plain-language statement about decision risk if numerical settings are poorly chosen. Learners finish by writing a short report that includes solver configuration and sensitivity findings.",
    narrativeFlow: ["Introduce discrete-time approximation.", "Compare solver accuracy and stability.", "Explain adaptive step-size control.", "Connect numerical error to decision risk."],
    objectives: ["Implement and interpret basic ODE solvers.", "Diagnose step-size error behavior.", "Use adaptive control concepts responsibly."],
    prerequisites: ["ODE formulation", "Basic numerical approximation", "Error concept awareness"],
    conceptChunks: [
      {
        heading: "Discrete Approximation Of Continuous Rate Laws",
        explainLikeCoach:
          "Numerical solvers approximate continuous dynamics through stepwise updates. Smaller steps often improve fidelity but increase runtime, so practical analysis requires balanced configuration. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Euler method uses y_{n+1}=y_n+h f(t_n,y_n). Higher-order methods reduce local truncation error and can improve accuracy per computational effort."
      },
      {
        heading: "Accuracy And Stability Must Be Co-Managed",
        explainLikeCoach:
          "A visually smooth trajectory can still be wrong if step size is too large for the method and system. Stability checks prevent false confidence in simulation outputs.",
        formalNote:
          "Numerical stability regions constrain admissible step sizes, particularly for stiff or rapidly varying dynamics. Method choice and h selection interact."
      },
      {
        heading: "Adaptive Step Size For Efficient Reliability",
        explainLikeCoach:
          "Adaptive solvers shrink h where dynamics are sharp and expand h where dynamics are smooth. This gives better reliability at lower total cost than fixed conservative stepping.",
        formalNote:
          "Embedded formulas estimate local error and update h to satisfy tolerance targets while controlling accepted versus rejected steps."
      },
      {
        heading: "Reporting Numerical Uncertainty Transparently",
        explainLikeCoach:
          "Simulation-based recommendations should disclose solver method, tolerance, and sensitivity checks so coaching staff understands confidence and limitations.",
        formalNote:
          "Numerical uncertainty should be documented alongside model uncertainty; reproducibility requires explicit solver configuration metadata."
      }
    ],
    quickChecks: [{ prompt: "Why reduce step size?", answer: "To lower local truncation error in rapidly changing regions." }, { prompt: "What can large h cause?", answer: "Numerical instability or biased trajectories." }, { prompt: "Purpose of adaptive step control?", answer: "Balance accuracy and runtime by adjusting h dynamically." }],
    workedExamples: [{ title: "Euler one-step", scenario: "Compute first updates for simple y'=f(t,y).", walkthrough: ["Choose h.", "Apply update formula.", "Compare with smaller h result."], takeaway: "Step size materially influences trajectory." }, { title: "Method comparison", scenario: "Euler vs RK-type solver.", walkthrough: ["Run same model/tspan.", "Compare endpoint and error proxy.", "Discuss runtime tradeoff."], takeaway: "Higher-order methods often achieve better accuracy per step." }, { title: "Adaptive logic", scenario: "Tolerance-based step adjustment.", walkthrough: ["Estimate local error.", "Shrink or expand h.", "Track accepted/rejected steps."], takeaway: "Adaptive control targets reliability efficiently." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Write Euler update formula.", answer: "y next equals y current plus h times f of t and y." },
          { prompt: "What does h denote?", answer: "h is the numerical time-step size parameter." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Why compare two step sizes?", answer: "It reveals discretization sensitivity in key baseball outputs." },
          { prompt: "What is one sign of solver instability?", answer: "Unphysical oscillation or blow-up as h increases." },
          { prompt: "Why document tolerance settings?", answer: "They directly affect reliability and reproducibility of results." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How report numerical reliability to coaches?", answer: "Share solver settings and sensitivity range for critical metrics." },
          { prompt: "When is adaptive stepping especially useful?", answer: "It helps when dynamics alternate between smooth and sharp phases." }
        ]
      }
    ],
    commonMistakes: ["Using one coarse step without sensitivity check", "Confusing model error with numerical error", "Hiding solver settings in reports"],
    lessonSummary: "Numerical ODE solvers approximate dynamic baseball models, and step control is central to trustworthy simulation output.",
    synthesisPrompt: "Simulate one baseball ODE with two solvers and summarize step-size sensitivity implications.",
    nextLessonBridge: "Next we integrate multivariable and ODE ideas in a full capstone case.",
    professorNotes: "Require solver configuration disclosure and a brief error-sensitivity note in all submissions.",
    keyTerms: [{ term: "Step size", definition: "Discrete increment used in numerical time integration." }, { term: "Adaptive solver", definition: "Solver that changes step size based on error estimates." }],
    assessmentItems: [
      {
        id: "ns-1",
        type: "mcq",
        prompt: "Why use adaptive step size in baseball ODE simulations?",
        options: ["Avoid derivatives", "Balance error and compute cost", "Force model linearity", "Remove initial conditions"],
        correctAnswer: "Balance error and compute cost",
        explanation: "Adaptive control targets reliability without unnecessary compute."
      },
      {
        id: "ns-2",
        type: "exact",
        prompt: "Euler update uses y_{n+1}=y_n+___",
        correctAnswer: "h f(t_n,y_n)",
        acceptedAnswers: ["h*f(t_n,y_n)"],
        explanation: "Euler adds local slope times step size."
      },
      {
        id: "ns-3",
        type: "exact",
        prompt: "Large-step blow-up in simulation usually indicates what issue?",
        correctAnswer: "numerical instability",
        acceptedAnswers: ["instability"],
        explanation: "Step and method choices can destabilize approximations."
      }
    ]
  },
  "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::differential-equations-capstone-integration": {
    key: "multivariable-calculus-and-differential-equations::differential-equations-for-dynamic-systems::differential-equations-capstone-integration",
    title: "Differential Equations Capstone Integration",
    trackTitle: "Multivariable Calculus And Differential Equations",
    unitTitle: "Differential Equations For Dynamic Systems",
    whyItMatters:
      "Applied baseball analytics requires end-to-end reasoning, not isolated math techniques. A robust dynamic decision pipeline must connect problem framing, model choice, qualitative analysis, numerical verification, and communication. The capstone integrates these steps so students can produce recommendations that are both mathematically grounded and operationally usable. This matters because many failures in practice come from weak links between stages: good equations with poor framing, good simulations with no sensitivity checks, or good computations with unclear action guidance. The capstone builds a repeatable standard for trustworthy dynamic analysis. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Students choose a concrete baseball decision question, define state variables and assumptions, select an ODE or linear-system model, analyze behavior, run numerical sensitivity checks, and deliver a recommendation memo. The opener requires explicit uncertainty handling and monitoring triggers, so conclusions are tied to evidence quality and update cadence. Learners practice distinguishing robust recommendations from fragile ones and learn how to communicate confidence without overselling precision.",
    narrativeFlow: ["Frame capstone decision question.", "Select ODE/system model and justify.", "Analyze stability and simulate numerically.", "Present actionable recommendations with caveats."],
    objectives: ["Integrate ODE concepts into end-to-end workflow.", "Validate model behavior analytically and numerically.", "Communicate results for coaching decisions."],
    prerequisites: ["First-order and second-order ODEs", "Linear-system stability", "Numerical solver fundamentals"],
    conceptChunks: [
      {
        heading: "Decision Question First, Equations Second",
        explainLikeCoach:
          "Strong capstones begin with a specific baseball decision and measurable states. Equations are chosen to serve that question, not the other way around. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Model specification should follow objective, state definitions, forcing assumptions, and decision horizon constraints."
      },
      {
        heading: "Blend Analytic And Numerical Evidence",
        explainLikeCoach:
          "Qualitative stability logic and numerical simulation each reveal different risks. Combining both produces recommendations that are more reliable under realistic scenarios.",
        formalNote:
          "Use equilibrium and eigen diagnostics alongside solver trajectory exploration and sensitivity analysis to validate behavior."
      },
      {
        heading: "Robustness Testing Before Recommendation",
        explainLikeCoach:
          "If conclusions change drastically under small plausible parameter shifts, the recommendation should be framed as conditional rather than definitive.",
        formalNote:
          "Robust outputs remain stable across plausible parameter intervals, initial conditions, and solver discretization settings."
      },
      {
        heading: "Action Memo With Monitoring Triggers",
        explainLikeCoach:
          "Final communication should state what to do now, why, what assumptions were used, and which metrics trigger plan updates.",
        formalNote:
          "Decision memos should connect modeled outputs to operational thresholds, review cadence, and uncertainty disclosures."
      }
    ],
    quickChecks: [{ prompt: "What should come before equation selection?", answer: "A clear baseball decision question and state definition." }, { prompt: "Why combine analytic and numeric methods?", answer: "They provide complementary stability insight and realistic scenario evaluation." }, { prompt: "What makes a capstone recommendation trustworthy?", answer: "Transparent assumptions and robustness checks." }],
    workedExamples: [{ title: "Capstone skeleton", scenario: "Choose one coupled fatigue-performance model.", walkthrough: ["Define variables and goal.", "Analyze local stability.", "Run simulation with sensitivity checks."], takeaway: "Integrated workflow beats isolated calculations." }, { title: "Robustness table", scenario: "Vary key parameter ±10%.", walkthrough: ["Record threshold-time changes.", "Identify fragile conclusions.", "Refine recommendation scope."], takeaway: "Sensitivity defines confidence." }, { title: "Coach memo format", scenario: "Present final recommendation.", walkthrough: ["Lead with action.", "Include rationale and caveats.", "Set monitoring checkpoints."], takeaway: "Communication quality determines adoption." }],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name one capstone decision question.", answer: "Estimate command recovery timeline under workload constraints this month." },
          { prompt: "Why define monitoring triggers?", answer: "They signal when assumptions break and plans need updating." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "List one analytic and one numeric validation step.", answer: "Use stability check analytically and step-size sensitivity numerically." },
          { prompt: "What indicates a fragile recommendation?", answer: "Small parameter changes produce large strategy reversals." },
          { prompt: "What should every capstone memo include?", answer: "Action, rationale, assumptions, uncertainty, and monitoring triggers." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "How do you communicate uncertainty without paralysis?", answer: "Provide a primary plan with bounded alternatives and switch criteria." },
          { prompt: "Why include solver settings in appendices?", answer: "They support reproducibility and trust in computed outputs." }
        ]
      }
    ],
    commonMistakes: ["Starting with equations before decision framing", "Skipping robustness checks", "Providing math without operational monitoring guidance"],
    lessonSummary: "The capstone integrates differential-equation modeling, stability reasoning, and numerical validation into decision-ready baseball analysis.",
    synthesisPrompt: "Produce a complete capstone memo from model framing through robustness-backed recommendation.",
    nextLessonBridge: "This closes the multivariable and differential-equations track and prepares you for advanced systems modeling.",
    professorNotes: "Grade on clarity of question-model alignment, robustness evidence, and actionability of final recommendation.",
    keyTerms: [{ term: "Robustness check", definition: "Test of conclusion stability under plausible variation." }, { term: "Decision memo", definition: "Action-oriented communication of model findings and assumptions." }],
    assessmentItems: [
      {
        id: "cap-1",
        type: "mcq",
        prompt: "What is the best starting point for a baseball dynamics capstone?",
        options: ["Pick favorite equation", "Define decision question and states", "Run solver immediately", "Assume parameters first"],
        correctAnswer: "Define decision question and states",
        explanation: "Model choice should be driven by decision framing."
      },
      {
        id: "cap-2",
        type: "exact",
        prompt: "Name one required reliability test for numerical trajectory outputs.",
        correctAnswer: "step-size sensitivity",
        acceptedAnswers: ["step size sensitivity", "solver sensitivity"],
        explanation: "Discretization sensitivity checks are essential for trust."
      },
      {
        id: "cap-3",
        type: "exact",
        prompt: "What document translates model results into actionable baseball plans?",
        correctAnswer: "decision memo",
        acceptedAnswers: ["recommendation memo"],
        explanation: "Decision memos convert technical output into operational action."
      }
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "multivar-de-capstone-memo",
      title: "Summative: Differential equations capstone memo",
      intro:
        "Integrate modeling, numerical solver choices, and stability language into one decision memo. Rubric-guided self review before submission.",
      taskPrompt:
        "Pick one baseball dynamic system (recovery, command drift, or coupled state pair). Specify states and parameters, summarize stability or threshold findings, document at least one numerical sensitivity (step size or parameter perturbation), and deliver monitoring triggers for staff.",
    }),
  },
};

const TEXTBOOK_PREFIX = "Textbook framing:";

function normalizeLatexDelimiters(text: string): string {
  return text
    .replace(/\$(.+?)\$/g, "\\($1\\)")
    .replace(/\$\$(.+?)\$\$/gs, "\\[$1\\]");
}

function textbookifySentence(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith(TEXTBOOK_PREFIX)) return normalizeLatexDelimiters(trimmed);
  return normalizeLatexDelimiters(`${TEXTBOOK_PREFIX} ${trimmed}`);
}

function ensureInlineDiagramCue(text: string, heading: string): string {
  const normalized = text.replace(/\[(?:Inline Diagram|DIAGRAM):/g, "[Diagram:");
  if (/\[Diagram:[^\]]+\]/.test(normalized)) return normalized;
  return `${normalized} [Diagram: ${heading} conceptual map with labeled variables and transitions.]`;
}

function buildDiagramBlock(heading: string): string {
  return [
    `DiagramTitle: ${heading} - Structured Visualization`,
    "DiagramPurpose: Clarify the governing relationships and decision-relevant geometry in this concept.",
    "DiagramInputs: Primary variables, boundary conditions, and evaluation point used in the concept chunk.",
    "DiagramInsight: Shows how local and global structure support robust baseball decision-making.",
    "DiagramCaption: Formal concept diagram used to connect symbolic representation to coaching interpretation."
  ].join("\n");
}

function ensureFormalDiagramFields(formalNote: string, heading: string): string {
  const cleaned = normalizeLatexDelimiters(
    formalNote
      .replace(/(?:^|\n)Diagram(?:Title|Purpose|Inputs|Insight|Caption):\s*\[Diagram:\s*Dedicated Diagram Placeholder\]\n?/g, "")
      .trim()
  );
  if (/DiagramTitle:\s*/.test(cleaned)) return cleaned;
  return `${cleaned}\n\n${buildDiagramBlock(heading)}`;
}

function rewriteLesson(lesson: LessonDocument): LessonDocument {
  return {
    ...lesson,
    whyItMatters: textbookifySentence(lesson.whyItMatters),
    lessonOpener: textbookifySentence(lesson.lessonOpener),
    narrativeFlow: lesson.narrativeFlow.map(textbookifySentence),
    objectives: lesson.objectives.map(textbookifySentence),
    prerequisites: lesson.prerequisites.map(textbookifySentence),
    conceptChunks: lesson.conceptChunks.map((chunk) => ({
      ...chunk,
      explainLikeCoach: textbookifySentence(ensureInlineDiagramCue(chunk.explainLikeCoach, chunk.heading)),
      formalNote: ensureFormalDiagramFields(textbookifySentence(chunk.formalNote), chunk.heading)
    })),
    quickChecks: lesson.quickChecks.map((item) => ({
      ...item,
      prompt: textbookifySentence(item.prompt),
      answer: textbookifySentence(item.answer)
    })),
    workedExamples: lesson.workedExamples.map((example) => ({
      ...example,
      scenario: textbookifySentence(example.scenario),
      walkthrough: example.walkthrough.map(textbookifySentence),
      takeaway: textbookifySentence(example.takeaway)
    })),
    practiceSets: lesson.practiceSets.map((set) => ({
      ...set,
      prompts: set.prompts.map((prompt) => ({
        ...prompt,
        prompt: textbookifySentence(prompt.prompt),
        answer: textbookifySentence(prompt.answer)
      }))
    })),
    commonMistakes: lesson.commonMistakes.map(textbookifySentence),
    lessonSummary: textbookifySentence(lesson.lessonSummary),
    synthesisPrompt: textbookifySentence(lesson.synthesisPrompt),
    nextLessonBridge: textbookifySentence(lesson.nextLessonBridge),
    professorNotes: textbookifySentence(lesson.professorNotes),
    keyTerms: lesson.keyTerms?.map((term) => ({
      ...term,
      definition: textbookifySentence(term.definition)
    })),
    assessmentItems: lesson.assessmentItems?.map((item) => ({
      ...item,
      prompt: textbookifySentence(item.prompt),
      explanation: textbookifySentence(item.explanation)
    }))
  };
}

export const HAND_AUTHORED_MULTIVAR: Record<string, LessonDocument> = {};
for (const [key, lesson] of Object.entries(HAND_AUTHORED_MULTIVAR_RAW)) {
  HAND_AUTHORED_MULTIVAR[key] = rewriteLesson(lesson);
}
