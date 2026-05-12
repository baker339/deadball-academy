/**
 * Exports deepCourseBlueprint to backend/app/data/curriculum_catalog.json
 * Run from frontend/: npm run export-curriculum
 */
import { writeFileSync, mkdirSync } from "fs";
import * as path from "path";
import { deepCourseBlueprint } from "../src/content/deepCourseBlueprint";

/** Default minutes per lesson; phases with more lessons trend slightly longer per plan pacing. */
function lessonEstimatedMinutes(lessonIndex: number): number {
  return 28 + lessonIndex * 4;
}

const tracks = deepCourseBlueprint.map((track) => {
  const modules = track.units.map((unit) => {
    const lessons = unit.lessons.map((lesson, lidx) => ({
      slug: lesson.slug,
      title: lesson.title,
      route_path: `/learn/library/${track.slug}/${unit.slug}/${lesson.slug}`,
      lesson_order: lidx + 1,
      estimated_minutes: lessonEstimatedMinutes(lidx),
    }));
    const moduleMinutes =
      lessons.reduce((sum, l) => sum + l.estimated_minutes, 0) + Math.min(45, lessons.length * 5);
    return {
      slug: unit.slug,
      title: unit.title,
      description: `Unit: ${unit.title}. Part of ${track.title}.`,
      estimated_minutes: moduleMinutes,
      lessons,
    };
  });

  return {
    slug: track.slug,
    title: track.title,
    description: `Open learning path: ${track.title}. Quantitative baseball analytics and decision-making.`,
    is_premium: false,
    modules,
  };
});

const outDir = path.resolve(process.cwd(), "..", "backend", "app", "data");
mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "curriculum_catalog.json");

const payload = {
  version: 1,
  generated_by: "frontend/scripts/export-curriculum.ts",
  track_count: tracks.length,
  lesson_count: tracks.reduce(
    (n, t) => n + t.modules.reduce((m, u) => m + u.lessons.length, 0),
    0,
  ),
  tracks,
};

writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf-8");
console.log(`Wrote ${outPath} (${payload.lesson_count} lessons, ${payload.track_count} tracks)`);
