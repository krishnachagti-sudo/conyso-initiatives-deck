# Research brief: GitHub Foundations (GH-900)

Slug: `github-foundations`. Family prefix: `ghf`. No prerequisite deck.
Researched 25 September 2026. Every fact below was read in a source fetched
during this task. Saved copies are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/github-foundations/`.
GitHub docs pages were read as Markdown through the docs site's own article
endpoint (`https://docs.github.com/api/article/body?pathname=/en/<path>`) and
saved in `md/`. github.com itself (and so `github.com/logos`) returned 403
through the session proxy; docs.github.com and raw.githubusercontent.com did
not. Every `#anchor` in the concept list was checked against the headings of
the saved page. Some docs URLs are older paths that the docs site redirects
(for example, the forks, pull request and dependency graph pages); the saved
titles show where they land.

## Topics

| Topic | Name | Study-guide domain |
|---|---|---|
| T1 | Git and version control | Understand Git and GitHub basics (25–30%), part 1 |
| T2 | Working with GitHub | Understand Git and GitHub basics (25–30%), part 2 |
| T3 | Repositories | Work with GitHub repositories (10–15%) |
| T4 | Collaboration features | Collaborate using GitHub (10–15%) |
| T5 | Modern development: Actions, Copilot, Codespaces | Apply modern development practices (10–15%) |
| T6 | Project management | Manage projects with GitHub (5–10%) |
| T7 | Privacy, security and administration | Understand privacy, security, and administration (10–15%) |
| T8 | The GitHub community | Explore the GitHub community (5–10%) |

The first domain is split because it is the largest and has two sub-headings
in the study guide ("Version control fundamentals" and "Working with GitHub").

## Exam facts

Sources: the Microsoft Learn certification page
(https://learn.microsoft.com/en-us/credentials/certifications/github-foundations/,
`updated_at` 2026-09-21, `[ms-cert.txt]`), the GH-900 study guide
(https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-900,
"Last updated on 2026-02-19", `[ms-studyguide.txt]`), Microsoft's exam duration
page (https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience,
2026-03-31, `[ms-duration.txt]`), the retake policy
(https://learn.microsoft.com/en-us/credentials/support/retake-policy,
2026-07-27, `[ms-retake.txt]`) and GitHub Docs' registration page
(`[md/get-started_showcase-…registering-for-a-github-certifications-exam.md]`).

| Fact | Value | Quote and source | Changes often? |
|---|---|---|---|
| Owner | GitHub; delivered through Microsoft's certification programme and Pearson VUE | GitHub Docs: "The GitHub Certification program partners with Pearson VUE to deliver both online and in-person certification exams." Cert page: "As GitHub certifications transition to Microsoft's certification and recertification policies…" | Rarely |
| Exam code and name | GH-900, "Exam GH-900: GitHub Foundations" | Study guide title | Rarely |
| Current version | Skills outline "as of January 2026" | Study guide: "Skills at a glance as of January 2026"; change log: "This exam has changed significantly (e.g., new objectives were added, some were removed, existing objectives may have moved to different functional groups, and all were reworded) on January, 2026." | **Yes** |
| Audience | Non-developers, developers and all GitHub users | Study guide: "The exam is designed for non-developers, developers, and all GitHub users seeking to improve their proficiency with GitHub fundamentals." | Rarely |
| Level | Fundamentals | Cert page: "GitHub Foundations will follow Microsoft's policy for fundamental-level exams" | Rarely |
| Time | 100 minutes | Cert page: "You will have 100 minutes to complete this assessment." Note: Microsoft's general table gives "Fundamentals exams 45 minutes" exam duration; the GH-900 page itself says 100. Use the exam page. | **Yes** |
| Question count | Not published for GH-900 | Duration page, generic: "Most Microsoft Certification exams typically contain between 40-60 questions; however, the number can vary depending on the exam." | Yes |
| Pass mark | 700 | Study guide: "A score of 700 or greater is required to pass." | Rarely |
| Format | Proctored; online or test centre; question types not disclosed | Cert page: "This exam will be proctored. You may have interactive components to complete as part of this exam." GitHub Docs: "you can choose if you want to take the exam in a local test center or online." Duration page: "we don't identify specific exam formats or question types before the exam." | Rarely |
| Open book? | No | Duration page: "access to Learn is NOT available on Fundamentals exams or GitHub exams." | Rarely |
| Preview features | May appear | Study guide: "Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used." | Rarely |
| Retakes | 24 hours after the first fail, then 14 days; at most 5 in 12 months | Cert page: "You can retake it 24 hours after the first attempt." Retake policy: "A 14-day waiting period is imposed between all subsequent attempts (up to 5)." and "You may not take a given exam more than five (5) times within a 12-month period from the first attempt." "You must pay to retake the exam (if applicable.)" | Sometimes |
| Validity | Does not expire; no renewal | Cert page: "The GitHub Foundations certification does not require renewal… Candidates who earn the GitHub Foundations certification will therefore not need to renew their certification." | **Yes** (policy is new; the study guide's generic text still says certifications "expire annually") |
| Scheduling | Up to 90 days ahead | GitHub Docs: "Pearson VUE will allow you to schedule certification exams no more than 90 days in advance." | Sometimes |
| ID | Government-issued photo ID; name must match | GitHub Docs: "The first and last name you use to register for the exam must match exactly with the first and last name on the ID." | Rarely |
| Price | Varies by country | Cert page: "Price based on the country or region in which the exam is proctored." No figure was read. | Yes |

## Naming

**What GitHub's own pages say.** The GitHub Brand Toolkit logo page
(https://brand.github.com/foundations/logo, `[brand-logo.txt]`), under "Legal":
"GITHUB®, the GITHUB® logo design, the INVERTOCAT logo design, OCTOCAT®, and the
OCTOCAT® logo design are trademarks of GitHub, Inc., registered in the United
States and other countries." It adds: "No adaptation or use of any kind of any
of our registered trademarks or copyrights, or any other contents of this
website, is allowed without the express written permission of GitHub, Inc."
Its "Don't do these things" list includes "Imply affiliation: Do not use the
GitHub name or any GitHub logo in a way that suggests you are GitHub, your
offering or project is by GitHub, or that GitHub is endorsing you…", "Use as
your logo… domain name, social media account, or website" and "Use without
permission: Do not use GitHub trademarks, logos, or artwork without GitHub's
prior written permission." It allows a permitted logo in "a blog post or news
article about GitHub" and "Secondary placement: Use the permitted GitHub logos
less prominently than your own company or product name or logo." The GitHub
Logo Policy on docs (`[md/github-logo-policy.md]`) points to the Logos and
Usage page (github.com/logos), which returned 403 and was not read. It says an
octocat may be a personal avatar "but not for your company or a product you're
building."

**No explicit fair-use or nominative clause was found** on the pages read,
unlike AWS or the Linux Foundation. The "Use without permission" line is broad.
Flag this for the lawyer review in CONTENT-POLICY.md §8.

**How §4 applies.** Name the exam only as a true statement of coverage, in
plain text: "[Site name] deck for the GitHub Foundations (GH-900) exam". No
logo, Invertocat, Octocat or Mona anywhere; our brand leads; no "GitHub" in the
domain; the URL path `/decks/github/github-foundations/` follows the §4 pattern.
Mark the first use "GitHub®". Because the exam is delivered through Microsoft
Learn, keep the Microsoft rule from §4 too: the mark is never "the leading
word or most prominent element" of the title. GitHub is not in §5, so a named
deck is allowed under §4 with the "Everyone else" notice.

**Deck notice text:**

> GitHub® and GitHub Foundations are trademarks of GitHub, Inc. GitHub® is
> registered in the United States and other countries. [Deck title] is an
> independent publication and is not affiliated with, sponsored, endorsed or
> approved by GitHub, Inc. or Microsoft Corporation. Content adapted from
> GitHub Docs (https://docs.github.com), © GitHub, Inc., licensed under
> CC BY 4.0.

**Source licence.** The github/docs README (`[docs-README.md]`,
raw.githubusercontent.com) says: "This project is dual-licensed under:
Creative Commons Attribution 4.0 - for documentation and content in the
assets, content, and data folders (see LICENSE)" and "MIT License - for code".
The LICENSE file is the CC BY 4.0 legal code ("Attribution 4.0
International"). So docs.github.com article text is tier B. The Microsoft Learn
study guide and cert page are tier C: link to the outline, do not copy it.
InnerSource Commons says "The site is licensed under a CC-BY-SA license unless
otherwise marked." (tier B; version not stated on the page).

## Outline

The study guide's "Skills at a glance as of January 2026", in its order, with
its weights. Headings are the owner's; objectives are shortened into our own
labels (the outline is © Microsoft, tier C). Link to the study guide rather
than reproduce it.

**1. Understand Git and GitHub basics (25–30%)**
- Version control fundamentals
  - Purpose and benefits of version control [T1]
  - Git versus GitHub [T1]
  - Key Git concepts: repositories, commits, branches [T1]
- Working with GitHub
  - Accounts, organizations and enterprise options [T2]
  - GitHub flow [T2]
  - Markdown in issues and pull requests [T2]
  - When to use GitHub Desktop and GitHub Mobile [T2]

**2. Work with GitHub repositories (10–15%)**
- Repository structure and key files: README, LICENSE, CONTRIBUTING, CODEOWNERS, SECURITY [T3]
- Creating and organizing repositories with templates and branches [T3]
- Adding and managing files [T3]
- Repository insights, stars, feature previews, metrics dashboards, dependency insights [T3]
- Repository maintenance and collaboration best practices [T3]

**3. Collaborate using GitHub (10–15%)**
- Issues, pull requests and discussions [T4]
- Linking PRs to issues; templates, filters and assignments [T4] (assignees in [T6])
- Notifications and their configuration [T4]
- Gists, wikis and GitHub Pages [T4]

**4. Apply modern development practices (10–15%)**
- Purpose and capabilities of GitHub Actions [T5]
- Copilot suggestions, Copilot agents, Agent Mode, multi-model support [T5]
- Copilot for Individuals, Business and Enterprise [T5]
- Codespaces and dev containers [T5]
- github.dev versus Codespaces [T5]

**5. Manage projects with GitHub (5–10%)**
- GitHub Projects and layouts [T6]
- Configuring projects, labels, milestones and workflows [T6]
- Saved replies and assignees [T6]
- Project insights [T6]

**6. Understand privacy, security, and administration (10–15%)**
- Securing accounts with 2FA and passkeys [T7]
- Repository and organization permissions and roles [T7]
- Enterprise Managed Users and organization Copilot policies [T7]
- Repository privacy, visibility and branch protection rules [T7]
- Organization settings, teams and roles [T7]

**7. Explore the GitHub community (5–10%)**
- Open source and GitHub Sponsors [T8]
- How GitHub supports open-source projects [T8]
- Following users and organizations [T8]
- GitHub Marketplace [T8]
- InnerSource [T8]
- Forks, templates and discoverable repositories [T8] (templates in [T3])

Total: 7 domains, 36 objectives.

## Traps

- [T1] Git is the version control system; GitHub hosts Git repositories and adds collaboration tools. The docs' "GitHub and Git" section separates them.
- [T1] Distributed, not centralized: every developer has "a full copy of the project and project history" and no constant connection is needed.
- [T2] Three account types (personal, organization, enterprise), and two kinds of user account (personal and managed user). Account types are not plans (Free, Pro, Team, Enterprise).
- [T2] GitHub flow's last step is deleting the branch after merge.
- [T3] README, CONTRIBUTING and CODEOWNERS can each live in `.github`, root or `docs`; for README the order is `.github`, then root, then `docs`.
- [T3] No LICENSE file does not mean "free to use": "without a license, the default copyright laws apply".
- [T3] Code owners are not automatically requested on draft pull requests. CODEOWNERS over 3 MB is not loaded.
- [T3] Release phases: private preview, public preview, GA. The exam can include commonly used preview features.
- [T3] Organization dependency insights is "in maintenance mode" per the docs; the outline still names it.
- [T3] "Repository metrics dashboards" in the outline has no page of that name in GitHub Docs; Pulse and repository graphs are the closest.
- [T4] Closing keywords work only when the pull request targets the default branch.
- [T4] Secret gists are not private: anyone with the URL can see them.
- [T4] Issues track work; Discussions hold open-ended conversation, Q&A and announcements.
- [T4] Unsaved notifications are kept for 3 months; saved ones indefinitely.
- [T5] Workflow, event, job, action, runner are five distinct components; workflows live in `.github/workflows`.
- [T5] Agent mode (in the IDE) differs from Copilot cloud agent (runs in a GitHub Actions-powered environment, works from issues). The docs now say "cloud agent"; the REST docs URL still reads `copilot-coding-agent-management`, so older material may say "coding agent".
- [T5] Copilot plans have changed: the current plans page lists Copilot Free, Student, Pro, Pro+, Max, Business and Enterprise, priced in "GitHub AI Credits". The outline still says "Individuals, Business, and Enterprise". Teach the Business/Enterprise split for organizations and treat the individual plans as volatile.
- [T5] github.dev has no compute and no terminal and is free; Codespaces runs a container on a VM. Press `.` to open github.dev.
- [T6] Project layouts are table, board and roadmap.
- [T6] Up to 10 assignees on an issue or pull request.
- [T7] A passkey satisfies both password and 2FA; recovery codes are the fallback when you lose your phone.
- [T7] Repository roles in order: Read, Triage, Write, Maintain, Admin. Triage manages issues and PRs without write access; Maintain manages the repo without destructive actions.
- [T7] Internal visibility exists only for repositories owned through an enterprise account.
- [T7] EMU accounts are provisioned and controlled from the IdP.
- [T7] Secret teams are visible only to team members and organization owners.
- [T7] Only a single branch protection rule applies to a branch at a time.
- [T8] Sponsorships from personal accounts carry no fee; the docs say "up to 6%" from organizations.
- [T8] A fork is a new repository; a branch lives in the same repository. The docs recommend that regular collaborators branch in one repository; forking "is best suited for accepting contributions from people that are unaffiliated with a project".
- [T8] InnerSource is "the application of open source practices and principles to software development within the enterprise" (InnerSource Commons), not a GitHub product.
- All: the study guide's generic header still says certifications "expire annually"; the GH-900 page says Foundations does not need renewal. The outline was rewritten in January 2026, so any older outline or prep material is out of date.

## Languages

The cert page lists: "English, Spanish, Portuguese (Brazil), Korean, Japanese".
The study guide says localized exams are updated "approximately eight weeks
after the English version" and that a candidate can request "an additional 30
minutes" if the exam is not in their language. Only English GitHub Docs pages (`/en/` paths) were fetched; translations were
not checked. The github/docs CC BY 4.0 licence covers the "content" folder; no
check was made whether translated content sits under the same licence.

## Not verified

- **Question count** for GH-900. Microsoft gives only the generic "40-60".
- **Price.** The page shows it only after a country is chosen.
- **The 100-minute time versus the 45-minute fundamentals row.** Both were read on current Microsoft pages; which one applies at the test was not settled. Use the exam page (100).
- **github.com/logos** (the Logos and Usage page the Logo Policy cites) returned 403. Its wording may differ from brand.github.com.
- **A GitHub trademark fair-use clause** was not found. Nothing was read on examregistration.github.com or resources.github.com: both return a JavaScript shell (3,019 bytes) with no content.
- **"Repository metrics dashboards"** has no matching docs page; mapped to Pulse and repository graphs.
- **Copilot "multi-model support"** is mapped to "Changing the AI model for GitHub Copilot Chat"; the phrase itself was not found in docs.
- **InnerSource** has no GitHub Docs page (docs only have "innersource advisories"); the source is InnerSource Commons (CC-BY-SA, version not stated). GitHub's own InnerSource pages on github.com and resources.github.com returned 403.
- **Translated GitHub Docs licence** was not checked.
