# gcp-cdl audit C: topics 11–14

**Scope.** I checked 321 cards in decks/gcp-cdl/notes/11-security-fundamentals.json to 14-operations-reliability.json (99 + 107 + 62 + 53). None of them are pool cards. I checked each card against its `evidence` first. For claims beyond the evidence, I grepped research/sources/gcp-cdl/.

**Sources.** Tier B means the docs.cloud.google.com pages with the CC BY 4.0 footer (CONTENT-POLICY.md §3, tier B). The Cloud Digital Leader exam guide, the study guide and the cloud.google.com marketing pages (Threat Intelligence, Compliance Reports Manager) are tier C (CONTENT-POLICY.md §3, tier C), and the manifest has no cached text for them (path null). I fetched each of them once to check facts, with a generic User-Agent and no personal details. I kept them in scratch only.

**Scenario letters.** I checked every card with `choices`: the letters in `choicesExplained` are exactly the wrong options. There are no mismatches.

**Checker flag.** `gcdl.security-trust.what-is-google-secops` introduces "Google Security Operations" and "Google SecOps". The short name is 13 characters, so it does not count as an abbreviation. The very next card, `what-is-google-secops-short-name`, already introduces "Google SecOps", so the patch removes it here. The dry run is clean.

## Findings

id | severity | problem | evidence (source words, with page)
---|---|---|---
gcdl.security-trust.what-is-google-secops | minor | The primer introduces two new terms (checker flag); "Google SecOps" is already introduced by the next card. | SecOps overview page title: "Google SecOps overview \| Google Security Operations"
gcdl.operations-reliability.operations-suite-name | unsupported | The front says the exam guide gives "operations suite" as another name for Observability. The guide only lists it as an example, and no cached docs page mentions the term. | Exam guide p. 6: "Google Cloud's Observability (e.g., operations suite, Cloud Monitoring, Cloud Logging, Cloud Trace, Cloud Profiler, Error Reporting)"
gcdl.cost-hierarchy.what-is-a-spend-cap-budget | unclear | The back buries what the budget does behind why Google suggests it, and never says it sets a cap. "Preview", "project" and "supported services" rest on passages outside the evidence (these passages do support them). | Budgets page: "If supported for your service, consider configuring a spend cap budget (preview) on a project"; "Indicates whether or not the budget sets a spend cap"
gcdl.security-fundamentals.what-is-cryptomining | ambiguous | "Running cryptocurrency miners" reads as though mining were itself the threat, when the threat is miners that someone else runs on your resources. | SCC overview: "Detect and respond to active threats such as malware, cryptocurrency miners…"
gcdl.security-fundamentals.what-is-ransomware | unclear | The example points back to "the previous card" and gives no picture. | n/a
gcdl.security-trust.what-is-a-principal | minor | "some interfaces still call principals 'members'" goes beyond the source. | IAM overview: "In the past, principals were referred to as members."
gcdl.security-fundamentals.saas-stays-with-customer | minor | choicesExplained C ("the application itself is the provider's") is not in the source. | Shared responsibility page, "Defined by workloads": "In SaaS, we own the bulk of the security responsibilities. You remain responsible for your access controls and the data…"
gcdl.operations-reliability.what-is-an-error-budget | unclear | "what is left over once the SLO's required performance is set" has to be read twice. | Service monitoring concepts: "Your error budget for a compliance period is (1 − SLO goal) × (eligible events in compliance period)"
gcdl.cost-hierarchy.what-is-cloud-financial-governance | unclear | The example is a comma splice ("…owns it, it is reviewed monthly, and a banking app shows the spending"). | n/a
gcdl.security-fundamentals.what-is-2sv | unclear | "A sign-in requirement for another proof of identity" reads awkwardly. | 2SV page: "In addition to your password, 2SV requires another proof of identity, known as an authentication factor"
gcdl.security-fundamentals.what-is-misconfiguration | unclear | The explanation ("Cloud products change constantly…") has no stated link to the back, so a newcomer cannot see why it is there. | Shared responsibility page, "Challenges for shared responsibility": "Many cloud security breaches are the direct result of misconfiguration. Cloud products are constantly changing…"
gcdl.security-trust.gti-sources-guides-differ | minor | The back says the study guide lists "five types of intelligence". The guide calls them data sources, and "Google insights" is not a kind of intelligence. | Study guide p. 12: "It's powered by five unique data sources"

## Checked and sound (no finding)

- Shared responsibility: the IaaS, PaaS and SaaS splits, and the rule that the provider always keeps the network and infrastructure while the customer always keeps access and data. Compute Engine is named as IaaS on the same page.
- Shared fate, inherited controls, data-location duty, zero trust (WAF core principles; study guide p. 11), least privilege (Use IAM securely), 2SV/MFA and the phased requirement.
- Security and trust offerings: Google Threat Intelligence and its sources (exam guide p. 5; the marketing page supports the alert score and Mandiant's in-console experts), SCC, SecOps lifecycle, Gemini in SecOps, AI Protection, Model Armor, VPC, Cloud VPN, HA VPN and Classic VPN, Cloud Interconnect (the page supports HA VPN over Interconnect and MACsec), firewall rules, Cloud Armor, IAM roles and policies, Cloud Audit Logs types, Sensitive Data Protection, Confidential Computing, Certificate Manager (the page supports self-managed certificates: "obtain, provision, and renew yourself"), IAP (Cloud Run is supported), Assured Workloads, Access Transparency, and Compliance Reports Manager ("at no additional cost"; some resources need a Google Cloud or Workspace sign-in).
- Default encryption: "each chunk is encrypted … with an individual data encryption key" supports per-chunk-keys.
- Cost and hierarchy: CapEx, OpEx and TCO; people, process and technology; the hierarchy levels and benefits (study guide p. 14); organization, folder (subfolders for teams) and project; policy inheritance; quotas; budgets and scope (including labels and services); billing report questions (including region and label); DWS; CUDs. The exam guide's consumption-control list does leave out CUDs.
- Operations: Observability services, Monitoring alerting policies, Logging sources, Trace, Profiler, Error Reporting, the study-guide tool matches, SRE, SLIs, SLOs and SLAs, the error budget formula, golden signals and resilience practices (study guide p. 15).
