import type { LessonDocument } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

export const HAND_AUTHORED_TRIG_PRECALC: Record<string, LessonDocument> = {
  "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trigonometric-functions-refresher-for-modeling": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trigonometric-functions-refresher-for-modeling",
    title: "Trigonometric Functions Refresher For Modeling",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Trigonometric Core Concepts",
    whyItMatters:
      "Baseball analysts constantly convert between headline values and directional reality. Exit velocity, bat speed, and release speed are not single-purpose numbers; each one is a bundle of directional effects that become useful only after decomposition. Trigonometric functions are the bridge between observed angles and actionable horizontal or vertical components. Without that bridge, a model can sound precise while still being physically wrong. In practical workflows, this appears when a staff asks why two balls at the same speed produce different carry, when a player asks why their swing change altered line-drive rate, or when an analyst needs to simulate trajectory at multiple launch directions in one batch process. A trigonometric refresher is therefore not remedial content; it is model hygiene for real baseball decisions. This lesson frames sine, cosine, and tangent as engineering tools for movement translation so learners can reason from geometry to game outcomes with confidence. Whenever you pick sine versus cosine, say aloud whether you want the piece along the ground or the piece toward the sky so the dugout translation matches the symbol choice. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "In a pregame meeting, a coach points to two clips and notes that both swings produced ninety-eight miles per hour of exit speed, yet one ball stayed on a line while the other ballooned into a routine flyout. The room starts by guessing about luck, but the data points to directional decomposition. Once you split each vector into forward and upward components, the difference is no longer mysterious. The first contact allocates more velocity toward field penetration, whereas the second allocates more velocity into height. That single conversion changes coaching language, player feedback, and batting-practice targeting. By the end of this lesson, students can run that conversion quickly and explain the result in both mathematical and dugout language.",
    narrativeFlow: [
      "Rebuild sine, cosine, and tangent as movement translators instead of isolated formulas.",
      "Connect each function to a baseball quantity that appears in tracking and scouting workflows.",
      "Move from right-triangle memory to unit-circle sign awareness for robust directional reasoning.",
      "Close with reliable habits for unit checks, sign checks, and model communication."
    ],
    objectives: [
      "Interpret trigonometric ratios in geometric and coordinate language.",
      "Decompose speed magnitude into directional components with correct signs.",
      "Select and justify the correct trig relationship for a given baseball modeling question."
    ],
    prerequisites: ["Basic algebra fluency", "Coordinate-plane vocabulary", "Right-triangle familiarity"],
    conceptChunks: [
      {
        heading: "Ratio Recall Becomes Bat-Path Insight",
        explainLikeCoach:
          "Most players first hear SOHCAHTOA as a chant, but analysts should treat it as a movement translator that turns one headline speed into two actionable directions. If a hitter keeps exit speed constant but raises launch angle, the forward component shrinks while the upward component grows, and that tradeoff changes batted-ball shape immediately. Inline diagram placeholder: [DIAGRAM_INLINE: right triangle with hypotenuse labeled v, adjacent labeled v_x, opposite labeled v_y, angle theta at origin]. Coaching language gets sharper when we say, \"you did not lose speed; you reallocated speed.\" That distinction helps players understand intent, not just outcomes. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Let \\(\\theta\\) be measured from the positive horizontal axis. Then \\(\\cos\\theta\\) gives horizontal proportion and \\(\\sin\\theta\\) gives vertical proportion, so \\(v_x = v\\cos\\theta\\) and \\(v_y = v\\sin\\theta\\). When \\(v_x \\neq 0\\), slope is \\(\\tan\\theta = \\frac{v_y}{v_x}\\). This mapping is the algebraic bridge from magnitude-angle data to vector features used in simulation and model inputs. Dedicated diagram placeholder: [DIAGRAM_BLOCK: component decomposition from launch vector into horizontal and vertical axes with sign annotations].",
        equation: "\\[v_x = v\\cos\\theta,\\quad v_y = v\\sin\\theta,\\quad \\tan\\theta = \\frac{v_y}{v_x}\\]"
      },
      {
        heading: "Sign Discipline Across Tracking Quadrants",
        explainLikeCoach:
          "Real tracking feeds include balls moving left or right and up or down, so unsigned values hide the actual story. A clean table can still be wrong if signs were flipped by a silent convention change. Inline diagram placeholder: [DIAGRAM_INLINE: unit circle quadrants with plus/minus signs for cosine and sine in each quadrant]. Before trusting any dashboard, ask: what is zero direction, what counts as positive horizontal, and what counts as positive vertical? This tiny ritual prevents long arguments built on mismatched coordinate meaning.",
        formalNote:
          "On the unit circle, each angle \\(\\theta\\) maps to point \\((\\cos\\theta,\\sin\\theta)\\), so cosine and sine inherit sign from quadrant location. Because vector pipelines depend on orientation, preserving these signs is necessary for physically correct transformations, aggregation, and interpretation. Dedicated diagram placeholder: [DIAGRAM_BLOCK: full unit circle labeled with quadrants I-IV, axis directions, and coordinate sign table].",
        equation: "\\[(x,y) = (\\cos\\theta,\\sin\\theta)\\]"
      },
      {
        heading: "From Component Math To Baseball Decisions",
        explainLikeCoach:
          "Component math matters because coaches make decisions on direction, not on scalar speed alone. Two hitters can both average \\(99\\) mph, yet one may carry more forward pace into gaps while the other spends more of that budget upward into hang time. Inline diagram placeholder: [DIAGRAM_INLINE: side-by-side vectors of equal magnitude with different angles and resulting component bars]. If we report only one number, we hide the mechanism; if we report components, we reveal why the outcomes diverge and what adjustment to test next.",
        formalNote:
          "Feature engineering often benefits from retaining both magnitude \\(\\lVert v\\rVert\\) and directional components \\((v_x,v_y)\\). This supports interpretable models because component terms can be linked directly to physical causes such as carry tendency, line-drive penetration, or steepness of contact plane. Dedicated diagram placeholder: [DIAGRAM_BLOCK: feature card showing scalar speed alongside decomposed components feeding a model].",
        equation: "\\[\\text{Model features can include } \\lVert v\\rVert,\\ v_x,\\ v_y,\\ \\text{and } \\frac{v_y}{v_x}\\]"
      }
    ],
    quickChecks: [
      { prompt: "A ball leaves at 100 mph and 30 degrees above horizontal; estimate horizontal component.", answer: "Approximately 86.6 mph.", explanation: "Compute 100 times cosine of 30 degrees." },
      { prompt: "If v_y is 25 and v_x is 75, what is tangent of launch angle?", answer: "Exactly one-third.", explanation: "Use v_y divided by v_x." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Same Exit Speed, Different Contact Story",
        scenario: "Two hitters each average ninety-nine miles per hour of exit speed, but one averages eighteen degrees and the other twenty-eight degrees.",
        walkthrough: [
          "Compute forward and upward components for each hitter using cosine and sine.",
          "Compare directional tradeoff instead of comparing speed alone.",
          "Map component differences to likely batted-ball distribution shifts.",
          "Translate the math into coaching language that supports intent decisions."
        ],
        takeaway: "Equivalent speed can hide materially different directional profiles, so decomposition is mandatory before interpretation."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Compute forward component for ninety mph at twenty degrees.", answer: "Approximately 84.6 miles per hour." },
          { prompt: "Compute upward component for ninety mph at twenty degrees.", answer: "Approximately 30.8 miles per hour." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Given v_x equals seventy-five and v_y equals twenty-five, compute tangent of angle.", answer: "The tangent value is one-third.", explanation: "Divide vertical by horizontal component." },
          { prompt: "If tangent equals one and movement is upward-forward, estimate the angle.", answer: "The angle is about forty-five degrees.", explanation: "Equal rise and run in first quadrant." },
          { prompt: "A hitter lowers angle while speed stays fixed; what generally happens to v_x?", answer: "Horizontal component generally increases.", explanation: "Cosine grows as small positive angles decrease." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence comparing two swings using component language instead of only exit speed.", answer: "I would compare both forward and vertical velocity allocations before describing quality." },
          { prompt: "Name one quality-control check before publishing trig-derived metrics.", answer: "I would verify angle units and sign conventions in the source feed." }
        ]
      }
    ],
    commonMistakes: [
      "Swapping sine and cosine without confirming angle reference line.",
      "Dropping sign information by taking absolute values too early.",
      "Mixing degree intuition with radian calculator settings in code."
    ],
    lessonSummary:
      "Trigonometric functions are practical translation tools from speed-angle descriptions to directional baseball insight. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Write a short analyst memo explaining how component decomposition changes interpretation of two equal-speed batted balls.",
    nextLessonBridge:
      "Next we deepen angle representation with unit-circle and radian reasoning for continuous-time baseball models.",
    professorNotes:
      "Ask students to narrate signs and units aloud; this prevents many hidden implementation errors later.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "tfm-a1",
        type: "exact",
        prompt: "If v_x is sixty and v_y is twenty, what is tan(theta)?",
        correctAnswer: "0.3333",
        acceptedAnswers: ["1/3", "0.333", "0.33"],
        explanation: "Tangent equals vertical divided by horizontal component."
      },
      {
        id: "tfm-a2",
        type: "exact",
        prompt: "For speed one hundred at sixty degrees, what is vertical component?",
        correctAnswer: "86.60",
        acceptedAnswers: ["86.6", "86.6 mph", "86.60 mph"],
        explanation: "Vertical component is speed times sine of the angle."
      },
      {
        id: "tfm-a3",
        type: "mcq",
        prompt: "Why can two identical exit speeds produce different trajectories?",
        options: [
          "Because speed alone determines height and carry equally",
          "Because directional components depend on launch angle",
          "Because cosine and sine are interchangeable",
          "Because tangent controls total speed directly"
        ],
        correctAnswer: "Because directional components depend on launch angle",
        explanation: "Angle changes how speed is allocated across axes."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::unit-circle-radians-and-angular-velocity-in-context": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::unit-circle-radians-and-angular-velocity-in-context",
    title: "Unit Circle, Radians, And Angular Velocity In Context",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Trigonometric Core Concepts",
    whyItMatters:
      "Baseball motion is continuous, so angle language must behave well under continuous-time modeling. Degrees are intuitive for conversation, but radians are the natural unit when derivatives and oscillatory models enter the workflow. Hip rotation, shoulder turn, barrel approach, and release orientation all involve angular rates that are cleaner and safer to compute in radians per second. Analysts who avoid radian fluency often create brittle pipelines where formulas look right but units quietly mismatch. The unit circle gives a shared geometry for sine and cosine values, while radians tie angle measure to arc length, making change-over-time reasoning physically meaningful. In performance settings, this supports comparable timing metrics across players, sessions, and sensor systems. This lesson moves students from static angle facts to dynamic angular thinking that supports biomechanics and pitch-design interpretation. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A biomech report says a hitter reaches two thousand two hundred degrees per second near contact. Coaches hear a huge number, but analysts need a unit-consistent story that links to model equations. Converting to radians per second clarifies the scale, aligns with sinusoidal representations, and prevents derivative mistakes. During a video session, the same conversion helps compare two players whose swings look similar at normal speed but differ in rotational timing near contact. Once everything is in radians, period, phase, and angular velocity become directly comparable. What looked like noisy language becomes one coherent framework for decision support.",
    narrativeFlow: [
      "Use the unit circle as a coordinate engine for sine and cosine values.",
      "Define radians by arc-length ratio instead of memorized conversion rules only.",
      "Connect angular velocity notation to baseball motion signals.",
      "Build unit-check habits that survive implementation in code and reports."
    ],
    objectives: [
      "Convert between degrees and radians accurately under time pressure.",
      "Interpret unit-circle coordinates as cosine and sine values.",
      "Relate angular velocity and period to baseball movement timing."
    ],
    prerequisites: ["Trigonometric ratio basics", "Arc-length concept", "Basic rate interpretation"],
    conceptChunks: [
      {
        heading: "Arc-Length Thinking For Rotational Mechanics",
        explainLikeCoach:
          "Radians are not a stylistic math choice; they describe how far around a circle an athlete actually turns relative to radius. When a hitter rotates through a short time window, radian language ties the amount of turn to geometry that remains valid in derivatives and time-based models. Inline diagram placeholder: [DIAGRAM_INLINE: circle showing radius r, arc length s, and central angle theta with theta = s/r]. This helps players and coaches see radians as movement distance normalized by body geometry, not as abstract symbolism. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Radian measure is defined by \\(\\theta = \\frac{s}{r}\\), where \\(s\\) is arc length and \\(r\\) is radius. On the unit circle \\((r=1)\\), angle equals arc length numerically, which is why calculus relations for trigonometric functions are naturally expressed in radians. Dedicated diagram placeholder: [DIAGRAM_BLOCK: derivation visual from arc-length ratio to unit-circle simplification \\(\\theta=s\\)].",
        equation: "\\[\\theta = \\frac{s}{r}\\]"
      },
      {
        heading: "Unit Circle As A Data Lookup Geometry",
        explainLikeCoach:
          "Instead of memorizing disconnected special angles, use the unit circle as a coordinate map where every angle immediately returns two numbers with meaning. Those numbers are the horizontal and vertical coordinates of the point reached by rotation. Inline diagram placeholder: [DIAGRAM_INLINE: unit circle point at angle theta projected to x and y axes]. This framing keeps sign logic coherent across biomechanics plots, pitch-shape decomposition, and simulator inputs.",
        formalNote:
          "For any \\(\\theta\\), the unit-circle point is \\((x,y)=(\\cos\\theta,\\sin\\theta)\\). Quadrant determines sign, so coordinate interpretation remains consistent when switching between angle-based and component-based representations. Dedicated diagram placeholder: [DIAGRAM_BLOCK: labeled unit circle with common angles, coordinates, and projection lines].",
        equation: "\\[(x,y) = (\\cos\\theta,\\sin\\theta)\\]"
      },
      {
        heading: "Angular Velocity In Performance Language",
        explainLikeCoach:
          "When coaches describe someone as early or late, they are often observing differences in turning rate and timing phase. Converting that intuition into radians per second gives a common language across athletes and devices. Inline diagram placeholder: [DIAGRAM_INLINE: angle-versus-time plot with slope labeled omega and one cycle labeled T]. Once rate is quantified, interventions become measurable: speed up turn onset, reduce lag, or stabilize timing window.",
        formalNote:
          "Angular velocity is \\(\\omega = \\frac{d\\theta}{dt}\\). For sinusoidal motion \\(y=A\\sin(\\omega t+\\phi)\\), period is \\(T=\\frac{2\\pi}{\\omega}\\), so increasing \\(\\omega\\) shortens cycle duration. This pair links coaching timing language to parameterized signal models. Dedicated diagram placeholder: [DIAGRAM_BLOCK: sinusoid annotated with amplitude A, phase phi, angular frequency omega, and period T].",
        equation: "\\[\\omega = \\frac{d\\theta}{dt},\\quad T = \\frac{2\\pi}{\\omega}\\]"
      }
    ],
    quickChecks: [
      { prompt: "Convert one hundred eighty degrees to radians.", answer: "Exactly pi radians.", explanation: "Multiply by pi over one hundred eighty." },
      { prompt: "If omega doubles in a sinusoid, what happens to period?", answer: "The period is cut in half.", explanation: "Period and omega are inversely related." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Average Barrel Rotation Rate",
        scenario: "Bat angle changes from minus 0.4 radians to plus 0.2 radians over 0.03 seconds before contact.",
        walkthrough: [
          "Compute angular change as six tenths of a radian.",
          "Divide by elapsed time to obtain average angular velocity.",
          "Convert result into contextual baseball timing language.",
          "Note that average rate can hide local acceleration spikes."
        ],
        takeaway: "Radians per second supports direct timing comparison while preserving model compatibility."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Convert forty-five degrees into radians.", answer: "The value is pi over four." },
          { prompt: "Convert three pi over two radians into degrees.", answer: "The value is two hundred seventy degrees." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "A signal has omega equal to ten radians per second; find period.", answer: "The period is about 0.628 seconds.", explanation: "Use two pi divided by omega." },
          { prompt: "Angle increases by pi over three in 0.05 seconds; compute average omega.", answer: "Average omega is about 20.94 radians per second.", explanation: "Divide angular change by elapsed time." },
          { prompt: "Explain one reason radian units are preferred in calculus-based motion models.", answer: "Radian units preserve clean derivative relationships for sine and cosine.", explanation: "Degree units introduce extra conversion factors." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write a one-sentence quality gate for angular-rate metrics.", answer: "I will reject angular-rate outputs that do not explicitly declare radians per second." },
          { prompt: "Name one communication tip for coaches when reporting omega.", answer: "Pair the radian value with an intuitive timing interpretation in milliseconds." }
        ]
      }
    ],
    commonMistakes: [
      "Treating radian and degree values as interchangeable numbers.",
      "Reporting angular velocity without explicitly stating units.",
      "Feeding degree-based angles into radian-based model code."
    ],
    lessonSummary:
      "Unit-circle and radian fluency enable robust continuous-time baseball motion modeling. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Draft a short explanation for staff on why angular metrics should default to radians per second.",
    nextLessonBridge:
      "Next we connect trig memory directly to vector components for horizontal and vertical motion analysis.",
    professorNotes:
      "Require every student to annotate angle units in each computed line, not only in final answers.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "ucr-a1",
        type: "exact",
        prompt: "Convert one hundred twenty degrees to radians.",
        correctAnswer: "2pi/3",
        acceptedAnswers: ["2*pi/3"],
        explanation: "Multiply degrees by pi over one hundred eighty."
      },
      {
        id: "ucr-a2",
        type: "exact",
        prompt: "If angle changes by 1.2 radians in 0.06 seconds, what is average omega?",
        correctAnswer: "20",
        acceptedAnswers: ["20 rad/s", "20.0"],
        explanation: "Angular rate is change in angle divided by time."
      },
      {
        id: "ucr-a3",
        type: "mcq",
        prompt: "In y equals A sine of omega t plus phi, increasing omega does what?",
        options: ["Increases amplitude", "Shortens period", "Changes vertical offset only", "Removes phase effect"],
        correctAnswer: "Shortens period",
        explanation: "Period is inversely proportional to omega."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion",
    title: "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Trigonometric Core Concepts",
    whyItMatters:
      "Speed readings are composite values that hide directional allocation. In baseball, directional allocation decides whether contact becomes a line drive, a towering fly ball, or a hard ground ball. Analysts need to convert from speed-and-angle summaries into explicit vectors to model carry, hang time, and defensive challenge windows. This conversion appears in hitting development, pitching movement interpretation, and ball-flight simulation. A player can improve apparent velocity while still reducing useful component allocation for desired outcomes. Without vector decomposition, those tradeoffs stay invisible. This lesson elevates SOHCAHTOA from exam mnemonic to vector workflow, emphasizing frame declarations, sign conventions, and reconstruction checks. It also prepares students for optimization and uncertainty modules where axis-level features become model inputs.",
    lessonOpener:
      "A trainee says two pitchers both throw ninety-four, so their fastballs should grade similarly. The staff asks for ride and run context, and the statement immediately falls apart. Once velocity is decomposed into directional components in a shared frame, the two pitches no longer look alike. One profile allocates more movement into vertical action while the other drives forward with less rise. The same logic applies to batted balls: identical speed does not imply identical danger profile. Component language turns hand-wavy observations into measurable baseball argument.",
    narrativeFlow: [
      "Translate right-triangle relationships into vector component equations.",
      "Define coordinate frames and show why frame declarations matter.",
      "Practice decomposition and reconstruction loops as quality checks.",
      "Use baseball scenarios where component shifts change tactical interpretation."
    ],
    objectives: [
      "Compute x and y components from magnitude-angle data.",
      "Recover magnitude and direction from component data reliably.",
      "Explain baseball consequences of component tradeoffs."
    ],
    prerequisites: ["Trig ratio fluency", "Pythagorean theorem", "Coordinate system basics"],
    conceptChunks: [
      {
        heading: "Decomposing Exit Speed Into Usable Axes",
        explainLikeCoach:
          "Treat total speed like a budget and components like where that budget is spent. A hitter with the same \\(\\lVert v\\rVert\\) can still produce a different profile if more of that speed is allocated upward instead of forward. Inline diagram placeholder: [DIAGRAM_INLINE: velocity vector decomposed into v_x and v_y bars beneath it]. This perspective helps athletes connect swing decisions to outcome probabilities rather than chasing one number. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For magnitude \\(\\lVert v\\rVert\\) and angle \\(\\theta\\) from horizontal, components are \\(v_x=\\lVert v\\rVert\\cos\\theta\\) and \\(v_y=\\lVert v\\rVert\\sin\\theta\\). Reconstruction uses \\(\\lVert v\\rVert=\\sqrt{v_x^2+v_y^2}\\), and direction recovery should use \\(\\theta=\\operatorname{atan2}(v_y,v_x)\\) for quadrant correctness. Dedicated diagram placeholder: [DIAGRAM_BLOCK: forward-and-upward decomposition with reconstruction triangle and atan2 quadrant map].",
        equation: "\\[v_x = \\lVert v\\rVert\\cos\\theta,\\quad v_y = \\lVert v\\rVert\\sin\\theta\\]"
      },
      {
        heading: "Frame Declaration Before Calculation",
        explainLikeCoach:
          "Many disagreements are frame disagreements in disguise. If one report is catcher-view and another is batter-view, the same ball can appear to move in opposite horizontal directions. Inline diagram placeholder: [DIAGRAM_INLINE: same vector drawn in two rotated coordinate frames with different component signs]. Declaring frame first is not paperwork; it is the condition for meaningful comparison.",
        formalNote:
          "Components are basis-dependent coordinates of one physical vector. Under basis rotation, component values change while geometric vector magnitude and direction in physical space remain invariant. Dedicated diagram placeholder: [DIAGRAM_BLOCK: vector \\(\\mathbf{v}\\) expressed in basis \\((\\mathbf{i},\\mathbf{j})\\) and rotated basis \\((\\mathbf{i}',\\mathbf{j}')\\)].",
        equation: "\\[\\mathbf{v} = v_x\\mathbf{i} + v_y\\mathbf{j}\\]"
      },
      {
        heading: "Reconstruction As A Sanity Gate",
        explainLikeCoach:
          "After you decompose, always rebuild. If the rebuilt magnitude or direction misses the original beyond tolerance, something in signs, units, or frame labels is broken. Inline diagram placeholder: [DIAGRAM_INLINE: workflow arrows decompose -> reconstruct -> compare error]. This simple loop catches silent errors before they reach staff decisions.",
        formalNote:
          "Round-trip validation compares input \\((\\lVert v\\rVert,\\theta)\\) against reconstructed values from \\((v_x,v_y)\\). Typical checks include magnitude error \\(|\\Delta\\lVert v\\rVert|\\) and angular error \\(|\\Delta\\theta|\\), each bounded by declared tolerance. Dedicated diagram placeholder: [DIAGRAM_BLOCK: QA panel with reconstruction formulas and pass/fail tolerance thresholds].",
        equation: "\\[\\lVert v\\rVert_{\\mathrm{recon}} = \\sqrt{v_x^2+v_y^2}\\]"
      }
    ],
    quickChecks: [
      { prompt: "If magnitude is fifty and theta is zero, what is v_y?", answer: "Vertical component is exactly zero.", explanation: "Sine of zero is zero." },
      { prompt: "If v_x is three and v_y is four, what is magnitude?", answer: "Magnitude is exactly five.", explanation: "Use the Pythagorean theorem." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Launch Adjustment Tradeoff",
        scenario: "A hitter raises launch angle from twelve to twenty degrees while maintaining ninety-seven miles per hour speed.",
        walkthrough: [
          "Compute old and new horizontal components with cosine.",
          "Compute old and new vertical components with sine.",
          "Quantify directional tradeoff in plain baseball language.",
          "Discuss context factors that determine whether tradeoff is beneficial."
        ],
        takeaway: "Component shifts expose why one mechanical change can help in one context and hurt in another."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "For magnitude eighty at thirty degrees, find horizontal component.", answer: "Horizontal component is about 69.3 units." },
          { prompt: "For magnitude eighty at thirty degrees, find vertical component.", answer: "Vertical component is exactly forty units." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Given v_x equals twenty-four and v_y equals seven, find magnitude.", answer: "Magnitude is exactly twenty-five.", explanation: "Square and sum before square root." },
          { prompt: "Given v_x equals twenty-four and v_y equals seven, estimate angle.", answer: "Angle is about 16.3 degrees.", explanation: "Use atan2(7, 24)." },
          { prompt: "If angle rises while speed is fixed, describe expected component trend.", answer: "Vertical share rises while horizontal share declines.", explanation: "Sine grows as cosine shrinks over typical launch range." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence describing why frame choice must be documented.", answer: "Frame choice determines component values, so undocumented frames make comparisons unreliable." },
          { prompt: "Name one automated test for component transformation code.", answer: "Use round-trip reconstruction tests with strict error tolerances." }
        ]
      }
    ],
    commonMistakes: [
      "Skipping frame declaration before decomposition.",
      "Using arctangent without quadrant-aware atan2.",
      "Rounding early and degrading reconstruction checks."
    ],
    lessonSummary:
      "Vector decomposition turns trig memory into reliable baseball movement interpretation.",
    synthesisPrompt:
      "Draft a comparison note for two equal-speed hitters using directional components and frame-aware language.",
    nextLessonBridge:
      "Next we reverse trig mappings to reconstruct hidden launch conditions from partial measurements.",
    professorNotes:
      "Require frame labels in every solved problem to build production-grade habits early.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "svc-a1",
        type: "exact",
        prompt: "If v_x equals eight and v_y equals fifteen, what is magnitude?",
        correctAnswer: "17",
        acceptedAnswers: ["17.0"],
        explanation: "Magnitude comes from the square root of the sum of squared components."
      },
      {
        id: "svc-a2",
        type: "exact",
        prompt: "If speed is one hundred and theta is thirty degrees, what is v_x?",
        correctAnswer: "86.60",
        acceptedAnswers: ["86.6", "86.6 mph"],
        explanation: "Horizontal component is speed times cosine."
      },
      {
        id: "svc-a3",
        type: "mcq",
        prompt: "Which function should be used to recover direction from v_x and v_y?",
        options: ["arcsin of v_y", "arccos of v_x", "atan2(v_y, v_x)", "tangent of ratio only"],
        correctAnswer: "atan2(v_y, v_x)",
        explanation: "atan2 preserves quadrant information."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::inverse-trig-for-reconstructing-launch-conditions": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::inverse-trig-for-reconstructing-launch-conditions",
    title: "Inverse Trig For Reconstructing Launch Conditions",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Trigonometric Core Concepts",
    whyItMatters:
      "In production baseball analytics, complete data almost never arrives cleanly. Camera occlusion, synchronization gaps, and feed dropouts regularly remove direct launch-angle observations, yet downstream workflows still require those values. Inverse trigonometric methods let analysts reconstruct hidden angles from component or ratio information so model continuity is preserved. This is critical for game-day dashboards, postgame review, and player-development trend tracking. The math is straightforward, but subtle range and quadrant issues can create plausible-looking errors that are hard to detect if context checks are skipped. Robust reconstruction therefore combines inverse trig with sign discipline, physical plausibility checks, and explicit frame assumptions. This lesson teaches that complete process, not just button-pushing formulas, so learners can recover states responsibly and communicate confidence clearly. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "During a live game, one contact event loses its direct launch-angle output because of camera obstruction, but velocity components still stream correctly. If analysts leave the row blank, trend metrics break and coaches lose trust in the report. If analysts reconstruct carelessly, they may fill the gap with a mathematically valid but physically impossible angle. Inverse trig done correctly solves both problems: it restores continuity and preserves interpretation. By pairing atan2 with contextual checks, the staff keeps data quality high under real operational pressure.",
    narrativeFlow: [
      "Map direct trig equations to inverse reconstruction operations.",
      "Handle principal ranges and ambiguity in arcsin/arccos usage.",
      "Use atan2 for quadrant-safe component-to-angle conversion.",
      "Apply physical plausibility gates before accepting reconstructed outputs."
    ],
    objectives: [
      "Select appropriate inverse trig function for available inputs.",
      "Recover launch direction while honoring quadrant and frame context.",
      "Document reconstruction assumptions and confidence checks."
    ],
    prerequisites: ["Trig decomposition", "Quadrant sign logic", "Coordinate frame familiarity"],
    conceptChunks: [
      {
        heading: "Recovering Hidden Angles From What Remains",
        explainLikeCoach:
          "In real workflows, one field drops out and the game does not pause. If components survive, inverse trig lets you rebuild direction so trend lines stay continuous and coaching reports stay complete. Inline diagram placeholder: [DIAGRAM_INLINE: missing theta with known v_x and v_y in a right-triangle/vector sketch]. The key is choosing the inverse function that preserves context instead of grabbing the first calculator output. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Given components, preferred reconstruction is \\(\\theta=\\operatorname{atan2}(v_y,v_x)\\) because quadrant is encoded by both inputs. If only one component and magnitude are known, \\(\\arcsin\\) or \\(\\arccos\\) can recover a principal value that must then be branch-resolved using frame and sign context. Dedicated diagram placeholder: [DIAGRAM_BLOCK: decision tree for choosing atan2 vs arcsin/arccos based on available measurements].",
        equation: "\\[\\theta = \\operatorname{atan2}(v_y, v_x)\\]"
      },
      {
        heading: "Principal Values Need Context Filters",
        explainLikeCoach:
          "Inverse buttons return mathematically valid values, but not always the baseball-valid value for a specific play. If a result says the ball launched downward while video shows a rising liner, context should override blind acceptance. Inline diagram placeholder: [DIAGRAM_INLINE: two angles sharing same sine value in different quadrants]. Analysts should treat principal values as candidates that require evidence, not final truth.",
        formalNote:
          "Range restrictions matter: \\(\\arcsin\\) returns \\([ -\\pi/2,\\pi/2 ]\\), while \\(\\arccos\\) returns \\([0,\\pi]\\). Because multiple geometric angles can produce the same ratio, additional sign information and frame constraints are required to choose the physically consistent branch. Dedicated diagram placeholder: [DIAGRAM_BLOCK: unit circle highlighting principal intervals and ambiguous mirror solutions].",
        equation: "\\[\\theta_{\\text{candidate}} \\in \\{\\arcsin(u),\\ \\pi-\\arcsin(u)\\}\\]"
      },
      {
        heading: "Reconstruction Protocols For Reliable Pipelines",
        explainLikeCoach:
          "Reliable reconstruction is a process, not a keystroke: compute the angle, test plausibility, then tag confidence before publishing. Inline diagram placeholder: [DIAGRAM_INLINE: checklist sequence compute -> verify -> annotate -> publish]. This prevents one noisy row from becoming a misleading coaching narrative.",
        formalNote:
          "A robust protocol includes function-choice justification, unit checks, quadrant verification, contextual plausibility gates, and confidence labeling tied to source uncertainty. Logging each stage improves traceability and postgame auditability. Dedicated diagram placeholder: [DIAGRAM_BLOCK: pipeline lane diagram with validation gates and confidence flag output].",
        equation: "\\[\\text{reconstruct} \\rightarrow \\text{validate} \\rightarrow \\text{annotate confidence}\\]"
      }
    ],
    quickChecks: [
      { prompt: "If v_x equals zero and v_y is positive, what is direction?", answer: "Direction is pi over two radians.", explanation: "The vector points straight upward in the chosen frame." },
      { prompt: "Why is atan2 preferred over plain arctangent ratio?", answer: "It preserves quadrant information and handles zero-safe branching.", explanation: "Ratio alone loses directional context." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Sensor Dropout Angle Recovery",
        scenario: "At contact, components are v_x eighty-two and v_y twenty-nine with direct angle missing.",
        walkthrough: [
          "Compute theta via atan2(29, 82).",
          "Convert to degrees for communication if required.",
          "Confirm sign and event context imply upward-forward launch.",
          "Store reconstructed value with metadata for traceability."
        ],
        takeaway: "Inverse trig is strongest when paired with explicit validation and documentation."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Find direction when v_x equals ten and v_y equals ten.", answer: "Direction is about forty-five degrees." },
          { prompt: "Find direction when v_x equals minus five and v_y equals five.", answer: "Direction is about one hundred thirty-five degrees." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Magnitude is fifty and v_y is twenty-five; give principal arcsin angle.", answer: "Principal angle is thirty degrees.", explanation: "arcsin of one-half gives thirty degrees." },
          { prompt: "State one reason arcsin can be ambiguous in reconstruction.", answer: "The same sine value can appear in multiple quadrants.", explanation: "Additional context is required for branch selection." },
          { prompt: "Given v_x twelve and v_y five, estimate direction in degrees.", answer: "Direction is roughly twenty-two point six degrees.", explanation: "Use atan2 for safe quadrant handling." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one line for a reconstruction quality note.", answer: "Angle reconstructed with atan2 and passed sign-plus-context plausibility checks." },
          { prompt: "Name one trigger for marking reconstructed output low-confidence.", answer: "Large upstream component uncertainty should trigger low-confidence labeling." }
        ]
      }
    ],
    commonMistakes: [
      "Using arctan ratio without quadrant correction.",
      "Treating principal value as the only physical solution.",
      "Failing to record frame and sign assumptions."
    ],
    lessonSummary:
      "Inverse trig reconstructs missing baseball launch states when paired with quadrant and context safeguards.",
    synthesisPrompt:
      "Create a reconstruction checklist for missing launch-angle events in a live tracking pipeline.",
    nextLessonBridge:
      "Next we simplify trig-heavy expressions using identities to improve clarity and implementation stability.",
    professorNotes:
      "Grade both numeric reconstruction and written plausibility checks to reinforce real-world reliability.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "itr-a1",
        type: "exact",
        prompt: "Compute direction in degrees for v_x twelve and v_y five.",
        correctAnswer: "22.62",
        acceptedAnswers: ["22.6", "22.62 degrees"],
        explanation: "Use atan2(5, 12)."
      },
      {
        id: "itr-a2",
        type: "exact",
        prompt: "If sine of theta is one half, what principal angle in degrees does arcsin return?",
        correctAnswer: "30",
        acceptedAnswers: ["30 degrees"],
        explanation: "Principal arcsin output for one half is thirty degrees."
      },
      {
        id: "itr-a3",
        type: "mcq",
        prompt: "Best immediate follow-up after computing a reconstructed angle is to:",
        options: ["Round to nearest integer", "Discard signs for simplicity", "Check physical plausibility in context", "Convert to a percentage"],
        correctAnswer: "Check physical plausibility in context",
        explanation: "Context checks catch branch and sign errors."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trig-identities-for-simplifying-flight-equations": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trig-identities-for-simplifying-flight-equations",
    title: "Trig Identities For Simplifying Flight Equations",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Trigonometric Core Concepts",
    whyItMatters:
      "As baseball models accumulate adjustments for launch, spin influence, and environmental context, expressions can become hard to read, hard to test, and easy to break. Trigonometric identities provide a disciplined way to simplify equivalent formulas before they reach production code. This is not cosmetic mathematics. Cleaner equations reduce duplicated operations, clarify parameter meaning, and lower the chance of sign errors hidden in long symbolic chains. During calibration, identity-based simplification can also improve numerical behavior by avoiding unstable subtractive patterns. Analysts who skip this step often spend more time debugging implementation than refining model assumptions. This lesson teaches identity usage as an engineering practice: preserve equivalence, improve interpretability, and test transformed expressions before deployment. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A teammate ships a trajectory script containing three different forms of the same trig relationship, each copied from a different notebook. The outputs drift under rounding, and nobody can quickly explain which term should dominate. By consolidating with core identities, the expression shrinks, variable roles become obvious, and unit tests pass with tighter tolerances. Coaches do not care that an identity was applied; they care that recommendations are stable and understandable. Identity fluency is how analysts protect that trust.",
    narrativeFlow: [
      "Review high-value trig identities used repeatedly in modeling workflows.",
      "Apply identities to reduce expression length and reveal structure.",
      "Connect simplification choices to numerical reliability concerns.",
      "Use verification habits to prove equivalence after rewriting."
    ],
    objectives: [
      "Apply key identities accurately with sign-safe manipulation.",
      "Transform cluttered expressions into equivalent readable forms.",
      "Explain why simplification improves implementation reliability."
    ],
    prerequisites: ["Algebraic manipulation", "Core trig functions", "Model equation literacy"],
    conceptChunks: [
      {
        heading: "Identity Pass Before Code Freeze",
        explainLikeCoach:
          "Before model code is finalized, run an identity pass the way a team runs a defensive checklist before first pitch. Collapse duplicates, remove dead symbolic weight, and leave the expression teammates can review fast. Inline diagram placeholder: [DIAGRAM_INLINE: cluttered trig expression transforming into shorter equivalent expression]. This step preserves intent and reduces the chance that hidden algebra noise becomes production behavior. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "High-value identities include \\(\\sin^2\\theta+\\cos^2\\theta=1\\), \\(1+\\tan^2\\theta=\\sec^2\\theta\\), and angle-sum relations. Applying them strategically reduces symbolic complexity while preserving exact equivalence over the expression domain. Dedicated diagram placeholder: [DIAGRAM_BLOCK: identity map linking common trig forms to simplified canonical forms].",
        equation: "\\[\\sin^2\\theta + \\cos^2\\theta = 1\\]"
      },
      {
        heading: "Equivalent Does Not Mean Equally Stable",
        explainLikeCoach:
          "Two formulas can be mathematically identical yet produce slightly different computed values because machines store finite-precision numbers. If one form subtracts nearly equal terms, it can magnify noise and make a model look jumpy. Inline diagram placeholder: [DIAGRAM_INLINE: numeric error bars larger for cancellation-prone formula than simplified form]. Choosing stable algebra is part of baseball analytics reliability, not optional polish.",
        formalNote:
          "Floating-point effects such as cancellation and rounding accumulation can amplify error in algebraically valid but numerically fragile forms. Equivalent rewrites that reduce subtractive cancellation or repeated evaluation often improve reproducibility and calibration stability. Dedicated diagram placeholder: [DIAGRAM_BLOCK: side-by-side computation graph comparing unstable and stable equivalent formulas].",
        equation: "\\[\\lvert f_{\\text{unstable}}(x)-f_{\\text{stable}}(x)\\rvert \\approx \\text{roundoff amplification}\\]"
      },
      {
        heading: "Proof Workflow For Safe Simplification",
        explainLikeCoach:
          "Never ship a simplification on instinct alone. Show why it is equivalent, test it numerically, and keep evidence with the change so others can trust it quickly. Inline diagram placeholder: [DIAGRAM_INLINE: three-step badge sequence symbolically prove -> numerically test -> regression compare]. This workflow keeps refactors from quietly changing model behavior.",
        formalNote:
          "Recommended sequence is symbolic rewrite, domain-condition audit, representative numeric spot checks, and regression comparison against baseline outputs. A simplification is complete only when equivalence is demonstrated analytically and empirically. Dedicated diagram placeholder: [DIAGRAM_BLOCK: verification pipeline with pass/fail gates for symbolic and numeric equivalence].",
        equation: "\\[\\text{symbolic check} + \\text{numeric check} + \\text{regression tests}\\]"
      }
    ],
    quickChecks: [
      { prompt: "Simplify sine squared plus cosine squared of theta.", answer: "The expression simplifies to one.", explanation: "This is the core Pythagorean identity." },
      { prompt: "Expand sine of a plus b.", answer: "It becomes sine a cosine b plus cosine a sine b.", explanation: "Apply angle-sum identity." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Simplifying A Drift Adjustment Term",
        scenario: "A side-force module includes repeated sine-cosine products under different labels in one long equation.",
        walkthrough: [
          "Group matching terms and identify cancellations.",
          "Apply Pythagorean and angle-sum identities where relevant.",
          "Rewrite into a shorter equivalent expression.",
          "Validate equality numerically across representative inputs."
        ],
        takeaway: "Identity-driven simplification improves clarity, testability, and numerical robustness."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Simplify one minus cosine squared theta.", answer: "The result is sine squared theta." },
          { prompt: "Simplify one plus tangent squared theta.", answer: "The result is secant squared theta." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Rewrite cosine of a minus b using identity form.", answer: "Cosine a cosine b plus sine a sine b.", explanation: "Use the cosine-difference identity." },
          { prompt: "Give one engineering reason to simplify before coding.", answer: "Simpler forms reduce algebra bugs and improve maintainability.", explanation: "Readability supports reliable implementation." },
          { prompt: "Name one quick verification step after simplification.", answer: "Run numeric spot-checks against the original expression.", explanation: "Equivalent formulas should agree across sample points." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Describe one case where equal formulas can behave differently in code.", answer: "Finite-precision cancellation can make one equivalent form numerically less stable." },
          { prompt: "Write one sentence for a simplification commit message.", answer: "Consolidated equivalent trig terms to improve readability and numerical consistency." }
        ]
      }
    ],
    commonMistakes: [
      "Applying angle identities with incorrect signs.",
      "Assuming simplification is optional decoration rather than reliability work.",
      "Skipping post-rewrite equivalence tests."
    ],
    lessonSummary:
      "Trig identities are practical model-maintenance tools that improve readability and stability. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Take one cluttered trig expression and document an equivalent simplified version with validation notes.",
    nextLessonBridge:
      "After static simplification, we move to timing structure in periodic baseball motion signals.",
    professorNotes:
      "Require students to submit both original and simplified expressions with equivalence evidence.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "tif-a1",
        type: "exact",
        prompt: "Simplify cosine squared theta minus one.",
        correctAnswer: "-sin^2(theta)",
        acceptedAnswers: ["-(sin^2(theta))"],
        explanation: "Rearrange the Pythagorean identity."
      },
      {
        id: "tif-a2",
        type: "exact",
        prompt: "Simplify one plus tangent squared theta.",
        correctAnswer: "sec^2(theta)",
        acceptedAnswers: ["sec(theta)^2"],
        explanation: "Apply the standard tangent-secant identity."
      },
      {
        id: "tif-a3",
        type: "mcq",
        prompt: "Why simplify equivalent trig expressions before implementation?",
        options: ["To remove all trigonometry", "To avoid units entirely", "To improve readability and numerical reliability", "To increase variable count"],
        correctAnswer: "To improve readability and numerical reliability",
        explanation: "Simplification supports maintainable and trustworthy code."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::phase-shift-and-periodicity-in-baseball-motion-signals": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::phase-shift-and-periodicity-in-baseball-motion-signals",
    title: "Phase Shift And Periodicity In Baseball Motion Signals",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Functions, Transformations, And Signals",
    whyItMatters:
      "Many baseball movements are cyclical: stride timing, shoulder rotation, arm-slot oscillation, and recovery patterns all repeat with structure that can be modeled. Two athletes may have similar movement shape but different timing position within the cycle, and that timing difference can affect command, contact quality, and injury risk. Phase and period parameters provide a precise language for these differences. Without this language, reports collapse into vague descriptions like early, late, quick, or slow, which are hard to calibrate over time. Periodicity analysis also supports fatigue monitoring, because cycle drift can appear before obvious performance decline. This lesson teaches students to extract and interpret phase and period as operational metrics that connect cleanly to baseball decisions. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A pitching coordinator compares two arm-slot traces and says they look almost identical. On first glance he is right, but one trace peaks noticeably later relative to foot strike. That slight timing offset corresponds to command inconsistency in high-leverage counts. Once the analyst quantifies phase lag, the conversation changes from opinion to testable adjustment. The player then receives a targeted timing intervention rather than generic mechanical cues. This is the practical value of phase-shift literacy.",
    narrativeFlow: [
      "Define period and phase in clear movement and timing language.",
      "Map baseball event timestamps to sinusoidal parameter interpretation.",
      "Separate timing shifts from amplitude changes during comparison.",
      "Use periodic drift cues for monitoring and intervention planning."
    ],
    objectives: [
      "Compute period from model form and interpret cycle duration.",
      "Interpret phase shifts as timing offsets relative to a reference event.",
      "Compare periodic athlete signals on a normalized timeline."
    ],
    prerequisites: ["Sinusoid basics", "Radian fluency", "Transformation notation"],
    conceptChunks: [
      {
        heading: "Timing Position Inside Repeating Motion",
        explainLikeCoach:
          "Phase is the where-are-we-now marker within a repeating movement. If two players move similarly but one reaches key checkpoints later, phase captures that delay explicitly. This gives coaches a concrete timing target rather than a vague cue. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For y=A sin(B(t-C))+D, period is T=2pi/|B| and C controls horizontal shift in time domain. Relative differences in C quantify temporal offsets when models share time origin and basis assumptions.",
        equation: "\\[T = \\frac{2\\pi}{|B|},\\ \\text{phase shift} = C\\]"
      },
      {
        heading: "Event-Locked Periodicity For Baseball Context",
        explainLikeCoach:
          "Timing only matters relative to meaningful events like release, foot strike, or contact. Locking phase analysis to those events keeps insights actionable.",
        formalNote:
          "Phase comparisons should be referenced to standardized event timestamps to avoid misinterpretation across sessions with different acquisition start times.",
        equation: "\\[\\mathrm{phase}_{\\mathrm{event}} = B(t_{\\mathrm{event}} - C)\\]"
      },
      {
        heading: "Distinguishing Drift From Noise",
        explainLikeCoach:
          "Not every wiggle is meaningful. Analysts should separate random noise from persistent phase drift before recommending adjustments.",
        formalNote:
          "Repeated shifts in estimated phase parameter across contiguous windows can indicate systematic timing drift; isolated deviations may reflect measurement noise.",
        equation: "\\[\\text{track } \\Delta C \\text{ over time windows}\\]"
      }
    ],
    quickChecks: [
      { prompt: "For y equals sine of two t, what is period?", answer: "The period is pi units.", explanation: "Two pi divided by two equals pi." },
      { prompt: "In y equals A sine of B times t minus C plus D, what does positive C do?", answer: "It creates a rightward timing shift.", explanation: "The event occurs later in time coordinates." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Hip-Rotation Timing Comparison",
        scenario: "Player A uses y equals sine of four times t minus 0.01, and Player B uses y equals sine of four times t minus 0.03.",
        walkthrough: [
          "Recognize equal B values imply equal period.",
          "Compare C values to measure timing lag.",
          "Compute lag of two hundredths of a second.",
          "Interpret whether lag could impact contact synchronization."
        ],
        takeaway: "Phase isolates timing differences even when movement shape and frequency match."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Find period for y equals cosine of five t.", answer: "The period is two pi over five." },
          { prompt: "If C equals 0.04 in sine of B times t minus C, what is shift direction?", answer: "The shift direction is to the right." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Two signals share A and B but differ in C by 0.015; interpret difference.", answer: "They differ by a 0.015-second timing offset.", explanation: "Only phase position changes." },
          { prompt: "If B increases while all else stays fixed, what happens to period?", answer: "Period becomes shorter.", explanation: "Period is inversely proportional to B." },
          { prompt: "Name one baseball event that should anchor phase comparison.", answer: "Foot strike is a useful anchor event.", explanation: "Anchors keep timing comparisons meaningful." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one line describing how phase drift could signal fatigue.", answer: "Consistent late-cycle phase shift across innings can indicate accumulating fatigue effects." },
          { prompt: "Name one reporting pitfall for phase metrics.", answer: "Comparing phase values without a shared event reference can be misleading." }
        ]
      }
    ],
    commonMistakes: [
      "Calling vertical shifts phase changes.",
      "Comparing phase without shared reference events.",
      "Confusing cycle duration with cycle index count."
    ],
    lessonSummary:
      "Phase and period quantify baseball timing structure with precision that supports actionable coaching decisions. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Design a short monitoring plan that tracks phase drift for a pitcher across an outing.",
    nextLessonBridge:
      "Next we separate movement size and repetition pace through amplitude and frequency analysis.",
    professorNotes:
      "Require students to state time origin and event anchor whenever phase is reported.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "pps-a1",
        type: "exact",
        prompt: "What is the period of y equals sine of three t?",
        correctAnswer: "2pi/3",
        acceptedAnswers: ["2*pi/3"],
        explanation: "Period equals two pi divided by absolute B."
      },
      {
        id: "pps-a2",
        type: "exact",
        prompt: "If B equals four, what is period in y equals sine of B t?",
        correctAnswer: "pi/2",
        acceptedAnswers: ["0.5pi"],
        explanation: "Two pi divided by four equals pi over two."
      },
      {
        id: "pps-a3",
        type: "mcq",
        prompt: "Changing C in y equals A sine of B times t minus C plus D mainly changes:",
        options: ["Amplitude magnitude", "Timing position", "Vertical baseline only", "Frequency only"],
        correctAnswer: "Timing position",
        explanation: "C controls horizontal phase shift."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::amplitude-frequency-and-signal-interpretation": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::amplitude-frequency-and-signal-interpretation",
    title: "Amplitude, Frequency, And Signal Interpretation",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Functions, Transformations, And Signals",
    whyItMatters:
      "Sensor traces in baseball often look similar at first glance, but underlying movement stories can be very different. Amplitude describes movement range, while frequency describes repetition pace. Confusing these leads to poor interventions: a player may be told to move faster when the real issue is excessive movement range, or vice versa. Analysts need to separate size and speed of oscillation clearly, then communicate each in a way coaches can act on. This distinction matters in hitting rhythm, rotational sequencing, and recovery monitoring. It also matters for data quality, because sampling limits can distort apparent frequency. This lesson builds a disciplined interpretation framework so learners can diagnose signal behavior accurately and avoid overconfident conclusions from compressed charts. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "Two hitters present torso-angle graphs that look almost identical in a dashboard thumbnail. Once the analyst expands time and amplitude scales, one athlete shows larger movement range while the other cycles faster through smaller range. That distinction changes training direction entirely. The first athlete may need tighter movement control, while the second may need timing stability under velocity stress. A single vague label would miss both opportunities.",
    narrativeFlow: [
      "Define amplitude and frequency with baseball-specific language.",
      "Translate between frequency and period for easy communication.",
      "Interpret combined parameter changes in athlete-monitoring scenarios.",
      "Introduce sampling-aware caution for signal-reading reliability."
    ],
    objectives: [
      "Extract amplitude and frequency from sinusoidal model forms.",
      "Describe baseball implications of each parameter independently.",
      "Avoid misinterpretation caused by scale and sampling artifacts."
    ],
    prerequisites: ["Function transformation basics", "Periodic function familiarity", "Graph interpretation"],
    conceptChunks: [
      {
        heading: "Movement Range Versus Repetition Pace",
        explainLikeCoach:
          "Amplitude answers how far, frequency answers how often. Keeping these questions separate makes recommendations sharper. Coaches can then choose whether to target range control, rhythm speed, or both. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "In y=A sin(Bt+phi)+D, amplitude is |A| and frequency is |B|/(2pi) cycles per unit time. Period is reciprocal of frequency, giving an alternate timing description for staff communication.",
        equation: "\\[\\text{amplitude} = |A|,\\ \\text{frequency} = \\frac{|B|}{2\\pi}\\]"
      },
      {
        heading: "Parameter Changes And Player Interpretation",
        explainLikeCoach:
          "Bigger oscillation is not automatically better, and faster oscillation is not automatically better. Analysts should tie each change to performance goals, not aesthetics.",
        formalNote:
          "Parameter comparisons across sessions should preserve unit consistency and normalization context. Interpretation should distinguish beneficial adaptation from compensatory instability.",
        equation: "\\[\\text{compare } \\Delta A \\text{ and } \\Delta f \\text{ separately}\\]"
      },
      {
        heading: "Sampling Limits And Apparent Frequency",
        explainLikeCoach:
          "If your camera rate is too low, fast movement can look slower or erratic. Analysts need this awareness before assigning blame to mechanics.",
        formalNote:
          "Frequency inference depends on acquisition cadence. Nyquist-style constraints indicate sampling rate should exceed twice highest signal frequency of interest to reduce aliasing risk.",
        equation: "\\[f_{\\mathrm{sample}} > 2 f_{\\mathrm{signal}}\\]"
      }
    ],
    quickChecks: [
      { prompt: "In y equals four sine of six t, what is amplitude?", answer: "Amplitude equals four units.", explanation: "Absolute value of coefficient A." },
      { prompt: "In y equals four sine of six t, what is frequency?", answer: "Frequency equals six over two pi.", explanation: "Use B divided by two pi." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Shoulder Rotation Signal Comparison",
        scenario: "Player X uses y equals ten sine of eight t, and Player Y uses y equals fourteen sine of six t.",
        walkthrough: [
          "Compare amplitudes to identify larger movement range.",
          "Compare B values to identify faster repetition pace.",
          "Discuss different training implications for each profile.",
          "Avoid collapsing both dimensions into a single vague score."
        ],
        takeaway: "Amplitude and frequency capture different movement qualities and should be reported separately."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Find amplitude of y equals negative seven cosine of three t.", answer: "Amplitude is seven units." },
          { prompt: "Find frequency of y equals sine of two pi t.", answer: "Frequency is one cycle per unit time." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "If B doubles and all else is fixed, what happens to frequency?", answer: "Frequency exactly doubles.", explanation: "Frequency is directly proportional to B." },
          { prompt: "If amplitude decreases while frequency increases, describe visible pattern.", answer: "The signal becomes smaller but cycles more quickly.", explanation: "Range shrinks while timing compresses." },
          { prompt: "Name one risk when comparing frequencies from low-sample-rate data.", answer: "Aliasing can create misleading apparent cycle rates.", explanation: "Sampling limits can distort interpretation." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence for a coach that separates range and pace findings.", answer: "Your movement range decreased while your rhythm speed increased, so we should train stability at that quicker tempo." },
          { prompt: "Name one dashboard feature that reduces amplitude-frequency confusion.", answer: "Always display amplitude and frequency in separate labeled summary fields." }
        ]
      }
    ],
    commonMistakes: [
      "Confusing angular frequency with cycle frequency.",
      "Treating negative A as negative amplitude rather than reflection.",
      "Ignoring sample-rate limitations during signal interpretation."
    ],
    lessonSummary:
      "Amplitude and frequency answer different baseball questions and must be interpreted independently. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Create a short reporting template that communicates amplitude and frequency changes to coaches clearly.",
    nextLessonBridge:
      "Next we maintain geometric consistency across coordinate systems used by different baseball data vendors.",
    professorNotes:
      "Insist on explicit units for each frequency metric to prevent cross-report confusion.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "afs-a1",
        type: "exact",
        prompt: "If B equals four pi, what is frequency?",
        correctAnswer: "2",
        acceptedAnswers: ["2 cycles per unit", "2.0"],
        explanation: "Frequency equals B divided by two pi."
      },
      {
        id: "afs-a2",
        type: "exact",
        prompt: "In y equals negative nine cosine of five t, what is amplitude?",
        correctAnswer: "9",
        acceptedAnswers: ["9.0"],
        explanation: "Amplitude is absolute value of coefficient A."
      },
      {
        id: "afs-a3",
        type: "mcq",
        prompt: "Higher frequency primarily indicates:",
        options: ["Larger movement range", "Faster cycle repetition", "Higher vertical offset", "Lower sensor noise by default"],
        correctAnswer: "Faster cycle repetition",
        explanation: "Frequency counts cycles per unit time."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::polar-cartesian-and-spherical-coordinate-conversions": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::polar-cartesian-and-spherical-coordinate-conversions",
    title: "Polar, Cartesian, And Spherical Coordinate Conversions",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Functions, Transformations, And Signals",
    whyItMatters:
      "Baseball data arrives from systems that do not agree on coordinate style. Some feeds provide Cartesian components, others provide polar direction with magnitude, and some three-dimensional systems provide spherical direction definitions with vendor-specific conventions. If analysts cannot convert cleanly between these representations, model integration fails and interpretation drifts. Reliable conversion protects geometry across simulation, visualization, and decision pipelines. It also protects communication, because one team might speak in launch direction and elevation while another speaks in x-y-z components. This lesson teaches conversion formulas, convention-declaration habits, and round-trip validation so learners can merge heterogeneous baseball data without silent distortions. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A vendor sends batted-ball records as azimuth, elevation, and speed magnitude, but your simulation stack expects x, y, and z components. If conversion is wrong by just one convention assumption, every downstream chart looks plausible while being physically off. During a deadline push, that is exactly how trust is lost. Strong analysts therefore pair formula execution with explicit convention notes and reconstruction checks. This lesson builds that reliability mindset.",
    narrativeFlow: [
      "Define what each coordinate system measures directly.",
      "Apply conversion equations in both two-dimensional and three-dimensional cases.",
      "Document convention choices to prevent cross-team ambiguity.",
      "Validate transformations with round-trip geometric checks."
    ],
    objectives: [
      "Convert between polar and Cartesian coordinates in two dimensions.",
      "Convert between spherical and Cartesian coordinates in three dimensions.",
      "Use validation checks to detect coordinate-convention errors."
    ],
    prerequisites: ["Trig functions", "Vector components", "Basic three-dimensional axes"],
    conceptChunks: [
      {
        heading: "Changing Coordinate Lenses Without Changing Physics",
        explainLikeCoach:
          "Switching coordinate systems should be like switching camera angle, not changing the play. The ball path is the same object; only representation changes. Keeping that mindset helps analysts avoid accidental reinterpretation. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "In two dimensions, x=r cos(theta), y=r sin(theta), r=sqrt(x^2+y^2), and theta=atan2(y,x). These transformations preserve geometry except directional ambiguity at the origin where angle is undefined.",
        equation: "\\[x = r\\cos\\theta,\\quad y = r\\sin\\theta\\]"
      },
      {
        heading: "Three-Dimensional Launch Representation",
        explainLikeCoach:
          "Spherical coordinates are compact for direction-plus-magnitude, especially in tracking feeds. But everyone must agree on angle definitions before comparisons begin.",
        formalNote:
          "Using radius rho, azimuth alpha, and elevation beta, a common convention is x=rho cos(beta)cos(alpha), y=rho cos(beta)sin(alpha), z=rho sin(beta). Vendor documentation must be checked because angle naming can vary.",
        equation: "\\[x = \\rho\\cos\\beta\\cos\\alpha,\\ y = \\rho\\cos\\beta\\sin\\alpha,\\ z = \\rho\\sin\\beta\\]"
      },
      {
        heading: "Round-Trip Validation For Data Integrity",
        explainLikeCoach:
          "After conversion, convert back and verify you land near the original values. This simple habit catches many hidden assumptions before they pollute reports.",
        formalNote:
          "Round-trip tests compare initial and reconstructed coordinates under declared tolerance bounds. Failures often indicate unit mismatch, axis ordering mistakes, or incorrect angle convention assumptions.",
        equation: "\\[\\text{input} \\rightarrow \\text{transform} \\rightarrow \\text{inverse transform} \\rightarrow \\text{compare}\\]"
      }
    ],
    quickChecks: [
      { prompt: "If polar values are r five and theta zero, what Cartesian point appears?", answer: "The point is five comma zero.", explanation: "Cosine of zero is one and sine of zero is zero." },
      { prompt: "For x zero and y positive, what angle does atan2 return?", answer: "The angle is pi over two radians.", explanation: "The point lies on the positive y-axis." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Converting Vendor Spherical Feed",
        scenario: "Given rho one hundred, alpha twenty degrees, and beta twenty-five degrees, produce x-y-z components.",
        walkthrough: [
          "Convert input angles to radians if required by implementation.",
          "Apply the declared spherical-to-Cartesian formulas.",
          "Reconstruct magnitude from x-y-z to verify consistency.",
          "Record convention assumptions in metadata for reproducibility."
        ],
        takeaway: "Formula correctness plus convention clarity is required for trustworthy coordinate integration."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Convert polar r ten and theta sixty degrees to x.", answer: "The x component is five units." },
          { prompt: "Convert polar r ten and theta sixty degrees to y.", answer: "The y component is about 8.66 units." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Given x three and y four, compute radius r.", answer: "Radius equals five units.", explanation: "Use the square root of nine plus sixteen." },
          { prompt: "Given x three and y four, estimate theta.", answer: "Theta is about 53.13 degrees.", explanation: "Use atan2(4, 3)." },
          { prompt: "Name one required note when consuming spherical vendor data.", answer: "Document the exact azimuth and elevation convention used by the feed.", explanation: "Conventions vary across systems." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Describe one automated test for coordinate conversion code.", answer: "Implement round-trip conversion tests and assert errors remain below tolerance." },
          { prompt: "Write one sentence explaining why origin angle can be undefined.", answer: "At zero radius every direction is equivalent, so theta has no unique value." }
        ]
      }
    ],
    commonMistakes: [
      "Assuming spherical angle definitions are universal across vendors.",
      "Skipping degree-to-radian conversion in trig function calls.",
      "Failing to run round-trip validation after implementation."
    ],
    lessonSummary:
      "Reliable coordinate conversion preserves geometry and trust across baseball data systems. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Write a conversion-spec note including formulas, conventions, and validation checks for a new tracking feed.",
    nextLessonBridge:
      "Next we calibrate transformed functions so converted data aligns with observed baseball signals.",
    professorNotes:
      "Require explicit convention declarations in submissions, even when formulas are mathematically correct.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "pcs-a1",
        type: "exact",
        prompt: "For polar radius thirteen and x component five with positive y, what is y?",
        correctAnswer: "12",
        acceptedAnswers: ["12.0"],
        explanation: "Use the square root of radius squared minus x squared."
      },
      {
        id: "pcs-a2",
        type: "exact",
        prompt: "Given x three and y four, what is radius r?",
        correctAnswer: "5",
        acceptedAnswers: ["5.0"],
        explanation: "Radius equals the square root of x squared plus y squared."
      },
      {
        id: "pcs-a3",
        type: "mcq",
        prompt: "Best default function for recovering angle from x and y is:",
        options: ["arccos of x only", "arcsin of y only", "atan2(y, x)", "tangent of y over x without context"],
        correctAnswer: "atan2(y, x)",
        explanation: "atan2 provides quadrant-safe angle recovery."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::function-transformations-and-model-calibration": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::function-transformations-and-model-calibration",
    title: "Function Transformations And Model Calibration",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Functions, Transformations, And Signals",
    whyItMatters:
      "A mathematically elegant parent function is only the beginning of baseball modeling work. Real data requires calibration: shifting baselines, scaling amplitudes, adjusting timing, and tuning cycle rate to match observed behavior. Transformation parameters provide this flexibility while preserving interpretability. In baseball contexts, that means adapting shared model structure to player-specific mechanics, game-state conditions, and measurement realities. Analysts who calibrate without interpretation risk overfitting and poor communication, while analysts who avoid calibration leave useful signal unexplained. This lesson combines both perspectives. Students learn how to tune transformed functions responsibly, validate residual behavior, and communicate parameter meaning in language that coaching staff can use. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "An analyst starts with a clean sinusoid for bat-angle progression, but the curve misses baseline and timing against real session data. A quick transformation pass aligns baseline, amplitude, and phase, and fit improves immediately. The key question then becomes not just whether fit improved, but whether each parameter still maps to a meaningful baseball story. When that mapping holds, calibration becomes a decision tool rather than an opaque curve fit.",
    narrativeFlow: [
      "Start from parent-function structure and map each transformation to baseball meaning.",
      "Estimate transformation parameters from observed anchors and constraints.",
      "Evaluate fit quality through residual inspection rather than headline error alone.",
      "Balance calibration accuracy with interpretability and deployment reliability."
    ],
    objectives: [
      "Apply shifts and scalings in transformed model equations.",
      "Estimate interpretable parameters from observed signal landmarks.",
      "Diagnose calibration quality using residual structure."
    ],
    prerequisites: ["Function transformations", "Periodic model basics", "Residual interpretation"],
    conceptChunks: [
      {
        heading: "Parent Function To Player-Specific Fit",
        explainLikeCoach:
          "Start with a trusted shape, then tune where it sits, how tall it is, and when it peaks. That process lets one model family adapt to many athletes while staying understandable. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "General transformed form y=A f(B(t-C))+D supports amplitude scaling, horizontal scaling, phase shift, and vertical translation. Parameters should be tied to observable landmarks to preserve interpretability.",
        equation: "\\[y = A\\,f\\bigl(B(t-C)\\bigr) + D\\]"
      },
      {
        heading: "Residuals Reveal What Calibration Missed",
        explainLikeCoach:
          "A low average error can still hide systematic misses. Residual patterns tell whether your model form is wrong, your parameters are wrong, or your data preprocessing is wrong.",
        formalNote:
          "Residuals e_i=y_i-y_hat_i should be checked for bias, trend, and heteroscedasticity. Patterned residuals often indicate structural mismatch rather than random noise.",
        equation: "\\[e_i = y_i - \\hat{y}_i\\]"
      },
      {
        heading: "Interpretability Guardrails During Tuning",
        explainLikeCoach:
          "If a fitted model cannot be explained to coaches, it is difficult to trust in decision contexts. Keep parameter meanings visible throughout calibration.",
        formalNote:
          "Calibration workflows should include parameter bounds, interpretation notes, and out-of-sample checks to prevent overfit while maintaining actionable meaning.",
        equation: "\\[\\text{fit quality} + \\text{interpretability} + \\text{generalization}\\]"
      }
    ],
    quickChecks: [
      { prompt: "In y equals A sine of B times t minus C plus D, which parameter shifts baseline?", answer: "Parameter D shifts the baseline.", explanation: "D controls vertical translation." },
      { prompt: "If absolute B increases, what happens to period?", answer: "The period decreases.", explanation: "Period equals two pi over absolute B." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Calibrating A Bat-Angle Oscillation",
        scenario: "Observed signal centers near twelve degrees, has amplitude eight degrees, and repeats every 0.18 seconds.",
        walkthrough: [
          "Set D from observed baseline and A from amplitude.",
          "Compute B using period relation two pi over T.",
          "Estimate C from event alignment such as upward crossing near contact.",
          "Inspect residuals for remaining structure before finalizing."
        ],
        takeaway: "Calibrated parameters should be both numerically effective and physically interpretable."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name the parameter that controls vertical shift in transformed form.", answer: "Vertical shift is controlled by parameter D." },
          { prompt: "If amplitude doubles, which parameter changed?", answer: "The amplitude scaling parameter A changed." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Target period is 0.5 seconds; what B should sine use?", answer: "B should be four pi.", explanation: "Compute two pi divided by 0.5." },
          { prompt: "Residuals are consistently positive; what does that imply?", answer: "Predictions are systematically too low.", explanation: "Observed values exceed fitted values." },
          { prompt: "State one reason to bound parameters during calibration.", answer: "Bounds prevent unrealistic fits and improve interpretability.", explanation: "Unbounded optimization can overfit noise." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence linking phase parameter C to baseball interpretation.", answer: "Parameter C captures when the motion cycle is positioned relative to key events like contact." },
          { prompt: "Name one out-of-sample check after calibration.", answer: "Evaluate residual behavior on a separate session before deployment." }
        ]
      }
    ],
    commonMistakes: [
      "Tuning parameters without physical interpretation.",
      "Declaring success from one metric without residual diagnostics.",
      "Adding complexity that improves fit but harms explainability."
    ],
    lessonSummary:
      "Transformation-based calibration makes models player-specific while preserving interpretable baseball meaning. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Draft a calibration checklist for fitting a transformed sinusoid to a new player session.",
    nextLessonBridge:
      "Next we combine multiple calibrated components in a synthesis workshop for richer signal modeling.",
    professorNotes:
      "Require one baseball interpretation sentence per parameter in all calibration assignments.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "ftc-a1",
        type: "exact",
        prompt: "If target period is 0.25 seconds, what B value should sine use?",
        correctAnswer: "8pi",
        acceptedAnswers: ["8*pi"],
        explanation: "B equals two pi divided by period."
      },
      {
        id: "ftc-a2",
        type: "exact",
        prompt: "In y equals A sine of B times t minus C plus D, which symbol gives vertical shift?",
        correctAnswer: "D",
        acceptedAnswers: ["d"],
        explanation: "D is the vertical translation term."
      },
      {
        id: "ftc-a3",
        type: "mcq",
        prompt: "A clear residual trend most strongly suggests:",
        options: ["Perfect model form", "Possible model mismatch", "No need for interpretation", "Data units are irrelevant"],
        correctAnswer: "Possible model mismatch",
        explanation: "Patterned residuals indicate missing structure."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::precalculus-signal-synthesis-workshop": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::precalculus-signal-synthesis-workshop",
    title: "Precalculus Signal Synthesis Workshop",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Functions, Transformations, And Signals",
    whyItMatters:
      "Real baseball signals usually blend several processes: long-term trend, short-term periodic rhythm, and event-driven disruptions. Single-function models often miss these layered behaviors. Signal synthesis teaches analysts how to combine interpretable pieces into a composite model that better reflects reality without collapsing into black-box complexity. This is valuable for release metrics, swing timing traces, fatigue indicators, and recovery patterns. The goal is not maximal curve fit at any cost. The goal is an additive structure where each term has a baseball story, a testable contribution, and a communication path to coaches. This workshop style lesson asks learners to practice model construction, ablation reasoning, and complexity discipline in one integrated setting. Pitchers and hitters both exhibit multi-timescale behavior, so synthesis skills transfer across roles. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A pitcher performance metric drifts downward across the season, oscillates within games, and spikes after extra rest. Analysts who fit one clean sinusoid miss trend and spikes; analysts who fit only trend miss in-game rhythm. A composite model captures all three with clear interpretation. During review, coaches can see which part is fatigue drift, which part is normal cycle, and which part is context event. That separation is what turns math into strategy.",
    narrativeFlow: [
      "Decompose observed behavior into interpretable additive components.",
      "Select function families that match each hypothesized mechanism.",
      "Combine components and evaluate incremental value with ablation tests.",
      "Communicate synthesis outputs with clarity about assumptions and limits."
    ],
    objectives: [
      "Build composite models from trend, periodic, and event terms.",
      "Explain baseball meaning of each component parameter set.",
      "Use ablation logic to justify model complexity."
    ],
    prerequisites: ["Function calibration", "Periodic modeling", "Residual diagnostics"],
    conceptChunks: [
      {
        heading: "Additive Decomposition For Baseball Processes",
        explainLikeCoach:
          "Think of model terms as roles on a roster. Each role should do one clear job. If two terms do the same job, simplify. If an important job is missing, add the right piece. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Composite form can be written as y(t)=g_trend(t)+g_periodic(t)+g_event(t). Each component should correspond to a hypothesized mechanism with interpretable parameters and testable contribution.",
        equation: "\\[y(t) = g_1(t) + g_2(t) + g_3(t)\\]"
      },
      {
        heading: "Ablation To Prove Component Value",
        explainLikeCoach:
          "Do not keep a term just because it improves one chart slightly. Remove it and test impact. If the model barely changes, the term may be decorative.",
        formalNote:
          "Ablation compares performance and residual structure with and without specific components, quantifying marginal contribution and guarding against unnecessary complexity.",
        equation: "\\[\\Delta e = e_{\\mathrm{drop}} - e_{\\mathrm{keep}}\\ \\text{(model comparison)}\\]"
      },
      {
        heading: "Complexity Control For Durable Models",
        explainLikeCoach:
          "A model that explains everything yesterday but nothing tomorrow is not helpful. Keep structure simple enough to generalize and explain.",
        formalNote:
          "Complexity discipline includes parameter parsimony, cross-session validation, and explicit rationale for each added term.",
        equation: "\\[\\text{prefer minimal model that meets decision needs}\\]"
      }
    ],
    quickChecks: [
      { prompt: "What is one benefit of additive decomposition?", answer: "Each term can be interpreted and validated separately.", explanation: "Interpretability improves communication and trust." },
      { prompt: "What is one risk of too many synthesis terms?", answer: "The model can overfit and fail to generalize.", explanation: "Excess flexibility often harms robustness." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Release Height Composite Modeling",
        scenario: "Build a model with linear drift, inning-scale oscillation, and post-rest bump behavior.",
        walkthrough: [
          "Specify trend term for long-horizon drift.",
          "Specify periodic term for within-game rhythm.",
          "Specify event term for rest-related bump response.",
          "Run ablation and residual checks to confirm each term adds value."
        ],
        takeaway: "Composite models are strongest when each term has clear process meaning and measurable utility."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Propose a two-term model for trend plus oscillation.", answer: "Use a linear trend plus a sinusoidal oscillation term." },
          { prompt: "Name one signal that might require an event term.", answer: "A sharp post-rest jump in a release-related metric." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Why run ablation tests on composite models?", answer: "Ablation confirms each term adds meaningful predictive value.", explanation: "It prevents decorative complexity." },
          { prompt: "What makes a component interpretable?", answer: "Its parameters map clearly to a baseball process.", explanation: "Interpretability supports coaching use." },
          { prompt: "Give one sign that synthesis complexity is too high.", answer: "Great in-sample fit but unstable out-of-sample behavior.", explanation: "Generalization failure indicates overfit." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence explaining trend and periodic terms to staff.", answer: "The trend term tracks long-horizon drift while the periodic term captures repeating in-game rhythm." },
          { prompt: "Name one report section that should accompany a composite model.", answer: "Include an ablation summary showing contribution of each component." }
        ]
      }
    ],
    commonMistakes: [
      "Adding terms without a process hypothesis.",
      "Evaluating only in-sample fit and ignoring generalization.",
      "Presenting composite outputs without component interpretation."
    ],
    lessonSummary:
      "Signal synthesis combines interpretable components into decision-ready baseball models. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Design a three-component model for one metric and justify each term with a baseball-process explanation.",
    nextLessonBridge:
      "With signal composition complete, we move into vector tools used for directional optimization preparation.",
    professorNotes:
      "Require a one-line baseball interpretation and one ablation metric for every added term.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "pss-a1",
        type: "exact",
        prompt: "Provide a minimal trend-plus-periodic model form.",
        correctAnswer: "mt+b + A sin(B(t-C))",
        acceptedAnswers: ["A sin(B(t-C))+mt+b"],
        explanation: "Linear trend plus sinusoid captures two common processes."
      },
      {
        id: "pss-a2",
        type: "exact",
        prompt: "In y equals g1 plus g2 plus g3, how many additive components are present?",
        correctAnswer: "3",
        acceptedAnswers: ["three"],
        explanation: "Three named additive terms are included."
      },
      {
        id: "pss-a3",
        type: "mcq",
        prompt: "Primary purpose of ablation in synthesis is to:",
        options: ["Increase equations automatically", "Verify component contribution", "Remove all periodic terms", "Eliminate residual checks"],
        correctAnswer: "Verify component contribution",
        explanation: "Ablation quantifies whether each term materially helps."
      }
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "precalc-signal-synthesis-memo",
      title: "Summative: Composite signal model memo",
      intro:
        "Build a defensible composite model write-up for a coach or analyst lead. Use the rubric to verify each term has baseball meaning and ablation evidence.",
      taskPrompt:
        "Choose one baseball time-series (for example bullpen usage, swing timing trace, or recovery metric). Specify at least three additive components (trend, periodic, event), write the composite form with interpreted parameters, describe one ablation you would run to justify dropping a term, and close with residual diagnostics you would watch in production.",
    }),
  },
  "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::dot-product-projection-and-directional-influence": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::dot-product-projection-and-directional-influence",
    title: "Dot Product, Projection, And Directional Influence",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Vectors And Optimization Preparation",
    whyItMatters:
      "Many baseball decisions are directional rather than purely scalar. Bat speed matters less if direction misaligns with incoming pitch trajectory. Wind influence matters only to the extent that it projects onto the ball’s travel direction. Dot product and projection quantify these relationships cleanly. They support contact-quality feature design, movement influence estimation, and optimization objective construction. Without them, analysts often rely on eye test or loosely correlated proxy metrics. This lesson formalizes directional influence so recommendations can be measured, compared, and validated across contexts.",
    lessonOpener:
      "A hitter appears fast in training clips, yet game contact remains inconsistent. Component magnitudes look fine, but directional alignment against pitch plane is weak. Dot product analysis reveals that much of the bat movement is not contributing toward useful contact direction. Once staff focuses on directional projection instead of raw speed, training cues become specific and results improve.",
    narrativeFlow: [
      "Define dot product as magnitude-plus-alignment interaction.",
      "Interpret sign and scale in baseball directional contexts.",
      "Use projection to isolate effective directional contribution.",
      "Translate vector metrics into practical coaching recommendations."
    ],
    objectives: [
      "Compute and interpret dot products from vectors or angle form.",
      "Compute scalar and vector projections for directional contribution.",
      "Use alignment metrics in baseball feature and decision design."
    ],
    prerequisites: ["Vector components", "Trig angle meaning", "Component sign fluency"],
    conceptChunks: [
      {
        heading: "Alignment Strength Through Dot Product",
        explainLikeCoach:
          "Dot product tells how much one movement supports another direction. A large positive value means useful alignment. Near zero means sideways influence. Negative means opposition. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For vectors a and b, a dot b equals |a||b|cos(theta) and also equals component sum products. Sign indicates orientation relation; magnitude combines scale and alignment.",
        equation: "\\[a\\cdot b = \\lVert a\\rVert\\,\\lVert b\\rVert\\cos\\theta\\]"
      },
      {
        heading: "Projection As Useful Portion Of Motion",
        explainLikeCoach:
          "Projection answers the practical question: how much of this vector actually helps along the target direction? That is often the number coaches care about.",
        formalNote:
          "Scalar projection of vector a onto unit direction u is a dot u. Vector projection onto b is ((a dot b)/(b dot b))b, preserving direction structure.",
        equation: "\\[\\mathrm{proj}_b(a) = \\frac{a\\cdot b}{b\\cdot b}\\,b\\]"
      },
      {
        heading: "Normalization For Cross-Player Comparison",
        explainLikeCoach:
          "Raw dot values can look bigger just because one athlete has larger overall speed. Normalize when comparing players to avoid misleading rankings.",
        formalNote:
          "Cosine similarity, (a dot b)/(|a||b|), isolates directional alignment independent of magnitude and is useful for fair cross-context comparison.",
        equation: "\\[\\cos\\theta = \\frac{a\\cdot b}{\\lVert a\\rVert\\,\\lVert b\\rVert}\\]"
      },
      {
        heading: "Projection Along The Exit Corridor That Actually Matters",
        explainLikeCoach:
          "In-game value often depends on how much bat velocity pushes the ball toward playable outfield grass for the matchup, not on how impressive the swing looks in isolation. Projection onto a unit vector along that corridor answers how much speed is doing useful work versus leaking sideways. Coaches can then cue small path tweaks when alignment is weak even if radar numbers look strong.",
        formalNote:
          "Let v be bat-velocity vector and u be a unit vector along the targeted exit corridor. Scalar projection v dot u measures effective speed along u, while the orthogonal component magnitude sqrt(|v|^2-(v dot u)^2) captures wasted perpendicular motion. Pairing these two scalars yields an interpretable alignment summary for Statcast-era dashboards without discarding magnitude information.",
        equation: "\\[\\text{effective speed} = v\\cdot u\\]"
      }
    ],
    quickChecks: [
      { prompt: "If two vectors are perpendicular, what is dot product?", answer: "The dot product equals zero.", explanation: "Cosine of ninety degrees is zero." },
      { prompt: "If vectors align closely, what happens to cosine term?", answer: "Cosine approaches one.", explanation: "Small angle means strong alignment." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Bat-To-Pitch Direction Score",
        scenario: "Bat velocity is twenty-eight comma ten and pitch direction is thirty-five comma minus five.",
        walkthrough: [
          "Compute component-product sum to obtain dot value.",
          "Assess sign and scale relative to vector norms.",
          "Optionally compute cosine similarity for normalization.",
          "Translate result into directional-contact coaching implications."
        ],
        takeaway: "Directional alignment can be quantified directly instead of inferred qualitatively."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Compute dot product of vectors one-two and three-four.", answer: "The dot product is eleven." },
          { prompt: "Compute dot product of vectors two-zero and zero-five.", answer: "The dot product is exactly zero." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Given magnitudes five and six with sixty-degree angle, compute dot value.", answer: "The dot product equals fifteen.", explanation: "Multiply magnitudes and cosine sixty." },
          { prompt: "Interpret a negative dot product in baseball terms.", answer: "Directional influence is opposing rather than supportive.", explanation: "Angle exceeds ninety degrees." },
          { prompt: "Name one reason to normalize dot metrics across players.", answer: "Normalization separates directional alignment from raw speed differences.", explanation: "Fair comparison requires scale control." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence defining projection for coaches.", answer: "Projection measures how much of a movement actually points in the direction that matters." },
          { prompt: "Name one dashboard metric derived from dot products.", answer: "Cosine similarity can serve as an alignment quality score." }
        ]
      }
    ],
    commonMistakes: [
      "Confusing high magnitude with strong alignment automatically.",
      "Ignoring sign, which removes opposition information.",
      "Comparing raw dots across unmatched scale contexts."
    ],
    lessonSummary:
      "Dot product and projection quantify directional influence central to baseball decision models. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Design a normalized bat-to-pitch alignment feature and explain how coaches should interpret it.",
    nextLessonBridge:
      "Next we add cross-product reasoning to capture orientation and spin-direction effects.",
    professorNotes:
      "Require both raw and normalized alignment reporting to prevent interpretation shortcuts.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "dpp-a1",
        type: "exact",
        prompt: "Compute dot of vectors four-one and two-three.",
        correctAnswer: "11",
        acceptedAnswers: ["11.0"],
        explanation: "Multiply corresponding components and sum."
      },
      {
        id: "dpp-a2",
        type: "exact",
        prompt: "If magnitudes are five and six with angle sixty degrees, what is dot value?",
        correctAnswer: "15",
        acceptedAnswers: ["15.0"],
        explanation: "Use magnitude-angle form with cosine."
      },
      {
        id: "dpp-a3",
        type: "mcq",
        prompt: "A dot product of zero indicates vectors are:",
        options: ["Parallel", "Perpendicular", "Identical length", "Always opposite"],
        correctAnswer: "Perpendicular",
        explanation: "Zero cosine indicates a right angle."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::cross-product-intuition-for-spin-and-orientation": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::cross-product-intuition-for-spin-and-orientation",
    title: "Cross Product Intuition For Spin And Orientation",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Vectors And Optimization Preparation",
    whyItMatters:
      "Dot product handles alignment, but baseball orientation questions often require perpendicular structure. Spin-axis interpretation, movement-plane normals, and directional side effects in three dimensions all benefit from cross-product reasoning. The cross product provides both magnitude, tied to sine of angle, and direction, tied to right-hand orientation. This combination is essential when analysts model how orientation differences influence movement behavior. Without cross-product intuition, teams can describe spin rate yet miss how spin direction changes outcomes. This lesson introduces cross-product geometry as a practical analysis tool rather than abstract linear-algebra trivia.",
    lessonOpener:
      "Two pitches share similar velocity and spin rate, but one breaks differently because spin axis orientation changes. Surface-level metrics suggest parity, yet movement outcomes disagree. Cross-product analysis captures orientation separation and directional normal vectors, revealing why the movement profile shifts. Once staff sees this geometry, pitch design conversations become more precise and less argumentative. Analysts can also relate cross magnitude to seam-shifted wake hypotheses by describing how much three-dimensional orientation departs from the velocity ray, which keeps biomechanics and pitch-tunnel narratives tied to the same vector picture.",
    narrativeFlow: [
      "Define cross product magnitude and direction geometrically.",
      "Apply right-hand rule to maintain directional consistency.",
      "Interpret near-zero and high-magnitude cases in baseball contexts.",
      "Combine cross and dot intuition for fuller orientation analysis."
    ],
    objectives: [
      "Compute cross products correctly in three-dimensional vectors.",
      "Interpret direction using consistent right-hand conventions.",
      "Relate cross magnitude to orientation separation and influence."
    ],
    prerequisites: ["Three-dimensional vectors", "Dot-product basics", "Trig angle interpretation"],
    conceptChunks: [
      {
        heading: "Perpendicular Geometry For Spin Narratives",
        explainLikeCoach:
          "Cross product tells you how strongly two directions create a perpendicular effect. That is exactly what you need when spin orientation drives side movement behavior. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "For vectors a and b, a cross b is orthogonal to both with magnitude |a||b|sin(theta). Direction follows right-hand rule and flips with operand order.",
        equation: "\\[\\lVert a\\times b\\rVert = \\lVert a\\rVert\\,\\lVert b\\rVert\\sin\\theta\\]"
      },
      {
        heading: "Right-Hand Rule As Consistency Contract",
        explainLikeCoach:
          "Direction output is only useful if everyone applies the same rule every time. Right-hand consistency prevents sign confusion across reports and code.",
        formalNote:
          "Cross product is anti-commutative: a cross b equals negative of b cross a. Documentation should explicitly state operand order in feature definitions.",
        equation: "\\[a\\times b = -(b\\times a)\\]"
      },
      {
        heading: "Area Interpretation For Orientation Separation",
        explainLikeCoach:
          "When vectors are almost parallel, cross magnitude is tiny. When they are near perpendicular, cross magnitude grows. That gives an intuitive orientation-separation score.",
        formalNote:
          "Cross magnitude equals area of the parallelogram spanned by vectors, providing a geometric measure of non-parallel interaction strength.",
        equation: "\\[\\mathrm{Area} = \\lVert a\\times b\\rVert\\]"
      }
    ],
    quickChecks: [
      { prompt: "If vectors are parallel, what is cross magnitude?", answer: "Cross magnitude is zero.", explanation: "Sine of zero angle is zero." },
      { prompt: "What is i cross j in standard basis?", answer: "The result is k.", explanation: "Use cyclic right-hand basis order." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Spin Axis And Velocity Orientation Contrast",
        scenario: "Compare spin-axis unit vector and velocity direction to classify perpendicular interaction strength and direction.",
        walkthrough: [
          "Compute cross product components from the two vectors.",
          "Measure magnitude as orientation-separation strength.",
          "Use direction sign to classify side orientation tendency.",
          "Pair with dot metric for full orientation profile."
        ],
        takeaway: "Cross metrics reveal orientation structure that dot metrics alone cannot capture."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Compute i cross k in standard basis.", answer: "The result is negative j." },
          { prompt: "If theta is thirty degrees and magnitudes are two and three, compute cross magnitude.", answer: "Cross magnitude equals three units." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Why can dot and cross metrics tell different stories?", answer: "Dot captures parallel alignment while cross captures perpendicular interaction.", explanation: "They measure different geometric relationships." },
          { prompt: "What does near-zero cross magnitude imply?", answer: "Vectors are nearly parallel or anti-parallel.", explanation: "Sine of angle is near zero." },
          { prompt: "Name one reason to document operand order in cross features.", answer: "Order changes sign, so undocumented order causes interpretation errors.", explanation: "Cross product is anti-commutative." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence explaining right-hand rule to a coach.", answer: "The cross-product direction follows a consistent hand-rule so orientation signs stay interpretable." },
          { prompt: "Name one combined feature using dot and cross values.", answer: "Use cosine alignment plus cross magnitude to summarize full directional relationship." }
        ]
      }
    ],
    commonMistakes: [
      "Reversing operand order without updating sign interpretation.",
      "Ignoring direction and using magnitude only in directional tasks.",
      "Applying inconsistent right-hand conventions across tools."
    ],
    lessonSummary:
      "Cross-product reasoning adds essential orientation insight for spin and three-dimensional baseball analysis. Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.",
    synthesisPrompt:
      "Design a two-metric orientation summary that combines dot and cross information for pitch analysis.",
    nextLessonBridge:
      "Next we apply vector insights to constrained angle optimization in practical baseball decisions.",
    professorNotes:
      "Require students to annotate operand order in every cross-product equation and code snippet.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "cpi-a1",
        type: "exact",
        prompt: "Compute j cross k in standard basis.",
        correctAnswer: "i",
        acceptedAnswers: ["+i"],
        explanation: "Standard basis follows i, j, k cyclic ordering."
      },
      {
        id: "cpi-a2",
        type: "exact",
        prompt: "If |a| equals four, |b| equals five, and angle is ninety degrees, what is |a cross b|?",
        correctAnswer: "20",
        acceptedAnswers: ["20.0"],
        explanation: "Magnitude equals product times sine of ninety."
      },
      {
        id: "cpi-a3",
        type: "mcq",
        prompt: "Near-zero cross magnitude most strongly indicates vectors are:",
        options: ["Perpendicular", "Parallel-like", "Random length", "Always unit vectors"],
        correctAnswer: "Parallel-like",
        explanation: "Sine near zero occurs near zero or pi angle."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::angle-optimization-under-physical-constraints": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::angle-optimization-under-physical-constraints",
    title: "Angle Optimization Under Physical Constraints",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Vectors And Optimization Preparation",
    whyItMatters:
      "The best mathematical angle in a simplified equation is often not the best practical angle in real baseball settings. Athletes have biomechanical limits, tactical contexts change, and risk penalties matter. Optimization must therefore operate inside feasible regions defined by mechanics, game plan, and uncertainty. Analysts who ignore constraints can deliver recommendations that look brilliant on paper but fail in training and competition. This lesson introduces constrained-angle reasoning as preparation for deeper optimization work. It teaches students to define objectives, declare feasible sets, compare interior and boundary candidates, and communicate recommendations as ranges when uncertainty is material. Ballpark dimensions, wind, and handedness matchups can further shrink the feasible window even when a textbook optimum looks attractive. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A naive launch-distance model recommends a very high angle for maximum carry in still air. Coaches reject it immediately because the player cannot repeat that angle and pop-up risk spikes in live games. Once constraints are added for mechanics and contact quality, the recommended region shifts lower and becomes trainable. The revised recommendation is less flashy but far more useful. That is the central lesson: optimize for executable value, not theoretical extremum.",
    narrativeFlow: [
      "Translate baseball goals into explicit objective functions.",
      "Define feasible constraints from mechanics, tactics, and environment.",
      "Compare unconstrained and constrained candidate solutions.",
      "Communicate robust recommendation bands instead of fragile single points."
    ],
    objectives: [
      "Formulate constrained angle optimization problems clearly.",
      "Identify boundary and interior candidates in feasible sets.",
      "Explain practical reasons constrained optima differ from unconstrained ones."
    ],
    prerequisites: ["Trig component intuition", "Optimization basics", "Inequality constraints"],
    conceptChunks: [
      {
        heading: "Objective Functions In Baseball Language",
        explainLikeCoach:
          "Optimization starts by naming what winning means in the context. Distance, line-drive probability, and miss risk can each be part of the objective depending on the scenario. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "A constrained problem seeks argmax f(theta) subject to theta in feasible set F, where F may include interval bounds and additional inequality conditions tied to risk or mechanics.",
        equation: "\\[\\max_{\\theta\\in F} f(\\theta)\\]"
      },
      {
        heading: "Feasible Region Before Peak Hunting",
        explainLikeCoach:
          "Do not chase the best number outside the player’s repeatable zone. First define what is trainable and game-safe, then optimize inside that space.",
        formalNote:
          "If unconstrained optimum lies outside [theta_min,theta_max], constrained optimum is frequently at a boundary. Boundary evaluation is therefore essential.",
        equation: "\\[\\theta^\\ast = \\arg\\max_{\\theta\\in[\\theta_{\\min},\\theta_{\\max}]} f(\\theta)\\]"
      },
      {
        heading: "Robust Recommendations Under Uncertainty",
        explainLikeCoach:
          "A narrow target can be brittle when conditions shift. Offering an angle band with sensitivity notes often gives coaches better real-world guidance.",
        formalNote:
          "Sensitivity analysis near the constrained optimum identifies flat regions where performance is stable, supporting range-based recommendations.",
        equation: "\\[\\text{report } \\theta \\text{ band where } f(\\theta) \\text{ remains near optimum}\\]"
      }
    ],
    quickChecks: [
      { prompt: "If unconstrained optimum exceeds theta_max, where does constrained solution often land?", answer: "It often lands at the upper feasible boundary.", explanation: "Boundary becomes best admissible candidate." },
      { prompt: "What is a feasible region?", answer: "It is the set of values satisfying all constraints.", explanation: "Only feasible values are eligible solutions." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Launch Angle Recommendation With Constraints",
        scenario: "Objective combines expected production reward with pop-up penalty over a feasible angle range of twelve to twenty-eight degrees.",
        walkthrough: [
          "Evaluate objective only within feasible interval.",
          "Check interior critical candidates and both boundaries.",
          "Select best feasible angle or small robust interval.",
          "Communicate recommendation with risk and sensitivity notes."
        ],
        takeaway: "Constrained optimization yields trainable recommendations aligned with real baseball execution."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "State one reason unconstrained optimum may be unusable.", answer: "It may violate mechanical or tactical feasibility limits." },
          { prompt: "If feasible interval is fifteen to twenty-five, is twelve feasible?", answer: "Twelve is not feasible in that interval." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Objective peaks at thirty while feasible upper bound is twenty-four; choose candidate optimum.", answer: "Constrained optimum candidate is twenty-four.", explanation: "Best feasible boundary when interior peak is infeasible." },
          { prompt: "Why report sensitivity around optimum?", answer: "Sensitivity shows whether recommendation is robust to small execution variation.", explanation: "Flat peaks support workable ranges." },
          { prompt: "Name one tactical constraint relevant to angle optimization.", answer: "Pop-up risk limits can cap high-angle recommendations.", explanation: "Objective should include practical downside control." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence explaining why an angle band may beat a single target.", answer: "An angle band remains effective under normal execution noise and changing game context." },
          { prompt: "Name one required section in an optimization memo.", answer: "Include a clearly defined feasible set with justification for each bound." }
        ]
      }
    ],
    commonMistakes: [
      "Optimizing unconstrained formulas and adding constraints informally afterward.",
      "Ignoring uncertainty when presenting final recommendations.",
      "Reporting single points without feasible-range context."
    ],
    lessonSummary:
      "Practical baseball optimization requires feasible constraints, not unconstrained idealization.",
    synthesisPrompt:
      "Draft a constrained-angle recommendation memo that includes feasible range and sensitivity commentary.",
    nextLessonBridge:
      "Next we quantify uncertainty effects through error propagation in trig-based calculations.",
    professorNotes:
      "Ask students to label every constraint source as biomechanical, tactical, environmental, or data-driven.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "aop-a1",
        type: "exact",
        prompt: "If feasible interval is ten to twenty and unconstrained optimum is twenty-four, what constrained choice follows?",
        correctAnswer: "20",
        acceptedAnswers: ["20 degrees"],
        explanation: "Upper boundary is best admissible candidate."
      },
      {
        id: "aop-a2",
        type: "exact",
        prompt: "How many boundaries does a closed interval constraint have?",
        correctAnswer: "2",
        acceptedAnswers: ["two"],
        explanation: "Intervals have lower and upper boundaries."
      },
      {
        id: "aop-a3",
        type: "mcq",
        prompt: "If unconstrained optimum is infeasible, where should you look first?",
        options: ["Ignore constraints", "Feasible boundaries", "Random search only", "Set objective to zero"],
        correctAnswer: "Feasible boundaries",
        explanation: "Boundary solutions are common in constrained settings."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::error-propagation-in-trig-based-calculations": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::error-propagation-in-trig-based-calculations",
    title: "Error Propagation In Trig-Based Calculations",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Vectors And Optimization Preparation",
    whyItMatters:
      "Every baseball data pipeline includes uncertainty from sensors, synchronization, calibration, and preprocessing. Trigonometric transformations can amplify that uncertainty, especially near sensitive angle regions or denominator-heavy expressions. If analysts report only point estimates, decision-makers may over-trust fragile outputs. Error propagation methods provide a quantitative way to estimate reliability bands and communicate risk. This is crucial when recommendations influence player training, lineup choices, or pitch strategy. A model can be mathematically correct and still operationally brittle if uncertainty is ignored. This lesson teaches students to identify sensitivity hotspots, estimate propagated variability, and report uncertainty as a first-class output. Even small calibration drift in launch-angle sensors can widen carry projections enough to change outfield positioning advice. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A tiny launch-angle adjustment seems harmless in raw units, but projected carry changes far more than expected. The staff questions whether the model is unstable or the data is noisy. Error propagation analysis reveals the local sensitivity profile and explains why uncertainty expanded. With that insight, recommendations are reframed as ranges with confidence context instead of misleading point precision.",
    narrativeFlow: [
      "Separate measurement noise from structural model error conceptually.",
      "Use derivative-based sensitivity to estimate local amplification.",
      "Apply first-order propagation approximations in trig contexts.",
      "Communicate uncertainty bands and caveats to stakeholders."
    ],
    objectives: [
      "Identify trig expressions that are locally sensitivity-heavy.",
      "Approximate output uncertainty from input uncertainty estimates.",
      "Report uncertainty-aware conclusions for baseball decisions."
    ],
    prerequisites: ["Basic derivative concepts", "Trig component formulas", "Variance intuition"],
    conceptChunks: [
      {
        heading: "Sensitivity Mapping Before Trusting Outputs",
        explainLikeCoach:
          "If tiny input changes produce huge output swings, recommendation confidence should drop. Sensitivity mapping gives analysts an early warning system before overconfident advice reaches coaches. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Local sensitivity can be approximated via partial derivatives. For y=f(x1,...,xn), first-order variance approximation uses gradient-weighted input variances, with covariance terms when dependencies exist.",
        equation: "\\[\\sigma_y^2 \\approx \\sum_i \\left(\\frac{\\partial f}{\\partial x_i}\\right)^2 \\sigma_i^2\\]"
      },
      {
        heading: "Trig Hotspots And Instability Regions",
        explainLikeCoach:
          "Not all angles are equally safe for inference. Some regions are naturally stable, while others magnify noise rapidly.",
        formalNote:
          "Derivative magnitudes govern local amplification: d(sin theta)/dtheta=cos theta and d(tan theta)/dtheta=sec^2 theta. Tangent-based features can be highly unstable near ninety-degree neighborhoods.",
        equation: "\\[\\frac{d}{d\\theta}\\tan\\theta = \\sec^2\\theta\\]"
      },
      {
        heading: "Uncertainty Communication In Decision Outputs",
        explainLikeCoach:
          "Coaches do not need every variance formula, but they do need honest confidence ranges. That honesty improves trust and tactical planning.",
        formalNote:
          "Decision reports should pair point estimates with uncertainty intervals, sensitivity caveats, and validity-domain notes to prevent misuse.",
        equation: "\\[\\text{report} = \\text{estimate} + \\text{interval} + \\text{caveat}\\]"
      }
    ],
    quickChecks: [
      { prompt: "Near ninety degrees, which is usually more sensitive: sine or tangent?", answer: "Tangent is usually more sensitive there.", explanation: "Its derivative can become very large." },
      { prompt: "Why include uncertainty intervals in baseball reports?", answer: "Intervals show plausible outcome range and decision risk.", explanation: "Point values alone can overstate confidence." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Uncertainty In Horizontal Component",
        scenario: "Use v_x equals v cosine theta with uncertain v and theta measurements.",
        walkthrough: [
          "Compute partial derivative with respect to v.",
          "Compute partial derivative with respect to theta.",
          "Combine derivative-weighted input uncertainties.",
          "Interpret whether resulting interval changes recommendation confidence."
        ],
        takeaway: "Propagation analysis converts hidden fragility into explicit, decision-ready uncertainty context."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "What is derivative of sine theta?", answer: "Derivative is cosine theta." },
          { prompt: "What is derivative of cosine theta?", answer: "Derivative is negative sine theta." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "Why can tangent-based features be unstable near ninety degrees?", answer: "Because secant squared grows very large in that region.", explanation: "Small angle errors become large output shifts." },
          { prompt: "Name one benefit of reporting uncertainty intervals.", answer: "They support risk-aware decisions instead of false precision.", explanation: "Intervals communicate reliability range." },
          { prompt: "When should covariance terms be considered in propagation?", answer: "Include covariance when input errors are meaningfully correlated.", explanation: "Independence assumptions may otherwise understate uncertainty." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one uncertainty caveat sentence for a launch model report.", answer: "Predictions near steep-angle regimes carry wider uncertainty due to local trig sensitivity amplification." },
          { prompt: "Name one visual aid for communicating propagated uncertainty.", answer: "Plot point estimates with shaded confidence bands across input ranges." }
        ]
      }
    ],
    commonMistakes: [
      "Publishing propagated metrics without uncertainty context.",
      "Applying first-order approximations far from local linear regimes.",
      "Ignoring correlated input error structures."
    ],
    lessonSummary:
      "Error propagation adds reliability context to trig-based baseball metrics and recommendations.",
    synthesisPrompt:
      "Write a short uncertainty section for a trig-based projection report, including one sensitivity hotspot note.",
    nextLessonBridge:
      "Final capstone integrates trig, vectors, constraints, and uncertainty into full decision workflows.",
    professorNotes:
      "Require students to explain uncertainty findings in both mathematical and coaching language.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "epi-a1",
        type: "exact",
        prompt: "What is derivative of tangent theta?",
        correctAnswer: "sec^2(theta)",
        acceptedAnswers: ["sec(theta)^2"],
        explanation: "This derivative defines local tangent sensitivity."
      },
      {
        id: "epi-a2",
        type: "exact",
        prompt: "What is derivative of sine theta?",
        correctAnswer: "cos(theta)",
        acceptedAnswers: ["cos theta"],
        explanation: "Core trig derivative rule."
      },
      {
        id: "epi-a3",
        type: "mcq",
        prompt: "First-order error propagation primarily relies on:",
        options: ["Sorting algorithms", "Partial derivatives", "Only numerical integration", "Text similarity metrics"],
        correctAnswer: "Partial derivatives",
        explanation: "Gradient terms drive local sensitivity estimates."
      }
    ]
  },
  "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::precalculus-capstone-from-angle-to-decision": {
    key: "trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::precalculus-capstone-from-angle-to-decision",
    title: "Precalculus Capstone: From Angle To Decision",
    trackTitle: "Trigonometry And Precalculus For Baseball Modeling",
    unitTitle: "Vectors And Optimization Preparation",
    whyItMatters:
      "The capstone challenge is not solving one equation; it is delivering a trustworthy baseball recommendation from messy reality. That requires integrating all prior lessons: trig decomposition, angle reconstruction, coordinate conversion, signal calibration, vector interpretation, constrained optimization, and uncertainty communication. In real organizations, value appears when analysts can move from raw measurements to actionable decisions that coaches can execute. This lesson emphasizes workflow integrity and communication quality as much as mathematical correctness. A technically perfect model that cannot be explained or operationalized has limited impact. Conversely, an interpretable workflow with clear caveats can drive consistent competitive decisions. The capstone trains learners to produce that complete output. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    lessonOpener:
      "A hitting coach asks for a game-ready swing-angle recommendation against a specific pitch profile in current weather. The request sounds simple, but the answer needs decomposition, timing context, constraints, and confidence framing. Analysts who skip any step risk fragile advice. Analysts who integrate the full precalculus toolkit can deliver a recommendation range with rationale, risk notes, and adjustment triggers. That is the transition from classroom technique to field-level decision support.",
    narrativeFlow: [
      "Assemble an end-to-end workflow from raw input to recommendation.",
      "Integrate trig, signal, vector, and optimization modules coherently.",
      "Attach uncertainty and validity-domain context to final outputs.",
      "Translate technical outputs into coach-ready decision language."
    ],
    objectives: [
      "Build a complete decision pipeline using precalculus methods.",
      "Defend assumptions, constraints, and uncertainty statements clearly.",
      "Deliver recommendation formats that are executable in baseball settings."
    ],
    prerequisites: ["All prior track lessons", "Basic technical communication", "Validation mindset"],
    conceptChunks: [
      {
        heading: "Pipeline Thinking From Metric To Recommendation",
        explainLikeCoach:
          "A useful model is a sequence, not a single calculation. Each stage should make the next stage more trustworthy and more actionable for staff. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Capstone pipeline stages include feature extraction, coordinate normalization, model specification, calibration, constrained optimization, and uncertainty-aware reporting with documented assumptions.",
        equation: "\\[\\text{decision} = \\text{optimize}(\\mathrm{model}(\\mathrm{features})) \\text{ within constraints}\\]"
      },
      {
        heading: "Recommendation Quality Beyond Point Estimates",
        explainLikeCoach:
          "Coaches need a target they can use, but they also need to know how fragile that target is. A range with conditions often beats one rigid number.",
        formalNote:
          "Outputs should include central recommendation, feasible band, uncertainty interval, and trigger conditions for adaptation when context changes.",
        equation: "\\[\\text{output} = \\text{target} + \\text{band} + \\text{uncertainty} + \\text{triggers}\\]"
      },
      {
        heading: "Communication As Part Of Model Validity",
        explainLikeCoach:
          "If assumptions are hidden, trust erodes quickly. Transparent communication keeps technical and baseball teams aligned under pressure.",
        formalNote:
          "Capstone reporting should include assumptions, data quality notes, sensitivity highlights, and validity domain boundaries to prevent misuse.",
        equation: "\\[\\text{validity} = \\text{math quality} + \\text{communication quality}\\]"
      }
    ],
    quickChecks: [
      { prompt: "Why include constraints in final recommendations?", answer: "Constraints keep recommendations physically and tactically executable.", explanation: "Feasibility is essential for real usage." },
      { prompt: "What should accompany every point estimate in capstone outputs?", answer: "An uncertainty context or confidence interval should accompany it.", explanation: "Decision-makers need reliability information." },

      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      }
    ],
    workedExamples: [
      {
        title: "Pregame Angle Recommendation Package",
        scenario: "Integrate hitter profile, pitch mix, park factors, and weather into a constrained angle recommendation.",
        walkthrough: [
          "Compute directional and timing-aware input features.",
          "Calibrate model terms and verify residual behavior.",
          "Optimize expected value within player-feasible angle range.",
          "Report target band, uncertainty notes, and adjustment triggers."
        ],
        takeaway: "Integrated precalculus workflow turns mathematics into actionable baseball strategy."
      },

      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      }
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name one required section of a recommendation memo.", answer: "Include a constraints and assumptions section." },
          { prompt: "Why define a validity domain for model outputs?", answer: "It prevents misuse outside calibrated operating conditions." }
        ]
      },
      {
        level: "core",
        prompts: [
          { prompt: "List three elements of a decision-ready recommendation format.", answer: "Provide target value, feasible range, and uncertainty interval.", explanation: "These elements balance precision and reliability." },
          { prompt: "What is one sign a capstone model may be overfit?", answer: "Strong historical fit with unstable out-of-sample behavior indicates overfit.", explanation: "Generalization is the key reliability test." },
          { prompt: "Name one trigger condition that should appear in reports.", answer: "Include a trigger for updating targets when weather or pitch mix shifts materially.", explanation: "Context shifts can invalidate static recommendations." }
        ]
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Write one sentence that balances confidence and caution in a recommendation.", answer: "Recommend this angle band as baseline while adjusting if in-game contact profile exits the validated range." },
          { prompt: "Name one way to improve coach adoption of technical recommendations.", answer: "Pair each recommendation with a concise baseball-language rationale and fallback plan." }
        ]
      }
    ],
    commonMistakes: [
      "Delivering a single point recommendation without uncertainty context.",
      "Skipping assumption and validity-domain disclosures.",
      "Optimizing for model score while ignoring execution feasibility."
    ],
    lessonSummary:
      "Capstone success means producing transparent, feasible, and uncertainty-aware baseball decisions from integrated precalculus methods.",
    synthesisPrompt:
      "Produce a one-page coach-facing recommendation template that includes target range, uncertainty, and adjustment triggers.",
    nextLessonBridge:
      "Track complete: learners can now progress to calculus dynamics, probabilistic modeling, or simulation systems.",
    professorNotes:
      "Score capstone work equally on technical rigor and communication clarity to mirror real analyst responsibilities.",
    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
    assessmentItems: [
      {
        id: "pca-a1",
        type: "exact",
        prompt: "How many core elements are in this recommended format: target, range, uncertainty?",
        correctAnswer: "3",
        acceptedAnswers: ["three"],
        explanation: "These are three distinct reporting elements."
      },
      {
        id: "pca-a2",
        type: "exact",
        prompt: "Fill blank: recommendation equals point estimate plus ____ plus validity domain.",
        correctAnswer: "uncertainty band",
        acceptedAnswers: ["confidence band", "uncertainty context"],
        explanation: "Reliability context is required for decision quality."
      },
      {
        id: "pca-a3",
        type: "mcq",
        prompt: "A complete decision output should include:",
        options: ["Only equation text", "Only historical fit score", "Point estimate with uncertainty and constraints", "Only a single optimization plot"],
        correctAnswer: "Point estimate with uncertainty and constraints",
        explanation: "Actionable recommendations require feasibility and reliability context."
      }
    ],
    summativeReflection: baseballIntegrativeSummative({
      id: "precalc-capstone-decision-brief",
      title: "Summative: Angle-to-decision capstone brief",
      intro:
        "Produce a one-page capstone brief that mirrors how analytics teams hand off to coaching. Self-check with the rubric before sharing.",
      taskPrompt:
        "Pick one hitter or pitcher decision scenario. Document inputs, frame conventions, the optimization or angle target you recommend, explicit constraints, an uncertainty band, and two adjustment triggers tied to observable in-game signals.",
    }),
  },
};
