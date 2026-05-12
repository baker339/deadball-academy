import katex from "katex";
import { describe, expect, it } from "vitest";
import { deepCourseBlueprint } from "./deepCourseBlueprint";
import { getAuthoredLessonDocument } from "./deepLessonLibrary";
import type { LessonDocument } from "./lessonTypes";
import { splitMathSegments } from "../lib/mathText";

function collectRenderableStrings(doc: LessonDocument): string[] {
  const parts: string[] = [
    doc.whyItMatters,
    doc.lessonOpener,
    ...doc.narrativeFlow,
    ...doc.objectives,
    ...doc.prerequisites,
    ...doc.conceptChunks.flatMap((c) => [c.heading, c.explainLikeCoach, c.formalNote, c.equation ?? ""]),
    ...doc.quickChecks.flatMap((q) => [q.prompt, q.answer, q.explanation ?? ""]),
    ...doc.workedExamples.flatMap((w) => [w.title, w.scenario, w.takeaway, ...w.walkthrough]),
    ...doc.practiceSets.flatMap((s) => s.prompts.flatMap((p) => [p.prompt, p.answer, p.explanation ?? ""])),
    ...doc.commonMistakes,
    doc.lessonSummary,
    doc.synthesisPrompt,
    doc.nextLessonBridge,
    doc.professorNotes,
    ...(doc.keyTerms?.flatMap((t) => [t.term, t.definition]) ?? []),
    ...(doc.assessmentItems?.flatMap((a) => [a.prompt, a.explanation, ...(a.options ?? [])]) ?? []),
  ];
  return parts.filter((s) => s.length > 0);
}

function stripDelimitedMath(input: string): string {
  return input.replace(/\\\[(.+?)\\\]|\\\((.+?)\\\)/gs, " ");
}

function findUndelimitedMathSignal(text: string): string | null {
  const raw = stripDelimitedMath(text);
  const mathTokenChecks: RegExp[] = [
    /\bsprint_speed_ft_s\b/,
    /\bjump_time_ms\b/,
    /\bd2_ft\b/,
    /\bkRate\b/,
    /\bev\b/,
    /\bttoPenalty\b/,
    /\brelease_speed\b/,
    /\bspin_rate\b/,
  ];
  const checks: Array<{ re: RegExp; label: string }> = [
    {
      re: /\bQuotient\s+[A-Za-z]\s*\/\s*[A-Za-z]\b/,
      label: "quotient phrase that should be math-delimited",
    },
  ];
  if (mathTokenChecks.some((tokenRe) => tokenRe.test(raw)) && /(?:=|\s[+\-*/]\s)/.test(raw)) {
    return "raw math identifier token with operator";
  }
  for (const check of checks) {
    if (check.re.test(raw)) return check.label;
  }
  return null;
}

describe("lesson LaTeX segments", () => {
  it("renders every inline and block math segment with KaTeX without errors", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const key = `${track.slug}::${unit.slug}::${lesson.slug}`;
          for (const text of collectRenderableStrings(doc)) {
            const segments = splitMathSegments(text);
            for (const seg of segments) {
              if (seg.type === "text") continue;
              try {
                katex.renderToString(seg.value, {
                  displayMode: seg.type === "blockMath",
                  throwOnError: true,
                  strict: "ignore",
                });
              } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                throw new Error(`${key}: KaTeX failed on ${seg.type} "${seg.value.slice(0, 80)}...": ${msg}`);
              }
            }
          }
        }
      }
    }
  });

  it("rejects likely undelimited math tokens in lesson text", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const key = `${track.slug}::${unit.slug}::${lesson.slug}`;
          for (const text of collectRenderableStrings(doc)) {
            const signal = findUndelimitedMathSignal(text);
            if (signal) {
              throw new Error(`${key}: found ${signal} in "${text.slice(0, 120)}..."`);
            }
          }
        }
      }
    }
  });
});
