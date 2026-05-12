import Link from "next/link";
import { siteBrand } from "../../config/siteBrand";

const funnelMetrics = [
  { stage: "Visitor -> Signup", target: "8-12%" },
  { stage: "Signup -> First Lesson Completed", target: "55%+" },
  { stage: "Signup -> Weekly Active Learner", target: "40%+" },
  { stage: "90-Day Retention", target: "45%+" },
];

export default function ForStudentsPage() {
  return (
    <div className="ui-container max-w-5xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Students Program</h1>
      <p className="mt-3 text-lg text-[color:var(--color-muted)]">
        {siteBrand.displayName} is a structured STEM analytics pathway for students who want to learn baseball data science through real Statcast workflows.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Card title="Free mini-course">
          Intro sequence covering launch angle, drag, and expected distance models with guided walkthroughs.
        </Card>
        <Card title="Portfolio projects">
          Build reproducible analyses and publish capstone-ready writeups using platform datasets and templates.
        </Card>
        <Card title="Career readiness">
          Learn applied sports analytics communication to support internships and research applications.
        </Card>
      </section>

      <section className="ui-surface mt-12 p-6">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Growth And Marketing Plan</h2>
        <ul className="mt-4 space-y-2 text-[color:var(--color-muted)]">
          <li>- SEO content around baseball analytics concepts, Statcast interpretation, and model explainers.</li>
          <li>- Lead magnets: free dataset packs, mini-course, and capstone starter notebook bundle.</li>
          <li>- Lifecycle campaigns: onboarding nudges, milestone celebrations, and re-engagement journeys.</li>
          <li>- Creator and campus ambassador partnerships for distribution into baseball analytics communities.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Funnel Targets</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {funnelMetrics.map((metric) => (
            <div key={metric.stage} className="ui-surface-subtle p-4">
              <p className="text-sm text-[color:var(--color-muted)]">{metric.stage}</p>
              <p className="text-xl font-bold text-[color:var(--color-fg)]">{metric.target}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/login" className="ui-focus ui-btn-primary text-sm">
          Start Free
        </Link>
        <Link href="/pricing" className="ui-focus ui-btn-secondary text-sm">
          Free Access Details
        </Link>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="ui-surface p-5">
      <h3 className="text-lg font-bold text-[color:var(--color-fg)]">{title}</h3>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">{children}</p>
    </div>
  );
}
