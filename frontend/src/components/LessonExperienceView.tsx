"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import type { LessonDocument } from "../content/deepLessonLibrary";
import { renderMathText } from "../lib/mathText";
import ConceptCard from "./ConceptCard";
import InlineCheckpoint from "./InlineCheckpoint";
import LessonAssessmentPanel from "./LessonAssessmentPanel";
import LessonFlowShell from "./LessonFlowShell";
import MarkLessonCompleteButton from "./MarkLessonCompleteButton";
import PracticeTabPanel from "./PracticeTabPanel";
import RubricReflectionPanel from "./RubricReflectionPanel";
import WorkedExampleStepper from "./WorkedExampleStepper";

export type LessonExperienceContext = "learn" | "composer";

export type ComposerIntroEditSlots = {
  why?: ReactNode;
  opener?: ReactNode;
};

export type ComposerConceptCardSlots = Record<
  number,
  {
    guided?: ReactNode;
    formal?: ReactNode;
  }
>;

export type ComposerSectionHighlight =
  | { kind: "why" }
  | { kind: "opener" }
  | { kind: "concept"; index: number }
  | null;

export type LessonExperienceViewProps = {
  document: LessonDocument;
  trackSlug: string;
  unitSlug: string;
  lessonSlug: string;
  context?: LessonExperienceContext;
  /** Defaults to learner shell: centered container + vertical padding */
  outerClassName?: string;
  introEditSlots?: ComposerIntroEditSlots;
  conceptCardSlots?: ComposerConceptCardSlots;
  /** Highlights the intro / concept region that maps to the focused CMS block */
  composerHighlight?: ComposerSectionHighlight;
};

type StepId = "intro" | "build" | "apply" | "checkpoint" | "summary";

const stepOrder: StepId[] = ["intro", "build", "apply", "checkpoint", "summary"];

function sanitizeInstructionalVoice(value: string): string {
  return value
    .replace(/textbook-first lesson/gi, "lesson")
    .replace(/textbook-first style/gi, "structured instructional style")
    .replace(
      /this lesson is written in a textbook-first style so learners can move from precise definition to reliable baseball interpretation with minimal ambiguity\.\s*/gi,
      "",
    )
    .replace(/textbook-first/gi, "structured");
}

function sectionRing(active: boolean): string {
  return active ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-[color:var(--color-reading-bg)]" : "";
}

export default function LessonExperienceView({
  document,
  trackSlug,
  unitSlug,
  lessonSlug,
  context = "learn",
  outerClassName,
  introEditSlots,
  conceptCardSlots,
  composerHighlight,
}: LessonExperienceViewProps) {
  const isComposer = context === "composer";
  const assessmentStorageKey = `assessment-pass:${trackSlug}:${unitSlug}:${lessonSlug}`;
  const [activeStep, setActiveStep] = useState<StepId>("intro");
  const [assessmentPassed, setAssessmentPassed] = useState(false);

  const isPilotLesson = useMemo(
    () =>
      lessonSlug === "unit-circle-radians-and-angular-velocity-in-context" ||
      lessonSlug === "environmental-uncertainty-communication",
    [lessonSlug],
  );

  const introComplete = activeStep !== "intro";

  const steps = [
    {
      id: "intro",
      title: "Topic Setup",
      description: "Context, goals, and roadmap",
      complete: introComplete,
    },
    {
      id: "build",
      title: "Build Understanding",
      description: "Concept cards with mini checks",
      complete: stepOrder.indexOf(activeStep) > stepOrder.indexOf("build"),
    },
    {
      id: "apply",
      title: "Apply The Ideas",
      description: "Worked walkthroughs then cumulative practice",
      complete: stepOrder.indexOf(activeStep) > stepOrder.indexOf("apply"),
    },
    {
      id: "checkpoint",
      title: "Final Checkpoint",
      description: "Single graded mastery check",
      complete: assessmentPassed,
    },
    {
      id: "summary",
      title: "Wrap + Next Bridge",
      description: "Synthesis and completion",
      complete: false,
    },
  ];

  const scrollToLessonTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectStep = (step: StepId) => {
    setActiveStep(step);
    scrollToLessonTop();
  };

  const moveStep = (direction: "prev" | "next") => {
    const idx = stepOrder.indexOf(activeStep);
    if (direction === "prev" && idx > 0) selectStep(stepOrder[idx - 1]!);
    if (direction === "next" && idx < stepOrder.length - 1) selectStep(stepOrder[idx + 1]!);
  };

  const outer = outerClassName ?? "ui-container ui-lesson-max py-10";

  const footerLibraryHref = isComposer ? "/cms/lessons" : "/learn/library";
  const footerLibraryLabel = isComposer ? "Back to lessons" : "Back to Library";

  return (
    <div className={`${outer} min-w-0 ${isComposer ? "scroll-mt-28 sm:scroll-mt-32" : ""}`}>
      <div className="ui-lesson-reading">
        <LessonFlowShell
          title={document.title}
          trackTitle={document.trackTitle}
          trackSlug={trackSlug}
          unitTitle={document.unitTitle}
          steps={steps}
          activeStepId={activeStep}
          onSelectStep={(id) => selectStep(id as StepId)}
        >
          {isPilotLesson ? (
            <div className="mb-4 rounded-lg border border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-muted)] p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">Pilot Lesson Experience</p>
              <p className="mt-1 text-sm text-[color:var(--color-reading-fg)]">
                This lesson uses the full Brilliant-style interactive flow pilot (guided cards, step reveals, and animated checkpoints).
              </p>
            </div>
          ) : null}

          {activeStep === "intro" ? (
            <section className="space-y-6">
              <div
                className={`ui-card-major border-[color:var(--color-accent-border)] bg-[color:var(--color-accent-muted)] p-5 rounded-xl transition ${sectionRing(
                  composerHighlight?.kind === "why",
                )}`}
              >
                <h2 className="text-xl font-bold text-[color:var(--color-reading-fg)]">Why This Matters</h2>
                {introEditSlots?.why != null ? (
                  <div className="mt-2">{introEditSlots.why}</div>
                ) : (
                  <div className="lesson-prose mt-2">{renderMathText(sanitizeInstructionalVoice(document.whyItMatters))}</div>
                )}
              </div>
              <div
                className={`ui-card-major border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-5 rounded-xl transition ${sectionRing(
                  composerHighlight?.kind === "opener",
                )}`}
              >
                <h2 className="text-xl font-bold text-[color:var(--color-reading-fg)]">Lesson Opener</h2>
                {introEditSlots?.opener != null ? (
                  <div className="mt-2">{introEditSlots.opener}</div>
                ) : (
                  <div className="lesson-prose mt-2">{renderMathText(sanitizeInstructionalVoice(document.lessonOpener))}</div>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                  <h3 className="text-lg font-semibold text-[color:var(--color-reading-fg)]">Prerequisites</h3>
                  <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-reading-muted)]">
                    {document.prerequisites.map((item) => (
                      <li key={item}>- {renderMathText(item)}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                  <h3 className="text-lg font-semibold text-[color:var(--color-reading-fg)]">Learning Objectives</h3>
                  <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-reading-muted)]">
                    {document.objectives.map((objective) => (
                      <li key={objective}>- {renderMathText(objective)}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <article className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                <h3 className="text-lg font-semibold text-[color:var(--color-reading-fg)]">Roadmap</h3>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[color:var(--color-reading-muted)]">
                  {document.narrativeFlow.map((step) => (
                    <li key={step}>{renderMathText(sanitizeInstructionalVoice(step))}</li>
                  ))}
                </ol>
              </article>
            </section>
          ) : null}

          {activeStep === "build" ? (
            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-[color:var(--color-reading-fg)]">Build Understanding</h2>
              <p className="text-sm text-[color:var(--color-reading-muted)]">
                Read the full teaching sections below first. They are the primary lesson content; mini checks are only quick comprehension probes
                after the teaching text.
              </p>
              {document.conceptChunks.map((entry, index) => (
                <div
                  key={`${entry.heading}-${index}`}
                  className={`rounded-xl transition ${sectionRing(composerHighlight?.kind === "concept" && composerHighlight.index === index)}`}
                >
                  <ConceptCard
                    heading={entry.heading}
                    guidedExplanation={entry.explainLikeCoach}
                    formalNote={entry.formalNote}
                    equation={entry.equation}
                    figure={entry.figure}
                    composerSlots={conceptCardSlots?.[index]}
                  />
                </div>
              ))}
              <div className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] space-y-3 p-4">
                <h3 className="text-lg font-semibold text-[color:var(--color-reading-fg)]">Mini Checks (Optional)</h3>
                {document.quickChecks.slice(0, 2).map((check) => (
                  <InlineCheckpoint
                    key={check.prompt}
                    prompt={check.prompt}
                    expected={check.answer}
                    explanation={check.explanation}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {activeStep === "apply" ? (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[color:var(--color-reading-fg)]">Apply The Ideas</h2>
              <p className="text-sm text-[color:var(--color-reading-muted)]">
                First watch expert reasoning in worked walkthroughs, then practice the same moves across warmup, core, and stretch prompts.
              </p>
              {document.workedExamples.map((example) => (
                <WorkedExampleStepper key={example.title} example={example} />
              ))}
              <div className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                <h3 className="text-lg font-semibold text-[color:var(--color-reading-fg)]">Cumulative Practice</h3>
                <p className="mt-1 text-sm text-[color:var(--color-reading-muted)]">
                  Use these sets to consolidate what you just saw in the walkthroughs.
                </p>
              </div>
              <PracticeTabPanel sets={document.practiceSets} />
            </section>
          ) : null}

          {activeStep === "checkpoint" ? (
            <section>
              {document.assessmentItems?.length ? (
                <LessonAssessmentPanel
                  storageKey={assessmentStorageKey}
                  items={document.assessmentItems}
                  onPassChange={setAssessmentPassed}
                />
              ) : null}
            </section>
          ) : null}

          {activeStep === "summary" ? (
            <section className="space-y-4">
              <article className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                <h2 className="text-xl font-bold text-[color:var(--color-reading-fg)]">Common Mistakes</h2>
                <ul className="mt-2 space-y-1 text-sm text-[color:var(--color-reading-muted)]">
                  {document.commonMistakes.map((item) => (
                    <li key={item}>- {renderMathText(item)}</li>
                  ))}
                </ul>
              </article>
              {document.keyTerms?.length ? (
                <article className="rounded-lg border border-[color:var(--color-reading-border)] bg-[color:var(--color-reading-bg)] p-4">
                  <h2 className="text-xl font-bold text-[color:var(--color-reading-fg)]">Key Terms</h2>
                  <div className="mt-2 space-y-2 text-sm text-[color:var(--color-reading-muted)]">
                    {document.keyTerms.map((term) => (
                      <p key={term.term}>
                        <strong className="text-[color:var(--color-reading-fg)]">{renderMathText(term.term)}:</strong>{" "}
                        {renderMathText(term.definition)}
                        {term.lessonPath ? (
                          <>
                            {" "}
                            <Link href={term.lessonPath} className="ui-focus ui-link font-semibold">
                              {term.lessonTitle ?? "Related lesson"}
                            </Link>
                          </>
                        ) : null}
                      </p>
                    ))}
                  </div>
                </article>
              ) : null}
              <article className="rounded-xl border border-[color:var(--color-primary-hover)] bg-[color:var(--color-primary)] p-5 text-[color:var(--color-primary-fg)]">
                <h2 className="text-xl font-bold">Lesson Summary</h2>
                <p className="mt-2 text-sm opacity-95">{renderMathText(document.lessonSummary)}</p>
                <h3 className="mt-4 text-lg font-semibold">Synthesis Prompt</h3>
                <p className="mt-1 text-sm opacity-95">{renderMathText(document.synthesisPrompt)}</p>
                <h3 className="mt-4 text-lg font-semibold">Next Lesson Bridge</h3>
                <p className="mt-1 text-sm opacity-95">{renderMathText(document.nextLessonBridge)}</p>
              </article>
              {document.summativeReflection ? (
                <RubricReflectionPanel
                  storageKey={`summative:${trackSlug}:${unitSlug}:${lessonSlug}:${document.summativeReflection.id}`}
                  reflection={document.summativeReflection}
                />
              ) : null}
              {!isComposer ? (
                <MarkLessonCompleteButton
                  courseSlug={trackSlug}
                  moduleSlug={unitSlug}
                  lessonSlug={lessonSlug}
                  assessmentRequired={Boolean(document.assessmentItems?.length)}
                  assessmentStorageKey={assessmentStorageKey}
                />
              ) : null}
            </section>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => moveStep("prev")}
              disabled={activeStep === "intro"}
              className="ui-focus ui-btn-secondary !px-3 !py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous step
            </button>
            <button
              type="button"
              onClick={() => moveStep("next")}
              disabled={activeStep === "summary"}
              className="ui-focus ui-btn-primary !px-3 !py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next step
            </button>
            <Link href={footerLibraryHref} className="ui-focus ui-btn-secondary !px-3 !py-1.5 ml-auto text-sm">
              {footerLibraryLabel}
            </Link>
          </div>
        </LessonFlowShell>
      </div>
    </div>
  );
}
