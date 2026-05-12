/**
 * Single source of truth for product chrome (nav, footer, metadata, key hub titles).
 * Curriculum content may still say "Deadball" where pedagogical; see docs/brand-brief.md.
 */
export const siteBrand = {
  displayName: "Deadball Academy",
  /** Navbar / mobile drawer wordmark */
  navWordmark: "Deadball Academy",
  /** Short line in global footer next to year */
  footerShortName: "Deadball",
  /** Default document title and SEO description */
  defaultTitle: "Deadball Academy",
  defaultDescription:
    "STEM-first baseball learning: physics, math, modeling, Statcast analysis, and analytics communication—with structured lessons, mastery checkpoints, and dashboard progress.",
  /**
   * One-line cold-traffic framing (home hero, shorter social preview text).
   * Pair under the H1; does not repeat the display name.
   */
  heroTagline: "STEM pathways in baseball analytics, physics, math, and Statcast literacy.",
  /** Supporting paragraph on the home hero after the tagline */
  heroLead:
    "Move through the lesson library, curriculum overview, and syllabus in order—with checkpoints and dashboard progress when you are enrolled.",
  /** Supporting copy for CMS / brand tables (home uses `heroLead` above; avoid “repository” for non-Git meaning) */
  learnHubSupporting:
    "Structured tracks from foundations through capstone communication: start in the lesson library, use the curriculum overview for progression, and follow the syllabus for milestones and expectations.",
  /** Single line under the lesson library hub H1 */
  libraryHubSubtitle:
    "STEM-style tracks and units—physics, modeling, Statcast analysis, and communication—in one lesson library.",
  /** Lesson library hub H1 (marketing chrome) */
  lessonLibraryHubTitle: "Deadball lesson library",
  /** Link label on login back to marketing home */
  loginBackToHomeLabel: "← Academy home",
  /** One sentence: baseball’s measurement tradition + serious learning (trust / ethos) */
  brandMission:
    "Deadball Academy teaches baseball analytics the way serious analysts work: explicit definitions, reproducible models, and defensible communication.",
  /** Who the program is for (short, non-billboard) */
  brandCommunityLine:
    "Self-study learners, student cohorts, and instructors who want one curriculum spine from algebra through Statcast literacy.",
  /** Home page ethos section heading */
  homeEthosHeading: "Why Deadball Academy",
  /** Three ethos pillars: heritage, craft, community */
  homeEthosBulletHeritage:
    "Measurement lineage: box scores to tracking data—same discipline of defining quantities before drawing conclusions.",
  homeEthosBulletCraft:
    "Reproducibility: assumptions stated, limits named, and work that another analyst can re-run or audit.",
  homeEthosBulletCommunity:
    "Shared standards: aligned units, vocabulary, and checkpoints so classrooms and independent study stay on the same rails.",
  /** Global footer trust line (every page) */
  footerTrustLine: "Structured tracks, gated checkpoints, and visible progress—built for people who take baseball data seriously.",
} as const;

export type SiteBrand = typeof siteBrand;
