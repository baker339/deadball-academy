import Link from "next/link";
import ContinueLearningPanel from "../components/ContinueLearningPanel";
import { siteBrand } from "../config/siteBrand";
import { curriculumTracks } from "../content/curriculum";
import { deepCourseBlueprint } from "../content/deepCourseBlueprint";

function trackScope(slug: string) {
  const bp = deepCourseBlueprint.find((t) => t.slug === slug);
  if (!bp) return { units: 0, lessons: 0 };
  const units = bp.units.length;
  const lessons = bp.units.reduce((n, u) => n + u.lessons.length, 0);
  return { units, lessons };
}

export default function Home() {
  return (
    <div className="ui-container max-w-6xl pt-5 pb-12 sm:pt-6 sm:pb-16">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <section className="ui-marketing-hero ui-card-major p-6 sm:p-8 lg:col-span-2">
          <p className="ui-meta-label tracking-[0.12em]">STEM learning</p>
          <h1 className="ui-marketing-display mt-2 text-3xl font-bold leading-tight tracking-tight text-[color:var(--color-fg)] sm:text-4xl lg:text-5xl">
            {siteBrand.displayName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium leading-snug text-[color:var(--color-fg)] sm:text-xl">
            {siteBrand.heroTagline}
          </p>
          <p className="mt-4 max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">{siteBrand.heroLead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learn/library" className="ui-btn-primary">
              Start learning
            </Link>
            <Link href="/#learning-paths" className="ui-btn-secondary">
              Learning paths
            </Link>
            <Link href="/dashboard" className="ui-btn-secondary">
              Dashboard
            </Link>
          </div>
        </section>
        <ContinueLearningPanel className="lg:col-span-1" />
      </div>

      <section className="ui-card-major mt-10 p-6 sm:p-8" aria-labelledby="home-paths-heading">
        <h2 id="home-paths-heading" className="text-lg font-bold text-[color:var(--color-fg)] sm:text-xl">
          Explore the curriculum
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--color-muted)] sm:text-base">
          Open the lesson library, follow structured tracks, or review syllabus and milestones—all from one hub.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <Link
              href="/learn/library"
              className="ui-focus flex h-full flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 transition hover:border-[color:var(--color-accent-border)] hover:shadow-sm"
            >
              <span className="text-sm font-semibold text-[color:var(--color-fg)]">Lesson library</span>
              <span className="mt-1 text-xs text-[color:var(--color-muted)]">All tracks, units, and long-form lessons</span>
            </Link>
          </li>
          <li>
            <Link
              href="/learn/tracks"
              className="ui-focus flex h-full flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 transition hover:border-[color:var(--color-accent-border)] hover:shadow-sm"
            >
              <span className="text-sm font-semibold text-[color:var(--color-fg)]">Structured tracks</span>
              <span className="mt-1 text-xs text-[color:var(--color-muted)]">Outcomes, phases, and pacing by topic</span>
            </Link>
          </li>
          <li>
            <Link
              href="/learn/syllabus"
              className="ui-focus flex h-full flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 transition hover:border-[color:var(--color-accent-border)] hover:shadow-sm"
            >
              <span className="text-sm font-semibold text-[color:var(--color-fg)]">Syllabus</span>
              <span className="mt-1 text-xs text-[color:var(--color-muted)]">Milestones and capstone expectations</span>
            </Link>
          </li>
          <li>
            <Link
              href="/for-instructors"
              className="ui-focus flex h-full flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 transition hover:border-[color:var(--color-accent-border)] hover:shadow-sm"
            >
              <span className="text-sm font-semibold text-[color:var(--color-fg)]">Instructors</span>
              <span className="mt-1 text-xs text-[color:var(--color-muted)]">Classroom support and teaching pathways</span>
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-12 scroll-mt-20" id="learning-paths" aria-labelledby="learning-paths-heading">
        <h2 id="learning-paths-heading" className="text-xl font-bold text-[color:var(--color-fg)] sm:text-2xl">
          Learning paths
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-[color:var(--color-muted)] sm:text-base">
          Each path maps to the same lesson library—open lessons in context, or jump straight into a track from the library.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {curriculumTracks.map((track) => {
            const { units, lessons } = trackScope(track.slug);
            const preview = track.outcomes[0] ?? "";
            return (
              <li key={track.slug}>
                <article className="flex h-full flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-sm">
                  <h3 className="text-base font-bold leading-snug text-[color:var(--color-fg)]">{track.title}</h3>
                  <p className="mt-1 text-xs text-[color:var(--color-muted)]">
                    {units} units · {lessons} lessons
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">{preview}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href={`/learn/library/${track.slug}`} className="ui-focus ui-btn-primary inline-flex text-xs">
                      Open in library
                    </Link>
                    <Link href="/learn/tracks" className="ui-focus ui-btn-secondary inline-flex text-xs">
                      Track overview
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="ui-card-major mt-10 p-6 sm:p-8" aria-labelledby="home-ethos-heading">
        <h2 id="home-ethos-heading" className="ui-marketing-display text-xl font-bold text-[color:var(--color-fg)] sm:text-2xl">
          {siteBrand.homeEthosHeading}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-[color:var(--color-muted)] sm:text-base">{siteBrand.brandMission}</p>
        <p className="mt-2 max-w-3xl text-xs text-[color:var(--color-muted)] sm:text-sm">{siteBrand.brandCommunityLine}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          <li className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-4">
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">{siteBrand.homeEthosBulletHeritage}</p>
          </li>
          <li className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-4">
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">{siteBrand.homeEthosBulletCraft}</p>
          </li>
          <li className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-4">
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">{siteBrand.homeEthosBulletCommunity}</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
