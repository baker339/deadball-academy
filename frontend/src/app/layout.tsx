import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Archivo_Narrow, Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../components/AuthProvider";
import { LessonProgressProvider } from "../components/LessonProgressContext";
import { AppThemeProvider } from "../components/AppThemeProvider";
import { siteBrand } from "../config/siteBrand";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-display",
});
export const metadata: Metadata = {
  title: {
    default: siteBrand.defaultTitle,
    template: `%s · ${siteBrand.displayName}`,
  },
  icons: {
    icon: [{ url: "/brand/da-favicon.png", type: "image/png" }],
    shortcut: "/brand/da-favicon.png",
    apple: "/brand/da-favicon.png",
  },
  description: siteBrand.defaultDescription,
  openGraph: {
    title: siteBrand.defaultTitle,
    description: siteBrand.defaultDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteBrand.defaultTitle,
    description: siteBrand.heroTagline,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoNarrow.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-fg)] antialiased`}>
        <AppThemeProvider>
          <AuthProvider>
            <LessonProgressProvider>
              <a href="#main-content" className="ui-focus ui-skip-link">
                Skip to main content
              </a>
              <Navbar />
              <main id="main-content" className="min-h-[50vh] bg-[color:var(--color-bg)]">
                {children}
              </main>
              <footer className="ui-app-footer">
                <div className="mb-3 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                  <Link href="/reference" className="ui-focus ui-link-muted">
                    Reference
                  </Link>
                </div>
                <p className="mx-auto max-w-lg text-[color:var(--color-muted)]">{siteBrand.footerTrustLine}</p>
                <p className="mt-2">
                  &copy; {new Date().getFullYear()} {siteBrand.footerShortName}
                </p>
              </footer>
            </LessonProgressProvider>
          </AuthProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
