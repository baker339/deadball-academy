"use client";

import CmsDashboardTaskCard from "../../components/cms/CmsDashboardTaskCard";

export default function CmsPage() {
  return (
    <div className="ui-card-major p-6">
      <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">CMS dashboard</h1>
      <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-muted)]">
        Structure the catalog, build lesson content in the studio, then move work through review. Same flow as the sidebar—tiles
        here are quick entry points.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <CmsDashboardTaskCard
          href="/cms/setup"
          stepLabel="Step 1"
          title="Curriculum setup"
          description="Tracks, then units, then lessons—in order."
          accent="primary"
        />
        <CmsDashboardTaskCard
          href="/cms/lessons"
          stepLabel="Step 2"
          title="Lesson builder"
          description="Modules, steps, and learner-facing lesson page content."
          accent="accent"
        />
        <CmsDashboardTaskCard
          href="/cms/review-queue"
          stepLabel="Step 3"
          title="Review and publish"
          description="Notes, decisions, and go-live."
          accent="neutral"
        />
      </div>
      <section className="mt-8 rounded-xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-4 text-sm text-[color:var(--color-muted)]">
        <p className="font-semibold text-[color:var(--color-fg)]">Roadmap (not built yet)</p>
        <p className="mt-1">
          A dedicated <strong className="text-[color:var(--color-fg)]">media library</strong> and{" "}
          <strong className="text-[color:var(--color-fg)]">navigation builder</strong> would sit alongside these flows when the product
          needs asset reuse and menu management beyond lessons.
        </p>
      </section>
    </div>
  );
}
