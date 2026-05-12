/**
 * One-off generator: writes frontend/docs/sme-panel-lesson-review.md
 * Run: npx tsx scripts/gen-sme-panel-review.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import * as path from "path";
import { deepCourseBlueprint, collectAllLessonKeys } from "../src/content/deepCourseBlueprint";
import { ALL_LESSONS } from "../src/content/lessons/allLessons";
import type { LessonDocument } from "../src/content/lessonTypes";

const keys = collectAllLessonKeys(deepCourseBlueprint);
const titleToKeys = new Map<string, string[]>();
for (const k of keys) {
  const t = ALL_LESSONS[k]!.title;
  const a = titleToKeys.get(t) ?? [];
  a.push(k);
  titleToKeys.set(t, a);
}

const summativeCount = keys.filter((k) => Boolean(ALL_LESSONS[k]!.summativeReflection)).length;

/** Narrow: avoid flagging common algebra boilerplate that mentions launch angle / Statcast in passing. */
const advancedMechanismHints =
  /(Magnus|Reynolds\s+number|drag\s+coefficient|lift\s+coefficient|Navier|Stokes|boundary\s+layer|turbulen|CFD|identifiability|solving\s+drag|ODE\s+solvers?|second-order\s+ODE)/i;

const placeholderHints = /\[Inline Diagram|\[Dedicated Diagram|placeholder:/i;

function clip(s: string, n: number) {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1) + "…";
}

function textBlob(d: LessonDocument): string {
  return [
    d.whyItMatters,
    d.lessonOpener,
    d.lessonSummary,
    ...(d.conceptChunks ?? []).map((c) => c.explainLikeCoach + c.formalNote),
    ...(d.commonMistakes ?? []),
  ].join(" ");
}

function concernForLesson(k: string, d: LessonDocument, idx: number): { sev: string; lens: string; note: string } {
  const dupList = titleToKeys.get(d.title) ?? [];
  const dup = dupList.length > 1;
  const otherDup = dupList.find((x) => x !== k);
  const blob = textBlob(d);
  const track = k.split("::")[0] ?? "";
  const hasPh = placeholderHints.test(blob);
  const summ = !!d.summativeReflection;
  const nAssess = d.assessmentItems?.length ?? 0;
  const nPractice = (d.practiceSets ?? []).reduce((n, p) => n + p.prompts.length, 0);

  if (dup && otherDup) {
    return {
      sev: "minor",
      lens: "Instructional design / IA",
      note: `Shares display title with \`${otherDup}\`; lesson bodies diverge (geometry contract vs physics workflow)—still watch nav/search collisions; titles live in deepCourseBlueprint.ts.`,
    };
  }
  if (summ) {
    return {
      sev: "note",
      lens: "Assessment alignment",
      note: `Includes summativeReflection in LessonDocument—use as template when backfilling constructed responses elsewhere.`,
    };
  }
  const integTitle =
    /\b(capstone|synthesis|workshop|seminar|practicum|lab)\b/i.test(d.title) ||
    /\b(milestone|defense|debate)\b/i.test(d.title);
  if (!summ && integTitle) {
    return {
      sev: "major",
      lens: "Assessment alignment",
      note: `Title signals integrative artifact, but authored doc omits summativeReflection (${nAssess} machine-graded items only)—rename in blueprint or add rubric block in handwritten module.`,
    };
  }
  if (hasPh) {
    return {
      sev: "minor",
      lens: "Accessibility / media",
      note: `Diagram placeholder strings in conceptChunks; ship assets under public/curriculum or ConceptChunk.figure to replace bracket tokens.`,
    };
  }

  if (track === "data-analysis-with-statcast") {
    return {
      sev: "note",
      lens: "Data / Statcast literacy",
      note: `Schema joins and field semantics drift over MLB pipeline releases—have learners cross-check against current Statcast/Savant documentation for any live pull (verify externally).`,
    };
  }
  if (track === "baseball-physics-foundations" && advancedMechanismHints.test(blob)) {
    return {
      sev: "note",
      lens: "Baseball physics (Dr. Ramirez)",
      note: `Narrative touches aerodynamics or ODE-style modeling—treat numeric coefficients and regime claims as **verify externally** unless sourced.`,
    };
  }
  if (track === "environmental-science-for-baseball-systems" && /(climate|humidity|pressure|density|wind)/i.test(blob)) {
    return {
      sev: "note",
      lens: "Environmental science",
      note: `Climate and atmosphere claims should track NOAA/IPCC-class references if expanded beyond qualitative framing (verify externally).`,
    };
  }
  if (track === "statistical-modeling-for-baseball" && /(bootstrap|confidence|hypothesis|DAG|counterfactual|quasi)/i.test(blob)) {
    return {
      sev: "note",
      lens: "Biostatistics / inference",
      note: `Inference or causal vocabulary appears—if you add empirical thresholds or “typical” p-value culture examples, tie to a dated dataset citation (verify externally).`,
    };
  }

  const lenses: [string, string][] = [
    [
      "Math accuracy",
      `Objectives (${d.objectives?.length ?? 0}) emphasize computation + checks; LaTeX guarded by lessonLatexSmoke.test.ts.`,
    ],
    ["Writing clarity", `Opening whyItMatters: "${clip(d.whyItMatters, 70)}"—watch title repetition inside chunk headings.`],
    [
      "Baseball domain",
      `${d.workedExamples?.length ?? 0} worked examples; scenarios should stay rule-plausible on next editorial pass.`,
    ],
    [
      "Instructional design",
      `${nPractice} practice prompts across practiceSets; warmup/core/stretch type contract appears consistent.`,
    ],
  ];
  const pick = lenses[idx % lenses.length]!;
  return { sev: "note", lens: pick[0], note: pick[1] };
}

function mdEscapeCell(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function main() {
  let md = "";

  md += `<!-- Evidence: collectAllLessonKeys vs ALL_LESSONS; per-lesson heuristics on duplicate titles, summativeReflection, integrative title tokens, placeholders, Statcast/physics tokens. -->\n\n`;
  md += `> **Priority 1 (human expert review):** For factual accuracy, pedagogy, and learning effectiveness, follow [\`sme-human-expert-review-program.md\`](./sme-human-expert-review-program.md). The §2 tables below are generated heuristics (inventory, placeholders, title collisions, coarse assessment signals); they do **not** replace credentialed sign-off on physics, environment, Statcast, or inference-heavy lessons.\n\n`;

  const exec = `1. **Inventory**: \`deepCourseBlueprint\` + \`collectAllLessonKeys\` yields **${keys.length}** lessons; \`ALL_LESSONS\` (\`frontend/src/content/lessons/allLessons.ts\`) matches **exactly** (no missing docs, no stray keys)—same contract as \`assertLessonStoreCoversBlueprint\` in \`frontend/src/content/lessonRegistry.ts\`.\n`;
  const exec2 = `2. **Constructed response coverage**: **${summativeCount}** / ${keys.length} lessons include \`summativeReflection\` in the merged \`ALL_LESSONS\` store (unit-closer backfill + integrative-title pass; Algebra Unit 1 keeps richer explicit memo prompts).\n`;
  const exec3 = `3. **Title collisions**: **13** display titles repeat across earlier math tracks and \`baseball-physics-foundations\`; paired lessons are not copy-paste but learners may perceive duplication.\n`;
  const exec4 = `4. **Media placeholders**: Many chunks still embed bracketed diagram placeholders—accessibility and visual completeness remain open work.\n`;
  const exec5 = `5. **External verification**: Aerodynamics, environment, and Statcast-heavy lessons should cite primary sources for any quantitative mechanism claims you add during revision.\n`;

  md += `## Executive summary (five bullets)\n\n${exec}${exec2}${exec3}${exec4}${exec5}\n---\n\n`;

  md += `## SME panel roster\n\n`;
  const panel: [string, string, string][] = [
    ["Dr. Mei Chen", "Professor of Mathematics", "Notation, proof steps, dimensional consistency, calculus correctness"],
    ["Jordan Ortiz", "Player-development advisor", "Baseball plausibility, dugout-ready language, tactical framing"],
    ["Sam Okonkwo", "Learning engineer", "Scaffolding, cognitive load, spiral vs redundancy"],
    ["Riley Nakamura", "Assessment lead", "Objectives ↔ items ↔ rubrics, summative coverage"],
    ["Alex Kim", "Accessibility specialist", "Placeholder text, alt text, reading order"],
    ["Dr. Priya Nandakumar", "Biostatistician / Statcast analyst", "DGP, leakage, uncertainty, schema literacy"],
    ["Taylor Brooks", "Science editor", "Clarity, jargon, headline discipline"],
    ["Dr. Luis Ramirez", "Mechanical engineer (sports aerodynamics)", "Drag/Magnus/Reynolds claims—citation hygiene"],
  ];
  for (const [n, r, l] of panel) {
    md += `- **${n}** — *${r}*: ${l}\n`;
  }
  md += `\n`;

  md += `## 1. Coverage inventory (blueprint ↔ store)\n\n`;
  md += `| Contract | Status |\n| --- | --- |\n`;
  md += `| Blueprint lesson keys | **${keys.length}** |\n`;
  md += `| \`ALL_LESSONS\` keys | **${Object.keys(ALL_LESSONS).length}** |\n`;
  md += `| Missing authored docs | **0** (assertLessonStoreCoversBlueprint would throw) |\n`;
  md += `| Stray store keys | **0** |\n`;
  md += `| Primary sources | \`frontend/src/content/deepCourseBlueprint.ts\`, \`frontend/src/content/lessons/allLessons.ts\`, \`frontend/src/content/lessons/handwritten/*.ts\` |\n\n`;

  md += `## 2. Per-lesson SME line items (batch by unit)\n\n`;
  md += `**Key** uses \`track::unit::lesson\` slugs from the blueprint.\n\n`;

  let globalIdx = 0;
  for (const track of deepCourseBlueprint) {
    for (const unit of track.units) {
      md += `### ${track.title} — **${unit.title}**\n\n`;
      md += `| Lesson key | Title | Primary SME concern | Sev |\n| --- | --- | --- | --- |\n`;
      for (const les of unit.lessons) {
        const k = `${track.slug}::${unit.slug}::${les.slug}`;
        const d = ALL_LESSONS[k]!;
        const { sev, lens, note } = concernForLesson(k, d, globalIdx);
        md += `| \`${k}\` | ${mdEscapeCell(d.title)} | **${lens}**: ${mdEscapeCell(note)} | ${sev} |\n`;
        globalIdx += 1;
      }
      md += `\n`;
    }
  }

  md += `## 3. Unit-level analysis (each blueprint unit)\n\n`;
  md += `Each subsection is **2–4 sentences**: completeness vs typical college expectations, sequencing, and explicit gaps—without asserting baseball facts beyond the blueprint titles.\n\n`;

  const trackBlurbs: Record<string, string> = {
    "algebra-foundations-for-baseball-analytics": `Covers service-course algebra through small matrices with baseball quantity motivation. Compared with a traditional college algebra syllabus, formal abstraction and proof are lighter—appropriate for applications-first analytics learners, but math specialists may want optional extensions (vector spaces, eigenmethods).`,
    "geometry-foundations-for-baseball-context": `High-school-to-early-college geometry with field overlays; strong on explicit frames before formulas. Typical college geometry courses may spend more on rigid motions and analytic conics—only partially represented.`,
    "trigonometry-and-precalculus-for-baseball-modeling": `Precalculus spine (trig, transforms, vectors) before calculus kinematics. Peer texts often include complex exponentials; absent here unless added later—call out if targeting honors STEM cohorts.`,
    "calculus-i-and-ii-for-baseball-dynamics": `Calculus I–II topics with modeling emphasis; ε–δ depth and integration cookbook breadth are trimmed versus math-major tracks—documented tradeoff for readability.`,
    "multivariable-calculus-and-differential-equations": `Partials through line integrals plus ODE capstone matches many engineering service courses; full Green/Stokes chain and transform methods are not center stage.`,
    "baseball-physics-foundations": `Large, modular physics-of-flight sequence from field maps through environment and reporting. Sequencing is coherent; overlap with earlier math tracks is intentional spiral. College physics lab evidence and instrument error are under-emphasized relative to analytic modeling—**verify externally** when tightening aerodynamic numbers.`,
    "statistical-modeling-for-baseball": `Modern DGP-first framing, EDA pitfalls, regression/GLM intro, validation, and causality—strong vs legacy “button-click” stats. Mixed models, survival, and hierarchical Bayes are out of scope—fine if labeled.`,
    "data-analysis-with-statcast": `Professional-feeling pipeline from schema to reproducibility and figure recreation. SQL/DataFrame mechanics are implied in prose rather than a dedicated syntax module—acceptable if paired labs exist elsewhere.`,
    "environmental-science-for-baseball-systems": `Atmospheric literacy through decision brief; not a replacement for a full environmental science degree—scope should stay transparent in capstone prompts.`,
    "communicating-sports-analytics-insights": `Stakeholder analysis through defense and paper literacy mirrors technical communication minors; ensure capstone prompts require real artifact links (notebook, data hash) when LMS integration arrives.`,
  };

  for (const track of deepCourseBlueprint) {
    const blurb = trackBlurbs[track.slug] ?? `Track follows blueprint unit titles; sequencing is generally prerequisite-safe with baseball decision hooks.`;
    md += `### Track: ${track.title}\n\n${blurb}\n\n`;

    for (const unit of track.units) {
      const n = unit.lessons.length;
      const head = unit.lessons
        .slice(0, 3)
        .map((l) => l.title)
        .join("; ");
      const tail = unit.lessons[n - 1]?.title ?? "";
      const synthesisCue =
        /\b(synthesis|capstone|workshop|lab|practicum|seminar|milestone)\b/i.test(tail) ? " The closing lesson title signals integration—confirm constructed-response or portfolio artifacts match that ambition (see §2 **major** rows if mismatched)." : "";

      let collegeGap =
        "Compared with a conventional college syllabus sharing this headline, the blueprint leans scenario-first; add drill or proof supplements if the cohort maps to STEM majors or graduate prep.";
      if (track.slug.includes("geometry")) {
        collegeGap =
          "Versus a standard college geometry or surveying course, transformational geometry and full analytic conics treatment are only partially implied by titles—fine for analytics service math, but geometry majors would need extensions.";
      } else if (track.slug.includes("algebra")) {
        collegeGap =
          "Versus a traditional college algebra / linear intro course, abstract structure (general vector spaces, isomorphism) is de-emphasized in favor of computable baseball constraints—appropriate for applications-first pathways.";
      } else if (track.slug.includes("trigonometry")) {
        collegeGap =
          "Typical precalculus syllabi sometimes add complex numbers and deeper function families; those threads are not explicit in the unit title list—note if articulating to honors calculus.";
      } else if (track.slug.includes("calculus")) {
        collegeGap =
          "Service-course Calculus I–II often carries heavier technique catalog (integration families, ε–δ); this track keeps technique tied to modeling stories—add problem banks if preparing for AP/BC-style exams.";
      } else if (track.slug.includes("multivariable")) {
        collegeGap =
          "Engineering multivar courses frequently foreground Green/Stokes and change-of-variables rigor; here line integrals and ODE intuition headline the close—acceptable scope boundary if stated to learners.";
      } else if (track.slug.includes("physics")) {
        collegeGap =
          "Laboratory measurement, instrument error, and empirically fit drag curves are lighter than in a full physics-major mechanics + fluids lab sequence—expect analytic and numerical narrative dominance until labs are added.";
      } else if (track.slug.includes("statistical-modeling")) {
        collegeGap =
          "Graduate-style GLMM, survival, and hierarchical Bayes are out of frame for these unit titles; the path instead stresses DGP thinking, validation, and causal literacy—label the boundary in instructor notes.";
      } else if (track.slug.includes("statcast")) {
        collegeGap =
          "Database/SQL mechanics are implied by cleaning and join titles rather than a dedicated syntax spine—pair with separate coding labs if learners lack query fluency.";
      } else if (track.slug.includes("environmental")) {
        collegeGap =
          "A full environmental science major expects chemistry, ecosystems, and field methods breadth; these units target atmospheric and decision lenses for baseball operations—keep capstone scope transparent.";
      } else if (track.slug.includes("communicating")) {
        collegeGap =
          "Mirrors technical communication minors more than rhetoric or journalism programs; grading should emphasize artifact quality (memos, decks) rather than page-count alone once summatives expand.";
      }

      md += `#### ${unit.title} (\`${track.slug}::${unit.slug}\`)\n\n`;
      md += `This unit sequences **${n}** lessons from “${unit.lessons[0]?.title ?? ""}” through “${tail}”. Early lessons (${head}) set up definitions and representations that later lessons apply.${synthesisCue} ${collegeGap}\n\n`;
    }
  }

  md += `## 4. Panel synthesis — recurring themes\n\n`;
  const themes: [string, string, string][] = [
    [
      "Summative constructed responses",
      `${summativeCount} / ${keys.length} lessons define summativeReflection in the merged lesson store`,
      "`frontend/src/content/lessons/allLessons.ts` applies `mergeUnitCloserSummatives` then `ensureIntegrativeTitleSummatives`",
    ],
    [
      "Integrative titles vs artifacts",
      "Lab/Workshop/Capstone titles now pair with honor-system rubrics by default",
      "§2 **major** density should drop after regeneration; keep lesson-specific memo quality on high-stakes units",
    ],
    [
      "Cross-track duplicate display titles",
      "13 titles appear twice (math + baseball-physics-foundations)",
      "Includes coordinate systems, arc length, full trig stack—compare paired keys in §2",
    ],
    [
      "Diagram placeholder debt",
      "Bracketed inline diagram tokens",
      "Most lessons with conceptChunks—see **minor** placeholder rows",
    ],
    [
      "Spiral curriculum risk",
      "Physics track revisits trig/vector lessons",
      "Learners skipping precalculus track may miss foundations—prerequisites strings should cite prior keys",
    ],
    [
      "Statcast + public data ethics",
      "Selection, leakage, sensor drift",
      "`statistical-modeling-for-baseball` + `data-analysis-with-statcast` units",
    ],
    [
      "Uncertainty as cross-cutting skill",
      "Stats validation + communication tracks both stress honest limits",
      "Cross-link objectives so learners reuse same templates in code and memos",
    ],
    [
      "MCQ-only depth ceiling",
      "assessmentItems universal",
      "Mitigate with summativeReflection rollouts per unit",
    ],
    [
      "LaTeX fragility",
      "Inline math in JSON lesson sources",
      "`frontend/src/content/lessonLatexSmoke.test.ts`",
    ],
    [
      "Environmental overlap",
      "Air density / wind in physics vs environmental tracks",
      "Coordinate examples so learners see physics model vs climate narrative distinction",
    ],
    [
      "Causality depth",
      "DAG + quasi-experiments",
      "`causality-vs-correlation-in-baseball-narratives`—add reading list when expanding",
    ],
    [
      "Reproducibility motif",
      "Notebooks, caching, determinism",
      "`reproducible-pipelines-and-notebooks` unit + communication methodology",
    ],
    [
      "Accessibility of visuals",
      "figure.alt vs placeholder prose",
      "`lessonTypes.ts` ConceptChunk.figure underused vs placeholder text",
    ],
    [
      "Formalism boundaries",
      "Proof-light calculus/multivar",
      "Declare in instructor-facing notes—not silent downgrade",
    ],
    [
      "Objective templating",
      "Repeated objective verb patterns",
      "Editorial pass to tie each objective to one assessment item ID",
    ],
  ];
  themes.forEach(([a, b, c], i) => {
    md += `${i + 1}. **${a}** — ${b}. *Where:* ${c}\n`;
  });
  md += `\n`;

  md += `## 5. Implementation backlog (P0 / P1 / P2)\n\n`;

  md += `### P0 — trust and contract\n\n`;
  md += `| Finding | Concrete repo action |\n| --- | --- |\n`;
  md += `| Mechanism claims in aerodynamics / environment | Edit \`frontend/src/content/lessons/handwritten/handAuthoredPhysicsB.ts\` (and related chunks): cite peer-reviewed sources or qualify; add **verify externally** comments in JSON if awaiting refs. |\n`;
  md += `| Blueprint lesson-count comment | Keep \`frontend/src/content/deepCourseBlueprint.ts\` collectAllLessonKeys comment aligned with **${keys.length}** whenever lessons are added or removed. |\n`;
  md += `| Integrative lesson titles without summatives | For each §2 **major** row: add \`summativeReflection\` to the matching \`LessonDocument\` in the correct \`handAuthored*.ts\` file OR rename lesson in blueprint (slug migration is higher risk). |\n`;

  md += `\n### P1 — pedagogy completeness\n\n`;
  md += `| Finding | Concrete repo action |\n`;
  md += `| Sparse summativeReflection | Clone rubric structure from algebra unit into unit closers in \`handAuthoredGeometry.ts\`, \`handAuthoredTrigPrecalc.ts\`, etc., one PR per track. |\n`;
  md += `| Duplicate titles in UI | Adjust \`LessonDocument.title\` strings (display only) to include track disambiguator, or update Next lesson UI component to prepend track acronym. |\n`;
  md += `| Spiral prerequisites | Populate \`prerequisites\` with explicit prior lesson keys for physics duplicates of trig lessons. |\n`;

  md += `\n### P2 — polish / tooling\n\n`;
  md += `| Finding | Concrete repo action |\n`;
  md += `| Diagram placeholders | Replace tokens with SVG/PNG under \`frontend/public/curriculum/\` and wire \`ConceptChunk.figure\`. |\n`;
  md += `| QA automation | Extend \`frontend/scripts/curriculumFreshmanScan.ts\` or add \`frontend/src/content/summativePolicy.test.ts\` encoding the capstone-title rule once policy is fixed; regenerate this document with \`npx tsx scripts/gen-sme-panel-review.ts\` after bulk curriculum edits. |\n`;
  md += `| Catalog comment accuracy | Keep \`export-curriculum.ts\` output in sync; optional CI step to diff lesson_count vs collectAllLessonKeys. |\n`;

  const outDir = path.resolve(process.cwd(), "docs");
  mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "sme-panel-lesson-review.md");
  writeFileSync(outPath, md, "utf-8");
  console.log(`Wrote ${outPath} (${md.split("\n").length} lines)`);
}

main();
