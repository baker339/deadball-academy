"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../components/AuthProvider";
import { cmsReviewQueue } from "../../../lib/cms";

type QueueRow = { lesson_id: number; lesson_title: string; status: string; highest_severity: string; note_count: number };

export default function CmsReviewQueuePage() {
  const { token } = useAuth();
  const [rows, setRows] = useState<QueueRow[]>([]);
  const [severityFilter, setSeverityFilter] = useState("all");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        setError("");
        const queue = await cmsReviewQueue(token);
        setRows(queue);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load review queue");
      }
    })();
  }, [token]);

  const filtered = useMemo(
    () => rows.filter((row) => severityFilter === "all" || row.highest_severity === severityFilter),
    [rows, severityFilter],
  );

  return (
    <div className="ui-card-major p-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold">Review</h1>
        <select
          className="rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-1.5 text-sm text-[color:var(--color-fg)] shadow-sm"
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
        >
          <option value="all">All severities</option>
          <option value="blocker">blocker</option>
          <option value="major">major</option>
          <option value="minor">minor</option>
          <option value="note">note</option>
        </select>
      </div>
      {error ? <p className="mt-3 text-sm text-[color:var(--color-danger)]">{error}</p> : null}

      <ul className="mt-4 space-y-2">
        {filtered.map((row) => (
          <li key={row.lesson_id} className="ui-surface p-3">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium text-[color:var(--color-fg)]">{row.lesson_title}</p>
              <span className="rounded bg-[color:var(--color-surface-subtle)] px-2 py-0.5 text-xs text-[color:var(--color-muted)]">{row.status}</span>
              <span className="rounded bg-[color:var(--color-surface-subtle)] px-2 py-0.5 text-xs text-[color:var(--color-muted)]">
                {row.highest_severity}
              </span>
              <span className="rounded bg-[color:var(--color-surface-subtle)] px-2 py-0.5 text-xs text-[color:var(--color-muted)]">
                {row.note_count} notes
              </span>
              <Link href={`/cms/lessons/${row.lesson_id}/review`} className="ui-focus ui-link ml-auto text-xs font-semibold">
                Review lesson
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
