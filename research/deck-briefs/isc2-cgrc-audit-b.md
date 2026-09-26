# isc2-cgrc audit B: topics 07–13

Scope: decks/isc2-cgrc/notes/07-implementation-and-plans.json to 13-ai-governance.json. That is 303 cards (39 + 53 + 37 + 66 + 53 + 21 + 34). I checked each card against its `evidence` first. Where a claim went beyond the evidence, I grepped research/sources/isc2-cgrc/ (SP 800-18r2, 800-37r2, 800-53r5, 800-53Ar5, 800-115, 800-128, 800-137, 800-39, 800-30r1, 800-88r2, FIPS 200, AI 100-1, AI 100-2e2025 and the EU AI Act). These are tier B sources (CONTENT-POLICY.md §3, tier B).

How I checked:
- **Choice letters.** I checked every scenario card by script and then by reading it. In each card, choicesExplained names every wrong letter and never the key, and each explanation describes the choice text under its letter. No card has a mismatch.
- **SP 800-53 Release 5.2.0.** The cached SP 800-53 PDF, and the live PDF at the same URL, are the original Rev. 5 text: neither contains SA-24. I therefore checked the SI-2 statement and discussion against the 5.2.0 OSCAL catalogue (usnistgov/oscal-content, version 5.2.0). I fetched it once, with a generic User-Agent, and did not save it to the repository. Both SI-2 cards (si2-test, si2-cm) are still correct in 5.2.0. The 5.2.0 discussion now adds that testing may be unnecessary for simple malicious code signature updates. The other controls cited in these topics (AC-1, AT-2, AT-4, CA-2, CA-7, CA-8, CM-3, CM-4, CP-2, RA-5, SA-9) have no 5.2.0 changes to their requirements or discussion.
- **Claims beyond the evidence.** Most such claims hold up against the source text, including:
  - termination date and reauthorisation;
  - interim authority to test (fn 137);
  - common control provider documentation duty;
  - ATO/ATU risk statements;
  - rescission;
  - record retention;
  - the change of AO as a trigger;
  - facility authorisation content;
  - joint authorisation terms;
  - M-5 reporting frequency and formality;
  - M-6 outputs;
  - 800-137 volatility examples;
  - M-7 roles and discussion;
  - the OECD origin of the AI actor definition;
  - unlearning methods.

  The exceptions are the findings below.

id | severity | problem | evidence (source words, with page)
---|---|---|---
cgrc.ai-governance.what-is-harmful-bias | unclear | The front asks "what is harmful bias?", but AI RMF gives no definition, so the back is circular. Its "must address" also overstates the source. | "Fairness in AI includes concerns for equality and equity by addressing issues such as harmful bias and discrimination." (AI 100-1, PDF p. 22)
cgrc.ai-governance.map-context | unclear | The explanation gives a side fact (lack of visibility) without saying how it relates to Map establishing context. | "AI actors in charge of one part of the process often do not have full visibility … can make it difficult to reliably anticipate impacts of AI systems." (AI 100-1, PDF p. 29)
cgrc.assessment-planning.scn-a3-privacy | unclear | "A relies on assessors rather than assessing" is obscure. | "The senior agency official for privacy serves as the control assessor for the privacy controls" (SP 800-37r2, PDF p. 83)
cgrc.ai-governance.trust-valid-reliable | minor | The card cites PDF p. 5, which is the List of Figures and only repeats the caption. Figure 4 is on PDF p. 17. | "Fig. 4. Characteristics of trustworthy AI systems. Valid & Reliable is a necessary condition of trustworthiness" (AI 100-1, PDF p. 17)
cgrc.ai-governance.actors-separated | minor | The card cites PDF p. 5, which is the List of Figures. The Figure 3 caption is on PDF p. 16. | "AI actors in the AI Model dimension (Figure 2) are separated as a best practice" (AI 100-1, PDF p. 16)
cgrc.findings-and-poam.scenario-no-evidence | minor | choicesExplained B says each assessment procedure produces a finding. In fact, each determination statement does. | "Each determination statement contained within an assessment procedure executed by an assessor produces one of the following findings" (SP 800-53Ar5, PDF p. 42)
cgrc.audits-and-disposal.scenario-policy-control | minor | "Administrative security control" is not a term in the sources. SP 800-53 covers training as controls in its AT family. | "AT-2 Literacy Training and Awareness" (SP 800-53r5, PDF p. 87)

Checked and not reported: `dash1` says the -1 relationship is "not specified in the related controls section". Release 5.2.0 adds all -01 controls as related controls of the new SI-2(7). That is a single exception, the card's statement is still the text of §2.2, and the difference is too small to patch.
