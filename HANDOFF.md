# The Exam Primer — developer handoff

Everything needed to deploy The Exam Primer at **conyso.com/primer/** and keep it
current. Self-contained; deeper detail is in `docs/LAUNCH.md`.

---

## 1. What this is

A **static website**: `.html`, `.css`, `.js`, images, and the deck downloads
(`.apkg`, `.csv`, `.pdf` and 12 other formats), plus `sitemap.xml`, `robots.txt`,
`feed.xml`, `llms.txt` and a `.md` twin of every page. **No runtime, no database,
no server-side code.** Deploy = build `dist/`, upload it to `/primer/`.

Node and Python are used **only** to build. They never serve anything.

**Must be served at the subpath `/primer/` on `https://conyso.com`.** Canonicals,
the sitemap and every link are built for that address (`site.config.json`), so
any other path breaks them.

---

## 2. Current state (as of 2026-10-08)

| | |
|---|---|
| Branch to deploy | `claude/deck-engine` (commit `eb38c0a` or later) |
| Decks | 59 released, about 50,600 cards |
| Pages in the sitemap | 149 |
| Checks | tests, card checker, build and preflight all pass on a clean checkout |
| Preview (noindex) | krishnachagti-sudo.github.io/conyso-initiatives-deck/ |
| GitHub labels | `exam-request` and `card-report` exist |

---

## 3. Building

One-time setup on the build machine:

```
git clone https://github.com/krishnachagti-sudo/conyso-initiatives-deck.git
cd conyso-initiatives-deck && git checkout claude/deck-engine
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt   # genanki (.apkg), Pillow (share images)
```

Node 22 or later. There are no npm packages to install. PDFs need headless
Chromium or Chrome: set `CHROME_BIN` if it is not on the PATH.

Each deploy:

```
git pull origin claude/deck-engine
PATH="$PWD/.venv/bin:$PATH" node build/build.mjs     # about 40 minutes, writes dist/
node build/preflight.mjs                              # must print "dist is clean"
```

Do not deploy if preflight reports anything.

---

## 4. Deploying

Upload `dist/` (its contents) to the `/primer/` folder on the server, the same way
as conyso.com and the Law Tome:

```
rsync -a --delete dist/ user@host:/var/www/conyso/primer/
```

Then purge the nginx cache for `/primer/` and open
`https://conyso.com/primer/?nocache=1`.

### Host config checklist (once)
- [ ] **Root robots.txt.** Crawlers read only `conyso.com/robots.txt`. Add
      `Sitemap: https://conyso.com/primer/sitemap.xml`, and keep any rule in every
      named user-agent group.
- [ ] **404**: `error_page 404` for `/primer/` → `/primer/404.html`.
- [ ] **MIME types**: `.webmanifest` → `application/manifest+json`; the `.xml` feeds →
      `application/atom+xml` or `application/xml`; `.apkg` → `application/octet-stream`;
      `.md` → `text/markdown` (or `text/plain`).
- [ ] **gzip/brotli** on HTML, CSS, JS, JSON, XML and `.md`.
- [ ] **Caching**: HTML short (about 5 minutes); `assets/` can be cached longer.
- [ ] **conyso.com** (conyso-site repo): add the Primer to Conyso's `subOrganization`
      list beside the Law Tome and the Bias Atlas, with `@id`
      `https://conyso.com/primer/#organization`, and link it from the home page and
      `/founder/`.

### Post-deploy check
- [ ] Home, `/primer/browse/`, a deck page (`/primer/psm-ii/`) and `/primer/about/` load **with CSS**.
- [ ] A download works (`/primer/psm-ii/` → the `.apkg`), and `/primer/sitemap.xml` and `/primer/psm-ii/index.md` resolve.
- [ ] Submit `https://conyso.com/primer/sitemap.xml` in Google Search Console.
- [ ] Google's Rich Results Test on `/primer/psm-ii/` and `/primer/about/` shows no errors.

---

## 5. After every upload: IndexNow (about 1 minute)

Only **after** the new files are live, or the engines fetch the old pages:

```
npm run indexnow:dry     # prints the URLs whose date moved in the last build
npm run indexnow         # sends them to api.indexnow.org
```

That reaches Bing (and so ChatGPT Search and Copilot), Yandex, Naver, Seznam and Yep.
Google does not take part. The key file is already at the root of conyso.com,
shared with the Tome and the Atlas.

---

## 6. Weekly: new decks

A few certifications are added each week. The deck work happens in this repo and
lands on `claude/deck-engine`; the developer's part is the same as §3–5: pull,
build, preflight, upload, IndexNow. New decks appear on the home page, `/new/`,
the feed, their subject page, search and the sitemap by themselves.

---

## 7. Command cheat-sheet

| Command | Does |
|---|---|
| `node build/build.mjs` | full build into `dist/` (§3) |
| `node build/preflight.mjs` | checks `dist/`: links, canonicals, sitemap dates, twins |
| `npm test` | the test suite |
| `npm run check` | the card checker |
| `npm run indexnow:dry` / `npm run indexnow` | §5 |

---

## 8. Notes / gotchas

- **Never delete `src/data/lastmod.json`.** It holds each page's last-changed date.
  Without it every page is dated today on every build, and search engines learn to
  ignore the dates. Only a complete build updates it; commit it with content changes.
- **Build from a clean checkout of `claude/deck-engine`.** Untracked draft decks in
  `decks/` would be built and published. `git status` should show nothing under `decks/`.
- **The github.io preview is `noindex`** and never competes with conyso.com. Leave it.
- **The Person and Organization data** (name, title, `sameAs` links in
  `src/site/identity.mjs`) is identical on conyso.com, the Tome, the Atlas and the
  Primer. Change it only together with those sites.
- **Not served**: anything outside `dist/`. `personal-dist/` holds private decks and is
  never uploaded.
