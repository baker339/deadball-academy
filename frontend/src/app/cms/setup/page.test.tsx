// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CmsCurriculumSetupPage from "./page";

const mockCmsTracks = vi.fn();
const mockCmsUnits = vi.fn();
const mockCmsLessons = vi.fn();

vi.mock("../../../components/AuthProvider", () => ({
  useAuth: () => ({ token: "test-token" }),
}));

vi.mock("../../../lib/cms", () => ({
  cmsTracks: (...args: unknown[]) => mockCmsTracks(...args),
  cmsUnits: (...args: unknown[]) => mockCmsUnits(...args),
  cmsLessons: (...args: unknown[]) => mockCmsLessons(...args),
  cmsCreateTrack: vi.fn(),
  cmsCreateUnit: vi.fn(),
  cmsCreateLesson: vi.fn(),
  cmsReorderTracks: vi.fn(),
  cmsReorderUnits: vi.fn(),
  cmsReorderLessons: vi.fn(),
}));

describe("CMS curriculum setup hierarchy UX", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("shows only track creation when no tracks exist (cannot create unit/lesson yet)", async () => {
    mockCmsTracks.mockResolvedValue([]);
    mockCmsUnits.mockResolvedValue([]);
    mockCmsLessons.mockResolvedValue([]);

    render(<CmsCurriculumSetupPage />);

    await waitFor(() => expect(mockCmsTracks).toHaveBeenCalled());

    expect(screen.getByText(/Select a track in step 1/i)).toBeTruthy();
    expect(screen.getByText(/Waiting for a track/i)).toBeTruthy();

    const creates = screen.getAllByRole("button", { name: "Create" });
    expect(creates).toHaveLength(1);
  });

  it("enables unit creation only after a track exists; lesson create waits for a unit", async () => {
    mockCmsTracks.mockResolvedValue([
      { id: 1, slug: "track-one", title: "Track One", description: "", track_order: 1 },
    ]);
    mockCmsUnits.mockResolvedValue([]);
    mockCmsLessons.mockResolvedValue([]);

    render(<CmsCurriculumSetupPage />);

    await waitFor(() => expect(screen.getByRole("button", { name: /Track One/i })).toBeTruthy());

    expect(screen.getByPlaceholderText("New unit title")).toBeTruthy();
    expect(screen.getByText(/Waiting for a unit/i)).toBeTruthy();

    const creates = screen.getAllByRole("button", { name: "Create" });
    expect(creates).toHaveLength(2);
  });

  it("shows lesson create once a unit exists in the selected track", async () => {
    mockCmsTracks.mockResolvedValue([
      { id: 1, slug: "track-one", title: "Track One", description: "", track_order: 1 },
    ]);
    mockCmsUnits.mockResolvedValue([
      {
        id: 10,
        track_id: 1,
        slug: "unit-a",
        title: "Unit A",
        description: "",
        unit_order: 1,
      },
    ]);
    mockCmsLessons.mockResolvedValue([]);

    render(<CmsCurriculumSetupPage />);

    await waitFor(() => expect(screen.getByPlaceholderText("New lesson title")).toBeTruthy());

    const creates = screen.getAllByRole("button", { name: "Create" });
    expect(creates).toHaveLength(3);
  });
});
