# Deadball Tracker — Legal Review Engagement Package

**Prepared for:** External counsel  
**Product:** Deadball Tracker (learner web application + content management for curriculum)  
**Note:** This package is factual and operational context only. It is not legal advice. Formal templates (privacy policy, terms, consent) should be drafted or reviewed by counsel.

---

## 1. Executive summary (one paragraph)

Deadball Tracker is a baseball analytics learning platform aimed at students, instructors, and self-directed learners who want to work with MLB Statcast–style data through interactive charts, structured curriculum tracks, and progress tracking. The learner experience is delivered primarily as a web application (Next.js frontend, FastAPI backend) with account registration and login, a library/catalog of lessons and tracks, dashboards for learning progress, and optional paid or classroom-oriented subscription tiers. A separate CMS or editorial workflow supports creation and maintenance of curriculum content, media, and metadata, with role-based access for administrators and content editors. Personal data flows from the user’s browser and devices into application servers and a PostgreSQL database; authentication, payments (if enabled), analytics, and third-party APIs may introduce additional subprocessors and cross-border transfers depending on configuration. User-generated content may be limited (e.g., notes, forum, assignments) or absent—counsel should confirm against the current feature set and roadmap.

---

## 2. Scope of review

Counsel is asked to review the following surfaces and systems **as implemented or planned for the next release**, including staging and production environments where applicable.

| Area | Review focus |
|------|----------------|
| **Website** | Marketing pages, pricing, claims about analytics/education outcomes, instructor/classroom messaging, contact forms, SEO metadata. |
| **Learner app** | Registration, login/logout, password reset, session handling, profile, curriculum consumption, progress tracking, data export/delete requests (if any). |
| **Authentication & identity** | Credential storage, OAuth/social login (if any), MFA, account linking, session cookies, JWT or server sessions, brute-force protections. |
| **Payments & billing** | Subscription tiers (e.g., free, student paid, classroom), invoices, tax/VAT display, refunds, chargebacks, PCI scope (use of payment processor widgets vs. raw card data), dunning and cancellation flows. |
| **Cookies, analytics & telemetry** | First- and third-party cookies, local storage, product analytics, error monitoring, A/B tests, consent banners and logging of consent. |
| **User-generated content (UGC)** | Comments, uploads, shared projects, instructor–student messaging, moderation, reporting, takedown, and DMCA/safe harbor posture (if UGC exists or is planned). |
| **CMS / editor roles** | Admin vs. editor permissions, audit logs, publishing workflow, PII in drafts, access to learner data from CMS, separation of duties. |
| **Minors & education context** | COPPA/FERPA-style considerations if K–12 or under-13 use is possible; age gates; school contracts; parental consent pathways—**confirm jurisdiction and actual user population with product**. |
| **Accessibility** | WCAG-related claims in marketing or procurement; VPAT posture if selling to institutions; liability vs. aspiration language. |
| **Marketing copy** | “College-level,” outcomes, MLB/Statcast references, third-party trademarks and data attribution, comparative claims. |
| **Third-party integrations** | Hosting, email, auth, payments, analytics, LLM features (if any), data vendors, open-source license notices in distributions. |

---

## 3. Document request list (what counsel needs from Deadball Tracker)

Provide counsel with the following **as current drafts or living documents**, even if incomplete:

1. **Product one-pager** — Audiences, geographies, monetization model, roadmap (next 2 quarters).  
2. **Architecture / data-flow diagram** — Browser → CDN → app servers → DB → backups; auth and payment hops.  
3. **Data inventory (“data map”)** — Categories of personal data collected, purpose, legal basis (for EU/UK if applicable), retention, deletion, and who can access each category (support, engineering, editors).  
4. **Subprocessor / vendor list** — Entity, service, data shared, region, DPA status, link to vendor privacy policy.  
5. **Draft Privacy Policy** and **Draft Terms of Service** (or link to current published versions + redlines).  
6. **Cookie policy / consent records** — Cookie table, consent tool configuration, sample consent logs.  
7. **Account & billing flows** — Screenshots or Loom of signup, checkout, cancellation, refund policy text.  
8. **Role matrix** — CMS/admin/learner/support roles and permissions (spreadsheet).  
9. **UGC policy** — Community guidelines, moderation playbook, reporting SLA (or statement that UGC is not offered).  
10. **Accessibility statement** (if any) and known audit results.  
11. **Marketing site copy** — Export of key pages (HTML/PDF).  
12. **Institutional / B2B terms** — Classroom or school agreements if sold to organizations.  
13. **Incident response & breach notification draft** — Internal checklist is sufficient for initial review.  
14. **Open questions log** — Known legal/compliance uncertainties from the team.

---

## 4. Review checklist by area

### Privacy & data protection

- [ ] Lawful basis for processing (consent vs. contract vs. legitimate interests) documented per processing activity.  
- [ ] Privacy notice accuracy vs. actual data collection and sharing.  
- [ ] Rights workflows: access, correction, deletion, portability, objection (as applicable by jurisdiction).  
- [ ] Cross-border transfers and transfer mechanisms (SCCs, UK IDTA, etc.).  
- [ ] Retention schedules aligned with product reality.  
- [ ] Children’s data: age thresholds, parental flows, default settings.  
- [ ] Email/marketing opt-in and unsubscribe compliance.

### Terms of service & consumer contracts

- [ ] Clear acceptance mechanism and updates/notice for material changes.  
- [ ] Subscription terms: renewal, price changes, cancellation, refunds.  
- [ ] Limitation of liability and warranty disclaimers appropriate to jurisdiction and B2C rules.  
- [ ] Dispute resolution, arbitration, class action waivers (enforceability check).  
- [ ] Acceptable use and enforcement (suspension/termination).

### Intellectual property & content

- [ ] License to user-generated content (if applicable).  
- [ ] License from content authors to Deadball Tracker for curriculum.  
- [ ] Third-party data and trademarks (MLB, Statcast, charts screenshots): display, attribution, and “no affiliation” disclaimers as needed.  
- [ ] Open-source license compliance for distributed components.

### Accessibility

- [ ] Marketing claims vs. actual conformance level.  
- [ ] Procurement language for schools/enterprises.

### Consumer protection & marketing

- [ ] Pricing transparency, auto-renewal disclosures (state/country specific).  
- [ ] “Free trial” mechanics and post-trial charges.  
- [ ] Advertising and endorsements (FTC-style truth-in-advertising if US-facing).

### Ed-tech / institutional (if applicable)

- [ ] FERPA/COPPA/student privacy addenda for school customers.  
- [ ] Data processing agreement (DPA) template for institutions.  
- [ ] Instructor access to student data: consent and minimum necessary use.

### Security & contracts with vendors

- [ ] DPAs with subprocessors.  
- [ ] Security representations in B2B agreements vs. internal controls.

---

## 5. Risk register template

Copy rows as needed. **Owner** should be a named role (e.g., Engineering Lead, Product, Legal).

| ID | Issue / finding | Area (privacy, ToS, IP, …) | Severity (Critical / High / Medium / Low) | Likelihood (H/M/L) | Mitigation / remediation | Owner | Target date | Status |
|----|-----------------|----------------------------|---------------------------------------------|--------------------|---------------------------|-------|-------------|--------|
| R-001 | | | | | | | | Open |

**Severity guidance (for product use; counsel may recalibrate):**

- **Critical** — Unlawful processing, under-13 without consent, payment compliance gap, or blocker to launch in target market.  
- **High** — Material misrepresentation in policies, missing required disclosures, significant IP exposure.  
- **Medium** — Process gaps, unclear terms, accessibility claim overshoot.  
- **Low** — Typos, non-material clarity, nice-to-have policy alignment.

---

## 6. Timeline suggestion (phases)

| Phase | Duration (indicative) | Activities |
|-------|------------------------|------------|
| **Phase 0 — Intake** | 3–5 business days | Kickoff call, share document package, clarify jurisdictions and launch date. |
| **Phase 1 — Gap review** | 1–2 weeks | Counsel reviews drafts and data map; issues preliminary red flags. |
| **Phase 2 — Deep dives** | 2–3 weeks | Payments, UGC/CMS, minors/ed-tech, marketing claims, integrations. |
| **Phase 3 — Drafting** | 2–4 weeks | Revise Privacy Policy, ToS, cookie/consent language, role-based notices. |
| **Phase 4 — Launch readiness** | 1 week | Final sign-off checklist, link publication plan, internal training for support. |

*Total indicative range: **6–10 weeks** from complete intake; shorter if scope is US-only, no payments, no minors.*

---

## 7. Contact & engagement logistics (fill before sending)

- **Company legal name:**  
- **Primary contact (product):**  
- **Primary contact (technical):**  
- **Target launch or review deadline:**  
- **Primary markets / states / countries:**  
- **Payment processor (if any):**  
- **Counsel firm & matter number:**  

---

*End of engagement package.*
