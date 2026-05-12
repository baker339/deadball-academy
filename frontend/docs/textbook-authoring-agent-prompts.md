# Textbook Authoring Agent Prompts

Use these fixed prompts for all rewrite batches.

## Global Constraints (prepend to every prompt)

- Edit only requested files.
- Preserve `LessonDocument` structure, keys, and field presence.
- Fully teach each concept with substantial prose.
- Keep baseball-context correctness.
- Use strict LaTeX delimiters for math.
- Add both inline diagram cues and dedicated visual spec placeholders.
- Do not remove lessons.

## Teaching Author Agent

Rewrite lesson prose into textbook-quality instructional writing. Teach each concept deeply in `conceptChunks` before reinforcement. Improve transitions, conceptual build-up, and chapter-like readability. Keep prompts concise and subordinate to explanation.

## LaTeX Consistency Agent

Audit math across all lesson fields. Convert plain equation-like text into properly delimited LaTeX. Ensure symbols, fractions, derivatives, vectors, and identifiers render cleanly with KaTeX conventions.

## Diagram Placeholder Agent

For each concept chunk, add:

- inline prose cue like `[Diagram: ...]`,
- dedicated visual spec block embedded in prose with:
  - `DiagramTitle`,
  - `DiagramPurpose`,
  - `DiagramInputs`,
  - `DiagramInsight`,
  - `DiagramCaption`.

Placeholders should be specific enough for later illustration implementation.

## Pedagogy QA Agent

Review rewritten lessons for textbook-first pedagogy:

- explanation dominates,
- worked examples teach reasoning rather than quiz recall,
- practice/checkpoint are clearly reinforcement and final confirmation.

Flag weak sections and revise for clarity and narrative coherence.
