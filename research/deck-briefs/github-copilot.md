# Research brief: GitHub Copilot (GH-300)

Slug: `github-copilot`. Family prefix: `ghcp`. Researched 25 September 2026.
Every fact below was read in a source fetched during this task, or in a
prerequisite-deck source named as reused. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/github-copilot/`
(`[file]`). GitHub Docs pages were read as Markdown through the docs site's
own article endpoint (`https://docs.github.com/api/article/body?pathname=/en/<path>`)
and saved in `md/` (copies with icons turned into text in `clean/`).
Microsoft Learn training units are in `learn/`. The docs page list
(`pagelist.txt`, from `https://docs.github.com/api/pagelist/en/free-pro-team@latest`)
was used to find pages.

**Prerequisite deck.** `prerequisiteDecks: ["github-foundations"]`. All 109
`github-foundations-terms.json` terms are copied into `github-copilot-terms.json`
at topic 0 with their `ghf.*` concepts. GitHub Foundations already teaches
GitHub Copilot, agent mode, Copilot cloud agent, multi-model support, Copilot
Business, Copilot Enterprise, Copilot Pro, Copilot policy, and the Git, pull
request, organization and enterprise vocabulary this deck uses. This deck adds
no second primer for any of them; its concepts go deeper (for example
`ghcp.agent-mode-use`, `ghcp.business-vs-enterprise`, `ghcp.policy-page`).
The Foundations licence finding is reused: the github/docs README says
"Creative Commons Attribution 4.0 - for documentation and content in the
assets, content, and data folders" (`[reused/docs-README.md]`), so
docs.github.com is tier B, as in `src/licences.json`.

**Volatility.** Copilot changes fast. Every docs fact in this brief was read on
**25 September 2026**. Concepts whose `note` says "volatile" should carry that
date on the card and be re-read before each release. The plans page, for
example, now lists models and prices that are not in any older material.

## Topics

| Topic | Name | Study-guide domain |
|---|---|---|
| T1 | Responsible AI | Use GitHub Copilot responsibly (15–20%) |
| T2 | Copilot in the IDE | Use GitHub Copilot features (25–30%): "Use GitHub Copilot in the IDE" |
| T3 | Copilot CLI | Use GitHub Copilot features: "Use GitHub Copilot CLI" |
| T4 | Agents, chat and customisation | Use GitHub Copilot features: "Use GitHub Copilot features and capabilities" |
| T5 | Organisation settings and policies | Use GitHub Copilot features: "Manage organization-wide settings and policies" |
| T6 | Data and architecture | Understand GitHub Copilot data and architecture (10–15%) |
| T7 | Prompt engineering | Apply prompt engineering and context crafting (10–15%) |
| T8 | Developer productivity and testing | Improve developer productivity with GitHub Copilot (10–15%) |
| T9 | Privacy, content exclusion and safeguards | Configure privacy, content exclusions, and safeguards (10–15%) |

The largest domain is split four ways along its own sub-headings.

## Exam facts

Sources: the Microsoft Learn certification page
(https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/,
`updated_at` 2026-09-22, `[ms-cert.txt]`), the GH-300 study guide
(https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300,
"Last updated on 2026-07-09", `[ms-studyguide.txt]`), and, reused from the
Foundations research of the same day, Microsoft's exam duration page
(`[reused/ms-duration.txt]`), the retake policy (`[reused/ms-retake.txt]`) and
GitHub Docs' registration page (`[reused/get-started_…registering-for-a-github-certifications-exam.md]`).

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | GitHub; delivered through Microsoft Learn and Pearson VUE | Cert page: "Product GitHub"; "Schedule through Pearson Vue". GitHub Docs: "The GitHub Certification program partners with Pearson VUE to deliver both online and in-person certification exams." | Rarely |
| Exam code and name | GH-300, "Exam GH-300: GitHub Copilot" | Study guide title | Rarely |
| Current version | Skills measured as of 7 August 2026 | Study guide: "Skills measured as of August 7, 2026". Change log compares "Skill area prior to August 7, 2026" with "as of August 7, 2026": "Minor" for three groups (in the IDE; features and capabilities; apply safeguards and troubleshoot). Cert page "Last Updated 08/07/2026". | **Yes** |
| Level | Intermediate | Cert page: "Level Intermediate" | Rarely |
| Audience | Copilot users | Study guide and cert page: "Candidates for this exam should possess expertise in using GitHub Copilot to improve software development productivity, quality, and security. … Candidates should also be familiar with GitHub fundamentals and have experience with one or more programming languages." | Rarely |
| Time | 100 minutes | Cert page: "You will have 100 minutes to complete this assessment." | Sometimes |
| Question count | Not published for GH-300 | Duration page, generic: "Most Microsoft Certification exams typically contain between 40-60 questions; however, the number can vary depending on the exam." | Yes |
| Pass mark | 700 | Study guide: "A score of 700 or greater is required to pass." | Rarely |
| Format | Proctored; question types not disclosed | Cert page: "This exam will be proctored. You may have interactive components to complete as part of this exam." Duration page: "we don't identify specific exam formats or question types before the exam." An exam sandbox and a practice assessment are linked from the cert page. | Rarely |
| Open book? | No | Duration page: "access to Learn is NOT available on Fundamentals exams or GitHub exams." | Rarely |
| Preview features | May appear | Study guide: "The exam may contain questions on Preview features if those features are commonly used." | Rarely |
| Retakes | 24 hours after the first fail, then 14 days; at most 5 in 12 months | Cert page: "You can retake it 24 hours after the first attempt. For subsequent retakes, the amount of time varies." Retake policy: "A 14-day waiting period is imposed between all subsequent attempts (up to 5)." and "You may not take a given exam more than five (5) times within a 12-month period from the first attempt." | Sometimes |
| Validity | 2 years; recertification moving to Microsoft's process | Cert page: "GitHub certifications are valid for 2 years. GitHub is transitioning to Microsoft's recertification process…" and certifications expiring before then "will be extended by 6 months." | **Yes** |
| Scheduling | Up to 90 days ahead | GitHub Docs: "Pearson VUE will allow you to schedule certification exams no more than 90 days in advance." | Sometimes |
| Price | Varies by country | Cert page: "Price based on the country or region in which the exam is proctored." No figure was read. | Yes |

The study guide's generic header still says "Microsoft associate, expert, and
specialty certifications expire annually"; the GH-300 page says 2 years. Use
the exam page.

## Naming

**Reused from github-foundations.** The GitHub Brand Toolkit logo page
(https://brand.github.com/foundations/logo, `[reused/brand-logo.txt]`), under
"Legal": "GITHUB®, the GITHUB® logo design, the INVERTOCAT logo design,
OCTOCAT®, and the OCTOCAT® logo design are trademarks of GitHub, Inc.,
registered in the United States and other countries." It also says: "No
adaptation or use of any kind of any of our registered trademarks or
copyrights, or any other contents of this website, is allowed without the
express written permission of GitHub, Inc." and forbids using the name or logo
"in a way that suggests you are GitHub, your offering or project is by GitHub,
or that GitHub is endorsing you". No fair-use or nominative clause was found,
and "GitHub Copilot" itself is not in the registered list read. The Foundations
brief flagged this for the lawyer review in CONTENT-POLICY.md §8; it applies
here unchanged. The Foundations deck lists "GitHub's brand terms need review
before the exam name is used" as a release blocker; keep it.

**How §4 applies.** Name the exam only as a true statement of coverage, in
plain text: "[Site name] deck for the GitHub Copilot (GH-300) exam". "GitHub
Copilot" is both the exam name and the product name, so the rule matters more
here: our brand leads; the mark is never "the leading word or most prominent
element" of the title (the Microsoft rule, kept because the exam runs through
Microsoft Learn). No logo, no Copilot icon, no Octocat. No "Copilot" or
"GitHub" in the domain; the path `/decks/github/github-copilot/` follows the §4
pattern. Mark the first use "GitHub®". GitHub is not in §5.

**Deck notice.** It keeps the Foundations wording, with the exam name changed:

> GitHub® and GitHub Copilot are trademarks of GitHub, Inc. GitHub® is
> registered in the United States and other countries. [Deck title] is an
> independent publication and is not affiliated with, sponsored, endorsed or
> approved by GitHub, Inc. or Microsoft Corporation. Content adapted from
> GitHub Docs (https://docs.github.com), © GitHub, Inc., licensed under
> CC BY 4.0.

**Source licences.**
- **GitHub Docs: tier B** (CC BY 4.0, reused finding). This includes the
  responsible-use "Application card" pages, the Copilot docs, the REST
  reference and the site-policy pages under docs.github.com.
- **The GH-300 study guide and cert page: tier C, checked.** Page footer
  "© Microsoft 2026". The Microsoft Learn Terms of Use (`[ms-terms.txt]`),
  under "Personal and Non-Commercial Use Limitation": "Unless otherwise
  specified, the Services are for your personal and non-commercial use. You
  may not modify, copy, distribute, transmit, publicly display, perform,
  reproduce, publish, license, create derivative works from, transfer or sell
  any information, software, products or services obtained from the Services
  (except for your own, personal, non-commercial use) without prior written
  consent from Microsoft." The page says "Certain documentation may be subject
  to explicit license terms separate from the terms contained here", so I
  checked for one. The study guide's `original_content_git_url` is
  `github.com/MicrosoftDocs/learn-certs-pr/…/gh-300.md`. Its raw file and the
  repo's LICENSE both returned 404 (a private repository), so no open licence
  was found. Link to the outline and describe it in our own labels.
- **Microsoft Learn training units: tier C**, the same footer and Terms. They
  are the only sources found for the 4 Ss, zero-, one- and few-shot prompting,
  the proxy filter, toxicity filtering, Fill-in-the-Middle and Microsoft's six
  responsible AI principles. Facts in our own words only. Their dates are old
  (`updated_at` 2024-09-26 and 2025-07-28). Some of their figures are out of
  date (see Traps).

## Outline

The study guide's "Skills measured as of August 7, 2026", in its order, with
its weights. Headings are the owner's. Objectives are shortened into our own
labels because the outline is © Microsoft (tier C). Link to the study guide;
do not reproduce it.

**1. Use GitHub Copilot responsibly (15–20%)**
- Understand responsible AI principles
  - Risks and limitations of generative AI tools [T1]
  - Ethical and responsible AI use [T1]
  - Potential harms and how to mitigate them [T1]
- Validate and operate AI tools
  - Why AI output must be validated [T1]
  - Operating Copilot responsibly [T1]

**2. Use GitHub Copilot features (25–30%)**
- Use GitHub Copilot in the IDE
  - Enabling Copilot in the IDE [T2]
  - Triggering Copilot: inline suggestions, chat, CLI, agent mode [T2]
  - Content exclusions for files or repositories, as app knowledge [T9] (`ghcp.content-exclusion`, `ghcp.ce-repo`)
- Use GitHub Copilot CLI
  - What Copilot CLI is and how it helps [T3]
  - Installing Copilot CLI [T3]
  - Key CLI features and commands [T3]
  - Interactive use and sessions [T3]
  - Generating scripts and managing files [T3]
- Use GitHub Copilot features and capabilities
  - Agent mode, Copilot Edits, MCP, agent sessions and subagents [T4] (agent mode itself is topic 0)
  - Code review and coding assistance [T4]
  - Spaces, Spark, pull request summaries, review standards in instructions files [T4]
  - Chat limits, options, feedback and commands; reusable prompt files [T4] (commands in [T2])
- Manage organization-wide settings and policies
  - Organisation policies, Copilot code review policies, feature availability across IDEs and github.com [T5]
  - Audit log events [T5]
  - Managing subscriptions with the REST API [T5]

**3. Understand GitHub Copilot data and architecture (10–15%)**
- Describe data handling and flow
  - Data use, flow and sharing [T6]
  - Input processing and prompt building [T6]
  - Proxy filtering and post-processing [T6]
- Understand lifecycle and limitations
  - The code suggestion lifecycle [T6]
  - Limitations of LLMs and Copilot [T6] (limitation list in [T1])

**4. Apply prompt engineering and context crafting (10–15%)**
- Craft effective prompts
  - Prompt structure and context [T7]
  - How context is determined [T7]
  - Zero-shot and few-shot prompting [T7]
  - Best practices for prompts [T7]
- Engineer prompts for performance
  - Prompt engineering principles [T7]
  - Prompt process flow and chat history [T7] (process flow in [T6])

**5. Improve developer productivity with GitHub Copilot (10–15%)**
- Enhance productivity and code quality
  - Code generation, refactoring and documentation [T8]
  - Faster learning and less context switching [T8]
  - Sample data and legacy-code modernisation [T8]
- Support testing and security
  - Unit and integration tests [T8]
  - Edge cases and assertions [T8]
  - Security and performance improvements [T8]

**6. Configure privacy, content exclusions, and safeguards (10–15%)**
- Manage privacy settings and exclusions
  - Content exclusions and editor settings [T9]
  - Ownership and limitations of outputs [T9]
- Apply safeguards and troubleshoot
  - Filtering suggestions that match public code [T9]
  - Fixing problems with suggestions and content exclusions [T9]

Total: 6 domains, 41 objectives. Every objective maps to at least one concept.

**Two outline anomalies.** The "Skills at a glance" list has seven lines: it
gives "Use GitHub Copilot features (25–30%)" and then "GitHub Copilot features
(25–30%)". The cert page's "Assessed on this exam" repeats both. The detailed
skills list has only six domains. Treat the second line as a duplicate. The
"Use GitHub Copilot in the IDE" group lists content exclusions; the deck
teaches them once, in T9.

## Traps

- [T1] Microsoft's six principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency and accountability. They come from a tier C Learn unit only; quote nothing.
- [T1] "Hallucination" in the docs is output that "sounds plausible but is factually incorrect, unsupported by the provided context, or entirely fabricated".
- [T1] Overreliance is accepting incorrect or incomplete output "mainly because mistakes in AI outputs may be hard to detect". Human oversight is the named safeguard.
- [T1] Inline suggestions change nothing until accepted: "No code changes occur without deliberate user action." Agents are different; their risks page lists pushing code, sensitive-information access and prompt injection.
- [T2] Accept with Tab, reject with Esc, cycle with Alt+] and Alt+[ in VS Code. Ctrl+Enter opens more suggestions in a new tab. Shortcuts differ by editor.
- [T2] Chat keywords: `@` is a chat participant, `/` a slash command, `#` a chat variable. Candidates mix these up.
- [T2] The VS Code chat modes are agent, plan and ask. Plan mode makes no code changes "until the plan is reviewed and approved by you".
- [T2] Inline suggestions suit completing code, repetitive code and code from comments; chat suits questions, large sections of code and persona tasks (best-practices page).
- [T3] Copilot CLI is the `copilot` command, installed from `@github/copilot` (npm needs Node.js 22 or later), WinGet, Homebrew or an install script. **Volatile.**
- [T3] `--deny-tool` "takes precedence over the `--allow-all-tools` and `--allow-tool` options."
- [T3] Approval choice 2 lasts "for the rest of the running session" only; new or resumed sessions ask again.
- [T3] Autopilot runs locally; `/delegate` (or a `&` prefix) hands the task to Copilot cloud agent, which opens a draft pull request.
- [T3] Automatic compaction starts near "80% of the token limit" (a dynamic starting point). **Volatile.**
- [T4] "Copilot Edits" survives only on some tabs. In JetBrains it has edit mode and agent mode, and the docs say "Edit mode is only available in Visual Studio Code and JetBrains IDEs." In Visual Studio it is "public preview". The VS Code tab now shows only agent, plan and ask. **Volatile.**
- [T4] Subagents "use the same tools and AI model as the main session, but they cannot create other subagents."
- [T4] Custom instructions are always on; prompt files are run by hand. Paths: `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md`, `.github/prompts/*.prompt.md`.
- [T4] Precedence: personal, then repository (path-specific, repository-wide, agent), then organisation. "However, all sets of relevant instructions are provided to Copilot."
- [T4] Copilot code review runs only when assigned, unless automatic reviews are configured. It skips dependency files, log files and SVG files. By default its reviews do not count toward required approvals; the "Copilot approvals" option that changes this is public preview.
- [T4] Spark has no GitHub Docs page now. The plans tables list "GitHub Spark (public preview)" as included for Copilot Pro+ and Copilot Enterprise only. **Volatile.**
- [T4] Pull request summaries ignore existing description text: "start with a blank description for best results."
- [T5] The enterprise setting wins over the organisation. Across organisations in one enterprise the "least restrictive" policy usually applies; across enterprises the "most restrictive" almost always applies.
- [T5] The MCP servers in Copilot policy "is disabled by default."
- [T5] Audit log: search `action:copilot`; agent activity is `actor:Copilot`; events are kept "for the last 180 days".
- [T5] Removing a seat (REST `DELETE …/selected_users`) sets it to "pending cancellation"; access lasts until the end of the billing cycle. Classic tokens need `manage_billing:copilot` (or `read:org` / `admin:org`).
- [T5] Plans and prices changed. The plans page lists Copilot Free, Student, Pro ($10), Pro+ ($39), Max ($100), Business ($19 per seat) and Enterprise ($39 per seat), with "GitHub AI Credits". The docs keep premium requests only under a request-based-billing-legacy section, and the Learn data unit still says "Copilot Individual". "Copilot is not currently available for GitHub Enterprise Server." **Volatile.**
- [T6] The Learn data unit (updated 2025-07-28) says IDE prompts are discarded, chat outside the editor is kept 28 days, and "Copilot Chat currently operates with a context window of 4k tokens". The context-window figure is certainly outdated. Current docs say that from 24 April 2026, Free, Pro, Pro+ and Max interactions may be used to train models unless the user opts out, while Business and Enterprise data is not used. Teach the current docs and flag the Learn figures as possibly still examined. **Volatile.**
- [T6] The proxy server is "hosted in a GitHub-owned Microsoft Azure tenant" (Learn, tier C). The toxicity filter works on both the prompt and the response.
- [T7] Zero-shot uses no example, one-shot one, few-shot several. The 4 Ss are Single, Specific, Short, Surround.
- [T7] The Learn unit prices long chat history in "PRUs"; current plans are priced in GitHub AI Credits. Teach the idea (keep history relevant), not the figure.
- [T9] Content exclusion needs Copilot Business or Enterprise. It is "not supported in Edit and Agent modes of Copilot Chat in Visual Studio Code and other editors". It does not cover symlinks or remote filesystems, and the IDE may still pass semantic information from excluded files.
- [T9] Exclusion changes can take "up to 30 minutes" in an IDE that has settings loaded; reload the window to apply them sooner.
- [T9] Only repository administrators, organisation owners and enterprise owners configure exclusion. Paths use fnmatch and "Patterns are case insensitive".
- [T9] The public-code check compares a suggestion "with their surrounding code of about 150 characters" against public GitHub code. Private repositories are not searched, and the index is "refreshed every few months". Few or no suggestions can mean the filter is on.
- [T9] Organisation seat holders cannot set the public-code option in personal settings; the organisation's policy applies.
- [T9] Ownership: GitHub Terms §J.2, "GitHub does not claim ownership of your Input or Output." Checking whether output needs a third-party licence is the user's job.
- All: the study guide's header still says certifications "expire annually"; the GH-300 page says 2 years.

## Languages

The cert page lists "English, Spanish, Portuguese (Brazil), Korean, Japanese".
The study guide says localized exams are updated "approximately eight weeks
after the English version is updated" and a candidate can request "an
additional 30 minutes" if the exam is not in their language. Only English
GitHub Docs pages (`/en/` paths) were fetched. Whether any translated docs carry the same CC BY 4.0 licence was not
checked (as for Foundations).

## Not verified

- **Question count** for GH-300: only Microsoft's generic "40-60" was found.
- **Price** of the exam: shown only after choosing a country.
- **A trademark statement for "GitHub Copilot".** The brand page lists GITHUB, INVERTOCAT and OCTOCAT only. The notice calls GitHub Copilot a trademark of GitHub, Inc. following the Foundations pattern; confirm in the lawyer review.
- **GitHub Copilot Trust Center** (`copilot.github.trust.page`, cited by the docs for data retention): it returned a 7.5 KB page shell with no FAQ text, so retention periods rest on the tier C Learn unit only.
- **GitHub Spark**: no docs page was found in the docs page list; only plans-table rows.
- **Whether the exam still tests the Learn unit figures** (4k-token context window, 28-day retention, PRUs, "Copilot Individual"): these were read but are dated.
- **The 7th "Skills at a glance" line** ("GitHub Copilot features (25–30%)") appears to be a duplicate; the owner's intent was not confirmed.
- **The organisation-level audit log page** for Copilot events was not fetched; the enterprise page (`action:copilot`, 180 days) was.
- **Translated docs licence** was not checked.
