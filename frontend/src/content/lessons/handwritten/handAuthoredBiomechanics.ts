import type { ConceptChunk, LessonDocument, WorkedExample } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

const TRACK_TITLE = "Biological Mechanics Of Baseball";
const TRACK_SLUG = "biological-mechanics-of-baseball";

type BioSpec = {
  key: string;
  title: string;
  unitTitle: string;
  /** One-sentence STEM anchor for this lesson */
  stemFocus: string;
  /** Unique coaching paragraph for opener */
  openerBody: string;
  objectives: [string, string, string];
  chunkHeadings: [string, string, string];
  /** Three coach-facing paragraphs (one per chunk) */
  coachBodies: [string, string, string];
  /** Three formal paragraphs with light notation */
  formalBodies: [string, string, string];
  workedLens: string;
  workedScenario: string;
  synthesisPrompt: string;
  nextBridge: string;
  keyTerms: { term: string; definition: string }[];
  integrative?: boolean;
};

function buildChunks(spec: BioSpec): ConceptChunk[] {
  const ids = ["a", "b", "c"] as const;
  return spec.chunkHeadings.map((heading, i) => ({
    heading,
    explainLikeCoach: `${spec.coachBodies[i]} [[INLINE_DIAGRAM: ${spec.key.split("::").pop()}-${ids[i]}-inline]]`,
    formalNote: `${spec.formalBodies[i]} [[DIAGRAM: ${spec.key.split("::").pop()}-${ids[i]}-panel]]`,
  }));
}

function buildWorked(spec: BioSpec): WorkedExample[] {
  const lens = spec.workedLens;
  return [
    {
      title: `Bullpen Brief — ${lens}`,
      scenario: spec.workedScenario,
      walkthrough: [
        "Name the baseball role (pitcher, hitter, catcher, base runner) and inning context.",
        "List observable cues the staff can see without clinical instruments.",
        "Translate physiology vocabulary into one actionable preparation or communication line.",
        "State what would require licensed medical staff outside this lesson's scope.",
      ],
      takeaway: "Coach-education framing stays descriptive; defer diagnosis and treatment plans.",
    },
    {
      title: `Midgame Adjustment — ${lens}`,
      scenario: "Fourth inning: velocity and command drift against same hitter twice through the order.",
      walkthrough: [
        "Separate fatigue signals from tactical sequencing mistakes using checklist language.",
        "Propose a non-medical communication script for mound visit or dugout huddle.",
        "Log workload proxies already used in the game (pitches, high-intensity throws).",
        "Schedule postgame review with performance staff, not on-field diagnosis.",
      ],
      takeaway: "Transparent language preserves trust and keeps responsibilities aligned.",
    },
    {
      title: `Postgame Learning Loop — ${lens}`,
      scenario: "Player development meeting reviews video plus simple workload log.",
      walkthrough: [
        "Compare pregame plan, in-game observations, and self-reported effort scales.",
        "Identify one mechanism hypothesis tied to baseball mechanics, not to pathology labels.",
        "Assign one research question a biomechanics lab could measure ethically.",
        "Archive limitations: what the classroom cannot conclude from video alone.",
      ],
      takeaway: "Evidence literacy turns single games into repeatable research habits.",
    },
  ];
}

function buildBioLesson(spec: BioSpec): LessonDocument {
  const summative = spec.integrative
    ? baseballIntegrativeSummative({
        id: `${spec.key}::summative`,
        title: `${spec.title} integrative artifact`,
        intro:
          "Draft a staff-facing artifact you could share with a peer instructor. It is not auto-graded; self-check against the rubric before submission.",
        taskPrompt: `Integrate ${spec.title}: include one baseball scenario, explicit limits of evidence, and a clear statement that the brief is not medical advice.`,
      })
    : undefined;

  return {
    key: spec.key,
    title: spec.title,
    trackTitle: TRACK_TITLE,
    unitTitle: spec.unitTitle,
    whyItMatters: `${spec.title} matters because ${spec.stemFocus} Baseball operations staff, coaches, and analysts increasingly share vocabulary with sports scientists; without disciplined language, teams confuse storytelling with measurement. This lesson is framed as **coach education and research literacy**, not clinical guidance—defer injury questions to licensed medical providers. When everyone names the same tissues, contraction types, and workload proxies, pitchers and hitters get clearer warmups, better communication with performance staff, and fewer overconfident claims about “energy transfer” or “feel.”`,
    lessonOpener: `Before practice, a coordinator asks how today's plan maps to real game demands for pitchers versus position players. ${spec.openerBody} Students practice naming mechanisms in plain English, anchoring each claim to observable baseball actions (delivery tempo, sprint steal jumps, swing sequencing). The output is a short brief any dugout could use while staying humble about uncertainty.`,
    narrativeFlow: [
      "Frame the biological concept with baseball-specific demand examples.",
      "Connect vocabulary to observable pitching, hitting, or running actions.",
      "Practice communication that respects non-medical boundaries.",
      "Close with research questions labs can measure ethically.",
    ],
    objectives: [...spec.objectives],
    prerequisites: [
      "Introductory biology vocabulary or willingness to learn terms in-lesson.",
      "Comfort describing baseball roles, innings, and practice versus game intensity.",
      "Commitment to non-diagnostic language when discussing the body.",
    ],
    conceptChunks: buildChunks(spec),
    quickChecks: [
      {
        prompt: "Why must this track avoid diagnosing injuries on the field?",
        answer: "Clinical diagnosis and treatment belong to licensed medical professionals.",
      },
      {
        prompt: "What is one observable baseball anchor for the lesson's main mechanism?",
        answer: "Examples include delivery timing, sprint steal first-step, bat path sequencing, or bullpen pitch counts.",
      },
      {
        prompt: "What should accompany any workload recommendation?",
        answer: "Explicit limits of evidence, confidence language, and a plan to verify with qualified staff or research design.",
      },
    ],
    workedExamples: buildWorked(spec),
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          {
            prompt: "Name one baseball situation where this lesson's vocabulary helps communication.",
            answer: "Examples: mound visit after command loss, stealing-base acceleration drill, or lab report review with R&D.",
          },
          {
            prompt: "Give one phrase that signals appropriate uncertainty.",
            answer: "Example: the data are consistent with higher proximal demand, pending full assessment by medical staff.",
          },
        ],
      },
      {
        level: "core",
        prompts: [
          {
            prompt: "Rewrite a vague claim ('his arm is dead') into descriptive, non-medical language.",
            answer: "Example: fastball shape and location variance widened after pitch 75; monitor workload proxies and refer to medical staff for symptoms.",
          },
          {
            prompt: "List two workload proxies discussed in professional baseball contexts.",
            answer: "Examples: pitch count, high-intensity throw counts, innings pitched, days of rest, or subjective readiness scales.",
          },
        ],
      },
      {
        level: "stretch",
        prompts: [
          {
            prompt: "Design one ethical research question a biomechanics lab could answer about pitchers.",
            answer: "Example: how does a prescribed warmup progression correlate with joint angular velocity variance in collegiate throwers under IRB-approved protocols?",
          },
          {
            prompt: "What limitation should every lab-to-field translation acknowledge?",
            answer: "Controlled lab conditions differ from crowd noise, fatigue, and game adrenaline; external validity is bounded.",
          },
        ],
      },
    ],
    commonMistakes: [
      "Using diagnostic language ('torn labrum', 'you need surgery') outside medical scope.",
      "Treating metaphors like 'energy transfer' as measured scalar quantities without defining sensors.",
      "Ignoring asymmetry between practice volume and competitive intensity when prescribing drills.",
    ],
    lessonSummary: `${spec.title} connects ${spec.stemFocus.toLowerCase()} to baseball communication with explicit uncertainty and non-medical boundaries.`,
    synthesisPrompt: spec.synthesisPrompt,
    nextLessonBridge: spec.nextBridge,
    professorNotes:
      "Grade for mechanism clarity, baseball anchoring, and boundary discipline. Require students to submit both coach-facing language and a short 'limits of evidence' paragraph. Flag any draft that drifts into diagnosis or treatment.",
    keyTerms: spec.keyTerms,
    assessmentItems: [
      {
        id: `${spec.key}-mcq-1`,
        type: "mcq",
        prompt: "Which statement best fits coach-education ethics in this track?",
        options: [
          "Diagnose injury from video alone during class",
          "Describe observable movement patterns and refer clinical questions to medical staff",
          "Prescribe medication when fatigue appears",
          "Promise a fixed velocity gain timeline",
        ],
        correctAnswer: "Describe observable movement patterns and refer clinical questions to medical staff",
        explanation: "Non-medical educators describe context and defer diagnosis or treatment.",
      },
      {
        id: `${spec.key}-exact-1`,
        type: "exact",
        prompt: "Name one workload proxy commonly discussed around pitching.",
        correctAnswer: "pitch count",
        acceptedAnswers: ["innings pitched", "high intensity throws", "throws", "rest days"],
        explanation: "Multiple proxies exist; pitch counts are the most familiar public example.",
      },
      {
        id: `${spec.key}-exact-2`,
        type: "exact",
        prompt: "What boundary phrase should appear when discussing pain or injury-like symptoms?",
        correctAnswer: "medical staff",
        acceptedAnswers: ["licensed medical", "athletic trainer", "physician", "clinician"],
        explanation: "Clinical evaluation belongs to licensed providers.",
      },
    ],
    summativeReflection: summative,
  };
}

const U1 = "body-systems-and-muscle-fundamentals";
const U1T = "Body Systems And Muscle Fundamentals";
const U2 = "movement-running-and-the-kinetic-chain";
const U2T = "Movement Running And The Kinetic Chain";
const U3 = "sports-science-and-baseball-performance";
const U3T = "Sports Science And Baseball Performance";

const BIO_SPECS: BioSpec[] = [
  {
    key: `${TRACK_SLUG}::${U1}::cells-tissues-and-baseball-demand-basics`,
    title: "Cells Tissues And Baseball Demand Basics",
    unitTitle: U1T,
    stemFocus: "cells build tissues, and tissues integrate into organ systems that meet the intermittent high-power demands of pitching and sprinting.",
    openerBody:
      "You map epithelial barriers, connective tissue stiffness, and contractile tissue mass to why a short reliever tolerates different daily stress than a starting pitcher or an everyday shortstop.",
    objectives: [
      "Relate cell-to-tissue hierarchy to baseball-specific stress (throwing, sprinting, decelerating).",
      "Compare positional demand profiles without ranking players as 'tougher' in unscientific ways.",
      "Communicate limits: histology slides are not required to coach better warmups.",
    ],
    chunkHeadings: ["Hierarchy From Cells To Game Actions", "Tissue Roles In Throwing And Sprinting", "Demand Language Coaches Can Audit"],
    coachBodies: [
      "Cells specialize; connective tissues transmit force; muscle tissue generates it. Tie each layer to a baseball verb: coil, accelerate, brake.",
      "Ligaments and tendons are not 'lazy'; they store and return elastic energy within physiological ranges—language matters when discussing velocity development.",
      "Replace 'he is built different' with observable demand tables: throws per week, sprint efforts, collision risk on tags.",
    ],
    formalBodies: [
      "Let tissues be indexed $i$ with stiffness $k_i$ and failure tolerance framed statistically, never as individual prophecy. Teaching uses $F \\approx k \\Delta x$ only as intuition for elastic response, not player grading.",
      "Differentiate remodeling (long-term adaptation) from acute readiness; both are biological but operate on different clocks.",
      "Demand is multidimensional vector $d = [throws, sprints, throws_{max\\ effort}, travel, sleep]$; comparisons require shared units.",
    ],
    workedLens: "tissue demand table",
    workedScenario: "Spring training: compare middle reliever and starting catcher weekly stress without clinical claims.",
    synthesisPrompt: "Draft a one-page tissue hierarchy brief for a pitching coordinator with three baseball verbs mapped to tissues.",
    nextBridge: "Carry tissue vocabulary into contraction types for throwing and hitting.",
    keyTerms: [
      { term: "Connective tissue", definition: "Force-transmitting structures such as tendons and ligaments that link muscle actions to bones." },
      { term: "Tissue adaptation", definition: "Longer-horizon biological response to repeated load; not synonymous with single-game fatigue." },
      { term: "Demand profile", definition: "Quantified mix of throws, sprints, and collisions a role experiences across a week." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U1}::muscle-contraction-types-in-throwing-and-hitting`,
    title: "Muscle Contraction Types In Throwing And Hitting",
    unitTitle: U1T,
    stemFocus: "isometric, concentric, and eccentric contractions appear in different phases of the swing and delivery.",
    openerBody:
      "You slow a swing clip and label where elbow extensors work eccentrically to brake the bat versus where hip rotators fire concentrically to open the pelvis—without inventing new physics jargon.",
    objectives: [
      "Label contraction types during pitching delivery phases at a coaching-friendly resolution.",
      "Relate eccentric braking to hitting follow-through control.",
      "Avoid implying that one contraction type is morally 'better' than another.",
    ],
    chunkHeadings: ["Concentric Phases In Baseball", "Eccentric Braking And Injury Literacy", "Isometric Stabilization At The Mound"],
    coachBodies: [
      "Concentric actions shorten the muscle; think driving the lead leg block or accelerating the torso into rotation.",
      "Eccentric actions lengthen under tension; they dominate deceleration after ball release and during bat tip arrest—describe, do not diagnose pain.",
      "Isometric co-contraction stabilizes joints when forces spike; useful language for glove-side rigidity through foot strike.",
    ],
    formalBodies: [
      "Mechanical power is $P = F \\cdot v$; contraction type changes how muscle fibers contribute to $F$ and $v$ directions.",
      "Eccentric work per unit time can elevate metabolic demand; communicate distributions, not moral judgments.",
      "Stability problems are coordination hypotheses until measured under IRB-approved protocols.",
    ],
    workedLens: "contraction tagging",
    workedScenario: "Class tags a right-handed pitcher's stride foot strike through release using three contraction labels.",
    synthesisPrompt: "Create a three-panel figure description tagging concentric, eccentric, and isometric phases for one swing clip.",
    nextBridge: "Scale from single fibers to motor-unit recruitment under fatigue.",
    keyTerms: [
      { term: "Concentric contraction", definition: "Muscle shortens while producing force, common in propulsive phases." },
      { term: "Eccentric contraction", definition: "Muscle lengthens under tension, often controlling deceleration." },
      { term: "Isometric contraction", definition: "Muscle length stays nearly constant while force is produced for stabilization." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U1}::motor-units-fatigue-and-pitching-loads`,
    title: "Motor Units Fatigue And Pitching Loads",
    unitTitle: U1T,
    stemFocus: "motor units pool together to produce force, and fatigue manifests as changed recruitment and movement variability—not only velocity loss.",
    openerBody:
      "You connect Henneman-size principle intuition to why command—not just radar—often moves first when a starter faces the lineup a third time.",
    objectives: [
      "Explain motor unit recruitment at a qualitative level tied to pitching outcomes.",
      "Relate perceived exertion scales to non-diagnostic monitoring language.",
      "List why radar alone under-specifies neuromuscular fatigue.",
    ],
    chunkHeadings: ["Motor Unit Pools And Baseball Output", "Fatigue Signatures Beyond Velocity", "Communication Without Diagnosis"],
    coachBodies: [
      "Small motor units recruit first; as demand rises, larger units join—link that ladder to late-inning command drift.",
      "Fatigue can widen release window variance before mean velocity drops; teach staff to watch horizontal miss patterns.",
      "Pair athlete-reported exertion with pitch counts as descriptive triangulation, not proof of injury.",
    ],
    formalBodies: [
      "Model recruitment as discrete stages; quantitative mapping requires EMG studies not assumed in dugout talk.",
      "Variability metrics $\\sigma_{release}$ are pedagogical targets for analysts when data exist.",
      "Subjective scales carry measurement error; combine with objective proxies transparently.",
    ],
    workedLens: "recruitment narrative",
    workedScenario: "Sixth inning: velocity stable but spin efficiency drops; frame hypotheses without diagnosing arm pathology.",
    synthesisPrompt: "Write a coordinator memo contrasting velocity-only monitoring versus recruitment-aware monitoring.",
    nextBridge: "Warm up the neuromuscular system deliberately before max-intent throws.",
    keyTerms: [
      { term: "Motor unit", definition: "A motor neuron plus the muscle fibers it innervates, the brain's smallest controllable unit of force." },
      { term: "Recruitment", definition: "Progressive activation of motor units to meet rising force or speed demands." },
      { term: "RPE", definition: "Rating of perceived exertion; subjective but useful when logged consistently." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U1}::warmup-progressions-and-game-day-readiness`,
    title: "Warmup Progressions And Game Day Readiness",
    unitTitle: U1T,
    stemFocus: "warmups prepare tissues and nervous systems for ballistic baseball actions; progressions should mirror intensity ramps, not random long toss folklore alone.",
    openerBody:
      "You sequence activation, dynamic mobility, and graded throws so a reliever entering in the seventh mirrors game rhythm without borrowing unverified medical protocols.",
    objectives: [
      "Design a non-prescriptive warmup outline tied to role (starter, reliever, position player).",
      "Differentiate readiness (acute) from adaptation (chronic).",
      "Document assumptions when borrowing drills from other organizations.",
    ],
    chunkHeadings: ["Intensity Ramping For Throwing", "Hitting Tunnel Activation", "Readiness Checks Without Clinical Tests"],
    coachBodies: [
      "Progress general motion to baseball-specific motion before max intent; label each stage with time boxes.",
      "Hitters blend tee work, flips, and velocity progression with clear ownership of who controls machine speeds.",
      "Readiness questions stay descriptive: 'how sharp does the break feel today?' paired with medical referral triggers for pain reports.",
    ],
    formalBodies: [
      "Warmup is a control policy $a_t$ over minutes $t$ increasing expected performance state subject to safety constraints.",
      "Do not extrapolate small-sample organizational anecdotes as universal physiology.",
      "Pain reports override performance optimization and trigger medical pathways.",
    ],
    workedLens: "warmup ladder",
    workedScenario: "Doubleheader day: outline distinct ladders for starter game one and reliever game two.",
    synthesisPrompt: "Produce a tabular warmup ladder with intensity, duration, and baseball action columns.",
    nextBridge: "Synthesize tissues, contraction, fatigue, and warmup into one integrative workshop.",
    keyTerms: [
      { term: "Readiness", definition: "Acute state before performance; distinct from long-term skill or strength adaptation." },
      { term: "Progression", definition: "Ordered increase in movement demand matching upcoming game intensity." },
      { term: "Ballistic action", definition: "Very rapid force development such as max-effort throws or swings." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U1}::body-systems-synthesis-workshop`,
    title: "Body Systems Synthesis Workshop",
    unitTitle: U1T,
    stemFocus: "integrating cardiovascular, neuromuscular, and connective tissue language improves interdisciplinary staff meetings.",
    openerBody:
      "Teams role-play a performance meeting where analytics, medical, and coaching each bring vocabulary that must converge on one shared player plan—still without diagnosing.",
    objectives: [
      "Facilitate a mock staff meeting using correct biological terms and baseball anchors.",
      "Resolve vocabulary collisions ('stiff' versus stiff).",
      "Produce an action list separated into coaching, research, and medical lanes.",
    ],
    chunkHeadings: ["Systems Map For Baseball Staff", "Collision Words And Operational Definitions", "Lane Assignment Exercise"],
    coachBodies: [
      "Cardiovascular demand rises with repeated maximal sprints in extras; neuromuscular demand spikes on high-spin sliders—plot both on one whiteboard.",
      "Define 'stiff' delivery versus connective tissue stiffness with separate glossaries to stop crossed wires.",
      "Every action item gets an owner: coach drill, analyst metric, medical screen—never 'everyone'.",
    ],
    formalBodies: [
      "Systems thinking uses coupled differential equations metaphorically; keep math optional but honest.",
      "Lexical ambiguity creates organizational risk; document operational definitions yearly.",
      "RACI matrices reduce responsibility diffusion in high-stakes environments.",
    ],
    workedLens: "staff convergence",
    workedScenario: "Post-throwing program review for a returning pitcher with cleared participation but elevated subjective soreness language.",
    synthesisPrompt: "Run the workshop deliverable: meeting minutes with vocabulary table and lane-specific actions.",
    nextBridge: "Shift from tissues to full-body motion chains on the bases and in the swing.",
    keyTerms: [
      { term: "Interdisciplinary", definition: "Multiple specialties contributing within their licensed or trained scopes." },
      { term: "Operational definition", definition: "Agreed measurable meaning for a term used in decisions." },
      { term: "Lane", definition: "Responsibility boundary such as coaching adjustment versus clinical evaluation." },
    ],
    integrative: true,
  },
  {
    key: `${TRACK_SLUG}::${U2}::sprinting-versus-stealing-baseball-acceleration-basics`,
    title: "Sprinting Versus Stealing Baseball Acceleration Basics",
    unitTitle: U2T,
    stemFocus: "linear acceleration for a ninety-foot steal differs from maximal sprinting mechanics in posture and intent timing.",
    openerBody:
      "You compare a secondary lead jump to a sixty-yard dash start, naming how shin angles and projection differ even when both are 'fast'.",
    objectives: [
      "Contrast steal-start kinematics with straight-line sprinting goals.",
      "Relate acceleration curves to catcher pop times and pitcher slide-step variants.",
      "Identify what high school timers miss when they only clock sixty-yard dashes.",
    ],
    chunkHeadings: ["Acceleration Vectors On The Basepaths", "Steal Start Versus Track Sprint", "Game Constraints And Timing Windows"],
    coachBodies: [
      "Acceleration is change in velocity; baseball base stealing optimizes early horizontal projection toward the next bag.",
      "Track sprinters maximize global maximum speed; thieves maximize probability beat of a pitch-catcher exchange.",
      "Slide steps and quick deliveries shrink available time $t_{window}$; teach reading that clock, not mythic 'instinct'.",
    ],
    formalBodies: [
      "Let $a(t)$ be acceleration magnitude; stealing maximizes integral of useful horizontal component subject to pickoff risk.",
      "Different optima imply different coaching cues; do not import track cues wholesale.",
      "Catcher pop time and pitcher delivery data belong in evidence tables when available.",
    ],
    workedLens: "steal mechanics",
    workedScenario: "Runner on first, average MLB pop and delivery; sketch coaching cues for first three steps.",
    synthesisPrompt: "Write a comparison memo: steal start versus track block start with labeled cues.",
    nextBridge: "Layer asymmetry and bilateral training after mastering acceleration intent.",
    keyTerms: [
      { term: "Projection", definition: "Directional component of motion toward the next base or target." },
      { term: "Timing window", definition: "Available time between pitch initiation and catcher receipt affecting steal success odds." },
      { term: "Acceleration curve", definition: "How acceleration magnitude evolves over the first steps of a sprint." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U2}::gait-asymmetry-and-bilateral-training-in-baseball`,
    title: "Gait Asymmetry And Bilateral Training In Baseball",
    unitTitle: U2T,
    stemFocus: "throwing dominance introduces predictable asymmetries; bilateral training is a programming hypothesis, not a moral mandate.",
    openerBody:
      "You quantify why a right-handed pitcher's left lead leg often experiences different braking demands than his drive leg—without telling a player he is 'broken'.",
    objectives: [
      "Describe lawful asymmetry versus red-flag language that belongs in clinics.",
      "Design bilateral exercise rationales tied to baseball symmetry goals.",
      "Explain when symmetry for its own sake can be counterproductive.",
    ],
    chunkHeadings: ["Lawful Asymmetry In Throwers", "Bilateral Training Goals", "Measurement Boundaries"],
    coachBodies: [
      "Dominant-arm sports create torque habits; describe side-to-side differences as expected variance bands, not shame labels.",
      "Bilateral drills often target vestibular balance and general strength baselines, not mirror-image pitching clones.",
      "Unless you own force plates, avoid fake precision about percent asymmetry from video alone.",
    ],
    formalBodies: [
      "Model asymmetry $A = |L - R|$ relative to population priors when data exist; else stay qualitative.",
      "Programming is hypothesis-driven adaptation, not aesthetic symmetry enforcement.",
      "Instrumentation limits bound inferential strength; declare them.",
    ],
    workedLens: "asymmetry communication",
    workedScenario: "Minor league infielder shows long-term dominant-side step preference; propose language for a gym session intro.",
    synthesisPrompt: "Draft bilateral training bullets with explicit baseball outcomes and uncertainty notes.",
    nextBridge: "Connect global asymmetry themes to hip–shoulder separation in the delivery.",
    keyTerms: [
      { term: "Asymmetry", definition: "Left-right difference in force, range, or recruitment; common but not automatically pathological." },
      { term: "Bilateral training", definition: "Exercises involving both sides of the body to support general coordination and strength." },
      { term: "Population prior", definition: "Expected range of variation learned from grouped measurements, not individual diagnosis." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U2}::hip-shoulder-separation-and-sequencing-fundamentals`,
    title: "Hip Shoulder Separation And Sequencing Fundamentals",
    unitTitle: U2T,
    stemFocus: "temporal separation between pelvis and thorax rotation contributes to bat speed and arm speed in measurable ways—when measured.",
    openerBody:
      "You teach separation as a timing relationship on video clocks, not as a mystical 'torque slot' guaranteed to add three ticks of velo.",
    objectives: [
      "Define hip–shoulder separation with simple clock or frame-delta language.",
      "Relate separation timing to both pitching and hitting without copying internet absolutes.",
      "State measurement tools that validate separation claims in research.",
    ],
    chunkHeadings: ["Separation As Timing Not Pose", "Pitching And Hitting Analogies", "Research Measurement Anchors"],
    coachBodies: [
      "Separation means hips begin rotation before shoulders maximally commit—count frames, not vibes.",
      "Hitting separation stores elastic stretch across the trunk; pitching uses a related but not identical coordination pattern.",
      "Marker-based motion capture measures angles; smartphone video gives coarse estimates only.",
    ],
    formalBodies: [
      "Let $\\theta_h(t)$ and $\\theta_s(t)$ be orientation trajectories; separation metrics study $\\Delta \\theta = \\theta_s - \\theta_h$ over time.",
      "Correlation with velocity outcomes is population-level; individual causality requires controlled study.",
      "Avoid deterministic promises from kinematic snapshots.",
    ],
    workedLens: "separation timing",
    workedScenario: "College pitching lab shares anonymized angle–time plots; translate to bullpen cues carefully.",
    synthesisPrompt: "Explain separation to a hitter using only frame counts and two baseball outcomes (barrel rate proxy language).",
    nextBridge: "Critique loose 'energy transfer' claims next.",
    keyTerms: [
      { term: "Hip–shoulder separation", definition: "Temporal stagger between pelvic rotation and thoracic rotation during explosive skills." },
      { term: "Sequencing", definition: "Order of body segment contributions to summate speed toward the bat or ball." },
      { term: "Motion capture", definition: "Instrumented measurement of joint angles over time, often in lab settings." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U2}::interpreting-energy-transfer-language-critically`,
    title: "Interpreting Energy Transfer Language Critically",
    unitTitle: U2T,
    stemFocus:
      "energy is a physics quantity; 'transfer down the chain' in coaching talk often mixes metaphor, momentum, and power without units; tie slogans to observable pitching and hitting workloads.",
    openerBody:
      "You rewrite three viral coaching slogans into testable statements about joint work, timing, and measured outputs.",
    objectives: [
      "Translate metaphorical energy language into physics vocabulary where possible.",
      "Identify unfalsifiable claims in social media coaching clips.",
      "Propose ethical experiments that could test a narrowed claim.",
    ],
    chunkHeadings: ["Metaphor Versus Measurement", "Power Momentum And Work Reminders", "Designing Falsifiable Coaching Hypotheses"],
    coachBodies: [
      "Energy is not a vibe traveling through the spine; it is a bookkeeping concept tied to work and heat.",
      "Power is $P = dW/dt$; useful when discussing explosive segments if sensors exist.",
      "Good hypotheses narrow to measurable deltas: 'lead knee extension velocity up 5 percent vs control week'.",
    ],
    formalBodies: [
      "Mechanical work integrals $\\int F\\,dx$ motivate segmental analyses in biomechanics papers.",
      "Metaphors aid memory but harm accountability when mistaken for measurements.",
      "Pre-registration reduces p-hacking in training studies.",
    ],
    workedLens: "language audit",
    workedScenario: "Social post claims 'unlocking energy from the ground'; team asks you to debunk or refine responsibly.",
    synthesisPrompt: "Rewrite three energy clichés into falsifiable statements with required sensors listed.",
    nextBridge: "Integrate chain concepts in a synthesis lab pulling from all movement lessons.",
    keyTerms: [
      { term: "Work (physics)", definition: "Force applied through a distance; related to energy change in idealized systems." },
      { term: "Power", definition: "Rate of doing work; relevant to explosive baseball actions when measured." },
      { term: "Falsifiable claim", definition: "A statement that could be contradicted by a well-designed observation or experiment." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U2}::kinetic-chain-synthesis-lab`,
    title: "Kinetic Chain Synthesis Lab",
    unitTitle: U2T,
    stemFocus:
      "students integrate sprinting, asymmetry, separation, and critical language review into one mini research poster about a baseball skill, explicitly naming whether evidence applies on the mound, in the batter's box, or on the bases so coaches do not over-generalize lab snapshots.",
    openerBody:
      "Groups pick either stealing second or a four-seam fastball delivery and must cite at least one measurement modality that would support their claims. Facilitators remind teams that bullpen velocity traces and sprint steal jumps answer different questions than inning workload totals.",
    objectives: [
      "Assemble multi-segment reasoning with honest instrumentation limits.",
      "Peer-review another group's poster for metaphor abuse.",
      "Present findings in coach-facing language with uncertainty intact.",
    ],
    chunkHeadings: ["Poster Skeleton For Baseball Biomech", "Peer Review Rubric Hooks", "Presentation Discipline"],
    coachBodies: [
      "Poster sections: question, methods available, results expected, limits, baseball implication.",
      "Peer reviewers specifically hunt for diagnosis language and ban it.",
      "Presentations end with 'what we still do not know' slide—non-negotiable.",
    ],
    formalBodies: [
      "Scientific poster logic mirrors IMRaD; adapt for classroom time boxes.",
      "Peer review sharpens epistemic humility.",
      "Uncertainty communication is a graded outcome.",
    ],
    workedLens: "poster cycle",
    workedScenario: "Lab day: two posters on the same skill with conflicting conclusions; facilitate reconciliation dialogue.",
    synthesisPrompt: "Submit the poster PDF outline plus peer review form completed for another team.",
    nextBridge: "Enter sports science measurement ethics and lab practice in the next unit.",
    keyTerms: [
      { term: "Poster session", definition: "Structured visual summary of a question, evidence, and limits common in research training." },
      { term: "Peer review", definition: "Critical constructive evaluation against explicit criteria." },
      { term: "Instrumentation limit", definition: "Constraint on what can be inferred from available sensors and sampling rates." },
    ],
    integrative: true,
  },
  {
    key: `${TRACK_SLUG}::${U3}::what-biomechanists-measure-in-pitching-labs`,
    title: "What Biomechanists Measure In Pitching Labs",
    unitTitle: U3T,
    stemFocus:
      "joint angles, torques, timing, and ground reaction forces are common lab outputs with specific baseball interpretations for pitchers, catchers framing workload discussions, and pitching coaches evaluating mechanical drift.",
    openerBody:
      "You walk through anonymized plots of knee extension velocity and explain what analysts can and cannot infer about player health from them alone.",
    objectives: [
      "List common signals captured in pitching biomechanics studies.",
      "Explain sampling rate and marker placement as error sources.",
      "Relate lab outputs to on-field scouting video without overclaiming.",
    ],
    chunkHeadings: ["Kinematic And Kinetic Pipelines", "From Markers To Inverse Dynamics", "Translation To Coaching Video"],
    coachBodies: [
      "Kinematics is motion geometry; kinetics is forces and moments inferred through models.",
      "Inverse dynamics assumes link-segment models; error propagates from skin motion artifact.",
      "When translating to video, slow motion exaggerates perception; disclose frame rates.",
    ],
    formalBodies: [
      "Joint moments depend on segment inertia assumptions; report sensitivity when teaching.",
      "Nyquist considerations motivate minimum sampling rates for peak detection.",
      "Epistemic gap between lab and stadium must appear in every executive summary.",
    ],
    workedLens: "lab tour",
    workedScenario: "R&D intern presents elbow varus moment curves to coaches; you coach them on cautious language.",
    synthesisPrompt: "Write a glossary handout: five lab signals with baseball interpretation and one explicit limit each.",
    nextBridge: "Mirror measurement thinking for hitting kinematics and bat paths.",
    keyTerms: [
      { term: "Kinematics", definition: "Description of motion (positions, angles, velocities) without inferring forces." },
      { term: "Kinetics", definition: "Study of forces and moments that cause or result from motion." },
      { term: "Inverse dynamics", definition: "Inferring joint moments from measured motion and modeled body segments." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U3}::hitting-kinematics-and-bat-path-research-questions`,
    title: "Hitting Kinematics And Bat Path Research Questions",
    unitTitle: U3T,
    stemFocus:
      "bat path metrics interact with pitch shape and timing; research questions must specify pitch classes and attack angles, and name whether the hitter faces velocity up in the zone or breaking balls away.",
    openerBody:
      "You draft research questions comparing swing decisions on elevated fastballs versus down-and-away breaking balls, naming confounders like count and park.",
    objectives: [
      "Formulate answerable hitting biomechanics questions with explicit pitch tags.",
      "Identify confounders in observational Statcast-linked studies.",
      "Contrast public bat sensor limitations with lab bat instrumentation.",
    ],
    chunkHeadings: ["Attack Angle And Pitch Plane", "Confounders In Observational Data", "Sensor Modality Tradeoffs"],
    coachBodies: [
      "Attack angle language must pair with pitch height and velocity bins or it is underspecified.",
      "Count and game state change approach; stratify or admit bias.",
      "Consumer bat sensors differ in sampling alignment; cite manufacturer specs when teaching.",
    ],
    formalBodies: [
      "Stratification reduces Simpson paradox risk in observational hitting metrics.",
      "Causal claims require designs beyond single-season correlations.",
      "Hardware specs belong in methods sections.",
    ],
    workedLens: "hitting RQ",
    workedScenario: "Front office asks for three IRB-style research questions on swing plane adjustments.",
    synthesisPrompt: "Deliver three pre-registered style research questions with explicit pitch tags and confounders listed.",
    nextBridge: "Connect kinematic curiosity to workload and recovery proxies for two-way players.",
    keyTerms: [
      { term: "Attack angle", definition: "Bat orientation metric relative to horizontal through contact region; interpretation depends on pitch context." },
      { term: "Confounder", definition: "Variable that distorts apparent relationships if not controlled or stratified." },
      { term: "Stratification", definition: "Analyzing subsets separately to reduce confounding bias." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U3}::workload-proxies-innings-pitches-and-recovery`,
    title: "Workload Proxies Innings Pitches And Recovery",
    unitTitle: U3T,
    stemFocus:
      "innings and pitch counts are coarse proxies; recovery integrates sleep, nutrition, and travel—topics outside strict biomechanics but part of honest planning for starters, relievers, and everyday position players.",
    openerBody:
      "You build a transparent workload dashboard sketch that pairs innings with subjective readiness without pretending it replaces MRI decisions.",
    objectives: [
      "Compare coarse proxies with higher-fidelity alternatives where available.",
      "Explain recovery as multidimensional without prescribing supplements.",
      "Communicate uncertainty to pitching coordinators under playoff pressure.",
    ],
    chunkHeadings: ["Proxy Strengths And Weaknesses", "Recovery Dimensions Beyond Counting Throws", "Decision Communication Templates"],
    coachBodies: [
      "Pitch counts are visible and auditable; they miss intensity distribution inside appearances.",
      "Recovery includes sleep and travel logistics; acknowledge limits of biomech-only framing.",
      "Templates bundle metric, confidence, and medical referral triggers.",
    ],
    formalBodies: [
      "Let workload $W$ be a vector proxy; decisions on scalar summaries lose information unless validated.",
      "Recovery science intersects medicine; stay descriptive and refer out.",
      "Bayesian updating language helps playoff narratives stay honest.",
    ],
    workedLens: "workload board",
    workedScenario: "September bullpen game: sketch how to discuss three relievers' recent high-leverage usage.",
    synthesisPrompt: "Design a one-page workload transparency brief with explicit proxy limits.",
    nextBridge: "Ethics caps the track: learn non-medical communication templates.",
    keyTerms: [
      { term: "Workload proxy", definition: "Observable variable approximating physical stress when direct measurement is unavailable." },
      { term: "Recovery", definition: "Processes restoring readiness; multifactorial and not synonymous with days off alone." },
      { term: "High leverage", definition: "Situations where game state makes outcomes especially consequential for win probability." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U3}::ethics-and-limits-non-medical-communication`,
    title: "Ethics And Limits Non Medical Communication",
    unitTitle: U3T,
    stemFocus:
      "ethical baseball biomechanics education foregrounds consent, privacy, and scope boundaries when discussing bodies on camera, especially for pitchers whose delivery is scrutinized clip-by-clip.",
    openerBody:
      "You navigate scenarios where parents or agents push for definitive injury opinions from non-clinicians after a showcase.",
    objectives: [
      "Apply consent and privacy thinking to shared video and sensor data.",
      "Draft scripts redirecting clinical questions appropriately.",
      "Recognize conflicts of interest in showcase environments.",
    ],
    chunkHeadings: ["Scope And Role Clarity", "Data Ethics In Player Development", "Scripts For Boundary Conversations"],
    coachBodies: [
      "Non-clinicians describe movement; clinicians diagnose. Memorize the boundary sentence.",
      "Sharing minor athlete video publicly raises consent issues; default to private channels with policies.",
      "When payment depends on hype, slow down claims and cite study designs.",
    ],
    formalBodies: [
      "Ethical frameworks: beneficence, non-maleficence, autonomy, justice—map each to a baseball scenario.",
      "GDPR-style lessons optional but remind international academies about data portability questions.",
      "Conflict-of-interest disclosures belong in scouting and coaching businesses.",
    ],
    workedLens: "ethics roleplay",
    workedScenario: "Showcase organizer pressures instructor to comment on 'ligament laxity' from slow motion.",
    synthesisPrompt: "Write three boundary scripts and one data-handling policy bullet list for a travel team.",
    nextBridge: "Cap the track with an integrative brief tying science literacy to operations.",
    keyTerms: [
      { term: "Scope of practice", definition: "Legal and ethical limits on what a professional may advise based on training and licensure." },
      { term: "Informed consent", definition: "Voluntary agreement to participate or share data with understood risks and uses." },
      { term: "Conflict of interest", definition: "Situation where secondary incentives could bias primary duty to the athlete." },
    ],
  },
  {
    key: `${TRACK_SLUG}::${U3}::biological-mechanics-capstone-brief`,
    title: "Biological Mechanics Capstone Brief",
    unitTitle: U3T,
    stemFocus:
      "capstone learners produce an operations-ready brief connecting measurement, workload, and ethical communication for one baseball role, spelling out inning leverage, bullpen usage patterns, and injury-adjacent language guardrails for pitching and hitting staff.",
    openerBody:
      "You choose a role (e.g., high-spin reliever, slap-hitting outfielder) and defend a season-long development communication plan referencing mechanisms humbly. Tie every recommendation to observable mound, plate, or base-running cues your audience can verify without clinical instruments.",
    objectives: [
      "Synthesize three prior unit themes into one coherent narrative.",
      "Embed uncertainty and instrumentation limits throughout.",
      "Separate coaching, research, and medical responsibilities explicitly.",
    ],
    chunkHeadings: ["Brief Architecture For Executives", "Evidence Stack Construction", "Final Responsibility Map"],
    coachBodies: [
      "Executives want question, recommendation, risk, and next measurement—one page max.",
      "Stack evidence from video, available sensors, and published literature with clear tier labels.",
      "End with RACI-style responsibility map including medical escalation paths.",
    ],
    formalBodies: [
      "Executive communication is an optimization under attention constraints.",
      "Evidence grading mirrors GRADE-inspired teaching simplifications; disclose simplification.",
      "Responsibility mapping reduces organizational harm when surprises occur.",
    ],
    workedLens: "capstone defense",
    workedScenario: "Mock front-office meeting challenges your brief's strongest claim about fatigue and command.",
    synthesisPrompt: "Submit the capstone brief and a two-minute spoken defense outline with Q&A anticipation.",
    nextBridge: "Continue to Communicating Sports Analytics Insights for publication-grade narratives.",
    keyTerms: [
      { term: "Executive summary", definition: "Dense opening section stating decisions, risks, and asks for leadership readers." },
      { term: "Evidence stack", definition: "Layered presentation of supporting information from weaker to stronger modalities." },
      { term: "Escalation path", definition: "Predefined route to medical or legal review when triggers occur." },
    ],
    integrative: true,
  },
];

export const HAND_AUTHORED_BIOMECHANICS: Record<string, LessonDocument> = BIO_SPECS.reduce<
  Record<string, LessonDocument>
>((acc, spec) => {
  acc[spec.key] = buildBioLesson(spec);
  return acc;
}, {});
