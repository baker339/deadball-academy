"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import {
  buildLibraryPath,
  getUnitLessonsOrdered,
} from "../content/deepLessonLibrary";
import { getUnitLessonsFromCatalog, learningCatalogFromBlueprint, loadLearningCatalog, type LearningCatalogCourse } from "../lib/learningCatalog";
import { useLessonProgress } from "./LessonProgressContext";
import { getActiveUnlockPolicy, getFirstBlockedLessonBeforeTarget, getNextEligibleLessonPath } from "../lib/progress";

type Props = {
  trackSlug: string;
  unitSlug: string;
  lessonSlug: string;
  children: ReactNode;
};

export default function LessonOrderGate({ trackSlug, unitSlug, lessonSlug, children }: Props) {
  const router = useRouter();
  const { token, user, loading: authLoading, hasAnyRole } = useAuth();
  const { completedKeys, loading, error } = useLessonProgress();
  const [catalog, setCatalog] = useState<LearningCatalogCourse[] | null>(null);
  const unlockPolicy = getActiveUnlockPolicy();
  const sequencingPending = authLoading && Boolean(token) && !user;

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

  const blocker =
    catalog === null
      ? null
      : getFirstBlockedLessonBeforeTarget(catalog, trackSlug, unitSlug, lessonSlug, completedKeys, unlockPolicy);
  const redirectPath =
    catalog === null
      ? null
      : getNextEligibleLessonPath(catalog, trackSlug, unitSlug, lessonSlug, completedKeys, unlockPolicy);

  useEffect(() => {
    if (hasAnyRole("admin", "content_editor")) return;
    if (sequencingPending) return;
    if (catalog === null) return;
    if (!loading && !error && redirectPath) {
      router.replace(redirectPath);
    }
  }, [error, hasAnyRole, loading, redirectPath, router, sequencingPending, catalog]);

  if (hasAnyRole("admin", "content_editor")) {
    return <>{children}</>;
  }

  const catalogLessons = catalog ? getUnitLessonsFromCatalog(catalog, trackSlug, unitSlug) : null;
  const lessons = catalogLessons ?? getUnitLessonsOrdered(trackSlug, unitSlug);
  const lessonIndex = lessons ? lessons.findIndex((l) => l.slug === lessonSlug) : -1;

  if (catalog === null && lessonIndex > 0 && !sequencingPending) {
    return (
      <div className="ui-container max-w-3xl py-16" role="status" aria-live="polite">
        <p className="text-[color:var(--color-muted)]">Loading course catalog…</p>
      </div>
    );
  }

  if (loading && lessonIndex > 0) {
    return (
      <div className="ui-container max-w-3xl py-16" role="status" aria-live="polite">
        <p className="text-[color:var(--color-muted)]">Checking lesson access…</p>
      </div>
    );
  }

  if (sequencingPending && lessonIndex > 0) {
    return (
      <div className="ui-container max-w-3xl py-16" role="status" aria-live="polite">
        <p className="text-[color:var(--color-muted)]">Verifying account permissions…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ui-container max-w-3xl py-16">
        <p className="text-[color:var(--color-danger)]">Could not verify lesson order. Try refreshing the page.</p>
      </div>
    );
  }

  if (!blocker) {
    return <>{children}</>;
  }

  const href = buildLibraryPath(blocker.trackSlug, blocker.unitSlug, blocker.lessonSlug);

  return (
    <div className="ui-container max-w-3xl py-16">
      <h1 className="text-2xl font-bold text-[color:var(--color-fg)]">Lesson locked</h1>
      <p className="mt-3 text-[color:var(--color-muted)]">
        Lessons in this unit unlock in order. Complete{" "}
        <span className="font-semibold text-[color:var(--color-fg)]">{blocker.title}</span> first. Redirecting you to the next eligible lesson.
      </p>
      <Link href={href} className="ui-focus ui-btn-primary mt-6 inline-flex">
        Go to prior lesson
      </Link>
      <p className="mt-6 text-sm">
        <Link href="/learn/library" className="ui-focus ui-link-muted">
          Back to lesson library
        </Link>
      </p>
    </div>
  );
}
