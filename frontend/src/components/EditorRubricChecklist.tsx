"use client";

import { useMemo, useState } from "react";
import { LESSON_EDITOR_RUBRIC } from "../content/lessonEditorRubric";

export default function EditorRubricChecklist() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(LESSON_EDITOR_RUBRIC.map((c) => [c.id, false])),
  );

  const doneCount = useMemo(() => LESSON_EDITOR_RUBRIC.filter((c) => checked[c.id]).length, [checked]);

  return (
    <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-3 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="ui-focus flex w-full items-center justify-between gap-2 text-left"
        aria-expanded={open}
      >
        <span>
          <span className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-muted)]">Editor rubric</span>
          <span className="mt-0.5 block text-sm font-semibold text-[color:var(--color-fg)]">Baseball–STEM checklist</span>
        </span>
        <span className="shrink-0 text-xs text-[color:var(--color-muted)]">
          {doneCount}/{LESSON_EDITOR_RUBRIC.length} {open ? "▾" : "▸"}
        </span>
      </button>
      <p className="mt-2 text-[10px] leading-relaxed text-[color:var(--color-muted)]">
        Standalone reference: <code className="rounded bg-[color:var(--color-surface)] px-1">docs/lesson-editor-rubric.md</code> (repo root). Heuristic audit:{" "}
        <code className="rounded bg-[color:var(--color-surface)] px-1">runRubricLessonAudit</code>.
      </p>
      {open ? (
        <ul className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1 text-[11px]">
          {LESSON_EDITOR_RUBRIC.map((c) => (
            <li key={c.id} className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2">
              <label className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-[color:var(--color-border)]"
                  checked={checked[c.id] ?? false}
                  onChange={(e) => setChecked((prev) => ({ ...prev, [c.id]: e.target.checked }))}
                />
                <span>
                  <span className="font-semibold text-[color:var(--color-fg)]">{c.label}</span>
                  <span className="mt-0.5 block text-[10px] leading-snug text-[color:var(--color-muted)]">{c.guidance}</span>
                  {c.automatable ? (
                    <span className="mt-1 block text-[9px] uppercase tracking-wide text-[color:var(--color-muted)] opacity-80">
                      Auto hint: {c.auditSeverity}
                    </span>
                  ) : (
                    <span className="mt-1 block text-[9px] uppercase tracking-wide text-[color:var(--color-muted)] opacity-80">Human review</span>
                  )}
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
