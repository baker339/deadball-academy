import Link from "next/link";

export default function PrerequisiteOverviewPage() {
  return (
    <div className="ui-container max-w-3xl py-16">
      <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">Prerequisite map (Algebra track exemplar)</h1>
      <p className="mt-3 text-sm text-[color:var(--color-muted)]">
        Open access: we do not enforce gates in software. This page summarizes a sensible quantitative path through the first track; adjust based on your
        background.
      </p>
      <ol className="mt-8 list-decimal space-y-4 pl-5 text-sm text-[color:var(--color-fg)]">
        <li>
          <strong>Arithmetic &amp; literacy:</strong> comfort with fractions, decimals, and reading box-score / Statcast-style fields.
        </li>
        <li>
          <strong>Algebra foundations:</strong> variables, equations, inequalities, rearrangement, and QA habits — start from the{" "}
          <Link href="/learn/alignment/algebra-unit-1" className="ui-focus ui-link">
            Unit 1 alignment pack
          </Link>{" "}
          or the lesson library.
        </li>
        <li>
          <strong>Geometry / trig / calculus tracks:</strong> follow the structured paths on the curriculum page when you need field geometry, periodic
          models, rates, or multivariable reasoning before physics or statistics-heavy units.
        </li>
        <li>
          <strong>Communication track:</strong> best after at least one technical track if you are building decision-facing memos.
        </li>
      </ol>
      <p className="mt-8 text-sm text-[color:var(--color-muted)]">
        <Link href="/learn/tracks" className="ui-focus ui-link font-semibold">
          Full multi-track curriculum overview
        </Link>
      </p>
    </div>
  );
}
