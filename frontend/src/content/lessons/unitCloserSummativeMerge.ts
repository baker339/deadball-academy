import type { LessonDocument, TrackBlueprint } from "../lessonTypes";
import { lessonKey } from "../lessonRegistry";
import { baseballIntegrativeSummative } from "./summativeReflectionPresets";

/**
 * Adds a default summativeReflection to each unit's final lesson when the authored
 * module does not already define one (Algebra-style rubric, generic wrap-up prompt).
 */
export function mergeUnitCloserSummatives(
  store: Record<string, LessonDocument>,
  blueprint: TrackBlueprint[]
): Record<string, LessonDocument> {
  const out: Record<string, LessonDocument> = { ...store };
  for (const track of blueprint) {
    for (const unit of track.units) {
      const last = unit.lessons[unit.lessons.length - 1];
      if (!last) continue;
      const key = lessonKey(track.slug, unit.slug, last.slug);
      const doc = out[key];
      if (!doc || doc.summativeReflection) continue;
      out[key] = {
        ...doc,
        summativeReflection: baseballIntegrativeSummative({
          id: `${last.slug}-unit-closer-summative`,
          title: `Summative: ${unit.title} wrap-up`,
          taskPrompt: `Write a short staff-facing brief for the unit "${unit.title}" in ${doc.trackTitle}. Tie at least two objectives from this unit to one concrete baseball scenario, name one assumption that would change your recommendation if wrong, and describe one validation or sanity check you would run before publishing.`,
        }),
      };
    }
  }
  return out;
}

const integrativeTitlePattern =
  /\b(capstone|synthesis|workshop|seminar|practicum|lab)\b/i;
const integrativeTitlePattern2 = /\b(milestone|defense|debate)\b/i;

function titleSignalsIntegrativeArtifact(title: string): boolean {
  return integrativeTitlePattern.test(title) || integrativeTitlePattern2.test(title);
}

/**
 * Lessons whose display titles signal integrative artifacts (aligned with
 * `scripts/gen-sme-panel-review.ts`) must expose a constructed-response block.
 */
export function ensureIntegrativeTitleSummatives(store: Record<string, LessonDocument>): Record<string, LessonDocument> {
  const out: Record<string, LessonDocument> = { ...store };
  for (const [key, doc] of Object.entries(out)) {
    if (doc.summativeReflection) continue;
    if (!titleSignalsIntegrativeArtifact(doc.title)) continue;
    const slug = key.split("::")[2] ?? "lesson";
    out[key] = {
      ...doc,
      summativeReflection: baseballIntegrativeSummative({
        id: `${slug}-integrative-summative`,
        title: `Summative: ${doc.title}`,
        taskPrompt: `Produce a short artifact that matches the integrative goals of "${doc.title}" in ${doc.trackTitle}. Tie at least two ideas from this lesson or unit to one baseball decision scenario, state one key assumption, and include one validation or review step you would use before sharing outside your team.`,
      }),
    };
  }
  return out;
}
