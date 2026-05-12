# Deadball Lesson Rewrite Batches

This batch map drives the full rewrite pass for grammar, readability, flow, and math-notation quality while preserving `LessonDocument` schema.

## Coverage Snapshot

- Handwritten lesson modules: 14
- Curriculum lesson keys in blueprint: 266
- Aggregation source: `src/content/lessons/allLessons.ts`
- Schema contract: `src/content/lessonTypes.ts`

## Batch Plan

### Batch 1 (Calibration)

- `src/content/lessons/handwritten/handAuthoredAlgebra.ts`
- `src/content/lessons/handwritten/handAuthoredPhysicsA.ts`
- `src/content/lessons/handwritten/handAuthoredCommunicationA.ts`

Purpose: lock tone and rewrite depth across a math-heavy, physics-heavy, and communication-heavy slice.

### Batch 2

- `src/content/lessons/handwritten/handAuthoredGeometry.ts`
- `src/content/lessons/handwritten/handAuthoredTrigPrecalc.ts`
- `src/content/lessons/handwritten/handAuthoredCalculus.ts`

### Batch 3

- `src/content/lessons/handwritten/handAuthoredMultivar.ts`
- `src/content/lessons/handwritten/handAuthoredPhysicsB.ts`
- `src/content/lessons/handwritten/handAuthoredEnvironmental.ts`

### Batch 4

- `src/content/lessons/handwritten/handAuthoredStatsA.ts`
- `src/content/lessons/handwritten/handAuthoredStatsB.ts`

### Batch 5

- `src/content/lessons/handwritten/handAuthoredStatcastA.ts`
- `src/content/lessons/handwritten/handAuthoredStatcastB.ts`

### Batch 6

- `src/content/lessons/handwritten/handAuthoredCommunicationB.ts`

Purpose: final voice consistency and bridge quality pass before global sweep.

## Required Quality Gates Per Batch

Run in `frontend`:

1. `npm run test -- src/content/lessonLatexSmoke.test.ts`
2. `npm run test -- src/content/deepLessonLibrary.test.ts`
3. `npm run test -- src/content/curriculum.test.ts`

## Global Completion Gate

- Full content test pass and zero KaTeX rendering failures.
- Final consistency pass across all `handAuthored*.ts` modules.
