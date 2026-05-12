"use client";

import { useMemo, useState } from "react";
import { renderMathText } from "../lib/mathText";
import RevealableAnswer from "./RevealableAnswer";

type Prompt = {
  prompt: string;
  answer: string;
  explanation?: string;
};

type PracticeSet = {
  level: "warmup" | "core" | "stretch";
  prompts: Prompt[];
};

type Props = {
  sets: PracticeSet[];
};

export default function PracticeTabPanel({ sets }: Props) {
  const [activeLevel, setActiveLevel] = useState<PracticeSet["level"]>(sets[0]?.level ?? "warmup");
  const activeSet = useMemo(() => sets.find((set) => set.level === activeLevel) ?? sets[0], [activeLevel, sets]);

  if (!activeSet) return null;

  return (
    <section className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-sm">
      <h2 className="text-xl font-bold text-neutral-900">Cumulative Practice</h2>
      <p className="mt-1 text-sm text-[color:var(--color-muted)]">
        Apply the same reasoning from worked examples in layers: warmup, then core, then stretch.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {sets.map((set) => (
          <button
            key={set.level}
            type="button"
            onClick={() => setActiveLevel(set.level)}
            className={`rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              set.level === activeLevel ? "bg-blue-600 text-white" : "bg-neutral-100 text-[color:var(--color-muted)] hover:bg-neutral-200"
            }`}
          >
            {set.level}
          </button>
        ))}
      </div>

      <div className="mt-3 rounded-lg bg-[color:var(--color-surface-subtle)] p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">
          {activeSet.level} set · {activeSet.prompts.length} prompts
        </p>
        <ul className="mt-2 space-y-3">
          {activeSet.prompts.map((item) => (
            <li key={item.prompt} className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
              <p className="text-sm text-[color:var(--color-fg)]">{renderMathText(item.prompt)}</p>
              <RevealableAnswer answer={item.answer} explanation={item.explanation} label="Guided answer" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
