import Link from "next/link";

const UNIT_PATH =
  "/learn/library/algebra-foundations-for-baseball-analytics/linear-expressions-equations-and-constraints";

const rows = [
  {
    lesson: "Variables, Units, And Baseball Quantities",
    slug: "variables-units-and-baseball-quantities",
    measurableOutcome:
      "Learner defines symbols with units, rejects incompatible operations, and translates a dugout question into a valid expression.",
    summative: "Mini symbol dictionary + coach sentence + valid/invalid operation pair",
    href: `${UNIT_PATH}/variables-units-and-baseball-quantities`,
  },
  {
    lesson: "Solving One-Step And Multi-Step Equations Reliably",
    slug: "solving-one-step-and-multi-step-equations-reliably",
    measurableOutcome:
      "Learner solves a linear baseball constraint with an annotated inverse-operation path and verifies by substitution.",
    summative: "Equation solve with audit trail (multi-line + verification + plausibility sentence)",
    href: `${UNIT_PATH}/solving-one-step-and-multi-step-equations-reliably`,
  },
  {
    lesson: "Inequalities For Performance Threshold Questions",
    slug: "inequalities-for-performance-threshold-questions",
    measurableOutcome:
      "Learner maps policy language to inequalities, solves correctly with direction discipline, and names a feasible interval.",
    summative: "Policy → inequality → interpretation brief",
    href: `${UNIT_PATH}/inequalities-for-performance-threshold-questions`,
  },
  {
    lesson: "Rearranging Formulas Used In Baseball Metrics",
    slug: "rearranging-formulas-used-in-baseball-metrics",
    measurableOutcome:
      "Learner rearranges two standard metric identities for planning variables and runs feasibility screening on numeric examples.",
    summative: "Two rearrangements with coach-use sentences + checks",
    href: `${UNIT_PATH}/rearranging-formulas-used-in-baseball-metrics`,
  },
  {
    lesson: "Algebra Error Checking And Sanity Bounds",
    slug: "algebra-error-checking-and-sanity-bounds",
    measurableOutcome:
      "Learner documents a QA path with explicit sanity checks, failure actions, and staff-ready communication for one workflow.",
    summative: "One-page QA memo (template + rubric + calibration anchors in lesson)",
    href: `${UNIT_PATH}/algebra-error-checking-and-sanity-bounds`,
  },
];

export default function AlgebraUnitOneAlignmentPage() {
  return (
    <div className="ui-container max-w-5xl py-16">
      <p className="ui-meta-label">Alignment pack</p>
      <h1 className="mt-2 text-4xl font-bold text-[color:var(--color-fg)]">Algebra Unit 1 — Linear Expressions, Equations, And Constraints</h1>
      <p className="mt-3 text-[color:var(--color-muted)]">
        Traceability draft for <strong>Product B</strong> (pathway with evidence): each lesson lists a measurable outcome, a summative artifact, and a
        link to the live lesson. Rubrics and draft workspace appear in each lesson&apos;s <strong>Wrap + Next Bridge</strong> step.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/learn/tracks" className="ui-focus ui-btn-secondary text-sm">
          Back to curriculum overview
        </Link>
        <Link href="/learn/library" className="ui-focus ui-btn-primary text-sm">
          Open lesson library
        </Link>
      </div>

      <div className="ui-surface mt-10 overflow-x-auto">
        <table className="min-w-full text-left text-sm text-[color:var(--color-muted)]">
          <thead>
            <tr className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)]">
              <th className="p-3 font-semibold">Lesson</th>
              <th className="p-3 font-semibold">Measurable outcome</th>
              <th className="p-3 font-semibold">Summative artifact</th>
              <th className="p-3 font-semibold">Lesson</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.slug} className="border-b border-[color:var(--color-border)] align-top">
                <td className="p-3 font-medium text-[color:var(--color-fg)]">{row.lesson}</td>
                <td className="p-3">{row.measurableOutcome}</td>
                <td className="p-3">{row.summative}</td>
                <td className="p-3">
                  <Link href={row.href} className="ui-focus ui-link font-semibold">
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="ui-surface-subtle mt-10 p-6">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Shared rubric (four criteria)</h2>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Baseball context; Units &amp; symbols; Reasoning &amp; checks; Staff-ready communication — see each lesson&apos;s summative panel for the full
          four-level descriptors used for self-review and instructor pilots.
        </p>
      </section>
    </div>
  );
}
