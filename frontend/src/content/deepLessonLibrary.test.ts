import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { deepCourseBlueprint } from "./deepCourseBlueprint";
import { getAuthoredLessonDocument } from "./deepLessonLibrary";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("deepCourseBlueprint", () => {
  it("does not reference removed generic draft lesson builder in source", () => {
    const librarySrc = readFileSync(join(__dirname, "deepLessonLibrary.ts"), "utf8");
    expect(librarySrc).not.toContain("buildLessonSpecificDraft");
    expect(librarySrc).not.toContain("programmaticLessonAuthor");
    expect(librarySrc).not.toContain("buildCurriculumLessonDocument");
    expect(librarySrc).not.toContain("curriculumLessonAuthor");
    expect(librarySrc).not.toContain("scratchCurriculum");
  });

  it("keeps hand-authored track modules free of legacy curriculum generator imports", () => {
    const hwDir = join(__dirname, "lessons", "handwritten");
    const files = readdirSync(hwDir).filter((n) => n.startsWith("handAuthored") && n.endsWith(".ts"));
    expect(files.length).toBeGreaterThanOrEqual(10);
    for (const name of files) {
      const src = readFileSync(join(hwDir, name), "utf8");
      expect(src).not.toContain("curriculumLessonAuthor");
      expect(src).not.toContain("buildCurriculumLessonDocument");
      expect(src).not.toContain("scratchCurriculum");
      expect(src).not.toContain("Object.fromEntries");
    }
  });

  it("rejects legacy curriculum template fingerprints in lesson bodies", () => {
    const banned = [
      "internal lesson identifier",
      "lesson key for uniqueness",
      "discipline lens for this lesson",
      "slug phrase",
    ];
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const blob = [
            doc.whyItMatters,
            doc.lessonOpener,
            ...doc.conceptChunks.map((c) => `${c.explainLikeCoach} ${c.formalNote}`),
            doc.lessonSummary,
            doc.professorNotes,
          ]
            .join(" ")
            .toLowerCase();
          for (const phrase of banned) {
            expect(blob.includes(phrase), `${track.slug}/${unit.slug}/${lesson.slug}: ${phrase}`).toBe(false);
          }
        }
      }
    }
  });

  it("contains the full expanded curriculum volume", () => {
    const lessonCount = deepCourseBlueprint
      .flatMap((track) => track.units)
      .flatMap((unit) => unit.lessons).length;
    expect(lessonCount).toBe(293);
  });

  it("builds authored lesson documents with pedagogy blocks", () => {
    const sample = deepCourseBlueprint[0].units[1].lessons[0];
    const doc = getAuthoredLessonDocument(
      deepCourseBlueprint[0].slug,
      deepCourseBlueprint[0].units[1].slug,
      sample.slug
    );
    expect(doc).not.toBeNull();
    if (!doc) return;
    expect(doc.whyItMatters.length).toBeGreaterThan(40);
    expect(doc.lessonOpener.length).toBeGreaterThan(40);
    expect(doc.narrativeFlow.length).toBeGreaterThanOrEqual(4);
    expect(doc.objectives.length).toBeGreaterThanOrEqual(3);
    expect(doc.prerequisites.length).toBeGreaterThanOrEqual(3);
    expect(doc.conceptChunks.length).toBeGreaterThanOrEqual(3);
    expect(doc.quickChecks.length).toBeGreaterThanOrEqual(3);
    expect(doc.workedExamples.length).toBeGreaterThanOrEqual(3);
    expect(doc.practiceSets.length).toBeGreaterThanOrEqual(3);
    expect(doc.commonMistakes.length).toBeGreaterThanOrEqual(3);
    expect(doc.lessonSummary.length).toBeGreaterThan(20);
    expect(doc.synthesisPrompt.length).toBeGreaterThan(20);
    expect(doc.nextLessonBridge.length).toBeGreaterThan(20);
    expect(doc.professorNotes.length).toBeGreaterThan(80);
    expect(doc.conceptChunks.every((chunk) => chunk.explainLikeCoach.length > 40 && chunk.formalNote.length > 40)).toBeTruthy();
  });

  it("ensures every lesson is authored with baseball-context continuity", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;

          const contextBody = `${doc.whyItMatters} ${doc.lessonOpener}`.toLowerCase();
          const contextSignals = ["baseball", "hitter", "pitch", "bat", "stadium", "ballpark", "statcast", "swing", "field", "trajectory", "coach"];
          const hasContextSignal =
            contextSignals.some((signal) => contextBody.includes(signal)) || contextBody.includes("model") || contextBody.includes("decision");
          if (!hasContextSignal) {
            throw new Error(`Missing context signal: ${track.slug}/${unit.slug}/${lesson.slug}`);
          }
          expect(doc.quickChecks.every((check) => check.answer.length > 5)).toBeTruthy();
          expect(doc.practiceSets.every((set) => set.prompts.every((prompt) => prompt.answer.length > 5))).toBeTruthy();
          expect((doc.keyTerms?.length ?? 0)).toBeGreaterThanOrEqual(2);

          const combinedBody = [
            doc.whyItMatters,
            doc.lessonOpener,
            ...doc.narrativeFlow,
            ...doc.objectives,
            ...doc.conceptChunks.map((chunk) => `${chunk.heading} ${chunk.explainLikeCoach} ${chunk.formalNote}`),
            ...doc.quickChecks.map((item) => `${item.prompt} ${item.answer}`),
            ...doc.workedExamples.map((example) => `${example.title} ${example.scenario} ${example.takeaway}`),
            ...doc.practiceSets.flatMap((set) => set.prompts.map((prompt) => `${prompt.prompt} ${prompt.answer}`)),
            ...doc.commonMistakes,
            doc.lessonSummary,
            doc.synthesisPrompt,
            doc.nextLessonBridge,
            doc.professorNotes,
          ]
            .join(" ")
            .toLowerCase();
          expect(combinedBody).not.toContain("representative lesson");
          expect(combinedBody).not.toContain("generic workflow");
        }
      }
    }
  });

  it("ensures every lesson has graded assessment items", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          expect(doc.assessmentItems?.length).toBeGreaterThanOrEqual(3);
          expect(doc.assessmentItems?.some((item) => item.type === "mcq")).toBeTruthy();
          const exactCount = doc.assessmentItems?.filter((item) => item.type === "exact").length ?? 0;
          expect(exactCount).toBeGreaterThanOrEqual(2);
        }
      }
    }
  });

  it("uses baseball-context assessments without slug-token trivia prompts", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const text = (doc.assessmentItems ?? []).map((i) => `${i.prompt} ${i.explanation}`).join(" ").toLowerCase();
          expect(text).not.toContain("slug token");
          expect(text).not.toContain("type the unit token");
        }
      }
    }
  });

  it("ensures every lesson has a non-empty first concept-chunk heading", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          expect((doc.conceptChunks[0]?.heading ?? "").trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("rejects legacy generic concept-chunk headings", () => {
    const banned = new Set([
      "Start With Intuition",
      "Core Mechanism",
      "Where Students Usually Get Tripped Up",
      "Apply To Deadball Context",
    ]);

    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          for (const chunk of doc.conceptChunks) {
            expect(banned.has(chunk.heading)).toBeFalsy();
          }
        }
      }
    }
  });

  it("ensures trig and newtonian lessons follow mixed teaching format", () => {
    const targetTrack = deepCourseBlueprint.find((track) => track.slug === "baseball-physics-foundations");
    expect(targetTrack).toBeTruthy();
    if (!targetTrack) return;

    const targetUnits = targetTrack.units.filter(
      (unit) =>
        unit.slug === "trigonometry-and-vector-decomposition" ||
        unit.slug === "newtonian-mechanics-and-projectile-motion"
    );

    for (const unit of targetUnits) {
      for (const lesson of unit.lessons) {
        const doc = getAuthoredLessonDocument(targetTrack.slug, unit.slug, lesson.slug);
        expect(doc).not.toBeNull();
        if (!doc) continue;
        expect(doc.quickChecks.length).toBeGreaterThanOrEqual(3);
        expect(doc.quickChecks.every((item) => item.answer.length > 10)).toBeTruthy();
        expect(doc.workedExamples.length).toBeGreaterThanOrEqual(3);
        expect(doc.practiceSets.find((set) => set.level === "core")?.prompts.length ?? 0).toBeGreaterThanOrEqual(3);
        expect(doc.practiceSets.every((set) => set.prompts.every((item) => item.answer.length > 5))).toBeTruthy();
        expect(doc.commonMistakes.length).toBeGreaterThanOrEqual(3);
        expect(doc.nextLessonBridge.length).toBeGreaterThan(20);
      }
    }
  });

  it("includes concept depth and backlink in unit-circle pilot lesson", () => {
    const doc = getAuthoredLessonDocument(
      "baseball-physics-foundations",
      "trigonometry-and-vector-decomposition",
      "unit-circle-radians-and-angular-velocity-in-context"
    );
    expect(doc).not.toBeNull();
    if (!doc) return;

    const radianChunk = doc.conceptChunks[0];
    expect(radianChunk).toBeTruthy();
    expect((radianChunk?.explainLikeCoach ?? "").length).toBeGreaterThan(80);

    const arcTerm = doc.keyTerms?.find((term) => term.term === "Arc length");
    expect(arcTerm).toBeTruthy();
    expect(arcTerm?.lessonPath).toBe(
      "/learn/library/baseball-physics-foundations/geometry-of-the-field-and-ball-flight/arc-length-curvature-and-outfield-wall-geometry"
    );
  });

  it("keeps unit-circle pilot explicitly contextualized to baseball analysis", () => {
    const doc = getAuthoredLessonDocument(
      "baseball-physics-foundations",
      "trigonometry-and-vector-decomposition",
      "unit-circle-radians-and-angular-velocity-in-context"
    );
    expect(doc).not.toBeNull();
    if (!doc) return;

    expect(doc.whyItMatters.toLowerCase()).toContain("baseball");
    expect(doc.workedExamples.length).toBeGreaterThanOrEqual(4);
  });

  it("bans lazy template phrases in every lesson body", () => {
    const banned = [
      "think like a bench coach",
      "scouting pdf",
      "crowded analytics room",
      "trade season",
      "double-a affiliate",
    ];
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const blob = [
            doc.whyItMatters,
            doc.lessonOpener,
            ...doc.narrativeFlow,
            ...doc.conceptChunks.map((c) => `${c.heading} ${c.explainLikeCoach} ${c.formalNote}`),
            ...doc.quickChecks.map((q) => `${q.prompt} ${q.answer}`),
            ...doc.workedExamples.map((w) => `${w.title} ${w.scenario} ${w.takeaway}`),
            ...doc.practiceSets.flatMap((s) => s.prompts.map((p) => `${p.prompt} ${p.answer}`)),
            doc.lessonSummary,
            doc.synthesisPrompt,
            doc.nextLessonBridge,
            doc.professorNotes,
          ]
            .join(" ")
            .toLowerCase();
          for (const phrase of banned) {
            expect(blob.includes(phrase), `${track.slug}/${unit.slug}/${lesson.slug} contains banned phrase: ${phrase}`).toBe(
              false
            );
          }
        }
      }
    }
  });

  it("ensures first concept-chunk explanations are substantial", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          expect((doc.conceptChunks[0]?.explainLikeCoach ?? "").length).toBeGreaterThan(80);
        }
      }
    }
  });

  it("enforces minimum teaching depth for curriculum-generated lessons", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const teachingCore = [
            doc.whyItMatters,
            doc.lessonOpener,
            ...doc.conceptChunks.map((c) => `${c.explainLikeCoach} ${c.formalNote}`),
          ].join(" ");
          expect(
            teachingCore.length,
            `${track.slug}/${unit.slug}/${lesson.slug} teachingCore length ${teachingCore.length}`
          ).toBeGreaterThanOrEqual(2200);
        }
      }
    }
  });

  it("does not use copy-paste unit-title trivia in assessments", () => {
    for (const track of deepCourseBlueprint) {
      for (const unit of track.units) {
        for (const lesson of unit.lessons) {
          const doc = getAuthoredLessonDocument(track.slug, unit.slug, lesson.slug);
          expect(doc).not.toBeNull();
          if (!doc) continue;
          const prompts = (doc.assessmentItems ?? []).map((i) => i.prompt.toLowerCase()).join(" | ");
          expect(prompts.includes("copy exactly")).toBe(false);
          expect(prompts.includes("slug token")).toBe(false);
          expect(prompts.includes("type the unit token")).toBe(false);
        }
      }
    }
  });
});
