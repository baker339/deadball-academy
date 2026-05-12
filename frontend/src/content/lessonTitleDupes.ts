import { ALL_LESSONS } from "./lessons/allLessons";

const counts = new Map<string, number>();
for (const doc of Object.values(ALL_LESSONS)) {
  counts.set(doc.title, (counts.get(doc.title) ?? 0) + 1);
}

/** Display titles that appear on more than one `LessonDocument` (cross-track collisions). */
export const lessonTitlesWithDuplicates: ReadonlySet<string> = new Set(
  [...counts.entries()].filter(([, n]) => n > 1).map(([title]) => title),
);

const TRACK_SHORT: Record<string, string> = {
  "Geometry Foundations For Baseball Context": "Geometry",
  "Trigonometry And Precalculus For Baseball Modeling": "Precalculus",
  "Baseball Physics Foundations": "Physics",
};

export function trackShortLabelForDupes(trackTitle: string): string {
  return TRACK_SHORT[trackTitle] ?? trackTitle.split(" ").slice(0, 2).join(" ");
}

/** When two lessons share the same display title, prefix a short track label for wayfinding. */
export function disambiguatedLessonTitle(title: string, trackTitle: string): string {
  if (!lessonTitlesWithDuplicates.has(title)) return title;
  return `${trackShortLabelForDupes(trackTitle)} · ${title}`;
}
