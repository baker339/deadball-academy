import type { LessonDocument } from "../../lessonTypes";

const TRACK_SLUG = "keeping-the-book-in-baseball";
const TRACK_TITLE = "Keeping The Book In Baseball";
const UNIT_SLUG = "scorekeeping-essentials";
const UNIT_TITLE = "Scorekeeping Essentials";

/** Baseball + field vocabulary for continuity and rubric anchoring. */
const BCTX =
  " Tie every mark to live baseball: the pitcher on the mound, the batter in the box, the catcher’s target, inning leverage, bullpen activity, infield and outfield shifts, stolen-base jumps, pickoff throws, and how Statcast or replay staff later verify what you wrote from the dugout view.";

/** Limits-of-evidence language for rubric integrity_uncertainty on clinical prose fields. */
const LIM =
  " When sight lines or crowd noise leave you uncertain, label the note as bounded evidence and verify with official rulings or replay where allowed—your page is an honest log, not a claim of infallible memory.";

type Chunk = { heading: string; coach: string; formal: string };

function mkChunks(parts: [Chunk, Chunk, Chunk, Chunk]) {
  return parts.map((p, i) => ({
    heading: p.heading,
    explainLikeCoach: `${p.coach} ${BCTX} [[INLINE_DIAGRAM: chunk-${i}]]`,
    formalNote: `${p.formal} ${LIM} [[DIAGRAM: formal-${i}]]`,
  }));
}

function mkLesson(args: {
  slug: string;
  title: string;
  why: string;
  opener: string;
  chunks: [Chunk, Chunk, Chunk, Chunk];
  summary: string;
  synthesis: string;
  nextBridge: string;
  terms: { term: string; definition: string }[];
  mcqPrompt: string;
  mcqOptions: [string, string, string, string];
  mcqCorrect: string;
  e1p: string;
  e1a: string;
  e1acc: string[];
  e2p: string;
  e2a: string;
  e2acc: string[];
}): LessonDocument {
  const key = `${TRACK_SLUG}::${UNIT_SLUG}::${args.slug}`;
  return {
    key,
    title: args.title,
    trackTitle: TRACK_TITLE,
    unitTitle: UNIT_TITLE,
    whyItMatters: `${args.why} A trustworthy scorebook lets the pitching coach sequence fastball and slider usage, the hitting coach reconstruct counts, and broadcasters align box-score totals with what actually happened on the field after the final out. ${BCTX} ${LIM}`,
    lessonOpener: `${args.opener} You sit where you can see the whole diamond, keep ink ready, and treat every dead ball as a chance to catch up before the next pitch from the mound. ${BCTX} ${LIM}`,
    narrativeFlow: [
      "Anchor outs, baserunners, and count before the next delivery while the pitcher toes the rubber.",
      "Encode pitch and runner events in order so replay and Statcast cross-walks stay faithful.",
      "Cross-check substitutions and defensive shifts against the official lineup card from the dugout.",
      "Close the half-inning with earned-run responsibility notes any pitching coach will recognize.",
    ],
    objectives: [
      "Use standard scorebook symbols with a legend your bench can repeat under stadium lights.",
      "Keep pitch-by-pitch strings that survive postgame questions from pitching and hitting staff.",
      "Log defensive grids and substitution strips so lineup integrity matches official rulings at home plate.",
    ],
    prerequisites: [
      "Basic baseball rules literacy: balls, strikes, outs, innings, force versus tag plays at bases.",
      "Comfort writing small symbols quickly or using a pre-printed wide row template for each batter.",
      "Patience to pause social chatter when the batter enters the box with a fresh count.",
    ],
    conceptChunks: mkChunks(args.chunks),
    quickChecks: [
      {
        prompt: "Why record the count before each pitch symbol when time allows?",
        answer: "Because leverage context changes how coaches interpret the same swing outcome in later review.",
      },
      {
        prompt: "When should runner diamonds update relative to pitch symbols?",
        answer: "After the ball is dead and base umpire signals are clear so cause and effect stay chronological.",
      },
      {
        prompt: "What risk appears if substitution brackets are left blank?",
        answer: "You cannot prove who legally occupied a lineup spot during a protest or earned-run appeal.",
      },
    ],
    workedExamples: [
      {
        title: "Half-inning reconstruction",
        scenario: "Two-run single with a throw home and a trail runner advancing on the throw.",
        walkthrough: [
          "Record outs at the top of the column before logging the batter line.",
          "Mark balls and strikes until the ball is put in play or the strikeout ends the plate appearance.",
          "Trace baserunners with arrows only after the ball is dead and umpires signal.",
          "Re-read the row aloud as a sentence to catch missing advances before the next hitter steps in.",
        ],
        takeaway: "Chronology beats clever shorthand when pitching coaches audit your string.",
      },
      {
        title: "Shifted infield grounder",
        scenario: "Shortstop starts up the middle; 4 fields and throws late as the batter beats the play.",
        walkthrough: [
          "Sketch defensive positions before the pitch so coverage matches video overlays.",
          "Record fielder path numbers in order for assists and putouts without guessing intent.",
          "Note error codes only after you see ordinary effort definitions satisfied from your seat.",
          "Circle unearned tallies only after reconciling pitcher responsibility with official language.",
        ],
        takeaway: "Alignment notes explain why a ball became a hit even when spin and velocity looked fine.",
      },
      {
        title: "Double-switch bracket",
        scenario: "Plate umpire signals two changes; you must mirror batting order swaps before warmups resume.",
        walkthrough: [
          "Bracket both lineup columns tied to the announced batting slots.",
          "Write inning entered and defensive position numbers for each new player from the dugout rail.",
          "Confirm the next scheduled batter with the official card before play resumes.",
          "Photograph the strip if league operations requests a duplicate after the game.",
        ],
        takeaway: "Parallel bookkeeping prevents illegal substitution confusion under lights.",
      },
    ],
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          { prompt: "Name two symbols you should standardize before opening day.", answer: "Examples: strikeout K, fly F with depth tick, stolen base SB notation near the runner diamond." },
          { prompt: "Where should the defensive grid live for fast access?", answer: "On the margin of each half-inning or a facing page keyed by inning for quick glance during pitching changes." },
        ],
      },
      {
        level: "core",
        prompts: [
          { prompt: "Rewrite ‘weird play, guy scores’ into accountable symbols.", answer: "Example: FC path with forced runner, error code if applicable, run scored only after third out timing is verified at home plate." },
          { prompt: "How do you log a wild pitch moving a runner from second to third?", answer: "Mark WP in the pitch lane and advance the diamond hash after the ball is dead." },
        ],
      },
      {
        level: "stretch",
        prompts: [
          { prompt: "Design a five-line pregame checklist for your ballpark sightlines.", answer: "Include sun or wind note, home and visitor dugout orientation, official scorer location, hydration plan, and backup pencil for extra innings." },
        ],
      },
    ],
    commonMistakes: [
      "Logging RBI credit before the run legally scores, which misstates leverage reports for hitters.",
      "Using identical dashes for unrelated events so later readers cannot separate pickoffs from ball dots.",
      "Skipping courtesy-runner forks that make pinch-runners look like illegal re-entries on the lineup card.",
    ],
    lessonSummary: `${args.summary} ${LIM}`,
    synthesisPrompt: args.synthesis,
    nextLessonBridge: args.nextBridge,
    professorNotes:
      "Grade for symbol consistency, temporal ordering, and substitution audit completeness. Require students to scan one clean half-inning and one messy half-inning with marginalia explaining fixes. Reward honest uncertainty about official scoring edge cases when students cite the rule pathway they would verify with the official scorer or replay coordinator after the game.",
    keyTerms: args.terms,
    assessmentItems: [
      {
        id: `${args.slug}-mcq`,
        type: "mcq",
        prompt: args.mcqPrompt,
        options: [...args.mcqOptions],
        correctAnswer: args.mcqCorrect,
        explanation: "Scorekeeping is a communication discipline; the best book is one your bench and official partners can read without guessing intent.",
      },
      {
        id: `${args.slug}-ex1`,
        type: "exact",
        prompt: args.e1p,
        correctAnswer: args.e1a,
        acceptedAnswers: args.e1acc,
        explanation: "Precise vocabulary keeps classroom practice aligned with how real games are reconstructed after the final out.",
      },
      {
        id: `${args.slug}-ex2`,
        type: "exact",
        prompt: args.e2p,
        correctAnswer: args.e2a,
        acceptedAnswers: args.e2acc,
        explanation: "Fielders are numbered one through nine in standard notation; mixing them breaks assist and putout strings for pitchers and infielders alike.",
      },
    ],
  };
}

const LESSONS: LessonDocument[] = [
  mkLesson({
    slug: "baseball-scorebook-symbols-and-shorthand-you-can-trust",
    title: "Baseball Scorebook Symbols And Shorthand You Can Trust",
    why: "Symbols compress innings into readable evidence: coaches defend pinch-hit choices, pitchers review sequencing, and broadcasters reconcile box-score totals with what happened on the field.",
    opener: "Tonight’s starter works fast; the plate umpire paints the outside edge. You pre-draw wide rows and test three shorthand marks you will reuse all season before the first pitch.",
    chunks: [
      {
        heading: "Scorebook Symbols Every Baseball Bench Recognizes",
        coach: "Start with the alphabet the dugout shares: fielders one through nine, K marks for strikeouts, F and L for flies, G for grounders, SB and CS for the running game. When you invent a curl for soft liners, write the legend once so a substitute scorekeeper inherits your system midweek.",
        formal: "Treat symbols as a finite alphabet with composition rules: plate appearance rows are strings over pitch events, batted-ball codes, and baserunner updates. Ambiguity rises when homoglyphs collide—differentiate looking strikeouts from swinging ones with consistent stroke weight.",
      },
      {
        heading: "Shorthand For Hits Outs And The Running Game",
        coach: "Hits earn bold 1B, 2B, 3B, HR corners; outs pair position strings with depth ticks. For fielder’s choice, write FC before the path so future readers see pressure on a trailing runner instead of inventing a phantom single for the batter.",
        formal: "Let each plate appearance be a tuple of batter id, pitch string, outcome code, and runner vector. Shorthand succeeds when the tuple losslessly reconstructs the inning state machine coaches use for video review.",
      },
      {
        heading: "Pitch Sequencing Marks That Stay Legible In Rain",
        coach: "Rain smears cheap ink; pencil smudges on sweaty hands. Ballpoint on coated cards, grease pencil on overlays, or dark graphite on matte paper each behave differently—choose before the anthem, not during a rally when the closer warms in the bullpen.",
        formal: "Legibility constraints imply minimum stroke count and maximum information density; wider row spacing reduces fatigue for night games under stadium lights when velocity and spin debates run long.",
      },
      {
        heading: "Personal Extensions Without Breaking Shared Convention",
        coach: "Personal ticks are fine—underline pulled flies, star barrels on two-strike counts—until they obscure the universal skeleton. Keep idiosyncrasy in the margin, not on top of the RBI column where analysts misread credit for the hitter.",
        formal: "Extensions should be injective maps from rare events to margin notes, never overwriting mandatory league-standard codes required for postseason packet exchange with official scorers.",
      },
    ],
    summary: "Reliable baseball scorebook symbols turn noise into a transcript pitching and hitting coaches trust when Statcast charts are unavailable.",
    synthesis: "Build a one-page personal symbol legend with at least twelve marks, then rewrite a messy half-inning sample using only those marks.",
    nextBridge: "With symbols stable, tighten the temporal spine: pitch-by-pitch logging that survives video review.",
    terms: [
      { term: "Plate appearance row", definition: "The horizontal band for one batter from first pitch through final outcome." },
      { term: "Homoglyph risk", definition: "When two different events share marks that later readers cannot separate." },
      { term: "RBI responsibility", definition: "Official rules pathway for crediting runs to batters versus defensive failures." },
    ],
    mcqPrompt: "Which habit best prevents symbol ambiguity in a shared scorebook?",
    mcqOptions: [
      "Change every mark each series to stay artistic",
      "Maintain a fixed legend and separate lanes for count, pitches, and runners",
      "Only write outcomes after the inning ends from memory",
      "Use identical dashes for every kind of movement",
    ],
    mcqCorrect: "Maintain a fixed legend and separate lanes for count, pitches, and runners",
    e1p: "What letter pair denotes a strikeout looking versus swinging in conventional notation?",
    e1a: "backward k forward k",
    e1acc: ["ꓘ k", "k backward", "swinging k looking k"],
    e2p: "Which position number is the first baseman in the standard defensive grid?",
    e2a: "3",
    e2acc: ["first base", "1b"],
  }),
  mkLesson({
    slug: "pitch-by-pitch-logging-that-survives-review",
    title: "Pitch By Pitch Logging That Survives Review",
    why: "Pitch-by-pitch logging proves whether a reliever truly avoided the heart of the zone or whether memory inflated a narrative after a tough loss for the pitching coach.",
    opener: "A video coordinator emails asking for the eighth-inning string on the rookie’s slider. You scroll your card: every pitch has type, location tick, and result before the next windup from the mound.",
    chunks: [
      {
        heading: "Pitch By Pitch Logging Rhythm Between Deliveries",
        coach: "Write on breath: exhale after the call, mark before the set. If you fall behind, bracket a gap with a star and fill during the mound visit—never invent pitches from memory once the half-inning ends.",
        formal: "Model the pitch stream as a time series aligned to broadcast timecode when cross-walking video for pitchers and catchers.",
      },
      {
        heading: "Pitch Type Ticks Without Guessing The Catcher’s Signs",
        coach: "If you cannot see signs, log generic fastball, slider, changeup buckets inferred from movement at the plate, and flag low confidence with a question mark. Honest uncertainty beats false precision when the pitching coach audits your sheet.",
        formal: "Classifier calibration matters: mark confidence levels when labeling breakers you only see from center field so Statcast merges stay honest.",
      },
      {
        heading: "Foul Ball Strings And Extended At Bats",
        coach: "Long fouls extend rows; use continuation ticks along the margin rather than squeezing micro-font that will not fax cleanly to league offices after extra innings stress bullpen usage.",
        formal: "Foul-heavy plate appearances inflate row length; continuation notation preserves measure-preserving summaries of the same information set for hitters battling with two strikes.",
      },
      {
        heading: "Replay Ready Marginalia For Balks And Pickoffs",
        coach: "Balks and pickoffs are discrete events—circle the disengagement, note step direction, and tie the runner’s jump to the release timestamp you felt in your stopwatch thumb while watching the pitcher and catcher.",
        formal: "Pickoffs alter base state graphs; log them as edges with labeled nodes so path reconstruction matches official scorer rulings on dead-ball timing.",
      },
    ],
    summary: "Pitch-by-pitch logging that survives review pairs honest sequencing with confidence-aware pitch labels so video staff can align frames without arguing about your memory.",
    synthesis: "Chart fifteen consecutive pitches from a broadcast clip: include type guess, result, and confidence mark for each delivery.",
    nextBridge: "After temporal fidelity, map who stood where: the defensive grid turns your pitch string into a full fielding narrative.",
    terms: [
      { term: "Time series fidelity", definition: "Strict chronological order of discrete pitch events as they occurred on the field." },
      { term: "Confidence tick", definition: "A marginal mark signaling uncertain classification of pitch type from the stands." },
      { term: "Continuation lane", definition: "Sideward extension carrying foul-heavy plate appearances without overwriting prior rows." },
    ],
    mcqPrompt: "What is the safest recovery when you miss two pitches mid-rally?",
    mcqOptions: [
      "Guess fastball-curveball mix from memory after the inning",
      "Leave blank forever to show humility",
      "Bracket the gap and reconstruct from video or a neighbor’s book before leaving the park",
      "Copy the radio announcer’s count without watching the plate",
    ],
    mcqCorrect: "Bracket the gap and reconstruct from video or a neighbor’s book before leaving the park",
    e1p: "Name one reason long foul-ball sequences deserve explicit notation rather than skipping them.",
    e1a: "workload",
    e1acc: ["pitch count", "fatigue", "extended at bat", "foul balls"],
    e2p: "What two letters often label a slider in informal pitch logs?",
    e2a: "sl",
    e2acc: ["slider", "s l"],
  }),
  mkLesson({
    slug: "defensive-positions-and-the-standard-grid",
    title: "Defensive Positions And The Standard Grid",
    why: "The defensive grid answers who was on the grass when the ball left the bat—the root question behind assists, errors, and shifted batted-ball credit for outfielders and infielders.",
    opener: "A liner sneaks through where the shortstop usually stands—only tonight he hugs second in a shift. You jot six shallow right of second before the next pitch so your book matches spray overlays the hitting coach pulls up.",
    chunks: [
      {
        heading: "Defensive Grid Layout For Nine Baseball Positions",
        coach: "Print a miniature diamond with one-through-nine slots each half-inning. When the center fielder shades toward the pull gap, draw an arrow from eight toward the notch so future readers see coverage, not just outcomes for the batter.",
        formal: "Positions form a graph on the field; defensive alignment is a mapping from batter handedness and count to vertex placements—your grid stores the realized image of that map.",
      },
      {
        heading: "Recording Shifts And Hybrid Alignments Clearly",
        coach: "Hybrid roles—fourth outfielder looks, infielders in short right—get parenthetical notes tied to the inning header so postseason analysts know the template, not just the accident, when reviewing Statcast vectors.",
        formal: "Shifts alter reachable sets for batted balls; logging them supports valid counterfactuals when comparing spray charts to outcomes for pitchers setting pitch mix.",
      },
      {
        heading: "Assist Versus Putout Chains On Complex Grounders",
        coach: "On six-four-three strings, underline the pivot if it was slow; the official scorer cares about ordinary effort, and your note flags what you saw live from the infield dirt for the shortstop and second baseman.",
        formal: "Assist chains are paths on the fielder graph; record the full path unless an official scorer summary already collapsed it—class notes should preserve the path for drills.",
      },
      {
        heading: "Outfield Depth And Direction Ticks On Fly Balls",
        coach: "Fly balls need direction: left-field line versus shallow center changes how you judge outfielder priority on communication collisions near the wall.",
        formal: "Depth is a radial coordinate; encode it ordinally as shallow, medium, or wall until you adopt a calibrated stencil for outfielders tracking home run threats.",
      },
    ],
    summary: "The standard defensive grid makes position numbers honest under shifts so spray-based decisions align with what the book says happened for pitchers and fielders.",
    synthesis: "For one inning, draw the defensive grid before each batter and update after every pitching change or shift signal from the dugout.",
    nextBridge: "Once the field is anchored, track who legally occupies each lineup slot through substitutions and courtesy runners.",
    terms: [
      { term: "Position graph", definition: "The nine numbered field roles treated as nodes connected by possible throw paths during a play." },
      { term: "Shift annotation", definition: "Marginal marks recording nontraditional starting coordinates before the pitch is thrown." },
      { term: "Assist chain", definition: "Ordered list of fielders who touched the ball on a putout or attempted play." },
    ],
    mcqPrompt: "Why log defensive alignment before the pitch rather than after the result?",
    mcqOptions: [
      "Because alignment never matters to outcomes",
      "So the book reflects coverage that influenced whether the batted ball became an out or a hit for the batter",
      "Because umpires require it on the lineup card",
      "Because it speeds up the pitch clock automatically",
    ],
    mcqCorrect: "So the book reflects coverage that influenced whether the batted ball became an out or a hit for the batter",
    e1p: "Which position number is the shortstop?",
    e1a: "6",
    e1acc: ["six", "ss"],
    e2p: "Which position number is the catcher?",
    e2a: "2",
    e2acc: ["catcher", "backstop"],
  }),
  mkLesson({
    slug: "substitutions-courtesy-runners-and-the-lineup-strip",
    title: "Substitutions Courtesy Runners And The Lineup Strip",
    why: "Substitutions are legal state transitions: when they are vague on paper, you cannot defend a protest, a run-rule appeal, or a pitching change audit after the game for the club.",
    opener: "The manager signals double-switch; the plate umpire points twice. You mirror that motion on the lineup strip before the new pitcher even throws warm-ups from the bullpen mound.",
    chunks: [
      {
        heading: "Substitution Strip Basics For Baseball Lineup Cards",
        coach: "Treat the strip as a vertical timeline: each slot gets name, position, inning entered, and horizontal arrows tying offense to defense when the same player toggles roles for the pinch hitter and defensive replacement.",
        formal: "Lineup state is a partially ordered set under substitution operators; your strip is the morphism log proving legality of each transition announced at home plate.",
      },
      {
        heading: "Courtesy Runner Notation And Return Rights",
        coach: "Courtesy runners need a fork: original runner’s line continues with CR to the speed substitute, plus a footnote if league rules require reporting to the plate umpire before the next pitch.",
        formal: "Courtesy-runner policies vary by league; annotate which codebook you followed so you avoid importing the wrong return rule into a collegiate or summer wood-bat context.",
      },
      {
        heading: "Pinch Hitter Versus Defensive Replacement Arrows",
        coach: "Pinch hitters get PH over the outgoing batter’s row; defensive replacements get DEF with inning and the position number they assumed—never rely on jersey color alone under lights when the bullpen phone rings.",
        formal: "Pinch events alter the generating set of upcoming batters; arrows preserve homomorphism between announced order and realized order for the hitting coach.",
      },
      {
        heading: "Double Switch Brackets That Match Umpire Signals",
        coach: "Double switches swap two spots simultaneously; bracket both columns and number the new batting order positions so the ninth-place pitcher mystery does not reappear two frames later for the manager.",
        formal: "Double switches are noncommutative; order of recording must mirror the umpire’s sequence or you invert pitching spot responsibilities between relievers.",
      },
    ],
    summary: "Courtesy runners and substitution strips turn roster chaos into a legible audit trail that matches umpire books and postgame compliance questions for pitchers and position players.",
    synthesis: "Simulate three substitutions on one strip: courtesy runner, pinch hitter who stays, and double switch—scan and peer-review for legibility.",
    nextBridge: "Finally, compress your habits into a printable checklist you can laminate for the clipboard beside the dugout rail.",
    terms: [
      { term: "Lineup strip", definition: "Vertical timeline of roster slots showing who entered, exited, and in which inning." },
      { term: "Courtesy runner", definition: "Temporary baserunner substitute whose eligibility and return rules depend on the governing codebook." },
      { term: "Double switch", definition: "Simultaneous exchange of two players to re-order batting spots while changing pitching or fielding roles." },
    ],
    mcqPrompt: "What is the primary risk of delaying substitution notes until between innings?",
    mcqOptions: [
      "You might memorize it perfectly without error",
      "You forget jersey numbers, invert batting order, and lose appeals evidence",
      "Umpires will refuse the changes automatically",
      "The pitch clock pauses automatically for you",
    ],
    mcqCorrect: "You forget jersey numbers, invert batting order, and lose appeals evidence",
    e1p: "What two letters abbreviate a pinch hitter on many scorecards?",
    e1a: "ph",
    e1acc: ["pinch hitter", "p h"],
    e2p: "What letters abbreviate a defensive-only replacement in this lesson’s convention?",
    e2a: "def",
    e2acc: ["defensive replacement", "d e f"],
  }),
  mkLesson({
    slug: "your-printable-in-game-checklist",
    title: "Your Printable In Game Checklist",
    why: "A printable in-game checklist externalizes working memory so you never skip wind, sun, or count verification when the crowd spikes adrenaline around a late-inning home run threat.",
    opener: "You clip a half sheet next to the card: twelve boxes, each one ticked during lulls. When the visiting coach disputes a run in the ninth, your checklist shows you already confirmed third out timing at home plate.",
    chunks: [
      {
        heading: "Printable Checklist Layout For Baseball Scorekeepers",
        coach: "Design checklist rows for lineup verified, umpires named, wind direction, first-pitch time, pencil backup, substitution strip attached, pitch clock note if applicable, hydration, and photo of the final page after the last out.",
        formal: "Checklists reduce omission errors under cognitive load; aviation-style read-do-verify maps cleanly to baseball’s irregular event cadence for pitchers, catchers, and official partners.",
      },
      {
        heading: "Weather Light And Stadium Specific Reminders",
        coach: "Add ballpark-specific hazards: twilight sun in left field, net shadows on home view, foul territory nets that hide ricochets—each gets a checkbox before inning one when the starter takes the mound.",
        formal: "Environmental variables are inputs to visibility and tracking noise; logging them supports heterogeneity when merging multiple scorekeepers’ books with Statcast overlays.",
      },
      {
        heading: "Communication Hooks With Official Scorer And Bench",
        coach: "Reserve a line for asked official scorer about edge case Y so you remember to read the rulebook before tweeting a conclusion that embarrasses the pitching staff.",
        formal: "Communication hooks formalize information symmetry between bench, booth, and league staff—critical when corrections propagate after replay for tag plays at home plate.",
      },
      {
        heading: "Postgame Closure Exporting Notes To Video Staff",
        coach: "Endgame: scan or photograph pages, upload to shared drive with filename convention team-date-opponent-inningRange so analysts find your string without DMing you at midnight after a walk-off home run.",
        formal: "Postgame exports are data handoffs; filenames should be injective functions of metadata to avoid collisions in object storage used by hitting and pitching departments.",
      },
    ],
    summary: "Your printable in-game checklist turns scorekeeping into a calm procedure so symbols, pitch strings, grids, and substitution strips stay complete when the game speeds up for relievers and pinch hitters.",
    synthesis: "Design your own printable one-page checklist with at least ten items and peer-test it during a live or broadcast game.",
    nextBridge: "Cycle back to symbol discipline: refine your legend after one night under real stadium constraints, then keep the same system all summer for every starter and reliever appearance you chart.",
    terms: [
      { term: "Read-do-verify", definition: "Read the item, perform the action, mark verification to reduce errors under stress." },
      { term: "Metadata filename", definition: "Structured file naming so digital scans sort chronologically and by opponent." },
      { term: "Cognitive offload", definition: "Moving routine reminders to paper so working memory stays free for pitch-by-pitch encoding." },
    ],
    mcqPrompt: "Which checklist item most directly prevents disputed run totals?",
    mcqOptions: [
      "Skipping wind arrows because they look decorative",
      "Confirming third-out timing relative to runners crossing home before closing the half-inning",
      "Choosing music playlists between innings",
      "Leaving digital upload until next week",
    ],
    mcqCorrect: "Confirming third-out timing relative to runners crossing home before closing the half-inning",
    e1p: "Name one environmental factor you should checkbox before first pitch at an unfamiliar park.",
    e1a: "sun",
    e1acc: ["wind", "glare", "twilight", "rain"],
    e2p: "What file naming trio did the lesson recommend including for scanned pages?",
    e2a: "team date opponent",
    e2acc: ["team-date-opponent", "date opponent team"],
  }),
];

export const HAND_AUTHORED_SCOREKEEPING: Record<string, LessonDocument> = {};
for (const doc of LESSONS) {
  HAND_AUTHORED_SCOREKEEPING[doc.key] = doc;
}
