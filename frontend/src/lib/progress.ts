import { buildLibraryPath } from "../content/deepLessonLibrary";
import { lessonKey } from "../content/lessonRegistry";
import type { LearningCatalogCourse } from "./learningCatalog";

export type UnlockPolicy = "unit-sequential" | "track-sequential";

export type LessonPointer = {
  trackSlug: string;
  unitSlug: string;
  lessonSlug: string;
  title: string;
};

function getTrack(catalog: LearningCatalogCourse[], trackSlug: string) {
  return catalog.find((track) => track.slug === trackSlug) ?? null;
}

function getUnit(catalog: LearningCatalogCourse[], trackSlug: string, unitSlug: string) {
  const track = getTrack(catalog, trackSlug);
  return track?.modules.find((unit) => unit.slug === unitSlug) ?? null;
}

function flattenTrackLessons(catalog: LearningCatalogCourse[], trackSlug: string): LessonPointer[] {
  const track = getTrack(catalog, trackSlug);
  if (!track) return [];
  return track.modules.flatMap((unit) =>
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
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): boolean {
  if (policy === "track-sequential") {
    const orderedTrackLessons = flattenTrackLessons(catalog, trackSlug);
    const idx = orderedTrackLessons.findIndex((lesson) => lesson.unitSlug === unitSlug && lesson.lessonSlug === lessonSlug);
    if (idx < 0) return false;
    return orderedTrackLessons.slice(0, idx).every((lesson) => completedKeys.has(lessonKey(trackSlug, lesson.unitSlug, lesson.lessonSlug)));
  }

  const unit = getUnit(catalog, trackSlug, unitSlug);
  if (!unit) return false;
  const idx = unit.lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  if (idx < 0) return false;
  return unit.lessons.slice(0, idx).every((lesson) => completedKeys.has(lessonKey(trackSlug, unitSlug, lesson.slug)));
}

export function getFirstBlockedLessonBeforeTarget(
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): LessonPointer | null {
  if (policy === "track-sequential") {
    const orderedTrackLessons = flattenTrackLessons(catalog, trackSlug);
    const targetIdx = orderedTrackLessons.findIndex((lesson) => lesson.unitSlug === unitSlug && lesson.lessonSlug === lessonSlug);
    if (targetIdx < 0) return null;
    return findFirstMissing(orderedTrackLessons.slice(0, targetIdx), completedKeys);
  }

  const unit = getUnit(catalog, trackSlug, unitSlug);
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
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
  policy: UnlockPolicy = "unit-sequential",
): string | null {
  const blocker = getFirstBlockedLessonBeforeTarget(catalog, trackSlug, unitSlug, lessonSlug, completedKeys, policy);
  if (!blocker) return null;
  return buildLibraryPath(blocker.trackSlug, blocker.unitSlug, blocker.lessonSlug);
}

export function getActiveUnlockPolicy(): UnlockPolicy {
  return "unit-sequential";
}

export function flattenAllCurriculumLessons(catalog: LearningCatalogCourse[]): LessonPointer[] {
  return catalog.flatMap((track) =>
    track.modules.flatMap((unit) =>
      unit.lessons.map((lesson) => ({
        trackSlug: track.slug,
        unitSlug: unit.slug,
        lessonSlug: lesson.slug,
        title: lesson.title,
      })),
    ),
  );
}

export function getFirstIncompleteLessonPointer(
  catalog: LearningCatalogCourse[],
  completedKeys: Set<string>,
): LessonPointer | null {
  for (const lesson of flattenAllCurriculumLessons(catalog)) {
    const key = lessonKey(lesson.trackSlug, lesson.unitSlug, lesson.lessonSlug);
    if (!completedKeys.has(key)) return lesson;
  }
  return null;
}
