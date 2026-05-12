import { describe, expect, it } from "vitest";
import { deepCourseBlueprint } from "./deepCourseBlueprint";
import { findFirstIncompletePriorLesson, getUnitLessonsOrdered, isLessonUnlockedInUnit } from "./deepLessonLibrary";
import { lessonKey } from "./lessonRegistry";

const TRACK = "algebra-foundations-for-baseball-analytics";
const UNIT = "linear-expressions-equations-and-constraints";

describe("unit sequential unlock helpers", () => {
  it("exposes ordered lessons for a known unit", () => {
    const lessons = getUnitLessonsOrdered(TRACK, UNIT);
    expect(lessons).not.toBeNull();
    expect(lessons!.length).toBeGreaterThanOrEqual(5);
    expect(lessons![0]!.slug).toBe("variables-units-and-baseball-quantities");
  });

  it("treats first lesson as unlocked with empty completion set", () => {
    const keys = new Set<string>();
    expect(isLessonUnlockedInUnit(TRACK, UNIT, 0, keys)).toBe(true);
  });

  it("locks later lessons until priors are completed", () => {
    const keys = new Set<string>();
    expect(isLessonUnlockedInUnit(TRACK, UNIT, 1, keys)).toBe(false);
    keys.add(lessonKey(TRACK, UNIT, "variables-units-and-baseball-quantities"));
    expect(isLessonUnlockedInUnit(TRACK, UNIT, 1, keys)).toBe(true);
    expect(isLessonUnlockedInUnit(TRACK, UNIT, 2, keys)).toBe(false);
  });

  it("findFirstIncompletePriorLesson points at earliest gap", () => {
    const keys = new Set<string>();
    keys.add(lessonKey(TRACK, UNIT, "variables-units-and-baseball-quantities"));
    const lessons = getUnitLessonsOrdered(TRACK, UNIT)!;
    const third = lessons[2]!;
    const gap = findFirstIncompletePriorLesson(TRACK, UNIT, third.slug, keys);
    expect(gap?.slug).toBe("solving-one-step-and-multi-step-equations-reliably");
  });

  it("units are independent across the blueprint", () => {
    const track = deepCourseBlueprint.find((t) => t.slug === TRACK)!;
    const unit2 = track.units[1]!;
    const keys = new Set<string>();
    expect(isLessonUnlockedInUnit(TRACK, unit2.slug, 0, keys)).toBe(true);
  });
});
