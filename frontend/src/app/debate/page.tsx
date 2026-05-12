import Link from "next/link";

export default function Debate() {
  return (
    <div className="ui-container max-w-3xl py-16 font-sans text-[color:var(--color-fg)]">
      <div className="ui-meta-label mb-4 tracking-widest">The Debate</div>
      <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        What is the “juiced” vs. “dead” ball debate?
      </h1>
      <section className="mb-8">
        <p className="mb-4 text-lg text-[color:var(--color-muted)]">
          The “juiced” vs. “dead” ball debate is one of the most fascinating and controversial topics in modern baseball. It centers on the idea that the physical properties of the baseball itself—its construction, seams, and materials—have changed over time, affecting how far the ball travels and, ultimately, the number of home runs hit.
        </p>
        <p className="mb-4 text-base text-[color:var(--color-muted)]">
          Fans, players, and analysts have long suspected that Major League Baseball (MLB) has altered the ball, either intentionally or unintentionally, leading to periods of increased or decreased offensive output. These changes are often described as the ball being “juiced” (livelier, more home runs) or “dead” (less lively, fewer home runs).
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[color:var(--color-fg)]">A Brief Timeline</h2>
        <ul className="mb-4 list-disc pl-6 text-base text-[color:var(--color-muted)]">
          <li><span className="font-semibold">2015:</span> Sudden spike in home runs sparks suspicion of a “juiced” ball.</li>
          <li><span className="font-semibold">2017:</span> MLB commissions studies; scientists find lower drag on the ball.</li>
          <li><span className="font-semibold">2019:</span> Home run rates reach all-time highs; MLB admits to changes in ball manufacturing.</li>
          <li><span className="font-semibold">2021:</span> MLB introduces a new “deadened” ball, home run rates drop.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[color:var(--color-fg)]">Why Does It Matter?</h2>
        <p className="mb-4 text-base text-[color:var(--color-muted)]">
          The construction of the baseball affects not just home runs, but the entire style and strategy of the game. Pitchers, hitters, and even fielders must adapt to a ball that flies differently. For analysts and fans, understanding these changes is crucial for interpreting trends, evaluating player performance, and appreciating the evolving nature of baseball.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[color:var(--color-fg)]">How Do We Know the Ball Changed?</h2>
        <p className="mb-4 text-base text-[color:var(--color-muted)]">
          Researchers use Statcast data, laboratory tests, and even physical dissection of baseballs to measure properties like drag coefficient, seam height, and core composition. By analyzing flight data and comparing it to expected physics, we can detect subtle (and sometimes not-so-subtle) changes in the ball’s behavior.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[color:var(--color-fg)]">What’s Next?</h2>
        <p className="mb-4 text-base text-[color:var(--color-muted)]">
          The debate is ongoing. As MLB continues to tweak the ball and as new data becomes available, analysts and fans will keep searching for answers. This site aims to provide the clearest, most data-driven look at how the baseball—and the game—are changing.
        </p>
      </section>
      <div className="mt-12 text-center">
        <Link href="/" className="ui-focus ui-link-muted text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 