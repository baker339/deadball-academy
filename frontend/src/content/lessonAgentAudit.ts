import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { ALL_LESSONS } from "./lessons/allLessons";
import type { ReviewSeverity } from "./reviewNotes";

export type LessonAuditDimensionScore = {
  dimension: "legitimacy" | "cohesion" | "teaching_effectiveness" | "verbiage";
  severity: ReviewSeverity;
  findings: string[];
  recommendations: string[];
  confidence: "low" | "medium" | "high";
};

export type LessonAuditScorecard = {
  lessonKey: string;
  title: string;
  overallSeverity: ReviewSeverity;
  dimensions: LessonAuditDimensionScore[];
  generatedAtIso: string;
};

export type LessonAuditMemo = {
  lessonKey: string;
  title: string;
  summary: string;
  strengths: string[];
  gaps: string[];
  nextActions: string[];
};

const severityRank: Record<ReviewSeverity, number> = {
  blocker: 4,
  major: 3,
  minor: 2,
  note: 1,
};

function chooseSeverity(values: ReviewSeverity[]): ReviewSeverity {
  let selected: ReviewSeverity = "note";
  for (const value of values) {
    if (severityRank[value] > severityRank[selected]) selected = value;
  }
  return selected;
}

function longSentenceCount(text: string): number {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => sentence.split(/\s+/).filter(Boolean).length >= 36).length;
}

function auditLesson(lessonKey: string): { scorecard: LessonAuditScorecard; memo: LessonAuditMemo } {
  const doc = ALL_LESSONS[lessonKey];
  const trackSlug = lessonKey.split("::")[0] ?? "";
  const text = [doc.whyItMatters, doc.lessonOpener, doc.lessonSummary, ...doc.conceptChunks.map((chunk) => chunk.formalNote)].join(" ");
  const now = new Date().toISOString();

  const legitimacyFindings: string[] = [];
  const legitimacyActions: string[] = [];
  let legitimacySeverity: ReviewSeverity = "note";
  if (trackSlug === "baseball-physics-foundations" || trackSlug === "environmental-science-for-baseball-systems" || trackSlug === "data-analysis-with-statcast") {
    legitimacySeverity = "minor";
    legitimacyFindings.push("Domain-sensitive track detected where external source validation is recommended.");
    legitimacyActions.push("Confirm quantitative claims against current primary references and mark verify-externally where unresolved.");
  } else {
    legitimacyFindings.push("No high-risk quantitative domain trigger detected.");
    legitimacyActions.push("Spot-check any newly added empirical claims for dated references.");
  }

  const cohesionFindings: string[] = [];
  const cohesionActions: string[] = [];
  let cohesionSeverity: ReviewSeverity = "note";
  if ((doc.prerequisites?.length ?? 0) < 2) {
    cohesionSeverity = "minor";
    cohesionFindings.push("Prerequisite guidance is thin for a college-level progression.");
    cohesionActions.push("Add explicit readiness checks and links to prior lessons.");
  } else {
    cohesionFindings.push("Prerequisites list is present and should support unit sequencing.");
    cohesionActions.push("Verify prerequisite language reflects actual dependency depth.");
  }

  const teachingFindings: string[] = [];
  const teachingActions: string[] = [];
  let teachingSeverity: ReviewSeverity = "note";
  const practicePromptCount = doc.practiceSets.reduce((count, set) => count + set.prompts.length, 0);
  if (doc.workedExamples.length === 0 || practicePromptCount < 3) {
    teachingSeverity = "major";
    teachingFindings.push("Worked-example or practice coverage appears too light for reliable mastery.");
    teachingActions.push("Add at least one full worked example and richer core/stretch practice prompts.");
  } else {
    teachingFindings.push("Worked examples and multi-level practice sets are present.");
    teachingActions.push("Human reviewer should confirm examples match learner misconceptions in this unit.");
  }
  if (!doc.summativeReflection && /\b(capstone|synthesis|workshop|seminar|practicum|lab|defense|debate)\b/i.test(doc.title)) {
    teachingSeverity = "major";
    teachingFindings.push("Integrative title without summative reflection rubric detected.");
    teachingActions.push("Add summativeReflection rubric or rename title to match intent.");
  }

  const verbiageFindings: string[] = [];
  const verbiageActions: string[] = [];
  let verbiageSeverity: ReviewSeverity = "note";
  const longSentences = longSentenceCount(text);
  if (longSentences >= 4) {
    verbiageSeverity = "minor";
    verbiageFindings.push(`Detected ${longSentences} long sentences in core prose that may raise cognitive load.`);
    verbiageActions.push("Split long sentences and tighten jargon-heavy passages for reviewer clarity pass.");
  } else {
    verbiageFindings.push("Sentence-length profile appears manageable for guided lesson flow.");
    verbiageActions.push("Perform final plain-language pass during human review.");
  }

  const dimensions: LessonAuditDimensionScore[] = [
    {
      dimension: "legitimacy",
      severity: legitimacySeverity,
      findings: legitimacyFindings,
      recommendations: legitimacyActions,
      confidence: "medium",
    },
    {
      dimension: "cohesion",
      severity: cohesionSeverity,
      findings: cohesionFindings,
      recommendations: cohesionActions,
      confidence: "medium",
    },
    {
      dimension: "teaching_effectiveness",
      severity: teachingSeverity,
      findings: teachingFindings,
      recommendations: teachingActions,
      confidence: "medium",
    },
    {
      dimension: "verbiage",
      severity: verbiageSeverity,
      findings: verbiageFindings,
      recommendations: verbiageActions,
      confidence: "medium",
    },
  ];

  const overallSeverity = chooseSeverity(dimensions.map((dimension) => dimension.severity));
  const gaps = dimensions
    .filter((dimension) => dimension.severity !== "note")
    .flatMap((dimension) => dimension.findings)
    .slice(0, 4);
  const strengths = dimensions.flatMap((dimension) => dimension.findings).slice(0, 3);
  const nextActions = dimensions.flatMap((dimension) => dimension.recommendations).slice(0, 4);

  return {
    scorecard: {
      lessonKey,
      title: doc.title,
      overallSeverity,
      dimensions,
      generatedAtIso: now,
    },
    memo: {
      lessonKey,
      title: doc.title,
      summary: `Automated lesson audit flagged overall severity ${overallSeverity}. Human reviewer sign-off remains required.`,
      strengths,
      gaps,
      nextActions,
    },
  };
}

export function runSinglePassLessonAudit(): { scorecards: LessonAuditScorecard[]; memos: LessonAuditMemo[] } {
  const lessonKeys = collectAllLessonKeys(deepCourseBlueprint);
  const scorecards: LessonAuditScorecard[] = [];
  const memos: LessonAuditMemo[] = [];
  for (const key of lessonKeys) {
    const { scorecard, memo } = auditLesson(key);
    scorecards.push(scorecard);
    memos.push(memo);
  }
  return { scorecards, memos };
}
