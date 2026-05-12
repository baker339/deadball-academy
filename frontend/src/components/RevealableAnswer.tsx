"use client";

import { useState } from "react";
import { renderMathText } from "../lib/mathText";

type RevealableAnswerProps = {
  answer: string;
  explanation?: string;
  label?: string;
};

export default function RevealableAnswer({ answer, explanation, label = "Answer" }: RevealableAnswerProps) {
  const [stage, setStage] = useState<"hidden" | "hint" | "full">("hidden");

  const hint = answer.split("\n")[0] ?? answer;
  const isVisible = stage !== "hidden";

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setStage((value) => (value === "hidden" ? "hint" : "hidden"))}
          className="ui-focus ui-btn-secondary !px-3 !py-1 text-xs"
        >
          {isVisible ? `Hide ${label}` : `Show hint`}
        </button>
        <button
          type="button"
          onClick={() => setStage("full")}
          className="ui-focus rounded border border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-muted)] px-3 py-1 text-xs font-semibold text-[color:var(--color-accent)] hover:opacity-90"
        >
          Reveal full {label.toLowerCase()}
        </button>
      </div>
      {isVisible ? (
        <div className="ui-surface-subtle mt-2 p-3 text-sm text-[color:var(--color-muted)] transition-all duration-300">
          {stage === "hint" ? <p>{renderMathText(hint)}</p> : null}
          {stage === "full"
            ? answer.split("\n").map((line, idx) => (
                <p key={`${line}-${idx}`} className={idx > 0 ? "mt-1" : undefined}>
                  {renderMathText(line)}
                </p>
              ))
            : null}
          {stage === "full" && explanation ? <p className="mt-2 text-xs text-neutral-600">{renderMathText(explanation)}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
