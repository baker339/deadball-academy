import Link from "next/link";
import { siteBrand } from "../../config/siteBrand";

export default function PricingPage() {
  return (
    <div className="ui-container max-w-6xl py-16">
      <h1 className="text-4xl font-bold text-[color:var(--color-fg)]">Free Access</h1>
      <p className="mt-2 text-[color:var(--color-muted)]">
        {siteBrand.displayName} is currently fully free. There are no subscriptions, no checkout flow, and no paywalled lessons.
      </p>
      <section className="ui-surface-subtle mt-8 p-6">
        <h2 className="text-xl font-bold text-[color:var(--color-fg)]">What You Can Use Right Now</h2>
        <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
          <li>- Full lesson library and curriculum progression</li>
          <li>- Interactive checkpoints and progress tracking</li>
          <li>- Dashboard and reference resources</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/learn/library" className="ui-focus ui-btn-primary text-sm">
            Go To Lessons
          </Link>
          <Link href="/for-instructors" className="ui-focus ui-btn-secondary text-sm">
            Instructor Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
