# irs-ea-part3 audit, part b (topics 4–7)

417 cards checked (04: 100, 05: 141, 06: 86, 07: 90). I checked each card against its evidence and grepped the cached sources for anything the evidence did not cover. I worked through every scenario's dates and arithmetic, and all were correct. That includes the 18 April 2023 due date for 2022 returns, 1 June 2015 + 10 years, 20% of $30,000, 30% > 25% and 12 aggregate returns. I checked the collection-appeal and limitation periods against the Code sections the cards cite: 6213(a) and (b), 6320(a), 6330(a), (b), (c), (d) and (e), 6331(a) and (d), 6501(a), (b)(1), (c) and (e), 6502(a) and 7602(c). All match.

Pub. L. 119-39 card (`ea3.authority.math-error-notice-2026`): **keep it**. The Act was enacted on 25 November 2025, inside the "law as amended through 31 December 2025" cut-off. Its effective date (notices after 25 November 2026) also falls inside the exam window, which runs to 28 February 2027. As written, though, the card tested only a date, so the patch says what the amendments require.

Dollar figures: each one now gives its source year and is marked volatile. Pub 556 figures are labelled 2013, the OIC fee comes from the April 2026 booklet, IA figures from the Form 9465 instructions (Rev. July 2024) and the guaranteed-IA limit from section 6159(c) as in force for 2025.

Counts: wrong 0 · unsupported 5 · ambiguous 0 · unclear 2 · minor 9. Every finding has a patch in `irs-ea-part3-fixes-b.jsonl` (24 lines), and none needs research. The patches pass `apply-fixes --dry`.

id | severity | problem | evidence (source words, with page)
---|---|---|---
ea3.authority.math-error-notice-2026 | unclear | The front and back test only an effective date and never say what changed. Kept as in scope (enacted 25 Nov 2025); the patch adds the content and says the 60-day abatement right is unchanged. | 6213 note: "shall apply to notices sent after the date which is 12 months after … [Nov. 25, 2025]"; amended (b)(1)(B): "describe the mathematical or clerical error in comprehensive, plain language … an itemized computation … display the date by which the taxpayer may request to abate … in bold"; (b)(2) only gains a new (C).
ea3.authority.tas-vs-litc | unsupported | The back's claim that TAS is "always free" is not on the cited Pub 1546 p. 11. | Pub 1 p. 2: "If you qualify for our assistance, which is always free"; Pub 1546 p. 11 covers only LITC fees.
ea3.authority.ruling-vs-plr | unsupported | The claim that taxpayers may rely on revenue rulings is not in the cited primer. | IRM 4.10.7.2.6: "Taxpayers may rely on them or appeal their position"; primer covers only the PLR half.
ea3.authority.keep-return-records | minor | The source is labelled "(2026 edition)", but the file is the Tax Year 2025 instructions, which the deck elsewhere calls "(2025)". | i1040gi p. 1: "TAX YEAR 2025 … Feb 25, 2026".
ea3.authority.assessment-three-years | minor | The explanation says "runs from filing whether … on time or late", which invites the reading that an early return starts the clock early. | 6501(b)(1): "filed before the last day prescribed … shall be considered as filed on such last day."
ea3.collection.refund-claim-scenario | unsupported | The early-filing rule in the explanation is not in the cited Form 843 instructions. The arithmetic is correct. | i1040x p. 3: "your return is considered filed on the due date (generally April 15)"; Pub 556 p. 13: "Returns you filed before the due date are considered filed on the due date."
ea3.collection.ia-online-50000 | minor | The $50,000 figure gives no source year. | i9465 p. 1: "If your balance due isn't more than $50,000".
ea3.collection.streamlined-25000 | minor | The $25,000 figure gives no source year. | i9465 p. 2: "Your assessed tax liability is $25,000 or less".
ea3.collection.gia-10000 | minor | The statutory $10,000 gives no year and is not marked volatile. | 6159(c)(1): "does not exceed $10,000".
ea3.collection.gia-scenario | minor | Same $10,000 limit, undated and not volatile. | 6159(c)(1): "does not exceed $10,000".
ea3.collection.online-plan-scenario | minor | The $50,000 and $10,000 figures in the explanations are undated. | i9465 p. 1; 6159(c)(1).
ea3.collection.oic-low-income-scenario | minor | The $205 fee in the choices is undated. | f656b p. 5: "Offers require a $205 application fee."
ea3.exams-appeals.aep | unsupported | "The exam window still tests FTA" is stated as fact. The IRS page says AEP covers 2025 tax year returns onward. | IRS page: "AEP … Applies to 2025 tax year and 2026 quarterly returns, and all future tax years/quarters"; "AEP begins summer 2026".
ea3.exams-appeals.scn-selected | unsupported | choicesExplained says "many examinations end with a refund or no change", but Pub 556 does not say that. | Pub 556 p. 4: "a letter … stating that the examiner proposed no changes to your return."
ea3.exams-appeals.vs-small-case-limits | minor | The back credits $25,000 to "Pub 5, 2021", but the card cites Pub 556 (2013) p. 9. | Pub 556 p. 9: "not more than $25,000, you may make a small case request".
ea3.efile.vs-efin-ptin | unclear | The back says the EFIN identifies "the e-file provider transmitting it", but transmitters are identified by a separate number and every provider has an EFIN. | Pub 3112 p. 8: "The IRS assigns … (EFINs) to all Providers and assigns … (ETINs) to Transmitters, Software Developers and Online Providers."
