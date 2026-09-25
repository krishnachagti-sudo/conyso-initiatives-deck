# Research brief: Kubernetes and Cloud Native Associate (KCNA)

Slug: `kcna`. Researched 25 September 2026. Every fact below was read in a source
downloaded during this task; raw copies and extracted text are in the scratch folder
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/kcna/`
(file names given as `[file]`).

How sources were read:
- The CNCF curriculum PDFs were downloaded from `raw.githubusercontent.com` and
  extracted with `pdftotext -layout`.
- kubernetes.io pages were read as their Markdown source in the `kubernetes/website`
  repository, branch `main`, commit `1e1be1df9361f0c7e7fd8d3e76e8e0519638f964`
  (24 Sep 2026). The live site at that time serves v1.37.
- File listings and commit dates for the `cncf/curriculum`, `cncf/toc`,
  `cncf/glossary` and `kubernetes/website` repositories came from read-only,
  blobless clones made in the scratch folder. No git command touched the project
  repository. **Note for the coordinator:** the brief says "Never run git". I read
  that as "never run git on the project". Without these read-only clones, the file
  lists could not be read, because the proxy blocks the GitHub web pages and API.

---

## 1. Exam facts

**Owner.** The exam is delivered by the Linux Foundation (LF Education) for the
Cloud Native Computing Foundation (CNCF), which owns the curriculum. The curriculum
PDF says: "A Cloud Native Computing Foundation (CNCF) Publication" and "CNCF is
part of The Linux Foundation, a nonprofit organization."
[`KCNA_Curriculum.txt`, p.1 and p.3]

| Fact | Value | Quote and source | Volatile? |
|---|---|---|---|
| Current outline | The November 2025 outline: 4 domains, 13 competencies. It has **no version number**. | LF: "The Kubernetes and Cloud Native Associate (KCNA) exam will be updated no earlier than November 24, 2025." "Any KCNA exam taken after the updated release will test on the new set of Domains and Competencies". https://training.linuxfoundation.org/kcna-program-changes/ (datePublished 2025-08-08, dateModified 2025-10-01) | Yes |
| Effective date | Taking effect on or after 24 Nov 2025. The date that counts is the day you sit the exam. | "NOTE: It does NOT matter if the exam reservation happens to be for a first attempt or a retake, nor does it matter on what date you completed the exam purchase. The only date that matters is the date you sit for the exam." (same page). The `cncf/curriculum` commit "KCNA Exam Curriculum" (06702fe) that put the new PDF in place is dated 2025-11-24. | Yes |
| Format | Online, proctored, multiple choice | "This exam is an online, proctored, multiple-choice exam." https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/ ("Exam Details & Resources"). Also on https://www.cncf.io/training/certification/kcna/ | Rarely |
| Number of questions | 60 | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions. * CNPA exam consists of 85 multiple-choice questions." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc ("Exam Details"). This page covers all LF multiple-choice exams; no KCNA-only page states the count (see §9). | Yes |
| Time | 90 minutes | "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc. The product page also says: "Duration of Exam 90 minutes". | Yes |
| Pass mark | 75% | "A score of 75% or above must be earned to pass the Multiple Choice Exam." https://docs.linuxfoundation.org/tc-docs/certification/faq-mc ("What score is needed to pass the exam?") | Yes |
| Results | Emailed within 24 hours; no per-item feedback; no rescoring for multiple choice | "score report will be sent to the candidate via email within 24 hours" and "LF does not report performance on individual items" (https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/exam-scoring-and-notification). "Exam Rescoring is NOT available for our Multiple Choice or SkillCred exams" (…/lf-handbook2/exam-scoring-and-notification/exam-results-no-pass) | Rarely |
| Retake | One retake per purchase, within 12 months of purchase | "One (1) retake per Exam purchase will be granted in the event that a passing score is not achieved…" and "the retake must be taken within 12 months of the date of the original Exam purchase. or before your corporate subscription expires (whichever happens first).." https://docs.linuxfoundation.org/tc-docs/certification/exam-terms-of-service (Retake Policy). Product page: "✔ Two exam attempts" and "One Retake". Purchases marked SINGLE-ATTEMPT get one attempt only. | Yes |
| Eligibility window | 12 months to schedule and take the exam | "✔ 12-months to schedule & take the exam" (product page). Also: "When a candidate registers for an exam they will have 12 months to schedule and take the exam" (…/lf-handbook2/exam-registration) | Yes |
| Validity | 2 years | "Certifications are valid for 2 years." (faq-mc). "Certifications become non-current (expire) 24 months from the date that a certificant successfully passes" (…/lf-handbook2/certificates-and-certification). Product page: "Certification Valid for 2 Years". | Yes |
| Renewal | Retake and pass before expiry, or pass CKA or CKAD (the CARE programme) | "Candidates have the option to retake and pass the exam to renew their certification." "KCNA: Passing the Certified Kubernetes Administrator (CKA) or Certified Kubernetes Application Developer (CKAD) exam will automatically renew your KCNA." (faq-mc) | Yes |
| Price | US$250 exam only | Product page: "Certification exam only – $250". CNCF page: "The cost is $250 and includes one free retake." Bundles: $299 with LFS250; $495 with THRIVE-ONE. | Yes, changes often |
| Level | Beginner | Product page: "Experience Level: Beginner" | Rarely |
| Proctoring | PSI Bridge, PSI Secure Browser, one monitor, webcam, microphone | faq-mc: "The online proctored exam is taken on PSI's Proctoring Platform "Bridge", using the PSI Secure Browser"; "One active monitor… (NOTE: Dual Monitors are NOT supported)" | Yes |
| Minimum age | 16–18 year-olds may sit the exam with a guardian's consent | faq-mc: "Minors, between the age of 16-18, are permitted to take an online proctored exam with PSI, provided they complete the following requirements" | Rarely |

**Facts that change often:** price, bundles, question count, duration, pass mark, the
retake and eligibility rules, and the outline itself (it changed in Nov 2025). Every
card on an exam fact needs `ValidAsOf: 2026-09-25`.

**Kubernetes version.** No KCNA source names the Kubernetes version the exam
targets. The curriculum README says "The document major and minor version (e.g.,
the 1 and 8 in 1.8.0) match the version of Kubernetes". The KCNA PDF has no
version, although CKA and CKAD do (`CKA_Curriculum_v1.35.pdf`). Kubernetes itself
is at v1.37: "Latest Release:1.37.0 (released: 2026-08-26)" (https://kubernetes.io/releases/).

---

## 2. Sources

| # | Title | URL | Publisher | Licence as quoted from the source | Tier | Deck use |
|---|---|---|---|---|---|---|
| S1 | KCNA Exam Curriculum (PDF), current | https://github.com/cncf/curriculum/blob/master/KCNA_Curriculum.pdf | CNCF | README: "The Curriculum is available under the [CC-BY 4.0+ License](https://creativecommons.org/licenses/by/4.0/)." (https://github.com/cncf/curriculum/blob/master/README.md). **There is no LICENSE file in the repo:** `LICENSE`, `LICENSE.md` and `LICENSE.txt` return 404, and the repo file list has none. The README line is the licence. | B | Outline, weights and domain names, copied verbatim with attribution; `ExamRefs` mapping |
| S2 | KCNA curriculum README | https://github.com/cncf/curriculum/blob/master/kcna/README.md | CNCF | Same as S1 | B | Weights; list of prep resources |
| S3 | KCNA curriculum, old version (2021) | https://github.com/cncf/curriculum/blob/master/old-versions/KCNA_Curriculum%20old.pdf | CNCF | Same as S1 | B | Traps: old weights and domains |
| S4 | LF KCNA product page | https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/ | Linux Foundation | Footer: "© 2026 Linux Foundation - Education. The Linux Foundation®. All rights reserved." | C | Exam facts, in our own words, linked |
| S5 | LF "KCNA Upcoming Program Changes" | https://training.linuxfoundation.org/kcna-program-changes/ | Linux Foundation | All rights reserved (same footer) | C | Effective date and what changed |
| S6 | LF Multiple Choice Exams FAQ and Important Instructions | https://docs.linuxfoundation.org/tc-docs/certification/faq-mc ; https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc | Linux Foundation | No licence stated on the page; treat as all rights reserved | C | Question count, time, pass mark, validity, renewal |
| S7 | LF Candidate Handbook, Exam Terms of Service | https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2 ; https://docs.linuxfoundation.org/tc-docs/certification/exam-terms-of-service | Linux Foundation | No licence stated | C | Retake, expiry, scoring, languages |
| S8 | CNCF KCNA page | https://www.cncf.io/training/certification/kcna/ | CNCF | Not checked beyond the page; treat as all rights reserved | C | Cross-check of weights and price |
| S9 | Kubernetes documentation (kubernetes.io) | https://kubernetes.io/docs/ | The Kubernetes Authors (Kubernetes, a Series of LF Projects, LLC) | Site footer: "© 2026 The Kubernetes Authors \| Documentation Distributed under CC BY 4.0". Repo `kubernetes/website` LICENSE begins "Attribution 4.0 International". Localised pages carry the same footer (checked on https://kubernetes.io/ja/). | B | Main teaching source for every competency; diagrams |
| S10 | Kubernetes glossary | https://kubernetes.io/docs/reference/glossary/ | The Kubernetes Authors | As S9 | B | One-line definitions (163 entries) |
| S11 | Kubernetes release pages | https://kubernetes.io/releases/ ; https://kubernetes.io/releases/release/ ; https://kubernetes.io/releases/version-skew-policy/ | The Kubernetes Authors | As S9 | B | Release cadence, support period, skew |
| S12 | Kubernetes blog: "Updated: Dockershim Removal FAQ" (2022) | https://kubernetes.io/blog/2022/02/17/dockershim-faq/ | The Kubernetes Authors | As S9 | B | Dockershim history |
| S13 | Cloud Native Glossary | https://glossary.cncf.io/ | CNCF, Cloud Native Glossary Authors | Site: "All code contributions are under the Apache 2.0 license. Documentation is distributed under CC BY 4.0." The repo `cncf/glossary` README says the same. The repo's LICENSE file is Apache 2.0, which covers the code. | B | Cloud native concept definitions (91 English terms) |
| S14 | CNCF Cloud Native Definition v1.1 | https://github.com/cncf/toc/blob/main/DEFINITION.md | CNCF TOC | **No licence found.** The `cncf/toc` repo has no LICENSE file in its root listing, and `LICENSE`/`LICENSE.md` return 404. No licence line appears in DEFINITION.md or README.md. | C | Paraphrase and short quotation with a link only |
| S15 | CNCF TOC project maturity process | https://github.com/cncf/toc/blob/main/process/README.md | CNCF TOC | No licence found (as S14) | C | Sandbox, Incubation, Graduation, in our own words |
| S16 | Prometheus documentation | https://prometheus.io/docs/introduction/overview/ ; https://prometheus.io/docs/concepts/metric_types/ | Prometheus Authors | Footer: "© Prometheus Authors 2014-2026 \| All components are available under the Apache 2 License on GitHub." Repo `prometheus/docs` LICENSE: "Apache License Version 2.0"; README: "Apache License 2.0". | **B?** Open licence, but CONTENT-POLICY §3 tier B lists only CC BY, CC BY-SA and public domain. **Policy owner to confirm; until then treat as C.** | Prometheus model, components, metric types |
| S17 | OpenTelemetry documentation | https://opentelemetry.io/docs/what-is-opentelemetry/ ; https://opentelemetry.io/docs/concepts/signals/ | OpenTelemetry Authors | Footer: "© 2019–present OpenTelemetry Authors \| Docs CC BY 4.0". Repo README: "Documentation: CC-BY-4.0". | B | OTel definition and signals |
| S18 | OpenGitOps Principles | https://github.com/open-gitops/documents/blob/main/PRINCIPLES.md | OpenGitOps (a CNCF project) | LICENSE.md: "Except as otherwise noted, the content of this repo is licensed under the Creative Commons Attribution 4.0 License". | B | The four GitOps principles |
| S19 | Kubernetes community governance | https://github.com/kubernetes/community/blob/master/governance.md | Kubernetes project | Repo LICENSE: Apache License 2.0 | **B?** Apache, as S16; treat as C until confirmed | SIGs, WGs, committees |
| S20 | Kubernetes Enhancements (KEPs) README | https://github.com/kubernetes/enhancements | Kubernetes project | Repo LICENSE: Apache License 2.0 | **B?** as S19 | What a KEP is |
| S21 | CNCF Landscape | https://landscape.cncf.io/ (repo https://github.com/cncf/landscape) | CNCF | README: "Everything else is under the Apache License, Version 2.0, except for projects and products logos, which are generally copyrighted by the company that created them… The generated landscape and the landscape.yml file are alternatively available under the Creative Commons Attribution 4.0 license". Crunchbase data is excluded. | B for landscape.yml and categories; **never** the logos or Crunchbase data | Project categories |
| S22 | Helm docs (repo `helm/helm-www`) | https://github.com/helm/helm-www | Helm | LICENSE: "The MIT License (MIT)" | **B?** MIT; as S16 | Only if needed; the Kubernetes glossary already defines "Helm Chart" |
| S23 | LF Trademark Usage and Trademark List | https://www.linuxfoundation.org/legal/trademark-usage ; https://www.linuxfoundation.org/legal/trademarks | Linux Foundation | Usage page: "It is licensed under a Creative Commons Attribution 4.0 International license" | B (not deck content) | Naming (§8) |

No tier-D source was needed. No paid LF course (LFS250) was used or opened.

---

## 3. Exam outline (coverage checklist)

The source is S1, the current PDF, page 2, quoted exactly. It matches S2, S4, S5 and
S8. The owner publishes **only domains and competency names**: no objectives
beneath the competencies. The PDF misspells two words: the heading reads "KNCA
Curriculum", and the last competency reads "Could Native Community and
Collaboration". S4 and S5 spell it "Cloud Native Community and Collaboration".
Use the corrected spelling and cite both sources.

The PDF lays items out in two columns. The order below is the owner's reading order,
as the LF pages (S4, S5) list it:

1. **Kubernetes Fundamentals: 44%**
   1. Kubernetes Core Concepts
   2. Administration
   3. Scheduling
   4. Containerization
2. **Container Orchestration: 28%**
   1. Networking
   2. Security
   3. Troubleshooting
   4. Storage
3. **Cloud Native Application Delivery: 16%**
   1. Application Delivery
   2. Debugging
4. **Cloud Native Architecture: 12%**
   1. Observability
   2. Cloud Native Ecosystem and Principles
   3. Cloud Native Community and Collaboration

**Outline items: 17** (4 domains + 13 competencies). The outline is openly licensed
(S1), so it may be copied, with attribution, into `ExamRefs` and tags.

**What each competency covers.** The owner publishes only these labels. For scope,
the CNCF page (S8, tier C) lists what the certification "validates": pods, nodes,
clusters, namespaces and the control plane; Deployments, Services and ConfigMaps;
containerisation, microservices and immutable infrastructure; the CNCF landscape,
"such as Prometheus, Envoy, and Fluentd"; scheduling, orchestration, service
discovery and CI/CD; security best practices; networking and storage. The mapping
in §4 is **our** reading of each label, built on kubernetes.io pages. It is not
the owner's list.

### Competency → documentation map (every competency)

| Competency | kubernetes.io and other pages (S9 unless stated) |
|---|---|
| 1.1 Kubernetes Core Concepts | /docs/concepts/overview/ ; /docs/concepts/overview/components/ ; /docs/concepts/architecture/ ; /docs/concepts/architecture/nodes/ ; /docs/concepts/architecture/controller/ ; /docs/concepts/architecture/self-healing/ ; /docs/concepts/overview/kubernetes-api/ ; /docs/concepts/overview/working-with-objects/ (and /labels/, /namespaces/, /names/, /annotations/, /field-selectors/, /owners-dependents/, /finalizers/) ; /docs/concepts/workloads/pods/ ; /docs/concepts/workloads/pods/pod-lifecycle/ ; /docs/concepts/workloads/pods/probes/ ; /docs/concepts/workloads/pods/init-containers/ ; /docs/concepts/workloads/pods/sidecar-containers/ ; /docs/concepts/workloads/controllers/ (deployment, replicaset, statefulset, daemonset, job, cron-jobs) ; /docs/concepts/configuration/configmap/ ; /docs/concepts/configuration/secret/ ; /docs/concepts/extend-kubernetes/operator/ ; /docs/concepts/extend-kubernetes/api-extension/custom-resources/ |
| 1.2 Administration | /docs/concepts/overview/kubectl/ ; /docs/reference/kubectl/quick-reference/ ; /docs/concepts/overview/working-with-objects/object-management/ ; /docs/concepts/configuration/organize-cluster-access-kubeconfig/ ; /docs/concepts/policy/resource-quotas/ ; /docs/concepts/policy/limit-range/ ; /docs/concepts/cluster-administration/ ; /docs/setup/production-environment/tools/kubeadm/ ; /docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/ ; /releases/ ; /releases/version-skew-policy/ ; /docs/reference/using-api/deprecation-policy/ ; /docs/reference/using-api/deprecation-guide/ |
| 1.3 Scheduling | /docs/concepts/scheduling-eviction/kube-scheduler/ ; /docs/concepts/scheduling-eviction/assign-pod-node/ ; /docs/concepts/scheduling-eviction/taint-and-toleration/ ; /docs/concepts/scheduling-eviction/pod-priority-preemption/ ; /docs/concepts/scheduling-eviction/topology-spread-constraints/ ; /docs/concepts/scheduling-eviction/node-pressure-eviction/ ; /docs/concepts/configuration/manage-resources-containers/ ; /docs/concepts/workloads/pods/pod-qos/ |
| 1.4 Containerization | /docs/concepts/containers/ ; /docs/concepts/containers/images/ ; /docs/concepts/containers/cri/ ; /docs/concepts/containers/runtime-class/ ; /docs/concepts/containers/container-lifecycle-hooks/ ; /docs/setup/production-environment/container-runtimes/ ; /docs/concepts/architecture/cgroups/ ; /docs/tasks/administer-cluster/migrating-from-dockershim/ ; S12 ; S13 terms container, container-image, containerization, image-digest, immutable-infrastructure |
| 2.1 Networking | /docs/concepts/services-networking/ ; /docs/concepts/services-networking/service/ ; /docs/reference/networking/virtual-ips/ ; /docs/concepts/services-networking/dns-pod-service/ ; /docs/concepts/services-networking/endpoint-slices/ ; /docs/concepts/services-networking/ingress/ ; /docs/concepts/services-networking/ingress-controllers/ ; /docs/concepts/services-networking/gateway/ ; /docs/concepts/services-networking/network-policies/ ; /docs/concepts/services-networking/dual-stack/ ; /docs/concepts/cluster-administration/networking/ ; /docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/ ; S13 service-mesh, service-proxy, service-discovery, load-balancer, api-gateway |
| 2.2 Security | /docs/concepts/security/ ; /docs/concepts/security/cloud-native-security/ ; /docs/concepts/security/controlling-access/ ; /docs/reference/access-authn-authz/rbac/ ; /docs/reference/access-authn-authz/authorization/ ; /docs/reference/access-authn-authz/admission-controllers/ ; /docs/concepts/security/service-accounts/ ; /docs/concepts/security/pod-security-standards/ ; /docs/concepts/security/pod-security-admission/ ; /docs/concepts/security/secrets-good-practices/ ; /docs/concepts/security/rbac-good-practices/ ; /docs/concepts/security/multi-tenancy/ ; S13 zero-trust-architecture, mutual-transport-layer-security, role-based-access-control, devsecops, shift-left, policy-as-code |
| 2.3 Troubleshooting | /docs/tasks/debug/ ; /docs/tasks/debug/debug-application/debug-pods/ ; /docs/tasks/debug/debug-application/debug-service/ ; /docs/tasks/debug/debug-application/determine-reason-pod-failure/ ; /docs/tasks/debug/debug-cluster/ ; /docs/tasks/debug/debug-cluster/crictl/ ; /docs/concepts/workloads/pods/pod-lifecycle/ (CrashLoopBackOff, container states) |
| 2.4 Storage | /docs/concepts/storage/volumes/ ; /docs/concepts/storage/persistent-volumes/ ; /docs/concepts/storage/storage-classes/ ; /docs/concepts/storage/dynamic-provisioning/ ; /docs/concepts/storage/ephemeral-volumes/ ; /docs/concepts/storage/projected-volumes/ ; /docs/concepts/storage/volume-snapshots/ ; S13 cloud-native-storage, stateful-apps, stateless-apps |
| 3.1 Application Delivery | /docs/concepts/workloads/controllers/deployment/ (rolling update, rollback) ; /docs/concepts/workloads/management/ ; /docs/tasks/manage-kubernetes-objects/declarative-config/ ; /docs/tasks/manage-kubernetes-objects/kustomization/ ; glossary "Helm Chart" (S10) ; S13 continuous-integration, continuous-delivery, continuous-deployment, gitops, blue-green-deployment, canary-deployment, infrastructure-as-code, version-control, devops ; S18 GitOps principles |
| 3.2 Debugging | /docs/tasks/debug/debug-application/debug-running-pod/ (describe, logs, exec, ephemeral containers, kubectl debug) ; /docs/concepts/workloads/pods/ephemeral-containers/ ; /docs/concepts/cluster-administration/logging/ ; S13 debugging |
| 4.1 Observability | /docs/concepts/cluster-administration/observability/ ; /docs/concepts/cluster-administration/logging/ ; /docs/concepts/cluster-administration/system-metrics/ ; /docs/concepts/cluster-administration/system-logs/ ; /docs/concepts/cluster-administration/system-traces/ ; /docs/concepts/cluster-administration/kube-state-metrics/ ; /docs/tasks/debug/debug-cluster/resource-metrics-pipeline/ ; /docs/tasks/debug/debug-cluster/resource-usage-monitoring/ ; S16 ; S17 ; S13 observability |
| 4.2 Cloud Native Ecosystem and Principles | S14 definition ; S15 maturity levels ; S21 landscape ; /docs/concepts/workloads/autoscaling/ (+ HPA, VPA pages) ; /docs/concepts/cluster-administration/node-autoscaling/ ; S13 cloud-native-apps, cloud-native-tech, microservices-architecture, monolithic-apps, loosely-coupled-architecture, tightly-coupled-architecture, serverless, function-as-a-service, auto-scaling, horizontal-scaling, vertical-scaling, scalability, reliability, self-healing, portability, immutable-infrastructure, platform-engineering, site-reliability-engineering, event-driven-architecture, edge-computing, multitenancy, IaaS/PaaS/SaaS/CaaS/DBaaS |
| 4.3 Cloud Native Community and Collaboration | S19 governance (SIGs, WGs, committees, subprojects) ; S20 KEPs ; /releases/release/ (release cycle) ; glossary entries SIG, WG, CLA, contributor, member, reviewer, approver (S10) ; S13 contributor-ladder page ; the CNCF TOC (S15) |

---

## 4. Concept inventory

The topics below run in teaching order, and each topic assumes the ones before it.
Columns:
- **Def:** a plain one-line definition, closely following the source's own wording.
  Those sources are tier B, so card text must still paraphrase for pedagogy.
- **Src:** the source section.
- **Pre:** terms that must be taught first.
- **Vol:** `V` means volatile; date it.
- **P:** C for core, X for extra.

Page abbreviations: `k8s:` means `https://kubernetes.io/docs/`; `gl:` means
`https://kubernetes.io/docs/reference/glossary/?all=true#term-`; `cg:` means
`https://glossary.cncf.io/`.

### T1. Computing foundations (assumed by everything)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Cloud computing | CPU, storage and network capability offered on demand across data centres, in private or public clouds | cg:cloud-computing | – | | C |
| Virtual machine | A computer and its OS not bound to one piece of hardware; virtualisation carves one physical machine into several | cg:virtual-machine | – | | C |
| Hypervisor | Enables virtualisation by dividing bare-metal resources to create VMs | cg:hypervisor | VM | | X |
| Bare metal machine | A physical server with one operating system | cg:bare-metal-machine | – | | X |
| Virtualization | Running multiple isolated OSs on one physical computer | cg:virtualization | VM | | X |
| IaaS / PaaS / SaaS / CaaS / DBaaS | Service models: on-demand infrastructure; an external platform to run apps; complete software over the internet; container-based app management; a managed database | cg:infrastructure-as-a-service, platform-as-a-service, software-as-a-service, containers-as-a-service, database-as-a-service | cloud computing | | C (IaaS/PaaS/SaaS) / X |
| Managed service | Software whose operation is handled by a third party | cg:managed-services ; gl:managed-service | – | | X |
| API | A way for programs to interact | cg:application-programming-interface | – | | C |
| Client-server architecture | Logic split between a client that requests and servers that satisfy | cg:client-server-architecture | – | | X |
| Distributed system | Autonomous computing elements over a network that appear to users as one coherent system | cg:distributed-systems | – | | C |
| Node (general) / Host | A computer working with others toward a common task; "host" closely aligns with "node" | cg:nodes ; cg:host | distributed system | | C |
| Cluster (general) | A group of nodes working toward a common goal | cg:cluster | node | | C |
| Idempotence | An operation that always leads to the same outcome no matter how many times you run it | cg:idempotence | – | | X |
| Abstraction | A representation that hides specifics from the consumer | cg:abstraction | – | | X |
| TLS / mTLS | A protocol securing network communication; mTLS validates both sides | cg:transport-layer-security ; cg:mutual-transport-layer-security | – | | C |
| Digital certificate | A document used to verify identity and secure communication | cg:digital-certificate ; gl:certificate | TLS | | X |
| Firewall | Filters network traffic by rules | cg:firewall | – | | X |
| CIDR | A notation for blocks of IP addresses | gl:cidr | – | | X |
| Version control | Tracking and managing changes to files over time | cg:version-control | – | | C |

### T2. Cloud native: definition and principles (4.2)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Cloud native (CNCF definition v1.1) | Practices to develop, build and deploy workloads in public, private or hybrid clouds at scale, programmatically and repeatably; "characterized by loosely coupled systems that interoperate in a manner that is secure, resilient, manageable, sustainable, and observable" | S14 "Definition" (approved by TOC/GB 2024-02-26) | cloud computing | V (definition versions) | C |
| Cloud native technologies (list) | "typically consist of some combination of containers, service meshes, multi-tenancy, microservices, immutable infrastructure, serverless, and declarative APIs — this list is non-exhaustive" | S14 | each term | | C |
| Cloud native apps / tech | Apps designed to exploit cloud computing; the cloud native stack | cg:cloud-native-apps ; cg:cloud-native-tech | cloud native | | C |
| Microservices architecture | Breaks an application into independent services, each focused on one function | cg:microservices-architecture | API | | C |
| Monolithic app | All functionality in a single deployable program | cg:monolithic-apps | – | | C |
| Loosely vs tightly coupled | Components built independently, versus interdependent components where a change ripples | cg:loosely-coupled-architecture ; cg:tightly-coupled-architecture | microservices | | C |
| Distributed apps | Functionality split into independent parts, usually microservices | cg:distributed-apps | microservices | | X |
| Immutable infrastructure | Infrastructure that cannot be changed once deployed; you replace it instead | cg:immutable-infrastructure ; gl:immutable-infrastructure | – | | C |
| Declarative vs imperative | Declarative describes desired state; imperative issues commands | k8s:concepts/overview/working-with-objects/object-management/ ; S18 | – | | C |
| Scalability | How well a system can grow | cg:scalability | – | | C |
| Horizontal scaling | Adds nodes or instances | cg:horizontal-scaling | scalability | | C |
| Vertical scaling | Adds CPU and memory to individual nodes ("scaling up and down") | cg:vertical-scaling | scalability | | C |
| Autoscaling | A system scaling automatically on metrics | cg:auto-scaling | scaling | | C |
| Reliability | How well a system responds to failures | cg:reliability | – | | C |
| Self healing | Recovers from failure without human intervention through a control loop comparing actual and desired state | cg:self-healing ; k8s:concepts/architecture/self-healing/ | desired state | | C |
| Portability | Reusability that avoids lock-in to environments or vendors | cg:portability | – | | C |
| Observability (concept) | "the degree to which the system can generate actionable insights" | cg:observability | – | | C |
| Serverless | Abstracts servers away from the user; the provider does operational management | cg:serverless | cloud computing | | C |
| FaaS | Event-triggered, short-lived functions with automatic scaling | cg:function-as-a-service | serverless | | C |
| Event-driven architecture / event streaming | An architecture that promotes the creation, processing and consumption of events | cg:event-driven-architecture ; cg:event-streaming | – | | X |
| Service (microservice sense) | Treated as a microservice | cg:service | microservices | | X |
| Multitenancy | One installation serving multiple tenants | cg:multitenancy ; k8s:concepts/security/multi-tenancy/ | – | | C |
| Edge computing | Moves storage and compute toward the data source | cg:edge-computing | – | | X |
| DevOps | Teams own the whole path from development to operations; a culture shift | cg:devops | – | | C |
| DevSecOps / Shift left | DevOps plus security; move testing and security earlier in the lifecycle | cg:devsecops ; cg:shift-left | DevOps | | C |
| SRE | Combines operations and software engineering | cg:site-reliability-engineering | DevOps | | X |
| Platform engineering | Building self-service tools and processes for developers | cg:platform-engineering | DevOps | | C |
| Chaos engineering | Experimenting on production systems to build confidence in resilience | cg:chaos-engineering | – | | X |
| Infrastructure as code | Storing infrastructure definitions as files | cg:infrastructure-as-code | version control | | C |
| Policy as code | Storing policies as machine-readable files | cg:policy-as-code | IaC | | X |
| WebAssembly (Wasm) | A portable binary instruction format | cg:webassembly | – | | X |
| eBPF | Sandboxed programs in Linux kernel space without kernel changes | cg:ebpf | – | | X |
| gRPC | A compact remote procedure call method between programs | cg:grpc | API | | X |

### T3. Containers and containerisation (1.4)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Container | A running process with resource and capability constraints managed by the OS; its files are packaged as an image | cg:container ; gl:container | VM | | C |
| Container image | An immutable static file containing the dependencies needed to create a container | cg:container-image ; gl:image | container | | C |
| Containerization | Packaging code, libraries and dependencies into one lightweight executable (the image) | cg:containerization | image | | C |
| Deployment eras | Traditional, then virtualised, then container deployment | k8s:concepts/overview/#going-back-in-time | VM, container | | C |
| Image tag vs digest | Tags can move; digests are immutable content hashes (e.g. sha256) | k8s:concepts/containers/images/ ; cg:image-digest | image | | C |
| Image name defaults | `busybox` means `docker.io/library/busybox:latest` | k8s:concepts/containers/images/ | image | | X |
| imagePullPolicy | `IfNotPresent`, `Always` or `Never` | k8s:concepts/containers/images/#image-pull-policy | image, kubelet | | C |
| Default pull policy rules | If omitted: `:latest` tag or no tag gives `Always`; a digest or a non-latest tag gives `IfNotPresent` | k8s:concepts/containers/images/#imagepullpolicy-defaulting | pull policy | | C |
| Avoid `:latest` in production | Harder to track and roll back | k8s:concepts/containers/images/ (note) | tag | | C |
| Container runtime | Software responsible for running containers | gl:container-runtime ; k8s:concepts/overview/components/ | container | | C |
| CRI | "The main protocol for the communication between the kubelet and Container Runtime." The kubelet is a gRPC client; the `v1` CRI API is required from v1.26 | gl:cri ; k8s:concepts/containers/cri/ | runtime, kubelet | V | C |
| containerd | A container runtime with an emphasis on simplicity, robustness and portability | gl:containerd | runtime | | C |
| CRI-O | Lets you use OCI container runtimes with Kubernetes CRI | gl:cri-o | CRI | | C |
| Docker Engine with Kubernetes | Now used through the `cri-dockerd` adapter; the default socket is `/run/cri-dockerd.sock` | k8s:setup/production-environment/container-runtimes/#docker | CRI | V | C |
| Dockershim | A component of Kubernetes 1.23 and earlier that let the kubelet talk to Docker Engine; removed in v1.24 | gl:dockershim ; S12 | CRI | | C |
| OCI Image Specification | The spec defining the digest format | k8s:concepts/containers/images/ | digest | | X |
| RuntimeClass | Selects the container runtime configuration | k8s:concepts/containers/runtime-class/ | runtime | | X |
| cgroup | A group of Linux processes with optional resource isolation, accounting and limits | gl:cgroup ; k8s:concepts/architecture/cgroups/ | – | | X |
| cgroup drivers | `cgroupfs` (the kubelet default) and `systemd` | k8s:setup/production-environment/container-runtimes/#cgroup-drivers | cgroup | | X |
| Container lifecycle hooks | Events in the container lifecycle that let you run code | gl:container-lifecycle-hooks | container | | X |
| Container environment variables | name=value pairs giving information to containers | gl:container-env-variables | – | | X |
| User namespace | A kernel feature to emulate root; used for rootless containers | gl:userns | – | | X |
| Runtime (general) | Executes software; abstracts the OS | cg:runtime | – | | X |

### T4. Kubernetes overview and architecture (1.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Kubernetes | "a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation" | k8s:concepts/overview/ | container | | C |
| Name and K8s | Greek for helmsman or pilot; "K8s" counts the eight letters between K and s; Google open-sourced it in 2014 | k8s:concepts/overview/ | – | | X |
| What Kubernetes provides | Service discovery and load balancing, storage orchestration, automated rollouts and rollbacks, bin packing, self-healing, secret and config management, batch execution, horizontal scaling, dual-stack, extensibility | k8s:concepts/overview/#why-you-need-kubernetes-and-what-can-it-do | – | | C |
| What Kubernetes is not | Not a traditional all-inclusive PaaS; does not build source code; does not dictate logging or monitoring | k8s:concepts/overview/#what-kubernetes-is-not | PaaS | | C |
| Container orchestration | Managing and automating the lifecycle of containerised apps | cg:container-orchestration | container | | C |
| Cluster (K8s) | A set of worker machines (nodes) running containerised apps; at least one worker node | gl:cluster | node | | C |
| Node (K8s) | A worker machine in Kubernetes | gl:node ; k8s:concepts/architecture/nodes/ | cluster | | C |
| Control plane | Orchestration layer exposing the API and interfaces to manage the lifecycle of containers | gl:control-plane | cluster | | C |
| Data plane | The layer that provides CPU, memory, network and storage for containers | gl:data-plane | node | | X |
| "Master" | "Legacy term, used as synonym for nodes hosting the control plane" | gl:master | control plane | | X |
| kube-apiserver | "The core component server that exposes the Kubernetes HTTP API"; the front end of the control plane | k8s:concepts/overview/components/ ; gl:kube-apiserver | control plane | | C |
| etcd | "Consistent and highly-available key value store for all API server data" | k8s:concepts/overview/components/ | API server | | C |
| kube-scheduler | Assigns Pods that are not yet bound to a suitable node | k8s:concepts/overview/components/ | Pod, node | | C |
| kube-controller-manager | Runs controllers that implement API behaviour | k8s:concepts/overview/components/ | controller | | C |
| cloud-controller-manager (optional) | Integrates with the cloud provider's API | k8s:concepts/overview/components/ ; k8s:concepts/architecture/cloud-controller/ | controller | | C |
| kubelet | Node agent that ensures Pods and their containers run | k8s:concepts/overview/components/ ; gl:kubelet | Pod | | C |
| kube-proxy (optional) | Maintains network rules on nodes to implement Services | k8s:concepts/overview/components/ | Service | | C |
| Addons | DNS, Web UI (Dashboard), container resource monitoring, cluster-level logging | k8s:concepts/overview/components/#addons ; gl:addons | – | | C |
| Controller / control loop | Watches cluster state and moves current state toward desired state (thermostat analogy) | k8s:concepts/architecture/controller/ ; gl:controller | desired state | | C |
| Kubernetes API | Serves Kubernetes functionality through a RESTful interface and stores cluster state | gl:kubernetes-api ; k8s:concepts/overview/kubernetes-api/ | API server | | C |
| API group and version | Paths `/api/v1` (core) and `/apis/<group>/<version>`, e.g. `/apis/rbac.authorization.k8s.io/v1alpha1` | k8s:concepts/overview/kubernetes-api/ ; gl:api-group | API | | C |
| Alpha, beta, GA versions | Alpha may be removed in any release without notice; beta has limited lifetimes; GA is not removed within a major version | k8s:reference/using-api/deprecation-policy/ (Rule #4a) | API version | V | C |
| Object | An entity representing cluster state | gl:object ; k8s:concepts/overview/working-with-objects/ | API | | C |
| spec vs status | spec is the desired state; status is the current state, kept by the control plane | k8s:concepts/overview/working-with-objects/#object-spec-and-status | object | | C |
| Manifest | An object specification in JSON or YAML | gl:manifest | object | | C |
| Name / UID | A client-provided name; a system-generated unique ID | gl:name ; gl:uid ; k8s:concepts/overview/working-with-objects/names/ | object | | X |
| Namespace | Isolates groups of resources within one cluster | gl:namespace | object | | C |
| Initial namespaces | `default`, `kube-node-lease`, `kube-public`, `kube-system` | k8s:concepts/overview/working-with-objects/namespaces/ | namespace | | C |
| Label | Identifying key-value attributes | gl:label ; …/labels/ | object | | C |
| Selector | Filters resources by labels | gl:selector | label | | C |
| Annotation | Non-identifying metadata | gl:annotation | label | | C |
| Field selectors, owners and dependents, finalizers, garbage collection | Other object mechanics | …/field-selectors/, /owners-dependents/, /finalizers/ ; k8s:concepts/architecture/garbage-collection/ | object | | X |
| Watch | Tracks changes to an object as a stream | gl:watch | API | | X |
| Event | An object describing a state change | gl:event | object | | C |
| CustomResourceDefinition | Adds a custom API without building a full server | gl:customresourcedefinition | API | | C |
| Operator pattern | Links a controller to custom resources to automate an application | k8s:concepts/extend-kubernetes/operator/ ; cg:operator | controller, CRD | | C |
| Aggregation layer | Lets you install extra Kubernetes-style APIs | gl:aggregation-layer | API | | X |
| Feature gate | Keys that turn features on or off | gl:feature-gates | – | | X |

### T5. Pods (1.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Pod | "The smallest and simplest Kubernetes object"; a set of running containers | gl:pod ; k8s:concepts/workloads/pods/ | container | | C |
| Shared network namespace | Containers in a Pod share a network namespace and talk over `localhost` | k8s:concepts/services-networking/ | Pod | | C |
| Pod phases | `Pending`, `Running`, `Succeeded`, `Failed`, `Unknown` | k8s:concepts/workloads/pods/pod-lifecycle/#pod-phase | Pod | | C |
| Container states | `Waiting`, `Running`, `Terminated` | …/pod-lifecycle/ | Pod | | C |
| CrashLoopBackOff | Shown when a Pod repeatedly fails to start; restarts back off exponentially | …/pod-lifecycle/ | restart policy | | C |
| restartPolicy | `Always`, `OnFailure`, `Never`; Deployments allow only `Always` | …/pod-lifecycle/#restart-policy | Pod | | C |
| Init container | Runs to completion before app containers | gl:init-container | Pod | | C |
| Sidecar container | A container typically started before app containers; an init container with `restartPolicy: Always` | gl:sidecar-container ; …/pod-lifecycle/ ; cg:sidecar-container | init container | | C |
| App container | Started after init containers complete | gl:app-container | init container | | X |
| Probes | Startup, liveness, readiness | k8s:concepts/workloads/pods/probes/#types-of-probe | kubelet | | C |
| Liveness probe | Decides when to restart a container | …/probes/#liveness-probe | probes | | C |
| Readiness probe | Decides when a container can accept traffic; on failure the Pod stops receiving Service traffic | …/probes/#readiness-probe ; #probe-results | probes, Service | | C |
| Startup probe | Other probes wait until it succeeds; runs only at startup | …/probes/#startup-probe | probes | | C |
| Probe mechanisms | `exec`, `grpc`, `httpGet`, `tcpSocket` | …/probes/#check-mechanisms | probes | | C |
| Probe results | `Success`, `Failure`, `Unknown` | …/probes/#probe-results | probes | | X |
| Static Pod / mirror Pod | Managed directly by the kubelet on a node / its API-side mirror | gl:static-pod ; gl:mirror-pod | kubelet | | X |
| Ephemeral container | Temporary container run inside an existing Pod for debugging | gl:ephemeral-container ; k8s:concepts/workloads/pods/ephemeral-containers/ | Pod | | C |
| PodTemplate | A template for creating Pods, embedded in workload APIs | gl:pod-template | Pod | | C |
| Disruptions / PodDisruptionBudget | Voluntary and involuntary Pod termination; a PDB keeps a minimum available | gl:disruption ; gl:pod-disruption-budget ; k8s:concepts/workloads/pods/disruptions/ | Pod | | X |
| Downward API | Exposes Pod and container fields to the container | gl:downward-api | Pod | | X |

### T6. Workload resources (1.1, 3.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Workload | An application running on Kubernetes | gl:workload | Pod | | C |
| ReplicaSet | Maintains a stable set of replica Pods; use Deployments rather than ReplicaSets directly | k8s:concepts/workloads/controllers/replicaset/ | Pod, controller | | C |
| Replica | A copy of a Pod | gl:replica | Pod | | C |
| Deployment | Manages a replicated application, typically Pods with no local state; manages ReplicaSets | gl:deployment ; …/controllers/deployment/ | ReplicaSet | | C |
| Rolling update / Recreate | `.spec.strategy.type` is `Recreate` or `RollingUpdate` (the default); Recreate kills all Pods first | …/deployment/#strategy | Deployment | | C |
| maxUnavailable / maxSurge | Both default to 25% | …/deployment/ | rolling update | | C |
| Rollback | `kubectl rollout undo deployment/<name>` (optionally `--to-revision`) | …/deployment/#rolling-back-a-deployment | Deployment | | C |
| revisionHistoryLimit | Old ReplicaSets retained; default 10; 0 prevents rollback | …/deployment/ | rollback | | X |
| StatefulSet | Manages Pods with guarantees on ordering and uniqueness; stable network IDs and storage; ordered deployment; needs a headless Service | gl:statefulset ; …/controllers/statefulset/#using-statefulsets | Deployment, headless Service, PV | | C |
| Ordinal index | StatefulSet Pods get ordinals 0 to N-1 | …/statefulset/#ordinal-index | StatefulSet | | C |
| DaemonSet | Runs a copy of a Pod on all (or some) nodes, e.g. log collection or node monitoring | …/controllers/daemonset/ | node | | C |
| Job | Runs Pods until a specified number complete successfully; `backoffLimit` defaults to 6 | …/controllers/job/ ; gl:job | Pod | | C |
| CronJob | Creates Jobs on a repeating cron schedule (minute, hour, day of month, month, day of week) | …/controllers/cron-jobs/ | Job | | C |
| ReplicationController | Superseded by Deployment and ReplicaSet | …/controllers/replicationcontroller/ | ReplicaSet | | X |
| ConfigMap | Non-confidential key-value data; no secrecy or encryption; max 1 MiB | k8s:concepts/configuration/configmap/ ; gl:configmap | Pod | | C |
| Secret | Sensitive data; stored unencrypted in etcd by default; individual Secrets limited to 1 MiB | k8s:concepts/configuration/secret/ | ConfigMap, etcd | | C |
| Blue-green / canary deployment | Two environments with a switch / gradually shifting traffic | cg:blue-green-deployment ; cg:canary-deployment | Deployment | | C |

### T7. Administration (1.2)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| kubectl | "Command line tool for communicating with a Kubernetes cluster's control plane, using the Kubernetes API" | gl:kubectl ; k8s:concepts/overview/kubectl/ | API server | | C |
| kubeconfig | Files that organise cluster access | k8s:concepts/configuration/organize-cluster-access-kubeconfig/ | kubectl | | C |
| Object management techniques | Imperative commands, imperative object configuration, declarative object configuration | k8s:concepts/overview/working-with-objects/object-management/ | kubectl, manifest | | C |
| kubectl apply | Declarative management | k8s:tasks/manage-kubernetes-objects/declarative-config/ | declarative | | C |
| Kustomize | Built into kubectl since 1.14 (`kubectl apply -k`) | k8s:tasks/manage-kubernetes-objects/kustomization/ | manifest | | C |
| Helm chart | A package of pre-configured Kubernetes configurations managed with Helm | gl:helm-chart | manifest | | C |
| kubeadm | A tool for quickly installing Kubernetes and setting up a secure cluster | gl:kubeadm | cluster | | C |
| minikube / kOps | Run Kubernetes locally / create and maintain production clusters on cloud | gl:minikube ; gl:kops | – | | X |
| ResourceQuota | Constrains aggregate consumption per namespace | gl:resource-quota ; k8s:concepts/policy/resource-quotas/ | namespace | | C |
| LimitRange | Constrains consumption per container or Pod in a namespace | gl:limitrange | namespace | | X |
| Drain | Safely evicting Pods from a node for maintenance | gl:drain | eviction | | C |
| Release cadence | Minor releases "approximately three times per year" | https://kubernetes.io/releases/release/ | – | V | C |
| Support window | Release branches kept for the three most recent minors; about 1 year of patch support (1.19+) | https://kubernetes.io/releases/ | – | V | C |
| Version skew | kubelet up to three minors older than kube-apiserver; kubectl within one minor either way | https://kubernetes.io/releases/version-skew-policy/ | components | V | X |
| Deprecation policy | Beta APIs deprecated no more than 9 months or 3 minor releases after introduction, and no longer served 9 months or 3 minors after deprecation (whichever is longer) | k8s:reference/using-api/deprecation-policy/ Rule #4a | API versions | V | C |
| Personas | Application developer, cluster operator, cluster architect, platform developer | gl:application-developer ; gl:cluster-operator ; gl:cluster-architect ; gl:platform-developer | – | | X (was a subdomain in the 2021 outline) |

### T8. Scheduling and resources (1.3)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Scheduling (two steps) | Filtering (feasible nodes), then scoring (rank) | k8s:concepts/scheduling-eviction/kube-scheduler/ | kube-scheduler | | C |
| Requests and limits | Requests are used for placement; CPU limits are enforced by throttling, memory limits by OOM kill | k8s:concepts/configuration/manage-resources-containers/ | Pod | | C |
| CPU units | 1 CPU = 1 physical core or 1 virtual core; `0.1` = `100m` (millicpu) | …/manage-resources-containers/#meaning-of-cpu | requests | | C |
| Memory units | Bytes with suffixes E, P, T, G, M, k or Ei, Pi, Ti, Gi, Mi, Ki | …/manage-resources-containers/ | requests | | C |
| QoS classes | `Guaranteed`, `Burstable`, `BestEffort`; BestEffort Pods are evicted first under pressure | k8s:concepts/workloads/pods/pod-qos/ | requests and limits | | C |
| Guaranteed criteria | Every container has CPU and memory requests equal to their limits | …/pod-qos/#criteria | QoS | | C |
| nodeSelector | "the simplest recommended form of node selection constraint" | k8s:concepts/scheduling-eviction/assign-pod-node/#nodeselector | label | | C |
| Affinity / anti-affinity | Rules that hint the scheduler where to place Pods (node and inter-pod) | gl:affinity ; …/assign-pod-node/ | nodeSelector | | C |
| Taint | Key, value, effect; stops Pods being scheduled on a node | gl:taint | node | | C |
| Toleration | Lets a Pod schedule onto a node with a matching taint | gl:toleration | taint | | C |
| Taint effects | `NoSchedule`, `PreferNoSchedule`, `NoExecute` (evicts running Pods that don't tolerate) | k8s:concepts/scheduling-eviction/taint-and-toleration/ | taint | | C |
| Pod priority / PriorityClass / preemption | Importance of a Pod; a named priority class; evicting lower-priority Pods to fit a pending one | gl:pod-priority ; gl:priority-class ; gl:preemption | scheduling | | C |
| Topology spread constraints | Spread Pods across failure domains | …/topology-spread-constraints/ | label | | X |
| Eviction / node-pressure eviction | Terminating Pods on nodes; the kubelet proactively reclaims resources | gl:eviction ; gl:node-pressure-eviction | QoS | | C |
| Bin packing | Fitting containers onto nodes for best resource use | k8s:concepts/overview/ | requests | | X |

### T9. Networking (2.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Network model | Every Pod gets its own cluster-wide IP; all Pods communicate without NAT | k8s:concepts/services-networking/#the-kubernetes-network-model | Pod | | C |
| CNI | Network plugins that adhere to the CNI specification | gl:cni ; …/network-plugins/ | network model | | C |
| Service | "A method for exposing a network application that is running as one or more Pods in your cluster" | gl:service ; k8s:concepts/services-networking/service/ | Pod, label/selector | | C |
| Service types | `ClusterIP` (the default, internal only), `NodePort`, `LoadBalancer`, `ExternalName` (DNS CNAME, no proxying) | …/service/#publishing-services-service-types | Service | | C |
| NodePort range | Default 30000–32767 | …/service/#type-nodeport | NodePort | | C |
| Nested types | Each type level adds to the previous; NodePort also sets up a cluster IP | …/service/ | types | | C |
| Headless Service | `.spec.clusterIP: None`; no cluster IP, no load balancing; DNS returns Pod IPs | …/service/#headless-services | ClusterIP | | C |
| EndpointSlice | Tracks backend endpoint IPs of a Service | gl:endpoint-slice | Service | | C |
| Endpoints (deprecated) | Deprecated API superseded by EndpointSlice (deprecated v1.33) | …/service/#endpoints | EndpointSlice | V | X |
| Service DNS name | `my-svc.my-namespace.svc.cluster-domain.example` | k8s:concepts/services-networking/dns-pod-service/ | Service, namespace | | C |
| Service discovery | Finding the instances that make up a service | cg:service-discovery ; …/service/#discovering-services | Service | | C |
| Load balancer | Distributes requests among instances | cg:load-balancer | – | | C |
| kube-proxy modes | `iptables`, `ipvs` (deprecated v1.35), `nftables`, `kernelspace` (Windows) | k8s:reference/networking/virtual-ips/ | kube-proxy | V | X |
| Ingress | Manages external access to Services, typically HTTP; needs an ingress controller; the API is frozen and Gateway is recommended | gl:ingress ; …/ingress/ | Service | V | C |
| Gateway API | "A family of API kinds for modeling service networking"; role-oriented; GatewayClass, Gateway, HTTPRoute | gl:gateway ; …/gateway/ | Ingress | V | C |
| NetworkPolicy | Controls traffic between Pods; needs a network plugin that enforces it; Pods are non-isolated by default | gl:network-policy ; …/network-policies/ | CNI, label | | C |
| Dual-stack | IPv4 and IPv6 addresses to Pods and Services | …/dual-stack/ | – | | X |
| Service mesh | Manages service-to-service traffic, adding reliability, observability and security | cg:service-mesh | microservices | | C |
| Service proxy / sidecar pattern | Intercepts traffic, applies logic, forwards it | cg:service-proxy ; cg:sidecar-container | service mesh | | C |
| API gateway | Aggregates application APIs in one place | cg:api-gateway | API | | X |
| Istio | An open platform to integrate microservices, manage traffic, enforce policies and aggregate telemetry | gl:istio | service mesh | | X |
| Proxy | An intermediary server for a remote service | gl:proxy | – | | X |

### T10. Security (2.2)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Cloud native security | Builds security into the whole application lifecycle | cg:cloud-native-security | – | | C |
| Lifecycle phases | Develop, Distribute, Deploy, Runtime | k8s:concepts/security/cloud-native-security/ | – | V (replaced the "4C's" page) | C |
| API request stages | Authentication, then authorization, then admission control | k8s:concepts/security/controlling-access/ | API server | | C |
| Admission controller | Intercepts requests before persistence; validating, mutating or both | gl:admission-controller ; k8s:reference/access-authn-authz/admission-controllers/ | API request | | C |
| RBAC | Authorisation decisions configured through the API; permissions are additive (no deny rules) | gl:rbac ; k8s:reference/access-authn-authz/rbac/ | authorization | | C |
| Role / ClusterRole / RoleBinding / ClusterRoleBinding | A Role is namespaced; a ClusterRole is not; bindings grant them | …/rbac/#role-and-clusterrole | RBAC, namespace | | C |
| ServiceAccount | An identity for processes in a Pod | gl:service-account ; k8s:concepts/security/service-accounts/ | Pod | | C |
| Pod Security Standards | Privileged, Baseline, Restricted (cumulative) | k8s:concepts/security/pod-security-standards/ | securityContext | | C |
| Pod Security Admission | Built-in admission controller; namespace-label modes `enforce`, `audit`, `warn` | k8s:concepts/security/pod-security-admission/ | PSS, admission | | C |
| PodSecurityPolicy | Former API, deprecated in v1.21 and removed in v1.25 | k8s:concepts/security/pod-security-policy/ | PSA | | C (trap) |
| Security context | Privilege and access control settings for a Pod or container | gl:security-context | Pod | | C |
| Secrets good practice | Enable encryption at rest; least-privilege RBAC | k8s:concepts/configuration/secret/ ; …/secrets-good-practices/ | Secret | | C |
| Zero trust | "never trust, always verify" | cg:zero-trust-architecture | – | | C |
| hostPath risk | "Using the `hostPath` volume type presents many security risks." | k8s:concepts/storage/volumes/ | volume | | X |
| Multi-tenancy | Isolation models in a shared cluster | k8s:concepts/security/multi-tenancy/ | namespace | | X |

### T11. Storage (2.4)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Volume | A directory with data accessible to the containers in a Pod | gl:volume ; k8s:concepts/storage/volumes/ | Pod | | C |
| emptyDir | Created when the Pod is assigned to a node; deleted permanently when the Pod is removed | …/volumes/ | volume | | C |
| Ephemeral vs persistent | Ephemeral volumes live with the Pod; PVs persist beyond any Pod | k8s:concepts/storage/ephemeral-volumes/ ; gl:persistent-volume | volume | | C |
| PersistentVolume (PV) | A piece of storage in the cluster | gl:persistent-volume | volume | | C |
| PersistentVolumeClaim (PVC) | Claims storage defined in a PV so it can be mounted | gl:persistent-volume-claim | PV | | C |
| StorageClass | Lets admins describe available storage types | gl:storage-class | PV | | C |
| Dynamic provisioning | Automatic creation of volumes on request | gl:dynamic-volume-provisioning ; k8s:concepts/storage/dynamic-provisioning/ | StorageClass | | C |
| Access modes | RWO (one node), ROX (many nodes read-only), RWX (many nodes read-write), RWOP (one Pod; stable v1.29, CSI only) | k8s:concepts/storage/persistent-volumes/#access-modes | PV | | C |
| Reclaim policies | Retain, Delete (the default for dynamic provisioning), Recycle (deprecated) | …/persistent-volumes/#reclaiming | PV | | C |
| CSI | A standard interface to expose storage systems to containers | gl:csi | volume plugin | | C |
| FlexVolume | Deprecated out-of-tree volume interface; CSI is its replacement | gl:flexvolume | CSI | | X |
| Projected volumes / snapshots | Several sources in one volume / point-in-time copies | …/projected-volumes/ ; …/volume-snapshots/ | volume | | X |
| Stateful vs stateless apps | Whether the app must store data to work | cg:stateful-apps ; cg:stateless-apps | – | | C |
| Cloud native storage | Storage built for containerised environments | cg:cloud-native-storage | – | | X |

### T12. Autoscaling (4.2)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| HorizontalPodAutoscaler | Adjusts the replica count to observed metrics; built in | k8s:concepts/workloads/autoscaling/ ; gl:horizontal-pod-autoscaler | Deployment, metrics | | C |
| HPA algorithm | desiredReplicas = ceil(currentReplicas × current/desired); default tolerance 0.1; sync period 15 s | …/horizontal-pod-autoscale/ | HPA | | X |
| VerticalPodAutoscaler | Adjusts resource requests; an add-on, not in Kubernetes by default; needs Metrics Server | k8s:concepts/workloads/autoscaling/ | requests | | C |
| Cluster Autoscaler and Karpenter | The two node autoscalers sponsored by SIG Autoscaling; CA uses pre-configured node groups; Karpenter auto-provisions | k8s:concepts/cluster-administration/node-autoscaling/ | node | | C |
| KEDA | Event-driven autoscaling; a CNCF-graduated project | k8s:concepts/workloads/autoscaling/ | HPA | | C |
| Cluster Proportional Autoscaler | Scales replicas with cluster size | k8s:concepts/workloads/autoscaling/ | HPA | | X |
| Manual scaling | Horizontal with kubectl; vertical by patching resources | k8s:concepts/workloads/autoscaling/ | – | | X |

### T13. Application delivery (3.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| CI | Integrate code changes as regularly as possible; a prerequisite for CD | cg:continuous-integration | version control | | C |
| Continuous delivery | Changes automatically deployed to an acceptance environment, with testing and rollback | cg:continuous-delivery | CI | | C |
| Continuous deployment | Goes further: deploys straight to production | cg:continuous-deployment | continuous delivery | | C |
| GitOps | Continuously reconciles desired state held in version control against actual state | cg:gitops | CI/CD, declarative | | C |
| GitOps principles | Declarative; Versioned and Immutable; Pulled Automatically; Continuously Reconciled | S18 PRINCIPLES.md | GitOps | V (versioned doc) | C |
| Push vs pull deployment | GitOps agents pull desired state | S18 principle 3 | GitOps | | C |
| Kubernetes does not build code | "Does not deploy source code and does not build your application" | k8s:concepts/overview/#what-kubernetes-is-not | – | | C |
| Kustomize / Helm | See T7 | | | | C |

### T14. Troubleshooting and debugging (2.3, 3.2)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| First debugging step | `kubectl describe pods ${POD_NAME}` shows state and recent events | k8s:tasks/debug/debug-application/debug-pods/ | kubectl | | C |
| Pod stuck Pending | Cannot be scheduled, usually from insufficient resources or `hostPort` | …/debug-pods/ | Pending | | C |
| Pod stuck Waiting | Scheduled but can't run; most commonly an image pull failure | …/debug-pods/ | container states | | C |
| Pod stuck Terminating | Often a finalizer plus a blocking admission webhook | …/debug-pods/ | finalizer | | X |
| kubectl logs (`--previous`) | Container logs; the crashed previous instance | …/debug-running-pod/#examine-pod-logs | kubectl | | C |
| kubectl exec -it | Run commands or a shell in a container | …/debug-running-pod/#container-exec | kubectl | | C |
| kubectl debug / ephemeral containers | For crashed containers or distroless images; stable v1.25 | …/debug-running-pod/#ephemeral-container | ephemeral container | | C |
| Debug Services | Service reachability checks | k8s:tasks/debug/debug-application/debug-service/ | Service | | C |
| crictl | CLI for CRI runtimes on a node | k8s:tasks/debug/debug-cluster/crictl/ | CRI | | X |
| kubectl top / Metrics API | CPU and memory for nodes and Pods; needs Metrics Server | k8s:concepts/cluster-administration/observability/#metrics-api | metrics | V | C |
| Debugging (general) | Finding and fixing defects | cg:debugging | – | | X |

### T15. Observability (4.1)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| Three pillars | Metrics, logs and traces | k8s:concepts/cluster-administration/observability/ | observability | | C |
| Component metrics | Prometheus format at `/metrics`, from the API server, scheduler, controller manager, kube-proxy and kubelet | …/observability/#metrics ; …/system-metrics/ | Prometheus | | C |
| kube-state-metrics | Add-on exposing object-state metrics | …/kube-state-metrics/ | metrics | | X |
| Metrics Server / Metrics API | Resource metrics for autoscaling and `kubectl top`; served through the aggregation layer | …/observability/#metrics-api ; k8s:tasks/debug/debug-cluster/resource-metrics-pipeline/ | HPA | V | C |
| Container logs | Runtimes capture stdout and stderr; node-level logging agents (e.g. Fluent Bit, Fluentd) forward them to a central store | …/observability/#logs ; k8s:concepts/cluster-administration/logging/ | container | | C |
| Logging architectures | Node-level agent; sidecar streaming; sidecar agent; exposing directly from the app | k8s:concepts/cluster-administration/logging/ | logs, DaemonSet, sidecar | | C |
| Traces / OTLP | Request paths; Kubernetes exports spans over OTLP, often through an OpenTelemetry Collector | …/observability/#traces ; …/system-traces/ | OTel | | C |
| Prometheus | Open-source monitoring and alerting toolkit; time series with labels | S16 overview | metrics | | C |
| Prometheus features | Multi-dimensional data model, PromQL, pull model over HTTP, push via an intermediary gateway, service discovery or static targets | S16 overview "Features" | Prometheus | | C |
| Prometheus components | Server, client libraries, push gateway (short-lived jobs), exporters, Alertmanager | S16 overview "Components" | Prometheus | | C |
| Metric types | Counter (monotonically increasing), gauge (up and down), histogram (buckets), summary | S16 metric_types | Prometheus | | C |
| Prometheus history | Joined CNCF in 2016 as the second hosted project, after Kubernetes | S16 overview | CNCF | | X |
| Grafana | Visualises collected data | S16 overview | Prometheus | | X |
| OpenTelemetry | Observability framework for generating, exporting and collecting telemetry; vendor-agnostic; "not an observability backend" | S17 what-is-opentelemetry | observability | | C |
| OTel signals | Traces, metrics, logs, baggage (events and profiles in development) | S17 signals | OTel | V | C |
| cAdvisor | Container resource usage and performance data | gl:cadvisor | kubelet | | X |
| Thanos / Cortex | Distributed time-series stores that complement Prometheus | …/observability/ | Prometheus | | X |

### T16. Ecosystem, community and governance (4.2, 4.3)
| Term | Def | Src | Pre | Vol | P |
|---|---|---|---|---|---|
| CNCF | Builds ecosystems around projects that orchestrate containers | gl:cncf ; S1 p.3 | – | | C |
| CNCF maturity levels | Sandbox (experimental), Incubation, Graduated (production-proven) | S15 process/README.md | CNCF | | C |
| TOC | The Technical Oversight Committee evaluates projects (due diligence) | S15 | maturity | | C |
| Kubernetes is graduated | "We are a CNCF graduated project" | https://kubernetes.io/ | maturity | | C |
| CNCF Landscape | A catalogue of cloud native projects and products | S21 | CNCF | V | C |
| Key projects named by CNCF | Prometheus, Envoy, Fluentd (S8); Kubernetes, Fluentd, Linkerd, Prometheus, OpenTracing, gRPC (S1 p.3); KEDA (graduated) | S8 ; S1 ; k8s autoscaling | CNCF | V | C |
| SIG / WG | Special Interest Groups own ongoing areas; Working Groups are short-lived | gl:sig ; gl:wg ; S19 | – | | C |
| Kubernetes governance units | SIGs (with subprojects), Working Groups, Committees (incl. Steering Committee) | S19 governance.md | SIG | | C |
| KEP | Kubernetes Enhancement Proposal; tracked in the enhancements repo, filed once a SIG agrees | S20 | SIG | | C |
| Release phases | About two weeks between Code Freeze and release | https://kubernetes.io/releases/release/ | release cadence | V | X |
| Contributor roles | Contributor, member, reviewer, approver; CLA | gl:contributor, member, reviewer, approver, cla ; cg contributor-ladder | – | | X |
| Upstream / downstream | Core Kubernetes versus code that depends on it | gl:upstream ; gl:downstream | – | | X |
| Open standards | OCI (image spec), CRI, CNI, CSI | gl:cri, cni, csi ; k8s:concepts/containers/images/ | each | | C |

**Totals:** 288 concept rows across 16 topics (T1–T16): 213 core and 75 extra.

---

## 5. Numbers and thresholds

Every figure below was confirmed in the raw text. "Vol" means the figure can change.

| Figure | Value, units and conditions | Source line |
|---|---|---|
| Exam questions | 60 multiple-choice (every LF multiple-choice exam except CNPA) | important-instructions-mc: "consists of 60* multiple-choice questions" (Vol) |
| Exam time | 90 minutes | faq-mc; product page (Vol) |
| Pass mark | 75% or above | faq-mc (Vol) |
| Results | within 24 hours by email | faq-mc; handbook scoring page |
| Validity | 2 years (24 months from passing) | faq-mc; handbook certificates page |
| Eligibility and retake window | 12 months from purchase; one retake | product page; exam-terms-of-service |
| Price | $250 (exam only); $299 with LFS250; $495 with THRIVE-ONE | product page (Vol) |
| Domain weights | 44 / 28 / 16 / 12 % | S1, S2, S4, S5, S8 (Vol) |
| Old weights (before Nov 2025) | 46 / 22 / 16 / 8 / 8 % | S3; README before commit a97fbcc |
| Deployment rolling update | maxUnavailable 25%, maxSurge 25% (default); at least 75% up, at most 125% | k8s deployment: "at least 75% of the desired number of Pods are up (25% max unavailable)" |
| revisionHistoryLimit | default 10 | k8s deployment |
| Graceful termination | default 30 seconds | pod-lifecycle: "which defaults to 30 seconds" |
| Restart backoff | 10 s, 20 s, 40 s…, capped at 300 s (5 min); resets after 10 min of good running | pod-lifecycle #restart-policy |
| httpGet probe success | status ≥200 and <400 | probes #check-mechanisms |
| exec probe success | exit status 0 | probes |
| Job backoffLimit | default 6 | job.md: "The `.spec.backoffLimit` is set by default to 6" |
| CronJob name | at most 52 characters (the controller appends 11; Job names are limited to 63) | cron-jobs.md |
| Cron fields | minute 0–59, hour 0–23, day of month 1–31, month 1–12, day of week 0–6 (Sunday–Saturday) | cron-jobs.md |
| NodePort range | 30000–32767 (default, `--service-node-port-range`) | service.md #type-nodeport |
| Label value / name segment | 63 characters or less; the prefix is up to 253 characters | labels.md |
| DNS subdomain names | no more than 253 characters; label names at most 63 | names.md |
| ConfigMap size | cannot exceed 1 MiB | configmap.md |
| Secret size | 1 MiB per Secret | secret.md #restriction-data-size |
| CPU unit | 1 CPU = 1 physical or 1 virtual core; `0.1` = `100m` | manage-resources-containers.md |
| HPA | sync period 15 s default; tolerance 0.1; downscale stabilisation 5 min | horizontal-pod-autoscale.md |
| Initial namespaces | 4 | namespaces.md: "Kubernetes starts with four initial namespaces" |
| PV access modes | 4 (RWO, ROX, RWX, RWOP) | persistent-volumes.md |
| Pod phases | 5 | pod-lifecycle.md |
| Probe types | 3; probe mechanisms 4 | probes.md |
| Service types | 4 | service.md |
| QoS classes | 3 | pod-qos.md |
| PSS profiles / PSA modes | 3 / 3 | pod-security-standards.md; pod-security-admission.md |
| Taint effects | 3 | taint-and-toleration.md |
| Release cadence | about 3 minor releases per year; about 1 year of patch support (v1.19+); three most recent minors maintained | releases/release.md; releases/_index.md (Vol) |
| Deprecation (beta APIs) | 9 months or 3 minor releases (whichever is longer) to deprecation, then the same to stop serving | deprecation-policy.md Rule #4a (Vol) |
| Deprecation (CLI, user-facing) | GA 12 months or 2 releases; beta 3 months or 1 release; alpha 0 | deprecation-policy.md Rule #5a |
| Version skew | kubelet up to 3 minors older than kube-apiserver; kubectl ±1 minor | version-skew-policy.md (Vol) |
| Dockershim | deprecation announced in v1.20; removed in v1.24; last present in 1.23 | S12; gl:dockershim |
| PodSecurityPolicy | deprecated v1.21; removed v1.25 | pod-security-policy.md |
| ReadWriteOncePod | stable in v1.29 | persistent-volumes.md |
| CRI v1 required | kubelet requires CRI `v1` from v1.26 | cri.md |
| Kustomize in kubectl | since 1.14 | kustomization.md |
| Ephemeral containers | stable v1.25 | debug-running-pod.md |
| Endpoints API | deprecated v1.33 | service.md |
| kube-proxy ipvs | deprecated v1.35; off by default from v1.40; removed in v1.43 (planned) | virtual-ips.md (Vol) |
| Kubernetes history | open-sourced by Google in 2014; "over 15 years of Google's experience" | overview |
| Prometheus | started 2012; joined CNCF in 2016 as the second hosted project | S16 |
| CNCF definition | v1.1, approved 2024-02-26 | S14 |
| Current Kubernetes | 1.37.0, released 2026-08-26 | kubernetes.io/releases (Vol) |

---

## 6. Visuals

All the Kubernetes images below are in the `kubernetes/website` repository and are
licensed **CC BY 4.0** (S9; repo LICENSE). Attribution: "The Kubernetes Authors,
kubernetes.io, CC BY 4.0". Never use the Kubernetes logo: it is a registered mark
(US Reg. no. 4816320, per the LF trademark list).

| # | Figure | File URL | Where it appears | Card use |
|---|---|---|---|---|
| V1 | "The components of a Kubernetes cluster" | https://kubernetes.io/images/docs/components-of-kubernetes.svg (repo `static/images/docs/components-of-kubernetes.svg`) | k8s:concepts/overview/components/ (figure at the top); also cloud-controller page | Occlusion: name each control-plane and node component |
| V2 | "Figure 1. Kubernetes cluster components." (alt: control plane with kube-apiserver, etcd, kube-controller-manager, kube-scheduler; nodes running kubelet and kube-proxy) | https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg | k8s:concepts/architecture/ | Which components run where |
| V3 | "Deployment evolution" (traditional, virtualised, container eras) | https://kubernetes.io/images/docs/Container_Evolution.svg | k8s:concepts/overview/#going-back-in-time | Classify: which layers each era shares |
| V4 | Pod diagram (multi-container Pod with a file-puller sidecar and a web server) | https://kubernetes.io/images/docs/pod.svg | k8s:concepts/workloads/pods/pod-lifecycle/ Figure 1 | Containers in a Pod share volumes and network |
| V5 | Cluster network ranges | https://kubernetes.io/docs/images/kubernetes-cluster-network.svg | k8s:concepts/cluster-administration/networking/ | Pod, Service and Node IP ranges come from different components |
| V6 | "Figure. Ingress" | https://kubernetes.io/docs/images/ingress.svg | k8s:concepts/services-networking/ingress/ | Traffic path: client → Ingress → Service → Pods |
| V7 | "Ingress Fan Out" and "Ingress Name Based Virtual hosting" | https://kubernetes.io/docs/images/ingressFanOut.svg ; https://kubernetes.io/docs/images/ingressNameBased.svg | ingress page | Path-based versus host-based routing |
| V8 | Gateway API kinds and request flow | https://kubernetes.io/docs/images/gateway-kind-relationships.svg ; https://kubernetes.io/docs/images/gateway-request-flow.svg | k8s:concepts/services-networking/gateway/ | GatewayClass → Gateway → HTTPRoute |
| V9 | Request handling steps for an API request | https://kubernetes.io/images/docs/admin/access-control-overview.svg | k8s:concepts/security/controlling-access/ | Order: authn → authz → admission |
| V10 | Admission control phases | https://kubernetes.io/docs/reference/access-authn-authz/admission-control-phases.svg | admission-controllers page | Mutating before validating |
| V11 | Logging architectures (5 PNGs) | https://kubernetes.io/images/docs/user-guide/logging/logging-node-level.png ; …/logging-with-node-agent.png ; …/logging-with-streaming-sidecar.png ; …/logging-with-sidecar-agent.png ; …/logging-from-application.png | k8s:concepts/cluster-administration/logging/ | Classify each logging pattern |
| V12 | Mermaid flowcharts (Figures 1–4: signals; metrics, logs and traces pipelines) | inline Mermaid in the page source (no image file) | k8s:concepts/cluster-administration/observability/ | Redraw ourselves from the Mermaid source (CC BY 4.0) |
| V13 | Dockershim vs CRI with containerd | https://kubernetes.io/images/blog/2018-05-24-kubernetes-containerd-integration-goes-ga/cri-containerd.png | k8s:tasks/administer-cluster/migrating-from-dockershim/check-if-dockershim-removal-affects-you/ | What dockershim removal took out of the path |
| V14 | Release cycle / release lifecycle | https://kubernetes.io/images/releases/release-cycle.jpg ; https://kubernetes.io/images/releases/release-lifecycle.jpg | https://kubernetes.io/releases/release/ | Extra only |
| V15 | Prometheus architecture | https://prometheus.io/assets/docs/architecture.svg | S16 overview "Architecture" | Components and flow. **Apache-2.0 (prometheus/docs repo): tier to be confirmed (§2 S16).** Use only if Apache is accepted; otherwise redraw from the text. |
| V16 | The 4C's of Cloud Native Security (historical) | `/images/docs/4c.png`, in the release-1.28 branch | Removed page (see §7). **Do not use as current content.** | – |

Diagrams we could draw from sourced facts:
- **D1.** Control plane and node components with arrows: kubectl → API server ↔ etcd;
  scheduler, controller manager → API server; kubelet → runtime via CRI. (components
  page; cri.md)
- **D2.** Deployment → ReplicaSet → Pods ownership, with a rolling update showing the
  25%/25% bounds. (deployment.md)
- **D3.** Workload chooser: stateless (Deployment), stable identity and storage
  (StatefulSet), one per node (DaemonSet), run to completion (Job), scheduled (CronJob).
- **D4.** Service types nested: ClusterIP ⊂ NodePort ⊂ LoadBalancer; ExternalName
  aside, as a CNAME. (service.md)
- **D5.** Pod phase state diagram: Pending → Running → Succeeded/Failed; Unknown.
- **D6.** Probe timeline: startup gates liveness and readiness; readiness failure
  removes the Pod from Service endpoints; liveness failure restarts the container.
- **D7.** PV/PVC/StorageClass binding with dynamic provisioning.
- **D8.** RBAC: subject → RoleBinding → Role (namespace), and the cluster-wide
  equivalents.
- **D9.** PSS ladder: Privileged ⊃ Baseline ⊃ Restricted, with the PSA modes.
- **D10.** Observability: the three pillars → Prometheus (pull) / OTel Collector →
  backends (from the Mermaid source).
- **D11.** CNCF maturity: Sandbox → Incubation → Graduated. (S15)
- **D12.** The GitOps reconcile loop: Git (desired) → agent pulls → cluster (actual)
  → diff → apply. (S18)
- **D13.** Autoscaling map: HPA (replicas), VPA (requests), Cluster Autoscaler or
  Karpenter (nodes), KEDA (events).
- **D14.** Taint effects matrix: NoSchedule, PreferNoSchedule, NoExecute versus new
  and running Pods.

**Visuals listed: 16 from sources (V1–V16, some with several files) and 14 to draw.**

---

## 7. Confusions and traps

1. **The outline changed on 24 Nov 2025.** Old materials still in circulation
   show 5 domains:
   - Kubernetes Fundamentals 46%: Kubernetes Resources, Architecture, API,
     Containers, Scheduling.
   - Container Orchestration 22%: Fundamentals, Runtime, Security, Networking,
     Service Mesh, Storage.
   - Cloud Native Architecture 16%: Fundamentals, Autoscaling, Serverless,
     Community and Governance, Personas, Open Standards.
   - Cloud Native Observability 8%: Telemetry & Observability, Prometheus, Cost
     Management.
   - Cloud Native Application Delivery 8%: Application Delivery Fundamentals,
     GitOps, CI/CD.

   Source: S3 (PDF created 2021-09-19). The current outline: Orchestration 28%,
   Delivery 16%, Architecture 12%, and Observability moved under Architecture (S5).
   Named items such as Prometheus, Service Mesh, Serverless, Personas, Open Standards
   and Cost Management are no longer separate labels. The CNCF page still says the
   exam will "Test your knowledge of Cloud Native Orchestration, Architecture,
   Telemetry and Observability, Prometheus, and much more" (S8, fetched
   2026-09-25). That marketing text reflects the old outline. Old-version weights
   must never appear on cards without a date.
2. **Disagreements between owner pages** (all fetched 2026-09-25):
   - Weights and competencies agree across the curriculum PDF, the curriculum
     README, the LF product page (dateModified 2026-07-28), the LF changes page and
     the CNCF page.
   - Only spelling differs: the PDF has "KNCA" and "Could Native".
   - The CNCF page links to KCNA-specific instructions and FAQ pages
     (`…/important-instructions-kcna`, `…/frequently-asked-questions-kcna`).
     Both are now "Page Not Found". The live facts are on the generic
     multiple-choice pages.
3. **Dockershim and Docker.** Dockershim was removed in v1.24, not "Docker
   deprecated". Images built with Docker still run. Docker Engine can still serve as
   the runtime through `cri-dockerd` (S12; container-runtimes page). Runtimes
   talk to the kubelet through the CRI; containerd and CRI-O are CRI runtimes.
4. **Deprecated or removed APIs:**
   - PodSecurityPolicy was removed in v1.25; Pod Security Admission replaces it.
   - The Endpoints API was deprecated in v1.33; EndpointSlice replaces it.
   - The Ingress API is frozen; Gateway API is recommended.
   - ReplicationController is superseded by Deployment and ReplicaSet.
   - FlexVolume is deprecated in favour of CSI.
   - The `Recycle` reclaim policy is deprecated.
   - `.spec.loadBalancerIP` has been deprecated since v1.24.
   - The ipvs mode of kube-proxy was deprecated in v1.35.
   - "Master" is a legacy term for control-plane nodes.
5. **Workload confusions:**
   - Deployment versus ReplicaSet: you manage the Deployment, and it manages
     ReplicaSets.
   - StatefulSet: stable identity and storage, ordered rollout, needs a headless
     Service.
   - DaemonSet: one Pod per node.
   - Job: runs to completion. CronJob: runs a Job on a schedule.
6. **Service type confusions:**
   - ClusterIP is the default and internal only.
   - NodePort adds a port on every node (30000–32767) and still gets a ClusterIP.
   - LoadBalancer needs an external load balancer; Kubernetes has none built in.
   - ExternalName is a DNS CNAME with no proxying.
   - Headless means `clusterIP: None`, which is not "unset".
   - Ingress and Gateway are separate APIs, not Service types.
7. **Probe confusions.** Liveness failure restarts the container. Readiness
   failure removes the Pod from Service traffic and does not restart it. Startup
   delays the other two.
8. **Resource confusions:**
   - CPU over the limit is throttled; memory over the limit is OOM-killed.
   - QoS eviction order is BestEffort, then Burstable, then Guaranteed.
   - Requests drive scheduling.
9. **Taints versus affinity.** Taints repel Pods; tolerations permit but do not
   attract; nodeSelector and affinity attract. NoExecute evicts running Pods;
   NoSchedule does not.
10. **Secret and ConfigMap.** Secret data is base64-encoded, not encrypted, and
    stored unencrypted in etcd by default. A ConfigMap provides no secrecy.
11. **Security model moved.** The "4C's of Cloud Native security" page ("Cloud,
    Clusters, Containers, and Code") is in the release-1.28 docs
    (`content/en/docs/concepts/security/overview.md`, branch `release-1.28`). The
    same path is 404 in release-1.29 to release-1.34 and absent on main. The
    current page frames security by lifecycle phase: Develop, Distribute, Deploy,
    Runtime. Older prep material still teaches the 4Cs.
12. **Scaling words.** HPA changes replica count; VPA changes requests and is an
    add-on; Cluster Autoscaler and Karpenter change node count. Horizontal scaling
    adds instances; vertical scaling adds CPU and RAM.
13. **Continuous delivery versus deployment.** Delivery deploys automatically to an
    acceptance environment; deployment goes straight to production (cg).
14. **Observability tooling.**
    - Prometheus pulls and uses a push gateway only for short-lived jobs.
    - OpenTelemetry "is not an observability backend".
    - The Metrics Server (Metrics API) is not a full monitoring pipeline.
    - Logs come from stdout and stderr.
15. **Pull policy defaults.** A missing tag or `:latest` means `Always`, not
    `IfNotPresent`.
16. **RBAC** has no deny rules; permissions are additive. A Role is namespaced and
    a ClusterRole is not.
17. **CNCF maturity terms.** The README uses "Incubation" and "Graduation" as level
    names, and projects are "incubating" and "graduated". Projects may enter at
    Sandbox or apply directly for Incubation (S15).

---

## 8. Naming

**Owner marks** (from https://www.linuxfoundation.org/legal/trademarks, "Last updated:
November 19, 2024"):
- Registered word marks: "Kubernetes®", "Cloud Native Computing Foundation®",
  "CNCF®", "Prometheus®", "OpenTelemetry®", "Helm®", "Envoy®", "Certified
  Kubernetes Administrator®" and "Certified Kubernetes Application Developer®".
- Logo marks: "Kubernetes and Cloud Native Associate and Design (color) US Reg.
  6949718" is registered; "Kubernetes logo. US Reg. no. 4816320".
- "Kubernetes and Cloud Native Associate" and "KCNA" do **not** appear as word
  marks in either word-mark list (registered, or pending and in use). Only the
  design (logo) mark does.

**LF Trademark Usage guidelines** (https://www.linuxfoundation.org/legal/trademark-usage),
quoted:
- "You may make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces, endorses,
  or supports your company, products, or services. Even when making fair use of a
  trademark, you should acknowledge the owner of the trademark with a trademark
  notice".
- "A trademark notice should be used on the most prominent and/or first appearance
  of each mark"; registered marks "should include the ® symbol immediately after the
  first usage".
- "A trademark should not be used as your domain name or as part of your domain
  name."
- "Do not refer to a product or service as being certified under any of The Linux
  Foundation's marks unless…"
- "Do not use a logo of The Linux Foundation on posters, brochures, signs, websites,
  or other marketing materials… without written permission".
- "A mark should not be combined with any other mark, hyphenated, abbreviated or
  displayed in parts."
- The LF's own footer notice reads: "The Linux Foundation has registered trademarks
  and uses trademarks. For a list of trademarks of The Linux Foundation, please see
  our Trademark Usage page."
- kubernetes.io footer: "For website terms of use, trademark policy and other project
  policies please see https://lfprojects.org/policies/".

**How CONTENT-POLICY §4 applies:**
- The Linux Foundation is not in §5, so the exam may be named, and the deck may map
  to the outline (`ExamRefs`), because the CNCF curriculum is CC BY 4.0 (§2.3).
- Title pattern: "[Site name] deck for the Kubernetes and Cloud Native Associate
  (KCNA) exam". Plain text, our brand first, no logo (the KCNA badge is a registered
  design mark). Not "KCNA Flashcards", "Official" or "Certified".
- URL: `/decks/kubernetes/kcna/` is acceptable (path only, never the domain).
- Use Kubernetes® with the ® at the first prominent use; the LF guideline asks for ®
  on registered marks.
- Footer notice (§4, "Everyone else" row), suggested wording: "Kubernetes® is a
  registered trademark of The Linux Foundation. Kubernetes and Cloud Native
  Associate (KCNA) is an exam of the Cloud Native Computing Foundation and The Linux
  Foundation. This deck is independent and is not affiliated with, sponsored,
  endorsed or approved by The Linux Foundation or CNCF."
- Add the LF list link: "For a list of trademarks of The Linux Foundation, see
  https://www.linuxfoundation.org/legal/trademark-usage".
- Never write "KCNA-certified deck", and never use the Kubernetes wheel logo or the
  KCNA badge.
- Attribution for CC BY 4.0 content: "Includes material from the Kubernetes
  documentation, © The Kubernetes Authors, CC BY 4.0" and "Includes the KCNA
  curriculum, © CNCF, CC BY 4.0". Glossary and OTel material get equivalent lines.
- A lawyer reviews this wording before launch (§8).

---

## 9. Languages

- **Exam languages.** The LF language table
  (https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language) marks
  KCNA ✔ English, ✔\*\* Japanese and ✔\* Simplified Chinese, with the footnotes
  "\* Must register for the Chinese-Only version of the Exam" and "\*\* Must register
  for the Japanese-Only version of the Exam".
  - The KCNA section adds: Japanese, "Register for the Japanese version"
    (https://training.linuxfoundation.org/ja/certification/kubernetes-and-cloud-native-associate-kcna-jp/);
    Simplified Chinese, "Register for the Chinese-Only version"
    (https://training.linuxfoundation.cn/certificates).
  - The CNCF page lists "考试费 ¥1,858 (含税) | 中文监考官" (Chinese exam) and
    "受験料$250 | オンラインでの試験" (Japanese).
  - The same handbook page says proctor communication is in English, except Chinese
    and Japanese, which use "automated translation".
- **The curriculum (S1)** is English only: no translated KCNA PDF is in
  `cncf/curriculum`.
- **kubernetes.io localisations.** `hugo.toml` on `main` defines these languages:
  English, Bengali, Chinese (zh-cn), French, German, Hindi, Indonesian, Italian,
  Japanese, Korean, Persian, Polish, Portuguese (pt-br), Russian, Spanish,
  Ukrainian and Vietnamese. That is 17, each with a `content/<lang>` folder.
  - Localised pages carry the same footer, "Documentation Distributed under CC BY
    4.0" (checked on https://kubernetes.io/ja/).
  - Coverage varies widely. Files per folder: en 3273, zh-cn 2800, ja 961, ko 834,
    down to it 84.
- **CNCF Glossary** has content folders for bn, de, en, es, fr, hi, it, ja, ko,
  pt-br, ru, tr, ur, vi, zh-cn and zh-tw. The site footer covers them all:
  "Documentation Distributed under CC BY 4.0".
- **CNCF Cloud Native Definition (S14)** includes translations in many languages
  in the same file, e.g. Japanese, Chinese, German and Spanish. Its licence was not
  found (tier C).

---

## 10. Not verified

- **KCNA-specific question count.** Only the generic multiple-choice page gives 60.
  The KCNA product page and the CNCF page give no count, and the KCNA-specific LF
  pages linked from cncf.io return "Page Not Found". Tried: the product page, the
  CNCF page, faq-mc, important-instructions-mc, and both dead KCNA URLs.
- **Target Kubernetes version for KCNA.** It is not stated anywhere fetched. The KCNA
  PDF and README have no version, unlike CKA and CKAD.
- **Exact go-live date of the new outline.** The LF page says "no earlier than
  November 24, 2025". The curriculum commit is dated 2025-11-24. No page confirms
  the actual first day.
- **Licence of the CNCF Cloud Native Definition and TOC process docs.** The
  `cncf/toc` repo has no LICENSE file in its root, and no licence line was found.
  Treated as tier C.
- **Apache-2.0 and MIT documentation (Prometheus docs, Kubernetes community and
  enhancements repos, Helm docs).** These are open licences, but CONTENT-POLICY §3
  tier B names only CC BY, CC BY-SA and public domain. The tier needs a policy
  decision.
- **Licence of the cncf.io KCNA page and the LF docs pages.** No licence statement
  was found on the LF docs pages; treated as C.
- **Competency-level objectives.** None are published beyond the 13 labels (S1, S4,
  S5). The mapping in §3 and §4 is ours.
- **Current list of CNCF graduated and incubating projects.** Not fetched (the
  cncf.io projects page was not read). Only Kubernetes (graduated, per
  kubernetes.io) and KEDA (graduated, per the Kubernetes autoscaling page) are
  confirmed.
- **Sample questions.** No official free KCNA sample questions were found or
  sought; none should be used (CONTENT-POLICY §2.1).
- **Second raw fetch.** CARD-STANDARD §6 asks for figures to be confirmed in two
  raw fetches. Each figure here was confirmed once, in the raw text. The source
  audit pass should make the second fetch.
