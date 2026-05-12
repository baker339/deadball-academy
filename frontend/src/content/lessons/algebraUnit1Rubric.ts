import type { SummativeRubricRow } from "../lessonTypes";

/** Shared 4×4 rubric for Algebra Unit 1 summative drafts (Linear Expressions…). */
export const algebraUnit1SummativeRubric: SummativeRubricRow[] = [
  {
    criterion: "Baseball context",
    excellent: "Specific role, decision window, and metrics tied to a plausible scenario.",
    proficient: "Clear scenario with at least one concrete baseball quantity or role named.",
    developing: "Generic baseball mention; scenario lacks specificity.",
    needsSupport: "No identifiable baseball context or misaligned scenario.",
  },
  {
    criterion: "Units & symbols",
    excellent: "Every symbol defined with units; invalid operations explicitly ruled out.",
    proficient: "Key variables labeled; major unit issues addressed.",
    developing: "Some variables or units missing; minor dimensional gaps.",
    needsSupport: "Units absent or incompatible operations uncorrected.",
  },
  {
    criterion: "Reasoning & checks",
    excellent: "Shows a verification step (substitution, bound, estimate, or cross-check).",
    proficient: "Mentions at least one plausibility or correctness check.",
    developing: "Arithmetic only; weak or missing validation logic.",
    needsSupport: "No evidence of checking; likely errors unaddressed.",
  },
  {
    criterion: "Staff-ready communication",
    excellent: "Concise, ordered, and readable by a coach or analyst without re-interpretation.",
    proficient: "Readable with minor organization issues.",
    developing: "Hard to follow; jargon without definitions.",
    needsSupport: "Fragmented or unclear; unusable for decision support.",
  },
];
