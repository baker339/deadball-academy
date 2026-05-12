import type { Metadata } from "next";
import { siteBrand } from "../../../config/siteBrand";
import { curriculumTracks } from "../../../content/curriculum";

export const metadata: Metadata = {
  title: "Syllabus",
  description: `Milestones, progression, and capstone expectations for ${siteBrand.displayName}.`,
};

const rollingPhases = [
  { title: "Foundations", description: "Geometry, trigonometry, and core ball-flight components + practice loops." },
  { title: "Models & Assumptions", description: "Drag, environment effects, and evidence-based modeling habits." },
  { title: "Visualization & QA", description: "Chart reading, filtering trade-offs, and quality-focused practice." },
  { title: "Capstone Communication", description: "Methodology writing, assumptions + caveats, and capstone deliverables." },
];

export default function SyllabusPage() {
  return (
    <div className="ui-container max-w-4xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">{siteBrand.displayName} Syllabus</h1>
      <p className="mt-2 text-[color:var(--color-muted)]">
        Structured sequencing, milestone progression, and capstone expectations for student cohorts.
      </p>
      <section className="ui-surface mt-8 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Progress Milestones</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          The platform currently tracks completion milestones rather than weighted grades.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--color-muted)]">
          <li>Complete lessons within each unit.</li>
          <li>Complete all units within a track (course-equivalent).</li>
          <li>Pass lesson checkpoints when required before marking completion.</li>
          <li>Track completion progress in your dashboard.</li>
        </ul>
      </section>
      <section className="ui-surface mt-8 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Badge Progression</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          The program is designed to award badges as you complete core milestones.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--color-muted)]">
          <li>Unit Badge: earned when all lessons in a unit are complete.</li>
          <li>Track Badge: earned when all units in a track are complete.</li>
          <li>Badge visibility target: quick indicator in navigation plus full display on dashboard/profile views.</li>
        </ul>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]">
          Badge awarding is part of the roadmap and is being aligned with existing completion tracking.
        </p>
      </section>
      <section className="ui-surface mt-8 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Rolling Mastery Timeline</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          There is no fixed 10-week schedule. Students progress through phases when they meet the entry criteria for the next phase.
        </p>
        <div className="mt-4 space-y-3">
          {rollingPhases.map((phase) => (
            <div key={phase.title} className="ui-surface-subtle p-3">
              <p className="font-semibold text-[color:var(--color-fg)]">{phase.title}</p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="ui-surface mt-8 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Program Tracks At A Glance</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          High-level outcomes, prerequisites, and assessment focus by track.
        </p>
        <div className="mt-4 space-y-4">
          {curriculumTracks.map((track) => (
            <article key={track.slug} className="ui-surface-subtle p-4">
              <h3 className="text-lg font-semibold text-[color:var(--color-fg)]">{track.title}</h3>
              <p className="ui-meta-label mt-2 tracking-[0.12em]">Outcomes</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
                {track.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="ui-meta-label mt-3 tracking-[0.12em]">Prerequisites</p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">{track.prerequisites.join(" | ")}</p>
              <p className="ui-meta-label mt-3 tracking-[0.12em]">Assessment Emphasis</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
                {track.assessments.map((assessment) => (
                  <li key={assessment}>{assessment}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="ui-surface-subtle mt-8 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Capstone Learning Expectations</h2>
        <p className="mt-2 text-[color:var(--color-muted)]">
          These are competency targets that demonstrate readiness for advanced analysis and communication.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[color:var(--color-muted)]">
          <li>Reproducible analysis notebook or report with clear assumptions.</li>
          <li>Comparative analysis of at least two seasons or environments.</li>
          <li>Explicit uncertainty discussion and sensitivity checks.</li>
          <li>Presentation deck for technical + non-technical audiences.</li>
        </ul>
      </section>
    </div>
  );
}
