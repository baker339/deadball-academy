import type { ReviewSeverity } from "./reviewNotes";

/** One checklist row shared by CMS UI and automated rubric audit heuristics. */
export type LessonEditorRubricCriterion = {
  id: string;
  /** Short label in CMS checklist */
  label: string;
  /** Severity if automated audit detects a likely miss (heuristic only). */
  auditSeverity: ReviewSeverity;
  /** When true, `runRubricLessonAudit` may emit findings for this criterion. */
  automatable: boolean;
  /** Editor guidance (mirrors docs/lesson-editor-rubric.md). */
  guidance: string;
};

/**
 * Baseball–STEM lesson quality rubric (canonical list).
 * Keep in sync with docs/lesson-editor-rubric.md section order and anchors.
 */
export const LESSON_EDITOR_RUBRIC: LessonEditorRubricCriterion[] = [
  {
    id: "stem_topic_fidelity",
    label: "STEM topic fidelity",
    auditSeverity: "major",
    automatable: true,
    guidance:
      "The lesson’s primary definitions, models, and practice should match the unit’s stated quantitative or scientific topic. Baseball is the application layer, not a substitute for teaching the concept.",
  },
  {
    id: "baseball_anchoring",
    label: "Baseball anchoring",
    auditSeverity: "major",
    automatable: true,
    guidance:
      "Multiple concrete baseball scenarios (roles, situations, measurable outcomes). Avoid generic sport or vague “on the field” without specifics.",
  },
  {
    id: "examples_and_worked",
    label: "Examples and worked reasoning",
    auditSeverity: "major",
    automatable: true,
    guidance:
      "At least one worked example walks through assumptions → steps → takeaway. Practice ladders include warmup/core/stretch with baseball-styled prompts where possible.",
  },
  {
    id: "visuals_where_helpful",
    label: "Diagrams and figures",
    auditSeverity: "minor",
    automatable: true,
    guidance:
      "When geometry, forces, signals, or workflows matter, include a figure or diagram block (with alt text). Do not add decorative images without teaching purpose.",
  },
  {
    id: "integrity_uncertainty",
    label: "Integrity and uncertainty",
    auditSeverity: "major",
    automatable: true,
    guidance:
      "State limits of evidence, avoid fake precision, and flag domains that require external verification (health, climate, proprietary data).",
  },
  {
    id: "non_medical_boundary",
    label: "Non-medical boundary (body lessons)",
    auditSeverity: "blocker",
    automatable: true,
    guidance:
      "Lessons about physiology must not diagnose injury or prescribe treatment. Use coach-education and research-literacy framing; defer clinical questions to medical staff.",
  },
  {
    id: "prerequisites_and_objectives",
    label: "Prerequisites and objectives",
    auditSeverity: "minor",
    automatable: true,
    guidance:
      "Objectives are measurable; prerequisites honestly reflect reading and prior-lesson dependencies.",
  },
  {
    id: "assessment_alignment",
    label: "Assessment alignment",
    auditSeverity: "minor",
    automatable: true,
    guidance:
      "Checkpoints and MCQs test what was taught; distractors reflect plausible baseball confusions, not trick wording.",
  },
  {
    id: "accessibility_language",
    label: "Accessibility and language",
    auditSeverity: "note",
    automatable: false,
    guidance:
      "Define jargon on first use, keep sentences speakable aloud, and provide alt text for diagrams. Human reviewer confirms reading level for audience.",
  },
  {
    id: "summative_when_integrative",
    label: "Summative reflection (integrative titles)",
    auditSeverity: "major",
    automatable: true,
    guidance:
      "Workshop, lab, defense, capstone, or synthesis titles should include summativeReflection or be retitled to match lesson scope.",
  },
];

export function rubricCriterionById(id: string): LessonEditorRubricCriterion | undefined {
  return LESSON_EDITOR_RUBRIC.find((c) => c.id === id);
}
