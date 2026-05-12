// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import type { LessonDocument } from "../content/deepLessonLibrary";
import InteractiveLessonExperience from "./InteractiveLessonExperience";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("./MarkLessonCompleteButton", () => ({
  default: () => <div data-testid="mark-lesson-complete-stub" />,
}));

const doc: LessonDocument = {
  key: "t::u::l",
  title: "Pilot Lesson",
  trackTitle: "Track",
  unitTitle: "Unit",
  whyItMatters: "Why it matters",
  lessonOpener: "Lesson opener",
  narrativeFlow: ["Step 1", "Step 2", "Step 3", "Step 4"],
  objectives: ["Obj 1", "Obj 2", "Obj 3"],
  prerequisites: ["Pre 1", "Pre 2", "Pre 3"],
  conceptChunks: [{ heading: "Chunk", explainLikeCoach: "Explain", formalNote: "Formal", equation: "\\(x\\)" }],
  quickChecks: [{ prompt: "Check prompt", answer: "answer", explanation: "exp" }],
  workedExamples: [{ title: "Example", scenario: "Scenario", walkthrough: ["a", "b"], takeaway: "Takeaway" }],
  practiceSets: [{ level: "warmup", prompts: [{ prompt: "p", answer: "a" }] }],
  commonMistakes: ["Mistake 1", "Mistake 2", "Mistake 3"],
  lessonSummary: "Summary",
  synthesisPrompt: "Synthesis",
  nextLessonBridge: "Bridge",
  professorNotes: "Notes",
  keyTerms: [
    { term: "Term", definition: "Definition" },
    {
      term: "Linked term",
      definition: "See also",
      lessonTitle: "Sibling lesson title",
      lessonPath: "/learn/library/track/unit/other-lesson",
    },
  ],
  assessmentItems: [
    { id: "a1", type: "exact", prompt: "answer yes", correctAnswer: "yes", explanation: "ok" },
    { id: "a2", type: "mcq", prompt: "2+2", options: ["3", "4"], correctAnswer: "4", explanation: "ok" },
  ],
};

describe("InteractiveLessonExperience", () => {
  it("navigates between steps and renders concept studio", () => {
    render(<InteractiveLessonExperience document={doc} trackSlug="track" unitSlug="unit" lessonSlug="lesson" />);

    expect(screen.queryByText("Lesson Opener")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Next step" }));
    expect(screen.getByRole("heading", { name: "Build Understanding" })).not.toBeNull();
    expect(screen.getByRole("heading", { name: "Chunk" })).not.toBeNull();
  });

  it("renders key-term library links on the summary step", () => {
    render(<InteractiveLessonExperience document={doc} trackSlug="track" unitSlug="unit" lessonSlug="lesson" />);

    for (let i = 0; i < 5; i += 1) {
      const nextButtons = screen.getAllByRole("button", { name: "Next step" });
      fireEvent.click(nextButtons[0]);
    }

    const link = screen.getByRole("link", { name: "Sibling lesson title" });
    expect(link.getAttribute("href")).toBe("/learn/library/track/unit/other-lesson");
    expect(screen.queryByRole("heading", { name: "Study Notes" })).toBeNull();
  });
});
