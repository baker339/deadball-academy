"use client";

import { deepCourseBlueprint } from "../content/deepLessonLibrary";
import { lessonKey } from "../content/lessonRegistry";
import { useAuth } from "./AuthProvider";
import { useLessonProgress } from "./LessonProgressContext";

type TrackLessonProgressPillProps = {
  trackSlug: string;
};

export default function TrackLessonProgressPill({ trackSlug }: TrackLessonProgressPillProps) {
  const { user } = useAuth();
  const { completedKeys, loading } = useLessonProgress();
  if (!user) return null;

  const track = deepCourseBlueprint.find((entry) => entry.slug === trackSlug);
  if (!track) return null;

  const totalLessons = track.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
  const completedLessons = track.units.reduce(
    (sum, unit) =>
      sum + unit.lessons.filter((lesson) => completedKeys.has(lessonKey(track.slug, unit.slug, lesson.slug))).length,
    0,
  );

  return (
    <p
      className="shrink-0 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] px-3 py-1 text-xs font-medium text-[color:var(--color-muted)]"
      aria-label={`Lessons complete in this track: ${completedLessons} of ${totalLessons}`}
    >
      {loading ? "Syncing progress..." : `${completedLessons}/${totalLessons} lessons complete`}
    </p>
  );
}
