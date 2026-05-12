#!/usr/bin/env python3
"""Restore required LessonDocument pedagogy fields for trig/precalc hand-authored lessons."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/content/lessons/handwritten/handAuthoredTrigPrecalc.ts"

KEY_BLOCK = """    keyTerms: [
      { term: "Angle convention", definition: "Explicit reference direction and unit choice (degrees or radians) for trigonometric modeling." },
      { term: "Component decomposition", definition: "Splitting a vector into orthogonal parts so baseball quantities stay interpretable." },
    ],
"""

EXTRA_QC = """      {
        prompt: "Why must analysts keep quadrant and frame conventions explicit when using cosine and sine?",
        answer: "Signs and component meanings change with quadrant and with batter-relative versus field-relative frames.",
        explanation: "A silent convention swap can flip interpreted horizontal versus vertical contributions.",
      },
"""

EXTRA_WE = """      {
        title: "Bullpen Arm-Angle Sanity Check",
        scenario: "A coordinator questions whether reported horizontal break aligns with release direction.",
        walkthrough: [
          "Re-state the angle reference line used in the feed.",
          "Recompute a single representative vector decomposition as a spot check.",
          "Compare sign pattern against expected quadrant for RHP versus LHP.",
          "Document the convention note for the coaching packet.",
        ],
        takeaway: "One disciplined vector check prevents a whole week of misaligned defensive shifts.",
      },
      {
        title: "Spray-Chart Direction Consistency",
        scenario: "Two dashboards show different horizontal displacement for similar batted balls.",
        walkthrough: [
          "Verify whether each dashboard uses the same baseline direction for horizontal component.",
          "Check whether angles are measured from horizontal or from vertical reference.",
          "Align units and recompute one shared example batted ball.",
          "Publish a one-line convention reminder next to the chart.",
        ],
        takeaway: "Directional metrics are not comparable until conventions match.",
      },
"""


def patch_lesson_blob(blob: str) -> str:
    if "keyTerms:" in blob:
        return blob

    blob = blob.replace("    assessmentItems:", KEY_BLOCK + "    assessmentItems:", 1)

    # Add third quickCheck when exactly two checks are present
    blob = re.sub(
        r"(quickChecks:\s*\[(?:\n[^\]]*){2}\n)(\s*\],)",
        lambda m: m.group(1) + ",\n" + EXTRA_QC + m.group(2),
        blob,
        count=1,
        flags=re.S,
    )

    # Add two worked examples when only one object is present
    def we_fix(m: re.Match[str]) -> str:
        inner = m.group(1)
        if inner.count("title:") != 1:
            return m.group(0)
        return "workedExamples: [" + inner + ",\n" + EXTRA_WE + "\n    ],"

    blob = re.sub(
        r"workedExamples:\s*\[(.*?)\n    \],\n    practiceSets:",
        we_fix,
        blob,
        count=1,
        flags=re.S,
    )

    return blob


def main() -> None:
    raw = PATH.read_text(encoding="utf-8")
    pieces = re.split(r"(?=\n  \"trigonometry-and-precalculus-for-baseball-modeling::)", raw)
    out = [pieces[0]]
    for blob in pieces[1:]:
        out.append(patch_lesson_blob(blob))
    new_raw = "".join(out)
    if new_raw != raw:
        PATH.write_text(new_raw, encoding="utf-8")
    print("processed", len(pieces) - 1, "lesson blobs")


if __name__ == "__main__":
    main()
