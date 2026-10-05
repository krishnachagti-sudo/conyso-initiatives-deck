// IndexNow: tell Bing (and so ChatGPT Search and Copilot), Yandex, Naver,
// Seznam and Yep which pages changed. Google does not take part; the sitemap
// and Search Console stay the only route there. Forked from the Law Tome.
//
//   node build/indexnow.mjs --dry       print the payload, send nothing
//   node build/indexnow.mjs             submit (run by hand, after the upload)
//   options: --date=YYYY-MM-DD (default: the latest date in the manifest,
//            i.e. the last build that changed anything), --key=, --origin=, --base=
//
// Never run by the build or the tests: a submission must follow the upload,
// or the engines fetch pages that are not there yet.
//
// Only the pages whose lastmod moved in that build are sent, read from the
// committed manifest (src/data/lastmod.json). The key is public by design: it
// proves whoever submits can write to the host. On conyso.com the Tome, the
// Atlas and this site share one key file at the root of the host,
// https://conyso.com/<key>.txt, so keyLocation points there. (The build also
// writes a copy at <base><key>.txt.)
//
// Pure except for submit() and main(), so the payload is tested without the network.

export const ENDPOINT = 'https://api.indexnow.org/IndexNow';

/** IndexNow caps one submission at 10,000 URLs. */
export const MAX_URLS = 10000;

/** A hex key of 8 to 128 characters, as the protocol requires. */
export function validKey(key) {
  return typeof key === 'string' && /^[a-f0-9]{8,128}$/i.test(key);
}

/** The build whose changes to send: the latest date any page carries in the manifest. */
export function lastBuildDate(manifest) {
  const pages = (manifest && manifest.pages) || {};
  return Object.values(pages).map((p) => p && p.date).filter(Boolean).sort().pop() || '';
}

/**
 * The URLs whose lastmod is `date`, sorted. Sending everything on every deploy
 * is how submissions get throttled; the manifest already knows what changed.
 * @param {{pages?:Record<string,{date:string}>}} manifest
 * @param {string} date ISO date
 * @param {string} baseUrl absolute, ending in '/'
 */
export function changedUrls(manifest, date, baseUrl) {
  const pages = (manifest && manifest.pages) || {};
  return Object.keys(pages).filter((p) => pages[p] && pages[p].date === date).sort().map((p) => baseUrl + p);
}

/** The request body. host comes from baseUrl, so it cannot disagree with the URLs; the key file is at the host's root. */
export function payload(baseUrl, key, urls) {
  const { host, origin } = new URL(baseUrl);
  return { host, key, keyLocation: `${origin}/${key}.txt`, urlList: urls };
}

export function batches(urls, size = MAX_URLS) {
  const out = [];
  for (let i = 0; i < urls.length; i += size) out.push(urls.slice(i, i + size));
  return out;
}

/** Submit. Never throws: a failed ping is not a failed deploy. */
export async function submit(baseUrl, key, urls, fetchImpl = fetch) {
  if (!validKey(key)) return { ok: false, reason: 'invalid key' };
  if (!urls.length) return { ok: true, reason: 'nothing changed', sent: 0 };
  const results = [];
  for (const batch of batches(urls)) {
    try {
      const res = await fetchImpl(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload(baseUrl, key, batch)) });
      results.push({ status: res.status, n: batch.length });
    } catch (e) {
      results.push({ status: 0, n: batch.length, error: String(e && e.message) });
    }
  }
  return { ok: results.every((r) => r.status >= 200 && r.status < 300), sent: urls.length, results };
}

async function main() {
  const { readFile } = await import('node:fs/promises');
  const { manifestFile } = await import('./lastmod.mjs');
  const arg = (n) => (process.argv.find((a) => a.startsWith(`--${n}=`)) || '').split('=')[1];
  const cfg = JSON.parse(await readFile('site.config.json', 'utf8'));
  const key = arg('key') || cfg.indexNowKey;
  const baseUrl = `${arg('origin') || cfg.origin}${arg('base') || cfg.base}`;
  let manifest = {};
  try { manifest = JSON.parse(await readFile(manifestFile, 'utf8')); } catch { /* nothing to send */ }
  const date = arg('date') || lastBuildDate(manifest);
  const urls = changedUrls(manifest, date, baseUrl);
  if (process.argv.includes('--dry') || process.argv.includes('--dry-run')) {
    console.log(`IndexNow (dry run): ${urls.length} URL(s) changed on ${date || 'no date'}; POST ${ENDPOINT}`);
    for (const b of batches(urls)) console.log(JSON.stringify(payload(baseUrl, key, b), null, 2));
    if (!validKey(key)) console.log('The key is not valid: nothing would be sent.');
    return;
  }
  const r = await submit(baseUrl, key, urls);
  console.log(`IndexNow (${date}): ${JSON.stringify(r)}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
