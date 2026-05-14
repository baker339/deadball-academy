// @vitest-environment jsdom

import { render, screen, waitFor } from "@testing-library/react";
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

const { testCatalog } = vi.hoisted(() => ({
  testCatalog: [
    {
      slug: "test-track",
      title: "Test Track",
      description: "",
      level: "college",
      is_premium: false,
      modules: [
        {
          slug: "test-unit",
          title: "Test Unit",
          description: "",
          module_order: 1,
          estimated_minutes: 0,
          lessons: [
            {
              slug: "lesson-1",
              title: "Lesson One",
              summary: "",
              lesson_order: 1,
              estimated_minutes: 0,
              track: "test-track",
              route_path: "/learn/library/test-track/test-unit/lesson-1",
            },
            {
              slug: "lesson-2",
              title: "Lesson Two",
              summary: "",
              lesson_order: 2,
              estimated_minutes: 0,
              track: "test-track",
              route_path: "/learn/library/test-track/test-unit/lesson-2",
            },
          ],
        },
      ],
    },
  ],
}));

vi.mock("../../../lib/learningCatalog", () => ({
  loadLearningCatalog: () => Promise.resolve(testCatalog),
  learningCatalogFromBlueprint: () => testCatalog,
  getCourseFromCatalog: (catalog: typeof testCatalog, slug: string) => catalog.find((c) => c.slug === slug) ?? null,
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

describe("LessonLibraryBody", () => {
  it("shows polished track overview content and no review-note wording", async () => {
    mockUseAuth.mockReturnValue({ user: null });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false, error: false });

    render(<LessonLibraryBody />);

    expect(screen.getByRole("heading", { name: siteBrand.lessonLibraryHubTitle })).not.toBeNull();
    expect(screen.getByRole("heading", { name: "Browse tracks" })).not.toBeNull();

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Test Track" }).getAttribute("href")).toBe("/learn/library/test-track");
    });
    expect(screen.getByText(/1\s+units/)).not.toBeNull();
    expect(screen.getByText("Build test-track mastery.")).not.toBeNull();
    expect(screen.getByText("Complete algebra basics first.")).not.toBeNull();
    expect(screen.getByText("What to expect")).not.toBeNull();
    expect(screen.getByText("Time commitment")).not.toBeNull();
    expect(screen.queryByText(/reviewer/i)).toBeNull();
    expect(screen.queryByText(/highest severity/i)).toBeNull();
    expect(screen.queryByText(/\d+\/\d+ lessons complete/)).toBeNull();
  });

  it("keeps unlocking guidance and progress context for signed-in learners", async () => {
    mockUseAuth.mockReturnValue({ user: { role: "student" } });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set(["test-track::test-unit::lesson-1"]),
      loading: false,
      error: false,
    });

    render(<LessonLibraryBody />);

    expect(screen.getByText(/lessons in each unit unlock in order/i)).not.toBeNull();

    await waitFor(() => {
      expect(screen.getByText("1/2 lessons complete")).not.toBeNull();
    });
  });
});
