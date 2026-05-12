"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "../../../../../components/AuthProvider";
import { cmsCompleteness, cmsDiff, cmsPublish, cmsRollback, cmsReviewDecisions } from "../../../../../lib/cms";

export default function CmsLessonPublishPage() {
  const { token } = useAuth();
  const params = useParams<{ lessonId: string }>();
  const lessonId = Number(params.lessonId);
  const [completeness, setCompleteness] = useState<{ score: number; missing: string[]; pass: boolean } | null>(null);
  const [diff, setDiff] = useState<{ latest_revision_id: number | null; published_revision_id: number | null; summary: string[] } | null>(null);
  const [decisions, setDecisions] = useState<Array<{ decision: string; notes: string }>>([]);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const load = useCallback(async (activeToken: string) => {
    const [c, d, de] = await Promise.all([cmsCompleteness(activeToken, lessonId), cmsDiff(activeToken, lessonId), cmsReviewDecisions(activeToken, lessonId)]);
    setCompleteness(c);
    setDiff(d);
    setDecisions(de);
  }, [lessonId]);

  useEffect(() => {
    if (!token) return;
    load(token).catch((err) => setError(err instanceof Error ? err.message : "Failed to load publish state"));
  }, [token, load]);

  const latestDecision = decisions[0]?.decision ?? "in_review";
  const ready = Boolean(completeness?.pass) && (latestDecision === "approved" || latestDecision === "in_review");

  async function publishNow() {
    if (!token) return;
    try {
      await cmsPublish(token, lessonId);
      setMsg("Published successfully.");
      setError("");
      await load(token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Publish failed");
      setMsg("");
    }
  }

  async function rollbackNow() {
    if (!token) return;
    try {
      await cmsRollback(token, lessonId);
      setMsg("Rolled back to prior published revision.");
      setError("");
      await load(token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rollback failed");
      setMsg("");
    }
  }

  return (
    <div className="space-y-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5">
      <h1 className="text-2xl font-bold">Publish</h1>
      {msg ? <p className="text-sm text-green-700">{msg}</p> : null}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="rounded border border-[color:var(--color-border)] p-3">
        <p className="text-sm font-semibold">Publish gates</p>
        <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-muted)]">
          <li>- Completeness score: {completeness?.score ?? 0}% {completeness?.pass ? "(pass)" : "(fail)"}</li>
          <li>- Latest review decision: {latestDecision}</li>
          <li>- Latest draft: {String(diff?.latest_revision_id ?? "none")}</li>
          <li>- Published draft: {String(diff?.published_revision_id ?? "none")}</li>
        </ul>
        {completeness?.missing?.length ? <p className="mt-2 text-xs text-amber-700">Missing fields: {completeness.missing.join(", ")}</p> : null}
      </div>

      <div className="flex flex-wrap gap-2">
        <button disabled={!ready} onClick={publishNow} className="ui-focus ui-btn-primary !px-3 !py-1.5 text-sm disabled:opacity-50">
          Publish latest draft
        </button>
        <button onClick={rollbackNow} className="ui-focus ui-btn-secondary !px-3 !py-1.5 text-sm">
          Rollback to prior publish
        </button>
      </div>
    </div>
  );
}
