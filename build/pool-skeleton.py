"""Turn a public-domain question pool into per-topic skeletons for card writers.

Usage: python3 build/pool-skeleton.py <pool.txt> <brief.md> <out-dir>

The pool text uses the NCVEC layout (research/deck-briefs/fcc-technician-pool.txt):
    T1A01 (C) [97.1]
    Question text…
    A. …
    B. …
    ~~
The brief's concept inventory has "### Topic N: <name>" headings, with the pool
IDs each concept covers listed in its table rows. Each question goes to the first
topic that lists it. Writers turn every skeleton question into a scenario card,
verbatim, and add the teaching around it (wave 1 lesson: add teaching, don't type).
Exits non-zero if any question is unmapped.
"""
import json, os, re, sys

pool_path, brief_path, out = sys.argv[1:4]
pool = open(pool_path, encoding='utf-8').read()
qs = {}
for m in re.finditer(r'^([A-Z]\d[A-Z]\d\d) \(([A-D])\)(?: \[([^\]]*)\])?\n(.*?)\n~~', pool, re.S | re.M):
    qid, ans, ref, body = m.groups()
    lines = body.split('\n')
    ci = [i for i, l in enumerate(lines) if re.match(r'^[A-D]\. ', l)]
    choices = {}
    for k, i in enumerate(ci):
        end = ci[k + 1] if k + 1 < len(ci) else len(lines)
        choices[lines[i][0]] = ' '.join(lines[i:end])[3:].strip()
    q = ' '.join(lines[:ci[0]]).strip()
    fig = re.search(r'[Ff]igure ([A-Z]\d?-\d+)', q)
    qs[qid] = dict(poolId=qid, question=q, choices=choices, correct=ans, answer=choices[ans], ref=ref, figure=fig.group(1) if fig else None)

topic_of, cur = {}, None
for line in open(brief_path, encoding='utf-8'):
    m = re.match(r'### Topic (\d+): (.*)', line)
    if m:
        cur = (int(m.group(1)), m.group(2).strip())
        continue
    if line.startswith('## ') and cur:
        cur = None
    if cur and line.startswith('|'):
        for pid in re.findall(r'\b[A-Z]\d[A-Z]\d\d\b', line):
            topic_of.setdefault(pid, cur)

missing = sorted(q for q in qs if q not in topic_of)
os.makedirs(out, exist_ok=True)
by = {}
for q, v in qs.items():
    if q in topic_of:
        by.setdefault(topic_of[q], []).append(v)
for (n, name), items in sorted(by.items()):
    with open(os.path.join(out, f'topic-{n:02d}.json'), 'w', encoding='utf-8') as f:
        json.dump({'topic': name, 'questions': items}, f, ensure_ascii=False, indent=1)
    print(f'{n:2d} {name}: {len(items)}')
print(f'{len(qs)} questions, {len(missing)} unmapped{": " + ", ".join(missing[:20]) if missing else ""}')
sys.exit(1 if missing else 0)
