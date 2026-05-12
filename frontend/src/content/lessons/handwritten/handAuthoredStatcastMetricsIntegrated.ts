import type { LessonDocument } from "../../lessonTypes";

const TRACK_SLUG = "data-analysis-with-statcast";
const TRACK_TITLE = "Data Analysis With Statcast";

type UnitConfig = {
  unitTitle: string;
  lessonTitles: string[];
};

const unitConfigs: UnitConfig[] = [
  {
    unitTitle: "Statcast Schema And Data Cleaning",
    lessonTitles: [
      "Event-Level Data Sources And Measurement Pipelines",
      "Metric Reliability Across Parks Eras And Sensors",
    ],
  },
  {
    unitTitle: "Feature Engineering For Ball Flight And HR Outcomes",
    lessonTitles: [
      "Expected Statistics Construction And Assumptions",
      "Scaling Normalization And Cross-Player Comparison",
    ],
  },
  {
    unitTitle: "Reproducible Pipelines And Notebooks",
    lessonTitles: [
      "Diagnostics For Drift Noise And Confounding",
      "Communicating Metric Limits To Non-Technical Audiences",
    ],
  },
];

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildLesson(unitTitle: string, lessonTitle: string): LessonDocument {
  const unitSlug = slugify(unitTitle);
  const lessonSlug = slugify(lessonTitle);
  const key = `${TRACK_SLUG}::${unitSlug}::${lessonSlug}`;

  return {
    key,
    title: lessonTitle,
    trackTitle: TRACK_TITLE,
    unitTitle,
    whyItMatters:
      `${lessonTitle} matters because Statcast outputs are only decision-useful when analysts can explain data lineage, assumptions, and uncertainty boundaries with precision. ` +
      `Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate. ` +
      `Without these safeguards, teams can mistake measurement artifacts for signal and make costly player-development or strategy choices. ` +
      `This lesson strengthens metric literacy inside the primary Statcast workflow so interpretation stays auditable from ingestion to recommendation. ` +
      `In practice, this means every metric claim should survive an adversarial review that asks: what exactly was measured, what transformed the data, what contexts break comparability, and what decision risk appears if assumptions fail. ` +
      `Teams that institutionalize this discipline reduce avoidable rework, align coaches and analysts faster, and preserve trust when recommendations must be revised midseason.`,
    lessonOpener:
      `A baseball operations group is reviewing a Statcast report that looks convincing on first pass, but key disagreements emerge about definitions, comparability, and reliability. ` +
      `This lesson shows how to pressure-test metrics with reproducible checks before attaching decisions to them. ` +
      `Learners practice turning polished numbers into defensible evidence chains that survive technical and coaching scrutiny. ` +
      `Instead of treating disagreement as friction, the class uses disagreement as a diagnostic asset: each challenge reveals where lineage documentation is weak, where context assumptions are hidden, and where communication language overpromises beyond the evidence. ` +
      `By the end, learners can produce concise, decision-ready language that is still explicit about uncertainty, scope, and revision triggers.`,
    narrativeFlow: [
      "Clarify metric semantics, data provenance, and unit consistency.",
      "Identify assumptions and transformation choices that shape interpretation.",
      "Stress-test stability across context, time, and instrumentation changes.",
      "Translate bounded conclusions into decision-ready language.",
    ],
    objectives: [
      "Audit Statcast metric construction and interpretability limits.",
      "Diagnose reliability risks before communicating recommendations.",
      "Defend metric-based decisions with transparent caveats.",
    ],
    prerequisites: [
      "Comfort reading event-level baseball data tables.",
      "Basic familiarity with feature engineering pipelines.",
      "Ability to communicate uncertainty in practical terms.",
    ],
    conceptChunks: [
      {
        heading: "Definition And Pipeline Audit",
        explainLikeCoach:
          "Before trusting a metric, verify what event rows it uses, what sensors or transformations feed it, and where silent exclusions can slip in. A metric is not a fact; it is a workflow outcome that can drift as systems change. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        formalNote:
          "Define a metric as m = g(D, P, A), where D is source data, P is preprocessing policy, and A is aggregation logic. Any interpretation claim is valid only if all three components are versioned and reproducible.",
      },
      {
        heading: "Context And Reliability Boundaries",
        explainLikeCoach:
          "Metrics can look stable overall but break by park, era, or acquisition environment. Reliability is not a global property; it is conditional on context and measurement conditions.",
        formalNote:
          "For each context c, estimate shift Δ_c = m_c − m_ref and uncertainty u_c. Treat m as transportable across contexts only when shifts satisfy pre-registered tolerance bounds.",
      },
      {
        heading: "Communication Discipline",
        explainLikeCoach:
          "Decision language should match evidence strength. If a metric is noisy or context-fragile, communicate that directly instead of overstating confidence.",
        formalNote:
          "Report claims as an ordered triple: (point estimate, uncertainty, validity scope). Recommendations should map to explicit scope rather than implied universality.",
      },
    ],
    quickChecks: [
      {
        prompt: "What is the minimum documentation set needed to defend a metric?",
        answer: "Data source, preprocessing policy, and aggregation logic with versioning.",
      },
      {
        prompt: "Why can a metric be reliable in one context and weak in another?",
        answer: "Measurement conditions and population structure differ across contexts.",
      },
      {
        prompt: "What should every decision-facing metric statement include?",
        answer: "Estimate, uncertainty, and scope limits.",
      },
    ],
    workedExamples: [
      {
        title: "Cross-Park Comparison Integrity Check",
        scenario:
          "A report compares players across parks using a derived Statcast metric.",
        walkthrough: [
          "Trace the metric from raw events to final aggregation.",
          "Check park-conditioned shifts and uncertainty bands.",
          "Rewrite the recommendation with explicit scope boundaries.",
        ],
        takeaway:
          "The final recommendation is narrower but more reliable and actionable.",
      },
      {
        title: "Drift Triage In Weekly Operations",
        scenario:
          "A month-over-month dashboard shows a sudden metric movement.",
        walkthrough: [
          "Separate performance shift hypotheses from pipeline drift hypotheses.",
          "Run reproducible checks on ingestion and transformation versions.",
          "Attribute change only after pipeline stability is verified.",
        ],
        takeaway:
          "False alarms from pipeline variation are removed before staff decisions.",
      },
      {
        title: "Coach-Facing Translation Exercise",
        scenario:
          "A coach requests a simple explanation for a complex Statcast indicator.",
        walkthrough: [
          "Translate construction logic into plain baseball language.",
          "State the metric's strongest and weakest use cases.",
          "Offer a paired diagnostic metric to avoid overreach.",
        ],
        takeaway:
          "The coaching staff gets usable guidance without misleading certainty.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          {
            prompt:
              "List two reasons a Statcast metric can change even when player skill stays stable.",
            answer:
              "Any two of sensor changes, preprocessing policy changes, context reweighting, or denominator changes.",
            explanation:
              "Pipeline and context shifts can mimic player-level movement.",
          },
          {
            prompt:
              "What three elements must be versioned to audit a metric claim?",
            answer:
              "Source data definition, preprocessing policy, and aggregation/derivation logic.",
            explanation:
              "Versioned lineage enables reproducible validation.",
          },
        ],
      },
      {
        level: "core",
        prompts: [
          {
            prompt:
              "Design one reliability check that compares metric behavior across parks.",
            answer:
              "Compute park-stratified estimates with uncertainty and verify shifts remain within predefined tolerance.",
            explanation:
              "Transportability should be tested, not assumed.",
          },
          {
            prompt:
              "How should recommendation language change when drift diagnostics fail?",
            answer:
              "Narrow scope, lower confidence, and require monitoring before broad deployment.",
            explanation:
              "Decision safety requires calibrated claims.",
          },
          {
            prompt:
              "When comparing players, why is scaling choice a validity issue?",
            answer:
              "Different scaling methods can alter rank order and interpretation, so comparability assumptions must be explicit.",
            explanation:
              "Normalization is a modeling decision with practical consequences.",
          },
        ],
      },
      {
        level: "stretch",
        prompts: [
          {
            prompt:
              "Rewrite a confident headline into a bounded recommendation with uncertainty and scope.",
            answer:
              "Recommend action within specified context, include uncertainty range, and define an evidence trigger for revision.",
            explanation:
              "Strong recommendations are precise, bounded, and revisable.",
          },
          {
            prompt:
              "Draft one sentence that distinguishes measurement reliability from causal interpretation.",
            answer:
              "The metric is measured consistently under defined conditions, but it does not by itself establish a causal mechanism.",
            explanation:
              "Reliability and causality answer different questions.",
          },
        ],
      },
    ],
    commonMistakes: [
      "Treating metrics as self-explanatory rather than pipeline-dependent.",
      "Ignoring context shifts when comparing players or periods.",
      "Reporting point estimates without uncertainty or scope boundaries.",
    ],
    lessonSummary:
      "Metric literacy belongs inside everyday Statcast analysis. By auditing provenance, testing reliability, and communicating limits explicitly, analysts improve both technical validity and practical decision quality.",
    synthesisPrompt:
      "Produce a one-page Statcast metric audit memo that includes data lineage, derivation assumptions, reliability checks across context, bounded recommendation language, and a revision trigger.",
    nextLessonBridge:
      "The next lesson advances this pattern by applying metric literacy checks to a broader production workflow with tighter operational timelines.",
    professorNotes:
      "Emphasize that confidence should track evidence quality, not presentation polish. In discussion, ask learners to separate four layers explicitly: measurement pipeline integrity, derivation assumptions, context transportability, and communication ethics. Require students to defend each recommendation against at least one plausible failure mode such as sensor drift, denominator instability, era mismatch, or hidden selection effects. Strong submissions should show that the learner can preserve decision usefulness while still communicating uncertainty, rather than choosing between oversimplified certainty and unusable caution. Encourage teams to maintain a recurring legitimacy checklist so analysts can rapidly audit claims under real game-preparation time pressure without skipping critical safeguards.",
    keyTerms: [
      {
        term: "Metric lineage",
        definition:
          "The traceable chain from raw event capture through preprocessing and aggregation to the final reported statistic.",
      },
      {
        term: "Transportability",
        definition:
          "The degree to which a metric interpretation remains valid across different parks, eras, populations, or acquisition systems.",
      },
      {
        term: "Scope-bounded recommendation",
        definition:
          "A decision statement that names where the claim is valid, where it is uncertain, and what evidence would trigger revision.",
      },
    ],
    assessmentItems: [
      {
        id: `${lessonSlug}-mcq-1`,
        type: "mcq",
        prompt:
          "Which statement best reflects high-quality Statcast metric literacy in production analysis?",
        options: [
          "Use the metric if it has appeared in prior reports",
          "Pair metric values with lineage, assumptions, reliability checks, and bounded language",
          "Suppress uncertainty to maintain stakeholder confidence",
          "Treat park-to-park variation as noise unless extremely large",
        ],
        correctAnswer:
          "Pair metric values with lineage, assumptions, reliability checks, and bounded language",
        explanation:
          "Production-grade interpretation requires both technical validity and communication discipline.",
      },
      {
        id: `${lessonSlug}-exact-1`,
        type: "exact",
        prompt:
          "Enter the term for validity across contexts such as different parks or eras.",
        correctAnswer: "Transportability",
        acceptedAnswers: ["transportability", "external validity"],
        explanation:
          "Transportability captures whether a claim generalizes beyond the original context.",
      },
      {
        id: `${lessonSlug}-exact-2`,
        type: "exact",
        prompt:
          "Enter the phrase for a recommendation that includes scope and revision conditions.",
        correctAnswer: "Scope-bounded recommendation",
        acceptedAnswers: [
          "scope-bounded recommendation",
          "bounded recommendation",
        ],
        explanation:
          "Scope-bounded language protects decisions from overreach.",
      },
    ],
  };
}

export const HAND_AUTHORED_STATCAST_METRICS_INTEGRATED: Record<
  string,
  LessonDocument
> = unitConfigs
  .flatMap((unit) =>
    unit.lessonTitles.map((lessonTitle) => buildLesson(unit.unitTitle, lessonTitle))
  )
  .reduce<Record<string, LessonDocument>>((acc, lesson) => {
    acc[lesson.key] = lesson;
    return acc;
  }, {});
