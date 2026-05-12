/**
 * Writes per-track rubric agent packs (markdown + optional summary JSON).
 * Run from frontend/: npm run rubric:agent-packs
 */
import { mkdirSync, writeFileSync } from "fs";
import * as path from "path";
import { deepCourseBlueprint } from "../src/content/deepCourseBlueprint";
import {
  buildTrackRubricAgentPack,
  groupLessonKeysByTrack,
} from "../src/content/lessonRubricAuditByTrack";
import type { RubricLessonScorecard } from "../src/content/lessonRubricAudit";
import type { ReviewSeverity } from "../src/content/reviewNotes";

const repoRoot = path.resolve(__dirname, "../..");
const outDir = path.join(repoRoot, "docs/rubric-agent-packs");

type TrackSummary = {
  slug: string;
  title: string;
  lessonCount: number;
  overallSeverityTallies: Record<ReviewSeverity, number>;
  totalHeuristicFindings: number;
};

function tallySeverity(cards: RubricLessonScorecard[]): Record<ReviewSeverity, number> {
  const tallies: Record<ReviewSeverity, number> = { blocker: 0, major: 0, minor: 0, note: 0 };
  for (const c of cards) {
    tallies[c.overallSeverity] += 1;
  }
  return tallies;
}

function escapeMdCell(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function renderPackMarkdown(pack: ReturnType<typeof buildTrackRubricAgentPack>): string {
  const lines: string[] = [];
  lines.push(`# Rubric agent pack: ${pack.trackTitle}`);
  lines.push("");
  lines.push(`**Track slug:** \`${pack.trackSlug}\``);
  lines.push("");
  lines.push(`**Rubric (canonical):** [lesson-editor-rubric.md](../lesson-editor-rubric.md)`);
  lines.push("");
  lines.push(
    "**Preflight heuristics:** `runRubricLessonAuditForTrack` / `lessonRubricAudit.ts` (automatable criteria only; not editorial judgment).",
  );
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Agent instructions");
  lines.push("");
  lines.push(pack.agentInstructionsMarkdown);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Lesson overview (heuristic preflight)");
  lines.push("");
  lines.push("| # | Lesson key | Title | overallSeverity | Finding count |");
  lines.push("|---:|---|---|---|---:|");
  pack.lessons.forEach((L, i) => {
    const sc = L.scorecard;
    lines.push(
      `| ${i + 1} | \`${escapeMdCell(sc.lessonKey)}\` | ${escapeMdCell(sc.title)} | **${sc.overallSeverity}** | ${sc.findings.length} |`,
    );
  });
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Per-lesson detail");
  lines.push("");

  pack.lessons.forEach((L, idx) => {
    const sc = L.scorecard;
    lines.push(`### ${idx + 1}. ${sc.title}`);
    lines.push("");
    lines.push(`- **lessonKey:** \`${sc.lessonKey}\``);
    lines.push(`- **Heuristic overallSeverity:** **${sc.overallSeverity}**`);
    lines.push(`- **Heuristic generatedAt:** ${sc.generatedAtIso}`);
    lines.push("");
    lines.push("**Heuristic findings:**");
    if (sc.findings.length === 0) {
      lines.push("- _(none)_");
    } else {
      for (const f of sc.findings) {
        lines.push(`- \`${f.criterionId}\` (${f.severity}): ${f.message}`);
      }
    }
    lines.push("");
    lines.push("#### Agent qualitative review");
    lines.push("");
    lines.push("- **Qualitative severity:** _[ blocker | major | minor | note | OK ]_");
    lines.push("- **Notes:**");
    lines.push("  - ");
    lines.push("- **Excerpt citations (if any):**");
    lines.push("  - ");
    lines.push("");
  });

  return lines.join("\n");
}

function main(): void {
  mkdirSync(outDir, { recursive: true });
  const bySlug = groupLessonKeysByTrack(deepCourseBlueprint);
  const summaries: TrackSummary[] = [];
  const generatedAtIso = new Date().toISOString();

  for (const track of deepCourseBlueprint) {
    const pack = buildTrackRubricAgentPack(track.slug);
    const md = renderPackMarkdown(pack);
    const filePath = path.join(outDir, `${track.slug}.md`);
    writeFileSync(filePath, md, "utf8");

    const cards = pack.lessons.map((L) => L.scorecard);
    summaries.push({
      slug: track.slug,
      title: track.title,
      lessonCount: bySlug.get(track.slug)?.length ?? 0,
      overallSeverityTallies: tallySeverity(cards),
      totalHeuristicFindings: cards.reduce((n, c) => n + c.findings.length, 0),
    });
  }

  const summaryPath = path.join(outDir, "summary.json");
  writeFileSync(
    summaryPath,
    JSON.stringify({ generatedAtIso, tracks: summaries }, null, 2),
    "utf8",
  );

  console.log(`Wrote ${deepCourseBlueprint.length} packs + summary.json → ${outDir}`);
}

main();
