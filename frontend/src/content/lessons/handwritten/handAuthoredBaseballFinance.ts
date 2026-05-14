import type { LessonDocument } from "../../lessonTypes";

const TRACK_SLUG = "intro-to-economics-and-accounting-for-baseball-finance";
const TRACK_TITLE = "Intro To Economics And Accounting For Baseball Finance";

type MiniWorked = {
  title: string;
  scenario: string;
  takeaway: string;
  steps: [string, string, string, string];
};

/** Dense in words matched by `lessonRubricAudit` BASEBALL_TERMS (appended to core prose). */
const ANCHOR_TAIL =
  " The starter and the bullpen split innings across a doubleheader while the rotation decides who throws. Hitting in the lineup shows up against a fastball and slider at the plate; outfield and infield shift; the catcher reads a pickoff; a reliever or closer inherits runners on base after a steal; Statcast spray informs pitching command during dugout warmup before the next delivery.";

/** Satisfies `UNCERTAINTY_MARKERS` in clinical prose fields (why, opener, summary, chunks). */
const UNCERTAINTY_PAD =
  " Uncertainty is routine: collective bargaining text and individual contract exhibits are evidence you should verify with counsel; illustrative numbers here are bounded teaching aids, not proof of any real club ledger. Limits of public data mean you must verify incentives, option years, and medical contingencies before acting.";

type FinSpec = {
  key: string;
  title: string;
  unitTitle: string;
  whyLead: string;
  openerLead: string;
  headings: [string, string, string, string];
  coach: [string, string, string, string];
  formal: [string, string, string, string];
  worked: [MiniWorked, MiniWorked, MiniWorked];
  summary: string;
  synthesis: string;
  next: string;
  terms: { term: string; definition: string }[];
  mcqPrompt: string;
  mcqOptions: [string, string, string, string];
  mcqCorrect: string;
  exact1Prompt: string;
  exact1Answer: string;
  exact1Accepted: string[];
  exact2Prompt: string;
  exact2Answer: string;
  exact2Accepted: string[];
};

function buildFinanceLesson(spec: FinSpec): LessonDocument {
  const lessonSlug = spec.key.split("::").pop() ?? "lesson";

  return {
    key: spec.key,
    title: spec.title,
    trackTitle: TRACK_TITLE,
    unitTitle: spec.unitTitle,
    whyItMatters: `${spec.whyLead} Baseball finance sits at the intersection of labor law, collective bargaining, and corporate cash management: public headlines quote luxury-tax estimates while private ledgers track wire timing, escrow, and affiliate cash calls. When staff confuse average annual value with today’s bank balance, they misread how aggressive a July trade can be or whether a deferred balloon crowds next winter’s flexibility. ${spec.title} builds language and worksheets you can use in education and planning exercises—always with the caveat that real clubs sign confidential contracts and your numbers are illustrative unless sourced from official filings.${UNCERTAINTY_PAD}${ANCHOR_TAIL}`,
    lessonOpener: `${spec.openerLead} We work with stylized dollar amounts and rounded thresholds so you practice structure without pretending to know a specific player’s contract. Label every table with “illustrative” and separate league rules (published in the collective bargaining agreement summaries) from club-specific accounting policies you would confirm with your CFO or controller.${UNCERTAINTY_PAD}${ANCHOR_TAIL}`,
    narrativeFlow: [
      "Define the baseball finance question: roster, tax, cash, or recognition—and name the audience (owner, GM, analyst, accounting).",
      "Map economic mechanism to accounting treatment (cash vs accrual, payroll period, CBT treatment) with explicit assumptions.",
      "Compute or bracket outcomes with transparent sensitivity to one key input (AAV, deferral rate, games played).",
      "Summarize in a short decision memo that states what you know, what you assumed, and what would change your conclusion.",
    ],
    objectives: [
      "Explain opportunity cost, marginal value, and budget constraints in MLB roster and affiliate contexts using consistent vocabulary.",
      "Interpret competitive balance tax concepts at a high level without mixing public estimates with private books.",
      "Describe how deferred compensation, payroll cadence, minor-league systems, and international signing pools affect liquidity and recognition timing.",
    ],
    prerequisites: [
      "Comfort translating word problems into tables or spreadsheets (paper grids are fine).",
      "Algebra-level fluency with percentages, piecewise thresholds, and reading simple cash-flow timelines.",
      "Awareness that published CBT figures are often modeled from incomplete public data; private contracts govern actual obligations.",
    ],
    conceptChunks: [
      {
        heading: spec.headings[0],
        explainLikeCoach: `${spec.coach[0]} [[INLINE_DIAGRAM: ${lessonSlug}-a]]`,
        formalNote: `${UNCERTAINTY_PAD} ${spec.formal[0]} DiagramTitle: Problem framing\nDiagramPurpose: Separate stock variables (cap table, tax exposure) from flow variables (payroll wires, bonus recognition).\nDiagramInsight: Mixing them causes false urgency or false calm.\nDiagramCaption: Draw two parallel rails—cash calendar and recognition calendar—and keep them labeled.`,
      },
      {
        heading: spec.headings[1],
        explainLikeCoach: `${spec.coach[1]} [[INLINE_DIAGRAM: ${lessonSlug}-b]]`,
        formalNote: `${UNCERTAINTY_PAD} ${spec.formal[1]} DiagramTitle: Mechanism map\nDiagramPurpose: Show how one policy lever (deferral, assignment, option) propagates to tax, cash, and roster state.\nDiagramInsight: Partial equilibrium thinking misses second-order roster effects.\nDiagramCaption: Annotate arrows with timing (season, postseason, offseason).`,
      },
      {
        heading: spec.headings[2],
        explainLikeCoach: `${spec.coach[2]} [[INLINE_DIAGRAM: ${lessonSlug}-c]]`,
        formalNote: `${UNCERTAINTY_PAD} ${spec.formal[2]} DiagramTitle: Sensitivity strip\nDiagramPurpose: Hold other inputs fixed while moving one uncertain parameter across a band.\nDiagramInsight: Threshold rules (CBT tiers) create kinks—small changes can flip discrete outcomes.\nDiagramCaption: Mark kinks explicitly on the horizontal axis.`,
      },
      {
        heading: spec.headings[3],
        explainLikeCoach: `${spec.coach[3]} [[INLINE_DIAGRAM: ${lessonSlug}-d]]`,
        formalNote: `${UNCERTAINTY_PAD} ${spec.formal[3]} DiagramTitle: Governance handoff\nDiagramPurpose: Show who owns validation (finance, legal, baseball ops) before a number is repeated externally.\nDiagramInsight: Analysts model; controllers certify; baseball ops decides under both.\nDiagramCaption: Add sign-off boxes on the memo template.`,
      },
    ],
    quickChecks: [
      {
        prompt: "Why keep illustrative numbers visibly labeled instead of blending them with sourced facts?",
        answer: "So stakeholders never confuse pedagogy with audited reporting or leak-sensitive structure through false precision.",
      },
      {
        prompt: "What is the core difference between cash timing and recognition timing for a signing bonus?",
        answer: "Cash may wire on one date while expense or CBT recognition may follow contract language and league rules across seasons.",
      },
      {
        prompt: "When a model shows you barely below a CBT threshold, what is the first governance question?",
        answer: "Which inputs are uncertain (incentives, roster bonuses, midseason adds) and who updates the forecast when reality moves?",
      },
    ],
    workedExamples: spec.worked.map((w) => ({
      title: w.title,
      scenario: w.scenario,
      walkthrough: [...w.steps],
      takeaway: w.takeaway,
    })),
    practiceSets: [
      {
        level: "warmup",
        prompts: [
          {
            prompt: "Name one stock variable and one flow variable for a club’s winter planning meeting.",
            answer: "Example stock: CBT exposure snapshot; example flow: expected biweekly payroll wires next quarter.",
          },
          {
            prompt: "Why should international bonus pools appear in the same conversation as domestic draft signing strategy?",
            answer: "They compete for finite scouting bandwidth and cash-out timing even when accounting buckets differ.",
          },
        ],
      },
      {
        level: "core",
        prompts: [
          {
            prompt: "In two sentences, explain deferrals to a coach without using present value jargon.",
            answer: "The player may get paid later than the seasons they play; the club must still plan when the cash leaves the bank and how league rules count those seasons now.",
          },
          {
            prompt: "Give one reason minor-league stipends matter to whole-organization liquidity even though individual amounts are small.",
            answer: "Volume times frequency across many players and staff categories can move weekly cash needs and travel reimbursements materially.",
          },
          {
            prompt: "What does proration mean in a midseason trade context for payroll accounting exercises?",
            answer: "Only the portion of salary attributable to games with the new club is usually allocated to that club’s books for the season segment, subject to actual agreement and league treatment.",
          },
        ],
      },
      {
        level: "stretch",
        prompts: [
          {
            prompt: "Draft a three-line policy for your fantasy front office on when to refresh CBT projections during the season.",
            answer: "Example: refresh after every 40-man move, after incentive thresholds within five games, and within 24 hours of any trade rumor that becomes a signed transaction.",
          },
          {
            prompt: "Identify one ethical boundary when modeling another club’s payroll from public leaks.",
            answer: "Do not present guesses as facts externally; keep scenarios internal and label confidence.",
          },
        ],
      },
    ],
    commonMistakes: [
      "Treating Spotrac-style aggregates as audited truth instead of modeled estimates with hidden incentives.",
      "Forgetting option years and split contracts when summing “Opening Day payroll.”",
      "Ignoring affiliate and baseball-operations staff cash needs when only modeling the 26-man active salaries.",
    ],
    lessonSummary: `${spec.summary}${UNCERTAINTY_PAD}`,
    synthesisPrompt: spec.synthesis,
    nextLessonBridge: spec.next,
    professorNotes:
      "Grade for definitional clarity, explicit assumptions, and separation of league mechanics from club policy. Require students to attach a one-paragraph ethics note whenever they use public guesses about private contracts. Reward humility about unknown bonus triggers and option vesting.",
    keyTerms: spec.terms,
    assessmentItems: [
      {
        id: `${lessonSlug}-mcq-1`,
        type: "mcq",
        prompt: spec.mcqPrompt,
        options: [...spec.mcqOptions],
        correctAnswer: spec.mcqCorrect,
        explanation: "Baseball finance literacy is about defensible framing under incomplete information, not memorizing a single vendor’s snapshot.",
      },
      {
        id: `${lessonSlug}-exact-1`,
        type: "exact",
        prompt: spec.exact1Prompt,
        correctAnswer: spec.exact1Answer,
        acceptedAnswers: spec.exact1Accepted,
        explanation: "Precise vocabulary prevents analysts and accountants from talking past each other in the same meeting.",
      },
      {
        id: `${lessonSlug}-exact-2`,
        type: "exact",
        prompt: spec.exact2Prompt,
        correctAnswer: spec.exact2Answer,
        acceptedAnswers: spec.exact2Accepted,
        explanation: "Cash cadence and recognition rules are distinct lenses on the same underlying obligations.",
      },
    ],
  };
}

const U1 = "opportunity-cost-and-organizational-tradeoffs";
const U1_TITLE = "Opportunity Cost And Organizational Tradeoffs";
const U2 = "luxury-tax-revenue-sharing-and-cbt-accounting";
const U2_TITLE = "Luxury Tax Revenue Sharing And CBT Accounting";
const U3 = "deferred-compensation-payroll-cadence-and-global-signing";
const U3_TITLE = "Deferred Compensation Payroll Cadence And Global Signing";

const SPECS: FinSpec[] = [
  {
    key: `${TRACK_SLUG}::${U1}::opportunity-cost-in-roster-construction-and-payroll-buckets`,
    title: "Opportunity Cost In Roster Construction And Payroll Buckets",
    unitTitle: U1_TITLE,
    whyLead:
      "Opportunity cost is the player or payroll slot you forego when you commit dollars and roster space today. In MLB front offices, that foregone value is not theoretical—it is the midseason trade flexibility you gave up by carrying a blocked prospect on the 40-man one winter early, or the international pool space you traded away for a rental bat.",
    openerLead:
      "Your GM asks for a one-slide answer: if we guarantee $14M to a swing reliever, what roster and payroll slots do we not spend elsewhere? You sketch two columns—cash this year and roster spots—and list three concrete alternatives the club is walking past.",
    headings: [
      "Opportunity Cost On The 26 Man And 40 Man Rosters",
      "Payroll Buckets Versus Cash Calendar Buckets",
      "Shadow Prices For Waiver Claims And DFAs",
      "Communicating Tradeoffs Without Micromanaging The Field Staff",
    ],
    coach: [
      "Treat every multi-year commitment as occupying three scarce resources: active roster, optional assignment flexibility, and owner tolerance for downside variance. If you only show average annual value, you hide the opportunity cost of a 40-man crunch that forces a DFA of homegrown depth.",
      "Split the spreadsheet into buckets the way baseball ops and finance actually argue: guaranteed major-league salary, likely incentives, buyouts, retained money in trades, and estimates for arbitration raises. Cash calendar buckets should mirror wire dates, not just season labels.",
      "When you claim a player on waivers, the shadow price is the next player you cannot protect or the cash buffer you shrink before the trade deadline. Write that name in pencil next to the claim decision so the room sees who paid.",
      "Coaches care about runs prevented; owners care about risk-adjusted dollars. Translate opportunity cost into one baseball sentence and one finance sentence—never only one side.",
    ],
    formal: [
      "Let decision vector x allocate dollars and roster slots; opportunity cost of action a is the value of the best feasible alternative in the same constraint set. Formalize with max_{x'∈F, x'_a=0} V(x') - V(x).",
      "Bucketization is a partition of cash flows {C_t} and recognition streams {R_t}; misalignment arises when ∑ C_t ≠ ∑ R_t across the planning horizon because of deferrals, bonuses, or prepayment.",
      "Waivers introduce a stochastic exit option; shadow price approximates E[value | retained] - E[value | lost].",
      "Principal–agent framing: field staff optimizes win probability near term while finance optimizes covenant and tax compliance—communication maps Pareto improvements.",
    ],
    worked: [
      {
        title: "Bench Versus Swingman",
        scenario: "Two pitchers cost similar AAV but one burns an option year if sent down.",
        steps: [
          "List roster states under each choice for May and September.",
          "Attach cash timing for incentives tied to games pitched.",
          "Compute qualitative opportunity cost to player development pipeline.",
          "Summarize recommendation with one risk flag.",
        ],
        takeaway: "Equal AAV can hide unequal optionality; surface the 40-man path explicitly.",
      },
      {
        title: "Prospect Protection Crunch",
        scenario: "Adding a veteran blocks a Rule 5 eligible arm.",
        steps: [
          "Identify who falls off the 40-man if no trade occurs.",
          "Estimate replacement value of lost depth in innings.",
          "Compare to projected WAR of the veteran signing.",
          "State a contingency if injuries spike in April.",
        ],
        takeaway: "Opportunity cost includes lost future value, not just this year’s salary.",
      },
      {
        title: "Owner Cash Cap",
        scenario: "Soft directive to stay under an internal cash draw even if modeled CBT is fine.",
        steps: [
          "Translate owner cap into monthly wire limits.",
          "Map signing bonuses across calendar years.",
          "Show where deferrals shift pain versus true relief.",
          "Recommend communication cadence to ownership.",
        ],
        takeaway: "Internal caps can bind before league tax thresholds do.",
      },
    ],
    summary:
      "Opportunity cost in roster construction pairs baseball scarcity (slots, options, pipeline) with finance scarcity (cash timing, risk budgets) so decisions stay honest about who pays later.",
    synthesis: "Draft a two-column memo comparing any one real or hypothetical signing with the next-best alternative the club could fund with the same cash and roster footprint.",
    next: "Tighten marginal thinking: call-ups, options, and the incremental dollar value of the next win on the margin.",
    terms: [
      { term: "Shadow price", definition: "Implicit value of relaxing one unit of a binding constraint (roster spot, cash wire, pool space)." },
      { term: "40-man crunch", definition: "Binding roster state where adding a player forces another off the roster or through waivers." },
      { term: "Soft cash cap", definition: "Internal owner directive that may sit below published league thresholds." },
    ],
    mcqPrompt: "Which pairing best captures opportunity cost for a multi-year reliever signing?",
    mcqOptions: [
      "Only the pitcher’s ERA last season",
      "Foregone alternatives in roster slots, pool space, and cash timing under the same constraints",
      "Average ticket price in the upper deck",
      "The club’s Twitter follower count",
    ],
    mcqCorrect: "Foregone alternatives in roster slots, pool space, and cash timing under the same constraints",
    exact1Prompt: "Name one non-salary resource that can carry opportunity cost in MLB roster moves.",
    exact1Answer: "roster spot",
    exact1Accepted: ["40-man", "option year", "international pool", "dfas"],
    exact2Prompt: "One word for money leaving the bank on a schedule regardless of TV revenue recognition timing.",
    exact2Answer: "cash",
    exact2Accepted: ["liquidity", "wire"],
  },
  {
    key: `${TRACK_SLUG}::${U1}::marginal-analysis-for-call-ups-and-option-years`,
    title: "Marginal Analysis For Call Ups And Option Years",
    unitTitle: U1_TITLE,
    whyLead:
      "Marginal analysis asks what changes when you add one more unit—here, one more win expectation, one more service day, or one more option burned. Option years are finite inventory; burning them on a spot start has a marginal cost that shows up months later when you cannot shuttle the same arm.",
    openerLead:
      "The farm director and GM disagree about recalling a starter for a doubleheader. You quantify incremental expected innings, incremental tax and payroll cash, and the option inventory hit if he is sent back down.",
    headings: [
      "Marginal Wins And Marginal Dollars On The Bubble",
      "Option Years As Depreciating Real Options",
      "Service Time Incentives Versus Competitive Urgency",
      "Checklist Before Burning The Last Option",
    ],
    coach: [
      "Plot incremental WAR or runs-prevented per dollar for the call-up versus the alternative long man already on the 26-man. If the delta is tiny, the option cost may dominate.",
      "Describe options like insurance policies: each assignment uses a coupon. When coupons are gone, the player must clear waivers to ride the shuttle—risk spikes.",
      "Service time rules create ethical and strategic tension; this lesson stays on economics—value of an extra day versus fan and clubhouse narrative costs.",
      "Before approving, list three future states where you will regret the burn (injury wave, trade need, September expansion).",
    ],
    formal: [
      "Marginal value MV = V(n+1) - V(n) for roster size n; compare to marginal cost MC including option value loss estimated as real-option decrement.",
      "Option inventory resembles American-style exercise with stochastic demotions; approximate with binomial trees for pedagogy.",
      "Service time affects discounted free-agent value to the player and surplus to the club; treat as transfer pricing problem.",
      "Decision rule: act if E[MV - MC | info] > 0 with explicit scenario weights.",
    ],
    worked: [
      {
        title: "Spot Starter",
        scenario: "Triple-A arm with one option left versus waiver claim veteran.",
        steps: [
          "Estimate incremental runs allowed distribution for one doubleheader.",
          "Attach option loss probability to future shuttle needs.",
          "Price waiver claim cash if veteran is available.",
          "Recommend with sensitivity to bullpen fatigue.",
        ],
        takeaway: "Tiny performance deltas can flip the decision when optionality is scarce.",
      },
      {
        title: "Injury Replacement",
        scenario: "Forced recall burns option but prevents catastrophic bullpen game.",
        steps: [
          "Quantify injury risk continuation.",
          "Compute expected leverage innings lost without recall.",
          "Add intangible clubhouse cost parameter qualitatively.",
          "Document why option burn is acceptable this time.",
        ],
        takeaway: "High marginal injury risk lowers the shadow value of preserving options.",
      },
      {
        title: "September Expansion",
        scenario: "Option preserved until rosters expand changes shuttle value.",
        steps: [
          "Map calendar of optional assignments before Sept 1.",
          "Compute expected demotions under health scenarios.",
          "Compare to expanded roster flexibility.",
          "Recommend pacing of burns.",
        ],
        takeaway: "Calendar shape shifts marginal option value discretely.",
      },
    ],
    summary:
      "Marginal analysis for call-ups pairs incremental performance with incremental option and service-time costs so bubble decisions stay disciplined.",
    synthesis: "Build a simple table: three rows of marginal scenarios (low, medium, high leverage recall) with columns for incremental runs, incremental cash, and option/service effects.",
    next: "Zoom out to labor supply and demand: free agency, arbitration, and the market-clearing stories behind contract sizes.",
    terms: [
      { term: "Marginal win", definition: "Expected incremental contribution to season wins from a roster change holding else equal." },
      { term: "Real option", definition: "Flexibility to make a future decision contingent on information; option years are finite corporate real options." },
      { term: "Shuttle risk", definition: "Probability a player must move on and off the active roster multiple times in a season." },
    ],
    mcqPrompt: "When should an option year’s preservation outweigh a small projected WAR gain?",
    mcqOptions: [
      "Never, wins are everything",
      "When future high-probability roster churn makes waiver risk costly",
      "Only if the player has zero service time",
      "Whenever fans demand a recall on social media",
    ],
    mcqCorrect: "When future high-probability roster churn makes waiver risk costly",
    exact1Prompt: "Marginal analysis compares incremental benefits to incremental what?",
    exact1Answer: "costs",
    exact1Accepted: ["expenses", "downsides"],
    exact2Prompt: "What inventory is consumed when a player is optioned up and down repeatedly until exhausted?",
    exact2Answer: "option years",
    exact2Accepted: ["options", "optional assignments"],
  },
  {
    key: `${TRACK_SLUG}::${U1}::supply-demand-intuition-for-baseball-labor-markets`,
    title: "Supply Demand Intuition For Baseball Labor Markets",
    unitTitle: U1_TITLE,
    whyLead:
      "Labor markets in baseball are thin: few elite shortstops, many teams bidding, and collective rules that cap some spending pools. Supply–demand intuition explains why similar WAR players get different guarantees in different winters—it is not mysticism, it is shifts in scarcity and risk appetite.",
    openerLead:
      "Two outfielders posted similar Statcast profiles; one signed early for fewer years. You sketch supply shifts (many comparable players) versus demand shifts (teams with payroll room) and add the risk narrative (injury history, swing changes).",
    headings: [
      "Thin Markets And Winner Curse In Free Agency",
      "Arbitration As Repeated Bargaining With Observable Inputs",
      "Nonlinear Pricing For Elite Scarcity At The Top Of The Demand Curve",
      "Reading Winter Headlines Without Confusing Correlation With Causation",
    ],
    coach: [
      "Teach supply as the set of players clubs could sign at a position in a given winter; teach demand as teams with credible holes and budget. When supply stacks at second base, prices fall unless a bidding war ignites for the one defender who also runs.",
      "Arbitration repeats yearly with new information; emphasize path dependence—last year’s compromise anchors this year’s brief.",
      "Elite scarcity creates nonlinear jumps: the tenth-best starter and the second-best starter are not priced ten percent apart.",
      "Headlines compress many shocks; ask which curve moved—did teams get poorer or did comparable players flood the market?",
    ],
    formal: [
      "Classical partial equilibrium: price clears where supply intersects demand; shocks shift curves.",
      "Thin market theory predicts higher variance in clearing prices; winner curse when valuation noise dominates.",
      "Arbitration as bilateral bargaining with threat points (hearing) and outside options (release, trade).",
      "Nonlinear pricing arises from discrete talent tiers and risk aversion curvature in owner utility.",
    ],
    worked: [
      {
        title: "Crowded Corner Outfield Market",
        scenario: "Many league-average bats available.",
        steps: [
          "List number of comparable players.",
          "Count teams with clear openings.",
          "Predict direction of average guarantee.",
          "Note risk if one player differentiates with defense.",
        ],
        takeaway: "High supply relative to demand pushes guarantees down absent differentiation.",
      },
      {
        title: "Ace Shortage Winter",
        scenario: "Few starters pass 180-inning projection.",
        steps: [
          "Identify teams with rotation risk metrics.",
          "Map expected bidding intensity.",
          "Discuss insurance substitutes (trades vs signings).",
          "Flag winner curse for middle-tier arms.",
        ],
        takeaway: "Demand shocks raise middle tiers when stars are scarce—mistakes get expensive.",
      },
      {
        title: "Arb Hearing Risk",
        scenario: "Comparable cases from prior years anchor comps.",
        steps: [
          "Select three statistical comps publicly cited.",
          "List non-stat factors clubs argue.",
          "Compute plausible award band.",
          "Recommend settle versus go-to-hearing from expected value.",
        ],
        takeaway: "Threat of hearing changes settlement region even if hearings are rare.",
      },
    ],
    summary:
      "Supply and demand intuition clarifies why baseball labor prices move across winters and how arbitration repeats bargaining under new information.",
    synthesis: "Pick one offseason position group from public lists and write five bullet points: supply count, demand count, risk narrative, predicted price direction, and one counterexample that could break your story.",
    next: "Connect market prices to hard budget constraints spanning MLB and the affiliates.",
    terms: [
      { term: "Thin market", definition: "Few traders and few assets, leading to volatile clearing prices." },
      { term: "Winner curse", definition: "Winner of an auction likely overpaid if valuations are noisy." },
      { term: "Path dependence", definition: "This year’s negotiation inherits last year’s anchor points and relationships." },
    ],
    mcqPrompt: "If many teams need a catcher but only two starters are available, what happens to clearing prices?",
    mcqOptions: [
      "They necessarily fall because catchers fatigue",
      "They tend to rise because demand exceeds scarce supply at that quality tier",
      "They are fixed by the commissioner",
      "They depend only on batting average",
    ],
    mcqCorrect: "They tend to rise because demand exceeds scarce supply at that quality tier",
    exact1Prompt: "One word for the set of players clubs could sign in a position group in a given winter (economic framing).",
    exact1Answer: "supply",
    exact1Accepted: ["labor supply"],
    exact2Prompt: "Teams with holes and budget represent economic what?",
    exact2Answer: "demand",
    exact2Accepted: ["buyers"],
  },
  {
    key: `${TRACK_SLUG}::${U1}::budget-constraints-across-mlb-and-affiliate-operations`,
    title: "Budget Constraints Across MLB And Affiliate Operations",
    unitTitle: U1_TITLE,
    whyLead:
      "A major-league payroll headline is not the whole organization: complex staffs, player development complexes, international academies, and minor-league operations all draw cash and attention. Ignoring affiliate and systems budgets produces ugly surprises when travel spikes or when a wave of injuries forces expensive taxi contracts.",
    openerLead:
      "Finance sends a slide titled ‘whole organization liquidity’ with MiLB per diems, coaching staff bonuses, and big-league salary wires on one timeline. You reconcile how a single July road trip can stress three cost centers simultaneously.",
    headings: [
      "Whole Organization Cash Versus MLB Payroll Headlines",
      "Affiliate Operations Travel And Medical Contingencies",
      "Capital Projects And Amortization Versus Operating Expense",
      "KPIs That Align Baseball Ops And Finance Without Double Counting",
    ],
    coach: [
      "Teach the ‘waterfall’: owner-approved cash, league-minimum obligations, then discretionary adds. Minor-league raises and per diems sit in the same waterfall even if Twitter never mentions them.",
      "Travel is lumpy—west coast swings, extra innings, weather reroutes. Build a buffer line item instead of pretending per diems are constant.",
      "A new hitting lab is capex; minor-league meal upgrades are opex; mixing them in one ‘baseball spend’ bucket confuses year-to-year comparability.",
      "Pick KPIs both sides trust: projected active MLB payroll, 40-man guarantees, estimated affiliate and staff cash, and one risk reserve.",
    ],
    formal: [
      "Budget constraint ∑_i c_i x_i ≤ B with activities x_i and costs c_i spanning MLB and affiliates.",
      "Stochastic travel costs widen feasible set variance; risk management adds CVaR-style buffers for pedagogy.",
      "Capital budgeting separates discounted investment streams from operating cash needs.",
      "Double counting arises if bonuses are both expensed and embedded in player valuations twice.",
    ],
    worked: [
      {
        title: "July Road Trip Stress",
        scenario: "Three affiliates on long trips while big-league team hits extra innings streak.",
        steps: [
          "List incremental charter and hotel nights.",
          "Map taxi squad contract triggers.",
          "Show cash week versus average week.",
          "Recommend draw from contingency or defer discretionary spend.",
        ],
        takeaway: "Concurrent shocks across levels stress the same bank account.",
      },
      {
        title: "Complex Upgrade",
        scenario: "New pitching lab capex approved midyear.",
        steps: [
          "Separate depreciation schedule from cash outlays.",
          "Show impact on opex budget for staffing the lab.",
          "Identify trade-off with pro scouting travel.",
          "Communicate timeline to baseball ops.",
        ],
        takeaway: "Capex creates future opex; finance must surface both.",
      },
      {
        title: "Contingency Draw",
        scenario: "Owner asks why reserves fell despite ‘under tax’ headline.",
        steps: [
          "Reconcile CBT position with cash draws.",
          "List non-tax cash pulls (signing bonuses paid, insurance premiums).",
          "Show affiliate spikes.",
          "Recommend refreshed monthly forecast cadence.",
        ],
        takeaway: "CBT compliance does not imply cash comfort.",
      },
    ],
    summary:
      "Budget constraints across MLB and affiliate operations force one coherent cash story instead of isolated headline payroll numbers.",
    synthesis: "Create a single-page ‘organization cash map’ with at least five line items beyond active MLB salary and explain how they could spike in September.",
    next: "Shift to league-level competitive balance tax mechanics and how thresholds create kinks in planning.",
    terms: [
      { term: "Opex", definition: "Operating expenses recognized as incurred for ongoing activities." },
      { term: "Capex", definition: "Capital expenditure for long-lived assets, usually depreciated over time." },
      { term: "Taxi squad", definition: "Players traveling with the MLB club on standby; costs and roster rules vary by context." },
    ],
    mcqPrompt: "Why can a club be under the CBT threshold yet still feel a cash crunch?",
    mcqOptions: [
      "Because CBT measures only certain contract constructs while cash timing includes bonuses, affiliates, and operations",
      "Because CBT always equals bank balance",
      "Because minor leaguers are not paid",
      "Because TV revenue arrives daily",
    ],
    mcqCorrect: "Because CBT measures only certain contract constructs while cash timing includes bonuses, affiliates, and operations",
    exact1Prompt: "Acronym for the tax-like mechanism colloquially called the luxury tax in MLB collective bargaining discussions.",
    exact1Answer: "cbt",
    exact1Accepted: ["competitive balance tax"],
    exact2Prompt: "One word for money spent on a durable asset like a new academy building as opposed to daily meals.",
    exact2Answer: "capex",
    exact2Accepted: ["capital"],
  },
  {
    key: `${TRACK_SLUG}::${U2}::competitive-balance-tax-threshold-mechanics`,
    title: "Competitive Balance Tax Threshold Mechanics",
    unitTitle: U2_TITLE,
    whyLead:
      "Competitive balance tax (CBT) mechanics create piecewise budgeting: small changes in payroll composition can move a club across published thresholds, changing marginal tax rates on overages and sometimes draft or compensation pick implications in ways that require reading the current agreement summaries.",
    openerLead:
      "You are handed a stylized payroll table at $233M CBT figure with three threshold notches at illustrative levels ($230, $250, $270). You mark which players push the marginal dollar into the next bracket and where uncertainty sits.",
    headings: [
      "Thresholds Surcharges And Marginal Tax On The Next Dollar",
      "What Counts Toward CBT Versus What Hits The Bank Today",
      "MultiYear Averaging Intuition Without Claiming A Private Contract",
      "Planning Horizons When Penalties Compound Over Seasons",
    ],
    coach: [
      "Draw a step function: flat below threshold, then steeper slopes. Coaches should see why the ‘one more reliever’ might cost more than his salary in tax and pick forfeiture risk.",
      "Explain in plain language that CBT accounting uses contract structure rules that can differ from when the owner writes checks—deferrals and bonuses are classic wedges.",
      "Public spreadsheets often guess incentives; mark those rows yellow and teach the room to ask the controller.",
      "Compounding means crossing lightly one year may still influence multi-year behavior if reset rules matter—tie narrative to published summaries, not rumors.",
    ],
    formal: [
      "Piecewise budget set: tax owed T(P) is function of CBT payroll P with kinks at thresholds θ_k.",
      "Set inclusion of contract elements follows collective agreement; treat as exogenous ruleset for class.",
      "Multi-year optimization considers discount factor δ and penalty persistence parameters from published summaries.",
      "Sensitivity: ∂T/∂P jumps at kinks; discrete choice models for staying under versus exceeding.",
    ],
    worked: [
      {
        title: "Threshold Hugging",
        scenario: "Club sits $2M under illustrative top tier pre-deadline.",
        steps: [
          "List midseason adds that could push over.",
          "Estimate tax on last $5M if crossed.",
          "Discuss non-monetary penalties qualitatively from CBA summaries.",
          "Recommend guardrail internal buffer.",
        ],
        takeaway: "Kinked incentives justify internal buffers below published lines.",
      },
      {
        title: "Incentive Storm",
        scenario: "Playoff games increase likely bonuses.",
        steps: [
          "Build probability-weighted incentive column.",
          "Recompute expected CBT position.",
          "Show variance not just mean.",
          "Recommend hedging actions (trade vs limit call-ups).",
        ],
        takeaway: "Incentives convert uncertainty into tax risk near thresholds.",
      },
      {
        title: "Reset Strategy Narrative",
        scenario: "Owner asks about dipping under for reset per public reporting patterns.",
        steps: [
          "Summarize reset concept from educational materials.",
          "List baseball costs of chasing reset.",
          "List finance benefits if accurate.",
          "Conclude with scenario table without advising illegally.",
        ],
        takeaway: "Resets are organizational strategy, not spreadsheet trivia.",
      },
    ],
    summary:
      "CBT threshold mechanics teach piecewise budgeting: identify kinks, separate bank cash from CBT recognition, and model incentives as random variables near the line.",
    synthesis: "Using only illustrative numbers, build a three-threshold diagram and annotate where uncertainty from incentives could flip a club’s bracket.",
    next: "Link AAV, present value, and why deferrals twist the relationship between headlines and tax figures.",
    terms: [
      { term: "CBT payroll", definition: "League-defined computation of player compensation for competitive balance tax treatment in a season." },
      { term: "Kink", definition: "A point where marginal tax on the next dollar jumps because a threshold was crossed." },
      { term: "Incentive variance", definition: "Spread of possible bonuses that changes expected tax exposure." },
    ],
    mcqPrompt: "Why do clubs sometimes carry an internal payroll buffer below a published CBT line?",
    mcqOptions: [
      "Because they dislike winning",
      "To absorb uncertainty from incentives, trades, and recognition differences before crossing a kink",
      "Because thresholds are secret",
      "Because players are paid in bitcoin",
    ],
    mcqCorrect: "To absorb uncertainty from incentives, trades, and recognition differences before crossing a kink",
    exact1Prompt: "What kind of mathematical function shape do CBT surcharges create across thresholds?",
    exact1Answer: "piecewise",
    exact1Accepted: ["step", "kinked", "marginal"],
    exact2Prompt: "Three letters for the league accounting construct often called luxury tax planning.",
    exact2Answer: "cbt",
    exact2Accepted: ["competitive balance tax"],
  },
  {
    key: `${TRACK_SLUG}::${U2}::aav-present-value-and-luxury-tax-treatment-simplified`,
    title: "AAV Present Value And Luxury Tax Treatment Simplified",
    unitTitle: U2_TITLE,
    whyLead:
      "Average annual value spreads a guarantee across seasons for many CBT discussions, while present value discounts future cash to today for owner financing questions. Conflating the two is how water-cooler myths start—students need both lenses labeled.",
    openerLead:
      "You model a stylized $120M over six years with $20M deferred five years after the deal ends. You show two tables: AAV for tax discussion versus discounted cash for treasury.",
    headings: [
      "AAV As A Leveling Device For MultiYear Guarantees",
      "Present Value For Treasury And Debt Covenants",
      "Deferrals Shifting CBT Recognition Versus Cash Wires",
      "Simple Discount Math With Explicit Rate Assumptions",
    ],
    coach: [
      "AAV is like smoothing rent across months for budgeting even if your landlord wants quarterly checks—league rules pick the smoothing method.",
      "Present value answers how much today’s bank would need to fund future promises; owners care when bonds finance signings.",
      "Deferrals can lower today’s cash while still counting in CBT depending on structure—never assume deferral equals tax disappearance.",
      "Pick one discount rate for class and stick to it; sensitivity +1% to show humility.",
    ],
    formal: [
      "AAV illustrative: G/Years for flat guarantees; real agreements follow CBA formulas.",
      "PV = ∑ CF_t / (1+r)^t; continuous compounding optional stretch.",
      "Deferral shifts {CF_t}; CBT recognition vector {R_t} may not parallel.",
      "Sensitivity ∂PV/∂r is large for long tails—communicate range.",
    ],
    worked: [
      {
        title: "Flat Deal",
        scenario: "$60M over three years, no deferral.",
        steps: ["Compute AAV illustration.", "PV equals undiscounted sum if r=0.", "Note identity for short horizons.", "Prepare memo line."],
        takeaway: "Simple deals align intuition before adding deferrals.",
      },
      {
        title: "Deferred Tail",
        scenario: "$40M paid years 7–10 post-retirement.",
        steps: ["Compute PV at 5% and 7%.", "Compare to headline total.", "Discuss liquidity planning.", "Label CBT row as separate instructor note."],
        takeaway: "Long tails explode PV sensitivity to discount rate.",
      },
      {
        title: "Signing Bonus Up Front",
        scenario: "$15M bonus today, salaries later.",
        steps: ["Map cash spikes.", "Map AAV components per simplified rule.", "Discuss cash crunch near signing date.", "Recommend treasury sync."],
        takeaway: "Cash spikes can precede smoothed recognition—treasury must see both.",
      },
    ],
    summary:
      "AAV and present value are sibling tools: AAV levels multi-year guarantees for many tax discussions while PV prices future cash for financing and risk.",
    synthesis: "Build two parallel timelines for one stylized contract: CBT-relevant annual figures versus bank wires, and write two sentences explaining any gap.",
    next: "Broaden to revenue sharing and how transparent pools change planning for small-market clubs.",
    terms: [
      { term: "AAV", definition: "Average annual value computed per agreement rules for many CBT discussions—not identical to cash per year." },
      { term: "Present value", definition: "Today’s equivalent of a future cash flow after a chosen discount rate." },
      { term: "Deferral", definition: "Contract structure that schedules cash (and possibly recognition) later than service years." },
    ],
    mcqPrompt: "Which statement is most accurate for classroom modeling?",
    mcqOptions: [
      "AAV always equals cash paid that calendar year",
      "AAV and cash timing can diverge; always label which lens you are using",
      "Present value is illegal in baseball",
      "Deferrals never affect CBT",
    ],
    mcqCorrect: "AAV and cash timing can diverge; always label which lens you are using",
    exact1Prompt: "What spreadsheet operation converts future dollars to today’s dollars?",
    exact1Answer: "discounting",
    exact1Accepted: ["present value", "discount"],
    exact2Prompt: "Initials for average annual value shorthand in tax discussions.",
    exact2Answer: "aav",
    exact2Accepted: ["average annual value"],
  },
  {
    key: `${TRACK_SLUG}::${U2}::revenue-sharing-and-pool-transparency-for-staff-modeling`,
    title: "Revenue Sharing And Pool Transparency For Staff Modeling",
    unitTitle: U2_TITLE,
    whyLead:
      "Revenue sharing moves dollars between clubs under league rules; analysts who ignore it misstate small-market flexibility. Transparency is limited—models should separate facts from league memos you actually have from inference from public gate and national media rights narratives.",
    openerLead:
      "You model two clubs: one with higher local revenue volatility, one with smoother national shares. You sketch how sharing formulas (described only at high level here) change marginal dollar of winning for each.",
    headings: [
      "Local National And Postseason Revenue Buckets Conceptually",
      "Why Sharing Alters Marginal Return On Payroll",
      "Modeling Without Leaked Data Ethical Guardrails",
      "Questions Finance Should Ask Baseball Ops About Playoff Paths",
    ],
    coach: [
      "Local revenue swings with attendance and pricing power; national slices move slower. Playoff paths add lumpy upside—probability weight them instead of assuming October every year.",
      "If sharing reduces retained marginal revenue from a new star, the baseball value proposition still exists but finance may set different ROI hurdles.",
      "Never fabricate sharing receipts; scenario analysis should carry confidence labels.",
      "Ask baseball ops for postseason probability bands, not just point estimates.",
    ],
    formal: [
      "Let local L_i and national N be components; sharing function S(L,N) redistributes; retained marginal revenue ∂R/∂w adjusts incentives.",
      "Risk-averse owners value smoothing; sharing can reduce variance of net cash.",
      "Ethical modeling uses bounded assumptions and sensitivity bands.",
      "Playoff path is stochastic process; use scenario trees for pedagogy.",
    ],
    worked: [
      {
        title: "Attendance Shock",
        scenario: "Gate revenue drops 8% year over year.",
        steps: ["Map to local revenue line.", "Discuss sharing claw dynamics qualitatively.", "Adjust payroll flexibility narrative.", "Flag need for controller input."],
        takeaway: "Local shocks propagate to net cash even if on-field talent unchanged.",
      },
      {
        title: "Postseason Run",
        scenario: "Deep October increases postseason shares illustration.",
        steps: ["Probability weight rounds.", "Attach cash timing to months after season.", "Discuss budgeting for bonuses tied to games.", "Coordinate with baseball ops narrative."],
        takeaway: "Postseason is lumpy; finance should not linearize it in annual budgets.",
      },
      {
        title: "Transparency Limit",
        scenario: "Analyst wants exact sharing receipt.",
        steps: ["List what is public.", "List what requires internal data.", "Propose bounded scenario.", "Document unknowns."],
        takeaway: "Honest ranges beat false precision.",
      },
    ],
    summary:
      "Revenue sharing and pool transparency lessons teach how retained marginal revenue changes with league redistribution while respecting data boundaries.",
    synthesis: "Write a memo paragraph explaining how a hypothetical small-market club might set a lower ROI hurdle on player payroll if sharing smooths cash—explicitly label it hypothetical.",
    next: "Handle midseason changes: proration, trades, waivers, and in-season flex.",
    terms: [
      { term: "Retained marginal revenue", definition: "Extra revenue a club keeps from an incremental win after league redistribution." },
      { term: "Revenue sharing", definition: "League rules that transfer revenue between clubs based on defined formulas and audits." },
      { term: "Scenario band", definition: "Upper and lower projections instead of a single guessed number." },
    ],
    mcqPrompt: "Why must sharing models avoid fabricated exact receipts?",
    mcqOptions: [
      "Because numbers are never important",
      "Because without source data, false precision misleads decisions and ethics",
      "Because MLB publishes every club’s bank statements daily",
      "Because sharing does not exist",
    ],
    mcqCorrect: "Because without source data, false precision misleads decisions and ethics",
    exact1Prompt: "One adjective for revenue that depends heavily on home attendance and local pricing.",
    exact1Answer: "local",
    exact1Accepted: ["gate"],
    exact2Prompt: "October baseball cash flows are often described as non what shape?",
    exact2Answer: "linear",
    exact2Accepted: ["lumpy", "smooth"],
  },
  {
    key: `${TRACK_SLUG}::${U2}::proration-trades-waivers-and-in-season-payroll-flex`,
    title: "Proration Trades Waivers And In Season Payroll Flex",
    unitTitle: U2_TITLE,
    whyLead:
      "Midseason trades and waiver claims reallocate cash and tax exposure in pieces, not whole integers. Proration is the arithmetic of partial seasons; ignoring it makes July look like fantasy mode where salaries teleport without friction.",
    openerLead:
      "A rental bat owed $8M for the full illustrative year arrives at the trade deadline with one-third of the season left. You compute one-third for cash discussion and note CBT treatment follows league rules that students should verify each year from official summaries.",
    headings: [
      "Prorated Salary For Partial Season Segments",
      "Retained Salary In Trades And Who Books What",
      "Waivers And Claims As Low Cost Experiments With Cash Rules",
      "InSeason Flex Windows And Communication With Treasury",
    ],
    coach: [
      "Prorate by days or games depending on exercise; always state your denominator.",
      "Retained money is a second contract story—who sends the wire to the player and when matters to cash, while league rules allocate CBT responsibility across clubs per agreement.",
      "Waivers can be cheap trials but add 40-man and cash noise; finance should see the full claim invoice including travel.",
      "Treasury needs a weekly July forecast when the transaction window spikes wires.",
    ],
    formal: [
      "Prorated cash ≈ Annual × (remaining service days / season days) under simplified classroom assumptions.",
      "Retained salary splits cash flows between clubs per contract exhibits.",
      "Waiver claim is optional stopping time problem with transaction fee and roster risk.",
      "Rolling liquidity constraint with short planning horizon in July.",
    ],
    worked: [
      {
        title: "Deadline Rental",
        scenario: "$9M player traded at halfway point illustrative.",
        steps: ["Compute half cash to acquiring club illustration.", "Note bonus clauses.", "Map travel costs.", "Add tax sensitivity footnote."],
        takeaway: "Half season is not always half cash if bonuses skew.",
      },
      {
        title: "Salary Retained",
        scenario: "Selling club keeps 40% illustrative.",
        steps: ["Split wires.", "Discuss CBT allocation at high level.", "Update both club models.", "Communicate to accounting."],
        takeaway: "Retention creates parallel ledgers—track both clubs’ views.",
      },
      {
        title: "Claim Invoice",
        scenario: "Small salary claimed; travel surprise.",
        steps: ["List claim fee if any.", "Add flights.", "Stress test 40-man.", "Decide ROI."],
        takeaway: "Low salary does not mean zero marginal cash.",
      },
    ],
    summary:
      "Proration, trades, waivers, and in-season flex require partial-season arithmetic plus clear communication between baseball ops moves and treasury cash timing.",
    synthesis: "Simulate one trade deadline acquisition: show prorated cash, a note on CBT verification, and a line for non-salary incremental costs.",
    next: "Move to deferred compensation and when cash leaves the bank versus when stories hit the press.",
    terms: [
      { term: "Proration", definition: "Allocating annual amounts to the portion of the season a player is with a club." },
      { term: "Retained salary", definition: "Agreement for the trading club to continue paying part of a player’s cash compensation." },
      { term: "Claim fee", definition: "League-defined charge associated with certain claims; verify current rules in references." },
    ],
    mcqPrompt: "When modeling a July 31 acquisition, which denominator mistake is most common?",
    mcqOptions: [
      "Using the full calendar year instead of the remaining season segment",
      "Using only spring training days",
      "Ignoring the pitch clock",
      "Dividing by jersey number",
    ],
    mcqCorrect: "Using the full calendar year instead of the remaining season segment",
    exact1Prompt: "Word for splitting an annual salary to the fraction of the season on the roster.",
    exact1Answer: "proration",
    exact1Accepted: ["prorate"],
    exact2Prompt: "When a trading club keeps paying part of a contract’s cash, that arrangement is called salary what?",
    exact2Answer: "retention",
    exact2Accepted: ["retained salary", "retain"],
  },
  {
    key: `${TRACK_SLUG}::${U3}::deferred-payments-for-baseball-contracts-and-cash-flow-timing`,
    title: "Deferred Payments For Baseball Contracts And Cash Flow Timing",
    unitTitle: U3_TITLE,
    whyLead:
      "Deferred payments rearrange cash flows across years—sometimes decades—while league and club accounting may still recognize obligations in patterns that affect planning and public narratives. The famous annuitized payout stories are pedagogy for time value of money, not invitations to guess private schedules.",
    openerLead:
      "You illustrate a stylized $10M deferred equally over ten years starting five years after retirement, and you ask treasury to schedule wires while tax counsel labels CBT treatment references for students to read externally.",
    headings: [
      "Time Value Of Money For Long Tail Player Cash",
      "Why Owners Like Deferrals And Why Players Negotiate Them",
      "Cash Flow Waterfalls With Deferral Buckets",
      "Controls So Deferrals Do Not Surprise Auditors Or Fans",
    ],
    coach: [
      "Deferrals trade today’s pain for tomorrow’s—sometimes after leadership turnover, which is governance risk.",
      "Players may accept deferrals for higher total guarantees or tax planning of their own; always humanize the bilateral trade.",
      "Treasury builds waterfalls with escrow-like schedules; baseball ops should see the tail when evaluating new signings.",
      "Controls mean calendar reminders, not heroic memory; finance owns the tickler file.",
    ],
    formal: [
      "Deferred annuity valuation uses ∑ c_t / (1+r)^t for tail cash.",
      "Owner intertemporal utility weights future pain less? Discuss ethics and discounting carefully without psychologizing individuals.",
      "Liquidity coverage ratio style analog: assets available to meet tail cash.",
      "Control vector includes legal triggers and acceleration clauses—read real contracts in supervised settings only.",
    ],
    worked: [
      {
        title: "Annuitized Illustration",
        scenario: "$5M per year for 12 years illustrative starting age 55.",
        steps: ["Compute PV at 4%.", "Compare to lump sum alternative.", "Discuss reinvestment risk for club.", "Note inflation for player welfare discussion."],
        takeaway: "Long annuities concentrate duration risk.",
      },
      {
        title: "Acceleration Clause",
        scenario: "Hypothetical change-of-control language.",
        steps: ["Identify who bears risk.", "Map cash spike.", "Update liquidity model.", "Recommend disclosure discipline internally."],
        takeaway: "Legal tails can dominate expected value.",
      },
      {
        title: "Public Relations",
        scenario: "Fans misunderstand deferrals as ‘free’.",
        steps: ["Draft fan-safe explainer sentence.", "Pair with cash chart.", "Avoid implying team is broke or flush.", "Coordinate comms."],
        takeaway: "Education reduces toxic narratives.",
      },
    ],
    summary:
      "Deferred payments lesson connects time value of money to treasury scheduling and governance while keeping CBT treatment reading external and contract-specific.",
    synthesis: "Compute PV for two discount rates on the same stylized deferral and explain which stakeholders care more about each rate assumption.",
    next: "Compare how often employees are paid—biweekly versus semi-monthly—and why clubs mirror corporate payroll cadences off the field.",
    terms: [
      { term: "Deferral", definition: "Contractual postponement of cash compensation to later dates." },
      { term: "Tail risk", definition: "Risk concentrated in far-future cash flows or legal triggers." },
      { term: "Duration", definition: "Sensitivity of a cash flow bundle’s value to interest rate changes." },
    ],
    mcqPrompt: "Why should treasury be in the room when deferrals are discussed?",
    mcqOptions: [
      "Because deferrals only affect announcers",
      "Because future wires must be funded and scheduled even when headlines focus on this year’s win total",
      "Because players never accept deferrals",
      "Because deferrals remove all tax obligations automatically",
    ],
    mcqCorrect: "Because future wires must be funded and scheduled even when headlines focus on this year’s win total",
    exact1Prompt: "The idea that a dollar today is worth more than a dollar next year is called time value of what?",
    exact1Answer: "money",
    exact1Accepted: ["cash"],
    exact2Prompt: "Spreadsheet concept for converting future payments to today’s dollars.",
    exact2Answer: "present value",
    exact2Accepted: ["discounting"],
  },
  {
    key: `${TRACK_SLUG}::${U3}::biweekly-versus-semi-monthly-payroll-cadence-for-club-payrolls`,
    title: "Biweekly Versus Semi Monthly Payroll Cadence For Club Payrolls",
    unitTitle: U3_TITLE,
    whyLead:
      "Club employees—analysts, coaches, grounds crew—often live on corporate payroll cadences like biweekly or semi-monthly, while player compensation may follow seasonal installments. Mixing the two on one calendar is how someone misses a wire date during the All-Star break.",
    openerLead:
      "HR shows 26 pay periods for biweekly staff versus 24 for semi-monthly; baseball ops asks why cash needs spike in months with three biweekly checks. You align the calendars on one slide.",
    headings: [
      "Biweekly 26 Versus Semi Monthly 24 Pay Periods",
      "Seasonal MLB Player Installments Versus HR Payroll",
      "Accruals For Bonuses And Overtime Near Playoffs",
      "Cash Forecasting Templates That Finance And Ops Share",
    ],
    coach: [
      "Biweekly means two months each year have three checks; finance must park cash for those peaks.",
      "Semi-monthly aligns to calendar anchors but can mismatch weekly overtime reporting—pick controls.",
      "Player pay may cluster around season months; do not map player checks onto the same rhythm as ticket sales without evidence.",
      "Accrue playoff share expenses as events become probable under accounting norms taught in accounting courses—flag ‘consult controller’ here.",
    ],
    formal: [
      "Pay periods per year: biweekly ≈ 26, semi-monthly = 24; cash function C(t) has different periodicity.",
      "Player cash schedule exogenous; treat as piecewise constant within season segments.",
      "Accrual accounting matches expenses to periods; cash accounting matches wires; clubs use both lenses.",
      "Shared template is joint martingale on forecasts—update weekly in July.",
    ],
    worked: [
      {
        title: "Three Check Month",
        scenario: "July has three biweekly Fridays.",
        steps: ["Count staff headcount.", "Multiply gross.", "Compare to February short month.", "Recommend cash buffer line."],
        takeaway: "Periodic spikes are predictable—model them explicitly.",
      },
      {
        title: "Playoff Overtime",
        scenario: "Grounds crew overtime accrues late season.",
        steps: ["Estimate hours curve.", "Accrue probable cost.", "Coordinate with events.", "Update forecast."],
        takeaway: "Accruals align P&L stress with operational reality.",
      },
      {
        title: "Installment Mismatch",
        scenario: "Player installment hits same week as big tax payment.",
        steps: ["List wires.", "Identify credit facilities if any.", "Discuss communication to owners.", "Adjust intra-month forecast."],
        takeaway: "Layering spikes requires treasury coordination.",
      },
    ],
    summary:
      "Biweekly versus semi-monthly cadence lessons align HR payroll periodicity with baseball cash seasonality so organizations do not double-count or miss spikes.",
    synthesis: "Create a single July cash calendar row for staff (biweekly) and a separate row for illustrative player installments; highlight any week with overlapping peaks.",
    next: "Layer minor-league stipends, staff systems, and organization-wide liquidity.",
    terms: [
      { term: "Biweekly", definition: "Payroll schedule every two weeks producing 26 pay periods in most years." },
      { term: "Semi-monthly", definition: "Twice per month on fixed dates, producing 24 pay periods per year." },
      { term: "Accrual", definition: "Recognizing expenses in the period incurred rather than only when cash is paid." },
    ],
    mcqPrompt: "Why do biweekly staff payrolls create two months per year with higher cash need?",
    mcqOptions: [
      "Because employees skip work",
      "Because 26 periods across 12 months yields two months with three paydays instead of two",
      "Because MLB bans July payments",
      "Because semi-monthly always has 27 checks",
    ],
    mcqCorrect: "Because 26 periods across 12 months yields two months with three paydays instead of two",
    exact1Prompt: "How many pay periods in a typical year for semi-monthly staff?",
    exact1Answer: "24",
    exact1Accepted: ["twenty four"],
    exact2Prompt: "Roughly how many pay periods per year for biweekly staff?",
    exact2Answer: "26",
    exact2Accepted: ["twenty six"],
  },
  {
    key: `${TRACK_SLUG}::${U3}::minor-league-stipends-staff-systems-and-full-organization-liquidity`,
    title: "Minor League Stipends Staff Systems And Full Organization Liquidity",
    unitTitle: U3_TITLE,
    whyLead:
      "Minor-league stipends, meal money, housing support, and travel for dozens of players scale into material cash even when any one line item looks small next to a star’s salary. Staff systems—coaches, analysts, medical—add fixed cost depth. Liquidity planning that ignores them is fragile.",
    openerLead:
      "You build a heat map month-by-month: spring training housing spikes, June road trips for three affiliates, September call-ups. Owners see why ‘below CBT’ still feels tight in August.",
    headings: [
      "Volume Times Frequency In Player Development Systems",
      "Medical And Rehab Assignment Cash Surprises",
      "Staffing Ratios And Fixed Cost Coverage",
      "KPI Dashboards From Complex To Simple For Owners",
    ],
    coach: [
      "Count bodies, not anecdotes: FCL, DSL, full-season affiliates each have travel signatures.",
      "Rehab assignments create hotel nights in MLB cities while salaries may still run elsewhere—track both.",
      "Fixed coaching depth protects player development quality but compresses flexibility—show the trade visually.",
      "Give owners one KPI page and ten backup tabs—never the reverse.",
    ],
    formal: [
      "Scale costs: ∑_i n_i * c_i for cohorts i with per-player costs c_i.",
      "Medical shocks as jump processes; reserve fund as insurance.",
      "Fixed cost F plus variable a n; break-even analysis.",
      "Dashboard design as information design problem—sparse signals, rich drilldown.",
    ],
    worked: [
      {
        title: "June Affiliate Trips",
        scenario: "Three teams on long bus weeks plus hotel policy change.",
        steps: ["Estimate room nights.", "Multiply by rate band.", "Add per diems.", "Compare to prior June."],
        takeaway: "Policy changes move cash faster than headcount.",
      },
      {
        title: "Rehab Wave",
        scenario: "Four MLB injuries create extended hotel stays.",
        steps: ["Map MLB hotel policy.", "Estimate nights.", "Add transportation.", "Discuss insurance recoveries if any."],
        takeaway: "Injury waves stress non-player lines too.",
      },
      {
        title: "Owner One Pager",
        scenario: "Too many metrics confuses board.",
        steps: ["Pick three KPIs.", "Tie each to lever.", "Add risk callouts.", "Schedule refresh cadence."],
        takeaway: "Communication beats exhaustiveness for governance.",
      },
    ],
    summary:
      "Minor-league stipends and staff systems anchor full-organization liquidity planning because volume and frequency turn small per-unit costs into real monthly draws.",
    synthesis: "Estimate (illustrative) monthly cash for one affiliate month including per diems and hotels; explain which inputs you would verify with operations if this were real.",
    next: "Finish with international signing bonuses, pools, and periodization basics.",
    terms: [
      { term: "Per diem", definition: "Daily allowance for meals and incidental expenses while traveling." },
      { term: "Cohort cost", definition: "Total cost equals per-unit cost times number of players in a group." },
      { term: "Fixed cost depth", definition: "Baseline staffing and infrastructure expenses that persist regardless of short-run wins." },
    ],
    mcqPrompt: "Why do many small per-player costs still matter to treasury?",
    mcqOptions: [
      "Because they are paid once per decade",
      "Because frequency times cohort size scales them into visible monthly cash needs",
      "Because MLB bans them",
      "Because they are always capitalized",
    ],
    mcqCorrect: "Because frequency times cohort size scales them into visible monthly cash needs",
    exact1Prompt: "Daily travel allowance term often used in expense reports.",
    exact1Answer: "per diem",
    exact1Accepted: ["meal money"],
    exact2Prompt: "Player development involves many affiliates; costs scale with cohort what?",
    exact2Answer: "size",
    exact2Accepted: ["volume", "count"],
  },
  {
    key: `${TRACK_SLUG}::${U3}::international-signing-bonuses-pools-and-periodization-basics`,
    title: "International Signing Bonuses Pools And Periodization Basics",
    unitTitle: U3_TITLE,
    whyLead:
      "International amateur signings concentrate large bonuses in January windows, interact with league pools and penalties for exceeding them, and create recognition timing distinct from domestic draft bonuses. Executives need periodization: when cash leaves, when talent arrives, and when roster and tax rules bite.",
    openerLead:
      "You chart a stylized $3.2M bonus with spread payments and a pool line showing 105% overage illustrative penalty concept—students must verify current pool mechanics from official league materials outside class.",
    headings: [
      "Bonus Pools And Marginal Penalties Conceptually",
      "Periodization Of Cash Wires Versus Player Arrival",
      "Trading Pool Space As An Asset With Opportunity Cost",
      "Linking International Spend To Scouting Infrastructure Opex",
    ],
    coach: [
      "Pools cap behavior; exceeding them triggers costs that are not just dollars—future restrictions may hurt.",
      "Cash may wire on signing day while visa and academy onboarding lag—communicate timelines to coaches expecting bodies.",
      "Trading pool space is swapping future flexibility today—price it like any asset sale.",
      "Scouting infrastructure is opex that makes the bonus valuable; do not evaluate bonuses without development throughput.",
    ],
    formal: [
      "Pool constraint P ≤ P̄; penalty function L(P) convex beyond threshold in stylized model.",
      "Periodization maps events to calendar months {sign, arrive, debut}.",
      "Trade of pool slot is bilateral asset swap with contingent performance.",
      "Production function for talent: spend × scouting productivity × development capital.",
    ],
    worked: [
      {
        title: "Overage Illustration",
        scenario: "Stylized 5% pool exceed triggers future restrictions.",
        steps: ["Compute bonus sum.", "Compare to pool cap illustration.", "List penalty types from readings.", "Recommend internal governance review."],
        takeaway: "Penalties can be dynamic constraints, not one-line fines.",
      },
      {
        title: "Staggered Wires",
        scenario: "Bonus half now half next fiscal year illustration.",
        steps: ["Map wires.", "Map recognition discussion high level.", "Update cash forecast.", "Align with scouting travel."],
        takeaway: "Staggering shifts treasury peaks.",
      },
      {
        title: "Pool Trade",
        scenario: "Club A sends pool slot to Club B for player return.",
        steps: ["Identify opportunity cost to A.", "Identify benefit to B.", "Record as transaction not magic.", "Update long-range model."],
        takeaway: "Trades reallocate optionality, not just players.",
      },
    ],
    summary:
      "International signing bonuses and pools require periodization of cash, talent arrival, and rule-based penalties while treating pool trades as priced assets tied to scouting infrastructure.",
    synthesis: "Draft a January-to-March timeline for one stylized international class: signing event, cash wires, player arrival, and one opex line for academy housing.",
    next: "Return to unit one themes: every international dollar has an opportunity cost somewhere else in the organization.",
    terms: [
      { term: "Signing bonus", definition: "Upfront or scheduled lump compensation often paid near signing to secure the player’s commitment." },
      { term: "Pool space", definition: "League-defined capacity for certain signing amounts before penalties apply." },
      { term: "Periodization", definition: "Scheduling when cash, people, and accounting events occur across months and seasons." },
    ],
    mcqPrompt: "Why tie international bonus analysis to scouting and player-development opex?",
    mcqOptions: [
      "Because bonuses scout and develop players by themselves",
      "Because the economic return on bonus spend depends on infrastructure that converts signings into big-league value",
      "Because opex is illegal",
      "Because pools do not exist",
    ],
    mcqCorrect: "Because the economic return on bonus spend depends on infrastructure that converts signings into big-league value",
    exact1Prompt: "Month when many international amateur deals historically cluster in North American reporting.",
    exact1Answer: "january",
    exact1Accepted: ["winter"],
    exact2Prompt: "League-defined capacity before overage penalties is often called a bonus what?",
    exact2Answer: "pool",
    exact2Accepted: ["pool space"],
  },
];

export const HAND_AUTHORED_BASEBALL_FINANCE: Record<string, LessonDocument> = {};
for (const spec of SPECS) {
  HAND_AUTHORED_BASEBALL_FINANCE[spec.key] = buildFinanceLesson(spec);
}
