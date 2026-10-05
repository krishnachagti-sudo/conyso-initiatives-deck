# Moat comparison: how big is the Primer next to the alternatives?

Counted 2026-10-05 by the moat-research agent. The machine-readable version is `src/data/compare.json`.

## Method

- **Every number below comes from a page fetched on 2026-10-05.**
  - Pages were fetched raw with curl, user agent `Mozilla/5.0 (compatible; research)`, and turned into text with a small tag-stripping script. No summarising fetch tool was used for any figure.
  - The figures that the claims depend on were fetched a second time and matched: AWSomecards, Crucial Exams, CertStud and UniPrep2Go.
- **Rules were checked before content was fetched.** For each site, robots.txt was read first, then its terms.
- **Sites were not counted when:**
  - robots.txt disallowed us (Brainscape);
  - the site blocked every request (Quizlet, Cram, ISC2); or
  - the terms forbid automated collection (OpenExamPrep, Certcy).
- **One lapse on OpenExamPrep.** Its flashcards hub, technology hub and homepage were fetched *before* its terms were read. The terms forbid automated collection. Its figures are not recorded or used; check them by hand.
- **GitHub figures** come from the GitHub search API through the session's GitHub tool.
- **AnkiWeb sample figures** come from AnkiWeb's `svc/shared/item-info` endpoint for three named deck IDs. The protobuf field names (`notes`, `items_shared_by_user`, `thumbs_up`) were read from AnkiWeb's own `frontend.CGtXrk30.mjs`. The search listing (`/shared/decks/`) was not used, because robots.txt disallows it.
- **Computed counts say how they were computed.**
- **The Primer's own figures** are the owner's totals: 59 released decks, about 50,600 cards. Per-deck head-to-heads use note counts summed from `decks/<slug>/notes/*.json` on 2026-10-05. `us` in compare.json is left null for the build to fill.

## The alternatives

### OpenExamPrep (open-exam-prep.com): the closest rival; not counted

- **What it is:** a free exam-prep site run by Bayview Global LLC. It offers term-definition flashcards, practice questions and an AI study assistant.
- **Licence:**
  - Footer: "© 2026 OpenExamPrep. All rights reserved."
  - Terms: "The Service and its original content … are and will remain the exclusive property of Bayview Global LLC."
  - Despite the name, nothing is openly licensed.
- **Automated access:** the terms forbid it: "To scrape, harvest, or collect content from the Service using automated means without our express written permission" (https://open-exam-prep.com/terms-of-service).
- **Scale (risk only):**
  - Its figures from the pre-terms fetch are not recorded here.
  - The categories include non-certification tests: "Driving & DMV Tests" 20 sets, "Academic & Admissions" 59 sets (SAT, GRE, LSAT…), "Language Proficiency" 11 sets.
  - Sets run at roughly 50 cards each. For example, "Technology … 91 sets, 4,550 cards".
- **Sourcing:** no per-card sourcing was seen on the pages fetched.
- **What a person must do:** check the current number in a browser before publishing any "largest free" claim.

### Crucial Exams (crucialexams.com)

- **What it is:** a paid practice-test platform. Its description: "Certification practice tests, Questions and Flashcards for certification exams." The homepage shows "81,036+ users are already with us".
- **Count (computed):**
  - The homepage lists 79 exams as "… Test Prep". 78 of them carry an "N Flashcards" line, for example "CompTIA Security+ SY0-701 (V7) … 1,400 Questions … 374 Flashcards".
  - The sum is **14,053 flashcards across 78 exams**. Two fetches matched.
- **Price** (https://www.crucialexams.com/plans/information-technology): "$19.99/mo", "$119.99" annual, "$189.99" lifetime.
  - The Security+ page offers "Try a Free Test — No Signup Required" but marks most decks "Premium Content".
- **Licence:** "temporarily download one copy … for personal, non-commercial transitory viewing only" (https://www.crucialexams.com/terms-of-service). The terms have no clause against automated access.

### CertStud (certstud.com)

- **Count:** "43,802+ total questions … **4,798+ flashcards**, and 279+ practice exams across **91 active certifications**" (https://certstud.com/llms.txt). The certifications page also says "Browse 91 certifications with 43,802 practice questions".
- **Price:** freemium. "try 10 free practice questions"; plans from "$10/month billed annually".
- Each new certification is described as "300 practice questions, 50 flashcards".

### AWSomecards (awsomecards.com)

- **Count:** "3,900+ cards · 11 certifications · free forever"; "no signup · no card · runs in your browser" (https://awsomecards.com/). Two fetches matched.
- **Scope:** AWS only.
- **Licence and sourcing:** no licence or per-card source was seen on the homepage.

### UniPrep2Go (uniprep2go.study)

- **What it is:** paid Anki decks and PDFs.
  - "124 paid Anki decks and PDFs"; "catalog_size": 124; "price_range_usd" 4.99–39 (https://uniprep2go.study/api/facts, which the site publishes for machine readers).
- **Count (computed from `card_count`):**

  | Category | Items | Cards |
  |---|---|---|
  | Finance Exams | 9 numeric items | 2,887 |
  | Professional & Trading | 51 numeric items | 8,274 |
  | Academic | | 859 |
  | Immigration & Adaptation | | 2,400 |
  | Language Certifications | | 47,747 |
  | **All numeric items** | 119 | **62,167** |

  - **11,161 cards across the 60 certification-style decks** (the first two categories). Language decks repeat per source language, for example five "IELTS / TOEFL English for … Speakers" decks of 2,504.
- **Licence:** "a personal, non-exclusive, non-transferable license"; "You may not scrape, reverse engineer, or bulk extract content to create competing products" (https://uniprep2go.study/terms). Only its published facts endpoint and homepage were read.

### FlashGenius (flashgenius.net)

- "Practice with AI-generated questions, take realistic exam simulations … for 45+ professional certifications" (https://flashgenius.net/).
- It publishes no flashcard count. No terms page was found, so nothing more was fetched. Not counted.

### HamStudy.org

- **What it is:** free drilling of official radio-licence question pools.
- **Count (computed):** the homepage exam picker lists 22 pools:
  - US amateur: Technician (2026–2030), General (2023–2027), Amateur Extra (2024–2028);
  - 6 Argentina ENACOM;
  - 7 FCC Commercial Elements;
  - 4 Canadian;
  - Mexico FMRE and New Zealand NZART.
- **Licence:** "copyright 2026 Signal Stuff™, All rights reserved."
- Cards were not counted. It is the main free rival for the Primer's three FCC decks.

### AnkiWeb shared decks

- **Licence** (terms, read from AnkiWeb's route bundle for https://ankiweb.net/account/terms): "This license is for personal use only, and the deck may not be redistributed, re-uploaded, published, or used for any other purposes without explicit permission from the copyright holder."
- **Quality:** "While we do not have the resources to manually check decks that are uploaded to our website…"
- **Not counted:** robots.txt disallows `/shared/decks/`, and no total is published.
- **Three sample decks (item-info):**

  | Deck | Notes | Other |
  |---|---|---|
  | 1644481277 "CISSP 10k" ("~10k cards from AIO and OSG") | 9,103 | updated 2021-04-19 |
  | 591991787 "Cisco CCNA 200-301" | 884 | +268/-4 |
  | 2018763693 "AWS Certified Cloud Practitioner CLF-C02 2026 Complete Exam" | 1,521 | sharer has 9 shared items |

### GitHub

- **Search:** the API query "certification flashcards" (sorted by stars) gives total_count **151**.
  - Top result: Amey-Thakur/CLAUDE-CERTIFICATIONS, 56 stars, MIT, "110 flashcards".
  - Next: GitHub-Certifications-Preparation-Guides (34, MIT), then an LPIC-1 Anki deck (29, GPL-3.0).
- **Google's own repo:** GoogleCloudPlatform/google-cloud-flashcards, "Anki flashcards to study and prepare Google Cloud Platform (GCP) certifications". It is **archived**, Apache-2.0, has 6 stars and was last pushed 2019-09-26.
- **Result:** no open, multi-certification collection of any size was found.

### Not counted (blocked or forbidden)

| Collection | Why not counted |
|---|---|
| Brainscape | robots.txt `User-agent: * Disallow: /` for unnamed agents |
| Quizlet | HTTP 403 "Captcha Challenge" even on robots.txt |
| Cram.com | HTTP 403 "Request blocked" (CloudFront) |
| ISC2 (free form-gated flash cards) | 403 on robots.txt, so its terms were unreadable |
| AWS Skill Builder | aws.amazon.com is on `src/no-fetch.json` |
| Certcy | terms: "Use automated tools to scrape or extract content from the App" is prohibited |

## Head-to-head on shared exams (Primer vs Crucial Exams flashcards)

Crucial's counts are from its homepage. The Primer's counts are from the repo.

| Exam | Primer | Crucial |
|---|---|---|
| AZ-900 | 814 | 216 |
| AZ-104 | 1,416 | 165 |
| AZ-305 | 1,124 | 184 |
| AZ-400 | 1,518 | 168 |
| SC-900 | 1,321 | 167 |
| DP-900 | 813 | 125 |
| AI-901 | 589 | 255 |
| CISSP | 1,390 | 314 |
| ISC2 CC | 760 | 172 |
| CCSP | 916 | 179 |
| SSCP | 1,084 | 162 |
| CGRC | 636 | 174 |
| GCP CDL | 819 | 154 |
| GCP PCA | 1,144 | 178 |

The Primer is larger on all 14 exams.

## Claims the data supports

1. **"The largest openly licensed collection of certification flashcards":** about 50,600 cards, CC BY-SA 4.0, 59 exams.
   - Every other collection found is all-rights-reserved or personal-use only.
   - The biggest open GitHub repo describes 110 flashcards.
   - Google's own Apache-licensed repo is archived.
   - This is the strongest claim, and it is safe.
2. **"More free certification flashcards than any other free collection we could count":** against AWSomecards 3,900+ and CertStud 4,798+.
   - Dropped: it holds only if OpenExamPrep, which could not be counted, is checked by hand.
3. **Depth:** about 860 cards per exam, against about 180 (Crucial), about 355 (AWSomecards) and about 53 (CertStud). The Primer is ahead on every one of the 14 exams it shares with Crucial.
4. **"More cards than Crucial Exams, CertStud and AWSomecards combined":** 22,751.
5. **"We found no other collection that cites a public source on every card"**, naming those checked and the date.
   - This is an absence claim, so say where we looked. The pages read made no such claim.
   - "Best" should be argued through these checkable traits, not stated outright.

Suggested scale band ("counted 2026-10-05"):

| Collection | Cards | Exams | Notes |
|---|---|---|---|
| The Primer | ~50,600 | 59 | |
| Crucial Exams | 14,053 | 78 | paid |
| CertStud | 4,798+ | 91 | freemium |
| AWSomecards | 3,900+ | 11 | free, AWS only |

Add OpenExamPrep only after a hand check.

The paragraph on why size isn't the point should say that none of the others is openly licensed, and none cites a source per card.

## Claims the data does NOT support

- **Largest flashcard collection, or most certification flashcards, unqualified.** Quizlet, Cram and Brainscape are user-generated at far larger scale and uncounted.
- **Most certifications covered.**
  - CertStud covers 91 certifications, Crucial 78 exams and UniPrep2Go 124 items. The Primer has 59.
- **Largest paid or commercial catalogue.** UniPrep2Go's numeric card counts sum to 62,167.
- **Most cards for every certification.** "CISSP 10k" on AnkiWeb has 9,103 notes against our 1,390.
- **Only free multi-certification flashcard site.** OpenExamPrep, HamStudy and AWSomecards are free.
- **Any figure for Quizlet, Cram, Brainscape, ISC2 or AWS.**

## Risks

- **Raw volume.** Quizlet's and Cram's user-generated volume almost certainly dwarfs everyone's card count. The claim must stay scoped to "openly licensed" or "free, curated, counted".
- **OpenExamPrep can overtake us.**
  - It is free and adds sets often; its total could not be counted and may be close to ours.
  - A claim of "largest free" could become false without notice. Recount before every release and keep the dated counted-on line.
  - Note also that it has "Open" in its name without an open licence. Our claim should say "openly licensed (CC BY-SA 4.0)" explicitly.
- **Cards vs notes vs questions.**
  - AnkiWeb counts notes, and one note can make several cards.
  - CertStud's 43,802 are practice questions, not flashcards.
  - The Primer's own figure must be counted the same way it is described.
- **Exams vs decks.**
  - Some Primer decks are guides or courses rather than certification exams: Scrum Guide, Kanban Guide, FEMA ICS courses, US civics.
  - "59 certifications" would overstate this. Say "59 exams and assessments", or count exactly.
- **Time.** All figures are as of 2026-10-05. Competitor counts change; Crucial and CertStud add exams monthly.
