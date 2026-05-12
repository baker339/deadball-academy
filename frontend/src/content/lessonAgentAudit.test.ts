import { describe, expect, it } from "vitest";
import { collectAllLessonKeys, deepCourseBlueprint } from "./deepCourseBlueprint";
import { runSinglePassLessonAudit } from "./lessonAgentAudit";

describe("runSinglePassLessonAudit", () => {
  it("returns a scorecard and memo for every lesson", () => {
    const lessonKeys = collectAllLessonKeys(deepCourseBlueprint);
    const { scorecards, memos } = runSinglePassLessonAudit();
    expect(scorecards).toHaveLength(lessonKeys.length);
    expect(memos).toHaveLength(lessonKeys.length);
  });

  it("provides all four dimensions per scorecard", () => {
    const { scorecards } = runSinglePassLessonAudit();
    for (const scorecard of scorecards) {
      expect(scorecard.dimensions).toHaveLength(4);
      expect(scorecard.overallSeverity).toBeTypeOf("string");
    }
  });
});
