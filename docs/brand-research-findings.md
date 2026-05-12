# Brand research findings — duo sprint memo

**Purpose:** Answer naming, color, contrast, warmth, and “would they stay?” questions with **your field notes** + **desk research**, then **recommendations** (no statistical study—confidence is qualitative).

**How to use this doc**

1. Fill **Your field notes** (verbatim quotes are best). Short bullets are fine.
2. Desk research below is a **starting synthesis**—refresh links periodically.
3. Update **Recommendation** and **Confidence** after you add your column.

---

## Theme 1 — Name: “Deadball Academy”


| Question                                       | Your field notes *(you fill)*                       | Desk research synthesis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Recommendation                                                                                                                                                                                                                                                                                   | Confidence                                                    |
| ---------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Is this the **best** name for the site?        | agree with the one liner for after deadball academy | **Category pattern:** Sports analytics education brands often lead with **literal** descriptors (“Sports Analytics,” “Foundations of Sports Analytics”) or **institution + topic** (SMWW + certificate framing). See [Sports Management Worldwide — sports analytics](http://www.sportsmanagementworldwide.com/sports-analytics), [Coursera — Foundations of Sports Analytics](https://www.coursera.org/learn/foundations-sports-analytics). **Niche brands** sometimes use insider terms when the audience is pro-track (e.g. analysis-heavy football training hubs). **“Deadball”** is **memorable and specific** to baseball discourse (juiced/dead ball, era language) but **opaque** to cold traffic who do not follow that vocabulary. **“Academy”** is generic but clear (education category). | Treat **“Deadball Academy”** as the **lockup** for in-group credibility; optimize **first-line comprehension** with a **fixed descriptor** under the wordmark or in metadata (already partly in `siteBrand.defaultDescription`) rather than renaming unless field notes show repeated confusion. | **Medium** — strong logic; weak without your hallway quotes.  |
| Does it **attract** or **deter**?              | same as above                                       | **Attracts:** serious baseball + data learners, people who enjoy “insider” framing, brand continuity with “Deadball” product lineage. **Deters (mild):** users who read “dead” negatively before context; parents/instructors who want instantly obvious “safe” academic naming; SEO seekers who type generic queries and never see the word “deadball.”                                                                                                                                                                                                                                                                                                                                                                                                                                              | Same as above: pair name with **one plain sentence** on first screen (“College-level baseball analytics, physics, and Statcast literacy”).                                                                                                                                                       | **Medium**                                                    |
| **Creative** enough vs **explanatory** enough? | agreed                                              | **Creative:** high (distinctive in a sea of “Analytics 101”). **Explanatory:** medium without supporting line; the **repository title** “Deadball Full Lesson Repository” is more literal for library power users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Keep creative name; **double down on explanatory subtitle** where acquisition happens (home, SEO description, social cards).                                                                                                                                                                     | **High** for the tradeoff framing; **Medium** for exact copy. |


### Desk references (name / positioning)

- [Sports Management Worldwide — sports analytics](http://www.sportsmanagementworldwide.com/sports-analytics) — institutional + certificate framing.
- [Coursera — Foundations of Sports Analytics](https://www.coursera.org/learn/foundations-sports-analytics) — literal, searchable course naming.
- [AnalyiSport](https://analyisport.com/) — niche analyst audience + “training hub” wording.

---

## Theme 2 — Color: baseball-themed learning + contrast


| Question                                                   | Your field notes                                                                                                                                                                                                                          | Desk research synthesis                                                                                                                                                                                                                                                                                                                                                                          | Recommendation                                                                                                                                                                                                                                                                                               | Confidence                                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Are current colors a **good fit** for baseball + learning? | not sure how I feel about a field green but I am willing to try it. Ultimately though, I strongly agree that right now things just feel way to generic. There is no branding in the colors itself here which I think is a bit unfortunate | **EdTech default:** neutral canvas + **blue** accent reads “credible / tool-like” (closer to **broadcast / data UI** than to **field materials**). Many sports course brands still look like **generic learning SaaS** unless they add photography, green/clay accents, or illustration. **Baseball-evocative** palettes often use **cream + deep green + red accent** sparingly—easy to overdo. | Current system is **on-category for serious learning**, **under-stated for “baseball romance.”** If you want more baseball *feel* without a rebrand: add **one restrained secondary** (e.g. muted field green or warm paper) as a **token** used only in marketing hero and section headers—not body chrome. | **Medium**                                                   |
| Enough **visual contrast** between elements?               | Agreed                                                                                                                                                                                                                                    | **Heuristic:** meaningful contrast is **canvas vs surface vs elevated**, **text vs surface**, **border visibility**, and **link vs body**—addressed structurally via CSS variables in `globals.css`; not the same as “colorful.” **WCAG:** body text vs background and interactive states still deserve spot-check with automated contrast tools when tokens change.                             | Keep **stepped surfaces + borders** in both themes; run a **contrast pass** whenever you change `--color-`*. Optional: one **secondary** only if it passes on both surfaces.                                                                                                                                 | **Medium–High** for structure; **Medium** for “interesting.” |


---

## Theme 3 — Feel: interesting, welcoming, would users stay?


| Question                      | Your field notes                                                     | Desk research synthesis                                                                                                                                                                                                                                | Recommendation                                                                                                                                       | Confidence                                                             |
| ----------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Interesting** to look at?   | Don't hate this. I think I would want to test this before finalizing | “Interesting” usually needs **variation in rhythm** (hero vs interior pages), **one focal illustration or photo**, or **typographic contrast**—not only hue shifts. Neutral + blue can read **calm** or **clinical** depending on density and imagery. | If the site feels flat: prioritize **hero treatment** + **lesson entry** polish before global recolor.                                               | **Medium**                                                             |
| **Welcoming**?                | Agreed                                                               | Welcoming correlates with **plain language**, **clear next action**, and **human warmth in copy**; less with saturated color.                                                                                                                          | Audit **first screen** copy tone; ensure primary CTA is obvious; avoid walls of gray microtext on mobile.                                            | **High** (UX norm); **Low** for predicting *your* users without notes. |
| Would users **want to stay**? | Agreed                                                               | **Session retention** is driven by **progress feedback, lesson quality, and “what’s next”** more than brand color. First-session bounce is more about **comprehension + trust**.                                                                       | Invest in **progress clarity** and **lesson pacing** in parallel with any visual tweaks; measure with simple analytics (time on lesson, completion). | **High**                                                               |


---

## Your field pass — checklist (plan step: your notes)

Do any subset; paste results into the tables above.

- **Hallway 1–5:** Show home hero only. Ask: “What is this?” “Who is it for?” “Would you click?” — paste 1–2 verbatim lines each.
- **References:** 2–3 links to edu/analytics sites you admire + one sentence each (“Borrow: X”).
- **Audience paragraph:** Who **must** understand “Deadball Academy” on day one? (e.g. instructors only vs motivated HS students.)

**Paste raw notes below (optional scratch area)**

```
(your notes here)
```

---

## Synthesis — cross-cutting (after you add field notes)


| Lever              | Low effort                                                            | Higher effort                                                     |
| ------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Name comprehension | Always-visible **one-line descriptor**; tighten SEO title/description | Rename / new lockup (only if field notes show persistent failure) |
| Baseball “feel”    | Hero image or subtle **secondary token** on marketing only            | Full palette + illustration system                                |
| Welcoming          | Warmer microcopy, spacing, fewer dense neutral blocks                 | User-tested onboarding                                            |
| Staying            | Clear next lesson, progress, fewer dead ends in IA                    | Deeper product analytics                                          |


---

## Changelog


| Date      | Author           | Change                                                             |
| --------- | ---------------- | ------------------------------------------------------------------ |
| *(today)* | Desk sprint (AI) | Initial memo + desk research column populated; user columns empty. |
| 2026-05-11 | Implementation | Shipped brand memo: `siteBrand` hero strings, root `openGraph` / `twitter` metadata, `--color-marketing-stripe` + `.ui-marketing-hero` on home, `/learn`, and lesson library hub. |


