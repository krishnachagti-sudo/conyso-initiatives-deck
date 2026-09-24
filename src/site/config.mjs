// Site configuration: site.config.json, with --origin= and --base= overrides
// for building the same site for another host (the github.io preview).
//
// A build for any host other than the configured one is a preview: every page
// is noindex and no IndexNow key is written, so the copy never competes in
// search with the real address.

import { readFileSync } from 'node:fs';

export function loadConfig(argv = process.argv, file = 'site.config.json') {
  const fileCfg = JSON.parse(readFileSync(file, 'utf8'));
  const arg = (n) => argv.find((a) => a.startsWith(`--${n}=`))?.slice(n.length + 3);
  const origin = (arg('origin') || fileCfg.origin).replace(/\/+$/, '');
  let base = arg('base') || fileCfg.base;
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  const preview = origin !== fileCfg.origin || base !== fileCfg.base;
  return { ...fileCfg, origin, base, preview, ...(preview ? { indexNowKey: undefined } : {}) };
}
