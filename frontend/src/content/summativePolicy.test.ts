import { describe, expect, it } from "vitest";
import { deepCourseBlueprint } from "./deepCourseBlueprint";
import { ALL_LESSONS } from "./lessons/allLessons";
import { lessonKey } from "./lessonRegistry";
import { DUPLICATE_DISPLAY_TITLES } from "./lessonTitleDisambiguation";

const integrativeTitlePattern =
  /\b(capstone|synthesis|workshop|seminar|practicum|lab)\b/i;
const integrativeTitlePattern2 = /\b(milestone|defense|debate)\b/i;

function titleSignalsIntegrativeArtifact(title: string): boolean {
  return integrativeTitlePattern.test(title) || integrativeTitlePattern2.test(title);
}

describe("curriculum summative policy", () => {
  it("integrative display titles always include summativeReflection", () => {
    for (const doc of Object.values(ALL_LESSONS)) {
      if (!titleSignalsIntegrativeArtifact(doc.title)) continue;
      expect(doc.summativeReflection, `integrative title without summative: ${doc.key}`).toBeTruthy();
    }
  });

  it("duplicate IA titles remain stable for disambiguation helper", () => {
    expect(DUPLICATE_DISPLAY_TITLES.size).toBe(13);
  });

  it("unit closer keys receive merge coverage (last lesson per unit has summative)", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        const last = unit.lessons[unit.lessons.length - 1];
        if (!last) continue;
        const k = lessonKey(track.slug, unit.slug, last.slug);
        expect(ALL_LESSONS[k]?.summativeReflection, `unit closer missing summative: ${k}`).toBeTruthy();
      }
    }
  });
});
