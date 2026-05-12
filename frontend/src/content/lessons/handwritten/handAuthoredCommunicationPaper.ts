import type { LessonDocument } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

const TRACK_SLUG = "communicating-sports-analytics-insights";
const TRACK_TITLE = "Communicating Sports Analytics Insights";
const UNIT_TITLE = "Scientific Paper Literacy For Sports Analytics";
const UNIT_SLUG = "scientific-paper-literacy-for-sports-analytics";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildLesson(lessonTitle: string): LessonDocument {
  const lessonSlug = slugify(lessonTitle);
  const key = `${TRACK_SLUG}::${UNIT_SLUG}::${lessonSlug}`;

  const legitimacyBlock =
    "Use this legitimacy rubric every time: source credibility, method transparency, statistical adequacy, uncertainty disclosure, and communication honesty. " +
    "Always end with an independent decision statement: accept, provisional accept, or reject, with explicit rationale and uncertainty notes.";

  return {
    key,
    title: lessonTitle,
    trackTitle: TRACK_TITLE,
    unitTitle: UNIT_TITLE,
    whyItMatters:
      `${lessonTitle} matters because baseball organizations consume research summaries, preprints, social media threads, and internal memos at high speed. ` +
      `Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate. ` +
      `Without a disciplined reading process, decision-makers can mistake confident writing for strong evidence and carry weak claims into lineup planning, pitching strategy, or player development priorities. ` +
      `This lesson trains students to read scientific and analytical communication with enough rigor to evaluate legitimacy, identify limits, and still make practical decisions under time pressure.`,
    lessonOpener:
      `A coach asks whether a paper-driven recommendation should change tomorrow's game plan. The abstract sounds convincing, but the methods and uncertainty language are dense. ` +
      `In this lesson, students learn to parse the full argument, test whether claims are supported, and translate evidence strength into an explicit baseball decision memo. ` +
      `The goal is not blind skepticism; the goal is independent judgment grounded in transparent evidence standards.`,
    narrativeFlow: [
      "Frame the practical baseball decision before reading details.",
      "Extract claims, methods, assumptions, and uncertainty signals.",
      "Evaluate legitimacy of both evidence and communication framing.",
      "Produce an independent decision judgment with rationale.",
    ],
    objectives: [
      "Identify what a paper or communication is truly claiming.",
      "Evaluate legitimacy using a structured evidence-and-credibility rubric.",
      "Write an independent accept/provisional/reject decision statement.",
    ],
    prerequisites: [
      "Basic familiarity with baseball analytics vocabulary.",
      "Comfort reading technical prose and simple statistical terms.",
      "Willingness to document assumptions before recommendations.",
    ],
    conceptChunks: [
      {
        heading: "Claim Parsing Before Agreement",
        explainLikeCoach:
          `Start by separating headline language from actual claim scope in ${lessonTitle}. [Diagram: claim ladder from headline to testable statement.] [[INLINE_DIAGRAM: placeholder-pending-human-review]] ` +
          `Students should identify outcome variable, population, time window, and implied decision consequence before trusting any recommendation.`,
        formalNote:
          `Represent the main claim as \\(C: X \\rightarrow Y\\) with explicit qualifiers for sample, context, and uncertainty bounds. ` +
          `${legitimacyBlock} ` +
          `DiagramTitle: Claim Ladder\nDiagramPurpose: Map headline wording to auditable claim components.\nDiagramInputs: Headline text, methods summary, measured outcomes.\nDiagramInsight: Confidence language often outruns evidence scope.\nDiagramCaption: Move from persuasive wording to testable claim structure.`,
        equation: "\\[\\text{decision quality} = \\text{evidence strength} + \\text{scope validity} + \\text{uncertainty honesty}\\]",
      },
      {
        heading: "Method Legitimacy And Bias Detection",
        explainLikeCoach:
          `In baseball communication, methods are where legitimacy is won or lost. [Diagram: method audit pipeline for sample, design, and confounding.] ` +
          `Students inspect selection bias, confounding risk, model assumptions, and whether the design can support the claim type being made.`,
        formalNote:
          `Evaluate design adequacy via sample representativeness, identification strategy, and robustness checks. ` +
          `Treat missing assumption disclosure as an evidence downgrade, not a minor writing flaw. ` +
          `DiagramTitle: Method Legitimacy Audit\nDiagramPurpose: Score method credibility before operational adoption.\nDiagramInputs: Sample design, variables, controls, robustness tests.\nDiagramInsight: Unsupported causal language is a major legitimacy risk.\nDiagramCaption: Method transparency determines whether claims should drive action.`,
      },
      {
        heading: "Communication Legitimacy And Rhetorical Risk",
        explainLikeCoach:
          `Even accurate numbers can be communicated deceptively. [Diagram: rhetoric risk map from honest uncertainty to overclaim.] ` +
          `Students learn to flag chart distortion, selective framing, omitted caveats, and certainty inflation in papers, slides, or public threads.`,
        formalNote:
          `Communication legitimacy requires coherent alignment between evidence magnitude and recommendation intensity. ` +
          `If uncertainty is high, recommendation language must remain conditional. ` +
          `DiagramTitle: Communication Legitimacy Matrix\nDiagramPurpose: Compare evidence quality against claim certainty language.\nDiagramInputs: Effect size, interval width, caveats, call-to-action tone.\nDiagramInsight: Overconfident language without uncertainty support is a red flag.\nDiagramCaption: Match rhetorical force to evidentiary strength.`,
      },
      {
        heading: "Independent Judgment Memo",
        explainLikeCoach:
          `End every reading with your own decision, not borrowed confidence. [Diagram: accept/provisional/reject memo flow.] ` +
          `Students must state whether they accept, provisionally accept, or reject the claim for current baseball use, and explain why.`,
        formalNote:
          `Decision output template: judgment \\(J \\in \\{\\text{accept},\\text{provisional},\\text{reject}\\}\\), rationale, uncertainty notes, and next evidence request. ` +
          `DiagramTitle: Independent Judgment Template\nDiagramPurpose: Standardize evidence-to-decision conversion.\nDiagramInputs: Claim audit, method score, communication legitimacy score.\nDiagramInsight: Structured judgment prevents authority-driven adoption.\nDiagramCaption: Convert analysis into accountable independent decisions.`,
      },
    ],
    quickChecks: [
      {
        prompt: "Why separate headline language from claim structure?",
        answer: "Because persuasive wording can hide weak scope, unsupported causality, or missing uncertainty boundaries.",
      },
      {
        prompt: "What is one method red flag that lowers legitimacy?",
        answer: "Unsupported causal claims without design controls or robustness checks should reduce confidence immediately.",
      },
      {
        prompt: "What must every independent judgment include?",
        answer: "A decision label, rationale, uncertainty caveats, and what evidence would change the recommendation.",
      },
    ],
    workedExamples: [
      {
        title: "Abstract Versus Methods Reconciliation",
        scenario: "A paper claims a large effect on hitter outcomes, but design details reveal narrower applicability.",
        walkthrough: [
          "Extract explicit claim, population, and metric definitions.",
          "Audit method legitimacy and confounding control quality.",
          "Compare certainty language to actual uncertainty evidence.",
          "Write a provisional decision memo for baseball operations.",
        ],
        takeaway: "Operational adoption should follow evidence legitimacy, not abstract confidence.",
      },
      {
        title: "Communication Integrity Review",
        scenario: "A chart-heavy communication memo overstates a finding with weak uncertainty disclosure.",
        walkthrough: [
          "Identify rhetorical overreach and omitted caveats.",
          "Reframe recommendation language to match evidence strength.",
          "Document residual risks for coaches and analysts.",
          "Issue accept/provisional/reject with rationale.",
        ],
        takeaway: "Communication legitimacy is as important as numerical accuracy.",
      },
      {
        title: "Independent Decision Exercise",
        scenario: "Two sources disagree on a Statcast-driven intervention recommendation.",
        walkthrough: [
          "Apply the same legitimacy rubric to both sources.",
          "Score method transparency and uncertainty reporting.",
          "Select a conditional action with monitoring triggers.",
          "State what new evidence would change your decision.",
        ],
        takeaway: "Independent judgment requires explicit criteria and revision triggers.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          {
            prompt: "List the five legitimacy checks used in this unit.",
            answer: "Source credibility, method transparency, statistical adequacy, uncertainty disclosure, and communication honesty.",
          },
          {
            prompt: "What is the difference between claim strength and evidence strength?",
            answer: "Claim strength is how strongly something is asserted; evidence strength is how well data and methods support it.",
          },
        ],
      },
      {
        level: "core",
        prompts: [
          {
            prompt: "A paper has strong narrative language but weak controls. What is the likely judgment?",
            answer: "Usually provisional or reject for action until stronger design evidence is provided.",
          },
          {
            prompt: "How should uncertainty alter recommendation wording?",
            answer: "Higher uncertainty requires conditional language and explicit monitoring triggers before broad adoption.",
          },
          {
            prompt: "What should you request before adopting a high-impact claim?",
            answer: "Robustness checks, data access details, and reproducibility artifacts that validate scope and assumptions.",
          },
        ],
      },
      {
        level: "stretch",
        prompts: [
          {
            prompt: "Draft a one-paragraph independent judgment for a mixed-quality paper.",
            answer: "Answer should include decision label, method concerns, uncertainty caveats, and evidence needed for escalation.",
          },
          {
            prompt: "How do you communicate rejection without shutting down learning?",
            answer: "Reject current operational use while clearly stating what additional evidence would enable reconsideration.",
          },
        ],
      },
    ],
    commonMistakes: [
      "Treating publication venue as a substitute for method review.",
      "Confusing rhetorical confidence with evidentiary legitimacy.",
      "Skipping an explicit independent decision statement.",
    ],
    lessonSummary:
      `${lessonTitle} trains readers to evaluate evidence and communication legitimacy so recommendations are independent, accountable, and decision-safe.`,
    synthesisPrompt:
      "Choose one analytics paper or memo and write an accept/provisional/reject decision with explicit legitimacy criteria.",
    nextLessonBridge:
      "With legitimacy evaluation in place, you can now connect evidence quality to communication strategy for different stakeholder groups.",
    professorNotes:
      "Require students to show their legitimacy checklist before discussion. Grade the quality of reasoning, not whether they agree with the paper's conclusion. Reinforce that independent judgment means explicit criteria, transparent uncertainty handling, and revision readiness when better evidence arrives.",
    keyTerms: [
      { term: "Legitimacy", definition: "The degree to which claims are justified by transparent methods, valid evidence, and honest communication." },
      { term: "Independent judgment", definition: "An evidence-based accept/provisional/reject decision made from explicit criteria rather than authority cues." },
      { term: "Scope validity", definition: "Whether a claim's recommended use matches the population, context, and assumptions actually studied." },
    ],
    assessmentItems: [
      {
        id: `${lessonSlug}-mcq-1`,
        type: "mcq",
        prompt: "Which combination best supports legitimacy of a research claim?",
        options: [
          "Strong headline language and famous authors",
          "Transparent methods, uncertainty disclosure, and reproducibility evidence",
          "One impressive chart with no caveats",
          "High social media engagement",
        ],
        correctAnswer: "Transparent methods, uncertainty disclosure, and reproducibility evidence",
        explanation: "Legitimacy depends on evidentiary quality and communication honesty, not reputation or hype.",
      },
      {
        id: `${lessonSlug}-exact-1`,
        type: "exact",
        prompt: "What are the three independent judgment labels used in this unit?",
        correctAnswer: "accept provisional reject",
        acceptedAnswers: ["accept/provisional/reject", "accept, provisional, reject"],
        explanation: "These labels structure evidence-to-action decisions with transparent confidence boundaries.",
      },
      {
        id: `${lessonSlug}-exact-2`,
        type: "exact",
        prompt: "Name one communication red flag that can reduce legitimacy.",
        correctAnswer: "missing uncertainty disclosure",
        acceptedAnswers: ["certainty inflation", "causal overreach", "omitted caveats", "chart distortion"],
        explanation: "Communication red flags indicate mismatch between claim confidence and evidence quality.",
      },
    ],
  };
}

const lessonTitles = [
  "Paper Structure And Reading Strategy",
  "Methods Section Deconstruction",
  "Statistical Claims Effect Sizes And Uncertainty",
  "Reproducibility Data Access And Supplementary Materials",
  "Legitimacy And Credibility Evaluation Framework",
  "From Evidence To Independent Judgment Decision Memo Workshop",
];

export const HAND_AUTHORED_COMMUNICATION_PAPER: Record<string, LessonDocument> = {};
for (const title of lessonTitles) {
  const lesson = buildLesson(title);
  HAND_AUTHORED_COMMUNICATION_PAPER[lesson.key] = lesson;
}

const memoLessonKey = `${TRACK_SLUG}::${UNIT_SLUG}::from-evidence-to-independent-judgment-decision-memo-workshop`;
const memoBase = HAND_AUTHORED_COMMUNICATION_PAPER[memoLessonKey];
HAND_AUTHORED_COMMUNICATION_PAPER[memoLessonKey] = {
  ...memoBase,
  summativeReflection: baseballIntegrativeSummative({
    id: "paper-literacy-decision-memo",
    title: "Summative: Independent judgment decision memo",
    intro:
      "Draft the memo you would file after reading a baseball analytics paper under time pressure, before recommending any club action.",
    taskPrompt:
      "Include legitimacy checklist results (accept / provisional / reject), explicit linkage from methods to claims, two external verification steps you would run on sources or data access (name where you would look, no fabricated citations), and a bounded operational recommendation with monitoring triggers.",
  }),
};
