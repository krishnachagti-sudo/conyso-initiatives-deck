# Research brief: HashiCorp Certified: Terraform Associate (004)

Slug: `terraform-associate`. Family prefix: `tfa`. Researched 26 September 2026.
Every fact below was read in a source fetched during this task. Saved copies
and extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/terraform-associate/`
(documentation pages in `docs/`, as `.html` plus extracted `.txt` with
`{#anchor}` markers on headings). All 127 source URLs returned 200, and every
`#anchor` in `terraform-associate-concepts.json` was checked against the saved
HTML of that page. No prerequisite deck: nothing in the repo teaches Terraform,
so no term is at topic 0.

## Terms and licences (read first)

**Result: no stop condition was found, but the docs are tier C, not tier B.**

1. **Terraform documentation licence.** The docs source moved out of
   `hashicorp/terraform`: its `website/README.md` says "Product documentation
   previously located in `/website` has moved to the
   `hashicorp/web-unified-docs` repository". That repository's root `LICENSE`
   is the **Business Source License 1.1**, not MPL 2.0: "Licensor:
   International Business Machines Corporation (IBM)", "Licensed Work:
   /web-unified-docs. The Licensed Work is (c) 2024 IBM Corp." It grants "the
   right to copy, modify, create derivative works, redistribute, and make
   non-production use", and the Additional Use Grant adds that "Products that
   are not provided on a paid basis are not competitive." So derivative works
   are allowed. But the licence also says: "All copies of the original and
   modified Licensed Work, and derivative works of the Licensed Work, are
   subject to this License." Our decks are CC BY-SA 4.0, and BUSL is not among
   the licences CONTENT-POLICY.md §3 lists for tier B. So the docs text is
   **tier C**: facts in our own words, linked, never copied. The "Change
   License: MPL 2.0" applies only four years after each version is published.
   The `hashicorp/terraform` product `LICENSE` is the same BUSL 1.1 text
   ("Terraform Version 1.6.0 or later").
2. **Per-file licence.** A sampled MDX file
   (`content/terraform/v1.12.x/docs/intro/index.mdx`) has no licence header.
   No `LICENSE` exists under `content/` or `content/terraform/` (both 404).
   The root BUSL file is the only licence statement found.
3. **Website terms.** Every developer.hashicorp.com page links its footer "Terms
   of Use" to `https://www.hashicorp.com/terms-of-service`. That host answers
   curl with HTTP 429 and a "Vercel Security Checkpoint" page, so the raw text
   could not be read. The WebFetch tool did return the page, and it quoted:
   "The Website and the content provided in the Website, including, but not
   limited to, graphic images, audio, video, html code, buttons, and text, may
   not be copied, reproduced, republished, uploaded, posted, transmitted, or
   distributed in any way, without the prior written consent of HashiCorp",
   with a personal-use exception "provided that you do not modify the
   material", and "Last updated: March 2018". It reported no clause on AI,
   machine learning, scraping or derivative works. That is the
   all-rights-reserved, personal-use pattern CONTENT-POLICY §3 already places
   in tier C (as with AWS). It is **not** an AI ban like FINRA's or the IAPP's.
   These quotes came through a summarising tool; see "Not verified".
4. **robots.txt.** developer.hashicorp.com: `User-agent: * / Allow: /`.
   registry.terraform.io: `Disallow:` (empty). opentofu.org has no robots.txt
   (404). hashicorp-certifications.zendesk.com allows `/hc/en-us/articles`, but
   both articles returned a Cloudflare "Just a moment… Enable JavaScript and
   cookies" challenge (403). I did not try to get round it.
5. **OpenTofu (fallback).** The docs footer reads: "Copyright © OpenTofu a
   Series of LF Projects, LLC and its contributors. Documentation materials
   incorporate content licensed under the MPL-2.0 license from other authors.
   For web site terms of use … please see https://lfprojects.org/policies." The
   `opentofu/opentofu` repository `LICENSE` is "Mozilla Public License, version
   2.0" ("Copyright (c) The OpenTofu Authors / Copyright (c) 2014 HashiCorp,
   Inc."). The LF Projects Terms of Use (effective 14 September 2017) put
   lfprojects.org's own content under CC BY 4.0, but exclude "contributions of
   code and artifacts to any Project", which follow the project's charter. So
   the OpenTofu docs are MPL 2.0 through the repository. **MPL 2.0 is a
   file-level copyleft licence and is not listed in §3.** I have tiered it C,
   pending a policy decision. If the policy owner accepts MPL 2.0 as tier B,
   OpenTofu text could be adapted with its notice wherever the facts match.
   The lfprojects.org robots.txt carries `Content-Signal: ai-train=yes,
   search=yes, ai-input=yes`.
6. **Exam outline and study guides** (developer.hashicorp.com
   `/certifications/…` and `/terraform/tutorials/certification-004/…`) carry no
   licence of their own, only the site terms. They are **tier C**: link, and
   label our coverage in our own words. The sample-questions page is used only
   for the question *formats*. No sample question may be used or adapted.

## Exam facts

All facts come from https://developer.hashicorp.com/certifications/infrastructure-automation
`[cert-certifications_infrastructure-automation.txt]` unless stated otherwise.

| Fact | Value | Quote | Changes often? |
|---|---|---|---|
| Owner | HashiCorp, now licensed by IBM | Page heading "HashiCorp Certified: Terraform Associate (004)". Docs licensor: "International Business Machines Corporation (IBM)" | Rarely |
| Current version | 004 | "Terraform Associate (004)" | **Yes**: 003 was replaced |
| Product version tested | Terraform 1.12 | "Product version tested: Terraform 1.12" | **Yes** |
| Level | Foundational | "Prove your foundational Terraform knowledge and skills in an hour-long multiple-choice exam." | Rarely |
| Audience | Cloud engineers | "…a Cloud Engineer with foundational Terraform knowledge and skills, who can identify Terraform Enterprise features and distinguish them from Community edition." | Rarely |
| Prerequisites | None formal | "Basic terminal skills" and "Understanding of on-premises and cloud architecture" | Rarely |
| Format | Multiple choice, online proctored | "Assessment Type Multiple choice", "Format Online proctored" | Rarely |
| Question types | True/false, multiple choice, multiple answer | "HashiCorp Associate-level certification exams consist of true or false, multiple choice, and multiple answer question types." https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-questions-004 | Rarely |
| Time | 1 hour | "Duration 1 hour" | Sometimes |
| Price | $70.50 | "$70.50 USD, plus locally applicable taxes and fees. Free retake not included." | **Often** |
| Retake | No free retake | Same quote | Sometimes |
| Language | English | "Language English" | Sometimes |
| Validity | 2 years | "Credential Expiration 2 years". Hub page: "HashiCorp Certifications are valid for two years." https://developer.hashicorp.com/certifications | Rarely |
| Renewal | Pass the same or a higher exam, up to 6 months before expiry | Hub: "To recertify, pass an exam for the same product at the same level or higher. You can take your recertification exam up to 6 months before your certification expires." The 004 page gives three scenarios: holders of 004, of 002/003, and of an expired credential. | Sometimes |
| Credential | Credly badge and certificate | Hub: "HashiCorp offers a digital badge and downloadable certificate through Credly." | Rarely |
| Question count | **Not published** on any page read | — | — |
| Pass mark | **Not published** on any page read | — | — |
| Domain weights | **None published.** The page lists eight objectives, with no percentages. | — | — |
| Docs versions | The version selector on v1.12.x pages lists "v1.16.x (latest)" and "v1.17.x (beta)" | `[docs/…manage_sensitive_data.txt]` | **Often** |

**003 to 004 changes** (same page, and the review guide): "Four new topics":
4f "`depends_on` and `create_before_destroy` lifecycle rules", 4g "Validate
configuration using custom conditions", 4h "Ephemeral values and write-only
arguments", and 8c "Describe how to organize and use HCP Terraform workspaces
and projects". It also "Tests on Terraform version 1.12" and "Includes HCP
Terraform content".

## Naming

- **Marks.** The trademark policy (https://www.hashicorp.com/trademark-policy,
  read only through WebFetch) names Terraform (with the "stylized T"), Vault,
  Consul, Nomad, Waypoint, Packer, Boundary and HashiCorp®. Its attribution
  form is "[Mark] and the [Logo name] are trademarks of HashiCorp." Its
  fair-use rule is "you must be accurate and not misleading, that such fair use
  generally extends only to use word marks, and that you should not use the
  marks more prominently or frequently than necessary". It also says "You may
  not use HashiCorp trademarks in your own domain names." The tool found no
  rule specific to training material. Whether "HashiCorp Certified" is itself a
  registered mark was not found. BUSL 1.1 also says: "This License does not
  grant you any right in any trademark or logo of Licensor".
- **How CONTENT-POLICY.md §4 applies.** HashiCorp is not in §5 (bodies not yet
  named), so the general rule and the "Everyone else" notice apply. The
  trademark policy's own rules match that: word marks only, no logo (the
  "stylized T" is a logo), not more prominent than needed, and never in a
  domain. Title: `[Site name] deck for the HashiCorp Certified: Terraform
  Associate (004) exam`. Never "Terraform Flashcards", "official" or
  "certified". The URL path `/decks/hashicorp/terraform-associate/` is fine;
  the trademark policy bars marks only in domain names. `examRefsCleared`
  should stay false until the policy owner decides, because the outline is
  tier C.
- **Deck notice text:**
  > HashiCorp, Terraform and HashiCorp Certified: Terraform Associate are
  > trademarks of HashiCorp. This deck is independent and is not affiliated
  > with, sponsored, endorsed or approved by HashiCorp or IBM.
- **OpenTofu.** If a card cites OpenTofu, the LF Projects trademark policy
  (https://lfprojects.org/policies/trademark-policy/) applies. It was listed
  on the policies page but not fetched.

## Topics

| Topic | Name | Objectives |
|---|---|---|
| T1 | Infrastructure as code and Terraform | 1 |
| T2 | Providers and state basics | 2 |
| T3 | The core workflow and CLI | 3 |
| T4 | Configuration blocks, values and types | 4a–4d |
| T5 | Dynamic configuration, dependencies, validation and secrets | 4e–4h |
| T6 | Modules | 5 |
| T7 | State, backends and maintenance | 6, 7 |
| T8 | HCP Terraform | 8 |

## Outline

These are the eight objective groups on the exam page, in HashiCorp's order,
with its numbering. They are labelled in our own words because the outline is
tier C: link to it, do not copy it. No weights are published. The review guide
(https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-review-004)
maps each objective to docs pages. Those pages, pinned to `v1.12.x` where a
versioned page exists, are the concept sources.

**1. Infrastructure as code with Terraform**
- 1a What IaC is [T1]
- 1b Benefits of IaC patterns [T1]
- 1c Multi-cloud, hybrid and service-agnostic workflows [T1]

**2. Terraform fundamentals**
- 2a Installing and versioning providers [T2]
- 2b How Terraform uses providers [T2]
- 2c Configurations with more than one provider [T2]
- 2d How Terraform uses and manages state [T2]

**3. Core workflow**
- 3a The workflow [T3]
- 3b Initialising a working directory [T3]
- 3c Validating configuration [T3]
- 3d Creating and reviewing a plan [T3]
- 3e Applying changes [T3]
- 3f Destroying managed infrastructure [T3]
- 3g Formatting and style [T3]

**4. Terraform configuration**
- 4a Resource vs data blocks [T4]
- 4b Attribute and cross-resource references [T4]
- 4c Variables and outputs [T4]
- 4d Complex types [T4]
- 4e Expressions and functions [T5]
- 4f Resource dependencies, including `depends_on` and `create_before_destroy` [T5]
- 4g Custom conditions [T5]
- 4h Sensitive data, ephemeral values, write-only arguments and Vault [T5]

**5. Modules**
- 5a Module sources [T6]
- 5b Variable scope in modules [T6]
- 5c Using modules [T6]
- 5d Module versions [T6]

**6. State management**
- 6a The local backend [T7]
- 6b State locking [T7]
- 6c Remote state with the backend block [T7]
- 6d Drift and state (refresh-only, `moved`, `removed`, refactoring) [T7]

**7. Maintaining infrastructure**
- 7a Importing existing infrastructure [T7]
- 7b Inspecting state with the CLI [T7]
- 7c Verbose logging [T7]

**8. HCP Terraform**
- 8a Creating infrastructure with HCP Terraform [T8]
- 8b Collaboration and governance features [T8]
- 8c Workspaces and projects [T8]
- 8d The HCP Terraform CLI integration [T8]

Counts: 8 groups and 36 objectives, 44 outline items in all. Every objective
maps to at least one concept. The less obvious mappings:
- **1c** maps to `tfa.multi-cloud-deployment`, `tfa.hybrid-cloud` and
  `tfa.service-agnostic`.
- **3a** maps to `tfa.core-workflow`, with its team variant `tfa.workflow-team`.
- **4f** maps to `tfa.implicit-dependency`, `tfa.depends-on`,
  `tfa.depends-on-last-resort`, `tfa.create-before-destroy`,
  `tfa.default-destroy-then-create`, `tfa.cbd-propagates` and
  `tfa.dependency-graph`.
- **4h** maps to `tfa.secrets-in-state`, `tfa.state-plaintext`,
  `tfa.sensitive-argument`, the ephemeral and write-only concepts, and
  `tfa.vault-provider` (tutorial page).
- **8b** maps to the policy, private registry, Explorer, change requests,
  teams, health, drift detection, continuous validation, dynamic credentials and
  variable set concepts. These are exactly the pages the review guide lists.
- **8d** maps to `tfa.cloud-block`, `tfa.terraform-login` and
  `tfa.migrate-state-hcp`.
- The audience line ("identify Terraform Enterprise features and distinguish
  them from Community edition") maps to `tfa.terraform-enterprise` and
  `tfa.hcp-free`. I found no "Community edition" definition page, so that
  wording is not taught.

**Figures.** None chosen. The docs are tier C, so their diagrams may not be
reused.

## Traps

- [T1] Terraform's configuration is declarative: it describes the end state, not the steps. The write/plan/apply cycle is called both "three stages" (intro) and "three steps" (Core Workflow page).
- [T1] "Terraform Cloud is now HCP Terraform", effective 22 April 2024. Older material says Terraform Cloud; 004 says HCP Terraform. [also T8]
- [T1] Terraform (BUSL 1.1 from 1.6.0, per the repo `LICENSE`) vs OpenTofu (MPL 2.0 fork). Not an objective. Do not present OpenTofu behaviour as Terraform behaviour.
- [T2] The lock file `.terraform.lock.hcl` covers providers only. "Terraform does not remember version selections for remote modules." Commit it to version control.
- [T2] A provider source address is `[<HOSTNAME>/]<NAMESPACE>/<TYPE>`, and the hostname defaults to registry.terraform.io. OpenTofu's docs use `registry.opentofu.org`.
- [T2] Best practice: each module declares at least a minimum provider version with `>=`. `~>` lets only the right-most component rise: "~> 1.0.4" allows 1.0.10 but not 1.1.0.
- [T2] `alias` makes an extra provider configuration, which a resource selects with the `provider` meta-argument.
- [T2] State is JSON, but the docs discourage editing it by hand. Use the `state` commands.
- [T3] `terraform validate` needs an initialised directory but "does not validate remote services, such as remote state or provider APIs".
- [T3] `terraform fmt` "applies a subset of the Terraform language style conventions". Without `-recursive` it processes only the current directory. `-check` reports and does not rewrite.
- [T3] `plan` without `-out` is a speculative plan. `apply` with a saved plan does not prompt. `-auto-approve` skips the prompt otherwise.
- [T3] `terraform destroy` is "just a convenience alias" for `terraform apply -destroy`. `plan -destroy` previews a destroy.
- [T3] `terraform taint` is deprecated. Use `-replace` (v0.15.2 and later).
- [T3] `init` is "always safe to run multiple times".
- [T4] Data sources are read during planning unless an argument depends on a value not known until apply.
- [T4] Variable precedence, highest first: `-var`/`-var-file` and HCP Terraform values; `*.auto.tfvars` (lexical order); `terraform.tfvars.json`; `terraform.tfvars`; environment variables; `default`. Environment variables are near the bottom.
- [T4] Collection types (list, map, set) vs structural types (object, tuple). A set has no index.
- [T4] `sensitive = true` hides values in CLI output only. The value is still stored in state. [also T5]
- [T5] `count` for nearly identical instances, `for_each` for distinct values. A block cannot use both.
- [T5] `depends_on` is a "last resort". Prefer references (implicit dependencies).
- [T5] By default Terraform destroys and then creates. `create_before_destroy` reverses that and is enabled implicitly on dependencies.
- [T5] `prevent_destroy` does not stop a destroy if the resource block is removed from the configuration.
- [T5] A failed `check` block only warns ("reports a warning and continues"). Preconditions, postconditions and variable validation fail the run. `check` needs v1.5.0 or later.
- [T5] Ephemeral variables, outputs and blocks need Terraform 1.10 or later. Write-only arguments need v1.11 or later, and unlike other ephemeral constructs they accept non-ephemeral values too.
- [T5] Built-in functions vs provider-defined functions: the page covers both. It does not say that user-defined functions are impossible, so cards must not claim that.
- [T6] The module `version` argument works only for registry sources. Local paths begin with `./` or `../`.
- [T6] Registry module source: `<NAMESPACE>/<NAME>/<PROVIDER>`. A private registry adds `<HOSTNAME>/`.
- [T6] A child module gets values only through its input variables. It exposes values only through outputs.
- [T7] The default backend is `local` (the `terraform.tfstate` file). A configuration can have only one backend block, and it "cannot refer to named values (like input variables, locals, or data source attributes)".
- [T7] Locking is automatic on writes, but "Not all backends support locking". `force-unlock` exists for stuck locks.
- [T7] `terraform refresh` is deprecated. Use `-refresh-only` with plan or apply.
- [T7] `terraform import` (CLI) needs the resource block written first. The `import` block imports during plan and apply. `plan -generate-config-out=PATH` ("(Experimental)") writes configuration for `import` blocks.
- [T7] A `removed` block destroys by default. `destroy = false` only forgets the object from state. Remove-and-import refactoring needs version 1.7 or newer.
- [T7] CLI workspaces are not HCP Terraform workspaces, and they are not recommended where separate credentials and access controls are needed. [also T8]
- [T7] `TF_LOG` levels in decreasing verbosity: TRACE, DEBUG, INFO, WARN, ERROR. `TF_LOG=JSON` logs at TRACE level. `TF_LOG_PATH` writes to a file.
- [T8] Execution mode Local makes HCP Terraform "act only as a remote backend for Terraform state".
- [T8] Health assessments (drift detection, continuous validation) are in the "Standard and Premium editions" only.
- [T8] Policy frameworks: Sentinel (HashiCorp's) and OPA (Rego).
- [T8] "Every workspace and Stack must belong to exactly one project."
- [T8] `terraform login` saves the API token "in plain text" by default.
- [T8] In the `cloud` block, `workspaces.name` and `tags` are mutually exclusive.
- [all] Pages without `v1.12.x` now default to 1.16.x ("latest"). Cite the `v1.12.x` URLs. Newer features (for example in 1.13–1.16) may not be on the exam.

## Languages

The exam page lists "Language English". HashiCorp also offers the Advanced exam
only in English and names only US QWERTY keyboards for it. The Terraform docs
and OpenTofu docs were read in English. I found no official or openly licensed
translation of either.

## Not verified

- **Question count and pass mark.** Neither is on developer.hashicorp.com. The
  exam FAQ articles on hashicorp-certifications.zendesk.com
  (`/hc/en-us/articles/360049773991`, `/9677396620941`) returned a Cloudflare
  JavaScript challenge. Also missing: the candidate agreement and the
  retake-wait rules.
- **The 004 release date and the 003 retirement date.** Not on the pages read.
- **Raw text of hashicorp.com's Terms of Service and Trademark Policy.** curl
  got a Vercel Security Checkpoint (HTTP 429). The quotes above came through
  WebFetch's summariser, so they break the brief's "read licence statements in
  the raw text" rule. A person should read both pages in a browser before
  release, and in particular confirm that there is no AI or derivative-use
  clause.
- **Whether BUSL 1.1 content may feed a CC BY-SA deck, and whether MPL 2.0 is
  tier B.** These are policy decisions. I have tiered both C.
- **Doc-level licence.** BUSL rests on the `web-unified-docs` root `LICENSE`.
  The site shows no licence notice, and the sampled MDX has no header.
- **OpenTofu equivalence.** I read only the OpenTofu intro, migration, provider
  requirements, state encryption, ephemerality, backend, cloud and lifecycle
  pages. The ephemerality page says it "aims for compatibility with the
  equivalent 'Ephemeral' concept in Terraform v1.12". State encryption is
  OpenTofu-only. The version in which each OpenTofu feature appeared was not
  checked.
- **Provider tiers.** The providers page has a tier table ("Official …
  hashicorp, IBM, IBM-Cloud, ansible"). Its other rows were not read in full.
- **Registry pages** (Vault provider) render client-side. The saved text is
  empty, so `tfa.vault-provider` cites the tutorial instead.
- **"Community edition"** in the audience line: no defining page was found.
- **Tutorials** cited for IaC, drift and Vault are tier C like the docs. The
  remaining learning-path tutorials were not fetched.
