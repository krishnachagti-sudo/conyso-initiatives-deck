# Research brief: ISC2 Certified Information Systems Security Professional (CISSP)

Slug: `isc2-cissp`. Family prefix: `cissp`. Researched 25 September 2026. Every fact
below was read in a source fetched in this task, or in a source saved by the isc2-ccsp or
iapp-cippe research and re-read here. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/isc2-cissp/`
(`nist/`, `law/`, `gloss/`, `other/`). Reused files stay in `…/sources/isc2-ccsp/` and
`…/sources/iapp-cippe/`. `isc2-cissp-sources.json` gives each path.

**Prerequisite decks.** None. isc2-ccsp is a sibling deck, not a prerequisite, so no term is at
topic 0. Where the two decks share a term, `isc2-cissp-terms.json` uses the CCSP spelling
(for example "threat modelling", "media sanitisation", "cryptographic erase", "zero trust",
"recovery point objective"). Writers should keep the two decks' wording aligned.

**Reuse.** The isc2-ccsp research already fetched 27 NIST publications, OWASP Top 10:2025, the OWASP
LLM Top 10, the CWE pages, Microsoft's STRIDE page and ISC2's CAT FAQ, pricing, member-policy,
copyright and NDA pages. This deck reuses them unchanged. It also reuses the GDPR text saved by
iapp-cippe. It adds 32 NIST publications, the CISSP outline and its web page, the ISC2 Code of
Ethics, five US Code sections (govinfo), six CSRC glossary entries, RFC 1122, ITU-T X.200 and the
2025 CWE Top 25 list page.

**Internal use only.** The ISC2 outline is all rights reserved. The objective list below is for
mapping only and must not be published. Public pages describe coverage in our own topic labels
(CONTENT-POLICY §2.3).

## Topics

| Topic | Name | Outline objectives |
|---|---|---|
| T1 | Ethics and core security concepts | 1.1, 1.2 |
| T2 | Governance, policy and control frameworks | 1.3, 1.6 |
| T3 | Law, privacy and investigation types | 1.4, 1.5 |
| T4 | Business continuity planning | 1.7, 7.13 |
| T5 | Personnel security and awareness | 1.8, 1.12, 7.15 |
| T6 | Risk management and controls | 1.9 |
| T7 | Threat modelling and supply chain risk | 1.10, 1.11 |
| T8 | Asset and data security | 2.1–2.6 |
| T9 | Secure design principles and security models | 3.1–3.3 |
| T10 | System capabilities and architecture vulnerabilities | 3.4, 3.5 |
| T11 | Cryptography and cryptanalytic attacks | 3.6, 3.7 |
| T12 | Site, facility and physical security | 3.8, 3.9, 7.14 |
| T13 | Information system lifecycle | 3.10 |
| T14 | Network architecture and protocols | 4.1 |
| T15 | Network components and secure channels | 4.2, 4.3 |
| T16 | Identification, authentication and federation | 5.1–5.3, 5.6 |
| T17 | Authorisation and identity lifecycle | 5.4, 5.5 |
| T18 | Security assessment, testing and audit | 6.1–6.5 |
| T19 | Investigations, logging and monitoring | 7.1, 7.2 |
| T20 | Operations, configuration, change and patching | 7.3–7.5, 7.8, 7.9 |
| T21 | Incident management and detective controls | 7.6, 7.7 |
| T22 | Recovery strategies and disaster recovery | 7.10–7.12 |
| T23 | Software development security | 8.1–8.5 |
| T24 | AI security across the domains | ISC2 web statement; 1.12, 7.7 |

## Exam facts

Sources: outline PDF `CISSP-Exam-Outline-April-2024-English.pdf` (`outline-en.txt`); outline page
https://www.isc2.org/certifications/cissp/cissp-certification-exam-outline; CISSP page
https://www.isc2.org/certifications/cissp; CAT FAQ https://www.isc2.org/certifications/computerized-adaptive-testing;
pricing https://www.isc2.org/register-for-exam/isc2-exam-pricing; member policies
https://www.isc2.org/policies-procedures/member-policies. The CAT, pricing and policy pages are
the isc2-ccsp copies (fetched the same day), re-read here for their CISSP rows.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | ISC2, Inc. | Footer: "ISC2, CISSP, … are registered marks of ISC2, Inc." | No |
| Current outline | Effective 15 April 2024 | PDF p.1: "Effective Date: April 15, 2024"; web page: "Effective Date: April 15, 2024". PDF footer "v9/2024". No notice of a newer outline on either page. | **Yes** (CCSP changed in August 2026) |
| Format | CAT for all exams | Web: "The CISSP exam uses Computerized Adaptive Testing (CAT) for all exams." PDF p.3: "for all English, German, Spanish-Modern, Japanese, Simplified Chinese exams". CAT FAQ: "CC, CISSP, CCSP and SSCP examinations are available exclusively in CAT format worldwide" | Sometimes |
| Items | 100 to 150 | PDF: "Number of items 100 - 150". CAT FAQ: "a minimum of 100 items … The maximum item count is … 150 items for the CISSP and CCSP examinations. Each exam will contain 25 pretest, or unscored items" | Sometimes |
| Time | 3 hours | PDF: "Length of exam 3 hours". CAT FAQ: "Maximum administration time for CISSP is three hours." | Sometimes |
| Item format | Multiple choice and advanced items | PDF: "Multiple choice and advanced innovative items"; web: "Multiple choice and advanced item types" | Sometimes |
| Pass mark | 700 of 1000 | "Passing grade 700 out of 1000 points" (PDF and web) | Rarely |
| Scoring | Adaptive, no item review | CAT FAQ: "item review is not permitted. Once a candidate finalizes an answer, it may not be reviewed or changed." Stops when "a candidate's ability estimate excludes the pass point with 95% statistical confidence", or by the Maximum-Length rule | Rarely |
| Weights | D1 16%, D2 10%, D3 13%, D4 13%, D5 13%, D6 12%, D7 13%, D8 10% | "CISSP CAT Examination Weights … Average Weight" (PDF p.3; web identical) | Yes (with each outline) |
| Languages | Chinese, English, German, Japanese, Spanish | "Exam language availability Chinese, English, German, Japanese, Spanish". Web: "Notice: Chinese language CISSP exams are only available during select appointment windows. Annual Availability: March 1-31, June 1-30, September 1-30, December 1-31" | Sometimes |
| Test centre | Pearson VUE | PDF: "ISC2 Authorized PPC and PVTC Select Pearson VUE Testing Centers"; web: "… Select Pearson Testing Centers" | Rarely |
| Retakes | 30, 60, then 90 test-free days; at most 4 in 12 months | CAT FAQ: "After your first exam attempt: You may retest after 30 test-free days." … "60 test-free days" … "90 test-free days". "You may attempt an ISC2 exam up to 4 times within a 12-month period for each certification program." | Sometimes |
| Price | US$749 standard | Pricing table, CISSP column: "U.S. $749" (Americas and Asia Pacific), "EUR 719.04" (EMEA), "GBP 606.69" (UK). CISSP page: "Exam code must be scheduled and administered with 365 days of purchase." Peace of Mind Protection: "two exam attempts" with "180 days from purchase to sit both attempts" | **Often** |
| Experience | 5 years in 2 or more of the 8 domains | "a minimum of five years cumulative, full-time experience in two or more of the eight domains". A degree "may satisfy up to one year" or "an additional credential from the ISC2 approved list may satisfy up to one year". Web only: "Only one year of experience can be waived." "Part-time work and internships may also count" | Sometimes |
| Associate route | 6 years | "The Associate of ISC2 will then have six years to earn the five years required experience." Member policies: "CISSP & CCSP up to six years" | Rarely |
| Validity | 3-year cycle; 120 CPE (90 Group A); AMF US$135 | Member policies: CPE "over their three-year certification cycle"; CISSP row "Group A 30 90 Group A or B 10 30 Total 40 120" (annual, then 3-year total); "an AMF in the amount of U.S. $135" (all members except CC-only) | Sometimes |
| Accreditation | ANAB, ISO/IEC 17024; DoDM 8140.03 | Web: "the ANSI National Accreditation Board (ANAB) ISO/IEC Standard 17024". PDF: "ANSI/ ISO/IEC Standard 17024". CISSP page: "U.S. DoDM 8140.03 Approved by Department of Defense" | Rarely |

## Naming

- **Marks.** Every ISC2 page footer: "ISC2, CISSP, SSCP, CCSP, CGRC, CSSLP, HCISPP, ISSAP, ISSEP,
  ISSMP, CC, and CBK are registered marks of ISC2, Inc."
- **Copyright.** "All contents of this site constitute the property of ISC2, Inc. and may not be
  copied, reproduced or distributed without prior written permission." The Copyright Information
  page adds "Unauthorized use of the ISC2 marks is strictly prohibited." (isc2-ccsp copy).
- **Marks rules (addressed to certified members).** The member policies say a mark "may not be
  used in any manner that expresses or might imply ISC2's affiliation, sponsorship, endorsement,
  certification, or approval, unless approved by ISC2 in writing"; marks "shall always be
  accompanied by ®"; and "Marks may not be translated or otherwise localized into any other
  language". They also give "Misuse: ABC Partnership employs three (3) CISSPs.", so never use
  "CISSPs" as a plural noun.
- **NDA.** "you may not disclose the Exam questions, items or answers or discuss any of the
  content of the Exam Materials with any person without prior written approval of ISC2."
- **How CONTENT-POLICY §4 applies.** ISC2 is not a §5 body. Name the exam in plain text only, to
  state a true fact, with our brand first. Write "CISSP®" with the ®, use no logo, and never say
  "official", "approved" or "certified". Title pattern: "[Site name] deck for the ISC2 Certified
  Information Systems Security Professional (CISSP®) exam". Never translate the mark. The outline
  is not openly licensed, so link to it and never copy it (§2.3). ISC2's CBK books, "Official ISC2
  Training", the CISSP flash cards and quiz linked from the CISSP page are never sources (§2.2).
  The ISC2 Code of Ethics page is tier C: state the four canons in our own words and link to it.
- **Deck notice text:**

> ISC2, CISSP and CBK are registered marks of ISC2, Inc. This deck is independent
> and is not affiliated with, sponsored, endorsed or approved by ISC2, Inc. It
> contains no ISC2 exam content and is not built from ISC2 study materials.

- **Attribution.** NIST: cite each publication, followed by "Republished courtesy of the National
  Institute of Standards and Technology." (NIST licensing page, per the isc2-ccsp research). US Code:
  public domain (17 U.S.C. §105). CWE: keep MITRE's copyright designation and licence with any copy.
  OWASP Top 10:2025 and the LLM Top 10: see their licence lines in the sources file. CSRC glossary
  definitions quote other documents (CNSSI 4009, RFC 4949), so treat them as facts only. RFC 1122,
  ITU-T X.200 and Microsoft's STRIDE page are facts only.

## Outline

Source: outline PDF `#page=4`–`#page=14`, same order as the web page. 8 domains, 62 objectives.
Items are summarised.

**Domain 1. Security and Risk Management: 16%**
- 1.1 Professional ethics: ISC2 Code of Professional Ethics; organisational code of ethics [T1]
- 1.2 Security concepts: CIA, authenticity, non-repudiation ("5 Pillars") [T1]
- 1.3 Governance principles: alignment to strategy, organisational processes (acquisitions, divestitures, governance committees), roles and responsibilities, control frameworks (ISO, NIST, COBIT, SABSA, PCI, FedRAMP), due care and due diligence [T2]
- 1.4 Legal, regulatory and compliance issues: cybercrime and breaches, licensing and IP, import/export controls, transborder data flow, privacy (GDPR, California Consumer Privacy Act, PIPL, POPIA), contractual, legal, industry and regulatory requirements [T3]
- 1.5 Investigation types (administrative, criminal, civil, regulatory, industry standards) [T3]
- 1.6 Policy, standards, procedures and guidelines [T2]
- 1.7 Business continuity requirements: BIA, external dependencies [T4]
- 1.8 Personnel security: screening and hiring, employment agreements, onboarding/transfers/termination, vendor and contractor agreements [T5]
- 1.9 Risk management: threat and vulnerability identification, analysis/assessment/scope, response and treatment (cyber insurance), control types (preventive, detective, corrective), control assessments, continuous monitoring, reporting, continuous improvement (risk maturity), risk frameworks [T6]
- 1.10 Threat modelling concepts and methodologies [T7]
- 1.11 Supply chain risk management: tampering, counterfeits, implants; third-party assessment, minimum requirements, service level requirements, silicon root of trust, PUF, SBOM [T7]
- 1.12 Awareness, education and training: social engineering, phishing, security champions, gamification; content reviews (cryptocurrency, AI, blockchain); effectiveness evaluation [T5] [T24]

**Domain 2. Asset Security: 10%**
- 2.1 Identify and classify information and assets [T8]
- 2.2 Information and asset handling requirements [T8]
- 2.3 Provision securely: ownership, inventory (tangible, intangible), asset management [T8]
- 2.4 Data lifecycle: data roles (owners, controllers, custodians, processors, users/subjects), collection, location, maintenance, retention, remanence, destruction [T8]
- 2.5 Asset retention (EOL, end of support) [T8]
- 2.6 Data security controls: data states, scoping and tailoring, standards selection, DRM, DLP, CASB [T8]

**Domain 3. Security Architecture and Engineering: 13%**
- 3.1 Secure design principles: threat modelling, least privilege, defence in depth, secure defaults, fail securely, SoD, keep it simple, zero trust, privacy by design, shared responsibility, SASE [T9]
- 3.2 Security models (Biba, Star Model, Bell-LaPadula) [T9]
- 3.3 Select controls from system security requirements [T9]
- 3.4 IS security capabilities (memory protection, TPM, encryption) [T10]
- 3.5 Vulnerabilities of client, server, database, cryptographic, ICS, cloud (SaaS/IaaS/PaaS), distributed, IoT, microservices/API, container, serverless, embedded, HPC, edge and virtualised systems [T10]
- 3.6 Cryptographic solutions: lifecycle, methods (symmetric, asymmetric, elliptic curves, quantum), PKI (QKD), key management (rotation), digital signatures and certificates [T11]
- 3.7 Cryptanalytic attacks: brute force, ciphertext only, known plaintext, frequency analysis, chosen ciphertext, implementation, side-channel, fault injection, timing, MITM, pass the hash, Kerberos exploitation, ransomware [T11]
- 3.8 Security principles for site and facility design [T12]
- 3.9 Site and facility controls: wiring closets, server rooms, media and evidence storage, restricted areas, HVAC, environmental issues, fire, power [T12]
- 3.10 Information system lifecycle: stakeholder needs through retirement and disposal [T13]

**Domain 4. Communication and Network Security: 13%**
- 4.1 Secure network architecture: OSI and TCP/IP, IPv4/IPv6 addressing, secure protocols (IPsec, SSH, SSL/TLS), multilayer and converged protocols (iSCSI, VoIP, InfiniBand over Ethernet, CXL), transport architecture, performance metrics, traffic flows, physical and logical segmentation, micro-segmentation, edge networks, wireless (Bluetooth, Wi-Fi, Zigbee, satellite), cellular (4G, 5G), CDN, SDN (SD-WAN, NFV), VPC, monitoring and management [T14]
- 4.2 Secure network components: infrastructure operation, transmission media, NAC, endpoint security [T15]
- 4.3 Secure communication channels: voice/video/collaboration, remote access, data communications, third-party connectivity [T15]

**Domain 5. Identity and Access Management: 13%**
- 5.1 Control physical and logical access to information, systems, devices, facilities, applications, services [T16]
- 5.2 Identification and authentication strategy: groups and roles, AAA (MFA, passwordless), session management, registration and proofing, FIM, credential management, SSO, just-in-time [T16]
- 5.3 Federated identity with a third-party service (on-premises, cloud, hybrid) [T16]
- 5.4 Authorisation mechanisms: RBAC, rule-based, MAC, DAC, ABAC, risk-based, PDP/PEP [T17]
- 5.5 Identity and access provisioning lifecycle: access review, provisioning and deprovisioning, role transition, privilege escalation, service accounts [T17]
- 5.6 Implement authentication systems [T16]

**Domain 6. Security Assessment and Testing: 12%**
- 6.1 Assessment, test and audit strategies (internal, external, third-party; location) [T18]
- 6.2 Security control testing: vulnerability assessment, penetration testing (red, blue, purple), log reviews, synthetic transactions, code review, misuse case testing, coverage analysis, interface testing, breach attack simulation, compliance checks [T18]
- 6.3 Security process data: account management, management review, KPIs and KRIs, backup verification, training, DR and BC [T18]
- 6.4 Analyse test output and report: remediation, exception handling, ethical disclosure [T18]
- 6.5 Security audits (internal, external, third-party; location) [T18]

**Domain 7. Security Operations: 13%**
- 7.1 Investigations: evidence collection and handling, reporting, techniques, forensic tools, artifacts [T19]
- 7.2 Logging and monitoring: IDPS, SIEM, continuous monitoring and tuning, egress monitoring, log management, threat intelligence (feeds, hunting), UEBA [T19]
- 7.3 Configuration management (provisioning, baselining, automation) [T20]
- 7.4 Foundational concepts: need-to-know and least privilege, SoD, privileged account management, job rotation, SLAs [T20]
- 7.5 Resource protection: media management and protection, data at rest and in transit [T20]
- 7.6 Incident management: detection, response, mitigation, reporting, recovery, remediation, lessons learned [T21]
- 7.7 Detective and preventive measures: firewalls (NGFW, WAF, network), IDS/IPS, allow/deny lists, third-party security services, sandboxing, honeypots and honeynets, anti-malware, ML and AI tools [T21] [T24]
- 7.8 Patch and vulnerability management [T20]
- 7.9 Change management [T20]
- 7.10 Recovery strategies: backup storage, recovery sites (cold vs hot, resource capacity agreements), multiple processing sites, resilience, HA, QoS, fault tolerance [T22]
- 7.11 DR processes: response, personnel, communications, assessment, restoration, training, lessons learned [T22]
- 7.12 Test DR plans: read-through/tabletop, walkthrough, simulation, parallel, full interruption, communications [T22]
- 7.13 BC planning and exercises [T4]
- 7.14 Physical security: perimeter and internal controls [T12]
- 7.15 Personnel safety: travel, security training (insider threat, social media, 2FA fatigue), emergency management, duress [T5]

**Domain 8. Software Development Security: 10%**
- 8.1 Security in the SDLC: methodologies (Agile, Waterfall, DevOps, DevSecOps, SAFe), maturity models (CMM, SAMM), operation and maintenance, change management, integrated product team [T23]
- 8.2 Controls in development ecosystems: languages, libraries, tool sets, IDE, runtime, CI/CD, software CM, code repositories, AST (SAST, DAST, SCA, IAST) [T23]
- 8.3 Effectiveness of software security: change auditing and logging, risk analysis and mitigation [T23]
- 8.4 Acquired software: COTS, open source, third-party, managed services, cloud services [T23]
- 8.5 Secure coding: source-code weaknesses, API security, secure coding practices, software-defined security [T23]

**AI statement (web page only).** Below the outline, the web page has a section "How is AI
Security Incorporated into the CISSP Domains?". It says "ISC2 continues to interweave AI-specific
security tasks and subtasks across all eight domains of the CISSP Exam Outline". It then names, domain
by domain, topics such as algorithmic bias, data poisoning, model weights, prompt injection,
"Explainable AI", AI agents as non-human identities, red teaming of AI, SOAR, "Model Drift" and
"Model Hijacking". None of these words is in the April 2024 PDF except "artificial intelligence (AI)" in
1.12 and "Machine learning and artificial intelligence (AI) based tools" in 7.7. T24 covers them from
NIST AI 100-1 and AI 100-2 and the OWASP LLM Top 10. [T24]

## Traps

- **Which outline.** The CISSP outline is still the one effective 15 April 2024 (footer
  "v9/2024"), while CCSP moved to a new outline on 1 August 2026. Don't carry CCSP's outline,
  weights or Chinese windows over to CISSP. [T1]
- **Translated outlines are older.** The web page's Chinese, German, Japanese and Spanish PDFs are
  named `CISSP-Exam-Outline-May-2021-<language>.pdf`. They were not opened, but their names show
  an earlier outline than the English April 2024 one. [T1]
- **The CAT exam.** 100 to 150 items in 3 hours, including 25 unscored pretest items, and no going
  back to review an item. [T1]
- **The AI statement is not in the outline.** The AI topics on the web page are not objectives
  in the April 2024 PDF. Tag those cards to T24 and don't attach them to numbered objectives. [T24]
- **"5 Pillars"** is the outline's own phrase: CIA plus authenticity and non-repudiation. [T1]
- **Principle names changed.** SP 800-160 Vol. 1 Rev. 1 calls the outline's "secure defaults" and
  "fail securely" *Protective Defaults* (E.22) and *Protective Failure* (E.23). "Keep it simple" is *Reduced
  Complexity* (E.25). The outline says "Segregation of Duties"; SP 800-53 says "SEPARATION OF DUTIES". [T9]
- **Bell-LaPadula vs Biba.** SP 800-53 AC-3(3): "the Bell-LaPadula policy to protect confidentiality
  of information and the Biba policy to protect the integrity of information". The detailed rules
  (simple and star properties) were not found in any open source (see Not verified). [T9]
- **Hypervisor types.** SP 800-125 says "bare metal" and "hosted", while the outline and common usage say type 1 and 2. [T10]
- **Clear, purge and destroy.** These are three different methods, and cryptographic erase is a purge
  technique. SP 800-88 Rev. 2 supersedes Rev. 1, and it does not use the word "remanence" that the
  outline uses. [T8]
- **RTO, RPO and MTD.** SP 800-34: "the RTO must ensure that the MTD is not exceeded"; "Unlike RTO,
  RPO is not considered as part of MTD." RPO is a point in time (data loss), not downtime. [T4]
- **Risk responses.** SP 800-39 treats "Risk Sharing or Transfer" as one response. The outline
  names cyber insurance as a treatment. [T6]
- **Incident response model.** SP 800-61 Rev. 3 (April 2025) is "A CSF 2.0 Community Profile"
  and supersedes Rev. 2. Material built on Rev. 2's phases is out of date. The outline's 7.6 list
  (detection … lessons learned) is ISC2's own wording; card it from the outline, not as a NIST model. [T21]
- **CSF 2.0.** "CSF 2.0 contains new features that highlight the importance of governance and
  supply chains". It has "six Functions", with GOVERN (GV) first. [T2]
- **Passwords (SP 800-63B-4, July 2025).** Single-factor passwords must be "a minimum of 15
  characters", or eight when used in MFA. "Verifiers and CSPs SHALL NOT impose other composition
  rules" and "SHALL NOT require subscribers to change passwords periodically". Cards that demand
  complexity or forced rotation contradict it. SP 800-63-4 superseded 800-63-3 (isc2-ccsp). [T16]
- **TLS.** SP 800-52r2: servers "shall not allow the use of SSL 2.0 or SSL 3.0. Agencies shall support TLS
  1.3 by January 1, 2024." The outline still writes "SSL/TLS". [T14]
- **Withdrawn NIST publications.** SP 800-32 (PKI introduction) was withdrawn on 13 September 2021.
  NIST IR 8259 (IoT) was withdrawn on 20 April 2026 and "superseded and replaced in its entirety by NIST IR 8259r1". FIPS
  186-5 "Supersedes FIPS 186-4". Don't cite the old versions. [T10] [T11]
- **CWE Top 25 2025.** The ranking changed. CWE-79 (XSS) is 1, CWE-89 (SQL injection) 2, CWE-352 (CSRF) 3,
  CWE-862 (Missing Authorization) 4, and CWE-787 (out-of-bounds write) 5 ("-3" vs 2024). OWASP Top 10 also has a
  2025 edition. [T23]
- **Misuse vs abuse case.** The CISSP outline says "misuse case testing", while CCSP says "abuse
  cases". Keep both spellings as the outlines use them. [T18]
- **GDPR numbers.** Breach notice to the authority "not later than 72 hours after having become
  aware of it". There are two fine tiers: "10 000 000 EUR … 2 %" and 20 000 000 EUR with 4 % of
  worldwide annual turnover, "whichever is higher". [T3]
- **IP terms.** Copyright "endures for a term consisting of the life of the author and 70 years after
  the author's death" (17 U.S.C. §302). The patent term ends "20 years from the date on which the
  application for the patent was filed" (35 U.S.C. §154). These are US rules. [T3]
- **Experience waiver.** The web page adds "Only one year of experience can be waived", a line the
  PDF lacks. A degree or an approved credential each give at most one year, and they do not add
  together. [T1]
- **Price.** CISSP costs US$749, not the US$599 of CCSP, ISSAP, ISSEP, ISSMP and CGRC. [T1]

## Languages

The exam is offered in Chinese, English, German, Japanese and Spanish (the PDF says
"Spanish-Modern" and "Simplified Chinese"). Chinese is offered only in the March, June,
September and December windows. The outline page links Chinese, Japanese, German and Spanish
PDFs, but they are May 2021 versions and all rights reserved. NIST publications are English only. No openly licensed
translation of the main sources was found.

## Not verified

- **Security-model rules.** No open source gives the Bell-LaPadula simple and star properties
  ("no read up, no write down"), Biba's rules, Clark-Wilson or the outline's "Star Model". CSRC
  glossary pages for them returned 404. The concepts cite SP 800-53 AC-3(3) and NIST IR 7316 for
  purpose only.
- **Classic formulas.** SLE, ALE and ARO appear in no source fetched. They are not in the outline
  either, so no concept was made.
- **113 concepts are "Outline only"** (see `note`). No open source was fetched for due care and due
  diligence, investigation types and burdens of proof, CCPA, PIPL, POPIA, trademarks and licensing,
  export controls (EAR, ITAR, Wassenaar), privacy by design, the classic cryptanalytic attacks
  (ciphertext-only, known-plaintext, chosen-ciphertext, frequency analysis, fault injection,
  timing, pass the hash), SSH, converged protocols, Zigbee, satellite, CDN, VPC, SDN itself, DR test
  types (read-through to full interruption), SAFe, CMM, OWASP SAMM, UEBA, DRM, job rotation and
  several 6.2 test types. Writers must find and read an open source before carding them, or drop them.
- **SP 800-153** (WLAN, 2012) and **SP 800-119** (IPv6, 2010) are old. Their status pages were not
  checked for newer revisions.
- **5G.** SP 800-187 covers LTE only. No NIST 5G guide was fetched.
- **Weak anchors.** Page anchors were found by the first body-page match of a phrase. These
  concepts carry the note "Anchor weak; confirm page": policy vs standard, supplier requirements,
  external dependencies, and identification vs authentication. Others that match a common word
  (for example `cissp.incident`, `cissp.firewall`, `cissp.api-security`, `cissp.subject-object`)
  also need the page confirmed.
- **Licences not re-read.** OWASP, CWE and NIST licence texts come from the isc2-ccsp research.
  The GDPR licence was not readable (EUR-Lex WAF, per iapp-cippe). RFC 1122 carries only
  "Distribution of this memo is unlimited", and the IETF Trust provisions were not fetched, so it is tier C.
- **NIST co-authored works.** Several publications (SP 800-160, SP 800-82r3, AI 100-2) list
  non-NIST co-authors, and their rights notes were not read. The same caveat applies as in isc2-ccsp.
- **The previous (2021) CISSP outline** was not fetched, so what changed in April 2024 is not
  stated here.
- **The ISC2 "supplementary references" list** (www.isc2.org/certifications/References) was not fetched.
