import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrackLessonProgressPill from "../../../../components/TrackLessonProgressPill";
import { siteBrand } from "../../../../config/siteBrand";
import { deepCourseBlueprint } from "../../../../content/deepLessonLibrary";
import { curriculumTracks } from "../../../../content/curriculum";

type PageProps = {
  params: Promise<{ trackSlug: string }>;
};

const breadcrumbLinkClass = "ui-link-muted";

const siteOrigin = () => (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trackSlug } = await params;
  const track = deepCourseBlueprint.find((entry) => entry.slug === trackSlug);
  if (!track) {
    return { title: "Track" };
  }

  const curriculumTrack = curriculumTracks.find((entry) => entry.slug === trackSlug);
  const canonicalPath = `/learn/library/${trackSlug}`;
  const isBookTrack = trackSlug === "keeping-the-book-in-baseball";
  const isFinanceTrack = trackSlug === "intro-to-economics-and-accounting-for-baseball-finance";

  const description =
    isBookTrack ?
      "Study baseball scorebook symbols, pitch-by-pitch logging, defensive grid notation, substitutions and courtesy runners, and a printable in-game checklist—in unit order with lesson checkpoints."
    : isFinanceTrack ?
      "Introductory economics and accounting for MLB finance: opportunity cost and payroll buckets, competitive balance tax mechanics, AAV versus cash, deferrals, biweekly and semi-monthly payroll cadence, affiliate and staff liquidity, and international signing pools—illustrative exercises with explicit assumptions."
    : (curriculumTrack?.outcomes[0] ??
      `Progress through ${track.title} in the Deadball lesson library: sequenced units, practice prompts, and mastery checkpoints where provided.`);

  const ogTitle =
    isBookTrack ? `${track.title} · Baseball scorekeeping track`
    : isFinanceTrack ? `${track.title} · MLB finance and accounting`
    : `${track.title} · ${siteBrand.displayName} library`;

  return {
    title: track.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonicalPath,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    ...(isBookTrack ?
      {
        keywords: [
          "baseball scorebook symbols",
          "pitch-by-pitch logging",
          "defensive position grid",
          "courtesy runner",
          "printable scorekeeping checklist",
        ],
      }
    : isFinanceTrack ?
      {
        keywords: [
          "MLB luxury tax",
          "competitive balance tax",
          "deferred salary baseball",
          "international signing bonus pool",
          "minor league payroll",
          "biweekly payroll",
        ],
      }
    : {}),
  };
}

export default async function LibraryTrackPage({ params }: PageProps) {
  const { trackSlug } = await params;
  const track = deepCourseBlueprint.find((entry) => entry.slug === trackSlug);
  if (!track) notFound();

  const curriculumTrack = curriculumTracks.find((entry) => entry.slug === trackSlug);
  const totalLessons = track.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
  const firstPhase = curriculumTrack?.phases.find((phase) => track.units.some((unit) => unit.slug === phase.slug));
  const expectations = firstPhase?.entryCriteria.slice(0, 2) ?? [
    "Work through each unit in order and complete lesson checkpoint work when provided.",
    "Use each unit's practice and reflection tasks to solidify transfer before moving on.",
  ];
  const outcomes = curriculumTrack?.outcomes.slice(0, 2) ?? [
    "Develop complete track-level mastery through sequenced unit study.",
    "Apply ideas in baseball-focused analytic and communication contexts.",
  ];

  const origin = siteOrigin();
  const canonicalUrl = `${origin}/learn/library/${trackSlug}`;
  const isBookTrack = trackSlug === "keeping-the-book-in-baseball";
  const isFinanceTrack = trackSlug === "intro-to-economics-and-accounting-for-baseball-finance";

  const jsonLd =
    isBookTrack ?
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: track.title,
        description:
          "Scorekeeping essentials: scorebook symbols, pitch-by-pitch logging, defensive grid, substitutions and courtesy runners, printable checklist.",
        url: canonicalUrl,
        provider: {
          "@type": "Organization",
          name: siteBrand.displayName,
          url: origin,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          url: canonicalUrl,
          courseMode: "online",
        },
        offers: {
          "@type": "Offer",
          category: "Educational",
          url: canonicalUrl,
        },
      }
    : isFinanceTrack ?
      {
        "@context": "https://schema.org",
        "@type": "Course",
        name: track.title,
        description:
          "Economics and accounting for baseball finance: luxury tax and CBT, AAV and deferrals, payroll cadence, affiliate and staff costs, international signing pools.",
        url: canonicalUrl,
        provider: {
          "@type": "Organization",
          name: siteBrand.displayName,
          url: origin,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          url: canonicalUrl,
          courseMode: "online",
        },
        offers: {
          "@type": "Offer",
          category: "Educational",
          url: canonicalUrl,
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: track.title,
        description: outcomes[0] ?? track.title,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: siteBrand.displayName,
          url: origin,
        },
      };

  return (
    <div className="ui-container max-w-6xl py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[color:var(--color-muted)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/learn/library" className={breadcrumbLinkClass}>
              Lesson library
            </Link>
          </li>
          <li className="text-[color:var(--color-muted)] opacity-60" aria-hidden="true">
            /
          </li>
          <li className="font-medium text-[color:var(--color-fg)]" aria-current="page">
            {track.title}
          </li>
        </ol>
      </nav>

      <section className="ui-card-major p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="ui-meta-label tracking-[0.14em]">Track overview</p>
            <h1 className="mt-2 text-4xl font-bold text-[color:var(--color-fg)]">{track.title}</h1>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {track.units.length} units • {totalLessons} lessons
            </p>
          </div>
          <TrackLessonProgressPill trackSlug={trackSlug} />
        </div>
        <p className="mt-3 max-w-4xl text-[color:var(--color-muted)]">
          {curriculumTrack?.outcomes[0] ??
            "Progress unit-by-unit through this track, completing each lesson in sequence for full coverage."}
        </p>
        {isBookTrack ?
          <p className="mt-3 max-w-4xl text-sm text-[color:var(--color-muted)]">
            Companion guide with the same five lesson titles:{" "}
            <Link href="/learn/guides/keeping-the-book-in-baseball" className="ui-focus ui-link-muted">
              Keeping the book — scorekeeping guide
            </Link>
            .
          </p>
        : null}
        <dl className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">What to expect</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">{expectations[0]}</dd>
          </div>
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">Time commitment</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
              {firstPhase?.estimatedTimeHint ?? "Self-paced. Plan consistent weekly study blocks for steady completion."}
            </dd>
          </div>
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">Prerequisites</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">
              {curriculumTrack?.prerequisites[0] ?? "Review the prerequisites listed for this track before you begin."}
            </dd>
          </div>
          <div>
            <dt className="ui-meta-label tracking-[0.1em]">Learner outcomes</dt>
            <dd className="mt-1 text-sm text-[color:var(--color-muted)]">{outcomes[1]}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-[color:var(--color-fg)]">Before you open a unit</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[color:var(--color-muted)]">
          <li>{expectations[0]}</li>
          <li>{expectations[1] ?? "Expect lessons to build directly on prior unit work."}</li>
          <li>{curriculumTrack?.assessments[0] ?? "Capture notes as you go so you can show applied mastery later."}</li>
        </ul>
      </section>

      <div className="mt-8 space-y-4">
        {track.units.map((unit, index) => {
          const phase = curriculumTrack?.phases.find((entry) => entry.slug === unit.slug);
          return (
            <section key={unit.slug} className="ui-card-major p-6">
              <h2 className="text-xl font-semibold">
                <Link href={`/learn/library/${track.slug}/${unit.slug}`} className="ui-focus ui-link">
                  Unit {index + 1}: {unit.title}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">{unit.lessons.length} lessons</p>
              <p className="mt-3 text-sm text-[color:var(--color-muted)]">
                {phase?.entryCriteria[0] ?? "Complete all lessons in this unit in order to advance."}
              </p>
              <p className="mt-1 text-xs text-[color:var(--color-muted)] opacity-90">
                {phase?.estimatedTimeHint ?? "Self-paced; complete in focused sessions and review prior lessons as needed."}
              </p>
              <div className="mt-4">
                <Link href={`/learn/library/${track.slug}/${unit.slug}`} className="ui-focus ui-btn-primary">
                  Open unit
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
