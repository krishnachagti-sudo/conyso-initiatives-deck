# irs-ea-part1 audit (part a): topics 1–3, 392 cards

Checked: 01-preliminary-work (83), 02-income-retirement (156), 03-property-adjustments (153). Every 2025 dollar figure and threshold was checked against the cached sources, and every scenario's arithmetic was worked through step by step. Patches: irs-ea-part1-fixes-a.jsonl (dry run clean).

id | severity | problem | evidence (source words, with page)
---|---|---|---
ea.property-adjustments.deferral-60-63 | wrong | Back says $37,750 for ages 60–63. That is a Publication 17 misprint: $23,500 + $11,250 catch-up = $34,750. Moved to Publication 525. | P525 p. 1: “$34,750 if age 60 through 63 at the end of 2025.” P17 p. 3: “For 2025, this higher catch-up contribution limit is $11,250.” P525 p. 9: “The catch-up limit is $11,250 if you are age 60, 61, 62, or 63 in 2025.”
ea.property-adjustments.deferral-64 | wrong | Explanation repeats $37,750. | Same as above (P525 p. 1)
ea.property-adjustments.121-scenario-broken | wrong | The explanation says 2020–2021 “gives 24 months”, but the 5-year window before a March 2025 sale starts in March 2020, so only about 22 of those months count. The answer (yes) still holds once the 2024–2025 months are added. | P523 p. 3: “at least 24 months of the previous 5 years … All that is required is a total of 24 months (730 days) of residence during the 5-year period.”
ea.income-retirement.alimony-scenario-2016 | unsupported | The flagged inference. The cited p. 12 passage covers only pre-2019 instruments modified after 2018. The unmodified case is supported on p. 13, so the source, page and evidence were moved there. | P504 p. 13: “If you entered into a divorce or separation agreement on or before December 31, 2018, and the agreement has not been changed …” and “your former spouse must report $1,800 as alimony received for a divorce decree executed prior to 2019.”
ea.property-adjustments.sli-mfs | unsupported | The evidence on p. 11 is the American opportunity credit's list, not the student loan interest deduction's. | P970 p. 33: “Your filing status is any filing status except married filing separately.”
ea.income-retirement.exc-levy | ambiguous | “Government levy” is broader than the source's “IRS levy”, and a state levy is not an exception. | P590-B p. 24: “The distribution is due to an IRS levy of the IRA.”
ea.income-retirement.excess-deadline | unclear | “By April 15, 2026, including extensions” reads as a contradiction. It means the return due date, extensions included. | P590-A p. 32: “withdrawn by April 15, 2026 (including extensions).”
ea.income-retirement.recharacterization-scenario | unclear | Says “income was $170,000”, but the Roth limit is tested on modified AGI. | P590-A p. 2: “You can't make a Roth IRA contribution if your modified AGI is $165,000 or more.”
ea.property-adjustments.deferral-limit | minor | The back ($23,500) is right, but the evidence quotes the misprinted $37,750. Evidence moved to Publication 525. | P525 p. 1: “the total annual amount you can contribute is increased to: • $23,500,”
ea.preliminary-work.qss-death-years | minor | “A 2025 death gives married filing jointly” overstates: the survivor must be otherwise eligible. | P501 p. 10 (qualifying-surviving-spouse card): joint return for the year of death “if otherwise eligible”.
ea.income-retirement.incentive-stock-option | minor | The back omits “or a related company”, so it states the employment test more narrowly than the source. | P525 p. 12: “an employee of the company granting the option, or a related company”
ea.preliminary-work.dependent-earned-over-15750 | minor | The evidence defines earned income but does not contain the $15,750 figure the card tests. | P17 p. 11: “Your earned income was more than $15,750.”
ea.preliminary-work.dependent-gross-income-test | minor | The evidence does not contain the $1,350, $15,300 or $450 figures. | P17 p. 11: “Your gross income was more than the larger of: • $1,350, or • Your earned income (up to $15,300) plus $450.”

## Notes (no finding)
- All other 2025 figures match the sources: filing thresholds ($15,750 / $31,500 / $5), dependant limits ($1,350, $15,300 + $450), $5,200, $2,700 kiddie tax, $2,800 Schedule H, $7,000/$8,000 IRA, the IRA deduction phase-outs, Roth $150,000–$165,000, QCD $108,000, $176,100, HSA $4,300/$8,550, HDHP $1,650/$3,300, student loan interest $85,000–$100,000, $20,000/200 Form 1099-K, $600 Form 1099-NEC. The $600 and $20,000/200 figures change after 2025, so they are correct for this deck.
- All scenario arithmetic in the three topics checks out, apart from 121-scenario-broken's month count above.
- qpri-after-2025 follows P4681 (pp. 1–2: “cannot be excluded from income for discharges completed or discharge agreements entered into after December 31, 2025”), so no change was made.
- ea.preliminary-work.tax-year-tested has no evidence, and its source (the PSI bulletin) is not cached. That is a missing field, so the checker covers it.
