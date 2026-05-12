/**
 * Pull CMS-published lessons from backend and write runtime override JSON.
 * Run: npx tsx scripts/sync-cms-runtime.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

type LessonRuntime = {
  key: string;
  title: string;
  trackTitle: string;
  unitTitle: string;
  whyItMatters: string;
  lessonOpener: string;
  narrativeFlow: string[];
  objectives: string[];
  prerequisites: string[];
  conceptChunks: Array<{ heading: string; explainLikeCoach: string; formalNote: string }>;
  quickChecks: Array<{ prompt: string; answer: string }>;
  workedExamples: Array<{ title: string; scenario: string; walkthrough: string[]; takeaway: string }>;
  practiceSets: Array<{ level: string; prompts: Array<{ prompt: string; answer: string }> }>;
  commonMistakes: string[];
  lessonSummary: string;
  synthesisPrompt: string;
  nextLessonBridge: string;
  professorNotes: string;
};

function assertLessonShape(value: unknown): asserts value is LessonRuntime {
  if (!value || typeof value !== "object") throw new Error("Lesson payload must be an object");
  const requiredStringFields = [
    "key",
    "title",
    "trackTitle",
    "unitTitle",
    "whyItMatters",
    "lessonOpener",
    "lessonSummary",
    "synthesisPrompt",
    "nextLessonBridge",
    "professorNotes",
  ] as const;
  for (const field of requiredStringFields) {
    if (typeof (value as Record<string, unknown>)[field] !== "string") {
      throw new Error(`Missing string field: ${field}`);
    }
  }
  const requiredArrayFields = ["narrativeFlow", "objectives", "prerequisites", "conceptChunks", "quickChecks", "workedExamples", "practiceSets", "commonMistakes"] as const;
  for (const field of requiredArrayFields) {
    if (!Array.isArray((value as Record<string, unknown>)[field])) {
      throw new Error(`Missing array field: ${field}`);
    }
  }
}

async function main() {
  const baseUrl = process.env.CMS_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const token = process.env.CMS_SYNC_TOKEN || "";
  if (!token) {
    throw new Error("CMS_SYNC_TOKEN is required (admin/editor bearer token)");
  }
  const response = await fetch(`${baseUrl}/cms/export/runtime`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Export failed (${response.status}): ${await response.text()}`);
  }
  const data = (await response.json()) as { lessons: Record<string, unknown> };
  const outLessons: Record<string, LessonRuntime> = {};
  for (const [key, payload] of Object.entries(data.lessons ?? {})) {
    assertLessonShape(payload);
    if (payload.key !== key) {
      throw new Error(`Lesson key mismatch: map key ${key} != payload key ${payload.key}`);
    }
    outLessons[key] = payload;
  }

  const outPath = path.join(process.cwd(), "src", "content", "generated", "cmsPublishedLessons.json");
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(outLessons, null, 2), "utf8");
  console.log(`Wrote ${Object.keys(outLessons).length} runtime lesson overrides to ${outPath}`);
}

main();
