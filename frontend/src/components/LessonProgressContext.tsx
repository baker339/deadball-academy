"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthProvider";
import { apiFetch } from "../lib/api";

type LessonProgressContextValue = {
  /** Canonical `track::unit::lesson` keys with at least one completed event. */
  completedKeys: Set<string>;
  loading: boolean;
  error: boolean;
  refresh: () => Promise<void>;
};

const LessonProgressContext = createContext<LessonProgressContextValue | null>(null);

export function LessonProgressProvider({ children }: { children: React.ReactNode }) {
  const { token, user } = useAuth();
  const [completedKeys, setCompletedKeys] = useState<Set<string>>(() => new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const refresh = useCallback(async () => {
    if (!token || !user) {
      setCompletedKeys(new Set());
      setError(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(false);
    try {
      const data = await apiFetch<{ keys: string[] }>("/learning/completed-lesson-keys", { token });
      setCompletedKeys(new Set(data.keys));
    } catch {
      setCompletedKeys(new Set());
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [token, user]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({
      completedKeys,
      loading,
      error,
      refresh,
    }),
    [completedKeys, loading, error, refresh],
  );

  return <LessonProgressContext.Provider value={value}>{children}</LessonProgressContext.Provider>;
}

export function useLessonProgress() {
  const ctx = useContext(LessonProgressContext);
  if (!ctx) {
    throw new Error("useLessonProgress must be used within LessonProgressProvider");
  }
  return ctx;
}
