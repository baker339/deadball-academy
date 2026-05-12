import type { ReactNode } from "react";
import { renderMathText } from "../lib/mathText";

type ComposerSlots = {
  guided?: ReactNode;
  formal?: ReactNode;
};

type Props = {
  heading: string;
  guidedExplanation: string;
  formalNote: string;
  equation?: string;
  figure?: { src: string; alt: string };
  /** When set, replaces read-only bodies (e.g. CMS inline editors on raw fields). */
  composerSlots?: ComposerSlots;
};

type DiagramSpec = {
  title?: string;
  purpose?: string;
  inputs?: string;
  insight?: string;
  caption?: string;
};

type Callout = {
  label: string;
  content: string;
};

function parseFormalNote(formalNote: string): { body: string; diagram?: DiagramSpec } {
  const lines = formalNote.split("\n").map((line) => line.trim());
  const diagram: DiagramSpec = {};
  const bodyLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("DiagramTitle:")) {
      diagram.title = line.replace("DiagramTitle:", "").trim();
      continue;
    }
    if (line.startsWith("DiagramPurpose:")) {
      diagram.purpose = line.replace("DiagramPurpose:", "").trim();
      continue;
    }
    if (line.startsWith("DiagramInputs:")) {
      diagram.inputs = line.replace("DiagramInputs:", "").trim();
      continue;
    }
    if (line.startsWith("DiagramInsight:")) {
      diagram.insight = line.replace("DiagramInsight:", "").trim();
      continue;
    }
    if (line.startsWith("DiagramCaption:")) {
      diagram.caption = line.replace("DiagramCaption:", "").trim();
      continue;
    }
    bodyLines.push(line);
  }

  const hasDiagramSpec = Boolean(diagram.title || diagram.purpose || diagram.inputs || diagram.insight || diagram.caption);
  return {
    body: bodyLines.join("\n").trim(),
    diagram: hasDiagramSpec ? diagram : undefined,
  };
}

function extractCallouts(text: string): { body: string; callouts: Callout[] } {
  const markers = ["Definition:", "Theorem:", "Common Mistake:", "Coach Tip:"];
  const lines = text.split("\n");
  const bodyLines: string[] = [];
  const callouts: Callout[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const marker = markers.find((m) => line.startsWith(m));
    if (!marker) {
      bodyLines.push(rawLine);
      continue;
    }
    callouts.push({
      label: marker.replace(":", ""),
      content: line.slice(marker.length).trim(),
    });
  }
  return { body: bodyLines.join("\n").trim(), callouts };
}

export default function ConceptCard({ heading, guidedExplanation, formalNote, equation, figure, composerSlots }: Props) {
  const parsed = parseFormalNote(formalNote);
  const guided = extractCallouts(guidedExplanation);
  const formal = extractCallouts(parsed.body);

  return (
    <article className="rounded-xl border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-5 shadow-sm">
      <h3 className="text-xl font-semibold text-[color:var(--color-reading-fg)]">{heading}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">Concept Teaching Section</p>

      <div className="mt-4 rounded-lg border border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-muted)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">Guided Explanation</p>
        {composerSlots?.guided != null ? (
          <div className="mt-2">{composerSlots.guided}</div>
        ) : (
          <>
            <div className="lesson-prose mt-2">{renderMathText(guided.body)}</div>
            {guided.callouts.length ? (
              <div className="mt-3 space-y-2">
                {guided.callouts.map((callout) => (
                  <div key={`${callout.label}-${callout.content.slice(0, 24)}`} className="lesson-callout">
                    <span className="lesson-callout-title">{callout.label}</span>
                    <div className="text-sm text-[color:var(--color-reading-fg)]">{renderMathText(callout.content)}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>

      <div className="mt-4 rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-reading-muted)]">Formal Note</p>
        {composerSlots?.formal != null ? (
          <div className="mt-2">{composerSlots.formal}</div>
        ) : (
          <>
            <div className="lesson-prose mt-2 whitespace-pre-line">{renderMathText(formal.body)}</div>
            {formal.callouts.length ? (
              <div className="mt-3 space-y-2">
                {formal.callouts.map((callout) => (
                  <div key={`${callout.label}-${callout.content.slice(0, 24)}`} className="lesson-callout">
                    <span className="lesson-callout-title">{callout.label}</span>
                    <div className="text-sm text-[color:var(--color-reading-fg)]">{renderMathText(callout.content)}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </>
        )}
        {equation ? <div className="mt-4 rounded bg-[color:var(--color-surface)] px-3 py-2 text-sm">{renderMathText(equation)}</div> : null}
      </div>

      {figure ? (
        <div className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={figure.src} alt={figure.alt} className="max-h-48 w-auto rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-2" />
        </div>
      ) : null}

      {parsed.diagram ? (
        <div className="mt-4 rounded-lg border border-emerald-300 bg-gradient-to-b from-emerald-50 to-emerald-100/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900">Figure Brief</p>
          {parsed.diagram.title ? <p className="mt-1 text-base font-semibold text-emerald-950">{parsed.diagram.title}</p> : null}
          <div className="mt-3 space-y-2 text-sm text-emerald-950">
            {parsed.diagram.purpose ? <p><strong className="font-semibold">Purpose:</strong> {parsed.diagram.purpose}</p> : null}
            {parsed.diagram.inputs ? <p><strong className="font-semibold">Inputs:</strong> {parsed.diagram.inputs}</p> : null}
            {parsed.diagram.insight ? <p><strong className="font-semibold">Insight:</strong> {parsed.diagram.insight}</p> : null}
            {parsed.diagram.caption ? <p><strong className="font-semibold">Caption:</strong> {parsed.diagram.caption}</p> : null}
          </div>
        </div>
      ) : null}

      <div className="mt-4 rounded-lg bg-neutral-100 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-muted)]">Read Before Practice</p>
        <p className="mt-1 text-sm text-[color:var(--color-muted)]">
          Focus on how this concept changes a baseball decision, then move to examples and practice.
        </p>
      </div>
    </article>
  );
}
