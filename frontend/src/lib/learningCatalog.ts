import { apiFetch } from "./api";
import { deepCourseBlueprint } from "../content/deepCourseBlueprint";

/** Matches `GET /learning/catalog` (course_slug = track slug, modules = units). */
export type LearningCatalogLesson = {
  slug: string;
  title: string;
  summary: string;
  lesson_order: number;
  estimated_minutes: number;
  track: string;
  route_path: string;
};

export type LearningCatalogModule = {
  slug: string;
  title: string;
  description: string;
  module_order: number;
  estimated_minutes: number;
  lessons: LearningCatalogLesson[];
};

export type LearningCatalogCourse = {
  slug: string;
  title: string;
  description: string;
  level: string;
  is_premium: boolean;
  modules: LearningCatalogModule[];
};

let inflight: Promise<LearningCatalogCourse[]> | null = null;

export async function fetchLearningCatalog(): Promise<LearningCatalogCourse[]> {
  return apiFetch<LearningCatalogCourse[]>("/learning/catalog");
}

/** Single-flight fetch for client surfaces that share catalog data. */
export function loadLearningCatalog(): Promise<LearningCatalogCourse[]> {
  if (!inflight) {
    inflight = fetchLearningCatalog().catch((err) => {
      inflight = null;
      throw err;
    });
  }
  return inflight;
}

export function resetLearningCatalogCache(): void {
  inflight = null;
}

/** Snapshot aligned with authored blueprint (for tests and offline fallbacks). */
export function learningCatalogFromBlueprint(): LearningCatalogCourse[] {
  return deepCourseBlueprint.map((track) => ({
    slug: track.slug,
    title: track.title,
    description: "",
    level: "college",
    is_premium: false,
    modules: track.units.map((unit, ui) => ({
      slug: unit.slug,
      title: unit.title,
      description: "",
      module_order: ui + 1,
      estimated_minutes: 0,
      lessons: unit.lessons.map((lesson, li) => ({
        slug: lesson.slug,
        title: lesson.title,
        summary: "",
        lesson_order: li + 1,
        estimated_minutes: 0,
        track: track.slug,
        route_path: `/learn/library/${track.slug}/${unit.slug}/${lesson.slug}`,
      })),
    })),
  }));
}

export function getCourseFromCatalog(catalog: LearningCatalogCourse[], trackSlug: string): LearningCatalogCourse | null {
  return catalog.find((c) => c.slug === trackSlug) ?? null;
}

export function getModuleFromCatalog(
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  unitSlug: string,
): LearningCatalogModule | null {
  const course = getCourseFromCatalog(catalog, trackSlug);
  return course?.modules.find((m) => m.slug === unitSlug) ?? null;
}

/** Nav-only lesson rows for a unit, same shape as blueprint `lessons` entries. */
export function getUnitLessonsFromCatalog(
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  unitSlug: string,
): { slug: string; title: string }[] | null {
  const mod = getModuleFromCatalog(catalog, trackSlug, unitSlug);
  if (!mod) return null;
  return mod.lessons.map((l) => ({ slug: l.slug, title: l.title }));
}
