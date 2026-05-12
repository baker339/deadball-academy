import { buildLibraryPath } from "./deepLessonLibrary";
import { deepCourseBlueprint } from "./deepCourseBlueprint";

export type CurriculumLesson = { slug: string; title: string; routePath: string };
export type CurriculumPhase = {
  slug: string;
  title: string;
  entryCriteria: string[];
  lessons: CurriculumLesson[];
  estimatedTimeHint?: string;
};
export type CurriculumTrack = {
  slug: string;
  title: string;
  outcomes: string[];
  prerequisites: string[];
  phases: CurriculumPhase[];
  assessments: string[];
};

const outcomesByTrack: Record<string, string[]> = {
  "algebra-foundations-for-baseball-analytics": [
    "Translate baseball planning questions into unit-safe expressions and equations.",
    "Solve and rearrange linear relationships with verification and feasibility checks.",
    "Document QA habits (bounds, estimation, substitution) for staff-facing outputs.",
  ],
  "geometry-foundations-for-baseball-context": [
    "Model field and flight geometry with coordinates, distances, and angles.",
    "Apply triangle and circle geometry to measurement and scaling problems.",
    "Justify geometric claims with explicit assumptions tied to baseball context.",
  ],
  "trigonometry-and-precalculus-for-baseball-modeling": [
    "Use trig and vector tools to decompose motion and orientation in baseball models.",
    "Interpret periodic and transformed functions as signals in athletic performance data.",
    "Prepare for calculus-style rate and optimization reasoning in applied settings.",
  ],
  "calculus-i-and-ii-for-baseball-dynamics": [
    "Compute and interpret derivatives and integrals for motion and accumulation questions.",
    "Apply optimization and related rates to constrained baseball decisions.",
    "Connect numerical methods to real data when closed forms are unavailable.",
  ],
  "multivariable-calculus-and-differential-equations": [
    "Work with partial derivatives, gradients, and multivariable constraints in models.",
    "Set up and interpret ODE-based dynamic models with stability intuition.",
    "Communicate sensitivity and locality assumptions for multivariate analyses.",
  ],
  "environmental-science-for-baseball-systems": [
    "Explain atmospheric and environmental factors that alter ball flight and operations.",
    "Analyze climate and weather variability implications for baseball decisions.",
    "Connect environmental uncertainty to communication and planning ethics.",
  ],
  "baseball-physics-foundations": [
    "Derive and validate mechanics-based ball-flight models.",
    "Connect geometric and trigonometric structure to measurable game outcomes.",
    "Communicate model assumptions and physical limitations with precision.",
  ],
  "statistical-modeling-for-baseball": [
    "Build, validate, and critique predictive/statistical models for baseball outcomes.",
    "Report uncertainty and robustness checks in professor-reviewable form.",
    "Separate association claims from causal claims.",
  ],
  "data-analysis-with-statcast": [
    "Construct reproducible data workflows from event-level baseball data.",
    "Engineer and validate features without leakage.",
    "Produce high-integrity visual analyses tied to explicit questions.",
  ],
  "communicating-sports-analytics-insights": [
    "Translate technical findings into decision-ready narratives.",
    "Defend methodology choices under peer review.",
    "Deliver capstone-quality written and oral analytical communication.",
  ],
  "biological-mechanics-of-baseball": [
    "Explain how major body systems support baseball-specific demands without clinical diagnosis.",
    "Connect muscle physiology vocabulary to observable pitching and hitting actions.",
    "Interpret sports-science research questions relevant to workload, sequencing, and performance literacy.",
  ],
};

const prerequisitesByTrack: Record<string, string[]> = {
  "algebra-foundations-for-baseball-analytics": ["Arithmetic fluency", "Basic algebra", "Reading box scores / Statcast fields"],
  "geometry-foundations-for-baseball-context": ["Algebra I", "Coordinate plotting", "Intro triangle relationships"],
  "trigonometry-and-precalculus-for-baseball-modeling": ["Geometry essentials", "Algebra II", "Function notation"],
  "calculus-i-and-ii-for-baseball-dynamics": ["Precalculus / trig", "Limits intuition", "Intro to derivatives recommended"],
  "multivariable-calculus-and-differential-equations": ["Calculus II", "Vectors", "Basic linear systems"],
  "environmental-science-for-baseball-systems": ["Intro chemistry/physics helpful", "Comfort with charts", "Algebra-based modeling"],
  "baseball-physics-foundations": ["Multivariable calculus", "Vector algebra", "Intro mechanics"],
  "statistical-modeling-for-baseball": ["Probability/statistics", "Linear algebra basics", "Data manipulation fundamentals"],
  "data-analysis-with-statcast": ["Python or notebook workflow", "Basic SQL or tabular joins", "Descriptive statistics"],
  "communicating-sports-analytics-insights": ["At least one completed technical track", "Scientific writing fundamentals"],
  "biological-mechanics-of-baseball": [
    "Intro biology vocabulary (cells, tissues, organs) or willingness to learn it in-lesson",
    "Baseball role literacy (pitcher, hitter, fielder workloads)",
    "Comfort discussing uncertainty and non-medical boundaries",
  ],
};

const assessmentsByTrack: Record<string, string[]> = {
  "algebra-foundations-for-baseball-analytics": [
    "Checkpoint quizzes in lessons",
    "Summative rubric drafts (Unit 1 alignment pack)",
    "Instructor-reviewed memo (pathway B)",
  ],
  "geometry-foundations-for-baseball-context": ["Construction exercises", "Short proof/justification prompts", "Applied geometry lab"],
  "trigonometry-and-precalculus-for-baseball-modeling": ["Trig identity checks", "Vector decomposition tasks", "Modeling worksheet"],
  "calculus-i-and-ii-for-baseball-dynamics": ["Derivative/integral drills", "Optimization scenarios", "Numerical method notebook"],
  "multivariable-calculus-and-differential-equations": ["PDE/ODE setup tasks", "Sensitivity report", "Integration capstone"],
  "environmental-science-for-baseball-systems": ["Concept checks", "Scenario analysis brief", "Ethics reflection"],
  "baseball-physics-foundations": ["Derivation checks", "Mechanics problem sets", "Physics capstone memo"],
  "statistical-modeling-for-baseball": ["Model critique reports", "Validation dossiers", "Uncertainty-aware technical memo"],
  "data-analysis-with-statcast": ["Data QA audits", "Reproducible pipeline submission", "Figure recreation project"],
  "communicating-sports-analytics-insights": ["Narrative critique", "Peer-review rubrics", "Final capstone defense"],
  "biological-mechanics-of-baseball": [
    "Concept checkpoints in lessons",
    "Coach-facing language audit (non-medical boundary)",
    "Short reflection tying lab vocabulary to a baseball scenario",
  ],
};

export const curriculumTracks: CurriculumTrack[] = deepCourseBlueprint.map((track) => {
  const phases: CurriculumPhase[] = track.units.map((unit, unitIndex) => {
    const n = unit.lessons.length;
    const priorLen = unitIndex > 0 ? track.units[unitIndex - 1]!.lessons.length : 0;
    const entryCriteria =
      unitIndex === 0
        ? [
            "Confirm listed prerequisites for this track before starting.",
            `This phase: open and complete all ${n} linked lessons; pass each lesson's Final Mastery Checkpoint when present before marking complete.`,
            "Optional: complete summative rubric drafts in the Wrap step when offered (see Algebra Unit 1 alignment pack for an exemplar pathway).",
          ]
        : [
            `Prior phase: all ${priorLen} lesson(s) completed with checkpoints passed where the lesson includes them.`,
            `This phase: complete all ${n} linked lessons with the same checkpoint rule.`,
            "Maintain a short learning log if you are assembling an external portfolio or instructor review packet.",
          ];
    return {
      slug: unit.slug,
      title: `Phase ${unitIndex + 1}: ${unit.title}`,
      entryCriteria,
      lessons: unit.lessons.map((lesson) => ({
        slug: lesson.slug,
        title: lesson.title,
        routePath: buildLibraryPath(track.slug, unit.slug, lesson.slug),
      })),
      estimatedTimeHint:
        "Self-paced. Phase length scales with lesson count; backend catalog stores per-lesson minute estimates for dashboard scale.",
    };
  });

  phases.push({
    slug: `${track.slug}-capstone-synthesis`,
    title: "Capstone Synthesis",
    entryCriteria: [
      "All prior phases in this track: every library lesson completed (progress optional but recommended for an honest completion signal).",
      "Open Capstone Requirements and follow linked expectations; pair with instructor or peer review if pursuing a formal pathway.",
    ],
    lessons: [{ slug: "capstone-syllabus", title: "Capstone Requirements", routePath: "/learn/syllabus" }],
    estimatedTimeHint: "Allocate dedicated writing and revision time; rubric-scored artifacts recommended for pathway B.",
  });

  return {
    slug: track.slug,
    title: track.title,
    outcomes: outcomesByTrack[track.slug] ?? ["Demonstrate mastery through rigorous analytical work."],
    prerequisites: prerequisitesByTrack[track.slug] ?? ["Advanced quantitative reasoning"],
    phases,
    assessments: assessmentsByTrack[track.slug] ?? ["Professor-reviewed capstone deliverable"],
  };
});

/** Fallback label when a slug is not in the curriculum (e.g. legacy data). */
export function humanizeKebabSlug(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export type CurriculumLessonLookup = {
  lessonTitle: string;
  /** Plain unit name (no "Phase N:" prefix). */
  unitTitle: string;
  trackTitle: string;
  routePath: string;
};

/** Resolve progress slugs to display titles and lesson URL using the same tree as the library. */
export function lookupCurriculumLesson(
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string,
): CurriculumLessonLookup | null {
  const track = curriculumTracks.find((t) => t.slug === courseSlug);
  if (!track) return null;
  const phase = track.phases.find((p) => p.slug === moduleSlug);
  if (!phase) return null;
  const lesson = phase.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return null;
  const unitTitle = phase.title.replace(/^Phase \d+:\s*/, "") || phase.title;
  return {
    lessonTitle: lesson.title,
    unitTitle,
    trackTitle: track.title,
    routePath: lesson.routePath,
  };
}
