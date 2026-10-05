# Launching The Exam Primer on conyso.com/primer/

The site is static. Build it, upload `dist/` to the server's `/primer/`
folder, then do the one-off steps below. The github.io copy is a noindex
preview and never competes with conyso.com.

## Every deploy

1. `node build/build.mjs` (all formats, about 40 minutes), then
   `node build/preflight.mjs`. Preflight also checks that every page that
   advertises a Markdown twin has its `index.md`, that no page carries the
   unstamped lastmod token `@@LASTMOD@@`, and that every sitemap URL has a
   `<lastmod>`.
2. Commit `src/data/lastmod.json` with the content change (see "lastmod"
   below). The full build prints how many pages changed.
3. Upload `dist/` to `/primer/` on the server (rsync, as for the Tome and Atlas).
4. Purge the nginx cache for `/primer/`, then check a page with `?nocache=1`.
5. Ping IndexNow, by hand, after the upload: `npm run indexnow:dry` prints
   the payload (the URLs whose lastmod moved in the last build that changed
   anything); `npm run indexnow` sends it to api.indexnow.org. It never runs
   during the build or the tests. `--date=YYYY-MM-DD` sends another build's
   changes. The key (`indexNowKey` in `site.config.json`) is shared with the
   Tome and the Atlas: its file is at the root of the host,
   `https://conyso.com/1fad8697495a79c8bc03db90a16f1d52.txt`, and the
   payload's `keyLocation` points there. (The build also writes a copy to
   `dist/`, which is harmless.) IndexNow reaches Bing (and so ChatGPT Search
   and Copilot), Yandex, Naver, Seznam and Yep; Google does not take part.

## lastmod, and the trap around it

Every sitemap URL carries the day its page last changed, and a released
deck page's `dateModified` says the same. `build/lastmod.mjs` hashes each
rendered page (with the date as a token and the site's own address
normalised out) and keeps the hashes and dates in `src/data/lastmod.json`.
A page's date moves only when its hash does.

- **Never delete `src/data/lastmod.json`.** CI and the gated ship build from
  a clean checkout; without the file every page would be dated today, which
  tells search engines nothing and teaches them to ignore the field.
- Only a complete build writes it: no `--only`, `--decks`, `--fixtures`,
  `--personal`, and not a preview for another host. A partial build renders
  fewer download tiles, so its hashes describe a site that is never
  published; it reads the file and leaves it alone.
- If a full build where nothing was edited reports many changed pages,
  something volatile has leaked into the pages. Known and expected: the
  daily page's sample ten is picked from the build date, so `daily/` is
  dated each day the site is rebuilt; and "New this week" on the home page
  changes when a deck leaves the week.
- `npm test` builds the fixtures twice with a scratch manifest
  (`--lastmod=<file>`) and checks that nothing moves.

## For answer engines

- **Markdown twins.** Every indexable page has `index.md` beside its
  `index.html`, advertised with `<link rel="alternate" type="text/markdown">`
  (`src/site/markdown.mjs`). Deck and glossary twins are written from the
  deck data (the answer, the topics in teaching order, every primer term
  with its definition, the downloads, sources and questions); the hub pages
  are converted from their `<main>`.
- **`llms.txt`** maps the site (hub pages, subjects, decks, glossaries) and
  **`llms-full.txt`** holds the corpus: per deck its URL, licence,
  description, prerequisites, topics in teaching order and every primer term
  with its definition (`build/llms.mjs`). Over 5 MB it drops the definitions.

## Once, at launch

- **Root robots.txt.** Crawlers read only `conyso.com/robots.txt`. Add
  `Sitemap: https://conyso.com/primer/sitemap.xml` to it (and keep any rule
  in every named user-agent group).
- **Search Console.** Submit `https://conyso.com/primer/sitemap.xml`.
- **nginx types.** `.webmanifest` should be served as
  `application/manifest+json`, `.xml` feeds as `application/atom+xml` or
  `application/xml`, and `.apkg` as `application/octet-stream`.
- **404.** Point nginx's `error_page 404` for `/primer/` at
  `/primer/404.html`.
- **GitHub labels.** The roadmap's "Request this exam" links open issues
  with the label `exam-request`, and card reports use `card-report`. Create
  both labels in the repository so the links apply them.
- **conyso.com.** Add the Primer to the organisation's `subOrganization`
  list in the conyso-site repository, and link it from the Conyso home page.

## Adding certifications each week

1. Research, write and audit the deck as in `docs/PIPELINE-V3.md`.
2. `node build/release.mjs <slug>`: sets the version, changelog and
   released card IDs. It refuses a deck with no recorded audit.
3. Commit and run the gated ship. The new deck appears on the home page's
   "New this week", on `/new/`, in `feed.xml`, in its family hub, in search,
   in the daily ten pool and in the sitemap, with its share image and
   glossary page. Nothing else needs editing.
4. Rebuild at least once a year: the daily ten's day files cover 400 days
   from each build (the page falls back to the full pool after that).
