# Research brief: IAPP Certified Information Privacy Professional/Europe (CIPP/E)

Slug: `iapp-cippe`. Family prefix: `cippe`. No prerequisite deck. Researched
25 September 2026. Every fact below was read in a source fetched during this
task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/iapp-cippe/`
(IAPP files at the top level; EU texts in `eu/`, EDPB pages in `edpb/`, CJEU
pages in `curia/`). `#page=N` counts form feeds in the pdftotext output.

**How the EU texts were fetched.** EUR-Lex (`eur-lex.europa.eu`) answers
automated requests with an AWS WAF challenge (`x-amzn-waf-action: challenge`,
HTTP 202, empty body), so no EUR-Lex page was read and nothing was done to get
round it. The same texts were taken from the Publications Office's own Cellar
repository (`https://publications.europa.eu/resource/celex/<CELEX>`), which
serves the Official Journal files by content negotiation. Concept sources point
to those Cellar URLs, with the document's own anchors (`#art_5`, `#rct_26`).
Writers may swap in the matching EUR-Lex ELI link for display. The Publications
Office says reuse conditions for Cellar content are available on request (see
Naming and Not verified).

## Topics

| Topic | Name | BoK domain (blueprint min–max questions) |
|---|---|---|
| T1 | Introduction to European data protection | I (7–13) |
| T2 | GDPR concepts and security of personal data | II.A (3–5), II.B (7–11) |
| T3 | Data subjects' rights | II.C (8–12) |
| T4 | Processing principles, lawful bases and transparency | III.A (2–4), III.B (3–5), III.C (4–6) |
| T5 | International data transfers | III.D (4–6) |
| T6 | Scope, accountability, supervision and enforcement | IV (8–18) |
| T7 | Compliance in practice: workplace, surveillance, marketing and technology | V (8–16) |

Domain II (18–28) is split in two because rights are a large, separate block.
Domain III is split because transfers carry their own case law.

## Exam facts

All read in the raw text. Sources: CIPP/E page `[cippe.txt]`
(https://iapp.org/certify/cippe); BoK `[bok-raw.txt]`; Candidate Handbook
`[handbook-raw.txt]` (PDF linked from the CIPP/E page); FAQs `[faqs.txt]`
(https://iapp.org/certify/faqs); CPE policy `[cpe.txt]`.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | IAPP | "© 2026 IAPP. All rights reserved." `[cippe.txt]` | No |
| Accreditation | ANAB, ISO 17024 | "The IAPP's CIPM, CIPP/E, CIPP/US and CIPT credentials are accredited by the ANSI National Accreditation Board (ANAB) under the International Organization for Standardization (ISO) standard 17024: 2012." BoK p2 | No |
| Outline version | BoK 1.3.3, effective 1 Sept. 2025 | "Approved on: 4 March 2025 … Effective date: 1 Sept. 2025 Version: 1.3.3 Supersedes: 1.3.2" BoK p2–12 | Yes, yearly |
| Update cycle | Reviewed yearly; 90 days' notice | "The BoK is reviewed and, if necessary, updated every year; changes are reflected in the annual exam updates and communicated to candidates at least 90 days before the new content appears in the exam." BoK p2. "Approximately 10% to 15% of the exam content is changed during annual updates." Handbook p14 | Yes |
| Questions and time | 90 questions, 2.5 hours | FAQ chart: "CIPP/E 90 2.5 hours" `[faqs.txt]` | Occasionally |
| Scored vs unscored | Not found | Handbook: "The number of scored and unscored questions on the exam is listed on the designation's page on the IAPP website." The CIPP/E page text fetched does not show it. | — |
| Format | Multiple choice, some multi-select and scenario-based | "All IAPP exams are comprised of multiple choice questions with one or more correct answers." Handbook p9. "Multi-select questions ask test takers to select a specific number of correct responses … No partial credit is awarded." `[faqs.txt]` | No |
| Break | Optional 15 minutes at halfway; first half locked | "Halfway through the exam, the candidate will be offered a 15-minute break. This break divides the exam into two distinct halves … The candidate cannot return to the first half after submission." Handbook p9 | Rarely |
| Pass mark | 300 on a 100–500 scale | "All core IAPP exams are scored on a scale from 100–500 with a passing score as 300 or above." Handbook p13. "The passing score for all IAPP exams is 300 (which does not represent 60%)" `[faqs.txt]` | No |
| Delivery | Pearson VUE test centre or OnVUE online | Handbook §IV–V; `[faqs.txt]` "Our remote proctored testing option uses Pearson VUE's OnVUE software." | Rarely |
| Purchase window | Take within one year of purchase | "All IAPP exams must be scheduled and taken within one year of purchase." Handbook p7 | Rarely |
| Retakes | New purchase; seven-day wait | "Candidates who do not successfully pass their exam may purchase a new exam after their exam results reflect in their MyIAPP profile. Retake candidates will not be able to schedule an appointment for a date sooner than seven days after their prior attempt." Handbook p14 | Rarely |
| Validity | Two-year term; 20 CPE hours; fee or membership | "All AIGP, CIPP®, CIPM and CIPT™ holders must meet two minimum requirements over the two-year term of their certification … (a) pay a certification maintenance fee … and (b) submit evidence of 20 hours of continuing professional education" `[cpe.txt]` (version 3.3.1, effective 7 April 2026) | Rarely |
| Fees | CMF USD 250 per term or membership USD 295 a year; exam price not read | "certification maintenance fee (CMF) of USD250 for a certification term or become an IAPP member for USD295 annually" `[faqs.txt]` | Yes |
| Handbook version | 5.3.2, effective 1 June 2026 | Handbook page footers | Yes |

## Naming

- **IAPP terms.** Site content is for "personal (professional), noncommercial
  use" and may be copied "for personal use only" (https://iapp.org/about/conditions-of-use,
  §2.1–2.2). No trademark or naming guideline was found on the pages fetched.
  The CPE policy prints "CIPP®" and "CIPT™"; the BoK and the CIPP/E page print
  "CIPP/E" with no symbol. The handbook binds only certificants on the use of
  "designations and the seals".
- **Third-party materials.** "Any exam preparation materials produced or
  distributed by any enterprise or individual other than the IAPP and its
  official training partners (OTPs) are not endorsed by the IAPP" (Handbook
  p16). This is a disclaimer, not a ban. The handbook also says "Candidates who
  knowingly access this illegally-obtained exam content through exam 'dump
  sites' … could face disciplinary action". No clause like CompTIA's or PMI's
  was found, so IAPP is not a §5 body on present evidence.
- **The BoK is tier C.** Never reproduce the BoK text or its sample retired
  questions (BoK p3). Topic labels above are our own; the outline section below
  paraphrases the performance indicators and cites BoK pages.
- **How §4 applies.** Use the "Everyone else" pattern. Title: `[Site name] deck
  for the IAPP Certified Information Privacy Professional/Europe (CIPP/E)
  exam`. The owner's full legal name was not read in any fetched source, so the
  notice says "the IAPP".
- **EU material.** EU legislation is tier B under CONTENT-POLICY §3. The
  europa.eu, Commission and Publications Office sites license their own EU-owned
  content under CC BY 4.0. The EDPB and CJEU notices allow reuse with
  acknowledgement and no distortion (quoted in `-sources.json`). Industrial
  property, "trade marks, registered designs, logos and names", is excluded from
  the Commission's reuse policy (https://commission.europa.eu/legal-notice_en),
  so no EU emblem.
- **Attribution line for tier-B cards.** "Source: [act or document], © European
  Union, [publisher]" with the Cellar or EUR-Lex link. EDPB: acknowledge "the
  European Data Protection Board". CJEU: "Court of Justice of the European
  Union".

**Deck notice:**

> CIPP/E and CIPP are trademarks of the IAPP. This deck is independent and is
> not affiliated with, sponsored, endorsed or approved by the IAPP. It is not
> an IAPP training product and contains no IAPP exam content. EU legislation,
> EDPB guidelines and CJEU judgments are reproduced or paraphrased with
> acknowledgement of their source; only the Official Journal of the European
> Union is authentic.

The last clause follows the Commission legal notice: "Only the Official
Journal of the European Union (the printed edition or, since 1 July 2013, the
electronic edition on the EUR-Lex website) is authentic and produces legal
effects."

## Outline (BoK 1.3.3, owner's order)

Blueprint numbers are the minimum–maximum questions per competency. Each
performance indicator is paraphrased; the page is the BoK PDF page.

### Domain I: Introduction to European data protection (7–13), p4

- **I.A Origins and historical context (1–3)**
  - Historical rationale for data protection [T1]
  - Human rights and early laws: OECD Guidelines, Treaty of Lisbon, Convention 108 and its update, Convention 108+ [T1]
  - Why a harmonised European approach developed, and its challenges, e.g. Brexit [T1]
- **I.B EU institutions (1–2)**
  - Roles of the Council of Europe, the European Court of Human Rights, the European Parliament, the European Commission, the European Council and the CJEU [T1]
- **I.C Legislative framework (5–8)**
  - Early legislation: the CoE Convention of 1981, Directive 95/46/EC, the ePrivacy Directive 2002/58/EC as amended, the e-Commerce Directive 2000/31/EC [T1]
  - Principles and goals of the GDPR and related legislation, the NIS/NIS 2 Directives and the EU AI Act [T1]

### Domain II: European data protection law and regulation (18–28), pp5–6

- **II.A Basic GDPR concepts (3–5)**
  - Personal data, sensitive data and special categories [T2]
  - Pseudonymous versus anonymous data [T2]
  - Key principles of lawful processing [T4]
  - Controller and processor, with EDPB guidance [T2]
  - Data subject [T2]
- **II.B Security of personal data (7–11)**
  - Appropriate technical and organisational measures, e.g. encryption and access controls [T2]
  - Breach notification, with EDPB guidance [T2]
  - Vendor management [T2]
  - Sharing personal data with third parties [T2] [T4]
- **II.C Data subjects' rights (8–12)**
  - Access, with EDPB guidance [T3]
  - Rectification [T3]
  - Erasure / right to be forgotten, with EDPB guidance [T3]
  - Restriction and objection [T3]
  - Consent and its withdrawal [T3]
  - Automated decision-making and profiling [T3]
  - Data portability [T3]
  - Restrictions on rights, with EDPB guidance [T3]

### Domain III: European data processing (13–21), pp7–8

- **III.A Processing principles (2–4)**
  - Fairness and lawfulness, purpose limitation, proportionality, accuracy, storage limitation, integrity and confidentiality [T4]
- **III.B Lawful processing bases (3–5)**
  - Consent, contract, legal obligation, vital interests, public interest, legitimate interest, with EDPB guidance [T4]
  - Special categories [T4]
- **III.C Information provision (4–6)**
  - Transparency principle [T4]
  - Components of privacy notices [T4]
  - Layered notices [T4]
- **III.D International transfers (4–6)**
  - Rationale for prohibiting transfers, with EDPB guidance [T5]
  - Adequacy [T5]
  - Safe Harbor, Privacy Shield, the Schrems decisions, and the EU-US Data Privacy Framework [T5]
  - SCCs and BCRs [T5]
  - Codes of conduct and certifications, with EDPB guidance [T5]
  - Derogations, with EDPB guidance [T5]
  - Transfer impact assessments, with EDPB guidance [T5]

### Domain IV: Scope and accountability (8–18), pp9–10

- **IV.A Territorial and material scope (2–4)**
  - Establishment and non-establishment, with EDPB guidance [T6]
  - Scope of processing and exemptions [T6]
- **IV.B Accountability (4–8)**
  - Controllers, joint controllers and processors, including by design and by default [T6] [T2]
  - Documentation and cooperation with regulators [T6]
  - DPIAs and when they are required [T6]
  - Mandatory DPOs [T6]
  - Auditing in privacy programmes [T6]
- **IV.C Supervision and enforcement (1–3)**
  - EDPB and EDPS [T6]
  - Other supervisory authorities [T6]
  - Lead supervisory authority, with EDPB guidance [T6]
- **IV.D Consequences of violations (1–3)**
  - Procedures and fines [T6]
  - Class actions [T6]
  - Compensation [T6]

### Domain V: Compliance (8–16), pp11–12

- **V.A Workplace (3–5)**
  - Legal basis for employee data, personnel records, risks [T7]
  - Workplace monitoring and data loss prevention [T7]
  - BYOD [T7]
  - Works councils and whistleblowing [T7]
- **V.B Surveillance (1–3)**
  - Surveillance by public authorities [T7]
  - Interception of communications [T7]
  - CCTV, geolocation, biometrics and facial recognition, with EDPB guidance [T7]
- **V.C Direct marketing (2–4)**
  - Processing for marketing [T7]
  - Online behavioural targeting, with EDPB guidance [T7]
- **V.D Internet technology and communications (2–4)**
  - Cloud computing [T7]
  - Cookies [T7]
  - Social media, e.g. dark patterns, with EDPB guidance [T7]
  - Search engine marketing [T7]
  - AI and machine learning, compliance and ethics [T7]

That is 18 competencies and 62 performance indicators. Domain blueprint
minima sum to 54 and maxima to 96 against 90 questions; the BoK gives no
fixed weights.

## Traps

- [T6] The two fine tiers: Art. 83(4) is "up to 10 000 000 EUR, or … up to 2 %"
  and Art. 83(5) "up to 20 000 000 EUR, or … up to 4 % of the total worldwide
  annual turnover of the preceding financial year, whichever is higher".
  Candidates swap which infringements sit in which tier.
- [T1] The BoK lists the Council of Europe and the European Court of Human
  Rights under "European Union institutions" (p4). The EU's own page names
  "The 4 main EU institutions" (Parliament, European Council, Council of the EU,
  Commission) plus the CJEU, ECB and Court of Auditors. The Council of Europe
  is not among them. Teach the difference explicitly.
- [T1] European Council versus Council of the EU: the European Council "does
  not adopt laws except for possible EU Treaty amendments"; the Council of the
  EU "takes decisions on European laws jointly with the European Parliament"
  (europa.eu institutions page).
- [T1] Only the Commission proposes: it "uses its 'right of initiative' to put
  forward proposals for new laws". The BoK's own sample question tests this
  (p3).
- [T7] Cookie rule versions. The original 2002 Art. 5(3) required that the user
  "is offered the right to refuse". The consolidated text (19.12.2009) requires
  that the user "has given his or her consent". Old material teaching opt-out is
  still around.
- [T5] Schrems I (6 October 2015) ruled "Decision 2000/520 is invalid" (Safe
  Harbour). Schrems II (16 July 2020) ruled Privacy Shield Decision 2016/1250
  "is invalid" but found "nothing to affect the validity" of the SCC Decision
  2010/87. Candidates think Schrems II struck down SCCs.
- [T5] The SCCs in force are Decision (EU) 2021/914 (4 June 2021), with four
  modules (C2C, C2P, P2P, P2C). Material citing 2010/87 is outdated.
- [T5] The EU-US Data Privacy Framework is an adequacy decision, (EU) 2023/1795
  of 10 July 2023, not a set of clauses.
- [T1] UK adequacy: Decision (EU) 2021/1772 says it "shall expire on 27 June
  2025, unless extended". What happened after that date was not checked (see
  Not verified), so cards must not state the current UK position.
- [T3] Response time: "within one month of receipt", extendable "by two further
  months", but the data subject must be told of the extension within one month
  (Art. 12(3)).
- [T3] Child's consent: 16, and Member States may lower it but "not below 13
  years" (Art. 8(1)). Only for information society services offered directly
  to a child.
- [T2] Breach timing: 72 hours to the authority "where feasible"; the processor
  notifies the controller "without undue delay", not within 72 hours
  (Art. 33(1)–(2)). Communication to individuals is only for "high risk"
  (Art. 34).
- [T1] NIS 2 also uses 72 hours, for the incident notification, but adds a 24-hour
  early warning (NIS 2 recital: "an early warning without undue delay and in
  any event within 24 hours"). Do not mix it up with the GDPR's 72 hours.
- [T2] Pseudonymised data remain personal data; only anonymous information is
  outside the GDPR (recital 26).
- [T4] Public authorities cannot use legitimate interests "in the performance
  of their tasks" (Art. 6(1), last subparagraph).
- [T4] The BoK says "proportionality" in III.A; the GDPR principle is data
  minimisation (Art. 5(1)(c)). Teach the GDPR name.
- [T6] Records of processing: the under-250 derogation has exceptions (Art.
  30(5): risky, non-occasional, or special-category or criminal data).
- [T6] Prior consultation: the authority has "up to eight weeks", which "may be
  extended by six weeks" (Art. 36(2)).
- [T6] EDPB fining guidance is moving: the EDPB listed "Guidelines 04/2026 on
  the application of the power to impose administrative fines in relation to
  other corrective powers" on 17 September 2026, and news on 21 September 2026
  says the "EDPB harmonises fining methodology". Check before writing fine cards.
- [T1] AI Act dates: it applies from 2 August 2026, with Chapters I and II from
  2 February 2025, several chapters from 2 August 2025 and Art. 6(1) from
  2 August 2027 (Art. 113). A candidate sitting now faces a partly applicable Act.
- [T7] Direct marketing: an absolute right to object (Art. 21(3)); the ePrivacy
  soft opt-in covers only the controller's "own similar products or services".
- [T6] The household exemption and the other Art. 2(2) exclusions; the Law
  Enforcement Directive, not the GDPR, covers police processing.

## Languages

The exam is offered in English, French and German: "The CIPP/E and CIPM exams
have been translated into French and German … These translated exams are
accompanied by Bodies of Knowledge in their respective languages" (FAQs). The
French and German BoKs (version 1.3.3) were saved. "An IAPP-developed
translation dictionary is available on the testing screen". The handbook "is
available only in English". All EU acts and CJEU judgments exist in every
official EU language, and the Cellar serves them by `Accept-Language`. French
and German versions were not fetched. EDPB guidelines are published in English
first; translations were not checked.

## Not verified

- **EUR-Lex reuse notice.** Blocked by a WAF challenge. The lead's claim that
  EU legislation on EUR-Lex is reusable under Decision 2011/833/EU was not
  confirmed. The decision's own scope is "public documents produced by the
  Commission" (Art. 2(1)); the GDPR, NIS 2, the AI Act and the directives are
  acts of the Parliament and Council. Tier B for EU legislation rests on
  CONTENT-POLICY §3, not on a notice read here. The Publications Office asks
  reusers of Cellar content to contact op-copyright for conditions. Ask a human
  to read https://eur-lex.europa.eu/content/legal-notice/legal-notice.html in a
  browser before launch.
- **Scored/unscored split and exam price** for CIPP/E: not on the pages fetched.
- **Charter of Fundamental Rights full text** (Cellar returned 404 for
  12012P/TXT and 12016P/TXT). Charter Art. 8 and TFEU Art. 16(1) are sourced to
  GDPR recital 1; Charter Arts 7, 8 and 47 appear in both Schrems judgments.
- **Convention 108, Convention 108+ and ECtHR:** coe.int returned a Cloudflare
  challenge, not bypassed. Convention 108's date is sourced to GDPR recital
  105. Nothing on 108+ or on the Council of Europe's structure was read.
- **OECD Privacy Guidelines:** legalinstruments.oecd.org is a JavaScript app.
  Not read.
- **Layered notices, BYOD, whistleblowing, works councils, search engine
  marketing, employee consent:** no open source was fetched. The concepts point
  to the BoK page and must not be written until a source is found. Candidates:
  Article 29 Working Party guidelines (transparency, WP260), Opinion 2/2017 on
  data processing at work. These are EDPB-endorsed documents; their location
  and terms were not checked.
- **EDPB guidelines:** titles and links come from the EDPB public-consultation
  listing (`edpb/guidelines-list.txt`). Final adopted versions, and whether any
  was later updated, were not opened. Not on that list and so not verified:
  consent guidelines, Art. 49 derogations, the Art. 29 WP DPIA, DPO,
  automated-decision and portability guidelines. EDPB listing pages 6–10
  returned HTTP 502 and were not retried.
- **Amendments after the fetched texts:** any 2025–2026 amendment to the GDPR,
  the AI Act or the ePrivacy Directive (e.g. simplification packages) was not
  checked. The GDPR file is the 2016 OJ text; the AI Act file is the 2024 OJ
  text.
- **UK adequacy after 27 June 2025, and the status of the EU-US DPF** after
  adoption: not checked.
- **IAPP trademark list and full legal name:** not found. "CIPP®" and "CIPT™"
  appear in the CPE policy only.
- **Handbook count:** it says "There are five CIPP certifications for five
  different regions", while the site lists CIPP/AU as new. This does not
  affect CIPP/E.
