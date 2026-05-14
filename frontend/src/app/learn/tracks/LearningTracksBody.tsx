"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { curriculumTracks, type CurriculumLesson, type CurriculumPhase, type CurriculumTrack } from "../../../content/curriculum";
import { getModuleFromCatalog, learningCatalogFromBlueprint, loadLearningCatalog, type LearningCatalogCourse } from "../../../lib/learningCatalog";

function mergePhaseLessonsFromCatalog(
  catalog: LearningCatalogCourse[],
  trackSlug: string,
  phase: CurriculumPhase,
): CurriculumLesson[] {
  const mod = getModuleFromCatalog(catalog, trackSlug, phase.slug);
  if (!mod || mod.lessons.length === 0) return phase.lessons;
  return mod.lessons.map((l) => ({
    slug: l.slug,
    title: l.title,
    routePath: l.route_path,
  }));
}

export default function LearningTracksBody() {
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

  const tracksWithPhases = useMemo(() => {
    if (!catalog) return null;
    return curriculumTracks.map((track: CurriculumTrack) => ({
      ...track,
      title: catalog.find((c) => c.slug === track.slug)?.title ?? track.title,
      phases: track.phases.map((phase) => ({
        ...phase,
        lessons: mergePhaseLessonsFromCatalog(catalog, track.slug, phase),
      })),
    }));
  }, [catalog]);

  if (!tracksWithPhases) {
    return (
      <div className="ui-container max-w-5xl py-16" role="status" aria-live="polite">
        <p className="text-[color:var(--color-muted)]">Loading learning paths… This may take a moment if the API was idle.</p>
      </div>
    );
  }

  return (
    <div className="ui-container max-w-5xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Structured learning paths</h1>
      <p className="mt-3 text-[color:var(--color-muted)]">
        Rigorous, university-style quantitative tracks built from the same open lesson library. This is not an accredited degree program; it is a transparent map of outcomes,
        phase gates, and assessment types you can pair with independent study, tutoring, or institutional partnerships.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/learn/library" className="ui-focus ui-btn-primary inline-flex text-sm">
          Open lesson library
        </Link>
        <Link href="/learn/alignment/algebra-unit-1" className="ui-focus ui-btn-secondary inline-flex text-sm">
          Algebra Unit 1 alignment pack
        </Link>
      </div>
      <div className="mt-10 space-y-8">
        {tracksWithPhases.map((track) => (
          <section key={track.slug} className="ui-surface p-6">
            <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">{track.title}</h2>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Outcomes</h3>
            <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-muted)]">
              {track.outcomes.map((outcome) => (
                <li key={outcome}>- {outcome}</li>
              ))}
            </ul>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Prerequisites</h3>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">{track.prerequisites.join(" | ")}</p>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Rolling Mastery Path</h3>
            <div className="mt-4 space-y-4">
              {track.phases.map((phase) => (
                <div key={phase.slug} className="ui-surface-subtle p-4">
                  <p className="font-semibold text-[color:var(--color-fg)]">{phase.title}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
                    {phase.entryCriteria.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  {phase.estimatedTimeHint ? (
                    <p className="mt-2 text-xs text-[color:var(--color-muted)] opacity-80">Suggested pace: {phase.estimatedTimeHint}</p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {phase.lessons.map((lesson) => (
                      <Link key={lesson.slug} href={lesson.routePath} className="ui-focus ui-btn-secondary !px-3 !py-1 text-xs">
                        {lesson.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Assessments</h3>
            <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-muted)]">
              {track.assessments.map((assessment) => (
                <li key={assessment}>- {assessment}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="mt-16 border-t border-[color:var(--color-border)] pt-8 text-sm text-[color:var(--color-muted)]">
        <p className="font-medium text-[color:var(--color-fg)]">Additional resources</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <Link href="/learn/maps/prerequisite-overview" className="ui-focus ui-link">
              Suggested order if you are new to the quantitative tracks
            </Link>
          </li>
          <li>
            <Link href="/learn/ethics/analyst-data-use" className="ui-focus ui-link">
              Practice scenarios: data claims, leakage, and careful language
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
