import type { Metadata } from "next";
import Link from "next/link";
import { siteBrand } from "../../../config/siteBrand";

export const metadata: Metadata = {
  title: "Brand guide",
  description: `Design tokens and writing rules for ${siteBrand.displayName} content and CMS chrome.`,
};

const TOKEN_SWATCHES: Array<{ name: string; varName: string }> = [
  { name: "Canvas (bg)", varName: "--color-bg" },
  { name: "Foreground", varName: "--color-fg" },
  { name: "Muted", varName: "--color-muted" },
  { name: "Border", varName: "--color-border" },
  { name: "Surface", varName: "--color-surface" },
  { name: "Surface subtle", varName: "--color-surface-subtle" },
  { name: "Surface elevated", varName: "--color-surface-elevated" },
  { name: "Primary (buttons)", varName: "--color-primary" },
  { name: "Accent", varName: "--color-accent" },
  { name: "Accent muted", varName: "--color-accent-muted" },
  { name: "Ring (focus)", varName: "--color-ring" },
  { name: "Danger", varName: "--color-danger" },
  { name: "Reading panel (bg)", varName: "--color-reading-bg" },
  { name: "Reading text", varName: "--color-reading-fg" },
  { name: "Reading muted", varName: "--color-reading-muted" },
  { name: "Reading border", varName: "--color-reading-border" },
];

function TokenSwatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="ui-surface-subtle overflow-hidden rounded-md border border-[color:var(--color-border)]">
      <div className="h-14 w-full border-b border-[color:var(--color-border)]" style={{ backgroundColor: `var(${varName})` }} />
      <div className="p-2">
        <p className="text-xs font-semibold text-[color:var(--color-fg)]">{name}</p>
        <p className="font-mono text-[10px] text-[color:var(--color-muted)]">{varName}</p>
      </div>
    </div>
  );
}

export default function CmsBrandGuidePage() {
  return (
    <div className="ui-card-major space-y-8 p-6">
      <header className="space-y-2">
        <p className="ui-meta-label">CMS</p>
        <h1 className="text-2xl font-bold text-[color:var(--color-fg)]">Brand guide</h1>
        <p className="max-w-2xl text-sm text-[color:var(--color-muted)]">
          Use these rules for marketing chrome, CMS studio UI, and lesson framing. Pedagogical lesson body may use domain language
          per curriculum needs; see naming scope in the brand brief at repo root.
        </p>
        <p className="text-sm text-[color:var(--color-muted)]">
          <strong className="text-[color:var(--color-fg)]">Full brief (source of truth):</strong>{" "}
          <code className="rounded bg-[color:var(--color-surface-subtle)] px-1.5 py-0.5 text-xs">docs/brand-brief.md</code> at repo root.
        </p>
        <p className="text-sm text-[color:var(--color-muted)]">
          <strong className="text-[color:var(--color-fg)]">Lesson editor rubric:</strong>{" "}
          <code className="rounded bg-[color:var(--color-surface-subtle)] px-1.5 py-0.5 text-xs">docs/lesson-editor-rubric.md</code> — Baseball–STEM criteria; mirrored in{" "}
          <code className="rounded bg-[color:var(--color-surface-subtle)] px-1.5 py-0.5 text-xs">lessonEditorRubric.ts</code> and the CMS lesson editor checklist.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[color:var(--color-fg)]">Brand voice (baseball + education)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>
            <strong className="text-[color:var(--color-fg)]">Baseball:</strong> domain voice and examples (measurement, honest limits)—not decorative poster chrome. No team marks or literal pinstripes.
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Academy:</strong> learning-product clarity: structured paths, resume/continue, dashboard—and{" "}
            <code className="text-xs">.ui-lesson-reading</code> for long lessons (see reading tokens below).
          </li>
        </ul>
        <p className="text-sm text-[color:var(--color-muted)]">
          <strong className="text-[color:var(--color-fg)]">Mission:</strong> {siteBrand.brandMission}
        </p>
        <p className="text-sm text-[color:var(--color-muted)]">
          <strong className="text-[color:var(--color-fg)]">Community:</strong> {siteBrand.brandCommunityLine}
        </p>
        <p className="text-sm text-[color:var(--color-muted)]">
          <strong className="text-[color:var(--color-fg)]">Footer trust line:</strong> {siteBrand.footerTrustLine}
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>{siteBrand.homeEthosBulletHeritage}</li>
          <li>{siteBrand.homeEthosBulletCraft}</li>
          <li>{siteBrand.homeEthosBulletCommunity}</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[color:var(--color-fg)]">Product naming (chrome)</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>
            <strong className="text-[color:var(--color-fg)]">Display name:</strong> {siteBrand.displayName}
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Lesson library hub title:</strong> {siteBrand.lessonLibraryHubTitle}
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Footer credit:</strong> {siteBrand.footerShortName}
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Hero tagline:</strong> {siteBrand.heroTagline}
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Library hub subtitle:</strong> {siteBrand.libraryHubSubtitle}
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Supporting copy (reference):</strong> {siteBrand.learnHubSupporting}
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[color:var(--color-fg)]">Do / don&apos;t (chrome)</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>
            <strong className="text-[color:var(--color-fg)]">Do</strong> use shared classes: <code className="text-xs">.ui-surface</code>,{" "}
            <code className="text-xs">.ui-card-major</code>, <code className="text-xs">.ui-btn-primary</code>, <code className="text-xs">.ui-link</code>,{" "}
            <code className="text-xs">.ui-meta-label</code>.
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Do</strong> use semantic text colors: <code className="text-xs">text-[color:var(--color-fg)]</code>{" "}
            / <code className="text-xs">text-[color:var(--color-muted)]</code>.
          </li>
          <li>
            <strong className="text-[color:var(--color-fg)]">Don&apos;t</strong> add one-off <code className="text-xs">bg-white</code>,{" "}
            <code className="text-xs">text-black</code>, or raw gray borders in CMS shells—they fight the semantic token system.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[color:var(--color-fg)]">Live token swatches</h2>
        <p className="text-sm text-[color:var(--color-muted)]">
          Values reflect the single light learning shell (neutral canvas, navy primary, warm accent).
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOKEN_SWATCHES.map((row) => (
            <TokenSwatch key={row.varName} name={row.name} varName={row.varName} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[color:var(--color-fg)]">Lesson content</h2>
        <p className="text-sm text-[color:var(--color-muted)]">
          Prefer lesson callout and prose styles from global CSS (<code className="text-xs">.lesson-prose</code>,{" "}
          <code className="text-xs">.lesson-callout</code>). Avoid inline hex colors or ad-hoc font stacks in authored HTML.
        </p>
      </section>

      <p className="text-sm">
        <Link href="/learn/library" className="ui-focus ui-link">
          Open lesson library (learner view)
        </Link>
      </p>
    </div>
  );
}
