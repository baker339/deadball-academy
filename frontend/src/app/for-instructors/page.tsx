import Link from "next/link";
import { siteBrand } from "../../config/siteBrand";
import { curriculumTracks } from "../../content/curriculum";

export default function ForInstructorsPage() {
  return (
    <div className="ui-container max-w-5xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">For Instructors And Departments</h1>
      <p className="mt-3 text-[color:var(--color-muted)]">
        {siteBrand.displayName} works best as supplemental curriculum material for physics, mathematics, statistics, data science,
        and technical communication courses. Use this page to map content into your existing course structure.
      </p>

      <section className="ui-surface mt-10 p-6">
        <h2 className="text-2xl font-bold">How To Use In Your Curriculum</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--color-muted)]">
          <li>Single-module supplement: assign one track unit as a methods reinforcement module.</li>
          <li>Mini-unit insertion: pair 3-5 lessons with your course&apos;s existing problem sets.</li>
          <li>Semester supplement: run one full track over the term for applied project practice.</li>
          <li>Capstone support: use communication and methodology lessons for technical writing scaffolds.</li>
        </ul>
      </section>

      <section className="ui-surface-subtle mt-8 p-6">
        <h2 className="text-xl font-bold">Course Planning Checklist</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[color:var(--color-muted)]">
          <li>Choose one track aligned to your learning outcomes.</li>
          <li>Select a phase/unit and identify prerequisite expectations.</li>
          <li>Assign lesson sequence plus checkpoint policy.</li>
          <li>Use dashboard + badges as formative progress indicators.</li>
          <li>Map final synthesis to your own grading rubric.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Track Alignment Snapshot</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {curriculumTracks.map((track) => (
            <article key={track.slug} className="ui-surface p-4">
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="ui-meta-label mt-2">Best fit</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
                {track.outcomes.slice(0, 2).map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="ui-meta-label mt-3">Prerequisites</p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">{track.prerequisites.join(" | ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-surface mt-8 p-6">
        <h2 className="text-xl font-bold">Implementation Notes</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          Instructor resources are currently read-only guidance intended for rapid adoption. Multi-instructor content authoring
          is intentionally deferred until there is sustained demand and review capacity.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/learn/library" className="ui-btn-primary">
          Browse lesson library
        </Link>
        <Link href="/learn/syllabus" className="ui-btn-secondary">
          View syllabus and milestones
        </Link>
      </div>
    </div>
  );
}
