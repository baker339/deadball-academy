import type { Metadata } from "next";
import Link from "next/link";
import { siteBrand } from "../../../../config/siteBrand";
import { deepCourseBlueprint } from "../../../../content/deepLessonLibrary";

const TRACK_SLUG = "keeping-the-book-in-baseball";
const UNIT_SLUG = "scorekeeping-essentials";

const siteOrigin = () => (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "How to keep the book in baseball",
  description:
    "Learn baseball scorebook symbols, pitch-by-pitch logging, defensive grid notation, substitutions and courtesy runners, and use a printable in-game checklist—with lesson links into the Deadball library.",
  alternates: { canonical: "/learn/guides/keeping-the-book-in-baseball" },
  openGraph: {
    title: "How to keep the book in baseball · Scorekeeping essentials",
    description:
      "Scorebook symbols, pitch-by-pitch strings, defensive grids, substitution strips, and a printable checklist—aligned with Deadball Academy’s scorekeeping track.",
    url: "/learn/guides/keeping-the-book-in-baseball",
    type: "article",
  },
};

export default function KeepingTheBookGuidePage() {
  const track = deepCourseBlueprint.find((t) => t.slug === TRACK_SLUG);
  const unit = track?.units.find((u) => u.slug === UNIT_SLUG);
  const origin = siteOrigin();
  const desc =
    "Learn baseball scorebook symbols, pitch-by-pitch logging, defensive grid notation, substitutions and courtesy runners, and use a printable in-game checklist—with lesson links into the Deadball library.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Keeping the book in baseball — scorekeeping essentials",
    description: desc,
    url: `${origin}/learn/guides/keeping-the-book-in-baseball`,
    provider: { "@type": "Organization", name: siteBrand.displayName, url: origin },
    hasCourseInstance: {
      "@type": "CourseInstance",
      url: `${origin}/learn/library/${TRACK_SLUG}`,
      courseMode: "online",
    },
  };

  return (
    <div className="ui-container max-w-3xl py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[color:var(--color-muted)]">
        <Link href="/learn/library" className="ui-link-muted">
          Lesson library
        </Link>
        <span className="mx-2 opacity-60">/</span>
        <span className="font-medium text-[color:var(--color-fg)]">Keeping the book</span>
      </nav>
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">How to keep the book in baseball</h1>
      <p className="mt-4 text-[color:var(--color-muted)]">
        This guide points into the <strong>{track?.title ?? "scorekeeping"}</strong> track: five short lessons on symbols, pitch-by-pitch logging, the defensive grid, substitutions and courtesy runners, and a
        printable checklist. Open the{" "}
        <Link href={`/learn/library/${TRACK_SLUG}`} className="ui-focus ui-link">
          track hub
        </Link>{" "}
        for progress and context.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-[color:var(--color-fg)]">Lessons</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-6 text-[color:var(--color-muted)]">
        {(unit?.lessons ?? []).map((lesson) => (
          <li key={lesson.slug}>
            <Link href={`/learn/library/${TRACK_SLUG}/${UNIT_SLUG}/${lesson.slug}`} className="ui-focus ui-link">
              {lesson.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
