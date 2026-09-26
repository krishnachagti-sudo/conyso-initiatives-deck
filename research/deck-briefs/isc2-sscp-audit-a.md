# isc2-sscp audit, part A (topics 1–9)

326 cards checked (topics 01–09). Sources: research/sources/isc2-sscp/ (NIST, tier B). The ISC2 Code of Ethics, the SSCP outline, MITRE ATT&CK, Microsoft Learn, IETF RFC 6749 and FIRST CVSS were checked as tier C facts (CONTENT-POLICY.md §3). The AD FS overview and the CVSS v4.0 specification were read live to check single claims; neither was cached.

Every scenario card's choicesExplained letters match its choices and key. Primers checked against the terms isc2-cc introduces: no SSCP primer re-introduces an isc2-cc term. The 18 fact cards below repeat an isc2-cc card's fact and answer.

Checker terms: no cached open source defines "asset lifecycle management" or "identity and access management". SP 800-144 §4.5, SP 800-204 §4.1 and SP 800-207 use the second term only as a heading or in passing. The three cards that used these terms were reworded, so no primer was added.

id | severity | problem | evidence (source words, with page)
---|---|---|---
sscp.authentication-federation.password-length-scenario | wrong | choicesExplained B says 64 is "the maximum length verifiers should permit"; NIST says verifiers should allow a maximum of at least 64 | SP 800-63B-4 p. 25: "Verifiers and CSPs SHOULD permit a maximum password length of at least 64 characters."
sscp.authentication-federation.what-is-openid-connect (example) | unsupported | "common in consumer and mobile sign-ins" has no source, and "Like SAML" is not an everyday comparison | SP 800-63C-4 p. 18 names only "the ID Token in OpenID Connect" as an example assertion
sscp.security-controls.detective-examples-guide | ambiguous | front begins "In the same NIST risk example", which depends on the previous card; review order is shuffled | n/a
sscp.awareness-physical.vestibule-scenario | ambiguous | the inner reader has already rejected her card, so "while authorisation is verified" no longer fits | SP 800-53r5 PE-3(8) p. 210: "provide containment areas while authorization for physical access is verified"
sscp.authentication-federation.assertion-creator-scenario | ambiguous | front begins "In the same law firm set-up", which depends on idp-rp-scenario | n/a
sscp.identity-and-access-models.mac-no-passing | ambiguous | bare "MAC" in the front; topic 6 has just taught "MAC address" | n/a
sscp.identity-and-access-models.mac-uniform | ambiguous | same MAC / MAC address clash | n/a
sscp.identity-and-access-models.mac-vs-dac | ambiguous | same MAC / MAC address clash | n/a
sscp.risk-and-legal.transfer-limits | ambiguous | calls sharing a portion of consequences "transfer"; the isc2-cc deck teaches, from SP 800-39, that transfer shifts the entire risk and sharing only a portion. The clash is not named | IR 8286r1 Table 2 p. 39: "sharing a portion of the consequences with another party (e.g., cybersecurity insurance)"; SP 800-39: "Risk transfer shifts the entire risk responsibility or liability ... Risk sharing shifts a portion"
sscp.ethics-core-concepts.sod-collusion | unclear | "the risk of malevolent activity without collusion" reads as if SoD reduces collusion | SP 800-53r5 AC-5 p. 63: "helps to reduce the risk of malevolent activity without collusion"
sscp.asset-lifecycle.lifecycle-phase-after-development | unclear | front "between development and acquisition and operation and maintenance" has to be read twice; `uses` lists "asset lifecycle management" (checker), a term with no primer and no cached open definition | SP 800-37r2 p. 181: "initiation; development and acquisition; implementation; operation and maintenance; and disposal"
sscp.asset-lifecycle.lifecycle-phase-scenario | unclear | `uses` lists "asset lifecycle management" (checker); reworded to the terms the card does use | n/a
sscp.change-configuration.unauthorised-change-scenario | unclear | "What records does NIST's access restrictions for change control expect to help investigate?" is ungrammatical | n/a
sscp.authentication-federation.what-is-openid-connect (back) | unclear | "with its own assertion format, issued to the RP alongside an OAuth 2.0 access token" is hard to parse and uses OAuth 2.0 before its primer (6040) | SP 800-63C-4 p. 18 (ID Token as example assertion)
sscp.authentication-federation.what-is-ad-fs | unclear | back uses "identity and access management" (checker) and "entitlements" (not taught until topic 8); "Windows Server role" is not on the page | AD FS overview: "enables Federated Identity and Access Management by securely sharing digital identity and entitlements rights across security and enterprise boundaries"
sscp.identity-and-access-models.ial3 | unclear | the explanation says both requirements mean an attended session; a biometric alone does not require one | SP 800-63A-4 p. 14 (IAL3 adds a proofing agent on site and a biometric)
sscp.ethics-core-concepts.ethics-scenario-society | minor | back and all four choices quote the canons word for word; the ISC2 code is tier C, so paraphrase only | ISC2 Code of Ethics canons
sscp.ethics-core-concepts.ethics-scenario-report-colleague | minor | explanation reuses Canon III's wording ("diligent, competent service") | ISC2 Code of Ethics canons
sscp.authentication-federation.adfs-migration-advice | minor | product is "Microsoft Entra ID", not "Microsoft Entra"; the patch fails the abbreviation check on "ID", so this is logged only | AD FS overview: "Microsoft highly recommends migrating to Microsoft Entra ID"
sscp.identity-and-access-models.transfer-actions | minor | "Name two ...?" puts a question mark on an instruction | n/a
sscp.risk-and-legal.scope-helps-decide | minor | "Name two ...?" as above | n/a
sscp.risk-and-legal.transborder-concerns | minor | "Name two ...?" as above | n/a
sscp.ethics-core-concepts.ethics-duty-to-report | minor | re-teaches isc2-cc ethics.duty-to-report (same fact and answer) | isc2-cc card
sscp.ethics-core-concepts.ethics-consequence | minor | re-teaches isc2-cc ethics.violation-consequence | isc2-cc card
sscp.awareness-physical.phishing-tell-staff | minor | re-teaches isc2-cc security-awareness.tell-staff-about-exercises | isc2-cc card
sscp.awareness-physical.tabletop-no-equipment | minor | re-teaches isc2-cc incident-response.tabletop / contrast-tabletop-functional | isc2-cc cards
sscp.authentication-federation.password-minimum-in-mfa | minor | re-teaches isc2-cc security-awareness.password-min-length (gives the eight-character minimum) | isc2-cc card
sscp.trust-architectures.zero-trust-no-implicit | minor | re-teaches isc2-cc network-security-architecture.zt-no-implicit-trust | isc2-cc card
sscp.trust-architectures.zero-trust-resources | minor | re-teaches the isc2-cc zero-trust primer ("focused on protecting resources") | isc2-cc card
sscp.trust-architectures.dmz-public-servers | minor | re-teaches isc2-cc dmz-public-servers word for word | isc2-cc card
sscp.trust-architectures.dmz-traffic-through-firewall | minor | re-teaches isc2-cc dmz-through-firewall | isc2-cc card
sscp.identity-and-access-models.notify-account-managers | minor | re-teaches isc2-cc identity-lifecycle.notify-account-managers | isc2-cc card
sscp.identity-and-access-models.disable-accounts | minor | re-teaches the isc2-cc deprovisioning primer and why-disable-accounts | isc2-cc cards
sscp.identity-and-access-models.atypical-usage | minor | re-teaches isc2-cc access-control.atypical-usage | isc2-cc card
sscp.identity-and-access-models.role-vs-attribute-scheme | minor | re-teaches isc2-cc access-control.rbac-vs-abac word for word | isc2-cc card
sscp.identity-and-access-models.abac-inputs | minor | re-teaches the isc2-cc what-is-abac primer | isc2-cc card
sscp.risk-and-legal.impact-definition | minor | re-teaches the isc2-cc risk-management.impact primer word for word | isc2-cc card
sscp.risk-and-legal.semi-quantitative | minor | re-teaches the isc2-cc risk-management.semi-quantitative primer | isc2-cc card
sscp.risk-and-legal.developer-threat-modelling | minor | re-teaches isc2-cc security-testing.threat-model-when (same question and answer) | isc2-cc card
sscp.risk-and-legal.residual-always | minor | re-teaches isc2-cc risk-management.residual-tolerance | isc2-cc card

All 18 re-teaching cards are deleted in the patch file. Each concept they carried keeps at least one application or classification card, so no conceptIDs patch is needed.

Checked and found sound: ATT&CK tactic count (15) and "Stealth" (cached tactics page); CVSS vendor/consumer roles and "agnostic to the individual" (live CVSS v4.0 spec); the SP 800-63B/C-4, SP 800-53r5, 800-53Ar5, 800-88r2, 800-128, 800-50r1, 800-125Ar1, 800-77r1 and 800-204 claims that go beyond each card's evidence.
