"use client";

import { BlockMath } from "react-katex";
import Link from "next/link";

type RelatedLesson = {
  label: string;
  href: string;
};

type EquationBlockProps = {
  title: string;
  equation: string;
  explanation: string;
  variables: string[];
  assumptions: string[];
  usedIn?: string;
  relatedLessons?: RelatedLesson[];
};

export function EquationBlock({
  title,
  equation,
  explanation,
  variables,
  assumptions,
  usedIn,
  relatedLessons,
}: EquationBlockProps) {
  return (
    <section className="ui-card-major mb-10 p-6">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <div className="mb-2 rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
        <BlockMath math={equation} />
      </div>
      <p className="mb-2 text-[color:var(--color-muted)]">{explanation}</p>
      <div className="mb-2">
        <strong>Variables:</strong>
        <ul className="ml-4 list-disc list-inside">
          {variables.map((variable, index) => <li key={index}>{variable}</li>)}
        </ul>
      </div>
      <div className="mb-2">
        <strong>Assumptions & Limitations:</strong>
        <ul className="ml-4 list-disc list-inside">
          {assumptions.map((assumption, index) => <li key={index}>{assumption}</li>)}
        </ul>
      </div>
      {usedIn ? (
        <div className="mb-2">
          <strong>Used In:</strong> {usedIn}
        </div>
      ) : null}
      {relatedLessons && relatedLessons.length > 0 ? (
        <div>
          <strong>Related Lessons:</strong>
          <ul className="ml-4 list-disc list-inside">
            {relatedLessons.map((lesson, index) => (
              <li key={index}>
                <Link href={lesson.href} className="ui-link">
                  {lesson.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
} 