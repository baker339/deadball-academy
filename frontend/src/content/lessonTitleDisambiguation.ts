/**
 * Display titles that appear on more than one canonical lesson key (math vs physics spiral).
 * Keep in sync with `scripts/gen-sme-panel-review.ts` duplicate-title logic / SME doc §2 minor rows.
 */
export const DUPLICATE_DISPLAY_TITLES = new Set<string>([
  "Coordinate Systems For Baseball Fields",
  "Arc Length, Curvature, And Outfield Wall Geometry",
  "Trigonometric Functions Refresher For Modeling",
  "Unit Circle, Radians, And Angular Velocity In Context",
  "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
  "Inverse Trig For Reconstructing Launch Conditions",
  "Trig Identities For Simplifying Flight Equations",
  "Phase Shift And Periodicity In Baseball Motion Signals",
  "Polar, Cartesian, And Spherical Coordinate Conversions",
  "Dot Product, Projection, And Directional Influence",
  "Cross Product Intuition For Spin And Orientation",
  "Angle Optimization Under Physical Constraints",
  "Error Propagation In Trig-Based Calculations",
]);

const TRACK_SHORT_LABEL: Record<string, string> = {
  "geometry-foundations-for-baseball-context": "Geometry",
  "trigonometry-and-precalculus-for-baseball-modeling": "Precalculus",
  "baseball-physics-foundations": "Physics",
};

/** Lesson sidebar / header title: prepend track label when title collisions would confuse search or nav. */
export function lessonHeaderDisplayTitle(trackSlug: string, title: string): string {
  if (!DUPLICATE_DISPLAY_TITLES.has(title)) return title;
  const label = TRACK_SHORT_LABEL[trackSlug] ?? trackSlug;
  return `${label}: ${title}`;
}
