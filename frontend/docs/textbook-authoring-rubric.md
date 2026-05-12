# Textbook Authoring Rubric

This rubric is the required quality standard for lesson rewrites.

## Core Principles

- Teaching-first prose is primary; prompts are secondary reinforcement.
- Every concept is fully taught before practice.
- Math uses strict LaTeX delimiters (`\\(...\\)` and `\\[...\\]`).
- Diagram planning is explicit with both inline and dedicated placeholders.
- `LessonDocument` schema must remain unchanged.

## Per-Lesson Acceptance Criteria

1. `whyItMatters` and `lessonOpener` are substantive, readable, and conceptually specific.
2. Every `conceptChunks` entry contains:
   - rich coach-facing explanation,
   - formal mathematical note,
   - optional equation in LaTeX when useful,
   - inline visual cue in prose: `[Diagram: ...]`,
   - dedicated visual spec block in prose:
     - `DiagramTitle: ...`
     - `DiagramPurpose: ...`
     - `DiagramInputs: ...`
     - `DiagramInsight: ...`
     - `DiagramCaption: ...`
3. `workedExamples` read as instructional demonstrations with coherent reasoning.
4. `practiceSets` are concise reinforcement, not the center of lesson time.
5. `assessmentItems` remain valid and positioned as end-of-lesson confirmation.
6. `lessonSummary`, `synthesisPrompt`, and `nextLessonBridge` clearly consolidate transfer.

## Style Requirements

- Use active voice and direct instructional language.
- Avoid repetitive template phrasing.
- Preserve baseball context and technical rigor.
- Keep terminology consistent within and across tracks.
- Use units and symbols consistently and explicitly.

## Math Requirements

- Delimit all mathematical expressions.
- Escape underscores in math identifiers as needed.
- Prefer readable symbolic form over ambiguous plaintext equations.

## QA Checklist

- Schema unchanged and all fields present.
- No raw equation-like strings without delimiters.
- No placeholder garbage text or unfinished markers.
- Lesson reads like a chapter, not a worksheet.
