// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LessonOrderGate from "./LessonOrderGate";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const replaceMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
}));

const mockUseAuth = vi.fn();
const mockUseLessonProgress = vi.fn();

vi.mock("./AuthProvider", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("./LessonProgressContext", () => ({
  useLessonProgress: () => mockUseLessonProgress(),
}));

vi.mock("../content/deepLessonLibrary", () => ({
  buildLibraryPath: (trackSlug: string, unitSlug: string, lessonSlug: string) => `/learn/library/${trackSlug}/${unitSlug}/${lessonSlug}`,
  getUnitLessonsOrdered: () => [
    { slug: "lesson-1", title: "Lesson One" },
    { slug: "lesson-2", title: "Lesson Two" },
  ],
}));

vi.mock("../lib/learningCatalog", () => ({
  loadLearningCatalog: () =>
    Promise.resolve([
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
    ]),
  learningCatalogFromBlueprint: () => [],
  getUnitLessonsFromCatalog: () => [
    { slug: "lesson-1", title: "Lesson One" },
    { slug: "lesson-2", title: "Lesson Two" },
  ],
}));

vi.mock("../lib/progress", () => ({
  getActiveUnlockPolicy: () => "unit-sequential",
  getFirstBlockedLessonBeforeTarget: () => ({
    trackSlug: "test-track",
    unitSlug: "test-unit",
    lessonSlug: "lesson-1",
    title: "Lesson One",
  }),
  getNextEligibleLessonPath: () => "/learn/library/test-track/test-unit/lesson-1",
}));

describe("LessonOrderGate", () => {
  beforeEach(() => {
    replaceMock.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("redirects guests to next eligible lesson when blocked", async () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      loading: false,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set<string>(),
      loading: false,
      error: false,
    });

    render(
      <LessonOrderGate trackSlug="test-track" unitSlug="test-unit" lessonSlug="lesson-2">
        <div>Lesson content</div>
      </LessonOrderGate>,
    );

    await waitFor(() => expect(screen.getByText("Lesson locked")).not.toBeNull());
    await waitFor(() => expect(replaceMock).toHaveBeenCalledWith("/learn/library/test-track/test-unit/lesson-1"));
  });

  it("redirects students to next eligible lesson when blocked", async () => {
    mockUseAuth.mockReturnValue({
      user: { role: "student" },
      token: "token",
      loading: false,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set<string>(),
      loading: false,
      error: false,
    });

    render(
      <LessonOrderGate trackSlug="test-track" unitSlug="test-unit" lessonSlug="lesson-2">
        <div>Lesson content</div>
      </LessonOrderGate>,
    );

    await waitFor(() => expect(screen.getByText("Lesson locked")).not.toBeNull());
    await waitFor(() => expect(replaceMock).toHaveBeenCalledWith("/learn/library/test-track/test-unit/lesson-1"));
  });

  it.each([
    {
      label: "admin",
      user: { role: "admin" },
      hasAnyRole: (...roles: string[]) => roles.includes("admin"),
    },
    {
      label: "content editor",
      user: { role: "content_editor" },
      hasAnyRole: (...roles: string[]) => roles.includes("content_editor"),
    },
  ])("allows $label to bypass lesson sequencing", async ({ user, hasAnyRole }) => {
    mockUseAuth.mockReturnValue({ user, token: "token", loading: false, hasAnyRole });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set<string>(),
      loading: false,
      error: false,
    });

    render(
      <LessonOrderGate trackSlug="test-track" unitSlug="test-unit" lessonSlug="lesson-2">
        <div>Lesson content</div>
      </LessonOrderGate>,
    );

    expect(screen.getByText("Lesson content")).not.toBeNull();
    expect(screen.queryByText("Lesson locked")).toBeNull();
    await waitFor(() => expect(replaceMock).not.toHaveBeenCalled());
  });

  it("waits for role hydration before applying sequence redirect", async () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: "token",
      loading: true,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({
      completedKeys: new Set<string>(),
      loading: false,
      error: false,
    });

    render(
      <LessonOrderGate trackSlug="test-track" unitSlug="test-unit" lessonSlug="lesson-2">
        <div>Lesson content</div>
      </LessonOrderGate>,
    );

    expect(screen.getByText("Verifying account permissions…")).not.toBeNull();
    await waitFor(() => expect(replaceMock).not.toHaveBeenCalled());
  });
});
