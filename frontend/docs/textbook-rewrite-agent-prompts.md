# Textbook Rewrite Agent Prompts

Use these prompts for parallel rewrite agents. All prompts require schema preservation.

## Universal Constraints (prepend to every prompt)

- Do not change object keys, property names, or array shapes.
- Keep every `LessonDocument` field present and non-empty.
- Preserve technical correctness and baseball context.
- Improve readability and transitions to textbook quality.
- Avoid repetitive template phrasing and robotic cadence.
- Keep or improve any LaTeX content; do not introduce malformed delimiters.
- Prefer `\\(...\\)` for inline and `\\[...\\]` for display math when adding math.

## Prose Rewrite Agent Prompt

Rewrite the target lesson file for textbook-quality prose. Fix grammar, awkward wording, repetition, and unclear transitions. Keep all facts and structure but improve narrative flow from opener through summary and next-lesson bridge. Ensure each paragraph is concise, readable, and instructionally purposeful.

## Pedagogy Flow Agent Prompt

Refine the instructional arc in the target lesson file:

1. decision context and motivation,
2. concept build with intuition plus formal framing,
3. worked examples with coherent sequencing,
4. practice progression from warmup to stretch,
5. explicit transfer and bridge to next lesson.

Keep schema unchanged and keep all required sections populated.

## LaTeX/KaTeX Agent Prompt

Inspect all equation-bearing content and math expressions in the target lesson file. Convert malformed or ambiguous math text into KaTeX-safe notation. Use escaped delimiters (`\\(...\\)` or `\\[...\\]`) for expressions that should be rendered as math. Do not alter non-math narrative except for minor edits needed for clarity.

## Merge Agent Prompt

Merge outputs from prose, pedagogy, and LaTeX passes into one final file. Resolve conflicts in favor of:

1. schema validity,
2. mathematical correctness,
3. readability,
4. coherence with neighboring lessons.

Do a final self-check for duplicated sentences, broken punctuation, and accidental field deletions.
