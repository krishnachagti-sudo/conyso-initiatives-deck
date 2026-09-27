# pspo-ii audit, part b (topics 4 to 8)

221 cards checked (T4 46, T5 28, T6 33, T7 31, T8 83). Sources: the cached Scrum Guide 2020, EBM Guide 2024,
Nexus Guide 2021 and Wikipedia "Business model canvas" in `research/sources/pspo-ii/`. The prerequisite
decks were compared through `decks/scrum-pspo/notes/` and `decks/scrum-guide/notes/`.

Checked with no finding:
- No card in T4 to T8 states a PSPO II exam fact or cites www.scrum.org.
- Every scenario's choicesExplained covers exactly the wrong letters of its choices, and never the key.
- Every PDF `#page=` matches the page that holds the evidence.
- The primers "working session" (T5) and "levels of decomposition" (T6) match the Guides' usage. "Short project" is below.
- T8 contrast halves were checked against the Nexus Guide:
  - c-dod-scrum-vs-nexus: "The Nexus Integration Team is responsible for a Definition of Done that can be applied to the Integrated Increment … All Scrum Teams within the Nexus must define and adhere to this Definition of Done", p. 9.
  - c-nexus-sprint-goal-vs-product-goal: "a Nexus Sprint Goal that aligns with the Product Goal", p. 7; "The commitment for the Nexus Sprint Backlog is the Nexus Sprint Goal", p. 9.
  - Both are correct.

Repeats: a card is flagged when it asks a PSPO I or Scrum Guide deck fact again, or reruns a prerequisite scenario with no harder angle. The prerequisite card is named as evidence. Each deleted card's concept keeps at least one application card, or its concept moves to one that stays (see the fixes file).

## Findings

pspo2.vision-goals.level-bike-strategic | ambiguous | Choice C "Vision Statement" is defensible, because a city-wide rider outcome fits the Guide's definition of a vision. vision-no-goals also uses a statement of the same shape as a Vision Statement. The card also repeats PSPO I pspo.value-ebm.level-strategic. Deleted; level-bike-tactical made standalone | "A Vision Statement, an expression of the change that the organization wants to make in the world" (EBM p. 2)
pspo2.scaling-with-nexus.c-which-team-events-stay | ambiguous | "Which team events carry on" names only Daily Scrums and Retrospectives, so a reader may take team Sprint Planning and refinement as dropped. The Guide does not say that. Front and back narrowed to what the Guide states | "a Nexus Sprint Review replaces individual Scrum Team Sprint Reviews"; "Each Scrum Team's Daily Scrum complements the Nexus Daily Scrum"; "the Scrum Teams' Sprint Retrospectives complement the Nexus Sprint Retrospective" (Nexus p. 8)
pspo2.forecasting-release.short-project | unclear | The primer reads "short project" only as a time frame. It also applies to every Sprint the risk limit that the Guide gives to shorter Sprints, and it leaves out what makes a Sprint project-like (goal, plan, Done work) | "Shorter Sprints can be employed to … limit risk of cost and effort to a smaller time frame. Each Sprint may be considered a short project." (Scrum Guide, The Sprint)
pspo2.backlog-ordering.incident-interruptions | unclear | The D line argues for B but never says why Time-to-Market is wrong, and interruptions plausibly slow T2M | T2M: "Measures that quantify how quickly the organization can deliver and learn" (EBM p. 11); A2I appendix: Production Incident Count, "interrupted to fix a problem in an installed product" (EBM p. 16)
pspo2.scaling-with-nexus.s-wait-for-nit | unclear | "As a member of that team" could mean the Scrum Team or the Nexus Integration Team | "The Nexus Integration Team consists of: The Product Owner …" (Nexus p. 6)
pspo2.stakeholders.big-client-threat | minor | C says stakeholders may convince the Product Owner "at any time", which the Guide does not say | "Those wanting to change the Product Backlog can do so by trying to convince the Product Owner." (Scrum Guide, Product Owner)
pspo2.backlog-ordering.urgent-unrelated | minor | The key says to order the item "at the top", which assumes a value the stem never gives | Scrum Guide, Product Owner: ordering is the Product Owner's decision
pspo2.scaling-with-nexus.nit-scrum-master | minor | The explanation says the Nexus Integration Team's Scrum Master may hold "team roles". The Guide allows only a Scrum Master role | "This Scrum Master may also be a Scrum Master in one or more of the Scrum Teams in the Nexus." (Nexus p. 6)
pspo2.vision-goals.bmc-two-sided | minor | The D line calls diversified segments "unrelated", which the article does not say | "Diversify: A business serves multiple customer segments with different needs and characteristics." (Wikipedia, Description)
pspo2.vision-goals.product-boundary | minor | Repeats a PSPO I fact | pspo.po-accountability.product
pspo2.vision-goals.product-stakeholders | minor | Repeats a PSPO I fact | pspo.po-accountability.product
pspo2.vision-goals.product-users | minor | Repeats a PSPO I fact | pspo.po-accountability.product
pspo2.vision-goals.second-goal | minor | Reruns a PSPO I scenario | pspo.backlog-management.two-goals-scenario
pspo2.vision-goals.goal-in-slides | minor | Reruns a PSPO I scenario (Product Goal on a strategy slide) | pspo.backlog-management.goal-location-scenario
pspo2.vision-goals.level-bike-intermediate | minor | Reruns a PSPO I scenario (a pilot in one district) | pspo.value-ebm.level-intermediate
pspo2.vision-goals.level-bike-means | minor | Repeats a PSPO I fact | pspo.value-ebm.effects-not-means
pspo2.stakeholders.few-alternatives | minor | Repeats a PSPO I fact | pspo.value-ebm.cv-scenario
pspo2.stakeholders.locked-in-customers | minor | Reruns a PSPO I scenario | pspo.value-ebm.cv-scenario
pspo2.stakeholders.review-environment | minor | Repeats a PSPO I fact, word for word | pspo.vision-strategy.review-what-next
pspo2.stakeholders.slideshow-review | minor | Reruns a PSPO I scenario | pspo.vision-strategy.review-slideshow-scenario; scrum.events.slide-show-review
pspo2.stakeholders.adjust-at-review | minor | Reruns a PSPO I scenario | pspo.backlog-management.review-scenario
pspo2.stakeholders.open-about | minor | Repeats a Scrum Guide deck fact | scrum.values.value-openness
pspo2.stakeholders.committee-vote | minor | Reruns a PSPO I scenario | pspo.po-accountability.committee-scenario
pspo2.stakeholders.ceo-emails | minor | Reruns a PSPO I scenario, and the front asks for the PSPO I fact directly | pspo.po-accountability.bypass-scenario; pspo.po-accountability.decisions-respected
pspo2.stakeholders.go-around | minor | Reruns a Scrum Guide deck scenario | scrum.events.urgent-swap
pspo2.backlog-ordering.two-backlogs | minor | Reruns a PSPO I scenario | pspo.backlog-management.side-list-scenario
pspo2.backlog-ordering.invite-expert | minor | Repeats a Scrum Guide deck fact | scrum.events.planning-guests
pspo2.backlog-ordering.who-sizes | minor | Repeats a PSPO I fact | pspo.backlog-management.who-sizes
pspo2.backlog-ordering.size-disagreement | minor | Reruns a PSPO I scenario | pspo.backlog-management.size-override-scenario
pspo2.backlog-ordering.delegated-ordering | minor | Reruns a PSPO I scenario | pspo.po-accountability.delegation-scenario
pspo2.backlog-ordering.where-decisions | minor | Repeats a PSPO I fact | pspo.po-accountability.decisions-visible
pspo2.backlog-ordering.loyalty-scheme | minor | Reruns a PSPO I scenario (also a loyalty scheme) | pspo.value-ebm.feature-scenario
pspo2.backlog-ordering.cut-quality | minor | Reruns a PSPO I scenario | pspo.self-managing-team.skip-tests-scenario
pspo2.forecasting-release.iterative-predictability | minor | Repeats a Scrum Guide deck fact | scrum.basics.iterative-incremental
pspo2.forecasting-release.shorter-sprints | minor | Repeats a PSPO I fact, word for word | pspo.forecasting-releasing.shorter-sprints
pspo2.forecasting-release.born-vs-presented | minor | Repeats a Scrum Guide deck fact | scrum.artifacts.increment-born
pspo2.forecasting-release.almost-done-demo | minor | Reruns a PSPO I scenario ("90% finished") | pspo.backlog-management.undone-scenario
pspo2.forecasting-release.release-undone | minor | Reruns a PSPO I scenario | pspo.forecasting-releasing.almost-done-scenario
pspo2.forecasting-release.weaker-dod | minor | Reruns a PSPO I scenario | pspo.forecasting-releasing.org-dod-scenario
pspo2.forecasting-release.release-day-four | minor | Reruns a PSPO I scenario (urgent fix Done early in the Sprint) | pspo.forecasting-releasing.wait-for-review-scenario
pspo2.forecasting-release.fewer-features | minor | Repeats a PSPO I fact | pspo.value-ebm.fewer-features
pspo2.forecasting-release.twenty-features | minor | Reruns a PSPO I scenario | pspo.value-ebm.release-scenario
pspo2.scaling-with-nexus.ctr-decomposition | minor | Same sentence and answer as this deck's primer pspo2.backlog-ordering.decomposition-levels | Nexus p. 7
pspo2.scaling-with-nexus.s-deliver-mid-sprint | minor | Reruns a PSPO I fact; no patch, because it is the only application card of pspo2.integrated-increment-early and needs a harder scenario | pspo.backlog-management.ii-delivery
pspo2.scaling-with-nexus.s-own-dod | minor | Reruns a PSPO I fact; no patch, because it is the only application card of pspo2.nexus-dod and needs a harder scenario | pspo.backlog-management.ii-dod
