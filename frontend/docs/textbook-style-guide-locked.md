# Locked Textbook Style Guide

This is the final format all rewrite agents must follow.

## Teaching Voice

- Explanation first, reinforcement second.
- Chapter-like progression: intuition -> formalism -> interpretation -> pitfalls.
- No quiz-like phrasing in core teaching prose.

## Diagram Placeholder Canonical Format

Use this exact structure inside each concept chunk:

- Inline cue in `explainLikeCoach`:
  - `[Diagram: <short visual name>]`
- Dedicated block in `formalNote`:
  - `DiagramTitle: ...`
  - `DiagramPurpose: ...`
  - `DiagramInputs: ...`
  - `DiagramInsight: ...`
  - `DiagramCaption: ...`

Do not use alternate tags like `DIAGRAM_INLINE`, `DIAGRAM_BLOCK`, or bracket variants.

## Math Rules

- All symbolic math delimited with `\\(...\\)` or `\\[...\\]`.
- Escape identifier underscores where needed.
- Avoid plaintext equations in narrative prose.

## Content Balance

- Concept teaching must be the longest and most detailed section.
- Worked examples teach reasoning steps.
- Practice sets are concise reinforcement.
- Assessment remains a final confirmation only.
