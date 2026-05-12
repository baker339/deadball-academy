"use client";

import { useMemo, useState } from "react";
import { renderMathText } from "../lib/mathText";

type Props = {
  prompt: string;
  expected: string;
  explanation?: string;
};

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export default function InlineCheckpoint({ prompt, expected, explanation }: Props) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const correct = useMemo(() => normalize(value) === normalize(expected), [value, expected]);

  return (
    <article className="rounded-lg border border-blue-200 bg-blue-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">Mini Check</p>
      <p className="mt-1 text-sm text-blue-900">{renderMathText(prompt)}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          className="w-full rounded border border-blue-300 bg-[color:var(--color-surface)] px-3 py-2 text-sm"
          placeholder="Type your answer"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="rounded bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800"
        >
          Check
        </button>
      </div>
      {checked ? (
        <p className={`mt-2 text-xs font-semibold ${correct ? "text-green-700" : "text-amber-700"}`}>
          {correct ? "Nice work. Continue to the next concept." : "Not yet. Revisit the concept card, then try once more."}
        </p>
      ) : null}
      {checked && explanation ? <p className="mt-1 text-xs text-blue-900">{renderMathText(explanation)}</p> : null}
    </article>
  );
}
