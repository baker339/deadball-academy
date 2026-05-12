// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LoginPage from "./page";

const mockReplace = vi.fn();
const mockLogin = vi.fn();
const mockRegister = vi.fn();
const mockGet = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
  useSearchParams: () => ({ get: mockGet }),
}));

vi.mock("../../components/AuthProvider", () => ({
  useAuth: () => ({
    login: mockLogin,
    register: mockRegister,
  }),
}));

describe("Login auth UX feedback", () => {
  beforeEach(() => {
    mockGet.mockReturnValue(null);
  });

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("shows pending and success states then redirects to role destination", async () => {
    mockLogin.mockResolvedValue({
      role: "student",
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "student@example.com" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password123" } });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect((screen.getByRole("button", { name: "Signing you in..." }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole("status").textContent).toContain("Signing you in...");

    await waitFor(() => expect(screen.getByRole("status").textContent).toContain("Success! Redirecting..."));
    expect(mockReplace).not.toHaveBeenCalled();

    await waitFor(() => expect(mockReplace).toHaveBeenCalledWith("/dashboard"), { timeout: 1200 });
  });

  it("shows a friendly error and allows retry after failed login", async () => {
    mockLogin.mockRejectedValue(new Error("Invalid email or password."));

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "student@example.com" } });
    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "badpass123" } });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => expect(screen.getByRole("alert").textContent).toContain("Invalid email or password."));
    expect((screen.getByRole("button", { name: "Sign in" }) as HTMLButtonElement).disabled).toBe(false);
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
