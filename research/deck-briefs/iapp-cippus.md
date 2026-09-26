# Research brief: IAPP Certified Information Privacy Professional/United States (CIPP/US)

Slug: `iapp-cippus`. Family prefix: `cippus`. No prerequisite deck. Researched
25 September 2026. Every fact below was read in a source fetched during this
task, except the two EU items marked "reused" (the GDPR and Schrems I texts
fetched by the `iapp-cippe` research the same day). Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/iapp-cippus/`
(IAPP files at the top level; federal statutes and CFR parts in `us/`; state
texts in `state/`; the Constitution, NIST Privacy Framework and EU texts in
`other/`). `#page=N` counts form feeds in the pdftotext output.

**How the laws were fetched.**
- **Federal statutes:** from uscode.house.gov (its robots.txt blocks only the
  Slurp crawler). Each page says "Text contains those laws in effect on
  September 24, 2026".
- **Federal regulations:** from govinfo's annual CFR editions. Title 16
  (FTC) and title 12 (Reg P) are the 2026 editions. Titles 34, 42 and 45 (FERPA,
  Part 2, HIPAA) are the 2025 editions. ecfr.gov was not tried.
- **California:** leginfo.legislature.ca.gov was **not** used, because its
  robots.txt says `User-agent: * Disallow: /`. The CCPA, the CCPA regulations
  and the Delete Act come from the California Privacy Protection Agency's own
  PDFs (cppa.ca.gov, robots.txt allows them).
- **hhs.gov:** returned HTTP 403 "Access Denied" to a plain request, so no HHS
  guidance was read. HIPAA comes from the CFR.

## Topics

| Topic | Name | BoK competencies (blueprint min–max questions) |
|---|---|---|
| T1 | U.S. legal framework and enforcement | I.A (3–5), I.B (5–7) |
| T2 | Information management and international transfers | I.C (18–22) |
| T3 | FTC and health privacy | II.A (3–5), II.B (3–5) |
| T4 | Financial and education privacy | II.C (3–5), II.D (1–3) |
| T5 | Telecommunications and marketing | II.E (2–4) |
| T6 | Government and court access | III (3–5) |
| T7 | Workplace privacy | IV (4–6) |
| T8 | Comprehensive state privacy laws | V.A (1–2), V.B (13–17), part |
| T9 | State health, biometric, AI and online laws | V.B, part |
| T10 | State breach notification and data security | V.B (security), V.C (2–4) |

I.C is one competency but is the largest block on the exam, so it gets a topic
of its own. V.B is split three ways because it mixes comprehensive laws, sector
laws and security duties.

## Exam facts

All read in the raw text. Sources: the CIPP/US page `[cippus.txt]`
(https://iapp.org/certify/cippus); the BoK `[bok-raw.txt]` (PDF linked from that
page); the Candidate Handbook `[handbook-raw.txt]`; the FAQs `[faqs.txt]`
(https://iapp.org/certify/faqs); the CPE policy `[cpe-raw.txt]`.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | IAPP | "© 2026 IAPP. All rights reserved." `[cippus.txt]` | No |
| Accreditation | ANAB, ISO 17024 | "The IAPP's CIPM, CIPP/E, CIPP/US and CIPT credentials are accredited by the ANSI National Accreditation Board (ANAB) under the International Organization for Standardization (ISO) standard 17024: 2012." BoK p2 | No |
| Outline version | BoK 2.6.1, effective 1 Sept. 2025 | "Approved by: CIPP/US EDB Approved on: 3 March 2025 Effective date: 1 Sept. 2025 Version: 2.6.1 Supersedes: 2.6" BoK p2–13 | Yes, yearly |
| Update cycle | Reviewed yearly; 90 days' notice | "The BoK is reviewed and, if necessary, updated every year; changes are reflected in the annual exam updates and communicated to candidates at least 90 days before the new content appears in the exam." BoK p2. "Approximately 10% to 15% of the exam content is changed during annual updates." Handbook p14 | Yes |
| Questions and time | 90 questions, 2.5 hours | FAQ chart: "CIPP/US 90 2.5 hours" `[faqs.txt]` | Occasionally |
| Scored vs unscored | Not found | Handbook p13: "The number of scored and unscored questions on the exam is listed on the ..." designation page. The CIPP/US page text fetched does not show it. | — |
| Format | Multiple choice; some multi-select and scenario-based | "All IAPP exams are comprised of multiple choice questions with one or more correct answers." Handbook p9. "All exam questions are multiple choice and some are scenario-based ... No partial credit is awarded." `[faqs.txt]` | No |
| Break | Optional 15 minutes halfway | "Halfway through the exam, the candidate will be offered a 15-minute break. This break divides the exam ..." Handbook p9 | Rarely |
| Pass mark | 300 on a 100–500 scale | "All core IAPP exams are scored on a scale from 100–500 with a passing score as 300 or above." Handbook p13. "The passing score for all IAPP exams is 300 (which does not represent 60%)" `[faqs.txt]` | No |
| Score report | Domain percentages only | "you are provided with a section breakdown ... which indicates the percentage of your correct answers per each blueprint domain." `[faqs.txt]` | Rarely |
| Purchase window | Take within one year of purchase | "All IAPP exams must be scheduled and taken within one year of purchase." Handbook p7 | Rarely |
| Retakes | New purchase; seven-day wait | "Candidates who do not successfully pass their exam may purchase a new exam after their exam results reflect in their MyIAPP profile. Retake candidates will not be able to schedule an appointment for a date sooner than seven days after their prior attempt." Handbook p14 | Rarely |
| Validity | Two-year term; 20 CPE hours; fee or membership | "All AIGP, CIPP®, CIPM and CIPT™ holders must meet two minimum requirements over the two-year term of their certification ... (b) submit evidence of 20 hours of ..." CPE policy p2 (version 3.3.1, effective 07 April 2026) | Rarely |
| Fees | CMF USD 250 per term or membership USD 295 a year; exam price not read | "certification maintenance fee (CMF) of USD250 for a certification term or become an IAPP member for USD295 annually" `[faqs.txt]` | Yes |
| Handbook version | 5.3.2, effective 1 June 2026 | Handbook page footers | Yes |

## Naming

- **IAPP terms.** Site content is for "personal (professional), noncommercial
  use" and may be copied "for personal use only"
  (https://iapp.org/about/conditions-of-use, §2.1–2.2). No trademark or naming
  guideline was found. The CPE policy prints "CIPP®"; the BoK and the CIPP/US
  page print "CIPP/US" with no symbol.
- **Third-party materials.** "Any exam preparation materials produced or
  distributed by any enterprise or individual other than the IAPP and its
  official training partners (OTPs) are not endorsed by the ..." IAPP (Handbook p16).
  This is a disclaimer, not a ban. The handbook also warns candidates who
  "knowingly access this illegally-obtained exam content through exam 'dump
  sites'". No clause like CompTIA's or PMI's was found, so IAPP is not a §5
  body on present evidence (the same finding as `iapp-cippe`).
- **The BoK is tier C.** Never reproduce its text or the sample retired
  questions on BoK p3. Topic labels are our own. The outline below paraphrases
  the performance indicators and cites BoK pages.
- **How §4 applies.** Use the "Everyone else" pattern. Title: `[Site name] deck
  for the IAPP Certified Information Privacy Professional/United States
  (CIPP/US) exam`. The owner's full legal name was not read, so the notice says
  "the IAPP".
- **US federal material is tier B.** 17 U.S.C. 105: "Copyright protection under
  this title is not available for any work of the United States Government".
  This covers the U.S. Code, the CFR, the Constitution document and the NIST
  Privacy Framework.
- **California material is tier B.** cppa.ca.gov links the CA.gov Conditions of
  Use, which say: "In general, information presented on this website, unless
  otherwise indicated, is considered in the public domain. It may be
  distributed or copied as permitted by law."
- **Other states and NYC are tier C** until their terms are read. Virginia,
  Washington, Nevada, Utah, Colorado and NYC pages showed no licence statement,
  and none was checked. Cards paraphrase these laws and cite the section.
- **EU texts (Schrems II, SCC and DPF decisions)** are treated as in
  `iapp-cippe`: tier B under CONTENT-POLICY §3, with the same unresolved
  EUR-Lex notice.

**Deck notice:**

> CIPP/US and CIPP are trademarks of the IAPP. This deck is independent and is
> not affiliated with, sponsored, endorsed or approved by the IAPP. It is not
> an IAPP training product and contains no IAPP exam content. U.S. federal
> statutes and regulations, and California texts published by the California
> Privacy Protection Agency, are quoted or paraphrased from the official
> sources cited on each card; other state laws are paraphrased. Nothing in this
> deck is legal advice.

## Outline (BoK 2.6.1, owner's order)

Numbers are the minimum–maximum questions. Each performance indicator is
paraphrased; p = BoK PDF page.

### Domain I: The U.S. privacy environment (27–33), pp4–6

- **I.A U.S. legal framework (3–5)**
  - Branches of government and their roles [T1]
  - Sources of law: constitutions, legislation, regulations and rules, case law, common law, contract law [T1]
  - Scope and application, jurisdiction, preemption, private right of action [T1]
  - Roles and documents of the FTC, FCC, DoC, HHS, banking regulators (Federal Reserve, OCC), state AGs and state insurance departments [T1]
  - Self-regulatory models [T1]
- **I.B Enforcement framework (5–7)**
  - Contract, tort and civil enforcement; criminal versus civil liability [T1]
  - Fiduciary duty [T1]
  - Negligence and UDAP laws [T1]
  - Purpose of federal and state enforcement, and who enforces (agencies, DOJ, state AGs, the CPPA) [T1]
  - Cross-border enforcement and GPEN [T1]
  - Self-regulatory enforcement (PCI, trust marks) [T1]
- **I.C Information management (18–22)**
  - Data inventory, classification, flow mapping, sharing and transfers [T2]
  - Privacy programme basics: training, vendor risk, data processing agreements, cloud, third-party sharing, incident response (ransomware, vendor incidents) [T2]
  - Accountability and due diligence [T2]
  - User preferences, retention and disposal, privacy notices [T2]
  - Online privacy issues such as tracking and profiling [T2]
  - International transfers and the Schrems decisions [T2]
  - SCCs and the EU-U.S. Data Privacy Framework [T2]
  - Multinational considerations (GDPR, APEC principles) and conflicts such as EU data protection versus e-discovery [T2]
  - How US law intersects with the GDPR and the Swiss FADP [T2]

### Domain II: Federal privacy laws (15–19), pp7–8

- **II.A FTC (3–5)**
  - Acts and regulations the FTC oversees: the FTC Act and COPPA [T3]
  - Purpose of FTC privacy and security enforcement [T3]
  - Future enforcement priorities (data brokers, IoT, AI, biometrics, unregulated data) [T3]
- **II.B Healthcare (3–5)**
  - HIPAA privacy and security rules, and online tracking by covered entities and business associates [T3]
  - HITECH Act of 2009 [T3]
  - 21st Century Cures Act and 42 CFR Part 2 [T3]
- **II.C Financial (3–5)**
  - FCRA (1970) and FACTA (2003) [T4]
  - GLBA privacy and safeguards rules, and state-law exemptions [T4]
  - Red Flags Rule [T4]
  - Dodd-Frank Act (2010) [T4]
  - CFPB roles [T4]
  - Online banking issues: biometrics, third-party tracking, security [T4]
  - Mergers, acquisitions and divestitures [T4]
- **II.D Education (1–3)**
  - FERPA (1974) [T4]
  - Edtech risks and the role of regulation [T4]
- **II.E Telecommunications and marketing (2–4)**
  - TSR, TCPA, CAN-SPAM, JFPA, Telecommunications Act of 1996, Cable Act of 1984, VPPA (with its 2012 amendment), DPPA [T5]
  - Do-Not-Call registry and the Wireless Domain Registry [T5]
  - Digital advertising [T5]
  - Web scraping [T5]
  - Data ethics [T5]

### Domain III: Government and court access (3–5), p9

- **III.A Law enforcement (1–2)**
  - Right to Financial Privacy Act of 1978 and Bank Secrecy Act of 1970 [T6]
  - ECPA and CALEA: wiretaps, subpoenas, warrants [T6]
- **III.B National security (1–3)**
  - FISA and section 702 (2008 amendments), stored records, national security letters [T6]
  - USA PATRIOT Act and USA FREEDOM Act of 2015 [T6]
  - Cybersecurity Information Sharing Act of 2015 [T6]
- **III.C Civil litigation (1–2)**
  - Compelled disclosure of media information and the Privacy Protection Act of 1980 [T6]
  - Electronic discovery [T6]

### Domain IV: Workplace privacy (4–6), pp10–11

- **IV.A Workplace issues (1–3)**
  - Notice, expectations of privacy, and anti-discrimination laws (Civil Rights Act of 1964, ADA, GINA) [T7]
  - Agencies: FTC, Department of Labor, EEOC, NLRB, OSHA [T7]
- **IV.B Before, during and after employment (2–4)**
  - Pre-employment: automated employment decision tools and bias, background checks, personality tests, polygraph, drug and alcohol tests, social media, union issues [T7] [T9]
  - Monitoring technologies: computers, social media, biometrics, LBS, wellness, mobile, mail, photography, telephony, video [T7]
  - Employer duties under ECPA [T7]
  - Internal investigations [T7]
  - Post-employment: termination, transition, retention, references [T7]

### Domain V: State privacy laws (17–21), pp12–13

- **V.A Authority (1–2)**
  - Federal versus state authority; state AGs and the CPPA [T8]
- **V.B Key concepts of state privacy and security laws (13–17)**
  - Applicability thresholds, exemptions and data subject rights, including verifiable parental consent [T8]
  - Privacy notices [T8]
  - Assessments, retention and destruction, selling and sharing, data protection agreements [T8]
  - Common state data security requirements [T10]
  - State health data rules: geofencing, Washington MHMDA (2023), Nevada SB 370 (2023), Illinois GIPA class actions [T9]
  - Enforcement: cure periods and penalties [T8]
  - Cookie and online tracking rules [T9]
  - Facial recognition and biometric laws (Illinois, Washington, Texas) [T9]
  - AI bias: NAIC AIS guidelines, NYC AEDT law, California and Colorado ADM rules, Colorado insurance discrimination law [T9]
  - CCPA as amended by the CPRA, the California AADC (A.B. 2273) and the Delete Act (SB 362) [T8]
  - Other major state laws [T8]
- **V.C Breach notification (2–4)**
  - Common elements: definitions, who/when/how, credit monitoring, private right of action [T10]
  - Key differences between states [T10]
  - Recent developments: Pennsylvania SB 696, Utah S.B. 127 [T10]

That is 16 competencies and 69 performance indicators. Domain minima sum to
66 and maxima to 84, against 90 questions. The BoK gives no fixed weights.

## Traps

- [T8] The CCPA revenue threshold is no longer USD 25 million. The CPPA page
  says Civil Code 1798.199.95(d) adjusts it "Every odd-numbered year". From
  1 Jan. 2025 it is "$26,625,000", with a previous amount of "$25,000,000". The
  same page lifts breach damages from $100–$750 to "$107" to "$799" and
  administrative fines to "$2,663" / "$7,988". Expect another adjustment on
  1 Jan. 2027 (not checked).
- [T8] Under-16 opt-in: a business may not sell or share the data of consumers
  "less than 16 years of age" unless, for ages 13 to 16, the consumer, or for
  under-13s the parent, "has affirmatively authorized" it (1798.120). Do not
  confuse this with COPPA's under-13 (15 U.S.C. 6501).
- [T8] CCPA "share" is limited to "cross-con[text behavioral advertising]"
  (1798.140); "sell" is not. Candidates treat them as synonyms.
- [T8] Response deadlines differ. CCPA: "within 45 days of receiving a
  verifiable consumer request". VCDPA: "within 45 days of receipt". FERPA:
  "not more than 45 days". HIPAA access is a different rule (not checked here).
- [T8] The VCDPA keeps a cure period: AG enforcement, and if within the
  "30-day period the controller or processor cures the noticed violation ... no
  action shall be initiated". The CCPA text should be checked before any card
  says California has one.
- [T8] VCDPA thresholds: "at least 100,000 consumers" or "at least 25,000
  consumers and derive over 50 percent of gross revenue from the sale". The
  Colorado summary says "at least 25,000 consumers" with revenue from sales,
  with no 50 per cent test. Candidates mix the two.
- [T8] The CCPA regulations effective 1 Jan. 2026 add Article 9 (cybersecurity
  audits), Article 10 (risk assessments) and Article 11 (automated
  decisionmaking technology). Older material lacks them.
- [T8] The Delete Act's "Delete Request and Opt-out Platform is officially live"
  (cppa.ca.gov). DROP is the deletion mechanism; older material describes it as
  future.
- [T3] COPPA Rule 2026 edition requires "separate verifiable parental consent"
  before disclosure to third parties (16 CFR 312.5). This is newer than most
  prep material.
- [T3] HIPAA breach timing is "in no case later than 60 calendar days after
  discovery". Media notice applies to "more than 500 residents of a State or
  jurisdiction". Breaches under 500 go to HHS "not later than 60 days after the
  end of each calendar year". The FTC Health Breach Notification Rule also uses
  "60 calendar days" but covers non-HIPAA entities.
- [T4] Safeguards Rule: notify the FTC "no later than 30 days after discovery"
  of a notification event involving "at least 500 consumers" (16 CFR 314.4(j)).
  Candidates confuse this with HIPAA's 500 and 60 days.
- [T4] GLBA sets a floor: a state law "is not inconsistent" with it if its
  protection "is greater than the protection provided under this subchapter"
  (15 U.S.C. 6807). HIPAA preempts only "contrary" state law, with
  exceptions (45 CFR 160.203). Teach them as a contrast.
- [T4] FCRA obsolete information: seven years, but the statute of limitations
  applies where longer: "antedate the report by more than seven years or until
  the governing statute of limitations has expired, whichever is the longer
  period" (1681c).
- [T5] CAN-SPAM opt-outs must be honoured within 10 business days ("more than
  10 business days after the receipt of such request"). The TSR calling window
  ends at "9:00 p.m." Numbers are easily swapped.
- [T5] The TCPA private action is "$500 in damages for each such violation"
  (47 U.S.C. 227(b)(3)); the VPPA's liquidated damages are "$2,500". CAN-SPAM
  has no general consumer right of action.
- [T6] The federal Wiretap Act is one-party consent: lawful "where such person
  is a party to the communication or where one of the parties to the
  communication has given prior consent" (18 U.S.C. 2511(2)(d)). Some states
  are stricter. Their laws were not fetched.
- [T6] The Privacy Protection Act of 1980 limits searches for "work product
  materials possessed by a person reasonably believed to have a purpose to
  disseminate to the public" material. It is not a general privacy law.
- [T2] Schrems II (16 July 2020) held the Privacy Shield Decision "is invalid",
  but found "nothing to affect the validity" of the SCC decision. The current
  SCCs are Decision (EU) 2021/914 "of 4 June 2021". The DPF is an adequacy
  decision "of 10 July 2023" that relies on "Executive Order 14086".
- [T9] Washington MHMDA geofence ban: a "virtual boundary that is 2,000 feet or
  less" from a health care facility. Violations are an "unfair or deceptive act
  in trade or commerce" under the Consumer Protection Act, chapter 19.86, which
  is the route to private suits.
- [T9] NYC Local Law 144 requires a "bias audit within one year of the use of
  the tool". DCWP says the notice "must be provided 10 business days prior to
  use".
- [T10] The BoK's "Utah S.B. 127 Cybersecurity Amendments" is the **2023** bill.
  The 2024 S.B. 127 is "Nurse Apprentice Amendments". The 2023 bill requires
  reporting breaches affecting "500 or more Utah residents" to the "Office of
  the Attorney General" and the "Utah Cyber Center".
- [T10] California asks for a sample notice to the AG when a breach affects
  "more than 500 California residents". Nevada requires notice "in the most
  expedient time possible and without unreasonable delay", and folds PCI DSS
  compliance into its security duty (NRS 603A.215).
- [T1] FTC unfairness (section 5(n)) needs "substantial injury to consumers
  which is not reasonably avoidable by consumers themselves and not outweighed
  by countervailing benefits". Public policy "may not serve as a primary basis".

## Languages

The CIPP/US exam appears to be English only. The FAQs list only "The CIPP/E and
CIPM exams" as translated (French, German; CIPM also Chinese and Brazilian
Portuguese), and no translated CIPP/US BoK is linked. US federal and state
texts are published in English only. No official translation of the U.S. Code,
the CFR or the CCPA was looked for.

## Not verified

- **Scored/unscored split and exam price** for CIPP/US: not on the pages
  fetched.
- **California statutes on leginfo:** robots.txt disallows all agents, so the
  California AADC (A.B. 2273), Civil Code 1798.82 (breach notification) and
  CPRA ballot text were not read. The CPPA copies cover the CCPA and the Delete
  Act only. Whether the CCPA still has a cure period was not checked.
- **hhs.gov** (HTTP 403): the HHS online tracking technologies bulletin and all
  HHS guidance are unread. The HIPAA civil money penalty amounts were not
  confirmed, and the HIPAA right-of-access timing was not grepped.
- **Illinois BIPA and GIPA:** ilga.gov failed TLS verification ("unable to get
  local issuer certificate"). Verification was not disabled.
- **Texas CUBI:** statutes.capitol.texas.gov served only a JavaScript shell.
- **Colorado:** only the bill summary pages (SB21-190, SB21-169) were read; the
  act texts sit behind `/rails/active_storage/` paths, which robots.txt
  disallows. Colorado's AI Act and coag.gov (HTTP 202 challenge) were not
  read.
- **NAIC AIS guidelines:** content.naic.org returned 403.
- **Pennsylvania SB 696, Nevada SB 370 bill text** (only NRS 603A, which
  includes the consumer health data provisions, was read), **GPEN, APEC CBPR,
  the Swiss FADP, the PCI Council, the FTC deception policy statement, and the
  Federal Rules of Civil Procedure**: not fetched. Concepts that point to the
  BoK must not be written until a source is found.
- **Wireless Domain Registry:** only the CAN-SPAM wireless section (15 U.S.C.
  7712) was fetched. The FCC registry itself was not read.
- **Workplace topics** (monitoring, drug testing, internal investigations,
  post-employment, expectation of privacy) have no open source yet. EEOC or
  DOL pages are candidates; their terms were not checked.
- **Licences of other state sites** (Virginia LIS, Washington, Nevada, Utah, NYC,
  California AG): not checked, so tier C.
- **Section numbers inside chapter pages** (e.g. 15 U.S.C. 1681c, 6802) are cited
  by section-level uscode URLs that were not fetched one by one. The text was
  read in the chapter page, which has the same content.
- **The GDPR and Schrems I** are reused from `iapp-cippe` and were not refetched
  here.
- **The leads in the prompt:** "HHS guidance on .gov sites" could not be read
  (403); "California's CCPA/CPRA on leginfo" is blocked by robots.txt;
  "ecfr.gov blocks automated reading" was not tested.
