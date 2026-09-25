# Research brief: Kubernetes and Cloud Native Security Associate (KCSA)

Slug: `kcsa`. Researched 25 September 2026. Every fact below was read in a source
downloaded during this task. Raw copies and extracted text are in the scratch folder
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/kcsa/`
(file names given as `[file]`).

**Prerequisite deck.** The KCSA deck assumes the KCNA deck. The KCNA brief
(`research/deck-briefs/kcna.md`) and its 304 primer terms
(`decks/kcna/notes/*.json`, field `introduces`) are topic 0 in the registry
(`kcsa-terms.json`). This brief adds only new security terms. Where KCSA goes
deeper on a KCNA term (RBAC, Pod Security Standards, Secret, NetworkPolicy and
others), the deck adds fact and application cards but **no new primer**.

How sources were read:
- **CNCF curriculum.** Read from a read-only clone of `cncf/curriculum` (branch
  `master`, head `f6c7667`, 2026-03-14) in the scratch folder. PDFs were extracted
  with `pdftotext -layout`.
- **kubernetes.io pages.** Read as Markdown in a sparse, read-only clone of
  `kubernetes/website`, branch `main`, commit `1e1be1df9361f0c7e7fd8d3e76e8e0519638f964`
  (24 Sep 2026, the same commit as the KCNA brief). Every kubernetes.io URL and anchor
  cited in the inventory was then fetched live and checked: all 42 pages returned the
  page, and every anchor was present. The live site serves v1.37 ("Latest
  Release:1.37.0 (released: 2026-08-26)", https://kubernetes.io/releases/).
- **Other repositories.** Read the same way (read-only clones in scratch, never the
  project repo): `cncf/tag-security` (head `5fb87f4`, 2025-12-07),
  `cncf/financial-user-group` (head `d8637f4`, 2022-07-19), `kubernetes/sig-security`,
  `cncf/glossary` (head `03032a8`, 2026-09-22), and the tool doc repos listed in §2.
  **Note for the coordinator:** as in the KCNA brief, I read "Never run git" as
  "never run git on the project". These clones exist only in scratch.

---

## 1. Exam facts

**Owner.** The curriculum is a CNCF publication, and the exam is delivered by the Linux
Foundation (LF Education). The curriculum PDF says: "A Cloud Native Computing Foundation
(CNCF) Publication" and "CNCF is part of The Linux Foundation, a nonproﬁt organization."
[`KCSA_Curriculum.txt`, p.1 and p.3]

| Fact | Value | Quote and source | Volatile? |
|---|---|---|---|
| Current outline | 6 domains, 42 competencies in the PDF (43 on the LF page, see §3). **No version number.** | PDF "KCSA Curriculum.pdf" in `cncf/curriculum` (last changed by commit `007442f` "KCSA Exam Curriculum", **2024-06-24**). The LF product page (JSON-LD `dateModified` 2026-07-28) and the CNCF page list the same domains and weights. | Yes |
| Previous outline | Same domains and competencies, but Compliance and Security Frameworks weighted **16%**, so the weights summed to 106% | `old-versions/KCSA Curriculum.pdf`, committed 2024-02-22 (`de66c40`), archived 2024-10-01 (`5084d03`). [`old-KCSA_Curriculum.txt`] | – |
| Effective date of the current outline | **Not published.** The PDF changed on 2024-06-24; no LF "program changes" page exists for KCSA (the URL `training.linuxfoundation.org/kcsa-program-changes/` redirects to the LF home page). | [`lf-kcsa-changes.html`] | – |
| Format | Online, proctored, multiple choice | "This exam is an online, proctored, multiple-choice exam." LF product page https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/ ("Exam Details & Resources"); same sentence on https://www.cncf.io/training/certification/kcsa/ [`lf-kcsa.txt`, `cncf-kcsa.txt`] | Rarely |
| Number of questions | **60** (generic LF statement for all multiple-choice exams except CNPA) | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions. * CNPA exam consists of  85 multiple-choice questions." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc ("Exam Details"). **No KCSA-specific page states the count** (see §10). [`lf-important-instructions-mc.txt`] | Yes |
| Time | 90 minutes | Product page: "Duration of Exam 90 minutes". FAQ: "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc [`lf-faq-mc.txt`] | Yes |
| Pass mark | 75% | "A score of 75% or above must be earned to pass the Multiple Choice Exam." (faq-mc, "What score is needed to pass the exam?") | Yes |
| Results | Emailed within 24 hours; no per-item feedback | "a score report will be sent to the candidate via email within 24 hours from the time that the exam was completed" and "LF does not report performance on individual items" (https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/exam-scoring-and-notification) | Rarely |
| Retake | One retake per purchase, within 12 months of purchase | "One (1) retake per Exam purchase will be granted in the event that a passing score is not achieved…"; "the retake must be taken within 12 months of the date of the original Exam purchase." "For Certification exam purchases marked as SINGLE-ATTEMPT or SINGLE, only a single attempt will be granted." (https://docs.linuxfoundation.org/tc-docs/certification/exam-terms-of-service, Retake Policy). Product page: "✔ Two exam attempts", "One Retake". CNCF page: "The cost is $250 and includes one free retake." | Yes |
| Eligibility window | 12 months to schedule and take the exam | Product page: "✔ 12-months to schedule & take the exam", "12 Month Exam Eligibility". Handbook: "When a candidate registers for an exam they will have 12 months to schedule and take the exam" (…/lf-handbook2/exam-registration) | Yes |
| Validity | 2 years | Product page: "Certification Valid for 2 Years". faq-mc: "Certifications are valid for 2 years." Handbook: "Certifications become non-current (expire) 24  months from the date that a certificant successfully passes their certification exam" (…/lf-handbook2/certificates-and-certification) | Yes |
| Renewal | Retake and pass before expiry, or pass CKS (CARE programme) | faq-mc: "Candidates have the option to retake and pass the exam to renew their certification." "KCSA: Passing the Certified Kubernetes Security Specialist (CKS) exam will automatically renew your KCSA." CNCF page: "KCSA is part of the CARE program in order to simplify the Certification Maintenance." | Yes |
| Price | US$250, exam only; $495 bundled with a THRIVE-ONE subscription | Product page: "$250 Exam only"; "$495 Exam + Full Access Subscription". CNCF page: "Cost $250 \| Online Exam" and "考试费 ¥1,858 (含税)" | Yes, changes often |
| Level and prerequisites | Beginner; no prerequisites; "pre-professional" | Product page: "Experience Level: Beginner"; "There are no prerequisites for this exam."; "a pre-professional certification designed for candidates interested in advancing to the professional level" | Rarely |

**Facts that change often:** price and bundles, question count, duration, pass mark,
retake and eligibility rules, and the outline weights. The weights already changed
once (2024-06-24). Every exam-fact card needs `ValidAsOf: 2026-09-25`.

**Kubernetes version.** No KCSA source names a Kubernetes version. The curriculum README
says "The document major and minor version (e.g., the 1 and 8 in 1.8.0) match the
version of Kubernetes", but the KCSA PDF carries no version. The CKS PDF, by contrast,
is `CKS_Curriculum v1.34.pdf`. Cards whose facts depend on the Kubernetes version should
carry `ValidAsOf: 2026-09-25 · Kubernetes docs v1.37`.

---

## 2. Sources

Tier letters follow CONTENT-POLICY.md §3. Tier B now explicitly includes "a
permissive software licence (Apache 2.0, MIT) on documentation", so the KCNA brief's
"B?" for Apache docs is settled as B.

| # | Title | URL | Publisher | Licence as quoted from the source | Tier | Deck use |
|---|---|---|---|---|---|---|
| S1 | KCSA Exam Curriculum (PDF), current | https://github.com/cncf/curriculum/blob/master/KCSA%20Curriculum.pdf | CNCF | README: "The Curriculum is available under the [CC-BY 4.0+ License](https://creativecommons.org/licenses/by/4.0/)." (https://github.com/cncf/curriculum/blob/master/README.md) [`README.md`] | B | Outline, weights, `ExamRefs` |
| S2 | KCSA curriculum README | https://github.com/cncf/curriculum/blob/master/kcsa/README.md | CNCF | As S1 | B | Exam description only. **Its domain table conflicts with S1, S3 and S4** (§7). Do not use it for weights. |
| S3 | KCSA curriculum, previous version | https://github.com/cncf/curriculum/blob/master/old-versions/KCSA%20Curriculum.pdf | CNCF | As S1 | B | Traps (the old 16% weight) |
| S4 | LF KCSA product page | https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/ | Linux Foundation | "© 2026 Linux Foundation - Education.  The Linux Foundation®. All rights reserved." | C | Exam facts; the outline as the LF lists it |
| S5 | CNCF KCSA page | https://www.cncf.io/training/certification/kcsa/ | CNCF / LF | "Copyright © 2026 The Linux Foundation®. All rights reserved." | C | Cross-check of weights, price, CARE |
| S6 | LF Multiple Choice FAQ; Important Instructions; Candidate Handbook; Exam Terms of Service | https://docs.linuxfoundation.org/tc-docs/certification/faq-mc ; …/important-instructions-mc ; …/lf-handbook2 ; …/exam-terms-of-service | Linux Foundation | No licence stated; treat as all rights reserved | C | Count, time, pass mark, validity, retakes, languages |
| S7 | Kubernetes documentation (kubernetes.io), including the blog | https://kubernetes.io/docs/concepts/security/ (and every `k8s:` page in §4) | The Kubernetes Authors | Live footer: "© 2026 The Kubernetes Authors \| Documentation Distributed under CC BY 4.0" (checked on /docs/concepts/security/ and on the blog). Repo LICENSE begins "Attribution 4.0 International". | B | **Main teaching source** |
| S8 | "Overview of Cloud Native Security" (the 4C's page), Kubernetes docs up to v1.28 | https://github.com/kubernetes/website/blob/release-1.28/content/en/docs/concepts/security/overview.md | The Kubernetes Authors | As S7 | B | The 4C's (competency 1.1). **Removed from the docs after v1.28** (404 on `release-1.29`, `release-1.30` and `main`). |
| S9 | CNCF Cloud Native Security Whitepaper v2 (May 2022) | https://github.com/cncf/tag-security/blob/main/community/resources/security-whitepaper/v2/cloud-native-security-whitepaper.md (PDF alongside) | CNCF TAG Security | Repo `LICENSE.md`: "The documentation in this repository is licensed under the Creative Commons Attribution 4.0 International License." The header reads "Version: 2.0 … PDF Published: 17 May 2022". (The LICENSE.md also says code is "licensed under the MIT License", but the text printed beneath is the Apache 2.0 licence. This concerns code only.) | B | Lifecycle phases, threat modelling (STRIDE, actors, ATT&CK), secure defaults, least privilege, supply chain, zero trust, compliance |
| S10 | Cloud Native Security Lexicon | https://github.com/cncf/tag-security/blob/main/community/resources/security-lexicon/cloud-native-security-lexicon.md | CNCF TAG Security | File header: "Licensed under the Creative Common Attribution 4.0 International License / SPDX-License-Identifier: CC-BY-4.0" | B | **Definitions of basic security terms** (attack surface, threat, vulnerability, exploit, non-repudiation, CA, HSM, SAST/DAST…) |
| S11 | Software Supply Chain Best Practices v2 | https://github.com/cncf/tag-security/blob/main/community/working-groups/supply-chain-security/supply-chain-security-paper-v2/SSCBPv2.md | CNCF TAG Security | As S9 (repo documentation, CC BY 4.0) | B | SBOM, VEX, attestations, in-toto, root of trust, supply chain stages |
| S12 | Kubernetes Attack Trees (threat model) | https://github.com/cncf/financial-user-group/tree/main/projects/k8s-threat-model | CNCF Financial Services User Group | Repo LICENSE: "Apache License Version 2.0, January 2004" | B | Competencies 4.2 to 4.7. **The competency names match these attack trees:** Establish Persistence, Denial of Service, Malicious Code Execution, Compromised Container, Attacker on the Network, Access Sensitive Data. |
| S13 | Kubernetes Threat Model (Trail of Bits, 28 June 2019) | https://github.com/kubernetes/sig-security/blob/main/sig-security-external-audit/security-audit-2019/findings/Kubernetes%20Threat%20Model.pdf | Kubernetes SIG Security | Repo LICENSE: "Apache License Version 2.0". The PDF itself carries no copyright line (grep found none). | B | Trust zones, trust-zone connections (data flow), threat actors (competency 4.1) |
| S14 | NIST SP 800-190, Application Container Security Guide (September 2017) | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf (https://doi.org/10.6028/NIST.SP.800-190) | NIST (US Government) | "This publication may be used by nongovernmental organizations on a voluntary basis and is not subject to copyright in the United States." | B | Image, registry, orchestrator, container and host risks and countermeasures; container-specific OS |
| S15 | NIST CSRC Glossary entries | https://csrc.nist.gov/glossary/term/<term> (confidentiality, integrity, availability, defense_in_depth, least_privilege, separation_of_duty, trusted_computing_base, denial_of_service, common_vulnerabilities_and_exposures, common_vulnerability_scoring_system, public_key_infrastructure, sandbox, provenance, attack_tree, zero_trust_architecture, mandatory_access_control, discretionary_access_control) | NIST | Definitions quoted from NIST publications (US federal works) | B | Plain definitions of basic terms, so no card needs Wikipedia |
| S16 | Cloud Native Glossary | https://glossary.cncf.io/ (e.g. /security-chaos-engineering/) | CNCF | README: "All code contributions are under the Apache 2.0 license. Documentation is distributed under CC BY 4.0." | B | Security chaos engineering, plus the KCNA terms |
| S17 | Kubernetes blog: "A Closer Look at NSA/CISA Kubernetes Hardening Guidance" (2021-10-05, updated for v1.2) | https://kubernetes.io/blog/2021/10/05/nsa-cisa-kubernetes-hardening-guidance/ | The Kubernetes Authors | As S7 | B | NSA/CISA guidance: versions, threat sources, non-root and rootless, read-only root filesystem |
| S18 | Falco docs | https://github.com/falcosecurity/falco-website/blob/master/content/en/docs/_index.md (https://falco.org/docs/) | The Falco Authors | Repo LICENSE: "Attribution 4.0 International" (CC BY 4.0) | B | Runtime detection |
| S19 | OPA docs; Gatekeeper docs | https://github.com/open-policy-agent/opa/blob/main/docs/docs/index.md ; https://github.com/open-policy-agent/gatekeeper/blob/master/website/docs/intro.md | OPA Authors | Repo LICENSE: "Apache License Version 2.0" (both) | B | Policy engines |
| S20 | Kyverno docs | https://github.com/kyverno/website/blob/main/src/content/docs/docs/introduction/index.md | Kyverno Authors | Repo LICENSE: "Apache License Version 2.0" | B | Policy engine |
| S21 | kube-bench README; cert-manager docs | https://github.com/aquasecurity/kube-bench/blob/main/README.md ; https://github.com/cert-manager/website/blob/master/content/docs/README.md | Aqua Security; cert-manager Authors | Both repo LICENSEs: "Apache License Version 2.0" | B | CIS benchmark tooling; certificate automation (extra) |
| S22 | in-toto docs | https://github.com/in-toto/docs | in-toto | Repo LICENSE: "The MIT License (MIT) Copyright (c) 2017 New York University" | B | Only as a pointer: the README defines nothing. The definition used comes from S11. |
| S23 | Sigstore docs | https://github.com/sigstore/docs (content/en/about/overview.md, certificate_authority/overview.md, logging/overview.md) | Sigstore | Repo LICENSE: "MIT License Copyright (c) 2018-present, Gridsome Copyright (c) 2020-present, Henk Verlinde". **The named holders are the site theme's authors, so it is unclear whether the licence covers the documentation text.** | **B?** Treat as C until confirmed | cosign, Fulcio, Rekor, keyless signing, in our own words |
| S24 | SLSA specification | https://github.com/slsa-framework/slsa/tree/main/spec (about.md, tracks.md, build-track-basics.md) | OpenSSF SLSA Working Group | LICENSE.md: "Community Specification License 1.0". §1.1 grants a copyright licence "to reproduce, prepare derivative works of, publicly display… and distribute", and §1.2 requires "attribution to the Working Group… the material's name, version number, and source". | **B?** Not among the licences CONTENT-POLICY names. **Policy owner to confirm; treat as C.** | SLSA purpose, Build levels L0 to L3 |
| S25 | SPIFFE docs | https://github.com/spiffe/spiffe.io | The SPIFFE Authors | LICENSE: "Copyright (c) The SPIFFE Authors All rights reserved. Redistribution and use in source and binary forms, with or without modification, are permitted…" (BSD-style) | **B?** treat as C | SPIFFE/SVID (extra) |
| S26 | MITRE ATT&CK Containers matrix | https://attack.mitre.org/matrices/enterprise/containers/ | MITRE | Terms of use: "MITRE… hereby grants you a non-exclusive, royalty-free license to use ATT&CK® for research, development, and commercial purposes. Any copy you make for such purposes is authorized provided that you reproduce MITRE's copyright designation and this license in any such copy." (https://attack.mitre.org/resources/legal-and-branding/terms-of-use/) | **B?** Custom licence with a required notice. Treat as C (tactic names as facts) until confirmed. | Tactic names |
| S27 | CIS Benchmarks page | https://www.cisecurity.org/cis-benchmarks | Center for Internet Security | Terms of use: "PDF versions of the CIS Benchmarks in accordance with the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License" | C (NC is not compatible with our CC BY-SA) | What the benchmarks are (facts only) |
| S28 | OWASP Kubernetes Top Ten | https://owasp.org/www-project-kubernetes-top-ten/ | OWASP | "licensed under the CC BY-NC-SA 4.0, the Creative Commons Attribution-ShareAlike 4.0 license" (self-contradictory) | C | Extra: risk names as facts |
| S29 | LF Trademark Usage and Trademark List | https://www.linuxfoundation.org/legal/trademark-usage ; https://www.linuxfoundation.org/legal/trademarks | Linux Foundation | Usage page: "It is licensed under a Creative Commons Attribution 4.0 International license" | B (not deck content) | Naming (§8) |

No tier-D source was used. No paid LF course (LFS460 or any other) was opened. The
NSA/CISA PDF itself could not be fetched (§10); S17 stands in for it.

---

## 3. Exam outline (coverage checklist)

Sources: S1 (PDF, p.2, two-column layout) and S4 (LF page, one column, the owner's
reading order). Weights in S1, S4 and S5 agree: **14 / 22 / 22 / 16 / 16 / 10 = 100%**.
The outline is openly licensed (S1), so the deck may copy the domain and competency
names into `ExamRefs` and tags, with attribution.

**Two differences between S1 and S4:**
- S4 lists **Authorization** under Kubernetes Security Fundamentals (between
  Authentication and Secrets). The PDF (S1) omits it. The deck covers it (topic T7),
  maps it as 3.4, and marks the mapping "LF page only".
- The PDF spells "Threat Modeling Frameworks"; S4 spells "Threat Modelling Frameworks".

Order below is S4's order. Numbers are ours, for `ExamRefs`.

1. **Overview of Cloud Native Security: 14%**
   1. The 4Cs of Cloud Native Security
   2. Cloud Provider and Infrastructure Security
   3. Controls and Frameworks
   4. Isolation Techniques
   5. Artifact Repository and Image Security
   6. Workload and Application Code Security
2. **Kubernetes Cluster Component Security: 22%**
   1. API Server
   2. Controller Manager
   3. Scheduler
   4. Kubelet
   5. Container Runtime
   6. KubeProxy
   7. Pod
   8. Etcd
   9. Container Networking
   10. Client Security
   11. Storage
3. **Kubernetes Security Fundamentals: 22%**
   1. Pod Security Standards
   2. Pod Security Admissions
   3. Authentication
   4. Authorization *(LF page only)*
   5. Secrets
   6. Isolation and Segmentation
   7. Audit Logging
   8. Network Policy
4. **Kubernetes Threat Model: 16%**
   1. Kubernetes Trust Boundaries and Data Flow
   2. Persistence
   3. Denial of Service
   4. Malicious Code Execution and Compromised Applications in Containers
   5. Attacker on the Network
   6. Access to Sensitive Data
   7. Privilege Escalation
5. **Platform Security: 16%**
   1. Supply Chain Security
   2. Image Repository
   3. Observability
   4. Service Mesh
   5. PKI
   6. Connectivity
   7. Admission Control
6. **Compliance and Security Frameworks: 10%**
   1. Compliance Frameworks
   2. Threat Modelling Frameworks
   3. Supply Chain Compliance
   4. Automation and Tooling

**Outline items: 49** (6 domains + 43 competencies; 48 if you follow the PDF, which
omits Authorization). As with KCNA, the owner publishes **no objectives** below the
competencies. The "what it covers" mapping in §4 is our reading of each label.

**Scope statement** (S5, tier C, facts only): KCSA "will demonstrate a candidate's
basic knowledge of evaluating the security configuration of a Kubernetes cluster for
compliance with security requirements including their ability to harden security
controls, test and monitor the security, and assist in the identification and
assessment of security risks and vulnerabilities."

### Competency → documentation map

| Competency | Where the deck teaches it | Main pages |
|---|---|---|
| 1.1 The 4Cs | T2 | S8 (4C's page, v1.28); k8s:concepts/security/cloud-native-security/ (current lifecycle model); image `4c.png` |
| 1.2 Cloud Provider and Infrastructure Security | T2 | S8 "Infrastructure security" table; k8s:concepts/security/#cloud-provider-security; k8s:tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access; S9 "Compute" |
| 1.3 Controls and Frameworks | T1, T2, T18 | k8s:concepts/security/ (preventative or detective controls, policies); k8s:concepts/security/security-checklist/; S9 "Security Assurance" |
| 1.4 Isolation Techniques | T3, T14 | k8s:concepts/security/linux-kernel-security-constraints/; k8s:concepts/security/multi-tenancy/#sandboxing-containers; k8s:concepts/containers/runtime-class/; S14 §2.2 |
| 1.5 Artifact Repository and Image Security | T4 | k8s:concepts/security/security-checklist/#images; k8s:concepts/containers/images/#using-a-private-registry; S9 "Distribute"; S14 §3.1, §3.2 |
| 1.6 Workload and Application Code Security | T5 | S8 "Code" table; S9 "Testing"; S10 SAST/DAST/IAST/SCA |
| 2.1 API Server | T6, T7, T12 | k8s:concepts/security/controlling-access/; k8s:concepts/security/api-server-bypass-risks/ |
| 2.2 Controller Manager | T12 | k8s:concepts/security/security-checklist/ (`--use-service-account-credentials`); S13 |
| 2.3 Scheduler | T12 | k8s:concepts/security/hardening-guide/scheduler/ |
| 2.4 Kubelet | T12 | k8s:reference/access-authn-authz/kubelet-authn-authz/; k8s:concepts/security/api-server-bypass-risks/#kubelet-api; k8s:concepts/architecture/control-plane-node-communication/ |
| 2.5 Container Runtime | T3, T12 | k8s:concepts/security/api-server-bypass-risks/#runtime-socket; k8s:concepts/containers/runtime-class/ |
| 2.6 KubeProxy | T12 | S13 (kube-proxy section, Worker zone); k8s:reference/networking/ports-and-protocols/ |
| 2.7 Pod | T3, T8 | k8s:tasks/configure-pod-container/security-context/; k8s:concepts/security/pod-security-standards/ |
| 2.8 Etcd | T10, T12 | k8s:concepts/security/api-server-bypass-risks/#the-etcd-api; k8s:tasks/administer-cluster/configure-upgrade-etcd/#securing-etcd-clusters; k8s:tasks/administer-cluster/securing-a-cluster/#restrict-access-to-etcd |
| 2.9 Container Networking | T13 | k8s:concepts/security/cloud-native-security/#networking-and-security; k8s:concepts/security/security-checklist/#network-security |
| 2.10 Client Security | T6 | k8s:concepts/configuration/organize-cluster-access-kubeconfig/ (warning); k8s:concepts/security/hardening-guide/authentication-mechanisms/ |
| 2.11 Storage | T10, T12 | k8s:concepts/security/cloud-native-security/#protection-runtime-storage; k8s:concepts/security/rbac-good-practices/#persistent-volume-creation |
| 3.1 Pod Security Standards | T8 | k8s:concepts/security/pod-security-standards/ |
| 3.2 Pod Security Admissions | T8 | k8s:concepts/security/pod-security-admission/ |
| 3.3 Authentication | T6 | k8s:reference/access-authn-authz/authentication/; k8s:concepts/security/service-accounts/; k8s:concepts/security/hardening-guide/authentication-mechanisms/ |
| 3.4 Authorization | T7 | k8s:reference/access-authn-authz/authorization/; k8s:reference/access-authn-authz/rbac/; k8s:concepts/security/rbac-good-practices/ |
| 3.5 Secrets | T10 | k8s:concepts/security/secrets-good-practices/; k8s:tasks/administer-cluster/encrypt-data/; k8s:concepts/configuration/secret/ |
| 3.6 Isolation and Segmentation | T14 | k8s:concepts/security/multi-tenancy/; k8s:concepts/security/security-checklist/#pod-placement |
| 3.7 Audit Logging | T15 | k8s:tasks/debug/debug-cluster/audit/ |
| 3.8 Network Policy | T13 | k8s:concepts/services-networking/network-policies/ |
| 4.1 Trust Boundaries and Data Flow | T16 | S13 (Trust Zones; Trust Zone Connections); S12 `trustboundaries.png`; S9 "Threat Modeling" |
| 4.2 Persistence | T16 | S12 EstablishPersistence.md |
| 4.3 Denial of Service | T16 | S12 DenialOfService.md; k8s:concepts/security/rbac-good-practices/#object-creation-dos |
| 4.4 Malicious Code Execution and Compromised Applications | T16 | S12 MaliciousCodeExecution.md, CompromisedContainer.md |
| 4.5 Attacker on the Network | T16 | S12 AttackerOnTheNetwork.md |
| 4.6 Access to Sensitive Data | T16 | S12 AccessSensitiveData.md |
| 4.7 Privilege Escalation | T7, T16 | k8s:reference/access-authn-authz/authorization/#escalation-paths; k8s:concepts/security/rbac-good-practices/#privilege-escalation-risks; S9 threat matrix |
| 5.1 Supply Chain Security | T4 | S11; S9 "Supply Chain Security"; k8s:tasks/administer-cluster/verify-signed-artifacts/ |
| 5.2 Image Repository | T4 | S9 "Registry Staging"; S14 §3.2, §4.2 |
| 5.3 Observability | T15 | k8s:concepts/security/cloud-native-security/#observability-and-runtime-security; S9 "Runtime Detection"; S18 |
| 5.4 Service Mesh | T13 | S9 "Service Mesh"; k8s:concepts/security/security-checklist/#network-security |
| 5.5 PKI | T11 | k8s:setup/best-practices/certificates/; k8s:reference/access-authn-authz/certificate-signing-requests/ |
| 5.6 Connectivity | T12, T13 | k8s:concepts/architecture/control-plane-node-communication/ (hub-and-spoke, Konnectivity); k8s:reference/networking/ports-and-protocols/ |
| 5.7 Admission Control | T9 | k8s:reference/access-authn-authz/admission-controllers/; k8s:reference/access-authn-authz/validating-admission-policy/; S19, S20 |
| 6.1 Compliance Frameworks | T17 | S9 "Compliance", "Regulatory Audits"; S10 "Compliance and Security"; S27 |
| 6.2 Threat Modelling Frameworks | T16, T17 | S9 "Threat Identification" (STRIDE, OCTAVE), "Threat Matrix for Containers"; S26 |
| 6.3 Supply Chain Compliance | T4, T17 | S24 SLSA; S11 SBOM/VEX/attestations; S9 "SSDF v1.1 Mapping" |
| 6.4 Automation and Tooling | T9, T15, T17, T18 | S18 Falco; S19/S20 policy engines; S21 kube-bench; k8s:reference/issues-security/official-cve-feed/ |

---

## 4. Concept inventory

Teaching order is T1 to T18; each topic assumes the ones before it and the whole
KCNA deck (topic 0). Columns:
- **ID** is the concept ID for `ConceptIDs`. They are family IDs (`k8s.`), checked
  against `concepts/k8s.json` for clashes.
- **Def** is a plain one-line definition that follows the source's own words. The
  sources are mostly tier B, but card text must still paraphrase.
- **Src** is the source page and section.
- **Pre** lists terms that must be taught first; KCNA terms count as taught.
- **Vol** V means volatile: date it.
- **P** is C for core, X for extra.

Source abbreviations: `k8s:` = `https://kubernetes.io/docs/`; `4c-page` = S8;
`wp#` = S9 anchor; `lex#` = S10 anchor; `sscp#` = S11 anchor; `at:` = S12
(`https://github.com/cncf/financial-user-group/blob/main/projects/k8s-threat-model/`);
`tm19` = S13; `nist190` = S14; `ng:` = `https://csrc.nist.gov/glossary/term/`;
`cg:` = S16; `nsa-blog` = S17; `falco` = S18; `opa`, `gatekeeper` = S19; `kyverno`
= S20; `sig:` = S23 (`https://github.com/sigstore/docs/blob/main/content/en/`);
`slsa:` = S24 spec folder; `attack-containers` = S26; `cis` = S27; `owasp-k8s-top10`
= S28; `secure-defaults-8` =
`https://github.com/cncf/tag-security/blob/main/community/resources/security-whitepaper/secure-defaults-cloud-native-8.md`;
`gh:` = `https://github.com/`. The registry (`kcsa-terms.json`) carries the full URLs.

### T1. Security principles and vocabulary
Covers: 6 (General) foundations; 1.3 Controls and Frameworks.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| confidentiality | `k8s.confidentiality` | Preserving authorized restrictions on access to and disclosure of information | ng:confidentiality | – |  | C |
| integrity | `k8s.integrity` | Guarding against improper modification or destruction of information, including non-repudiation and authenticity | ng:integrity | – |  | C |
| availability | `k8s.availability` | Ensuring timely and reliable access to and use of information | ng:availability | – |  | C |
| vulnerability | `k8s.vulnerability` | A weakness, flaw or error in a system that a threat agent could leverage to compromise it | lex#threat-vs-vulnerability-vs-exploit | – |  | C |
| threat | `k8s.threat` | A potential negative event, intentional or accidental, facilitated by a vulnerability, that harms a system | lex#threat-vs-vulnerability-vs-exploit | vulnerability |  | C |
| threat agent | `k8s.threat-agent` | An entity that may act out a threat | lex#threat-vs-vulnerability-vs-exploit | threat |  | X |
| exploit | `k8s.exploit` | Code that takes advantage of a vulnerability | lex#threat-vs-vulnerability-vs-exploit | vulnerability |  | C |
| attack surface | `k8s.attack-surface` | All exposed points of a system (such as APIs) that a malicious actor could target to insert or extract data | lex#attack-surface | – |  | C |
| attack vector | `k8s.attack-vector` | A method or pathway an attacker uses to access or penetrate a target system | lex#attack-vector | attack surface |  | C |
| defense in depth | `k8s.defense-in-depth` | A strategy of layered barriers across people, technology and operations, so one failed control is not the end | ng:defense_in_depth | – |  | C |
| least privilege | `k8s.least-privilege` | Restrict access to the minimum needed for a task, ideally for the shortest time | ng:least_privilege ; lex#least-privilege | – |  | C |
| separation of duties (SoD) | `k8s.separation-of-duties` | No single user should hold enough privilege to misuse the system alone | ng:separation_of_duty ; wp#roles-and-responsibilities | least privilege |  | C |
| non-repudiation | `k8s.non-repudiation` | The property that an actor cannot later deny having performed an action | lex#non-repudiation | – |  | C |
| identity | `k8s.identity` | Any document, file or string that establishes what its holder is | lex#identity | – |  | X |
| user identity | `k8s.user-identity` | An identity that represents a person | lex#user-identity | identity |  | C |
| service identity | `k8s.service-identity` | An identity for a non-person entity such as a workload; in zero trust it must be uniquely attested | lex#service-identity | identity |  | C |
| credential | `k8s.credential` | Anything issued to an entity to prove identity or entitlement: tokens, keys, secrets, certificates | lex#credentials | identity |  | C |
| token | `k8s.token` | A string generated to grant access, prove identity or carry claims between two parties | lex#token | credential |  | C |
| claim | `k8s.claim` | A statement a subject asserts about itself or another subject, validated during authentication and authorization | lex#claim | token |  | X |
| access control | `k8s.access-control` | Environment constraints (such as source IP or namespace) applied once an identity is proven | lex#authentication-vs-authorization-vs-access-control | authentication, authorization |  | X |
| attribute-based access control (ABAC) | `k8s.attribute-based-access-control` | Access granted through policies that combine attributes of the user, resource and environment | lex#abac-rbac-and-mac ; k8s:reference/access-authn-authz/authorization/#authorization-modules | access control |  | C |
| mandatory access control (MAC) | `k8s.mandatory-access-control` | Access decided by a central policy authority; owners of objects cannot change access rights | ng:mandatory_access_control ; lex#abac-rbac-and-mac | access control |  | C |
| discretionary access control (DAC) | `k8s.discretionary-access-control` | Access partly left to the object's owner, who decides who may use it; in Linux, file permissions by UID and GID | ng:discretionary_access_control ; k8s:tasks/configure-pod-container/security-context/ | access control |  | C |
| cryptographic key | `k8s.cryptographic-key` | A string of random bits used with an algorithm to encrypt, decrypt, sign or verify | lex#keys | encryption |  | C |
| public and private key | `k8s.public-private-key` | A key pair: the private key signs or decrypts and stays secret; the public key verifies or encrypts and is shared | lex#cryptographic-signing-vs-encrypting-vs-verifyingvalidating ; sig:about/overview.md | cryptographic key |  | C |
| digital signature | `k8s.digital-signature` | A signature over an artefact's hash made with a private key, proving who produced it and that it is unchanged | lex#cryptographic-signing-vs-encrypting-vs-verifyingvalidating | public and private key, hash |  | C |
| encryption in transit | `k8s.encryption-in-transit` | Protecting data while it moves over a network (TLS), as opposed to while it is stored | k8s:concepts/security/#control-plane-protection | encryption |  | C |
| certificate authority (CA) | `k8s.certificate-authority` | A trusted third party that issues digital certificates certifying who owns a public key | lex#certificate-authority | digital certificate |  | C |
| chain of trust | `k8s.chain-of-trust` | Trust extended from a root through intermediate certificates or keys to the leaf that is presented | lex#certificate-root-of-trust ; sscp#root-of-trust | certificate authority |  | C |
| root of trust (RoT) | `k8s.root-of-trust` | The trust anchor that is always trusted and from which trust in other keys or devices is built | sscp#root-of-trust ; lex#root-of-trust | chain of trust |  | C |
| hardware security module (HSM) | `k8s.hardware-security-module` | A physical device that safeguards keys and performs cryptographic operations without letting keys be copied out | lex#hardware-security-module ; k8s:concepts/security/cloud-native-security/#protection-runtime-storage | cryptographic key |  | C |
| Trusted Platform Module (TPM) | `k8s.trusted-platform-module` | A standard secure cryptoprocessor chip that stores keys and supports measured boot and remote attestation | lex#trusted-platform-module-tpmvtpm | hardware security module |  | X |
| preventive and detective controls | `k8s.preventive-detective-controls` | A control that stops a problem from happening, versus one that finds it after the fact | wp#testing ; k8s:concepts/security/#workload-protection | – |  | C |
| security posture | `k8s.security-posture` | The overall security state of a system, which needs constant attention; a checklist alone is not enough | k8s:concepts/security/security-checklist/ | – |  | X |
| secure defaults | `k8s.secure-defaults` | The principle that a system is secure in its default state; choosing an insecure setting is a conscious decision | wp#secure-defaultsnew-in-v2 ; secure-defaults-8 | – |  | C |
| blast radius | `k8s.blast-radius` | How far the damage from one compromise can spread; least privilege and isolation reduce it | wp#least-privilege | least privilege |  | X |
| lateral movement | `k8s.lateral-movement` | An attacker moving from one compromised component to others in the environment | wp#zero-trust-architecture | – |  | C |
| container escape | `k8s.container-escape` | An attacker exploiting a flaw to break out of a container and reach the host and its other processes | k8s:concepts/security/multi-tenancy/#sandboxing-containers | container |  | C |

### T2. The cloud native security model
Covers: 1.1 The 4Cs; 1.2 Cloud Provider and Infrastructure Security; 1.3 Controls and Frameworks.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| 4C's of cloud native security | `k8s.four-cs` | A layered model: Cloud, Clusters, Containers and Code, each layer building on the one outside it | 4c-page (section 'The 4C's of Cloud Native security', removed from docs after v1.28) | defense in depth | V | C |
| Cloud layer | `k8s.cloud-layer` | The trusted computing base of a cluster: the cloud, co-located servers or corporate data centre | 4c-page | 4C's of cloud native security |  | C |
| Cluster layer | `k8s.cluster-layer` | Securing both the configurable cluster components and the applications that run in the cluster | 4c-page | 4C's of cloud native security |  | C |
| Container layer | `k8s.container-layer` | Image scanning, image signing, non-privileged users and stronger-isolation runtimes | 4c-page | 4C's of cloud native security |  | C |
| Code layer | `k8s.code-layer` | Application code: the attack surface you control most; TLS, limited ports, dependency scanning, static and dynamic analysis | 4c-page | 4C's of cloud native security |  | C |
| trusted computing base (TCB) | `k8s.trusted-computing-base` | All the hardware, firmware and software protection mechanisms that together enforce a security policy | ng:trusted_computing_base ; 4c-page | – |  | X |
| shared responsibility | `k8s.shared-responsibility` | Security duties split between a cloud provider and the teams using it, which changes risk thresholds | wp#roles-and-responsibilities | – |  | C |
| infrastructure security (cluster) | `k8s.infrastructure-security` | Restrict network access to the API server and nodes, least-privilege cloud API access, and restrict and encrypt etcd | 4c-page (section 'Infrastructure security') | Cloud layer |  | C |
| cloud metadata API | `k8s.cloud-metadata-api` | A cloud service on each instance (169.254.169.254) that can hold node credentials; pods should be blocked from it | k8s:tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access ; k8s:concepts/security/security-checklist/#network-security | – |  | C |
| bastion host | `k8s.bastion-host` | A hardened intermediate host used to reach an API server that is not exposed to the internet | k8s:concepts/security/security-checklist/#network-security | – |  | X |
| Develop phase | `k8s.develop-phase` | First lifecycle phase: secure development environments, secure design, code review, threat modelling | k8s:concepts/security/cloud-native-security/#lifecycle-phase-develop ; wp#develop | lifecycle phases |  | C |
| Distribute phase | `k8s.distribute-phase` | Build and supply-chain phase: scan artefacts, sign and verify, update dependencies, restrict registries | k8s:concepts/security/cloud-native-security/#lifecycle-phase-distribute ; wp#distribute | lifecycle phases |  | C |
| Deploy phase | `k8s.deploy-phase` | Pre-flight checks on what can be deployed, by whom and where, including signature verification | k8s:concepts/security/cloud-native-security/#lifecycle-phase-deploy ; wp#deploy | lifecycle phases |  | C |
| Runtime phase | `k8s.runtime-phase` | Running workloads; its three critical areas are access, compute and storage | k8s:concepts/security/cloud-native-security/#lifecycle-phase-runtime ; wp#runtime-environment | lifecycle phases |  | C |
| container-specific operating system | `k8s.container-specific-os` | A minimal, often read-only (immutable) OS that runs only containers, reducing attack surface | k8s:concepts/security/cloud-native-security/#protection-runtime-compute ; nist190 §2.1 | – |  | C |
| measured boot | `k8s.measured-boot` | Cryptographically measuring boot components so the node's software can be verified, below the Kubernetes layer | k8s:concepts/security/cloud-native-security/#observability-and-runtime-security ; wp#compute | root of trust |  | X |
| confidential computing / trusted execution environment (TEE) | `k8s.trusted-execution-environment` | CPU-based secure enclaves that protect data in use from the OS, hypervisor and administrators | wp#compute | – |  | X |
| cloud native security map | `k8s.cloud-native-security-map` | TAG Security's map of security controls across the four lifecycle phases (cnsmap) | wp#security-stacknew-in-v2 | lifecycle phases |  | X |

KCNA terms this topic deepens (topic 0, no new primer): lifecycle phases.

### T3. Container and workload isolation
Covers: 1.4 Isolation Techniques; 2.5 Container Runtime; 2.7 Pod.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| Linux namespaces (kernel) | `k8s.linux-namespaces` | Kernel feature that limits which resources (files, network, IPC, hostnames, users, processes) a container can see | nist190 §2.2 (namespace isolation) | kernel, container |  | C |
| host namespaces | `k8s.host-namespaces` | Sharing the node's network, PID or IPC namespace with a Pod (hostNetwork, hostPID, hostIPC) | k8s:concepts/security/pod-security-standards/#baseline | Linux namespaces (kernel) |  | C |
| Linux capabilities | `k8s.linux-capabilities` | Divisions of root's privileges so a process can get some privileges but not all | k8s:concepts/security/linux-kernel-security-constraints/#seccomp ; k8s:tasks/configure-pod-container/security-context/ | root |  | C |
| CAP_SYS_ADMIN | `k8s.cap-sys-admin` | A broad capability; a privileged container's root user may use it (with CAP_NET_ADMIN) to bypass restrictions | k8s:concepts/security/linux-kernel-security-constraints/#privileged-containers | Linux capabilities |  | X |
| privileged container | `k8s.privileged-container` | A container with privileged: true: all capabilities, and seccomp, AppArmor and SELinux protections overridden | k8s:concepts/security/linux-kernel-security-constraints/#privileged-containers | Linux capabilities |  | C |
| allowPrivilegeEscalation | `k8s.allow-privilege-escalation` | Security-context field controlling whether a process can gain more privileges than its parent (sets no_new_privs); defaults to true | k8s:tasks/configure-pod-container/security-context/ | security context |  | C |
| setuid binary | `k8s.setuid` | A file whose set-user-ID mode lets a process run with the file owner's privileges; a privilege-escalation route | k8s:concepts/security/pod-security-standards/#restricted | Linux capabilities |  | X |
| runAsNonRoot / runAsUser | `k8s.run-as-non-root` | Fields that require a non-root user, or set the UID a container runs as (overriding the image) | k8s:concepts/security/linux-kernel-security-constraints/#run-without-root ; k8s:concepts/security/pod-security-standards/#restricted | root, security context |  | C |
| readOnlyRootFilesystem | `k8s.read-only-root-filesystem` | Mounts the container's root filesystem read-only, limiting tampering at runtime | k8s:tasks/configure-pod-container/security-context/ ; nsa-blog | security context |  | C |
| fsGroup | `k8s.fsgroup` | Pod security-context GID given ownership of supporting volumes | k8s:tasks/configure-pod-container/security-context/#discussion | security context |  | X |
| seccomp | `k8s.seccomp` | Secure computing mode: a Linux kernel feature filtering which system calls a process may make | k8s:concepts/security/linux-kernel-security-constraints/#seccomp ; k8s:concepts/security/security-checklist/#enabling-seccomp | kernel |  | C |
| system call (syscall) | `k8s.system-call` | A request from a user-space process to the kernel | k8s:concepts/security/linux-kernel-security-constraints/#seccomp | kernel |  | C |
| seccomp profile types | `k8s.seccomp-profile-types` | RuntimeDefault (the runtime's default), Unconfined (no filter) and Localhost (a profile file on the node) | k8s:tasks/configure-pod-container/security-context/#set-the-seccomp-profile-for-a-container | seccomp |  | C |
| Linux security module (LSM) | `k8s.linux-security-module` | A kernel module such as AppArmor or SELinux that provides mandatory access control | k8s:concepts/security/linux-kernel-security-constraints/#policy-based-mac | mandatory access control |  | C |
| AppArmor | `k8s.apparmor` | A Linux security module confining programs to listed resources through per-program profiles | k8s:concepts/security/linux-kernel-security-constraints/#apparmor | Linux security module |  | C |
| enforce vs complain mode | `k8s.apparmor-modes` | AppArmor profile modes: enforcing blocks disallowed access; complain only reports it | k8s:concepts/security/security-checklist/#apparmor | AppArmor |  | C |
| SELinux | `k8s.selinux` | Security-Enhanced Linux: a module that restricts access by labels on processes and files | k8s:concepts/security/linux-kernel-security-constraints/#selinux | Linux security module |  | C |
| sandboxed runtime | `k8s.sandboxed-runtime` | A runtime running each Pod in a separate VM or user-space kernel for stronger isolation (examples: gVisor, Kata Containers) | k8s:concepts/security/multi-tenancy/#sandboxing-containers ; k8s:concepts/security/pod-security-standards/#what-about-sandboxed-pods | RuntimeClass, container escape |  | C |
| gVisor | `k8s.gvisor` | A sandboxed runtime (user-space kernel) named in the Kubernetes docs | k8s:concepts/security/linux-kernel-security-constraints/#seccomp-considerations | sandboxed runtime |  | X |
| Kata Containers | `k8s.kata-containers` | A sandboxed runtime (lightweight VMs) named in the Kubernetes docs | k8s:concepts/security/pod-security-standards/#what-about-sandboxed-pods | sandboxed runtime |  | X |
| rootless containers | `k8s.rootless-containers` | Running the container engine or containers without root on the host, so an escape does not yield host root | wp#least-privilege ; nsa-blog | root |  | C |
| hostUsers: false | `k8s.host-users-false` | Pod field that runs the Pod in a user namespace: root inside the container, non-root on the host | k8s:concepts/security/linux-kernel-security-constraints/#recommendations-best-practices | user namespace | V | C |
| Windows HostProcess container | `k8s.hostprocess` | Windows privileged mode (windowsOptions.hostProcess); disallowed by Baseline | k8s:concepts/security/pod-security-standards/#baseline | privileged container |  | X |
| Security Profiles Operator (SPO) | `k8s.security-profiles-operator` | A Kubernetes project for managing seccomp, AppArmor and SELinux profiles at scale | k8s:concepts/security/linux-kernel-security-constraints/#considerations-custom-configurations | seccomp |  | X |
| kernel module auto-loading | `k8s.kernel-module-autoload` | Unprivileged processes can make the kernel load network-protocol modules; block unneeded ones (e.g. dccp, sctp) | k8s:tasks/administer-cluster/securing-a-cluster/#preventing-containers-from-loading-unwanted-kernel-modules | kernel |  | X |

KCNA terms this topic deepens (topic 0, no new primer): security context.

### T4. Images, registries and the software supply chain
Covers: 1.5 Artifact Repository and Image Security; 5.1 Supply Chain Security; 5.2 Image Repository; 6.3 Supply Chain Compliance.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| software supply chain | `k8s.software-supply-chain` | Everything that goes into software through every upstream step: source, dependencies, build, artefacts, distribution | sscp#securing-the-software-supply-chain ; wp#supply-chain-securitynew-in-v2 | – |  | C |
| supply chain stages | `k8s.supply-chain-stages` | Source code, materials, build pipelines, artefacts, and deployments and distribution | sscp#software-supply-chain-overview | software supply chain |  | C |
| materials (dependencies) | `k8s.materials` | The third-party dependencies a build pulls in | sscp#materials | software supply chain |  | X |
| image scanning | `k8s.image-scanning` | Analysing image contents against vulnerability databases (CVEs) to find known flaws and bad practices, in CI and continuously | lex#containerimage-scanning ; wp#image-scanning | container image, CVE |  | C |
| minimal image | `k8s.minimal-image` | An image holding only the program and its dependencies, from a minimal base, with no shells or debug tools | k8s:concepts/security/security-checklist/#images | container image |  | C |
| image signing | `k8s.image-signing` | Signing an image manifest at build time so its integrity and provenance can be verified before use | wp#signing-trust-and-integrity ; k8s:concepts/security/security-checklist/#images | digital signature |  | C |
| image encryption | `k8s.image-encryption` | Encrypting image contents so they stay confidential from build to run, and can be tied to authorised platforms | wp#encryption | encryption |  | X |
| private registry | `k8s.private-registry` | A registry that only lets authorised clients pull images | k8s:concepts/security/cloud-native-security/#lifecycle-phase-distribute ; k8s:concepts/containers/images/#using-a-private-registry | registry |  | C |
| imagePullSecrets | `k8s.image-pull-secrets` | Secrets named in a Pod that hold registry credentials; must be in the Pod's namespace | k8s:concepts/containers/images/#specifying-imagepullsecrets-on-a-pod | Secret, private registry |  | C |
| registry staging | `k8s.registry-staging` | Separate registries for vetted public base images, team development and pre-production, with access control and mTLS | wp#registry-staging | private registry |  | C |
| Software Bill of Materials (SBOM) | `k8s.sbom` | An inventory of all components, libraries and dependencies in software and its build environment | sscp#sbom ; wp#supply-chain-securitynew-in-v2 | software supply chain |  | C |
| SPDX and CycloneDX | `k8s.sbom-formats` | Standard SBOM formats (SWID is also named) | sscp#sbom ; wp#supply-chain-securitynew-in-v2 | SBOM |  | C |
| Vulnerability Exploitability eXchange (VEX) | `k8s.vex` | A document stating whether listed vulnerabilities affect a product: affected, not affected, under investigation, fixed | sscp#vex | SBOM, CVE |  | C |
| provenance | `k8s.provenance` | A record of who built an artefact, how, and from what inputs | slsa:tracks.md ; ng:provenance | software supply chain |  | C |
| attestation | `k8s.attestation` | A signed record of an action in the supply chain, checked against policy by a verifier | sscp#attestations | digital signature, provenance |  | C |
| in-toto | `k8s.in-toto` | A CNCF specification for software supply chain attestations | sscp#attestations | attestation |  | C |
| Supply-chain Levels for Software Artifacts (SLSA) | `k8s.slsa` | Incrementally adoptable, consensus guidelines for supply chain security, organised in tracks and levels | slsa:about.md | provenance | V | C |
| SLSA Build levels | `k8s.slsa-build-levels` | L0 none; L1 provenance exists; L2 signed provenance from a hosted build platform; L3 hardened build platform | slsa:build-track-basics.md | SLSA | V | C |
| Sigstore | `k8s.sigstore` | An open source project for signing and verifying artefacts with identity-based ('keyless') signing | sig:about/overview.md | digital signature |  | C |
| cosign | `k8s.cosign` | Sigstore's signing client, used to sign and verify images and blobs; Kubernetes signs its releases with it | sig:about/overview.md ; k8s:tasks/administer-cluster/verify-signed-artifacts/ | Sigstore |  | C |
| Fulcio | `k8s.fulcio` | Sigstore's code-signing CA: issues X.509 certificates, based on an OIDC identity, valid for 10 minutes | sig:certificate_authority/overview.md | Sigstore, certificate authority |  | C |
| Rekor | `k8s.rekor` | Sigstore's tamper-resistant transparency log of signing metadata | sig:logging/overview.md | Sigstore |  | C |
| keyless signing | `k8s.keyless-signing` | Signing with short-lived keys tied to an identity and recorded in a transparency log, instead of long-lived key pairs | sig:about/overview.md ; k8s:tasks/administer-cluster/verify-signed-artifacts/#verifying-binary-signatures | Sigstore |  | C |
| The Update Framework (TUF) | `k8s.tuf` | A framework for secure software distribution; Sigstore's root of trust uses it, with a threshold of offline keys | sscp#root-of-trust | root of trust |  | X |
| image policy enforcement at admission | `k8s.image-admission-verification` | Verifying image signatures or allowed registries when Pods are admitted (ImagePolicyWebhook, policy controllers) | k8s:concepts/security/security-checklist/#images ; k8s:tasks/administer-cluster/verify-signed-artifacts/#verifying-image-signatures-with-admission-controller | image signing, admission controller |  | C |
| sigstore policy-controller | `k8s.sigstore-policy-controller` | An admission controller that verifies image signatures, named in the Kubernetes docs | k8s:tasks/administer-cluster/verify-signed-artifacts/#verifying-image-signatures-with-admission-controller | cosign |  | X |
| NIST SP 800-190 image risks | `k8s.nist-image-risks` | Image vulnerabilities, configuration defects, embedded malware, embedded clear-text secrets, untrusted images | nist190 §3.1 | image scanning |  | C |
| NIST SP 800-190 registry risks | `k8s.nist-registry-risks` | Insecure connections to registries, stale images, insufficient authentication and authorization | nist190 §3.2 | registry |  | C |
| CI build isolation | `k8s.ci-build-isolation` | CI servers isolated by sensitivity; privileged infrastructure builds on dedicated servers; keys protected in an HSM | wp#build-pipeline | – |  | X |

KCNA terms this topic deepens (topic 0, no new primer): image digest (security use).

### T5. Application code security
Covers: 1.6 Workload and Application Code Security.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| static application security testing (SAST) | `k8s.sast` | Analysing source code for vulnerabilities before it is compiled or run (white-box testing) | lex#static-analysis-security-testing--sast ; wp#static-analysis-and-security-testing | – |  | C |
| dynamic application security testing (DAST) | `k8s.dast` | Testing a running application by attacking it from outside, without source code | lex#dynamic-analysis-security-testing--dast | – |  | C |
| interactive application security testing (IAST) | `k8s.iast` | Analysing code for vulnerabilities from inside the app while it runs under tests or use | lex#interactive-analysis-security-testing--iast | SAST, DAST |  | X |
| software composition analysis (SCA) | `k8s.software-composition-analysis` | Automatically identifying the open source components in a codebase for security and licence checks | lex#software-composition-analysis | – |  | C |
| dependency scanning | `k8s.dependency-scanning` | Regularly scanning third-party libraries for known vulnerabilities | 4c-page (Code security table) ; k8s:concepts/security/cloud-native-security/#lifecycle-phase-distribute | vulnerability |  | C |
| runtime application self-protection (RASP) | `k8s.rasp` | Technology running with an application that detects attacks on it in real time | lex#runtime-compliance-or-runtime-application-self-protection-rasp | – |  | X |
| IaC and manifest scanning | `k8s.manifest-scanning` | Scanning infrastructure-as-code templates and application manifests in CI for insecure settings | wp#container-application-manifest-scanning ; wp#static-analysis-and-security-testing | infrastructure as code, manifest |  | C |
| fuzzing | `k8s.fuzzing` | Automated testing with unexpected inputs to find faults, listed for the Develop phase | k8s:concepts/security/cloud-native-security/#lifecycle-phase-develop | – |  | X |
| security chaos engineering (SCE) | `k8s.security-chaos-engineering` | Proactive security experiments on a distributed system to build confidence it withstands malicious conditions | cg:security-chaos-engineering/ | chaos engineering |  | X |
| code review for security | `k8s.secure-code-review` | A code review process that considers security concerns | k8s:concepts/security/cloud-native-security/#lifecycle-phase-develop ; wp#code-review | – |  | C |
| OWASP ZAP | `k8s.owasp-zap` | A popular dynamic analysis tool (OWASP Zed Attack Proxy) named in the Code layer | 4c-page (Code security table) | DAST |  | X |
| secrets in source code | `k8s.secrets-in-source` | Never commit secrets or unencrypted credentials to repositories; block them from being pushed | sscp#prevent-committing-secrets-to-source-code-repository ; wp#gitopsnew-in-v2 | Secret |  | C |
| signed commits | `k8s.signed-commits` | GPG-signed commits give accountability and traceability for changes in a GitOps repository | wp#gitopsnew-in-v2 | digital signature, GitOps |  | X |

KCNA terms this topic deepens (topic 0, no new primer): mutual TLS for application traffic.

### T6. Authentication
Covers: 3.3 Authentication; 2.10 Client Security.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| normal user | `k8s.normal-user` | A human user managed outside the cluster; Kubernetes has no User object and cannot add users by API | k8s:reference/access-authn-authz/authentication/#users-in-kubernetes | authentication |  | C |
| authentication module (authenticator) | `k8s.authenticator` | A plugin the API server runs to identify a request; the first to succeed short-circuits the rest | k8s:reference/access-authn-authz/authentication/#authentication-methods ; k8s:concepts/security/controlling-access/#authentication | authentication |  | C |
| user attributes (username, UID, groups, extra) | `k8s.user-attributes` | What authenticators attach to a request for authorizers to use | k8s:reference/access-authn-authz/authentication/#authentication-strategies | authenticator |  | X |
| anonymous request | `k8s.anonymous-request` | An unauthenticated request, given user system:anonymous and group system:unauthenticated; on by default unless AlwaysAllow | k8s:reference/access-authn-authz/authentication/#anonymous-requests | authenticator |  | C |
| system:authenticated | `k8s.system-authenticated` | Group every successfully authenticated user is added to | k8s:reference/access-authn-authz/authentication/#users-in-kubernetes | authenticator |  | C |
| X.509 client certificate authentication | `k8s.x509-client-cert-auth` | Authentication by a client certificate signed by the cluster CA: CN is the username, O fields are groups | k8s:reference/access-authn-authz/authentication/#x509-client-certificates | digital certificate, certificate authority |  | C |
| bearer token | `k8s.bearer-token` | A token sent in the Authorization: Bearer header | k8s:reference/access-authn-authz/authentication/#putting-a-bearer-token-in-a-request | token |  | C |
| static token file | `k8s.static-token-file` | A CSV of tokens read at start-up (--token-auth-file); tokens last indefinitely and changes need a restart | k8s:reference/access-authn-authz/authentication/#static-token-file ; k8s:concepts/security/hardening-guide/authentication-mechanisms/#static-token-file | bearer token |  | C |
| bootstrap token | `k8s.bootstrap-token` | A bearer token used to join nodes to a cluster; not suitable for users | k8s:concepts/security/hardening-guide/authentication-mechanisms/#bootstrap-tokens ; k8s:reference/access-authn-authz/authentication/#bootstrap-tokens | bearer token |  | C |
| OpenID Connect (OIDC) | `k8s.oidc` | An OAuth2 flavour whose signed ID token (a JWT) the API server can accept; recommended for production users | k8s:reference/access-authn-authz/authentication/#openid-connect-tokens ; k8s:concepts/security/hardening-guide/authentication-mechanisms/ | token |  | C |
| JSON Web Token (JWT) | `k8s.jwt` | A signed token format with well-known fields; OIDC ID tokens and service account tokens are JWTs | k8s:reference/access-authn-authz/authentication/#json-web-token-authentication ; k8s:concepts/security/controlling-access/#authentication | token |  | C |
| webhook token authentication | `k8s.webhook-token-auth` | The API server asks an external service (via TokenReview) whether a token is valid | k8s:reference/access-authn-authz/authentication/#webhook-token-authentication | bearer token |  | C |
| authenticating proxy | `k8s.authenticating-proxy` | A proxy that authenticates users and passes username and groups to the API server in headers | k8s:reference/access-authn-authz/authentication/#authenticating-proxy ; k8s:concepts/security/hardening-guide/authentication-mechanisms/#authenticating-proxy | authenticator |  | C |
| user impersonation | `k8s.user-impersonation` | Acting as another user through impersonation headers, authorised by the impersonate verb | k8s:reference/access-authn-authz/authentication/#user-impersonation ; k8s:concepts/security/rbac-good-practices/#impersonate-verb | authorization |  | C |
| service account token | `k8s.service-account-token` | A JWT credential for a ServiceAccount, checked for signature, expiry, audience and bound object | k8s:concepts/security/service-accounts/#authenticating-credentials | ServiceAccount, JWT |  | C |
| TokenRequest API | `k8s.tokenrequest-api` | API that issues short-lived, bound service account tokens | k8s:concepts/security/service-accounts/#get-a-token ; k8s:reference/access-authn-authz/service-accounts-admin/#bound-service-account-tokens | service account token |  | C |
| bound service account token | `k8s.bound-sa-token` | A time-limited token tied to an audience and an object such as a Pod; expires when the Pod is deleted | k8s:concepts/security/service-accounts/#authenticating-credentials ; k8s:reference/access-authn-authz/service-accounts-admin/#bound-service-account-token-volume | TokenRequest API |  | C |
| projected service account token volume | `k8s.projected-sa-token` | The volume through which the kubelet mounts an auto-rotating bound token (plus ca.crt and namespace) into a Pod | k8s:reference/access-authn-authz/service-accounts-admin/#bound-service-account-token-volume | bound service account token, projected volume |  | C |
| legacy service account token Secret | `k8s.legacy-sa-token-secret` | A long-lived token stored in a Secret; does not expire; no longer auto-created since v1.24 | k8s:concepts/security/service-accounts/#get-a-token ; k8s:concepts/security/hardening-guide/authentication-mechanisms/#serviceaccount-secret-tokens | service account token | V | C |
| automountServiceAccountToken | `k8s.automount-sa-token` | Field (on a ServiceAccount or Pod) that, set to false, stops a token being mounted into Pods that don't need it | k8s:concepts/security/service-accounts/#assign-to-pod ; k8s:concepts/security/security-checklist/#secrets | ServiceAccount |  | C |
| token audience | `k8s.token-audience` | The intended recipient named in a token; the receiving application should check it | k8s:concepts/security/service-accounts/#authenticating-in-code | token |  | X |
| kubeconfig security | `k8s.kubeconfig-security` | Only use kubeconfig files from trusted sources: a crafted file can run malicious code or expose files | k8s:concepts/configuration/organize-cluster-access-kubeconfig/ | kubeconfig |  | C |

KCNA terms this topic deepens (topic 0, no new primer): authentication (deeper), ServiceAccount (deeper).

### T7. Authorization and RBAC
Covers: 3.4 Authorization (LF page only).

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| authorization mode | `k8s.authorization-mode` | An authorizer the API server uses: AlwaysAllow, AlwaysDeny, ABAC, RBAC, Node or Webhook | k8s:reference/access-authn-authz/authorization/#authorization-modules | authorization |  | C |
| authorization verdict (allow, deny, no opinion) | `k8s.authorization-verdict` | Authorizers run in order; the first allow or deny wins; if all have no opinion the request is denied (403) | k8s:reference/access-authn-authz/authorization/#determine-whether-a-request-is-allowed-or-denied | authorization mode |  | C |
| AlwaysAllow mode | `k8s.always-allow` | Allows every request; with RBAC it still allows everything, as RBAC has no deny rules; never on a public API server | k8s:reference/access-authn-authz/authorization/#warning-always-allow | authorization mode |  | C |
| Node authorization | `k8s.node-authorization` | Special-purpose mode that grants kubelets permissions based on the Pods scheduled to them | k8s:reference/access-authn-authz/authorization/#authorization-modules ; k8s:tasks/administer-cluster/securing-a-cluster/#api-authorization | authorization mode, kubelet |  | C |
| ABAC authorization mode | `k8s.abac-mode` | Attribute-based access control mode: policies combining user, resource and environment attributes | k8s:reference/access-authn-authz/authorization/#authorization-modules | authorization mode |  | X |
| Webhook authorization | `k8s.webhook-authorization` | A synchronous HTTP callout to an external service that decides the request | k8s:reference/access-authn-authz/authorization/#authorization-modules | authorization mode |  | X |
| request verbs | `k8s.request-verbs` | get, list, watch, create, update, patch, delete, deletecollection, mapped from HTTP methods | k8s:reference/access-authn-authz/authorization/#determine-the-request-verb | authorization |  | C |
| get, list and watch equivalence | `k8s.get-list-watch` | All three can return full object data; list on Secrets reveals their contents | k8s:reference/access-authn-authz/authorization/#determine-the-request-verb ; k8s:concepts/security/rbac-good-practices/#listing-secrets | request verbs |  | C |
| system:masters | `k8s.system-masters` | Built-in group with unrestricted access that bypasses RBAC and webhook authorizers; break-glass only | k8s:reference/access-authn-authz/authorization/#the-system-masters-group ; k8s:concepts/security/security-checklist/#authentication-authorization | RBAC |  | C |
| user-facing ClusterRoles | `k8s.user-facing-roles` | Default cluster-admin, admin, edit and view roles | k8s:reference/access-authn-authz/rbac/#user-facing-roles | ClusterRole |  | C |
| system: prefix | `k8s.system-prefix` | Marks default roles and bindings managed by the control plane; change them with care | k8s:reference/access-authn-authz/rbac/#default-roles-and-role-bindings | ClusterRole |  | X |
| escalate verb | `k8s.escalate-verb` | Lets a user create or update roles with permissions they do not hold themselves | k8s:concepts/security/rbac-good-practices/#escalate-verb ; k8s:reference/access-authn-authz/rbac/#restrictions-on-role-creation-or-update | Role |  | C |
| bind verb | `k8s.bind-verb` | Lets a user create bindings to roles whose permissions they do not hold | k8s:concepts/security/rbac-good-practices/#bind-verb | RoleBinding |  | C |
| impersonate verb | `k8s.impersonate-verb` | Lets a user act as other users, groups or service accounts | k8s:concepts/security/rbac-good-practices/#impersonate-verb | user impersonation |  | C |
| RBAC privilege escalation prevention | `k8s.rbac-escalation-prevention` | You can only grant permissions you already hold (at the same scope), unless you have escalate or bind | k8s:reference/access-authn-authz/rbac/#privilege-escalation-prevention-and-bootstrapping | escalate verb, bind verb |  | C |
| wildcard permissions | `k8s.wildcard-permissions` | Rules using * grant all current and future resource types; avoid them | k8s:concepts/security/rbac-good-practices/#least-privilege | Role |  | C |
| privilege escalation via workload creation | `k8s.escalation-via-pod-creation` | Anyone who can create Pods in a namespace can mount its Secrets, ConfigMaps and volumes and run as any of its ServiceAccounts | k8s:reference/access-authn-authz/authorization/#privilege-escalation-via-pod-creation ; k8s:concepts/security/rbac-good-practices/#workload-creation | ServiceAccount, Secret |  | C |
| nodes/proxy permission | `k8s.nodes-proxy` | Access to the kubelet API; even get allows running commands in any container on the node, bypassing audit and admission | k8s:concepts/security/rbac-good-practices/#access-to-proxy-subresource-of-nodes ; k8s:reference/access-authn-authz/kubelet-authn-authz/#get-nodes-proxy-warning | kubelet |  | C |
| RBAC escalation risks (other) | `k8s.rbac-other-risks` | PersistentVolume creation (hostPath), CSR approval, serviceaccounts/token create, webhook configuration control, namespace label patching | k8s:concepts/security/rbac-good-practices/#privilege-escalation-risks | RBAC |  | C |
| periodic access review | `k8s.access-review` | Review RBAC settings for redundant entries and escalations; the checklist says at most 24 months apart | k8s:concepts/security/rbac-good-practices/#periodic-review ; k8s:concepts/security/security-checklist/#authentication-authorization | RBAC | V | C |
| SubjectAccessReview | `k8s.subject-access-review` | An API object asking whether a user may perform an action; used by webhook authorizers and the kubelet | k8s:concepts/security/controlling-access/#authorization ; k8s:reference/access-authn-authz/kubelet-authn-authz/#kubelet-authorization | authorization |  | X |

KCNA terms this topic deepens (topic 0, no new primer): RBAC (deeper).

### T8. Pod Security Standards and Pod Security Admission
Covers: 3.1 Pod Security Standards; 3.2 Pod Security Admissions.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| Baseline controls | `k8s.baseline-controls` | Baseline forbids HostProcess, host namespaces, privileged containers, added capabilities beyond a default list, hostPath, host ports, and more | k8s:concepts/security/pod-security-standards/#baseline | Pod Security Standards |  | C |
| Restricted controls | `k8s.restricted-controls` | Everything in Baseline, plus limited volume types, no privilege escalation, non-root, seccomp set, drop ALL capabilities | k8s:concepts/security/pod-security-standards/#restricted | Baseline controls |  | C |
| Restricted volume types | `k8s.restricted-volume-types` | Restricted allows only configMap, csi, downwardAPI, emptyDir, ephemeral, persistentVolumeClaim, projected and secret volumes | k8s:concepts/security/pod-security-standards/#restricted | Restricted controls |  | C |
| host ports | `k8s.host-ports` | Exposing a container port on the node (hostPort); Baseline disallows it or limits it to a known list | k8s:concepts/security/pod-security-standards/#baseline | host namespaces |  | X |
| sysctls | `k8s.sysctls` | Kernel parameters; Baseline allows only a 'safe', namespaced subset | k8s:concepts/security/pod-security-standards/#baseline | kernel |  | X |
| Pod Security Admission version label | `k8s.psa-version-label` | pod-security.kubernetes.io/<MODE>-version pins a policy to a Kubernetes minor version, or latest | k8s:concepts/security/pod-security-admission/#pod-security-admission-labels-for-namespaces | Pod Security Admission | V | C |
| Pod Security Admission exemptions | `k8s.psa-exemptions` | Statically configured usernames, RuntimeClassNames or namespaces that the admission controller ignores | k8s:concepts/security/pod-security-admission/#exemptions | Pod Security Admission |  | C |
| PodSecurity admission plugin | `k8s.podsecurity-plugin` | The built-in admission controller that enforces the Pod Security Standards; enabled by default, stable since v1.25 | k8s:concepts/security/pod-security-admission/ ; k8s:reference/access-authn-authz/admission-controllers/#podsecurity | Pod Security Admission | V | C |
| Pod OS field | `k8s.pod-os-field` | spec.os.name; Restricted relaxes privilege escalation, seccomp and capabilities checks when it is windows | k8s:concepts/security/pod-security-standards/#pod-os-field | Restricted controls |  | X |

KCNA terms this topic deepens (topic 0, no new primer): Pod Security Standards (deeper), Pod Security Admission (deeper).

### T9. Admission control and policy engines
Covers: 5.7 Admission Control.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| mutating vs validating admission | `k8s.mutating-validating` | Mutating controllers may change the object; validating ones may only accept or reject; mutating runs first | k8s:reference/access-authn-authz/admission-controllers/#admission-control-phases | admission controller |  | C |
| admission webhook | `k8s.admission-webhook` | An HTTP callback (MutatingAdmissionWebhook or ValidatingAdmissionWebhook) that runs your own admission logic | k8s:reference/access-authn-authz/admission-controllers/#admission-control-extension-points | admission controller |  | C |
| ValidatingAdmissionPolicy (VAP) | `k8s.validating-admission-policy` | A declarative, in-process alternative to validating webhooks, written in CEL; stable since v1.30 | k8s:reference/access-authn-authz/validating-admission-policy/ | admission controller | V | C |
| MutatingAdmissionPolicy | `k8s.mutating-admission-policy` | The declarative, in-process mutating counterpart, enabled by default in the current docs | k8s:reference/access-authn-authz/admission-controllers/#mutatingadmissionpolicy | ValidatingAdmissionPolicy | V | X |
| Common Expression Language (CEL) | `k8s.cel` | The expression language used by validating admission policies | k8s:reference/access-authn-authz/validating-admission-policy/ | ValidatingAdmissionPolicy |  | X |
| default admission plugins | `k8s.default-admission-plugins` | The admission plugins on by default, e.g. CertificateApproval, LimitRanger, PodSecurity, ResourceQuota, ServiceAccount and the webhook and policy plugins (NodeRestriction is not among them) | k8s:reference/access-authn-authz/admission-controllers/#which-plugins-are-enabled-by-default | admission controller | V | C |
| NodeRestriction | `k8s.noderestriction` | Limits a kubelet to modifying its own Node object and Pods bound to it, and blocks node-restriction.kubernetes.io/ labels | k8s:reference/access-authn-authz/admission-controllers/#noderestriction | Node authorization |  | C |
| AlwaysPullImages | `k8s.alwayspullimages` | Forces imagePullPolicy Always so only Pods with registry credentials can use private images | k8s:reference/access-authn-authz/admission-controllers/#alwayspullimages | imagePullPolicy, private registry |  | C |
| ImagePolicyWebhook | `k8s.imagepolicywebhook` | Admission plugin that asks an external webhook whether a Pod's images are allowed | k8s:reference/access-authn-authz/admission-controllers/#imagepolicywebhook | admission webhook |  | C |
| DenyServiceExternalIPs | `k8s.denyserviceexternalips` | Rejects new uses of Service externalIPs, mitigating CVE-2020-8554 | k8s:reference/access-authn-authz/admission-controllers/#denyserviceexternalips | Service |  | C |
| CertificateSubjectRestriction | `k8s.certificatesubjectrestriction` | Rejects certificate requests that ask for the system:masters group | k8s:concepts/security/security-checklist/#admission-controllers | system:masters |  | C |
| PodNodeSelector / PodTolerationRestriction | `k8s.podnodeselector` | Admission plugins that force node selectors, or limit tolerations, per namespace | k8s:concepts/security/security-checklist/#pod-placement | nodeSelector, toleration |  | X |
| EventRateLimit | `k8s.eventratelimit` | Alpha admission plugin that rate-limits new Events at the API server | k8s:reference/access-authn-authz/admission-controllers/#eventratelimit | Event | V | X |
| policy engine | `k8s.policy-engine` | A tool that evaluates policy as code, typically deployed as an admission webhook (OPA Gatekeeper, Kyverno, Kubewarden) | k8s:concepts/security/pod-security-standards/#alternatives ; k8s:concepts/security/#policies | policy as code, admission webhook |  | C |
| Open Policy Agent (OPA) | `k8s.opa` | A general-purpose, CNCF-graduated policy engine with a declarative policy language (Rego) | opa | policy engine |  | C |
| Gatekeeper | `k8s.gatekeeper` | OPA-based Kubernetes admission controller using ConstraintTemplates and Constraints, with an audit function | gatekeeper | Open Policy Agent |  | C |
| Kyverno | `k8s.kyverno` | A cloud native policy engine whose policies are Kubernetes resources written in YAML and CEL | kyverno | policy engine |  | C |
| Kubewarden | `k8s.kubewarden` | A third-party policy engine listed as a Pod Security Standards alternative | k8s:concepts/security/pod-security-standards/#alternatives | policy engine |  | X |

KCNA terms this topic deepens (topic 0, no new primer): admission (deeper).

### T10. Secrets and encryption at rest
Covers: 3.5 Secrets; 2.8 Etcd; 2.11 Storage.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| base64 encoding | `k8s.base64` | An encoding of Secret data in manifests; not encryption and no extra confidentiality | k8s:concepts/security/secrets-good-practices/#avoid-sharing-secret-manifests | Secret |  | C |
| encryption at rest (API data) | `k8s.encryption-at-rest` | The API server writing encrypted representations of objects such as Secrets to etcd | k8s:tasks/administer-cluster/encrypt-data/ ; k8s:tasks/administer-cluster/securing-a-cluster/#encrypt-secrets-at-rest | etcd, encryption |  | C |
| EncryptionConfiguration | `k8s.encryption-configuration` | API server file listing resources to encrypt and an ordered list of providers; the first provider encrypts | k8s:tasks/administer-cluster/encrypt-data/#understanding-the-encryption-at-rest-configuration | encryption at rest (API data) |  | C |
| identity provider | `k8s.identity-provider` | The default provider: writes resources as-is, with no encryption | k8s:tasks/administer-cluster/encrypt-data/#providers | EncryptionConfiguration |  | C |
| aescbc / aesgcm / secretbox providers | `k8s.local-key-providers` | Providers with keys held on the control plane host: aescbc (weak), aesgcm (rotate every 200,000 writes), secretbox | k8s:tasks/administer-cluster/encrypt-data/#providers | EncryptionConfiguration | V | C |
| KMS provider | `k8s.kms-provider` | Provider using envelope encryption with an external Key Management Service; v1 deprecated since v1.28, v2 stable since v1.29 | k8s:tasks/administer-cluster/encrypt-data/#providers ; k8s:tasks/administer-cluster/kms-provider/ | envelope encryption | V | C |
| envelope encryption | `k8s.envelope-encryption` | Data is encrypted with a data encryption key (DEK), which is itself encrypted with a key encryption key (KEK) held in a KMS | k8s:tasks/administer-cluster/encrypt-data/#kms-key-storage | cryptographic key |  | C |
| data encryption key / key encryption key (DEK/KEK) | `k8s.dek-kek` | The per-object data key, and the managed key that encrypts it | k8s:tasks/administer-cluster/encrypt-data/#kms-key-storage | envelope encryption |  | C |
| local key storage risk | `k8s.local-key-risk` | A locally stored key protects against etcd compromise but not host compromise | k8s:tasks/administer-cluster/encrypt-data/#local-key-storage | EncryptionConfiguration |  | C |
| Secrets Store CSI Driver | `k8s.secrets-store-csi-driver` | A DaemonSet that lets the kubelet fetch Secrets from external stores and mount them into authorised Pods | k8s:concepts/security/secrets-good-practices/#configure-access-to-external-secrets | CSI, Secret |  | C |
| external secrets manager | `k8s.external-secrets-manager` | Keeping secrets outside the cluster and injecting them at runtime, easing key management | wp#secrets-encryption ; k8s:concepts/security/security-checklist/#secrets | Secret |  | C |
| Secret in volume vs environment variable | `k8s.secret-volume-vs-env` | Mount Secrets as files (ideally in-memory); environment variables leak more easily, for example in crash dumps | k8s:concepts/security/security-checklist/#secrets | Secret |  | C |
| Secret types | `k8s.secret-types` | Built-in types such as Opaque, kubernetes.io/tls, kubernetes.io/dockerconfigjson and kubernetes.io/service-account-token | k8s:concepts/configuration/secret/#secret-types | Secret |  | X |
| immutable Secret | `k8s.immutable-secret` | A Secret (or ConfigMap) marked immutable so its data cannot be changed | k8s:concepts/configuration/secret/#secret-immutable | Secret |  | X |
| Secret good practices (developers) | `k8s.secret-dev-practices` | Give only the container that needs it access; protect values after reading; don't share Secret manifests | k8s:concepts/security/secrets-good-practices/#developers | Secret |  | C |

KCNA terms this topic deepens (topic 0, no new primer): Secret (deeper).

### T11. PKI and certificates
Covers: 5.5 PKI.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| public key infrastructure (PKI) | `k8s.pki` | A framework to issue, maintain and revoke public key certificates; Kubernetes needs it for TLS authentication | ng:public_key_infrastructure ; k8s:setup/best-practices/certificates/ | certificate authority |  | C |
| server vs client certificate | `k8s.server-client-cert` | A certificate proving a server's identity to clients, versus one a client presents to authenticate | k8s:setup/best-practices/certificates/#how-certificates-are-used-by-your-cluster | PKI |  | C |
| cluster CAs | `k8s.cluster-cas` | kubernetes-ca (general), etcd-ca (etcd) and kubernetes-front-proxy-ca (front proxy) | k8s:setup/best-practices/certificates/#single-root-ca | PKI |  | C |
| service account key pair | `k8s.sa-key-pair` | sa.key and sa.pub, the key pair used to sign and verify service account tokens | k8s:setup/best-practices/certificates/#single-root-ca | service account token |  | C |
| /etc/kubernetes/pki | `k8s.pki-directory` | Where kubeadm stores most cluster certificates | k8s:setup/best-practices/certificates/#where-certificates-are-stored | kubeadm |  | C |
| CertificateSigningRequest (CSR) | `k8s.csr` | An API object requesting a certificate from a signer; approval and signing are separate permissions | k8s:reference/access-authn-authz/certificate-signing-requests/ ; k8s:concepts/security/rbac-good-practices/#csrs-and-certificate-issuing | PKI |  | C |
| kubelet TLS bootstrapping | `k8s.kubelet-tls-bootstrapping` | Automated provisioning of kubelet client certificates when a node joins | k8s:reference/access-authn-authz/kubelet-tls-bootstrapping/ ; k8s:concepts/architecture/control-plane-node-communication/#node-to-control-plane | bootstrap token, CSR |  | C |
| certificate expiry and rotation | `k8s.cert-rotation` | Keep intermediate and leaf certificates to at most 3 years; set short lifetimes and automate rotation | k8s:concepts/security/security-checklist/#authentication-authorization ; k8s:tasks/administer-cluster/securing-a-cluster/#rotate-infrastructure-credentials-frequently | PKI | V | C |
| offline root CA | `k8s.offline-root-ca` | Protect the root certificate with an offline CA or a managed online CA with effective access controls | k8s:concepts/security/security-checklist/#authentication-authorization | certificate authority |  | C |
| client certificate limitations | `k8s.client-cert-limitations` | Cannot be individually revoked, keys can't be password-protected, groups fixed for the cert's life | k8s:concepts/security/hardening-guide/authentication-mechanisms/#x509-client-certificate-authentication | X.509 client certificate authentication |  | C |
| cert-manager | `k8s.cert-manager` | A tool that creates TLS certificates for workloads and renews them before they expire, from issuers such as Let's Encrypt, Vault or a private PKI | gh:cert-manager/website/blob/master/content/docs/README.md | PKI |  | X |

### T12. Cluster component security
Covers: 2.1-2.11 (API Server, Controller Manager, Scheduler, Kubelet, Container Runtime, KubeProxy, Pod, Etcd, Container Networking, Client Security, Storage).

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| API server exposure | `k8s.api-server-exposure` | The API server (6443 by default, often 443) should not be publicly exposed; many managed services expose it by default | k8s:concepts/security/controlling-access/#transport-security ; k8s:concepts/security/security-checklist/#network-security | kube-apiserver | V | C |
| --anonymous-auth=false | `k8s.anonymous-auth-flag` | Flag (API server or kubelet) that disables anonymous requests so unauthenticated calls get 401 | k8s:reference/access-authn-authz/authentication/#anonymous-requests ; k8s:reference/access-authn-authz/kubelet-authn-authz/#kubelet-authentication | anonymous request |  | C |
| kubelet API | `k8s.kubelet-api` | The kubelet's HTTPS API on TCP 10250; gives Pod data, logs and exec in every container on the node | k8s:concepts/security/api-server-bypass-risks/#kubelet-api | kubelet |  | C |
| kubelet authentication and authorization | `k8s.kubelet-authn-authz` | Defaults allow anonymous access and AlwaysAllow; set webhook authn/authz delegating to the API server | k8s:reference/access-authn-authz/kubelet-authn-authz/ | kubelet API |  | C |
| kubelet read-only port | `k8s.kubelet-read-only-port` | An unauthenticated kubelet port that should not be enabled | k8s:concepts/security/api-server-bypass-risks/#kubelet-api | kubelet API |  | X |
| API server to kubelet verification | `k8s.apiserver-kubelet-verification` | By default the API server does not verify the kubelet's serving certificate; set --kubelet-certificate-authority | k8s:concepts/architecture/control-plane-node-communication/#api-server-to-kubelet | kubelet API |  | C |
| hub-and-spoke API pattern | `k8s.hub-and-spoke` | All node and Pod API use ends at the API server; other control plane components expose no remote services | k8s:concepts/architecture/control-plane-node-communication/#node-to-control-plane | kube-apiserver |  | C |
| Konnectivity service | `k8s.konnectivity` | TCP-level proxy (server plus node agents) for control plane to cluster traffic, replacing deprecated SSH tunnels | k8s:concepts/architecture/control-plane-node-communication/#konnectivity-service | hub-and-spoke API pattern | V | X |
| etcd access | `k8s.etcd-access` | etcd (client port 2379) needs mTLS, a CA used only for etcd, and network restriction; any trusted client cert has full access | k8s:concepts/security/api-server-bypass-risks/#the-etcd-api ; k8s:concepts/security/security-checklist/#network-security | etcd, mTLS |  | C |
| etcd write equals cluster root | `k8s.etcd-root` | Write access to etcd is equivalent to root on the whole cluster; read access escalates quickly | k8s:tasks/administer-cluster/securing-a-cluster/#restrict-access-to-etcd | etcd access |  | C |
| etcd peer TLS | `k8s.etcd-peer-tls` | Encrypted, authenticated communication between etcd members (peer port 2380) | k8s:tasks/administer-cluster/configure-upgrade-etcd/#securing-communication ; k8s:reference/networking/ports-and-protocols/ | etcd access |  | C |
| etcd backup protection | `k8s.etcd-backup-protection` | Encrypt backups and consider full disk encryption; wipe etcd storage when retired | k8s:tasks/administer-cluster/securing-a-cluster/#encrypt-secrets-at-rest ; k8s:concepts/security/secrets-good-practices/#improve-etcd-management-policies | etcd |  | C |
| --use-service-account-credentials | `k8s.use-sa-credentials` | kube-controller-manager flag so each controller uses its own service account instead of one powerful identity | k8s:concepts/security/security-checklist/#authentication-authorization | kube-controller-manager |  | C |
| scheduler hardening | `k8s.scheduler-hardening` | Bind kube-scheduler to localhost, disable profiling, protect its kubeconfig, review custom scheduler plugins | k8s:concepts/security/hardening-guide/scheduler/ | kube-scheduler |  | C |
| control plane ports | `k8s.control-plane-ports` | 6443 API server, 2379-2380 etcd, 10250 kubelet, 10259 scheduler, 10257 controller manager, 10256 kube-proxy | k8s:reference/networking/ports-and-protocols/ | control plane | V | C |
| container runtime socket | `k8s.runtime-socket` | The runtime's Unix socket; anyone with access can start or control containers; never mount it via hostPath | k8s:concepts/security/api-server-bypass-risks/#runtime-socket | container runtime |  | C |
| static Pod bypass | `k8s.static-pod-bypass` | Static Pods come from a node directory or URL, bypass the API server's controls, and may be hidden from it | k8s:concepts/security/api-server-bypass-risks/#static-pods | static Pod |  | C |
| API server bypass risks | `k8s.api-server-bypass` | Paths that skip audit and admission: static Pods, the kubelet API, the etcd API and the runtime socket | k8s:concepts/security/api-server-bypass-risks/ | kube-apiserver |  | C |
| PersistentVolume and hostPath risk | `k8s.pv-hostpath-risk` | Creating arbitrary PersistentVolumes allows hostPath, giving host filesystem access; let only trusted admins create PVs | k8s:concepts/security/rbac-good-practices/#persistent-volume-creation | PersistentVolume, hostPath |  | C |
| storage encryption and backups | `k8s.storage-protection` | Encrypt volumes via storage plugins, back up and test restores, authenticate node-to-storage connections | k8s:concepts/security/cloud-native-security/#protection-runtime-storage | volume |  | C |
| kube-proxy security | `k8s.kube-proxy-security` | kube-proxy runs on each node at the Worker/Container trust boundary; its health port is 10256 | tm19 (kube-proxy) ; k8s:reference/networking/ports-and-protocols/ | kube-proxy |  | X |
| alpha and beta feature risk | `k8s.alpha-beta-risk` | Alpha and beta features may have security bugs; disable features you do not use | k8s:tasks/administer-cluster/securing-a-cluster/#restrict-access-to-alpha-or-beta-features | feature gate |  | C |
| third-party integration review | `k8s.integration-review` | Review the permissions an extension asks for; access to all Secrets effectively makes it cluster admin | k8s:tasks/administer-cluster/securing-a-cluster/#review-third-party-integrations-before-enabling-them | RBAC |  | C |

### T13. Network security and service mesh
Covers: 3.8 Network Policy; 2.9 Container Networking; 5.4 Service Mesh; 5.6 Connectivity.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| isolated vs non-isolated Pod | `k8s.pod-isolation` | A Pod is non-isolated (all traffic allowed) in a direction until a NetworkPolicy selects it for that direction | k8s:concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation | NetworkPolicy |  | C |
| default deny policy | `k8s.default-deny` | A NetworkPolicy selecting all Pods in a namespace with no allowed traffic, making it an allow list | k8s:concepts/services-networking/network-policies/#default-policies ; k8s:concepts/security/security-checklist/#network-security | NetworkPolicy |  | C |
| NetworkPolicy selectors | `k8s.netpol-selectors` | podSelector, namespaceSelector, both together, or ipBlock (CIDR) | k8s:concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors | NetworkPolicy, selector |  | C |
| NetworkPolicy rules are additive | `k8s.netpol-additive` | Policies never conflict; allowed traffic is the union; both source egress and destination ingress must allow | k8s:concepts/services-networking/network-policies/#the-two-sorts-of-pod-isolation | NetworkPolicy |  | C |
| NetworkPolicy limits | `k8s.netpol-limits` | No TLS, no explicit deny rules, no logging, no node targeting by identity, no targeting Services by name, no cluster-wide defaults | k8s:concepts/services-networking/network-policies/#what-you-can-t-do-with-network-policies-at-least-not-yet | NetworkPolicy |  | C |
| CNI support for NetworkPolicy | `k8s.cni-netpol-support` | NetworkPolicy is enforced by the network plugin; it has no effect unless the plugin supports it | k8s:concepts/services-networking/network-policies/#prerequisites ; k8s:concepts/security/security-checklist/#network-security | CNI |  | C |
| east-west traffic | `k8s.east-west-traffic` | Traffic between services inside the deployment, which should be limited to authorised pairs | wp#microservices-and-eliminating-implicit-trust | microservices architecture |  | C |
| micro-segmentation | `k8s.micro-segmentation` | Fine-grained segmentation into micro-perimeters, part of zero trust against lateral movement | wp#zero-trust-architecture | zero trust, lateral movement |  | X |
| encryption in cluster network | `k8s.cluster-network-encryption` | Some CNI plugins encrypt pod traffic (e.g. a VPN overlay); otherwise a service mesh can | k8s:concepts/security/cloud-native-security/#networking-and-security ; k8s:concepts/security/security-checklist/#network-security | CNI, service mesh |  | C |
| service mesh security | `k8s.service-mesh-security` | A mesh provides mTLS between services, workload identity and traffic policy, removing implicit trust | wp#service-mesh | service mesh, mTLS |  | C |
| SPIFFE / SPIRE | `k8s.spiffe` | A standard for workload identity documents (SVIDs, X.509 or JWT) and its reference implementation | gh:spiffe/spiffe.io/blob/master/content/docs/latest/spiffe-about/overview.md | identity |  | X |
| Ingress TLS | `k8s.ingress-tls` | Terminating TLS for external traffic at the Ingress | 4c-page (workload security table) ; k8s:concepts/services-networking/ingress/#tls | Ingress, TLS |  | C |
| LoadBalancer and ExternalIPs restriction | `k8s.externalips-restriction` | Restrict these Service features (CVE-2020-8554: man in the middle) | k8s:concepts/security/security-checklist/#network-security | Service |  | C |
| egress control | `k8s.egress-control` | Limit containers' outbound network access to what they need; deny traffic to malicious domains | wp#runtime ; nist190 §4.4.2 | NetworkPolicy |  | C |

KCNA terms this topic deepens (topic 0, no new primer): NetworkPolicy (deeper).

### T14. Isolation, segmentation and multi-tenancy
Covers: 3.6 Isolation and Segmentation.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| tenant | `k8s.tenant` | A team or customer sharing a cluster with others | k8s:concepts/security/multi-tenancy/#tenants | multitenancy |  | C |
| hard vs soft multi-tenancy | `k8s.hard-soft-multitenancy` | Strong isolation for tenants who don't trust each other, versus weaker isolation; really a spectrum | k8s:concepts/security/multi-tenancy/#isolation | multitenancy |  | C |
| control plane isolation | `k8s.control-plane-isolation` | Tenants cannot access or affect each other's API resources (namespaces, RBAC, quotas) | k8s:concepts/security/multi-tenancy/#control-plane-isolation | tenant |  | C |
| data plane isolation | `k8s.data-plane-isolation` | Isolation of workloads on nodes: network, storage, sandboxing and node isolation | k8s:concepts/security/multi-tenancy/#data-plane-isolation | tenant |  | C |
| node isolation | `k8s.node-isolation` | Dedicating nodes to one tenant or sensitivity tier, so an escape reaches only that tenant's Pods | k8s:concepts/security/multi-tenancy/#node-isolation ; k8s:concepts/security/security-checklist/#pod-placement | node |  | C |
| noisy neighbour | `k8s.noisy-neighbour` | One tenant's workload degrading others' performance on shared resources | k8s:concepts/security/multi-tenancy/ | tenant |  | C |
| namespaces as a weak boundary | `k8s.namespace-weak-boundary` | Namespaces separate trust levels, but boundaries within a namespace are weak | k8s:concepts/security/rbac-good-practices/#workload-creation | namespace |  | C |
| virtual control plane per tenant | `k8s.virtual-control-plane` | Giving each tenant its own control plane components while sharing nodes | k8s:concepts/security/multi-tenancy/#virtual-control-plane-per-tenant | control plane isolation |  | X |
| API Priority and Fairness (APF) | `k8s.api-priority-fairness` | Prioritises and queues API server requests so busy clients can't crowd out others | k8s:concepts/security/multi-tenancy/#api-priority-and-fairness | kube-apiserver |  | X |
| dedicated cluster per tenant | `k8s.cluster-per-tenant` | The strongest option: no cluster-level sharing, possibly on dedicated hardware | k8s:concepts/security/multi-tenancy/#isolation | hard vs soft multi-tenancy |  | C |

KCNA terms this topic deepens (topic 0, no new primer): ResourceQuota / LimitRange (security use).

### T15. Audit logging, observability and runtime detection
Covers: 3.7 Audit Logging; 5.3 Observability.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| Kubernetes auditing | `k8s.k8s-auditing` | A chronological record of actions in the cluster by users, applications and the control plane, generated in kube-apiserver | k8s:tasks/debug/debug-cluster/audit/ | kube-apiserver |  | C |
| audit stages | `k8s.audit-stages` | RequestReceived, ResponseStarted (long-running requests only), ResponseComplete and Panic | k8s:tasks/debug/debug-cluster/audit/ | Kubernetes auditing |  | C |
| audit levels | `k8s.audit-levels` | None, Metadata, Request and RequestResponse | k8s:tasks/debug/debug-cluster/audit/#audit-policy | Kubernetes auditing |  | C |
| audit policy | `k8s.audit-policy` | Rules (--audit-policy-file) checked in order; the first match sets the event's level; no file means no logging | k8s:tasks/debug/debug-cluster/audit/#audit-policy | audit levels |  | C |
| audit backends | `k8s.audit-backends` | Log backend (JSON lines file, --audit-log-path) and webhook backend (external HTTP API) | k8s:tasks/debug/debug-cluster/audit/#audit-backends | Kubernetes auditing |  | C |
| audit log protection | `k8s.audit-log-protection` | Protect audit logs from general access and forward them off-cluster so attackers can't erase tracks | k8s:concepts/security/security-checklist/#logs-and-auditing ; wp#audit-log-analysis | Kubernetes auditing |  | C |
| audit logging vs security logging vs monitoring | `k8s.audit-vs-security-logging` | An audit log records events and changes; a security log is its security-relevant subset; monitoring detects deviations | lex#audit-logging-vs-security-logging-vs-monitoring | Kubernetes auditing |  | X |
| runtime detection | `k8s.runtime-detection` | Monitoring syscalls and network traffic of running containers for unexpected or malicious behaviour | wp#runtime-detection | system call |  | C |
| Falco | `k8s.falco` | A CNCF-graduated runtime security tool that parses Linux syscalls, checks them against rules and alerts | falco | runtime detection |  | C |
| incident response | `k8s.incident-response` | Planned handling of a security incident: preparation, detection and analysis, containment and recovery, retrospective | wp#incident-response ; wp#ransomware-incident-response | – |  | C |
| forensics | `k8s.forensics` | Capturing and analysing evidence to find an incident's root cause, harder with short-lived containers | wp#incident-response--mitigation | incident response |  | X |
| security information and event management (SIEM) | `k8s.siem` | Central tooling that collects and correlates security events (the attack trees suggest testing SIEM controls) | at:AttackTrees/CompromisedContainer.md | audit logging vs security logging vs monitoring |  | X |
| observability chain integrity | `k8s.observability-integrity` | Protect the whole chain feeding dashboards so it stays reliable during an incident; tamper-proof logs for high assurance | k8s:concepts/security/cloud-native-security/#observability-and-runtime-security | observability |  | C |
| behavioural baseline | `k8s.behavioural-baseline` | Expected normal behaviour against which anomalies (e.g. delayed data exfiltration) are detected | wp#runtime-detection | runtime detection |  | X |

### T16. The Kubernetes threat model
Covers: 4.1-4.7 (Trust Boundaries and Data Flow; Persistence; Denial of Service; Malicious Code Execution and Compromised Applications; Attacker on the Network; Access to Sensitive Data; Privilege Escalation).

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| threat modelling | `k8s.threat-modelling` | Scoping a system's architecture, its data stores and security boundaries, then analysing interactions across them to find risks | wp#threat-modeling ; k8s:concepts/security/cloud-native-security/#lifecycle-phase-develop | threat |  | C |
| trust boundary | `k8s.trust-boundary` | A logical line between zones of different criticality where controls should be enforced | tm19 (Trust Zones) ; wp#threat-modeling | threat modelling |  | C |
| Kubernetes trust zones | `k8s.k8s-trust-zones` | Internet, API Server, Master Components, Master Data (etcd), Worker, Container (2019 threat model) | tm19 (Trust Zones) | trust boundary | V | C |
| data flow | `k8s.data-flow` | The connections between trust zones, with their protocol and authentication, e.g. API server to Worker (kubelet) log and status retrieval over HTTP, unverified | tm19 (Trust Zone Connections) | Kubernetes trust zones |  | C |
| threat actors | `k8s.threat-actors` | Malicious insider, uninformed insider and malicious outsider (whitepaper); internal and external attackers (2019) | wp#threat-identification ; tm19 (Threat Actors) | threat |  | C |
| STRIDE | `k8s.stride` | Threat categories: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege | wp#threat-identification | threat modelling |  | C |
| attack tree | `k8s.attack-tree` | A branching structure showing the ways an attacker could reach a goal | ng:attack_tree ; at:README.md | threat |  | C |
| persistence | `k8s.persistence` | An attacker keeping a foothold that survives Pod, container and node restarts | at:AttackTrees/EstablishPersistence.md | attack tree |  | C |
| denial of service (DoS) | `k8s.denial-of-service` | Preventing authorised access by exhausting resources, e.g. no resource limits, too many objects, flooding endpoints | ng:denial_of_service ; at:AttackTrees/DenialOfService.md | availability |  | C |
| malicious code execution | `k8s.malicious-code-execution` | An attacker running their code in a container, often via a vulnerable app or a poisoned image | at:AttackTrees/MaliciousCodeExecution.md | container |  | C |
| compromised container scenario | `k8s.compromised-container` | A vulnerable app gives remote code execution in a container; the mounted service account token is a key path | at:AttackTrees/CompromisedContainer.md | malicious code execution |  | C |
| attacker on the network | `k8s.attacker-on-network` | An attacker with network access to control plane or nodes but no cluster credentials; firewalls and config mitigate | at:AttackTrees/AttackerOnTheNetwork.md | trust boundary |  | C |
| access to sensitive data | `k8s.access-sensitive-data` | Reading Secrets via misconfigured RBAC, sensitive data in logs, or eavesdropping on traffic | at:AttackTrees/AccessSensitiveData.md | Secret, RBAC |  | C |
| privilege escalation | `k8s.privilege-escalation` | Gaining higher privileges, e.g. breaking out of a container to the host or abusing RBAC | wp#threat-matrix-for-containersnew-in-v2 ; k8s:reference/access-authn-authz/authorization/#escalation-paths | least privilege |  | C |
| MITRE ATT&CK for Containers | `k8s.attack-containers` | A matrix of attacker tactics (columns) and techniques (rows) targeting containers and orchestrators | attack-containers ; wp#threat-matrix-for-containersnew-in-v2 | attack vector | V | C |
| fork bomb / cryptomining | `k8s.resource-abuse` | Workloads that exhaust node resources intentionally; requests and limits via cgroups prevent this | wp#resource-requests-and-limits | denial of service |  | X |
| threat intelligence | `k8s.threat-intelligence` | Information about threats and actors, including indicators (IPs, domains, hashes) and tactics | wp#threat-intelligence | threat |  | X |

### T17. Compliance and security frameworks
Covers: 6.1 Compliance Frameworks; 6.2 Threat Modelling Frameworks; 6.3 Supply Chain Compliance; 6.4 Automation and Tooling.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| compliance | `k8s.compliance` | Meeting the regulatory and legal requirements for your data and industry | lex#compliance-and-security | – |  | C |
| compliance vs security | `k8s.compliance-vs-security` | Complementary but not interchangeable: a compliant system is not guaranteed secure, nor a secure one compliant | wp#security-assurance | compliance |  | C |
| regulatory frameworks | `k8s.regulatory-frameworks` | PCI-DSS (payment cards), HIPAA (healthcare), GDPR (EU data), FedRAMP (US government cloud) | wp#regulatory-audits ; lex#compliance-and-security | compliance | V | C |
| CIS Benchmarks | `k8s.cis-benchmarks` | Consensus-based, prescriptive configuration recommendations, including for Kubernetes and managed Kubernetes | cis ; wp#compliance | compliance | V | C |
| kube-bench | `k8s.kube-bench` | A tool that checks whether Kubernetes is deployed securely by running the CIS Kubernetes Benchmark checks | gh:aquasecurity/kube-bench/blob/main/README.md | CIS Benchmarks |  | X |
| NIST SP 800-190 | `k8s.nist-800-190` | NIST's Application Container Security Guide (September 2017): risks and countermeasures for images, registries, orchestrators, containers and hosts | nist190 | – |  | C |
| NIST SP 800-204 | `k8s.nist-800-204` | NIST security strategies for microservices-based application systems | wp#compliance | microservices architecture |  | X |
| Secure Software Development Framework (SSDF) | `k8s.ssdf` | NIST SP 800-218; the whitepaper maps its practices, and SLSA helps measure compliance with it | wp#ssdf-v11-mappingnew-in-v2 ; slsa:about.md | software supply chain |  | C |
| NSA/CISA Kubernetes Hardening Guidance | `k8s.nsa-cisa-hardening` | US government hardening guide for Kubernetes (v1.0 Aug 2021, v1.1 Mar 2022, v1.2 Aug 2022) | nsa-blog | – | V | C |
| OpenSCAP | `k8s.openscap` | A compliance benchmark tool named in the whitepaper alongside CIS and NIST | wp#compliance | – |  | X |
| OWASP Kubernetes Top Ten | `k8s.owasp-k8s-top10` | OWASP's ranked list of Kubernetes risks (2022 and 2025 editions) | owasp-k8s-top10 | – | V | X |
| OCTAVE | `k8s.octave` | A threat modelling method named alongside STRIDE in the whitepaper | wp#threat-identification | threat modelling |  | X |
| OWASP threat modelling (four steps) | `k8s.owasp-threat-modelling` | The four-step OWASP approach the whitepaper's threat-modelling guidance builds on | wp#threat-modeling | threat modelling |  | X |
| automated governance | `k8s.automated-governance` | Automating compliance evidence and policy checks, e.g. pipeline compliance rules and machine-readable controls | lex#automated-governance ; wp#compliance | policy as code |  | C |
| supply chain compliance | `k8s.supply-chain-compliance` | Showing a supply chain meets requirements through SBOMs, attestations, SLSA levels and SSDF mapping | wp#supply-chain-securitynew-in-v2 ; slsa:about.md | SBOM, SLSA |  | C |
| US Executive Order on cybersecurity (May 2021) | `k8s.eo-cybersecurity` | The order that affirmed the need for a supply chain security framework, cited by SLSA | slsa:about.md | software supply chain |  | X |

### T18. Vulnerability management and security updates
Covers: 6.4 Automation and Tooling; 1.3 Controls and Frameworks.

| Term | ID | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|---|
| Common Vulnerabilities and Exposures (CVE) | `k8s.cve` | A public list of known vulnerabilities, each with an ID, description and reference | ng:common_vulnerabilities_and_exposures | vulnerability |  | C |
| Common Vulnerability Scoring System (CVSS) | `k8s.cvss` | A specification for scoring the severity of vulnerabilities | ng:common_vulnerability_scoring_system ; k8s:concepts/security/security-checklist/#images | CVE |  | C |
| Kubernetes official CVE feed | `k8s.k8s-cve-feed` | A community-maintained JSON and RSS feed of CVEs announced by the Security Response Committee | k8s:reference/issues-security/official-cve-feed/ | CVE | V | C |
| Security Response Committee (SRC) | `k8s.security-response-committee` | The Kubernetes group that triages vulnerability reports and sets disclosure dates | k8s:reference/issues-security/security/ | – |  | C |
| vulnerability disclosure process | `k8s.vuln-disclosure` | Report via the bug bounty or security@kubernetes.io; acknowledged within 3 working days; disclosure typically about 7 days after a fix | k8s:reference/issues-security/security/ | Security Response Committee | V | C |
| kubernetes-security-announce | `k8s.security-announce` | The mailing list for Kubernetes security and major API announcements | k8s:reference/issues-security/security/#security-announcements | – |  | C |
| patching and updates | `k8s.patching` | Adopt processes to update dependencies, especially after security announcements; patch known vulnerable software | k8s:concepts/security/cloud-native-security/#lifecycle-phase-distribute ; k8s:concepts/security/security-checklist/#images | vulnerability |  | C |
| signed Kubernetes release artefacts | `k8s.signed-k8s-artifacts` | Kubernetes signs binaries, images and SPDX SBOMs with cosign keyless signing so users can verify them | k8s:tasks/administer-cluster/verify-signed-artifacts/ | cosign, SBOM |  | C |

**Inventory totals:** 321 new terms (253 core, 68 extra) across 18 topics, plus 304
KCNA terms at topic 0. Rows marked "KCNA terms this topic deepens" add fact and
application cards on terms KCNA already introduced (for example Pod Security
Standards, RBAC, Secret, NetworkPolicy).

**Complete sets the deck must cover** (CARD-STANDARD principle 9: one card per
member, plus a "which one is missing?" card):
- **4C's:** Cloud, Cluster(s), Container(s), Code (the source spells both
  "Clusters, Containers" and "Cluster", "Container").
- **Lifecycle phases:** Develop, Distribute, Deploy, Runtime. **Runtime areas:**
  access, compute, storage.
- **STRIDE:** Spoofing, Tampering, Repudiation, Information disclosure, Denial of
  Service, Elevation of privilege.
- **Whitepaper threat actors:** malicious insider, uninformed insider, malicious
  outsider.
- **2019 trust zones:** Internet, API Server, Master Components, Master Data,
  Worker, Container.
- **Authorization modes:** AlwaysAllow, AlwaysDeny, ABAC, RBAC, Node, Webhook.
- **User-facing ClusterRoles:** cluster-admin, admin, edit, view.
- **Authentication methods:** X.509 client certificates, bootstrap tokens, service
  account tokens, static token file, JWT, OIDC, webhook token, authenticating proxy.
- **PSS profiles and their controls:**
  - Baseline: HostProcess, Host Namespaces, Privileged Containers, Capabilities,
    HostPath Volumes, Host Ports, Host Probes / Lifecycle Hooks, AppArmor, SELinux,
    /proc Mount Type, Seccomp, Sysctls.
  - Restricted adds: Volume Types, Privilege Escalation, Running as Non-root,
    Running as Non-root user, Seccomp, Capabilities.
- **PSA modes:** enforce, audit, warn. **PSA exemption dimensions:** Usernames,
  RuntimeClassNames, Namespaces.
- **Audit stages** (4) and **audit levels** (4). **Audit backends:** log, webhook.
- **Encryption providers:** identity, aescbc, aesgcm, kms v1, kms v2, secretbox.
- **Seccomp profile types:** RuntimeDefault, Unconfined, Localhost.
- **SLSA Build levels:** L0, L1, L2, L3.
- **Supply chain stages:** source code, materials, build pipelines, artefacts,
  deployments and distribution.
- **NIST SP 800-190 risk groups:** image, registry, orchestrator, container, host OS
  (with the five image risks and three registry risks).
- **Attack-tree goals and scenarios:** Denial of Service, Malicious Code
  Execution, Establish Persistence, Compromised Container, Attacker on the Network,
  Access Sensitive Data.
- **Secure Defaults (Cloud Native 8):** eight guidelines (S9 "Secure Defaults").
- **ATT&CK Containers tactics** (live, volatile): Initial Access, Execution,
  Persistence, Privilege Escalation, Stealth, Defense Impairment, Credential Access,
  Discovery, Lateral Movement, Impact.

---

## 5. Numbers and thresholds

Every figure below was read in the source line quoted. "V" marks volatile figures.

| Figure | Value, units and conditions | Source line |
|---|---|---|
| Exam questions (V) | 60 multiple-choice (generic LF MC page) | "consists of 60* multiple-choice questions" (S6 important-instructions-mc) |
| Exam time (V) | 90 minutes | "Duration of Exam 90 minutes" (S4) |
| Pass mark (V) | 75% or above | "A score of 75% or above must be earned to pass" (S6 faq-mc) |
| Validity (V) | 2 years (24 months from passing) | S4, S6 |
| Retakes, eligibility (V) | 1 retake; 12 months from purchase | S6 exam-terms-of-service |
| Price (V) | US$250; $495 with THRIVE-ONE | S4 |
| Domain weights (V) | 14 / 22 / 22 / 16 / 16 / 10% (old PDF: Compliance 16%) | S1, S3, S4, S5 |
| API server port | 6443 by default ("on the first non-localhost network interface, protected by TLS"); 443 "in a typical production Kubernetes cluster" | k8s:concepts/security/controlling-access/#transport-security; the ports page also lists "6443 \| Kubernetes API server" |
| etcd ports | 2379-2380 ("etcd server client API", used by kube-apiserver, etcd); client port 2379 ("The `etcd` service listens on TCP port 2379"); peer URLs use 2380 | k8s:reference/networking/ports-and-protocols/; k8s:concepts/security/api-server-bypass-risks/#the-etcd-api; configure-upgrade-etcd member list `http://10.0.0.1:2380, http://10.0.0.1:2379` |
| kubelet API port | TCP 10250 | "typically exposed on TCP port 10250" (api-server-bypass-risks); ports page |
| kube-scheduler, kube-controller-manager | 10259, 10257 | ports page (control plane table) |
| kube-proxy | 10256 | ports page (worker table) |
| NodePort range | 30000-32767, TCP and UDP (default) | ports page |
| HTTP 401 / 403 | 401: request cannot be authenticated (or invalid bearer token); 403: authorization denied | k8s:concepts/security/controlling-access/; authentication.md "#anonymous-requests" |
| Cloud metadata API | 169.254.169.254 | "access from pods to the cloud metadata API `169.254.169.254` should also be restricted" (security checklist, Network security) |
| Certificate lifetime (checklist) | Intermediate and leaf certificates expire no more than 3 years ahead | security checklist, Authentication & Authorization |
| Access review interval | At most 24 months apart | security checklist, Authentication & Authorization |
| Bound SA token lifespan | Default 1 hour; also expires when the Pod is deleted; the kubelet refreshes it before expiry | "expires either when the pod is deleted or after a defined lifespan (by default, that is 1 hour)" (service-accounts-admin, bound token volume) |
| Bound SA tokens introduced | v1.22 and later: short-lived, rotating TokenRequest tokens in a projected volume | service-accounts.md "#assign-to-pod" |
| Legacy SA token Secrets | Auto-created for each ServiceAccount before v1.24; they don't expire | service-accounts.md "#get-a-token" |
| PodSecurityPolicy | Deprecated v1.21, removed v1.25 | pod-security-policy.md |
| Pod Security Admission | Stable since v1.25 (`feature-state for_k8s_version="v1.25" state="stable"`) | pod-security-admission.md |
| PSS control versions | Privilege Escalation (v1.8+), Non-root user (v1.23+), Seccomp (v1.19+), Capabilities (v1.22+), Host Probes / Lifecycle Hooks (v1.34+); OS-specific relaxations from v1.25 | pod-security-standards.md |
| Baseline allowed capabilities | 13: AUDIT_WRITE, CHOWN, DAC_OVERRIDE, FOWNER, FSETID, KILL, MKNOD, NET_BIND_SERVICE, SETFCAP, SETGID, SETPCAP, SETUID, SYS_CHROOT | pod-security-standards.md, Baseline "Capabilities" |
| Restricted capabilities | Must drop ALL; may add back only NET_BIND_SERVICE | pod-security-standards.md, Restricted "Capabilities (v1.22+)" |
| Restricted volume types | 8: configMap, csi, downwardAPI, emptyDir, ephemeral, persistentVolumeClaim, projected, secret | pod-security-standards.md, Restricted "Volume Types" |
| Baseline safe sysctls | 10 names: kernel.shm_rmid_forced and 9 net.ipv4.* entries (some "since Kubernetes 1.27/1.29") | pod-security-standards.md, Baseline "Sysctls" |
| Host ports (Baseline) | Allowed values: undefined, a known list, or 0 | pod-security-standards.md |
| runAsUser (Restricted) | Must not be 0; any non-zero value or undefined | pod-security-standards.md |
| seccomp in the kernel | Since Linux 2.6.12 | security checklist, "Enabling Seccomp" |
| RuntimeDefault as default seccomp | Can be enabled for all workloads "Since Kubernetes 1.27" (kubelet `seccompDefault`); otherwise the default is Unconfined | security checklist; tutorials/security/seccomp.md |
| aesgcm key rotation | "Must be rotated every 200,000 writes" | encrypt-data.md providers table |
| Encryption key lengths | aescbc and aesgcm 16, 24 or 32-byte; secretbox 32-byte; kms 32-bytes | encrypt-data.md providers table |
| KMS versions (V) | kms v1 "deprecated since Kubernetes v1.28"; kms v2 "Available as stable from Kubernetes v1.29" | encrypt-data.md |
| Encrypting custom resources | Since v1.26 | securing-a-cluster.md; encrypt-data.md |
| Wildcard encryption config | `*.*` wildcards require Kubernetes 1.27 or later | encrypt-data.md example comment |
| ValidatingAdmissionPolicy (V) | Stable since v1.30 | validating-admission-policy.md feature-state |
| Admission plugins on by default (V) | 20 in the current docs: CertificateApproval, CertificateSigning, CertificateSubjectRestriction, DefaultIngressClass, DefaultStorageClass, DefaultTolerationSeconds, LimitRanger, MutatingAdmissionPolicy, MutatingAdmissionWebhook, NamespaceLifecycle, PersistentVolumeClaimResize, PodSecurity, Priority, ResourceQuota, RuntimeClass, ServiceAccount, StorageObjectInUseProtection, TaintNodesByCondition, ValidatingAdmissionPolicy, ValidatingAdmissionWebhook | admission-controllers.md "Which plugins are enabled by default?" |
| Audit stages and levels | 4 stages; 4 levels | audit.md |
| Static token file | CSV with at least 3 columns: token, user name, user uid (then optional groups) | authentication.md "#static-token-file" |
| JWT authenticators | "the maximum number of allowed authenticators is 64" (extra) | authentication.md configuration file example comment |
| Fulcio certificates | Valid for 10 minutes | sig: certificate_authority/overview.md |
| Vulnerability reports | Acknowledged "within 3 working days"; disclosure "on the order of 7 days" for a straightforward mitigation | reference/issues-security/security.md |
| Konnectivity | Beta since v1.18 (feature-state) | control-plane-node-communication.md |
| CVE feed | Beta since v1.27 | official-cve-feed.md |
| Verify signed artefacts page | Beta since v1.26 | verify-signed-artifacts.md |
| RuntimeClass | Stable since v1.20 | runtime-class.md |
| SLSA Build levels | L0 to L3 (4 levels) | slsa: build-track-basics.md table |
| NSA/CISA guidance versions | 1.0 August 2021 (released "August 3rd, 2021"), 1.1 March 2022, 1.2 August 2022 | S17 |
| NIST SP 800-190 | September 2017, 63 pages | S14 title page ("63 pages (September 2017)") |
| Whitepaper v2 | May 2022 (PDF published 17 May 2022) | S9 header |
| Kubernetes current release (V) | 1.37.0, released 2026-08-26 | https://kubernetes.io/releases/ |
| Kernel modules to block (example) | dccp, sctp | securing-a-cluster.md |

---

## 6. Visuals

**Figures in the sources that are content:**

| # | Figure | File URL | Licence | What a card would ask |
|---|---|---|---|---|
| V1 | "The 4C's of Cloud Native Security": nested boxes Cloud/Co-Lo/Corporate Datacenter → Cluster → Container → Code | https://kubernetes.io/images/docs/4c.png (repo `static/images/docs/4c.png`, still on `main`; saved `img/4c.png`) | B · CC BY 4.0, credit "Kubernetes documentation, Overview of Cloud Native Security (v1.28)" | Occlusion: name the hidden layer; which layer is outermost or innermost |
| V2 | API request handling: authentication (1), authorization (2), admission control (3), then object store (4) | https://kubernetes.io/images/docs/admin/access-control-overview.svg (saved `img/access-control-overview.svg`) | B · CC BY 4.0 (Controlling Access to the Kubernetes API) | Order of stages; where a 401 or 403 arises. KCNA's media folder has `api-request-stages.png`; check whether it is this figure before adding a copy. |
| V3 | Admission control phases: mutating webhooks, then ValidatingAdmissionPolicies, then validating webhooks | https://kubernetes.io/docs/reference/access-authn-authz/admission-control-phases.svg | B · CC BY 4.0 | Which runs first; where a policy rejection happens |
| V4 | Whitepaper Figure 1: cloud native layers. Lifecycle (Develop, Distribute, Deploy), Runtime (Access, Storage, Compute), Environment, Foundational | https://github.com/cncf/tag-security/blob/main/community/resources/security-whitepaper/v2/cnswp-images/cnswp-v2-figure1.png (saved `img/cnswp-v2-figure1.png`) | B · CC BY 4.0 | Name the hidden phase; the three runtime areas |
| V5 | Whitepaper Figures 2 to 5: the security structural model per phase (develop, distribute, deploy, runtime) | …/cnswp-images/cnswp-v2-security-structural-model-{develop,distribute,deploy,runtime}.png | B · CC BY 4.0 | Which controls belong to which phase (not opened; check legibility at phone width) |
| V6 | Kubernetes architecture and trust boundaries: data flows 1 to 16, red dashed trust boundaries, green machine segregation | https://github.com/cncf/financial-user-group/blob/main/projects/k8s-threat-model/AttackTrees/images/trustboundaries.png (saved `img/trustboundaries.png`) | B · Apache 2.0 (keep the licence notice) | Competency 4.1: which components sit inside one trust boundary; which data flow crosses from kubelet to API server |
| V7 | Attack-tree fragments: compromised container, DoS left and right branches, persistence (two), malicious code (three) | …/AttackTrees/images/*.png | B · Apache 2.0 | Scenario → next attacker step or mitigation (not opened; check legibility) |
| V8 | NIST SP 800-190 Figure 2 "Virtual Machine and Container Deployments"; Figure 3 "Container Technology Architecture Tiers, Components, and Lifecycle Phases" | S14 PDF pp. 5 and 8 (extract with `pdfimages`) | B · US Government work | VM vs container isolation; the five components (developer systems, testing and accreditation, registries, orchestrators, hosts) |
| V9 | SLSA supply chain threats diagram (threats A to I across source, build, distribution) | https://github.com/slsa-framework/slsa/blob/main/spec/images/supply-chain-threats.svg | B? · Community Specification License 1.0 (treat as C until confirmed; §2 S24) | Which stage a given attack hits |
| V10 | MITRE ATT&CK Containers matrix | https://attack.mitre.org/matrices/enterprise/containers/ | MITRE ATT&CK licence with notice (S26) | Tactic order. Prefer our own drawing (below). |

**Diagrams we can draw from sourced facts** (credit "Drawn for this deck from
<page>", licence "B · CC BY-SA 4.0"):
1. The 4C's as concentric layers (S8).
2. The lifecycle loop Develop → Distribute → Deploy → Runtime, with the Runtime
   areas (S7 cloud-native-security; S9).
3. The request pipeline:
   - TLS → authentication (401) → authorization (403) → mutating admission →
     validating admission → validation → etcd;
   - reads skip admission.
   Sources: controlling-access; admission-controllers.
4. PSS as nested sets: Restricted ⊂ Baseline ⊂ Privileged (cumulative policies),
   with each control placed in its tier.
5. Envelope encryption: object → DEK (AES-GCM) → DEK encrypted by the KEK in the
   KMS; ciphertext and encrypted DEK stored in etcd (encrypt-data "#kms-key-storage").
6. The provider list as an ordered stack: the first provider encrypts; the others
   are tried on read (encrypt-data).
7. NetworkPolicy default deny, then allow rules; both egress and ingress must allow
   (network-policies).
8. Cluster port map: control plane (6443, 2379-2380, 10250, 10259, 10257) and worker
   node (10250, 10256, 30000-32767) (ports-and-protocols).
9. Trust zones and their connections, drawn as a table-turned-diagram (S13).
10. Sigstore keyless flow: cosign signs → Fulcio issues a 10-minute certificate from
    the OIDC identity → Rekor records the entry (S23; treat the wording as C).
11. SLSA Build levels ladder: L0 to L3 with each level's focus (S24; wording as C).
12. Audit levels ladder: None → Metadata → Request → RequestResponse (audit.md).
13. Control-plane-to-node paths: API server → kubelet (unverified by default) and
    API server proxy (plain HTTP); Konnectivity replaces SSH tunnels.

---

## 7. Confusions and traps

1. **The 4C's are on the exam but gone from the current docs.** The 4C's page
   ("Overview of Cloud Native Security") exists up to the `release-1.28` docs branch.
   It is 404 from `release-1.29` on. It was replaced by "Cloud Native Security and
   Kubernetes" (lifecycle phases). The KCNA deck has a fact card calling the 4C's
   "older material". For KCSA, the 4C's **must** be taught (competency 1.1), citing
   S8 with `ValidAsOf` and a note that the current docs use lifecycle phases. The
   image `4c.png` is still on `main`.
2. **The curriculum README conflicts with the PDF.** `kcsa/README.md`, added
   2025-11-28 in "Add Recognition of the exam authors (#97)", lists six *different*
   domains:
   - Cloud Native Fundamentals 16%;
   - Kubernetes Security Fundamentals 20%;
   - Container Security Fundamentals 20%;
   - Secure Software Supply Chain 16%;
   - Monitoring, Logging and Runtime Security 12%;
   - General Security Knowledge 16%.

   The PDF, the LF page (modified 2026-07-28) and the CNCF page all show the 14/22/22/16/16/10
   outline. No LF announcement of a change was found. **Use the PDF.** Recheck before
   release in case the README signals an upcoming revision (§10).
3. **Old weights.** The archived PDF gives Compliance and Security Frameworks 16%,
   so its weights total 106%. Third-party study material may still quote it.
4. **Authorization appears only on the LF page.** The PDF lists seven competencies
   under Kubernetes Security Fundamentals; the LF page lists eight.
5. **PodSecurityPolicy is gone.** It was deprecated in v1.21 and removed in v1.25.
   Pod Security Admission (or third-party admission) replaces it. Old guides still
   teach PSP.
6. **PSS vs PSA vs security context.**
   - PSS is the policy definition.
   - PSA is the built-in enforcer, set with namespace labels.
   - The security context is the Pod's and container's own settings.

   The PSS FAQ separates "security profile" (control plane enforcement) from
   "security context" (runtime parameters).
7. **Enforce mode vs workload objects.** Enforce applies to Pods, not to
   Deployments or other workload objects; warn and audit apply to both. A
   Deployment with a violating template is accepted, and its Pods are then rejected.
8. **base64 is not encryption.** And the default encryption "provider" is
   `identity`, which does not encrypt.
9. **get, list and watch all reveal Secrets.** `list` on Secrets reveals their
   contents. Creating a Pod that mounts a Secret also reveals it.
10. **`get` on nodes/proxy is not read-only.** It allows running commands in
    containers over WebSocket and bypasses audit and admission.
11. **RBAC has no deny rules.** With `--authorization-mode=AlwaysAllow,RBAC` the
    API server behaves as AlwaysAllow. Authorizers stop at the first allow or deny;
    if every authorizer has no opinion, the request is denied.
12. **system:masters vs cluster-admin.**
    - system:masters is a group that bypasses RBAC and webhook authorizers, and
      removing bindings cannot revoke it.
    - cluster-admin is a ClusterRole, bound by default to the system:masters group.
13. **Admission never sees reads.** get, list and watch bypass admission control,
    so a webhook cannot block `kubectl get secrets`. KCNA already has this card.
14. **Kubelet defaults are permissive:**
    - anonymous auth is on and authorization is AlwaysAllow;
    - the API server doesn't verify the kubelet's serving certificate unless
      `--kubelet-certificate-authority` is set;
    - API server → node/pod/service proxy connections are plain HTTP.
15. **Anonymous access vs anonymous user.**
    - An invalid bearer token gets 401.
    - No token at all gets `system:anonymous` / `system:unauthenticated`, which is
      "enabled by default if an authorization mode other than `AlwaysAllow` is used".
16. **Client certificates can't be revoked individually.** Group membership (O
    fields) is fixed for the certificate's life. KCNA taught only "certificate".
17. **etcd TLS is not etcd authorization.** Any certificate from a CA that etcd
    trusts gets full read/write access, including health-check certificates. Use an
    etcd-only CA.
18. **NetworkPolicy limits:**
    - it does nothing without a supporting CNI plugin;
    - it has no deny rules, no TLS and no logging;
    - a pod cannot block traffic to itself or from its own node;
    - a default-deny egress policy also blocks DNS.
19. **Namespaces are a weak boundary.** Anyone who can create Pods in a namespace can
    use every ServiceAccount, Secret and ConfigMap in it.
20. **Sandboxed runtime vs Pod Security Standards.** No PSS profile covers sandboxed
    Pods, and "no single recommended profile is recommended for all sandboxed
    workloads".
21. **Privileged overrides everything.**
    - A privileged container runs seccomp `Unconfined`, ignores AppArmor, runs as
      SELinux `unconfined_t` and gets all capabilities.
    - `allowPrivilegeEscalation: false` cannot be combined with privileged or
      CAP_SYS_ADMIN.
    - `allowPrivilegeEscalation` defaults to **true**.
22. **AppArmor vs SELinux.** AppArmor uses profiles and file paths; SELinux uses
    labels and inodes.
23. **Seccomp's default is still Unconfined.** It stays Unconfined unless the
    kubelet's `seccompDefault` is enabled. Baseline forbids an explicit `Unconfined`
    but allows an unset profile; Restricted requires RuntimeDefault or Localhost to be
    set.
24. **Compliance is not security.** The whitepaper says "A compliant system is not
    guaranteed to be secure, nor a secure system is guaranteed to be compliant."
25. **Encryption providers:** aescbc is "Weak" (padding oracle); aesgcm needs
    rotation every 200,000 writes; kms v1 is deprecated; the first provider in the
    list encrypts.
26. **Authentication-mechanism suitability.** For production users: OIDC or other
    external sources. The docs say client certificates, static tokens, bootstrap
    tokens and SA secret tokens are unsuitable for users.
27. **ATT&CK tactic names changed.** The whitepaper (2022) lists "Defense Evasion".
    The live Containers matrix now shows "Stealth" and "Defense Impairment", with no
    "Defense Evasion" column. Treat tactic names as volatile.
28. **Two OWASP Kubernetes Top Ten editions** (2022 and 2025) are live, with
    different orders. Don't card rank numbers (extra, tier C).
29. **Two threat-actor vocabularies:**
    - the whitepaper's malicious insider, uninformed insider and malicious outsider;
    - the 2019 threat model's Malicious Internal User, Internal Attacker, External
      Attacker, Administrator, Developer and End User.

    Card each with its source.
30. **"Master" terminology** in the 2019 threat model (Master Components, Master
    Data) is legacy; KCNA teaches "control plane". Say so on the card.
31. **The kube-scheduler and kube-controller-manager ports** differ from those in
    the NSA/CISA guide. S17: "kube-scheduler and kube-controller-manager uses
    different ports than the ones mentioned in the guidance". Use the ports page.
32. **Audit logging.** No `--audit-policy-file` means no audit events at all. A policy
    with 0 rules is illegal. ResponseStarted fires only for long-running requests
    such as watch.

---

## 8. Naming

**Owner marks** (https://www.linuxfoundation.org/legal/trademarks, "Last updated:
November 19, 2024") [`lf-tmlist.txt`]:
- "Kubernetes®" and "Certified Kubernetes Security Specialist®" are registered word
  marks; the list also has "Certified Kubernetes Security Specialist and Design
  (color)".
- **"Kubernetes and Cloud Native Security Associate" and "KCSA" do not appear in the
  list at all** (0 matches), neither as a word mark nor as a design mark. (By
  contrast, the KCNA design mark is listed.)

**LF Trademark Usage** (https://www.linuxfoundation.org/legal/trademark-usage, itself
CC BY 4.0), quoted:
- "You may make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces, endorses,
  or supports your company, products, or services."
- "A trademark notice should be used on the most prominent and/or first appearance of
  each mark of The Linux Foundation".
- "A trademark should not be used as your domain name or as part of your domain name."
- "A mark should not be combined with any other mark, hyphenated, abbreviated or
  displayed in parts."

**How CONTENT-POLICY.md §4 applies:**
- The Linux Foundation is not among the §5 bodies we don't name. The exam may be named
  to state a true fact, in plain text, with our brand leading.
- Title pattern: "[Site name] deck for the Kubernetes and Cloud Native Security
  Associate (KCSA) exam". Path `/decks/kubernetes/kcsa/` is fine; never a domain.
- Footer notice (the "Everyone else" row), suggested: "Kubernetes® is a registered
  trademark of The Linux Foundation. Kubernetes and Cloud Native Security Associate
  (KCSA) is an exam of the Linux Foundation and CNCF. This deck is independent and is
  not affiliated with, sponsored, endorsed or approved by The Linux Foundation or
  CNCF."
  - Because "KCSA" is not a listed mark, do not attach ™ or ® to it.
  - Put ® on the first use of "Kubernetes".
- No logos, including the CKS design mark and the Kubernetes logo.
- `ExamRefs` are permitted (the outline is CC BY 4.0), with the attribution "KCSA
  Exam Curriculum, CNCF, CC BY 4.0".
- Tool names (Falco, OPA, Kyverno, Sigstore, SLSA, MITRE ATT&CK®, CIS Benchmarks®) are
  used only to state facts about them. ATT&CK is a registered MITRE mark ("MITRE
  ATT&CK and ATT&CK are registered trademarks of The MITRE Corporation", S26 page
  footer). "CIS Benchmarks®" carries the ® on the CIS page.

---

## 8b. Term registry

`research/deck-briefs/kcsa-terms.json`: **625 entries**.
- **304 at topic 0**: every KCNA primer term, copied from
  `decks/kcna/notes/*.json` `introduces`, with the KCNA concept ID and the KCNA card's
  source URL.
- **321 new**, topics 1 to 18, in teaching order, with the concept IDs from §4.
  - No new concept ID clashes with `concepts/k8s.json`.
  - No new term duplicates a KCNA term (checked case-insensitively).
  - `source` is the first (defining) URL of each row. Where a row cites two sources,
    §4 has both.

Writers should add the new IDs to `concepts/k8s.json` (the family registry) when the
deck is built.

The primary sources that define basic terms are saved in the scratch folder, so
writers need no Wikipedia:
- the lexicon (`tag-security/community/resources/security-lexicon/`);
- the NIST glossary entries (`nistgloss/*.txt`);
- the Cloud Native Glossary (`cncf-glossary/content/en/`);
- the whitepaper (`tag-security/.../v2/cloud-native-security-whitepaper.md`);
- the supply chain paper (`.../supply-chain-security-paper-v2/SSCBPv2.md`);
- NIST SP 800-190 (`nist190.txt`);
- the attack trees (`fug/projects/k8s-threat-model/`);
- the 2019 threat model (`tm2019.txt`);
- the tool docs (`tools/*`);
- the Kubernetes docs (`k8s-website/content/en/docs/`, sparse).

Several kubernetes.io pages link Wikipedia for "defense in depth", "principle of
least privilege", "trusted computing base" and "STRIDE". Use the NIST glossary (S15)
and whitepaper (S9) definitions instead.

---

## 8c. Card budget

The method:
- one primer per new term;
- the fact cards each concept row needs for its rules and numbers (the `f` count in
  the generator);
- one application or classification card per core concept, three per core
  threat-model concept, plus 20 cross-topic threat → mitigation scenarios in T16;
- 1 to 4 contrast cards per topic for the confusions in §7;
- the extra cards on KCNA terms that the topic deepens.

The generator is `scratchpad/kcsa_gen.py`.

| Topic | Domain(s) | New terms (primers) | Fact cards | Application / classification | Contrast | Target |
|---|---|---|---|---|---|---|
| T1 Security principles and vocabulary | D1/D6 | 38 | 33 | 31 | 4 | **106** |
| T2 The cloud native security model | D1 | 18 | 23 | 14 | 2 | **57** |
| T3 Container and workload isolation | D1/D2 | 25 | 37 | 19 | 4 | **85** |
| T4 Images, registries and the software supply chain | D1/D5/D6 | 29 | 40 | 25 | 3 | **97** |
| T5 Application code security | D1 | 13 | 12 | 7 | 2 | **34** |
| T6 Authentication | D3 | 22 | 44 | 23 | 3 | **92** |
| T7 Authorization and RBAC | D3 | 21 | 43 | 21 | 3 | **88** |
| T8 Pod Security Standards and Pod Security Admission | D3 | 9 | 25 | 13 | 2 | **49** |
| T9 Admission control and policy engines | D5 | 18 | 24 | 16 | 3 | **61** |
| T10 Secrets and encryption at rest | D3/D2 | 15 | 27 | 16 | 2 | **60** |
| T11 PKI and certificates | D5 | 11 | 17 | 10 | 1 | **39** |
| T12 Cluster component security | D2 | 23 | 41 | 20 | 2 | **86** |
| T13 Network security and service mesh | D3/D2/D5 | 14 | 24 | 16 | 2 | **56** |
| T14 Isolation, segmentation and multi-tenancy | D3 | 10 | 15 | 10 | 2 | **37** |
| T15 Audit logging, observability and runtime detection | D3/D5 | 14 | 24 | 10 | 2 | **50** |
| T16 The Kubernetes threat model | D4 | 17 | 37 | 65 | 3 | **122** |
| T17 Compliance and security frameworks | D6 | 16 | 19 | 9 | 2 | **46** |
| T18 Vulnerability management and security updates | D6 | 8 | 12 | 8 | 1 | **29** |
| **Total** | | **321** | **497** | **333** | **43** | **1194** |

**Deck total: 1,194 cards.** That is 321 primers, 497 fact cards, 333 application
or classification cards and 43 contrast cards: 28% application, against the
CARD-STANDARD target of about a third. Optional extra: 8 volatile exam-fact cards
(§1), not included in the total.

**Domain check.** Topics were apportioned to domains by our own fractions (the
generator's `SH` table):

| Domain | Weight | Cards (approx.) | Share |
|---|---|---|---|
| D1 Overview of Cloud Native Security | 14% | 207 | 17% |
| D2 Cluster Component Security | 22% | 191 | 16% |
| D3 Kubernetes Security Fundamentals | 22% | 342 | 29% |
| D4 Kubernetes Threat Model | 16% | 122 | 10% |
| D5 Platform Security | 16% | 185 | 16% |
| D6 Compliance and Security Frameworks | 10% | 147 | 12% |

D3 runs above its weight because authentication, authorization and Secrets carry the
most distinct rules, and D2, D4 and D5 questions depend on them. D4 runs below it
because its concepts are few: the attack trees reuse controls taught elsewhere. D4
therefore gets three application cards per core concept, plus 20 cross-topic
scenario cards. If the owner wants the shares closer to the weights, move T6/T7
extra-term facts into T16 scenarios.

---

## 9. Languages

- **The exam is English only.** The LF language table
  (https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language) has a
  single ✔ (English) for "Kubernetes and Cloud Native Security Associate (KCSA)".
  KCNA, by contrast, has "✔**" Japanese and "✔*" Simplified Chinese. The LF
  Japanese-language product page
  (https://training.linuxfoundation.org/ja/certification/kubernetes-and-cloud-native-security-associate-kcsa/)
  exists (price "$250", "試験時間90分") but names no Japanese exam version.
  [`lf-language.txt`, `lf-kcsa-ja.txt`]
- **Openly licensed translations of the main sources:**
  - Whitepaper v2 (S9, CC BY 4.0, same repo): Simplified Chinese
    (`cloud-native-security-whitepaper-simplified-chinese.md`, PDF
    `…-cn-Sept2023-v2.pdf`), Japanese (`…-ja.md`, PDF `…-jp-July2023-v2.pdf`) and
    Italian (`…-it.md`, PDF `…-it-May2023-v2.pdf`). v1 also exists in Brazilian
    Portuguese, Simplified Chinese and Spanish.
  - Kubernetes docs (S7, CC BY 4.0; localised pages carry the same footer, as the
    KCNA brief found): `pod-security-standards` exists in ja, zh-cn and ko;
    `security-checklist` in ja, zh-cn and id. It is absent in es, fr, de, pt-br and
    hi (raw-file checks on `main`).

---

## 10. Not verified

1. **Question count for KCSA specifically.** Only the generic LF multiple-choice page
   (60, except CNPA) states it. Neither the KCSA product page nor the CNCF page gives
   a count.
2. **Whether the outline is about to change.** `kcsa/README.md` (2025-11-28) lists a
   different six-domain outline (§7 trap 2). I found:
   - no LF announcement (`/kcsa-program-changes/` redirects to the LF home page);
   - no newer PDF in the repo;
   - a live LF page that still shows the PDF outline.

   Recheck S1, S2 and S4 before release.
3. **Effective date of the current (June 2024) weights.** The LF site has no dated
   notice; only the git commit date (2024-06-24) is known.
4. **The NSA/CISA Kubernetes Hardening Guidance PDF itself.**
   `media.defense.gov` returned "403 Access Denied" to curl, with both a generic and
   a browser User-Agent. Facts about it come only from S17 (the Kubernetes blog, CC
   BY 4.0).
5. **Sigstore documentation licence** (S23): the MIT LICENSE names the theme's
   authors. Unresolved; treat as tier C.
6. **SLSA (Community Specification License 1.0), SPIFFE (BSD-style) and MITRE ATT&CK
   (custom licence)** as tier B: they permit reuse, but CONTENT-POLICY does not list
   them. Policy owner to decide.
7. **The whitepaper phase figures (V5) and the attack-tree fragment images (V7).**
   Listed from the repo, not opened. Their legibility at phone width is unchecked.
8. **Default authorization and anonymous-auth behaviour in managed services.** The
   docs say only that "Most Kubernetes providers change the default" (kubelet) and
   that "many managed Kubernetes distributions are publicly exposing the API server
   by default". No provider-specific facts were checked, and none should be carded.
9. **in-toto's own definition.** The in-toto docs README defines nothing; the
   definition used comes from S11 ("a popular specification for software supply
   chain attestations", "an incubating project of the CNCF"). I did not check the
   current CNCF maturity level of in-toto, Falco (its docs say "graduate"), OPA
   (its docs say "graduated") or Kyverno. Maturity levels are volatile, so card
   them only with a date.
10. **CIS Kubernetes Benchmark version numbers.** The CIS page lists managed-service
    benchmarks (e.g. "Google Kubernetes Engine (GKE)  (2.0.0)"), but the plain
    Kubernetes benchmark version was not isolated. Don't card benchmark versions.
11. **MITRE ATT&CK technique lists** beyond tactic names (the matrix renders
    dynamically; only the tactic headers and some technique names were read).
12. **cert-manager's and kube-bench's CNCF or project status.** Not read, so not
    stated.
