# Research brief: Lean Six Sigma Black Belt (subject deck)

Slug: `lssbb`. Family prefix: `lssbb`. Researched 27 September 2026. No
prerequisite deck. The deck will be published on the site, so it follows
CONTENT-POLICY.md in full.

Every fact below was read in a source fetched during this task. Saved copies and
extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/lssbb/`
(file names are given as `[file]`). PDFs were read with `pdftotext -layout`, and
`#page=N` counts form feeds. For NIST, each concept cites the handbook's HTML
page. The page numbers come from the printer-friendly chapter PDFs, whose
footers print each page's HTML address. Only single pages and documents were
fetched. Nothing was mirrored, and `src/no-fetch.json` was respected.

**ASQ could not be read.** `asq.org/robots.txt` loaded (`[asq-robots.txt]`: no
AI rule, "Crawl-delay: 5"). Every other asq.org address, including the home
page and three likely terms-of-use paths, returned HTTP 403 from Cloudflare
with the page title "Attention Required! | Cloudflare" (`[asq-home.html]`). That
is a block on automated access. Under BRIEF.md ("do not get round it") I did
not retry through any other route. So I have not read ASQ's terms, its CSSBB
page, or the CSSBB Body of Knowledge. I also have not read any trademark
statement. The topic plan is built from open sources instead, and follows the
coverage list in the task.

## Topics

These are our own labels (CONTENT-POLICY §2.3). They follow DMAIC, not ASQ's
outline, which was not read.

| Topic | Name | Budget |
|---|---|---|
| T1 | Deployment, roles and Six Sigma foundations | 51 |
| T2 | Teams, facilitation and project tools | 22 |
| T3 | Define: customer voice, CTQs, charter and scope | 44 |
| T4 | Measure: process maps, data, sampling and measurement systems | 46 |
| T5 | Measure: descriptive statistics, probability and distributions | 48 |
| T6 | Measure: capability, performance and sigma metrics | 40 |
| T7 | Analyse: hypothesis tests, ANOVA and non-parametric tests | 53 |
| T8 | Analyse: correlation, regression and root-cause tools | 53 |
| T9 | Improve: design of experiments | 42 |
| T10 | Improve: lean tools and flow | 69 |
| T11 | Control: SPC, control charts and control plans | 52 |
| T12 | Design for Six Sigma basics | 23 |
| | **Total** | **543** |

## Exam facts

None could be verified, because every asq.org page except robots.txt was
blocked (see above). Owner, current Body of Knowledge version, question count,
time, pass mark, format, languages, retake rules, eligibility and
recertification are all under "Not verified". No figure from memory is given
here. All these facts are the kind that change: a person should read them by
hand on asq.org before release.

## Naming

- **What was checked.** I could not read ASQ's trademark or terms pages. None of
  the open sources states who owns "Six Sigma", "Certified Six Sigma Black
  Belt" or "CSSBB" as marks. The EPA guide says only that "Motorola engineers
  ... developed the Six Sigma continual improvement philosophy"
  `[epa-...-chapter-3.txt]`. MoreSteam's pages say that "Black Belt
  Certification ... is offered by MoreSteam, other organizations, and
  consulting firms" `[ms/new-to-lean-six-sigma.txt]`. So "Black Belt" is used
  by many bodies, and no one of them owns it as a certification.
- **How CONTENT-POLICY §4 and §5 apply.** ASQ is not in the §5 table. But its
  terms are unknown and its site blocks automated access. That is the pattern
  §3 lists under tier D ("AICPA and NASBA pages (their terms ... bar automated
  access)"). Until a person has read ASQ's terms of use and any trademark
  guidance by hand, publish `lssbb` as a **subject deck** on §5's rules:
  - tier B and C sources only;
  - no claim to cover the CSSBB exam;
  - `ExamRefs` left empty;
  - no ASQ mark in the title.
- **Title now:** `[Site name] deck for Lean Six Sigma at Black Belt level`. Our
  brand leads, the text is plain, there is no logo, and we never say "official",
  "certified", "approved" or "accredited". Do not write "CSSBB", "Certified Six
  Sigma Black Belt" or "ASQ" in the title, the deck name, the URL or the marketing.
  A URL path such as `/decks/quality/lean-six-sigma-black-belt/` is fine.
- **If ASQ's terms, read by hand, allow factual naming:** use the pattern
  `[Site name] deck for the ASQ Certified Six Sigma Black Belt (CSSBB) exam`.
  Add the "Everyone else" notice from §4, with the owner's exact mark wording
  taken from ASQ's own page. Only then map cards to the Body of Knowledge. If
  ASQ's terms bar AI use of its content, as FINRA's and the IAPP's do, it is
  tier D. The deck then stays a subject deck and never uses the BoK.
- **Whether "Six Sigma" is a registered mark** (and whose) is not verified.
  A person should check it on the USPTO register before release. Until then,
  use "Six Sigma" only as the generic name of the method, as the EPA and
  NIST sources do.
- **Tier-B attribution.** Cards drawn from Wikipedia carry the article title,
  "Wikipedia contributors" and "CC BY-SA 4.0", with the article link. NIST
  asks for "appropriate byline/photo/image credits"
  `[nist-disclaimer.txt]`. So credit "NIST/SEMATECH e-Handbook of Statistical
  Methods", which gives this citation form on its own index page:
  "NIST/SEMATECH e-Handbook of Statistical Methods,
  http://www.itl.nist.gov/div898/handbook/, date" `[nist-index2.htm]`.
- **Deck notice text:**

> **Deck notice.** This deck is independent. It is not affiliated with,
> sponsored, endorsed or approved by ASQ or any other body that certifies Lean
> Six Sigma or Six Sigma practitioners. It does not use any certifying body's
> body of knowledge, exam content or study materials, and it makes no claim to
> match any exam. Cards are drafted with AI assistance only from the public
> sources cited on each card: chiefly the NIST/SEMATECH e-Handbook of
> Statistical Methods (a US Government work), English Wikipedia (CC BY-SA 4.0)
> and US EPA and NIST lean guidance. Every card is checked against its source
> and reviewed by a person.

## Sources and tiers

Tiers follow CONTENT-POLICY §3. Details and quoted licences are in
`lssbb-sources.json`.

- **Tier B.**
  - NIST/SEMATECH e-Handbook, chapters 1 to 7.
  - The NIST MEP value stream mapping page.
  - English Wikipedia, 58 saved articles. Each footer reads "Text is available
    under the Creative Commons Attribution-ShareAlike 4.0 License ; additional
    terms may apply". I grepped every saved page for "language model",
    "generative", "machine learning" and "AI". The only hits are article
    topics (for example "Machine learning evaluation metrics" navigation);
    none is a restriction. The Process performance index article carries
    Wikipedia's own "factual accuracy is disputed" banner, so its Ppk card is
    extra and noted.

  NIST's rule: "With the exception of material marked as copyrighted,
  information presented on NIST sites are considered public information and
  may be distributed or copied" `[nist-disclaimer.txt]`. One handbook passage
  is marked copyrighted: the response-surface example in 5.4.7.3 says its
  "material is copyrighted by the American Statistical Association and the
  Society for Industrial and Applied Mathematics" (`[nist-pri.txt p182]`).
  Do not use it.
- **Tier C (facts only, in our own words, never quoted).**
  - **US EPA pages and the Lean in Government Starter Kit.** EPA says its
    documents "may be freely distributed and used for non-commercial,
    scientific and educational purposes" and that "Commercial use ... may be
    protected" `[epa-disclaimers.txt]`. The Lean and Six Sigma guide "was
    prepared for the U.S. Environmental Protection Agency by Ross Strategic"
    (a contractor), and our CC BY-SA licence allows commercial reuse, so I
    treat EPA as C. A person may upgrade it.
  - **CMS FMEA guidance and the DOE FCIC FMEA report.** Neither has a licence
    statement, and the DOE report is contractor work.
  - **LeanOhio's Lean Six Sigma Terminology.** It is a state work and has no
    licence.
  - **MoreSteam pages.** The licence covers "internal, business use", with no
    derivative works. No AI or robot ban was found.
- **Not used.**
  - **iSixSigma.** Its terms bar "any robot, spider, or other automatic device
    ... to access the Website" `[isixsigma-terms.txt]`. Only the terms page
    was read. Treat the site as tier D and add it to `src/no-fetch.json`.
  - **Minitab support.** Its robots.txt blocks `*/support/` under a blank
    user-agent line, and its terms bar derivative works `[minitab-terms.txt]`.
  - **The DoD CPI Transformation Guidebook.** Both DAU (now redirecting to
    waru.edu) and DTIC returned 403.
  - **OpenStax (every book): tier D.** Each book page says it "may not be
    used in the training of large language models or otherwise be ingested
    into large language models or generative AI offerings without OpenStax's
    prior written permission", whatever its CC licence. The coordinator has
    deleted all OpenStax copies, and nothing in the deck cites or reuses
    OpenStax.

## Outline

This is our own plan, in DMAIC order, built from the coverage list in the task.
It is not ASQ's outline, and there are no weights. The tags give the topic.

1. Organisation-wide deployment
   - Six Sigma definition and the 3.4 DPMO target [T1]
   - DMAIC phases and how DMAIC relates to PDCA [T1]
   - Lean versus Six Sigma; Lean Six Sigma [T1]
   - Roles: champion or sponsor, Master Black Belt, Black Belt, Green Belt,
     Yellow Belt, process owner [T1]
   - Lean deployment models [T1]
   - Strategy links: balanced scorecard, hoshin kanri, four voices [T1]
   - Cost of poor quality and theory of constraints [T1]
   - Project selection [T1]
2. Team dynamics
   - Stages of team development [T2]
   - Sponsor, team leader and facilitator [T2]
   - Groupthink, brainstorming, nominal group technique, affinity diagram,
     force field analysis [T2]
   - Stakeholders and RACI [T2]
   - Gantt chart, PERT and critical path [T2]
3. Define
   - VOC and Kano [T3]
   - CTQs and CTQ tree [T3]
   - Project charter, its approval and elements [T3]
   - Problem statement, SMART goals, scope and includes/excludes [T3]
   - SIPOC and how to build one [T3]
4. Measure
   - Process maps: swim-lane and spaghetti; value-added, non-value-added and
     necessary non-value-added [T4]
   - Operational definitions, data collection plan, check sheet [T4]
   - Data types and levels of measurement [T4]
   - Population and sample; sampling methods and bias; rational subgroups [T4]
   - MSA and gauge R&R: repeatability, reproducibility, bias, linearity,
     resolution, drift, %GRR, attribute agreement [T4]
   - Descriptive statistics: centre, spread, IQR outlier rule; box plot,
     histogram, run chart, normal probability plot [T5]
   - Probability rules and the central limit theorem [T5]
   - Distributions: normal and z-scores, binomial, Poisson, exponential, t,
     chi-square, F; Box-Cox [T5]
   - Process capability: Cp, Cpk, Cpu and Cpl; Pp and Ppk; the Cp table;
     non-normal data [T6]
   - DPU, DPMO, opportunities, first pass yield, yield and rolled throughput
     yield [T6]
   - Sigma level, the 1.5 sigma shift and the conversion table [T6]
5. Analyse
   - Hypotheses, Type I and II errors, power, p-values, one- and two-tailed
     tests, confidence intervals [T7]
   - t-tests (one-sample, two-sample, paired) and proportion tests [T7]
   - Variance tests: F, chi-square, Levene [T7]
   - Chi-square goodness of fit and independence [T7]
   - Normality (Anderson-Darling) [T7]
   - One- and two-way ANOVA [T7]
   - Non-parametric tests: Mann-Whitney, Kruskal-Wallis [T7]
   - Correlation, r², least squares, residuals, extrapolation, multiple
     regression [T8]
   - Multi-vari; common and special causes [T8]
   - Root-cause tools: 5 Whys, fishbone, Pareto [T8]
   - FMEA: steps, severity, occurrence and detection; RPN; types [T8]
6. Improve
   - DOE: purpose, uses and steps [T9]
   - Randomisation, replication, blocking [T9]
   - Full and fractional factorials; 2^k runs; main effects and interactions
     [T9]
   - Confounding and resolution [T9]
   - Screening and Plackett-Burman designs; centre points [T9]
   - RSM and CCD; confirmation runs [T9]
   - Waste: DOWNTIME, seven versus eight wastes, muda/mura/muri [T10]
   - 5S [T10]
   - VSM: current and future state [T10]
   - Kaizen events [T10]
   - JIT, pull and kanban [T10]
   - Takt time, lead time and cycle time; Little's law [T10]
   - One-piece flow, cellular layout, load levelling [T10]
   - SMED: internal and external setup [T10]
   - Poka-yoke and autonomation [T10]
   - TPM, the six losses and OEE [T10]
   - Standard work and visual controls [T10]
7. Control
   - SPC and control charts; Phase I and II; control versus specification
     limits; 3-sigma limits [T11]
   - WECO rules; when to recalculate limits [T11]
   - X-bar and R, X-bar and S, I-MR charts and their constants [T11]
   - CUSUM and EWMA [T11]
   - p, np, c and u charts, and choosing a chart [T11]
   - Out-of-control action; in control but not capable [T11]
   - Control plan and reaction plan; SOPs; handover [T11]
8. DFSS basics
   - DFSS; DMADV and IDOV; DMAIC versus DMADV [T12]
   - QFD and Pugh matrix [T12]
   - Robust design and design FMEA [T12]

**For writers.**
- A concept of kind rule, number or procedure gets one card, which also
  teaches its term.
- Set members get one card each, where the set has more than three members.
- Terms folded into a set point to the set concept in `lssbb-terms.json`: the
  DMAIC phases, the team stages, the belts and the sampling methods.
- NIST formulas are images on the HTML pages. Read them there, not in the
  text.

## Traps

- [T1] The EPA source spells the phase "Analyze" (the DMAIC acronym). The deck
  writes "Analyse" in British spelling and says so once.
- [T1] "Six sigma" in the EPA definition means a "target level of quality that
  is six times the standard deviation", with "approximately 3.4 times per
  million opportunities". But MoreSteam states that 3.4 per million is
  reached at 4.5 standard deviations, and the target is raised to 6.0 to allow
  for a 1.5 sigma shift. Candidates mix up the 4.5 and 6.0 figures. [T6]
- [T1] COPQ: LeanOhio lists four categories: "Appraisal, Scrap, Rework, and
  Field Complaint (warranty costs)". The prevention-appraisal-internal-external
  failure model found in many texts is not in any fetched source. Do not mix
  the two.
- [T2] Tuckman's model had four stages. "Adjourning" was added in 1977
  (Wikipedia: "In 1977, Tuckman, jointly with Mary Ann Jensen, added a fifth
  stage"). Cards must not present five stages as the 1965 original.
- [T3] The Kano model: LeanOhio names four need types ("Surprise or Delight,
  More is Better, Must Be things and Dis-satisfiers"). The common
  three-category version is not in a fetched source.
- [T3] "Critical to customer" is "Not same as CTQ" (LeanOhio).
- [T4] NIST spells "gauge"; many texts write "gage". Pick one spelling for
  cards ("gauge R&R" in the term registry).
- [T4] MoreSteam's gauge R&R acceptance bands (≤ 1%, 1–9%, > 9%) are on %
  of total **variance**. Criteria quoted elsewhere as 10% and 30% refer to %
  study variation (standard deviation). That second set is not verified here.
  Say which basis a card uses.
- [T5] LeanOhio defines alpha risk as "The probability of accepting the
  alternate hypothesis". Use the Wikipedia definition instead: a Type I
  error is "the mistaken rejection of a null hypothesis". [T7]
- [T6] The capability tables assume a centred normal process. NIST:
  "the reject figures are based on the assumption that the distribution is
  centered". Cp 1.33 gives 64 ppm; Cp 2.00 gives 2 ppb.
- [T6] NIST: capability estimates need "about 50 independent data values", and
  capability applies to an in-control process. Out-of-control data give
  meaningless indices.
- [T6] Cpk ≤ Cp, with equality only when the process is centred (LeanOhio;
  NIST's Cpk = Cp(1 − k)).
- [T8] FMEA is proactive; root cause analysis addresses problems "after they
  occur" (CMS). The CMS guide rates only severity and probability, with no
  detection and no RPN. The RPN (severity × occurrence × detection) comes
  from the DOE report.
- [T10] Wastes: the EPA guide lists seven "deadly" wastes. The EPA Starter Kit
  lists eight (DOWNTIME), adding "Not utilizing knowledge/skills". Cards must
  say which list they use.
- [T10] Takt time: EPA's cellular manufacturing page calls it "the number of
  units each operation can produce in a given time". That is wrong. Use the
  JIT/kanban page: "the rate at which each product must be completed to meet
  customer needs, expressed in amount of time per part".
- [T10] TPM losses: EPA's page says "five major losses" in its text but heads
  its table "Six major losses". Its list (breakdown, set-up and adjustment,
  stoppage, speed, quality defect, equipment and capital investment) differs
  from the textbook "six big losses". Cards follow EPA's table and say so.
- [T10] OEE multiplies availability, performance and quality. MoreSteam's
  worked example is 95% × 97% × 98% = 90.3%.
- [T10] Lead time is "not the same as Cycle Time" (LeanOhio).
- [T11] Control limits come from the data. Specification limits come from the
  customer. NIST: control limits are "used to determine if the process is in
  a state of statistical control", and specification limits "if the product
  will function in the intended fashion".
- [T11] The WECO rules (NIST) are:
  - one point beyond 3 sigma;
  - 2 of 3 beyond 2 sigma;
  - 4 of 5 beyond 1 sigma;
  - 8 in a row on one side;
  - trend rules: 6 in a row up or down, and 14 alternating.

  Other rule sets (Nelson) differ, and were not verified.
- [T11] For I-MR charts, d2 = 1.128 for a moving range of two (NIST).
- [T12] DFSS roadmaps: MoreSteam names DMADV (blog on DMAIC) and says its own
  DFSS courses use IDOV. Both are valid names, and neither is "the" DFSS.
- [T6] The Wikipedia Ppk article defines Ppk with the sample standard
  deviation and describes it as a set-up estimate, but the article is flagged
  "factual accuracy is disputed". Cards state the formula only, marked extra.

## Languages

The CSSBB exam's languages could not be verified (asq.org blocked). All the
sources used are English only. I found no official or openly licensed
translation of the NIST handbook in this task. Wikipedia articles exist in
other languages, but they are separate texts and were not checked.

## Not verified

- **All CSSBB exam facts.** Owner details, BoK version and date, question
  count, time, pass mark, format, languages, retake and recertification rules,
  and eligibility. **Tried:** asq.org home, `/terms-of-use`,
  `/about-asq/terms-of-use` and `/about-asq/terms-and-conditions`. All
  returned Cloudflare 403. Not retried by other means.
- **ASQ's terms of use, AI policy and trademark guidance**, including whether
  "CSSBB" and "Certified Six Sigma Black Belt" are registered marks. These
  decide the naming and the tier (see Naming).
- **Whether "Six Sigma" is a registered trademark and who owns it.** Not
  searched on the USPTO register.
- **Pp and Ppk from a reliable source.** The only formula found is on
  Wikipedia's Process performance index article, which is flagged "factual
  accuracy is disputed" (`lssbb.ppk-formula`, extra). The article gives no Pp
  formula. NIST handbook 6.1.6 has only Cp, Cpk and Cpm, and the NIST Dataplot
  capability manual page has no Pp.
- **Rolled throughput yield** is now sourced to Wikipedia ("the product of
  yields for each process step", `lssbb.rty`). The **number of distinct
  categories (ndc)** rule in gauge R&R is in no fetched source, so it is not
  in the concept list.
- **Takt time as a formula** (available time ÷ customer demand). The sources
  give only the definition in words.
- **The 10%/30% %GRR criteria** (study-variation basis). See Traps.
- **Coefficient of variation.** It is not defined in any fetched source, so
  it was dropped.
- **Concepts dropped when OpenStax became tier D.** No allowed source was
  found for "quantitative versus qualitative data" (Wikipedia's Qualitative
  property article is a thin stub needing citations) or for "choosing a test
  by data type and number of groups". Both were removed. The other 58
  OpenStax-sourced concepts were re-sourced: 20 to the NIST handbook and 38
  to Wikipedia.
- **CMS site terms and DOE report authorship.** Both are treated as tier C.
  The CMS terms were not read.

## Leads in the task that were wrong

- **"OpenStax Introductory Statistics (CC BY 4.0)".** OpenStax is tier D
  whatever the licence. Every book page says it "may not be used in the
  training of large language models or otherwise be ingested into large
  language models or generative AI offerings without OpenStax's prior written
  permission". (The 2e is also CC BY-NC-SA 4.0, not CC BY.) My first pass
  missed this clause and used OpenStax. All of it has now been removed.
- **"NIST MEP lean resources".** On the NIST MEP site I found only a value
  stream mapping page and a lean overview PDF, with no pages on the other lean
  methods. The lean tools come mainly
  from US EPA pages. EPA's disclaimer makes them non-commercial ("Commercial
  use ... may be protected"), so they are tier C here, not tier B.
- **"Personal deck, never published".** Superseded by the coordinator: the
  deck is published, and this brief is written for publication.
