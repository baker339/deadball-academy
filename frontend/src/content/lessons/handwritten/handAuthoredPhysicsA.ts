import type { LessonDocument } from "../../lessonTypes";
import { baseballIntegrativeSummative } from "../summativeReflectionPresets";

export const HAND_AUTHORED_PHYSICS_A: Record<string, LessonDocument> = {
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::coordinate-systems-for-baseball-fields",
    "title": "Coordinate Systems For Baseball Fields",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Coordinate Systems For Baseball Fields sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. If two models disagree, compare their hidden axes first—gravity still points down in every park even when camera angles do not. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Why this topic again? (1) New cognitive demand: same coordinate ideas, now inside a physics workflow — sensitivity, forces, and model assumptions must align with the frame you declare. (2) Fluency target: defend axis choices when two models disagree, before debating spin or drag. (3) Link forward: ball-flight and environmental chapters reuse this frame when you lift from 2D park maps to trajectory state vectors.\n\nImagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `geometry-foundations-for-baseball-context::coordinate-geometry-essentials::coordinate-systems-for-baseball-fields` first if you skipped Geometry—same display title, geometry-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Coordinate Systems For Baseball Fields",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Coordinate Systems For Baseball Fields, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Coordinate Systems For Baseball Fields",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Coordinate Systems For Baseball Fields",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Coordinate Systems For Baseball Fields problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Coordinate Systems For Baseball Fields teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Coordinate Systems For Baseball Fields"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Coordinate Systems For Baseball Fields"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Coordinate Systems For Baseball Fields"
      },
      {
        "term": "Geometry track parallel",
        "definition": "Geometry Foundations For Baseball Context covers the same coordinate topic with defensive charting and field-measurement emphasis.",
        "lessonTitle": "Coordinate Systems For Baseball Fields",
        "lessonPath": "/learn/library/geometry-foundations-for-baseball-context/coordinate-geometry-essentials/coordinate-systems-for-baseball-fields"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-1-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-1-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-1-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::field-dimensions-symmetry-and-constraint-boundaries": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::field-dimensions-symmetry-and-constraint-boundaries",
    "title": "Field Dimensions, Symmetry, And Constraint Boundaries",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Field Dimensions, Symmetry, And Constraint Boundaries sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Field Dimensions, Symmetry, And Constraint Boundaries",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Field Dimensions, Symmetry, And Constraint Boundaries, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Field Dimensions, Symmetry, And Constraint Boundaries",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Field Dimensions, Symmetry, And Constraint Boundaries",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Field Dimensions, Symmetry, And Constraint Boundaries problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Field Dimensions, Symmetry, And Constraint Boundaries teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Field Dimensions, Symmetry, And Constraint Boundaries"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Field Dimensions, Symmetry, And Constraint Boundaries"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Field Dimensions, Symmetry, And Constraint Boundaries"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-2-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-2-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-2-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::arc-length-curvature-and-outfield-wall-geometry",
    "title": "Arc Length, Curvature, And Outfield Wall Geometry",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Arc Length, Curvature, And Outfield Wall Geometry sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `geometry-foundations-for-baseball-context::circles-arcs-and-curvature::arc-length-curvature-and-outfield-wall-geometry` first if you skipped Geometry—same display title, geometry-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Arc Length, Curvature, And Outfield Wall Geometry",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Arc Length, Curvature, And Outfield Wall Geometry, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Arc Length, Curvature, And Outfield Wall Geometry",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Arc Length, Curvature, And Outfield Wall Geometry",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Arc Length, Curvature, And Outfield Wall Geometry problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Arc Length, Curvature, And Outfield Wall Geometry teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Arc Length, Curvature, And Outfield Wall Geometry"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Arc Length, Curvature, And Outfield Wall Geometry"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Arc Length, Curvature, And Outfield Wall Geometry"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-3-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-3-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-3-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::launch-angle-as-a-geometric-object": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::launch-angle-as-a-geometric-object",
    "title": "Launch Angle As A Geometric Object",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Launch Angle As A Geometric Object sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Launch Angle As A Geometric Object",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Launch Angle As A Geometric Object, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Launch Angle As A Geometric Object",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Launch Angle As A Geometric Object",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Launch Angle As A Geometric Object problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Launch Angle As A Geometric Object teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Launch Angle As A Geometric Object"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Launch Angle As A Geometric Object"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Launch Angle As A Geometric Object"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-4-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-4-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-4-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::2d-to-3d-flight-geometry-transitions": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::2d-to-3d-flight-geometry-transitions",
    "title": "2D To 3D Flight Geometry Transitions",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because 2D To 3D Flight Geometry Transitions sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: 2D To 3D Flight Geometry Transitions",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In 2D To 3D Flight Geometry Transitions, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For 2D To 3D Flight Geometry Transitions",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In 2D To 3D Flight Geometry Transitions",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same 2D To 3D Flight Geometry Transitions problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "2D To 3D Flight Geometry Transitions teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "2D To 3D Flight Geometry Transitions"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "2D To 3D Flight Geometry Transitions"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "2D To 3D Flight Geometry Transitions"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-5-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-5-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-5-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::ballpark-topology-and-home-run-boundary-surfaces": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::ballpark-topology-and-home-run-boundary-surfaces",
    "title": "Ballpark Topology And Home Run Boundary Surfaces",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Ballpark Topology And Home Run Boundary Surfaces sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Ballpark Topology And Home Run Boundary Surfaces",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Ballpark Topology And Home Run Boundary Surfaces, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Ballpark Topology And Home Run Boundary Surfaces",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Ballpark Topology And Home Run Boundary Surfaces",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Ballpark Topology And Home Run Boundary Surfaces problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Ballpark Topology And Home Run Boundary Surfaces teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Ballpark Topology And Home Run Boundary Surfaces"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Ballpark Topology And Home Run Boundary Surfaces"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Ballpark Topology And Home Run Boundary Surfaces"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-6-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-6-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-6-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometric-sensitivity-small-angle-changes-large-outcome-swings": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometric-sensitivity-small-angle-changes-large-outcome-swings",
    "title": "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Geometric Sensitivity: Small Angle Changes, Large Outcome Swings sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Geometric Sensitivity: Small Angle Changes, Large Outcome Swings",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Geometric Sensitivity: Small Angle Changes, Large Outcome Swings, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Geometric Sensitivity: Small Angle Changes, Large Outcome Swings",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Geometric Sensitivity: Small Angle Changes, Large Outcome Swings",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Geometric Sensitivity: Small Angle Changes, Large Outcome Swings problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Geometric Sensitivity: Small Angle Changes, Large Outcome Swings"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-7-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-7-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-7-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions": {
    "key": "baseball-physics-foundations::geometry-of-the-field-and-ball-flight::geometry-synthesis-lab-mapping-ball-flight-regions",
    "title": "Geometry Synthesis Lab: Mapping Ball Flight Regions",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Geometry Of The Field And Ball Flight",
    "whyItMatters": "This lesson matters because Geometry Synthesis Lab: Mapping Ball Flight Regions sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Geometry Synthesis Lab: Mapping Ball Flight Regions",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Geometry Synthesis Lab: Mapping Ball Flight Regions, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Geometry Synthesis Lab: Mapping Ball Flight Regions",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Geometry Synthesis Lab: Mapping Ball Flight Regions",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Geometry Synthesis Lab: Mapping Ball Flight Regions problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Geometry Synthesis Lab: Mapping Ball Flight Regions teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Geometry Synthesis Lab: Mapping Ball Flight Regions"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Geometry Synthesis Lab: Mapping Ball Flight Regions"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Geometry Synthesis Lab: Mapping Ball Flight Regions"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-8-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-8-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-8-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ],
    "summativeReflection": baseballIntegrativeSummative({
      id: "physics-geometry-synthesis-memo",
      title: "Summative: Ball-flight region map memo",
      intro:
        "Map reachable and high-leverage flight regions for one park context. Rubric-guided self review before peer share.",
      taskPrompt:
        "Choose one outfield / wall geometry scenario. Sketch regions in words with coordinates, tie each region to a tactical decision (shift depth, relay, or pitcher attack plan), document two verification checks (boundary distance and one alternate framing), and finish with uncertainty about wind or measurement noise.",
    }),
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometric-functions-refresher-for-modeling",
    "title": "Trigonometric Functions Refresher For Modeling",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Trigonometric Functions Refresher For Modeling sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trigonometric-functions-refresher-for-modeling` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Trigonometric Functions Refresher For Modeling",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Trigonometric Functions Refresher For Modeling, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Trigonometric Functions Refresher For Modeling",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Trigonometric Functions Refresher For Modeling",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Trigonometric Functions Refresher For Modeling problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Trigonometric Functions Refresher For Modeling teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Trigonometric Functions Refresher For Modeling"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Trigonometric Functions Refresher For Modeling"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Trigonometric Functions Refresher For Modeling"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-9-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-9-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-9-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::unit-circle-radians-and-angular-velocity-in-context",
    "title": "Unit Circle, Radians, And Angular Velocity In Context",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because rotational baseball mechanics are inherently angular, and the most reliable way to track angular change over time is in radians. When a hitter rotates through contact, coaches and analysts need a unit that connects geometry, timing, and derivatives without conversion noise in every step. Radians do that because they encode angle through arc length relative to radius, so motion models remain physically interpretable from swing path to barrel arrival timing. If a staff uses degree-only intuition in high-speed calculations, they can still describe motion, but they lose mathematical clarity when connecting to angular velocity, sinusoidal modeling, and optimization. This lesson builds a clear bridge from unit-circle geometry to game-speed rotational decisions so analysts can communicate with biomech staff and coaches in one shared language.",
    "lessonOpener": "In a cage session, two swings may look visually similar while producing very different timing windows at contact. The difference often appears when you examine rotation through radians and angular velocity instead of broad verbal labels like quick or late. We begin by anchoring the unit circle to baseball movement, then connect arc-based angle measurement to how a hitter actually turns the barrel through space. From there, we convert those ideas into computational checks that can survive both classroom derivation and practical coaching review. By the end, students should be able to explain why radians are not just another notation choice but a modeling necessity for rotational baseball physics.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::unit-circle-radians-and-angular-velocity-in-context` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Why Radians Exist (Not Just Another Unit)",
        "explainLikeCoach": "Coaches already understand that turning farther around a circle means covering more curved distance. In precise modeling language, arc length means distance traced along the curve, and radians package that idea directly as angle equals arc length divided by radius. That is why radians simplify rotational baseball physics: the unit itself carries geometric meaning instead of being an arbitrary label. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Radian measure is defined by theta = s/r, where s is arc length and r is radius. On the unit circle, r = 1 so theta numerically equals arc length, which is why derivatives of trigonometric functions take their clean canonical form only when angle is in radians.",
        "equation": "theta = s / r"
      },
      {
        "heading": "Unit Circle As A Motion Coordinate System",
        "explainLikeCoach": "Map rotating baseball motion onto the unit circle to interpret cosine and sine as continuously changing coordinates rather than isolated triangle ratios. This allows swing and arm-turn phases to be modeled as directional components that evolve smoothly through time.",
        "formalNote": "Point coordinates on the unit circle satisfy (x, y) = (cos(theta), sin(theta)). As theta evolves, these coordinates produce periodic signals that are directly usable in rotational kinematics and timing analysis.",
        "equation": "(x, y) = (cos(theta), sin(theta))"
      },
      {
        "heading": "Angular Velocity In Game-Speed Terms",
        "explainLikeCoach": "Angular velocity tells how quickly rotational angle changes during the motion window that matters for contact quality. In practical baseball language, this links timing precision to how fast rotational states are traversed near the decision point.",
        "formalNote": "Angular velocity is omega = d(theta)/dt and period satisfies T = 2pi/omega for periodic components. Using radians keeps these relationships dimensionally coherent in calculus-based modeling.",
        "equation": "omega = d(theta)/dt"
      },
      {
        "heading": "Reporting Rotational Insights To Coaches",
        "explainLikeCoach": "When presenting results, pair angular metrics with clear baseball interpretation: what changed, why it matters for timing, and what adjustment to test next. Avoid dumping raw numbers without context.",
        "formalNote": "A complete report includes unit declaration, phase window, estimation method, and uncertainty notes, then ties the result to a concrete intervention hypothesis.",
        "equation": "\\[insight = rotational\\_metric + timing\\_context + recommendation\\]"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Baseball context: barrel turn window estimation",
        "scenario": "Estimate average angular velocity during the final approach to contact for a competitive hitter.",
        "walkthrough": [
          "Measure angle change in radians across the selected frame window.",
          "Compute delta theta divided by delta time for average omega.",
          "Compare against historical windows for the same hitter profile.",
          "Translate difference into an actionable drill focus."
        ],
        "takeaway": "Radian-based angular rates support direct timing comparisons in baseball development."
      },
      {
        "title": "Arc-Length Interpretation Drill",
        "scenario": "Connect visual turn distance to numeric angle so players and analysts share one interpretation.",
        "walkthrough": [
          "Mark a notional rotation radius at the relevant body segment.",
          "Estimate curved travel distance during a specific turn phase.",
          "Compute theta via arc length divided by radius.",
          "Explain the result in both geometric and coaching language."
        ],
        "takeaway": "Arc-length framing makes radians intuitive and operational."
      },
      {
        "title": "Comparing Degree vs Radian Pipelines",
        "scenario": "Audit a modeling script that mixed degree values with radian-based equations and produced unstable outputs.",
        "walkthrough": [
          "Identify every place where angle enters trigonometric or derivative calculations.",
          "Normalize all internal calculations to radians.",
          "Re-run outputs and check for consistency across game segments.",
          "Document conversion points for user-facing displays only."
        ],
        "takeaway": "Consistent internal radians prevent avoidable rotational-model errors."
      },
      {
        "title": "Angular Timing Decision Packet",
        "scenario": "Prepare a coach-ready note that links rotational timing metrics to one concrete swing intervention.",
        "walkthrough": [
          "Summarize key angular metrics and confidence bounds.",
          "Highlight the phase where timing diverges from target.",
          "Propose one adjustment and expected measurable effect.",
          "State what follow-up data will confirm or refute the change."
        ],
        "takeaway": "Angular metrics become useful only when translated into testable coaching action."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Unit Circle, Radians, And Angular Velocity In Context teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Unit Circle, Radians, And Angular Velocity In Context"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Unit Circle, Radians, And Angular Velocity In Context"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Unit Circle, Radians, And Angular Velocity In Context"
      },
      {
        "term": "Arc length",
        "definition": "Distance traveled along a curve, used with radius to define radians.",
        "lessonTitle": "Arc Length, Curvature, And Outfield Wall Geometry",
        "lessonPath": "/learn/library/baseball-physics-foundations/geometry-of-the-field-and-ball-flight/arc-length-curvature-and-outfield-wall-geometry"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-10-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-10-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-10-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion",
    "title": "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::sohcahtoa-to-vector-components-horizontal-vs-vertical-motion` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "SOHCAHTOA To Vector Components: Horizontal Vs Vertical Motion"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-11-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-11-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-11-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::inverse-trig-for-reconstructing-launch-conditions",
    "title": "Inverse Trig For Reconstructing Launch Conditions",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Inverse Trig For Reconstructing Launch Conditions sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::inverse-trig-for-reconstructing-launch-conditions` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Inverse Trig For Reconstructing Launch Conditions",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Inverse Trig For Reconstructing Launch Conditions, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Inverse Trig For Reconstructing Launch Conditions",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Inverse Trig For Reconstructing Launch Conditions",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Inverse Trig For Reconstructing Launch Conditions problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Inverse Trig For Reconstructing Launch Conditions teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Inverse Trig For Reconstructing Launch Conditions"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Inverse Trig For Reconstructing Launch Conditions"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Inverse Trig For Reconstructing Launch Conditions"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-12-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-12-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-12-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::dot-product-projection-and-directional-influence",
    "title": "Dot Product, Projection, And Directional Influence",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Dot Product, Projection, And Directional Influence sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::dot-product-projection-and-directional-influence` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Dot Product, Projection, And Directional Influence",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Dot Product, Projection, And Directional Influence, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Dot Product, Projection, And Directional Influence",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Dot Product, Projection, And Directional Influence",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Dot Product, Projection, And Directional Influence problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Dot Product, Projection, And Directional Influence teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Dot Product, Projection, And Directional Influence"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Dot Product, Projection, And Directional Influence"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Dot Product, Projection, And Directional Influence"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-13-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-13-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-13-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::cross-product-intuition-for-spin-and-orientation",
    "title": "Cross Product Intuition For Spin And Orientation",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Cross Product Intuition For Spin And Orientation sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::cross-product-intuition-for-spin-and-orientation` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Cross Product Intuition For Spin And Orientation",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Cross Product Intuition For Spin And Orientation, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Cross Product Intuition For Spin And Orientation",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Cross Product Intuition For Spin And Orientation",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Cross Product Intuition For Spin And Orientation problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Cross Product Intuition For Spin And Orientation teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Cross Product Intuition For Spin And Orientation"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Cross Product Intuition For Spin And Orientation"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Cross Product Intuition For Spin And Orientation"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-14-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-14-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-14-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::polar-cartesian-and-spherical-coordinate-conversions",
    "title": "Polar, Cartesian, And Spherical Coordinate Conversions",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Polar, Cartesian, And Spherical Coordinate Conversions sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::polar-cartesian-and-spherical-coordinate-conversions` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Polar, Cartesian, And Spherical Coordinate Conversions",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Polar, Cartesian, And Spherical Coordinate Conversions, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Polar, Cartesian, And Spherical Coordinate Conversions",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Polar, Cartesian, And Spherical Coordinate Conversions",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Polar, Cartesian, And Spherical Coordinate Conversions problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Polar, Cartesian, And Spherical Coordinate Conversions teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Polar, Cartesian, And Spherical Coordinate Conversions"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Polar, Cartesian, And Spherical Coordinate Conversions"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Polar, Cartesian, And Spherical Coordinate Conversions"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-15-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-15-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-15-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::phase-shift-and-periodicity-in-baseball-motion-signals",
    "title": "Phase Shift And Periodicity In Baseball Motion Signals",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Phase Shift And Periodicity In Baseball Motion Signals sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::functions-transformations-and-signals::phase-shift-and-periodicity-in-baseball-motion-signals` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Phase Shift And Periodicity In Baseball Motion Signals",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Phase Shift And Periodicity In Baseball Motion Signals, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Phase Shift And Periodicity In Baseball Motion Signals",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Phase Shift And Periodicity In Baseball Motion Signals",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Phase Shift And Periodicity In Baseball Motion Signals problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Phase Shift And Periodicity In Baseball Motion Signals teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Phase Shift And Periodicity In Baseball Motion Signals"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Phase Shift And Periodicity In Baseball Motion Signals"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Phase Shift And Periodicity In Baseball Motion Signals"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-16-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-16-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-16-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::trig-identities-for-simplifying-flight-equations",
    "title": "Trig Identities For Simplifying Flight Equations",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Trig Identities For Simplifying Flight Equations sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::trigonometric-core-concepts::trig-identities-for-simplifying-flight-equations` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Trig Identities For Simplifying Flight Equations",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Trig Identities For Simplifying Flight Equations, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Trig Identities For Simplifying Flight Equations",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Trig Identities For Simplifying Flight Equations",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Trig Identities For Simplifying Flight Equations problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Trig Identities For Simplifying Flight Equations teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Trig Identities For Simplifying Flight Equations"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Trig Identities For Simplifying Flight Equations"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Trig Identities For Simplifying Flight Equations"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-17-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-17-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-17-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::angle-optimization-under-physical-constraints",
    "title": "Angle Optimization Under Physical Constraints",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Angle Optimization Under Physical Constraints sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::angle-optimization-under-physical-constraints` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Angle Optimization Under Physical Constraints",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Angle Optimization Under Physical Constraints, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Angle Optimization Under Physical Constraints",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Angle Optimization Under Physical Constraints",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Angle Optimization Under Physical Constraints problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Angle Optimization Under Physical Constraints teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Angle Optimization Under Physical Constraints"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Angle Optimization Under Physical Constraints"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Angle Optimization Under Physical Constraints"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-18-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-18-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-18-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::error-propagation-in-trig-based-calculations",
    "title": "Error Propagation In Trig-Based Calculations",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Error Propagation In Trig-Based Calculations sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Spiral: complete `trigonometry-and-precalculus-for-baseball-modeling::vectors-and-optimization-preparation::error-propagation-in-trig-based-calculations` first if you skipped Precalculus—same display title, precalculus-first contract vs this physics workflow.",
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Error Propagation In Trig-Based Calculations",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Error Propagation In Trig-Based Calculations, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Error Propagation In Trig-Based Calculations",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Error Propagation In Trig-Based Calculations",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Error Propagation In Trig-Based Calculations problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Error Propagation In Trig-Based Calculations teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Error Propagation In Trig-Based Calculations"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Error Propagation In Trig-Based Calculations"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Error Propagation In Trig-Based Calculations"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-19-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-19-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-19-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems": {
    "key": "baseball-physics-foundations::trigonometry-and-vector-decomposition::trigonometry-mastery-workshop-multi-step-applied-problems",
    "title": "Trigonometry Mastery Workshop: Multi-Step Applied Problems",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Trigonometry And Vector Decomposition",
    "whyItMatters": "This lesson matters because Trigonometry Mastery Workshop: Multi-Step Applied Problems sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Trigonometry Mastery Workshop: Multi-Step Applied Problems",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Trigonometry Mastery Workshop: Multi-Step Applied Problems, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Trigonometry Mastery Workshop: Multi-Step Applied Problems",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Trigonometry Mastery Workshop: Multi-Step Applied Problems",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Trigonometry Mastery Workshop: Multi-Step Applied Problems problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Trigonometry Mastery Workshop: Multi-Step Applied Problems teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Trigonometry Mastery Workshop: Multi-Step Applied Problems"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Trigonometry Mastery Workshop: Multi-Step Applied Problems"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Trigonometry Mastery Workshop: Multi-Step Applied Problems"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-20-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-20-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-20-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ],
    "summativeReflection": baseballIntegrativeSummative({
      id: "physics-trig-mastery-memo",
      title: "Summative: Multi-step trig physics worksheet",
      intro:
        "Demonstrate a full vector/trig pipeline for one baseball mechanic or trajectory subproblem. Self-check with the rubric for units and staff-ready phrasing.",
      taskPrompt:
        "Pick one applied scenario (spray-direction component, launch-parameter reconstruction, or spin-axis projection). Show decomposition steps, two independent checks (for example quadrant sanity and alternate formula), and a single dugout-ready recommendation with explicit assumptions.",
    }),
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newton-s-laws-revisited-for-ball-bat-and-ball-air-systems": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::newton-s-laws-revisited-for-ball-bat-and-ball-air-systems",
    "title": "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Newton's Laws Revisited For Ball-Bat And Ball-Air Systems sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Newton's Laws Revisited For Ball-Bat And Ball-Air Systems",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Newton's Laws Revisited For Ball-Bat And Ball-Air Systems, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Newton's Laws Revisited For Ball-Bat And Ball-Air Systems",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Newton's Laws Revisited For Ball-Bat And Ball-Air Systems",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Newton's Laws Revisited For Ball-Bat And Ball-Air Systems problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Newton's Laws Revisited For Ball-Bat And Ball-Air Systems"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-21-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-21-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-21-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::kinematics-in-one-and-two-dimensions": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::kinematics-in-one-and-two-dimensions",
    "title": "Kinematics In One And Two Dimensions",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Kinematics In One And Two Dimensions sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Kinematics In One And Two Dimensions",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Kinematics In One And Two Dimensions, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Kinematics In One And Two Dimensions",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Kinematics In One And Two Dimensions",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Kinematics In One And Two Dimensions problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Kinematics In One And Two Dimensions teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Kinematics In One And Two Dimensions"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Kinematics In One And Two Dimensions"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Kinematics In One And Two Dimensions"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-22-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-22-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-22-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::free-body-diagrams-for-batted-ball-motion": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::free-body-diagrams-for-batted-ball-motion",
    "title": "Free-Body Diagrams For Batted Ball Motion",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Free-Body Diagrams For Batted Ball Motion sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Free-Body Diagrams For Batted Ball Motion",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Free-Body Diagrams For Batted Ball Motion, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Free-Body Diagrams For Batted Ball Motion",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Free-Body Diagrams For Batted Ball Motion",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Free-Body Diagrams For Batted Ball Motion problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Free-Body Diagrams For Batted Ball Motion teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Free-Body Diagrams For Batted Ball Motion"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Free-Body Diagrams For Batted Ball Motion"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Free-Body Diagrams For Batted Ball Motion"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-23-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-23-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-23-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::initial-conditions-exit-velocity-launch-angle-spin-inputs": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::initial-conditions-exit-velocity-launch-angle-spin-inputs",
    "title": "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Initial Conditions: Exit Velocity, Launch Angle, Spin Inputs"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-24-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-24-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-24-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::no-drag-projectile-derivation-from-first-principles": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::no-drag-projectile-derivation-from-first-principles",
    "title": "No-Drag Projectile Derivation From First Principles",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because No-Drag Projectile Derivation From First Principles sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: No-Drag Projectile Derivation From First Principles",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In No-Drag Projectile Derivation From First Principles, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For No-Drag Projectile Derivation From First Principles",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In No-Drag Projectile Derivation From First Principles",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same No-Drag Projectile Derivation From First Principles problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "No-Drag Projectile Derivation From First Principles teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "No-Drag Projectile Derivation From First Principles"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "No-Drag Projectile Derivation From First Principles"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "No-Drag Projectile Derivation From First Principles"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-25-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-25-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-25-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::time-of-flight-apex-and-range-relationships": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::time-of-flight-apex-and-range-relationships",
    "title": "Time Of Flight, Apex, And Range Relationships",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Time Of Flight, Apex, And Range Relationships sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Time Of Flight, Apex, And Range Relationships",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Time Of Flight, Apex, And Range Relationships, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Time Of Flight, Apex, And Range Relationships",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Time Of Flight, Apex, And Range Relationships",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Time Of Flight, Apex, And Range Relationships problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Time Of Flight, Apex, And Range Relationships teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Time Of Flight, Apex, And Range Relationships"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Time Of Flight, Apex, And Range Relationships"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Time Of Flight, Apex, And Range Relationships"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-26-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-26-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-26-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::energy-methods-vs-force-methods-in-ball-flight": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::energy-methods-vs-force-methods-in-ball-flight",
    "title": "Energy Methods Vs Force Methods In Ball Flight",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Energy Methods Vs Force Methods In Ball Flight sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Energy Methods Vs Force Methods In Ball Flight",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Energy Methods Vs Force Methods In Ball Flight, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Energy Methods Vs Force Methods In Ball Flight",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Energy Methods Vs Force Methods In Ball Flight",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Energy Methods Vs Force Methods In Ball Flight problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Energy Methods Vs Force Methods In Ball Flight teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Energy Methods Vs Force Methods In Ball Flight"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Energy Methods Vs Force Methods In Ball Flight"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Energy Methods Vs Force Methods In Ball Flight"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-27-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-27-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-27-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::momentum-transfer-in-contact-events": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::momentum-transfer-in-contact-events",
    "title": "Momentum Transfer In Contact Events",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Momentum Transfer In Contact Events sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Momentum Transfer In Contact Events",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Momentum Transfer In Contact Events, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Momentum Transfer In Contact Events",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Momentum Transfer In Contact Events",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Momentum Transfer In Contact Events problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Momentum Transfer In Contact Events teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Momentum Transfer In Contact Events"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Momentum Transfer In Contact Events"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Momentum Transfer In Contact Events"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-28-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-28-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-28-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::introducing-drag-into-newton-s-second-law": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::introducing-drag-into-newton-s-second-law",
    "title": "Introducing Drag Into Newton's Second Law",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Introducing Drag Into Newton's Second Law sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Introducing Drag Into Newton's Second Law",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Introducing Drag Into Newton's Second Law, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Introducing Drag Into Newton's Second Law",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Introducing Drag Into Newton's Second Law",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Introducing Drag Into Newton's Second Law problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Introducing Drag Into Newton's Second Law teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Introducing Drag Into Newton's Second Law"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Introducing Drag Into Newton's Second Law"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Introducing Drag Into Newton's Second Law"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-29-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-29-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-29-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  },
  "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::solving-drag-inclusive-odes-numerically": {
    "key": "baseball-physics-foundations::newtonian-mechanics-and-projectile-motion::solving-drag-inclusive-odes-numerically",
    "title": "Solving Drag-Inclusive ODEs Numerically",
    "trackTitle": "Baseball Physics Foundations",
    "unitTitle": "Newtonian Mechanics And Projectile Motion",
    "whyItMatters": "This lesson matters because Solving Drag-Inclusive ODEs Numerically sits at the junction where baseball physics has to become a decision a coach can actually use in batting practice, scouting prep, and postgame review. A model can produce polished charts, but if the assumptions behind angle, force, time, and direction are not interpreted in plain baseball language, players do not trust the recommendation and staff cannot align on adjustments. In this topic, we force a complete reasoning chain: define quantities, choose equations that fit the physical situation, compute with units that stay consistent, and test whether the result changes what a hitter, pitcher, or defender should do on the field. That habit prevents pretty-but-fragile analysis, because every output must survive boundary checks, uncertainty discussion, and communication under game-speed pressure. When students complete this lesson, they should be able to explain not only what value they calculated, but why that value is decision-grade evidence for baseball operations rather than a classroom-only answer. Coaching lens: a pitcher on the mound faces a batter at the plate in an inning; statcast-style readings tie velocity and spin on a fastball to command while the catcher frames outcomes near home plate.",
    "lessonOpener": "Imagine the staff reviewing a sequence where the same exit velocity produced different outcomes in two parks. One analyst blames launch angle, another blames spin axis, and a third points to environmental drag. Without a disciplined physics frame, the room becomes a debate of opinions instead of a structured diagnosis. This lesson opens by turning the baseball scene into measurable objects, mapping those objects to a physically honest model, and translating the model output into a recommendation that a coach can test in the next cage round. The emphasis is not on memorizing formulas in isolation. The emphasis is on using physics to produce repeatable, accountable baseball decisions across hitters, pitchers, and defenders.",
    "narrativeFlow": [
      "Frame the baseball decision and identify physically relevant quantities.",
      "Construct the model with explicit assumptions and unit discipline.",
      "Verify output robustness using boundary, sensitivity, and cross-check methods.",
      "Translate results into a coach-ready recommendation with uncertainty context."
    ],
    "objectives": [
      "Model the lesson scenario with clear variables, assumptions, and units.",
      "Compute a physically coherent result and verify it with at least two checks.",
      "Communicate a baseball-relevant recommendation grounded in model evidence."
    ],
    "prerequisites": [
      "Comfort with algebraic manipulation and signed quantities.",
      "Basic graph or coordinate interpretation in sports settings.",
      "Willingness to justify assumptions before computing."
    ],
    "conceptChunks": [
      {
        "heading": "Scouting Lens: Solving Drag-Inclusive ODEs Numerically",
        "explainLikeCoach": "Start by naming what the baseball problem actually is before touching algebra. In Solving Drag-Inclusive ODEs Numerically, that means identifying which quantities are observed directly, which are inferred, and which are assumptions we accept only within a narrow context. If a coach asks whether a swing change should stay in place, your job is not to provide the fastest computation. Your job is to provide a physically coherent explanation that links the number to bat path, contact quality, and playable outcomes. This first chunk is where we set that expectation and keep the lesson tied to baseball decisions. [[INLINE_DIAGRAM: placeholder-pending-human-review]]",
        "formalNote": "Define the state variables, coordinate convention, and sign orientation before deriving any equation. Document units for each variable and specify whether the model is instantaneous, averaged over a window, or piecewise in time. A result produced without explicit assumptions cannot be audited, compared, or trusted across games.",
        "equation": "state(t) = observations(t) + modeled_effects(t)"
      },
      {
        "heading": "Modeling Workflow For Solving Drag-Inclusive ODEs Numerically",
        "explainLikeCoach": "Once the setup is explicit, build a workflow that starts with the coaching question and works backward to the minimum physics needed. Coaches care about actionable levers, not symbolic elegance. So we translate a baseball question into measurable quantities, choose the relation that preserves the mechanism, and keep track of sensitivity so we know which input errors can flip the recommendation. This keeps analysts from overfitting noise and helps players hear a clean message.",
        "formalNote": "Represent the target output as a function of primitive variables, then assess local sensitivity using partial-derivative intuition or finite-difference checks. If small perturbations in one variable dominate the output, report that dependency explicitly as a confidence limiter in staff communication.",
        "equation": "output = f(initial_conditions, forces, geometry, time)"
      },
      {
        "heading": "Verification Habits In Solving Drag-Inclusive ODEs Numerically",
        "explainLikeCoach": "Verification is where physics becomes trustworthy. Run dimensional checks, test boundary cases that exaggerate common mistakes, and compare at least one alternate method when possible. If two methods disagree, do not round your way out of trouble. Trace the mismatch to assumptions, data quality, or equation selection, then record that diagnosis so future reports improve instead of repeating the same miss.",
        "formalNote": "Use dimensional analysis, limit-case tests, and independent recomputation to establish model validity in the operating regime. Attach explicit tolerance bounds and error sources so downstream users can evaluate whether the result is robust enough for tactical decisions.",
        "equation": "validated = (units_ok) AND (boundary_ok) AND (crosscheck_ok)"
      },
      {
        "heading": "From Physics Result To Dugout Action",
        "explainLikeCoach": "A complete lesson ends with communication quality. Turn the computed result into a one-sentence recommendation, include where confidence is strong, and name what additional data could change the call. That discipline protects trust between analysts and coaches because the logic is transparent even when uncertainty remains. In baseball settings, the best models are the ones that can survive quick questioning in the dugout and still guide the next rep.",
        "formalNote": "Report numerical outputs with units, validity range, and uncertainty qualifiers. Separate empirical estimate from policy recommendation so staff can debate strategy while preserving mathematical traceability.",
        "equation": "recommendation = metric + context + uncertainty"
      }
    ],
    "quickChecks": [
      {
        "prompt": "What should be declared before selecting a physics equation for baseball analysis?",
        "answer": "Variables, units, coordinate/sign conventions, and assumptions.",
        "explanation": "Transparent setup prevents silent model drift between analysts."
      },
      {
        "prompt": "Why do we run boundary checks before acting on a result?",
        "answer": "Boundary checks expose assumption failures hidden in average cases.",
        "explanation": "A recommendation is only useful if it remains plausible at limits."
      },
      {
        "prompt": "How should a model output be delivered to the coaching staff?",
        "answer": "As an action statement with units, confidence, and uncertainty limits.",
        "explanation": "Decision quality depends on interpretation, not just the number."
      }
    ],
    "workedExamples": [
      {
        "title": "Pre-Game Parameter Alignment",
        "scenario": "Staff members define the same Solving Drag-Inclusive ODEs Numerically problem with different assumptions and reach conflicting recommendations.",
        "walkthrough": [
          "List every variable, unit, and sign convention used by each analyst.",
          "Normalize all definitions to one shared coordinate and timing frame.",
          "Recompute the target metric and compare sensitivity to each input.",
          "Write a final recommendation with a confidence qualifier for coaches."
        ],
        "takeaway": "Most disagreements collapse once assumptions and units are standardized."
      },
      {
        "title": "Game-Speed Decision Translation",
        "scenario": "A coach asks whether to keep the current swing or positioning adjustment after mixed in-game outcomes.",
        "walkthrough": [
          "Map the coaching question to one measurable physics objective.",
          "Select the equation structure that matches the baseball mechanism.",
          "Compute with unit checks and a quick sanity estimate.",
          "Translate the result into a specific adjustment recommendation."
        ],
        "takeaway": "Physics is useful when tied directly to an actionable baseball lever."
      },
      {
        "title": "Postgame Reliability Audit",
        "scenario": "The analytics group prepares a postgame packet that must remain defensible under cross-department review.",
        "walkthrough": [
          "Run dimensional and limit-case checks on all reported outputs.",
          "Cross-check one key value with an alternate derivation.",
          "Tag each conclusion with uncertainty and data-quality caveats.",
          "Archive assumptions so future games are comparable."
        ],
        "takeaway": "Audit-ready reporting keeps physics recommendations trusted over time."
      }
    ],
    "practiceSets": [
      {
        "level": "warmup",
        "prompts": [
          {
            "prompt": "Name two setup elements that must be explicit before modeling.",
            "answer": "Coordinate/sign convention and unit definitions."
          },
          {
            "prompt": "What does a quick dimensional check protect against?",
            "answer": "It catches equations that are mathematically manipulated but physically inconsistent."
          }
        ]
      },
      {
        "level": "core",
        "prompts": [
          {
            "prompt": "Describe a four-step baseball physics workflow from question to recommendation.",
            "answer": "Define assumptions, map the question to variables, compute with verification, communicate action with uncertainty."
          },
          {
            "prompt": "Why should sensitivity be reported to coaches?",
            "answer": "It shows which measured inputs can materially change the final recommendation."
          },
        
          {
            "prompt": "In a baseball flight model review, what should you report before recommending a launch-angle tweak?",
            "answer": "Report the sensitive metric, assumptions, and the specific on-field adjustment to test next."
          }
        ]
      },
      {
        "level": "stretch",
        "prompts": [
          {
            "prompt": "Write a one-paragraph recommendation from a model result including uncertainty language.",
            "answer": "Answers vary; must include units, confidence limits, and a concrete baseball action."
          },
          {
            "prompt": "Design one independent cross-check for your main result.",
            "answer": "Answers vary; must include an alternate method and tolerance threshold."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing equations before defining assumptions and units.",
      "Treating one plausible output as final without boundary or sensitivity checks.",
      "Reporting technical values without translating them into baseball action.",
      "Ignoring uncertainty even when inputs are estimated or noisy."
    ],
    "lessonSummary": "Solving Drag-Inclusive ODEs Numerically teaches students to move from physically coherent modeling to clear baseball decisions by combining explicit assumptions, robust verification, and actionable communication.",
    "synthesisPrompt": "Use this lesson's framework to analyze one baseball situation, show your checks, and defend one concrete recommendation.",
    "nextLessonBridge": "The next lesson extends this workflow to a new physical mechanism while preserving the same standards for assumptions, verification, and coaching translation.",
    "professorNotes": "Require students to show setup assumptions, unit consistency, and at least one independent verification before accepting any final conclusion. Grade communication quality equally with arithmetic so each response includes an actionable baseball recommendation and clearly stated uncertainty limits.",
    "keyTerms": [
      {
        "term": "Model assumption",
        "definition": "A declared condition that bounds when a physics result should be trusted.",
        "lessonTitle": "Solving Drag-Inclusive ODEs Numerically"
      },
      {
        "term": "Dimensional check",
        "definition": "A test that confirms equations and outputs carry consistent physical units.",
        "lessonTitle": "Solving Drag-Inclusive ODEs Numerically"
      },
      {
        "term": "Decision-grade evidence",
        "definition": "An output that includes context and uncertainty sufficient for coaching action.",
        "lessonTitle": "Solving Drag-Inclusive ODEs Numerically"
      }
    ],
    "assessmentItems": [
      {
        "id": "physics-a-30-mcq-1",
        "type": "mcq",
        "prompt": "Which response best reflects reliable baseball physics communication?",
        "options": [
          "Report only the final number and let coaches infer assumptions",
          "State assumptions, units, checks, and a concrete action recommendation",
          "Choose the longest derivation regardless of tactical relevance",
          "Average conflicting outputs without investigating model mismatch"
        ],
        "correctAnswer": "State assumptions, units, checks, and a concrete action recommendation",
        "explanation": "Reliable communication links calculation quality to baseball decision quality."
      },
      {
        "id": "physics-a-30-exact-1",
        "type": "exact",
        "prompt": "Type the two-word phrase for checking unit consistency.",
        "correctAnswer": "dimensional analysis",
        "acceptedAnswers": [
          "dimensional analysis",
          "Dimensional analysis",
          "Dimensional Analysis"
        ],
        "explanation": "Dimensional analysis verifies physical consistency before interpretation."
      },
      {
        "id": "physics-a-30-exact-2",
        "type": "exact",
        "prompt": "Type the one-word noun for explicitly stated model conditions.",
        "correctAnswer": "assumptions",
        "acceptedAnswers": [
          "assumptions",
          "Assumptions"
        ],
        "explanation": "Assumptions define the validity range of any model output."
      }
    ]
  }
};
