"use client";

import { useEffect, useState } from "react";
import { lessonKey } from "../content/lessonRegistry";
import { getCourseFromCatalog, learningCatalogFromBlueprint, loadLearningCatalog, type LearningCatalogCourse } from "../lib/learningCatalog";
import { useAuth } from "./AuthProvider";
import { useLessonProgress } from "./LessonProgressContext";

type TrackLessonProgressPillProps = {
  trackSlug: string;
};

export default function TrackLessonProgressPill({ trackSlug }: TrackLessonProgressPillProps) {
  const { user } = useAuth();
  const { completedKeys, loading } = useLessonProgress();
  const [catalog, setCatalog] = useState<LearningCatalogCourse[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadLearningCatalog()
      .then((data) => {
        if (!cancelled) setCatalog(data);
      })
      .catch(() => {
        if (!cancelled) setCatalog(learningCatalogFromBlueprint());
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!user) return null;
  if (catalog === null) {
    return (
      <p
        className="shrink-0 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] px-3 py-1 text-xs font-medium text-[color:var(--color-muted)]"
        aria-label="Loading track progress"
      >
        …
      </p>
    );
  }

  const course = getCourseFromCatalog(catalog, trackSlug);
  if (!course) return null;

  const totalLessons = course.modules.reduce((sum, unit) => sum + unit.lessons.length, 0);
  const completedLessons = course.modules.reduce(
    (sum, unit) =>
      sum + unit.lessons.filter((lesson) => completedKeys.has(lessonKey(trackSlug, unit.slug, lesson.slug))).length,
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
