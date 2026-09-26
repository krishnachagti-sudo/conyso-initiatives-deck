# isc2-cgrc audit, part a (topics 1–6)

Cards checked: 341 (01 governance and risk to 06 control selection). No wrong findings.

Checked and found sound, so not listed below:
- all 73 scenario cards: the letters in choicesExplained match the wrong choices, and every back matches its choice text;
- RMF task outputs and primary roles (P-1 to P-18, C-1 to C-3, S-1 to S-6) against SP 800-37r2;
- FIPS 199 and FIPS 200 impact levels and the high water mark; SP 800-60 Steps 1 to 4; 800-53B baselines, tailoring, scoping, overlays and compensating controls;
- `media/sp800-60-four-steps.svg` matches SP 800-60 Vol. 1 Rev. 1 Figure 2 (p. 20): the four steps and the FIPS 200 / SP 800-53 control-selection output. It leaves out the "Identify Information Systems" process input, which is acceptable in a four-step figure;
- no card in topics 1–6 cites SP 800-18 Rev. 1 (withdrawn 30 June 2026); SP 800-18 cards cite Rev. 2;
- SP 800-53 Rev. 5 cards cite the December 2020 PDF. The controls they use (MP-3, RA-5, sections 2.2 and 2.3) are not among the Release 5.2.0 changes (AU-02, AU-03, CA-07, IR-04/06/08, MA-03, SA-04/05/08/15/24, SI-02/07, SR-08);
- CMMC levels, C3PAO and DIBCAC roles, and the 180-day closeout against 32 CFR 170.

## Findings

cgrc.governance-and-risk.information-security-governance | minor | Re-teaches cc.governance.security-governance, which uses the same SP 800-39 definition. Rewritten around the decision rights SP 800-39 adds | "senior leaders/executives in consultation and collaboration with the risk executive (function), determine: (i) the types of risk management decisions that are reserved for specific senior leadership roles" (SP 800-39 §2.3.1, PDF p. 21)
cgrc.governance-and-risk.governance-goals | minor | Re-teaches cc.governance.security-governance, whose back already lists all four goals. Deleted; the concept stays on six other cards | cc back: "to set direction, achieve objectives, manage risk and use resources responsibly"
cgrc.rmf-prepare-and-roles.task-p2-tolerance | minor | Re-teaches cc.risk-management.risk-tolerance. Deleted | cc back: "The level of risk, or degree of uncertainty, that is acceptable to an organisation"
cgrc.rmf-prepare-and-roles.seven-steps | minor | Re-teaches cc.risk-management.rmf. Deleted | cc back: "A seven-step process … a preparatory step plus six main steps"
cgrc.life-cycle-and-boundaries.fisma-integrity | minor | Re-teaches cc.core-security-concepts.integrity, the same 44 U.S.C. §3552 wording including non-repudiation and authenticity. Deleted | cc back: "including ensuring non-repudiation and authenticity"
cgrc.life-cycle-and-boundaries.fisma-confidentiality | minor | Re-teaches cc.core-security-concepts.confidentiality. Deleted | cc back: "including protecting personal privacy and proprietary information"
cgrc.life-cycle-and-boundaries.fisma-availability | minor | Re-teaches cc.core-security-concepts.availability. Deleted; objective-scenario keeps the concept | cc back: "Ensuring timely and reliable access to, and use of, information"
cgrc.laws-and-frameworks.hipaa-administrative | minor | Re-teaches cc.security-controls.administrative-control word for word, and isc2-cc teaches every other §164.304 safeguard definition too. This is the only card for cgrc.hipaa-security-rule, so it needs a replacement fact isc2-cc lacks, such as the §164.308 risk analysis. NEEDS RESEARCH | 45 CFR §164.304: "Administrative safeguards are administrative actions, and policies and procedures…"
cgrc.control-selection.fips200-17-areas | minor | Duplicates laws-and-frameworks.seventeen-areas: same FIPS 200 sentence, same page. Deleted | FIPS 200 p. 5: "in seventeen security-related areas"
cgrc.control-selection.release-520 | minor | Duplicates laws-and-frameworks.eo-14306: same sentence and evidence. Refocused on the SP 800-53B half | 5.2.0 summary p. 1: "NIST SP 800-53B Release 5.2.0, Control Baselines for Information Systems and Organizations, has no changes; the version number was updated for consistency with SP 800-53 and SP 800-53A"
cgrc.laws-and-frameworks.fedramp-counts | minor | Volatile: it tests home-page counts (537 and 32) that change within weeks, so it will be wrong soon after release and teaches nothing lasting. Deleted; the concepts stay on the other FedRAMP cards | fedramp.gov: "Total FedRAMP Certified Services 537 Total FedRAMP 20x Certified Services 32"
cgrc.laws-and-frameworks.fedramp | unclear | The primer never says what FedRAMP does (standard security assessment and authorisation of cloud services for federal use), only that it has a Marketplace. The home page gives no purpose either. NEEDS RESEARCH (44 U.S.C. §§3607–3616 or a fedramp.gov programme page) | fedramp.gov: "The FedRAMP Marketplace is a searchable database of FedRAMP certified cloud services…"
cgrc.laws-and-frameworks.fedramp-20x | unsupported | The back describes the page layout, not what 20x is. The example's "fast-track lane" is not on the page: the page's "Fast Track" is the Marketplace strapline. NEEDS RESEARCH (a fedramp.gov 20x page) | fedramp.gov: "FedRAMP Marketplace: Your Fast Track to FedRAMP Certified Cloud Solutions"; "RFC-0033 FedRAMP 20x Phase 4 Development Tracks for 20x Class D"
cgrc.control-selection.control-sections | minor | Front reads "an Special Publication" | —
cgrc.control-selection.assignment-vs-selection | minor | Front reads "an Special Publication" | —
cgrc.control-selection.withdrawn-numbers | minor | Front reads "an Special Publication" | —
cgrc.categorisation.scn-system-sc | unclear | In choicesExplained, C ("which the high water mark does per objective, not across all three") reads as if the high water mark does lift every objective | FIPS 199 p. 8: "the highest values (i.e., high water mark) from among those security categories"
cgrc.categorisation.scn-na | unclear | In choicesExplained, B ("which FIPS 199 does not allow for this value") has to be read twice | FIPS 199 p. 7: "The potential impact value of not applicable only applies to the security objective of confidentiality."
cgrc.control-selection.scope-security-objective | unclear | The back's "reflects the security category before the high water mark" is opaque to a newcomer | 800-53B p. 25: "reflects the [FIPS 199] security category for the supported security objectives before considering the [FIPS 200] impact level (i.e., high water mark)"
cgrc.control-selection.scn-s5 | ambiguous | "Which should come first?" reads as a question about order; the source speaks of controls that may need more frequent assessment | SP 800-37r2 p. 75: "may require more frequent assessment"

Counts: wrong 0, unsupported 1, ambiguous 1, unclear 4, minor 15 (21 findings). Patches cover 18 findings, 8 of them card deletions; 3 findings need research.
