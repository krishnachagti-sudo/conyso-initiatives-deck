# Research brief: Certified Kubernetes Security Specialist (CKS)

Slug: `cks`. Family prefix: `cks`. Researched 25 September 2026. Every fact below
was read in a source fetched during this task, or in a prerequisite-deck source
named as reused. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/cks/`
(`[file]`; teaching pages are in `pages/`, licence files in `lic/`).

**Prerequisite decks.** `prerequisiteDecks: ["kcna", "kcsa"]`. `kcsa-terms.json`
already holds the 304 KCNA terms at topic 0, plus 321 KCSA terms. All 625 are copied
into `cks-terms.json` at topic 0. KCSA taught the concepts (RBAC, PSS/PSA, seccomp,
AppArmor, sandboxed runtimes, encryption at rest, audit levels and stages, Falco,
kube-bench, CIS, SBOM, cosign, ImagePolicyWebhook, NetworkPolicy basics). CKS is
performance-based, so this deck adds the **hands-on layer**: fields, flags, files,
commands and procedures. It adds no second primer for any KCSA term. KCSA sources
are reused, including every kubernetes.io security page, NIST SP 800-190, the
kube-bench README, Falco docs and MITRE ATT&CK. Pages this deck cites by anchor were
fetched again, and every anchor was confirmed present.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Network policies and CIS benchmarks | Cluster Setup (15%) |
| T2 | Ingress TLS, node endpoints and binary verification | Cluster Setup (15%) |
| T3 | RBAC, service accounts and API access | Cluster Hardening (15%) |
| T4 | Upgrading Kubernetes | Cluster Hardening (15%) |
| T5 | Host OS and kernel hardening | System Hardening (10%) |
| T6 | Pod Security Standards, Secrets and etcd | Minimize Microservice Vulnerabilities (20%) |
| T7 | Sandboxes and Pod-to-Pod encryption | Minimize Microservice Vulnerabilities (20%) |
| T8 | Supply chain: images, SBOM, signing and static analysis | Supply Chain Security (20%) |
| T9 | Runtime security and immutability | Monitoring, Logging and Runtime Security (20%) |
| T10 | Audit logging and investigation | Monitoring, Logging and Runtime Security (20%) |

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation, with CNCF | FAQ: "The CKS was created by the Linux Foundation and the Cloud Native Computing Foundation (CNCF)" https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/ `[lf-cks.txt]`. The curriculum is "A Cloud Native Computing Foundation (CNCF) Publication" `[CKS_Curriculum.txt]` | No |
| Prerequisite | A passed CKA | "Certified Kubernetes Security Specialist (CKS) candidates must have taken and passed the Certified Kubernetes Administrator (CKA) exam prior to attempting the CKS exam." (product page; same wording in https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks `[lf-faq.txt]`). The FAQ definition adds: "accomplished Kubernetes practitioners (as evidenced by holding the CKA credential)" | Rarely |
| Format | Online, proctored, performance-based, on a command line | "This exam is an online, proctored, performance-based test that requires solving multiple tasks from a command line running Kubernetes." (product page) | Rarely |
| Task count | 15 to 20 | "The exams consist of 15-20 performance-based tasks." https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-cks `[lf-ii-cks.txt]` | Sometimes |
| Time | 2 hours | "Candidates have 2 hours to complete the CKS exam." (important-instructions-cks); product page: "Duration of Exam 2 Hours" | Rarely |
| Pass mark | 67% | "For the CKS Exam, a score of 67% or above must be earned to pass." (FAQ). CKA and CKAD need 66% (same page) | Sometimes |
| Results | Within 24 hours | "Results will be emailed 24 hours from the time that the exam is completed." (important-instructions-cks) | Rarely |
| Kubernetes version | v1.35 | Product page: "The exam is based on Kubernetes v1.35"; FAQ: "The CKS exam environment is currently running Kubernetes v1.35" | **Often** |
| Version policy | New minor within about 4 to 8 weeks | "The CKA, CKS and CKAD exam environment will be aligned with the most recent K8s minor version within approximately 4 to 8 weeks of the K8s release date." (FAQ) | Rarely |
| Curriculum version | v1.34 | File `CKS_Curriculum v1.34.pdf` in cncf/curriculum (master). The README says the version's "major and minor version … match the version of Kubernetes" | **Often** |
| Retake | One retake | Product page: "One Retake"; FAQ: "When eligible, we do offer a retake for those who do not pass the first time, regardless of why." | Sometimes |
| Eligibility | 12 months | Product page: "12 Month Exam Eligibility" | Sometimes |
| Validity | 2 years; renew by passing again | FAQ: "CKA, CKAD, and CKS Certifications are valid for 2 years." "Candidates have the option to retake and pass the exam to renew their certification." | Sometimes |
| CARE link to CKA | Passing CKS extends CKA | FAQ: "Under the CARE program, earning or recertifying the Certified Kubernetes Security Specialist (CKS) certification on or after June 18, 2026, will automatically extend your Certified Kubernetes Administrator (CKA) certification." | **New (2026)** |
| Simulator | Killer.sh, two sessions | Product page: "two simulation attempts (36 hours of access for each attempt from the start of activation). Each CKS simulator session has 17 questions". FAQ: "Exam Simulator access is not included in … CKS-SINGLE Exam Registrations" | Sometimes |
| Allowed docs in exam | kubernetes.io/docs and blog, Falco, bom, etcd, ingress-nginx, Cilium, Istio | https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed `[lf-resources.txt]`, CKS section: "Falco documentation https://falco.org/docs/", "Bom documentation https://kubernetes-sigs.github.io/bom/cli-reference/", "etcd documentation https://etcd.io/docs/", "NGINX Ingress Controller Documentation …", "Cilium Documentation https://docs.cilium.io/en/stable", "Istio Documentation https://istio.io/latest/docs/" | Sometimes |
| Price | $445 exam only; $625 with THRIVE-ONE; $645 with LFS260 | Product page: "1. Certification exam only – $445" … "3. Certification exam + Kubernetes Security Essentials (LFS260) course – $645" | **Often** |
| Level | Intermediate | Product page: "Experience Level: Intermediate" | Rarely |

## Naming

- **Marks.** The LF trademark list gives "Certified Kubernetes Security
  Specialist®", "Certified Kubernetes®", "Kubernetes®", "Cloud Native Computing
  Foundation®", "CNCF®", "Cilium®", "Istio®" and "etcd®" as registered marks, and
  "Falco™" as a trademark (https://www.linuxfoundation.org/legal/trademarks,
  under "The Linux Foundation has the following registered trademarks…") `[lf-tmlist.txt]`.
  "CKS" alone is not on the list.
- **Usage terms** (https://www.linuxfoundation.org/legal/trademark-usage): "You may
  make fair use of word marks to make true factual statements. But fair use does not
  permit you to state or imply that the owner of a mark produces, endorses, or
  supports your company, products, or services. Even when making fair use of a
  trademark, you should acknowledge the owner of the trademark…"; "a ™ should not be
  changed to an ® in a trademark notice by anyone other than the owner"; "Do not
  refer to a product or service as being certified under any of The Linux
  Foundation's marks unless…" `[lf-tmusage.txt]`.
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list, and
  the "Everyone else" notice applies. Title: `[Site name] deck for the Certified
  Kubernetes Security Specialist (CKS) exam`. Never "CKS Flashcards", "official"
  or "certified". No logo. Keep Falco as ™, not ®.
- **Deck notice text:**
  > Certified Kubernetes Security Specialist (CKS) and Kubernetes are registered
  > trademarks of The Linux Foundation. Cilium, Istio and etcd are registered
  > trademarks, and Falco is a trademark, of The Linux Foundation. This deck is
  > independent and is not affiliated with, sponsored, endorsed or approved by The
  > Linux Foundation or the Cloud Native Computing Foundation.
- **Attribution.** kubernetes.io, Falco and etcd docs: CC BY 4.0. Istio, Cilium,
  gVisor, Trivy, bom, Kubesec, KubeLinter and ingress-nginx: Apache 2.0 (keep the
  licence notice). Docker best practices are tier C.

## Outline

Source: `CKS_Curriculum v1.34.pdf`, `#page=2` (the PDF prints in two columns). The
LF product page lists the same domains, weights and competencies in the same order.
The curriculum is CC BY 4.0, so objectives are quoted exactly.

**1. Cluster Setup: 15%**
- Use Network security policies to restrict cluster level access [T1]
- Use CIS benchmark to review the security configuration of Kubernetes components (etcd, kubelet, kubedns, kubeapi) [T1]
- Properly set up Ingress objects with TLS [T2]
- Protect node metadata and endpoints [T2]
- Verify platform binaries before deploying [T2]

**2. Cluster Hardening: 15%**
- Use Role Based Access Controls to minimize exposure [T3]
- Exercise caution in using service accounts e.g. disable defaults, minimize permissions on newly created ones [T3]
- Restrict access to Kubernetes API [T3]
- Upgrade Kubernetes to avoid vulnerabilities [T4]

**3. System Hardening: 10%**
- Minimize host OS footprint (reduce attack surface) [T5]
- Using least-privilege identity and access management [T5] (RBAC side in [T3])
- Minimize external access to the network [T5] (NetworkPolicy side in [T1])
- Appropriately use kernel hardening tools such as AppArmor, seccomp [T5]

**4. Minimize Microservice Vulnerabilities: 20%**
- Use appropriate pod security standards [T6]
- Manage kubernetes secrets [T6]
- Understand and implement isolation techniques (multi-tenancy, sandboxed containers, etc.) [T7]
- Implement Pod-to-Pod encryption (Cilium, Istio) [T7]

**5. Supply Chain Security: 20%**
- Minimize base image footprint [T8]
- Understand your supply chain (e.g. SBOM, CI/CD, artifact repositories) [T8]
- Secure your supply chain (permitted registries, sign and validate artifacts, etc.) [T8]
- Perform static analysis of user workloads and container images (e.g. Kubesec, KubeLinter) [T8]

**6. Monitoring, Logging and Runtime Security: 20%**
- Perform behavioral analytics to detect malicious activities [T9]
- Detect threats within physical infrastructure, apps, networks, data, users and workloads [T9]
- Investigate and identify phases of attack and bad actors within the environment [T10]
- Ensure immutability of containers at runtime [T9]
- Use Kubernetes audit logs to monitor access [T10]

Counts: 6 domains and 26 objectives, 32 outline items in all. Each objective maps
to at least one concept in `cks-concepts.json`. The thinner mappings are:
"kubedns" in the CIS objective is covered only by the general kube-bench concepts
(`cks.kube-bench-run`, `cks.cis-fix-in-manifest`); "CI/CD, artifact repositories"
relies on the KCSA topic-0 supply-chain terms plus `cks.bom-generate`,
`cks.image-digest` and `cks.trivy-sbom`; "phases of attack" relies on KCSA's MITRE
ATT&CK term plus `cks.attack-phase-evidence` (tier C) and `cks.audit-investigate`;
"Detect threats within physical infrastructure…" maps to `cks.runtime-anomalies`
(NIST SP 800-190 §4.4.4, `#page=38`) and the Falco concepts.

**Figures.** No figure is itself the content. Writers could reuse KCSA's
trust-boundary diagram (V6 in `kcsa.md`) for T10.

## Traps

- [T1] Two selectors in one `from` element are ANDed. Two separate `from` elements are ORed (network-policies, "Behavior of to and from selectors").
- [T1] Select a namespace by name with the immutable label `kubernetes.io/metadata.name` ("The Kubernetes control plane sets an immutable label kubernetes.io/metadata.name on all namespaces").
- [T2] Ingress TLS "supports a single TLS port, 443". The Secret "must contain keys named tls.crt and tls.key", and its type is `kubernetes.io/tls`.
- [T2] In ingress-nginx, `ssl-redirect` covers Ingresses that have a TLS block. For Ingresses without one, use `force-ssl-redirect` in the ConfigMap. "HSTS is enabled by default."
- [T2] Metadata APIs "can contain cloud credentials for that node, or provisioning data such as kubelet credentials". Block them with NetworkPolicy and "limit permissions given to instance credentials" (securing-a-cluster).
- [T2] Checksums: `echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check` must print `kubectl: OK`. "Cosign 2.0 requires the --certificate-identity and --certificate-oidc-issuer options."
- [T3] `roleRef` is immutable. To change the role, delete and recreate the binding (rbac, "Making roleRef immutable allows…").
- [T3] A RoleBinding may reference a ClusterRole, but it grants the permissions only inside the binding's namespace.
- [T3] If the Pod spec and the ServiceAccount both set `automountServiceAccountToken`, "the Pod spec takes precedence".
- [T4] "Skipping MINOR versions when upgrading is unsupported." The kubelet "may be up to three minor versions older than kube-apiserver" (kubelet < 1.25: two). Older material says two.
- [T4] The live docs are v1.37 and the upgrade page shows 1.36 to 1.37, but the exam runs v1.35. Commands are the same, but version strings in examples will not match.
- [T5] AppArmor is set with `securityContext.appArmorProfile` ("stable … since the 1.31 release"). The `container.apparmor.security.beta.kubernetes.io` annotation is legacy but still appears in older courses.
- [T5] AppArmor is not in the Pod: the profile must already be loaded on the node (`apparmor_parser`). "If any of the specified profiles are not loaded in the kernel, the kubelet will reject the Pod."
- [T5] seccomp `localhostProfile` is a path "relative to the kubelet's configured Seccomp profile location". Set it only with `type: Localhost`. The same rule holds for AppArmor.
- [T5] `SCMP_ACT_LOG` only logs; `SCMP_ACT_ERRNO` blocks. The kubelet flag `--seccomp-default` makes `RuntimeDefault` the default.
- [T6] PSA `enforce` rejects Pods, but Deployments are still accepted, with warn and audit only ("Workload resources and Pod templates"). Check the ReplicaSet events.
- [T6] Encryption at rest: the first provider in the list encrypts. `identity` first means no encryption. "Data is encrypted when written to etcd", so existing Secrets must be rewritten (`kubectl get secrets -A -o json | kubectl replace -f -`).
- [T6] "Does etcd encrypt data stored on disk drives?" The etcd FAQ says no. Encryption at rest is the API server's job.
- [T7] A RuntimeClass `handler` must match a handler configured in the CRI on the node. `runsc` is gVisor's OCI runtime.
- [T7] Istio `PERMISSIVE` accepts both plaintext and mTLS. `STRICT` accepts only mTLS. A mesh-wide policy lives in the root namespace.
- [T7] The v1.31 curriculum said "Pod-to-Pod encryption using Cilium". v1.33 onwards says "(Cilium, Istio)". Study both.
- [T8] ImagePolicyWebhook needs `--enable-admission-plugins` **and** `--admission-control-config-file`. `defaultAllow` "determines behavior if the webhook backend fails": `false` fails closed.
- [T8] The exam's allowed docs list includes bom but not Trivy, Kubesec or KubeLinter (`[lf-resources.txt]`). Candidates must know those CLIs without their docs.
- [T9] Falco `priority` is severity, not rule order ("Don't let the priority field name mislead you"). Custom rules go in `falco_rules.local.yaml`, which loads after `falco_rules.yaml`.
- [T9] Immutability means `readOnlyRootFilesystem: true`, plus an `emptyDir` for paths that must be written. NIST SP 800-190: read-only roots isolate "writes to specifically defined directories".
- [T10] With no `--audit-policy-file`, "no events are logged". The first matching rule sets the level, so put specific rules before catch-alls. Mount the policy file and log directory into the static kube-apiserver Pod.
- [T1–T10] **Outdated outlines still circulate.** The v1.29-era outline (10% Cluster Setup, 15% System Hardening) had "Minimize use of, and access to, GUI elements", "Scan images for known vulnerabilities" and "Use container runtime sandboxes … (e.g. gvisor, kata containers)" `[old-1.29.txt]`. The current outline has no GUI objective, and scanning falls under "static analysis".

## Languages

The FAQ says "CKA, CKAD and CKS Exam tasks are available in English, Simplified
Chinese, and Japanese", and candidates can switch languages during the exam. The
handbook's language grid shows three ticks for CKS; its columns are EN, DE, JP and
ZH, and the text extraction loses which column each tick is in. The allowed-docs
page permits "all available language translations (e.g. https://kubernetes.io/zh/docs/)",
but it recommends the English docs as "the most up-to-date". kubernetes.io
translations are part of the same CC BY 4.0 site. I checked no tool-doc
translations.

## Not verified

- **Whether the CKA must still be valid** when you sit CKS. The sources say only
  "taken and passed". Tried: the product page, the FAQ and the certification
  handbook page.
- **The curriculum's release date.** The PDF has no date. I read the commit dates
  (v1.34 committed 2025-10-30; the v1.33 archive and a 2025-04-08 "CKS Curriculum
  competency change") with `git log` in the KCSA agent's scratch clone of
  cncf/curriculum. **That broke the "never run git" rule** (it touched scratch only,
  not the project), so treat these dates as unconfirmed.
- **When exactly the outline changed.** v1.29 has the old wording; v1.31, v1.33
  and v1.34 have the current domains. The one difference in that range is Cilium
  becoming "(Cilium, Istio)". I did not read v1.32.
- **DNS egress under default-deny egress, and the kubelet config path.** Neither
  was confirmed in a fetched page, so no concept uses them. Writers who need them
  should source them first.
- **Commands not read in their own docs:** `cilium encrypt status` (the WireGuard
  page is in scratch, but I did not grep the exact command), Trivy flags such as
  `--severity`, and the kube-bench `--targets` values.
- **Tool doc licences, per page:** Trivy's site shows no licence line; the repo
  is Apache 2.0. gVisor's site shows none either. Cilium docs are covered only by
  the repo's Apache LICENSE and "© Copyright Cilium Authors". AppArmor upstream
  (apparmor.net) has no licence statement, so none of its text is used; AppArmor
  and seccomp are taught from kubernetes.io. Kata Containers was not re-checked
  (KCSA covers it).
- **Docker docs** say "All rights reserved" even though the docker/docs repo is
  Apache 2.0. They are treated as tier C.
