# Deadball Tracker — Structured Usability Beta & Test User Program

**Prepared for:** Beta coordinator / UX research lead  
**Product:** Learner web app (library, lessons, progress, auth) + CMS smoke tests for editors/admins  
**Note:** Incentive and consent language below is operational guidance only. **Have counsel approve** any formal beta agreement, privacy notice for research, or incentives that may implicate employment, tax, or minors.

---

## 1. Objectives

- Validate discoverability and comprehension of the **learner library** and **lesson flow** (including charts/analytics UI).  
- Stress-test **login, logout, password recovery**, and account settings.  
- Run a **lightweight CMS/editor smoke** on staging (or production with safeguards) for publishing workflows.  
- Capture **prioritized** UX and functional issues before wider release.

---

## 2. Recruitment criteria

### Diversity of roles

| Persona | What they represent | Screening notes |
|---------|----------------------|-----------------|
| **New student learner** | First-time account, no baseball analytics background | Include at least 2 who self-rate as “casual fan” only. |
| **Returning / power learner** | Has used similar tools or completed prior modules | At least 1 comfortable with Statcast-style metrics. |
| **Instructor / TA (optional)** | Evaluates usefulness for assigning tracks | Not required for every cohort; valuable for B2B roadmap. |
| **Admin** | Full permissions, user/support perspective | Internal or trusted partner; NDA as needed. |
| **Content editor** | CMS publish rights without full admin | Must use **staging** when possible; production only with read-only or test org. |

### Device & environment mix

- **Desktop:** Chrome and Safari (or Chrome + Edge on Windows).  
- **Mobile web:** At least 2 sessions on iOS Safari + 2 on Android Chrome (if responsive scope is in-scope).  
- **Network:** At least one session on slower throttled connection (optional but useful for chart loading).

### Diversity (non-technical)

- Mix of age bands (18+ only unless counsel approves minor research).  
- Mix of self-reported gender and geography if recruiting broadly (helps catch language, units, and scheduling friction).

### Exclusions / guardrails

- Do not use production **real payment cards** in tests unless using processor test mode.  
- Editors should not use **PII of real students** in CMS tasks; use synthetic personas.

---

## 3. Cohort size suggestion

| Study type | Suggested N | Rationale |
|------------|-------------|------------|
| **Qualitative moderated sessions** | **8–12** participants | Saturation on core flows; schedule 10 if expecting no-shows. |
| **Short survey-style (unmoderated or post-task)** | **30–50** responses | Stable top-of-funnel metrics on task success and SEQ; not a substitute for depth interviews. |
| **CMS smoke (editors/admins)** | **3–5** individuals | Role-specific; focus on permission errors and workflow breakage. |

**Optional:** Run two waves—**Wave A (n=6)** early, fix P0s, then **Wave B (n=6)** for regression on changed flows.

---

## 4. Consent & incentives (lightweight)

### Consent (points for counsel to formalize)

- **Recording:** Separate opt-in if sessions are recorded; storage location and retention.  
- **Confidentiality:** Beta build may contain unreleased features; one-line NDA or beta terms link.  
- **Data use:** Feedback may be quoted internally; anonymize quotes in external comms.  
- **Minors:** If any participant could be under 18, **stop** and use counsel-approved parental consent and school pathways.

### Incentives (examples; adjust for budget and tax policy)

| Audience | Suggestion |
|----------|------------|
| Students / general | **$40–$75** gift card per 60–90 min session, or course credit / swag for lightweight async. |
| Editors / internal | Often **no cash incentive**; time booked as work + recognition. |

Document: incentive type, value, delivery method, and whether 1099/tax reporting could apply (counsel/finance).

---

## 5. Task scripts (10–15 tasks)

**Session length:** ~60 minutes for learner track; add **20–30 min** for CMS track with editors.

### A. Learner library & discovery (Tasks 1–3)

1. **Cold start:** “Imagine you heard about Deadball Tracker from a friend. Starting from the marketing home page, decide whether you’d sign up and why.” (Think-aloud.)  
2. **Find a starting point:** “Find one lesson or module suitable for someone new to exit velocity concepts.”  
3. **Compare offerings:** “Locate where paid vs. free (or classroom) options are explained and summarize what you think you get.”

### B. Account: registration & auth (Tasks 4–6)

4. **Register:** Create a **beta-only** test account (coordinator provides email pattern or disposable domain policy).  
5. **Login / logout:** Log out completely, then log back in.  
6. **Recovery:** “You forgot your password—walk through recovery as far as safely possible without breaking a real account.” (Coordinator may supply a reset token on staging.)

### C. Lesson flow & learning UX (Tasks 7–10)

7. **Open a lesson:** Open a specific lesson (coordinator assigns title) and read the first screen; say what you’d do next.  
8. **Interact with analytics:** Complete the primary interaction the lesson asks for (e.g., chart filter, slider, table sort). Note anything confusing.  
9. **Progress signal:** After completing a short section, find **where the product shows your progress** and interpret it.  
10. **Interrupt & resume:** Close the tab mid-lesson, reopen the same lesson, and describe whether you landed where you expected.

### D. Edge & quality probes (Tasks 11–12)

11. **Error handling:** Coordinator triggers or asks participant to attempt an invalid input or boundary case (if safe).  
12. **Accessibility quick probe:** Zoom browser to 200% or use keyboard only for 3 minutes on the lesson page; report blockers.

### E. CMS / editor smoke (Tasks 13–15) — *editors/admins only, staging preferred*

13. **Sign in to CMS:** Log in with editor credentials; confirm role shown matches expectation.  
14. **Draft change:** Open an existing draft lesson or create a test draft with title prefix `[BETA-DELETE]`; add a short paragraph and save.  
15. **Publish / permission check:** Attempt the publish step; note whether approval is required, errors, or missing previews. **Do not publish breaking changes to production.**

---

## 6. Severity rubric (bugs & UX issues)

| Severity | Definition | Example |
|----------|------------|---------|
| **P0 / Blocker** | Cannot complete core task; data loss; security issue; widespread crash | Cannot log in; lesson progress not saved; payment double-charge. |
| **P1 / Major** | Core task completable with significant confusion or workaround | Chart loads >10s with no feedback; misleading progress %. |
| **P2 / Moderate** | Noticeable friction for subset of users | Misordered nav, typo in key metric label, mobile overlap. |
| **P3 / Minor** | Polish | Spacing, non-critical copy, rare edge case. |

Map **UX-only** issues without engineering bug reproduction to **P1–P3** unless they cause abandonment equivalent to a blocker.

---

## 7. Feedback capture

### Post-session survey (Likert + open text)

Use 5-point scale (Strongly disagree → Strongly agree) plus optional NPS.

1. I understood what Deadball Tracker is for after the first five minutes.  
2. I could find a lesson appropriate to my level without help.  
3. The charts and numbers were understandable with the on-screen explanations.  
4. I always knew whether my progress was saved.  
5. I felt confident logging in again later and continuing where I left off.  
6. Overall, this product is easy to use for its intended purpose.  
7. **Open:** What one change would most improve your first-day experience?  
8. **Open:** Anything that felt misleading, missing, or “too good to be true”?  
9. **SEQ (single ease question):** “Overall, this task was easy to complete.” (1–7)  
10. **Optional NPS:** How likely are you to recommend Deadball Tracker to a friend interested in baseball analytics? (0–10)

### Optional interview guide (15 min add-on)

- Walk me through the moment you felt most confused.  
- Where did you look for help, and was it there?  
- How does this compare to how you learn today (YouTube, coursework, spreadsheets)?  
- For instructors/editors only: What would you need to trust assigning this to a class?

---

## 8. Synthesis template (triage to P0 / P1 / P2)

### Session log (one row per issue observed)

| Issue ID | Short title | Task # | Participant ID | Severity (P0–P3) | Type (Bug / UX / Copy / Perf / A11y) | Evidence (timestamp, screenshot) | Notes | Owner suggestion |

### Triage meeting agenda (30–45 min)

1. **Dedupe** issues across sessions (same root cause).  
2. **Vote** severity using rubric; escalate ambiguous security items to engineering same day.  
3. **Assign** owner and target sprint.  
4. **Carryover** to Wave B if deferred.

### Output dashboard (simple table)

| Theme | # mentions | Highest severity | Proposed epic |
|-------|------------|------------------|----------------|
| Example: Chart loading | | | |

---

## 9. Coordinator checklist (before sessions)

- [ ] Staging URLs, test accounts, and editor roles provisioned.  
- [ ] Screen share + recording consent captured.  
- [ ] Bug template shared (title, steps, expected, actual, severity, environment).  
- [ ] “Do not use real card numbers” reminder sent.  
- [ ] Counsel-approved beta wording linked in calendar invite.

---

*End of beta program brief.*
