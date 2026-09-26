# Research brief: ISC2 Systems Security Certified Practitioner (SSCP)

Slug: `isc2-sscp`. Family prefix: `sscp`. Researched 26 September 2026. Every fact below was read
in a source fetched in this task, or in a source saved by the isc2-cc, isc2-cissp or isc2-ccsp
research and re-read here. New downloads are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/isc2-sscp/`
(`nist/`, `other/`, `gloss/`). Reused files stay in `…/sources/isc2-cc/`, `…/isc2-cissp/` and
`…/isc2-ccsp/`. `isc2-sscp-sources.json` gives each path.

**Prerequisite deck.** `prerequisiteDecks: ["isc2-cc"]`. `isc2-sscp-terms.json` starts with 179 CC
terms at topic 0, each with its `cc.*` concept (CIA, AAA, risk terms, control types, BC/DR
metrics, access control models, OSI/TCP/IP, firewall basics, cloud models, sanitisation, basic
cryptography, SIEM, incident response and testing terms). Writers never re-introduce them. isc2-cissp
is a sibling, not a prerequisite: an SSCP candidate need not hold CISSP, so CISSP-only terms that
SSCP needs are taught here, spelled as the CISSP registry spells them ("man-in-the-middle attack",
"keyed-hash message authentication code", "content distribution network", "type 1 hypervisor",
"trusted platform module"). Where SSCP's own outline uses a different name, the registry follows
the outline and the trap is flagged: "privileged access management" (CISSP: "privileged account
management"), "application whitelisting" (CISSP: "allowlisting").

**Reuse.** 50 NIST publications, the NIST licence page, ITU-T X.200, RFC 1122, ATT&CK, OWASP Top 10:2025,
two CSRC glossary entries and the ISC2 ethics, NDA and copyright pages come from earlier
research. New in this task: the SSCP outline PDF and web page, the SSCP page, fresh copies of
ISC2's CAT FAQ, pricing and member-policy pages, 16 NIST publications (SP 800-177r1, 800-124r2,
800-81r3, 800-189, 800-167, 800-111, 800-90B, 800-125Ar1, 800-97 [withdrawn], 800-120 [withdrawn],
FIPS 180-4, 198-1, 197-upd1, IR 8202, IR 8286 [withdrawn] and IR 8286r1), the IANA port registry
and its licensing page, the CVSS v4.0 specification, RFCs 6749, 2865 and 8907, two Microsoft Learn
pages (AD trusts, AD FS) and eight CSRC glossary entries.

**Internal use only.** The ISC2 outline is all rights reserved. The objective list below is for
mapping only and must not be published. Public pages describe coverage in our own topic labels
(CONTENT-POLICY §2.3).

## Topics

| Topic | Name | Outline objectives |
|---|---|---|
| T0 | isc2-cc terms (prerequisite) | — |
| T1 | Ethics and core security concepts | 1.1, 1.2 |
| T2 | Security controls | 1.3, 1.4 |
| T3 | Asset management lifecycle | 1.5 |
| T4 | Change and configuration management | 1.6 |
| T5 | Awareness, training and physical security operations | 1.7, 1.8 |
| T6 | Authentication methods and federation | 2.1 |
| T7 | Trust architectures and third-party connections | 2.2 |
| T8 | Identity lifecycle and access control models | 2.3, 2.4 |
| T9 | Risk management and legal concerns | 3.1, 3.2 |
| T10 | Security assessment and vulnerability management | 3.3 |
| T11 | Security monitoring and analysis | 3.4, 3.5 |
| T12 | Incident response lifecycle | 4.1 |
| T13 | Forensic investigations | 4.2 |
| T14 | Business continuity and disaster recovery | 4.3 |
| T15 | Cryptography concepts | 5.1, 5.2 |
| T16 | Secure protocols and PKI | 5.3, 5.4 |
| T17 | Networking fundamentals | 6.1 |
| T18 | Network attacks and countermeasures | 6.2 |
| T19 | Network access control and remote access | 6.3 |
| T20 | Network security devices and segmentation | 6.4, 6.5 |
| T21 | Wireless and IoT security | 6.6, 6.7 |
| T22 | Malicious code and activity | 7.1 |
| T23 | Endpoint and mobile device security | 7.2, 7.3 |
| T24 | Cloud and virtualisation security | 7.4, 7.5 |
| T25 | AI security across the domains | web page statement only |

## Exam facts

Sources: outline PDF `MAR-EXAMS-SSCP-Exam_Outline-English---10012025---FINAL.pdf` (`outline-en.txt`,
12 pages, footer "v10/2025"); outline page https://www.isc2.org/certifications/sscp/sscp-certification-exam-outline;
SSCP page https://www.isc2.org/certifications/sscp; CAT FAQ
https://www.isc2.org/certifications/computerized-adaptive-testing; pricing
https://www.isc2.org/register-for-exam/isc2-exam-pricing; member policies
https://www.isc2.org/policies-procedures/member-policies. All fetched 26 September 2026 and read in raw text.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | ISC2, Inc. | Footer: "ISC2, CISSP, SSCP, CCSP, … are registered marks of ISC2, Inc." | No |
| Current outline | Effective 1 October 2025 | PDF p.1 and web page: "Effective Date: October 1, 2025". PDF footer "v10/2025". No newer outline is announced on either page | **Yes** |
| Format | CAT | PDF: "The SSCP exam uses Computerized Adaptive Testing (CAT) for all English, Japanese, Spanish-Modern exams." Web: "… (CAT) for all exams." CAT FAQ: "CC, CISSP, CCSP and SSCP examinations are available exclusively in CAT format worldwide" | Sometimes |
| Items | 100 to 125 | PDF: "Number of items 100 - 125"; web "100-125". CAT FAQ: "a minimum of 100 items … The maximum item count is 125 for the CC and SSCP"; "Each exam will contain 25 pretest, or unscored items"; "CC and SSCP candidates must answer a minimum of 75 operational, or scored, items along with 25 pretest" | Sometimes |
| Time | 2 hours | PDF and web: "Length of exam 2 hours". CAT FAQ: "CC and SSCP examinations will have a two-hour maximum administration time." | Sometimes |
| Item format | Multiple choice and advanced items | "Multiple choice and advanced item types" (PDF and web) | Sometimes |
| Pass mark | 700 of 1000 | "Passing grade 700 out of 1000 points" (PDF and web) | Rarely |
| Scoring | Adaptive, no review | CAT FAQ: "item review is not permitted. Once a candidate finalizes an answer, it may not be reviewed or changed." Ends when "a candidate's ability estimate excludes the pass point with 95% statistical confidence", or by the Maximum-Length or Run-out-of-time rules. "If a candidate does not answer seventy-five (75) operational items and twenty-five (25) pretest items within the maximum time … the candidate will automatically fail" | Rarely |
| Weights | D1 16%, D2 15%, D3 15%, D4 14%, D5 9%, D6 16%, D7 15% | "SSCP CAT Examination Weights … Average Weight" (PDF p.3; web identical) | Yes (with each outline) |
| Languages | English, Japanese, Spanish | PDF: "Exam availability English, Japanese, Spanish"; web: "Language availability English, Japanese and Spanish" | Sometimes |
| Test centre | Pearson VUE | PDF: "Pearson VUE Testing Center"; web: "Pearson Testing Center" | Rarely |
| Retakes | 30, 60, then 90 test-free days; at most 4 in 12 months | CAT FAQ, for "CC, SSCP, CISSP, CCSP, CGRC, CSSLP, ISSAP, ISSEP and ISSMP": "You may retest after 30 test-free days" … "60 test-free days" … "90 test-free days"; "up to 4 times within a 12-month period for each certification program" | Sometimes |
| Price | US$249 standard | Pricing table, SSCP column: "U.S. $249" (Americas, Asia Pacific, Middle East, Africa), "EUR 239.04" (EMEA), "GBP 201.69" (UK). Reschedule "U.S. $50", cancel "U.S. $100". SSCP page: "Exam code must be scheduled and administered with 365 days of purchase"; Peace of Mind Protection gives "two exam attempts" with "180 days from purchase to sit both attempts" | **Often** |
| Experience | 1 year in 1 or more domains | "a minimum of one-year full-time experience in one or more of the seven domains" (web; the PDF omits "seven"). A bachelor's or master's degree "in computer science, information technology (IT) or related fields may satisfy up to one year". "Part-time work and internships may also count" | Sometimes |
| Associate route | 2 years | Web: "The Associate of ISC2 will then have two years to earn the one year required experience." Member policies: "SSCP up to two years" | Rarely |
| Maintenance | 3-year cycle; 60 CPE (45 Group A); AMF US$135 | Member policies CPE table, "SSCP, CGRC" row: Group A 15 a year / 45 over three years, Group A or B 5 / 15, total 20 / 60. "an AMF in the amount of U.S. $135" for all members except CC-only. Associates: "15 CPE credits annually" and "AMF of U.S. $50" | Sometimes |
| Accreditation | ISO/IEC 17024; DoDM 8140.03 | PDF: "ANSI National Accreditation Board (ANAB) ISO/IEC Standard 17024"; web: "ANSI/ISO/IEC Standard 17024". SSCP page: "ANAB Accredited ISO/IEC Standard 17024", "U.S. DoDM 8140.03 Approved by Department of Defense" | Rarely |

## Naming

- **Marks.** Every ISC2 page footer: "ISC2, CISSP, SSCP, CCSP, CGRC, CSSLP, HCISPP, ISSAP, ISSEP,
  ISSMP, CC, and CBK are registered marks of ISC2, Inc."
- **Copyright.** Footer: "All contents of this site constitute the property of ISC2, Inc. and may
  not be copied, reproduced or distributed without prior written permission." Copyright page:
  "Unauthorized use of the ISC2 marks is strictly prohibited."
- **Marks rules (member policies).** A mark "may not be used in any manner that expresses or might
  imply ISC2's affiliation, sponsorship, endorsement, certification, or approval, unless approved
  by ISC2 in writing"; marks "shall always be accompanied by ® except where prohibited by size
  constraints"; "Marks may not be translated or otherwise localized into any other language".
  The policy's own examples include "Misuse: ABC Partnership employs three (3) CISSPs." and
  "Misuse: Jasmine Domingo, SSCP, CISSP". So never pluralise "SSCP" and always add the ®.
- **NDA.** Candidates agree "That you may not disclose the Exam questions, items or answers or
  discuss any of the content of the Exam Materials with any person without prior written approval
  of ISC2".
- **How CONTENT-POLICY §4 applies.** ISC2 is not a §5 body. Name the exam in plain text only, to
  state a true fact, with our brand first. Write "SSCP®", use no logo, and never say "official",
  "approved" or "certified". Title: "[Site name] deck for the ISC2 Systems Security Certified
  Practitioner (SSCP®) exam". The outline is not openly licensed: link to it, never copy it
  (§2.3). ISC2's CBK, "Official ISC2 Training", the "Ultimate Guide" and the courses linked from
  the SSCP page are never sources (§2.2). The ethics page is tier C: state the canons in our own words.
- **Deck notice text:**

> ISC2, SSCP, CC and CBK are registered marks of ISC2, Inc. This deck is independent
> and is not affiliated with, sponsored, endorsed or approved by ISC2, Inc. It
> contains no ISC2 exam content and is not built from ISC2 study materials.

- **Attribution.** NIST works: cite each publication, then "Republished courtesy of the National
  Institute of Standards and Technology." (NIST licensing page). IANA registry: CC0 (see sources).
  ATT&CK: keep MITRE's copyright designation and licence. CVSS: "give proper attribution … that
  CVSS is owned by FIRST and used by permission"; the specification text is all rights reserved,
  so facts only. RFCs, Microsoft Learn pages and CSRC glossary quotations are facts only.

## Outline

Source: outline PDF, Domain 1 `#page=4`–`#page=5`, Domain 2 `#page=6`, Domain 3 `#page=7`,
Domain 4 `#page=8`, Domain 5 `#page=9`, Domain 6 `#page=10`, Domain 7 `#page=11`; same order on the
web page. 7 domains, 36 objectives. Items are summarised.

**Domain 1. Security Concepts and Practices: 16%**
- 1.1 Comply with codes of ethics: ISC2 Code of Ethics; organisational code [T1]
- 1.2 Security concepts: confidentiality, integrity, availability, accountability, non-repudiation, least privilege, SoD [T1]
- 1.3 Identify and implement controls: technical (firewalls, IDS, ACL), physical (mantraps, cameras, locks), administrative (policies, standards, procedures, baselines); assessing compliance requirements; periodic audit and review [T2]
- 1.4 Document and maintain functional controls: deterrent, preventative, detective, corrective, compensating [T2]
- 1.5 Asset management lifecycle (hardware, software, data): planning and design; development/acquisition (DevSecOps, testing); inventory and licensing (open, closed source); implementation/assessment; operation/maintenance/EOL; archival and retention; disposal and destruction [T3]
- 1.6 Change management lifecycle: change management (roles, responsibilities, processes, communications, audit); security impact analysis; configuration management [T4]
- 1.7 Security awareness and training (social engineering, phishing, tabletop exercises, awareness communications) [T5]
- 1.8 Collaborate with physical security operations (facility assessment, badging and visitor management, personal device restrictions) [T5]

**Domain 2. Access Controls: 15%**
- 2.1 Authentication methods: single/multi-factor; SSO (ADFS, OpenID Connect); device authentication (certificate, MAC address, TPM); federated access (OAuth2, SAML) [T6]
- 2.2 Internetwork trust architectures: trust relationships (1-way, 2-way, transitive, zero); internet, intranet, extranet, DMZ; third-party connections (API, app extensions, middleware) [T7]
- 2.3 Identity management lifecycle: authorisation, proofing, provisioning/de-provisioning, monitoring/reporting/maintenance, entitlement, IAM systems [T8]
- 2.4 Access controls: mandatory, discretionary, role-based (subject-based, object-based, PAM), rule-based, attribute-based [T8]

**Domain 3. Risk Identification, Monitoring and Analysis: 15%**
- 3.1 Risk management: visibility and reporting (risk register, threat intelligence sharing, IOC, CVSS, socialisation, MITRE ATT&CK); concepts (impact assessments, threat modelling, scope); frameworks (ISO, NIST); tolerance (appetite, quantification); treatment (accept, transfer, mitigate, avoid, ignore) [T9]
- 3.2 Legal and regulatory concerns (jurisdiction, limitations, privacy) [T9]
- 3.3 Security assessments and vulnerability management: RMF implementation, security testing, risk review (internal, supplier, architecture), vulnerability management lifecycle [T10]
- 3.4 Operate and monitor security platforms: source systems, events of interest, log management, SIEM [T11]
- 3.5 Analyse monitoring results: baselines and anomalies, visualisations and trends, event data analysis, documenting and escalating findings [T11]

**Domain 4. Incident Response and Recovery: 14%**
- 4.1 Incident response lifecycle (NIST, ISO): preparation; detection, analysis and escalation; containment; eradication; recovery; post-incident activities [T12]
- 4.2 Forensic investigations: legal (civil, criminal, administrative) and ethical principles; evidence handling (first responder, triage, chain of custody, preservation of scene); reporting; policy compliance [T13]
- 4.3 BCP and DRP activities: emergency response plans; interim or alternate processing; restoration planning (RTO, RPO, MTD); backup and redundancy; testing and drills [T14]

**Domain 5. Cryptography: 9%**
- 5.1 Reasons and requirements: confidentiality; integrity and authenticity; data sensitivity (PII, IP, PHI); regulatory and industry practice (PCI-DSS, ISO); entropy (quantum cryptography, QKD) [T15]
- 5.2 Concepts: hashing, salting, symmetric/asymmetric/ECC, non-repudiation (signatures, certificates, HMAC, audit trails), algorithm and key strength (AES, RSA), cryptographic attacks and cryptanalysis [T15]
- 5.3 Secure protocols: IPsec, TLS, S/MIME, DKIM; use cases; limitations and vulnerabilities [T16]
- 5.4 PKI: key management (storage, rotation, composition, generation, destruction, exchange, revocation, escrow); web of trust (PGP, GPG, blockchain) [T16]

**Domain 6. Network and Communications Security: 16%**
- 6.1 Networking fundamentals: OSI and TCP/IP, topologies, relationships (P2P, client-server), transmission media, SDN (SD-WAN, virtualisation, automation), common ports and protocols [T17]
- 6.2 Network attacks (DDoS, MITM, DNS cache poisoning) and countermeasures (CDN, firewalls, NAC, IDPS) [T18]
- 6.3 Network access controls (802.1X, RADIUS, TACACS+); remote access (thin client, VPN, VDI) [T19]
- 6.4 Network security: device placement (inline, passive, virtual), segmentation, secure device management [T20]
- 6.5 Network security appliances: firewalls and proxies (WAF, CASB), IDS/IPS, routers and switches, traffic shaping, NAC, DLP, UTM [T20]
- 6.6 Wireless: cellular, Wi-Fi, Bluetooth, NFC; WPA, EAP, WPA2, WPA3 [T21]
- 6.7 IoT: configuration, network isolation, firmware updates, EOL management [T21]

**Domain 7. Systems and Application Security: 15%**
- 7.1 Malicious code and activity: malware types; malware countermeasures; malicious activity types; activity countermeasures; social engineering methods; behaviour analytics (ML, AI) [T22]
- 7.2 Endpoint security: HIPS, HIDS, host firewalls, application whitelisting, endpoint encryption, TPM (HSM management), secure browsing, EDR [T23]
- 7.3 Administer and manage mobile devices: provisioning (COPE, BYOD, MDM), containerisation, encryption, mobile application management [T23]
- 7.4 Cloud security: deployment and service models, virtualisation (hypervisor, VPC), legal and regulatory concerns (eDiscovery, shadow IT), third-party requirements (SLA, portability, destruction, auditing), shared responsibility, data storage and transmission [T24]
- 7.5 Virtual environments: hypervisor Type 1/Type 2, virtual appliances, containers, storage management, continuity and resilience, threats (brute force, VM escape, threat hunting) [T24]

**AI statement (web page only).** Below the outline, the page has "How is AI Security Incorporated
into the SSCP Domains?". It says "By embedding AI topics into the seven SSCP domains, candidates
are tested to manage the technical realities of AI". Domain by domain it names "Algorithmic
Integrity", least privilege for AI agents and service accounts, adaptive authentication and
behavioural biometrics, "Model Drift" as an IoC, ML correlation engines, automated playbooks and
AI-assisted triage, "chain of custody" for model logs, backups of ML models and training data,
"Data in Use", blockchain for non-repudiation of AI decisions, micro-segmentation of AI training
clusters, AI-powered firewalls and IPS against "Low and Slow" attacks, ML library supply chain and
"Model Hijacking" or inference attacks. The PDF mentions AI only in 7.1: "Behavior analytics (e.g.,
machine learning, Artificial Intelligence (AI), data analytics)". [T25]

## Traps

- **New outline.** The SSCP outline changed on 1 October 2025 (PDF footer "v10/2025"). Material
  built on an earlier SSCP outline is suspect; the earlier outline was not fetched (see Not verified). [T1]
- **The PDF mislabels 7.3.** The PDF heads 7.3 "Endpoint detection and response (EDR)" but lists
  mobile provisioning, containerisation, encryption and MAM under it; the web page calls it
  "7.3 - Administer and manage mobile devices". EDR itself is a 7.2 bullet. [T23]
- **SSCP is not CISSP-lite in its numbers.** 100–125 items in 2 hours (CISSP: 100–150 in 3 hours);
  at least 75 scored plus 25 pretest items; no item review. [T1]
- **Associate window.** SSCP associates have two years to gain the one year of experience;
  member policies: "CISSP & CCSP up to six years". [T1]
- **Price.** SSCP costs US$249, not CC's US$199 or the US$599 of CCSP and others. [T1]
- **The AI statement is not in the outline.** Tag its topics to T25, not to numbered objectives. [T25]
- **Five control functions.** The outline's 1.4 list matches NIST IR 8286r1 exactly: preventative,
  deterrent, detective, corrective, compensating. A warning banner is deterrent; access-log alerts are detective. [T2]
- **Mantrap is now "access control vestibule".** SP 800-53 Rev. 5 errata: "Change 'Mantraps' to
  'Vestibules'"; PE-3(8) is "ACCESS CONTROL VESTIBULES". The outline still says mantraps. [T2] [T5]
- **"Ignore" is not a NIST risk response.** The outline lists "accept, transfer, mitigate, avoid,
  ignore"; SP 800-40r4's patch responses are accept, mitigate, transfer, avoid. Acceptance is a
  documented decision; ignoring is the absence of one. [T9] [T10]
- **Restore vs recovery.** The outline expands RTO as "Restore Time Objective" and RPO as "Restore
  Point Objectives"; SP 800-34 says Recovery Time Objective and Recovery Point Objective. "The RTO
  must ensure that the MTD is not exceeded"; "Unlike RTO, RPO is not considered as part of MTD." [T14]
- **Incident response model.** The outline's 4.1 phases are the previous SP 800-61 lifecycle.
  SP 800-61r3 (April 2025) "supersedes SP 800-61r2", keeps the old model only as "Fig. 1. Previous
  incident response life cycle model" and maps its phases to CSF 2.0 Functions in Table 1. Card
  the phases from the outline and the mapping from Rev. 3. [T12]
- **HMAC's name.** The outline says "Hash-based Message Authentication Code"; FIPS 198-1 is "The
  Keyed-Hash Message Authentication Code (HMAC)". SP 800-57 Pt 1: a MAC gives integrity and source
  authentication; only a digital signature can also "support a nonrepudiation decision". [T15]
- **Salting numbers.** SP 800-63B-4: passwords "SHALL be salted and hashed"; "The salt SHALL be at
  least 32 bits in length". Passwords are at least 15 characters single-factor, and composition
  rules and forced periodic changes are banned (CC teaches the last two). [T6] [T15]
- **AES.** "cryptographic keys of 128, 192, and 256 bits … in blocks of 128 bits" (FIPS 197,
  updated May 2023). Block size is not key size. [T15]
- **TLS.** SP 800-52r2: servers "shall not allow the use of SSL 2.0 or SSL 3.0. Agencies shall support
  TLS 1.3 by January 1, 2024." [T16]
- **OAuth is authorisation.** RFC 6749 is "The OAuth 2.0 Authorization Framework"; OpenID Connect
  adds identity (SP 800-63C-4 names the "ID Token in OpenID Connect"). The outline files OAuth2
  under "Federated access" with SAML. [T6]
- **Hypervisor names.** SP 800-125Ar1 uses "bare metal (Type 1 Hypervisor)" and "Host OS (Type 2
  Hypervisor)"; SP 800-125 says "bare metal" and "hosted". The outline's "Type 2 (e.g., software)" is its own gloss. [T24]
- **RADIUS vs TACACS+.** RFC 2865: "The officially assigned port number for RADIUS is 1812"
  (early deployments used 1645); RADIUS uses UDP and hides the User-Password attribute. RFC 8907:
  "TACACS+ uses TCP for its transport. TCP Server port 49". [T19]
- **SFTP is not port 115.** IANA registers 115/tcp as "sftp … Simple File Transfer"; SSH (including SSH
  file transfer) is 22/tcp. [T17]
- **Withdrawn Wi-Fi guidance.** SP 800-97 (802.11i, WPA/WPA2, EAP) was withdrawn on 31 December 2025
  ("technologically outdated. For Wi-Fi security standards, please refer to IEEE 802.11"). SP 800-120
  (EAP methods) was withdrawn on 19 October 2018. Card WPA/WPA2 history from SP 800-97 only as history. [T21]
- **Other supersessions.** NIST IR 8286 was withdrawn on 18 December 2025, "superseded in its
  entirety by NIST IR 8286r1". SP 800-81r3 (March 2026) supersedes SP 800-81-2. SP 800-124r2 supersedes
  Rev. 1. Cite the new versions. [T9] [T18] [T23]
- **Whitelisting vs allowlisting.** SP 800-167 and the SSCP outline say "application whitelisting";
  the CISSP registry uses "allowlisting". Same idea; keep the SSCP spelling here. [T23]
- **Mobile EDR.** SP 800-124r2 treats Mobile Threat Defense as "also known as, Mobile Endpoint Detection
  and Response (EDR)". [T23]
- **CVSS version.** The current specification is CVSS v4.0 (document version 1.2), with four metric
  groups: "Base, Threat, Environmental, and Supplemental". Check older material against it. Severity bands: None 0.0, Low 0.1–3.9, Medium 4.0–6.9, High 7.0–8.9, Critical 9.0–10.0. [T9]
- **CDN spelling.** The outline says "content delivery networks"; the CISSP registry says "content
  distribution network". SP 800-215 uses "content delivery networks (CDN)". [T18]
- **Trust defaults.** Microsoft: "All domain trusts in an on-premises AD DS forest are two-way,
  transitive trusts." One-way: "users in Domain A can access resources in Domain B. However, users
  in Domain B can't access resources in Domain A." [T7]

## Languages

The exam is offered in English, Japanese and Spanish (the PDF says "Spanish-Modern"). The outline
page links Japanese (`EXAMS-SSCP-Exam_Outline-JPN-10012025.pdf`) and Spanish
(`EXAMS-SSCP-Exam_Outline-ESN-10012025.pdf`) PDFs; their file names carry the same 1 October 2025
date, but they were not opened, and they are all rights reserved. NIST publications are English
only. No openly licensed translation of the main sources was found.

## Not verified

- **35 concepts rest on the outline or a withdrawn source** (see `note`): organisational code of
  ethics, open vs closed source, archival, change communications, MAC address authentication
  weakness, third-party connection types, inherited rights, new-standards maintenance,
  subject/object-based RBAC, ISO/IEC 27001, jurisdiction, legal limitations, internal risk review,
  ISO incident response, investigation types, ethics in investigations, policy compliance
  investigations, PCI DSS, QKD, protocol limitations, GPG, network topologies, transmission media,
  WAN optimisation, fileless malware, scareware, scarcity, behaviour analytics (UEBA); and 802.1X,
  its roles, WPA, WPA2, EAP and PSK vs enterprise (SP 800-97, withdrawn). Writers must find and read
  an open source before carding them, or drop them.
- **WPA3.** No open source was found. The Wi-Fi Alliance page was fetched once, but its terms say
  "no material from this site … may be copied" and bar access "for the purpose of providing any
  form of service … unless you have entered into a written agreement"; the copy was deleted and
  not used. Consider adding wi-fi.org to `src/no-fetch.json`. The NSA home-network guide
  (media.defense.gov) and CISA pages returned 403 and were not retried.
- **5G.** SP 800-187 covers LTE only; no NIST 5G guide was fetched. Cellular cards rest on LTE.
- **CVSS on NVD.** nvd.nist.gov/vuln-metrics/cvss is a JavaScript app and gave no text; CVSS facts
  come from FIRST (tier C).
- **The previous SSCP outline** and what changed on 1 October 2025 were not fetched.
- **Weak anchors.** Anchors were found by the first body-page match of a phrase. These need the
  page confirmed: `sscp.control-maintenance`, `sscp.threat-intel-sharing`, `sscp.impact-assessment`,
  `sscp.visualisation-trends`, `sscp.firewall-countermeasure`, `sscp.idps-countermeasure`,
  `sscp.wlan-threats`, `sscp.bluetooth-risks`, `sscp.iot-configuration`, `sscp.malware`,
  `sscp.malware-containment`, `sscp.container`, `sscp.container-vs-vm`, `sscp.storage-management`,
  `sscp.cloud-resilience`, `sscp.key-destruction`, `sscp.first-responder`, `sscp.cryptanalysis`,
  `sscp.dkim-vs-smime`, `sscp.pki-vs-wot`, `sscp.sym-vs-asym-use` (a
  glossary page) and `sscp.data-in-use` (SP 800-53 uses the phrase only in passing).
- **Licences not re-read.** OWASP's licence line comes from the isc2-cissp record. IETF Trust legal
  provisions were not fetched, so RFCs are tier C. SP 800-81r3 and AI 100-2 have non-NIST
  co-authors whose rights notes were not read.
- **PHI.** No HIPAA definition of PHI was fetched (45 CFR 160.103); `sscp.phi` cites SP 800-122's use of the term.
- **The ISC2 "supplementary references" list** (www.isc2.org/certifications/References) and the
  SSCP experience-requirements page were not fetched.
