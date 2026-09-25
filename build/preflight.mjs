// Preflight for a built site (reference-site playbook, "Preflight"). Run after
// the build and before every upload:
//
//   node build/preflight.mjs [dist]
//
// Checks every HTML page for: one canonical on the configured host, parsable
// JSON-LD, internal links and downloads that resolve to a built file, and no
// private email address. The address is never written here: text that looks
// like an email is hashed and compared with a SHA-256 digest.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative, posix } from 'node:path';
import { createHash } from 'node:crypto';

import { loadConfig } from '../src/site/config.mjs';

const BLOCKED_EMAIL_SHA256 = ['a2be92ec35247c87b4c5be8ae113136df7f34b1f4b7ea6712a6108970fb837a4'];

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

export function preflight(dist, cfg, blocked = BLOCKED_EMAIL_SHA256) {
  const problems = [];
  const add = (file, message) => problems.push({ file: relative(dist, file), message });
  const files = walk(dist);
  const sha = (s) => createHash('sha256').update(s.toLowerCase()).digest('hex');

  for (const file of files) {
    if (!/\.(html|txt|xml|json|csv|tsv|md|js|css)$/.test(file)) continue;
    const text = readFileSync(file, 'utf8');
    for (const m of text.matchAll(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g)) {
      if (blocked.includes(sha(m[0]))) add(file, 'contains a private email address');
    }
    if (!file.endsWith('.html')) continue;

    if (cfg.preview && !/<meta name="robots" content="noindex/.test(text)) add(file, 'a preview build must be noindex on every page');

    const canon = [...text.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((x) => x[1]);
    if (canon.length !== 1) add(file, `has ${canon.length} canonical links, not 1`);
    else if (!canon[0].startsWith(`${cfg.origin}${cfg.base}`)) add(file, `canonical ${canon[0]} is not under ${cfg.origin}${cfg.base}`);

    for (const m of text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch { add(file, 'JSON-LD does not parse'); }
    }

    // Page-relative directory, as the browser sees it under <base>.
    const pageDir = posix.join(cfg.base, relative(dist, dirname(file)).split('\\').join('/'), '/');
    for (const m of text.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
      const raw = m[1].replace(/&amp;/g, '&');
      if (/^(https?:|mailto:|#|data:)/.test(raw)) {
        if (raw.startsWith(`${cfg.origin}${cfg.base}`)) check(raw.slice(cfg.origin.length));
        continue;
      }
      check(raw.startsWith('/') ? raw : posix.join(pageDir, raw));
    }
    function check(path) {
      const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
      if (!clean.startsWith(cfg.base)) return; // another part of the host, not ours to check
      let target = join(dist, clean.slice(cfg.base.length));
      if (clean.endsWith('/')) target = join(target, 'index.html');
      if (!existsSync(target)) add(file, `broken link ${path}`);
    }
  }
  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dist = process.argv.slice(2).find((a) => !a.startsWith('--')) || 'dist';
  const cfg = loadConfig();
  const problems = preflight(dist, cfg);
  for (const p of problems) console.error(`✗ ${p.file}: ${p.message}`);
  if (problems.length) process.exitCode = 1; // not exit(): it can drop piped output
  console.log(`✓ preflight: ${dist} is clean`);
}
