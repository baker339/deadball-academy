import type { LessonDocument } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

export const HAND_AUTHORED_GEOMETRY: Record<string, LessonDocument> = {
  "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::coordinate-systems-for-baseball-fields": {
    key: "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::coordinate-systems-for-baseball-fields",
    title: "Coordinate Systems For Baseball Fields",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Coordinate Geometry Essentials",
    whyItMatters: "Coordinate systems are the grammar of every baseball map you will build. If two analysts label the same play in two different frames, they can each be internally consistent and still produce contradictory coaching advice. That contradiction is expensive: players hear mixed language, coordinators lose confidence in reports, and postgame meetings stall on notation instead of decisions. This lesson trains you to prevent that failure mode at the source. You will learn to state origin, axis direction, orientation, and unit conventions before any computation, then check whether every coordinate you report is meaningful for the tactical question. The goal is not just to 'get coordinates'; the goal is to build a shared spatial contract that survives handoff from video room to dugout. By the end, you should be able to defend a coordinate model with both mathematical precision and operational clarity. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Why this topic again? (1) New cognitive demand: you now own the full coordinate contract for maps, spray charts, and clip alignment — not just reading a single number pair. (2) Fluency target: state origin, axis direction, and units in one sentence before any plot ships. (3) Link forward: this pass feeds measurement pipelines that must stay consistent when video, Statcast, and hand labels meet.\n\nImagine a spray-chart review where one report places a ball at \\((42, 110)\\) and another places it at \\((-42, 110)\\). Both may come from competent people. The disagreement usually traces to frame definition, not arithmetic. So we begin by slowing down: pick a physically meaningful origin, define positive directions, and record conventions in writing. From there we represent baseball landmarks as geometric objects and encode them with coordinates. Once the frame is explicit, formulas become trustworthy and communication becomes cleaner. The discipline you practice here is simple but powerful: define first, compute second, interpret third.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Anchor Frame At Home Plate",
        explainLikeCoach: "Start every chart by fixing the field frame in language everyone can repeat: origin at home plate, positive \\(x\\) toward first base, positive \\(y\\) toward center field. If this sentence is not explicit, every later number is fragile. Coaches do not need a proof; they need confidence that coordinates describe the same space from bullpen report to postgame clip. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Let each location be represented as \\((x, y)\\) in a declared Cartesian frame with units in feet. Record orientation, handedness assumptions, and axis directions as immutable metadata before deriving any target quantity.",
        equation: "\\[(x, y) \\in \\mathbb{R}^2\\]",
        figure: {
          src: "/curriculum/home-plate-coordinate-frame.svg",
          alt: "Infield schematic with home plate origin and x-axis toward first base, y-axis toward center field.",
        },
      },
      {
        heading: "Translate The Coaching Question Into Coordinates",
        explainLikeCoach: "Once the frame is stable, convert a baseball question into a coordinate question. For example, 'Should the shortstop shade up the middle?' becomes 'How does expected contact density shift relative to current shortstop \\((x, y)\\)?' (inline diagram placeholder: [Inline Diagram - Decision question mapped to points and regions]). That translation prevents busy math that does not influence positioning.",
        formalNote: "Define a measurable target function \\(f: \\mathbb{R}^2 \\to \\mathbb{R}\\) or \\(f: \\mathbb{R}^2 \\to \\mathbb{R}^2\\), identify observed versus inferred inputs, and state uncertainty sources from tagging, camera calibration, or sampling limits. Dedicated diagram placeholder: [Dedicated Diagram - Tactical prompt converted to coordinate target].",
      },
      {
        heading: "Validate Coordinate Outputs Before Recommendation",
        explainLikeCoach: "Treat validation as part of coaching, not cleanup. If a computed location implies a fielder is standing outside playable context, stop and inspect assumptions first (inline diagram placeholder: [Inline Diagram - Plausibility check with valid and invalid points]). Good analysts catch bad geometry early by asking, 'Does this location make baseball sense?'",
        formalNote: "Run dimensional checks, boundary checks on known landmarks, and at least one independent recomputation path. If \\(\\Delta\\) between methods exceeds tolerance, classify the mismatch as frame error, data error, or model error before reporting. Dedicated diagram placeholder: [Dedicated Diagram - Validation workflow with pass/fail branch].",
      },
      {
        heading: "Communicate Coordinates As Decisions",
        explainLikeCoach: "A coordinate is useful only when tied to an action: move, hold, or watch for more evidence. State the recommendation in plain language and then back it with the coordinate rationale (inline diagram placeholder: [Inline Diagram - Coordinate output to coaching cue]). This keeps the room focused on choices, not symbol juggling.",
        formalNote: "Report values with units, confidence interval or tolerance, and valid context window. Distinguish measurement from policy: first state what geometry shows, then state what staff should do. Dedicated diagram placeholder: [Dedicated Diagram - Report template with value, uncertainty, and action].",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Coordinate Systems For Baseball Fields trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Coordinate Systems For Baseball Fields" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Coordinate Systems For Baseball Fields" },
      {
        term: "Physics track parallel",
        definition: "Baseball Physics Foundations revisits coordinate frames with the same title, emphasizing ball-flight modeling and verification habits.",
        lessonTitle: "Coordinate Systems For Baseball Fields",
        lessonPath:
          "/learn/library/baseball-physics-foundations/geometry-of-the-field-and-ball-flight/coordinate-systems-for-baseball-fields",
      },
    ],
    assessmentItems: [
      {
        id: "geo-1-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-1-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-1-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::distance-formula-and-baseline-measurement": {
    key: "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::distance-formula-and-baseline-measurement",
    title: "Distance Formula And Baseline Measurement",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Coordinate Geometry Essentials",
    whyItMatters: "Distance is where geometry becomes accountability. When an outfielder's route is inefficient, the tape can be persuasive but vague; distance computations make the discussion concrete. This lesson teaches you to measure path length in a way that separates route choice from arm strength and luck. That distinction matters for coaching: if extra distance caused a late throw, training should target route discipline, not just throwing mechanics. You will practice converting field locations into quantitative lengths, comparing candidate paths, and interpreting the difference in baseball terms. The end goal is not merely to compute \\(d\\); it is to justify why one route is operationally better given context and uncertainty. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Suppose the ball is fielded in left and the play develops at third. Two relay options appear similar on video, but one arrives late. Distance analysis helps explain why. We encode each waypoint as coordinates, compute candidate path lengths, and compare direct versus relay structures under the same frame assumptions. When the arithmetic and the eye test agree, trust grows. When they disagree, the disagreement becomes a useful diagnostic instead of a debate.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Model Baseline Lengths With Coordinates",
        explainLikeCoach:
          "Distance starts with clean point labels: where did the play begin, where did it end, and what intermediate touchpoints matter? If those anchors are vague, the final comparison is noise. Name each point in plain baseball language before writing symbols. Use the figure as a schematic reminder that distance is computed in one declared field frame. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For points \\(P_1=(x_1,y_1)\\) and \\(P_2=(x_2,y_2)\\), Euclidean distance is computed in consistent units and frame orientation. Use feet throughout and avoid mixing camera-normalized coordinates with field coordinates.",
        equation: "\\[d(P_1,P_2)=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\]",
        figure: {
          src: "/curriculum/distance-two-points-field.svg",
          alt: "Simplified infield with two labeled points and a segment showing straight-line distance d between them.",
        },
      },
      {
        heading: "Compare Direct And Relay Paths",
        explainLikeCoach: "Coaches care about 'which route gets the ball there on time.' Translate that into path sums: direct throw length versus relay-leg total (inline diagram placeholder: [Inline Diagram - Direct path vs two-leg relay]). The comparison turns a subjective route debate into measurable tradeoffs.",
        formalNote: "Model candidate route length as \\(L=\\sum_i d(P_i,P_{i+1})\\). Keep route definitions fixed across comparisons so you are testing geometry, not changing assumptions mid-analysis. Dedicated diagram placeholder: [Dedicated Diagram - Piecewise path decomposition].",
      },
      {
        heading: "Validate Distance Findings With Field Reality",
        explainLikeCoach: "A mathematically longer route can still work if transfer speed is elite, so distance is necessary but not isolated. Validate with context checks: expected release quality, exchange time, and game state (inline diagram placeholder: [Inline Diagram - Distance result with context flags]). This keeps your conclusion honest and coachable.",
        formalNote: "Perform sensitivity checks on key coordinates and bound likely distance error by perturbing inputs within measurement tolerance. If relative ordering of routes flips under small perturbations, mark recommendation as low confidence. Dedicated diagram placeholder: [Dedicated Diagram - Sensitivity band around route lengths].",
      },
      {
        heading: "Present Distance As Actionable Guidance",
        explainLikeCoach: "Finish with one sentence a coach can use immediately: which route to prioritize, when to deviate, and why (inline diagram placeholder: [Inline Diagram - Recommendation callout on route map]). If players can repeat the cue on the next rep, your geometry did its job.",
        formalNote: "Report \\(\\Delta L\\) between routes, unit context, uncertainty note, and decision threshold. Separate measured geometry from coaching policy so future staff can reinterpret strategy without recomputing fundamentals. Dedicated diagram placeholder: [Dedicated Diagram - Decision template for route selection].",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Distance Formula And Baseline Measurement trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Distance Formula And Baseline Measurement" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Distance Formula And Baseline Measurement" },
    ],
    assessmentItems: [
      {
        id: "geo-2-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-2-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-2-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::midpoints-segments-and-position-landmarks": {
    key: "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::midpoints-segments-and-position-landmarks",
    title: "Midpoints, Segments, And Position Landmarks",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Coordinate Geometry Essentials",
    whyItMatters: "Midpoints and segment partitions give staff a stable way to choose landmarks between competing threats. In defensive planning, you are often asked to stand 'between' two tendencies, but that phrase is too vague unless quantified. This lesson turns that vague instruction into coordinate procedures that players can trust and analysts can defend. You will compute midpoint anchors, interpret what those anchors mean in context, and adjust them when risk is asymmetric. The practical value is repeatability: if a spray profile changes, your landmark method adapts without reinventing the full model. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Picture two high-frequency contact zones that keep splitting your shortstop's attention. A coach asks, 'Where is the true neutral start point?' We represent both zones as points and compute the midpoint as a first-pass landmark. Then we ask whether game context justifies shifting away from that geometric center. This sequence builds both numerical clarity and tactical flexibility.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Use Midpoint Landmarks For Alignment",
        explainLikeCoach: "When two threats are equally weighted, the midpoint gives a defensible neutral start. Tell players this is not guesswork; it is the average of two known locations (inline diagram placeholder: [Inline Diagram - Midpoint between two hot zones]). Starting from that anchor makes later adjustments intentional instead of reactive. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "For endpoints \\(A=(x_1,y_1)\\) and \\(B=(x_2,y_2)\\), midpoint \\(M\\) is the component-wise mean in the same coordinate frame and units. Dedicated diagram placeholder: [Dedicated Diagram - Segment AB with midpoint M].",
        equation: "\\[M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)\\]",
      },
      {
        heading: "Partition Segments For Tactical Bias",
        explainLikeCoach: "Baseball is rarely symmetric. If one zone is more dangerous, shift the landmark along the segment toward that risk (inline diagram placeholder: [Inline Diagram - Segment split with weighted bias]). This teaches players a repeatable rule for 'shade more' without vague language.",
        formalNote: "Use internal division with ratio \\(r:s\\): \\(P=\\left(\\frac{sx_1+rx_2}{r+s},\\frac{sy_1+ry_2}{r+s}\\right)\\). Select \\(r,s\\) from explicit tactical priorities, not intuition alone. Dedicated diagram placeholder: [Dedicated Diagram - Ratio partition on segment].",
      },
      {
        heading: "Validate Landmark Robustness",
        explainLikeCoach: "A good landmark should stay useful across small data shifts. Move each input point slightly and see whether the recommended start point changes too much (inline diagram placeholder: [Inline Diagram - Landmark stability under perturbation]). If it swings wildly, simplify the rule for game use.",
        formalNote: "Conduct perturbation analysis on endpoint coordinates and measure displacement \\(\\|\\Delta M\\|\\) or \\(\\|\\Delta P\\|\\). Large sensitivity indicates unstable guidance and should trigger coarser tactical bins. Dedicated diagram placeholder: [Dedicated Diagram - Sensitivity envelope around midpoint].",
      },
      {
        heading: "Explain Landmark Choices To Staff",
        explainLikeCoach: "Report not just where to stand, but why that landmark was chosen and when it should shift (inline diagram placeholder: [Inline Diagram - Landmark plus shift trigger]). Players execute better when they understand the trigger conditions.",
        formalNote: "Communicate coordinate landmark, weighting logic, and override conditions in one concise decision statement. Archive formulas and assumptions so updates remain comparable series to series. Dedicated diagram placeholder: [Dedicated Diagram - Landmark communication card].",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Midpoints, Segments, And Position Landmarks trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Midpoints, Segments, And Position Landmarks" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Midpoints, Segments, And Position Landmarks" },
    ],
    assessmentItems: [
      {
        id: "geo-3-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-3-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-3-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::slope-as-directional-change-in-field-context": {
    key: "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::slope-as-directional-change-in-field-context",
    title: "Slope As Directional Change In Field Context",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Coordinate Geometry Essentials",
    whyItMatters: "Slope converts movement direction into a number you can compare across reps. In fielding and baserunning analysis, this helps distinguish efficient directional commitment from drift that costs time. Without a clear slope convention, two clips that look similar can produce conflicting labels and poor coaching follow-through. This lesson builds a disciplined interpretation of rise-over-run in baseball coordinates, including vertical-line edge cases and sign meaning. By the end, you should be able to read slope as tactical intent, not just algebra. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "A first step can be aggressive, neutral, or wasteful, and slope helps quantify the difference. We take two tracked points, compute directional change, and interpret both magnitude and sign in the declared frame. Then we test whether that direction matches the intended route objective. This process links a familiar formula to real movement decisions.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Read Direction Through Slope",
        explainLikeCoach: "Slope tells you how aggressively movement rises toward the outfield direction for each unit of lateral change (inline diagram placeholder: [Inline Diagram - Rise and run on player path]). Teach it as direction language first, equation second. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Given points \\(P_1=(x_1,y_1)\\), \\(P_2=(x_2,y_2)\\), slope is defined when \\(x_2\\neq x_1\\). Preserve sign and do not discard negative values; sign encodes directional intent in the declared frame. Dedicated diagram placeholder: [Dedicated Diagram - Coordinate path with rise/run triangle].",
        equation: "\\[m=\\frac{y_2-y_1}{x_2-x_1}\\]",
      },
      {
        heading: "Interpret Slope In Baseball Context",
        explainLikeCoach: "A number like \\(m=2\\) means very different things depending on role and objective. Translate slope into route language: steep toward depth, shallow toward line, or cross-step drift (inline diagram placeholder: [Inline Diagram - Multiple paths with labeled slopes]). This keeps analysis grounded in movement cues.",
        formalNote: "Map slope intervals to tactical classes via explicit thresholds and document those thresholds per position group. Avoid transferring thresholds between contexts without recalibration. Dedicated diagram placeholder: [Dedicated Diagram - Slope bands mapped to route classes].",
      },
      {
        heading: "Handle Undefined And Noisy Cases",
        explainLikeCoach: "Vertical movement segments can break naive slope workflows. When run is near zero, do not force a misleading huge slope; classify it as near-vertical and continue (inline diagram placeholder: [Inline Diagram - Vertical segment edge case]). This prevents false alarms in reports.",
        formalNote: "If \\(|x_2-x_1|<\\varepsilon\\), mark slope as undefined or treat direction with angle methods. Use smoothing or windowed estimates for noisy tracking points before classifying route direction. Dedicated diagram placeholder: [Dedicated Diagram - Edge-case handling decision tree].",
      },
      {
        heading: "Report Directional Findings Clearly",
        explainLikeCoach: "State what the slope implies for action: keep, adjust, or monitor. Players need directional cues, not abstract fractions (inline diagram placeholder: [Inline Diagram - Slope result to movement cue]).",
        formalNote: "Publish slope value or class, confidence qualifier, and coaching implication in one compact statement. Include edge-case rules so downstream users do not reinterpret undefined scenarios inconsistently. Dedicated diagram placeholder: [Dedicated Diagram - Communication format for slope analysis].",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Slope As Directional Change In Field Context trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Slope As Directional Change In Field Context" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Slope As Directional Change In Field Context" },
    ],
    assessmentItems: [
      {
        id: "geo-4-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-4-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-4-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::line-equations-for-defensive-alignment-paths": {
    key: "geometry-foundations-for-baseball-context::coordinate-geometry-essentials::line-equations-for-defensive-alignment-paths",
    title: "Line Equations For Defensive Alignment Paths",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Coordinate Geometry Essentials",
    whyItMatters: "Line equations let you encode repeatable positioning lanes instead of vague verbal targets. In defensive work, staff often says 'work through this lane,' but execution improves when that lane is defined mathematically and visualized consistently. This lesson teaches how to construct, interpret, and communicate line models so multiple analysts and coaches describe the same path. You will connect slope and intercept to concrete field meaning, then test whether a proposed lane matches realistic movement constraints. The payoff is consistency: pregame plans, in-game adjustments, and postgame review all speak the same geometric language. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Take a common scenario: you want an outfielder to attack through a preferred pursuit lane rather than drift. We build a line model for that lane, inspect whether tracked movement stays near it, and convert deviations into coaching cues. The method is simple, but the discipline is in explicit assumptions and clear interpretation. A line equation becomes valuable only when everyone in the room understands what each parameter means on the field.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Write Repeatable Defensive Lanes",
        explainLikeCoach: "A lane is a line with baseball intent. Define where the lane should cross a known reference and how sharply it should rise across the field. This converts a verbal cue into a repeatable geometric target. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Model lane as \\(y=mx+b\\) in a declared coordinate frame; \\(m\\) controls direction and \\(b\\) sets vertical offset at \\(x=0\\). Keep units and axis orientation explicit to preserve comparability across reports.",
        equation: "\\[y=mx+b\\]",
        figure: {
          src: "/curriculum/defensive-lane-line.svg",
          alt: "Schematic baseball outfield with a straight pursuit lane overlaid as a line on a simplified field map.",
        },
      },
      {
        heading: "Fit Lines From Observed Movement",
        explainLikeCoach: "You can diagnose discipline by comparing observed movement points to the target lane. If points consistently drift to one side, the lane cue or execution needs adjustment (inline diagram placeholder: [Inline Diagram - Observed points vs target line]).",
        formalNote: "Estimate lane deviation with signed residuals \\(r_i=y_i-(mx_i+b)\\) and summarize bias and spread over relevant play windows. Use consistent sampling windows before comparing athletes or games. Dedicated diagram placeholder: [Dedicated Diagram - Residual interpretation for lane adherence].",
      },
      {
        heading: "Validate Lane Practicality",
        explainLikeCoach: "Not every mathematically neat line is playable. Check that the lane respects reaction time, acceleration limits, and likely batted-ball shapes (inline diagram placeholder: [Inline Diagram - Practical vs impractical lane]). This protects players from impossible directives.",
        formalNote: "Constrain candidate lines by feasible speed and reachable region envelopes. Reject models that imply systematically unreachable coordinates under realistic kinematic bounds. Dedicated diagram placeholder: [Dedicated Diagram - Feasibility envelope around lane equation].",
      },
      {
        heading: "Communicate Line-Based Adjustments",
        explainLikeCoach: "End with direct coaching language: 'start here, enter through this lane, correct if you cross this boundary' (inline diagram placeholder: [Inline Diagram - Lane cue with correction boundary]). Clear line-based cues improve repetition quality.",
        formalNote: "Report lane equation, tolerance band, and correction trigger conditions in a single operational block. Preserve model assumptions so next-game tuning can adjust parameters without rewriting the framework. Dedicated diagram placeholder: [Dedicated Diagram - Staff handoff card for lane model].",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Line Equations For Defensive Alignment Paths trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Line Equations For Defensive Alignment Paths" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Line Equations For Defensive Alignment Paths" },
    ],
    assessmentItems: [
      {
        id: "geo-5-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-5-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-5-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "geo-unit-1-lane-memo",
      title: "Summative: Defensive lane memo (unit closer)",
      intro:
        "Close Coordinate Geometry Essentials with a staff-ready artifact. Self-grade with the rubric before sharing; nothing here is auto-submitted.",
      taskPrompt:
        "Define a coordinate frame for one outfield quadrant, write a line equation for a pursuit lane (slope-intercept or point-slope), add a tolerance band in words, and run two verification checks (for example residual sign pattern and one boundary point). End with one coaching sentence that states when to abandon the lane cue.",
    }),
  },

  "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::angle-measure-conventions-for-motion-analysis": {
    key: "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::angle-measure-conventions-for-motion-analysis",
    title: "Angle Measure Conventions For Motion Analysis",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Angles, Triangles, And Measurement",
    whyItMatters: "This lesson matters because angle conventions for motion interpretation sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is disagreement over launch and approach angle signs across tracking tools. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around clockwise vs counterclockwise sign conventions in swing-plane review. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as theta measured from positive x-axis, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Standardize Angle Sign Conventions",
        explainLikeCoach: "Standardize Angle Sign Conventions starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[\\theta\\ \\text{measured from the positive }x\\text{-axis}\\]",
      },
      {
        heading: "Connect Angle Measure Conventions For Motion Analysis To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Angle Measure Conventions For Motion Analysis Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Angle Measure Conventions For Motion Analysis For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Angle Measure Conventions For Motion Analysis trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Angle Measure Conventions For Motion Analysis" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Angle Measure Conventions For Motion Analysis" },
    ],
    assessmentItems: [
      {
        id: "geo-6-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-6-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-6-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::triangle-similarity-in-camera-and-field-scaling": {
    key: "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::triangle-similarity-in-camera-and-field-scaling",
    title: "Triangle Similarity In Camera And Field Scaling",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Angles, Triangles, And Measurement",
    whyItMatters: "This lesson matters because triangle similarity for camera-to-field scaling sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is converting pixel observations into field distances without overfitting. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around using known baseline to calibrate camera scale. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as a1/a2 = b1/b2, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Scale Video Using Similar Triangles",
        explainLikeCoach: "Scale Video Using Similar Triangles starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[\\frac{a_1}{a_2} = \\frac{b_1}{b_2}\\]",
      },
      {
        heading: "Connect Triangle Similarity In Camera And Field Scaling To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Triangle Similarity In Camera And Field Scaling Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Triangle Similarity In Camera And Field Scaling For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Triangle Similarity In Camera And Field Scaling trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Triangle Similarity In Camera And Field Scaling" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Triangle Similarity In Camera And Field Scaling" },
    ],
    assessmentItems: [
      {
        id: "geo-7-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-7-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-7-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::right-triangle-geometry-for-component-thinking": {
    key: "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::right-triangle-geometry-for-component-thinking",
    title: "Right Triangle Geometry For Component Thinking",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Angles, Triangles, And Measurement",
    whyItMatters: "This lesson matters because right-triangle decomposition of movement sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is separating straight-line speed from lateral drift in route coaching. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around breaking pursuit vector into x and y components. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as c^2 = a^2 + b^2, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Decompose Motion Into Components",
        explainLikeCoach: "Decompose Motion Into Components starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[c^2 = a^2 + b^2\\]",
      },
      {
        heading: "Connect Right Triangle Geometry For Component Thinking To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Right Triangle Geometry For Component Thinking Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Right Triangle Geometry For Component Thinking For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Right Triangle Geometry For Component Thinking trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Right Triangle Geometry For Component Thinking" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Right Triangle Geometry For Component Thinking" },
    ],
    assessmentItems: [
      {
        id: "geo-8-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-8-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-8-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::law-of-sines-and-law-of-cosines-in-stadium-problems": {
    key: "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::law-of-sines-and-law-of-cosines-in-stadium-problems",
    title: "Law Of Sines And Law Of Cosines In Stadium Problems",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Angles, Triangles, And Measurement",
    whyItMatters: "This lesson matters because oblique triangle solving in stadium geometry sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is estimating difficult wall and relay angles from limited measurements. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around triangulating distance and angle from two known observer points. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as c^2 = a^2 + b^2 - 2ab cos(C), test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Solve Oblique Triangles In Stadiums",
        explainLikeCoach: "Solve Oblique Triangles In Stadiums starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[c^2 = a^2 + b^2 - 2ab\\cos(C)\\]",
      },
      {
        heading: "Connect Law Of Sines And Law Of Cosines In Stadium Problems To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Law Of Sines And Law Of Cosines In Stadium Problems Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Law Of Sines And Law Of Cosines In Stadium Problems For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Law Of Sines And Law Of Cosines In Stadium Problems trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Law Of Sines And Law Of Cosines In Stadium Problems" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Law Of Sines And Law Of Cosines In Stadium Problems" },
    ],
    assessmentItems: [
      {
        id: "geo-9-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-9-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-9-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::geometric-proof-mindset-for-model-trust": {
    key: "geometry-foundations-for-baseball-context::angles-triangles-and-measurement::geometric-proof-mindset-for-model-trust",
    title: "Geometric Proof Mindset For Model Trust",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Angles, Triangles, And Measurement",
    whyItMatters: "This lesson matters because proof-style reasoning for model credibility sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is defending geometric recommendations during high-stakes staff review. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around showing why a claimed alignment relation must hold. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as if A => B and B => C then A => C, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Prove Claims Before Deployment",
        explainLikeCoach: "Prove Claims Before Deployment starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[(A \\Rightarrow B)\\ \\wedge\\ (B \\Rightarrow C)\\ \\Rightarrow\\ (A \\Rightarrow C)\\]",
      },
      {
        heading: "Connect Geometric Proof Mindset For Model Trust To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Geometric Proof Mindset For Model Trust Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Geometric Proof Mindset For Model Trust For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Geometric Proof Mindset For Model Trust trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Geometric Proof Mindset For Model Trust" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Geometric Proof Mindset For Model Trust" },
    ],
    assessmentItems: [
      {
        id: "geo-10-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-10-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-10-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::circle-equations-and-radial-interpretations": {
    key: "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::circle-equations-and-radial-interpretations",
    title: "Circle Equations And Radial Interpretations",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Circles, Arcs, And Curvature",
    whyItMatters: "This lesson matters because circle equations and radial interpretation sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is mapping equal-distance coverage regions around defenders. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around center-radius model for pre-pitch coverage envelope. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as (x-h)^2 + (y-k)^2 = r^2, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Model Radial Coverage With Circles",
        explainLikeCoach: "Model Radial Coverage With Circles starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[(x-h)^2 + (y-k)^2 = r^2\\]",
      },
      {
        heading: "Connect Circle Equations And Radial Interpretations To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Circle Equations And Radial Interpretations Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Circle Equations And Radial Interpretations For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Circle Equations And Radial Interpretations trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Circle Equations And Radial Interpretations" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Circle Equations And Radial Interpretations" },
    ],
    assessmentItems: [
      {
        id: "geo-11-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-11-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-11-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::arc-length-curvature-and-outfield-wall-geometry": {
    key: "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::arc-length-curvature-and-outfield-wall-geometry",
    title: "Arc Length, Curvature, And Outfield Wall Geometry",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Circles, Arcs, And Curvature",
    whyItMatters: "This lesson matters because arc length and curvature at outfield walls sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is explaining why similar straight-line distances can feel different near curved walls. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around comparing chord shortcut vs wall-following route. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as s = r theta, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Quantify Wall Curvature Effects",
        explainLikeCoach: "Quantify Wall Curvature Effects starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[s = r\\theta\\]",
      },
      {
        heading: "Connect Arc Length, Curvature, And Outfield Wall Geometry To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Arc Length, Curvature, And Outfield Wall Geometry Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Arc Length, Curvature, And Outfield Wall Geometry For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Arc Length, Curvature, And Outfield Wall Geometry trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Arc Length, Curvature, And Outfield Wall Geometry" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Arc Length, Curvature, And Outfield Wall Geometry" },
    ],
    assessmentItems: [
      {
        id: "geo-12-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-12-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-12-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::sector-area-and-angular-coverage": {
    key: "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::sector-area-and-angular-coverage",
    title: "Sector Area And Angular Coverage",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Circles, Arcs, And Curvature",
    whyItMatters: "This lesson matters because sector area for angular coverage sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is estimating field territory controlled by a given reaction cone. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around coverage cone from center fielder start point. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as A = (theta/2)r^2, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Measure Coverage Cones With Sectors",
        explainLikeCoach: "Measure Coverage Cones With Sectors starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[A = \\frac{\\theta}{2} r^2\\]",
      },
      {
        heading: "Connect Sector Area And Angular Coverage To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Sector Area And Angular Coverage Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Sector Area And Angular Coverage For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Sector Area And Angular Coverage trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Sector Area And Angular Coverage" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Sector Area And Angular Coverage" },
    ],
    assessmentItems: [
      {
        id: "geo-13-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-13-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-13-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::chord-vs-arc-interpretation-pitfalls": {
    key: "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::chord-vs-arc-interpretation-pitfalls",
    title: "Chord Vs Arc Interpretation Pitfalls",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Circles, Arcs, And Curvature",
    whyItMatters: "This lesson matters because distinguishing chord and arc interpretations sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is mistaking direct throw distance for wall-following running distance. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around comparing straight skip throw to curving pursuit path. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as chord = 2r sin(theta/2), test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Separate Chord And Arc Meanings",
        explainLikeCoach: "Separate Chord And Arc Meanings starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[\\mathrm{chord} = 2r\\sin\\left(\\frac{\\theta}{2}\\right)\\]",
      },
      {
        heading: "Connect Chord Vs Arc Interpretation Pitfalls To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Chord Vs Arc Interpretation Pitfalls Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Chord Vs Arc Interpretation Pitfalls For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Chord Vs Arc Interpretation Pitfalls trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Chord Vs Arc Interpretation Pitfalls" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Chord Vs Arc Interpretation Pitfalls" },
    ],
    assessmentItems: [
      {
        id: "geo-14-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-14-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-14-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
  },

  "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::geometry-foundations-synthesis-lab": {
    key: "geometry-foundations-for-baseball-context::circles-arcs-and-curvature::geometry-foundations-synthesis-lab",
    title: "Geometry Foundations Synthesis Lab",
    trackTitle: "Geometry Foundations For Baseball Context",
    unitTitle: "Circles, Arcs, And Curvature",
    whyItMatters: "This lesson matters because integrated geometric decision workflow sits at the point where raw tracking data becomes baseball action. A staff can collect thousands of points, but if the geometric interpretation is loose, recommendations become noise dressed up as certainty. In this topic, the recurring operational pain is combining coordinate, triangle, and circle tools in one game-planning workflow. When that pain is unresolved, players receive mixed cues, analysts lose credibility, and postgame review becomes an argument over notation instead of baseball development. The fix is disciplined geometric modeling: define objects, define assumptions, compute with the right relationship, and report the result in language that survives cross-department handoff. We treat geometry as a decision system rather than a worksheet. Every quantity must connect to a practical choice: where to stand, when to move, what route to prefer, and what uncertainty should limit confidence. By the end of the lesson, students should be able to justify not only the number they computed, but also why that number is the right number for the decision context in front of them. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener: "Consider a pregame meeting built around full defensive planning audit from spray map to coverage recommendation. At first glance, the numbers may look straightforward, yet two capable analysts can still disagree because they encoded the scene with different geometric assumptions. One may choose a different origin, one may mix angle conventions, and another may apply a formula that matches the shape poorly. Those are not cosmetic errors. They can flip a conclusion about defensive depth, relay aggressiveness, or positioning priority. To avoid that drift, we make the method explicit: represent the baseball scene with precise objects, map those objects to equations such as multi-step geometric model, test the output against field intuition, then convert it into a staff-facing recommendation. We also document caveats so decisions stay honest under pressure. This framing turns geometry into a repeatable operational habit. It lets a coordinator revisit the same play next month, with a different opponent and camera feed, and still reason from the same mathematical spine instead of rebuilding from scratch each time.",
    narrativeFlow: [
      "Define geometric frame and assumptions for the baseball situation.",
      "Map the tactical question to measurable geometric quantities.",
      "Compute and verify with boundary and plausibility checks.",
      "Translate result into a decision-oriented coaching recommendation.",
    ],
    objectives: [
      "Represent the lesson scenario with correct geometric objects and conventions.",
      "Compute a decision-relevant geometric quantity and justify method choice.",
      "Communicate result, confidence limits, and tactical implications clearly.",
    ],
    prerequisites: [
      "Comfort with ordered pairs, length, and angle language.",
      "Basic algebra manipulation for formulas and units.",
      "Willingness to state assumptions before calculation.",
    ],
    conceptChunks: [
      {
        heading: "Integrate Geometry Into One Workflow",
        explainLikeCoach: "Integrate Geometry Into One Workflow starts the lesson because setup choices drive downstream trust. Before calculating anything, name the geometric object for each baseball element: points for landmarks, segments for direct routes, rays for directional intentions, and regions for coverage claims. Then state the coordinate convention aloud so everyone in the room can audit the same frame. This habit slows the first minute of work but saves hours of cleanup later because most disagreements trace back to setup ambiguity, not advanced algebra. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote: "Formally define variables, units, and constraints before deriving target values. A complete setup includes domain restrictions, orientation conventions, and assumptions about planarity or approximation error. If those definitions shift between innings or data sources, outputs are not directly comparable. Treat setup metadata as part of the model artifact, not optional commentary, so geometric conclusions remain reproducible and reviewable.",
        equation: "\\[\\text{multi-step geometric model}\\]",
      },
      {
        heading: "Connect Geometry Foundations Synthesis Lab To Decisions",
        explainLikeCoach: "After setup, translate the coaching question into one measurable target. Coaches rarely ask for 'geometry'; they ask whether an adjustment is justified. Pick the quantity that answers that decision directly, then choose the relationship that preserves baseball meaning. When students skip this translation and compute whatever is easiest, they can produce mathematically clean values that are tactically irrelevant.",
        formalNote: "Define the target metric as an explicit function of primitive geometric measurements and note which inputs are observed versus inferred. Specify whether the relation is linear, trigonometric, or piecewise and include uncertainty considerations for each source variable. This decomposition clarifies error propagation and makes it easier to debug model drift when new tracking feeds or park contexts are introduced.",
      },
      {
        heading: "Validate Geometry Foundations Synthesis Lab Outputs",
        explainLikeCoach: "Verification is a baseball skill, not a classroom extra. Run a quick magnitude check, test at least one boundary case, and compare with an alternate method when available. If results disagree, do not patch with rounding; trace the first mismatch in assumptions or mapping. Consistent verification prevents persuasive but fragile geometry from shaping lineup cards or drill priorities.",
        formalNote: "Use dimensional checks, boundary validation, and independent recomputation to establish confidence. Agreement across methods within tolerance supports model stability; systematic divergence signals structural error. Log each check with pass or fail status so future reviewers can audit the reasoning chain quickly and identify whether issues came from data quality or model design.",
      },
      {
        heading: "Report Geometry Foundations Synthesis Lab For Staff",
        explainLikeCoach: "Close the loop by translating the computed result into an action statement with confidence level. A number alone does not help a coach; a decision rule does. Say what should change, what should stay the same, and what extra evidence would change the recommendation. This communication discipline is what allows geometry to support real baseball operations instead of living only in analyst notebooks.",
        formalNote: "Report outputs with units, validity range, uncertainty notes, and explicit tactical implication. Separate objective measurement from policy recommendation so readers can disagree with strategy without disputing arithmetic. Archive assumptions and formulas alongside final values, enabling reproducible postgame review and consistent model governance over time.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the first reliability step before using any geometry formula?",
        answer: "Declare frame assumptions and geometric object mapping.",
        explanation: "Shared definitions prevent silent interpretation drift.",
      },
      {
        prompt: "Why is a boundary check required before recommending an action?",
        answer: "Because edge cases often expose assumption failures that central cases hide.",
        explanation: "Boundary testing catches model fragility early.",
      },
      {
        prompt: "How should a final result be communicated to coaches?",
        answer: "As a decision statement with units, confidence limits, and assumptions.",
        explanation: "Decision utility depends on interpretation, not number display.",
      },
    ],
    workedExamples: [
      {
        title: "Frame Alignment Audit",
        scenario: "Analysts disagree on one play because coordinate choices differ.",
        walkthrough: [
          "List origin, axis direction, and units used in each report.",
          "Normalize both reports to one declared convention.",
          "Recompute the target quantity under the shared frame.",
          "Classify remaining discrepancy as arithmetic or assumption related.",
        ],
        takeaway: "Most conflicts resolve when setup assumptions are made explicit.",
      },
      {
        title: "Decision-Metric Translation",
        scenario: "A coach asks whether an adjustment should be kept for the next series.",
        walkthrough: [
          "Rewrite the coaching question as one measurable geometric target.",
          "Choose the relation that matches the physical baseball mechanism.",
          "Compute with unit checks and a quick plausibility estimate.",
          "Convert the value into an action recommendation with caveats.",
        ],
        takeaway: "Useful geometry is question-driven, not formula-driven.",
      },
      {
        title: "Postgame Verification Packet",
        scenario: "Staff needs fast review without losing mathematical accountability.",
        walkthrough: [
          "Present value, unit, and context window in one line.",
          "Attach boundary and alternate-method verification notes.",
          "State tactical implication and confidence range.",
          "Archive assumptions for reproducible follow-up analysis.",
        ],
        takeaway: "Transparent reporting keeps geometry trusted across departments.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two assumptions that must be explicit before geometric computation.", answer: "Coordinate convention and unit system." },
          { prompt: "What does a plausibility check guard against?", answer: "Numerically valid but physically unreasonable outputs." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Describe a four-step workflow from frame setup to recommendation.", answer: "Define frame, map question, compute and verify, report decision with caveats." },
          { prompt: "Why keep assumptions archived with final values?", answer: "So later reviews can reproduce and compare results faithfully." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design one verification protocol that uses boundary and alternate-method checks.", answer: "Answers vary; must include at least two independent checks and logging." },
          { prompt: "Write a coach-facing recommendation sentence from a geometric result.", answer: "Answers vary; must include action, unit context, and confidence qualifier." },
        ],
      },
    ],
    commonMistakes: [
      "Jumping to formulas before declaring geometric assumptions.",
      "Treating one computed value as trustworthy without boundary verification.",
      "Reporting results without linking them to a concrete baseball decision.",
    ],
    lessonSummary: "Geometry Foundations Synthesis Lab trains students to convert geometric reasoning into reliable baseball decisions through explicit setup, verified computation, and clear communication.",
    synthesisPrompt: "Use this lesson's geometry to analyze one baseball situation and justify your recommendation with assumptions and checks.",
    nextLessonBridge: "This foundation feeds directly into the next geometry topic, where we reuse the same reasoning discipline with a new structural relationship.",
    professorNotes: "Require students to state assumptions before formulas, include at least one boundary test in every solution, and finish each response with an action-oriented baseball interpretation. Grade reasoning transparency as heavily as arithmetic correctness so habits transfer to staff workflows.",
    keyTerms: [
      { term: "geometric assumption", definition: "A declared modeling choice that determines how measurements are interpreted.", lessonTitle: "Geometry Foundations Synthesis Lab" },
      { term: "verification check", definition: "A plausibility or boundary test used to confirm result reliability.", lessonTitle: "Geometry Foundations Synthesis Lab" },
    ],
    assessmentItems: [
      {
        id: "geo-15-mcq-1",
        type: "mcq",
        prompt: "Which practice most improves trust in a geometric baseball recommendation?",
        options: [
          "Compute quickly and omit setup notes",
          "Use one method once and round aggressively",
          "Declare assumptions, verify boundaries, and report action with caveats",
          "Average conflicting outputs without review",
        ],
        correctAnswer: "Declare assumptions, verify boundaries, and report action with caveats",
        explanation: "Reliable recommendations require transparent setup, validation, and interpretation.",
      },
      {
        id: "geo-15-exact-1",
        type: "exact",
        prompt: "Type the two-word phrase for checking output plausibility before recommendation.",
        correctAnswer: "sanity check",
        acceptedAnswers: ["sanity check", "Sanity check", "Sanity Check"],
        explanation: "A sanity check is the quick plausibility filter before decisions.",
      },
      {
        id: "geo-15-exact-2",
        type: "exact",
        prompt: "Type the one-word label for explicitly stated model setup choices.",
        correctAnswer: "assumptions",
        acceptedAnswers: ["assumptions", "Assumptions"],
        explanation: "Assumptions define interpretation and comparability across analyses.",
      },
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "geometry-foundations-synthesis-memo",
      title: "Summative: Integrated geometry decision packet",
      intro:
        "Combine circle, arc, and coordinate tools in one short packet. Use the rubric to verify setup transparency and validation evidence.",
      taskPrompt:
        "Pick one defensive or ball-flight geometry scenario that needs at least two distinct geometric relations (for example distance plus arc length, or circle intersection plus line constraint). Declare the frame, solve for the decision quantity, run two independent checks, and deliver a coach-facing recommendation with explicit uncertainty limits.",
    }),
  },
};
