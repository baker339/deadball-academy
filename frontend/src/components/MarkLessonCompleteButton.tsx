"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useLessonProgress } from "./LessonProgressContext";
import { apiFetch } from "../lib/api";

type Props = {
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  assessmentStorageKey?: string;
  assessmentRequired?: boolean;
};

export default function MarkLessonCompleteButton({
  courseSlug,
  moduleSlug,
  lessonSlug,
  assessmentStorageKey,
  assessmentRequired = false,
}: Props) {
  const { token, user } = useAuth();
  const { refresh } = useLessonProgress();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error" | "locked">("idle");

  if (!user) {
    return <p className="text-sm text-[color:var(--color-muted)]">Sign in to save progress for this lesson.</p>;
  }

  const handleClick = async () => {
    if (assessmentRequired && assessmentStorageKey && localStorage.getItem(assessmentStorageKey) !== "passed") {
      setStatus("locked");
      return;
    }

    setStatus("saving");
    try {
      await apiFetch("/learning/progress", {
        method: "POST",
        token,
        body: {
          course_slug: courseSlug,
          module_slug: moduleSlug,
          lesson_slug: lessonSlug,
          status: "completed",
        },
      });
      await refresh();
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "saving"}
        className="ui-focus ui-btn-primary"
      >
        {status === "saving" ? "Saving…" : "Mark lesson complete"}
      </button>
      {status === "saved" && <p className="mt-2 text-sm text-green-700">Progress saved.</p>}
      {status === "error" && <p className="mt-2 text-sm text-[color:var(--color-danger)]">Could not save progress.</p>}
      {status === "locked" && (
        <p className="mt-2 text-sm text-amber-700">Pass the assessment checkpoint before marking this lesson complete.</p>
      )}
    </div>
  );
}
