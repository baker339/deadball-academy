"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../components/AuthProvider";
import { siteBrand } from "../../config/siteBrand";

function Spinner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-[color:var(--color-fg)] border-t-transparent motion-reduce:animate-none ${className}`}
      aria-hidden
    />
  );
}

function LoginSuspenseFallback() {
  return (
    <div className="ui-container max-w-xl min-h-[14rem] py-16" role="status" aria-live="polite">
      <div className="ui-surface space-y-4 p-6">
        <div className="h-4 w-40 rounded bg-[color:var(--color-border)] motion-reduce:opacity-80" />
        <div className="h-10 w-full rounded bg-[color:var(--color-border)] motion-reduce:opacity-80" />
        <div className="h-10 w-full rounded bg-[color:var(--color-border)] motion-reduce:opacity-80" />
        <p className="text-sm text-[color:var(--color-muted)]">Loading sign-in... If the API was idle, this can take a few seconds.</p>
      </div>
    </div>
  );
}

function LoginPageInner() {
  const { login, register } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    setError("");
    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match. Re-enter both fields and try again.");
      return;
    }
    setIsSubmitting(true);
    setStatusMessage(mode === "login" ? "Signing you in..." : "Creating your account...");
    try {
      let authUser;
      if (mode === "login") {
        authUser = await login(email, password);
      } else {
        authUser = await register({ email, fullName, password });
      }
      setStatusMessage("Redirecting...");
      const requestedDestination = searchParams.get("redirect");
      const roleDefaultDestination =
        authUser.role === "admin" ? "/admin" : authUser.role === "content_editor" ? "/cms" : "/dashboard";
      const destination = requestedDestination || roleDefaultDestination;
      router.replace(destination);
    } catch (authError) {
      const fallback = "Could not authenticate. Check your credentials and try again.";
      setError(authError instanceof Error && authError.message ? authError.message : fallback);
      setStatusMessage("");
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    if (isSubmitting) return;
    setMode((prev) => (prev === "login" ? "register" : "login"));
    setError("");
    setStatusMessage("");
    setConfirmPassword("");
  };

  const surfaceLocked = isSubmitting;

  return (
    <div className="ui-container max-w-xl py-16">
      <nav className="mb-6 text-sm">
        <Link
          href="/"
          className={`ui-focus ui-link-muted ${surfaceLocked ? "pointer-events-none opacity-40" : ""}`}
          tabIndex={surfaceLocked ? -1 : 0}
          aria-disabled={surfaceLocked}
          onClick={(e) => {
            if (surfaceLocked) e.preventDefault();
          }}
        >
          {siteBrand.loginBackToHomeLabel}
        </Link>
      </nav>
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Student login</h1>
      <p className="mt-2 text-[color:var(--color-muted)]">
        Track your progress, earn badges, and build your analytics portfolio.
      </p>
      <form onSubmit={onSubmit} className="ui-surface mt-8 space-y-4 p-6" aria-busy={surfaceLocked}>
        <div>
          <label htmlFor="login-email" className="mb-1 block text-sm font-semibold">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            autoComplete="email"
            disabled={surfaceLocked}
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
              disabled={surfaceLocked}
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
            disabled={surfaceLocked}
            className="w-full rounded border border-neutral-300 px-3 py-2 disabled:cursor-not-allowed disabled:bg-neutral-100"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {mode === "register" && (
          <div>
            <label htmlFor="login-confirm-password" className="mb-1 block text-sm font-semibold">
              Confirm password
            </label>
            <input
              id="login-confirm-password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              disabled={surfaceLocked}
              className="w-full rounded border border-neutral-300 px-3 py-2 disabled:cursor-not-allowed disabled:bg-neutral-100"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        )}
        {statusMessage ? (
          <p className="flex items-center gap-2 text-sm text-neutral-700" role="status" aria-live="polite">
            {surfaceLocked ? <Spinner className="border-[color:var(--color-muted)] border-t-[color:var(--color-fg)]" /> : null}
            {statusMessage}
          </p>
        ) : null}
        {error ? (
          <p className="text-sm text-[color:var(--color-danger)]" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" disabled={surfaceLocked} className="ui-focus ui-btn-primary flex w-full items-center justify-center gap-2">
          {surfaceLocked ? <Spinner /> : null}
          {surfaceLocked
            ? mode === "login"
              ? "Signing you in..."
              : "Creating account..."
            : mode === "login"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>
      <button
        type="button"
        disabled={surfaceLocked}
        className="ui-focus ui-link mt-4 bg-transparent p-0 text-left text-sm disabled:cursor-not-allowed disabled:opacity-50"
        onClick={toggleMode}
      >
        {mode === "login" ? "Need an account? Register" : "Already have an account? Sign in"}
      </button>
      <p className="mt-8 text-sm text-[color:var(--color-muted)]">
        Need institutional access? Start with student sign-up and contact us from{" "}
        <Link
          className={`ui-link ${surfaceLocked ? "pointer-events-none opacity-40" : ""}`}
          href="/for-students"
          tabIndex={surfaceLocked ? -1 : 0}
          aria-disabled={surfaceLocked}
          onClick={(e) => {
            if (surfaceLocked) e.preventDefault();
          }}
        >
          the student program page
        </Link>
        .
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSuspenseFallback />}>
      <LoginPageInner />
    </Suspense>
  );
}
