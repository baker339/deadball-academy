import { apiFetch } from "./api";
import { defaultLessonDocumentDraft, type LessonDocumentDraft } from "../content/lessonTypes";

export type CmsTrack = { id: number; slug: string; title: string; description: string; track_order: number; is_published?: number };
export type CmsUnit = { id: number; track_id: number; slug: string; title: string; description: string; unit_order: number; is_published?: number };
export type CmsLesson = {
  id: number;
  unit_id: number;
  slug: string;
  title: string;
  lesson_order: number;
  status: string;
  latest_revision_id?: number | null;
  published_revision_id?: number | null;
};
export type CmsRevision = { id: number; lesson_id?: number; revision_number: number; payload_json: string; status: string; created_at: string };
export type CmsReviewNote = { id: number; lesson_id: number; severity: string; category: string; note_text: string; status: string; created_at?: string };
export type CmsReviewDecision = { id: number; lesson_id: number; reviewer_user_id?: number; decision: string; notes: string; created_at?: string };

export type CmsTree = {
  tracks: Array<{
    id: number;
    slug: string;
    title: string;
    units: Array<{
      id: number;
      slug: string;
      title: string;
      lessons: Array<{ id: number; slug: string; title: string; status: string; severity: string }>;
    }>;
  }>;
};

export type CmsModule = {
  id: number;
  lesson_id: number;
  slug: string;
  title: string;
  module_type: string;
  module_order: number;
  archived: number;
};

export type CmsStep = {
  id: number;
  module_id: number;
  slug: string;
  title: string;
  step_type: string;
  step_order: number;
  content_json: string;
  archived: number;
};

export async function cmsTree(token: string) {
  return apiFetch<CmsTree>("/cms/tree", { token });
}
export async function cmsTracks(token: string) {
  return apiFetch<CmsTrack[]>("/cms/tracks", { token });
}
export async function cmsCreateTrack(token: string, payload: { slug: string; title: string; description?: string; track_order?: number }) {
  return apiFetch<CmsTrack>("/cms/tracks", { token, method: "POST", body: payload });
}
export async function cmsUpdateTrack(token: string, trackId: number, payload: { slug: string; title: string; description?: string; track_order?: number }) {
  return apiFetch<CmsTrack>(`/cms/tracks/${trackId}`, { token, method: "PATCH", body: payload });
}
export async function cmsDeleteTrack(token: string, trackId: number) {
  return apiFetch<void>(`/cms/tracks/${trackId}`, { token, method: "DELETE" });
}
export async function cmsReorderTracks(token: string, orderedIds: number[]) {
  return apiFetch<void>("/cms/tracks/reorder", { token, method: "POST", body: { ordered_ids: orderedIds } });
}
export async function cmsUnits(token: string, trackId?: number) {
  const qs = typeof trackId === "number" ? `?track_id=${trackId}` : "";
  return apiFetch<CmsUnit[]>(`/cms/units${qs}`, { token });
}
export async function cmsCreateUnit(token: string, payload: { track_id: number; slug: string; title: string; description?: string; unit_order?: number }) {
  return apiFetch<CmsUnit>("/cms/units", { token, method: "POST", body: payload });
}
export async function cmsUpdateUnit(token: string, unitId: number, payload: { track_id: number; slug: string; title: string; description?: string; unit_order?: number }) {
  return apiFetch<CmsUnit>(`/cms/units/${unitId}`, { token, method: "PATCH", body: payload });
}
export async function cmsDeleteUnit(token: string, unitId: number) {
  return apiFetch<void>(`/cms/units/${unitId}`, { token, method: "DELETE" });
}
export async function cmsReorderUnits(token: string, orderedIds: number[]) {
  return apiFetch<void>("/cms/units/reorder", { token, method: "POST", body: { ordered_ids: orderedIds } });
}
export async function cmsLessons(token: string, unitId?: number) {
  const qs = typeof unitId === "number" ? `?unit_id=${unitId}` : "";
  return apiFetch<CmsLesson[]>(`/cms/lessons${qs}`, { token });
}
export async function cmsCreateLesson(token: string, payload: { unit_id: number; slug: string; title: string; lesson_order?: number }) {
  return apiFetch<CmsLesson>("/cms/lessons", { token, method: "POST", body: payload });
}
export async function cmsUpdateLesson(token: string, lessonId: number, payload: { unit_id: number; slug: string; title: string; lesson_order?: number }) {
  return apiFetch<CmsLesson>(`/cms/lessons/${lessonId}`, { token, method: "PATCH", body: payload });
}
export async function cmsDeleteLesson(token: string, lessonId: number) {
  return apiFetch<void>(`/cms/lessons/${lessonId}`, { token, method: "DELETE" });
}
export async function cmsReorderLessons(token: string, orderedIds: number[]) {
  return apiFetch<void>("/cms/lessons/reorder", { token, method: "POST", body: { ordered_ids: orderedIds } });
}
export async function cmsModules(token: string, lessonId?: number) {
  const qs = typeof lessonId === "number" ? `?lesson_id=${lessonId}` : "";
  return apiFetch<CmsModule[]>(`/cms/modules${qs}`, { token });
}
export async function cmsCreateModule(
  token: string,
  payload: { lesson_id: number; slug: string; title: string; module_type?: string; module_order?: number }
) {
  return apiFetch<CmsModule>("/cms/modules", { token, method: "POST", body: payload });
}
export async function cmsUpdateModule(
  token: string,
  moduleId: number,
  payload: Partial<{ slug: string; title: string; module_type: string; module_order: number; archived: number }>
) {
  return apiFetch<CmsModule>(`/cms/modules/${moduleId}`, { token, method: "PATCH", body: payload });
}
export async function cmsDeleteModule(token: string, moduleId: number) {
  return apiFetch<void>(`/cms/modules/${moduleId}`, { token, method: "DELETE" });
}
export async function cmsReorderModules(token: string, orderedIds: number[]) {
  return apiFetch<void>("/cms/modules/reorder", { token, method: "POST", body: { ordered_ids: orderedIds } });
}
export async function cmsSteps(token: string, moduleId?: number) {
  const qs = typeof moduleId === "number" ? `?module_id=${moduleId}` : "";
  return apiFetch<CmsStep[]>(`/cms/steps${qs}`, { token });
}
export async function cmsCreateStep(
  token: string,
  payload: { module_id: number; slug: string; title: string; step_type?: string; step_order?: number; content_json?: string }
) {
  return apiFetch<CmsStep>("/cms/steps", { token, method: "POST", body: payload });
}
export async function cmsUpdateStep(
  token: string,
  stepId: number,
  payload: Partial<{ slug: string; title: string; step_type: string; step_order: number; content_json: string; archived: number }>
) {
  return apiFetch<CmsStep>(`/cms/steps/${stepId}`, { token, method: "PATCH", body: payload });
}
export async function cmsDeleteStep(token: string, stepId: number) {
  return apiFetch<void>(`/cms/steps/${stepId}`, { token, method: "DELETE" });
}
export async function cmsReorderSteps(token: string, orderedIds: number[]) {
  return apiFetch<void>("/cms/steps/reorder", { token, method: "POST", body: { ordered_ids: orderedIds } });
}
export async function cmsRevisions(token: string, lessonId: number) {
  return apiFetch<CmsRevision[]>(`/cms/lessons/${lessonId}/revisions`, { token });
}

export type CmsHydratedLessonDraft = {
  lesson: CmsLesson;
  revisions: CmsRevision[];
  selectedRevision: CmsRevision | null;
  source: "published" | "latest" | "fallback";
  draft: LessonDocumentDraft;
};

export function parseLessonDraftPayload(payloadJson: string): LessonDocumentDraft {
  try {
    const parsed: unknown = JSON.parse(payloadJson);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return defaultLessonDocumentDraft();
    }
    return { ...defaultLessonDocumentDraft(), ...(parsed as Partial<LessonDocumentDraft>) };
  } catch {
    return defaultLessonDocumentDraft();
  }
}

function validateHydratedDraft(draft: LessonDocumentDraft): string[] {
  const missing: string[] = [];
  if (!draft.whyItMatters?.trim()) missing.push("whyItMatters");
  if (!draft.lessonOpener?.trim()) missing.push("lessonOpener");
  if (!draft.lessonSummary?.trim()) missing.push("lessonSummary");
  if (!Array.isArray(draft.conceptChunks) || draft.conceptChunks.length === 0) {
    missing.push("conceptChunks");
  } else {
    const first = draft.conceptChunks[0];
    const hasHeading = Boolean(first?.heading?.trim());
    const hasBody = Boolean(first?.explainLikeCoach?.trim() || first?.formalNote?.trim());
    if (!hasHeading || !hasBody) {
      missing.push("conceptChunks.content");
    }
  }
  return missing;
}

function parseHydrationPayloadOrThrow(payloadJson: string, revisionId: number): LessonDocumentDraft {
  let parsed: unknown;
  try {
    parsed = JSON.parse(payloadJson);
  } catch {
    throw new Error(`Selected revision ${revisionId} has invalid JSON payload and cannot be hydrated.`);
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Selected revision ${revisionId} payload is not an object and cannot be hydrated.`);
  }
  const draft = { ...defaultLessonDocumentDraft(), ...(parsed as Partial<LessonDocumentDraft>) };
  const missing = validateHydratedDraft(draft);
  if (missing.length > 0) {
    throw new Error(
      `Selected revision ${revisionId} is instructionally empty (missing: ${missing.join(", ")}). Run forced lesson repopulation.`,
    );
  }
  return draft;
}

export async function cmsHydrateLiveLessonDraft(token: string, lessonId: number): Promise<CmsHydratedLessonDraft> {
  const [lessons, revisions] = await Promise.all([cmsLessons(token), cmsRevisions(token, lessonId)]);
  const lesson = lessons.find((entry) => entry.id === lessonId);
  if (!lesson) {
    throw new Error("Lesson metadata not found.");
  }

  const revisionById = new Map(revisions.map((revision) => [revision.id, revision]));
  const selectedRevision =
    (lesson.published_revision_id ? revisionById.get(lesson.published_revision_id) : null) ??
    (lesson.latest_revision_id ? revisionById.get(lesson.latest_revision_id) : null) ??
    revisions[0] ??
    null;

  const source: CmsHydratedLessonDraft["source"] =
    selectedRevision && lesson.published_revision_id === selectedRevision.id
      ? "published"
      : selectedRevision && lesson.latest_revision_id === selectedRevision.id
        ? "latest"
        : "fallback";

  if (!selectedRevision) {
    throw new Error("No valid revision is available for this lesson. Backend repair may be required.");
  }
  const draft = parseHydrationPayloadOrThrow(selectedRevision.payload_json, selectedRevision.id);

  return {
    lesson,
    revisions,
    selectedRevision,
    source,
    draft,
  };
}
export async function cmsReviewNotes(token: string, lessonId: number) {
  return apiFetch<CmsReviewNote[]>(`/cms/lessons/${lessonId}/review-notes`, { token });
}
export async function cmsReviewDecisions(token: string, lessonId: number) {
  return apiFetch<CmsReviewDecision[]>(`/cms/lessons/${lessonId}/review-decisions`, { token });
}
export async function cmsCreateRevision(token: string, lessonId: number, payload: LessonDocumentDraft) {
  return apiFetch<CmsRevision>(`/cms/lessons/${lessonId}/revisions`, { token, method: "POST", body: { payload_json: JSON.stringify(payload) } });
}
export async function cmsPublish(token: string, lessonId: number) {
  return apiFetch<CmsLesson>(`/cms/lessons/${lessonId}/publish`, { token, method: "POST" });
}
export async function cmsRollback(token: string, lessonId: number) {
  return apiFetch<CmsLesson>(`/cms/lessons/${lessonId}/rollback`, { token, method: "POST" });
}
export async function cmsAddReviewNote(token: string, lessonId: number, payload: { severity: string; category: string; note_text: string; status?: string }) {
  return apiFetch<CmsReviewNote>(`/cms/lessons/${lessonId}/review-notes`, { token, method: "POST", body: payload });
}
export async function cmsAddReviewDecision(token: string, lessonId: number, payload: { decision: string; notes?: string }) {
  return apiFetch<CmsReviewDecision>(`/cms/lessons/${lessonId}/review-decisions`, { token, method: "POST", body: payload });
}
export async function cmsCompleteness(token: string, lessonId: number) {
  return apiFetch<{ score: number; missing: string[]; pass: boolean }>(`/cms/lessons/${lessonId}/completeness`, { token });
}
export async function cmsDiff(token: string, lessonId: number) {
  return apiFetch<{ summary: string[]; latest_revision_id: number | null; published_revision_id: number | null }>(`/cms/lessons/${lessonId}/diff`, {
    token,
  });
}
export async function cmsReviewQueue(token: string) {
  return apiFetch<Array<{ lesson_id: number; lesson_title: string; status: string; highest_severity: string; note_count: number }>>("/cms/review-queue", {
    token,
  });
}
