/**
 * Idempotent backfill: sync file-based lessons into CMS revisions.
 *
 * Usage:
 *   CMS_SYNC_TOKEN=... npx tsx scripts/backfill-lessons-to-cms.ts
 *   CMS_SYNC_TOKEN=... npx tsx scripts/backfill-lessons-to-cms.ts --force
 *   CMS_SYNC_TOKEN=... npx tsx scripts/backfill-lessons-to-cms.ts --force --dry-run
 */
import { getLessonByKey, ALL_LESSONS } from "../src/content/lessons/allLessons";

type CmsLesson = {
  id: number;
  unit_id: number;
  slug: string;
  title: string;
  latest_revision_id?: number | null;
  published_revision_id?: number | null;
};

type CmsRevision = {
  id: number;
  revision_number: number;
  payload_json: string;
};

async function api<T>(baseUrl: string, token: string, path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`${path} failed (${response.status}): ${await response.text()}`);
  }
  if (response.status === 204) {
    return undefined as T;
  }
  return (await response.json()) as T;
}

function normalizeJsonString(value: string): string {
  try {
    return JSON.stringify(JSON.parse(value));
  } catch {
    return value;
  }
}

function parseFlags(argv: string[]) {
  const force = argv.includes("--force");
  const dryRun = argv.includes("--dry-run");
  return { force, dryRun };
}

async function main() {
  const { force, dryRun } = parseFlags(process.argv.slice(2));
  const baseUrl = process.env.CMS_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const token = process.env.CMS_SYNC_TOKEN || "";
  if (!token) {
    throw new Error("CMS_SYNC_TOKEN is required");
  }
  console.log(`Starting lesson backfill (mode=${force ? "force" : "idempotent"} dryRun=${dryRun})`);

  const lessons = await api<CmsLesson[]>(baseUrl, token, "/cms/lessons");
  const bySlug = new Map<string, CmsLesson>(lessons.map((entry) => [entry.slug, entry]));

  let createdCount = 0;
  let skippedCount = 0;
  let publishCount = 0;
  let missingLessonCount = 0;

  for (const key of Object.keys(ALL_LESSONS)) {
    const [, , lessonSlug] = key.split("::");
    const lesson = bySlug.get(lessonSlug);
    if (!lesson) {
      missingLessonCount += 1;
      skippedCount += 1;
      console.log(`[MISSING] key=${key} lessonSlug=${lessonSlug}`);
      continue;
    }
    const payload = getLessonByKey(key);
    const normalizedPayload = JSON.stringify({
      ...payload,
      modules: [
        {
          id: "module-runtime",
          title: "Runtime Lesson Flow",
          type: "narrative",
          order: 1,
          steps: [
            { id: "step-intro", type: "intro", title: "Topic Setup" },
            { id: "step-build", type: "build", title: "Build Understanding" },
            { id: "step-apply", type: "apply", title: "Apply The Ideas" },
            { id: "step-checkpoint", type: "checkpoint", title: "Final Checkpoint" },
            { id: "step-summary", type: "summary", title: "Wrap + Next Bridge" },
          ],
        },
      ],
    });

    const revisions = await api<CmsRevision[]>(baseUrl, token, `/cms/lessons/${lesson.id}/revisions`);
    const latest = revisions[0];
    const latestNormalized = latest ? normalizeJsonString(latest.payload_json) : "";
    const shouldCreate = force || latestNormalized !== normalizeJsonString(normalizedPayload);

    if (shouldCreate) {
      if (dryRun) {
        createdCount += 1;
        publishCount += 1;
        console.log(`[DRY-RUN][CREATE+PUBLISH] lesson=${lesson.slug} id=${lesson.id} reason=${force ? "forced" : "payload_changed"}`);
      } else {
        const created = await api<CmsRevision>(baseUrl, token, `/cms/lessons/${lesson.id}/revisions`, {
          method: "POST",
          body: JSON.stringify({ payload_json: normalizedPayload }),
        });
        createdCount += 1;
        await api<CmsLesson>(baseUrl, token, `/cms/lessons/${lesson.id}/publish`, { method: "POST" });
        publishCount += 1;
        console.log(`[CREATE+PUBLISH] lesson=${lesson.slug} id=${lesson.id} revision=${created.revision_number}`);
      }
    } else {
      skippedCount += 1;
      if (dryRun) {
        console.log(`[DRY-RUN][SKIP] lesson=${lesson.slug} id=${lesson.id} reason=unchanged`);
      } else {
        await api<CmsLesson>(baseUrl, token, `/cms/lessons/${lesson.id}/publish`, { method: "POST" });
        publishCount += 1;
        console.log(`[SKIP+PUBLISH] lesson=${lesson.slug} id=${lesson.id} reason=unchanged`);
      }
    }
  }

  console.log(
    `Backfill complete. mode=${force ? "force" : "idempotent"} dryRun=${dryRun} revisions_created=${createdCount} revisions_skipped=${skippedCount} published=${publishCount} missing_lessons=${missingLessonCount}`,
  );
}

void main();
