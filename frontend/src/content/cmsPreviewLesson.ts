import { authorBlocksToLessonDraft, type AuthorBlock, type LessonDocument, type LessonDocumentDraft } from "./lessonTypes";

/**
 * Merges CMS author blocks into the draft, then returns a `LessonDocument` safe for learner
 * rendering (`InteractiveLessonExperience` / `LessonExperienceView`) in the composer preview.
 */
export function buildCmsPreviewLessonDocument(baseDraft: LessonDocumentDraft, blocks: AuthorBlock[]): LessonDocument {
  const merged = authorBlocksToLessonDraft(baseDraft, blocks);
  const key = merged.key?.trim() || "cms::preview::draft";
  return {
    ...merged,
    key,
    keyTerms: undefined,
    assessmentItems: undefined,
    summativeReflection: undefined,
  };
}

/** Parse blueprint lesson key `track::unit::lesson` for preview routing and pilot detection. */
export function parseLessonKeySlugs(key: string): { trackSlug: string; unitSlug: string; lessonSlug: string } {
  const parts = key.split("::").filter(Boolean);
  if (parts.length >= 3) {
    return { trackSlug: parts[0]!, unitSlug: parts[1]!, lessonSlug: parts[2]! };
  }
  return { trackSlug: "preview", unitSlug: "preview", lessonSlug: "draft" };
}
