// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { siteBrand } from "../../../config/siteBrand";
import React from "react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import LessonLibraryBody from "./LessonLibraryBody";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const mockUseAuth = vi.fn();
const mockUseLessonProgress = vi.fn();

vi.mock("../../../components/AuthProvider", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("../../../components/LessonProgressContext", () => ({
  useLessonProgress: () => mockUseLessonProgress(),
}));

vi.mock("../../../content/lessonTitleDisambiguation", () => ({
  lessonHeaderDisplayTitle: (_trackSlug: string, title: string) => title,
}));

vi.mock("../../../content/deepLessonLibrary", () => ({
  deepCourseBlueprint: [
    {
      slug: "test-track",
      title: "Test Track",
      units: [
        {
          slug: "test-unit",
          title: "Test Unit",
          lessons: [
            { slug: "lesson-1", title: "Lesson One" },
            { slug: "lesson-2", title: "Lesson Two" },
          ],
        },
      ],
    },
  ],
  buildLibraryPath: (trackSlug: string, unitSlug: string, lessonSlug: string) =>
    `/learn/library/${trackSlug}/${unitSlug}/${lessonSlug}`,
}));

vi.mock("../../../content/curriculum", () => ({
  curriculumTracks: [
    {
      slug: "test-track",
      title: "Test Track",
      outcomes: ["Build test-track mastery."],
      prerequisites: ["Complete algebra basics first."],
      phases: [],
      assessments: [],
    },
  ],
}));

vi.mock("../../../content/lessonRegistry", () => ({
  lessonKey: (trackSlug: string, unitSlug: string, lessonSlug: string) => `${trackSlug}::${unitSlug}::${lessonSlug}`,
}));

describe("LessonLibraryBody", () => {
  it("shows polished track overview content and no review-note wording", () => {
    mockUseAuth.mockReturnValue({ user: null });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false, error: false });

    render(<LessonLibraryBody />);

    expect(screen.getByRole("heading", { name: siteBrand.lessonLibraryHubTitle })).not.toBeNull();
    expect(screen.getByRole("heading", { name: "Browse tracks" })).not.toBeNull();
    expect(screen.getByRole("link", { name: "Test Track" }).getAttribute("href")).toBe("/learn/library/test-track");
    expect(screen.getByText(/1\s+units/)).not.toBeNull();
    expect(screen.getByText("Build test-track mastery.")).not.toBeNull();
    expect(screen.getByText("Complete algebra basics first.")).not.toBeNull();
    expect(screen.getByText("What to expect")).not.toBeNull();
    expect(screen.getByText("Time commitment")).not.toBeNull();
    expect(screen.queryByText(/reviewer/i)).toBeNull();
    expect(screen.queryByText(/highest severity/i)).toBeNull();
    expect(screen.queryByText(/\d+\/\d+ lessons complete/)).toBeNull();
  });

  it("keeps unlocking guidance and progress context for signed-in learners", () => {
    mockUseAuth.mockReturnValue({ user: { role: "student" } });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set(["test-track::test-unit::lesson-1"]),
      loading: false,
      error: false,
    });

    render(<LessonLibraryBody />);

    expect(screen.getByText(/lessons in each unit unlock in order/i)).not.toBeNull();
    expect(screen.getByText("1/2 lessons complete")).not.toBeNull();
  });
});
