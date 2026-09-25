# Research brief: IRS VITA/TCE volunteer certification

Slug: `irs-vita`. Family prefix: `vita`. Researched 25 September 2026. Every
fact below was read in a source fetched during this task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/irs-vita/`
(IRS PDFs and their pdftotext output in `pdf/`, irs.gov pages as `.html` and
`.txt`). `#page=N` counts form feeds in the pdftotext output, so it is the PDF
page, not the printed one.

**Scope of this deck.** The four certifications named in the task: Volunteer
Standards of Conduct (VSC), Intake/Interview and Quality Review (I/I&QR),
Basic and Advanced. Not covered: the Site Coordinator test, the specialty
courses (Military, International, Puerto Rico, Foreign Student) and the
Over-the-Phone Interpreter test. Pub 4491 lessons 16, 18 and 32 (Military)
and the foreign earned income part of lesson 15 (International) are out.

**Edition.** Everything is the "2025 RETURNS" edition, Rev. 10-2025 (Pub
4491, 4012, 4961, 5101, 5838, 5166, Form 6744, Form 13614-C), plus the
Pub 4491-X Training Supplement, Rev. 1-2026. Form 6744: "Use tax year 2025
values for deductions, exemptions, tax, or credits for all answers on the
test" (f6744 p7). This is the same tax year as irs-ea-part1, whose amounts are
all `validAsOf: 2025`.

## Prerequisite deck: irs-ea-part1

**Recommendation: yes, `prerequisiteDecks: ["irs-ea-part1"]`.** Both decks
test tax year 2025 law from the same IRS publications, and every tax-law term
the Basic and Advanced courses use is already defined in `ea` (filing status,
qualifying child and relative, EIC, CTC, AOTC, HSA, PTC, basis and so on).
Redefining them would give two cards per term with two sources. So the 61
terms at topic 0 in `irs-vita-terms.json` are copied from
`irs-ea-part1-terms.json` with their `ea.*` concept ids and sources, and no
`vita` concept restates an `ea` rule or amount.

The direction is unusual: EA Part 1 is a professional exam and the Basic
course is "Recommended for, but not limited to, volunteers with 0-1 years of
experience" (f6744 p9). A new volunteer should not be sent through the whole
EA deck. The deck page should say which EA topics matter: EA T1 to T4 and the
Schedule 1-A, credit and payment concepts in T5. EA T7 (estate, gift,
international reporting) and most of T5 (AMT, NIIT, Additional Medicare Tax,
household employment) are out of VITA/TCE scope; this deck teaches only that
they are out (`vita.out-of-scope-taxes`, `vita.out-of-scope-forms`).

What `vita` adds on top of EA: (1) the programme, ethics, site and process
rules that no EA source covers (T1 to T5), and (2) for tax law (T6, T7), the
VITA lens: which certification level a topic needs, where scope stops, and the
VITA-specific procedures and items (Simplified Method, IRA self-certification,
Medicaid waiver payments, Form 8862, IP PIN handling at a site). If the
prerequisite is refused, T6 and T7 need about 120 more concepts copied from
`ea`, re-cited to Pub 4491 and Pub 4012.

## Topics

| Topic | Name | Certification and source |
|---|---|---|
| T0 | irs-ea-part1 (prerequisite) | Tax law terms |
| T1 | Programme, roles and certification | All four; Pub 4491 lesson 1, Pub 5378, Form 6744 |
| T2 | Volunteer Standards of Conduct | VSC test; Pub 4961, Form 13615 |
| T3 | Quality Site Requirements, privacy and security | VSC test (VSC #1); Pub 5166, Pub 4299 |
| T4 | Intake and interview | I/I&QR test; Pub 5101, Pub 5838, Form 13614-C |
| T5 | Quality review, signatures and e-file | I/I&QR test; Pub 5838, Pub 4012 Tab K |
| T6 | Basic tax law within VITA/TCE scope | Basic test; Pub 4491, Pub 4012 |
| T7 | Advanced tax law within VITA/TCE scope | Advanced test; Pub 4491, Pub 4012 |

## Exam facts

All read in the raw pdftotext or HTML text. URLs: Form 6744
https://www.irs.gov/pub/irs-pdf/f6744.pdf; Pub 5378
https://www.irs.gov/pub/irs-pdf/p5378.pdf; Pub 4491
https://www.irs.gov/pub/irs-pdf/p4491.pdf; Pub 4961
https://www.irs.gov/pub/irs-pdf/p4961.pdf; Link & Learn Taxes
https://www.irs.gov/individuals/link-and-learn-taxes; free tax preparation page
https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | IRS; sites run by partners | "While the IRS manages the VITA and TCE programs, the VITA/TCE sites are operated by IRS partners and staffed by volunteers" (free tax preparation page) | No |
| Where tests are taken | Link & Learn Taxes (VITA/TCE Central) | "All volunteers must register and certify via Link & Learn Taxes. The online tests are available at www.linklearncertification.com/." (p4491 p19) | Platform: sometimes |
| Paper option | Form 6744, answers transcribed online | "volunteers who prefer to take the certification test on paper utilizing Form 6744 … must transcribe their answers to the test in Link & Learn Taxes" (p4491 p19) | No |
| Same questions online and on paper | Yes | "The test scenarios on VITA/TCE Central are the same as in the printed test booklet (Form 6744 …)" (p5378 p13) | No |
| Order | VSC, then I/I&QR, then tax law | "It is not possible to take any of the other exams without first passing both the VSOC exam and the Intake/ Interview and Quality Review exam." (p5378 p11) | No |
| VSC test | 10 questions, 8 to pass, about 1 hour | "Step 1: Volunteer Standards of Conduct. This test is for all volunteers, including volunteers who do not prepare returns. Estimated completion time: 1 hour. Minimum proficiency required: 8 out of 10 correct." (f6744 p9) | Rarely |
| I/I&QR test | 10 questions, 8 to pass, about 20 minutes | "Step 2: Intake/Interview and Quality Review. … Estimated completion time: 20 minutes. Minimum proficiency required: 8 out of 10 correct." (f6744 p9) | Rarely |
| Basic test | 30 questions, 24 to pass, about 4 hours | "Basic. Recommended for, but not limited to, volunteers with 0-1 years of experience. Estimated completion time: 4 hours. Minimum proficiency required: 24 out of 30 correct." (f6744 p10) | Yes (scenarios yearly) |
| Advanced test | 35 questions, 28 to pass, about 4 hours | "Advanced. Recommended for, but not limited to, volunteers with two or more years of experience. Estimated completion time: 4 hours. Minimum proficiency required: 28 out of 35 correct." (f6744 p10) | Yes |
| Pass mark | 80% on every test | "A minimum score of 80% is required to pass any certification test." (p4491 p20) | No |
| Attempts | Two: test, then retest | "You are allowed two attempts to take each exam." "If volunteers fail an exam, the retest will be presented on the second attempt." (p5378 p13) | No |
| Basic before Advanced? | Not required | "You are not required to certify in Basic before taking the Advanced test." (p4491 p20) | No |
| Format | Scenario questions, open book | "you may encounter both mini-scenarios and tax preparation scenarios" (f6744 p8); "This is an open book test." "Please complete this test on your own." (f6744 p7); fill-in answers are whole numbers: "Round decimals up or down to the nearest whole number." (p5378 p13) | No |
| Time limit | None stated; only estimated completion times | "You may stop and close the test at any time." (p5378 p14) | — |
| Tax year tested | 2025 | f6744 p7, quoted above | Yes, yearly |
| Validity | One year | "Tax law certification is an annual requirement." (p4961 p6); "The VSC Test is an annual requirement." (p4961 p21) | No |
| After passing | Sign Form 13615; approving official verifies photo ID and signs | "Form 13615 is not valid until it is signed and dated by the sponsoring partner, coordinator, instructor, or IRS contact, after verifying the volunteer's identity, name and address (with government-issued photo ID) and certification level." (p4961 p21) | No |
| Fee | None found | No fee is mentioned in any source fetched | — |
| Answer key | Not public | "Instructors can retrieve the Test Answer Key from LLT after completing their own certification." (p4961 p21) | — |

Change often: the scenarios and amounts each October, and the whole set is
reissued as "2026 RETURNS" (see Not verified). The Link & Learn page gives
the course list: "six certification courses for volunteers and a refresher
course" (Basic, Advanced, Puerto Rico, Foreign Student and Scholars, Military,
International).

## Naming

- **Names the IRS uses.** "Volunteer Income Tax Assistance (VITA)", "Tax
  Counseling for the Elderly (TCE)", "Link & Learn Taxes", "VITA/TCE Volunteer
  Assistor's Test/Retest" (Form 6744), and the certification names "Volunteer
  Standards of Conduct", "Intake/Interview and Quality Review", "Basic" and
  "Advanced". I found no trademark claim for any of them on the pages
  fetched. The only marks in the materials belong to others: "TaxSlayer® is a
  copyrighted software program owned by Rhodes Computer Services" (front
  matter of Pub 4491, 4012, 4961, Form 6744), and AARP Foundation Tax-Aide.
- **IRS content policy**
  (https://www.irs.gov/about-irs/use-of-content-from-irsgov): "Content on this
  website that was created or maintained by federal employees in the course of
  their duties is not subject to copyright and may be freely copied. Credit is
  requested. If copyrighted material appears on the site, or is reached through
  a link on this site, the copyright holder must be consulted before the
  material may be reproduced." It also forbids any IRS or Treasury "symbol,
  emblem, seal, insignia or badge … or any colorable imitation" where it
  "could reasonably be interpreted as conveying the false impression" of
  approval (18 U.S.C. § 701, 31 U.S.C. § 333, 31 C.F.R. Part 37).
- **How CONTENT-POLICY.md §4 applies.** The IRS is not in §5, so the deck may
  name the tests in plain text with our brand first, as the irs-ea-part1 deck
  does. The text of the IRS publications is tier B. Two limits: no TaxSlayer
  screenshots or software screens (copyright of Rhodes Computer Services, used
  in the IRS materials "with the permission of Rhodes Computer Services"; that
  permission is not ours), and no IRS seal, logo or wording that suggests the
  IRS approves the deck. Pub 4961 lists "Disallowing use of IRS logos" among
  the sanctions for sites (p4961 p19), a reminder that the IRS polices this.
  Never say a learner is "certified" by the deck: only passing the IRS tests
  certifies a volunteer. Title, for example: "[Site name] deck for the IRS
  VITA/TCE volunteer certification tests (Standards of Conduct,
  Intake/Interview and Quality Review, Basic and Advanced)". Never
  "Official", "IRS deck" or "VITA certification deck".

> **Deck notice.** Volunteer Income Tax Assistance (VITA), Tax Counseling for
> the Elderly (TCE) and the VITA/TCE volunteer certification tests are
> programmes of the Internal Revenue Service. This deck is independent and is
> not affiliated with, sponsored, endorsed or approved by the Internal Revenue
> Service or the U.S. Department of the Treasury. Studying it does not certify
> anyone as a VITA/TCE volunteer: only the IRS certification tests on Link &
> Learn Taxes do. It uses IRS publications, which are works of the U.S.
> Government, and reproduces no TaxSlayer® screens (TaxSlayer is a product of
> Rhodes Computer Services). Tax amounts are for tax year 2025.

## Outline (owner's order)

The IRS publishes no weighted objective list. The outline below is the test
structure in Form 6744 (weights are the scored questions of each test), then
the contents of each test's training publication in the IRS's own order.
Concept ids are in `irs-vita-concepts.json`.

**Step 1. Volunteer Standards of Conduct test: 10 questions (Pub 4961 contents)**
- Introduction: why ethics training; sponsor agreements; TIGTA [T2]
- Objectives [T2]
- Unethical defined; unethical act versus mistake [T2]
- The six Volunteer Standards of Conduct, one by one [T2]
- VSC #1 in detail: the ten Quality Site Requirements [T3]; certification rules within QSR #1 [T1]
- Taxpayer civil rights [T2]
- Due diligence [T2]
- Failure to comply: enforcement, reporting, Volunteer Registry, impact on sites and taxpayers [T2]
- Volunteer Protection Act [T1]
- Instructions for completing training, certifications and the VSC agreement [T1]
- Resolving problems, referrals [T2]
- Form 13615 [T1]

**Step 2. Intake/Interview and Quality Review test: 10 questions (Pub 5838 chapters; Pub 5101 slides)**
- Ch. 1 Introduction: benefits, required training, due diligence, scope of service, virtual model, keeping Form 13614-C [T4][T1][T3]
- Ch. 2 Intake process: six steps, Form 13614-C, Global Carry Forward, certification level codes, assigning returns [T4]
- Ch. 3 Interview process: photo ID and TIN, known to the site, reviewing Form 13614-C, probing questions, filing status and dependency, documentation [T4]
- Ch. 4 Preparing the tax return [T4]
- Ch. 5 Quality review: methods, thorough review, checklist, concluding, signature requirement [T5]
- Ch. 6 Duties after submission: acknowledgements, rejects [T5]

**Step 3. Tax law: Basic test 30 questions, Advanced test 35 questions (Pub 4491 lessons)**

Pub 4491 marks each lesson's level with icons that are images, not text
(see Not verified). The level here comes from the codes on Form 13614-C
pages 2 and 3 and the Scope of Service chart in Pub 4012 (pp. 8–23). "The
first six lessons apply to all levels of certification" (p4491 p18).

1. Course introduction: certification, scope, liability, SIDN, IP PIN, civil rights [T1][T3][T6]
2. Temporary provisions: cancellation of principal residence debt [T7]
3. Filing basics: who must file, identity, schedules [T6]
4. Filing status [T6]
5. Personal exemptions (replaced for 2025 by the senior deduction note in Pub 4491-X) [T6]
6. Dependents [T6]
7. Unique filing situations: nonresident aliens (Form 1040-NR needs Foreign Student certification) [T6]
8. Income: wages, tips, Medicaid waiver payments, scholarships, interest, dividends, state refunds, alimony [T6]
9. Income: business (Schedule C) [T7]
10. Income: capital gain or loss; sale of home [T7]
11. Income: retirement income (Basic when the taxable amount is shown, Advanced otherwise) [T6][T7]
12. Income: Schedules K-1 and rental [T7]
13. Income: unemployment compensation [T6]
14. Income: Social Security benefits [T6]
15. Income: other income (ABLE, credit card debt, worldwide income; the foreign earned income exclusion is International) [T6][T7]
16. Military income: out of this deck
17. Adjustments to income (educator, student loan interest and early-withdrawal penalty are Basic; HSA, IRA deduction, SE items are Advanced) [T6][T7]
18. Military adjustments: out of this deck
19. Standard deduction and tax computation (QBI and kiddie tax are Advanced) [T6][T7]
20. Itemized deductions [T7]
21. Credit for child and dependent care expenses [T6]
22. Education credits [T6]
23. Foreign tax credit [T6]
24. Child tax credit and credit for other dependents [T6]
25. Miscellaneous credits: saver's credit, elderly or disabled (Basic); energy credits (Advanced) [T6][T7]
26. Premium tax credit [T7]
27. Other taxes: SE tax, unreported tips, additional tax on retirement plans [T7]
28. Payments and miscellaneous refundable credits [T6]
29. Earned income credit [T6]
30. Refund and amount of tax owed [T6]
31. Completing the return [T5][T6]
32. Military finishing and filing: out of this deck
33. Amended and prior-year returns [T7][T4]

Counts: 242 concepts (T1 41, T2 39, T3 30, T4 28, T5 23, T6 48, T7 33) and
109 terms (61 at topic 0). Every outline item maps to at least one `vita`
concept; the tax-law rules behind T6 and T7 are the prerequisite's `ea`
concepts.

## Traps

- [T6] irs.gov serves the uncorrected October 2025 Pub 4012 (PDF created 15 September 2025). It still says "Single or married filing separate return $15,000" (p4012 p195) and a SALT limit of "$10,000 ($5,000 if Married Filing Separately)" (p4012 p203). Pub 4491-X (Rev. 1-2026) replaces these with $15,750, $40,000 ($20,000 MFS) and a $2,200 child tax credit (p4491x p5). Use the supplement and the EA deck's amounts.
- [T6] Pub 4491 contradicts itself: "Increases the child tax credit to $2,200 per qualifying child" (p4491 p14) but lesson 24 still says "the maximum $2,000 per child" (p4491 p270).
- [T6] The enhanced deduction for seniors (Schedule 1-A, line 37) is Basic; the tips, overtime and car loan interest deductions on the same schedule need Advanced (p4491x p6).
- [T1] Only two attempts per test, and "The exam questions may be different on the second attempt" (p5378 p11). Failing the VSC retest blocks every other test.
- [T1] Basic is not a prerequisite for Advanced, but the VSC and I/I&QR tests are prerequisites for both.
- [T1] The 2025 Form 6744 still carries old labels: "2024 VITA/TCE FOREIGN STUDENT TEST" in its contents and "Form 6744 – 2024 VITA/TCE Test" as a page header (f6744 p5–6). Pub 4491-X calls it "Publication 6744". It is Form 6744.
- [T1] Scope "does not refer to income levels" (p4961 p6). The IRS "does not set a program-wide income limit"; sites may, and the page's guide figure ("about $70,244 or less") changes yearly (free tax preparation page).
- [T1] The Scope of Service chart's "In Scope?" column "does not stand alone": columns 4 and 5 add limits and levels (p4012 p8). A form not listed is out of scope, and an in-scope topic a volunteer was not trained on is out of scope for that volunteer.
- [T2] A mistake is not unethical: the reviewer who missed unreported cash income did not violate VSC #4; the preparer who said it need not be reported did (p4961 p13).
- [T2] Breaking a QSR violates VSC #1 only if the volunteer refuses to follow it (p4961 p6).
- [T2] Donation jars may be elsewhere at the site, never in the entry, waiting, preparation or review areas (p4961 p11). A bank at the same location, away from preparation, is not a VSC #3 violation even if it offers RALs/RACs; the site itself may not offer them (p4961 p12).
- [T3] Stockpiling is waiting more than three calendar days after the site has everything; the rule does not run before the IRS opens e-file (p5166 p18–19).
- [T4] "Known to the site" is not "prepared here last year", and only the site coordinator can grant it (p5838 p11).
- [T4] Only I/I&QR-certified greeters may assign returns, and only tax-law-certified volunteers may answer tax law questions at intake (p5838 p5, p8).
- [T5] Designated review is preferred, peer-to-peer is allowed, self-review never (p5838 p14). The taxpayer is told of their responsibility after the review and before signing (p5838 p15).
- [T5] Joint filers must both be verified and sign, but "do not have to be at the site at the same time or on the same day" (p5838 p17).
- [T6] Foreign tax credit: Basic if Form 1116 is not required; if it is, International or Puerto Rico certification is needed, not Advanced (p4012 p12).
- [T7] Rental of a house or room needs Military certification (active duty); only a personal residence rented under 15 days is Advanced (f13614c p2; p4012 p14).
- [T7] Schedule C is in scope only with expenses under $50,000, cash method, no inventory, no net loss, no employees, no depreciation and no home office (p4491 p106).
- [T7] Canceled credit card debt is in scope only if the taxpayer was solvent before the cancellation (p4012 p16). The EA deck teaches the insolvency exclusion; VITA may not prepare it.
- [T7] QBI: only Form 8995 and taxable income up to $197,300 ($394,600 MFJ) (p4012 p9).
- [T0][T7] EA rules that make a VITA return out of scope: AMT, household employment taxes, Additional Medicare Tax, NIIT, the estimated tax penalty, Form 8606, Form 8857 (p4012 pp. 9–21). Injured spouse (Form 8379) is in scope; innocent spouse (Form 8857) is not.
- [T6][T7] Digital assets: in scope only if the taxpayer can answer No to the Form 1040 question; digital asset sales and Form 1099-DA are out (p4012 p8, p16).

## Question pool

Form 6744 is public and a U.S. Government work, and Link & Learn Taxes uses
the same scenarios. I did **not** treat it as a tier-A pool, and I did not run
`build/pool-skeleton.py`. It is the live certification test, not a released
pool: the answer key goes only to instructors (p4961 p21), and volunteers are
asked to "complete this test on your own" (f6744 p7). CONTENT-POLICY §2.1
("No exam content, ever") should win over its copyright status. Writers must
not reproduce Form 6744 scenarios or questions. A person should confirm this
decision.

## Languages

The Puerto Rico test comes in English or Spanish ("You should take either the
English or Spanish language Puerto Rico test, but not both", p5378 p16). No
source fetched states the language of the VSC, I/I&QR, Basic or Advanced
tests. Official Spanish editions exist and were saved: Publicación 4012 (SP)
and Publicación 4961 (SP), both 2025 returns. irs.gov also answered HTTP 200
for p4491sp, p5101sp and f13615sp (not downloaded) and 404 for f6744sp. Form
13614-C "is available in 23 languages" (p5838 p9). All are U.S. Government
works under the same IRS notice.

## Not verified

- **Test dates.** No source gives the date the 2025-returns tests opened or
  close, or when the 2026-returns edition (expected, since every title says
  "2025 RETURNS") will replace them. The materials on irs.gov today are still
  Rev. 10-2025.
- **VITA/TCE Central** (linklearncertification.com) sits behind a login and was
  not fetched. The test facts come from Pub 5378, Pub 4491, Pub 4961 and Form
  6744.
- **Per-lesson level icons in Pub 4491.** They are images and do not appear in
  the text layer. Levels were taken from Form 13614-C and the Pub 4012 Scope
  of Service chart instead.
- **Language of the main tests** (see Languages).
- **Pub 4491 (SP), Pub 5101 (SP), Form 13615 (SP)**: existence seen only as an
  HTTP 200; not read.
- **Pub 1084**: tried and got 404; not needed.
- **Pub 5683, Pub 5088, Pub 1345, Pub 4053, Pub 4836** are cited by the
  sources but were not fetched. Their rules are cited here only as the
  fetched publications state them.
- **Page anchors** for Pub 4012 cite the page of the Scope of Service row.
  Writers should confirm the row on that page.

All irs.gov requests used a generic User-Agent, and none was refused apart
from the 404s above.

## Where the leads were wrong

Pub 4491, Pub 4012 and Pub 4961 are what the leads said, and Form 6744 is the
test booklet. Three corrections: (1) they are not wholly public domain: each
carries TaxSlayer® screenshots that remain Rhodes Computer Services' copyright
and are used by permission, so the deck may use the text, not the screens;
(2) Form 6744 is the live test with no public answer key, so it is not a
usable question pool; (3) the leads missed the sources the I/I&QR test is built
on (Pub 5101, Pub 5838, Form 13614-C) and the Pub 4491-X supplement, without
which the printed 2025 amounts are wrong.
