// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import LessonAssessmentPanel from "./LessonAssessmentPanel";

describe("LessonAssessmentPanel", () => {
  it("gives immediate per-question feedback and unlocks on full pass", () => {
    const items = [
      {
        id: "q1",
        type: "exact" as const,
        prompt: "Type fastball",
        correctAnswer: "fastball",
        explanation: "Use the exact token.",
      },
      {
        id: "q2",
        type: "mcq" as const,
        prompt: "Pick 2 + 2",
        options: ["3", "4"],
        correctAnswer: "4",
        explanation: "Arithmetic check.",
      },
    ];

    render(<LessonAssessmentPanel storageKey="assessment:test" items={items} />);

    fireEvent.change(screen.getByPlaceholderText("Enter your answer"), { target: { value: "slider" } });
    expect(screen.queryByText("Not yet")).not.toBeNull();

    fireEvent.change(screen.getByPlaceholderText("Enter your answer"), { target: { value: "fastball" } });
    fireEvent.click(screen.getByLabelText("4"));
    fireEvent.click(screen.getByRole("button", { name: "Submit mastery check" }));

    expect(screen.queryByText(/lesson is now unlocked/i)).not.toBeNull();
    expect(localStorage.getItem("assessment:test")).toBe("passed");
  });
});
