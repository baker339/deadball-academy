#!/usr/bin/env python3
"""Append depth text to whyItMatters for Communication A lessons under teachingCore minimum."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH_A = ROOT / "src/content/lessons/handwritten/handAuthoredCommunicationA.ts"
PATH_B = ROOT / "src/content/lessons/handwritten/handAuthoredCommunicationB.ts"

# Slugs that must gain depth (from deepLessonLibrary teachingCore check); each gets a unique appendix.
SLUGS: dict[str, str] = {
    "annotation-as-argument": " Staff also need to see how an annotation constrains the implied estimand: are you describing a conditional average, a within-player change, or a league-relative residual? Naming that estimand once prevents listeners from silently swapping definitions mid-meeting. Strong teams treat annotations like versioned claims with an explicit scope statement and a reproducible query path back to the rows that produced the highlight.",
    "multi-panel-narrative-construction": " Multi-panel layouts fail when readers cannot infer the shared axis contract across panels. Spell out whether panels share scales, whether breaks are intentional, and how cross-panel linking encodings map to the same player, pitch type, or game state. That shared contract is what keeps a four-panel story from becoming four unrelated charts wearing the same jersey.",
    "common-misleading-patterns-and-how-to-avoid-them": " Misleading charts rarely announce themselves as fraud; they look like reasonable defaults with aggressive crops, dual axes without translation, or selective date windows. Teaching staff to recognize these patterns is defensive communication training: it protects the organization from publishing visuals that will not survive a skeptical replay review.",
    "storytelling-critique-lab": " Critique labs work best when reviewers separate taste from integrity. Color palette preferences differ; axis integrity and label honesty do not. Build rubrics that score truthfulness, scope, and action linkage before scoring aesthetics so students practice the same review discipline used in professional analytics QA. Add a second pass where reviewers must name one alternative headline the chart could honestly support; if they cannot, the story is probably overfit to a single rhetorical reading. Finally, require each critique to end with a concrete revision instruction tied to a decision risk, not a vague complaint about colors.",
    "methods-sections-readers-can-audit": " A methods section should read like a recipe with ingredients and timestamps: data vintage, inclusion filters, leakage checks, and software versions. Readers should be able to re-derive the headline number within tolerance without emailing the author. That auditability is what converts a pretty report into an operational artifact.",
    "assumption-registers-and-limitation-statements": " Assumption registers make implicit choices explicit: which parks are pooled, how injuries are coded, and which missingness is ignored versus imputed. When assumptions live in a table rather than in prose fog, decision makers can negotiate which assumptions they are willing to bet the season on.",
    "reporting-model-choices-transparently": " Model choice transparency is not model bragging. It is naming the hypothesis class, the loss function, and the validation design so stakeholders know what failure modes were traded off. That clarity is especially important when a model feeds a live decision pipeline rather than a one-off research memo.",
    "uncertainty-language-templates": " Templates reduce variance in how staff talks about intervals, calibration, and out-of-sample risk. They also reduce the odds that two analysts describe the same posterior width using incompatible metaphors. Consistent templates make uncertainty comparable across departments and time. Pair each template with a forbidden-phrase list so teams do not accidentally smuggle causal language into descriptive intervals. Include a worked baseball example for each template so readers learn tone and numeracy at once rather than memorizing empty shells.",
    "reproducibility-statements-and-artifact-links": " Reproducibility is a communication object: it tells the reader what to rerun, what will change if inputs change, and what is frozen for audit. Linking artifacts is how you honor the time of the next analyst who inherits your recommendation at a trade deadline. Spell out compute environment boundaries too: minor package drift can change coefficients enough to flip a marginal roster call even when the narrative sounds unchanged. Close with a human owner and a refresh cadence so reproducibility does not become a dead link graveyard by August.",
    "writing-for-technical-vs-non-technical-readers": " Dual-track writing succeeds when both tracks preserve the same decision rule and the same stop conditions. The non-technical track may hide algebra, but it should not hide the existence of a threshold, a sample window, or a rollback trigger that the technical track depends on.",
    "methodology-rewrite-workshop": " Rewrite workshops are where vague methodology becomes testable claims. Students should mark every sentence that implies causality, every silent default about playing time, and every hand-waved stationarity assumption. The goal is prose that an opposing analyst would find hard to misread on purpose.",
    "slide-architecture-for-analytical-arguments": " Slide architecture is information architecture. Each transition should answer one question: what changed, why it matters for a baseball decision, and what would falsify the takeaway. Slides that only decorate numbers train audiences to tune out the moment the meeting runs long.",
    "oral-defense-of-modeling-choices": " Oral defense rewards clarity under pressure. Practice explaining regularization, leakage controls, and evaluation splits without slides as a crutch. If you can defend the modeling choice in plain language, you can defend it in a clubhouse Q and A where nobody wants to see your notebook imports.",
    "handling-cross-examination-and-objections": " Objections are often requests for scope. Treat them as prompts to clarify the estimand, the baseline, and the monitoring plan. A grounded response maps each objection to a figure, a row filter, or an alternative specification rather than to rhetorical heat.",
    "constructive-peer-review-rubrics": " Rubrics turn taste into repeatable criteria. Weight truthfulness and decision linkage higher than polish so reviewers reward charts that survive scrutiny. Rubrics also make peer review faster, which matters when a dozen analysts are iterating overnight before a series.",
    "debate-formats-for-causal-claims": " Debate formats expose unstated counterfactuals quickly. Assign one side to defend a conservative causal reading and another to defend a descriptive-but-actionable reading, then adjudicate with pre-agreed evidence rules. Baseball decisions often hinge on which counterfactual the organization is willing to assume.",
    "revision-cycles-from-feedback": " Revision cycles fail when feedback is vague. Train reviewers to name the sentence, the figure, and the decision risk so authors can patch deterministically. Close the loop by re-checking whether the revised artifact still triggers the same operational choice under the same caveats.",
    "live-seminar-simulation": " Live simulations reveal whether students can hold scope under time pressure. Use realistic interruptions: a coach question, a data drift alert, and a sample-size challenge. Communication that survives interruption is communication that will survive a postseason travel day.",
    "capstone-topic-selection-and-proposal": " Topic selection should be narrow enough to finish and broad enough to matter. Force an explicit stakeholder, a measurable outcome, and a falsifiable claim so the proposal cannot drift into a generic survey of baseball analytics. Good proposals read like a contract for what evidence will be produced.",
    "literature-positioning-and-prior-work-context": " Positioning is not bibliography theater. It is explaining which prior results your work extends, which assumptions you relax, and which baseball decision your contribution reframes. Readers should finish the section knowing why your angle was not already settled.",
    "data-model-narrative-integration": " Integrating data and narrative means every dataset has a protagonist and a time horizon. Say how rows map to decisions, what joins create leverage, and where measurement error could flip a conclusion. Without that integration, models look like black boxes even when the code is clean.",
    "drafting-the-technical-report": " Technical reports should read like engineering documents: assumptions, estimands, diagnostics, and limitations in predictable locations. Readers skim for risk first; reward them with honest placement of fragility rather than burying it below a pretty ROC curve.",
    "building-the-executive-summary": " Executive summaries fail when they introduce new claims not supported in the body. Treat the summary as lossy compression with checksums: every headline number should point to a section that shows the derivation path and the uncertainty language that qualifies it.",
    "visual-appendix-and-reproducibility-bundle": " Appendices are where you protect future you. Bundle charts that stress-test the headline, code pointers, and environment notes so a skeptical coordinator can reproduce the core exhibit without a scavenger hunt across shared drives.",
    "mock-defense-and-rubric-scoring": " Mock defenses should score response quality, not performance anxiety. Reward students for naming assumptions, stating estimands, and translating uncertainty into monitoring triggers. Those behaviors correlate with trustworthy analytics practice more than smooth talking points do.",
    "final-capstone-submission-and-reflection": " Final reflection is where metacognition lives. Ask students to name what they would redo if the season replayed with new data, which communication choices reduced misinterpretation, and which risks they would monitor first in production. Reflection converts a grade into a habit.",
}


def patch_why_it_matters(text: str, slug: str, appendix: str) -> str:
    marker = f"[DEPTH:{slug}]"
    needle = '"communicating-sports-analytics-insights::'
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if needle in line and f"::{slug}\":" in line:
            out.append(line)
            i += 1
            while i < len(lines):
                wl = lines[i]
                if wl.lstrip().startswith("whyItMatters:"):
                    m = re.match(r'^(\s*whyItMatters:\s*")(.*)("\s*,\s*)$', wl.rstrip("\n"))
                    if not m:
                        raise RuntimeError(f"Unexpected whyItMatters line for {slug}: {wl!r}")
                    prefix, body, suf = m.group(1), m.group(2), m.group(3)
                    if marker in body:
                        out.append(wl)
                    else:
                        new_line = prefix + body + appendix + " " + marker + suf + ("\n" if wl.endswith("\n") else "")
                        out.append(new_line)
                    i += 1
                    break
                out.append(wl)
                i += 1
            continue
        out.append(line)
        i += 1
    return "".join(out)


def main() -> None:
    # Only Communication B: Communication A is maintained directly in-repo; bulk padding A previously
    # interacted poorly with duplicate-append artifacts in some workspaces.
    for path in (PATH_B,):
        raw = path.read_text(encoding="utf-8")
        out = raw
        for slug, appendix in SLUGS.items():
            out = patch_why_it_matters(out, slug, appendix)
        if out != raw:
            path.write_text(out, encoding="utf-8")
            print(f"Patched {len(SLUGS)} slug entries attempted in {path.name}")
        else:
            print(f"No changes for {path.name}")


if __name__ == "__main__":
    main()
