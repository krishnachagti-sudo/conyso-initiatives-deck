# Research brief: ISC2 Certified in Cybersecurity (CC)

Slug: `isc2-cc`. Family prefix: `cc`. Researched 25 September 2026. Every fact below was read
in a source fetched in this task, or in a source saved by the isc2-ccsp or isc2-cissp research
and re-read here. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/isc2-cc/`
(`law/`, `gloss/`, `other/`). Reused files stay in `…/sources/isc2-ccsp/` and `…/sources/isc2-cissp/`;
`isc2-cc-sources.json` gives each path.

**Prerequisite decks.** None. CC is entry level: the outline says "There are no specific
prerequisites to take the exam" and "No work experience in cybersecurity or any formal
educational diploma/degree is required." isc2-cissp and isc2-ccsp are sibling decks, not
prerequisites, so no term is at topic 0. Shared terms keep the CISSP/CCSP spelling (see
"Overlap with CISSP and CCSP").

**Reuse.** No NIST publication was downloaded again. This deck reuses 41 NIST publications
and the NIST licence page from isc2-ccsp/isc2-cissp, plus ITU-T X.200, RFC 1122, the GDPR text,
the OWASP LLM Top 10 page, the ISC2 Code of Ethics page and ISC2's CAT FAQ, pricing,
member-policy, copyright and NDA pages. New in this task: the CC outline PDF, the CC outline
web page, the CC certification page, ISC2's 6 August 2026 article on the updated outline, the
One Million Certified in Cybersecurity closure page, 45 CFR 164.304 (govinfo, 2024 edition),
two CSRC glossary entries (red team, blue team), and MITRE ATT&CK's Enterprise tactics page and
terms of use.

**Internal use only.** The ISC2 outline is all rights reserved. The objective list below is for
mapping only and must not be published. Public pages describe coverage in our own topic
labels (CONTENT-POLICY §2.3).

## Topics

| Topic | Name | Outline objectives |
|---|---|---|
| T1 | Core security concepts | 1.1 |
| T2 | Risk management | 1.2 |
| T3 | Governance, laws, frameworks and policy | 1.3, 2.1 |
| T4 | Security controls | 1.4 |
| T5 | Ethics and professional conduct | 1.5 |
| T6 | Business continuity and disaster recovery | 2.2 |
| T7 | Security awareness and social engineering | 2.3 |
| T8 | Measuring security effectiveness | 2.4 |
| T9 | Identity lifecycle management | 3.1 |
| T10 | Logical access control and authentication | 3.2 |
| T11 | Network models and addressing | 4.1 (concepts) |
| T12 | Firewalls, wireless and embedded systems | 4.1 (firewalls, wireless, embedded) |
| T13 | Network security architecture | 4.2 |
| T14 | Cloud security | 4.3 |
| T15 | Data handling | 5.1 (data handling) |
| T16 | Cryptography | 5.1 (encryption) |
| T17 | Security operations and threat intelligence | 5.2 |
| T18 | Incident response | 5.3 |
| T19 | Asset, configuration and change management | 5.4 |
| T20 | Security testing | 5.5 |
| T21 | AI security across the domains | outline web page, "How is AI Security Incorporated into the CC Domains?" |

## Exam facts

Sources: outline PDF `EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf` (`outline-en.txt`);
outline page https://www.isc2.org/certifications/cc/cc-certification-exam-outline; CC page
https://www.isc2.org/certifications/cc; update article
https://www.isc2.org/insights/2026/08/inside-the-updated-isc2-cc-exam; CAT FAQ
https://www.isc2.org/certifications/computerized-adaptive-testing; pricing
https://www.isc2.org/register-for-exam/isc2-exam-pricing; member policies
https://www.isc2.org/policies-procedures/member-policies. The CAT, pricing and policy pages are the
isc2-ccsp copies (fetched the same day), re-read here for their CC rows.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | ISC2, Inc. | Footer: "ISC2, CISSP, … CC, and CBK are registered marks of ISC2, Inc." Outline page: "ISC2 developed the Certified in Cybersecurity (CC) credential for newcomers to the field" | No |
| Current outline | Effective 1 September 2026 | PDF p.1: "Effective Date: September 1, 2026"; web: "EFFECTIVE DATE: SEPTEMBER 1, 2026". PDF footer "v01/2026". Article: "the first major content update to the certification since its launch in August 2022" | **Yes (new)** |
| Format | CAT for all exams | PDF p.3: "The CC exam uses Computerized Adaptive Testing (CAT) for all English, Simplified Chinese, Japanese, German, Spanish-Modern exams." Web: "for all exams". Article: "the exam also transitioned from its initial linear testing format to Computerized Adaptive Testing (CAT)" | Sometimes |
| Items | 100 to 125 | PDF: "Number of items 100 - 125". CAT FAQ: "a minimum of 100 items on all examinations. The maximum item count is 125 for the CC and SSCP"; "Each exam will contain 25 pretest, or unscored items"; "a CC and SSCP candidates must answer a minimum of 75 operational, or scored, items along with 25 pretest, or unscored items" | Sometimes |
| Time | 2 hours | PDF: "Length of exam 2 hours". CAT FAQ: "CC and SSCP examinations will have a two-hour maximum administration time." Breaks: "all breaks will be included in the maximum administration time" | Sometimes |
| Item format | Multiple choice and advanced items | "Item format Multiple choice and advanced item types" (PDF and web) | Sometimes |
| Pass mark | 700 of 1000 | "Passing grade 700 out of 1000 points" (PDF and web) | Rarely |
| Scoring | Compensatory CAT, no item review, no numeric score | CAT FAQ: "item review is not permitted. Once a candidate finalizes an answer, it may not be reviewed or changed."; ends when "a candidate's ability estimate excludes the pass point with 95% statistical confidence" (after 100 items), or by the Maximum-Length or "Run-out-of-time (R.O.O.T.) Rule"; "If a candidate does not answer seventy-five (75) operational items and twenty-five (25) pretest items within the maximum time of the examination, the candidate will automatically fail"; "ISC2 exams are compensatory exams"; "Candidates do not receive any numerical scores on their pass/fail report." | Rarely |
| Weights | D1 24%, D2 17.3%, D3 20%, D4 21.3%, D5 17.3% | "CC CAT Examination Weights … Average Weight" (PDF p.3; web identical) | **Yes (new outline)** |
| Languages | English, Chinese, Japanese, German, Spanish | PDF: "Exam availability English, Chinese, Japanese, German, Spanish". Web: "Notice: Chinese language CC exams are only available during select appointment windows. Annual Availability: January 4 - February 2, April 1-31, July 11 - August 9, October 8 - November 6" | Sometimes |
| Test centre | Pearson VUE | PDF: "Testing center Pearson VUE Testing Center"; web: "Pearson Testing Center". CAT FAQ: "exclusively through Pearson Professional Centers (PPCs) and ISC2-authorized Pearson Select Test Centers" | Rarely |
| Retakes | 30, 60, then 90 test-free days; at most 4 in 12 months | CAT FAQ (names CC): "After your first exam attempt: You may retest after 30 test-free days." … "60 test-free days" … "90 test-free days". "You may attempt an ISC2 exam up to 4 times within a 12-month period for each certification program." | Sometimes |
| Price | US$199 standard | Pricing table, CC Exam column (first of seven price columns): "U.S. $199" (Americas, Asia Pacific, Middle East, Africa), "EUR 191.04" (EMEA), "GBP 161.19" (UK). CC page: "Exam code must be scheduled and administered with 365 days of purchase." Peace of Mind Protection: two attempts, "180 days from purchase to sit both attempts" | **Often** |
| Free exam programme | Closed | 1mcc page: "ISC2 is concluding new enrollments effective May 20, 2026"; "All non-expired exam codes must be used to schedule and take an exam by December 31, 2026." | **Yes (ending)** |
| Experience | None | PDF p.2: "There are no specific prerequisites to take the exam. It is recommended that candidates have basic Information Technology (IT) knowledge." CC page: "Entry-Level No Work Experience Required" | Rarely |
| Endorsement | Not required | Member policies, Endorsement Review Policy: "This policy applies to all candidates for ISC2 credentials, except for Certified in Cybersecurity (CC)." | Rarely |
| Validity | 3-year cycle; 45 CPE (all Group A); AMF US$50 | Member policies: CPE "over their three-year certification cycle"; table row "CC Group A 15 45 Group A or B -- -- Total 15 45" (suggested annually, 3-year total); "Members who hold only the CC certification are required to pay an AMF in the amount of U.S. $50" | Sometimes |
| Accreditation | ANAB, ISO/IEC 17024; DoDM 8140.03 | PDF p.2: "CC is in compliance with the stringent requirements of the ANSI National Accreditation Board (ANAB) ISO/IEC Standard 17024." CC page: "U.S. DoDM 8140.03 APPROVED BY DEPARTMENT OF DEFENSE" | Rarely |

**Stale text on ISC2's own page.** The outline web page's "About" block still lists "The topics on
the CC exam include: Security Principles; Incident Response, Business Continuity (BC) and
Disaster Recovery (DR) Concepts; Access Controls Concepts; Network Security; Security
Operations". Those are the 2022 domain names. The weights table and domain list on the same
page, and the PDF, give the new names. Cite the PDF.

## Naming

- **Marks.** Every ISC2 page footer: "ISC2, CISSP, SSCP, CCSP, CGRC, CSSLP, HCISPP, ISSAP, ISSEP,
  ISSMP, CC, and CBK are registered marks of ISC2, Inc." The member policies list CC among the
  certification marks the rules apply to: "ISSAP, ISSEP, ISSMP, CISSP, CCSP, CSSLP, HCISPP, CGRC,
  SSCP, and CC".
- **Copyright.** "All contents of this site constitute the property of ISC2, Inc. and may not be
  copied, reproduced or distributed without prior written permission." The Copyright
  Information page adds "Unauthorized use of the ISC2 marks is strictly prohibited."
- **Marks rules (addressed to certified members).** A mark may not be used in a way that "might
  imply ISC2's affiliation, sponsorship, endorsement, certification, or approval"; marks "shall
  always be accompanied by ®"; "Marks may not be translated or otherwise localized into any other
  language" (isc2-ccsp copy, re-read).
- **NDA.** "you may not disclose the Exam questions, items or answers or discuss any of the
  content of the Exam Materials with any person without prior written approval of ISC2".
  Member policies: "General discussions about exams that do not share specific exam items are
  permissible."
- **How CONTENT-POLICY §4 applies.** ISC2 is not a §5 body. Name the exam in plain text only, to
  state a true fact, with our brand first. Write "CC®" with the ®. Because "CC" alone is
  ambiguous, spell out the name the first time. Use no logo, and never say "official",
  "approved" or "certified". Title pattern: "[Site name] deck for the ISC2 Certified in
  Cybersecurity (CC®) exam". Never translate the mark. The outline is not openly licensed, so
  link to it and never copy it (§2.3). ISC2's "Official ISC2 Training", "CC Flash Cards", "CC
  Knowledge Check", "The Ultimate Guide to CC" and the e-books linked from the CC page are
  never sources (§2.2). The ISC2 Code of Ethics page is tier C: state the canons in our own
  words and link to it.
- **Deck notice text:**

> ISC2, CC and CBK are registered marks of ISC2, Inc. This deck is independent and is not
> affiliated with, sponsored, endorsed or approved by ISC2, Inc. It contains no ISC2 exam
> content and is not built from ISC2 study materials.

- **Attribution.** NIST: cite each publication, followed by "Republished courtesy of the National
  Institute of Standards and Technology." (NIST licensing page). MITRE ATT&CK: keep "© 2026 The
  MITRE Corporation. This work is reproduced and distributed with the permission of The MITRE
  Corporation." and the licence with any copy. OWASP LLM Top 10: see its licence line in the
  sources file. The CSRC glossary entries quote CNSSI 4009, and ITU-T X.200 is "All rights
  reserved", so both are facts only. No licence statement was read for the govinfo CFR file or
  the RFC.

## Outline

Source: outline PDF `#page=4`–`#page=7`, same order as the web page. Five domains, 19
objectives, 59 listed items. Items are summarised.

**Domain 1. Security Principles: 24%**
- 1.1 Understand cybersecurity concepts: confidentiality, integrity, availability [T1];
  authentication, authorisation, accounting (AAA) [T1]; non-repudiation [T1]; privacy [T1]
- 1.2 Understand risk management concepts: risk management lifecycle [T2]; risk management
  processes [T2]
- 1.3 Understand governance concepts: regulations and laws [T3]; frameworks and guidelines [T3];
  policies, standards (e.g. ISO, Center for Internet Security), procedures [T3]
- 1.4 Understand cybersecurity controls: technical [T4]; administrative [T4]; physical [T4]
- 1.5 Maintain professional and ethical conduct: professional code of conduct [T5]; due care and
  due diligence [T5]; ISC2 Code of Ethics [T5]

**Domain 2. Security Governance: 17.3%**
- 2.1 Plan GRC: purpose [T3]; importance [T3]; frameworks and tools [T3]
- 2.2 Understand redundancy: business continuity [T6]; disaster recovery [T6]
- 2.3 Understand security awareness: organisational culture (importance of security, security
  leadership) [T7]; concepts (social engineering, password protection, phishing) [T7]
- 2.4 Measure cybersecurity effectiveness: key metrics, KRIs [T8]; dashboards, score cards,
  reports [T8]

**Domain 3. Identity and Access Management (IAM) Concepts: 20%**
- 3.1 Understand identity life cycle management: roles definition [T9]; provision [T9]; review
  [T9]; deprovision [T9]; frameworks and tools [T9]
- 3.2 Understand logical access controls: principle of least privilege [T10]; separation of
  duties [T10]; access control models [T10]

**Domain 4. Networking and Cloud Security Concepts: 21.3%**
- 4.1 Understand network security: concepts (OSI model, TCP/IP model, IPv4, IPv6, VPN) [T11];
  firewalls (ports, applications) [T12] [T11]; wireless (Wi-Fi, Bluetooth) [T12]; embedded
  systems (ICS), IoT [T12]
- 4.2 Understand network security architecture: segmentation (firewall zones, VLAN,
  micro-segmentation) [T13]; defence in depth [T13]; zero trust [T13]
- 4.3 Understand cloud security: characteristics (broad network access, rapid elasticity,
  measured service, on-demand self-service, resource pooling) [T14]; service models [T14];
  deployment models [T14]; shared security model (roles and responsibilities) [T14]

**Domain 5. Security Operations and Incident Response: 17.3%**
- 5.1 Understand data security: data handling (classification, labelling, masking,
  sanitisation) [T15]; encryption (symmetric, asymmetric, hashing, quantum-resistant
  cryptography) [T16]
- 5.2 Understand security operations: logging and monitoring security events [T17]; security
  event triage (incident use cases, prioritisation, correlation) [T17]; threat actors (types,
  motivations) [T17]; cyber threat intelligence [T17]; threat frameworks [T17]
- 5.3 Understand incident response: data handling policy implementing the IRP [T18]; IR
  exercises (testing, tabletop) [T18]
- 5.4 Understand asset protection: asset lifecycle management (EOL software and devices) [T19];
  configuration and change management [T19]
- 5.5 Understand security testing: security readiness testing (blue, purple, red teaming)
  [T20]; application testing (vulnerability scanning, static analysis, dynamic analysis, threat
  modelling) [T20]; physical penetration testing (phishing, tailgating, impersonation) [T20] [T7]

**AI statement (web page only).** ISC2 says it has "integrated foundational AI concepts across
all five domains". It names model poisoning and training-data privacy (D1), transparency and
non-bias (D1), AI-driven phishing and "Model Drift" as a BC/DR risk (D2), AI "bots" and service
accounts in identity lifecycle management, MFA and "impossible travel" detection (D3),
AI-powered firewalls and IDS and isolated AI development environments (D4), and SIEM using AI to
reduce "alert fatigue" and data leakage through public AI services (D5). Each is a concept in
T21 or in the topic it names.

## Traps

- **The outline changed on 1 September 2026.** Material from 2022 to August 2026 follows the
  old outline: Security Principles 26%; BC, DR and Incident Response Concepts 10%; Access
  Controls Concepts 22%; Network Security 24%; Security Operations 18% (ISC2 article). Do not
  use the old domain names or weights. [T1]
- **Incident response moved.** It was in old Domain 2; now it sits in Domain 5, and Domain 2 is
  Security Governance. BC/DR are now "redundancy" items in 2.2. [T18] [T6]
- **ISC2's outline page still shows the old topic list** in its "About" block. The weights
  table below it is current. [T1]
- **Free exam ended.** One Million Certified in Cybersecurity closed to new enrolments on 20 May
  2026; remaining codes must be used by 31 December 2026. Older guides describe the CC exam as
  free. [T1]
- **Item count and time differ from CISSP/CCSP.** CC is 100 to 125 items in 2 hours; CISSP and
  CCSP are 100 to 150 items in 3 hours. [T1]
- **Control categories.** The outline says technical, administrative and physical (the HIPAA
  Security Rule wording: "administrative, physical, and technical safeguards"). SP 800-12
  says "management, operational, and technical controls". Control *functions* (preventive,
  detective, corrective) are a different axis. [T4]
- **Five characteristics, not six.** The CC outline lists NIST's five (SP 800-145). The CCSP
  outline follows ISO/IEC 17788's six, which adds multi-tenancy. [T14]
- **Risk transfer and sharing.** SP 800-39 treats "Risk Sharing or Transfer" as one response;
  outsourcing to a cloud provider does not remove the organisation's accountability
  (SP 800-144). [T2] [T14]
- **RTO, RPO and MTD.** RTO must be shorter than MTD; RPO measures data loss, not downtime
  (SP 800-34). [T6]
- **Passwords changed in SP 800-63B-4.** Single-factor passwords need at least 15 characters (8
  if used only with MFA); verifiers "SHALL NOT impose other composition rules" and "SHALL NOT
  require subscribers to change passwords periodically". Older "complex, change every 90 days"
  advice is out of date. [T7]
- **Clear, purge, destroy.** Three methods; cryptographic erase is a purge technique. SP 800-88
  Rev. 2 supersedes Rev. 1. [T15]
- **Hashing is not encryption.** SP 800-175B: a hash function is "a one-way function that is
  extremely difficult to invert"; encryption is reversed with the key. [T16]
- **Incident response life cycle.** SP 800-61 Rev. 3 (April 2025) replaces the four-phase Rev. 2
  cycle with one built on the six CSF 2.0 functions. Material built on Rev. 2 is out of date. [T18]
- **ATT&CK tactics changed.** The Enterprise matrix now lists 15 tactics, including "Stealth"
  (TA0005) and "Defense Impairment" (TA0112). Older material lists "Defense Evasion". [T17]
- **Purple team has no NIST definition** in the sources read; red and blue team definitions come
  from CNSSI 4009 via the CSRC glossary. [T20]
- **Separation vs segregation of duties.** The CC outline
  writes "Separation of Duties (SoD)"; the CISSP registry uses "segregation of duties". The
  terms file uses the CC spelling. [T10]
- **IPv4 vs IPv6.** 32-bit versus 128-bit addresses (SP 800-119). [T11]
- **Outline spelling.** Write "defence in depth", "labelling", "organisational" and "modelling"
  (British), but keep "Defense Impairment" and other proper names as published. [T13]

## Overlap with CISSP and CCSP

Of the 219 CC terms, 44 have the same spelling in both the CISSP and CCSP registries, 83 in
CISSP only and 12 in CCSP only. The remaining 80 are new to CC or spelled differently.

- **In all three:** non-repudiation, PII, the four risk responses, GDPR, BIA, MTD, RTO, RPO, hot,
  warm and cold site, MFA, VPN, TLS, VLAN, micro-segmentation, zero trust, cloud computing, SaaS,
  PaaS, IaaS, media sanitisation, clear, purge, destroy, cryptographic erase, symmetric-key
  algorithm, public-key cryptography, hash function, log management, SIEM, tabletop and
  functional exercise, patch management, configuration management, baseline configuration,
  change management, penetration testing, threat modelling, data poisoning, prompt injection.
- **CISSP only (main ones):** CIA, authentication, AAA, risk, threat, vulnerability, likelihood,
  impact, risk assessment, RMF, residual risk, CSF, due care, due diligence, ISC2 Code of
  Ethics, BCP, DRP, backups, awareness, social engineering, phishing, KRI, DAC, MAC, RBAC, ABAC,
  ACL, OSI, TCP/IP, IPv6, firewall, WLAN, Bluetooth, ICS, IoT, defence in depth, data
  classification, AES, digital signature, PQC, IoC, incident, lessons learned, EOL, red team,
  purple team, model drift, AI RMF.
- **CCSP only:** the five NIST cloud characteristics except rapid elasticity (CCSP writes "rapid
  elasticity and scalability"), the four deployment models, data masking, de-identification,
  SOC, vulnerability scanning.
- **Spelling differences to align:** CC "principle of least privilege" vs CISSP "least
  privilege"; CC "separation of duties" vs CISSP "segregation of duties"; CC "shared
  responsibility model" vs CISSP "shared responsibility"; CC "rapid elasticity" vs CCSP "rapid
  elasticity and scalability".

Writers may adapt the sibling decks' cards for shared terms but must pitch them at entry level
and cite the source page given in `isc2-cc-concepts.json`.

## Languages

The CC exam is offered in English, Chinese, Japanese, German and Spanish (Chinese only in four
annual windows). ISC2 publishes the outline PDF in English, Simplified Chinese, German,
Japanese and Spanish (links on the outline page; only the English PDF was downloaded). ISC2's
outlines are all rights reserved in every language. No official or openly licensed
translation of the NIST publications was looked for.

## Not verified

- **ISO, CIS and "frameworks and tools".** No ISO standard text or Center for Internet Security
  page was fetched. Those concepts cite the outline and are facts only.
- **Outline-only concepts.** AAA as a set, accounting, GRC, due care, due diligence, code of
  conduct, identity lifecycle stages, role definition, embedded systems, incident use cases,
  IR data-handling policy, asset lifecycle and purple team point at the outline. Writers must
  add an open source (for example SP 800-53 AU controls for accounting) before carding facts
  beyond the name.
- **AI statement concepts** (model drift, impossible travel, AI and SIEM, AI and IDS, AI
  isolation, AI backups, data leakage to public AI) cite ISC2's web page only. No open source
  for "model drift" or "impossible travel" was found in the cached NIST texts.
- **Anchor pages reused from isc2-cissp** (for example SP 800-34 pages 8, 31 and 36; SP 800-160
  page 99; NISTIR 7316 pages) were not all re-opened here. The TLS concept points at the SP
  800-53 data-in-transit page, not SP 800-52r2.
- **The 2022 CC outline itself** was not fetched; its domain names and weights come from ISC2's
  August 2026 article.
- **ATT&CK version number** was not read on the tactics page.
- **Licences not read:** govinfo's CFR file and RFC 1122 (no licence line read). NIST's licence
  covers "Works authored by NIST employees"; co-authored works (SP 800-150, AI 100-2, IR 8259r1)
  were not checked for rights notes.
- **HIPAA text.** The isc2-ccsp copy of Part 164 came from an ecfr.gov URL; this deck uses the
  govinfo 2024 annual edition of §164.304 instead.
