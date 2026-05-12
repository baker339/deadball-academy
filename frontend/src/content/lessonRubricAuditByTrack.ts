import { deepCourseBlueprint } from "./deepCourseBlueprint";
import type { TrackBlueprint } from "./lessonTypes";
import { LESSON_EDITOR_RUBRIC } from "./lessonEditorRubric";
import { auditRubricForLesson, type RubricLessonScorecard } from "./lessonRubricAudit";
import { ALL_LESSONS } from "./lessons/allLessons";

/** Ordered lesson keys per track slug (blueprint syllabus order). */
export function groupLessonKeysByTrack(blueprint: TrackBlueprint[]): Map<string, string[]> {
  const m = new Map<string, string[]>();
  for (const track of blueprint) {
    const keys: string[] = [];
    for (const unit of track.units) {
      for (const lesson of unit.lessons) {
        keys.push(`${track.slug}::${unit.slug}::${lesson.slug}`);
      }
    }
    m.set(track.slug, keys);
  }
  return m;
}

export function runRubricLessonAuditForTrack(trackSlug: string): RubricLessonScorecard[] {
  const byTrack = groupLessonKeysByTrack(deepCourseBlueprint);
  const keys = byTrack.get(trackSlug);
  if (!keys) {
    throw new Error(`Unknown track slug: ${trackSlug}`);
  }
  const out: RubricLessonScorecard[] = [];
  for (const key of keys) {
    const doc = ALL_LESSONS[key];
    if (!doc) throw new Error(`Missing lesson for rubric audit: ${key}`);
    out.push(auditRubricForLesson(key, doc));
  }
  return out;
}

function formatRubricIdChecklistMarkdown(): string {
  return LESSON_EDITOR_RUBRIC.map((c) => `- \`${c.id}\` — **${c.label}**`).join("\n");
}

/**
 * Static instructions for a reviewing agent (human or Cursor).
 * Full criterion guidance lives in docs/lesson-editor-rubric.md and lessonEditorRubric.ts.
 */
export function buildTrackRubricAgentInstructionsMarkdown(): string {
  const checklist = formatRubricIdChecklistMarkdown();
  return [
    "You are reviewing **Baseball–STEM** curriculum lessons against the **lesson editor rubric**.",
    "",
    "**Before qualitative review**, treat the embedded heuristic scorecard (from `runRubricLessonAudit` / `lessonRubricAudit.ts`) as **preflight only**—not a substitute for editorial judgment.",
    "",
    "**Criteria to evaluate** (confirm each against the lesson content; full guidance in the rubric doc):",
    "",
    checklist,
    "",
    "**For each lesson:**",
    "- Work through every row in `LESSON_EDITOR_RUBRIC` (use id + label above; open the linked rubric doc for definitions).",
    "- When you flag an issue, give a **severity** (`blocker`, `major`, `minor`, or `note`) and **notes**.",
    "- **Cite short excerpts** from the lesson (field names or quoted lines) when useful.",
    "- Prefer constructive, specific fixes (what to add, change, or verify).",
    "",
    "**Do not** perform medical diagnosis or prescribe treatment. For body/biomechanics content, enforce **coach-education / non-clinical** framing and defer clinical questions to qualified staff (see `non_medical_boundary`).",
    "",
    "**Output:** complete the per-lesson **Agent qualitative review** sections in this pack with your severity + notes (separate from heuristic bullets above).",
  ].join("\n");
}

export type TrackRubricAgentPackLesson = {
  lessonKey: string;
  title: string;
  scorecard: RubricLessonScorecard;
};

export type TrackRubricAgentPack = {
  trackSlug: string;
  trackTitle: string;
  lessons: TrackRubricAgentPackLesson[];
  agentInstructionsMarkdown: string;
};

export function buildTrackRubricAgentPack(trackSlug: string): TrackRubricAgentPack {
  const track = deepCourseBlueprint.find((t) => t.slug === trackSlug);
  if (!track) {
    throw new Error(`Unknown track slug: ${trackSlug}`);
  }
  const scorecards = runRubricLessonAuditForTrack(trackSlug);
  return {
    trackSlug,
    trackTitle: track.title,
    lessons: scorecards.map((scorecard) => ({
      lessonKey: scorecard.lessonKey,
      title: scorecard.title,
      scorecard,
    })),
    agentInstructionsMarkdown: buildTrackRubricAgentInstructionsMarkdown(),
  };
}
