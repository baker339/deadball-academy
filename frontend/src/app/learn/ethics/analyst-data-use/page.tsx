import Link from "next/link";

const rubric = [
  {
    criterion: "Evidence & model spec",
    excellent: "Names data source, target, features, and validation design; no hand-waving.",
    proficient: "Identifies major spec elements; minor gaps only.",
    developing: "Vague on leakage or comparison baseline.",
    needsSupport: "Headline disconnected from stated model.",
  },
  {
    criterion: "Causal discipline",
    excellent: "Separates association from causation; states what would be needed for causal claim.",
    proficient: "Flags overclaim; suggests safer language.",
    developing: "Mixed causal language without correction.",
    needsSupport: "Treats correlation as proof.",
  },
  {
    criterion: "Professional communication",
    excellent: "Clear recommendation scope + uncertainty + next diagnostic step.",
    proficient: "Readable with bounded scope.",
    developing: "Jargon-heavy or unclear actions.",
    needsSupport: "Misleading certainty or no action.",
  },
];

export default function AnalystDataEthicsPage() {
  return (
    <div className="ui-container max-w-3xl py-16">
      <p className="ui-meta-label">Micro-module</p>
      <h1 className="mt-2 text-3xl font-bold text-[color:var(--color-fg)]">Analyst ethics &amp; data use</h1>
      <p className="mt-3 text-sm text-[color:var(--color-muted)]">
        Educational scenarios for judgment practice. Not legal advice. Always follow data-provider terms, organizational policies, and applicable law when
        working with real feeds (e.g., Statcast-derived products, licensed databases).
      </p>

      <section className="mt-10 space-y-6">
        <article className="ui-surface-subtle p-5">
          <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Case A — Park adjustment headline</h2>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            A blog headline reads: &quot;New park factor proves Player X is actually 40% better than MVP candidates.&quot; The body cites a single-season
            expected-stat gap without showing the underlying model, sample size, or uncertainty. Your staff group chat wants to forward it to coaches tonight.
          </p>
          <p className="mt-3 text-sm font-semibold text-[color:var(--color-fg)]">Reflection prompt</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            List three questions you would ask before treating the headline as decision-grade. Rewrite the headline in bounded, audit-friendly language.
          </p>
        </article>

        <article className="ui-surface-subtle p-5">
          <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Case B — Leaky &quot;predict HR&quot; notebook</h2>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            A notebook predicts home-run probability with very high accuracy. On review, the feature set includes post-contact outcomes that are only known
            after the ball is struck. A junior analyst wants to ship the leaderboard to player development.
          </p>
          <p className="mt-3 text-sm font-semibold text-[color:var(--color-fg)]">Reflection prompt</p>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            Explain the leakage in plain language. Describe the correct time-ordering for features vs. label. Propose one QA gate that would have caught this
            before publication.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Short rubric (self- or peer-review)</h2>
        <div className="ui-surface mt-3 overflow-x-auto">
          <table className="min-w-full text-left text-xs text-[color:var(--color-muted)]">
            <thead>
              <tr className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)]">
                <th className="p-2 font-semibold">Criterion</th>
                <th className="p-2 font-semibold">Excellent</th>
                <th className="p-2 font-semibold">Proficient</th>
                <th className="p-2 font-semibold">Developing</th>
                <th className="p-2 font-semibold">Needs support</th>
              </tr>
            </thead>
            <tbody>
              {rubric.map((row) => (
                <tr key={row.criterion} className="border-b border-[color:var(--color-border)] align-top">
                  <td className="p-2 font-medium">{row.criterion}</td>
                  <td className="p-2">{row.excellent}</td>
                  <td className="p-2">{row.proficient}</td>
                  <td className="p-2">{row.developing}</td>
                  <td className="p-2">{row.needsSupport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-10 text-sm text-[color:var(--color-muted)]">
        <Link href="/learn/library" className="ui-focus ui-link font-semibold">
          Back to lesson library
        </Link>
      </p>
    </div>
  );
}
