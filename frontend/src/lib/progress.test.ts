import { describe, expect, it } from "vitest";
import { getUnitLessonsOrdered } from "../content/deepLessonLibrary";
import {
  getActiveUnlockPolicy,
  getFirstBlockedLessonBeforeTarget,
  getFirstIncompleteLessonPointer,
  getNextEligibleLessonPath,
  isLessonUnlocked,
} from "./progress";
import { lessonKey } from "../content/lessonRegistry";
import { learningCatalogFromBlueprint } from "./learningCatalog";

const TRACK = "algebra-foundations-for-baseball-analytics";
const UNIT_A = "linear-expressions-equations-and-constraints";
const UNIT_B = "functions-and-representations";
const LESSON_A1 = "variables-units-and-baseball-quantities";
const LESSON_A2 = "solving-one-step-and-multi-step-equations-reliably";
const LESSON_B1 = "function-notation-through-baseball-input-output-stories";

const catalog = learningCatalogFromBlueprint();

describe("progress unlock policy helpers", () => {
  it("defaults to unit-sequential policy", () => {
    expect(getActiveUnlockPolicy()).toBe("unit-sequential");
  });

  it("enforces sequential unlock inside a unit", () => {
    const keys = new Set<string>();
    expect(isLessonUnlocked(catalog, TRACK, UNIT_A, LESSON_A1, keys, "unit-sequential")).toBe(true);
    expect(isLessonUnlocked(catalog, TRACK, UNIT_A, LESSON_A2, keys, "unit-sequential")).toBe(false);
  });

  it("finds and routes to first blocking prior lesson", () => {
    const keys = new Set<string>();
    const blocker = getFirstBlockedLessonBeforeTarget(catalog, TRACK, UNIT_A, LESSON_A2, keys, "unit-sequential");
    expect(blocker?.lessonSlug).toBe(LESSON_A1);
    expect(getNextEligibleLessonPath(catalog, TRACK, UNIT_A, LESSON_A2, keys, "unit-sequential")).toBe(
      `/learn/library/${TRACK}/${UNIT_A}/${LESSON_A1}`,
    );
  });

  it("supports track-wide policy abstraction", () => {
    const unitALessons = getUnitLessonsOrdered(TRACK, UNIT_A) ?? [];
    const keys = new Set<string>(unitALessons.map((lesson) => lessonKey(TRACK, UNIT_A, lesson.slug)));
    expect(isLessonUnlocked(catalog, TRACK, UNIT_B, LESSON_B1, keys, "track-sequential")).toBe(true);
    keys.delete(lessonKey(TRACK, UNIT_A, LESSON_A2));
    expect(isLessonUnlocked(catalog, TRACK, UNIT_B, LESSON_B1, keys, "track-sequential")).toBe(false);
  });

  it("returns the first incomplete lesson in global curriculum order", () => {
    const keys = new Set<string>();
    const first = getFirstIncompleteLessonPointer(catalog, keys);
    expect(first?.trackSlug).toBe(TRACK);
    expect(first?.unitSlug).toBe(UNIT_A);
    expect(first?.lessonSlug).toBe(LESSON_A1);
  });

  it("skips completed lessons when resolving resume pointer", () => {
    const keys = new Set<string>([lessonKey(TRACK, UNIT_A, LESSON_A1)]);
    const next = getFirstIncompleteLessonPointer(catalog, keys);
    expect(next?.lessonSlug).toBe(LESSON_A2);
  });
});
