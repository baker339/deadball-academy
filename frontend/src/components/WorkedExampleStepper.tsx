"use client";

import { useState } from "react";
import { renderMathText } from "../lib/mathText";

type Example = {
  title: string;
  scenario: string;
  walkthrough: string[];
  takeaway: string;
};

type Props = {
  example: Example;
};

export default function WorkedExampleStepper({ example }: Props) {
  const [visibleSteps, setVisibleSteps] = useState(1);
  const finished = visibleSteps >= example.walkthrough.length;

  return (
    <article className="ui-card-major p-4">
      <h3 className="text-lg font-semibold text-[color:var(--color-fg)]">{example.title}</h3>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        <strong>Scenario:</strong> {renderMathText(example.scenario)}
      </p>

      <div className="ui-surface-subtle mt-3 p-3">
        <p className="ui-meta-label tracking-wider">Follow the reasoning path</p>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-[color:var(--color-muted)]">
          {example.walkthrough.slice(0, visibleSteps).map((step) => (
            <li key={step} className="transition-all duration-300">
              {renderMathText(step)}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setVisibleSteps((value) => Math.min(example.walkthrough.length, value + 1))}
          disabled={finished}
          className="ui-focus ui-btn-primary !px-3 !py-1.5 text-xs disabled:cursor-not-allowed disabled:opacity-50"
        >
          {finished ? "All Steps Revealed" : "Reveal Next Reasoning Step"}
        </button>
        <button
          type="button"
          onClick={() => setVisibleSteps(1)}
          className="ui-focus ui-btn-secondary !px-3 !py-1.5 text-xs"
        >
          Reset
        </button>
      </div>

      {finished ? (
        <p className="mt-3 rounded bg-green-50 px-3 py-2 text-sm text-green-800">
          <strong>Takeaway:</strong> {renderMathText(example.takeaway)}
        </p>
      ) : null}
    </article>
  );
}
