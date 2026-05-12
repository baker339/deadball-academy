import Link from "next/link";

const dimensions = [
  { name: "Content accuracy", scale: "Factual & mathematical correctness; baseball context plausibility." },
  { name: "Outcome alignment", scale: "Lesson objectives ↔ activities ↔ checkpoint items trace clearly." },
  { name: "Accessibility & clarity", scale: "Reading level, structure, math rendering, figure alt text." },
  { name: "Assessment quality", scale: "Items discriminate understanding; rubrics usable for human grading." },
];

export default function SmePilotReviewPage() {
  return (
    <div className="ui-container max-w-3xl py-16">
      <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">External SME pilot review</h1>
      <p className="mt-3 text-sm text-[color:var(--color-muted)]">
        Template for paid subject-matter expert review. Publish aggregate results to backers or partners; individual reviews remain confidential unless
        contributors agree otherwise.
      </p>

      <section className="ui-surface-subtle mt-8 p-5">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Rubric dimensions (1–5 per dimension)</h2>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
          {dimensions.map((d) => (
            <li key={d.name}>
              <strong>{d.name}:</strong> {d.scale}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Pilot sample (freeze list)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>Algebra Unit 1 — all five lessons (alignment pack)</li>
          <li>One Statcast / metric-literacy lesson (data lineage focus)</li>
          <li>One physics or calculus application lesson (instructor discretion)</li>
          <li>Remaining slots TBD from versioned lesson keys at review kickoff</li>
        </ul>
      </section>

      <section className="mt-8 rounded border border-dashed border-[color:var(--color-border)] p-5">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Published summary (placeholder)</h2>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Mean scores and narrative synthesis will appear here after the first funded review round. Until then, treat this page as the public commitment to
          transparent QA rather than a marketing claim of completed external validation.
        </p>
      </section>

      <p className="mt-8 text-sm">
        <Link href="/learn/alignment/algebra-unit-1" className="ui-focus ui-link font-semibold">
          Algebra Unit 1 alignment pack
        </Link>
      </p>
    </div>
  );
}
