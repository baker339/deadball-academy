"use client";

import { useEffect, useMemo, useState } from "react";
import type { LessonReviewAnnotation, ReviewLifecycleStatus } from "../content/reviewNotes";
import { reviewSeverityBadgeColor } from "../content/reviewNotes";

type Props = {
  annotation: LessonReviewAnnotation;
};

type PersistedSignoff = {
  status: ReviewLifecycleStatus;
  reviewer: string;
  note: string;
  updatedIso: string;
};

const statusLabel: Record<ReviewLifecycleStatus, string> = {
  pending: "Pending human review",
  in_review: "In review",
  needs_changes: "Needs changes",
  approved: "Approved",
  blocked: "Blocked",
};

const allowedTransitions: Record<ReviewLifecycleStatus, ReviewLifecycleStatus[]> = {
  pending: ["in_review", "blocked"],
  in_review: ["needs_changes", "approved", "blocked"],
  needs_changes: ["in_review", "blocked"],
  approved: ["in_review"],
  blocked: ["in_review"],
};

export default function ReviewNotesPanel({ annotation }: Props) {
  const storageKey = useMemo(() => `lesson-review-signoff:${annotation.lessonKey}`, [annotation.lessonKey]);
  const [status, setStatus] = useState<ReviewLifecycleStatus>(annotation.lifecycle);
  const [reviewer, setReviewer] = useState("");
  const [note, setNote] = useState("");
  const [updatedIso, setUpdatedIso] = useState(annotation.lastUpdatedIso);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as PersistedSignoff;
      if (!parsed.status) return;
      setStatus(parsed.status);
      setReviewer(parsed.reviewer ?? "");
      setNote(parsed.note ?? "");
      setUpdatedIso(parsed.updatedIso ?? annotation.lastUpdatedIso);
    } catch {
      // ignore malformed local reviewer state
    }
  }, [annotation.lastUpdatedIso, storageKey]);

  const nextStatuses = allowedTransitions[status];

  const persist = (nextStatus: ReviewLifecycleStatus) => {
    const payload: PersistedSignoff = {
      status: nextStatus,
      reviewer,
      note,
      updatedIso: new Date().toISOString(),
    };
    setStatus(nextStatus);
    setUpdatedIso(payload.updatedIso);
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  };

  return (
    <aside className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Reviewer Notes</p>
        <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${reviewSeverityBadgeColor(annotation.highestSeverity)}`}>
          Highest severity: {annotation.highestSeverity}
        </span>
      </div>

      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Machine-generated notes are advisory. Human review determines final lesson readiness and can override any AI finding.
      </p>

      <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
        {annotation.notes.map((entry) => (
          <li key={entry.id} className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
              {entry.category.replace(/_/g, " ")} • {entry.source} • {entry.severity}
            </p>
            <p className="mt-1">{entry.message}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Human sign-off workflow</p>
        <p className="mt-1 text-sm text-[color:var(--color-muted)]">Current status: {statusLabel[status]}</p>
        <p className="mt-1 text-xs text-[color:var(--color-muted)]">Updated: {new Date(updatedIso).toLocaleString()}</p>

        <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]" htmlFor="reviewer-initials">
          Reviewer initials
        </label>
        <input
          id="reviewer-initials"
          value={reviewer}
          onChange={(event) => setReviewer(event.target.value)}
          className="mt-1 w-full rounded border border-[color:var(--color-border)] px-2 py-1 text-sm"
          placeholder="e.g. MC"
        />

        <label className="mt-3 block text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]" htmlFor="reviewer-note">
          Resolution note
        </label>
        <textarea
          id="reviewer-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="mt-1 min-h-20 w-full rounded border border-[color:var(--color-border)] px-2 py-1 text-sm"
          placeholder="What changed, what still needs work, and rationale."
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {nextStatuses.map((nextStatus) => (
            <button
              key={nextStatus}
              type="button"
              onClick={() => persist(nextStatus)}
              className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-1 text-xs font-semibold text-[color:var(--color-muted)] hover:bg-neutral-100"
            >
              Mark {statusLabel[nextStatus]}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
