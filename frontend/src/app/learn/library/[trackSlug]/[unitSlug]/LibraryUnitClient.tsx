"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../components/AuthProvider";
import { useLessonProgress } from "../../../../../components/LessonProgressContext";
import { curriculumTracks } from "../../../../../content/curriculum";
import { buildLibraryPath } from "../../../../../content/deepLessonLibrary";
import { lessonHeaderDisplayTitle } from "../../../../../content/lessonTitleDisambiguation";
import { lessonKey } from "../../../../../content/lessonRegistry";
import {
  getCourseFromCatalog,
  getModuleFromCatalog,
  learningCatalogFromBlueprint,
  loadLearningCatalog,
  type LearningCatalogCourse,
} from "../../../../../lib/learningCatalog";
import { getActiveUnlockPolicy, isLessonUnlocked } from "../../../../../lib/progress";

const breadcrumbLinkClass = "ui-link-muted";

type Props = {
  trackSlug: string;
  unitSlug: string;
};

export default function LibraryUnitClient({ trackSlug, unitSlug }: Props) {
  const { token, user, loading: authLoading, hasAnyRole } = useAuth();
  const { completedKeys, loading } = useLessonProgress();
  const unlockPolicy = getActiveUnlockPolicy();
  const bypassSequencing = hasAnyRole("admin", "content_editor");
  const sequencingPending = authLoading && Boolean(token) && !user;
  const [catalog, setCatalog] = useState<LearningCatalogCourse[] | null>(null);
  const [catalogLoadFailed, setCatalogLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadLearningCatalog()
      .then((data) => {
        if (!cancelled) setCatalog(data);
      })
      .catch(() => {
        if (!cancelled) {
          setCatalog(learningCatalogFromBlueprint());
          setCatalogLoadFailed(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const course = catalog ? getCourseFromCatalog(catalog, trackSlug) : null;
  const unitMod = catalog ? getModuleFromCatalog(catalog, trackSlug, unitSlug) : null;
  const phase = curriculumTracks.find((entry) => entry.slug === trackSlug)?.phases.find((entry) => entry.slug === unitSlug);

  const unitLessons = unitMod?.lessons ?? [];
  const trackTitle = course?.title ?? trackSlug;
  const unitTitle = unitMod?.title ?? unitSlug;

  const completedInUnit =
    course && unitMod
      ? unitLessons.filter((lesson) => completedKeys.has(lessonKey(trackSlug, unitSlug, lesson.slug))).length
      : 0;
  const unitDescription =
    phase?.entryCriteria[0] ??
    `In this unit, you will complete ${unitLessons.length || "all"} lessons in sequence to develop mastery before advancing.`;
  const unitExpectation =
    phase?.entryCriteria[1] ??
    "Expect each lesson to build on prior work with applied examples, practice tasks, and checkpoint evidence.";
  const unitPacing =
    phase?.estimatedTimeHint ?? "Self-paced; steady weekly sessions will help you retain concepts and keep unlock momentum.";

  if (catalog === null) {
    return (
      <div className="ui-container max-w-4xl py-16" role="status" aria-live="polite">
        <p className="text-[color:var(--color-muted)]">Loading unit… This may take a moment if the API was idle.</p>
      </div>
    );
  }

  if (!course || !unitMod) {
    return (
      <div className="ui-container max-w-4xl py-16">
        <h1 className="text-3xl font-bold">Unit not found</h1>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">This track/unit combination is not in the lesson library.</p>
        <Link href="/learn/library" className="mt-4 inline-block ui-link">
          Return to lesson library
        </Link>
      </div>
    );
  }

  return (
    <div className="ui-container max-w-6xl py-16">
      {catalogLoadFailed ? (
        <p className="mb-4 text-xs text-[color:var(--color-muted)]">Using bundled catalog snapshot (API unreachable).</p>
      ) : null}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[color:var(--color-muted)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/learn/library" className={breadcrumbLinkClass}>
              Lesson library
            </Link>
          </li>
          <li className="text-[color:var(--color-muted)] opacity-60" aria-hidden="true">
            /
          </li>
          <li>
            <Link href={`/learn/library/${trackSlug}`} className={breadcrumbLinkClass}>
              {trackTitle}
            </Link>
          </li>
          <li className="text-[color:var(--color-muted)] opacity-60" aria-hidden="true">
            /
          </li>
          <li className="font-medium text-[color:var(--color-fg)]" aria-current="page">
            {unitTitle}
          </li>
        </ol>
      </nav>

      <section className="ui-card-major p-8">
        <p className="ui-meta-label tracking-[0.14em]">Unit overview</p>
        <h1 className="mt-2 text-4xl font-bold text-[color:var(--color-fg)]">{unitTitle}</h1>
        <p className="mt-3 max-w-4xl text-[color:var(--color-muted)]">{unitDescription}</p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">{unitExpectation}</p>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          {completedInUnit}/{unitLessons.length} lessons complete {loading && user ? "• syncing progress..." : ""}
        </p>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">How this unit works</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
              {bypassSequencing
                ? "Your role has full lesson access in this unit."
                : "Lessons unlock in order after prior lessons are completed."}
            </dd>
          </div>
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">Time commitment</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">{unitPacing}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Unit lessons</h2>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          {bypassSequencing
            ? "Open any lesson below. Sequencing locks are bypassed for your role."
            : "Open available lessons below. Locked lessons automatically unlock as you complete prior steps."}
        </p>
      </section>

      <ul className="mt-5 space-y-3">
        {unitLessons.map((lesson, index) => {
          const unlocked =
            bypassSequencing ||
            (sequencingPending && index === 0) ||
            (loading && index === 0) ||
            (!loading && isLessonUnlocked(catalog, trackSlug, unitSlug, lesson.slug, completedKeys, unlockPolicy));
          const href = buildLibraryPath(trackSlug, unitSlug, lesson.slug);
          const displayTitle = lessonHeaderDisplayTitle(trackSlug, lesson.title);
          const complete = completedKeys.has(lessonKey(trackSlug, unitSlug, lesson.slug));

          return (
            <li
              key={lesson.slug}
              className={`rounded-lg border px-4 py-3 shadow-[var(--shadow-card)] transition ${
                unlocked
                  ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] hover:border-[color:var(--color-accent-border)] hover:bg-[color:var(--color-accent-muted)]"
                  : "border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] text-[color:var(--color-muted)]"
              }`}
            >
              {unlocked ? (
                <Link href={href} className="ui-focus ui-link flex items-start gap-3">
                  <span className="mt-0.5 inline-flex min-w-6 justify-center rounded bg-[color:var(--color-accent-muted)] px-1.5 text-xs font-semibold text-[color:var(--color-accent)]">
                    {index + 1}
                  </span>
                  <span>
                    <span className="font-medium text-[color:var(--color-fg)]">{displayTitle}</span>
                    <span className="mt-0.5 block text-xs text-[color:var(--color-muted)]">{complete ? "Completed" : "Available now"}</span>
                  </span>
                </Link>
              ) : (
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex min-w-6 justify-center rounded bg-[color:var(--color-border)] px-1.5 text-xs font-semibold text-[color:var(--color-muted)]">
                    {index + 1}
                  </span>
                  <span>
                    <span className="font-medium text-[color:var(--color-muted)]">{displayTitle}</span>
                    <span className="mt-0.5 block text-xs text-[color:var(--color-muted)] opacity-80">
                      Complete prior lessons in this unit to unlock.
                    </span>
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
