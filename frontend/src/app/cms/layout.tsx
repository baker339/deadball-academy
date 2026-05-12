"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../components/AuthProvider";

const navItems = [
  { href: "/cms", label: "Overview" },
  { href: "/cms/setup", label: "Setup" },
  { href: "/cms/lessons", label: "Build" },
  { href: "/cms/review-queue", label: "Review" },
  { href: "/cms/brand", label: "Brand guide" },
];

function cmsNavIsActive(pathname: string, href: string): boolean {
  if (href === "/cms") return pathname === "/cms";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  const { hasAnyRole } = useAuth();
  const pathname = usePathname();

  if (!hasAnyRole("admin", "content_editor")) {
    return (
      <div className="ui-container max-w-5xl py-14">
        <h1 className="text-3xl font-bold">CMS Access Required</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">Only admins and content editors can access the CMS.</p>
      </div>
    );
  }

  return (
    <div className="ui-container max-w-7xl py-10">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="ui-card-major p-4">
          <Link href="/" className="ui-focus ui-link-muted text-sm font-medium">
            ← Back to Academy
          </Link>
          <p className="ui-meta-label mt-4">Content studio</p>
          <h2 className="mt-1 text-lg font-bold text-[color:var(--color-fg)]">Lesson lifecycle</h2>
          <nav className="mt-4 space-y-1" aria-label="Content studio">
            {navItems.map((item) => {
              const active = cmsNavIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`ui-focus block rounded px-2 py-1.5 text-sm font-medium ${
                    active
                      ? "bg-[color:var(--color-primary)] text-[color:var(--color-primary-fg)]"
                      : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-surface-subtle)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
