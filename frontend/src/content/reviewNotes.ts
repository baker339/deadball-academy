import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { ALL_LESSONS } from "./lessons/allLessons";

export type ReviewSeverity = "blocker" | "major" | "minor" | "note";
export type ReviewLifecycleStatus = "pending" | "in_review" | "needs_changes" | "approved" | "blocked";

export type ReviewSignalCategory =
  | "verify_externally"
  | "assessment_alignment"
  | "teaching_effectiveness"
  | "unit_cohesion"
  | "wording_clarity"
  | "accessibility_media"
  | "ethics_fairness";

export type LessonReviewSignal = {
  id: string;
  severity: ReviewSeverity;
  category: ReviewSignalCategory;
  message: string;
  source: "sme_panel_heuristic" | "triage_ticket" | "agent_audit";
};

export type LessonReviewAnnotation = {
  lessonKey: string;
  highestSeverity: ReviewSeverity;
  lifecycle: ReviewLifecycleStatus;
  notes: LessonReviewSignal[];
  references: string[];
  lastUpdatedIso: string;
};

const severityRank: Record<ReviewSeverity, number> = {
  blocker: 4,
  major: 3,
  minor: 2,
  note: 1,
};

const nowIso = new Date().toISOString();

function severityMax(values: ReviewSeverity[]): ReviewSeverity {
  let best: ReviewSeverity = "note";
  for (const value of values) {
    if (severityRank[value] > severityRank[best]) best = value;
  }
  return best;
}

function buildSignalsForLesson(key: string): LessonReviewSignal[] {
  const doc = ALL_LESSONS[key];
  const trackSlug = key.split("::")[0] ?? "";
  const textBlob = [doc.whyItMatters, doc.lessonOpener, ...doc.conceptChunks.map((chunk) => chunk.formalNote + chunk.explainLikeCoach)].join(
    " ",
  );
  const notes: LessonReviewSignal[] = [];

  notes.push({
    id: `${key}::baseline`,
    severity: "note",
    category: "teaching_effectiveness",
    source: "agent_audit",
    message: "AI-generated review notes are a starting point. Human reviewers must verify pedagogy quality before sign-off.",
  });

  const integrationTitle = /\b(capstone|synthesis|workshop|seminar|practicum|lab|defense|debate)\b/i.test(doc.title);
  if (integrationTitle && !doc.summativeReflection) {
    notes.push({
      id: `${key}::summative-gap`,
      severity: "major",
      category: "assessment_alignment",
      source: "sme_panel_heuristic",
      message: "Integrative lesson title detected but no summativeReflection rubric artifact was found.",
    });
  }

  if (trackSlug === "baseball-physics-foundations" && /(Magnus|Reynolds|drag|lift|boundary layer|ODE|turbulen)/i.test(textBlob)) {
    notes.push({
      id: `${key}::physics-verify-externally`,
      severity: "note",
      category: "verify_externally",
      source: "sme_panel_heuristic",
      message: "Physics mechanism claims should be cited or marked verify externally before final publication.",
    });
  }

  if (trackSlug === "environmental-science-for-baseball-systems" && /(climate|humidity|pressure|density|wind)/i.test(textBlob)) {
    notes.push({
      id: `${key}::environment-verify-externally`,
      severity: "note",
      category: "verify_externally",
      source: "triage_ticket",
      message: "Environmental quantitative claims should be validated against primary references before release.",
    });
  }

  if (trackSlug === "data-analysis-with-statcast") {
    notes.push({
      id: `${key}::statcast-drift`,
      severity: "note",
      category: "verify_externally",
      source: "triage_ticket",
      message: "Statcast schema and field semantics can drift; verify code/data guidance against current public docs.",
    });
    notes.push({
      id: `${key}::statcast-ethics`,
      severity: "minor",
      category: "ethics_fairness",
      source: "agent_audit",
      message: "Confirm lessons explicitly handle data leakage, bias, and reproducibility expectations.",
    });
  }

  if ((doc.prerequisites?.length ?? 0) < 2) {
    notes.push({
      id: `${key}::prereq-thin`,
      severity: "minor",
      category: "unit_cohesion",
      source: "agent_audit",
      message: "Prerequisite guidance is light; verify sequencing and readiness criteria are explicit for learners.",
    });
  }

  if ((doc.workedExamples?.length ?? 0) === 0 || (doc.practiceSets ?? []).every((set) => set.prompts.length === 0)) {
    notes.push({
      id: `${key}::practice-depth`,
      severity: "major",
      category: "teaching_effectiveness",
      source: "agent_audit",
      message: "Worked-example or practice depth appears insufficient; review for active learning completeness.",
    });
  }

  if (/\[Inline Diagram|\[Dedicated Diagram|placeholder:/i.test(textBlob)) {
    notes.push({
      id: `${key}::diagram-placeholder`,
      severity: "minor",
      category: "accessibility_media",
      source: "sme_panel_heuristic",
      message: "Placeholder diagram markers are present. Replace with figure assets and descriptive alt text.",
    });
  }

  return notes;
}

function buildAnnotationForLesson(key: string): LessonReviewAnnotation {
  const notes = buildSignalsForLesson(key);
  return {
    lessonKey: key,
    highestSeverity: severityMax(notes.map((note) => note.severity)),
    lifecycle: "pending",
    notes,
    references: ["docs/sme-panel-lesson-review.md", "docs/sme-triage-tickets.md", "docs/sme-human-expert-review-program.md"],
    lastUpdatedIso: nowIso,
  };
}

const annotationsByLessonKey: Record<string, LessonReviewAnnotation> = Object.fromEntries(
  collectAllLessonKeys(deepCourseBlueprint).map((key) => [key, buildAnnotationForLesson(key)]),
);

export function getLessonReviewAnnotation(lessonKey: string): LessonReviewAnnotation | null {
  return annotationsByLessonKey[lessonKey] ?? null;
}

export function getAllLessonReviewAnnotations(): Record<string, LessonReviewAnnotation> {
  return annotationsByLessonKey;
}

export function reviewSeverityBadgeColor(severity: ReviewSeverity): string {
  if (severity === "blocker") return "bg-red-100 text-red-800 border-red-200";
  if (severity === "major") return "bg-orange-100 text-orange-800 border-orange-200";
  if (severity === "minor") return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-blue-100 text-blue-800 border-blue-200";
}
