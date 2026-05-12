"use client";

import { useAuth } from "../components/AuthProvider";

export function useRole() {
  const { user, hasAnyRole } = useAuth();
  return {
    role: user?.role ?? "student",
    isAdmin: hasAnyRole("admin"),
    isEditor: hasAnyRole("content_editor"),
    isPrivileged: hasAnyRole("admin", "content_editor"),
  };
}
