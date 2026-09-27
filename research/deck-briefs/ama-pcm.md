# ama-pcm: research brief

Family prefix `pcm`. Self-contained: no prerequisite decks. The deck will be published.
Fetched sources are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/ama-pcm/`
(`ama-*` are AMA pages, `ftc-*` are FTC pages, `wp/` holds the Wikipedia articles,
and `wmf-terms.txt` is the Wikimedia Terms of Use). No OpenStax material is used or
kept.

## The AMA's terms: ama.org is tier C

- **Where the terms are.** ama.org has no terms page: `/terms-of-use/` returns 404. The
  footer's "Terms of Use" link goes to a Salesforce page that needs JavaScript. The
  same text is readable without JavaScript at
  `https://myama.my.site.com/articles/Knowledge/Terms-of-Use`, and that host's
  robots.txt allows it (the coordinator found this URL; I read the saved text,
  `ama-terms.txt`). The page says "Last updated: May 2018".
- **They contain no ban on AI use, scraping, robots or text mining.** A search of the
  text for those words finds nothing.
- **What they do say:**
  - "The AMA owns all rights in the names AMA, AMERICAN MARKETING ASSOCIATION,
    MARKETINGPOWER, and various other AMA trade names, trademarks, and service marks
    and reserves all rights to such property."
  - "This Site, and all materials appearing on it, are protected by copyright and may
    not be used without our prior written permission."
  - "You may access and use the materials and information on our Site as they appear
    there for your own personal use, educational advancement, or professional
    development."
  - "Except as AMA expressly permits, any redistribution, retransmission, commercial
    exploitation, linking, or other uses are strictly prohibited."
  - "You shall not copy or edit the materials, or integrate them into any other media."
- **Consequence:** ama.org and myama.my.site.com are **tier C**. The deck takes facts
  only, in our own words, never quoted and never used as card evidence. They are not
  tier D and do not belong on the no-fetch list.
- **ama.org robots.txt:** its first group, for `User-agent: *`, disallows `/wp-admin/`,
  `/listings/` and `/wp-content/uploads/`. A later Yoast group has an empty
  `Disallow:`. Under RFC 9309 the rules of groups for the same agent are combined, so
  `/wp-content/uploads/` stays blocked. **The PCM "book of knowledge" PDF is at a
  `/wp-content/uploads/` path**
  (`https://www.ama.org/wp-content/uploads/2023/11/PCM_MM_BOK-Sept-2023.pdf`), so I did
  not fetch it (see Not verified).
- **Linking needs a human decision.** The terms list "linking" among the uses that are
  "strictly prohibited" except as the AMA permits. CONTENT-POLICY §2.3 has us link to
  outlines rather than copy them. Before the deck page links to ama.org, a person
  should decide whether that clause applies to a plain hyperlink.
- **Do not confuse the two AMAs.** CONTENT-POLICY §5's row "AMA (CPT codes: medical
  coding)" means the American *Medical* Association, not this body. §5 should name
  bodies in full.

## Exam facts

All come from `https://www.ama.org/certifications/marketing-management-certification/`
(fetched 27 September 2026) unless marked otherwise. They are tier C, so they are
paraphrased here and must never be quoted on cards.

| Fact | What the page says (paraphrased) | Changes often? |
|---|---|---|
| Owner | American Marketing Association. The credential is "PCM® Marketing Management", within the "Professional Certified Marketer®" programme | no |
| Format | Online exam of multiple-choice questions | no |
| Question count | 150 | rarely |
| Time | Three hours | rarely |
| Pass mark | An overall score of 70% or higher. There is no minimum per domain, and the score report breaks results down by domain | rarely |
| Results | Given immediately after the exam | no |
| Attempts and retakes | Registration includes three attempts, to be used within one year of enrolment. There must be at least 15 days between attempts | yes |
| Access window | The course and exam are available for one year from purchase | yes |
| Eligibility | None "at this time". The AMA *recommends* a bachelor's degree and four years' marketing experience, a master's and two years, or 5+ years' experience | yes |
| Prices (as fetched) | Exam only: $249 for members, $349 for non-members. Prep course plus exam: $749 for members, $849 for non-members | **yes: never put prices on cards** |
| Prep | A 16-hour self-paced course (optional). The AMA says it does not require candidates to study from any particular source. It names a free practice exam, a "book of knowledge" download, and Marshall and Johnston's *Marketing Management* textbook | yes |
| Validity | Renew every three years from the date you pass. Renewal needs 30 CEUs for Marketing Management and a $75 fee, or you can retake the exam (source: the maintenance page) | yes |

Exam language and delivery mode (proctoring) are not stated on the pages read.

## The AMA's stated topic areas and how the deck maps to them

The marketing management page and `/certifications/` both list five topic areas.
The page presents them as what the credential covers and what the prep course teaches;
it does not call them exam domains. The exam's domains and weights are presumably in
the book-of-knowledge PDF, which robots.txt blocks (see Not verified). Our own labels
map to them as follows. Per §2.3 we link the AMA page and do not reproduce its wording
as an outline.

| AMA area (short reference) | Deck topics |
|---|---|
| Strategy | T2, T3 (and T1 as foundation) |
| Research and data analytics | T6, T15 |
| Pricing | T11 |
| Customer behaviour and segmentation | T4, T5, T7 |
| Product and service positioning | T7, T8, T9, T10 |
| Not among the five named areas, but in the requested scope | T12, T13, T14, T16, T17 (kept at lower depth) |

## Naming

- **What the AMA's own pages show.** They write "Professional Certified Marketer®" and
  "PCM®" with the registered symbol ("AMA Professional Certified Marketer®", "PCM®
  Marketing Management exam", "official AMA PCM ® badge"). The Terms of Use say the AMA
  owns "AMA, AMERICAN MARKETING ASSOCIATION, MARKETINGPOWER, and various other AMA
  trade names, trademarks, and service marks". They name no PCM-specific naming rules
  or usage guidelines, and I found no brand-use page for third parties.
- **CONTENT-POLICY §4:** the AMA is not in the §5 table, so the "Everyone else" rule
  applies. The title follows the pattern "[Site name] deck for the Professional
  Certified Marketer (PCM) Marketing Management exam", with our brand first, the exam
  in plain text and no AMA logo or badge. There are no "official", "approved" or
  "certified" claims. The name can go in the URL path (e.g. `/decks/marketing/ama-pcm/`),
  never in a domain. `ExamRefs` may point to our topic labels mapped to the five areas
  above, never to copied AMA wording.
- The AMA's footer says "This site content may not be copied, reproduced, or
  redistributed without the prior written permission". Nothing from ama.org goes on a
  card except a fact restated in our own words.

**Deck notice text:**

> Professional Certified Marketer® and PCM® are marks of the American Marketing
> Association. This deck is independent and is not affiliated with, sponsored,
> endorsed or approved by the American Marketing Association. Cards are drafted with
> AI assistance only from the public sources cited on each card, chiefly Wikipedia
> articles and US Federal Trade Commission guidance, and every card is checked against
> its source and reviewed by a person.

(Only the ® use on the AMA's pages supports calling PCM an AMA mark. Its registration
owner is on the Not verified list.)

## Sources and licences

I read each site's terms before fetching its pages, checking both the terms page and
the page footers for AI, LLM or text-mining clauses.

- **Wikipedia (tier B, CC BY-SA 4.0).**
  - Every fetched article's footer reads "Text is available under the Creative Commons
    Attribution-ShareAlike 4.0 License; additional terms may apply." I checked all 130
    saved article pages; none has any other footer.
  - The Wikimedia Foundation Terms of Use (`wmf-terms.txt`) have no clause on
    artificial intelligence, language models, machine learning, generative AI, text
    and data mining, scraping or crawling. They let users "Share and Reuse our articles
    and other media under free and open licenses". The only limit on automation is on
    "automated uses of the Project Websites that are abusive or disruptive of the
    services".
  - en.wikipedia.org's robots.txt allows article paths (`/wiki/Special:` and similar
    are disallowed) for `User-agent: *`. I fetched about 140 article pages at 1 to 4
    second intervals, and a few 429 responses were retried later.
  - `src/licences.json` already maps `*.wikipedia.org` to "B · CC BY-SA 4.0".
  - One article per concept or small group of concepts; the concepts file points to
    the section anchor. Two titles redirect: "Integrated marketing communications" goes
    to **Marketing communications**, and "Reference group" goes to **Types of social
    groups** (section "Reference groups"). The concept `source` fields use the
    canonical URLs.
- **FTC business guidance (tier B, label "B · public domain").** The FTC Website Policy
  says "Most material on the FTC's website is considered work of the United States
  Government, meaning that the material is in the public domain … (17 U.S.C. 105)",
  and asks for attribution "where feasible". No AI or text-mining clause appears on the
  policy page or on the seven guidance pages used (grep of the saved text). Pages:
  Advertising FAQ's, the Endorsement Guides FAQ, the CAN-SPAM compliance guide, the
  COPPA FAQ, Made in USA, Robinson-Patman price discrimination, and price fixing.
- **AMA pages (tier C):** exam facts and the area mapping only.
- **OpenStax: tier D, not used.** See "Leads that were wrong".
- Tier C background for writers only (own words, never quoted): textbooks including
  the Marshall and Johnston text the AMA recommends, and blogs. None was fetched.

## Topic plan (own labels)

| Topic | Label | Main Wikipedia / FTC sources | Concepts |
|---|---|---|---|
| T1 | Marketing fundamentals | Marketing; Marketing mix; Customer value proposition; Customer relationship management; Need; Want | 9 |
| T2 | Strategy and planning | Strategic planning; Vision statement; Mission statement; SMART criteria; Growth–share matrix; Ansoff matrix; Porter's generic strategies; Marketing plan; Persona; Marketing management | 15 |
| T3 | Environment and competitive analysis | Market environment; PEST analysis; SWOT analysis; Porter's five forces analysis; Barriers to entry; Competitive intelligence | 14 |
| T4 | Consumer buyer behaviour | Consumer behaviour; Buyer decision process; Maslow's hierarchy of needs; Types of social groups; Opinion leadership; Selective perception; Cognitive dissonance | 8 |
| T5 | B2B buyer behaviour | Business-to-business; Derived demand; Buying center | 5 |
| T6 | Marketing research | Marketing research; Secondary research; Focus group; Sampling (statistics); Marketing information system; Big data | 10 |
| T7 | Segmentation, targeting and positioning | Market segmentation; Firmographics; Pareto principle; Target market; Positioning (marketing); Perceptual mapping | 12 |
| T8 | Product and brand management | Product (business); Speciality goods; Unsought goods; Product lining; Product line extension; Brand; Brand equity; Brand extension; Brand loyalty | 13 |
| T9 | Product life cycle and new-product development | Product life-cycle management (marketing); New product development; Diffusion of innovations | 14 |
| T10 | Services marketing | Service (economics); Services marketing; SERVQUAL; Service–profit chain | 8 |
| T11 | Pricing | Pricing; Pricing strategy; Price skimming; Penetration pricing; Psychological pricing; Product bundling; Loss leader; Product lining; Price elasticity of demand; Cross elasticity of demand; Fixed cost; Break-even point; Price discrimination | 19 |
| T12 | Distribution and supply chain | Distribution (marketing); Marketing channel; Channel conflict; Vertical integration; Omnichannel; Supply chain management; Logistics; Third-party logistics | 10 |
| T13 | Integrated marketing communications | Promotion (marketing); Marketing communications; Models of communication; AIDA; Comparative advertising; Push–pull strategy; Public relations; Personal selling; Sales promotion | 10 |
| T14 | Digital and social media marketing | Social media marketing; Mobile marketing; Responsive web design; Impression; Click-through rate; Pay-per-click; Cost per action; Bounce rate; Conversion marketing | 11 |
| T15 | Marketing metrics and ROI | Performance indicator; Customer lifetime value; Customer acquisition cost; Customer retention; Market share; Growth–share matrix; Customer satisfaction; Net promoter score; Return on marketing investment | 14 |
| T16 | Ethics and law in marketing | Marketing ethics; Predatory pricing; FTC pages (listed above) | 17 |
| T17 | Global marketing | Global marketing; Foreign market entry modes; Foreign direct investment; Exchange rate; Purchasing power parity; Hofstede's cultural dimensions theory | 7 |

In all: 17 topics, 196 concepts (99 core, 97 extra), 256 terms and **531 budgeted
cards**. The generator (`scratchpad/gen_pcm2.py`) checked every concept against its
saved source text with a regular expression, and every Wikipedia section anchor
against the saved HTML. All passed.

**How the budget was set.** Full depth came to 641 cards. To reach about 530 I cut
depth, not coverage:
- demoted 49 secondary concepts to "extra", so they get no application card (the
  `DEMOTE` list in the generator);
- dropped 22 peripheral concepts (the `DROP` list): market orientation, B2B/B2C/C2C
  types, strategic-planning inputs and outputs, stuck in the middle, blue ocean,
  marketing-plan components, environmental scanning, choice-supportive bias,
  involvement, Buygrid, e-procurement, brand elements, packaging purposes, the
  goods–services continuum, decoy pricing, freemium, the Seven R's,
  disintermediation, push–pull in the supply chain, NPS criticism, short- versus
  long-term marketing effects, and pricing ethics;
- kept sets in the extra topics to about one list card each.

Every requested area, and each of the AMA's five areas, still has core concepts.

## Traps

- `[T3]` PEST has many variants. The article lists "PESTLE, PMESII-PT, STEPE, STEEP,
  STEEPLE, STEER, and TELOS". The deck uses "PESTLE" (the prompt's form) and glosses
  the others in a note.
- `[T3]` Porter's five forces article: industry growth, technology and innovation,
  government, and complementary products are "Factors, not forces". Do not teach
  them as a sixth force.
- `[T2]` The growth–share matrix also calls question marks "problem children". Its
  axes are relative market share and market growth rate. "Relative market share" is
  defined in that article, not in "Market share".
- `[T2]` Porter's generic strategies article includes focus variants (cost focus,
  differentiation focus). Teach three strategies and note the split.
- `[T4]` The Maslow article describes the five-level model but also has sections on
  cognitive, aesthetic and transcendence needs. Cards should say which model they
  mean.
- `[T9]` The PLC article says "Four of five stages are typically used": Fox's
  five-stage model adds precommercialisation (development) before introduction. The
  deck teaches the four-stage model and notes the five.
- `[T9]` Diffusion of innovations: the five innovation-decision stages (knowledge,
  persuasion, decision, implementation, confirmation) are a different list from the
  five adopter categories and from the five innovation characteristics. Three
  five-member lists come from one article.
- `[T10]` Variability is "also known as heterogeneity" (Services marketing). SERVQUAL
  has five dimensions and a five-gap model. Keep them apart.
- `[T11]` Price discrimination has three degrees (first: personalised; second:
  quantity; third: market segregation) in the article's classification. Do not confuse
  the economics term with the Robinson-Patman legal test (FTC page).
- `[T15]` The CLV formula in the article applies "When margins and retention rates are
  constant". CAC has a "simple method" (total marketing cost for acquiring customers
  divided by customers acquired) and a complex method.
- `[T15]` NPS: promoters score 9 or 10, passives 7 or 8, and detractors 6 or lower.
  NPS is the percentage of promoters minus the percentage of detractors, and it is
  "typically expressed as an integer rather than a percentage".
- `[T15]` Market share is measured either as unit share or as revenue share.
- `[T5]` Buying center: the Buygrid buy classes (straight rebuy, modified rebuy, new
  task) come from Robinson et al. (1967), and Bunn (1993) extended them to six
  buying situations. The article does not list buying-centre roles, so no role cards
  are made (see Not verified).
- `[T16]` The FTC's three principles: ads must be "truthful and non-deceptive", backed
  by evidence, and not unfair. Unfairness has its own test, separate from deception.
- `[T16]` CAN-SPAM: honour opt-outs "within 10 business days". The per-email penalty
  on the page is adjusted for inflation, so keep it off cards.
- `[T16]` Robinson-Patman: price differences are "generally lawful" where they reflect
  cost differences or meet a competitor's offer (FTC page).
- `[all]` The AMA's prices, attempt rules, access window and CEU rules change, so keep
  them off cards. The 150 questions, three hours and 70% pass mark are the stable
  facts; re-check them at each release.
- `[all]` The AMA's five areas are topic labels on a sales page, not a weighted
  outline. Do not call them "the exam domains" or give weights.
- `[all]` "PCM" covers several AMA certifications. This deck covers only Marketing
  Management.
- `[all]` Wikipedia articles change. Writers cite the section anchor, re-read the
  article when writing, and never cite an article's statements that carry "citation
  needed" as fact.

## Leads that were wrong

- **OpenStax is tier D, not tier B.** Every OpenStax book page says it "may not be used
  in the training of large language models or otherwise be ingested into large
  language models or generative AI offerings without OpenStax's prior written
  permission". My first pass said no AI clause was found. That was wrong: I read the
  OpenStax Terms of Use only through a summarising fetch and did not check the book
  page footers. A writer caught it. openstax.org is now on the no-fetch list and in
  `src/licences.json` as tier D. Every OpenStax citation and cached copy has been
  removed, and this brief's concepts, lists and traps were rebuilt from Wikipedia and
  the FTC alone.
- The prompt said OpenStax Principles of Marketing is CC BY 4.0. Its own licence
  notice was CC BY-NC-SA 4.0, and in any case the AI clause makes it tier D.
- CONTENT-POLICY §5's "AMA" row means the American *Medical* Association, not the
  American Marketing Association.

## Languages

The AMA pages read give no exam language, and they are all in English. Most of the
Wikipedia articles used have versions in other languages. These are separate articles,
not translations, and I did not check them. Some FTC business guidance exists in
Spanish; I did not check that either.

## Not verified

- **The exam's domains and weights.** The book of knowledge
  (`/wp-content/uploads/2023/11/PCM_MM_BOK-Sept-2023.pdf`) is under a path that
  ama.org's robots.txt disallows, so I did not fetch it. A person can read it in a
  browser (tier C) and refine the mapping. The September 2023 date comes from the
  filename only.
- **The exam language, delivery (proctoring) and version date:** not on the pages read.
  The FAQ is on a JavaScript-only page, which I did not read.
- **Who owns the PCM marks.** The AMA's pages show ®, but I did not check a trademark
  register.
- **Whether the AMA terms' "linking" prohibition applies to plain hyperlinks** (a human
  decision).
- **Dropped for lack of an allowed source:**
  - buying-centre roles (initiator, user, influencer, decider, buyer, gatekeeper): not
    listed in the Wikipedia article;
  - an NPD stage list with fixed names: the article describes the fuzzy front end and
    process models, but gives no single named sequence, so `pcm.npd-stages` tells
    writers to count the stages in the model the article gives;
  - standardisation versus adaptation in global marketing: no fetched article covers
    it;
  - the service marketing triangle, the 5A framework, the four types of consumer buying
    behaviour and the "five critical Cs" of pricing: no allowed source;
  - average revenue per customer, customer effort score and return on ad spend: no
    article fetched (the ROAS title returned 404);
  - Keller's brand equity model: not checked in the Brand equity article.
- **Counts to confirm in the text:** `pcm.segment-criteria` (the article names
  substantial, accessible, differentiable and actionable; "measurable" was not found),
  `pcm.ped-determinants`, `pcm.branding-strategies` and `pcm.loyalty-segments`.
