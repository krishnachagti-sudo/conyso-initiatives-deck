# Research brief: IRS Special Enrollment Examination, Part 3: Representation, Practices and Procedures

Slug: `irs-ea-part3`. Family prefix: `ea3`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task, or in the
Part 1 cache (`research/sources/irs-ea-part1/`, and the Part 1 scratch folder),
re-used as BRIEF.md asks. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/irs-ea-part3/`
(IRS PDFs and their pdftotext output in `pdf/`, Internal Revenue Code sections
in `usc/`). `#page=N` counts form feeds in the pdftotext output, so it is the
PDF page, not the printed one. Pages were located by searching for a phrase, so
writers should confirm each page when they write the card.

**Prerequisite deck.** `prerequisiteDecks: ["irs-ea-part1"]`. Topic 0 is the
Part 1 deck. `irs-ea-part3-terms.json` opens with 12 Part 1 terms at topic 0,
with their Part 1 concept ids (`ea.*`) and sources unchanged (ITIN, IP PIN,
filing status, AGI, estimated tax, cancellation of debt, insolvency, IRD,
injured spouse, innocent spouse relief, joint and several liability, claim for
refund). Writers must not redefine them; cards that need them assume the
Part 1 primer. The Part 1 exam-fact sources (EA FAQ, Become an EA, PSI
bulletin, IRS content policy) and two Part 1 PDFs (Form 1040 instructions,
Pub 559) are re-used, and their paths in `irs-ea-part3-sources.json` point at
the Part 1 cache. Everything else was fetched new: Part 3 is procedure and
ethics, which Part 1 barely touches.

**The law that matters.** The 2026-27 window tests law "as amended through
December 31, 2025" (bulletin p15). For Part 3 this is mostly Circular 230 and
the Code's procedure sections, which change rarely, plus a few indexed amounts
(see Traps).

## Topics

| Topic | Name | Outline domain (scored questions) |
|---|---|---|
| T1 | Practice before the IRS and practitioner duties | 1. Practices and Procedures (26): practice, enrolment, Circular 230 duties |
| T2 | Sanctions, preparer standards and penalties | 1. Practices and Procedures (26): sanctions, fraud, "Rules and penalties" |
| T3 | Authorisations and building the case | 2. Representation before the IRS (25): power of attorney, preliminary work, financial situation |
| T4 | Authority, documentation and related issues | 2. Representation before the IRS (25): supporting documents, legal authority, related issues |
| T5 | Collection representation | 3. Specific Areas of Representation (20): collection |
| T6 | Penalty relief, examinations and appeals | 3. Specific Areas of Representation (20): abatement, audits, appeals |
| T7 | Filing process and IRS e-file | 4. Filing Process (14) |

Domains 1 to 3 are each split in two because each mixes two separate bodies of
rules (Circular 230 duties versus penalties; authorisations versus research;
collection versus examination).

## Exam facts

Sources: IRS EA FAQ `[ea-faq.txt]`
(https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agents-frequently-asked-questions),
Become an EA `[become-ea.txt]`
(https://www.irs.gov/tax-professionals/enrolled-agents/become-an-enrolled-agent),
PSI Candidate Information Bulletin, "REVISED August 28, 2026" `[psi-bulletin.txt]`
(https://test-takers.psigov.us/api/content/bulletin/12238). All in the Part 1
cache, fetched 25 September 2026, and re-read in the raw text for this brief.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | Internal Revenue Service; PSI Services develops and runs the exam from 1 March 2026 | "Effective March 1, 2026, the IRS Enrolled Agent Special Enrollment Exam (EA-SEE) is no longer developed and administered by Prometric, LLC. A new vendor, PSI Services, has been selected to develop and administer the exam." `[become-ea.txt]` | Vendor: yes |
| Part | SEE3, Part 3 | "SEE3: Part 3 — Representation, Practices and Procedures" `[psi-bulletin.txt]` p17 | No |
| Split | 26 / 25 / 20 / 14 scored questions | "1. Practices and Procedures – 26 questions 2. Representation before the IRS – 25 questions 3. Specific Areas of Representation – 20 questions 4. Filing Process – 14 questions" `[psi-bulletin.txt]` p17 | Yes (outline revised with the vendor) |
| Law tested | Law as amended through 31 December 2025; calendar year 2025 | "For exams taken between July 1, 2026-February 28, 2027, all references on the examination are to the Internal Revenue Code, Code of Federal Regulations, IRS forms, instructions, and publications, as amended through December 31, 2025. … candidates should not consider any legislation, court decisions, or penalty amounts after December 31, 2025." `[psi-bulletin.txt]` p15 | Yes, every window |
| Study sources named | Code, CFR, Circular 230, IRS forms, instructions, publications | "you may wish to refer to the Internal Revenue Code, Code of Federal Regulations (CFR), Treasury Department Circular 230, and IRS forms, instructions, and publications." `[psi-bulletin.txt]` p15 | No |
| Window | 1 July 2026 to 28 February 2027 (domestic) | "The test this year will be offered from July 1, 2026, to Feb. 28, 2027, for domestic test candidates." `[ea-faq.txt]` | Yes |
| Questions | 100: 85 scored, 15 unscored | "Each part of the SEE contains 100 questions. 85 are scored questions and 15 are experimental non-scored questions." `[ea-faq.txt]` | No |
| Format | Multiple choice, four options | "Each question provides four options from which you…" `[psi-bulletin.txt]` | No |
| Time | 3.5 hours; 4 hours seat time | "Each part is 3.5 hours long. The actual seat time is 4 hours to allow for a tutorial, survey, and two scheduled 10-minute breaks." `[ea-faq.txt]` | No |
| Pass mark | Scaled 500 on 200–800 | "…converting it to a scale that ranges from 200 to 800." "The IRS has set the scaled passing score at 500." `[ea-faq.txt]` | No |
| Order | Any order | "No, examinations can be taken in any order." `[ea-faq.txt]` | No |
| Fee | $317 per part | "The fee to take each part of the SEE is $317." `[ea-faq.txt]` | Yes |
| Retakes | 4 per part per window; 24-hour wait | "Each exam part may be taken 4 times per testing window, which runs from May 1 to the end of February." "…you must allow 24 hours before scheduling another appointment for that same part." `[ea-faq.txt]` | Occasionally |
| Delivery | Remote or test centre; no in-person international testing; international scheduling delayed | "There is no in-person international testing." `[psi-bulletin.txt]`; "Scheduling and testing for international candidates is temporarily delayed. … New start dates have not yet been determined." `[ea-faq.txt]` | Yes |
| Validity | Passed part carries over 3 years | "…carry over passing scores up to three years from the date the candidate passed the examination." `[ea-faq.txt]` | Transition rules change |
| After passing | Apply within one year of passing the third part | "You must apply for enrollment within one year of the date you passed the third examination part." `[ea-faq.txt]` | No |

## Naming

The Part 1 finding applies unchanged: the IRS site names the exam the "Special
Enrollment Examination (SEE)" and "IRS Enrolled Agent Special Enrollment Exam
(EA-SEE)"; PSI names the part "SEE3: Part 3 — Representation, Practices and
Procedures". No trademark claim for "SEE" or "Enrolled Agent" was found. The
IRS content page says IRS-created content "is not subject to copyright and may
be freely copied. Credit is requested", and forbids any IRS or Treasury
"symbol, emblem, seal, insignia or badge … or any colorable imitation" where it
could suggest endorsement (18 U.S.C. § 701, 31 U.S.C. § 333, 31 C.F.R. Part 37).

**How CONTENT-POLICY.md §4 applies.** The IRS is not in §5, so the deck may name
the exam in plain text, with our brand first, e.g. "[Site name] deck for the IRS
Special Enrollment Examination (SEE), Part 3: Representation, Practices and
Procedures". No seal or logo, no "official", no "IRS deck". Credit the IRS.

Part 3 adds one naming point from the source itself: Circular 230 § 10.30
restricts how an enrolled agent may describe the designation (the permitted
wording is "enrolled to represent taxpayers before the Internal Revenue
Service" and variants; pcir230 p23–24). That rule governs practitioners' own
advertising, not this deck, but the deck copy must still never suggest that
the IRS or OPR endorses it.

> **Deck notice.** The Special Enrollment Examination (SEE) is an examination
> of the Internal Revenue Service, administered by PSI Services. This deck is
> independent and is not affiliated with, sponsored, endorsed or approved by
> the Internal Revenue Service, its Office of Professional Responsibility, the
> U.S. Department of the Treasury or PSI Services. It uses Treasury Department
> Circular No. 230, IRS publications and the Internal Revenue Code, which are
> works of the U.S. Government; credit: Internal Revenue Service. Rules and
> amounts are those in force for the 2026-27 testing window (law as amended
> through 31 December 2025).

## Outline (Part 3, bulletin pp. 38–42, owner's order)

The bulletin is tier C, so items are paraphrased here and cards must not copy
its wording. Weights are scored questions out of 85. Bold lines are the
bulletin's sub-headings.

**1. Practices and Procedures — 26 (31%)**
- **Practice before the IRS**
- What counts as practice before the IRS [T1]
- Who may practise, and the extent of each group's rights [T1]
- Requirements for enrolled agents [T1]
- Information to be furnished to the IRS [T1]
- Omission or error on a return, document or affidavit [T1]
- Employing or accepting help from former IRS employees or disbarred or suspended persons [T1]
- Advertising, solicitation and fee information [T1]
- Fees (contingent, unconscionable) [T1]
- Due diligence [T1]
- Conflict of interest [T1]
- Negotiating refund checks [T1][T2]
- Written advice, covered opinions, return positions and preparing returns [T1]
- Continuing education [T1]
- Enrolment cycle and renewal [T1]
- Prompt disposition of matters [T1]
- Returning client records [T1]
- PTIN requirements [T1]
- Supervisory responsibilities [T1]
- Sanctionable acts [T2]
- Incompetence and disreputable conduct [T2]
- OPR sanctions [T2]
- Frivolous returns and submissions [T2]
- Fraudulent transactions (badges of fraud) [T2]
- **Rules and penalties**
- Assessment and appeal of preparer penalties [T2]
- Types of penalties (negligence, substantial understatement, overvaluation) [T2]
- Furnishing a copy of the return to the taxpayer [T2]
- Signing returns and furnishing identifying numbers [T2]
- Keeping copies or lists of returns prepared [T2]
- Preparers employed during a return period (IRC 6060) [T2]
- Preparer due diligence penalties [T2]

**2. Representation before the IRS — 25 (29%)**
- **Power of attorney**
- Purpose of a power of attorney [T3]
- Signature authority (extending the assessment period, closing agreements) [T3]
- Authority the taxpayer grants [T3]
- Limits on signing returns for the taxpayer [T3]
- Completing Form 2848 [T3]
- Other forms of power of attorney (durable) [T3]
- Client privacy and consent to disclose [T3][T2]
- Form 2848 versus Form 8821 [T3]
- Changing or dropping representatives; withdrawal [T3]
- Purpose of the CAF number [T3]
- Conference and practice requirements (Pub 216) [T3]
- **Building the case: preliminary work**
- Identifying the issues with supporting detail [T3]
- Potential criminal aspects [T3]
- Competence, expertise and time [T3][T1]
- Conflict of interest in representation [T3][T1]
- IRS transcripts and e-services [T3]
- **Taxpayer financial situation**
- Ability to pay (installment agreement, offer in compromise, currently not collectible) [T3][T5]
- General financial health (bankruptcy, lawsuits, garnishments, cash flow, assets, insolvency) [T3]
- Third-party research (property assessments, asset values, state and local information) [T3]
- Discharge of tax in bankruptcy [T3]
- IRS Collection Financial Standards [T3]
- **Supporting documentation**
- Financial documents and expense records [T4]
- Legal documents [T4]
- Prior and subsequent returns [T4]
- Other substantive and contemporaneous documents [T4]
- Business entity documents [T4]
- **Legal authority and references**
- Internal Revenue Code and regulations [T4]
- Revenue rulings and revenue procedures [T4]
- Case law [T4]
- IRS forms, instructions and publications [T4]
- Private letter rulings [T4]
- Internal Revenue Manual [T4]
- Authoritative versus non-authoritative material [T4]
- Tax treaties [T4]
- **Related issues**
- Statute of limitations [T4]
- Post-filing correspondence (math error, under-reporting notices) [T4]
- Deadlines and timeliness [T4][T6]
- Third-party correspondence [T4]
- FOIA requests [T4]
- Tax avoidance versus evasion [T2]
- Disclosure statements [T4]
- Taxpayer Advocate Service [T4]
- Identity theft [T4]
- Court levels beyond EA representation [T4]

**3. Specific Areas of Representation — 20 (24%)**
- **Collection**
- Extension of time to pay (Form 1127) [T5]
- Installment agreements [T5]
- Offer in compromise [T5]
- Collection Appeals Program [T5]
- Collection due process (lien, levy, Form 12153) [T5]
- Account adjustments (abatements, refund offsets) [T5]
- Audit reconsideration [T5]
- Representing a decedent [T5]
- Collection notices and Notice of Federal Tax Lien [T5]
- Levy and seizure [T5]
- Currently not collectible [T5]
- Collection summons [T5]
- Collection statute of limitations [T5]
- Trust fund recovery penalty [T5]
- Amended returns and claims for refund (1040-X, 843, statute) [T5]
- Passport revocation [T5]
- **Penalty and interest abatement**
- Penalties that can be abated [T6]
- Grounds for abating or refunding penalties [T6]
- Grounds for abating or refunding interest [T6]
- Interest recalculation [T6]
- How to request abatement [T6]
- **Audits and examinations**
- IRS authority to investigate [T6]
- Practitioner privilege (IRC 7525) [T6]
- Verifying and substantiating return entries [T6]
- IRS authority to fix time and place [T6]
- Steps in the process (initial meeting, information requests) [T6]
- Revenue agent's report and 30-day letter [T6]
- CP2000 and correspondence audits [T6][T4]
- Taxpayer options (agree or appeal) [T6]
- Burden of proof [T6]
- **Appeals**
- Right to appeal examination findings [T6]
- Requesting Appeals consideration (protest) [T6]
- EA at the Appeals conference [T6]
- Settlement function of Appeals [T6]
- The 90-day letter [T6]

**4. Filing Process — 14 (16%)**
- Relying on software (reviewing the output) [T7]
- Miscalculations and duplicate entries [T7]
- How long to keep returns and records [T7]
- Data security [T7]
- E-file application (e-services, EFIN) [T7]
- E-file mandate and exceptions (Form 8948) [T7]
- Advertising standards [T7]
- ERO definition and responsibilities [T7]
- Levels of infractions [T7]
- Staying in the programme [T7]
- EFIN revocation appeal [T7]
- E-file signature authorisation (Forms 8879, 8453) [T7]
- Rejected returns (client notice, IP PIN) [T7]

That is 122 outline items. `irs-ea-part3-concepts.json` maps every one of them:
266 atomic concepts, 7 topics. Items without a dedicated IRS page (third-party
research, interest recalculation, the steps of an exam, duplicate entries) are
mapped to the nearest sourced concept, and noted under Not verified.

## Traps

- [T1] The vendor changed: PSI has run the SEE since 1 March 2026. Prometric-era guides and bulletins are out of date.
- [T1] The outline still says "covered opinions", but the June 2014 Circular 230 does not contain that phrase (grep of pcir230: 0 hits). Written advice is now governed by § 10.37. Older study material teaches the repealed covered-opinion rules.
- [T1] Circular 230 on irs.gov is Rev. 6-2014. The GPO 31 CFR Part 10 (7-1-25 edition) cites no amendment later than T.D. 9668 (12 June 2014), so the 2014 text is still the text in force for this window.
- [T1] CE: 72 hours per three-year cycle including **six** hours of ethics, and at least 16 hours per year including **two** of ethics (pcir230 p12). Candidates mix up the 2 and the 6.
- [T1] Contingent fees are barred except in four cases, one of which is an amended return or claim filed within **120 days** of a written notice of examination (pcir230 p21).
- [T1] Conflict of interest: consent must be informed, in writing, within a reasonable time and "in no event later than 30 days"; keep it **36 months** (pcir230 p23). Advertising copies are also kept 36 months (p24).
- [T1][T2] Refund checks: Circular 230 § 10.31 bars negotiating a client's government check, and IRC 6695(f) penalises it separately. Form 2848 never authorises it (Pub 947 p7).
- [T2] Preparer penalties: 6694(a) is the greater of $1,000 or 50% of the income derived; 6694(b) the greater of $5,000 or 75%. To contest, pay 15% within 30 days and claim a refund (6694(c)).
- [T2] Due diligence penalty: the statute says $500 per failure, indexed (6695(g), (h)); the Form 8867 instructions (Rev. November 2025) give **$650** for a return filed in 2026. Check which figure the window uses (see Not verified).
- [T2] Accuracy-related penalty is 20%; gross valuation misstatement 40%; civil fraud 75% (6662, 6663). A substantial understatement exceeds the greater of 10% of the correct tax or $5,000.
- [T2] "Avoidance of tax is not a criminal offense"; the same IRM section (25.1.1.3.3, Avoidance vs. Evasion) contrasts it with evasion, which conceals or misrepresents.
- [T3] Form 8821 lets someone see information; it never authorises representation (Pub 947 p4). A CAF number is not authority to practise.
- [T3] A new power of attorney for the same matter revokes the earlier one, unless it states that it does not and has a copy of the earlier one attached (Pub 947 p10).
- [T3] A representative may sign the return only in narrow cases, including continuous absence from the U.S. for at least 60 days before the due date (Pub 947 p8).
- [T4] Publications "are nonbinding on the IRS"; revenue rulings "do not have the force and effect of Treasury Department Regulations, but they may be used as precedents"; private letter rulings "may not be used as precedents" (IRM 4.10.7.2.7, 4.10.7.2.6.1, 4.10.7.2.9).
- [T4] Assessment: 3 years from filing; 6 years if more than 25% of gross income is omitted; any time for a false or fraudulent return (6501). Collection: 10 years from assessment (6502). Candidates swap the two.
- [T5] Passport certification: the statute says $50,000, indexed. The IRS page gives **$64,000 for 2025** and $66,000 for 2026. The window tests 2025.
- [T5] OIC: $205 fee and a 20% down payment for a lump-sum offer (Form 656 booklet, April 2026). Low-income certification waives both the fee and the payments.
- [T5] Guaranteed installment agreement: $10,000 or less (6159(c)). Do not confuse with the $50,000 online payment plan limit (Form 9465 instructions).
- [T5] CAP versus CDP: CDP comes after a lien or levy notice, has a 30-day deadline and Tax Court review; CAP has no Tax Court review (Pub 1660).
- [T5] TFRP equals the full unpaid trust fund tax, not a percentage of it (6672).
- [T6] First Time Abate needs a clean prior three years; the IRS says FTA is "transitioning to a new relief called Automatic Exemption from Penalty (AEP), starting Summer 2026". AEP is after the 31 December 2025 cut-off, so the exam still tests FTA.
- [T6] Interest abatement under 6404(e) is for unreasonable IRS errors or delays in ministerial or managerial acts, with six criteria (irs.gov interest abatement page). Do not mix it up with penalty relief for reasonable cause or FTA.
- [T6] Small case request: $25,000 or less per period (Pub 5). Tax Court small case: $50,000 or less (Pub 556). Different forums, different limits.
- [T6] 90-day letter: 90 days to petition the Tax Court, 150 if addressed outside the U.S. (6213).
- [T6] Pub 556 is Rev. September 2013; its dollar and date references may be stale. Prefer the Code and newer forms where they conflict.
- [T7] E-file mandate: 11 or more covered returns a year, counted for the firm in aggregate (Form 8948 instructions).
- [T7] Keep Forms 8878 and 8879 for three years (Pub 1345 p19 and p22). The preparer's own copy or list of returns is also kept 3 years (6107(b)).
- [T7] A rejected return that cannot be fixed: tell the taxpayer within 24 hours; a paper return is timely if filed by the later of the due date or 10 calendar days after the rejection notice (Pub 1345 p25 and p29).
- [T7] A missing IP PIN invalidates the e-signature and the return is rejected (Form 1040 instructions, Part 1 concept `ea.ip-pin`).

## Languages

The pages fetched do not state the exam's language (the Part 1 search of the FAQ
and bulletin for "English" and "language" found nothing). Publication 1 has an
official Spanish edition, Publicación 1SP, "Derechos del Contribuyente",
fetched and saved as `pdf/p1sp.pdf`; it is a U.S. Government work under the same
IRS terms; the English Pub 1 says "Also available in Spanish". No official
translation of Circular 230 was found.

## Not verified

- **Exam language**: no statement found (as for Part 1).
- **International testing dates**: the FAQ says they "have not yet been determined".
- **The 2025 due diligence penalty amount.** I read $650 "for a tax return filed in 2026" (Form 8867 instructions, Rev. November 2025). The amount for returns filed in 2025 was not read. The bulletin says to ignore "penalty amounts after December 31, 2025"; writers must decide which figure is the window's answer from the source, not from memory.
- **The inflation-adjusted 6695(a)–(e) amounts** (statutory $50, cap $25,000). No 2025 figure was read; concepts state the rule without a number.
- **OIC fee and installment agreement fees for 2025.** The Form 656 booklet read is the April 2026 edition ($205); the Form 9465 instructions say new fees took effect 1 July 2024 but the amounts were not pinned down.
- **Several procedural sources are 2026 revisions** (Pub 594 Rev. 1-2026, Form 656 booklet April 2026, Form 56 Rev. June 2026, Form 911 June 2026, Form 14039 February 2026, Pub 4134 Rev. 1-2026, Pub 15 2026). The 2025 editions were not fetched. Nothing read suggests a rule change, but writers should check any number against the Code.
- **eCFR** (ecfr.gov) redirected automated requests to an unblock page, so it was not used. The GPO annual CFR edition was used instead.
- **TFRP page** (irs.gov/.../trust-fund-recovery-penalty) returned 404; the TFRP is cited to IRC 6672 and Pub 15.
- **EA CE page** (irs.gov/.../enrolled-agent-continuing-education-requirements) returned 404; CE is cited to Circular 230 § 10.6.
- **Tax treaties page** (irs.gov "United States income tax treaties A to Z") returned 404; treaties are cited to IRM 4.10.7 (IRB Part II, "Treaties and Tax Legislation").
- **No IRS page found** for: third-party research on assets, "interest recalculation", the step-by-step exam process (information document requests), or duplicate entries. These are mapped to the nearest concept (Collection Financial Standards, interest abatement, Pub 556 exam pages, § 10.22 due diligence).
- **Whether EAs may be admitted to the Tax Court** by its own exam: not read. The deck states only that Circular 230 "does not authorise the practice of law" (§ 10.32) and that court litigation is outside practice before the IRS.
- **26 CFR 301.7216 consent rules** were not fetched (eCFR blocked). Consent is cited to Pub 1345 and IRC 7216.
- **Pub 216** is Rev. 3-92 (Statement of Procedural Rules, 26 CFR 601.501–509). It is what the outline names, but whether it is still current was not checked.
- **Set member counts in the budget** (e.g. 18 items in § 10.51, ten taxpayer rights) were counted from the text for § 10.51 and Pub 1; others are estimates.

## Where the prompt's leads were wrong or incomplete

- The leads were right that Circular 230, Pubs 1, 5, 556, 594, 947, 971, the Form 2848 and 8821 instructions and the IRM are IRS/Treasury works (tier B under the IRS content page), and that the PSI bulletin is tier C.
- Pub 971 (innocent spouse) is not needed as a new source: it is a Part 1 concept (`ea.innocent-spouse`), re-used at topic 0.
- The leads omitted what Part 3 leans on most: the Internal Revenue Code procedure sections (6501, 6502, 6694, 6695, 7525 and others), Pubs 1345 and 3112 for the whole Filing Process domain, the Form 656 booklet, Pub 1660 and Form 12153 for collection appeals.
- Pub 556 is a 2013 revision and Pub 216 a 1992 one: both are current on irs.gov but old.
