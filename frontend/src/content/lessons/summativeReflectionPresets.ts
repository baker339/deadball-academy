import type { SummativeReflection } from "../lessonTypes";
import { algebraUnit1SummativeRubric } from "./algebraUnit1Rubric";

type IntegrativeSummativeInput = Pick<SummativeReflection, "id" | "title" | "taskPrompt"> &
  Partial<Pick<SummativeReflection, "intro" | "deliverableTemplate" | "anchorResponses">>;

const defaultIntegrativeIntro =
  "Draft a short artifact you could show to a peer or instructor. It is not auto-graded; use the rubric to self-check before sharing.";

/** Reuses Algebra Unit 1 rubric rows for honor-system constructed responses across tracks. */
export function baseballIntegrativeSummative(input: IntegrativeSummativeInput): SummativeReflection {
  return {
    rubric: algebraUnit1SummativeRubric,
    ...input,
    intro: input.intro ?? defaultIntegrativeIntro,
  };
}
