# Brand brief — Deadball Academy (product chrome)

**Status:** Source of truth for marketing chrome, app shell, and CMS studio UI. Lesson **body** copy may use domain terms (“Deadball”) where pedagogically appropriate; see **Naming scope** below.

**Last updated:** Modern learning-product shell (neutral canvas, sans-first marketing, learning affordances on hubs).

---

## 1. Product identity

| Field | Value |
|--------|--------|
| **Display name** | Deadball Academy |
| **Short nav label** | Same as display (navbar wordmark) |
| **Footer credit** | `Deadball` (short legal-style line; pair with year in layout) |
| **Tagline (optional)** | Same as `siteBrand.heroTagline` (see below) |

**`siteBrand` acquisition strings** ([`frontend/src/config/siteBrand.ts`](../frontend/src/config/siteBrand.ts)):

| Key | Role |
|-----|------|
| `defaultDescription` | SEO / Open Graph long description |
| `heroTagline` | One line under H1 on home; Twitter card description |
| `heroLead` | Home hero supporting paragraph |
| `learnHubSupporting` | Extra supporting copy (CMS / brand tables; mirrors home messaging) |
| `libraryHubSubtitle` | One line under the lesson library hub H1 |
| `brandMission` | One-sentence ethos: serious analytics practice (definitions, reproducibility, communication) |
| `brandCommunityLine` | Who the program serves (learners, instructors, cohorts) |
| `homeEthosHeading` | Home “Why …” section title |
| `homeEthosBulletHeritage` / `Craft` / `Community` | Three short ethos pillars on the home page |
| `footerTrustLine` | Global footer trust sentence (every page) |

---

## 2. Audience and tone

- **Primary:** Serious learners (students, self-study, instructors as guides).
- **Tone:** Clear, direct, slightly technical; avoid hype. Prefer concrete outcomes over slogans.
- **Learning product first:** Surfaces should read like **courseware** (paths, resume, structured cards)—in the same register as modern learning products (clear hierarchy, obvious next actions). **Baseball** shows up in **domain copy, examples, and curriculum titles**, not as decorative “poster” chrome.
- **CMS/editor tone:** Same clarity; internal UI labels may be terse.

---

## 3. Color system (intent)

- **App shell:** **Cool neutral canvas** (`--color-bg`), **white / soft gray surfaces**, **near-black navy ink** (`--color-fg`, `--color-primary`), **disciplined warm accent** (`--color-accent` family for links, focus ring, lesson progress, and the **accent rail** on hub heroes). Light-only (no dark theme).
- **Callouts:** Navy-tinted panels so they sit with the shell (not SaaS blue).
- **Hub heroes:** **`.ui-marketing-hero`** paired with **`.ui-card-major`** adds a **thin accent left rail** and subtle vertical wash only—no scorecard hairlines or separate marketing stripe tokens.
- **Lesson reading envelope:** Long lessons use **`.ui-lesson-reading`** and **`--color-reading-*`** (near-white panel, high-contrast ink) so reading stays comfortable on the neutral page.

**Token names (code):** `--color-bg`, `--color-fg`, `--color-muted`, `--color-border`, `--color-surface*`, `--color-primary*`, `--color-accent*`, `--color-ring`, `--color-danger`, callout tokens, **`--color-reading-bg`**, **`--color-reading-fg`**, **`--color-reading-muted`**, **`--color-reading-border`**. See [`frontend/src/app/globals.css`](../frontend/src/app/globals.css).

---

## 4. Typography

- **UI stack:** **Inter** via `next/font` on `body` for UI, lesson mechanics, CMS tables, and long reading.
- **Display / marketing:** **Archivo Narrow** as `--font-display` via **`.ui-marketing-display`** on the navbar wordmark, marketing **H1**s, and section titles that need condensed “program schedule” energy.
- **Hierarchy:** Primary hub headings use **sans display**; reserve uppercase tracking for **`.ui-meta-label`**, not long paragraphs.

---

## 5. Learning affordances (hubs)

- **Continue learning:** Signed-out users see a **progress prompt** with sign-in; signed-in users see **resume** to the first incomplete lesson in **global curriculum order** (library snapshot), or a **caught-up** state when every published lesson is complete. Implemented via **`ContinueLearningPanel`** on home and the lesson library hub.
- **Paths:** Home **`#learning-paths`** lists a **card grid** of curriculum tracks with unit/lesson counts and links into the library and structured track overview. Legacy **`/learn`** redirects to that section.

---

## 6. Shell audit — Brilliant-aligned deltas (implemented)

| Area | Prior | Current |
|------|--------|---------|
| Canvas | Paper-cream heritage field | Neutral gray-white product canvas |
| Marketing hero | Thick stripe + hairlines | Card + shadow + **3px accent rail** + light wash |
| Typography | Script wordmark / heroes | **Sans-first** Archivo + Inter |
| Nav | Decorative script | **Condensed sans** wordmark |
| Hubs | Brochure CTAs only | **Continue learning** + **path cards** (home + library) |
| Tokens | `--color-marketing-stripe` / `tint` | Removed; accent rail uses **`--color-accent`** |

---

## 7. Shape language

- **Cards / panels:** `0.5rem`–`0.75rem` radius; major cards use **`--shadow-card`** (soft product shadow).
- **Buttons:** `rounded-md` (via `.ui-btn-*`).
- **Pills / chips:** Full pill where semantics call for it (progress, tags).

---

## 8. Naming scope (chrome vs content)

| Area | Rule |
|------|------|
| **Chrome** (nav, footer, login, marketing pages, library hub titles, metadata) | Use `siteBrand` strings from [`frontend/src/config/siteBrand.ts`](../frontend/src/config/siteBrand.ts). |
| **Curriculum content** (`frontend/src/content/**`, lesson JSON, unit titles) | May retain “Deadball” in lesson titles or examples unless a separate content rebranding is approved. |
| **CMS** | Studio UI follows tokens; authored lesson text follows curriculum guidelines on the in-app **Brand guide** (`/cms/brand`). |

---

## 9. CMS / editor compliance

- **Structural:** CMS shells, tables, forms, and review panels use **only** shared primitives (`.ui-surface*`, `.ui-btn-*`, `.ui-link*`, semantic `var(--color-*)` text). No ad-hoc `bg-white` / `text-black` in studio routes.
- **Operational:** Editors and admins can open **`/cms/brand`** for live swatches, do/don’t list, and pointers to this document.
- **Lesson quality:** Baseball–STEM editor rubric ([`docs/lesson-editor-rubric.md`](lesson-editor-rubric.md)), batched alignment program ([`docs/lesson-alignment-report.md`](lesson-alignment-report.md)), and heuristic audits (`runRubricLessonAudit`, `runSinglePassLessonAudit` under `frontend/src/content/`).

---

## 10. Change control

Any change to display name, accent family, or contrast targets should:

1. Update this brief.
2. Update `siteBrand.ts` and/or `globals.css` tokens.
3. Refresh `/cms/brand` if copy or token tables are duplicated there.
