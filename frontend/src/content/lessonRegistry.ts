import type { LessonDocument, TrackBlueprint } from "./lessonTypes";

/** Canonical key for a lesson in the deep curriculum store. */
export function lessonKey(trackSlug: string, unitSlug: string, lessonSlug: string): string {
  return `${trackSlug}::${unitSlug}::${lessonSlug}`;
}

/**
 * Hard contract: every blueprint lesson must resolve to a document in the store,
 * and the store must not contain stray keys. Fails at module load if incomplete.
 */
export function assertLessonStoreCoversBlueprint(
  blueprint: TrackBlueprint[],
  store: Record<string, LessonDocument>
): void {
  const keys: string[] = [];
  for (const track of blueprint) {
    for (const unit of track.units) {
      for (const lesson of unit.lessons) {
        keys.push(lessonKey(track.slug, unit.slug, lesson.slug));
      }
    }
  }
  if (keys.length === 0) {
    throw new Error("Blueprint produced zero lesson keys.");
  }
  const missing = keys.filter((k) => !store[k]);
  if (missing.length > 0) {
    throw new Error(`Missing ${missing.length} authored lesson(s): ${missing.slice(0, 12).join(", ")}`);
  }
  const storeKeys = Object.keys(store);
  if (storeKeys.length !== keys.length) {
    const keySet = new Set(keys);
    const extra = storeKeys.filter((k) => !keySet.has(k));
    throw new Error(`Lesson store has ${extra.length} unexpected key(s): ${extra.slice(0, 8).join(", ")}`);
  }
}
