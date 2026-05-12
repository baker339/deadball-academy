"use client";

import { useEffect, useMemo, useState } from "react";
import { renderMathText } from "../lib/mathText";
import type { LessonAssessmentItem } from "../content/deepLessonLibrary";

type Props = {
  storageKey: string;
  items: LessonAssessmentItem[];
  onPassChange?: (passed: boolean) => void;
};

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function isExactCorrect(item: LessonAssessmentItem, userAnswer: string): boolean {
  const answer = normalize(userAnswer);
  const accepted = [item.correctAnswer, ...(item.acceptedAnswers ?? [])].map(normalize);
  if (accepted.includes(answer)) return true;

  const numericExpected = Number(item.correctAnswer);
  const numericUser = Number(userAnswer);
  if (!Number.isNaN(numericExpected) && !Number.isNaN(numericUser)) {
    return Math.abs(numericExpected - numericUser) < 1e-6;
  }
  return false;
}

export default function LessonAssessmentPanel({ storageKey, items, onPassChange }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  const score = useMemo(() => {
    let correct = 0;
    for (const item of items) {
      const value = answers[item.id] ?? "";
      const isCorrect =
        item.type === "mcq"
          ? normalize(value) === normalize(item.correctAnswer)
          : isExactCorrect(item, value);
      if (isCorrect) correct += 1;
    }
    return { correct, total: items.length };
  }, [answers, items]);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "passed") {
      setPassed(true);
      setSubmitted(true);
      onPassChange?.(true);
    }
  }, [onPassChange, storageKey]);

  const itemResult = (item: LessonAssessmentItem) => {
    const value = answers[item.id] ?? "";
    if (!value) return "empty";
    const isCorrect =
      item.type === "mcq"
        ? normalize(value) === normalize(item.correctAnswer)
        : isExactCorrect(item, value);
    return isCorrect ? "correct" : "incorrect";
  };

  const onSubmit = () => {
    setSubmitted(true);
    setAttemptCount((value) => value + 1);
    const didPass = score.correct === score.total;
    setPassed(didPass);
    onPassChange?.(didPass);
    localStorage.setItem(storageKey, didPass ? "passed" : "failed");
  };

  return (
    <section className="ui-surface mt-10 p-4">
      <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Final Mastery Checkpoint</h2>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        This is the only graded checkpoint in the lesson. Complete it after concept and practice work to unlock lesson completion.
      </p>

      <div className="mt-4 space-y-4">
        {items.map((item, idx) => (
          <article key={item.id} className="ui-surface-subtle p-4 transition-all">
            <p className="text-sm font-semibold text-[color:var(--color-fg)]">
              Question {idx + 1}
            </p>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">{renderMathText(item.prompt)}</p>

            {item.type === "mcq" ? (
              <div className="mt-3 space-y-2">
                {(item.options ?? []).map((opt) => (
                  <label key={opt} className="flex cursor-pointer items-start gap-2 text-sm text-[color:var(--color-muted)]">
                    <input
                      type="radio"
                      name={item.id}
                      value={opt}
                      checked={(answers[item.id] ?? "") === opt}
                      onChange={(event) => setAnswers((prev) => ({ ...prev, [item.id]: event.target.value }))}
                    />
                    <span>{renderMathText(opt)}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input
                className="ui-focus mt-3 w-full rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-2 text-sm text-[color:var(--color-fg)]"
                placeholder="Enter your answer"
                value={answers[item.id] ?? ""}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [item.id]: event.target.value }))}
              />
            )}

            {submitted || answers[item.id] ? (
              <div className="mt-2">
                <p
                  className={`text-xs font-semibold ${
                    itemResult(item) === "correct"
                      ? "text-green-700"
                      : itemResult(item) === "incorrect"
                        ? "text-amber-700"
                        : "text-[color:var(--color-muted)]"
                  }`}
                >
                  {itemResult(item) === "correct"
                    ? "Correct"
                    : itemResult(item) === "incorrect"
                      ? "Not yet"
                      : "Enter an answer to check"}
                </p>
                {(submitted || itemResult(item) === "incorrect") && (
                  <p className="mt-1 text-xs text-[color:var(--color-muted)]">{renderMathText(item.explanation)}</p>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onSubmit}
          className="ui-focus ui-btn-primary"
        >
          Submit mastery check
        </button>
        {submitted ? (
          <p
            className={`text-sm font-semibold transition-all ${passed ? "text-green-700" : "text-amber-700"}`}
            role="status"
            aria-live="polite"
          >
            Score: {score.correct}/{score.total} {passed ? "(passed - lesson unlocked)" : "(keep trying)"} · Attempt {attemptCount}
          </p>
        ) : null}
      </div>
      {passed ? (
        <p className="mt-3 rounded bg-green-50 px-3 py-2 text-sm font-semibold text-green-800 animate-pulse">
          Nice work. This lesson is now unlocked for completion.
        </p>
      ) : null}
    </section>
  );
}
