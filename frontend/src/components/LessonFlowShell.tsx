"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { lessonHeaderDisplayTitle } from "../content/lessonTitleDisambiguation";

type LessonFlowStep = {
  id: string;
  title: string;
  description?: string;
  complete?: boolean;
};

type Props = {
  title: string;
  unitTitle: string;
  trackTitle: string;
  trackSlug: string;
  reviewBadge?: {
    label: string;
    className: string;
  };
  steps: LessonFlowStep[];
  activeStepId: string;
  onSelectStep: (id: string) => void;
  children: ReactNode;
};

export default function LessonFlowShell({
  title,
  unitTitle,
  trackTitle,
  trackSlug,
  reviewBadge,
  steps,
  activeStepId,
  onSelectStep,
  children,
}: Props) {
  const [showStepList, setShowStepList] = useState(true);
  const displayTitle = useMemo(() => lessonHeaderDisplayTitle(trackSlug, title), [trackSlug, title]);
  const progress = useMemo(() => {
    const completed = steps.filter((step) => step.complete).length;
    const total = steps.length || 1;
    return Math.round((completed / total) * 100);
  }, [steps]);

  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[minmax(288px,320px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(300px,360px)_minmax(0,1fr)]">
      <aside className="ui-card-major h-fit min-w-0 p-4 lg:sticky lg:top-4 lg:p-5 xl:p-6">
        <p className="ui-meta-label tracking-wider">{trackTitle}</p>
        <h1 className="mt-2 text-xl font-bold text-[color:var(--color-reading-fg)]">{displayTitle}</h1>
        <p className="mt-1 text-sm text-[color:var(--color-reading-muted)]">{unitTitle}</p>
        {reviewBadge ? (
          <span className={`mt-3 inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${reviewBadge.className}`}>
            {reviewBadge.label}
          </span>
        ) : null}

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="ui-meta-label tracking-wider">Lesson Progress</p>
            <button
              type="button"
              onClick={() => setShowStepList((prev) => !prev)}
              className="ui-focus rounded border border-[color:var(--color-border)] px-2 py-1 text-xs font-semibold text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface-subtle)]"
            >
              {showStepList ? "Hide steps" : "Show steps"}
            </button>
          </div>
          <div className="lesson-flow-progress-track mt-2 h-2">
            <div
              className="lesson-flow-progress-fill h-2 motion-safe:transition-all motion-safe:duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-[color:var(--color-muted)]">{progress}% complete</p>
        </div>

        {showStepList ? (
          <nav className="mt-4 space-y-2" aria-label="Lesson sections">
            {steps.map((step, index) => {
              const active = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  type="button"
                  aria-current={active ? "step" : undefined}
                  onClick={() => onSelectStep(step.id)}
                  className={`ui-focus min-h-[44px] w-full rounded-lg border px-3 py-3 text-left transition motion-reduce:transition-none ${
                    active ? "lesson-flow-step-active" : "lesson-flow-step-idle hover:border-[color:var(--color-accent-border)] hover:bg-[color:var(--color-surface-subtle)]"
                  }`}
                >
                  <p className="ui-meta-label">Step {index + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--color-fg)]">{step.title}</p>
                  {step.description ? (
                    <p className="mt-1 text-xs text-[color:var(--color-muted)]">{step.description}</p>
                  ) : null}
                  <p className={`mt-1 text-xs font-semibold ${step.complete ? "text-green-900" : "text-amber-900"}`}>
                    {step.complete ? "Complete" : "In progress"}
                  </p>
                </button>
              );
            })}
          </nav>
        ) : null}
      </aside>

      <section className="ui-card-major min-w-0 p-4 md:p-6 lg:p-7 xl:p-8">{children}</section>
    </div>
  );
}
