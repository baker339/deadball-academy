"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** @deprecated Use `/cms/setup` — kept for bookmarks and old links. */
export default function CmsCurriculumRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/cms/setup");
  }, [router]);
  return (
    <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-center text-sm text-[color:var(--color-muted)]">
      Redirecting to curriculum setup…
    </div>
  );
}
