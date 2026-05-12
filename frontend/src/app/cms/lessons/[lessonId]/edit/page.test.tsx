// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CmsLessonEditPage from "./page";

const mockCreateRevision = vi.fn();
const mockHydrateLiveLessonDraft = vi.fn();

vi.mock("next/navigation", () => ({
  useParams: () => ({ lessonId: "42" }),
}));

vi.mock("../../../../../components/AuthProvider", () => ({
  useAuth: () => ({ token: "token" }),
}));

vi.mock("../../../../../lib/cms", async () => {
  const actual = await vi.importActual("../../../../../lib/cms");
  return {
    ...actual,
    cmsCreateRevision: (...args: unknown[]) => mockCreateRevision(...args),
    cmsHydrateLiveLessonDraft: (...args: unknown[]) => mockHydrateLiveLessonDraft(...args),
    cmsModules: vi.fn().mockResolvedValue([]),
    cmsSteps: vi.fn().mockResolvedValue([]),
  };
});

describe("CMS lesson edit hydration and autosave guards", () => {
  beforeEach(() => {
    try {
      sessionStorage.removeItem("cms-studio-tools-open");
    } catch {
      /* ignore */
    }
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it("hydrates existing content and blocks autosave until mutation", async () => {
    mockHydrateLiveLessonDraft.mockResolvedValue({
      draft: {
        key: "t::u::l",
        title: "Loaded lesson",
        trackTitle: "Track",
        unitTitle: "Unit",
        whyItMatters: "Loaded why",
        lessonOpener: "Loaded opener",
        narrativeFlow: [],
        objectives: ["Obj"],
        prerequisites: ["Pre"],
        conceptChunks: [{ heading: "Chunk 1", explainLikeCoach: "Explain", formalNote: "Formal" }],
        quickChecks: [{ prompt: "Prompt", answer: "Answer" }],
        workedExamples: [{ title: "Example", scenario: "Scenario", walkthrough: [], takeaway: "Takeaway" }],
        practiceSets: [{ level: "warmup", prompts: [{ prompt: "P", answer: "A" }] }],
        commonMistakes: [],
        lessonSummary: "Summary",
        synthesisPrompt: "Synthesis",
        nextLessonBridge: "Bridge",
        professorNotes: "Notes",
      },
    });
    mockCreateRevision.mockResolvedValue({ id: 9 });

    render(<CmsLessonEditPage />);
    await waitFor(() => expect(screen.getAllByDisplayValue("Loaded why").length).toBeGreaterThan(0));
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeTruthy();
    expect(screen.getByText("Lesson library")).toBeTruthy();
    expect(screen.getByText("Draft editor")).toBeTruthy();
    expect(screen.getByText("Lesson structure")).toBeTruthy();
    await new Promise((resolve) => setTimeout(resolve, 1400));
    expect(mockCreateRevision).not.toHaveBeenCalled();

    fireEvent.change(screen.getAllByDisplayValue("Loaded why")[0], { target: { value: "Loaded why updated" } });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    await waitFor(() => expect(mockCreateRevision).toHaveBeenCalledTimes(1));
  });

  it("preview shell exposes five learner steps", async () => {
    mockHydrateLiveLessonDraft.mockResolvedValue({
      draft: {
        key: "x::y::z",
        title: "T",
        trackTitle: "Tr",
        unitTitle: "Un",
        whyItMatters: "why",
        lessonOpener: "op",
        narrativeFlow: [],
        objectives: ["o"],
        prerequisites: ["p"],
        conceptChunks: [{ heading: "H", explainLikeCoach: "e", formalNote: "f" }],
        quickChecks: [],
        workedExamples: [],
        practiceSets: [],
        commonMistakes: [],
        lessonSummary: "s",
        synthesisPrompt: "sy",
        nextLessonBridge: "n",
        professorNotes: "",
      },
    });
    render(<CmsLessonEditPage />);
    const nav = await screen.findByRole("navigation", { name: /Lesson sections/i });
    expect(within(nav).getAllByRole("button")).toHaveLength(5);
    expect(within(nav).getByRole("button", { name: /Topic Setup/i })).toBeTruthy();
    expect(within(nav).getByRole("button", { name: /Wrap \+ Next Bridge/i })).toBeTruthy();
  });

  it("studio tools toggles aria-expanded; dialog has modal semantics; Close collapses panel", async () => {
    mockHydrateLiveLessonDraft.mockResolvedValue({
      draft: {
        key: "a::b::c",
        title: "T",
        trackTitle: "Tr",
        unitTitle: "U",
        whyItMatters: "w",
        lessonOpener: "o",
        narrativeFlow: [],
        objectives: ["o"],
        prerequisites: ["p"],
        conceptChunks: [{ heading: "C", explainLikeCoach: "e", formalNote: "f" }],
        quickChecks: [],
        workedExamples: [],
        practiceSets: [],
        commonMistakes: [],
        lessonSummary: "s",
        synthesisPrompt: "s2",
        nextLessonBridge: "b",
        professorNotes: "",
      },
    });
    const { container } = render(<CmsLessonEditPage />);
    const toggle = await screen.findByRole("button", { name: /Studio tools/i });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(toggle);
    await waitFor(() => expect(toggle.getAttribute("aria-expanded")).toBe("true"));

    const dialog = container.querySelector("dialog");
    expect(dialog).toBeTruthy();
    expect(dialog?.getAttribute("aria-modal")).toBe("true");
    expect(dialog?.getAttribute("aria-labelledby")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /^Close$/i, hidden: true }));
    await waitFor(() => expect(toggle.getAttribute("aria-expanded")).toBe("false"));
  });

  it("studio panel stays usable at narrow width in RTL", async () => {
    const prevDir = document.documentElement.dir;
    document.documentElement.dir = "rtl";
    try {
      vi.stubGlobal("innerWidth", 360);
      mockHydrateLiveLessonDraft.mockResolvedValue({
        draft: {
          key: "a::b::c",
          title: "T",
          trackTitle: "Tr",
          unitTitle: "U",
          whyItMatters: "w",
          lessonOpener: "o",
          narrativeFlow: [],
          objectives: ["o"],
          prerequisites: ["p"],
          conceptChunks: [{ heading: "C", explainLikeCoach: "e", formalNote: "f" }],
          quickChecks: [],
          workedExamples: [],
          practiceSets: [],
          commonMistakes: [],
          lessonSummary: "s",
          synthesisPrompt: "s2",
          nextLessonBridge: "b",
          professorNotes: "",
        },
      });
      const { container } = render(<CmsLessonEditPage />);
      fireEvent.click(await screen.findByRole("button", { name: /Studio tools/i }));
      await waitFor(() => expect(screen.getByRole("button", { name: /Studio tools/i }).getAttribute("aria-expanded")).toBe("true"));
      const dialog = container.querySelector("dialog");
      expect(dialog).toBeTruthy();
      expect(screen.getAllByRole("button", { name: /^Close$/i, hidden: true }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByRole("heading", { name: /Studio tools/i, hidden: true })).toBeTruthy();
    } finally {
      document.documentElement.dir = prevDir;
      vi.unstubAllGlobals();
    }
  });
});
