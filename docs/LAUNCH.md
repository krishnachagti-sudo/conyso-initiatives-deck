# Launching The Exam Primer on conyso.com/primer/

The site is static. Build it, upload `dist/` to the server's `/primer/`
folder, then do the one-off steps below. The github.io copy is a noindex
preview and never competes with conyso.com.

## Every deploy

1. `node build/build.mjs` (all formats, about 40 minutes), then
   `node build/preflight.mjs`.
2. Upload `dist/` to `/primer/` on the server (rsync, as for the Tome and Atlas).
3. Purge the nginx cache for `/primer/`, then check a page with `?nocache=1`.
4. Ping IndexNow for the changed URLs (the key file
   `1fad8697495a79c8bc03db90a16f1d52.txt` is written to `dist/`; the Tome's
   `lawtome/build/indexnow.mjs` in the law-tome repository shows the request).

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
