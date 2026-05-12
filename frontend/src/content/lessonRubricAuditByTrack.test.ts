import { describe, expect, it } from "vitest";
import { deepCourseBlueprint } from "./deepCourseBlueprint";
import {
  buildTrackRubricAgentPack,
  groupLessonKeysByTrack,
  runRubricLessonAuditForTrack,
} from "./lessonRubricAuditByTrack";

describe("lessonRubricAuditByTrack", () => {
  it("every blueprint track has at least one lesson", () => {
    const grouped = groupLessonKeysByTrack(deepCourseBlueprint);
    for (const track of deepCourseBlueprint) {
      const keys = grouped.get(track.slug);
      expect(keys?.length ?? 0).toBeGreaterThan(0);
    }
  });

  it("buildTrackRubricAgentPack runs without throw for every track", () => {
    for (const track of deepCourseBlueprint) {
      const pack = buildTrackRubricAgentPack(track.slug);
      expect(pack.trackSlug).toBe(track.slug);
      expect(pack.trackTitle).toBe(track.title);
      expect(pack.lessons.length).toBeGreaterThan(0);
      expect(pack.agentInstructionsMarkdown).toContain("LESSON_EDITOR_RUBRIC");
      expect(pack.agentInstructionsMarkdown).toContain("non_medical_boundary");
    }
  });

  it("biological-mechanics-of-baseball has 15 lesson keys", () => {
    const grouped = groupLessonKeysByTrack(deepCourseBlueprint);
    expect(grouped.get("biological-mechanics-of-baseball")).toHaveLength(15);
  });

  it("runRubricLessonAuditForTrack matches grouped key count", () => {
    const grouped = groupLessonKeysByTrack(deepCourseBlueprint);
    for (const track of deepCourseBlueprint) {
      const cards = runRubricLessonAuditForTrack(track.slug);
      expect(cards).toHaveLength(grouped.get(track.slug)!.length);
    }
  });
});
