# Research brief: GitHub Actions (GH-200)

Slug: `github-actions`. Family prefix: `gha`. Prerequisite deck:
`github-foundations` (its terms for GitHub Actions, workflow, event, job,
action, runner, GitHub Marketplace, fork, branch protection rule, outside
collaborator and identity provider are reused as topic 0).
Researched 25 September 2026. Every fact below was read in a source fetched
during this task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/github-actions/`.
GitHub Docs pages were read as Markdown through the docs site's article
endpoint (`https://docs.github.com/api/article/body?pathname=/en/<path>`), as
for github-foundations, and saved in `md/`. docs.github.com's robots.txt has
no disallow rules. Every `#anchor` in the concept list was checked against the
headings of the saved page, except the three on github.com (the VS Code
extension README), which were checked by eye.

## Topics

| Topic | Name | Study-guide domain |
|---|---|---|
| T1 | Workflow triggers and events | 1. Author and manage workflows (20–25%) |
| T2 | Jobs, steps, matrices and containers | 1 (structure), 2 (interpret anchors and matrices) |
| T3 | Contexts, expressions and variables | 1 (structure) |
| T4 | Workflow data: outputs, artifacts, caches and summaries | 1 (execution and outputs) |
| T5 | Running, monitoring and troubleshooting workflows | 2. Consume and troubleshoot workflows (15–20%) |
| T6 | Reusable workflows and workflow templates | 2 (templates), 4 (reusable components) |
| T7 | Building custom actions | 3. Author and maintain actions (15–20%) |
| T8 | Publishing and versioning actions | 3 (distribute and maintain) |
| T9 | Governing Actions in organisations and enterprises | 4. Manage GitHub Actions for the enterprise (20–25%), 5 (policies) |
| T10 | Runners | 4 (runners at scale) |
| T11 | Secrets and configuration variables | 4 (secrets and variables) |
| T12 | Security hardening and optimisation | 5. Secure and optimize automation (10–15%) |

## Exam facts

Sources: the Microsoft Learn certification page
(https://learn.microsoft.com/en-us/credentials/certifications/github-actions/,
"Last Updated 08/07/2026", `updated_at` 2026-09-22, `[ms-cert.txt]`), the
GH-200 study guide
(https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-200,
"Last updated on 2026-02-05", `[ms-studyguide.txt]`), Microsoft's exam
duration page
(https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience,
`updated_at` 2026-06-04, `[ms-duration.txt]`) and the retake policy
(https://learn.microsoft.com/en-us/credentials/support/retake-policy,
`updated_at` 2026-07-27, `[ms-retake.txt]`).

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | GitHub; the exam is listed and scheduled through Microsoft Learn and Pearson VUE | Cert page: "Product GitHub"; "Schedule through Pearson Vue"; "GitHub is transitioning to Microsoft's recertification process" | Rarely |
| Exam code and name | GH-200, "Exam GH-200: GitHub Actions" | Study guide title; cert page links "Exam GH-200 study guide" | Rarely |
| Current version | Skills "as of January 2026" | Study guide: "Skills measured as of January 2026"; change log: "This exam has changed significantly (e.g., new objectives were added, some were removed, existing objectives may have moved to different functional groups, and all were reworded) on January, 2026." | **Yes** |
| Level | Intermediate | Cert page: "Level Intermediate"; "designed for DevOps engineers, software developers, and IT professionals with intermediate level experience in GitHub Actions" | Rarely |
| Audience | Automating software development workflows with Actions | Study guide: "Candidates for this exam should have expertise in automating software development workflows with GitHub Actions… Candidates should also be familiar with CI/CD, GitHub repositories, GitHub Packages, and integrating third-party services." | Rarely |
| Time | 100 minutes | Cert page: "You will have 100 minutes to complete this assessment." (The duration page's table gives 100 minutes for "Associate and expert role-based exams without labs"; the exam page is the authority.) | Sometimes |
| Question count | Not published for GH-200 | Duration page, generic: "Most Microsoft Certification exams typically contain between 40-60 questions; however, the number can vary depending on the exam." | Yes |
| Pass mark | 700 | Study guide: "A score of 700 or greater is required to pass." | Rarely |
| Format | Proctored; question types not disclosed; sandbox available | Cert page: "This exam will be proctored. You may have interactive components to complete as part of this exam." Duration page: "we don't identify specific exam formats or question types before the exam." | Rarely |
| Open book? | No | Duration page: "access to Learn is NOT available on Fundamentals exams or GitHub exams." | Rarely |
| Preview features | May appear | Study guide: "Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used." | Rarely |
| Retakes | 24 hours after the first fail, then 14 days; at most 5 in 12 months | Cert page: "You can retake it 24 hours after the first attempt." Retake policy: "A 14-day waiting period is imposed between all subsequent attempts (up to 5)." "You may not take a given exam more than five (5) times within a 12-month period from the first attempt." "You must pay to retake the exam (if applicable.)" | Sometimes |
| Validity | 2 years; moving to Microsoft recertification | Cert page: "GitHub certifications are valid for 2 years. GitHub is transitioning to Microsoft's recertification process, which will provide a new way for candidates to maintain their certifications without retaking the full certification exam." Also: "all GitHub certifications that expire before the new recertification process is available will be extended by 6 months." | **Yes** |
| Price | Varies by country | Cert page: "Price based on the country or region in which the exam is proctored." No figure read. | Yes |
| Localised exams | Updated about eight weeks after English | Study guide: "updated approximately eight weeks after the English version is updated"; "you can request an additional 30 minutes" if not in your language | Rarely |

The study guide's generic header still says "Microsoft associate, expert, and
specialty certifications expire annually"; the GH-200 cert page says GitHub
certifications are valid for 2 years. Use the cert page.

## Naming

**What GitHub's own pages say.** Re-read in this task on the GitHub Brand
Toolkit logo page (https://brand.github.com/foundations/logo,
`[brand-logo.txt]`), under "Legal": "GITHUB®, the GITHUB® logo design, the
INVERTOCAT logo design, OCTOCAT®, and the OCTOCAT® logo design are trademarks
of GitHub, Inc., registered in the United States and other countries." And:
"No adaptation or use of any kind of any of our registered trademarks or
copyrights, or any other contents of this website, is allowed without the
express written permission of GitHub, Inc." Its "Don't do these things" list
includes "Imply affiliation: Do not use the GitHub name or any GitHub logo in a
way that suggests you are GitHub, your offering or project is by GitHub, or
that GitHub is endorsing you or your offering or project" and "Use without
permission: Do not use GitHub trademarks, logos, or artwork without GitHub's
prior written permission." As for github-foundations, no fair-use or
nominative clause was found; the question stays with the lawyer review in
CONTENT-POLICY.md §8, and the github-foundations deck's release blocker
("GitHub's brand terms need review before the exam name is used") applies here
too.

**How §4 applies.** Same as github-foundations. Name the exam only as a true
statement of coverage, in plain text: "[Site name] deck for the GitHub Actions
(GH-200) exam". No logo, Invertocat, Octocat or Mona; our brand leads; no
"GitHub" in the domain; the path `/decks/github/github-actions/` follows §4.
Mark the first use "GitHub®". The exam is delivered through Microsoft Learn,
so keep the Microsoft rule: the mark is never "the leading word or most
prominent element" of the title. "GitHub Actions" is both the product and the
exam name; the deck title must make clear it is our deck about the exam, not
the product. GitHub is not in §5, so the "Everyone else" notice applies.
Whether "GitHub Actions" is itself a registered mark was not stated on any page
read; the notice below does not claim registration for it.

**Deck notice text:**

> GitHub® and GitHub Actions are trademarks of GitHub, Inc. GitHub® is
> registered in the United States and other countries. [Deck title] is an
> independent publication and is not affiliated with, sponsored, endorsed or
> approved by GitHub, Inc. or Microsoft Corporation. Content adapted from
> GitHub Docs (https://docs.github.com), © GitHub, Inc., licensed under
> CC BY 4.0, and from the GitHub Actions for VS Code README, © GitHub,
> MIT License.

**Source licence.** The github/docs README (`[docs-README.md]`, fetched from
raw.githubusercontent.com) says: "This project is dual-licensed under:
Creative Commons Attribution 4.0 - for documentation and content in the
assets, content, and data folders (see LICENSE)". `[docs-LICENSE.txt]` begins
"Attribution 4.0 International". So docs.github.com article text is tier B,
matching `src/licences.json` (`^https://docs\.github\.com/` → "B · CC BY 4.0").
This includes the `enterprise-cloud@latest` pages and the REST reference pages
used here. The GitHub Actions for VS Code README (github.com/github/vscode-github-actions)
says "This project is licensed under the terms of the MIT open source
license"; its LICENSE reads "MIT License / Copyright GitHub" (tier B; not yet
in `src/licences.json`, so add a rule or check it by hand). The Microsoft Learn
study guide and cert page carry "© Microsoft 2026" in the footer and sit
outside an openly licensed repository: tier C. Link to the outline, do not
copy it.

## Outline

The study guide's "Skills measured as of January 2026", in its order, with its
weights. Domain and sub-heading names are the owner's; objectives are
shortened into our own labels (the outline is © Microsoft, tier C).

**1. Author and manage workflows (20–25%)**
- Configure workflow triggers and events
  - 1.1 Scheduled, manual, webhook and repository events [T1]
  - 1.2 Scope, permissions and events for automation [T1] [T12]
  - 1.3 workflow_dispatch inputs; workflow_call inputs and secrets [T1] [T6]
- Design and implement workflow structure
  - 1.4 Jobs, steps and conditional logic [T2] [T3]
  - 1.5 Dependencies between jobs [T2]
  - 1.6 Workflow commands and environment variables [T4] [T3]
  - 1.7 Service containers: ports, health checks, options [T2]
  - 1.8 Matrix: include/exclude, fail-fast, max-parallel; runner image changes [T2] [T10]
  - 1.9 YAML anchors and aliases [T2]
  - 1.10 Predefined contexts; immutable actions and version pinning [T3] [T8] [T12]
  - 1.11 Expressions, parse-time versus runtime evaluation, secret leakage [T3] [T12]
  - 1.12 Editor tooling: the GitHub Actions VS Code extension [T2]
- Manage workflow execution and outputs
  - 1.13 Caching and artifacts; retention policies via REST [T4] [T9]
  - 1.14 Passing data between jobs and steps (artifacts, outputs, GITHUB_ENV, GITHUB_OUTPUT, reusable workflow outputs) [T4] [T6]
  - 1.15 Job summaries with GITHUB_STEP_SUMMARY [T4]
  - 1.16 Status badges and environment protections [T4] [T12]

**2. Consume and troubleshoot workflows (15–20%)**
- Interpret workflow behavior and results
  - 2.1 Identify triggers and effects from configuration and logs [T5] [T1]
  - 2.2 Diagnose failed runs from logs and run history [T5]
  - 2.3 Expand YAML anchors, aliases and merged mappings [T2]
  - 2.4 Interpret matrix expansions; re-run individual matrix jobs [T2] [T5]
- Access workflow artifacts and logs
  - 2.5 Locate workflows, logs and artifacts in the UI and API [T5]
  - 2.6 Download and manage artifacts [T5]
- Use and manage workflow templates
  - 2.7 Consume organisation-level and reusable workflows [T6]
  - 2.8 Consume non-public organisation workflow templates [T6]
  - 2.9 Starter workflows (public and private); adapt them [T6]
  - 2.10 Starter workflows versus reusable workflows versus composite actions [T6]
  - 2.11 Disabling versus deleting workflows [T5]

**3. Author and maintain actions (15–20%)**
- Create and troubleshoot custom actions
  - 3.1 Action types (JavaScript, Docker, composite); immutable actions and pinning [T7] [T8]
  - 3.2 Troubleshoot action execution and errors [T7] [T5]
- Define action structure and metadata
  - 3.3 Required files, directory structure and metadata [T7]
  - 3.4 Workflow commands within actions [T7] [T4]
- Distribute and maintain actions
  - 3.5 Distribution models: public, private, Marketplace [T8]
  - 3.6 Publish to GitHub Marketplace [T8]
  - 3.7 Versioning and release strategies [T8]

**4. Manage GitHub Actions for the enterprise (20–25%)**
- Distribute and govern actions and workflows
  - 4.1 Reusable components and templates [T6]
  - 4.2 Control access to actions and workflows in the enterprise [T9]
  - 4.3 Organisational use policies [T9]
- Manage runners at scale
  - 4.4 Configure and monitor GitHub-hosted and self-hosted runners [T10]
  - 4.5 IP allow lists and networking [T10]
  - 4.6 Runner groups; troubleshoot runners [T10]
  - 4.7 Preinstalled software on hosted runners; installing more at runtime [T10] [T4]
- Manage encrypted secrets and variables
  - 4.8 Scope secrets and variables at organisation, repository and environment level [T11]
  - 4.9 Use secrets and variables in workflows and actions; manage them via REST [T11]

**5. Secure and optimize automation (10–15%)**
- Implement security best practices
  - 5.1 Environment protections and approval gates [T12]
  - 5.2 Trustworthy Marketplace actions [T8] [T12]
  - 5.3 Script injection mitigation [T12]
  - 5.4 GITHUB_TOKEN lifecycle, granular permissions, contrast with PAT [T12]
  - 5.5 OIDC (id-token permission) for cloud federation [T12]
  - 5.6 Pin third-party actions to full commit SHAs [T12] [T8]
  - 5.7 Action usage policies: allow/deny lists, reviewers for unverified actions [T9]
  - 5.8 Artifact attestations and provenance (SLSA) [T12]
- Optimize workflow performance and cost
  - 5.9 Caching and artifact retention; retention via REST [T12] [T9] [T4]
  - 5.10 Scaling and optimisation strategies [T12] [T2]

Total: 5 domains, 14 sub-headings, 53 objectives.

## Traps

- [T1] `pull_request` versus `pull_request_target`: the second "runs in the context of the default branch of the base repository, rather than in the context of the merge commit". Workflows it triggers "will always run, regardless of approval settings".
- [T1] Scheduled workflows run "only on the default branch", "The shortest interval… is once every 5 minutes", can be delayed or dropped at the top of the hour, and in a public repository are disabled after 60 days without activity.
- [T1] Schedules now accept an optional IANA `timezone`; older material says schedules are UTC only. UTC is still the default.
- [T1] `workflow_dispatch` needs the workflow on the default branch. Input types: `boolean`, `choice`, `number`, `environment`, `string`. At most 25 top-level inputs.
- [T1] Events made with `GITHUB_TOKEN` do not start new runs, except `workflow_dispatch` and `repository_dispatch`; `pull_request` runs it creates wait for approval.
- [T2] `fail-fast` defaults to `true` and applies to the whole matrix; `continue-on-error` applies to one job. Candidates swap them.
- [T2] A matrix can generate at most 256 jobs per run. Default job `timeout-minutes` is 360.
- [T2] Service containers: a job in a container reaches a service by its label as hostname, with no port mapping; a job on the runner machine uses `localhost` and mapped ports. Service, job and Docker containers need Linux (Ubuntu on GitHub-hosted).
- [T2] YAML anchors are `&` and aliases `*`. The docs show both but not the merge key `<<`, which the outline names (see Not verified).
- [T2] Concurrency: by default a new pending run cancels the existing pending one; `queue: max` (new) allows up to 100 pending and cannot be combined with `cancel-in-progress: true`. Group names are case insensitive.
- [T2] [T10] The outline mentions "Ubuntu 20.04 deprecation" and a "Windows Server 2025 migration for windows-latest". The current runner table lists `ubuntu-22.04`, `ubuntu-24.04`, `ubuntu-26.04` (and `ubuntu-latest` → 24.04 image), with no 20.04; `windows-latest` links to the Windows 2025 image. `-latest` labels are "the latest stable images… might not be the most recent version of the operating system".
- [T3] `${{ }}` can usually be omitted in `if`. `success()` is applied unless another status function is used. The docs warn against `always()` for critical tasks and recommend `if: ${{ !cancelled() }}`.
- [T3] Contexts can be evaluated before a job reaches a runner; default environment variables exist only on the runner.
- [T3] Variables render unmasked in logs; use secrets for sensitive values. `GITHUB_*` and `RUNNER_*` default variables cannot be overwritten.
- [T4] `GITHUB_ENV` makes a value available to subsequent steps, not the step that writes it. `GITHUB_OUTPUT` needs a step `id`. `GITHUB_STEP_SUMMARY` is per step, 1 MiB limit.
- [T4] `::set-output` and `::set-env` appear on none of the pages read; the current workflow commands page sets outputs and variables through environment files (`GITHUB_OUTPUT`, `GITHUB_ENV`). Prep material using the old commands is out of date.
- [T4] Artifacts versus caches: caches are for files that "don't change often between workflow runs"; artifacts are for files produced by a job, to view after the run or pass between jobs. "cannot be used interchangeably".
- [T4] [T12] Cache: 10 GB per repository by default (raisable); entries not accessed in over 7 days are removed.
- [T5] Re-run within 30 days, at most 50 times; re-runs use the privileges, SHA and ref of the original actor and event.
- [T5] Disabling keeps the workflow file and can be undone; forks of public repositories have scheduled workflows disabled by default.
- [T5] Step debug logging is `ACTIONS_STEP_DEBUG`; runner diagnostic logging is `ACTIONS_RUNNER_DEBUG`. If both a secret and a variable are set, the secret wins.
- [T6] "Starter workflows" are now called workflow templates in the docs; the repository is still `actions/starter-workflows`. The outline uses both words.
- [T6] Reusable workflows: up to ten levels; at most 50 unique reusable workflows per file; called from a job, not a step; workflow-level `env` is not passed down. Composite actions run as one step, "Cannot use secrets" (per the comparison table) and can be published to Marketplace; reusable workflows cannot.
- [T6] Organisation workflow templates live in a `.github` repository, `workflow-templates` directory, each with a `.properties.json` metadata file. A private `.github` repository's templates are available only to private repositories.
- [T7] Docker container actions run only on Linux runners and are slower than JavaScript actions. The metadata file is `action.yml` or `action.yaml`. `runs.using` for JavaScript is `node20` or `node24` (the only two values listed).
- [T8] Marketplace publishing: public repository, a single root metadata file, a unique name; published "immediately and aren't reviewed by GitHub".
- [T8] [T12] The outline's "immutable actions" is not a docs term. The docs have immutable releases (tag and assets locked, release attestation generated) and say pinning to a full-length commit SHA "is currently the only way to use an action as an immutable release".
- [T9] An organisation-only actions policy blocks `actions/checkout` and other GitHub-authored actions. The "require full-length commit SHA" policy still lets reusable workflows be referenced by tag.
- [T9] New organisations: `GITHUB_TOKEN` read-only for `contents` and `packages`; workflows cannot create or approve pull requests.
- [T9] Recent change: Actions policies now include "workflow execution protections" (actor and event rules), and a default policy blocking `pull_request_target` in public repositories "will be enforced on November 2, 2026".
- [T9] Recent change: "Starting October 1, 2026", retention settings also apply to checks, workflow runs and commit statuses. Default 90 days; 1–90 days public, 1–400 days private.
- [T10] Self-hosted jobs with no matching idle runner stay queued, then fail after 24 hours. Runners belong to one group at a time and start in the default group.
- [T10] With an IP allow list, Actions needs self-hosted runners or larger runners with static IPs. Hosted runner IP ranges come from `GET /meta` and are not recommended as allowlists.
- [T11] Precedence: environment beats repository beats organisation (secrets and configuration variables alike). Secrets cannot be used directly in `if:`.
- [T11] Limits: secrets 48 KB; 1,000 organisation, 100 repository, 100 environment secrets. Variables 48 KB; 1,000 organisation, 500 repository, 100 environment.
- [T12] `GITHUB_TOKEN` expires when the job ends; up to 6 hours on hosted runners, refreshable up to 24 hours on self-hosted. The workflow syntax page gives only "a maximum of 24 hours".
- [T12] OIDC needs `id-token: write`, which "does not grant write access to other resources".
- [T12] Required reviewers: up to six; only one must approve. Wait timer 1–43,200 minutes. On Free, Pro and Team these work only in public repositories.
- [T12] Artifact attestations alone give SLSA v1.0 Build Level 2 and are "not a guarantee that an artifact is secure". The current action is `actions/attest`.

## Languages

The cert page lists: "English, Spanish, Portuguese (Brazil), Korean,
Japanese". The study guide says localised exams are updated "approximately
eight weeks after the English version" and offers "an additional 30 minutes"
if the exam is not in the candidate's language. Only English GitHub Docs pages
(`/en/`) were fetched; translated docs and their licence were not checked.

## Not verified

- **Question count** for GH-200: only Microsoft's generic "40-60".
- **Price:** shown only after choosing a country.
- **YAML merge key `<<`**: named in the outline; the docs' anchors section (concept and reference pages) shows only `&` and `*`, linking to the YAML 1.2.2 specification. Not fetched from yaml.org.
- **"Immutable actions rollout on hosted runners"**, **"immutable actions enforcement"** and **"registry sources"**: no docs page with these terms. Mapped to immutable releases and SHA pinning.
- **"Required reviewers for unverified actions"** (objective 5.7): no docs page found. Mapped to the allow/block policies.
- **Ubuntu 20.04 deprecation date** and the date `windows-latest` moved to Windows Server 2025: not stated on any page read (runner-images READMEs and the GitHub changelog were not fetched).
- **Merged mapping analysis, "static (workflow parse) vs runtime evaluation"**: no docs section of that name; mapped to "Determining when to use contexts" and context availability.
- **Scaling and optimisation strategies** (5.10): no single docs page; mapped to concurrency, matrix, caching and limits pages.
- **Scheduling window, ID rules and registration steps** for GitHub exams were not re-read in this task (github-foundations read them on GitHub Docs).
- **Microsoft Learn Terms of Use** were not fetched; the tier C call rests on the page footer and CONTENT-POLICY.md §3.
- **Whether "GitHub Actions" is a registered trademark** was not stated on the brand page.
- **resources.github.com and examregistration.github.com** were not fetched; github-foundations found both served an empty JavaScript shell.
