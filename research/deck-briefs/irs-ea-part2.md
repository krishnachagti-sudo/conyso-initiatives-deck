# Research brief: IRS Special Enrollment Examination, Part 2: Businesses

Slug: `irs-ea-part2`. Family prefix: `ea2`. Researched 25 September 2026. Every
fact below was read in a source fetched during this task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/irs-ea-part2/`
(IRS PDFs and their pdftotext output are in `pdf/`). `#page=N` counts form
feeds in the pdftotext output, so it is the PDF page, not the printed one.

**Prerequisite deck.** `prerequisiteDecks: ["irs-ea-part1"]`. Part 1 (family
`ea`) already teaches the individual-tax vocabulary this deck leans on.
`irs-ea-part2-terms.json` opens with all 117 Part 1 terms at topic 0, with
their `ea.*` concept ids and Part 1 sources unchanged. This deck adds no second
primer for any of them: basis, adjusted basis, holding period, depreciation
recapture, section 1245 and 1250 property, like-kind exchange, installment
sale, passive activity, material participation, Schedule K-1, NOL, QBI, SE tax,
estimated tax, prohibited transaction, gross estate, AGI and MAGI among them.
Part 2 concepts that build on these (for example `ea2.recapture-1245`,
`ea2.qbi-sstb`, `ea2.special-25000`) test the business rule only. The one
clash: Part 1 uses the abbreviation LLC for the lifetime learning credit, so
`limited liability company` is registered here with no `abbr`; writers spell
it out, or write "LLC" only where the meaning is plain from the card.

**The tax year that matters.** The current window (1 July 2026 to 28 February
2027) tests **tax year 2025**. Every dollar amount is `validAsOf: 2025`. The
sources are the **2025 editions** ("For use in preparing 2025 Returns", or
"(2025)" in the catalogue line). Where irs.gov/pub/irs-pdf/ already serves a
2026 edition, the 2025 edition was taken from irs.gov/pub/irs-prior/ instead:
Pub 15, Pub 15-A, Pub 15-B (each "For use in 2026" at irs-pdf) and the general
instructions for information returns (`i1099gi--2025`, 404 at irs-pdf).
Publications revised by date rather than by year are cited in their current
revision, which is the one in force for 2025: Pub 541 and Pub 551 (Rev.
December 2025), Pub 510 (Rev. December 2025), Pub 557 (Rev. January 2025), Pub
583 (Rev. December 2024), Pub 542 (Rev. January 2024), Pub 538 (Rev. January
2022), Pub 598 (Rev. March 2021), Pub 1635 (Rev. 2-2014), and the
instructions for Forms 1023 (Rev. December 2024), 1024 (Rev. January 2022),
2553 (Rev. December 2020), 3115 (Rev. December 2022), 6765 and 7004 (Rev.
December 2025), 8300 (Rev. December 2023), Schedule M-3 (Form 1120) (Rev. June
2025) and Schedule O (Form 1120) (Rev. December 2018). Forms 8832 (Rev.
December 2013) and 8826 (Rev. September 2017) carry their instructions on the
form.

## Topics

| Topic | Name | Outline domain (scored questions) |
|---|---|---|
| T1 | Business entities and considerations | 1. Business Entities and Considerations (30): Business entities |
| T2 | Partnerships | 1: Partnerships |
| T3 | Corporations | 1: Corporations in general; Forming a corporation |
| T4 | S corporations | 1: S corporations |
| T5 | Business income, expenses and credits | 2. Business Tax Preparation (37): Business income; Business expenses, deductions and credits |
| T6 | Business assets and depreciation | 2: Business assets; capitalisation and depreciation items |
| T7 | Financial records and advising the business | 2: Analysis of financial records; Advising the business taxpayer |
| T8 | Trusts, estates and exempt organisations | 3. Specialized Returns and Taxpayers (18): Trust and estate income tax; Exempt organizations |
| T9 | Retirement plans, farmers and rental property | 3: Retirement plans; Farmers; Rental property |

Domain 1 is split into four topics and domain 2 into three because each is
wide; domain 3 covers five unrelated taxpayer types and is split in two.

## Exam facts

Sources: IRS EA FAQ `[ea-faq.txt]`
(https://www.irs.gov/tax-professionals/enrolled-agents/enrolled-agents-frequently-asked-questions),
Become an EA `[become-ea.txt]`
(https://www.irs.gov/tax-professionals/enrolled-agents/become-an-enrolled-agent),
PSI Candidate Information Bulletin, "REVISED August 28, 2026" `[psi-bulletin.txt]`
(https://test-takers.psigov.us/api/content/bulletin/12238). All read in the raw
text. Facts common to all three parts are the same as in the Part 1 brief;
they were fetched and read again for this task.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | Internal Revenue Service. Exam developed and run by PSI Services since 1 March 2026 | "Effective March 1, 2026, the IRS Enrolled Agent Special Enrollment Exam (EA-SEE) is no longer developed and administered by Prometric, LLC. A new vendor, PSI Services, has been selected to develop and administer the exam." `[become-ea.txt]` | Vendor: yes |
| Structure | Three parts; Part 2 is Businesses | "The SEE contains three parts: Part 1 – Individuals Part 2 – Businesses Part 3 – Representation, Practices and Procedures" `[ea-faq.txt]`; "SEE2: Part 2 — Businesses" `[psi-bulletin.txt]` p17 | No |
| Order | Parts in any order | "No, examinations can be taken in any order." `[ea-faq.txt]` | No |
| Tax law tested | Tax year 2025 | "For exams taken between July 1, 2026-February 28, 2027, all references on the examination are to the Internal Revenue Code, Code of Federal Regulations, IRS forms, instructions, and publications, as amended through December 31, 2025. Unless otherwise stated, all questions relate to the calendar year 2025. Questions that contain the term 'current tax year' refer to the calendar year 2025. In answering questions, candidates should not consider any legislation, court decisions, or penalty amounts after December 31, 2025." `[psi-bulletin.txt]` p15; same substance in the FAQ ("updated March 11, 2026") | Yes, every window |
| Testing window | 1 July 2026 to 28 February 2027 (domestic) | "The test this year will be offered from July 1, 2026, to Feb. 28, 2027, for domestic test candidates. Dates for international testing have not yet been determined." `[ea-faq.txt]` ("updated Aug. 26, 2026") | Yes |
| Questions | 100: 85 scored, 15 unscored | "Each part of the SEE contains 100 questions. 85 are scored questions and 15 are experimental non-scored questions." `[ea-faq.txt]` | No |
| Part 2 split | 30 / 37 / 18 scored questions | "1. Business Entities and Considerations– 30 questions", "2. Business Tax Preparation – 37 questions", "3. Specialized Returns and Taxpayers – 18 questions" `[psi-bulletin.txt]` p17; outline pp. 34–38 | Yes (outline revised with the vendor) |
| Format | Multiple choice, four options | "The questions on your examination are multiple choice. Each question provides four options" `[psi-bulletin.txt]` p28 | No |
| Time | 3.5 hours; 4 hours seat time | "Each part is 3.5 hours long. The actual seat time is 4 hours to allow for a tutorial, survey, and two scheduled 10-minute breaks." `[ea-faq.txt]` | No |
| Pass mark | Scaled 500 on a 200–800 scale | "…converting it to a scale that ranges from 200 to 800. The IRS has set the scaled passing score at 500." `[ea-faq.txt]` | No |
| Fee | $317 per part | "The fee to take each part of the SEE is $317." `[ea-faq.txt]` | Yes |
| Retakes | 4 attempts per part per window; 24-hour wait | "Each exam part may be taken 4 times per testing window, which runs from May 1 to the end of February." "If you fail an exam part, you must allow 24 hours before scheduling another appointment for that same part." `[ea-faq.txt]` | Occasionally |
| Delivery | Remote or in person (U.S.); international remote only | "Examinations are administered by computer either remotely or in-person." "There is no in-person international testing." `[psi-bulletin.txt]` | Yes |
| Validity (carryover) | Passing score carries over 3 years | "Candidates who pass a part of the examination can carry over passing scores up to three years from the date the candidate passed the examination." `[ea-faq.txt]` ("updated Aug. 21, 2026") | Transition extensions change |
| After passing | Apply for enrolment; $140 fee | "…make secure payment of the $140 enrollment fee at Pay.gov." `[ea-faq.txt]` | Fee: yes |
| Keeping status | 72 CE hours per 3-year cycle | "a minimum of 72 hours per enrollment cycle (every three years). A minimum of 16 hours must be earned per year, two of which must be on ethics." `[ea-faq.txt]` | Rarely |

The FAQ's study advice names "the Internal Revenue Code, Treasury Department
Circular 230, IRS publications, and IRS tax forms and their accompanying
instructions" `[ea-faq.txt]`.

## Naming

- The IRS calls the exam the "Special Enrollment Examination (SEE)" and the
  "IRS Enrolled Agent Special Enrollment Exam (EA-SEE)" `[become-ea.txt]`. PSI
  names the part "SEE2: Part 2 — Businesses". I found no trademark claim for
  "SEE" or "Enrolled Agent" on the pages fetched.
- IRS content policy (https://www.irs.gov/about-irs/use-of-content-from-irsgov,
  `[irs-use-of-content.txt]`): "Content on this website that was created or
  maintained by federal employees in the course of their duties is not subject
  to copyright and may be freely copied. Credit is requested." And: "Federal
  law prohibits use of any symbol, emblem, seal, insignia or badge of any
  entity of the Department of Treasury (including the Internal Revenue
  Service) or any colorable imitation of such words, initials, symbols,
  emblems, or seals in connection with any advertisement, solicitation,
  business activity, or product where such use could reasonably be
  interpreted as conveying the false impression that such advertisement,
  solicitation, business activity, or product is in any manner approved,
  endorsed, sponsored, or authorized by, or associated with, the Department of
  the Treasury or any organization within the Department. See 18 U.S.C. § 701,
  31 U.S.C. § 333 and 31 C.F.R. Part 37."
- **How CONTENT-POLICY.md §4 applies.** The IRS is not in §5, so the deck may
  name the exam in plain text, with our brand first. No IRS seal, logo or
  imitation, and nothing that suggests endorsement. Credit the IRS as the
  source. Title as for Part 1, for example "Enrolled Agent flashcards: for
  Part 2 (Businesses) of the IRS Special Enrollment Examination". Never
  "Official", never "IRS deck". Name PSI only as the body that runs the exam.
- **Deck notice** (the §4 "Everyone else" pattern, adapted because no
  trademark was found; same wording as Part 1 so the family reads alike):

> The Special Enrollment Examination (SEE) is an examination of the Internal
> Revenue Service, administered by PSI Services. This deck is independent and
> is not affiliated with, sponsored, endorsed or approved by the Internal
> Revenue Service, the U.S. Department of the Treasury or PSI Services. It uses
> IRS publications, which are works of the U.S. Government. Tax amounts are for
> tax year 2025.

## Outline (Part 2, bulletin pp. 34–38, owner's order)

Weights are scored questions out of 85. The bulletin gives no weights below
domain level. As for Part 1: "Not every topic on the list will necessarily
appear on the examination and the list should not be viewed as
all-inclusive. Some topics may appear in more than one examination part."
(bulletin p29).

**1. Business Entities and Considerations — 30 (35%)**
- *Business entities:* sole proprietorships [T1]; partnerships and qualified joint ventures (QJV) [T1][T2]; corporations [T1][T3]; S corporations [T1][T4]; LLCs [T1]; tax-exempt entities and associations [T1][T8]; entity type default classifications and elections [T1]; employer identification number [T1]; accounting periods (tax year) [T1]; reporting requirements (Forms W-2, W-4, 1099) [T1]; hobby versus business determination and loss limitations [T1]
- *Partnerships:* partnership income, expenses, distributions and flow-through (self-employment income) [T2]; family partnerships [T2]; partner's dealings with partnership (exchange of property, guaranteed payments) [T2]; contribution of property and/or services (partnership's basis, property subject to indebtedness) [T2]; basis of partner's interest [T2]; disposition of partner's interest [T2]; partnership formation (agreement, general versus limited partners, capital contributions) [T2]; dissolution (sale, death of partner) [T2]; filing requirements, due dates, penalties and audit notice requirements [T2]; partnership cancellation of debt [T2]; partnership-level audit and opt-out [T2]
- *Corporations in general:* filing requirements, due dates and penalties [T3]; earnings and profits [T3]; shareholder dividends, distributions and recognition [T3]; special deductions and credits (dividends-received deduction, charitable deduction) [T3]; liquidations and stock redemptions [T3]; accumulated earnings tax [T3]; estimated tax payments [T3]; corporate minimum tax credit [T3]
- *Forming a corporation:* services rendered for stock [T3]; IRC section 351 exchange [T3]; money or property received in addition to stock [T3]; property subject to indebtedness [T3]; controlled groups [T3]; closely held corporations [T3]
- *S corporations:* requirements to qualify (qualifying shareholders) [T4]; election procedure [T4]; income, expenses and separately stated items [T4]; treatment of distributions [T4]; shareholder's basis (loan basis, distributions and losses in excess of basis, services for stock) [T4]; revocation, termination and reinstatement [T4]; debt discharge [T4]

**2. Business Tax Preparation — 37 (44%)**
- *Business income:* gross receipts and other income [T5]; cost of goods sold (inventory practices, expenditures included, uniform capitalisation) [T5]; net income or loss and at-risk limitations [T5]; cancellation of business debt [T5]
- *Business expenses, deductions and credits:* officers' and employees' compensation (deductibility, fringe benefits, family employment, statutory employee, necessary and reasonable) [T5]; business rental deduction, including self-rentals [T5]; depreciation, amortisation (start-up and organisational costs), section 179, depletion, bonus depreciation and correcting errors [T5][T6]; business bad debts [T5]; travel, meals and gifts [T5]; vehicle use and expenses [T5]; interest expense [T5]; insurance expense [T5]; taxes (deductibility of taxes, assessments and penalties; sales tax; excise) [T5]; employment taxes [T5][T7]; casualties, thefts and condemnations [T5]; QBI (SSTB, calculations, phase-out, UBIA) [T5]; general business credits (disabled access, R&D, small business health care, foreign tax credit) [T5]; net operating loss deduction [T5]; home office [T5]
- *Business assets:* basis of assets [T6]; disposition of property or assets [T6]; like-kind exchange [T6]; converted property [T6]; capitalisation and repair regulations (elections) [T6]
- *Analysis of financial records:* business type, classification codes and year-to-year comparison [T7]; income statement [T7]; balance sheet (proofing balances, link to income statement and depreciation) [T7]; method of accounting and changes (accrual, cash, hybrid, Form 3115) [T7]; depreciation recovery (recapture, section 280F) [T6]; pass-through activity (K-1, separately stated items, non-deductible expenses) [T7]; reconciliation of tax versus books (M-1, M-2, M-3) [T7]; related party activity [T3][T7]; loans to and from owners [T7]
- *Advising the business taxpayer:* reporting and filing obligations (extended returns and penalties, international information returns, Form 1099 series, Form 8300) [T7]; payment and deposit obligations (employment tax, excise tax) [T7]; record-keeping (mileage log, accountable plans) [T7]; selection of business entity [T7]; commingling [T7]; advice on accounting methods [T7]; transfer of property in or out of the business [T7]; life cycle of the business (formation, dissolution) [T7]; type of industry (specified service business owners) [T5][T7]; worker classification (independent contractor versus employee, outside sales, full-time versus part-time) [T7]; deductions and credits for planning (timing, NOL, depreciation versus section 179 versus bonus) [T7]; ACA compliance [T7]

**3. Specialized Returns and Taxpayers — 18 (21%)**
- *Trust and estate income tax:* trust types (simple, complex, grantor, irrevocable, tax shelters, foreign) [T8]; distributable net income and accounting income [T8]; exclusions, exemptions and deductions [T8]; fraudulent trusts [T8]; income (allocations, corpus versus income) [T8]; separately stated items (K-1) [T8]; filing requirements, tax years and penalties [T8]
- *Exempt organizations:* qualifying for and maintaining exempt status (IRC 501(c)) [T8]; applying for exemption (Forms 1023, 1024) [T8]; filing requirements (Form 990 series) [T8]; unrelated business taxable income [T8]
- *Retirement plans:* employer and employee contributions [T9]; reporting requirements [T9]; plans for the self-employed (SEP and SIMPLE) [T9]; prohibited transactions [T9]; qualified and non-qualified plans [T9]; non-discrimination rules [T9]
- *Farmers:* farm income (livestock, crop insurance, subsidies, patronage dividends, conservation payments) [T9]; depreciation for farmers [T9]; disaster-area provisions [T9]; farm rental (Form 4835) [T9]; farm tax computation (Schedule J, Schedule SE, estimated tax) [T9]
- *Rental property:* real estate professional [T9]; commercial versus residential rentals [T9]; mixed-use property and vacation homes [T9]; passive loss limitation ($25,000 allowance, MAGI limits) [T9]; rental income (deposits, prepaid rent, not rented for profit) [T9]; rental expenses (personal and rental allocation, repair versus capitalised) [T9][T6]

`irs-ea-part2-concepts.json` maps every item above to 332 atomic concepts (one
rule, number, procedure, term, set or contrast each), and each 2025 dollar
amount is its own `number` concept citing the page where it was read.

## Traps

- [T1] The window tests tax year 2025, not 2026. Pub 946 prints the 2026 section 179 limit ($2,560,000) next to the 2025 one ($2,500,000) (p946 p1–2); Pub 560 prints 2025 and 2026 plan limits side by side ($70,000 / $72,000; $23,500 / $24,500; $16,500 / $17,000; $350,000 / $360,000) (p560 p2). Take the 2025 figure.
- [T7] Pub 15, 15-A and 15-B at irs.gov/pub/irs-pdf are the 2026 editions ("For use in 2026"). Use `irs-prior/p15--2025.pdf` and its siblings.
- [T5] Pub 535 is gone: "We have discontinued Publication 535, Business Expenses; the last revision was for 2022." (irs.gov guide to business expense resources). Study material that cites it is at least three years out of date.
- [T6] Bonus depreciation in 2025 depends on the acquisition date: 100% for certain property acquired and placed in service after 19 January 2025, 40% for certain earlier-acquired property (p946 p1).
- [T6] Section 179 for 2025: $2,500,000, reduced once section 179 property placed in service exceeds $4,000,000; SUVs $31,300 (p946 p1).
- [T6] Like-kind exchange rules apply only to exchanges of real property (p544 p17).
- [T5] Entertainment is not deductible; business meals are limited to 50% (p463 p13, p7). Business gifts: $25 per recipient (p463 p16).
- [T5] Standard mileage rate for 2025 is 70 cents a mile (p463 p1); Pub 334 already gives the 2026 rate, 72.5 cents (p334 p5). Do not mix them.
- [T5] QBI: the 2025 threshold is $197,300 ($394,600 MFJ); the phase-in range runs to $247,300 ($494,600 MFJ) (i8995a p1). Part 1 teaches the QBI deduction itself; Part 2 tests SSTB, W-2 wage and UBIA limits.
- [T2][T4] Late-filing penalties for Forms 1065 and 1120-S are $255 a month per partner or shareholder, up to 12 months (i1065 p7; i1120s p5). Form 1120's minimum penalty for a return more than 60 days late is the smaller of the tax due or $525 (i1120 p1).
- [T4] Form 1120-S for calendar 2025 is due 16 March 2026, because 15 March falls on a Sunday (i1120s p3). Form 1065 is also due "March 15" subject to the weekend rule (i1065 p5).
- [T1] Form 1099-NEC for 2025 is due 2 February 2026 (i1099gi p6); the reporting threshold in Pub 334 for 2025 is $600 (p334 p12).
- [T2] Guaranteed payments are not distributions: they are treated as made to a non-partner for gross income and deduction purposes (p541 p10).
- [T4] S corporation losses are limited by stock basis and debt basis together; shareholders use Form 7203 (i1120ssk p2–3). Partnership outside basis (T2) follows different rules; candidates confuse the two.
- [T4] An S election can terminate when the corporation has accumulated E&P and too much passive investment income for 3 consecutive tax years (i1120s p2).
- [T3] Corporate NOLs from tax years after 2017 are limited to 80% of taxable income figured without the NOL deduction (i1120 p17). Corporate charitable deductions are limited to 10% of taxable income (i1120 p14).
- [T3] i1120 p1: for tax year 2025 the IRS continues to waive the section 6655 estimated-tax penalty relating to the corporate alternative minimum tax.
- [T8] Trust and estate exemptions differ: estate $600, trust required to distribute all income $300, other trusts $100 (i1041 p29). Form 1041 is required at $600 of gross income (i1041 p5).
- [T8] Form 990 thresholds: $200,000 gross receipts or $500,000 total assets (i990 p2); Form 990-T at $1,000 of gross UBI (i990t p3); exemption is revoked automatically after 3 consecutive years of not filing (p557 p2).
- [T9] Real estate professional (more than 750 hours) versus the $25,000 active-participation allowance, which is lost at $150,000 MAGI (p925 p9, p3, p6). Candidates mix the two tests.
- [T9] Vacation home: personal use counts against the greater of 14 days or 10% of rental days (p527 p27).
- [T7] Monthly versus semiweekly depositor depends on a $50,000 lookback test; the $100,000 next-day rule overrides both (p15--2025 p31, p30).
- [T7] 2025 social security wage base is $176,100; FUTA is 6.0% on the first $7,000 with a credit of up to 5.4% (p15--2025 p2, p43).
- [T1] Several business sources are old revisions still in force: Form 8832 (2013), Pub 1635 (2014), Schedule O (Form 1120) instructions (2018). They are current, not outdated.

## Languages

Neither the FAQ nor the PSI bulletin states the exam's language (grepped for
"English" and "language"; see Part 1 brief). The Part 2 sources fetched are
English only. The Part 1 brief records an official Spanish edition of Pub 17;
no Spanish edition of the business publications was sought for this task.

## Not verified

- **Exam language**: not stated in the FAQ or bulletin.
- **The Part 2 outline on PSI's own page** (https://test-takers.psigov.us/irs): a JavaScript shell, as in Part 1. The outline was taken from the bulletin, which carries no licence statement, so it is tier C (facts only).
- **Hobby-loss presumption (profit in 3 of 5 years)**: not found in Pub 334 (2025). No concept was made for it.
- **Start-up and organisational cost dollar cap**: i1120 p11 says only "a limited amount", with the rest amortised over 180 months. Pub 535 is discontinued. The figure was not read.
- **Re-electing S status after termination (waiting period)**: not found in i1120s or i2553 text. No concept.
- **Disabled access credit range**: Form 8826 (Rev. 9-2017) was fetched, but the expenditure range was not read.
- **Applicable large employer threshold**: i109495c mentions 50 full-time employees in passing; the definition was not pinned down, so `ea2.ale-50` carries no figure.
- **Accumulated earnings tax rate**: not read in Pub 542.
- **Excess business loss thresholds** and **farm estimated tax (two-thirds rule and dates)**: not pinned down; their concepts cite the first matching page.
- **Stock redemptions**: Pub 542 does not set out sale-versus-dividend treatment. `ea2.redemption` cites Pub 550 p54; writers should confirm or drop.
- **Nonqualified plans**: only a Pub 15 (2025) mention was found.
- **Pub 536 (NOL)** and **Form 1120-S shareholder K-1 instructions** at `i1120ssk1`: 404. The K-1 instructions were found at `i1120ssk.pdf`.
- **Separate instructions for Forms 8826, 8832, 4835, M-3 (Form 1120) under `i1120m3`, and 1094-C under `i1094c`**: 404. The forms themselves and `i1120sm3`, `i109495c` were used.
- **Page anchors** were taken from the first hit after the contents pages for each concept's keyword. Writers should confirm the page when they write the card.

## Where the leads were wrong

- **Pub 535 is no longer issued.** It redirects to a guide page that says it was discontinued after 2022.
- **Pub 15** at irs-pdf is the 2026 edition; the 2025 edition is at irs-prior. The same applies to Pub 15-A and 15-B (not in the leads).
- **Pubs 541 and 542** are revision-dated (Rev. December 2025 and Rev. January 2024), not annual "2025 editions". **Pub 1635** is Rev. 2-2014.
- The rest held: Pubs 334, 463 and 946 are the 2025 editions, and the Form 1120, 1120-S, 1065 and 990 instructions are all "(2025)". All are IRS works under the irs.gov content notice. The PSI bulletin is tier C, as the lead said.

Irs.gov served every page requested apart from the 404s above. No automated
request was refused.
