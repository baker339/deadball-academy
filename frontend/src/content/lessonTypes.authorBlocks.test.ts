import { describe, expect, it } from "vitest";
import {
  authorBlocksToLessonDraft,
  defaultLessonDocumentDraft,
  lessonDraftToAuthorBlocks,
  type LessonDocumentDraft,
} from "./lessonTypes";

function buildDraft(): LessonDocumentDraft {
  const draft = defaultLessonDocumentDraft();
  return {
    ...draft,
    key: "track/unit/lesson",
    title: "Test Lesson",
    trackTitle: "Track",
    unitTitle: "Unit",
    whyItMatters: "This matters",
    lessonOpener: "Open strong",
    objectives: ["One"],
    prerequisites: ["A"],
    conceptChunks: [
      {
        heading: "Chunk A",
        explainLikeCoach: "Coach text",
        formalNote: "Formal text",
        equation: "\\frac{a}{b}",
        figure: { src: "/img/a.svg", alt: "A" },
      },
    ],
    quickChecks: [{ prompt: "Q1", answer: "A1" }],
    lessonSummary: "Summary",
  };
}

describe("author block transforms", () => {
  it("creates stable ordered block ids from draft", () => {
    const blocks = lessonDraftToAuthorBlocks(buildDraft());
    expect(blocks[0]?.id).toBe("why-001");
    expect(blocks.map((block) => block.order)).toEqual(blocks.map((_, index) => index));
  });

  it("round-trips key authored sections back into draft shape", () => {
    const source = buildDraft();
    const blocks = lessonDraftToAuthorBlocks(source);
    const restored = authorBlocksToLessonDraft(source, blocks);
    expect(restored.whyItMatters).toBe(source.whyItMatters);
    expect(restored.lessonOpener).toBe(source.lessonOpener);
    expect(restored.lessonSummary).toBe(source.lessonSummary);
    expect(restored.quickChecks[0]?.prompt).toBe("Q1");
    expect(restored.conceptChunks[0]?.equation).toBe("\\frac{a}{b}");
    expect(restored.conceptChunks[0]?.figure?.src).toBe("/img/a.svg");
  });
});
