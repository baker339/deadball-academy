/**
 * One-off scan: per-lesson heuristics for curriculum-freshman-review.md
 * Run: npx tsx scripts/curriculumFreshmanScan.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deepCourseBlueprint } from "../src/content/deepCourseBlueprint";
import { getAuthoredLessonDocument } from "../src/content/deepLessonLibrary";

const __dirname = dirname(fileURLToPath(import.meta.url));

function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function wordCount(s: string): number {
  return s.split(/\s+/).filter(Boolean).length;
}

/** Tokens that often confuse if not explicitly glossed in the same lesson body */
const RISKY_TERMS = [
  "iid",
  "homoskedastic",
  "heteroskedastic",
  "jacobian",
  "hessian",
  "eigen",
  "manifold",
  "posterior",
  "prior",
  "likelihood",
  "cdf",
  "pdf",
  "jensen",
  "mle",
  "bootstrap",
  "quantile",
  "covariance",
  "stationar",
  "ergodic",
  "hamiltonian",
  "lagrangian",
  "tensor",
  "convolution",
  "fourier",
  "taylor",
  "jacobian",
  "line integral",
  "flux",
  "curl",
  "divergence",
];

function teachingCore(doc: ReturnType<typeof getAuthoredLessonDocument>): string {
  if (!doc) return "";
  return [
    doc.whyItMatters,
    doc.lessonOpener,
    ...doc.conceptChunks.map((c) => `${c.explainLikeCoach} ${c.formalNote}`),
  ].join(" ");
}

function keyTermSet(doc: NonNullable<ReturnType<typeof getAuthoredLessonDocument>>): Set<string> {
  const s = new Set<string>();
  for (const t of doc.keyTerms ?? []) {
    s.add(t.term.toLowerCase());
    for (const w of t.term.toLowerCase().split(/\s+/)) s.add(w);
  }
  return s;
}

function main() {
  const lines: string[] = [];
  lines.push("# Curriculum freshman scan (machine-assisted)");
  lines.push("");
  lines.push("Heuristics: long sentences in teaching core, risky vocabulary not matched in keyTerms, formalNote length vs explainLikeCoach.");
  lines.push("");

  for (const track of deepCourseBlueprint) {
    lines.push(`## Track: ${track.title}`);
    lines.push("");
    for (const unit of track.units) {
      lines.push(`### Unit: ${unit.title}`);
      lines.push("");
      for (const lesson of unit.lessons) {
        const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
        const key = `${track.slug}::${unit.slug}::${lesson.slug}`;
        lines.push(`#### \`${key}\``);
        lines.push(`**Lesson title:** ${lesson.title}`);
        if (!doc) {
          lines.push("- (missing document)");
          lines.push("");
          continue;
        }
        const core = teachingCore(doc);
        const sents = splitSentences(core);
        const long = sents
          .map((s) => ({ s, w: wordCount(s) }))
          .filter((x) => x.w >= 42)
          .sort((a, b) => b.w - a.w)
          .slice(0, 2);
        const kt = keyTermSet(doc);
        const lower = core.toLowerCase();
        const hits = RISKY_TERMS.filter((t) => {
          const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
          if (!re.test(lower)) return false;
          return ![...kt].some((k) => k.includes(t) || t.includes(k));
        });
        const explainLen = doc.conceptChunks.reduce((a, c) => a + c.explainLikeCoach.length, 0);
        const formalLen = doc.conceptChunks.reduce((a, c) => a + c.formalNote.length, 0);
        const ratio = explainLen > 0 ? (formalLen / explainLen).toFixed(2) : "?";

        lines.push("- **Confused questions (heuristic):**");
        if (long.length === 0) {
          lines.push("  - No ≥42-word sentences flagged in teaching core (still may be dense).");
        } else {
          for (const { s, w } of long) {
            const clip = s.length > 220 ? `${s.slice(0, 217)}…` : s;
            lines.push(`  - This ${w}-word sentence packs several ideas; where should a reader pause to check units or assumptions? “${clip}”`);
          }
        }
        if (hits.length) {
          lines.push(`  - Terms like **${hits.slice(0, 6).join(", ")}** appear in the teaching core; are they all tied to plain-language definitions or \`keyTerms\`?`);
        }

        lines.push("- **Unclear instruction (heuristic):**");
        lines.push(`  - formalNote vs explainLikeCoach total length ratio ≈ **${ratio}** (high ratios can mean the “coach voice” is thinner than the formal layer).`);
        if ((doc.prerequisites?.length ?? 0) > 0) {
          const p = doc.prerequisites.join(" | ");
          if (wordCount(p) < 12 && doc.prerequisites.length >= 3) {
            lines.push("  - Prerequisites are very short phrases; a freshman may not know how to self-check readiness.");
          }
        }
        lines.push("");
      }
    }
  }

  const docsDir = join(__dirname, "..", "docs");
  mkdirSync(docsDir, { recursive: true });
  const out = join(docsDir, "curriculum-freshman-review-SCAN.md");
  writeFileSync(out, lines.join("\n"), "utf8");
  console.log("Wrote", out);
}

main();
