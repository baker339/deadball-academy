// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LibraryUnitClient from "./LibraryUnitClient";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const mockUseAuth = vi.fn();
const mockUseLessonProgress = vi.fn();

vi.mock("../../../../../components/AuthProvider", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("../../../../../components/LessonProgressContext", () => ({
  useLessonProgress: () => mockUseLessonProgress(),
}));

vi.mock("../../../../../content/lessonTitleDisambiguation", () => ({
  lessonHeaderDisplayTitle: (_trackSlug: string, title: string) => title,
}));

vi.mock("../../../../../content/deepLessonLibrary", () => ({
  buildLibraryPath: (trackSlug: string, unitSlug: string, lessonSlug: string) => `/learn/library/${trackSlug}/${unitSlug}/${lessonSlug}`,
}));

const testCatalog = [
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
];

vi.mock("../../../../../lib/learningCatalog", () => ({
  loadLearningCatalog: () => Promise.resolve(testCatalog),
  learningCatalogFromBlueprint: () => testCatalog,
  getCourseFromCatalog: (catalog: typeof testCatalog, slug: string) => catalog.find((t) => t.slug === slug) ?? null,
  getModuleFromCatalog: (catalog: typeof testCatalog, trackSlug: string, unitSlug: string) => {
    const c = catalog.find((t) => t.slug === trackSlug);
    return c?.modules.find((m) => m.slug === unitSlug) ?? null;
  },
}));

vi.mock("../../../../../content/curriculum", () => ({
  curriculumTracks: [
    {
      slug: "test-track",
      phases: [
        {
          slug: "test-unit",
          title: "Phase 1: Test Unit",
          entryCriteria: [],
        },
      ],
    },
  ],
}));

vi.mock("../../../../../content/lessonRegistry", () => ({
  lessonKey: (trackSlug: string, unitSlug: string, lessonSlug: string) => `${trackSlug}::${unitSlug}::${lessonSlug}`,
}));

vi.mock("../../../../../lib/progress", () => ({
  getActiveUnlockPolicy: () => "unit-sequential",
  isLessonUnlocked: (
    _catalog: unknown,
    _trackSlug: string,
    _unitSlug: string,
    lessonSlug: string,
    completedKeys: Set<string>,
  ) => {
    if (lessonSlug === "lesson-1") return true;
    return completedKeys.has("test-track::test-unit::lesson-1");
  },
}));

afterEach(() => {
  cleanup();
});

describe("LibraryUnitClient", () => {
  it("shows polished fallback unit guidance when metadata is sparse", async () => {
    mockUseAuth.mockReturnValue({
      user: { role: "student" },
      token: "token",
      loading: false,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false });

    render(<LibraryUnitClient trackSlug="test-track" unitSlug="test-unit" />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Test Unit" })).not.toBeNull();
    });
    expect(screen.getByText(/In this unit, you will complete 2 lessons in sequence/i)).not.toBeNull();
    expect(screen.getByText(/Expect each lesson to build on prior work/i)).not.toBeNull();
    expect(screen.getByText("How this unit works")).not.toBeNull();
    expect(screen.getByText(/Lessons unlock in order/i)).not.toBeNull();
  });

  it("keeps later lessons locked for guests", async () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      loading: false,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false });

    render(<LibraryUnitClient trackSlug="test-track" unitSlug="test-unit" />);

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /Lesson One/i })).not.toBeNull();
    });
    expect(screen.queryByRole("link", { name: /Lesson Two/i })).toBeNull();
    expect(screen.getByText(/Complete prior lessons in this unit to unlock\./i)).not.toBeNull();
  });

  it("keeps later lessons locked for students", async () => {
    mockUseAuth.mockReturnValue({
      user: { role: "student" },
      token: "token",
      loading: false,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false });

    render(<LibraryUnitClient trackSlug="test-track" unitSlug="test-unit" />);

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /Lesson One/i })).not.toBeNull();
    });
    expect(screen.queryByRole("link", { name: /Lesson Two/i })).toBeNull();
  });

  it("allows sequencing bypass for admin and content editor", async () => {
    mockUseAuth.mockReturnValue({
      user: { role: "admin" },
      token: "token",
      loading: false,
      hasAnyRole: (...roles: string[]) => roles.includes("admin") || roles.includes("content_editor"),
    });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false });

    render(<LibraryUnitClient trackSlug="test-track" unitSlug="test-unit" />);

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /Lesson Two/i })).not.toBeNull();
    });
    expect(screen.getByText(/full lesson access in this unit/i)).not.toBeNull();
    expect(screen.getByText(/Sequencing locks are bypassed for your role/i)).not.toBeNull();
  });

  it("holds sequence gating while role hydration is pending", async () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: "token",
      loading: true,
      hasAnyRole: () => false,
    });
    mockUseLessonProgress.mockReturnValue({ completedKeys: new Set(), loading: false });

    render(<LibraryUnitClient trackSlug="test-track" unitSlug="test-unit" />);

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /Lesson One/i })).not.toBeNull();
    });
    expect(screen.queryByRole("link", { name: /Lesson Two/i })).toBeNull();
  });
});
