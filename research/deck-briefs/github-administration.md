# Research brief: GitHub Administration (GH-100)

Slug: `github-administration`. Family prefix: `ghadm`. Prerequisite deck:
`github-foundations` (29 of its terms are reused as topic 0, among them
enterprise account, organization, managed user account, Enterprise Managed
Users, identity provider, two-factor authentication, outside collaborator,
custom organization role, Triage, Maintain, team, branch protection rule,
CODEOWNERS, GitHub flow, runner and workflow; do not re-teach them).
Related, not prerequisite: `github-actions` (GH-200) covers the Actions
domain in depth; this deck teaches only the administrator's view of Actions.
Researched 26 September 2026. Every fact below was read in a source fetched
for this task or in a copy cached by the github-foundations or github-actions
research and copied into the scratch folder
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/github-administration/`.
GitHub Docs pages were read as Markdown through the docs site's article
endpoint (`https://docs.github.com/api/article/body?pathname=/en/<path>`) and
saved in `md/`. docs.github.com's robots.txt is `User-agent: *` with no
disallow rules; learn.microsoft.com's robots.txt disallows only `/answers/`,
search and API paths. Every `#anchor` in the concept list was checked against
the headings of the saved page. Where a docs URL now answers 301, the
concept and source files use the redirect target (checked on 26 September).

**Output counts:** 5 domains, 13 sub-headings, 38 objectives; 331 concepts;
153 terms (29 of them topic 0); budget 831 cards
(`github-administration-budget.json`, 10% added).

## Topics

| Topic | Name | Study-guide domain |
|---|---|---|
| T1 | Enterprise structure and deployment options | 2 (deployment and licensing) |
| T2 | Authentication, SAML SSO and 2FA | 1 (identities and authentication) |
| T3 | Provisioning, SCIM and Enterprise Managed Users | 1 |
| T4 | Roles, teams and access | 1 (access and permissions) |
| T5 | Policies, repository policies and rulesets | 1, 3 (policies and rulesets) |
| T6 | Audit logs, monitoring and compliance | 3 (audit logging), 5 (monitor usage) |
| T7 | Security features and incident response | 3 (repository security features) |
| T8 | API access, tokens and apps | 3 (API access and integrations) |
| T9 | Governing GitHub Actions | 4 (workflows and reusable components) |
| T10 | Runners and networking | 4 (runners) |
| T11 | Actions secrets and external vaults | 4 (encrypted secrets) |
| T12 | Support and developer standards | 2 (support, standards), 5 (diagnostics) |
| T13 | Licensing, billing and usage | 2 (licensing), 5 (cost and usage) |

## Exam facts

Sources: the Microsoft Learn certification page
(https://learn.microsoft.com/en-us/credentials/certifications/github-administration/,
"Last Updated 05/04/2026", `updated_at` 2026-09-22, `[ms-cert.txt]`), the
GH-100 study guide
(https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-100,
"Last updated on 2026-05-05", `[ms-studyguide.txt]`), both fetched in this
task and read in the raw text; Microsoft's exam duration page and retake
policy (`[ms-duration.txt]`, `[ms-retake.txt]`), cached by the github-actions
research on 25 September 2026 and re-read here.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | GitHub; listed and scheduled through Microsoft Learn and Pearson VUE | Cert page: "Product GitHub"; "Schedule through Pearson Vue"; "GitHub is transitioning to Microsoft's recertification process" | Rarely |
| Exam code and name | GH-100. Certification "GitHub Administration"; exam "GitHub Enterprise Administrator" | Cert page title "GitHub Administration"; study guide title "Study guide for Exam GH-100: GitHub Enterprise Administrator" | Rarely |
| Current version | Skills "as of July 2026" | Study guide: "Skills measured as of July 2026". Change log: "This exam has changed significantly (e.g., new objectives were added, some were removed, existing objectives may have moved to different functional groups, and all were reworded) on July, 2026." | **Yes** |
| Level and audience | Intermediate; admins of GHEC and GHES | Cert page: "Level Intermediate"; "designed for system administrators, software developers, application administrators, and IT professionals with intermediate-level experience in GitHub Enterprise Administration." Study guide: "Administrators in this role support both GitHub Enterprise Cloud and Server deployments" | Rarely |
| Time | 100 minutes | Cert page: "You will have 100 minutes to complete this assessment." | Sometimes |
| Question count | Not published for GH-100 | Duration page, generic: "Most Microsoft Certification exams typically contain between 40-60 questions; however, the number can vary depending on the exam." | Yes |
| Pass mark | 700 | Study guide: "A score of 700 or greater is required to pass." | Rarely |
| Format | Proctored; interactive components possible; sandbox | Cert page: "This exam will be proctored. You may have interactive components to complete as part of this exam." | Rarely |
| Open book? | No | Duration page: "access to Learn is NOT available on Fundamentals exams or GitHub exams." | Rarely |
| Preview features | May appear | Study guide: "Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used." | Rarely |
| Retakes | 24 hours after the first fail, then 14 days; at most 5 in 12 months | Cert page: "You can retake it 24 hours after the first attempt." Retake policy: "A 14-day waiting period is imposed between all subsequent attempts (up to 5)." "You may not take a given exam more than five (5) times within a 12-month period from the first attempt." "You must pay to retake the exam (if applicable.)" | Sometimes |
| Validity | 2 years; moving to Microsoft recertification | Cert page: "GitHub certifications are valid for 2 years. GitHub is transitioning to Microsoft's recertification process". Also: "all GitHub certifications that expire before the new recertification process is available will be extended by 6 months." | **Yes** |
| Price | Varies by country | Cert page: "Price based on the country or region in which the exam is proctored." No figure read. | Yes |
| Practice assessment | Offered | Cert page: "Practice Assessment"; "Take the practice assessment" | Sometimes |

The study guide's generic header still says "Microsoft associate, expert, and
specialty certifications expire annually"; the GH-100 cert page says GitHub
certifications are valid for 2 years. Use the cert page. The study guide's
"Last updated" date (5 May 2026) is before the "July 2026" skills date it
announces: treat the outline as current but volatile, and re-check before
release.

## Naming

**What GitHub's own pages say.** The GitHub Brand Toolkit logo page
(https://brand.github.com/foundations/logo, `[brand-logo.txt]`, cached by the
github-actions research) says under "Legal": "GITHUB®, the GITHUB® logo
design, the INVERTOCAT logo design, OCTOCAT®, and the OCTOCAT® logo design are
trademarks of GitHub, Inc., registered in the United States and other
countries." And: "No adaptation or use of any kind of any of our registered
trademarks or copyrights, or any other contents of this website, is allowed
without the express written permission of GitHub, Inc." No fair-use or
nominative clause was found. The github-foundations release blocker ("GitHub's
brand terms need review before the exam name is used") applies here too; the
question stays with the lawyer review in CONTENT-POLICY.md §8.

**How §4 applies.** Name the exam only as a true statement of coverage, in
plain text: "[Site name] deck for the GitHub Administration (GH-100) exam".
No logo, Invertocat, Octocat or Mona; our brand leads; no "GitHub" in the
domain; the path `/decks/github/github-administration/` follows §4. Mark the
first use "GitHub®". The exam runs through Microsoft Learn, so keep the
Microsoft rule: the mark is never "the leading word or most prominent element"
of the title. The two owner names differ ("GitHub Administration" for the
certification, "GitHub Enterprise Administrator" for the exam); the deck
title should use the certification name and may mention the exam name once.
GitHub is not in §5, so the "Everyone else" notice applies.

**Deck notice**

> GitHub® is a trademark of GitHub, Inc., registered in the United States and
> other countries. GitHub Administration and GitHub Enterprise Administrator
> (GH-100) are GitHub certification and exam names. [Deck title] is an
> independent publication and is not affiliated with, sponsored, endorsed or
> approved by GitHub, Inc. or Microsoft Corporation. Content adapted from
> GitHub Docs (https://docs.github.com), © GitHub, Inc., licensed under
> CC BY 4.0.

**Source licences.**
- **GitHub Docs: tier B.** The github/docs README (`[docs-README.md]`):
  "Creative Commons Attribution 4.0 - for documentation and content in the
  assets, content, and data folders (see LICENSE)"; `[docs-LICENSE.txt]`
  begins "Attribution 4.0 International". This covers the
  `enterprise-cloud@latest` and `enterprise-server@latest` versions used here,
  and matches `src/licences.json` (`^https://docs\.github\.com/`).
- **Study guide and cert page: tier C.** Footer "© Microsoft 2026", outside an
  openly licensed repository. Link to the outline; do not copy it. The
  outline below is our own shortening.
- **Brand page: tier C** (not a card source).

## Outline

The study guide's "Skills measured as of July 2026", in its order, with its
weights. Domain and sub-heading names are the owner's; objectives are
shortened into our own labels.

**1. Manage GitHub identities and access (15–20%)**
- Manage user identities and authentication
  - 1.1 Managed users versus personal accounts [T1] [T3]
  - 1.2 Configure and enforce SAML SSO and 2FA [T2]
  - 1.3 SCIM and team synchronisation: implementation and differences [T3]
  - 1.4 Choose and configure identity providers [T2] [T3]
  - 1.5 GitHub's authentication and authorisation model [T2] [T4]
- Manage access and permissions
  - 1.6 Organization and repository roles [T4]
  - 1.7 Enterprise teams [T4]
  - 1.8 Audit access and permissions [T4] [T6]
  - 1.9 Settings, policies, rulesets and roles [T5] [T4]

**2. Administer GitHub Enterprise environment (10–15%)**
- Support GitHub Enterprise users and stakeholders
  - 2.1 Issues for admins versus GitHub Support [T12]
  - 2.2 Support bundles and diagnostics [T12]
- Recommend standards for developer processes
  - 2.3 Standards for workflows, branching, reviews and releases [T12] [T5]
- Manage deployment and licensing
  - 2.4 Deployment scenarios: GHEC with EMU, GHEC with data residency and EMU, GHEC with personal accounts, GHES [T1]
  - 2.5 Licensing and billing models [T13]
  - 2.6 Monitor licence usage and consumption [T13]

**3. Implement secure software development and compliance (25–30%)**
- Configure security policies and rulesets
  - 3.1 Organization and enterprise policies [T5]
  - 3.2 Enterprise security posture and data protection [T2] [T6] [T7]
  - 3.3 Audit logging and reporting [T6]
- Enable repository security features
  - 3.4 Vulnerability alerts, secret scanning and CodeQL [T7]
  - 3.5 Dependabot and security advisories [T7]
  - 3.6 Security response plan [T7]
- Manage API access and integrations
  - 3.7 Personal access tokens [T8]
  - 3.8 Rate limits for PATs and GitHub Apps [T8]
  - 3.9 GitHub Apps and OAuth apps [T8]
  - 3.10 Approve or deny apps by policy [T8]

**4. Manage GitHub Actions (20–25%)**
- Configure workflows and reusable components
  - 4.1 Reuse of actions and workflows across the enterprise [T9]
  - 4.2 Organisational policies for Actions [T9]
- Manage runners
  - 4.3 Runner groups; GitHub-hosted versus self-hosted [T10]
  - 4.4 IP allow lists and networking, including Azure private networking [T10] [T6]
  - 4.5 Monitor and troubleshoot runner performance [T10]
- Manage encrypted secrets
  - 4.6 Scope and access for secrets [T11]
  - 4.7 Secrets at organization and repository level [T11]
  - 4.8 Third-party vaults [T11]

**5. Monitor and optimize GitHub usage (10–15%)**
- Monitor enterprise usage and activity
  - 5.1 Audit logs and API usage [T6] [T8]
  - 5.2 Admin responsibilities versus GitHub Support; diagnostics [T12]
  - 5.3 Usage patterns: adoption, activity, underused features [T13] [T7]
- Optimize cost and performance
  - 5.4 Usage reports for metered products [T13]
  - 5.5 Licence and resource optimisation [T13]

Total: 5 domains, 13 sub-headings, 38 objectives. Every objective maps to at
least one concept.

## Traps

- [T1] Buying GitHub Enterprise gives both Cloud and Server; the Cloud allowance is "**one** deployment, on either GitHub.com or GHE.com".
- [T1] Data residency (GHE.com) always uses Enterprise Managed Users and has no public repositories. Regions read: EU, Australia, US, Japan. GHES is the self-hosted option; data residency is the documented alternative when the need is only where data lives.
- [T1] GHES external authentication is CAS, LDAP or SAML; GHEC uses SAML or (EMU only) OIDC.
- [T2] SAML SSO does not replace GitHub sign-in: non-EMU members still sign in to personal accounts, linked to an external identity.
- [T2] Organization-level SAML does not protect internal repositories; enterprise SAML does, and overrides organization SAML. Outside collaborators are not required to use SSO.
- [T2] PATs (classic) and SSH keys must be authorised for SSO after creation; fine-grained PATs are authorised during creation. Apps must be reauthorised after SSO is first enforced.
- [T2] Requiring 2FA: members and billing managers keep membership (and seats) but lose access; outside collaborators, including bots, are removed. The enterprise 2FA policy is "not available for enterprises with managed users".
- [T2] Mandatory 2FA (GitHub's own programme) does not apply to managed users or GHES users; an organisation's 2FA requirement is separate from it. Secure methods exclude SMS.
- [T2] OIDC and CAP for EMU work only with Entra ID; one OIDC integration per Entra ID tenant.
- [T2] [T6] If the IdP's allow list (EMU, Entra ID, OIDC) is used, GitHub's IP allow list is deactivated for all organisations.
- [T3] Enterprise-level SCIM exists only with EMU; without EMU, SCIM needs organisation-level SAML.
- [T3] Team synchronisation "is not a user provisioning service". Enterprise-level team sync needs Entra ID; Okta team sync is organisation level only. Disabling it leaves members in teams.
- [T3] Okta plus Entra ID (either order) for SSO and SCIM is "explicitly not supported".
- [T3] IdP-connected teams cannot be parent or child teams, cannot have team maintainers, and still get repository access on GitHub, not from the IdP.
- [T3] SCIM deprovisioning disables the account and hashes the username; it is restored on reassignment.
- [T4] Enterprise owners do not see organisation content by default. GitHub App managers cannot install apps. The enterprise security manager role is public preview.
- [T4] Guest collaborators (EMU only) see internal repositories only in organisations where they are members; regular members see all internal repositories.
- [T4] Base permissions do not apply to outside collaborators; internal repositories keep read access even with base permission "none". Access is additive.
- [T4] Up to 20 custom repository roles (5 on GHES earlier than 3.19); 20 custom organisation roles per enterprise and 20 per organisation. Enterprise owners create organisation roles but cannot assign them.
- [T4] Enterprise teams: 2,500 per enterprise, 5,000 users each, 1,000 organisations each; IdP sync stops above 5,000.
- [T5] No enterprise policy is enforced by default. Internal is the default visibility for new repositories in enterprise-owned organisations.
- [T5] Rulesets have no priority: all apply and the most restrictive version of a rule wins, including against branch protection rules. Many rulesets can target one branch; only one branch protection rule can.
- [T5] "Evaluate" status (Rule Insights) appears in the GHEC docs; the Free/Pro/Team organisation page lists only Active and Disabled.
- [T5] Push rulesets are for private and internal repositories and cover the whole fork network; bypass is inherited from the root repository.
- [T5] Repository policies (public preview) are additive with "member privilege" policies: the most restrictive applies. Limit 75 policies and rulesets per organisation and per enterprise.
- [T6] Audit log: 180 days; Git events 7 days, not searchable, export only; the UI shows three months unless `created` is used. Exports cap at 100 MB or 10 minutes. API: 1,750 queries per hour per user and IP.
- [T6] Source IP addresses are hidden unless display is enabled.
- [T6] [T10] With an IP allow list, Actions needs self-hosted runners or larger runners with static IPs.
- [T7] GitHub Advanced Security is now sold as two products, GitHub Secret Protection and GitHub Code Security; older material describes one GHAS licence (which still exists for some customers).
- [T7] Dependabot security updates follow alerts; version updates need `dependabot.yml`. Alerts scan the default branch.
- [T7] Disabling Actions for an organisation blocks CodeQL default setup; other Actions policies do not.
- [T7] Delete keys and tokens in an incident only with EMU; lock down SSO ends all SSO sessions, owners included.
- [T8] Fine-grained PAT approval defaults to "require"; PATs (classic) are never subject to approval. Fine-grained maximum lifetime default is 366 days; classic tokens have no expiration requirement. Restriction policies never block public resources.
- [T8] REST limits: 60 unauthenticated; 5,000 per user; GHEC apps 15,000; other app installations scale to 12,500; `GITHUB_TOKEN` 1,000 per repository (15,000 on GHEC). Secondary limits include 100 concurrent requests.
- [T8] GitHub Apps are preferred; an OAuth app is preferred only for enterprise-level resources. Installation tokens expire after 1 hour. OAuth app access restrictions are on by default for new organisations.
- [T9] "Allow enterprise actions" blocks GitHub-authored actions such as `actions/checkout`. SHA pinning still lets reusable workflows be referenced by tag.
- [T9] `GITHUB_TOKEN` defaults to read-only for enterprises and organisations created on or after 2 February 2023.
- [T9] Recent change: workflow execution protections; a default policy blocking `pull_request_target` in public repositories "will be enforced on November 2, 2026".
- [T10] A runner belongs to one group at a time and starts in the default group. Disabling repository-level self-hosted runners still leaves organisation and enterprise runners. Static IPs, custom images and Azure private networking on larger runners are Linux and Windows only.
- [T11] Name clash: the lowest level wins (environment, then repository, then organisation). Over 100 organisation secrets: only the first 100 alphabetically reach a workflow. 48 KB limit.
- [T12] Support bundles and diagnostic files are GHES features; a bundle holds two days of logs, an extended bundle eight. Support scope excludes IdP configuration, preview features and discontinued GHES releases.
- [T13] Licences are unique-user across deployments; sync GHES with GHEC to deduplicate (by email). Trials from 1 August 2024 are usage-based. Enterprise owners outside any organisation, billing managers and the EMU setup user do not consume licences.
- [T13] Dormant means 30 days without activity (not 90). GHAS counts active committers over 90 days.
- [T13] Budgets stop metered products (Actions) but only alert for licence products, except GHAS SKUs. Cost centres work only with metered billing. Detailed usage reports cover 31 days and are not in the REST API; summarised reports cover a year.
- [T13] GHEC includes 50,000 Actions minutes and 50 GB artifact storage; self-hosted runners and public repositories are free.

## Languages

The cert page lists one language: "This exam is offered in the following
languages: English". The study guide's generic note offers "an additional 30
minutes" if the exam is not in the candidate's language. GitHub Support for
Enterprise is in English and Japanese. Only English GitHub Docs (`/en/`) were
fetched; translated docs and their licence were not checked.

## Not verified

- **Question count:** only Microsoft's generic "40-60".
- **Price:** shown only after choosing a country.
- **Effective date of the July 2026 outline:** the study guide says "as of July 2026" but was last updated 5 May 2026; no previous-outline archive was fetched, so what changed is unknown.
- **"GHEC with personal accounts" versus "GHEC with EMU" choice page** (`choose-an-enterprise-type`) was linked but not fetched; the comparison rests on the IAM fundamentals, EMU and GHEC overview pages.
- **Third-party vaults other than HashiCorp Vault:** the study guide says "Integrate third-party vaults"; only the OIDC concept page and the HashiCorp Vault guide were read.
- **Runner performance monitoring:** no docs page on runner performance as such; mapped to runner statuses, `_diag` logs, `--check`, concurrency limits and GHES monitor dashboards.
- **Enterprise-level runner groups and the GitHub-hosted runner images list** were not re-read (covered in the github-actions research).
- **Premium Support SLA figures** and **Copilot usage metrics** were not read.
- **Microsoft Learn Terms of Use** were not fetched in this task; the tier C call rests on the page footer and CONTENT-POLICY.md §3 (github-copilot quoted them).
- **Whether "GitHub Administration" is a registered trademark:** not stated on the brand page.
- **Wording of the brand page** was re-used from the github-actions cache (fetched 25 September 2026), not re-fetched.
