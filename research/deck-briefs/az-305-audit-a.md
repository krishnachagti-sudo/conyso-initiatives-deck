# az-305 audit A: topics 01–04

Scope: decks/az-305/notes/01-logging-monitoring.json to 04-governance-compliance.json, 366 cards (102 + 72 + 74 + 118). None are pool cards. I checked every card against its `evidence` first. Claims that go beyond the evidence were checked by grepping research/sources/az-305/: DCR overview, logs table plans, workspace design, Advisor overview, choose-ad-authn, MFA how it works, Conditional Access overview, ID Protection overview, External ID overview, Key Vault RBAC guide, Policy overview, effect basics, lock resources, ARM overview, Cost Management overview, access reviews and entitlement management.

Tier B text is from the MicrosoftDocs GitHub repositories (CONTENT-POLICY.md §3, tier B). The 11 Defender for Cloud cards cite two learn.microsoft.com pages: defender-for-cloud-introduction and regulatory-compliance-dashboard. These are tier C and have no cached text (the manifest path is null). I fetched each page once to check facts, with a generic User-Agent and no personal details. I did not save them to the repository. Every Defender claim is supported, including these:
- "Cloud Native Application Protection Platform (CNAPP)";
- "Defender for Cloud includes free Foundational CSPM capabilities";
- the secure score "improves" "as you remediate recommendations";
- attack path analysis is listed under "Defender CSPM";
- Defender for Servers covers "Windows and Linux machines that run in Azure, AWS, GCP, and on-premises";
- "the MCSB plan is enabled" by default;
- non-default standards need "at least one paid plan";
- "the Security Reader role doesn't" have access to policy compliance data;
- "Download report" produces a report that "might provide evidence to internal and external auditors".

Where the training units and the docs could differ, I followed the docs. No card relies on a training-unit claim that the docs contradict.

id | severity | problem | evidence (source words, with page)
---|---|---|---
az305.logging-monitoring.what-is-a-dcr | unclear | The back says only that a DCR is "part of an … ETL-like process" and "defines how Azure Monitor collects data". A newcomer does not learn what the rule holds. | "Depending on the scenario, DCRs specify all or some of the following items: * Data to collect and send to Azure Monitor. * Schema of the incoming data. * Transformations to apply to the data before it's stored. * Destination where the data should be sent." (Data collection rules overview, "Data collection process")
az305.authentication-identity.what-is-microsoft-entra-id | unclear | The explanation says a tenant "can be configured in two ways" but does not name them. The reader has to guess. | "A *workforce* tenant configuration is a standard Microsoft Entra tenant that contains your employees, internal business apps, and other organizational resources." / "An *external* tenant configuration is exclusively for apps that you want to publish to consumers or business customers." (External ID overview, "What are workforce and external tenants?")
az305.authentication-identity.what-is-phs | unclear | The primer never says what PHS does: the password hash is synchronised and Microsoft Entra ID checks it. The back and explanation only call it the "simplest way" and say it needs no extra infrastructure. | "In the cloud - password hash is synchronized and Microsoft Entra ID validates credentials" (Choose the right authentication method, "Comparing methods")
az305.authentication-identity.workforce-vs-external-tenant | wrong | The back says a workforce tenant is intended for "collaborating with partners from external organisations". That row of the table describes External ID features inside a workforce tenant, not the tenant itself. The tenant holds your employees and internal apps. | "A *workforce* tenant configuration is a standard Microsoft Entra tenant that contains your employees, internal business apps, and other organizational resources. In a workforce tenant, your internal users can collaborate with external business partners and guests by using B2B collaboration." (External ID overview, "What are workforce and external tenants?")
az305.authorisation-secrets-keys.scenario-dedicated-hsm | unclear | The front's "HSMs … which not even its subscription administrators can override" attaches "override" to the HSMs. What cannot be overridden is the designated administrators' control. | "allows designated HSM cluster administrators to have complete control over the HSMs that even management group, subscription, or resource group administrators cannot override" (Managed HSM overview, "Access control, enhanced data protection & compliance")
az305.governance-compliance.policy-evaluation-events | unclear | The back ("Any two, for example the resource is created or updated in an assigned scope; the scope gets a new assignment.") is hard to parse, and the semicolon runs the two events together. | "A resource is created or updated in a scope with a policy assignment. - A scope gets a new assignment of a policy or initiative." (Azure Policy overview, "Understand evaluation outcomes")
az305.governance-compliance.policy-role | unsupported | The explanation says Contributor and Reader "only get read access to policy operations". That overstates the source and contradicts the card's own choice explanation: Contributor can also trigger remediation. | "Both Contributor and Reader have access to all read Azure Policy operations. **Contributor** might trigger resource remediation, but can't create or update definitions and assignments." (Azure Policy overview, "Azure RBAC permissions in Azure Policy")

## Patches

7 findings, and each one has a patch in az-305-fixes-a.jsonl (8 lines). `node build/apply-fixes.mjs az-305 research/deck-briefs/az-305-fixes-a.jsonl --dry` reports every patch clean.

I also considered naming "Microsoft Entra ID P2" in az305.authentication-identity.idp-risk-policies-licence ("the highest premium edition"). The checker rejects "P1" and "P2" as abbreviations the deck does not teach, and the current wording is accurate against the licence table ("Microsoft Entra ID P2 / Microsoft Entra Suite"). So I left it unchanged and did not log it as a finding.

No finding needs more research.
