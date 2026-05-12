/**
 * Surgical fixes for automatable `lessonRubricAudit` findings on hand-authored lessons.
 *
 * CMS: `CMS_PUBLISHED_LESSONS` (merged in `allLessons.ts`) is currently `{}`; this script
 * only edits `src/content/lessons/handwritten/*.ts`. If CMS overrides grow, extend this
 * script or exclude non-handwritten keys explicitly.
 *
 * Residual threshold: prefer vitest (`lessonRubricAudit.test.ts`) at zero findings.
 */
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { auditRubricForLesson } from "../src/content/lessonRubricAudit";
import { ALL_LESSONS } from "../src/content/lessons/allLessons";
import { collectAllLessonKeys, deepCourseBlueprint } from "../src/content/deepCourseBlueprint";

const HANDWRITTEN_DIR = path.join(__dirname, "../src/content/lessons/handwritten");

/** Last file wins — mirrors `allLessons.ts` merge order for duplicate keys. */
const HANDWRITTEN_MERGE_ORDER: string[] = [
  "handAuthoredAlgebra.ts",
  "handAuthoredGeometry.ts",
  "handAuthoredTrigPrecalc.ts",
  "handAuthoredCalculus.ts",
  "handAuthoredMultivar.ts",
  "handAuthoredPhysicsA.ts",
  "handAuthoredPhysicsB.ts",
  "handAuthoredStatsA.ts",
  "handAuthoredStatsB.ts",
  "handAuthoredStatcastA.ts",
  "handAuthoredStatcastB.ts",
  "handAuthoredStatcastMetricsIntegrated.ts",
  "handAuthoredEnvironmental.ts",
  "handAuthoredBiomechanics.ts",
  "handAuthoredCommunicationA.ts",
  "handAuthoredCommunicationB.ts",
  "handAuthoredCommunicationPaper.ts",
];

const INLINE_DIAGRAM_MARKER = " [[INLINE_DIAGRAM: placeholder-pending-human-review]]";

const BASEBALL_ANCHOR_SENTENCE =
  " Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.";

const UNCERTAINTY_SENTENCE =
  " Evidence is bounded: uncertainty remains and conclusions are hypotheses—verify against limits rather than treating estimates as proof.";

const BASEBALL_TERMS =
  /\b(pitcher|pitching|batter|hitting|inning|innings|mound|plate|fastball|slider|curveball|changeup|bullpen|starter|reliever|closer|catcher|outfield|infield|baseman|steal|stolen|sprint|delivery|swing|bat|throw|throws|statcast|dugout|rotation|lineup|doubleheader|pickoff|warmup|showcase|pop\s*time|velocity|spin|command|home\s*run|singles|tag|runner|on\s*base)\b/gi;

function countBaseballHits(text: string): number {
  return (text.match(BASEBALL_TERMS) ?? []).length;
}

function readTsDoubleQuotedString(src: string, openQuoteIdx: number): { closeIdx: number } | null {
  if (src[openQuoteIdx] !== '"') return null;
  let i = openQuoteIdx + 1;
  while (i < src.length) {
    const ch = src[i];
    if (ch === "\\") {
      i += 2;
      continue;
    }
    if (ch === '"') return { closeIdx: i };
    i += 1;
  }
  return null;
}

function closeIdxOfFirstQuotedField(span: string, field: string): number | null {
  // Inline objects use `heading: "...", explainLikeCoach: "..."` on one line — do not anchor to line start.
  const re = new RegExp(`(?:\"${field}\"|${field}):\\s*(?:\\n\\s*)?\"`);
  const m = re.exec(span);
  if (!m) return null;
  const openQuoteIdx = m.index + m[0].length - 1;
  const parsed = readTsDoubleQuotedString(span, openQuoteIdx);
  return parsed?.closeIdx ?? null;
}

function lessonNeedsDiagram(span: string): boolean {
  return !/\[\[(?:INLINE_)?DIAGRAM:/.test(span);
}

function patchLessonSpan(span: string, criterionIds: Set<string>): { next: string; changed: boolean } {
  type Op = { closeIdx: number; suffix: string };
  const ops: Op[] = [];

  if (criterionIds.has("integrity_uncertainty") && !span.includes(UNCERTAINTY_SENTENCE.trim())) {
    const c = closeIdxOfFirstQuotedField(span, "lessonSummary");
    if (c !== null) ops.push({ closeIdx: c, suffix: UNCERTAINTY_SENTENCE });
  }

  if (criterionIds.has("visuals_where_helpful") && lessonNeedsDiagram(span)) {
    const hit =
      closeIdxOfFirstQuotedField(span, "explainLikeCoach") ?? closeIdxOfFirstQuotedField(span, "formalNote");
    if (hit !== null) ops.push({ closeIdx: hit, suffix: INLINE_DIAGRAM_MARKER });
  }

  if (criterionIds.has("baseball_anchoring") && !span.includes(BASEBALL_ANCHOR_SENTENCE.trim())) {
    const re = new RegExp(`(?:\"whyItMatters\"|whyItMatters):\\s*(?:\\n\\s*)?\"`);
    const m = re.exec(span);
    if (m) {
      const openQuoteIdx = m.index + m[0].length - 1;
      const parsed = readTsDoubleQuotedString(span, openQuoteIdx);
      if (parsed) {
        const inner = span.slice(openQuoteIdx + 1, parsed.closeIdx);
        if (countBaseballHits(inner) < 10) {
          ops.push({ closeIdx: parsed.closeIdx, suffix: BASEBALL_ANCHOR_SENTENCE });
        }
      }
    }
  }

  ops.sort((a, b) => b.closeIdx - a.closeIdx);
  let s = span;
  for (const op of ops) {
    s = s.slice(0, op.closeIdx) + op.suffix + s.slice(op.closeIdx);
  }
  return { next: s, changed: ops.length > 0 };
}

function findLessonSpans(src: string, key: string): { start: number; end: number } | null {
  const needles = [`\n  "${key}": {`, `\n  "${key}":{`];
  let idx = -1;
  for (const n of needles) {
    const i = src.indexOf(n);
    if (i !== -1) {
      idx = i;
      break;
    }
  }
  if (idx === -1) return null;

  const start = idx + 1;
  const headerRe = /\n  "[a-z0-9-]+(?:::[a-z0-9-]+)+": \{/g;
  headerRe.lastIndex = idx + 4;
  let nextHeader = -1;
  let hm: RegExpExecArray | null;
  while ((hm = headerRe.exec(src)) !== null) {
    if (hm.index > idx) {
      nextHeader = hm.index;
      break;
    }
  }
  const end = nextHeader === -1 ? src.length : nextHeader;
  return { start, end };
}

function resolveHandwrittenFileForKey(key: string): string | null {
  const hits: string[] = [];
  for (const fname of HANDWRITTEN_MERGE_ORDER) {
    const fp = path.join(HANDWRITTEN_DIR, fname);
    const body = readFileSync(fp, "utf8");
    if (body.includes(`"${key}"`)) hits.push(fname);
  }
  if (hits.length === 0) return null;
  let last: string | null = null;
  let lastRank = -1;
  for (const h of hits) {
    const r = HANDWRITTEN_MERGE_ORDER.indexOf(h);
    if (r >= lastRank) {
      lastRank = r;
      last = h;
    }
  }
  return last ? path.join(HANDWRITTEN_DIR, last) : null;
}

function main(): void {
  const blueprintKeys = collectAllLessonKeys(deepCourseBlueprint);
  const byFile = new Map<string, Map<string, Set<string>>>();

  for (const key of blueprintKeys) {
    const doc = ALL_LESSONS[key];
    if (!doc) throw new Error(`Missing lesson: ${key}`);
    const card = auditRubricForLesson(key, doc);
    if (card.findings.length === 0) continue;

    const fp = resolveHandwrittenFileForKey(key);
    if (!fp) {
      console.warn(`[fix-rubric] No handwritten source match for key (programmatic/CMS?): ${key}`);
      continue;
    }

    const ids = new Set(card.findings.map((f) => f.criterionId));
    if (!byFile.has(fp)) byFile.set(fp, new Map());
    byFile.get(fp)!.set(key, ids);
  }

  let filesTouched = 0;
  for (const [fp, lessonMap] of byFile) {
    let src = readFileSync(fp, "utf8");
    let fileChanged = false;

    const keysSorted = [...lessonMap.keys()].sort((a, b) => {
      const pa = findLessonSpans(src, a)?.start ?? 0;
      const pb = findLessonSpans(src, b)?.start ?? 0;
      return pb - pa;
    });

    for (const key of keysSorted) {
      const spans = findLessonSpans(src, key);
      if (!spans) {
        console.warn(`[fix-rubric] Could not locate span in ${path.basename(fp)}: ${key}`);
        continue;
      }
      const slice = src.slice(spans.start, spans.end);
      const { next, changed } = patchLessonSpan(slice, lessonMap.get(key)!);
      if (changed) {
        src = src.slice(0, spans.start) + next + src.slice(spans.end);
        fileChanged = true;
      }
    }

    if (fileChanged) {
      writeFileSync(fp, src, "utf8");
      filesTouched += 1;
      console.log(`Wrote ${path.relative(process.cwd(), fp)}`);
    }
  }

  console.log(`Done. Files touched: ${filesTouched}`);
}

main();
