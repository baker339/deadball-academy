"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "../../../../../components/AuthProvider";
import { cmsAddReviewDecision, cmsAddReviewNote, cmsDiff, cmsReviewDecisions, cmsReviewNotes } from "../../../../../lib/cms";

export default function CmsLessonReviewPage() {
  const { token } = useAuth();
  const params = useParams<{ lessonId: string }>();
  const lessonId = Number(params.lessonId);
  const [diff, setDiff] = useState<{ summary: string[]; latest_revision_id: number | null; published_revision_id: number | null } | null>(null);
  const [notes, setNotes] = useState<Array<{ id: number; severity: string; category: string; note_text: string; status: string }>>([]);
  const [decisions, setDecisions] = useState<Array<{ id: number; decision: string; notes: string }>>([]);
  const [form, setForm] = useState({ severity: "note", category: "teaching_effectiveness", note_text: "", status: "pending" });
  const [decision, setDecision] = useState({ decision: "in_review", notes: "" });
  const [error, setError] = useState("");

  const loadAll = useCallback(async (activeToken: string) => {
    const [d, n, de] = await Promise.all([cmsDiff(activeToken, lessonId), cmsReviewNotes(activeToken, lessonId), cmsReviewDecisions(activeToken, lessonId)]);
    setDiff(d);
    setNotes(n);
    setDecisions(de);
  }, [lessonId]);

  useEffect(() => {
    if (!token) return;
    loadAll(token).catch((err) => setError(err instanceof Error ? err.message : "Failed to load review"));
  }, [token, loadAll]);

  async function addNote() {
    if (!token) return;
    await cmsAddReviewNote(token, lessonId, form);
    setForm({ severity: "note", category: "teaching_effectiveness", note_text: "", status: "pending" });
    await loadAll(token);
  }

  async function addDecision() {
    if (!token) return;
    await cmsAddReviewDecision(token, lessonId, decision);
    setDecision({ decision: "in_review", notes: "" });
    await loadAll(token);
  }

  return (
    <div className="space-y-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5">
      <h1 className="text-2xl font-bold">Lesson review</h1>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <section className="rounded border border-[color:var(--color-border)] p-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Change summary</h2>
        {diff ? (
          <>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">
              Latest draft: {String(diff.latest_revision_id ?? "none")} | Published: {String(diff.published_revision_id ?? "none")}
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-[color:var(--color-muted)]">
              {diff.summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">No change data yet.</p>
        )}
      </section>

      <section className="rounded border border-[color:var(--color-border)] p-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Add review note</h2>
        <div className="mt-2 grid gap-2 md:grid-cols-4">
          <select className="rounded border px-2 py-1 text-sm" value={form.severity} onChange={(e) => setForm({ ...form, severity: e.target.value })}>
            <option value="note">note</option>
            <option value="minor">minor</option>
            <option value="major">major</option>
            <option value="blocker">blocker</option>
          </select>
          <input className="rounded border px-2 py-1 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
          <input className="rounded border px-2 py-1 text-sm" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
          <button className="ui-focus ui-btn-primary !px-3 !py-1 text-sm" onClick={addNote}>
            Add note
          </button>
        </div>
        <textarea className="mt-2 min-h-24 w-full rounded border px-2 py-1 text-sm" value={form.note_text} onChange={(e) => setForm({ ...form, note_text: e.target.value })} />

        <ul className="mt-3 space-y-2 text-sm">
          {notes.map((note) => (
            <li key={note.id} className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
                {note.severity} • {note.category} • {note.status}
              </p>
              <p className="mt-1">{note.note_text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded border border-[color:var(--color-border)] p-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Decision log</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          <select className="rounded border px-2 py-1 text-sm" value={decision.decision} onChange={(e) => setDecision({ ...decision, decision: e.target.value })}>
            <option value="in_review">in_review</option>
            <option value="needs_changes">needs_changes</option>
            <option value="approved">approved</option>
            <option value="blocked">blocked</option>
          </select>
          <input className="min-w-80 rounded border px-2 py-1 text-sm" value={decision.notes} onChange={(e) => setDecision({ ...decision, notes: e.target.value })} />
          <button className="ui-focus ui-btn-primary !px-3 !py-1 text-sm" onClick={addDecision}>
            Record decision
          </button>
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          {decisions.map((item) => (
            <li key={item.id} className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">{item.decision}</p>
              <p className="mt-1">{item.notes}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
