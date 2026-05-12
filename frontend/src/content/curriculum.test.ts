import { describe, expect, it } from "vitest";
import { curriculumTracks } from "./curriculum";

describe("curriculumTracks", () => {
  it("contains at least four STEM-focused tracks", () => {
    expect(curriculumTracks.length).toBeGreaterThanOrEqual(4);
  });

  it("ensures each track has outcomes and phases", () => {
    for (const track of curriculumTracks) {
      expect(track.outcomes.length).toBeGreaterThan(0);
      expect(track.phases.length).toBeGreaterThanOrEqual(2);
      expect(track.assessments.length).toBeGreaterThan(0);
      for (const phase of track.phases) {
        expect(phase.lessons.length).toBeGreaterThanOrEqual(1);
        expect(phase.entryCriteria.length).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
