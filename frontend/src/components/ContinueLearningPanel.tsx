"use client";

import Link from "next/link";
import { buildLibraryPath } from "../content/deepLessonLibrary";
import { getFirstIncompleteLessonPointer } from "../lib/progress";
import { useAuth } from "./AuthProvider";
import { useLessonProgress } from "./LessonProgressContext";

type Props = {
  className?: string;
};

export default function ContinueLearningPanel({ className = "" }: Props) {
  const { user } = useAuth();
  const { completedKeys, loading, error } = useLessonProgress();

  if (!user) {
    return (
      <section
        className={`ui-surface rounded-xl border border-[color:var(--color-border)] p-5 sm:p-6 ${className}`}
        aria-label="Save your progress"
      >
        <p className="ui-meta-label">Progress</p>
        <p className="mt-2 text-sm font-medium text-[color:var(--color-fg)]">Sign in to save lesson completion and pick up where you left off.</p>
        <Link href="/login" className="ui-focus ui-btn-primary mt-4 inline-flex text-sm">
          Sign in
        </Link>
      </section>
    );
  }

  if (loading) {
    return (
      <section
        className={`ui-surface rounded-xl border border-[color:var(--color-border)] p-5 sm:p-6 ${className}`}
        aria-live="polite"
        role="status"
      >
        <p className="text-sm text-[color:var(--color-muted)]">Loading your lesson progress…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`ui-surface rounded-xl border border-[color:var(--color-border)] p-5 sm:p-6 ${className}`}>
        <p className="text-sm text-[color:var(--color-danger)]">Could not load progress. You can still browse lessons from the library.</p>
        <Link href="/learn/library" className="ui-focus ui-link mt-3 inline-block text-sm">
          Open lesson library
        </Link>
      </section>
    );
  }

  const next = getFirstIncompleteLessonPointer(completedKeys);
  if (!next) {
    return (
      <section
        className={`ui-surface rounded-xl border border-[color:var(--color-border)] border-l-[3px] border-l-[color:var(--color-accent)] p-5 sm:p-6 ${className}`}
        aria-label="Lesson progress"
      >
        <p className="ui-meta-label">Continue learning</p>
        <p className="mt-2 text-sm font-medium text-[color:var(--color-fg)]">
          You are caught up with every lesson in the current library snapshot.
        </p>
        <Link href="/learn/library" className="ui-focus ui-btn-secondary mt-4 inline-flex text-sm">
          Browse tracks
        </Link>
      </section>
    );
  }

  const href = buildLibraryPath(next.trackSlug, next.unitSlug, next.lessonSlug);

  return (
    <section
      className={`ui-surface rounded-xl border border-[color:var(--color-border)] border-l-[3px] border-l-[color:var(--color-accent)] p-5 sm:p-6 ${className}`}
      aria-label="Continue learning"
    >
      <p className="ui-meta-label">Continue learning</p>
      <p className="mt-2 text-base font-semibold text-[color:var(--color-fg)]">{next.title}</p>
      <p className="mt-1 text-xs text-[color:var(--color-muted)]">
        Next incomplete lesson in curriculum order—open it to stay on the structured path.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={href} className="ui-focus ui-btn-primary inline-flex text-sm">
          Resume lesson
        </Link>
        <Link href="/dashboard" className="ui-focus ui-btn-secondary inline-flex text-sm">
          Dashboard
        </Link>
      </div>
    </section>
  );
}
