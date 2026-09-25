# Research brief: Certified Kubernetes Administrator (CKA)

Slug: `cka`. Family prefix: `cka`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task. Saved pages
and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/cka/`
(file names are given as `[file]`). kubernetes.io pages the KCNA deck already
used were fetched again, so that anchors and licence footers could be checked.
Every anchor in `cka-concepts.json` was checked against the saved HTML of its page.

**Prerequisite deck.** `prerequisiteDecks: ["kcna"]`. Topic 0 is the KCNA
deck. `cka-terms.json` starts with 160 KCNA terms, registered at topic 0 with
their `k8s.*` concepts. They cover architecture, objects, Pods, controllers,
scheduling, Services, RBAC, storage, autoscaling and basic debugging. CKA
builds on these without new primers. Its new terms (topics 1 to 12) are the
administrator's tools and procedures.

## Topics

| Topic | Name | Main curriculum source |
|---|---|---|
| T1 | kubectl working techniques | Supports every domain. The exam is performance-based. |
| T2 | Installing a cluster with kubeadm | Cluster Architecture, Installation & Configuration |
| T3 | Cluster lifecycle, HA and etcd | Cluster Architecture, Installation & Configuration |
| T4 | RBAC and cluster access | Cluster Architecture, Installation & Configuration |
| T5 | Extension interfaces, CRDs, Helm and Kustomize | Cluster Architecture, Installation & Configuration |
| T6 | Deployments, configuration and autoscaling | Workloads & Scheduling |
| T7 | Scheduling, resources and admission | Workloads & Scheduling |
| T8 | Pod connectivity, Services and CoreDNS | Services & Networking |
| T9 | Network policies, Ingress and Gateway API | Services & Networking |
| T10 | Storage | Storage |
| T11 | Troubleshooting clusters and nodes | Troubleshooting |
| T12 | Troubleshooting workloads, Services and resource usage | Troubleshooting |

Troubleshooting carries 30% of the marks but has only two topics of its own.
Diagnosing a fault needs the whole deck, and T11 and T12 hold the diagnostic
procedures themselves.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation, with CNCF. The curriculum is a CNCF publication. | "The CKA was created by the Linux Foundation and the Cloud Native Computing Foundation (CNCF)…" https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/ `[lf-cka.txt]`. The curriculum cover reads "A Cloud Native Computing Foundation (CNCF) Publication" `[CKA_Curriculum.txt]` | No |
| Format | Online, proctored, performance-based, on a command line | "This exam is an online, proctored, performance-based test that requires solving multiple tasks from a command line running Kubernetes." (product page) | Rarely |
| Task count | 15 to 20 tasks | "The exams consist of 15-20 performance-based tasks." https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad `[tips-cka-ckad.txt]` | Sometimes |
| Time | 2 hours | "Candidates have 2 hours to complete the tasks." (product page). "Candidates are allowed 2 hours to complete the CKA, CKAD and CKS Exams." https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad `[faq-cka-ckad.txt]` | Sometimes |
| Pass mark | 66% | "For the CKA Exam, a score of 66% or above must be earned to pass." (FAQ) | Sometimes |
| Results | Within 24 hours | "…a score report will be sent to the candidate via email within 24 hours from the time that the exam was completed." (FAQ) | Rarely |
| Kubernetes version | v1.35 | "The exam is based on Kubernetes v1.35." (product page). "The CKA exam environment is currently running Kubernetes v1.35" (FAQ) | **Often** |
| Version policy | Follows each minor release | "The CKA exam environment will be aligned with the most recent K8s minor version within approximately 4 to 8 weeks of the K8s release date." (product page and FAQ) | Policy is stable. The version it points to changes often. |
| Curriculum version | v1.35 (`CKA_Curriculum_v1.35.pdf`) | The product page links `CKA_Curriculum_v1.35.pdf`. The README: "The document major and minor version … match the version of Kubernetes." https://github.com/cncf/curriculum `[README.md]` | **Often** (renamed with each release) |
| Prerequisites | None | "There are no pre-requisites for this exam." (product page) | Rarely |
| Level | Intermediate | "Experience Level: Intermediate" (product page) | Rarely |
| Retake | One retake included | Product page: "Two exam attempts", "One Retake". FAQ: "When eligible, we do offer a retake for those who do not pass the first time, regardless of why." | Sometimes |
| Eligibility window | 12 months | "12-months to schedule & take the exam"; "12 Month Exam Eligibility" (product page) | Sometimes |
| Validity | 2 years; renew by passing again | "CKA, CKAD, and CKS Certifications are valid for 2 years. (NOTE: CKA and CKAD Certifications achieved prior to April 01, 2024 are valid for 3 years)." "Candidates have the option to retake and pass the exam to renew their certification." (FAQ) | Sometimes |
| CKS link | CKS extends CKA | "…earning or recertifying the Certified Kubernetes Security Specialist (CKS) certification on or after June 18, 2026, will automatically extend your Certified Kubernetes Administrator (CKA) certification." (FAQ) | Sometimes |
| Simulator | Two Killer.sh sessions, 36 h each, 17 questions each | "You will have two simulation attempts (36 hours of access for each attempt from the start of activation). Each CKA simulator session has 17 questions…" (product page). "Exam Simulator access is not included in CKA-SINGLE … Exam Registrations" (FAQ) | Sometimes |
| Allowed resources | kubernetes.io/docs, kubernetes.io/blog, helm.sh/docs, and Gateway API docs (CKA only) | "Kubernetes Documentation https://kubernetes.io/docs", "Kubernetes Blog", "Helm Documentation https://helm.sh/docs", "CKA only: Gateway API Documentation https://gateway-api.sigs.k8s.io" https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed `[resources-allowed.txt]` | Sometimes |
| Exam environment | ssh to a designated host; `kubectl` with `k` alias | "You must complete each task in this exam on a designated host." "kubectl with k alias and Bash autocompletion", "yq", "curl and wget", "man" (tips page) | Sometimes |
| Price | $445 exam only; $625 with THRIVE-ONE; $645 with LFS258 | "1. Certification exam only – $445" … "3. Certification exam + Kubernetes Fundamentals (LFS258) course – $645" (product page) | **Often** |

## Naming

- **Marks, from the owner's own list.** The Linux Foundation lists as
  registered trademarks "Certified Kubernetes Administrator®", "Certified
  Kubernetes®" and "Kubernetes®" (https://www.linuxfoundation.org/legal/trademarks,
  under "The Linux Foundation has the following registered trademarks in the
  United States and/or other countries") `[lf-trademarks.txt]`. "Certified
  Kubernetes Administrator and Design (color)" is listed among the marks with
  "registrations pending or trademarks in use". The abbreviation "CKA" is not
  on the list.
- **Usage terms** (https://www.linuxfoundation.org/trademark-usage/)
  `[lf-trademark-usage.txt]`: "You may make fair use of word marks to make
  true factual statements. But fair use does not permit you to state or imply
  that the owner of a mark produces, endorses, or supports your company,
  products, or services. Even when making fair use of a trademark, you should
  acknowledge the owner of the trademark with a trademark notice…". Also:
  "Any use of registered trademarks … should include the ® symbol immediately
  after the first usage"; "A trademark should not be used as part of your
  product name"; "A mark should not be … abbreviated"; "Do not refer to a
  product or service as being certified under any of The Linux Foundation's
  marks unless…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list,
  so the general rule and the "Everyone else" notice apply, as in the
  Prometheus brief. §4's own example title is this exam: `[Site name] deck for
  the Certified Kubernetes Administrator (CKA) exam`. At first use, write the
  full name with ®: "Certified Kubernetes Administrator® (CKA)". The LF itself
  uses "CKA", and the usage page says marks should not be abbreviated. So give
  the full mark before "CKA" on every page, and never use "CKA" alone as a
  product name ("CKA Flashcards"). Never write "Certified Kubernetes" about
  the deck: that is a separate registered mark. Plain text only, with no logo.
- **Deck notice text:**
  > Certified Kubernetes Administrator (CKA) and Kubernetes are registered
  > trademarks of The Linux Foundation. This deck is independent and is not
  > affiliated with, sponsored, endorsed or approved by The Linux Foundation
  > or the Cloud Native Computing Foundation.
- **Attribution for tier-B text.** kubernetes.io: "© 2026 The Kubernetes
  Authors | Documentation Distributed under CC BY 4.0". CNCF curriculum: CC BY
  4.0+. Helm docs: "© Helm Authors 2026. Documentation distributed under
  CC-BY-4.0." Note that CONTENT-POLICY.md §3 lists Helm documentation as
  Apache 2.0, but the helm.sh footer says CC BY 4.0, and the footer is what was
  read here. Gateway API docs: the site footer links "License" to
  kubernetes-sigs/gateway-api `LICENSE`, which is Apache License 2.0. Keep that
  licence notice with the attribution.

## Outline

The domain order is the LF product page's. The PDF puts the same domains in
two columns (`#page=2`), with identical weights and objectives. The PDF heads
one domain "Servicing and Networking". The product page heads it "Services &
Networking", and this brief uses that name. Objectives are quoted from the
product page. The curriculum is CC BY 4.0, so it may be quoted.

**1. Storage: 10%**
- Implement storage classes and dynamic volume provisioning [T10]
- Configure volume types, access modes and reclaim policies [T10]
- Manage persistent volumes and persistent volume claims [T10]

**2. Troubleshooting: 30%**
- Troubleshoot clusters and nodes [T11]
- Troubleshoot cluster components [T11]
- Monitor cluster and application resource usage [T12]
- Manage and evaluate container output streams [T12]
- Troubleshoot services and networking [T12]

**3. Workloads & Scheduling: 15%**
- Understand application deployments and how to perform rolling update and rollbacks [T6]
- Use ConfigMaps and Secrets to configure applications [T6]
- Configure workload autoscaling [T6]
- Understand the primitives used to create robust, self-healing, application deployments [T6] (probes, restartPolicy and ReplicaSets are KCNA topic 0)
- Configure Pod admission and scheduling (limits, node affinity, etc.) [T7]

**4. Cluster Architecture, Installation & Configuration: 25%**
- Manage role based access control (RBAC) [T4]
- Prepare underlying infrastructure for installing a Kubernetes cluster [T2]
- Create and manage Kubernetes clusters using kubeadm [T2]
- Manage the lifecycle of Kubernetes clusters [T3]
- Implement and configure a highly-available control plane [T3]
- Use Helm and Kustomize to install cluster components [T5]
- Understand extension interfaces (CNI, CSI, CRI, etc.) [T5]
- Understand CRDs, install and configure operators [T5]

**5. Services & Networking: 20%**
- Understand connectivity between Pods [T8]
- Define and enforce Network Policies [T9]
- Use ClusterIP, NodePort, LoadBalancer service types and endpoints [T8]
- Use the Gateway API to manage Ingress traffic [T9]
- Know how to use Ingress controllers and Ingress resources [T9]
- Understand and use CoreDNS [T8]

Counts: 5 domains and 27 objectives, 32 outline items in all. Every objective
maps to concepts in `cka-concepts.json`. T1 (kubectl techniques) maps to no
single objective. It holds the procedures every task depends on, plus the
exam-environment rules (tier C, facts only).

## Traps

- [T1] The docs have moved past the exam. kubernetes.io/releases lists 1.37.0 (released 2026-08-26) as the latest release, and the kubeadm pages say "These instructions are for Kubernetes 1.37". The exam runs v1.35. Writers should avoid features that are newer than v1.35. For example, some resize features on the in-place resize page are "Alpha since Kubernetes v1.37".
- [T1] Old curricula still circulate. The v1.31 PDF lists "Use Kubeadm to install a basic cluster", "Know how to scale applications", "Awareness of manifest management and common templating tools", "Know how to configure and use CoreDNS" and "Choose an appropriate container network interface plugin". The v1.32 PDF is byte-identical to v1.35 (same MD5), so the current outline dates from v1.32. It added Helm/Kustomize, Gateway API, CRDs/operators, extension interfaces and workload autoscaling.
- [T3] "Implement etcd backup and restore" is an explicit objective in v1.31 but not in v1.32 to v1.35. It falls under "Manage the lifecycle", so keep it, but do not tell learners it is a named objective.
- [T3] etcd restore: "The usage of etcdctl for restoring has been deprecated since etcd v3.5.x … It is recommended to utilize etcdutl instead." Older material uses `etcdctl snapshot restore`. After restoring to a new directory, point `etcd.yaml`'s `etcd-data` hostPath at it.
- [T2] Package repositories: "The legacy package repositories (apt.kubernetes.io and yum.kubernetes.io) have been deprecated and frozen starting from September 13, 2023." Use pkgs.k8s.io. The repository is per minor version, so an upgrade first changes the repository.
- [T3] "Skipping MINOR versions when upgrading is unsupported." Upgrade the control plane first, then the workers. `kubeadm upgrade apply` is for the first control-plane node and `kubeadm upgrade node` for the rest.
- [T3] "kubeadm upgrade also automatically renews the certificates that it manages on this node." "Client certificates generated by kubeadm expire after 1 year." The CA default is 10 years.
- [T3] `kubectl drain` fails on DaemonSet Pods unless given `--ignore-daemonsets`. It respects PodDisruptionBudgets. Pods with `nodeName` set still run on a drained node.
- [T3] The `--certificate-key` for joining extra control-plane nodes "expires after two hours".
- [T2] "The default behavior of a kubelet is to fail to start if swap memory is detected on a node."
- [T2] The kubelet and the runtime must use the same cgroup driver. "The systemd cgroup driver is recommended if you use cgroup v2."
- [T2] "Cluster DNS (CoreDNS) will not start up before a network is installed." Pending CoreDNS Pods after `kubeadm init` mean the CNI is missing, not that CoreDNS is broken.
- [T2] Before `kubeadm init`, "The kubelet is now restarting every few seconds, as it waits in a crashloop for kubeadm to tell it what to do." This is expected.
- [T4] "After you create a binding, you cannot change the Role or ClusterRole that it refers to." Delete the binding and create it again.
- [T4] A RoleBinding that refers to a ClusterRole grants those rights only in the binding's namespace.
- [T4] Test a ServiceAccount with `--as system:serviceaccount:<ns>:<name>`, not the bare name.
- [T6] "A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, .spec.template) is changed." "Other updates, such as scaling the Deployment, do not trigger a rollout." `CHANGE-CAUSE` comes from the `kubernetes.io/change-cause` annotation.
- [T6] "ConfigMaps consumed as environment variables are not updated automatically and require a pod restart." subPath mounts get no updates either.
- [T6] Secrets "are, by default, stored unencrypted in the API server's underlying data store (etcd)". Base64 is not encryption.
- [T6] HPA: "if some of the Pod's containers do not have the relevant resource request set, CPU utilization for the Pod will not be defined and the autoscaler will not take any action". HPA also needs Metrics Server. The downscale stabilization window defaults to 5 minutes (300 s).
- [T7] "LimitRange validations occur only at Pod admission stage, not on running Pods."
- [T7] With a cpu or memory quota in a namespace, every new Pod must set requests or limits for it, or "the quota system may reject pod creation".
- [T7] Setting `nodeName` bypasses the scheduler, so taints and affinity are not checked.
- [T8] The Endpoints API is "Deprecated since Kubernetes v1.33". Use EndpointSlices, as in `kubectl get endpointslices`. Older guides use `kubectl get endpoints`.
- [T8] "The CoreDNS Service is named kube-dns in the metadata.name field." Candidates look for a Service called `coredns`.
- [T8] LoadBalancer needs an external provider: "Kubernetes does not directly offer a load balancing component". It stays pending on a bare kubeadm cluster.
- [T9] NetworkPolicy has no effect unless the network plugin supports enforcement. Policies "are additive", and "order of evaluation does not affect the policy result".
- [T9] One `from` peer holding both `namespaceSelector` and `podSelector` means AND. Two peers mean OR.
- [T9] "The Ingress API has been frozen", and "The Kubernetes project recommends using Gateway instead of Ingress." Gateway API "is an add-on", made of custom resources, and needs an implementation. Its docs are allowed in the CKA only.
- [T10] "The Recycle reclaim policy is deprecated." Dynamically provisioned PVs take the class's `reclaimPolicy`, which "defaults to Delete".
- [T10] `storageClassName: ""` binds only to PVs with no class. A missing field gets the default StorageClass.
- [T10] "Volume access modes do not enforce write protection once the storage has been mounted."
- [T11] Pods on a NotReady node "are evicted after five minutes of NotReady status". On a kubeadm node, control-plane components are static Pods from `/etc/kubernetes/manifests`, so fix them by editing the manifest, not with `kubectl edit`.
- [T12] "If a pod is evicted from the node, all corresponding containers are also evicted, along with their logs." `kubectl logs --previous` shows a restarted container's last run. Log rotation defaults are `containerLogMaxSize` 10Mi and `containerLogMaxFiles` 5.
- [T5] helm.sh says "Helm 4 is out!", but the "Using Helm" page "has not yet been updated for Helm 4". Which Helm version the exam uses is not stated.

## Languages

The CKA is offered in English, Japanese and Simplified Chinese. The FAQ says
"CKA, CKAD and CKS Exam tasks are available in English, Simplified Chinese,
and Japanese", and the handbook's grid ticks EN, JP and ZH for CKA
(https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language).
Chinese needs a "Chinese-Only version of the Exam", and a Japanese version is
registered separately. The allowed-resources page permits "all available
language translations (e.g. https://kubernetes.io/zh/docs/)" of the
Kubernetes docs, which share the docs' CC BY 4.0 licence. The product page
has a Japanese version (menu link, not opened). The CKA page on the
allowed-resources site does not repeat a note it gives for another exam: that
localized docs "may not reflect the latest changes".

## Not verified

- **Exam Helm, Gateway API and etcd versions.** No page fetched states them.
  Only the Kubernetes version (v1.35) is stated. Writers should teach the
  commands on the allowed docs pages and avoid version-specific flags.
- **Why the exam is still on v1.35.** The docs list 1.37.0 (2026-08-26) as the
  latest release. The "4 to 8 weeks" alignment would suggest v1.36. I did not
  fetch the v1.36 release date, so I cannot say whether the LF is behind its
  own policy.
- **Versioned docs for v1.35.** I did not check whether kubernetes.io keeps a
  v1.35 docs site. The allowed-resources page names only
  `https://kubernetes.io/docs`.
- **Retake rules beyond "One Retake" / "Two exam attempts"**, such as waiting
  periods or free-retake conditions ("When eligible"). The candidate handbook
  was not fetched.
- **Old-curriculum dates.** The v1.31 PDF was found by guessing its file name
  under `old-versions/`. The directory listing (github.com HTML) was not
  fetched, so I do not know when the outline changed, only that v1.32 has the
  current one.
- **Per-task weighting and partial credit.** Not stated on any page fetched.
- **The CKA reseller FAQ and the LF "CKA.pdf" (2024/10) linked from the
  product page.** Not fetched.
- **Common exam-lore facts I did not find stated in sources:** a
  `kubectl get events --sort-by` recipe (not in the quick reference fetched), and
  `/readyz` and `/livez` endpoints. These were left out of the concept list.
