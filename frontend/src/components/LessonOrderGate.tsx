"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import {
  buildLibraryPath,
  getUnitLessonsOrdered,
} from "../content/deepLessonLibrary";
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
  const unlockPolicy = getActiveUnlockPolicy();
  const blocker = getFirstBlockedLessonBeforeTarget(trackSlug, unitSlug, lessonSlug, completedKeys, unlockPolicy);
  const redirectPath = getNextEligibleLessonPath(trackSlug, unitSlug, lessonSlug, completedKeys, unlockPolicy);
  const sequencingPending = authLoading && Boolean(token) && !user;

  useEffect(() => {
    if (hasAnyRole("admin", "content_editor")) return;
    if (sequencingPending) return;
    if (!loading && !error && redirectPath) {
      router.replace(redirectPath);
    }
  }, [error, hasAnyRole, loading, redirectPath, router, sequencingPending]);

  if (hasAnyRole("admin", "content_editor")) {
    return <>{children}</>;
  }

  const lessons = getUnitLessonsOrdered(trackSlug, unitSlug);
  const lessonIndex = lessons ? lessons.findIndex((l) => l.slug === lessonSlug) : -1;

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
