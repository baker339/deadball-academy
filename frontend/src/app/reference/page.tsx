import { EquationBlock } from "../../components/EquationBlock";

export default function ReferencePage() {
  return (
    <div className="ui-container max-w-3xl py-12">
      <h1 className="text-4xl font-extrabold mb-8">Equations & Assumptions Reference</h1>
      <EquationBlock
        title="Drag Coefficient (Physics-Based)"
        equation={String.raw`C_d = \frac{2 m g (d_{vacuum} - d_{actual})}{\rho A d_{actual} v_0^2}`}
        explanation={"This formula estimates the drag coefficient using physical constants and compares the actual distance a ball traveled to the distance it would have traveled in a vacuum (no air resistance)."}
        variables={[
          "C_d: Drag coefficient (dimensionless)",
          "m: Mass of baseball (kg)",
          "g: Acceleration due to gravity (9.8 m/s²)",
          "d_{vacuum}: Calculated distance in a vacuum (meters)",
          "d_{actual}: Actual hit distance (meters)",
          "\rho: Air density (kg/m³)",
          "A: Cross-sectional area of baseball (m²)",
          "v_0: Initial velocity (m/s)"
        ]}
        assumptions={[
          "No wind or environmental effects",
          "Ball is a perfect sphere",
          "Only air resistance is considered",
          "Data quality filters applied (e.g., plausible values for all variables)"
        ]}
        usedIn="ETL drag coefficient calculation, Drag vs HR chart, Physics lesson: 'Air Resistance'"
        relatedLessons={[
          {
            label: "Library: Physical Meaning Of Drag Coefficient",
            href: "/learn/library/baseball-physics-foundations/drag-lift-and-aerodynamics-of-the-baseball/physical-meaning-of-drag-coefficient-in-baseball",
          },
          {
            label: "Library: Aerodynamics Practicum",
            href: "/learn/library/baseball-physics-foundations/drag-lift-and-aerodynamics-of-the-baseball/aerodynamics-practicum-inference-and-validation",
          }
        ]}
      />
      <EquationBlock
        title="Vacuum Distance Formula"
        equation={String.raw`d_{vacuum} = \frac{v_0^2 \sin(2\theta)}{g}`}
        explanation={"This formula calculates the distance a ball would travel in a vacuum (no air resistance), based on its initial velocity and launch angle."}
        variables={[
          "d_{vacuum}: Distance in a vacuum (meters)",
          "v_0: Initial velocity (m/s)",
          "\theta: Launch angle (radians)",
          "g: Acceleration due to gravity (9.8 m/s²)"
        ]}
        assumptions={[
          "No air resistance",
          "No wind or environmental effects",
          "Ball is a point mass",
          "Flat ground, no spin effects"
        ]}
        usedIn="Drag coefficient calculation, Physics lesson: 'Projectile Motion'"
        relatedLessons={[
          {
            label: "Library: No-Drag Projectile Derivation",
            href: "/learn/library/baseball-physics-foundations/newtonian-mechanics-and-projectile-motion/no-drag-projectile-derivation-from-first-principles",
          },
          {
            label: "Library: Time Of Flight, Apex, And Range",
            href: "/learn/library/baseball-physics-foundations/newtonian-mechanics-and-projectile-motion/time-of-flight-apex-and-range-relationships",
          }
        ]}
      />
      {/* Add more <EquationBlock />s here for other equations as needed */}
    </div>
  );
} 