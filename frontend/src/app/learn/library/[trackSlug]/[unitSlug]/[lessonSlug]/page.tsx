import Link from "next/link";
import LessonOrderGate from "../../../../../../components/LessonOrderGate";
import InteractiveLessonExperience from "../../../../../../components/InteractiveLessonExperience";
import { findLesson } from "../../../../../../content/deepLessonLibrary";
import { lessonHeaderDisplayTitle } from "../../../../../../content/lessonTitleDisambiguation";
import type { LessonDocument } from "../../../../../../content/lessonTypes";

type PageProps = {
  params: Promise<{ trackSlug: string; unitSlug: string; lessonSlug: string }>;
};

const breadcrumbLinkClass = "ui-link-muted";

export default async function DeepLessonPage({ params }: PageProps) {
  const resolved = await params;
  const match = findLesson(resolved.trackSlug, resolved.unitSlug, resolved.lessonSlug);

  if (!match) {
    return (
      <div className="ui-container max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">Lesson not found</h1>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          This URL does not match a published lesson. Check the track, unit, and lesson slug.
        </p>
        <Link href="/learn/library" className="ui-focus ui-link mt-4 inline-block">
          Return to lesson library
        </Link>
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  let document: LessonDocument | null = null;
  try {
    const response = await fetch(
      `${baseUrl}/learning/lessons/${resolved.trackSlug}/${resolved.unitSlug}/${resolved.lessonSlug}`,
      { cache: "no-store" }
    );
    if (response.ok) {
      document = (await response.json()) as LessonDocument;
    }
  } catch {
    document = null;
  }
  if (!document) {
    return (
      <div className="ui-container max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">Published lesson unavailable</h1>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          This lesson has no published DB payload yet. Ask an editor to publish the latest revision.
        </p>
        <Link href="/learn/library" className="ui-focus ui-link mt-4 inline-block">
          Return to lesson library
        </Link>
      </div>
    );
  }
  const displayTitle = lessonHeaderDisplayTitle(resolved.trackSlug, document.title);
  return (
    <div className="py-8">
      <div className="ui-container ui-lesson-max">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[color:var(--color-muted)]">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/learn/library" className={breadcrumbLinkClass}>
                Lesson library
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li>
              <Link href={`/learn/library/${resolved.trackSlug}`} className={breadcrumbLinkClass}>
                {document.trackTitle}
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li>
              <Link href={`/learn/library/${resolved.trackSlug}/${resolved.unitSlug}`} className={breadcrumbLinkClass}>
                {document.unitTitle}
              </Link>
            </li>
            <li className="text-[color:var(--color-muted)] opacity-70" aria-hidden="true">
              /
            </li>
            <li className="font-medium text-[color:var(--color-fg)] sm:max-w-[32rem] truncate" title={displayTitle} aria-current="page">
              {displayTitle}
            </li>
          </ol>
          <p className="mt-2 text-xs text-[color:var(--color-muted)]">
            <Link href="/learn/library" className={breadcrumbLinkClass}>
              Back to lesson library
            </Link>
          </p>
        </nav>
      </div>
      <LessonOrderGate trackSlug={resolved.trackSlug} unitSlug={resolved.unitSlug} lessonSlug={resolved.lessonSlug}>
        <InteractiveLessonExperience
          document={document}
          trackSlug={resolved.trackSlug}
          unitSlug={resolved.unitSlug}
          lessonSlug={resolved.lessonSlug}
        />
      </LessonOrderGate>
    </div>
  );
}
