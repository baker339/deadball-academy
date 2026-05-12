import { describe, expect, it } from "vitest";
import CMS_PUBLISHED_LESSONS from "./generated/cmsPublishedLessons.json";
import { ALL_LESSONS } from "./lessons/allLessons";

describe("CMS runtime bridge", () => {
  it("loads generated cms lesson override map as an object", () => {
    expect(typeof CMS_PUBLISHED_LESSONS).toBe("object");
    expect(CMS_PUBLISHED_LESSONS).not.toBeNull();
  });

  it("ensures every cms override key resolves in ALL_LESSONS", () => {
    for (const key of Object.keys(CMS_PUBLISHED_LESSONS)) {
      expect(ALL_LESSONS[key]).toBeDefined();
    }
  });
});
