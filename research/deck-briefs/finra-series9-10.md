# Research brief: FINRA Series 9 and Series 10, General Securities Sales Supervisor

Slug: `finra-series9-10`. Family prefix: `s910`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task, or in a copy
the SIE and Series 7 researchers saved this week (named as such). Saved copies
are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/finra-series9-10/`
(FINRA pages in `finra/`, eCFR sections in `ecfr/`, US Code in `usc/`). `#page=N`
counts form feeds in the pdftotext output of the outline, so it is the PDF page
(the outline's printed "Outline Page N" is PDF page N+1).

**Prerequisite decks: `finra-sie` and `finra-series7`.** FINRA itself makes them
corequisites: "Candidates must pass the SIE and Series 7 exams to hold the
General Securities Sales Supervisor registration" `[s910.txt]`. This deck
does not re-teach them. It reuses 68 of their terms as topic 0 (Form U4,
statutory disqualification, Reg BI, Reg T, ODD, position limit and so on) and
reuses their saved rule copies wherever the Series 9/10 outline cites the same
rule. Everything here is the **supervisor's** view: approving, reviewing,
inspecting, reporting and correcting. A card that explains what a covered call
is belongs in Series 7. A card on who must approve an uncovered options account
belongs here.

## Topics

| Topic | Name | Outline coverage (scored items) |
|---|---|---|
| T1 | Hiring and registering associated persons | S10 F1: 1.1, 1.2 (part of 28) |
| T2 | Discipline, training and branch supervision | S10 F1: 1.3, 1.4, 1.5 (part of 28) |
| T3 | Opening customer accounts | S10 F2: 2.1 (part of 49) |
| T4 | Account activity, margin and maintenance | S10 F2: 2.2, 2.3, 2.4 (part of 49) |
| T5 | Complaints, trade errors and trade surveillance | S10 F3: 3.1, 3.2, 3.3 (part of 52) |
| T6 | Employee accounts and product sales supervision | S10 F3: 3.4, 3.5 (part of 52) |
| T7 | Communications with the public | S10 F4 (16) |
| T8 | Options accounts and options margin | S9 F1 (18) |
| T9 | Options trading supervision and operations | S9 F2 (19) |
| T10 | Options communications and market knowledge | S9 F3 (5) and F4 (13) |

The outline gives item counts per function only, not per objective, so the
split of F1–F3 of the Series 10 is ours.

## Exam facts

Sources: exam page `[s910.txt]`
(https://www.finra.org/registration-exams-ce/qualification-exams/series9-10),
content outline `[outline.txt]`
(https://www.finra.org/sites/default/files/Series_9-10_Outline.pdf, "© 2020
FINRA", PDF created 18 June 2020), FINRA Rule 1210 and 1220, the LEP FAQ. All
read in the raw text.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | FINRA | "The exam is developed and maintained by the Financial Industry Regulatory Authority (FINRA)." `[outline.txt]` p2 | No |
| Name | General Securities Sales Supervisor Qualification Exams (SU) | "The Series 9 and 10 exams — General Securities Sales Supervisor Qualification Exams (SU) —assess the competency of an entry-level principal" `[s910.txt]` | No |
| Structure | Two exams: Part 1 is the Series 10, Part 2 the Series 9 | "Part 1: Series 10", "Part 2: Series 9" `[s910.txt]` | No |
| Items (scored) | S9 55, S10 145; 200 in all | "Number of Items S9: 55 \| S10: 145" `[s910.txt]`; "The exam consists of 200 multiple-choice items (55 on the Series 9 and 145 on the Series 10)" `[outline.txt]` p3 | Rarely |
| Pretest items | S9 5, S10 10 unscored | "each candidate's Series 9 exam consists of a total of 60 items (55 scored and 5 unscored), and each candidate's Series 10 exam consists of a total of 155 items (145 scored and 10 unscored)" `[outline.txt]` p4 | Rarely |
| Format | Multiple choice | "Format Multiple choice" `[s910.txt]`; "There is no penalty for guessing." `[outline.txt]` p4 | No |
| Time | S9 1 h 30 min; S10 4 h | "Duration S9: 1 hour and 30 minutes \| S10: 4 hours" `[s910.txt]` | Rarely |
| Pass mark | 70 on each | "Passing Score S9: 70 \| S10: 70" `[s910.txt]`; "For the Series 9 exam, the passing score is 70% and for the Series 10 exam, the passing score is 70%." `[outline.txt]` p5 | Occasionally |
| Scoring | Equated to a common scale | "All candidate test scores have been placed on a common scale using a statistical adjustment process known as equating." `[outline.txt]` p5 | No |
| Fee | S9 $175; S10 $235 | "Cost S9: $175 \| S10: $235" `[s910.txt]` | **Yes** |
| Corequisites | SIE and Series 7 | "Corequisite(s) SIE + Series 7" `[s910.txt]`; Rule 1220(a)(10)(B): register as General Securities Representative "prior to or concurrent with" `[finra/1220.txt]` | Rarely |
| Eligibility | Must be sponsored by a member firm | "Candidates must be associated with and sponsored by a FINRA member firm or other applicable self-regulatory organization (SRO) member firm" `[s910.txt]` | No |
| Order and timing | Either order; both within two years of each other | "They may choose to take the exams on the same day or different days. … if both exams are not passed within two years of one another, the exam taken and passed will be invalidated." `[s910.txt]` | Rarely |
| Retakes | 15 days; 60 days after three fails in two years | Rule 1210.06: "after a period of 15 calendar days has elapsed … except that any person who fails to pass an examination three or more times in succession within a two-year period shall be prohibited from again taking that examination until a period of 60 calendar days has elapsed" (SIE researchers' copy of Rule 1210) | **Yes** (see Traps) |
| Validity | Lapses after two years unregistered; MQP up to five years | Rule 1210.08 (two years for representative registrations; the Armed Forces text speaks of "the two-year expiration period for representative and principal qualification examinations"); "the Maintaining Qualifications Program (MQP) provides eligible individuals … a maximum of five years in which to re-register" (Series 7 researchers' copy of the qualification exam FAQ) | Occasionally |
| Acting before passing | 120 calendar days | Rule 1210.04: a representative may "function as a principal for a period of 120 calendar days prior to passing an appropriate principal qualification examination", given "at least 18 months of experience functioning as a registered representative within the five-year period immediately preceding" | Rarely |
| Calculators, materials | Provided at the centre; no reference material | `[outline.txt]` p4–5 | No |
| In force since | September 1981 | "Effective Date 09/1981 – present" `[s910.txt]` | No |

## Naming

- FINRA calls them "Series 9 and 10 – General Securities Sales Supervisor
  Exams" and "General Securities Sales Supervisor Qualification Exams (SU)"
  `[s910.txt]`. The registration is "General Securities Sales Supervisor"
  (Rule 1220(a)(10)).
- FINRA's trademark list (https://www.finra.org/trademarks, `[tm.txt]`)
  includes "FINRA ®", "Financial Industry Regulatory Authority ®",
  "CRD ®", "Securities Industry Essentials ®" and "SIE ®". "Series 9",
  "Series 10" and "General Securities Sales Supervisor" are **not** on it.
  The list "may be updated at any time without notice".
- Terms of Use (last modified 9 November 2023, `[terms.txt]`): "Third
  parties may not use the Licensed Marks without FINRA's prior written
  permission." Links must not "create the appearance that an entity is
  associated with or sponsored by FINRA". The footer reads "FINRA is a
  Registered Trademark of the Financial Industry Regulatory Authority, Inc."
- **§4 applies as "Everyone else".** FINRA is not in §5. Use plain text, our
  brand first and a relational phrase, e.g. "[Site name] deck for the
  Series 9 and Series 10 (General Securities Sales Supervisor) exams". Never
  "FINRA Series 9/10 Flashcards", and no FINRA logo. Because "FINRA" is a
  registered mark and FINRA's terms bar using its marks without permission,
  the lawyer's §8 review should confirm that naming FINRA in a factual
  sentence is acceptable. Until then, keep "FINRA" out of the deck title and
  use it only in body text and in the notice.

**Deck notice:**

> The Series 9 and Series 10 General Securities Sales Supervisor
> Qualification Exams are qualification exams of the Financial Industry
> Regulatory Authority, Inc. FINRA, CRD and SIE are registered trademarks of
> the Financial Industry Regulatory Authority, Inc. This deck is independent
> and is not affiliated with, sponsored, endorsed or approved by FINRA. It
> paraphrases FINRA and SEC rules and cites each rule by number; SEC rules
> are quoted from the eCFR, a work of the U.S. Government. Rules as in force
> in September 2026.

**Two licence findings the owner must see before this family is built:**

1. **FINRA's Terms of Use restrict AI use.** Restriction (m): users may not
   "use any portion of the FINRA Website in the development of any software
   program or in conjunction with any machine learning, neural network, deep
   learning, predictive analytics or other artificial intelligence computer
   or software program". Restrictions (a) and (i) bar "derivative works", and
   (e) bars "scraping or harvesting tools (including robots)". CONTENT-POLICY
   §3 puts FINRA rule pages in tier C, and the SIE brief's licence quote for
   these terms leaves (m) out. This is the same kind of clause as ISACA's
   (§2.5). **A lawyer should decide whether AI-assisted drafting from FINRA
   rule pages is allowed** before writers use them. Where an SEC rule covers
   the same ground (Reg BI, Reg SHO, Reg NMS, 10b-5, 15c3-5, 17a-3/4, 17f-2,
   19h-1, Reg S-P, Reg T), cite the eCFR (tier B). I fetched about 30 FINRA pages (plus six 404 probes for the exam page address)
   one at a time, with pauses, for this brief.
2. **MSRB rules are tier D.** The SIE researchers found MSRB's terms forbid
   automated access and derivative works (`msrb-terms`). I fetched 12 MSRB
   rule pages before reading those terms, then deleted them unread beyond
   the page size. The 19 MSRB concepts cite the outline page only and are
   flagged "need SEC source". None is core except G-37 political
   contributions.

## Outline (owner's order)

Weights are scored items per function. The outline lists "KNOWLEDGE OF"
bullets and rule citations under each objective; the concepts file follows
them bullet by bullet. Candidates "should read and answer all items as they
apply to exchange-listed standardized options unless an item specifically asks
about conventional over-the-counter (OTC) options", and calculations exclude
commissions `[outline.txt]` p4.

### Part 1: Series 10 (145)

**Function 1. Supervise Associated Persons and Personnel Management Activities — 28**
- 1.1 Verify the qualifications of newly hired associated persons (pre-hire
  investigations, U4, U5, CRD, statutory disqualification, fingerprinting,
  registrations). `[T1]` p6
- 1.2 Review and maintain associated persons' registrations and disclosures
  (OBAs, personal accounts, private securities transactions, fiduciary
  appointments, political contributions, non-cash compensation). `[T1]` p6–8
- 1.3 Supervise associated persons and take corrective actions (arbitration,
  suspension and expulsion, disciplinary action, documentation; Rule 8210,
  8310, taping rule 3170). `[T2]` p8
- 1.4 Maintain marketplace and associated product and regulatory knowledge
  (new product training, annual compliance meeting, CE). `[T2]` p8–9
- 1.5 Conduct branch office inspections and manage the delegation of duties
  (OSJs, branches, unregistered locations, supervising supervisors,
  networking arrangements, vendors, signage, coverage). `[T2]` p9

**Function 2. Supervise the Opening and Maintenance of Customer Accounts — 49**
- 2.1 Review new account documentation (suitability and best interest, KYC,
  CIP, AML, BSA reporting, account types, day-trading approval, Form CRS).
  `[T3]` p9–10
- 2.2 Review customer account transactions, distributions and account
  transfers (frequency, concentration, discretion, restricted securities,
  ACATS, DVP/RVP, third-party disbursements, OFAC, SARs, cost basis). `[T4]`
  p10–11
- 2.3 Review margin accounts (Reg T, SMA, extensions, maintenance, portfolio
  margin, day trading, hypothecation). `[T4]` p11
- 2.4 Oversee administrative maintenance of customers' accounts (address and
  name changes, Reg S-P, custody, statement of financial condition,
  confirmations and statements, record retention). `[T4]` p11–12

**Function 3. Supervise Sales Practices and General Trading Activities — 52**
- 3.1 Identify and review customer complaints and take appropriate actions
  (acknowledgement, reporting, retention; Rules 4513, 4530). `[T5]` p12–13
- 3.2 Oversee the correction of trade errors (cancel and rebill, error
  accounts, parking, unauthorised trades). `[T5]` p13
- 3.3 Review daily trade activity for completeness of records or exceptions
  (manipulation, marking the close, Reg SHO, solicited/unsolicited marking,
  markups, conflicts, trading halts, market access, Reg NMS, insider
  trading). `[T5]` p13–15
- 3.4 Review trading activity in employees' internal and external accounts
  (restricted list, borrowing and lending, sharing, front running,
  piggybacking, IPO purchases). `[T6]` p15–16
- 3.5 Supervise sales practices of products (variable annuities, fixed
  income, low-priced equities, alternatives, bank products, managed products,
  hedge funds, switching, structured products, municipal and 529, DPPs;
  Securities Act exemptions; Investment Company Act). `[T6]` p16–17

**Function 4. Supervise Communications with the Public — 16**
- 4.1 Oversee telemarketing practices (do-not-call, time of day). `[T7]` p18
- 4.2 Review retail communications and determine appropriate approval
  (definition, social media, content standards, approvals and filings,
  public appearances). `[T7]` p18
- 4.3 Review incoming and outgoing correspondence including approval where
  required. `[T7]` p18–19
- 4.4 Review institutional communication and determine appropriate approval.
  `[T7]` p19

### Part 2: Series 9 (55)

**Function 1. Supervise the Opening and Maintenance of Customer Options Accounts — 18**
- 1.1 Review new account documentation (customer classes, AML/CIP, KYC, ODD
  delivery, uncovered writers' special statement, minimum net equity,
  customer verification, ROP review of discretionary accounts, exceptions,
  record retention). `[T8]` p20–21
- 1.2 Review recommended customer options trading activities (best interest,
  suitability, strategies). `[T8]` p21
- 1.3 Review margin accounts (strategy margin, maintenance, day-trading
  margin). `[T8]` p21–22

**Function 2. Supervise Sales Practices and General Options Trading Activities — 19**
- 2.1 Identify and review customer complaints (options complaint records and
  reporting). `[T9]` p22
- 2.2 Oversee the correction of options trade errors. `[T9]` p22
- 2.3 Review daily trade activity (large options position reporting,
  position and exercise limits, order origin codes, best execution,
  manipulation, trades with no economic purpose). `[T9]` p22–23
- 2.4 Monitor the general operational process of options trades
  (aggregation, exercise notices and contrary exercise advice, OCC
  assignment, FIFO or random allocation, customer notice, settlement).
  `[T9]` p23–24

**Function 3. Supervise Options Communications — 5**
- 3.1 Review options retail communications (ROP approval, worksheets and
  trading programs, public appearances). `[T10]` p24–25
- 3.2 Review incoming and outgoing options correspondence. `[T10]` p25
- 3.3 Review options institutional communication. `[T10]` p25

**Function 4. Supervise Associated Persons and Personnel Management Activities — 13**
- 4.1 Maintain marketplace and associated product and regulatory knowledge
  (sophisticated strategies, trading rotation and fast markets, market
  participants, halts, order types, profit/loss/break-even, tax). `[T10]` p26

Sample items (p28) include "A qualified person must inspect an office of
supervisory jurisdiction (OSJ) at least: … annually." and the cash-dividend
non-adjustment item. Writers must not reuse sample item wording.

## Traps

- **The outline is from 2020 and cites superseded rules.** The Series 9/10
  outline is "© 2020 FINRA" (PDF created 18 June 2020); the SIE outline PDF
  the SIE researchers saved was created 22 October 2025. Candidates must keep up with rule changes: "Candidates are
  responsible for keeping abreast of changes made to the applicable rules"
  `[outline.txt]` p4. Teach current rules, not the outline's wording. `[T1–T10]`
- **Rule 504 is $10 million, not $5 million.** The outline says "Rule
  504—Exemption for Limited Offerings and Sales of Securities Not Exceeding
  $5,000,000" (p16). The eCFR heading now reads "Exemption for limited
  offerings and sales of securities not exceeding $10,000,000". `[T6]`
- **"Section 4(6)" is now Section 4(a)(5).** The outline cites "Section 4(6)
  Transactions Involving Offers or Sale by an Issuer Solely to One or More
  Accredited Investors" (p17). The current 15 U.S.C. 77d numbers it (a)(5).
  The same applies to "Section 4(2)", now 4(a)(2). `[T6]`
- **Pattern day trader rules are gone from Rule 4210.** The outline lists
  "Special margin requirements for pattern day traders" (S9 1.3) and "Day
  trading" (S10 2.3). The Rule 4210 text the Series 7 researchers saved
  (last amendment "SR-FINRA-2025-017 eff. June 4, 2026") has no "pattern day
  trader" definition. It defines "intraday margin level" and "intraday margin
  deficit" instead. Rules 2130 and 2270 (day-trading account approval and
  disclosure) remain. `[T4, T8]`
- **Settlement is T+1.** SEA 15c6-1 now reads "later than the first business
  day after the date of the contract". The 2020 outline predates this. `[T4]`
- **Retake waiting period is 15 days.** Rule 1210.06 now reads "15 calendar
  days" (60 after three fails in two years). The rule shows "Amended by
  SR-FINRA-2026-014"; what that filing changed was not checked. `[T1]` (exam fact;
  also a card on principal registration timing)
- **Order and timing: two years, not 120 days.** The outline says the two
  exams "may be taken in any order at any time within the 120-day enrollment
  period" (p4). The exam page says a passed exam is invalidated "if both
  exams are not passed within two years of one another". The page is newer;
  prefer it and flag the difference. `[T1]`
- **Branch inspections: residential supervisory locations and remote
  inspections are new.** Regulatory Notice 24-02: Rule 3110.19 (residential
  supervisory location) effective 1 June 2024; Rule 3110.18, a "voluntary,
  three-year remote inspections pilot program", effective 1 July 2024. The
  Rule 3110 page text saved by the Series 7 researchers lists supplementary
  material only up to .17 (the expired 2020–2021 remote inspection relief).
  Check the current rule before writing. `[T2]`
- **Inspection cycles are easy to swap.** OSJs and branches that supervise
  non-branch locations: at least annually. Other branches: at least every
  three years. Non-branch locations: a regular periodic schedule, with a
  "general presumption" of three years (Rule 3110(c) and .13). `[T2]`
- **Regulatory Element CE is now annual.** Rule 1240 requires it "annually by
  December 31". `[T2]`
- **Reg S-P was amended.** 17 CFR 248.30 now requires a response programme
  and notice to affected individuals "as soon as practicable, but not later
  than 30 days". The 2020 outline predates this. `[T4]`
- **Tick size: Rule 612 now has a $0.005 increment.** The current eCFR text
  has both "$0.01" and "$0.005". Writers must read which quotes get which. `[T5]`
- **Sales supervisor versus Series 24 versus ROP.** The Series 9/10 "do not
  allow the sales supervisor/branch manager to supervise other areas … such
  as underwriting, trading or overall firm compliance with financial
  responsibilities"; the Series 24 "does not cover municipal securities or
  options"; passing the 9/10 does not make one a Registered Options Principal
  or Municipal Securities Principal `[s910.txt]`. `[T1]`
- **Correspondence versus retail communication approval.** Retail
  communications need principal approval before use; options correspondence
  "need not be approved by a Registered Options Principal prior to use"
  (Rule 2220); institutional communications are reviewed under WSPs. `[T7, T10]`
- **Complaint deadlines.** Rule 4530(a) events: "not later than 30 calendar
  days". Quarterly complaint statistics: "by the 15th day of the month
  following the calendar quarter". Complaint files: "at least four years"
  (Rule 4513). `[T5]`
- **Options account timing.** Background information goes to the customer
  "for verification within fifteen (15) days after the customer's account
  has been approved", and the written options agreement is due "Within
  fifteen (15) days" (Rule 2360). `[T8]`
- **Large options position reports start at 200 contracts** on the same side
  of the market (Rule 2360(b)(5)). `[T9]`
- **Cboe rule numbers in the outline may be stale.** The outline cites Cboe
  rules by number (e.g. 9.1, 9.9, 6.20, 8.30). Cboe's rulebook was not
  fetched, so no card should cite a Cboe rule number until checked. Use the
  FINRA Rule 2360/2220 equivalents. `[T8–T10]`

## Languages

FINRA's pages give no language other than English and I found no translated
exam. FINRA offers extra time instead: LEP-eligible candidates "will receive
an additional 30 minutes for an exam that is up to two hours in length and an
additional 60 minutes for an exam over two hours in length" (LEP FAQ). That
means 30 minutes for the Series 9 and 60 for the Series 10. For sponsored
candidates, the firm requests this through CRD. I found no official or openly
licensed translation of FINRA rules or the eCFR sections used.

## Counts

29 outline objectives (18 Series 10, 11 Series 9) in 8 functions; 304
concepts (180 core, 124 extra); 171 terms (103 new, 68 topic 0 from the SIE
and Series 7 decks); 699 budgeted cards after the 10% uplift.

## Not verified

- **Whether FINRA's AI restriction (m) bars this deck's workflow.** Needs a
  lawyer. Also whether naming "FINRA" in the deck notice needs permission,
  given "Third parties may not use the Licensed Marks without FINRA's prior
  written permission".
- **Whether a newer Series 9/10 outline exists.** The exam page links only
  `Series_9-10_Outline.pdf` (© 2020). No revision date was found on the page.
- **Current Rule 3110 supplementary material.** The saved rule page shows .01
  to .17. Notice 24-02 says .18 and .19 took effect in 2024. The pilot's end
  date and any later change were not checked.
- **What SR-FINRA-2026-014 changed in Rule 1210.** Only the current text was
  read.
- **Details of the Rule 4210 intraday margin amendments** (effective 4 June
  2026) and any transition rules. The concept `s910.intraday-margin` says to
  check the current text.
- **Cboe rules** (options account opening, guaranteed accounts, obvious
  errors, order origin codes, DPM and floor broker roles, trading rotation).
  Cboe's site and terms were not fetched. Concepts that depend on them cite
  the outline page and carry "Cboe rule text not fetched".
- **MSRB rules** (19 concepts, tier D). They need an SEC-hosted text, such as
  the SEC's approval orders in the Federal Register. That was not tried.
- **FINRA By-Laws** (Articles III, V and XII: qualification, U5 notice,
  retention of jurisdiction, disciplinary proceedings) and the 9000, 12000
  and 13000 Series beyond Rule 12206 were not fetched. The concepts cite the
  outline page.
- **NYSE Rules 408, 409 and 472; FINRA Rules 2122, 2261, 5210–5240, 6130,
  6140, 8320, 11550, 11574, 11740 and 11810; Advisers Act Section 205;
  Investment Company Act sections other than 22(e); Trust Indenture Act.**
  Not fetched. The concepts cite the outline page.
- **Delivery method (test centre or online) and score reporting** for the
  Series 9/10. The page and outline say only "administered via computer".
- **Fees** were read on the exam page on 25 September 2026. The candidate
  list's figures ($175 and $235) match.
