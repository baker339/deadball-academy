"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { siteBrand } from "../config/siteBrand";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState("");
  const { user, logout, hasAnyRole, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    setLogoutStatus("Signing you out...");
    try {
      await logout();
      setLogoutStatus("Signed out. Redirecting...");
      setDrawerOpen(false);
      router.replace("/login");
    } finally {
      setIsLoggingOut(false);
      setTimeout(() => setLogoutStatus(""), 1500);
    }
  };

  const navLinkClass =
    "ui-focus text-[color:var(--color-muted)] transition hover:text-[color:var(--color-fg)]";

  return (
    <nav className="ui-app-nav">
      {authLoading ? (
        <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-subtle)] px-4 py-1.5 text-center text-xs text-[color:var(--color-muted)]" role="status" aria-live="polite">
          Restoring your session...
        </div>
      ) : null}
      <div className="ui-container max-w-5xl flex items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="ui-focus ui-marketing-display text-base font-bold tracking-tight text-[color:var(--color-fg)] sm:text-lg"
        >
          {siteBrand.navWordmark}
        </Link>
        {/* Desktop Nav */}
        <div className="hidden items-center gap-4 text-sm font-medium sm:flex">
          <Link href="/learn/library" className={navLinkClass}>
            Lesson library
          </Link>
          <Link href="/learn/tracks" className={navLinkClass}>
            Curriculum
          </Link>
          <Link href="/learn/syllabus" className={navLinkClass}>
            Syllabus
          </Link>
          {hasAnyRole("admin", "content_editor") ? (
            <Link href="/cms" className={navLinkClass}>
              CMS
            </Link>
          ) : null}
          {hasAnyRole("admin") ? (
            <Link href="/admin" className={navLinkClass}>
              Admin
            </Link>
          ) : null}
          {user ? (
            <>
              <Link href="/dashboard" className={navLinkClass}>
                Dashboard
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={`${navLinkClass} disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {isLoggingOut ? "Signing out..." : "Logout"}
              </button>
            </>
          ) : (
            <Link href="/login" className={navLinkClass}>
              Login
            </Link>
          )}
        </div>
        {/* Hamburger for Mobile */}
        <button
          type="button"
          className="ui-focus sm:hidden flex items-center justify-center rounded p-2 text-[color:var(--color-fg)]"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setDrawerOpen(true)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setDrawerOpen(false)}></div>
      )}
      {/* Drawer Panel */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 z-50 h-full w-64 transform border-l border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-sm transition-transform duration-200 ease-in-out sm:hidden ${
          drawerOpen ? "translate-x-0" : "pointer-events-none invisible translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!drawerOpen}
        inert={drawerOpen ? undefined : true}
      >
        <div className="flex items-center justify-between border-b border-[color:var(--color-border)] px-4 py-3">
          <span className="text-lg font-semibold text-[color:var(--color-fg)]">Menu</span>
          <button
            type="button"
            className="ui-focus rounded p-2 text-[color:var(--color-fg)]"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6 text-base font-medium text-[color:var(--color-fg)]">
          <Link href="/learn/library" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
            Lesson library
          </Link>
          <Link href="/learn/tracks" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
            Curriculum
          </Link>
          <Link href="/learn/syllabus" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
            Syllabus
          </Link>
          {hasAnyRole("admin", "content_editor") ? (
            <Link href="/cms" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
              CMS
            </Link>
          ) : null}
          {hasAnyRole("admin") ? (
            <Link href="/admin" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
              Admin
            </Link>
          ) : null}
          {user ? (
            <>
              <Link href="/dashboard" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={`${navLinkClass} text-left disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {isLoggingOut ? "Signing out..." : "Logout"}
              </button>
            </>
          ) : (
            <Link href="/login" className={navLinkClass} onClick={() => setDrawerOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </div>
      {logoutStatus ? (
        <p className="ui-container max-w-5xl pb-3 text-xs text-[color:var(--color-muted)]" role="status" aria-live="polite">
          {logoutStatus}
        </p>
      ) : null}
    </nav>
  );
} 