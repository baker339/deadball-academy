"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../components/AuthProvider";
import { siteBrand } from "../../config/siteBrand";

function LoginPageInner() {
  const { login, register } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    setStatusMessage(mode === "login" ? "Signing you in..." : "Creating your account...");
    try {
      const authUser =
        mode === "login" ? await login(email, password) : await register({ email, fullName, password });
      setStatusMessage("Success! Redirecting...");
      const requestedDestination = searchParams.get("redirect");
      const roleDefaultDestination =
        authUser.role === "admin" ? "/admin" : authUser.role === "content_editor" ? "/cms" : "/dashboard";
      const destination = requestedDestination || roleDefaultDestination;
      setTimeout(() => {
        router.replace(destination);
      }, 500);
    } catch (authError) {
      const fallback = "Could not authenticate. Check your credentials and try again.";
      setError(authError instanceof Error && authError.message ? authError.message : fallback);
      setStatusMessage("");
      setIsSubmitting(false);
      return;
    }
  };

  const toggleMode = () => {
    if (isSubmitting) return;
    setMode((prev) => (prev === "login" ? "register" : "login"));
    setError("");
    setStatusMessage("");
  };

  return (
    <div className="ui-container max-w-xl py-16">
      <nav className="mb-6 text-sm">
        <Link href="/" className="ui-focus ui-link-muted">
          {siteBrand.loginBackToHomeLabel}
        </Link>
      </nav>
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Student login</h1>
      <p className="mt-2 text-[color:var(--color-muted)]">
        Track your progress, earn badges, and build your analytics portfolio.
      </p>
      <form onSubmit={onSubmit} className="ui-surface mt-8 space-y-4 p-6">
        <div>
          <label htmlFor="login-email" className="mb-1 block text-sm font-semibold">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            className="w-full rounded border border-neutral-300 px-3 py-2 disabled:cursor-not-allowed disabled:bg-neutral-100"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {mode === "register" && (
          <div>
            <label htmlFor="login-full-name" className="mb-1 block text-sm font-semibold">
              Full name
            </label>
            <input
              id="login-full-name"
              type="text"
              required
              autoComplete="name"
              disabled={isSubmitting}
              className="w-full rounded border border-neutral-300 px-3 py-2 disabled:cursor-not-allowed disabled:bg-neutral-100"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
        )}
        <div>
          <label htmlFor="login-password" className="mb-1 block text-sm font-semibold">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            minLength={8}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            disabled={isSubmitting}
            className="w-full rounded border border-neutral-300 px-3 py-2 disabled:cursor-not-allowed disabled:bg-neutral-100"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {statusMessage ? (
          <p className="text-sm text-neutral-700" role="status" aria-live="polite">
            {statusMessage}
          </p>
        ) : null}
        {error ? (
          <p className="text-sm text-[color:var(--color-danger)]" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" disabled={isSubmitting} className="ui-focus ui-btn-primary w-full">
          {isSubmitting ? (mode === "login" ? "Signing you in..." : "Creating account...") : mode === "login" ? "Sign in" : "Create account"}
        </button>
      </form>
      <button
        type="button"
        disabled={isSubmitting}
        className="ui-focus ui-link mt-4 bg-transparent p-0 text-left text-sm disabled:cursor-not-allowed disabled:opacity-50"
        onClick={toggleMode}
      >
        {mode === "login" ? "Need an account? Register" : "Already have an account? Sign in"}
      </button>
      <p className="mt-8 text-sm text-[color:var(--color-muted)]">
        Need institutional access? Start with student sign-up and contact us from{" "}
        <Link className="ui-link" href="/for-students">
          the student program page
        </Link>
        .
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="ui-container max-w-xl min-h-[12rem] py-16" />}>
      <LoginPageInner />
    </Suspense>
  );
}
