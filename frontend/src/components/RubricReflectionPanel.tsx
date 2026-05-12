"use client";

import { useEffect, useState } from "react";
import type { SummativeReflection } from "../content/lessonTypes";
import { renderMathText } from "../lib/mathText";

type Props = {
  storageKey: string;
  reflection: SummativeReflection;
};

export default function RubricReflectionPanel({ storageKey, reflection }: Props) {
  const draftKey = `${storageKey}:draft`;
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(draftKey);
      if (saved) setDraft(saved);
    } catch {
      /* ignore */
    }
  }, [draftKey]);

  const persist = (value: string) => {
    setDraft(value);
    try {
      localStorage.setItem(draftKey, value);
    } catch {
      /* ignore */
    }
  };

  const exportText = () => {
    const lines = [
      reflection.title,
      "",
      "Task:",
      reflection.taskPrompt,
      "",
      "Draft:",
      draft || "(empty)",
    ];
    return lines.join("\n");
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(exportText());
    } catch {
      /* ignore */
    }
  };

  return (
    <article className="rounded-xl border-2 border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-muted)] p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">Summative artifact (draft locally)</p>
      <h2 className="mt-1 text-xl font-bold text-[color:var(--color-reading-fg)]">{reflection.title}</h2>
      <p className="mt-2 text-sm text-[color:var(--color-reading-muted)]">{renderMathText(reflection.intro)}</p>

      <h3 className="mt-4 text-sm font-semibold text-[color:var(--color-reading-fg)]">Task</h3>
      <p className="mt-1 text-sm text-[color:var(--color-reading-muted)]">{renderMathText(reflection.taskPrompt)}</p>

      {reflection.deliverableTemplate?.length ? (
        <div className="mt-4 rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-3">
          <h3 className="text-sm font-semibold text-[color:var(--color-reading-fg)]">Suggested one-page structure</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[color:var(--color-reading-muted)]">
            {reflection.deliverableTemplate.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {reflection.anchorResponses?.length ? (
        <div className="mt-4 space-y-3">
          <h3 className="text-sm font-semibold text-[color:var(--color-reading-fg)]">Calibration anchors (anonymized)</h3>
          {reflection.anchorResponses.map((a) => (
            <div
              key={a.label}
              className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-3 text-sm"
            >
              <p className="font-semibold text-[color:var(--color-reading-fg)]">{a.label}</p>
              <p className="mt-1 whitespace-pre-wrap text-[color:var(--color-muted)]">{a.excerpt}</p>
              <p className="mt-2 text-xs text-[color:var(--color-muted)]">
                <span className="font-semibold">Why this level: </span>
                {a.commentary}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-4 overflow-x-auto rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)]">
        <table className="min-w-full text-left text-xs text-[color:var(--color-reading-fg)]">
          <thead>
            <tr className="border-b border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)]">
              <th className="p-2 font-semibold">Criterion</th>
              <th className="p-2 font-semibold">Excellent</th>
              <th className="p-2 font-semibold">Proficient</th>
              <th className="p-2 font-semibold">Developing</th>
              <th className="p-2 font-semibold">Needs support</th>
            </tr>
          </thead>
          <tbody>
            {reflection.rubric.map((row) => (
              <tr key={row.criterion} className="border-b border-[color:var(--color-reading-border)] align-top">
                <td className="p-2 font-medium">{row.criterion}</td>
                <td className="p-2">{row.excellent}</td>
                <td className="p-2">{row.proficient}</td>
                <td className="p-2">{row.developing}</td>
                <td className="p-2">{row.needsSupport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-semibold text-[color:var(--color-reading-fg)]">Your draft</span>
        <textarea
          className="mt-1 w-full min-h-[140px] rounded border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-2 text-sm text-[color:var(--color-reading-fg)]"
          value={draft}
          onChange={(e) => persist(e.target.value)}
          placeholder="Write your response here. It is saved only in this browser (localStorage)."
        />
      </label>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copyDraft}
          className="rounded border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-reading-fg)] hover:opacity-90"
        >
          Copy draft + task
        </button>
      </div>
    </article>
  );
}
