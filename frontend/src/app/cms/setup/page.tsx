"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../components/AuthProvider";
import {
  cmsCreateLesson,
  cmsCreateTrack,
  cmsCreateUnit,
  cmsLessons,
  cmsReorderLessons,
  cmsReorderTracks,
  cmsReorderUnits,
  cmsTracks,
  cmsUnits,
  type CmsLesson,
  type CmsTrack,
  type CmsUnit,
} from "../../../lib/cms";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default function CmsCurriculumSetupPage() {
  const { token } = useAuth();
  const [tracks, setTracks] = useState<CmsTrack[]>([]);
  const [units, setUnits] = useState<CmsUnit[]>([]);
  const [lessons, setLessons] = useState<CmsLesson[]>([]);
  const [error, setError] = useState("");
  const [busyKey, setBusyKey] = useState("");

  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const [newTrackTitle, setNewTrackTitle] = useState("");
  const [newUnitTitle, setNewUnitTitle] = useState("");
  const [newLessonTitle, setNewLessonTitle] = useState("");

  const loadCore = useCallback(async (currentToken: string) => {
    const [t, u, l] = await Promise.all([cmsTracks(currentToken), cmsUnits(currentToken), cmsLessons(currentToken)]);
    setTracks(t.sort((a, b) => a.track_order - b.track_order));
    setUnits(u);
    setLessons(l);
    return { tracks: t, units: u };
  }, []);

  useEffect(() => {
    if (!token) return;
    void (async () => {
      try {
        setError("");
        const { tracks: t } = await loadCore(token);
        setSelectedTrackId((prev) => (prev === null && t.length > 0 ? t[0].id : prev));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load curriculum");
      }
    })();
  }, [token, loadCore]);

  const unitsByTrack = useMemo(() => {
    const map = new Map<number, CmsUnit[]>();
    for (const unit of units) {
      const arr = map.get(unit.track_id) ?? [];
      arr.push(unit);
      map.set(unit.track_id, arr);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.unit_order - b.unit_order);
    }
    return map;
  }, [units]);

  const lessonsByUnit = useMemo(() => {
    const map = new Map<number, CmsLesson[]>();
    for (const lesson of lessons) {
      const arr = map.get(lesson.unit_id) ?? [];
      arr.push(lesson);
      map.set(lesson.unit_id, arr);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.lesson_order - b.lesson_order);
    }
    return map;
  }, [lessons]);

  const selectedTrack = tracks.find((t) => t.id === selectedTrackId) ?? null;
  const unitsForTrack = selectedTrackId ? unitsByTrack.get(selectedTrackId) ?? [] : [];
  const selectedUnit = unitsForTrack.find((u) => u.id === selectedUnitId) ?? null;
  const lessonsForUnit = selectedUnitId ? lessonsByUnit.get(selectedUnitId) ?? [] : [];

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectedUnitId(null);
      return;
    }
    const list = unitsByTrack.get(selectedTrackId) ?? [];
    if (list.length === 0) {
      setSelectedUnitId(null);
      return;
    }
    if (selectedUnitId === null || !list.some((u) => u.id === selectedUnitId)) {
      setSelectedUnitId(list[0].id);
    }
  }, [selectedTrackId, selectedUnitId, unitsByTrack]);

  async function withReload(action: () => Promise<void>) {
    if (!token) return;
    try {
      setError("");
      await action();
      await loadCore(token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Operation failed");
    } finally {
      setBusyKey("");
    }
  }

  async function reorderTracks(id: number, delta: -1 | 1) {
    if (!token) return;
    const ordered = [...tracks].sort((a, b) => a.track_order - b.track_order);
    const i = ordered.findIndex((t) => t.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= ordered.length) return;
    [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
    setBusyKey(`track-reorder-${id}`);
    await withReload(async () => {
      await cmsReorderTracks(token, ordered.map((t) => t.id));
    });
  }

  async function reorderUnits(id: number, delta: -1 | 1) {
    if (!token || !selectedTrackId) return;
    const list = [...(unitsByTrack.get(selectedTrackId) ?? [])];
    const i = list.findIndex((u) => u.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= list.length) return;
    [list[i], list[j]] = [list[j], list[i]];
    setBusyKey(`unit-reorder-${id}`);
    await withReload(async () => {
      await cmsReorderUnits(token, list.map((u) => u.id));
    });
  }

  async function reorderLessons(id: number, delta: -1 | 1) {
    if (!token || !selectedUnitId) return;
    const list = [...(lessonsByUnit.get(selectedUnitId) ?? [])];
    const i = list.findIndex((l) => l.id === id);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= list.length) return;
    [list[i], list[j]] = [list[j], list[i]];
    setBusyKey(`lesson-reorder-${id}`);
    await withReload(async () => {
      await cmsReorderLessons(token, list.map((l) => l.id));
    });
  }

  return (
    <div className="space-y-8">
      <header className="ui-card-major border-[color:var(--color-border)] bg-[color:var(--color-primary)] p-6 text-[color:var(--color-primary-fg)] shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary-fg)]/70">Setup</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">Build your catalog in order</h1>
        <p className="mt-2 max-w-2xl text-sm text-[color:var(--color-primary-fg)]/85">
          Every lesson belongs to a <strong className="text-[color:var(--color-primary-fg)]">unit</strong>. Every unit belongs to a{" "}
          <strong className="text-[color:var(--color-primary-fg)]">track</strong>. Use the three steps below—then open the{" "}
          <Link href="/cms/lessons" className="ui-focus font-semibold text-[color:var(--color-primary-fg)] underline underline-offset-2">
            Lesson builder
          </Link>{" "}
          to build lesson sections and learner-facing content.
        </p>
      </header>

      {error ? (
        <div
          className="rounded-xl border border-[color:color-mix(in_srgb,var(--color-danger)_35%,var(--color-border))] bg-[color:color-mix(in_srgb,var(--color-danger)_8%,var(--color-surface))] px-4 py-3 text-sm text-[color:var(--color-danger)]"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      <ol className="grid gap-6 lg:grid-cols-3">
        {/* Step 1 — Track */}
        <li className="ui-card-major flex flex-col border-l-4 border-l-[color:var(--color-primary)] p-5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-bold text-[color:var(--color-primary-fg)]">
            1
          </span>
          <h2 className="mt-3 text-lg font-bold text-[color:var(--color-fg)]">Track</h2>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">Top-level program or pathway. Create at least one track to begin.</p>

          <div className="mt-4 space-y-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrackId(track.id)}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${
                  selectedTrackId === track.id
                    ? "border-[color:var(--color-primary)] bg-[color:var(--color-callout-bg)] text-[color:var(--color-fg)] ring-2 ring-[color:color-mix(in_srgb,var(--color-primary)_22%,transparent)]"
                    : "border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] text-[color:var(--color-fg)] hover:border-[color:var(--color-border)]"
                }`}
              >
                <span>{track.title}</span>
                <span className="text-xs text-[color:var(--color-muted)]">{track.slug}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-2 border-t border-[color:var(--color-border)] pt-4">
            <input
              value={newTrackTitle}
              onChange={(e) => setNewTrackTitle(e.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm shadow-inner"
              placeholder="New track title"
            />
            <button
              type="button"
              disabled={!newTrackTitle.trim() || !token}
              className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-sm shadow-sm disabled:opacity-40"
              onClick={async () => {
                if (!token || !newTrackTitle.trim()) return;
                setBusyKey("create-track");
                await withReload(async () => {
                  const created = await cmsCreateTrack(token, {
                    title: newTrackTitle.trim(),
                    slug: slugify(newTrackTitle),
                    track_order: tracks.length + 1,
                    description: "",
                  });
                  setNewTrackTitle("");
                  setSelectedTrackId(created.id);
                });
              }}
            >
              {busyKey === "create-track" ? "…" : "Create"}
            </button>
          </div>

          {selectedTrack ? (
            <div className="mt-3 flex gap-2">
              <button type="button" className="rounded-lg border px-2 py-1 text-xs" onClick={() => reorderTracks(selectedTrack.id, -1)}>
                Move up
              </button>
              <button type="button" className="rounded-lg border px-2 py-1 text-xs" onClick={() => reorderTracks(selectedTrack.id, 1)}>
                Move down
              </button>
            </div>
          ) : null}
        </li>

        {/* Step 2 — Unit */}
        <li
          className={
            selectedTrackId
              ? "ui-card-major flex flex-col border-l-4 border-l-[color:var(--color-accent)] p-5"
              : "ui-card-major flex flex-col border border-dashed border-[color:var(--color-border)] p-5 opacity-80"
          }
        >
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-[color:var(--color-primary-fg)] ${
              selectedTrackId ? "bg-[color:var(--color-accent)]" : "bg-[color:var(--color-muted)]"
            }`}
          >
            2
          </span>
          <h2 className="mt-3 text-lg font-bold text-[color:var(--color-fg)]">Unit</h2>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            {selectedTrackId
              ? `Units inside “${selectedTrack?.title ?? "this track"}”. Pick one to attach new lessons.`
              : "Select a track in step 1 before you can add units."}
          </p>

          {!selectedTrackId ? (
            <p className="mt-6 rounded-xl bg-[color:var(--color-surface-subtle)] px-3 py-4 text-center text-sm text-[color:var(--color-muted)]">
              Waiting for a track…
            </p>
          ) : (
            <>
              <ul className="mt-4 max-h-48 space-y-2 overflow-y-auto">
                {unitsForTrack.map((unit) => (
                  <li key={unit.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedUnitId(unit.id)}
                      className={`w-full rounded-xl border px-3 py-2 text-left text-sm font-medium transition ${
                        selectedUnitId === unit.id
                          ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent-muted)] text-[color:var(--color-fg)] ring-2 ring-[color:var(--color-accent-border)]"
                          : "border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] text-[color:var(--color-fg)] hover:border-[color:var(--color-border)]"
                      }`}
                    >
                      {unit.title}
                      <span className="mt-0.5 block text-xs font-normal text-[color:var(--color-muted)]">{unit.slug}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2 border-t border-[color:var(--color-border)] pt-4">
                <input
                  value={newUnitTitle}
                  onChange={(e) => setNewUnitTitle(e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm shadow-inner"
                  placeholder="New unit title"
                  disabled={!selectedTrackId}
                />
                <button
                  type="button"
                  disabled={!selectedTrackId || !newUnitTitle.trim() || !token}
                  className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-sm shadow-sm disabled:opacity-40"
                  onClick={async () => {
                    if (!token || !selectedTrackId || !newUnitTitle.trim()) return;
                    setBusyKey("create-unit");
                    await withReload(async () => {
                      const created = await cmsCreateUnit(token, {
                        track_id: selectedTrackId,
                        title: newUnitTitle.trim(),
                        slug: slugify(newUnitTitle),
                        unit_order: unitsForTrack.length + 1,
                        description: "",
                      });
                      setNewUnitTitle("");
                      setSelectedUnitId(created.id);
                    });
                  }}
                >
                  {busyKey === "create-unit" ? "…" : "Create"}
                </button>
              </div>

              {selectedUnit ? (
                <div className="mt-3 flex gap-2">
                  <button type="button" className="rounded-lg border px-2 py-1 text-xs" onClick={() => reorderUnits(selectedUnit.id, -1)}>
                    Move up
                  </button>
                  <button type="button" className="rounded-lg border px-2 py-1 text-xs" onClick={() => reorderUnits(selectedUnit.id, 1)}>
                    Move down
                  </button>
                </div>
              ) : null}
            </>
          )}
        </li>

        {/* Step 3 — Lesson */}
        <li
          className={
            selectedUnitId
              ? "ui-card-major flex flex-col border-l-4 border-l-[color:var(--color-primary)] p-5"
              : "ui-card-major flex flex-col border border-dashed border-[color:var(--color-border)] p-5 opacity-80"
          }
        >
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-[color:var(--color-primary-fg)] ${
              selectedUnitId ? "bg-[color:var(--color-primary)]" : "bg-[color:var(--color-muted)]"
            }`}
          >
            3
          </span>
          <h2 className="mt-3 text-lg font-bold text-[color:var(--color-fg)]">Lesson</h2>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            {selectedUnitId
              ? `Lessons inside “${selectedUnit?.title ?? "this unit"}”. Open one in the visual lesson builder.`
              : "Select a unit in step 2 before you can add lessons."}
          </p>

          {!selectedUnitId ? (
            <p className="mt-6 rounded-xl bg-[color:var(--color-surface-subtle)] px-3 py-4 text-center text-sm text-[color:var(--color-muted)]">
              Waiting for a unit…
            </p>
          ) : (
            <>
              <ul className="mt-4 max-h-52 space-y-2 overflow-y-auto">
                {lessonsForUnit.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="flex flex-wrap items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-[color:var(--color-fg)]">{lesson.title}</span>
                    <span className="text-xs text-[color:var(--color-muted)]">{lesson.status}</span>
                    <div className="ml-auto flex gap-2">
                      <button type="button" className="rounded border border-[color:var(--color-border)] px-1.5 py-0.5 text-[10px]" onClick={() => reorderLessons(lesson.id, -1)}>
                        Up
                      </button>
                      <button type="button" className="rounded border border-[color:var(--color-border)] px-1.5 py-0.5 text-[10px]" onClick={() => reorderLessons(lesson.id, 1)}>
                        Down
                      </button>
                      <Link href={`/cms/lessons/${lesson.id}/edit`} className="ui-focus ui-btn-primary rounded-lg px-2.5 py-1 text-xs">
                        Open lesson
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-2 border-t border-[color:var(--color-border)] pt-4">
                <input
                  value={newLessonTitle}
                  onChange={(e) => setNewLessonTitle(e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-[color:var(--color-border)] px-3 py-2 text-sm shadow-inner"
                  placeholder="New lesson title"
                />
                <button
                  type="button"
                  disabled={!selectedUnitId || !newLessonTitle.trim() || !token}
                  className="ui-focus ui-btn-primary rounded-xl px-4 py-2 text-sm shadow-sm disabled:opacity-40"
                  onClick={async () => {
                    if (!token || !selectedUnitId || !newLessonTitle.trim()) return;
                    setBusyKey("create-lesson");
                    await withReload(async () => {
                      await cmsCreateLesson(token, {
                        unit_id: selectedUnitId,
                        title: newLessonTitle.trim(),
                        slug: slugify(newLessonTitle),
                        lesson_order: lessonsForUnit.length + 1,
                      });
                      setNewLessonTitle("");
                    });
                  }}
                >
                  {busyKey === "create-lesson" ? "…" : "Create"}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-[color:var(--color-muted)]">
                Send lessons to review or publish from{" "}
                <Link href="/cms/review-queue" className="ui-focus font-semibold text-[color:var(--color-primary)] underline">
                  Review queue
                </Link>
                .
              </p>
            </>
          )}
        </li>
      </ol>
    </div>
  );
}
