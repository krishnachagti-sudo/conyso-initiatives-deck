# Research brief: Certified Kubernetes Application Developer (CKAD)

Slug: `ckad`. Family prefix: `ckad`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task, or in a KCNA
source cached in `research/sources/kcna/` (fetched 2026-09-25) and re-used as
BRIEF.md asks. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/ckad/`
(file names given as `[file]`). kubernetes.io pages were read as Markdown from
`raw.githubusercontent.com/kubernetes/website` (branch `main`) in `md/`. Every
page used as a concept source was also fetched live (`live/`), and **every
`#anchor` in `ckad-concepts.json` was confirmed present in the live HTML**.

**Prerequisite deck.** `prerequisiteDecks: ["kcna"]`. Topic 0 is the KCNA deck.
`ckad-terms.json` opens with 96 KCNA terms at topic 0 (their KCNA concept ids and
sources unchanged), then 15 new terms. Thirty-one KCNA manifest pages are
re-used as concept sources (paths in `ckad-sources.json` point to the KCNA
cache). CKAD is a hands-on exam, so most new concepts are procedures (the
kubectl, YAML, Helm and Docker steps) and rules, not new vocabulary.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Container images | Application Design and Build (20%), objective 1 |
| T2 | Workload resources and imperative kubectl | Application Design and Build, objective 2; kubectl skills for every domain |
| T3 | Multi-container Pods and volumes | Application Design and Build, objectives 3–4 |
| T4 | Deployment strategies, Helm and Kustomize | Application Deployment (20%) |
| T5 | Observability, debugging and API deprecations | Application Observability and Maintenance (15%) |
| T6 | Extending the API, access control and resources | Application Environment, Configuration and Security (25%), part 1 |
| T7 | ConfigMaps, Secrets, ServiceAccounts and security contexts | Application Environment, Configuration and Security, part 2 |
| T8 | Services, Ingress and NetworkPolicies | Services and Networking (20%) |

The 25% domain is split in two. T2 also holds the imperative-generation
procedures (`--dry-run=client -o yaml`, `kubectl create …`, `kubectl explain`)
that a performance-based exam relies on in every domain.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation with CNCF; curriculum is a CNCF publication | "The CKAD was created by the Linux Foundation and the Cloud Native Computing Foundation (CNCF)…" `[lf-ckad.txt]` https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/ ; PDF cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[CKAD_Curriculum.txt]` | No |
| What it tests | Design, build and deploy cloud-native apps | "certifies that candidates can design, build and deploy cloud-native applications for Kubernetes" (LF page) | No |
| Current version | Kubernetes v1.35; curriculum file `CKAD_Curriculum_v1.35.pdf` | LF page: "The exam is based on Kubernetes v1.35." and "Software Version: Kubernetes v1.35". FAQ: "The CKAD exam environment is currently running Kubernetes v1.35" https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks | **Often** |
| Version rule | Follows the newest minor release after 4–8 weeks | "…aligned with the most recent K8s minor version within approximately 4 to 8 weeks of the K8s release date." (LF page and FAQ). README: "The document major and minor version … match the version of Kubernetes." `[README.md]` | Rule: rarely |
| Format | Online, remotely proctored, performance-based, command line | "an online, proctored, performance-based test that consists of a set of performance-based tasks (problems) to be solved in a command line" (LF page); "proctored remotely via streaming audio, video, and screen sharing feeds" https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad | Rarely |
| Task count | 15–20 tasks | "The exams consist of 15-20 performance-based tasks." (tips page) | Sometimes |
| Time | 2 hours | "Candidates have 2 hours to complete the CKA and CKAD exam." (tips); "Duration of Exam 2 hours" (LF page) | Rarely |
| Pass mark | 66% | "For the CKAD Exam, a score of 66% or above must be earned to pass." (FAQ) | Sometimes |
| Scoring and results | Automatic; within 24 hours | "exams are scored automatically … a score report will be sent … within 24 hours" (FAQ) | Rarely |
| Retake | One retake included | LF page: "One Retake", "Two exam attempts"; CNCF page: "includes one free retake" https://www.cncf.io/training/certification/ckad/ ; FAQ: "When eligible, we do offer a retake for those who do not pass the first time" | Sometimes |
| Eligibility window | 12 months | "12 Month Exam Eligibility"; "12-months to schedule & take the exam" (LF page) | Sometimes |
| Validity | 2 years; 3 years if earned before 1 April 2024 | FAQ: "CKA, CKAD, and CKS Certifications are valid for 2 years. (NOTE: CKA and CKAD Certifications achieved prior to April 01, 2024 are valid for 3 years)." | Changed in 2024 |
| Renewal | Pass the exam again before expiry | FAQ: "retake and pass the exam to renew", "must be completed prior to the certification expiration date", "remain current for a further 2 years". The CARE extension quoted in the FAQ covers CKS → CKA only. | Sometimes |
| Prerequisites | None | "There are no pre-requisites for this exam." (LF page) | Rarely |
| Level | Intermediate | "Experience Level: Intermediate" (LF page) | Rarely |
| Simulator | Two Killer.sh sessions, 36 h each, 17 questions each | LF page: "two simulation attempts (36 hours of access for each attempt…). Each CKAD simulator session has 17 questions". FAQ: not included in "CKAD-SINGLE" registrations | Sometimes |
| Allowed resources | kubernetes.io/docs, kubernetes.io/blog, helm.sh/docs, the Quick Reference box | "Kubernetes Documentation https://kubernetes.io/docs", "Kubernetes Blog", "Helm Documentation https://helm.sh/docs"; "using the search function … is allowed, but you must not open external search results." Gateway API docs are "CKA only". https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed | Sometimes |
| Environment | Each task on a named SSH host | "You must complete each task in this exam on a designated host." "Nested ssh is not supported". Hosts have "`kubectl` with `k` alias and Bash autocompletion", "`yq` for YAML processing", "curl and wget", "man". `sudo -i` for elevated rights. Copy/paste in the terminal is Ctrl+Shift+C / Ctrl+Shift+V. (tips page) | Sometimes |
| Price | $445 exam only; $625 with THRIVE-ONE; $645 with LFD259 | LF page: "1. Certification exam only – $445" … "3. Certification exam + Kubernetes for Developers (LFD259) course – $645". CNCF page: "The cost is $445" | **Often** |

## Naming

- **Marks, from the owner's own list.** Under "The Linux Foundation has the
  following registered trademarks in the United States and/or other
  countries": "Certified Kubernetes Application Developer®", "Certified
  Kubernetes®", "Kubernetes®", "CNCF®", "Cloud Native Computing Foundation®",
  "Helm®" (https://www.linuxfoundation.org/legal/trademarks). The abbreviation
  "CKAD" is not on the list. Kustomize is not on it either.
- **Usage terms.** https://www.linuxfoundation.org/trademark-usage/: "You may
  make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces,
  endorses, or supports your company, products, or services. Even when making
  fair use of a trademark, you should acknowledge the owner of the trademark
  with a trademark notice…"; "a ™ should not be changed to an ® in a trademark
  notice by anyone other than the owner"; "Do not refer to a product or service
  as being certified under any of The Linux Foundation's marks unless…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation falls under
  "Everyone else". Our brand leads, the exam name is plain text, no logo, and the
  footer notice. Title: `[Site name] deck for the Certified Kubernetes
  Application Developer (CKAD) exam`. Never "CKAD Flashcards", never "official",
  and never call the deck or its users "Certified Kubernetes" anything. "Helm"
  in the T4 name states a fact about the content. The notice covers it.
- **Deck notice text:**
  > Certified Kubernetes Application Developer, Kubernetes and Helm are
  > registered trademarks of The Linux Foundation. This deck is independent and
  > is not affiliated with, sponsored, endorsed or approved by The Linux
  > Foundation or the Cloud Native Computing Foundation.
- **Attribution for tier-B text.** kubernetes.io (docs and blog): "© 2026 The
  Kubernetes Authors | Documentation Distributed under CC BY 4.0". CNCF
  curriculum: CC BY 4.0. Helm docs: "© Helm Authors 2026. Documentation
  distributed under CC-BY-4.0." Docker docs: docker/docs README, "Copyright
  2013-2026 Docker, Inc., released under the Apache 2.0 license". Keep the
  licence notice with the attribution.
- **Policy discrepancy to fix.** CONTENT-POLICY.md §3 lists "Helm documentation
  (Apache 2.0)". The helm.sh footer says CC-BY-4.0, and the helm/helm-www
  `LICENSE` file is MIT ("The MIT License (MIT) Copyright (c) 2017 Microsoft
  Corporation"). All three are tier B, but cards should cite CC BY 4.0 for
  helm.sh text. Docker's site footer says "All rights reserved" while the
  source repo is Apache 2.0. I tiered it B from the repo statement. Writers
  should paraphrase Docker text anyway, as a margin of safety.

## Outline

The PDF (`#page=2`; all objectives are on that page) lays the domains out in two
columns. The order below follows the LF product page, which lists the same
items. Objectives are quoted from the PDF.

**1. Application Design and Build: 20%**
- Define, build and modify container images [T1]
- Choose and use the right workload resource (Deployment, DaemonSet, CronJob, etc.) [T2]
- Understand multi-container Pod design patterns (e.g. sidecar, init and others) [T3]
- Utilize persistent and ephemeral volumes [T3]

**2. Application Deployment: 20%**
- Use Kubernetes primitives to implement common deployment strategies (e.g. blue/green or canary) [T4]
- Understand Deployments and how to perform rolling updates [T4]
- Use the Helm package manager to deploy existing packages [T4]
- Kustomize [T4]

**3. Application Observability and Maintenance: 15%**
- Understand API depreciations [T5] (sic in the PDF; the LF page reads "deprecations")
- Implement probes and health checks [T5]
- Use built-in CLI tools to monitor Kubernetes applications [T5]
- Utilize container logs [T5]
- Debugging in Kubernetes [T5]

**4. Application Environment, Configuration and Security: 25%**
- Discover and use resources that extend Kubernetes (CRD, Operators) [T6]
- Understand authentication, authorization and admission control [T6]
- Understand requests, limits, quotas [T6]
- Understand ConfigMaps [T7]
- Define resource requirements [T6]
- Create & consume Secrets [T7]
- Understand ServiceAccounts [T7]
- Understand Application Security (SecurityContexts, Capabilities, etc.) [T7]

**5. Services and Networking: 20%**
- Demonstrate basic understanding of NetworkPolicies [T8]
- Provide and troubleshoot access to applications via services [T8]
- Use Ingress rules to expose applications [T8]

Counts: 5 domains and 24 objectives, 29 outline items in all. Every objective
maps to concepts in `ckad-concepts.json`. Main mappings: container images →
`ckad.dockerfile` … `ckad.docker-save`; workload choice → `ckad.choose-workload`,
Job/CronJob rules; "Understand ServiceAccounts" → `ckad.default-serviceaccount`,
`ckad.automount-opt-out`, `ckad.kubectl-create-token`; "Use built-in CLI tools"
→ `ckad.kubectl-top-pod`, `ckad.kubectl-get-events`, `ckad.kubectl-describe-pod`;
"authentication, authorization and admission" → `ckad.request-stages`,
`ckad.auth-can-i`, `ckad.mutating-vs-validating`.

**Scope, next to CKA.** Stay inside the lines above. Gateway API, cluster
install and upgrade, etcd, node troubleshooting, scheduling (taints, affinity)
and PV administration are CKA's. The resources-allowed page gives Gateway API
docs as "CKA only". Where a KCNA term covers such an item, it stays at topic 0
and gets no CKAD concept. The one exception is the trap that Ingress is frozen
and Gateway is recommended (`ckad.ingress-frozen`).

**Figures.** None is required. The multi-container patterns blog post
(kubernetes.io/blog/2025/04/22/multi-container-pods-overview/) is CC BY 4.0
under the site footer. Writers may reproduce its pattern diagrams, if any,
with attribution. I did not check whether it has images.

## Traps

- [T1] `CMD` vs `ENTRYPOINT`: the reference has a section on how the two interact. Exec form vs shell form changes signal handling. `EXPOSE` does not publish a port.
- [T1] No tag means `:latest`. The default `imagePullPolicy` depends on the tag (images page, "Image pull policy"). Candidates assume `IfNotPresent` everywhere.
- [T1] The exam hosts' container build tool is not stated in the fetched LF pages (only kubectl, yq, curl, wget and man are listed). Teach `docker build -t`, `docker tag` and `docker save` from Docker docs, and note that the task will name the tool.
- [T2] Generate YAML with `kubectl … --dry-run=client -o yaml > file.yaml`, then edit. Writing manifests from memory wastes exam time. `kubectl explain` gives field paths offline.
- [T2] Every task runs on a named host and often in a named namespace. Forgetting `ssh <host>` or `-n <ns>` (or `kubectl config set-context --current --namespace`) is the classic lost task.
- [T2] Job Pods must use `restartPolicy: Never` or `OnFailure`. `Always` is invalid for Jobs.
- [T2] CronJob `concurrencyPolicy` values: `Allow` (default), `Forbid`, `Replace`.
- [T3] Native sidecars are init containers with `restartPolicy: Always`. The feature is "active by default since Kubernetes v1.29" (sidecar page). Older material models sidecars as ordinary second containers.
- [T3] Init containers run one at a time and must finish. Sidecars keep running and do not block Job completion.
- [T3] `emptyDir` data "is safe across container crashes" but is "deleted permanently" when the Pod leaves the node (volumes page).
- [T4] Only a change to `.spec.template` triggers a rollout. Scaling does not. `maxSurge` and `maxUnavailable` default to 25% (`"The default value is 25%."`, deployment page).
- [T4] Kubernetes has no canary or blue/green object. Canary is two Deployments whose labels the one Service selector matches, with replica counts setting the ratio ("You can tweak the number of replicas of the stable and canary releases to determine the ratio", management page). Blue/green switches the Service selector.
- [T4] Helm: `--set` beats `-f/--values`. With several `-f` files, "the rightmost file will take precedence". `helm uninstall` removes the release record unless `--keep-history` is given (using_helm).
- [T4] **Helm 4 is out.** helm.sh shows "Version: 4.3.0", and using_helm warns "This page has not yet been updated for Helm 4". Most prep material is Helm 3. The exam's Helm version is not stated.
- [T4] Kustomize is built into kubectl: `kubectl apply -k <dir>`, `kubectl kustomize <dir>`. Generated ConfigMap and Secret names get a hash suffix.
- [T5] API removals: the deprecation guide lists removals by release, and the newest listed is v1.32 (flowcontrol `v1beta3`). `kubectl convert` is a separate plugin ("Install `kubectl convert` plugin", install-kubectl-linux).
- [T5] The docs run ahead of the exam. kubernetes.io's releases page (KCNA cache, fetched 2026-09-25) lists 1.37.0 released 2026-08-26, but the exam still states v1.35. Features newer than 1.35 in the live docs may not exist in the exam cluster.
- [T5] A failed liveness probe restarts the container. A failed readiness probe only removes the Pod from Service endpoints. A startup probe allows `failureThreshold × periodSeconds` before liveness starts.
- [T5] `kubectl logs --previous` shows the crashed instance. `-c` is required for multi-container Pods. Init container logs also need `-c <init-name>`.
- [T5] `kubectl top` needs the metrics server (KCNA topic 0).
- [T6] A CRD's `metadata.name` must be `<plural>.<group>`.
- [T6] `kubectl auth can-i … --as system:serviceaccount:<ns>:<name>` checks a ServiceAccount's rights (authorization page example: `--as system:serviceaccount:dev:dev-sa`).
- [T6] Over the memory limit, the container is OOM-killed. Over the CPU limit, it is throttled. A request no node can fit leaves the Pod Pending.
- [T6] With a cpu/memory ResourceQuota, "users must specify requests or limits … otherwise, the quota system may reject pod creation" (resource-quotas page). A LimitRange can supply defaults. `Mi` (mebibytes) is not `M`, and `m` means milli.
- [T7] Secrets are base64-encoded, not encrypted: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store" (secret page).
- [T7] ConfigMaps mounted as volumes update automatically. Environment variables taken from them do not, and neither do `subPath` mounts. "You must create the `ConfigMap` object before you reference it in a Pod specification", unless the reference is `optional`.
- [T7] Container-level `securityContext` overrides the Pod level. Capabilities are set in the container's `securityContext` ("Set capabilities for a Container"). `automountServiceAccountToken` on the Pod spec takes precedence over the ServiceAccount's.
- [T7] `kubectl create token <sa>` gives "a time-limited API token" (`--duration` to change it). A long-lived token needs a Secret with the `kubernetes.io/service-account.name` annotation (configure-service-account).
- [T8] `port` (Service), `targetPort` (container) and `nodePort` (default range 30000-32767) get confused. A Service with no EndpointSlices almost always has a selector that does not match Pod labels.
- [T8] NetworkPolicies only work with a plugin that enforces them. Policies are additive allow-lists. `podSelector` and `namespaceSelector` in one `from` element mean AND; as two elements they mean OR.
- [T8] An Ingress needs an ingress controller. Every path needs a `pathType` (`Exact`, `Prefix`, `ImplementationSpecific`). The ingress page states "The Ingress API has been frozen" and recommends Gateway, but CKAD's outline still names Ingress.

## Languages

The FAQ says: "CKA, CKAD and CKS Exam tasks are available in English, Simplified
Chinese, and Japanese." Candidates can switch during the exam. The LF language
page ticks three languages for CKAD and says to register for the
"Chinese-Only" or "Japanese" version of the exam. Its column headers are
English, German (LFCS only), Japanese and Simplified Chinese. The
resources-allowed page permits localized kubernetes.io docs (e.g.
`kubernetes.io/zh/docs/`) but notes that they "may not reflect the latest
changes". I did not open any localized page, so their licence footer is unchecked.

## Not verified

- **Container build tool on the exam hosts.** The tips page lists kubectl, yq,
  curl, wget and man only. I found no statement of docker, podman or buildah.
  The concepts use Docker CLI docs.
- **Helm version on the exam hosts.** Not stated on any LF page fetched.
- **`ckad.helm-namespace`** (Helm acts in the current namespace unless `-n`):
  not found in using_helm. The note in the concept says so.
- **Blue/green mechanics.** The only source is the CNCF glossary entry (KCNA
  cache). No kubernetes.io page fetched describes the selector switch. Writers
  should confirm against the Service page.
- **Job `backoffLimit` default and CronJob history-limit defaults.** Concepts
  point to the sections. I did not read the values themselves.
- **Secret type count.** `ckad.secret-types` budgets 8 members. Writers should
  count the rows of the table on the page.
- **Two kubernetes.io task pages returned 404** as Markdown and were dropped:
  `tasks/configure-pod-container/configure-persistent-volume-storage` and
  `tasks/access-application-cluster/ingress-minikube`. The concept pages cover
  both topics.
- **Curriculum PDF history.** Only the v1.35 filename was probed (v1.33, v1.34
  and v1.36 returned 404). The GitHub API directory listing returned nothing
  through the proxy, so I could not list older files or dates.
- **`kubectl create ingress` and `kubectl create secret docker-registry`
  reference pages** were not fetched. The images page covers the latter.
