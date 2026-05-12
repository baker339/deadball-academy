"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import CmsStudioPageHeader from "../../../components/cms/CmsStudioPageHeader";
import { useAuth } from "../../../components/AuthProvider";
import { cmsLessons, cmsTracks, cmsUnits, type CmsLesson, type CmsTrack, type CmsUnit } from "../../../lib/cms";

export default function CmsLessonBuilderIndexPage() {
  const { token } = useAuth();
  const [tracks, setTracks] = useState<CmsTrack[]>([]);
  const [units, setUnits] = useState<CmsUnit[]>([]);
  const [lessons, setLessons] = useState<CmsLesson[]>([]);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!token) return;
    const [t, u, l] = await Promise.all([cmsTracks(token), cmsUnits(token), cmsLessons(token)]);
    setTracks(t.sort((a, b) => a.track_order - b.track_order));
    setUnits(u);
    setLessons(l);
  }, [token]);

  useEffect(() => {
    if (!token) return;
    void load().catch((err) => setError(err instanceof Error ? err.message : "Failed to load"));
  }, [token, load]);

  const trackById = useMemo(() => new Map(tracks.map((t) => [t.id, t])), [tracks]);
  const unitById = useMemo(() => new Map(units.map((u) => [u.id, u])), [units]);

  const rows = useMemo(() => {
    return lessons
      .map((lesson) => {
        const unit = unitById.get(lesson.unit_id);
        const track = unit ? trackById.get(unit.track_id) : undefined;
        return { lesson, unit, track };
      })
      .sort((a, b) => {
        const ta = a.track?.track_order ?? 0;
        const tb = b.track?.track_order ?? 0;
        if (ta !== tb) return ta - tb;
        const ua = a.unit?.unit_order ?? 0;
        const ub = b.unit?.unit_order ?? 0;
        if (ua !== ub) return ua - ub;
        return a.lesson.lesson_order - b.lesson.lesson_order;
      });
  }, [lessons, unitById, trackById]);

  return (
    <div className="space-y-6">
      <CmsStudioPageHeader
        kicker="Build"
        title="Edit lesson content"
        description="Build lesson flow and content after catalog setup. Open any lesson to edit modules, steps, and learner-facing copy."
      >
        <Link href="/cms/setup" className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-sm">
          ← Curriculum setup
        </Link>
        <Link href="/cms/review-queue" className="ui-focus ui-link text-sm font-semibold">
          Review queue
        </Link>
      </CmsStudioPageHeader>

      {error ? <p className="text-sm text-[color:var(--color-danger)]">{error}</p> : null}

      <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-sm">
        <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] px-4 py-3">
          <h2 className="text-sm font-semibold text-[color:var(--color-fg)]">All lessons</h2>
          <p className="text-xs text-[color:var(--color-muted)]">Track → Unit → Lesson. Empty catalog? Start in curriculum setup.</p>
        </div>
        <ul className="divide-y divide-[color:var(--color-border)]">
          {rows.length === 0 ? (
            <li className="px-4 py-10 text-center text-sm text-[color:var(--color-muted)]">
              No lessons yet.{" "}
              <Link href="/cms/setup" className="ui-focus font-semibold text-[color:var(--color-primary)] underline">
                Create a track, unit, and lesson
              </Link>
              .
            </li>
          ) : (
            rows.map(({ lesson, unit, track }) => (
              <li
                key={lesson.id}
                className="flex flex-wrap items-center gap-3 px-4 py-3 text-sm hover:bg-[color:var(--color-surface-subtle)]"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[color:var(--color-fg)]">{lesson.title}</p>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    {track?.title ?? "—"} <span className="text-[color:var(--color-border)]">/</span> {unit?.title ?? "—"}
                  </p>
                </div>
                <span className="rounded-full bg-[color:var(--color-surface-subtle)] px-2 py-0.5 text-xs text-[color:var(--color-muted)]">
                  {lesson.status}
                </span>
                <Link href={`/cms/lessons/${lesson.id}/edit`} className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-xs shadow-sm">
                  Open lesson
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>

      <section className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] p-5 text-sm text-[color:var(--color-muted)]">
        <p className="font-semibold text-[color:var(--color-fg)]">Hierarchy reminder</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Track</strong> → contains units (set up in{" "}
            <Link href="/cms/setup" className="ui-focus font-semibold text-[color:var(--color-primary)] underline">
              Curriculum setup
            </Link>
            ).
          </li>
          <li>
            <strong>Unit</strong> → contains lessons.
          </li>
          <li>
            <strong>Lesson</strong> → modules &amp; steps + page content, edited here in the builder.
          </li>
        </ul>
      </section>
    </div>
  );
}
