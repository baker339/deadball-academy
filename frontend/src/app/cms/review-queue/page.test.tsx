// @vitest-environment jsdom

import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CmsReviewQueuePage from "./page";

const mockCmsReviewQueue = vi.fn();

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("../../../components/AuthProvider", () => ({
  useAuth: () => ({ token: "test-token" }),
}));

vi.mock("../../../lib/cms", () => ({
  cmsReviewQueue: (...args: unknown[]) => mockCmsReviewQueue(...args),
}));

describe("CMS review queue lifecycle copy", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders review-first labels for lesson lifecycle", async () => {
    mockCmsReviewQueue.mockResolvedValue([
      { lesson_id: 7, lesson_title: "Lesson A", status: "in_review", highest_severity: "major", note_count: 2 },
    ]);
    render(<CmsReviewQueuePage />);
    await waitFor(() => expect(mockCmsReviewQueue).toHaveBeenCalled());
    expect(screen.getByRole("heading", { name: "Review" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Review lesson" }).getAttribute("href")).toBe("/cms/lessons/7/review");
  });
});
