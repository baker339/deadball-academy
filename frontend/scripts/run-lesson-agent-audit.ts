/**
 * Single-pass lesson audit generator.
 * Run: npx tsx scripts/run-lesson-agent-audit.ts
 *
 * Writes markdown memos and scorecard JSON under docs/agent-audit/ (relative to cwd).
 * Those outputs are not gitignored; new files show up as untracked until you commit or delete them.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { runSinglePassLessonAudit } from "../src/content/lessonAgentAudit";

function sanitizeFileKey(lessonKey: string): string {
  return lessonKey.replace(/::/g, "__");
}

function renderMemoMarkdown(input: {
  lessonKey: string;
  title: string;
  summary: string;
  strengths: string[];
  gaps: string[];
  nextActions: string[];
}): string {
  const lines: string[] = [];
  lines.push(`# ${input.title}`);
  lines.push("");
  lines.push(`- Lesson key: \`${input.lessonKey}\``);
  lines.push(`- Summary: ${input.summary}`);
  lines.push("");
  lines.push("## Strengths");
  lines.push("");
  for (const item of input.strengths) lines.push(`- ${item}`);
  lines.push("");
  lines.push("## Gaps");
  lines.push("");
  if (input.gaps.length === 0) {
    lines.push("- No major machine-detected gaps in this pass; human review still required.");
  } else {
    for (const item of input.gaps) lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push("## Recommended next actions");
  lines.push("");
  for (const item of input.nextActions) lines.push(`- ${item}`);
  lines.push("");
  return lines.join("\n");
}

function main() {
  const { scorecards, memos } = runSinglePassLessonAudit();
  const docsRoot = path.join(process.cwd(), "docs", "agent-audit");
  const memoRoot = path.join(docsRoot, "memos");
  mkdirSync(memoRoot, { recursive: true });

  writeFileSync(path.join(docsRoot, "lesson-audit-scorecards.json"), JSON.stringify(scorecards, null, 2), "utf8");

  for (const memo of memos) {
    const fileName = `${sanitizeFileKey(memo.lessonKey)}.md`;
    writeFileSync(path.join(memoRoot, fileName), renderMemoMarkdown(memo), "utf8");
  }

  const indexLines: string[] = [];
  indexLines.push("# Lesson agent audit outputs");
  indexLines.push("");
  indexLines.push(`Generated ${scorecards.length} scorecards and ${memos.length} narrative memos.`);
  indexLines.push("");
  indexLines.push("- Structured scorecards: `docs/agent-audit/lesson-audit-scorecards.json`");
  indexLines.push("- Narrative memos: `docs/agent-audit/memos/*.md`");
  indexLines.push("");
  writeFileSync(path.join(docsRoot, "README.md"), indexLines.join("\n"), "utf8");

  console.log(`Wrote ${scorecards.length} scorecards and ${memos.length} memos under docs/agent-audit`);
}

main();
