"""Write an Anki .apkg from a manifest produced by src/exporters/anki.mjs.

Usage: python build/apkg.py <manifest.json> <out.apkg>

The two genanki defaults that break published decks are both overridden here
(CARD-STANDARD.md §3, flashcards-general/tech.md §2,
learning-science/algorithms-mechanics.md):
  - the note GUID is derived from the card's permanent ID only, never from its
    content, so an edited card updates in place instead of duplicating;
  - every note gets its explicit teaching position as `due`, because genanki's
    default of 0 for every card leaves the new-card order undefined.
Model (note-type) IDs come from src/schema.mjs and never change.
"""
import json
import sys

try:
    import genanki
except ModuleNotFoundError:  # keep the error readable; the tests skip without it
    sys.exit('genanki is required: python -m venv .venv && .venv/bin/pip install -r requirements.txt')


def main(manifest_path, out_path):
    with open(manifest_path, encoding='utf-8') as f:
        m = json.load(f)

    models = {}
    for key, nt in m['noteTypes'].items():
        models[key] = genanki.Model(
            nt['id'],
            nt['name'],
            fields=[{'name': name} for name in m['fields']],
            templates=m['templates'][key],
            css=m['css'],
            model_type=genanki.Model.CLOZE if nt['cloze'] else genanki.Model.FRONT_BACK,
            sort_field_index=0,
        )

    decks = [genanki.Deck(d['id'], d['name'], description=d.get('description', '')) for d in m['decks']]

    for n in m['notes']:
        note = genanki.Note(
            model=models[n['type']],
            fields=n['fields'],
            tags=n['tags'],
            guid=genanki.guid_for(n['id']),
            due=n['due'],
        )
        decks[n['deckIndex']].add_note(note)

    genanki.Package(decks).write_to_file(out_path)


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
