import { describe, expect, it } from "vitest";
import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { getAllLessonReviewAnnotations, getLessonReviewAnnotation } from "./reviewNotes";

describe("reviewNotes coverage", () => {
  it("provides annotations for every lesson key", () => {
    const keys = collectAllLessonKeys(deepCourseBlueprint);
    const annotations = getAllLessonReviewAnnotations();
    for (const key of keys) {
      expect(annotations[key]).toBeDefined();
      expect(getLessonReviewAnnotation(key)?.notes.length).toBeGreaterThan(0);
    }
  });

  it("includes verify externally signals for high-trust tracks", () => {
    const annotation = getLessonReviewAnnotation(
      "baseball-physics-foundations::drag-lift-and-aerodynamics-of-the-baseball::physical-meaning-of-drag-coefficient-in-baseball",
    );
    expect(annotation).toBeTruthy();
    expect(annotation?.notes.some((entry) => entry.category === "verify_externally")).toBe(true);
  });
});
