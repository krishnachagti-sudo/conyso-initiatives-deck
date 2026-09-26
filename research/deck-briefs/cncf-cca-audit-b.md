# cncf-cca audit, part b: topics 5–7 (plus the flagged `id.` card in topic 4)

Checked: 94 cards in 05-policy-rules, 77 in 06-ingress-gateway-mesh, 42 in 07-encryption (213), plus 2 topic-4 cards named in the brief. Every scenario's choicesExplained letters match its choices. The YAML fragments (app-http-yaml, port-range, weight, tls-spec) are valid and match the source.

id | severity | problem | evidence (source words, with page)
---|---|---|---
cca.identity-enforcement.security-relevant-prefix | wrong | The `id.` prefix rule comes from the outdated Terminology page. In 1.20, all labels count by default apart from a built-in list of exclusions | "By default, Cilium considers all labels to be relevant for identities, with the following exceptions:" (operations/performance/scalability/identity-relevant-labels/)
cca.identity-enforcement.app-relevant-labels | wrong | Same stale rule: by default `team=payments`, `launched-at=0915` and `tier=web` all count too, so the key is not the only answer. Rewritten around `pod-template-hash` | "!pod-template-hash Ignore all pod-template-hash labels" (same page)
cca.policy-rules.app-agent-down | ambiguous | A standalone DNS proxy exists as an alpha option, which makes C defensible; choicesExplained wrongly calls C "Envoy's DaemonSet" | "By default, Cilium uses an in-agent DNS proxy for DNS policy enforcement. For high availability, consider using the Standalone DNS Proxy (alpha)" (DNS-based policy tutorial, Limitations)
cca.policy-rules.ipblock-default | ambiguous | Either/or front ("pod or node IPs?") answered "No" | "By default, ipBlock rules in NetworkPolicy do not match intra-cluster IPs (such as Pod or Node IPs)" (network/kubernetes/policy)
cca.policy-rules.app-world | unclear | "named in-cluster pods" has no referent | "The world entity corresponds to all endpoints outside of the cluster." (layer3, Entities based)
cca.ingress-gateway-mesh.ben-no-annotation-port | unsupported | "many" overstates the source's "some" | "the Gateway API provides native support for some of these features" (ingress-to-gateway, Ingress Annotations Migration)
cca.policy-rules.cidr-not-internal | minor | "label-derived identity" does not fit node IPs, which the source also excludes | "use an IP belonging to a node in the cluster (including host networking pods)" (layer3, IP/CIDR based)
cca.policy-rules.kcnp | minor | The example says KCNP "replaces" the in-house form; the source only says support is added | "Support for the Kubernetes ClusterNetworkPolicy (KCNP) is available starting with Cilium 1.20." (network/kubernetes/policy)
cca.ingress-gateway-mesh.persona-infra | minor | Ranking "above cluster operators" is not in the source | "Infrastructure Providers administrate the managed services of a cloud provider…" (ingress-to-gateway, Benefits)
cca.ingress-gateway-mesh.persona-operator | minor | Ranking "between" the other two personas is not in the source | "Cluster Operators are responsible for the administration of a cluster." (ingress-to-gateway, Benefits)

Note: the two topic-4 patches cite a page that is not yet cached. After applying, run `node build/cache-sources.mjs --only=cncf-cca` so the checker can verify their evidence. That is the only --dry failure. Related, not patched: cca.identity-enforcement.security-relevant-why also rests on the Terminology page's older wording and is worth re-reading with topic 4.
