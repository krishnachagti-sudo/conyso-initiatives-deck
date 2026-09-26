# Research brief: Cilium Certified Associate (CCA)

Slug: `cncf-cca`. Family prefix: `cca`. Researched 26 September 2026.
Every fact below was read in a source fetched during this task, or in a
source cached for the prerequisite decks. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/cncf-cca/`
(file names are given as `[file]`). The 86 docs.cilium.io pages were fetched
from `https://docs.cilium.io/en/stable/…`. They are saved as
`docs/<path>.html` and `.txt`, and the `.txt` files mark each section anchor
as `## {#anchor}`. A script checked every anchor in the concept list against
the saved pages.

**Prerequisite decks.** `prerequisiteDecks: ["kcna", "cka"]`. Topic 0 is
KCNA and CKA. I read `kcna-terms.json`, `cka-terms.json` and
`research/sources/kcna/manifest.json`. The deck does not re-teach these 68
terms. They are listed at topic 0 in `cncf-cca-terms.json` with the
prerequisite decks' own spelling, concept ids and sources: CNI, ebpf, kernel,
NetworkPolicy, Ingress, ingress controller, IngressClass, Gateway API,
GatewayClass, Gateway, HTTPRoute, GRPCRoute, HTTPRoute filters, service mesh,
service proxy, sidecar container, API gateway, mtls, tls / mtls, encryption,
digital certificate, zero trust, kube-proxy, Service, ClusterIP, NodePort,
LoadBalancer, EndpointSlice, service discovery, CoreDNS, DNS, dual-stack,
network model, ip address, cidr, port, http, grpc, load balancer, firewall,
host, node, cluster, control plane, etcd, kube-apiserver, Pod, label,
selector, namespace, DaemonSet, Deployment, CustomResourceDefinition, custom
resource, operator pattern, ConfigMap, Secret, kubectl, kubeconfig context,
kubeadm, Helm chart, Helm release, cgroup, multitenancy, observability, three
pillars, Prometheus and metric types.
Cached sources reused: the CNCF glossary page for service mesh
(`research/sources/kcna/glossary-cncf-io-service-mesh-66d0e5.txt`), which
covers sidecar versus sidecarless. The kcna and cka caches also hold the
kubernetes.io pages for NetworkPolicy, Ingress, Gateway API, Service,
virtual IPs and network plugins.

## Topics

| Topic | Name | Curriculum domain |
|---|---|---|
| T1 | Cilium's role and components | Architecture (20%), part 1 |
| T2 | IPAM, routing and kube-proxy replacement | Architecture (20%), part 2 |
| T3 | eBPF | eBPF (10%) |
| T4 | Identity and policy enforcement | Network Policy (18%), part 1 |
| T5 | Policy rules and policy types | Network Policy (18%), part 2 |
| T6 | Ingress, Gateway API and service mesh | Service Mesh (16%), part 1 |
| T7 | Encryption and mutual authentication | Service Mesh (16%), part 2 |
| T8 | Hubble observability | Network Observability (10%) |
| T9 | Installation and the Cilium CLI | Installation and Configuration (10%) |
| T10 | Cluster Mesh | Cluster Mesh (10%) |
| T11 | BGP and external networking | BGP and External Networking (6%) |

Architecture, Network Policy and Service Mesh are the three largest
domains, so each gets two topics. T11 also takes masquerading and the
egress gateway, because the objective "Egress Connectivity Requirements"
needs them.

## Exam facts

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | The Linux Foundation (Training & Certification). The curriculum is published in the CNCF repository. | Product page footer: "© 2026 Linux Foundation - Education" `[lf-cca.txt]` (https://training.linuxfoundation.org/certification/cilium-certified-associate-cca/). The curriculum PDF's back cover carries the Cilium and CNCF logos `[cca-page-3.png]` | No |
| What it is | Knowledge of connecting, securing and observing Kubernetes clusters with Cilium | "The Cilium Certified Associate (CCA) exam confirms a user's knowledge of connecting, securing, and observing Kubernetes clusters using Cilium." (product page) | No |
| Level | Entry level; listed as Beginner | "The CCA is an entry-level certification designed for platform or cloud engineers with interests in networking, security, and observability." and "Experience Level: Beginner" (product page) | Rarely |
| Prerequisites | None, but Kubernetes and networking knowledge is recommended | "While there are no pre-requisites for this exam, it is recommended that the user have Kubernetes and basic networking knowledge (examples include understanding the 7-layer model and basic function of protocols such as TCP, UDP, DNS and HTTP)." (product page) | Rarely |
| Format | Online, proctored, multiple choice | "This exam is an online, proctored, multiple-choice exam." and "Multiple Choice Exam" (product page) | Rarely |
| Question count | 60 | "The multiple-choice exam is delivered online and consists of 60* multiple-choice questions." The asterisk marks the exception: "* CNPA exam consists of 85 multiple-choice questions." (https://docs.linuxfoundation.org/tc-docs/certification/important-instructions-mc) `[instructions-mc.txt]` | Sometimes |
| Time | 90 minutes | Product page: "Duration of Exam 90 minutes". FAQ: "Candidates are allowed 90 minutes to complete Multiple Choice Exams, with the exception of CNPA." (https://docs.linuxfoundation.org/tc-docs/certification/faq-mc) `[faq-mc.txt]` | Sometimes |
| Pass mark | 75% | "A score of 75% or above must be earned to pass the Multiple Choice Exam." (faq-mc) | Sometimes |
| Results | Within 24 hours | "exams are scored automatically and barring any exceptions or technical difficulties, a score report will be sent to the candidate via email within 24 hours from the time that the exam was completed." (faq-mc) | Rarely |
| Retake | One retake (two attempts) | Product page: "One Retake" and "✔ Two exam attempts" | Sometimes |
| Eligibility window | 12 months | Product page: "12 Month Exam Eligibility" and "✔ 12-months to schedule & take the exam" | Sometimes |
| Validity | 2 years. Renew by passing again before expiry. | "Certifications are valid for 2 years." "Candidates have the option to retake and pass the exam to renew their certification." "Certification Renewal must be completed prior to the certification expiration date." (faq-mc). The CARE programme's automatic renewal lists only KCNA and KCSA. | Sometimes |
| Price | $250 exam only; $495 with the THRIVE-ONE annual subscription | Product page: "$250 Exam only" and "$495 Exam + Full Access Subscription" | **Often** (the page also showed "Save 40% on CCA with the THRIVE-ONE Annual Subscription") |
| Curriculum version and date | No version is printed. The PDF metadata gives 7 October 2024. | `pdfinfo`: "CreationDate: Mon Oct 7 14:22:00 2024 UTC" `[CCA_Curriculum.pdf]`. The README's versioning rule ("match the version of Kubernetes") is written for the Kubernetes exams. | See "Not verified" |
| Cilium docs version | 1.20.2 (stable) | docs.cilium.io/en/stable page title: "Cilium 1.20.2 documentation"; footer "Last updated on Sep 15, 2026." `[docs-home.txt]` | **Often** |

**Can the content be used?** Yes. The LF Terms of Use contain no AI or
scraping ban `[lf-terms.txt]`. The Certification Agreement forbids
disclosing exam content ("reconstruction through memorization, study
guides") and forbids help "using AI or ChatGPT" *during* the exam
`[cert-agreement.txt]`. It says nothing against building study material from
public documentation. robots.txt: docs.cilium.io has `Disallow: /` with
`Allow: /en/stable` and `Allow: /en/latest`, so only those paths were
fetched. ebpf.io allows all agents except a few named bots. docs.linuxfoundation.org
allows all. No host in `src/no-fetch.json` was requested.

## Naming

- **Marks, from the owner's own list.** Under "The Linux Foundation has the
  following registered trademarks in the United States and/or other
  countries", the Linux Foundation lists "Cilium®" and "Cilium Certified
  Associate®", with "Kubernetes®", "CNCF®" and "Envoy®"
  (https://www.linuxfoundation.org/legal/trademarks) `[lf-trademarks.txt]`.
  The logo list includes "eBPF and Design (Color), US Reg. No. 8423881".
  That is a logo, and we do not use it. "Hubble" is not on the list.
- **Usage terms.** "You may make fair use of word marks to make true factual
  statements. But fair use does not permit you to state or imply that the
  owner of a mark produces, endorses, or supports your company, products, or
  services. Even when making fair use of a trademark, you should acknowledge
  the owner of the trademark with a trademark notice…". Also: "Do not refer
  to a product or service as being certified under any of The Linux
  Foundation's marks unless your company has successfully undergone the
  requisite compliance testing and has explicit authorization…"
  (https://www.linuxfoundation.org/legal/trademark-usage).
- **How CONTENT-POLICY.md §4 applies.** The Linux Foundation is in §4's
  list, so the general rule and the "Everyone else" notice apply. Our brand
  leads and the exam name is plain text, with no logo (the Cilium hexagons
  and the eBPF bee are marks). The page footer carries the notice. Title:
  `[Site name] deck for the Cilium Certified Associate (CCA) exam`. Never
  "CCA Flashcards", never "official", and never "Cilium-certified". Topic
  names that say "Cilium" or "Envoy" only describe content, and the notice
  covers them. A URL path such as `/decks/cilium/cncf-cca/` is fine. No mark
  goes in a domain.
- **Deck notice text:**
  > Cilium, Cilium Certified Associate, Envoy and Kubernetes are registered
  > trademarks of The Linux Foundation. This deck is independent and is not
  > affiliated with, sponsored, endorsed or approved by The Linux Foundation
  > or the Cloud Native Computing Foundation.
- **Attribution for tier-B text.**
  - Cilium docs: "© Copyright Cilium Authors", Apache License 2.0 (keep the
    licence notice with the attribution, per §3).
  - ebpf.io: "© 2026 eBPF.io authors", CC BY 4.0.
  - CNCF curriculum, CNCF glossary and kubernetes.io: CC BY 4.0.
- **Cilium docs licence, in detail.** docs.cilium.io is built from the
  `Documentation/` folder of `cilium/cilium` (Sphinx config
  `Documentation/conf.py`: `copyright = u'Cilium Authors'`). There is no
  `Documentation/LICENSE`: the request returned 404. The repository `LICENSE`
  is "Apache License Version 2.0, January 2004". The README says: "The
  Cilium user space components are licensed under the Apache License,
  Version 2.0. The BPF code templates are dual-licensed under the General
  Public License, Version 2.0 (only) and the 2-Clause BSD License". The
  docs are not BPF templates, so the repository's Apache 2.0 licence
  governs them. Tier B. See "Not verified".

## Outline

The domain order is the curriculum PDF's (`#page=2`). The PDF text is
drawn as vector outlines, so pdftotext gets nothing. I rendered the page and
read it as an image (`cca-page-2.png`, OCR in `cca-ocr-2.txt`). The product
page gives the same domains, weights and objectives. Objectives are quoted
from the product page, which has no typos. The PDF spells "Undertand the
Benefits of Gateway API over Ingress", and the product page spells
"Interpret Cilium Network Polices and Intent". Here the product page's
"Polices" is corrected.

**1. Architecture: 20%**
- Understand the Role of Cilium in Kubernetes Environments [T1]
- Cilium Architecture [T1]
- IP Address Management (IPAM) with Cilium [T2]
- Cilium Component Roles [T1]
- Datapath Models [T2] (eBPF hooks in [T3])

**2. Network Policy: 18%**
- Interpret Cilium Network Policies and Intent [T5]
- Understand Cilium's Identity-based Network Security Model [T4]
- Policy Enforcement Modes [T4]
- Policy Rule Structure [T5]
- Kubernetes Network Policies versus Cilium Network Policies [T5]

**3. Service Mesh: 16%**
- Know How to use Ingress or Gateway API for Ingress Routing [T6]
- Service Mesh Use Cases [T6]
- Understand the Benefits of Gateway API over Ingress [T6]
- Encrypting Traffic in Transit with Cilium [T7]
- Sidecar-based versus Sidecarless Architectures [T6]

**4. Network Observability: 10%**
- Understand the Observability Capabilities of Hubble [T8]
- Enabling Layer 7 Protocol Visibility [T8]
- Know How to Use Hubble from the Command Line or the Hubble UI [T8]

**5. Installation and Configuration: 10%**
- Know How to Use Cilium CLI to Query and Modify the Configuration [T9]
- Using Cilium CLI to Install Cilium, Run Connectivity Tests, and Monitor its Status [T9]

**6. Cluster Mesh: 10%**
- Understand the Benefits of Cluster Mesh for Multi-cluster Connectivity [T10]
- Achieve Service Discovery and Load Balancing Across Clusters with Cluster Mesh [T10]

**7. eBPF: 10%**
- Understand the Role of eBPF in Cilium [T3]
- eBPF Key Benefits [T3]
- eBPF-based Platforms versus IPtables-based Platforms [T3]

**8. BGP and External Networking: 6%**
- Egress Connectivity Requirements [T11] (masquerading in [T2])
- Understand Options to Connect Cilium-managed Clusters with External Networks [T11]

Counts: 8 domains and 25 objectives, 33 outline items in all. Every
objective maps to concepts in `cncf-cca-concepts.json`. The main mappings:
- **"Datapath Models"**: `cca.encapsulation`, `cca.native-routing`,
  `cca.encap-vs-native`, `cca.vxlan`, `cca.geneve`, `cca.tunnel-ports`,
  `cca.encap-mtu`, `cca.kube-proxy-replacement` and `cca.socket-lb`.
- **"Interpret Cilium Network Policies and Intent"**: `cca.allow-list-model`,
  `cca.from-to-endpoints`, `cca.entities`, `cca.to-ports`, `cca.l7-http`,
  `cca.tofqdns` and `cca.deny-precedence`. Writers should show a YAML
  policy and ask what it allows.
- **"Service Mesh Use Cases"**: `cca.service-mesh-features`,
  `cca.why-cilium-mesh`, `cca.ciliumenvoyconfig`, `cca.traffic-splitting`
  and `cca.tls-termination`.
- **"Egress Connectivity Requirements"**: `cca.masq-default-egress`,
  `cca.egress-gateway`, `cca.egress-gw-use`, `cca.egress-gw-reqs`,
  `cca.cegp` and `cca.tofqdns`.
- **"Understand Options to Connect Cilium-managed Clusters with External
  Networks"**: `cca.bgp-control-plane`, `cca.bgp-adv-podcidr`,
  `cca.bgp-adv-service`, `cca.lb-ipam`, `cca.l2-announcements` and
  `cca.bgp-vs-l2`.

**Figures** (tier B, Apache 2.0, attributed to the Cilium Authors):
- `_images/cilium-arch.png` on `cca.architecture`
- `_images/native_routing.png` on `cca.native-routing`
- `_images/clustermesh-architecture.svg` on `cca.clustermesh-apiserver`

All three are under https://docs.cilium.io/en/stable/.

**Exam style note for writers.** The exam is multiple choice, so write
recognition and classification cards: which resource, flag, entity or mode
fits a scenario. The objectives are phrased "Know How to Use…", so the CLI
cards still name the exact commands. Those are `cilium install`,
`cilium status --wait`, `cilium connectivity test`, `cilium config set`,
`cilium hubble enable`, `cilium hubble port-forward`, `hubble observe` and
`cilium clustermesh enable`/`connect`/`status`.

**Budget method.** `cncf-cca-budget.json` counts:
- one primer per term;
- one fact per rule, number or procedure;
- one card per member of a set with more than 3 members, and one card for a
  smaller set;
- one contrast per contrast concept;
- one application per core concept.

Then 10% is added to each topic and the result rounded up. There are 262
concepts, 193 of them core. That gives 552 cards before the uplift and 613
after.

## Traps

- [T1] `cilium` (the Cilium CLI, run from outside the cluster through kubeconfig) is not `cilium-dbg` (the debug CLI inside each agent pod, which talks to the local agent's REST API). The component overview warns they "should not be confused".
- [T1] The Cilium Operator "is not in the critical path for any forwarding or network policy decision". If it is down, IPAM for new pods is delayed and kvstore heartbeats fail, but existing traffic keeps flowing.
- [T1] Kubernetes CRDs are the default data store. etcd (kvstore) is optional, used "as an optimization to improve the scalability".
- [T1] Hubble server is "embedded into the Cilium agent". Hubble Relay is the separate component that gives cluster-wide visibility, and the Hubble UI needs Relay.
- [T2] The default IPAM mode is cluster scope ("Cluster Scope (default)"). The Cilium operator assigns PodCIDRs through CiliumNode. In Kubernetes host scope (`ipam: kubernetes`), Kubernetes assigns them through v1.Node.
- [T2] Encapsulation is the default routing mode, and VXLAN is the default protocol. The ports are VXLAN 8472/UDP and Geneve 6081/UDP. Candidates mix these up with WireGuard's 51871/UDP.
- [T2] Native routing needs a network that can route PodCIDRs. `auto-direct-node-routes: true` works only "If all nodes share a single L2 network". Otherwise a BGP daemon is needed.
- [T2] Kube-proxy replacement "depends on the socket-LB feature". East-west load balancing happens at `connect()`, "avoiding the overhead of per-packet NAT".
- [T3] XDP runs "at the earliest point possible in the networking driver", before the stack. The tc hook runs "after the networking stack has done initial processing". Cilium enforces endpoint policy on tc, on the host side of the veth pair.
- [T3] The verifier checks that the program is safe and always runs to completion. JIT turns bytecode into native instructions. eBPF programs cannot call arbitrary kernel functions, only helper functions.
- [T3] Where the kernel lacks an eBPF feature, Cilium falls back to "a legacy iptables implementation" (iptables usage page). "eBPF-based" does not always mean "iptables-free".
- [T3] The iptables contrast is about scale and churn. iptables filters on IP and port, and IPs churn. Cilium enforces on identity and can filter at L7 (intro, "Why Cilium & Hubble?").
- [T4] Enforcement modes: `default` allows everything until a policy selects the endpoint; `always` enforces even with no rules; `never` disables enforcement even when rules exist. They are set with Helm `policyEnforcementMode` or the flag `enable-policy`.
- [T4] Default deny is per direction. A policy with only an `ingress` section makes the endpoint default-deny for ingress, and egress stays open. `enableDefaultDeny: false` opts out, but "does not apply to layer-7 policy".
- [T4] Enforcement is stateful: "If the policy allows A => B then reply packets from B to A are automatically allowed", but B cannot start connections to A.
- [T4] Reserved identities have fixed numbers: `reserved:host` 1, `reserved:world` 2, `reserved:remote-node` 6, and so on. External traffic to a Service can arrive as `reserved:remote-node` rather than `world` in native routing (caveats page).
- [T5] Kubernetes NetworkPolicy covers L3/L4. CiliumNetworkPolicy covers "Layers 3-7". CiliumClusterwideNetworkPolicy is the same spec with no namespace. Cilium enforces all of them at once, and mixing them "may lead to unintended policy allow behavior".
- [T5] Deny policies "take precedence over allow policies", including Kubernetes NetworkPolicy allows.
- [T5] L7 violations are not drops: "an HTTP 403 access denied is sent back… or a DNS REFUSED response". L3/L4 denials are silent drops by default (`--policy-deny-response` defaults to `none`).
- [T5] `toFQDNs` learns IPs from DNS answers through the DNS proxy. It "requires Cilium to be configured with --enable-l7-proxy=true and an L7 policy allowing DNS requests (rules.dns YAML block)".
- [T5] Adding any L4 rule blocks ICMP that is not tied to an allowed connection ("ICMP will be blocked unless it's related…").
- [T5] The `world` entity is "identical to allowing to CIDR 0.0.0.0/0". The `cluster` entity includes host, remote-node, init, ingress, health, kube-apiserver and unmanaged endpoints.
- [T5] Host policies are CiliumClusterwideNetworkPolicies with a `nodeSelector` instead of an `endpointSelector`. They support L3/L4 and L7 DNS rules only.
- [T6] Cilium Ingress and Gateway API both need `kubeProxyReplacement=true` and the L7 proxy. By default they create a `LoadBalancer` Service. Ingress uses `ingressClassName: cilium`.
- [T6] Ingress load balancer modes: `dedicated` (one LB per Ingress, avoids path conflicts) and `shared` (one LB for all). Changing the mode can cut active connections.
- [T6] Sidecarless does not mean "no proxy". Cilium uses eBPF for L3/L4 and Envoy for L7, run by the agent or as the `cilium-envoy` DaemonSet. There is no per-pod sidecar, so pods show `1/1 READY`, not `2/2`.
- [T6] The benefits of Gateway API over Ingress are native traffic splitting and header changes, protocols beyond HTTP/HTTPS, no vendor annotations (so it is portable), and role-oriented personas. `ingress2gateway` is "experimental and is not recommended for production".
- [T7] Same-node traffic is never encrypted by IPsec or WireGuard; this is "intended". There is also a window in which traffic to endpoints Cilium has not discovered yet goes out unencrypted. Strict mode or egress policy closes it.
- [T7] IPsec keys are a pre-shared key in the `cilium-ipsec-keys` Secret, which must be "in the same namespace as Cilium". WireGuard nodes make their own key pairs and publish the public key in the `network.cilium.io/wg-pub-key` annotation on CiliumNode.
- [T7] Mutual authentication (beta) uses SPIFFE/SPIRE and runs the handshake "out-of-band". On its own it does not encrypt: "users must enable encryption".
- [T8] By default Hubble shows L3/L4 flows. L7 visibility comes from an L7 CiliumNetworkPolicy rule, and that rule "not only enables visibility but also restrict[s]" traffic.
- [T8] With Helm, "Hubble is enabled by default", but Relay needs `hubble.relay.enabled=true`. `cilium hubble enable` turns on Hubble and Relay. `--ui` or `hubble.ui.enabled=true` adds the UI. `cilium hubble port-forward` exposes Relay on 127.0.0.1:4245.
- [T9] Helm values become agent and operator arguments in the `cilium-config` ConfigMap. `cilium config set` restarts agent pods by default; `--restart=false` defers the restart.
- [T9] After installing Cilium on a running cluster, pods started before Cilium are not managed by it until restarted (Helm install page, "Restart unmanaged Pods").
- [T10] Cluster Mesh requirements: the same datapath mode everywhere, Cilium versions no more than one minor release apart, unique non-overlapping PodCIDRs, node-to-node IP connectivity, and a unique cluster name plus cluster ID (1–255).
- [T10] Pod-to-pod traffic between clusters goes "directly between nodes… without requiring any additional proxy or gateway". The clustermesh-apiserver syncs state only. All meshed clusters form "a single trust domain".
- [T10] A global Service is a Service "with identical name and namespace in each cluster" plus `service.cilium.io/global: "true"`. `service.cilium.io/shared: "false"` stops a cluster sharing its backends. `service.cilium.io/affinity` takes `local`, `remote` or `none` (default). The MCS-API (ServiceExport/ServiceImport, `clusterset.local`) is the Kubernetes-standard alternative.
- [T10] `maxConnectedClusters` (255 by default, or 511) can only be set at install time.
- [T11] BGP Control Plane "does not program the datapath", so it is not for reachability inside the cluster. By default its routers do not listen for incoming sessions.
- [T11] LB IPAM only assigns LoadBalancer IPs, and it is "dormant" until a CiliumLoadBalancerIPPool exists. BGP or L2 announcements must advertise the IPs. L2 announcements (beta) answer ARP/NDP from one node per service, for networks without BGP.
- [T11] The egress gateway needs BPF masquerading and kube-proxy replacement. Its purpose is predictable source IPs for external firewalls. By default, pod traffic that leaves the cluster is masqueraded to the node IP.
- [T1–T11] **Version drift.** The curriculum PDF dates from October 2024, and docs.cilium.io/stable is 1.20.2. Newer features appear in the current docs, such as ClusterNetworkPolicy support "starting with Cilium 1.20", ztunnel encryption (beta) and Gateway API v1.6.1. The exam may be older than these, so keep version-sensitive cards to stable, long-standing behaviour or mark them.

## Languages

The LF handbook's language grid ticks only English (EN) for "Cilium
Certified Associate (CCA)" (https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/language,
Markdown copy `[language.md]`). I did not check for translations of the Cilium
docs. ebpf.io
offers Hindi, French, Portuguese, Italian, Spanish, Chinese, Swahili, Korean
and Japanese versions under the same CC BY 4.0 licence, but I did not check
how complete they are. Build in English.

## Not verified

- **Cilium version in the exam.** No LF page fetched names the Cilium version
  the exam is based on. I tried the product page, faq-mc and
  instructions-mc. I did not look for a CCA "program changes" page (the ICA
  had one).
- **Curriculum date.** The PDF prints no version or date. 7 October 2024 is
  only the PDF metadata's creation date.
- **Documentation licence by file.** No `Documentation/LICENSE` exists
  (404), and the docs pages carry only "© Copyright Cilium Authors." The
  Apache 2.0 reading rests on the repository `LICENSE`. The README's wording
  ("user space components") does not name the docs explicitly.
- **`cilium config view`.** The objective "Use Cilium CLI to Query… the
  Configuration" suggests a view command. None of the fetched pages shows
  `cilium config view`; they show `kubectl -n kube-system get configmap
  cilium-config -o yaml` and `cilium-dbg config`. The cilium-cli README I
  fetched is old (its sample output shows v1.9.1) and does not list it.
  Writers should not invent the command.
- **Resources allowed during the exam, and retake waiting periods.** Not on
  the pages fetched. I did not open the Candidate Handbook sections on
  these.
- **docs.ebpf.io.** It shows no licence statement, so it was not used.
  ebpf.io (CC BY 4.0) and the Cilium BPF reference guide cover the eBPF
  domain.
- **The full list of Hubble flow verdicts.** The CLI page shows
  `FORWARDED` and `DROPPED` and a `--verdict` filter, but no complete list.
- **"Differences From Kubernetes Network Policies" table.** The caveats page
  links to it ("See this table"), but I did not follow the link. The
  CNP/KNP contrast rests on the policy-formats page.
