import Link from "next/link";

interface LessonNavProps {
  nextHref?: string;
  nextLabel?: string;
  prevHref?: string;
  prevLabel?: string;
}

export default function LessonNav({ nextHref, nextLabel, prevHref, prevLabel }: LessonNavProps) {
  return (
    <div className="flex justify-between mt-12">
      {prevHref ? (
        <Link href={prevHref} className="ui-focus ui-btn-secondary !px-6 !py-2 font-semibold transition">
          ← {prevLabel || "Previous"}
        </Link>
      ) : <div />}
      {nextHref ? (
        <Link href={nextHref} className="ui-focus ui-btn-primary !px-6 !py-2 font-semibold shadow transition">
          {nextLabel || "Next"} →
        </Link>
      ) : <div />}
    </div>
  );
} 