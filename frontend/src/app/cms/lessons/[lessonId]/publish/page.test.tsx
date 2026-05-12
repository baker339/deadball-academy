// @vitest-environment jsdom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CmsLessonPublishPage from "./page";

const mockCmsCompleteness = vi.fn();
const mockCmsDiff = vi.fn();
const mockCmsReviewDecisions = vi.fn();
const mockCmsPublish = vi.fn();
const mockCmsRollback = vi.fn();

vi.mock("next/navigation", () => ({
  useParams: () => ({ lessonId: "42" }),
}));

vi.mock("../../../../../components/AuthProvider", () => ({
  useAuth: () => ({ token: "token" }),
}));

vi.mock("../../../../../lib/cms", () => ({
  cmsCompleteness: (...args: unknown[]) => mockCmsCompleteness(...args),
  cmsDiff: (...args: unknown[]) => mockCmsDiff(...args),
  cmsReviewDecisions: (...args: unknown[]) => mockCmsReviewDecisions(...args),
  cmsPublish: (...args: unknown[]) => mockCmsPublish(...args),
  cmsRollback: (...args: unknown[]) => mockCmsRollback(...args),
}));

describe("CMS publish lifecycle labels", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("shows draft-focused gate labels and allows publish when ready", async () => {
    mockCmsCompleteness.mockResolvedValue({ score: 100, missing: [], pass: true });
    mockCmsDiff.mockResolvedValue({ latest_revision_id: 11, published_revision_id: 10, summary: [] });
    mockCmsReviewDecisions.mockResolvedValue([{ decision: "approved", notes: "" }]);
    mockCmsPublish.mockResolvedValue({});
    mockCmsRollback.mockResolvedValue({});

    render(<CmsLessonPublishPage />);
    await waitFor(() => expect(mockCmsCompleteness).toHaveBeenCalled());
    expect(screen.getByText(/Latest draft: 11/i)).toBeTruthy();
    expect(screen.getByText(/Published draft: 10/i)).toBeTruthy();

    const publishButton = screen.getByRole("button", { name: "Publish latest draft" });
    expect(publishButton.getAttribute("disabled")).toBeNull();
    fireEvent.click(publishButton);
    await waitFor(() => expect(mockCmsPublish).toHaveBeenCalledTimes(1));
  });
});
