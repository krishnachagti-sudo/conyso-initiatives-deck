# Research brief: GitHub Advanced Security (GH-500)

Slug: `github-advanced-security`. Family prefix: `ghas`. Prerequisite decks:
`github-foundations` and `github-actions`. Their terms are reused as topic 0
and are not taught again. From foundations: organization, enterprise account,
GitHub Team, GitHub Enterprise, custom organization role, Enterprise Managed
Users, branch protection rule, SECURITY.md, dependency graph, dependents,
dependency insights, fork, GitHub Copilot and Copilot cloud agent. From
actions: pull_request, schedule, matrix strategy, workflow template, the runner
types and runner label, semantic versioning, commit SHA, immutable release,
secret, GITHUB_TOKEN, personal access token, artifact attestation and software
bill of materials.

Researched 26 September 2026. Every fact below was read in a source fetched
during this task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/github-advanced-security/`.
GitHub Docs pages were fetched as Markdown through the docs site's article
endpoint (`https://docs.github.com/api/article/body?pathname=/en/<path>`), as
for the two prerequisite decks, and saved in `md/`. docs.github.com's
robots.txt reads only `User-agent: *` with no disallow rules. The builder
(`build.py`) checks every `#anchor` in the concept list against the headings
and in-page links of the saved page. Two exceptions, `#open-pull-requests-limit-`
and `#cooldown-` on the Dependabot options reference, follow the page's own
label pattern (`#package-ecosystem-`, `#target-branch-`) and were not linked
on the page itself.

## Topics

| Topic | Name | Study-guide domain |
|---|---|---|
| T1 | Advanced Security products and availability | 1, 6 |
| T2 | Licensing and billing | 1, 6 |
| T3 | Secret scanning and its alerts | 2, 1 |
| T4 | Push protection and bypass | 2, 5 |
| T5 | Customising secret detection | 2 |
| T6 | Vulnerability data and advisories | 3, 5 |
| T7 | Dependency graph, submission and SBOMs | 3 |
| T8 | Dependabot alerts and triage | 3, 5 |
| T9 | Dependabot updates | 3 |
| T10 | Dependency review and licence compliance | 3, 5 |
| T11 | Code scanning setup and SARIF | 4 |
| T12 | CodeQL analysis and customisation | 4, 5, 6 |
| T13 | Code scanning alerts and remediation | 4 |
| T14 | Security overview, campaigns and auditing | 1, 5 |
| T15 | Security administration at scale | 6, 1, 5 |

## Exam facts

Sources: the Microsoft Learn certification page
(https://learn.microsoft.com/en-us/credentials/certifications/github-advanced-security/,
"Last Updated 05/04/2026", `updated_at` 2026-09-22, `[ms-cert.txt]`), the
GH-500 study guide
(https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-500,
"Last updated on 2026-05-14", `[ms-studyguide.txt]`), the exam duration page
(`[ms-duration.txt]`) and the retake policy (`[ms-retake.txt]`), all re-fetched
in this task.

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | GitHub; listed and scheduled through Microsoft Learn and Pearson VUE | Cert page: "Product GitHub"; "Schedule through Pearson Vue" | Rarely |
| Exam code and name | GH-500, "Exam GH-500: GitHub Advanced Security" | Study guide title; cert page links "Exam GH-500 study guide" | Rarely |
| Current version | Skills "as of July 2026" | Study guide: "Skills measured as of July 2026". Change log: "This exam has changed significantly (e.g., new objectives were added, some were removed, existing objectives may have moved to different functional groups, and all were reworded) on July, 2026." | **Yes** |
| Level | Intermediate | Cert page: "Level Intermediate" | Rarely |
| Audience | Uses GHAS across the SDLC | Study guide and cert page: "Candidates for this exam have experience using GitHub Advanced Security (GHAS) to secure code, secrets, and dependencies across the software development lifecycle… Candidates are familiar with GitHub fundamentals, CI/CD, and secure development concepts." | Rarely |
| Time | 100 minutes | Cert page: "You will have 100 minutes to complete this assessment." | Sometimes |
| Question count | Not published for GH-500 | Duration page, generic: "Most Microsoft Certification exams typically contain between 40-60 questions; however, the number can vary depending on the exam." | Yes |
| Pass mark | 700 | Study guide: "A score of 700 or greater is required to pass." | Rarely |
| Format | Proctored; interactive components possible; sandbox | Cert page: "This exam will be proctored. You may have interactive components to complete as part of this exam." | Rarely |
| Open book? | No | Duration page: "access to Learn is NOT available on Fundamentals exams or GitHub exams." | Rarely |
| Preview features | May appear | Study guide: "Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used." | Rarely |
| Retakes | 24 hours after the first fail, then 14 days; at most 5 in 12 months | Cert page: "You can retake it 24 hours after the first attempt." Retake policy: "A 14-day waiting period is imposed between all subsequent attempts (up to 5)." "You may not take a given exam more than five (5) times within a 12-month period from the first attempt." "You must pay to retake the exam (if applicable.)" | Sometimes |
| Validity | 2 years; moving to Microsoft recertification | Cert page: "GitHub certifications are valid for 2 years. GitHub is transitioning to Microsoft's recertification process…"; "all GitHub certifications that expire before the new recertification process is available will be extended by 6 months." | **Yes** |
| Price | Varies by country | Cert page: "Price based on the country or region in which the exam is proctored." No figure read. | Yes |
| Localised exams | Updated about eight weeks after English | Study guide: "updated approximately eight weeks after the English version is updated"; "you can request an additional 30 minutes" | Rarely |

Two inconsistencies to flag to writers. The study guide says "Skills measured
as of July 2026" but its page footer says "Last updated on 2026-05-14", and the
cert page's "Last Updated" is 05/04/2026. The study guide's generic header
says "Microsoft associate, expert, and specialty certifications expire
annually"; the cert page says GitHub certifications last 2 years. Use the cert
page.

## Naming

**GitHub's own terms.** Re-read in this task on the GitHub Brand Toolkit logo
page (https://brand.github.com/foundations/logo, `[brand-logo.txt]`):
"GITHUB®, the GITHUB® logo design, the INVERTOCAT logo design, OCTOCAT®, and
the OCTOCAT® logo design are trademarks of GitHub, Inc., registered in the
United States and other countries." And: "No adaptation or use of any kind of
any of our registered trademarks or copyrights, or any other contents of this
website, is allowed without the express written permission of GitHub, Inc."
No fair-use or nominative clause was found. As for the two prerequisite decks,
the question stays with the lawyer review in CONTENT-POLICY.md §8, and the
github-foundations release blocker ("GitHub's brand terms need review before
the exam name is used") applies here too.

**Product names are volatile.** GitHub Docs now sell Advanced Security as two
products: "The Advanced Security product has two license SKUs (stock keeping
units): GitHub Secret Protection… GitHub Code Security" (licence billing
page). The docs still say "GitHub Advanced Security" for the original combined
product ("the original GitHub Advanced Security product, or… the two new
products", create-custom-configuration page). The study guide names three
"suites" (Code Security, Secret Protection, Supply Chain Security) and uses
"formerly" labels. Cards should follow the docs' product names.

**How §4 applies.** Name the exam only as a true statement of coverage, in
plain text: "[Site name] deck for the GitHub Advanced Security (GH-500) exam".
No logo, Invertocat, Octocat or Mona. Our brand leads. No "GitHub" in the
domain, and the path `/decks/github/github-advanced-security/` follows §4. Mark
the first use "GitHub®". The exam is delivered through Microsoft Learn, so keep
the Microsoft rule: the mark is never "the leading word or most prominent
element" of the title. "GitHub Advanced Security" is both a product and the
exam name, so the title must make clear the deck is ours and is about the exam.
GitHub is not in §5, so the "Everyone else" notice applies. No page read says
whether "GitHub Advanced Security", "CodeQL" or "Dependabot" is a registered
mark, so the notice does not claim registration for them.

**Deck notice text:**

> GitHub® and GitHub Advanced Security are trademarks of GitHub, Inc. GitHub®
> is registered in the United States and other countries. [Deck title] is an
> independent publication and is not affiliated with, sponsored, endorsed or
> approved by GitHub, Inc. or Microsoft Corporation. Content adapted from
> GitHub Docs (https://docs.github.com), © GitHub, Inc., licensed under
> CC BY 4.0.

**Source licence.** Re-fetched from raw.githubusercontent.com: the github/docs
README (`[docs-README.md]`) says "This project is dual-licensed under:
Creative Commons Attribution 4.0 - for documentation and content in the
assets, content, and data folders (see LICENSE)". `[docs-LICENSE.txt]` begins
"Attribution 4.0 International". So docs.github.com article text is tier B,
matching `src/licences.json` (`^https://docs\.github\.com/`). That covers the
REST reference pages and the one `enterprise-cloud@latest` page used here.
The Microsoft Learn cert page, study guide, duration page and retake policy
carry "© Microsoft 2026" in the footer and sit outside an openly licensed
repository, so they are tier C. Link to the outline; do not copy it. The brand
page is tier C ("© 2026 GitHub, Inc. All rights reserved.").

## Outline

The study guide's "Skills measured as of July 2026", in its order, with its
weights. Domain and sub-heading names are the owner's. Objectives are
shortened into our own labels, because the outline is © Microsoft (tier C).

**1. Describe GitHub Security suites, features, and ecosystem (15–20%)**
- Understand GitHub Security suites and architecture
  - 1.1 Suite structure and navigation [T1]
  - 1.2 Code Security versus Secret Protection versus Supply Chain Security [T1] [T8] [T10]
  - 1.3 Availability: public repositories versus enterprise environments [T1] [T2]
  - 1.4 Security overview: features and benefits [T14]
- Apply secure SDLC and security strategies
  - 1.5 How Secret Protection and Code Security differ and work together [T1]
  - 1.6 End-to-end secure SDLC with the suites [T1] [T4] [T10] [T13]
  - 1.7 Prevention-first versus gate-based strategies [T4] [T10] [T13]
  - 1.8 Security campaigns and risk reduction [T14]
- Detect, manage, and respond to security alerts
  - 1.9 How vulnerabilities and secrets are detected [T3] [T8] [T12]
  - 1.10 Choosing and acting on alerts (management, policies, workflows) [T8] [T13] [T3]
  - 1.11 Ignoring or dismissing alerts: implications and practice [T3] [T8] [T13]
  - 1.12 Developer, security and admin responsibilities [T15] [T3]
- Manage access, governance, and supply chain security
  - 1.13 Alert access, roles, delegated bypass and enforcement [T15] [T4]
  - 1.14 Supply chain concepts and alert information across the SDLC [T7] [T8]

**2. Configure and use Secret Protection (formerly secret scanning) (15–20%)**
- Enable and configure Secret Protection
  - 2.1 Enable at repository and organisation level [T3] [T15]
  - 2.2 Settings and feature availability [T3] [T5] [T1]
  - 2.3 Public versus private/enterprise behaviour [T1] [T3] [T4]
- Prevent secret exposure
  - 2.4 Push protection, preventing secrets at source [T4]
  - 2.5 Validity checks and prioritised alerting [T5]
- Manage and respond to Secret Protection alerts
  - 2.6 Alert lifecycle: creation, status, dismissal [T3]
  - 2.7 Responding and remediating [T3]
  - 2.8 Dismissing or ignoring: implications and practice [T3] [T5]
- Control access, policies, and customization
  - 2.9 Role-based and delegated bypass [T4]
  - 2.10 Alert recipients and exclusions [T3] [T5]
  - 2.11 Custom secret patterns [T5]

**3. Configure and use supply chain security (formerly Dependabot/Dependency Review) (15–20%)**
- Understand and manage dependency and supply chain risks
  - 3.1 Dependency security tools, vulnerability databases, SBOMs [T6] [T7]
  - 3.2 Generate and interpret the dependency graph [T7]
  - 3.3 SBOM export options, formats and context [T7]
- Detect, prioritize, and respond to supply chain alerts
  - 3.4 Supply chain alerts and security updates; EPSS [T8] [T9] [T6]
  - 3.5 Remediating through campaigns and pull requests [T9] [T14]
  - 3.6 Auto-dismiss behaviour and campaign configuration [T8] [T14]
- Secure dependencies during development
  - 3.7 Dependency review: pre-merge checks, licences, configuration [T10]
  - 3.8 Advanced update rules: grouping, auto-dismiss, strategies [T9] [T8]
- Configure policies, permissions, and integrations
  - 3.9 Permissions and alert assignment [T8] [T15]
  - 3.10 Workflow management for dependency security [T9] [T10]
  - 3.11 Notifications, webhooks and integrations [T8] [T14]

**4. Configure and use Code Security (formerly Code Scanning with CodeQL) (10–15%)**
- Understand code scanning approaches and tooling
  - 4.1 Native and third-party options [T11]
  - 4.2 CodeQL versus third-party tools [T11]
  - 4.3 SARIF ingestion, management, interoperability [T11]
- Set up and configure Code Security
  - 4.4 Enable with GitHub Actions or external CI [T11]
  - 4.5 Code scanning workflows and workflow templates [T11]
  - 4.6 Matrix builds and scan frequency [T11]
- Analyze, triage, and remediate code scanning results
  - 4.7 Scan results and data-flow insights [T13]
  - 4.8 Alert lifecycle, autofix, remediation workflows [T13]
  - 4.9 Dismissal, severity and category classifications [T13]
- Optimize and automate Code Security operations
  - 4.10 Advanced configuration and customisation [T12]
  - 4.11 Troubleshooting scan failures and performance [T12] [T11]

**5. Security operations: best practices, prioritization, and remediation (15–20%)**
- Understand vulnerability context and remediation frameworks
  - 5.1 CVE, CWE and GitHub Security Advisory concepts [T6]
  - 5.2 End-to-end remediation across alerts and advisories [T3] [T8] [T13] [T6]
- Prioritize and manage security work at scale
  - 5.3 Severity and remediation rulesets: define, prioritise, enforce [T13] [T15] [T8]
  - 5.4 Campaign-based remediation and bulk alert management [T14] [T13] [T8]
  - 5.5 Automated dismissal and documentation [T8] [T14]
- Customize and optimize security detection
  - 5.6 CodeQL query suites and language-specific analysis [T12]
  - 5.7 Tailoring detection to organisational risk [T12] [T5] [T8]
- Collaborate across roles and enforce governance
  - 5.8 Security roles, delegated exceptions, alert ownership [T15] [T4] [T8]
  - 5.9 Collaboration on alerts and campaigns [T14]
  - 5.10 Cross-suite rulesets, policies and enforcement [T15] [T13] [T10]
- Shift left and strengthen preventive security
  - 5.11 Push protection, dependency scanning, pre-merge analysis [T4] [T10] [T13]

**6. GitHub Security suites administration (10–15%)**
- Roll out and manage security features at scale
  - 6.1 Enable at enterprise, organisation and repository level [T15]
  - 6.2 Availability on GitHub Enterprise Cloud versus Server [T1] [T2] [T15]
- Configure security features and defaults
  - 6.3 Enable Code Security, Secret Protection and supply chain security [T15] [T11] [T3] [T8]
  - 6.4 Default configurations and inheritance [T15]
- Define governance, access, and Code Security workflows
  - 6.5 Enterprise and organisation policies and rulesets [T15]
  - 6.6 Enforcement boundaries, bypass permissions, exceptions [T15] [T4]
  - 6.7 Administrator, security manager and developer roles [T15]
  - 6.8 Permissions to manage and dismiss alerts [T15]
  - 6.9 Default or approved custom CodeQL workflows [T11] [T12]
  - 6.10 APIs and automation for large-scale configuration [T15] [T14]
- Manage CodeQL and security automation
  - 6.11 Default or approved custom CodeQL workflows (repeats 6.9) [T11] [T12]
  - 6.12 APIs and automation (repeats 6.10) [T15] [T14]

Total: 6 domains, 22 sub-headings, 70 objectives. The owner's outline lists
6.11 and 6.12 twice, word for word, under two sub-headings.

## Traps

- [T1] The study guide speaks of three "suites"; the docs sell two licence SKUs. Dependency review, custom auto-triage rules and "premium Dependabot features" belong to Code Security. Dependabot alerts, security updates and version updates are free on all plans.
- [T1] The AGH availability tables mark code scanning, CodeQL CLI, Copilot Autofix, secret scanning and push protection as available on public repositories without a licence. AI-detected secrets, custom patterns, delegated bypass, campaigns and security overview are not.
- [T1] The docs contradict themselves on dependency review. The billing page says "All public repositories have access to code scanning, secret scanning, and dependency review", and the dependency review page says the action "is available for all public repositories". The AGH table marks dependency review "No" for a public repository without Code Security. The same happens with custom auto-triage rules: the table says "No", while the auto-triage page says they are "available on public repositories". Avoid cards that hinge on these two cells.
- [T1] [T2] "You must be on a GitHub Team or GitHub Enterprise plan" to buy either product. On GHE.com and GitHub Enterprise Server every repository needs paid Advanced Security; "All standalone instances of GitHub Enterprise Server use volume/subscription licenses."
- [T2] A licence is one per *active committer* (commit pushed in the last 90 days), counted across the whole organisation or enterprise. GitHub App bots are ignored. Disabling a repository frees only its *unique* committers.
- [T2] Over the licence limit, or at a hard budget, existing enablement keeps working; only new enablement is blocked. Candidates expect features to switch off.
- [T3] Secret scanning does not close an alert when the secret is removed; close it yourself. Rotate or revoke first: removing from history "is time-intensive and often unnecessary".
- [T3] Partner alerts go to the provider, not to the repository. Validity checks are a separate feature that checks secrets in your own alerts.
- [T3] Close-reason names differ: the exclusion page says "ignored by configuration"; the alert filter uses `hidden-by-config`.
- [T3] Generic alerts (private keys, AI-detected passwords) are capped at 5,000 per repository and do not appear in security overview summary views.
- [T4] Push protection for users is on by default and covers public repositories only. Bypassing it creates no alert unless the repository also has push protection. Push protection for repositories is off by default.
- [T4] Bypass reasons: "used in tests" and "false positive" create a *closed* alert; "I'll fix it later" creates an *open* alert.
- [T4] Without delegated bypass, anyone with write access can bypass. With it, others must request; requests expire after 7 days. Organisation owners and security managers can always bypass. An *exemption* skips push protection entirely, which is meant for trusted automation.
- [T4] Limits: only the first five new secrets are shown; a push with over 1,000 existing secrets is not blocked; public-repository pushes over 50 MB are skipped. Push again within three hours after allowing a secret.
- [T5] Custom patterns: 500 per organisation or enterprise, 100 per repository. "Enable" is only available after a successful dry run (sample of up to 1,000 results).
- [T5] `secret_scanning.yml` `paths-ignore`: only the first 1,000 entries apply; a file over 1 MB is ignored entirely.
- [T6] Dependabot does not alert on *unreviewed* advisories. Malware alerts have no fix version.
- [T6] EPSS is a probability of exploitation in the next 30 days (from FIRST); the percentile is a relative rank. CVSS gives the severity. The database supports CVSS 3.1 and 4.0 (imported CVEs also 3.0).
- [T6] GitHub is a CNA and "usually reviews the request within 72 hours".
- [T7] Static analysis finds transitive dependencies only if they are in a lock file. Automatic dependency submission uses Actions minutes. Dependabot graph jobs (Go, Python) do not, and take precedence.
- [T7] SBOM export uses SPDX. SBOMs "do not include dependents". CycloneDX appears only as the format of a third-party upload action.
- [T8] Dependabot scans the default branch. Enabling it sends no notifications for vulnerabilities already present. It skips archived repositories, and alerts on actions only when they are pinned by semantic version, not SHA.
- [T8] Dependabot dismissal reasons (REST enum) are `fix_started`, `inaccurate`, `no_bandwidth`, `not_used` and `tolerable_risk`. States include `auto_dismissed`. Code scanning uses different reasons.
- [T8] Auto-triage rules run *before* notifications. Auto-dismissed alerts can auto-reopen, for example if scope changes from development to production. The development-scoped preset is on by default for public repositories only; the malware preset is off by default.
- [T9] Turning on security updates makes Dependabot try to fix *every* open alert with a patch. To pick alerts, leave it off and use an auto-triage rule.
- [T9] `dependabot.yml` has no effect on Dependabot *alerts*. It lives at `.github/dependabot.yml` (or `.yaml`) on the default branch, with `version: 2`.
- [T9] The concept page lists intervals `daily`, `weekly`, `monthly`; the options reference also lists `quarterly`, `semiannually`, `yearly` and `cron`. Use the reference.
- [T9] The default open-PR limit is five, for version updates only; security PRs have no limit. The default 3-day cooldown also applies only to version updates. Groups never mix ecosystems or security with version updates.
- [T10] Dependency review needs only the dependency graph. The *action* runs free on public repositories and needs Code Security (or GHAS) on private ones. Use `allow-licenses` or `deny-licenses`, never both. It is enforced at scale with a ruleset "Require workflows to pass before merging", not a branch protection rule.
- [T10] Licence compliance is public preview. An Active ruleset blocks; Evaluate only annotates.
- [T11] Default setup scans push and PR to the default or protected branches (not fork PRs) and weekly. The query suites it offers are `default` and `security-extended` only. `security-and-quality` and custom `.qls` suites need advanced setup.
- [T11] External CI: CodeQL CLI `database create` → `database analyze` → `github upload-results`, with a token or GitHub App having `security_events` write. SARIF 2.1.0 subset; 10 MB gzip limit; 25,000 results per run (top 5,000 kept). Several SARIF files for one commit each need a `category`.
- [T11] Default setup pauses weekly scans after 180 days of inactivity. There is a global setting to keep them running every 30 days.
- [T12] Build modes: `none` (interpreted languages plus C/C++, C#, Java, Rust), `autobuild` and `manual` (C/C++, C#, Go, Java, Kotlin, Swift). Use `java-kotlin` and `javascript-typescript` as language names.
- [T12] Three pack types: query packs (run), library packs (no queries), model packs (preview; extend library coverage). Threat models are preview, Java/Kotlin and C# only.
- [T13] Severity (`Error`, `Warning`, `Note`) versus security severity (`Critical`, `High`, `Medium`, `Low`). Security severity wins when present. By default the PR check fails on `error`, `critical` or `high`.
- [T13] Code scanning dismissal reasons (REST enum) are `false positive`, `won't fix`, `used in tests` and `mitigated`. Dismissal applies to all branches. Fixing code closes the alert automatically, which secret scanning does not do.
- [T13] Alert status shows the default branch. A PR shows an alert only if all its lines are in the diff.
- [T13] Copilot Autofix needs no Copilot subscription and is on by default wherever CodeQL runs. Agentic autofix (preview) needs Copilot cloud agent and consumes AI credits. The docs name the model ("GPT-5.3-Codex"); this is volatile, so do not card it.
- [T13] Merge protection rulesets are "not related to status checks". They are org-level only on Enterprise plans, and do not apply to merge queues or to Dependabot PRs analysed by default setup.
- [T14] Campaigns: 1,000 alerts or fewer each, at most 10 active. Managers must be owners or security managers. Secret campaigns are preview, with no tracking issues and no Autofix.
- [T14] Security overview shows default branches only. "No alerts" can mean the feature is off.
- [T15] Security configurations are repository-level; global settings are organisation-level. A default configuration applies only to *new* repositories, not transferred ones. REST changes to an enforced configuration "appear to succeed" but change nothing.
- [T15] Security manager: read on all repositories, write on all security alerts, and can enable or disable GHAS features. It is not an admin role.
- [T15] Delegated alert dismissal on GHES: code and secret scanning from 3.17, Dependabot from 3.21.

## Languages

The cert page lists: "English, Spanish, Portuguese (Brazil), Korean,
Japanese". The study guide says localised exams are updated "approximately
eight weeks after the English version" and offers "an additional 30 minutes"
if the exam is not in the candidate's language. Only English GitHub Docs pages
(`/en/`) were fetched. Translated docs and their licence were not checked.

## Not verified

- **Question count** for GH-500: only Microsoft's generic "40-60".
- **Price:** shown only after choosing a country.
- **"GitHub-recommended security configuration"**: no page fetched describes it. The org coverage index says only "applying recommended or custom configurations". Objective 6.4 is mapped to custom configurations, defaults for new repositories and global settings.
- **"Severity and remediation rulesets"** (5.3): no docs term by that name. Mapped to merge protection rulesets, check-failure severities and auto-triage rules.
- **Feature differences between GHEC and GHES** (6.2): only licensing (volume only on standalone GHES, metered from 3.13 with GitHub Connect), delegated dismissal versions and the malware alert version (3.22+) were read. No GHES-versus-GHEC feature matrix was fetched.
- **Code scanning dismissal reasons** were read only in the REST enum (which includes `mitigated`). The UI how-to shows them only in a screenshot.
- **Dependabot dismissal reasons** likewise come from the REST enum. Their UI labels were not read.
- **Security campaign templates** and the GitHub-authored "security campaign" filters were not fetched.
- **Webhook event names** for code scanning and secret scanning alerts: the webhook payload reference was not fetched. Only `assignees_changed` for Dependabot was read.
- **Whether "GitHub Advanced Security", "CodeQL" or "Dependabot" are registered marks.**
- **Microsoft Learn Terms of Use** were not fetched; the tier C call rests on the footer and CONTENT-POLICY.md §3.
- **The Microsoft Learn training modules** (GitHub Advanced Security Part 1 and Part 2), named in the study guide, were not fetched. They are tier C.
