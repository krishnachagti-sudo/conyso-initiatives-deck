# scrum-pspo audit (all six topics, 307 cards)

Checked 307 cards: 255 with evidence against the Scrum Guide (2020), the EBM Guide (2024) and the Nexus Guide (2021), all saved in `research/sources/scrum-pspo/`, and 52 tier C cards against the saved research copies of the scrum.org pages. Nothing was fetched.

Note on the tier C copies: the manifest lists every scrum.org page with `"path": null`. The only saved copies are the research-time Markdown files in the session scratchpad (`sources/scrum-pspo/ls-*.md`, `comp-products.md`), which a proxy reader made. The facts on all 52 tier C cards match those copies. The deck's release blocker about scrum.org still stands until someone decides whether a card may rest on a copy made that way (CONTENT-POLICY.md §3, tier C).

id | severity | problem | evidence (source words, with page)
---|---|---|---
pspo.vision-strategy.classify-mission | ambiguous | “…so that no family in our county goes to bed hungry tonight” reads as a long-term aspiration, so B (Vision Statement) is also defensible. | Scrum.org, Business Strategy: Mission “focuses on what the organization is today”; Vision “expresses the long-term aspirations”
pspo.value-ebm.loop-scenario | unclear | The form was changed “last week”, yet the team has “two weeks of sign-up data”. A reader has to stop and work out whether the experiment has run long enough. | EBM Guide p. 6–7, Experiment Loop steps
pspo.backlog-management.nit-sm | unclear | “Which Scrum accountability has one holder on the Nexus Integration Team?” is hard to parse. | Nexus Guide p. 5: “The Nexus Integration Team consists of the Product Owner, a Scrum Master, and Nexus Integration Team Members.”
pspo.vision-strategy.future-press-release | unsupported | The front says the team imagines “the product already out in the world”. The saved copy is cut off at “envision a future where t…”. | Scrum.org, Product Vision: “teams can use a technique known as the Future Press Release. (Also known as Newspaper Headline or Cover Story.) This technique encourages participants to envision a future where t...”
pspo.po-accountability.bypass-scenario | unsupported | The choicesExplained field says “the backlog can be changed at any time”, which the Guide does not say. | Scrum Guide, Product Owner: “Those wanting to change the Product Backlog can do so by trying to convince the Product Owner.”
pspo.value-ebm.class-impact | minor | “The trust’s income” is NHS jargon, and the stem has already called it a “hospital group”. | EBM Guide p. 6, Impacts
pspo.value-ebm.product-value | minor | The back says “the people who use it”, but the source says customers, and customers include buyers. | Scrum.org, Product Value: “the benefit that a product provides to a customer to increase their satisfaction and needs”
pspo.vision-strategy.vision-built-incrementally | minor | Tier C: the front is almost word for word Scrum.org's sentence. | Scrum.org, Product Vision: “A good Product Vision is built incrementally allowing many opportunities for inspection and adaptation.”
pspo.forecasting-releasing.benefit-feedback | minor | Tier C: the back copies the list item with one word changed. | Scrum.org, Forecasting and Release Planning: “Opportunities for faster user feedback, learning and course correction”
pspo.forecasting-releasing.what-is-release-planning | minor | Tier C: the back is almost word for word. | Scrum.org, Forecasting and Release Planning: “as a guide for delivering a product through small incremental and frequent releases rather than big bang product launches”
pspo.vision-strategy.why-engage-stakeholders | minor | Tier C: the back is almost word for word. | Scrum.org, Stakeholders and Customers: “Only they can provide the feedback necessary to ensure that the product satisfies their needs and expectations.”
pspo.po-accountability.pbm-ordering | minor | The evidence quotes the “decisions are visible” sentence, not the list item that the back rests on. | Scrum Guide, Product Owner: “Ordering Product Backlog items; and,”
pspo.backlog-management.nit-po | minor | The front says the Product Owner is “accountable for the single Product Backlog”, but the cited p. 5 gives only NIT membership (the backlog accountability is on p. 4 and p. 9), and the explanation (“listed first”) does not say why. Logged, not patched. | Nexus Guide p. 9: “The Product Owner is accountable for the Product Backlog, including its content, availability, and ordering.”
pspo.value-ebm.ebm | minor | The explanation's claim (complex problems, small steps) is on p. 3, not on the cited p. 2. Logged, not patched. | EBM Guide p. 3: “Complex problems don't have easy solutions… achieving larger goals in small steps.”

## Checked and sound
- Every evidence quote supports its back. All EBM and Nexus page numbers agree with the saved PDF text, including every appendix KVM on pp. 14–16.
- The three SVG figures (experiment loop, goal levels, KVAs) show what their cards say, and their credits are correct.
- All scenario keys have exactly one defensible answer, apart from classify-mission (above).
- The facts on all 52 tier C cards match the saved copies. The self-management, stakeholder, forecasting, release, Business Strategy, Product Vision, Product Value and PBM activity lists all check out.
