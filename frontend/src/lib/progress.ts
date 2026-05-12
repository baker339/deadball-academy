import { buildLibraryPath, deepCourseBlueprint } from "../content/deepLessonLibrary";
import { lessonKey } from "../content/lessonRegistry";

export type UnlockPolicy = "unit-sequential" | "track-sequential";

type LessonPointer = {
  trackSlug: string;
  unitSlug: string;
  lessonSlug: string;
  title: string;
};

function getTrack(trackSlug: string) {
  return deepCourseBlueprint.find((track) => track.slug === trackSlug) ?? null;
}

function getUnit(trackSlug: string, unitSlug: string) {
  const track = getTrack(trackSlug);
  return track?.units.find((unit) => unit.slug === unitSlug) ?? null;
}

function flattenTrackLessons(trackSlug: string): LessonPointer[] {
  const track = getTrack(trackSlug);
  if (!track) return [];
  return track.units.flatMap((unit) =>
    unit.lessons.map((lesson) => ({
      trackSlug,
      unitSlug: unit.slug,
      lessonSlug: lesson.slug,
      title: lesson.title,
    })),
  );
}

function findFirstMissing(orderedLessons: LessonPointer[], completedKeys: Set<string>): LessonPointer | null {
  for (const lesson of orderedLessons) {
    const key = lessonKey(lesson.trackSlug, lesson.unitSlug, lesson.lessonSlug);
    if (!completedKeys.has(key)) return lesson;
  }
  return null;
}

export function isLessonUnlocked(
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): boolean {
  if (policy === "track-sequential") {
    const orderedTrackLessons = flattenTrackLessons(trackSlug);
    const idx = orderedTrackLessons.findIndex((lesson) => lesson.unitSlug === unitSlug && lesson.lessonSlug === lessonSlug);
    if (idx < 0) return false;
    return orderedTrackLessons.slice(0, idx).every((lesson) => completedKeys.has(lessonKey(trackSlug, lesson.unitSlug, lesson.lessonSlug)));
  }

  const unit = getUnit(trackSlug, unitSlug);
  if (!unit) return false;
  const idx = unit.lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  if (idx < 0) return false;
  return unit.lessons.slice(0, idx).every((lesson) => completedKeys.has(lessonKey(trackSlug, unitSlug, lesson.slug)));
}

export function getFirstBlockedLessonBeforeTarget(
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): LessonPointer | null {
  if (policy === "track-sequential") {
    const orderedTrackLessons = flattenTrackLessons(trackSlug);
    const targetIdx = orderedTrackLessons.findIndex((lesson) => lesson.unitSlug === unitSlug && lesson.lessonSlug === lessonSlug);
    if (targetIdx < 0) return null;
    return findFirstMissing(orderedTrackLessons.slice(0, targetIdx), completedKeys);
  }

  const unit = getUnit(trackSlug, unitSlug);
  if (!unit) return null;
  const targetIdx = unit.lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  if (targetIdx <= 0) return null;
  const priorLessons = unit.lessons.slice(0, targetIdx).map((lesson) => ({
    trackSlug,
    unitSlug,
    lessonSlug: lesson.slug,
    title: lesson.title,
  }));
  return findFirstMissing(priorLessons, completedKeys);
}

export function getNextEligibleLessonPath(
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): string | null {
  const blocker = getFirstBlockedLessonBeforeTarget(trackSlug, unitSlug, lessonSlug, completedKeys, policy);
  if (!blocker) return null;
  return buildLibraryPath(blocker.trackSlug, blocker.unitSlug, blocker.lessonSlug);
}

export function getActiveUnlockPolicy(): UnlockPolicy {
  // Hybrid abstraction: currently unit-level sequencing is active.
  return "unit-sequential";
}

/** All lessons in blueprint order (tracks → units → lessons) for resume / progress UX. */
export function flattenAllCurriculumLessons(): LessonPointer[] {
  return deepCourseBlueprint.flatMap((track) => flattenTrackLessons(track.slug));
}

/** First incomplete lesson in global curriculum order (next line of work in the published snapshot). */
export function getFirstIncompleteLessonPointer(completedKeys: Set<string>): LessonPointer | null {
  for (const lesson of flattenAllCurriculumLessons()) {
    const key = lessonKey(lesson.trackSlug, lesson.unitSlug, lesson.lessonSlug);
    if (!completedKeys.has(key)) return lesson;
  }
  return null;
}
