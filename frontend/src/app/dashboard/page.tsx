"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/AuthProvider";
import { humanizeKebabSlug, lookupCurriculumLesson } from "../../content/curriculum";
import { apiFetch } from "../../lib/api";

type Dashboard = {
  completed_lessons: number;
  total_lessons: number;
  completion_percent: number;
  streak_days: number;
  badges: Array<{
    id: number;
    badge_key: string;
    badge_type: string;
    title: string;
    description: string;
    awarded_at: string;
  }>;
  recent_progress: Array<{
    id: number;
    course_slug: string;
    module_slug: string;
    lesson_slug: string;
    status: string;
    created_at: string;
  }>;
};

export default function DashboardPage() {
  const { token, user, loading } = useAuth();
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      if (!token) return;
      try {
        const result = await apiFetch<Dashboard>("/learning/dashboard", { token });
        setDashboard(result);
      } catch {
        setError("Could not load dashboard.");
      }
    }
    loadDashboard();
  }, [token]);

  if (loading) {
    return (
      <div className="ui-container max-w-3xl py-16 text-[color:var(--color-muted)]" role="status" aria-live="polite">
        Loading your dashboard…
      </div>
    );
  }
  if (!user) {
    return (
      <div className="ui-container max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-[color:var(--color-fg)]">Dashboard</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">Please sign in to view your learning progress.</p>
        <Link href="/login" className="ui-focus ui-btn-primary mt-4 inline-flex">
          Go to login
        </Link>
      </div>
    );
  }

  return (
    <div className="ui-container max-w-4xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Welcome back, {user.full_name}</h1>
      <p className="mt-2 text-[color:var(--color-muted)]">
        Track completion, maintain your streak, and keep making progress.
      </p>
      <section className="ui-surface mt-6 p-4">
        <h2 className="text-lg font-bold text-[color:var(--color-fg)]">Account Snapshot</h2>
        <div className="mt-2 grid gap-1 text-sm text-[color:var(--color-muted)]">
          <p><span className="font-semibold">Name:</span> {user.full_name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
        </div>
      </section>
      {error && <p className="mt-4 text-[color:var(--color-danger)]">{error}</p>}
      {dashboard && (
        <>
          <section className="mt-8 grid gap-4 sm:grid-cols-4">
            <StatCard label="Completed lessons" value={String(dashboard.completed_lessons)} />
            <StatCard label="Total lessons" value={String(dashboard.total_lessons)} />
            <StatCard label="Completion" value={`${dashboard.completion_percent}%`} />
            <StatCard label="Current streak" value={`${dashboard.streak_days} days`} />
          </section>
          <section className="ui-surface mt-8 p-6">
            <h2 className="text-xl font-bold text-[color:var(--color-fg)]">Badges</h2>
            {dashboard.badges.length === 0 ? (
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                No badges yet. Complete lessons consistently to earn unit and track badges.
              </p>
            ) : (
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {dashboard.badges.map((badge) => (
                  <li key={badge.id} className="ui-surface-subtle px-3 py-2">
                    <p className="text-sm font-semibold text-[color:var(--color-fg)]">{badge.title}</p>
                    <p className="mt-1 text-xs text-[color:var(--color-muted)]">{badge.description}</p>
                    <p className="mt-1 text-xs text-[color:var(--color-muted)] opacity-80">
                      Awarded {new Date(badge.awarded_at).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section className="ui-surface mt-10 p-6">
            <h2 className="text-xl font-bold text-[color:var(--color-fg)]">Recent Activity</h2>
            {dashboard.recent_progress.length === 0 ? (
              <div className="mt-3 space-y-3 text-[color:var(--color-muted)]">
                <p>No progress saved yet. Open a lesson and use &quot;Mark lesson complete&quot; while signed in.</p>
                <Link href="/learn/library" className="ui-focus ui-btn-primary inline-flex text-sm">
                  Browse lesson library
                </Link>
              </div>
            ) : (
              <ul className="mt-3 space-y-2 text-sm">
                {dashboard.recent_progress.map((entry) => {
                  const meta = lookupCurriculumLesson(entry.course_slug, entry.module_slug, entry.lesson_slug);
                  const lessonTitle = meta?.lessonTitle ?? humanizeKebabSlug(entry.lesson_slug);
                  const unitTitle = meta?.unitTitle ?? humanizeKebabSlug(entry.module_slug);
                  const when = new Date(entry.created_at).toLocaleString();
                  const line = (
                    <>
                      <span className="font-medium text-[color:var(--color-fg)]">{lessonTitle}</span>
                      <span className="text-[color:var(--color-muted)]"> ({unitTitle})</span>
                      <span className="text-[color:var(--color-muted)] opacity-80"> — {when}</span>
                    </>
                  );
                  return (
                    <li key={entry.id} className="ui-surface-subtle px-3 py-2">
                      {meta?.routePath ? (
                        <Link href={meta.routePath} className="text-inherit hover:underline">
                          {line}
                        </Link>
                      ) : (
                        line
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="ui-surface-subtle p-4">
      <p className="ui-meta-label">{label}</p>
      <p className="mt-1 text-2xl font-bold text-[color:var(--color-fg)]">{value}</p>
    </div>
  );
}
