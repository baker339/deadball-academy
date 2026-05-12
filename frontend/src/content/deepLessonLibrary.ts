import { assertLessonStoreCoversBlueprint, lessonKey as registryLessonKey } from "./lessonRegistry";
import { ALL_LESSONS } from "./lessons/allLessons";
import { deepCourseBlueprint } from "./deepCourseBlueprint";

export * from "./lessonTypes";
export { collectAllLessonKeys, deepCourseBlueprint, slugify } from "./deepCourseBlueprint";

const lessonDocumentStore = { ...ALL_LESSONS };

assertLessonStoreCoversBlueprint(deepCourseBlueprint, lessonDocumentStore);

function lessonKey(trackSlug: string, unitSlug: string, lessonSlug: string): string {
  return registryLessonKey(trackSlug, unitSlug, lessonSlug);
}

export function findLesson(trackSlug: string, unitSlug: string, lessonSlug: string) {
  const track = deepCourseBlueprint.find((entry) => entry.slug === trackSlug);
  const unit = track?.units.find((entry) => entry.slug === unitSlug);
  const lesson = unit?.lessons.find((entry) => entry.slug === lessonSlug);
  if (!track || !unit || !lesson) return null;
  return { track, unit, lesson };
}

export function getAuthoredLessonDocument(trackSlug: string, unitSlug: string, lessonSlug: string) {
  return lessonDocumentStore[lessonKey(trackSlug, unitSlug, lessonSlug)] ?? null;
}

export function buildLibraryPath(trackSlug: string, unitSlug: string, lessonSlug: string): string {
  return `/learn/library/${trackSlug}/${unitSlug}/${lessonSlug}`;
}

/** Lessons in blueprint order for one unit, or null if track/unit unknown. */
export function getUnitLessonsOrdered(trackSlug: string, unitSlug: string) {
  const track = deepCourseBlueprint.find((entry) => entry.slug === trackSlug);
  const unit = track?.units.find((entry) => entry.slug === unitSlug);
  if (!track || !unit) return null;
  return unit.lessons;
}

/** True when every lesson before `lessonIndex` in the unit has a completed progress key. */
export function isLessonUnlockedInUnit(
  trackSlug: string,
  unitSlug: string,
  lessonIndex: number,
  completedKeys: Set<string>,
): boolean {
  const lessons = getUnitLessonsOrdered(trackSlug, unitSlug);
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return false;
  for (let i = 0; i < lessonIndex; i += 1) {
    const les = lessons[i]!;
    if (!completedKeys.has(lessonKey(trackSlug, unitSlug, les.slug))) return false;
  }
  return true;
}

/** First earlier lesson in the unit not marked complete, or null if none (current lesson may proceed). */
export function findFirstIncompletePriorLesson(
  trackSlug: string,
  unitSlug: string,
  lessonSlug: string,
  completedKeys: Set<string>,
): { slug: string; title: string } | null {
  const lessons = getUnitLessonsOrdered(trackSlug, unitSlug);
  if (!lessons) return null;
  const idx = lessons.findIndex((l) => l.slug === lessonSlug);
  if (idx <= 0) return null;
  for (let i = 0; i < idx; i += 1) {
    const les = lessons[i]!;
    const key = lessonKey(trackSlug, unitSlug, les.slug);
    if (!completedKeys.has(key)) return { slug: les.slug, title: les.title };
  }
  return null;
}
