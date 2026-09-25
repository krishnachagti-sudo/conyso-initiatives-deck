# FCC fix pass (one agent per audit report)

In /home/user/conyso-initiatives-deck. Read the privacy and one-rule sections of
research/deck-briefs/WRITER.md, and step 3b of RECONCILE.md.
1. Apply every finding in your audit report to the cards in YOUR topic files only.
   Pool cards: question, choices and keyed answer stay verbatim; a back may quote
   the keyed option in full (no "…"); put any gloss in the explanation.
2. Explanations that only restate the answer: rewrite them to say WHY, from the
   pool (other questions often state the reason), 47 CFR, or the cited source.
3. Cards resting on Wikipedia alone: find a primary or public-domain source that
   states the fact (47 CFR, the pool, NOAA/NWS, NIST, FCC, US government handbooks
   such as military field manuals on antennas and propagation). If found, cite it
   (sourceLicence "B · public domain (US Government work)" where so). If none,
   keep Wikipedia ("B · CC BY-SA 4.0") and list the card in your reply.
4. Alt text must not give away a figure card's answer.
5. Run `node build/check.mjs`; fcc-technician must pass. Keep ids and conceptIDs;
   orders unique, primers first. Never run git. Never edit files outside yours.
Reply in under 100 words: findings applied, Wikipedia cards re-sourced or kept,
anything unresolved.
