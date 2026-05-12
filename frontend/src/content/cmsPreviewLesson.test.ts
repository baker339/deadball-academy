import { describe, expect, it } from "vitest";
import { defaultLessonDocumentDraft, lessonDraftToAuthorBlocks, type AuthorWhyThisMattersBlock } from "./lessonTypes";
import { buildCmsPreviewLessonDocument, parseLessonKeySlugs } from "./cmsPreviewLesson";

describe("buildCmsPreviewLessonDocument", () => {
  it("returns a LessonDocument with stable key when draft key empty", () => {
    const base = defaultLessonDocumentDraft();
    const blocks = lessonDraftToAuthorBlocks(base);
    const doc = buildCmsPreviewLessonDocument(base, blocks);
    expect(doc.key).toBe("cms::preview::draft");
  });

  it("merges why text from why_this_matters block", () => {
    const base = defaultLessonDocumentDraft();
    const blocks = lessonDraftToAuthorBlocks(base);
    const whyBlock = blocks.find((b) => b.type === "why_this_matters") as AuthorWhyThisMattersBlock | undefined;
    expect(whyBlock).toBeDefined();
    const nextBlocks = blocks.map((b) =>
      b.type === "why_this_matters" ? { ...b, text: "Baseball anchoring matters for this preview." } : b,
    );
    const doc = buildCmsPreviewLessonDocument(base, nextBlocks);
    expect(doc.whyItMatters).toContain("Baseball anchoring");
  });

  it("parses lesson key into three slugs", () => {
    expect(parseLessonKeySlugs("algebra-foundations-for-baseball-analytics::linear-expressions::variables-units")).toEqual({
      trackSlug: "algebra-foundations-for-baseball-analytics",
      unitSlug: "linear-expressions",
      lessonSlug: "variables-units",
    });
    expect(parseLessonKeySlugs("")).toEqual({
      trackSlug: "preview",
      unitSlug: "preview",
      lessonSlug: "draft",
    });
  });
});
