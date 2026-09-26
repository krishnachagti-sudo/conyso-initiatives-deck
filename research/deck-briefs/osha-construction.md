# Research brief: OSHA Outreach Training Program, Construction (10-hour and 30-hour topics)

Slug: `osha-construction`. Concept family: `oshac`. Researched 25 September 2026.
Every fact below was read in a document fetched during this task. Saved copies and
extracted text are in
`/tmp/claude-0/-home-user-law-tome/f1b32c94-e260-55f0-a03c-42790c3a815c/scratchpad/sources/osha-construction/`
(file names are given as `[file]`).

**The main gap, stated first.** During this task every request to `www.osha.gov` and
`www.dol.gov` (including `https://www.osha.gov/robots.txt`) got **HTTP 403 "Request
blocked"** from CloudFront. osha.gov was polled every 2.5 minutes from 23:41 to about
00:08 UTC, and every poll got the same 403 [`osha-robots.txt` holds the error page]. No proxy reader, mirror, cache,
browser User-Agent or re-hosted copy was used to get round the block. So **the Outreach
Training Program requirements document, the Construction course page and OSHA's own
copyright wording were not read.** Everything that depends on them (course facts, the
mandatory and elective topic lists and their hours, OSHA's naming terms) is under §6,
"Not verified". The deck's legal content is fully sourced from govinfo.gov: 29 CFR 1926,
the OSH Act, and 29 CFR 1903, 1904, 1910.1200 and 1977.

How sources were read:
- All six regulatory sources are govinfo PDFs, extracted with `pdftotext`. `#page=N` is
  the PDF page (form-feed count), not the printed CFR page. In the 1926 PDF the printed
  page is about 6 higher than the PDF page (PDF p. 347 is printed "353").
- `scratchpad/oshac_build.py` holds each concept's search phrase. It found every phrase
  in the flattened page text and recorded the page. The context of every concept with a
  number in its name was then read by hand. Two pages are images, and both were read by
  rendering them: Table B-1 (1926 PDF p. 347) and Figure C.1 of 1910.1200 (PDF p. 63).

---

## 1. Exam facts

**What this is.** The request describes the program as a course with a completion card,
not an exam. The facts that would describe it (owner's wording, course length, the
mandatory and elective topics and their hours, trainer rules, any test at the end, card
validity, replacement cards, online-provider limits) are all on osha.gov. None of them
could be read in this task, so **none is stated here.** See §6.

What the fetched sources do say about training and the legal basis:

| Fact | Quote | Source | Volatile |
|---|---|---|---|
| Legal basis of the construction standards | "This part sets forth the safety and health standards promulgated by the Secretary of Labor under section 107 of the Contract Work Hours and Safety Standards Act." (1926.1(a)) | [`cfr1926.txt`] p. 6 | no |
| Employer training duty | 1926.21(b)(2): "The employer shall instruct each employee in the recognition and avoidance of unsafe conditions and the regulations applicable to his work environment to control or eliminate any hazards or other exposure to illness or injury." | [`cfr1926.txt`] p. 24 | no |
| CFR edition used | Running head "29 CFR Ch. XVII (7–1–25 Edition)" (1926, 1903, 1904, 1977) | [`cfr1926.txt`], [`cfrpart1903.txt`] | yes, reissued every 1 July |
| HazCom edition caveat | "EFFECTIVE DATE NOTE: Amendments to § 1910.1200 were published at 89 FR 44356, May 20, 2024, effective July 19, 2024." | [`cfr1910-1200.txt`] | **yes** |
| Penalty amounts | 1903.15(d): "…penalties proposed after January 15, 2025 are as follows: (1) Willful violation… shall not be less than $11,823 and shall not exceed $165,514… (3) Serious violation… shall not exceed $16,550. (4) Other-than-serious violation… shall not exceed $16,550." | [`cfrpart1903.txt`] p. 10 | **yes**, adjusted each January |

**Changes often:** penalty amounts (every January), the annual CFR edition, and anything on
osha.gov about Outreach cards, providers and trainer rules (not read).
The newer govinfo 1910.1200 edition was 2024. The govinfo link service sent "mostrecent"
to the 2024 volume, and the 2025 section URL returned an error.

---

## 2. Naming

- **Owner's trademark terms:** not read, because osha.gov is blocked (§6). No trademark
  claim was found in the fetched sources. "OSHA" is the agency's name, spelled out in
  1926.32(e) as the Occupational Safety and Health Administration [`cfr1926.txt` p. 25].
- **CONTENT-POLICY.md §4** applies as the "Everyone else" pattern, adapted because no
  trademark statement was verified. It applies as follows. Name the program only to state
  what the deck covers. Use plain text and no logo, with our brand first. Never say
  "official", "approved", "authorized" or "card". **Never imply that the deck is an Outreach course, or
  that it earns or replaces an Outreach card.**
- Title pattern: "[Site name] deck for OSHA Outreach Training Program Construction
  topics (10-hour and 30-hour)".
- **Deck notice:**

> This deck covers topics taught in the Construction courses of the Outreach Training
> Program run by the Occupational Safety and Health Administration (OSHA), U.S.
> Department of Labor. It is built from the text of the Occupational Safety and Health
> Act and 29 CFR, which are U.S. Government works. This deck is independent and is not
> affiliated with, sponsored, endorsed or approved by OSHA or the U.S. Department of
> Labor. It is not an Outreach Training Program course, and studying it does not earn
> any OSHA or Department of Labor card, certificate or credit.

- **Public-domain status of each source.** On whether each OSHA page is a US Government work:
  - govinfo's notice quotes 17 U.S.C. 105 ("Copyright protection under this title is not
    available for any work of the United States Government"). It adds "Government
    publications may contain copyrighted material which was used with permission of the
    copyright owner" [`govinfo-policies.txt`, `usc17-105.txt`].
  - A text search of the 1926 PDF for "copyright", "reproduced with permission" and
    "courtesy of" found nothing.
  - 1926.6 incorporates third-party standards by reference: ANSI Z89.1 for helmets, the
    MUTCD for flaggers, NFPA and others. The ANSI copies "are available for purchase only
    from the International Safety Equipment Association" [`cfr1926.txt` p. 10]. **Cite
    the CFR rule. Never reproduce text or figures of an incorporated standard.**
  - **OSHA web pages and publications were not checked**, because the site was blocked.
    Until they are read, cards must not rely on OSHA publications, photos or
    training-module materials. Some of these may carry third-party images or content.

---

## 3. Topics (our labels) and outline

**The owner's outline could not be read** (§6). The Outreach requirements document sets
the mandatory and elective topics and their hours. The 14 topics below are **our own
labels**. They are ordered as a construction-safety course might teach them, from the
Act, to site duties, to the major hazards, to health. Each one maps to the regulation
that governs it. After OSHA's topic list has been read, one reconcile pass should map
each owner topic to a `[Tn]` and fill in the hours.

| T | Topic (our label) | Regulatory source | Concepts |
|---|---|---|---|
| T1 | Introduction to OSHA: rights, duties and enforcement | OSH Act §§ 651–667; 29 CFR 1903, 1977 | 29 |
| T2 | Injury and illness recordkeeping and reporting | 29 CFR 1904 | 13 |
| T3 | General construction safety duties | 1926 Subparts A–C (1926.16, .20, .21, .25, .32, .35, .50, .51, .56) | 13 |
| T4 | Fall protection | 1926 Subpart M (1926.500–.503) | 32 |
| T5 | Scaffolds | 1926 Subpart L (1926.450–.454) | 18 |
| T6 | Stairways and ladders | 1926 Subpart X (1926.1050–.1060) | 16 |
| T7 | Electrical safety | 1926 Subpart K; 1926.1408 | 19 |
| T8 | Struck-by hazards: vehicles, equipment and signalling | 1926.100, .200–.201, .302, .600–.602, .701, .706, .1425, Subpart W | 15 |
| T9 | Caught-in or -between hazards: excavations and trenching | 1926 Subpart P and Appendices A–B | 28 |
| T10 | Personal protective equipment | 1926 Subpart E (1926.95–.106), 1926.28 | 15 |
| T11 | Health hazards: hazard communication, silica, noise, lead, asbestos | 1926.59 / 1910.1200; 1926.1153; 1926.52; 1926.62; 1926.1101 | 33 |
| T12 | Fire protection and welding | 1926 Subparts F and J | 15 |
| T13 | Hand and power tools | 1926 Subpart I | 14 |
| T14 | Cranes, rigging and confined spaces | 1926 Subparts CC, H (1926.251), AA | 22 |

Totals: **282 concepts** (190 core, 92 extra), **77 terms**, **576 budgeted cards**.
Budget per topic (+10%): T1 61, T2 34, T3 26, T4 59, T5 33, T6 28, T7 37, T8 25, T9 56,
T10 26, T11 101, T12 28, T13 21, T14 41.

Outline by source. All pages are PDF pages of the file named. Section numbers are 29 CFR
unless marked "Act".

**[T1] Introduction to OSHA** (`usc29-ch15-2024.pdf`, `cfrpart1903.pdf`, `cfrpart1977.pdf`)
- Purpose of the Act: § 651(b), "The Congress declares it to be its purpose…" (p. 1) [T1]
- Employer duties § 654(a)(1), the general duty clause, "free from recognized hazards",
  and (a)(2), comply with standards; employee duty § 654(b) (p. 4) [T1]
- Standards § 655 (p. 4); inspections § 657 (p. 10); request an inspection § 657(f)
  (p. 11) [T1]
- Citations § 658 (p. 11); 15 working days to contest § 659 (p. 12); Review Commission
  § 661 (p. 14); imminent danger § 662 (p. 15) [T1]
- Anti-retaliation § 660(c): "No person shall discharge or in any manner discriminate…",
  complaint "within thirty days" (p. 13); Part 1977 (p. 4) [T1]
- Penalties § 666: serious-violation definition (p. 16); amounts 1903.15(d) (p. 10);
  state plans § 667 (p. 16) [T1]
- Part 1903: poster 1903.2 (p. 2), representatives 1903.8 (p. 5), complaints 1903.11
  (p. 6), de minimis 1903.14 (p. 8), posting citations 1903.16 (p. 10) [T1]

**[T2] Recordkeeping** (`cfrpart1904.pdf`)
- 10 or fewer employees partially exempt, 1904.1 (p. 2); work-relatedness 1904.5 (p. 5) [T2]
- General recording criteria, 1904.7: death, days away, restricted work or transfer,
  medical treatment beyond first aid, loss of consciousness, significant diagnosis
  (p. 8); first-aid list (p. 11) [T2]
- Forms 300, 300A and 301 (p. 14); record within 7 calendar days (p. 15); post the 300A
  from 1 February to 30 April and keep records 5 years (p. 17); employee involvement
  1904.35 (p. 18) [T2]
- Report a fatality within 8 hours; in-patient hospitalisation, amputation or loss of
  an eye within 24 hours (pp. 8, 22) [T2]

**[T3] General duties** (`cfr1926-2025.pdf`)
- Prime contractor responsibility (p. 23); 1926.20 accident prevention programmes and
  inspections by competent persons (p. 23); 1926.21 training (p. 24); housekeeping
  1926.25 (p. 24) [T3]
- Definitions 1926.32: competent person (f), construction work (g), qualified (m)
  (pp. 25–26) [T3]
- First aid 1926.50 (p. 27); sanitation (p. 28); illumination (p. 44); emergency action
  plans 1926.35 [T3]

**[T4] Fall protection**: 1926.500 definitions (pp. 287–290); duty 1926.501, 6 feet
(p. 291); criteria 1926.502 (pp. 293–299), including guardrails 42 ± 3 inches and
200 lb, midrails 150 lb, toeboards 3½ inches, safety nets (no more than 30 feet
below), PFAS (anchorage 5,000 lb, free fall 6 feet, deceleration 3.5 feet, 1,800 lb
with harness, locking snaphooks), covers "HOLE"/"COVER", falling objects; training and
certification 1926.503 (pp. 300–301) [T4]

**[T5] Scaffolds**: 1926.451 capacity (4 × intended load), fully planked, 18-inch width,
14-inch front edge, base plates and mud sills, 4:1 tie (pp. 253–254); access beyond
2 feet and cross braces (pp. 257–259); power-line clearances (p. 259); 10-foot fall
protection (p. 260); aerial lifts 1926.453 (p. 270); training 1926.454 (p. 271) [T5]

**[T6] Stairways and ladders**: 19-inch break in elevation (p. 521); 4 risers or
30 inches (p. 522); ladder loads and rung spacing (p. 523); fixed ladders 24 feet
(p. 525); 3-foot extension, 1:4 angle, nonconductive siderails (p. 526); face the ladder,
"Do Not Use" tag (p. 527); training 1926.1060 (p. 527) [T6]

**[T7] Electrical**: 1926.400 (p. 220); 50-volt guarding (p. 222); GFCI or assured
equipment grounding conductor program, 1926.404(b)(1) (p. 224); cords, three-wire, worn
cords, 1926.405 (p. 231); 1926.416 work near circuits (p. 240); 1926.417 lockout and
tagging (p. 240); cranes near power lines, 1926.1408 Table A (pp. 679–680) [T7]

**[T8] Struck-by**: head protection 1926.100 (p. 168); signs 1926.200 and flaggers to
MUTCD Part 6, 1926.201 (pp. 195–196); pneumatic retainers and 30 psi 1926.302
(p. 204); vehicles 1926.601, with shift checks, seat belts, dump bodies and reverse alarm
(pp. 332–334); rebar impalement; masonry limited access zone (p. 379); fall zone
1926.1425 (p. 696) [T8]

**[T9] Excavations**: definitions 1926.650 (pp. 337–338); 1926.651 utilities, egress
at 4 feet and 25 feet, atmospheres, water, spoil 2 feet, daily inspections (pp.
339–341); 1926.652 protective systems (p. 341), shields (p. 343); Appendix A soil types
(pp. 344–345); Appendix B slopes, Table B-1 (image, p. 347); more than 20 feet designed
by a registered professional engineer (p. 370) [T9]

**[T10] PPE**: 1926.28 (p. 25); 1926.95 including payment (p. 162); foot 1926.96,
electrical 1926.97 (p. 163); head, hearing and eye 1926.100–.102 (pp. 168–169);
respiratory 1926.103, identical to 1910.134 (p. 170); working over water 1926.106
(p. 170) [T10]

**[T11] Health hazards**
- HazCom: 1926.59 is identical to 1910.1200 (1926 p. 69). In `cfr1910-1200.pdf`:
  definitions (pp. 4–5), written programme (p. 6), label elements and workplace labels
  (p. 7), SDS sections (p. 8), SDS access (p. 9), training (p. 10), eight hazard symbols in Figure C.1 (image, p. 63) [T11]
- Silica 1926.1153: definitions, action level 25 μg/m³ (p. 633); Table 1 (p. 634); PEL
  50 μg/m³ (p. 637); controls (p. 638); written exposure control plan, housekeeping
  (p. 639); medical surveillance at 30 or more days of respirator use a year (p. 640) [T11]
- Noise 1926.52, Table D-2, 90 dBA for 8 hours (p. 30); lead 1926.62, PEL and action
  level (p. 83); asbestos 1926.1101, classes (pp. 529–530), PEL 0.1 f/cc and excursion
  limit 1.0 f/cc over 30 minutes (p. 531) [T11]

**[T12] Fire and welding**: 1926.150 extinguishers, 2A per 3,000 square feet, 100 feet
of travel (p. 171); smoking 1926.151 (p. 173); flammable liquids 1926.152 (pp. 174–176);
heaters 1926.154 (p. 193); cylinders 1926.350, caps, upright, oxygen 20 feet from fuel
gas (p. 214); arc-welding cables 1926.351 (p. 216); fire watch 1926.352(e) (p. 217) [T12]

**[T13] Tools**: 1926.300 guarding (pp. 201–203); 1926.301 hand tools (p. 204); 1926.302
double-insulated or grounded, no hoisting by cord, powder-actuated (p. 204); ring test
1926.303 (p. 206) [T13]

**[T14] Cranes, rigging and confined spaces**
- Cranes: 1926.1400 (p. 668), 1926.1402 (p. 675), hand-signal chart 1926.1422 (p. 699),
  swing radius 1926.1424 (p. 701), operator certification 1926.1427 (p. 703), signal
  person 1926.1428 (p. 708) [T14]
- Rigging: 1926.251 (pp. 197–201) [T14]
- Confined spaces: definitions 1926.1202 (pp. 655–657, O₂ 19.5% and 23.5%), testing
  order (p. 663), permit 1926.1206 (p. 665), attendants 1926.1209 (p. 666), rescue
  1926.1211 (p. 667) [T14]

---

## 4. Traps

- The fall-protection trigger is 6 feet (1926.501(b)); on scaffolds it is **10 feet**
  (1926.451(g)(1)). [T4] [T5]
- Body belts are not acceptable in a personal fall arrest system (quoted in the
  aerial-lift note, 1926.453, p. 270); they remain allowed for positioning and
  restraint. [T4] [T5]
- A PFAS limits free fall to 6 feet, but deceleration distance is a separate 3.5-foot
  limit. [T4]
- Top rail: **42 inches plus or minus 3 inches** and 200 lb. Midrail: 150 lb, "midway".
  Scaffold guardrails have their own figures in 1926.451(g)(4). [T4] [T5]
- Excavation depths are easy to mix up: **4 feet** for egress (within 25 feet) and
  atmosphere testing; **5 feet** for a protective system (unless stable rock, or the
  competent person finds no sign of a cave-in); **20 feet** for a design by a registered
  professional engineer. [T9]
- Table B-1 slopes: Type A 3/4:1, B 1:1, C 1½:1, stable rock vertical. There is a
  short-term exception for Type A: 1/2:1 for open 24 hours or less and 12 feet or less
  deep. Table B-1 is an image, so cite the figure. [T9]
- Silica action level is 25 μg/m³ and PEL is 50 μg/m³. Lead's action level is
  30 μg/m³ with the same PEL, 50 μg/m³. Asbestos is measured in fibres per cm³, not
  μg/m³. [T11]
- GFCIs **or** an assured equipment grounding conductor program: 1926.404(b)(1)(i) says
  "The employer shall use either…". [T7]
- Retaliation complaints are due within **30 days**; an employer's notice of contest
  within **15 working days**. [T1]
- Report a fatality within **8 hours**; in-patient hospitalisation, amputation or loss
  of an eye within **24 hours**. [T2]
- Competent person (identifies hazards **and** has authority to correct them) versus
  qualified person (degree, certificate or extensive knowledge). [T3]
- Confined space versus permit-required confined space. Oxygen-deficient means below
  19.5%; oxygen-enriched means above 23.5%. Test for oxygen first, then combustibles,
  then toxics. [T14]
- **HazCom text is changing.** 1926.59 points to 1910.1200. The only 1910.1200 text
  fetched (2024 edition) pre-dates the 2024 amendments (89 FR 44356, effective 19 July
  2024). Check label, SDS and training cards against the amended text before release. [T11]
- **Penalty amounts go out of date every January.** 1903.15(d) in the 2025 edition gives
  the figures "proposed after January 15, 2025". Put amounts on cards only with the year,
  or teach the categories alone. [T1]
- "Danger" is for the more severe hazards and "Warning" for the less severe (1910.1200(c)).
  [T11]

---

## 5. Languages

The regulations fetched are in English only. No official or openly licensed translation of
29 CFR 1926 or the OSH Act was found, and none was searched for beyond govinfo. Whether
Outreach courses are offered in other languages, and whether OSHA publishes Spanish
versions of its construction material, is on osha.gov, which could not be read (§6).

---

## 6. Not verified

1. **The whole Outreach Training Program side.** This covers the requirements document
   (earlier in the day's research a link to `/sites/default/files/OTP_Requirements_2024.pdf`
   was seen on the osha.gov Outreach page; not fetched in this task), the Construction page
   `https://www.osha.gov/training/outreach/construction`, and the FAQ. It includes the
   mandatory and elective topics and their hours for the 10-hour and 30-hour courses,
   course length rules, any end-of-course test, and card issue, replacement and validity.
   *Tried:* direct fetch of the page, the PDF and robots.txt, then polling every
   2.5 minutes for about 27 minutes. All returned CloudFront 403 "Request blocked"; so did
   www.dol.gov. *Next step:* fetch from an environment that osha.gov does not block, then
   reconcile §3 to the owner's topic list.
2. **The quotes about the program in `candidates-longtail/government-public.md`**, for
   example "Students receive an OSHA 10-hour or 30-hour course completion card", were
   fetched by an earlier task, not this one. Treat them as leads only.
3. **OSHA's copyright and third-party-content statements** (osha.gov and dol.gov
   disclaimers), and whether individual OSHA publications or training materials carry
   third-party images. Not read (403). Until they are, use only the govinfo texts.
4. **"Focus Four"** (falls, electrocution, struck-by, caught-in/between) as OSHA's own
   term. It appears in no fetched source, so T4–T9 are named by hazard and not by that
   term.
5. **Amended 1910.1200 (2024).** The Federal Register text (89 FR 44356) was not fetched.
6. **Penalty amounts after January 2026.** Only the 2025 CFR edition was read.
7. **The printed trademark or naming guidance for "OSHA" or "Outreach Training
   Program".** Not found (403).
