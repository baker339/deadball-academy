export type LessonBlueprint = {
  title: string;
  slug: string;
};

export type UnitBlueprint = {
  title: string;
  slug: string;
  lessons: LessonBlueprint[];
};

export type TrackBlueprint = {
  title: string;
  slug: string;
  units: UnitBlueprint[];
};

export type ConceptChunk = {
  heading: string;
  explainLikeCoach: string;
  formalNote: string;
  equation?: string;
  /** Optional static figure under `/public` (e.g. `/curriculum/foo.svg`). */
  figure?: { src: string; alt: string };
};

export type QuickCheck = {
  prompt: string;
  answer: string;
  explanation?: string;
};

export type WorkedExample = {
  title: string;
  scenario: string;
  walkthrough: string[];
  takeaway: string;
};

export type PracticeSet = {
  level: "warmup" | "core" | "stretch";
  prompts: {
    prompt: string;
    answer: string;
    explanation?: string;
  }[];
};

export type LessonTerm = {
  term: string;
  definition: string;
  lessonTitle?: string;
  lessonPath?: string;
};

export type LessonAssessmentItem = {
  id: string;
  type: "mcq" | "exact";
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanation: string;
};

/** Four-level rubric row for constructed responses (honor-system / instructor grading). */
export type SummativeRubricRow = {
  criterion: string;
  excellent: string;
  proficient: string;
  developing: string;
  needsSupport: string;
};

export type SummativeAnchorResponse = {
  label: string;
  excerpt: string;
  commentary: string;
};

/**
 * Summative artifact spec: rubric-visible task learners draft locally (export/copy).
 * Aligns with program-style evidence without requiring server-side grading in v1.
 */
export type SummativeReflection = {
  id: string;
  title: string;
  intro: string;
  taskPrompt: string;
  rubric: SummativeRubricRow[];
  /** Optional memo / report section headings for unit capstone-style work */
  deliverableTemplate?: string[];
  /** Anonymized weak/strong anchors for calibration */
  anchorResponses?: SummativeAnchorResponse[];
};

export type LessonDocument = {
  key: string;
  title: string;
  trackTitle: string;
  unitTitle: string;
  whyItMatters: string;
  lessonOpener: string;
  narrativeFlow: string[];
  objectives: string[];
  prerequisites: string[];
  conceptChunks: ConceptChunk[];
  quickChecks: QuickCheck[];
  workedExamples: WorkedExample[];
  practiceSets: PracticeSet[];
  commonMistakes: string[];
  lessonSummary: string;
  synthesisPrompt: string;
  nextLessonBridge: string;
  professorNotes: string;
  keyTerms?: LessonTerm[];
  assessmentItems?: LessonAssessmentItem[];
  summativeReflection?: SummativeReflection;
};

export type LessonDocumentDraft = Omit<LessonDocument, "keyTerms" | "assessmentItems" | "summativeReflection">;

export type LessonStudioStepType = "intro" | "build" | "apply" | "checkpoint" | "summary" | "custom";

export type LessonStudioStep = {
  id: string;
  title: string;
  type: LessonStudioStepType;
  description?: string;
  content?: Record<string, unknown>;
};

export type LessonStudioModuleType = "narrative" | "concept" | "practice" | "assessment" | "summary" | "custom";

export type LessonStudioModule = {
  id: string;
  title: string;
  type: LessonStudioModuleType;
  order: number;
  steps: LessonStudioStep[];
};

/**
 * Canonical persisted CMS payload shape:
 * - runtime lesson fields used by learner renderer
 * - studio module/step outline used by authoring UI
 */
export type CanonicalLessonPayload = LessonDocumentDraft & {
  modules: LessonStudioModule[];
};

export type AuthorBlockType = "why_this_matters" | "info" | "diagram" | "latex" | "text" | "checkpoint";

type AuthorBlockBase = {
  id: string;
  order: number;
  type: AuthorBlockType;
  title: string;
};

export type AuthorTextBlock = AuthorBlockBase & {
  type: "text";
  text: string;
};

export type AuthorInfoBlock = AuthorBlockBase & {
  type: "info";
  tone: "coach" | "formal" | "callout";
  text: string;
};

export type AuthorWhyThisMattersBlock = AuthorBlockBase & {
  type: "why_this_matters";
  text: string;
};

export type AuthorDiagramBlock = AuthorBlockBase & {
  type: "diagram";
  src: string;
  alt: string;
  caption?: string;
  placeholder?: boolean;
};

export type AuthorLatexBlock = AuthorBlockBase & {
  type: "latex";
  equation: string;
  explanation?: string;
};

export type AuthorCheckpointBlock = AuthorBlockBase & {
  type: "checkpoint";
  prompt: string;
  answer: string;
  explanation?: string;
};

export type AuthorBlock =
  | AuthorTextBlock
  | AuthorInfoBlock
  | AuthorWhyThisMattersBlock
  | AuthorDiagramBlock
  | AuthorLatexBlock
  | AuthorCheckpointBlock;

function makeStableId(prefix: string, index: number): string {
  return `${prefix}-${String(index + 1).padStart(3, "0")}`;
}

export function defaultLessonDocumentDraft(): LessonDocumentDraft {
  return {
    key: "",
    title: "",
    trackTitle: "",
    unitTitle: "",
    whyItMatters: "",
    lessonOpener: "",
    narrativeFlow: [],
    objectives: [],
    prerequisites: [],
    conceptChunks: [{ heading: "", explainLikeCoach: "", formalNote: "" }],
    quickChecks: [{ prompt: "", answer: "" }],
    workedExamples: [{ title: "", scenario: "", walkthrough: [], takeaway: "" }],
    practiceSets: [{ level: "warmup", prompts: [{ prompt: "", answer: "" }] }],
    commonMistakes: [],
    lessonSummary: "",
    synthesisPrompt: "",
    nextLessonBridge: "",
    professorNotes: "",
  };
}

export function defaultCanonicalLessonPayload(): CanonicalLessonPayload {
  return {
    ...defaultLessonDocumentDraft(),
    modules: [],
  };
}

export function lessonDraftToAuthorBlocks(draft: LessonDocumentDraft): AuthorBlock[] {
  const blocks: AuthorBlock[] = [];
  blocks.push({
    id: makeStableId("why", 0),
    order: 0,
    type: "why_this_matters",
    title: "Why This Matters",
    text: draft.whyItMatters,
  });
  blocks.push({
    id: makeStableId("info", 0),
    order: 1,
    type: "info",
    title: "Lesson Opener",
    tone: "coach",
    text: draft.lessonOpener,
  });

  draft.conceptChunks.forEach((chunk, index) => {
    const baseOrder = blocks.length;
    blocks.push({
      id: makeStableId("text", index),
      order: baseOrder,
      type: "text",
      title: chunk.heading || `Concept ${index + 1}`,
      text: chunk.explainLikeCoach,
    });
    blocks.push({
      id: makeStableId("info", index + 1),
      order: baseOrder + 1,
      type: "info",
      title: `${chunk.heading || `Concept ${index + 1}`} Formal Note`,
      tone: "formal",
      text: chunk.formalNote,
    });
    if (chunk.figure?.src) {
      blocks.push({
        id: makeStableId("diagram", index),
        order: baseOrder + 2,
        type: "diagram",
        title: `${chunk.heading || `Concept ${index + 1}`} Diagram`,
        src: chunk.figure.src,
        alt: chunk.figure.alt ?? "",
        caption: "",
        placeholder: false,
      });
    }
    if (chunk.equation) {
      blocks.push({
        id: makeStableId("latex", index),
        order: baseOrder + 3,
        type: "latex",
        title: `${chunk.heading || `Concept ${index + 1}`} Equation`,
        equation: chunk.equation,
        explanation: "",
      });
    }
  });

  draft.quickChecks.forEach((check, index) => {
    blocks.push({
      id: makeStableId("check", index),
      order: blocks.length,
      type: "checkpoint",
      title: `Quick Check ${index + 1}`,
      prompt: check.prompt,
      answer: check.answer,
      explanation: check.explanation,
    });
  });

  blocks.push({
    id: makeStableId("summary", 0),
    order: blocks.length,
    type: "text",
    title: "Lesson Summary",
    text: draft.lessonSummary,
  });

  return blocks.map((block, index) => ({ ...block, order: index }));
}

export function authorBlocksToLessonDraft(baseDraft: LessonDocumentDraft, blocks: AuthorBlock[]): LessonDocumentDraft {
  const nextDraft: LessonDocumentDraft = {
    ...baseDraft,
    conceptChunks: [],
    quickChecks: [],
  };

  const sorted = [...blocks].sort((a, b) => a.order - b.order);
  const conceptByTitle = new Map<string, ConceptChunk>();

  for (const block of sorted) {
    if (block.type === "why_this_matters") {
      nextDraft.whyItMatters = block.text;
      continue;
    }
    if (block.type === "checkpoint") {
      nextDraft.quickChecks.push({ prompt: block.prompt, answer: block.answer, explanation: block.explanation });
      continue;
    }
    if (block.title === "Lesson Summary" && block.type === "text") {
      nextDraft.lessonSummary = block.text;
      continue;
    }
    if (block.type === "info" && block.title === "Lesson Opener") {
      nextDraft.lessonOpener = block.text;
      continue;
    }
    const chunkTitle = block.title.replace(" Formal Note", "").replace(" Diagram", "").replace(" Equation", "");
    const existing = conceptByTitle.get(chunkTitle) ?? {
      heading: chunkTitle,
      explainLikeCoach: "",
      formalNote: "",
    };

    if (block.type === "text") existing.explainLikeCoach = block.text;
    if (block.type === "info") {
      existing.formalNote = block.text;
    }
    if (block.type === "diagram") {
      existing.figure = { src: block.src, alt: block.alt };
    }
    if (block.type === "latex") {
      existing.equation = block.equation;
    }
    conceptByTitle.set(chunkTitle, existing);
  }

  nextDraft.conceptChunks = Array.from(conceptByTitle.values());
  if (!nextDraft.conceptChunks.length) {
    nextDraft.conceptChunks = [{ heading: "", explainLikeCoach: "", formalNote: "" }];
  }
  if (!nextDraft.quickChecks.length) {
    nextDraft.quickChecks = [{ prompt: "", answer: "" }];
  }
  return nextDraft;
}
