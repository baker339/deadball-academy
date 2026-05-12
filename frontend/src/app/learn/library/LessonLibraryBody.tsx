"use client";

import Link from "next/link";
import { deepCourseBlueprint } from "../../../content/deepLessonLibrary";
import { useAuth } from "../../../components/AuthProvider";
import TrackLessonProgressPill from "../../../components/TrackLessonProgressPill";
import { curriculumTracks } from "../../../content/curriculum";
import ContinueLearningPanel from "../../../components/ContinueLearningPanel";
import { siteBrand } from "../../../config/siteBrand";

const breadcrumbLinkClass = "ui-link-muted";

export default function LessonLibraryBody() {
  const { user } = useAuth();
  return (
    <div className="ui-container max-w-6xl pt-6 pb-16 sm:pt-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[color:var(--color-muted)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className={breadcrumbLinkClass}>
              Home
            </Link>
          </li>
          <li className="text-[color:var(--color-muted)] opacity-60" aria-hidden="true">
            /
          </li>
          <li className="font-medium text-[color:var(--color-fg)]" aria-current="page">
            Lesson library
          </li>
        </ol>
      </nav>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <section className="ui-marketing-hero ui-card-major p-6 sm:p-8 lg:col-span-2">
          <p className="ui-meta-label tracking-[0.14em]">Learner library</p>
          <h1 className="ui-marketing-display mt-2 text-3xl font-bold tracking-tight text-[color:var(--color-fg)] sm:text-4xl">
            {siteBrand.lessonLibraryHubTitle}
          </h1>
          <p className="mt-2 max-w-3xl text-base font-medium text-[color:var(--color-fg)] sm:text-lg">{siteBrand.libraryHubSubtitle}</p>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--color-muted)] sm:text-base">
            Navigate by track, then drill into units and lessons. Each lesson includes objectives, full exposition, worked examples, practice, and reflection.
          </p>
          {user ? (
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              While signed in, <span className="font-semibold text-[color:var(--color-fg)]">lessons in each unit unlock in order</span>. Continue from your next eligible
              lesson inside each track.
            </p>
          ) : null}
        </section>
        <ContinueLearningPanel className="lg:col-span-1" />
      </div>
      <section className="mt-10" aria-label="Tracks">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Browse tracks</h2>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--color-muted)]">
          Each track includes expected outcomes, pacing hints, and prerequisite guidance so you can plan your sequence before opening a unit.
        </p>
      </section>
      <div className="mt-6 grid gap-6">
        {deepCourseBlueprint.map((track) => (
          <section key={track.slug} id={`library-track-${track.slug}`} className="ui-card-major scroll-mt-24 p-6">
            {(() => {
              const curriculumTrack = curriculumTracks.find((entry) => entry.slug === track.slug);
              const firstPhase = curriculumTrack?.phases.find((phase) => track.units.some((unit) => unit.slug === phase.slug));
              const totalLessons = track.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
              return (
                <>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-muted)]">Track</p>
                      <h3 className="mt-1 text-2xl font-bold">
                        <Link href={`/learn/library/${track.slug}`} className="ui-focus ui-link">
                          {track.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                        {track.units.length} units • {totalLessons} lessons
                      </p>
                    </div>
                    <TrackLessonProgressPill trackSlug={track.slug} />
                  </div>
                  <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                    {curriculumTrack?.outcomes[0] ?? "Progress through unit-aligned lessons to build track mastery."}
                  </p>
                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">What to expect</dt>
                      <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
                        {firstPhase?.entryCriteria[0] ?? "You will move unit-by-unit with lessons completed in sequence."}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">Time commitment</dt>
                      <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
                        {firstPhase?.estimatedTimeHint ?? "Self-paced; plan regular weekly sessions for steady progress."}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">Prerequisites</dt>
                      <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
                        {curriculumTrack?.prerequisites[0] ?? "Review prerequisites before beginning."}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">Primary outcome</dt>
                      <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
                        {curriculumTrack?.outcomes[1] ?? "Build transferable reasoning and communication habits in this domain."}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6">
                    <Link href={`/learn/library/${track.slug}`} className="ui-focus ui-btn-primary">
                      Open track
                    </Link>
                  </div>
                </>
              );
            })()}
          </section>
        ))}
      </div>
    </div>
  );
}
