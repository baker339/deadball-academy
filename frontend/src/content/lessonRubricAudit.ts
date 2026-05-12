import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { LESSON_EDITOR_RUBRIC } from "./lessonEditorRubric";
import { ALL_LESSONS } from "./lessons/allLessons";
import type { LessonDocument } from "./lessonTypes";
import type { ReviewSeverity } from "./reviewNotes";

export type RubricAuditFinding = {
  criterionId: string;
  severity: ReviewSeverity;
  message: string;
};

export type RubricLessonScorecard = {
  lessonKey: string;
  title: string;
  trackSlug: string;
  overallSeverity: ReviewSeverity;
  findings: RubricAuditFinding[];
  generatedAtIso: string;
};

const severityRank: Record<ReviewSeverity, number> = {
  blocker: 4,
  major: 3,
  minor: 2,
  note: 1,
};

function maxSeverity(a: ReviewSeverity, b: ReviewSeverity): ReviewSeverity {
  return severityRank[a] >= severityRank[b] ? a : b;
}

function foldOverall(findings: RubricAuditFinding[]): ReviewSeverity {
  let s: ReviewSeverity = "note";
  for (const f of findings) s = maxSeverity(s, f.severity);
  return s;
}

const BASEBALL_TERMS =
  /\b(pitcher|pitching|batter|hitting|inning|innings|mound|plate|fastball|slider|curveball|changeup|bullpen|starter|reliever|closer|catcher|outfield|infield|baseman|steal|stolen|sprint|delivery|swing|bat|throw|throws|statcast|dugout|rotation|lineup|doubleheader|pickoff|warmup|showcase|pop\s*time|velocity|spin|command|home\s*run|singles|tag|runner|on\s*base)\b/gi;

const DIAGRAM_MARKERS = /\[\[(?:INLINE_)?DIAGRAM:/g;

const UNCERTAINTY_MARKERS =
  /\b(uncertain|uncertainty|limit(?:ation|s)?|hypothesis|bounded|not\s+proof|defer|evidence|ethical|epistemic|confidence\s+tier|verify|instrumentation|non-?medical|clinical\s+staff|medical\s+staff|not\s+diagnos)\b/gi;

/** High-risk clinical phrasing in prose (MCQ options excluded at call site). */
const CLINICAL_RISK =
  /\b(prescribe|prescribed|prescribing|you\s+need\s+surgery|surgery\s+is\s+required|torn\s+(labrum|ucl|ligament)|diagnos(?:e|ed|ing)\s+(?:this|the|your)\s+(?:injury|tear|condition))\b/i;

const INTEGRATIVE_TITLE = /\b(workshop|synthesis|lab|capstone|defense|seminar|practicum|debate)\b/i;

function lessonProseForAnchoring(doc: LessonDocument): string {
  return [
    doc.whyItMatters,
    doc.lessonOpener,
    doc.lessonSummary,
    ...doc.conceptChunks.flatMap((c) => [c.explainLikeCoach, c.formalNote]),
    ...doc.workedExamples.flatMap((w) => [w.scenario, w.takeaway, ...w.walkthrough]),
    doc.synthesisPrompt,
    doc.nextLessonBridge,
  ].join(" ");
}

function lessonProseForClinical(doc: LessonDocument): string {
  return [doc.whyItMatters, doc.lessonOpener, doc.lessonSummary, ...doc.conceptChunks.flatMap((c) => [c.explainLikeCoach, c.formalNote])].join(" ");
}

function countMatches(re: RegExp, text: string): number {
  const copy = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  return (text.match(copy) ?? []).length;
}

export function auditRubricForLesson(lessonKey: string, doc: LessonDocument): RubricLessonScorecard {
  const trackSlug = lessonKey.split("::")[0] ?? "";
  const findings: RubricAuditFinding[] = [];
  const now = new Date().toISOString();

  const proseAnchor = lessonProseForAnchoring(doc);
  const proseClinical = lessonProseForClinical(doc);
  const fullText = JSON.stringify(doc);

  const baseballHits = countMatches(BASEBALL_TERMS, proseAnchor);
  if (baseballHits < 10) {
    findings.push({
      criterionId: "baseball_anchoring",
      severity: baseballHits < 5 ? "major" : "minor",
      message: `Baseball-specific term density appears low (${baseballHits} hits in core prose fields). Add concrete roles, situations, or measurable outcomes.`,
    });
  }

  const diagramHits = countMatches(DIAGRAM_MARKERS, fullText);
  if (diagramHits === 0) {
    findings.push({
      criterionId: "visuals_where_helpful",
      severity: "minor",
      message: "No [[DIAGRAM:...]] or [[INLINE_DIAGRAM:...]] markers detected in serialized lesson content.",
    });
  }

  if (!doc.whyItMatters?.trim()) {
    findings.push({
      criterionId: "stem_topic_fidelity",
      severity: "major",
      message: "Missing or empty whyItMatters.",
    });
  }

  if ((doc.objectives?.length ?? 0) < 2 || (doc.conceptChunks?.length ?? 0) < 2) {
    findings.push({
      criterionId: "stem_topic_fidelity",
      severity: "minor",
      message: "Objectives or concept chunks look thin for a full lesson document.",
    });
  }

  const practiceCount = doc.practiceSets.reduce((n, s) => n + s.prompts.length, 0);
  const weakWorked =
    doc.workedExamples.length === 0 ||
    doc.workedExamples.some((w) => w.walkthrough.length < 3) ||
    practiceCount < 4;
  if (weakWorked) {
    findings.push({
      criterionId: "examples_and_worked",
      severity: "major",
      message: "Worked examples or practice ladder looks incomplete (need ≥1 worked example with ≥3 steps each and sufficient practice prompts).",
    });
  }

  const uncertaintyHits = countMatches(UNCERTAINTY_MARKERS, proseClinical);
  if (uncertaintyHits < 2) {
    findings.push({
      criterionId: "integrity_uncertainty",
      severity: "minor",
      message: "Limited explicit uncertainty or limits-of-evidence language in primary explanatory prose.",
    });
  }

  if (trackSlug === "biological-mechanics-of-baseball" && CLINICAL_RISK.test(proseClinical)) {
    findings.push({
      criterionId: "non_medical_boundary",
      severity: "blocker",
      message: "Possible clinical or prescriptive phrasing detected in biomechanics track prose—rewrite as coach-education language and defer diagnosis or treatment.",
    });
  }

  if ((doc.prerequisites?.length ?? 0) < 2) {
    findings.push({
      criterionId: "prerequisites_and_objectives",
      severity: "minor",
      message: "Prerequisites list is shorter than recommended for sequencing honesty.",
    });
  }

  const nAssess = doc.assessmentItems?.length ?? 0;
  if (nAssess < 2) {
    findings.push({
      criterionId: "assessment_alignment",
      severity: "minor",
      message: "Fewer than two assessment items detected.",
    });
  }

  if (!doc.summativeReflection && INTEGRATIVE_TITLE.test(doc.title)) {
    findings.push({
      criterionId: "summative_when_integrative",
      severity: "major",
      message: "Integrative-style title without summativeReflection—add rubric artifact or adjust title.",
    });
  }

  return {
    lessonKey,
    title: doc.title,
    trackSlug,
    overallSeverity: foldOverall(findings),
    findings,
    generatedAtIso: now,
  };
}

/**
 * Heuristic rubric audit over all blueprint lessons. Human editors still sign off on nuance;
 * criteria mirror `LESSON_EDITOR_RUBRIC` where `automatable` is true.
 */
export function runRubricLessonAudit(): RubricLessonScorecard[] {
  const keys = collectAllLessonKeys(deepCourseBlueprint);
  const out: RubricLessonScorecard[] = [];
  for (const key of keys) {
    const doc = ALL_LESSONS[key];
    if (!doc) throw new Error(`Missing lesson for rubric audit: ${key}`);
    out.push(auditRubricForLesson(key, doc));
  }
  return out;
}

/** Summarize how many lessons triggered each automatable rubric id (for CI or docs). */
export function rubricAuditSummary(scorecards: RubricLessonScorecard[]): Record<string, number> {
  const tallies: Record<string, number> = {};
  for (const c of LESSON_EDITOR_RUBRIC) {
    if (c.automatable) tallies[c.id] = 0;
  }
  for (const card of scorecards) {
    for (const f of card.findings) {
      tallies[f.criterionId] = (tallies[f.criterionId] ?? 0) + 1;
    }
  }
  return tallies;
}
