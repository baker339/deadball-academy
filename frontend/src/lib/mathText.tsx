import { Fragment, ReactNode } from "react";
import { BlockMath, InlineMath } from "react-katex";

export type MathSegment = {
  type: "text" | "inlineMath" | "blockMath";
  value: string;
};

export function splitMathSegments(input: string): MathSegment[] {
  const segments: MathSegment[] = [];
  const pattern = /(\\\[(.+?)\\\]|\\\((.+?)\\\))/gs;
  let lastIndex = 0;

  for (const match of input.matchAll(pattern)) {
    const full = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ type: "text", value: input.slice(lastIndex, index) });
    }

    const blockContent = match[2];
    const inlineContent = match[3];
    if (typeof blockContent === "string") {
      segments.push({ type: "blockMath", value: blockContent });
    } else if (typeof inlineContent === "string") {
      segments.push({ type: "inlineMath", value: inlineContent });
    }

    lastIndex = index + full.length;
  }

  if (lastIndex < input.length) {
    segments.push({ type: "text", value: input.slice(lastIndex) });
  }

  return segments;
}

export function renderMathText(input: string): ReactNode {
  const segments = splitMathSegments(input);

  return segments.map((segment, idx) => {
    if (segment.type === "inlineMath") {
      return <InlineMath key={`math-inline-${idx}`} math={segment.value} />;
    }
    if (segment.type === "blockMath") {
      return <BlockMath key={`math-block-${idx}`} math={segment.value} />;
    }
    return <Fragment key={`math-text-${idx}`}>{segment.value}</Fragment>;
  });
}
