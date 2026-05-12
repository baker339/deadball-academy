import { describe, expect, it } from "vitest";
import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { rubricAuditSummary, runRubricLessonAudit } from "./lessonRubricAudit";

describe("runRubricLessonAudit", () => {
  it("returns one scorecard per blueprint lesson", () => {
    const keys = collectAllLessonKeys(deepCourseBlueprint);
    const cards = runRubricLessonAudit();
    expect(cards).toHaveLength(keys.length);
    for (const card of cards) {
      expect(card.lessonKey).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.trackSlug).toBeTruthy();
      expect(card.generatedAtIso).toMatch(/^\d{4}-/);
      expect(["blocker", "major", "minor", "note"]).toContain(card.overallSeverity);
      for (const f of card.findings) {
        expect(f.criterionId).toBeTruthy();
        expect(["blocker", "major", "minor", "note"]).toContain(f.severity);
      }
    }
  });

  it("exposes aggregate counts per rubric criterion", () => {
    const cards = runRubricLessonAudit();
    const summary = rubricAuditSummary(cards);
    expect(Object.keys(summary).length).toBeGreaterThan(0);
    for (const count of Object.values(summary)) {
      expect(count).toBeGreaterThanOrEqual(0);
    }
  });

  it("has zero automatable rubric findings for blueprint lessons", () => {
    const cards = runRubricLessonAudit();
    const nonzero = cards.filter((c) => c.findings.length > 0);
    expect(nonzero).toEqual([]);
  });
});
