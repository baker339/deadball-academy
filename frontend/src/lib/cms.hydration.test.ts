import { describe, expect, it, vi } from "vitest";
import { cmsHydrateLiveLessonDraft, parseLessonDraftPayload } from "./cms";
import { apiFetch } from "./api";

vi.mock("./api", () => ({
  apiFetch: vi.fn(),
}));

describe("cms hydration helpers", () => {
  it("parses payload with defaults for missing fields", () => {
    const parsed = parseLessonDraftPayload(JSON.stringify({ title: "Loaded title", whyItMatters: "Loaded why" }));
    expect(parsed.title).toBe("Loaded title");
    expect(parsed.whyItMatters).toBe("Loaded why");
    expect(Array.isArray(parsed.objectives)).toBe(true);
  });

  it("selects published revision before latest", async () => {
    vi.mocked(apiFetch)
      .mockResolvedValueOnce([
        { id: 7, unit_id: 1, slug: "l", title: "Lesson", lesson_order: 1, status: "published", published_revision_id: 11, latest_revision_id: 12 },
      ])
      .mockResolvedValueOnce([
        {
          id: 12,
          revision_number: 2,
          payload_json: JSON.stringify({
            title: "Latest",
            whyItMatters: "Latest why",
            lessonOpener: "Latest opener",
            lessonSummary: "Latest summary",
            conceptChunks: [{ heading: "Latest heading", explainLikeCoach: "Latest coach copy" }],
          }),
          status: "draft",
          created_at: "now",
        },
        {
          id: 11,
          revision_number: 1,
          payload_json: JSON.stringify({
            title: "Published",
            whyItMatters: "Published why",
            lessonOpener: "Published opener",
            lessonSummary: "Published summary",
            conceptChunks: [{ heading: "Published heading", explainLikeCoach: "Published coach copy" }],
          }),
          status: "published",
          created_at: "now",
        },
      ]);

    const hydrated = await cmsHydrateLiveLessonDraft("token", 7);
    expect(hydrated.source).toBe("published");
    expect(hydrated.selectedRevision?.id).toBe(11);
    expect(hydrated.draft.title).toBe("Published");
  });

  it("hydrates the newest repopulated published revision", async () => {
    vi.mocked(apiFetch)
      .mockResolvedValueOnce([
        { id: 9, unit_id: 1, slug: "lesson-1", title: "Lesson 1", lesson_order: 1, status: "published", published_revision_id: 31, latest_revision_id: 31 },
      ])
      .mockResolvedValueOnce([
        { id: 31, revision_number: 4, payload_json: JSON.stringify({ title: "Repopulated", whyItMatters: "Why", lessonOpener: "Opener", lessonSummary: "Summary", conceptChunks: [{ heading: "H", explainLikeCoach: "Coach" }] }), status: "published", created_at: "now" },
        { id: 30, revision_number: 3, payload_json: JSON.stringify({ title: "Old rev" }), status: "published", created_at: "now" },
      ]);

    const hydrated = await cmsHydrateLiveLessonDraft("token", 9);
    expect(hydrated.selectedRevision?.id).toBe(31);
    expect(hydrated.source).toBe("published");
    expect(hydrated.draft.title).toBe("Repopulated");
  });

  it("throws explicit error when backend returns no valid revision", async () => {
    vi.mocked(apiFetch)
      .mockResolvedValueOnce([
        { id: 7, unit_id: 1, slug: "l", title: "Lesson", lesson_order: 1, status: "published", published_revision_id: null, latest_revision_id: null },
      ])
      .mockResolvedValueOnce([]);

    await expect(cmsHydrateLiveLessonDraft("token", 7)).rejects.toThrow(
      "No valid revision is available for this lesson. Backend repair may be required.",
    );
  });

  it("throws explicit error when selected revision is instructionally empty", async () => {
    vi.mocked(apiFetch)
      .mockResolvedValueOnce([
        { id: 7, unit_id: 1, slug: "l", title: "Lesson", lesson_order: 1, status: "published", published_revision_id: 11, latest_revision_id: 11 },
      ])
      .mockResolvedValueOnce([
        { id: 11, revision_number: 1, payload_json: JSON.stringify({ title: "Published", whyItMatters: "", lessonOpener: "", lessonSummary: "", conceptChunks: [] }), status: "published", created_at: "now" },
      ]);

    await expect(cmsHydrateLiveLessonDraft("token", 7)).rejects.toThrow(
      "Selected revision 11 is instructionally empty",
    );
  });
});
