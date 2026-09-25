# Research brief: Istio Certified Associate (ICA)

Slug: `istio-ica`. Family prefix: `istio`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task. Saved copies
and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/istio-ica/`
(file names are given as `[file]`). The 50 istio.io pages were fetched live
from `https://istio.io/latest/docs/…` and saved as `docs/<path>.html` and
`.txt`. The `.txt` files mark each heading with its anchor as `## {#anchor}`.
Every anchor in the concept list was checked against the saved HTML.

**Prerequisite deck.** `prerequisiteDecks: ["kcna"]`. Topic 0 is KCNA. I read
`research/sources/kcna/manifest.json` and `kcna-terms.json`. KCNA already
teaches, with no new primer here: service mesh, service proxy, proxy, Istio,
sidecar container, Pod, Service, Deployment, namespace, label,
CustomResourceDefinition, DaemonSet, admission controller, ServiceAccount, Helm
chart, kubectl, Ingress, ingress controller, Gateway API, API gateway, load
balancer, http, grpc, DNS, port, mtls, digital certificate, zero trust,
authentication, authorization, CNI, observability and service discovery. These
33 entries are at topic 0 in `istio-ica-terms.json`, with KCNA's own spelling,
concept ids and sources. The KCNA manifest already holds the CNCF glossary
pages for service mesh, service proxy, API gateway, canary and blue-green
deployment and zero trust, and the kubernetes.io pages for Gateway API, Ingress
and sidecar containers. Writers reuse those.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Architecture and data plane modes | Installation, Upgrades, and Configuration (20%), the background part |
| T2 | Installation, profiles and upgrades | Installation, Upgrades, and Configuration (20%) |
| T3 | Routing and traffic shifting | Traffic Management (35%), part 1 |
| T4 | Ingress, egress and external services | Traffic Management (35%), part 2 |
| T5 | Resilience and fault injection | Traffic Management (35%), part 3 |
| T6 | Authentication and mTLS | Securing Workloads (25%), part 1 |
| T7 | Authorization and edge TLS | Securing Workloads (25%), part 2 |
| T8 | Troubleshooting | Troubleshooting (20%) |

T1 exists because "Installing Istio in Sidecar or Ambient Mode" cannot be
taught without istiod, Envoy, ztunnel and waypoints. Traffic Management is the
largest domain, so it has three topics.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is a CNCF publication. | Curriculum cover: "A Cloud Native Computing Foundation (CNCF) Publication" `[ICA_Curriculum.txt]`. Product page footer: "© 2026 Linux Foundation - Education" `[lf-ica.txt]`. The product page says the exam was "Originally developed and maintained by Tetrate" (https://training.linuxfoundation.org/certification/istio-certified-associate-ica/) | No |
| What it is | Foundational Istio knowledge plus the ability to set Istio up | "A certified ICA will confirm their foundational knowledge of Istio principles, terminology, and best practices and demonstrate their ability to set up Istio." (product page) | No |
| Level | Pre-professional; listed as Intermediate | "The ICA is a pre-professional certification designed for engineers, CI/CD practitioners or anyone with special interests in Istio." and "Experience Level: Intermediate" (product page) | Rarely |
| Prerequisites | None | "There are no pre-requisites for this exam." (product page) | Rarely |
| Current version | New curriculum since 12 August 2025. Exam environment on Istio v1.26. | "The changes to the Istio Certified Associate (ICA Exam) were released on Tuesday, August 12, 2025 00:00 UTC." and "The ICA environment will be upgraded to v1.26" (https://training.linuxfoundation.org/istio-certified-associate-ica-program-changes/). The product page adds: "The ICA exam has changed… All exams will now be tested on the new curriculum." | **Often** (Istio version) |
| Format | Performance-based: tasks on the Linux command line, remotely proctored | "The exam is delivered online and consists of performance-based tasks (problems) to be solved on the command line running Linux." (https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-ica). The product page says "This exam is an online, proctored, performance-based and multiple-choice exam." but its sidebar says "Performance-based Exam". See "Not verified". | Sometimes |
| Task count | 15 to 20 tasks | "The exam consists of 15-20 performance-based tasks." (important-instructions-ica) | Sometimes |
| Time | 2 hours | FAQ: "Candidates are allowed 120 minutes to complete the ICA Exam." (https://docs.linuxfoundation.org/tc-docs/certification/frequently-asked-questions-ica). Instructions: "Candidates have 2hrs to complete the ICA exam." Product page: "Duration of Exam 2 Hours" | Sometimes |
| Pass mark | 68% | "For the ICA Exam, a score of 68% or above must be earned to pass." (faq-ica) | Sometimes |
| Results | Within 24 hours | "Results will be emailed 24 hours from the time that the exam is completed." (important-instructions-ica) | Rarely |
| Tools in the exam | kubectl (alias `k`), istioctl, yq | "all SSH hosts have the following additional command-line tools pre-installed and pre-configured: kubectl with k alias and Bash autocompletion; istioctl with Bash autocompletion; yq for YAML processing" (important-instructions-ica) | Sometimes |
| Docs allowed in the exam | istio.io docs and blog, kubernetes.io docs | "Istio Documentation https://istio.io/docs/", "Istio Blog https://istio.io/blog/", "Kubernetes Documentation: https://kubernetes.io/docs/" (https://docs.linuxfoundation.org/tc-docs/certification/certification-resources-allowed#istio-certified-associate-ica) | Sometimes |
| Retake | One retake included | Product page: "One Retake" | Sometimes |
| Eligibility window | 12 months | Product page: "12 Month Exam Eligibility" | Sometimes |
| Validity | 2 years; 3 years if earned before 1 April 2024. Renew by passing again. | "ICA Certifications are valid for 2 years. (NOTE: ICA Certifications achieved prior to April 01, 2024 are valid for 3 years)." and "Candidates have the option to retake and pass the exam to renew their certification." (faq-ica) | Sometimes |
| Price | $250 exam only; $299 with LFS245; $495 with THRIVE-ONE | Product page: "1. Certification exam only – $250", "3. Certification exam + Istio Service Mesh Essentials (LFS245) course – $299", THRIVE-ONE bundle "– $495" | **Often** (the page showed "Save 40% on ICA with the THRIVE-ONE Annual Subscription") |
| Curriculum version and date | None printed | The PDF has no version or date `[ICA_Curriculum.txt]`. The repo README's versioning rule is written for the Kubernetes curricula. | See "Not verified" |
| Istio version in the docs | 1.31.1 | istio.io/latest/docs footer: "Version Istio 1.31.1"; version menu "v1.31 (Current)" `[docs home, istio-docs-home.txt]` | **Often** |

## Naming

- **Marks, from the owner's own list.** The Linux Foundation lists as registered
  trademarks "Istio®", "Istio Certified Associate®", "Envoy®" and "EnvoyCon®"
  (https://www.linuxfoundation.org/legal/trademarks, under "The Linux
  Foundation has the following registered trademarks in the United States
  and/or other countries"). The same page lists "Istio Design (sailboat - black
  and white)", which is the logo. We do not use it.
- **Usage terms.** The istio.io footer's "Trademarks" link goes to
  https://www.linuxfoundation.org/legal/trademark-usage, which says: "You may
  make fair use of word marks to make true factual statements. But fair use
  does not permit you to state or imply that the owner of a mark produces,
  endorses, or supports your company, products, or services. Even when making
  fair use of a trademark, you should acknowledge the owner of the trademark
  with a trademark notice…". Also: "Do not refer to a product or service as
  being certified under any of The Linux Foundation's marks unless your company
  has successfully undergone the requisite compliance testing and has explicit
  authorization…".
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's list,
  so the general rule and the "Everyone else" notice apply. Our brand leads, the
  exam name is plain text, there is no logo (the sailboat is a mark), and the
  page footer carries the notice. Title: `[Site name] deck for the Istio
  Certified Associate (ICA) exam`. Never "ICA Flashcards", never "official",
  and never "Istio-certified". Topic names that say "Istio" or "Envoy" only
  describe content, and the notice covers them. URL path
  `/decks/istio/istio-ica/` is fine; no mark in a domain.
- **Deck notice text:**
  > Istio, Istio Certified Associate and Envoy are registered trademarks of The
  > Linux Foundation. This deck is independent and is not affiliated with,
  > sponsored, endorsed or approved by The Linux Foundation or the Cloud Native
  > Computing Foundation.
- **Attribution for tier-B text.** istio.io docs: "© the Istio Authors",
  Apache License 2.0 (keep the licence notice with the attribution, per §3).
  The CNCF curriculum: CC BY 4.0.
- **istio.io licence, in detail.** The site is built from the `istio/istio.io`
  repository, whose `LICENSE` file is the "Apache License Version 2.0, January
  2004" `[istio.io-LICENSE]`. Its README states no other licence for content.
  The istio.io footer reads "© 2026 the Istio Authors." and links "Terms and
  Conditions" to https://www.linuxfoundation.org/legal/terms. Those terms say
  "Except as otherwise provided, Content on this site… is licensed under a
  Creative Commons Attribution 3.0 License". That clause speaks of "this site"
  (linuxfoundation.org), so I treat the repo's Apache 2.0 licence as the one
  that governs istio.io. Both are open, so the docs are tier B either way.

## Outline

The domain order is the curriculum PDF's and the product page's. The PDF
outline is on `#page=2`, in two columns, so the text extraction interleaves
them `[ICA_Curriculum.txt]`. The product page and the program-changes page
give the same objectives and weights. The PDF and the program-changes page
title domain 1 "Installation, Upgrades, and Configuration"; the product page
says "Installation, Upgrade & Configuration". Objectives are quoted exactly.

**1. Installation, Upgrades, and Configuration: 20%**
- Installing Istio with istioctl or Helm [T2]
- Installing Istio in Sidecar or Ambient Mode [T1] [T2]
- Customizing your Istio Installation [T2]
- Upgrading Istio (Canary, In-Place) [T2]

**2. Traffic Management: 35%**
- Configuring Ingress and Egress Traffic [T4]
- Configuring Routing within a Service Mesh [T3]
- Defining Traffic Policies with Destination Rules [T3] (resilience fields in [T5])
- Configuring Traffic Shifting [T3]
- Connecting In-Mesh Workloads to External Workloads and Services [T4]
- Using Resilience Features (circuit breaking, failover, outlier detection, timeouts, retries) [T5]
- Using Fault Injection [T5]

**3. Securing Workloads: 25%**
- Configuring Authorization [T7]
- Configuring Authentication (mTLS, JWT) [T6]
- Securing Edge Traffic with TLS [T7]

**4. Troubleshooting: 20%**
- Troubleshooting Configuration [T8]
- Troubleshooting the Mesh Control Plane [T8]
- Troubleshooting the Mesh Data Plane [T8]

Counts: 4 domains and 17 objectives, 21 outline items in all. Every objective
maps to concepts in `istio-ica-concepts.json`. Main mappings:
"Installing Istio in Sidecar or Ambient Mode" maps to `istio.sidecar-mode`,
`istio.ambient-mode`, `istio.sidecar-vs-ambient`, `istio.ztunnel`,
`istio.waypoint`, `istio.auto-injection`, `istio.ambient-install` and
`istio.ambient-helm-components`. "Connecting In-Mesh Workloads to External
Workloads and Services" maps to `istio.serviceentry`, `istio.se-location`,
`istio.se-resolution`, `istio.outbound-policy`, `istio.external-http` and
`istio.external-https`. "Troubleshooting the Mesh Control Plane" maps to
`istio.istiod-connectivity`, `istio.proxy-status`, `istio.sync-states`,
`istio.istiod-accepts`, `istio.logging-scopes` and `istio.pods-not-created`.
"Troubleshooting the Mesh Data Plane" maps to `istio.proxy-config`,
`istio.envoy-rejects`, `istio.503-after-dr`, `istio.tls-mistakes`,
`istio.ztunnel-state` and `istio.waypoint-troubleshoot`.

**Figure.** The Istio architecture diagram is
https://istio.io/latest/docs/ops/deployment/architecture/arch.svg, embedded on
the Architecture page. It is tier B (Apache 2.0, istio/istio.io), attributed to
the Istio Authors. It is attached to `istio.architecture`.

**Exam style note for writers.** The exam is hands-on, so application cards
should ask for the resource, field or command that solves a task. They should
not ask for definitions alone. The allowed docs are istio.io and kubernetes.io,
so the cards should follow the task pages' YAML shapes.

**Budget method.** The budget in `istio-ica-budget.json` counts one primer or
fact per concept. A set with more than 3 members gets one card per member. Each
core concept gets one more application card. Total 453 cards. Traffic
Management (T3–T5) gets 164, domain 1 (T1–T2) 121, Securing Workloads (T6–T7)
102 and Troubleshooting (T8) 66.

## Traps

- [T1] Ambient is not "sidecars off": L4 goes through the per-node ztunnel (a DaemonSet) and L7 needs a waypoint proxy. The dataplane-modes page separates L4 and L7 features.
- [T1] Ambient is enabled by the label `istio.io/dataplane-mode=ambient`, and waypoints are attached with `istio.io/use-waypoint`. Sidecar injection uses `istio-injection=enabled`. Candidates mix the three up.
- [T1] Traffic between ambient proxies uses HBONE, which "includes encryption with mTLS" (PeerAuthentication reference).
- [T2] Profiles: default, demo, minimal, remote, empty, preview and ambient (config-profiles page). `minimal` is "same as the default profile, but only the control plane components are installed". `demo` is for showcasing, not production.
- [T2] Canary (revision) upgrades may jump two minor versions ("e.g. upgrading directly from version 1.15 to 1.17"). In-place upgrades need "each intermediate minor release", and the installed version must be "no more than one minor version less than the upgrade version".
- [T2] Automatic injection happens "at pod creation time", so pods that already exist get no sidecar until they are recreated.
- [T2] Revision tags (stable revision labels) exist because "relabeling namespaces when moving them to a new revision can be tedious and error-prone" (canary page).
- [T2] Helm uninstall: "do not remove the Istio CRDs — deleting CRDs causes Kubernetes to cascade-delete all" Istio resources (Helm install page).
- [T2] The Gateway API CRDs are a separate prerequisite for ambient installs. Istio "intends to make it the default API for traffic management in the future", so the task pages show both Istio APIs and Gateway API tabs.
- [T3] A VirtualService's routing rules "are evaluated in order", the "first rule… being given highest priority". End with a rule that has no match condition, so unmatched traffic still has a default destination ("more about routing rules").
- [T3] Subsets used in a VirtualService are defined in a DestinationRule. "503 errors after setting destination rule" should appear only "if you disabled automatic mutual TLS during install" (network-issues page). Candidates blame the routing rules instead.
- [T3] "The reserved word mesh is used to imply all the sidecars in the mesh." When `gateways` is omitted, `mesh` is used. "If a list of gateway names is provided, the rules will apply only to the gateways", so list `mesh` as well to cover in-mesh traffic.
- [T3] Traffic policies set at subset level override the DestinationRule's top-level policy.
- [T4] `outboundTrafficPolicy` defaults to ALLOW_ANY. With REGISTRY_ONLY, "unknown outbound traffic will be dropped", so a ServiceEntry is needed.
- [T4] An egress gateway is not a security boundary on its own: "Istio cannot securely enforce that all egress traffic actually flows through the egress gateways." Use NetworkPolicy as well.
- [T4] TLS origination (the proxy starts TLS to the external service) is not the same as SNI passthrough at ingress (the gateway does not end TLS).
- [T5] HTTP timeouts are "disabled" by default (VirtualService reference). Retries have defaults, so check `HTTPRetry` for the current values.
- [T5] Locality failover needs outlier detection: "This is required in order for failover to function properly" (failover task).
- [T5] Fault injection and retry/timeout policies on the same VirtualService do not combine as expected. The network-issues page has a section on this.
- [T5] Circuit breaking is set in the DestinationRule (connectionPool, outlierDetection), not in the VirtualService. Retries and timeouts go in the VirtualService.
- [T6] PeerAuthentication modes: UNSET "Inherit from parent, if has one. Otherwise treated as PERMISSIVE"; PERMISSIVE accepts plaintext or mTLS; STRICT requires mTLS. DISABLE "is not supported" in ambient mode.
- [T6] Peer authentication (service-to-service, mTLS) vs request authentication (end-user, JWT). They are different CRDs.
- [T6] RequestAuthentication alone rejects invalid tokens but allows requests with no token ("requests without token" are accepted). An AuthorizationPolicy is needed to require one.
- [T6] A mesh-wide peer authentication policy "should not have a selector and must be applied in the root namespace". "A workload-specific peer authentication policy takes precedence over a namespace-wide policy" (authn-policy task).
- [T7] AuthorizationPolicy evaluation order is "CUSTOM, DENY, and then ALLOW", and several policies on one workload apply "additively". Authorization needs no switching on: it is "available after installation" ("implicit enablement"). The `allow-nothing` example is the usual deny-by-default start.
- [T7] `principals` (from mTLS peer identity) vs `requestPrincipals` (from JWT). Principal-based fields depend on mutual TLS.
- [T7] HTTP-only fields on TCP ports make a policy misbehave (security-issues page: "Make sure you are not using HTTP-only fields on TCP ports").
- [T7] In ambient mode, L7 authorization needs a waypoint; ztunnel enforces L4 only.
- [T7] Gateway TLS modes (Gateway reference) include PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL and OPTIONAL_MUTUAL. Edge TLS uses `credentialName` for a Kubernetes secret. Candidates confuse the server-side Gateway modes with the client-side DestinationRule `tls.mode`.
- [T8] `istioctl proxy-status` shows SYNCED, NOT SENT or STALE per xDS type. `istioctl proxy-config` inspects one Envoy's listeners, routes, clusters, endpoints and secrets. `istioctl analyze` checks configuration before or after it is applied.
- [T8] Route rules that "have no effect on ingress gateway requests" usually mean the VirtualService is not bound to the Gateway.
- [T8] Common TLS mistakes (network-issues page): sending HTTPS to an HTTP port, gateway mismatch, double TLS, 404s with several gateways on the same TLS certificate, and SNI routing when no SNI is sent.
- [T1–T8] **Version drift.** The exam environment is Istio 1.26 (program-changes page). istio.io/latest is 1.31.1. The exam allows `istio.io/docs/`. Cards should follow the current docs but avoid details that changed after 1.26 (see "Not verified"). Prep material from before 12 August 2025 follows the old curriculum.

## Languages

The sources disagree. The ICA FAQ says "ICA Exam tasks are available in
English, Simplified Chinese, and Japanese." The LF handbook's language grid
(https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language)
ticks only English for "Istio Certified Associate (ICA)". The exam's allowed
resources include "all available language translations" of the documentation.
istio.io's footer offers English, Español, 中文 and Українська. Those
translations sit in the same Apache 2.0 repository, but I did not check how
complete they are. Build in English.

## Not verified

- **Multiple choice or not.** The product page says "performance-based and
  multiple-choice". The instructions page describes only "15-20
  performance-based tasks", and the product sidebar says "Performance-based
  Exam". Tried: product page, program-changes page, FAQ, instructions. No page
  describes a multiple-choice part.
- **Exam languages.** The FAQ and the handbook grid disagree (see above). Tried
  both pages; no third source.
- **What changed between Istio 1.26 and 1.31.** I read only the current
  (1.31) docs. I did not fetch release notes or the 1.26 archive docs.
  Defaults and ambient features may differ. Writers should check any
  version-sensitive card against the release notes.
- **Curriculum version and date.** The ICA PDF has no version or date, and the
  GitHub API was refused ("GitHub access to this repository is not enabled for
  this session"). The PDF's last-change date is unknown. The program-changes
  page gives 12 August 2025 as the date the new curriculum took effect.
- **Retake rules beyond "One Retake"**, such as waiting periods: not on the
  pages fetched. I did not open the Candidate Handbook's retake section.
- **istio.io licence by page.** The Apache 2.0 licence rests on the istio.io
  repo's LICENSE file. No page-level licence notice was found. The LF terms
  linked in the footer name CC BY 3.0 for linuxfoundation.org content.
- **Default retry values.** The VirtualService reference was fetched, but I did
  not pin the default attempt count. Writers read `#HTTPRetry` directly.
- **Whether the exam uses Gateway API or Istio APIs** for tasks. No source says.
  The docs show both.
