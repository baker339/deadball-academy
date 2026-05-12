"use client";

import { renderMathText } from "../lib/mathText";
import type { LessonAssessmentItem } from "../content/deepLessonLibrary";

type Props = {
  item: LessonAssessmentItem;
  value: string;
  submitted: boolean;
  onChange: (value: string) => void;
};

export default function LessonCheckpointCard({ item, value, submitted, onChange }: Props) {
  return (
    <article className="rounded border border-blue-200 bg-blue-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-800">Checkpoint</p>
      <p className="mt-1 text-sm text-blue-900">{renderMathText(item.prompt)}</p>

      {item.type === "mcq" ? (
        <div className="mt-3 space-y-2">
          {(item.options ?? []).map((opt) => (
            <label key={opt} className="flex items-start gap-2 text-sm text-blue-900">
              <input
                type="radio"
                name={item.id}
                value={opt}
                checked={value === opt}
                onChange={(event) => onChange(event.target.value)}
              />
              <span>{renderMathText(opt)}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          className="mt-3 w-full rounded border border-blue-300 bg-[color:var(--color-surface)] px-3 py-2 text-sm"
          placeholder="Type your answer"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}

      {submitted ? <p className="mt-2 text-xs text-blue-800">{renderMathText(item.explanation)}</p> : null}
    </article>
  );
}
