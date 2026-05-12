import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: string;
  description: string;
  children?: ReactNode;
};

/**
 * Consistent page hero for CMS routes — uses semantic surface tokens (no full-bleed marketing gradients).
 */
export default function CmsStudioPageHeader({ kicker, title, description, children }: Props) {
  return (
    <header className="ui-card-major overflow-hidden border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 max-w-3xl">
          <p className="ui-meta-label">{kicker}</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--color-fg)]">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{description}</p>
        </div>
        {children ? <div className="flex shrink-0 flex-wrap items-center gap-2">{children}</div> : null}
      </div>
    </header>
  );
}
