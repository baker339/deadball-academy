"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { apiFetch } from "../lib/api";

type User = {
  id: number;
  email: string;
  full_name: string;
  tier: string;
  role: "student" | "content_editor" | "admin";
  is_active: boolean;
  created_at?: string | null;
};

type AuthContextValue = {
  token: string | null;
  user: User | null;
  loading: boolean;
  hasAnyRole: (...roles: Array<User["role"]>) => boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (payload: { email: string; fullName: string; password: string }) => Promise<User>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const TOKEN_KEY = "deadball_token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function hydrateUser(activeToken: string): Promise<User> {
    try {
      const profile = await apiFetch<User>("/learning/me", { token: activeToken });
      setUser(profile);
      return profile;
    } catch {
      setToken(null);
      setUser(null);
      localStorage.removeItem(TOKEN_KEY);
      throw new Error("Session expired. Please sign in again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY);
    if (!stored) {
      setLoading(false);
      return;
    }
    setToken(stored);
    hydrateUser(stored);
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    const data = await apiFetch<{ access_token: string }>("/auth/login", {
      method: "POST",
      body: { email, password },
    });
    localStorage.setItem(TOKEN_KEY, data.access_token);
    setToken(data.access_token);
    return hydrateUser(data.access_token);
  };

  const register = async (payload: { email: string; fullName: string; password: string }): Promise<User> => {
    await apiFetch<User>("/auth/register", {
      method: "POST",
      body: { email: payload.email, full_name: payload.fullName, password: payload.password },
    });
    return login(payload.email, payload.password);
  };

  const logout = async () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  const hasAnyRole = (...roles: Array<User["role"]>) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const value = { token, user, loading, hasAnyRole, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
