import Link from "next/link";

export type CmsDashboardTaskAccent = "primary" | "accent" | "neutral";

type Props = {
  href: string;
  stepLabel: string;
  title: string;
  description: string;
  accent?: CmsDashboardTaskAccent;
};

const accentBar: Record<CmsDashboardTaskAccent, string> = {
  primary: "border-l-[color:var(--color-primary)]",
  accent: "border-l-[color:var(--color-accent)]",
  neutral: "border-l-[color:var(--color-muted)]",
};

/**
 * Token-based dashboard tile for CMS overview. Keeps hierarchy without ad-hoc palette colors.
 */
export default function CmsDashboardTaskCard({ href, stepLabel, title, description, accent = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={`ui-focus ui-card-major block border-l-4 p-5 transition hover:shadow-md ${accentBar[accent]}`}
    >
      <p className="ui-meta-label">{stepLabel}</p>
      <p className="mt-2 text-base font-bold text-[color:var(--color-fg)]">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-muted)]">{description}</p>
    </Link>
  );
}
