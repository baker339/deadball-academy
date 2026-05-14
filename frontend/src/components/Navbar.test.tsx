// @vitest-environment jsdom

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Navbar from "./Navbar";

const mockReplace = vi.fn();
const mockLogout = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

vi.mock("./AuthProvider", () => ({
  useAuth: () => ({
    user: { id: 1, full_name: "Test User", role: "student" },
    logout: mockLogout,
    hasAnyRole: () => false,
    loading: false,
  }),
}));

describe("Navbar logout UX feedback", () => {
  beforeEach(() => {
    mockLogout.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("shows pending message and redirects after logout", async () => {
    render(<Navbar />);

    fireEvent.click(screen.getAllByRole("button", { name: "Logout" })[0]);

    expect((screen.getAllByRole("button", { name: "Signing out..." })[0] as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole("status").textContent).toContain("Signing you out...");

    await waitFor(() => expect(mockLogout).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockReplace).toHaveBeenCalledWith("/login"));
    await waitFor(() => expect(screen.getByRole("status").textContent).toContain("Signed out. Redirecting..."));
  });
});
