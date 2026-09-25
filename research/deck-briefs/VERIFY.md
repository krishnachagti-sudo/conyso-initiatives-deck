# Verify brief (given to the fix-verification agent)

An audit found cards that were **wrong**, and those cards have since been
changed, by an applied patch or by a fixer. You check only those cards. The
ids are in your assignment, taken from the audit's "wrong" findings. Nobody
has re-read these rewrites yet.

For each card, read the audit line, the card as it is now, and the cited
source (saved text in `research/sources/<slug>/`). Decide:
- **fixed**: correct, sourced, one defensible answer;
- **still wrong**: give the source words;
- **newly wrong**: the fix introduced a new error.

**Privacy.** No email, name or personal detail in any request.

## Output
- **`research/deck-briefs/<slug>-verify.md`:** one line per card, as `id | fixed / still wrong / newly wrong | evidence`.
- **`research/deck-briefs/<slug>-verify.jsonl`:** a patch line for each card that is not fixed, in the format AUDIT.md gives.

## Your reply
At most three lines: the counts, and the worst remaining problem.
