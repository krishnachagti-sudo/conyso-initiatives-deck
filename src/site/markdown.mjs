// Markdown twins: index.md beside every indexable index.html, advertised by
// <link rel="alternate" type="text/markdown"> (reference-site playbook,
// search-record §3 to §5). An answer engine or agent can read the page's
// real content without parsing HTML. Deck and glossary twins are written from
// the deck data; the hub pages are converted from their <main>.
//
// Nothing here adds a claim: every sentence is the page's own, or a count
// from the deck. Links are absolute.

import { deckStats } from './deck-data.mjs';
import { deckAnswer, deckFaq } from './deck-page.mjs';
import { glossaryTerms, glossaryPath, hasGlossary, glossaryDescription } from './pages/glossary.mjs';
import { familyPath } from './layout.mjs';
import { FORMATS } from '../exporters/index.mjs';

const n0 = (n) => Number(n).toLocaleString('en-GB');
const plural = (n, one, many = `${one}s`) => `${n0(n)} ${n === 1 ? one : many}`;
const kb = (bytes) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);

/** One line of plain text: newlines and runs of space become one space. */
export const oneLine = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
/** Text safe inside a Markdown link label. */
const label = (s) => oneLine(s).replace(/([[\]])/g, '\\$1');
/** A Markdown link with an angle-bracketed destination, so parentheses in URLs survive. */
export const mdLink = (text, url) => `[${label(text)}](${/[\s()]/.test(url) ? `<${url}>` : url})`;

const footer = (cfg, url) => ['', '---', `Source: ${url} · ${cfg.brand}, free flashcards for certification exams. Decks licensed CC BY-SA 4.0.`, ''];

/**
 * The deck page's twin: the answer first, then the facts, the topics in
 * teaching order with every term each topic's primers teach and its
 * definition, the downloads, the sources and the page's questions.
 * @param {object} cfg site config
 * @param {object} deck a loaded deck ({ meta, topics, notes })
 * @param {{files?: {format: string, label: string, file: string, bytes: number}[]}} [manifest]
 */
export function deckMarkdown(cfg, deck, manifest = {}) {
  const m = deck.meta;
  const s = deckStats(deck);
  const short = m.shortTitle || m.title;
  const root = `${cfg.origin}${cfg.base}`;
  const url = `${root}${m.slug}/`;
  const family = m.familyTitle || m.family;
  const { answerQ, answerV, answerFull } = deckAnswer(deck, s);
  const check = (m.checks || []).map((c, i) => ({ c, i })).sort((x, y) => String(x.c.date || '').localeCompare(String(y.c.date || '')) || x.i - y.i).pop()?.c;
  const terms = glossaryTerms(deck);
  const out = [`# ${oneLine(m.title)}`, ''];
  if (m.description) out.push(`> ${oneLine(m.description)}`, '');
  out.push(`**${answerQ}** ${answerV} ${answerFull}`, '');
  const facts = [
    `**Cards:** ${n0(s.cards)} (${n0(s.core)} core)`,
    `**Primers:** ${n0(s.primers)}`,
    `**Topics:** ${n0(s.topics.length)}`,
    `**Version:** ${oneLine(m.version)}${m.updated ? `, updated ${m.updated}` : ''}`,
    `**Licence:** ${oneLine(m.licence)}`,
  ];
  if (family) facts.push(`**Family:** ${m.status === 'released' ? mdLink(family, `${root}${familyPath(family)}`) : oneLine(family)}`);
  if (check) facts.push(`**Checked:** ${check.date}`);
  out.push(facts.join(' · '), '');
  if ((m.prerequisites || []).length) out.push(`**Builds on:** ${(m.prerequisites).map(oneLine).join('; ')}`, '');
  if (hasGlossary(deck)) out.push(`**Glossary:** ${root}${glossaryPath(deck)}`, '');

  out.push(`## In what order does it teach ${oneLine(short)}?`, '', `${plural(s.topics.length, 'step')}. Each opens by explaining its terms.`, '');
  s.topics.forEach((t, i) => {
    out.push(`### ${i + 1}. ${oneLine(t.topic)}`, '', `${plural(t.cards, 'card')} · ${plural(t.primers, 'primer')}`, '');
    const here = terms.filter((x) => x.topic === t.topic);
    if (here.length) {
      for (const x of here) out.push(`- **${oneLine(x.term)}:** ${oneLine(x.definition)}`);
      out.push('');
    }
  });

  const files = manifest.files || [];
  if (files.length) {
    const byKey = new Map(FORMATS.map((f) => [f.key, f]));
    out.push('## Which file do I need for my app?', '', 'For Anki, the package. For anything else, the file named after your app.', '');
    for (const f of files) {
      const fmt = byKey.get(f.format);
      out.push(`- ${mdLink(f.label, `${url}${f.file}`)}${fmt?.apps?.length ? `: ${fmt.apps.join(', ')}` : ''} (${kb(f.bytes)})`);
    }
    out.push('');
  }
  out.push('## How long will it take to learn?', '', `${plural(s.days, 'day')} to see every card, at Anki’s default pace of 20 new cards a day.`, '');
  out.push('## What can these cards not do?', '', 'They cannot make you pass on their own. They build the knowledge; exam questions test applying it, so pair them with practice questions. We make no claim about pass rates.', '');
  if ((m.practiceLinks || []).length) {
    for (const l of m.practiceLinks) out.push(`- ${mdLink(l.label, l.url)}`);
    out.push('');
  }
  out.push('## Where does every card come from?', '', `Each card links the section of ${oneLine(m.sourceShort || 'the source')} it was written from. No exam questions, no paid course material.`, '');
  for (const x of s.sources) out.push(`- ${mdLink(x.title, x.url)}: ${plural(x.cards, 'card')}${x.licence ? `, ${oneLine(x.licence)}` : ''}`);
  out.push('');
  if (check) out.push(`What we checked, ${check.date}: ${oneLine(check.what)}. ${oneLine(check.result)}`, '');
  out.push('## About this deck', '');
  for (const [q, a] of deckFaq(deck, answerFull)) out.push(`### ${q}`, '', oneLine(a), '');
  out.push(`Cite as: ${oneLine(m.title)}, version ${m.version}. ${cfg.brand}. ${url}. Licensed ${m.licence}.`);
  out.push(...footer(cfg, url));
  return out.join('\n');
}

/** The glossary page's twin: every term with its definition, by topic in teaching order. */
export function glossaryMarkdown(cfg, deck) {
  const m = deck.meta;
  const short = m.shortTitle || m.title;
  const terms = glossaryTerms(deck);
  const url = `${cfg.origin}${cfg.base}${glossaryPath(deck)}`;
  const deckUrl = `${cfg.origin}${cfg.base}${m.slug}/`;
  const topics = deckStats(deck).topics.map((t) => ({ topic: t.topic, terms: terms.filter((x) => x.topic === t.topic) })).filter((t) => t.terms.length);
  const az = [...terms].sort((a, b) => a.term.localeCompare(b.term, 'en-GB', { sensitivity: 'base', numeric: true }));
  const out = [`# ${oneLine(short)} glossary: ${plural(terms.length, 'term')} explained`, ''];
  out.push(`> ${glossaryDescription(short, terms.length, az.map((x) => x.term))}`, '');
  out.push(`Every term the free ${mdLink(`${short} flashcard deck`, deckUrl)} teaches, with the plain definition its primer card gives. They are grouped by topic, in the order the deck teaches them.`, '');
  for (const t of topics) {
    out.push(`## ${oneLine(t.topic)} (${plural(t.terms.length, 'term')})`, '');
    for (const x of t.terms) out.push(`- **${oneLine(x.term)}:** ${oneLine(x.definition)} (${mdLink('card', `${deckUrl}#${x.noteId}`)})`);
    out.push('');
  }
  out.push(...footer(cfg, url));
  return out.join('\n');
}

// ── HTML to Markdown, for the hub pages ─────────────────────────────────────
//
// A small converter for this site's own markup, not a general one: it parses
// <main> into a tree and renders headings, paragraphs, lists, links, emphasis,
// definition lists, details and tables. Navigation, forms, buttons, scripts,
// share bars, the "Other ways in" band and anything hidden or aria-hidden are
// dropped, since they are interface rather than content.

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const SKIP_TAGS = new Set(['script', 'style', 'nav', 'form', 'noscript', 'svg', 'button', 'template', 'select', 'textarea', 'input', 'label', 'iframe']);
// hero-card and cotd-card hold a sample card and the card of the day: pictures of cards, not the page's content.
const SKIP_CLASSES = ['ways', 'share', 'actbar', 'totop', 'pbar', 'kind-bar', 'gl-az', 'hero-card', 'cotd-card', 'crumbs'];
const BLOCK = new Set(['p', 'div', 'section', 'article', 'header', 'footer', 'aside', 'main', 'figure', 'figcaption', 'details', 'summary', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'blockquote', 'table', 'tr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'pre']);

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1)));
  return ENTITIES[e.toLowerCase()] ?? m;
});

function attrsOf(tag) {
  const a = {};
  for (const m of tag.matchAll(/([a-zA-Z_:][-\w:.]*)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) a[m[1].toLowerCase()] = decode(m[3] ?? m[4] ?? m[5] ?? '');
  return a;
}

/** Parse HTML into { tag, attrs, children } nodes; text nodes are strings. */
export function parseHTML(html) {
  const root = { tag: '#root', attrs: {}, children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>|([^<]+|<)/g;
  for (const m of html.matchAll(re)) {
    const top = stack[stack.length - 1];
    if (m[4] !== undefined) { top.children.push(decode(m[4])); continue; }
    if (!m[2]) continue; // comment
    const tag = m[2].toLowerCase();
    if (m[1]) {
      const i = stack.map((n) => n.tag).lastIndexOf(tag);
      if (i > 0) stack.length = i;
      continue;
    }
    const node = { tag, attrs: attrsOf(m[3]), children: [] };
    top.children.push(node);
    if (!VOID.has(tag) && !/\/\s*$/.test(m[3])) {
      stack.push(node);
      if (tag === 'script' || tag === 'style') {
        // Raw text: skip to the closing tag.
        const end = html.indexOf(`</${tag}`, m.index + m[0].length);
        re.lastIndex = end < 0 ? html.length : end;
      }
    }
  }
  return root;
}

const skip = (n) => SKIP_TAGS.has(n.tag) || 'hidden' in n.attrs || n.attrs['aria-hidden'] === 'true'
  || 'data-nosnippet' in n.attrs || (n.attrs.class || '').split(/\s+/).some((c) => SKIP_CLASSES.includes(c));

/**
 * Convert a fragment of this site's HTML (normally a page's <main>) to Markdown.
 * @param {string} html
 * @param {string} pageUrl absolute URL of the page, to resolve relative links and anchors
 */
export function htmlToMarkdown(html, pageUrl) {
  const abs = (href) => { try { return new URL(href, pageUrl).href; } catch { return href; } };
  const BR = '\u0001';
  const clean = (s) => s.replace(/[ \t\r\n\f\v]+/g, ' ').replace(/ ([,.;:!?)])(?=\s|$)/g, '$1').replace(/\( /g, '(').trim();

  function inline(nodes, ctx) { return clean(nodes.map((c) => render(c, { ...ctx, inline: true })).join('')); }

  function render(n, ctx = {}) {
    if (typeof n === 'string') return n;
    if (skip(n)) return '';
    const kids = n.children;
    const inl = () => inline(kids, ctx);
    const blocks = () => kids.map((c) => render(c, ctx)).join('');
    const wrap = (s) => (ctx.inline ? ` ${s} ` : `\n\n${s}\n\n`);
    switch (n.tag) {
      case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6': {
        const t = inl();
        if (!t) return '';
        return ctx.inline ? ` **${t}** ` : `\n\n${'#'.repeat(Number(n.tag[1]))} ${t}\n\n`;
      }
      case 'p': case 'summary': case 'dt': case 'figcaption': {
        const t = inl();
        if (!t) return '';
        if (n.tag === 'summary' || n.tag === 'dt') return ctx.inline ? ` **${t}** ` : `\n\n**${t}**\n\n`;
        return wrap(t);
      }
      case 'br': return ctx.inline ? ' ' : BR;
      case 'hr': return ctx.inline ? ' ' : '\n\n---\n\n';
      case 'a': {
        const t = inline(kids, { ...ctx, link: true });
        const href = n.attrs.href;
        if (!t) return '';
        if (!href || ctx.link) return ` ${t} `;
        return ` ${mdLink(t, abs(href))} `;
      }
      case 'strong': case 'b': {
        const t = inline(kids, { ...ctx, link: ctx.link });
        return t ? (ctx.link || ctx.strong ? ` ${t} ` : ` **${t}** `) : '';
      }
      case 'em': case 'i': case 'cite': { const t = inl(); return t ? ` *${t}* ` : ''; }
      case 'code': { const t = inl(); return t ? ` \`${t}\` ` : ''; }
      case 'small': { const t = inl(); return t ? ` (${t}) ` : ''; }
      case 'img': return n.attrs.alt ? ` ${n.attrs.alt} ` : '';
      case 'ul': case 'ol': {
        let i = 0;
        const items = kids.filter((c) => typeof c !== 'string' && c.tag === 'li' && !skip(c)).map((li) => {
          const t = inline(li.children, { ...ctx, inline: true });
          i += 1;
          return t ? `${n.tag === 'ol' ? `${i}.` : '-'} ${t}` : '';
        }).filter(Boolean);
        if (!items.length) return '';
        return ctx.inline ? ` ${items.join('; ')} ` : `\n\n${items.join('\n')}\n\n`;
      }
      case 'blockquote': { const t = inl(); return t ? wrap(`> ${t}`) : ''; }
      case 'table': {
        const rows = [];
        const walk = (x) => { for (const c of x.children) if (typeof c !== 'string') { if (c.tag === 'tr') rows.push(c); else walk(c); } };
        walk(n);
        const cells = rows.map((r) => r.children.filter((c) => typeof c !== 'string' && (c.tag === 'td' || c.tag === 'th')).map((c) => inline(c.children, { ...ctx, inline: true }).replace(/\|/g, '\\|')));
        if (!cells.length) return '';
        const w = Math.max(...cells.map((r) => r.length));
        const line = (r) => `| ${[...r, ...Array(w - r.length).fill('')].join(' | ')} |`;
        return `\n\n${[line(cells[0]), line(Array(w).fill('---')), ...cells.slice(1).map(line)].join('\n')}\n\n`;
      }
      default:
        if (BLOCK.has(n.tag)) return ctx.inline ? ` ${blocks()} ` : `\n\n${blocks()}\n\n`;
        return ` ${blocks()} `; // span and other inline wrappers: a word boundary each side
    }
  }

  const md = render(parseHTML(html));
  return `${md.split(/\n{2,}/).map((b) => b.split('\n').map((l) => l.split(BR).map(clean).join('  \n')).filter(Boolean).join('\n')).filter(Boolean).join('\n\n')}\n`;
}

/**
 * The twin of a rendered page: its <main> converted, with the page's
 * description as the answer under the H1, and a source line.
 */
export function pageMarkdown(cfg, html, url) {
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? '';
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const md = htmlToMarkdown(main, url).trim();
  const m = md.match(/^# .*$/m);
  const h1 = m ? m[0] : `# ${oneLine(title)}`;
  const before = m ? md.slice(0, m.index).trim() : '';
  const after = m ? md.slice(m.index + m[0].length).trim() : md;
  // The H1, then the page's description as a one-line answer, then the rest
  // (anything above the H1, such as a count kicker, follows the answer).
  return [h1, description ? `> ${oneLine(description)}` : '', before, after, footer(cfg, url).join('\n').trim()].filter(Boolean).join('\n\n') + '\n';
}
