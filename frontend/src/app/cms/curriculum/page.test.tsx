// @vitest-environment jsdom

import { render, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import CmsCurriculumRedirectPage from "./page";

const mockReplace = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

describe("CMS curriculum legacy route", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("redirects bookmarks from /cms/curriculum to /cms/setup", async () => {
    render(<CmsCurriculumRedirectPage />);
    await waitFor(() => expect(mockReplace).toHaveBeenCalledWith("/cms/setup"));
  });
});
