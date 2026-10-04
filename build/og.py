"""Draw the site's share images and its app icon (src/site/pages/seo.mjs).

Usage: python3 build/og.py < jobs.json

jobs.json is {"fonts": dir, "svg": path, "jobs": [...]}, each job one of
  {"kind": "card", "out": file, "label": str, "family": str, "title": str,
   "meta": str, "brand": str, "host": str}
  {"kind": "icon", "out": file, "size": int}

A card is 1200x630: the site's index card on its manila desk. A mono label
row, the red header rule, blue ruled lines, the title in Fraunces, the counts
in JetBrains Mono, the brand mark at the foot. Colours are the light tokens
of src/assets/site.css. Every shape is drawn at twice the size and scaled
down, so edges are smooth. Needs Pillow; the fonts are the site's own WOFF2
files, which FreeType reads directly.
"""
import json
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H, S = 1200, 630, 2  # S: supersampling factor

BG = '#e6dcc6'
SURFACE = '#fffdf8'
SURFACE_2 = '#f5efe2'
INK = '#1b2233'
MUTED = '#434957'
FAINT = '#565b67'
LINE_STRONG = '#a99a78'
ACCENT = '#b3221a'
RULE = '#dde6f2'


def font(fonts, name, size, weight=None):
    f = ImageFont.truetype(os.path.join(fonts, name), round(size * S))
    if weight is not None:
        f.set_variation_by_axes([weight])
    return f


def mark(svg, size_w):
    """The mark from src/assets/icon.svg, drawn at size_w pixels wide (RGBA)."""
    vb = [float(x) for x in re.search(r'viewBox="([^"]+)"', svg).group(1).split()]
    k = size_w / vb[2]
    img = Image.new('RGBA', (round(vb[2] * k), round(vb[3] * k)), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for el in re.finditer(r'<(rect|path)\s([^>]*?)/?>', svg):
        a = dict(re.findall(r'([\w-]+)="([^"]*)"', el.group(2)))
        sw = max(1, round(float(a.get('stroke-width', 1)) * k))
        if el.group(1) == 'rect':
            x, y, w, h = (float(a[n]) * k for n in ('x', 'y', 'width', 'height'))
            d.rounded_rectangle([x, y, x + w, y + h], radius=float(a.get('rx', 0)) * k,
                                fill=a.get('fill'), outline=a.get('stroke'), width=sw)
        else:
            for m in re.finditer(r'M([\d.]+)[ ,]([\d.]+)h([\d.]+)', a['d']):
                x, y, dx = (float(v) * k for v in m.groups())
                d.line([x, y, x + dx, y], fill=a['stroke'], width=sw)
    return img


def wrap(draw, text, f, width):
    words, lines = text.split(), []
    for w in words:
        if lines and draw.textlength(f'{lines[-1]} {w}', font=f) <= width:
            lines[-1] = f'{lines[-1]} {w}'
        else:
            lines.append(w)
    return lines


def spaced(draw, xy, text, f, fill, tracking, anchor_right=False):
    """Letter-spaced text (the site's uppercase mono labels)."""
    x, y = xy
    widths = [draw.textlength(c, font=f) + tracking for c in text]
    if anchor_right:
        x -= sum(widths) - tracking
    for c, w in zip(text, widths):
        draw.text((x, y), c, font=f, fill=fill)
        x += w
    return x


def desk(job, fonts, svg):
    """Everything but the words that change: drawn once per brand and address."""
    img = Image.new('RGB', (W * S, H * S), BG)
    s = lambda v: round(v * S)
    # The card behind, then the soft shadow and the front card.
    back = (s(92), s(40), s(1150), s(556))
    front = (s(52), s(74), s(1110), s(590))
    d = ImageDraw.Draw(img)
    d.rectangle(back, fill=SURFACE_2, outline=LINE_STRONG, width=s(2))
    shadow = Image.new('L', img.size, 0)
    ImageDraw.Draw(shadow).rectangle((front[0] + s(4), front[1] + s(14), front[2] + s(4), front[3] + s(18)), fill=70)
    shadow = shadow.filter(ImageFilter.GaussianBlur(s(16)))
    img.paste(Image.new('RGB', img.size, '#463414'), (0, 0), shadow)
    d = ImageDraw.Draw(img)
    d.rectangle(front, fill=SURFACE, outline=LINE_STRONG, width=s(2))
    # Ruled lines first, so text sits on them; the red header rule over them.
    for y in range(TOP + 160, 590 - 20, 56):
        d.line((s(52 + 2), s(y), s(1110 - 2), s(y)), fill=RULE, width=s(2))
    d.line((s(52 + 2), s(TOP + 84), s(1110 - 2), s(TOP + 84)), fill=ACCENT, width=s(3))
    # Foot: the mark and the brand, the address on the right.
    m = mark(svg, s(58))
    img.paste(m, (s(LEFT), s(500)), m)
    brand = font(fonts, 'fraunces-latin-wght-normal.woff2', 34, weight=700)
    d.text((s(LEFT + 74), s(500 + 21)), job['brand'], font=brand, fill=INK, anchor='lm')
    host = font(fonts, 'jetbrains-mono-latin-400-normal.woff2', 22)
    d.text((s(RIGHT), s(500 + 21)), job.get('host', ''), font=host, fill=MUTED, anchor='rm')
    return img.resize((W, H), Image.LANCZOS)


LEFT, RIGHT, TOP = 52 + 56, 1110 - 56, 74


def card(job, fonts, base):
    """The words on the card, drawn at full size (text is anti-aliased already)."""
    img = base.copy()
    d = ImageDraw.Draw(img)
    # The label row: shrunk, if a long family name would meet the label.
    label, family = job['label'].upper(), job.get('family', '').upper()
    for size in (21, 19, 17, 15, 13):
        mono = font(fonts, 'jetbrains-mono-latin-400-normal.woff2', size / S)
        track = size / 10
        width = lambda t: sum(d.textlength(c, font=mono) + track for c in t)
        if width(label) + width(family) + 40 <= RIGHT - LEFT:
            break
    spaced(d, (LEFT, TOP + 36), label, mono, FAINT, track)
    if family:
        spaced(d, (RIGHT, TOP + 36), family, mono, FAINT, track, anchor_right=True)

    # The title: the largest size at which it fits on two lines.
    for size in (92, 84, 76, 68, 60, 54, 48, 42):
        f = font(fonts, 'fraunces-latin-wght-normal.woff2', size / S, weight=620)
        lines = wrap(d, job['title'], f, RIGHT - LEFT)
        if len(lines) <= 2 and all(d.textlength(l, font=f) <= RIGHT - LEFT for l in lines):
            break
    lead = round(size * 1.08)
    y = TOP + 112 + (224 - len(lines) * lead) // 2  # centred between the rule and the counts
    for line in lines:
        d.text((LEFT, y), line, font=f, fill=INK)
        y += lead

    meta = font(fonts, 'jetbrains-mono-latin-700-normal.woff2', 30 / S)
    d.text((LEFT, TOP + 342), job['meta'], font=meta, fill=ACCENT)
    # A 256-colour palette keeps each file small; the card has few colours.
    # The palette is chosen once (median cut, which keeps the shadow smooth)
    # and reused, since every card is drawn in the same few inks.
    if 'palette' not in PALETTES:
        PALETTES['palette'] = img.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    img.quantize(palette=PALETTES['palette'], dither=Image.Dither.NONE).save(job['out'], optimize=True)


PALETTES = {}


def icon(job, svg):
    """A square app icon: the mark on the manila desk, inside the maskable safe zone."""
    n = job['size'] * S
    img = Image.new('RGBA', (n, n), BG)
    m = mark(svg, round(n * 0.62))
    img.paste(m, ((n - m.width) // 2, (n - m.height) // 2), m)
    img.convert('RGB').resize((job['size'], job['size']), Image.LANCZOS).save(job['out'], optimize=True)


def main():
    spec = json.load(sys.stdin)
    with open(spec['svg'], encoding='utf-8') as fh:
        svg = fh.read()
    desks = {}
    for job in spec['jobs']:
        os.makedirs(os.path.dirname(job['out']) or '.', exist_ok=True)
        if job['kind'] == 'icon':
            icon(job, svg)
            continue
        key = (job['brand'], job.get('host', ''))
        if key not in desks:
            desks[key] = desk(job, spec['fonts'], svg)
        card(job, spec['fonts'], desks[key])


if __name__ == '__main__':
    main()
