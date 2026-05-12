import LibraryUnitClient from "./LibraryUnitClient";

type PageProps = {
  params: Promise<{ trackSlug: string; unitSlug: string }>;
};

export default async function LibraryUnitPage({ params }: PageProps) {
  const resolved = await params;
  return <LibraryUnitClient trackSlug={resolved.trackSlug} unitSlug={resolved.unitSlug} />;
}
