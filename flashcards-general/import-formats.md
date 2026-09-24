# Flashcard import formats: verified specs (fetched 2026-09-24)

Rule followed: every format detail below comes from a page fetched during this task. Raw copies are in `formats/raw/` (`*.html` or `*.json` is the original, `*.txt` is the extracted text). Anything I could not read is marked **NOT VERIFIED**. Lines marked *(derived)* are my own reasoning, not a source claim.

Date notes: "upd" is the page's own updated or dateModified stamp. Zendesk `updated_at` changes on any touch; `edited_at` is the last content edit.

## Summary table

| App | File types / entry | Separators / syntax | Fields · cloze · tags · media | Re-import / update | Source (date) |
|---|---|---|---|---|---|
| **Quizlet** | Paste text into the Import box (website only) | Term↔definition: **comma, tab, or dash**. Rows: **semicolon or new line** | 2 fields (term, definition). Images: 1 per card, **definition side only**, JPG/GIF/PNG ≤3 MB, Plus only, uploaded in the editor rather than through import. Cloze, tags and limits NOT VERIFIED | Creates a new set. Updating: NOT VERIFIED | help.quizlet.com art. 360029977151 (edited 2025-08-15); 360030154311 (edited 2025-02-24) |
| **Mochi** | `.mochi` (ZIP containing data.json or data.edn plus media), `.apkg`, Markdown (a folder of .md files or one split file), CSV | CSV header = template field **name or ID**. With no template, each column is a side and the header is optional. Card text: `---` line splits sides | Cloze `{{text}}` and `{{1::text}}`. Tags `#tag` in Markdown. Media via Markdown refs plus the selected files | `.mochi` with top-level `:cards` and `:deck-id` **updates an existing deck** | mochi.cards/docs import, format reference, cloze, cards pages |
| **RemNote** | Paste or import .md (single file or zip), .apkg, `.csv/.tsv/.xlsx` (these become **tables**, not cards), .rem/.db | `>>` or `==` basic, `<<`, `<>`, `::` concept, `;;` descriptor, `>>>` multi-line, `>>1.` list, `>>A)` MCQ | Cloze `{{x}}`, hint `{({hint})}`. Indentation gives hierarchy. `[[Name]]` gives a reference | Per bullet: identical content is skipped, **changed content is imported beside the old version** (a duplicate) | help.remnote.com 9252072 (upd 2026-09-04), 7898005 (upd 2026-09-02), 6330674 (upd 2026-09-14) |
| **Brainscape** | Paste list; upload **.csv, .txt, .xlsx, .ods**; Google Sheet | Two unlabelled columns = Q, A. Labelled columns: `Q. Prompt, Q. Body, Q. Clarifier, Q. Footnote, A. Body, A. Clarifier, A. Footnote` | Multi-field works only through CSV or Google Sheet. Cloze, tags, media and limits NOT VERIFIED | Each import creates a new deck. Update NOT VERIFIED | brainscape.zendesk 115002369931 (edited 2026-01-04), 30335658039309 (edited 2026-03-25) |
| **Knowt** | Paste ("Import manually"), Quizlet extension, Google Drive | Must "use the same separators as on Quizlet" (i.e. the separators chosen in Quizlet's export) | Image and audio per card are added in the editor; tags are set per set in the editor | NOT VERIFIED | help.knowt.com 10298079, 10716239 (upd 2026-09-10) |
| **Noji** | `.apkg`, `.colpkg`; CSV upload or paste; Quizlet export text | Separator "settings" with a preview; exact options NOT VERIFIED | Cloze exists as a card type (article title only) | NOT VERIFIED | help.noji.io 9654033 (2025-03-14), 9654023 (2024-07-31) |
| **SuperMemo (web, supermemo.com)** | Paste into Import pop-up | User picks Q/A separator and row separator from presets **or a custom one**. Each row is one card | Media added afterwards in the editor | Adds to the open section | supermemo.com blog (2016-02-09) |
| **SuperMemo (desktop, Q&A text)** | NOT VERIFIED (help.supermemo.org and supermemopedia returned 403, super-memory.com reset the connection, Wayback blocked) | — | — | — | — |
| **Mnemosyne** | Tab-separated `.txt/.tsv/.tab`, UTF-8 | One card per line. **2 cols** = front/back. **3–4 cols** = Vocabulary (foreign, pronunciation, meaning, [notes]) | HTML allowed. `<img src>` and `<audio src>`. LaTeX `<$>…</$>`. Cloze card type uses `[...]` but **the TSV importer cannot create it**. Tags: the import dialog applies **one tag set to all cards** (no per-row tags) | `check_for_duplicates=False`, so re-import **duplicates** | mnemosyne-proj.org/help/importing.php; GitHub tsv.py, cloze.py |
| **Obsidian SR plugin** | Markdown notes in the vault | `Q::A`, `Q:::A` (bidirectional). Multi-line uses a `?` line or a `??` line. All separators are configurable | Cloze: default `==x==`, optional hints and sequence numbers, custom patterns such as `{{[123::]answer[::hint]}}`. Deck = `#flashcards/sub` tag or folder. Rich media is inherited from Obsidian | Schedule is kept in `<!--SR:!date,interval,ease-->` next to the card. Editing the file changes the card | GitHub README; stephenmwangi.com docs |
| **Logseq** | Markdown/org blocks | Block with `#card` or `[[card]]`. Child blocks form the answer (example) | Cloze `{{cloze answer}}`, cue `{{cloze answer \\ cue}}` | Schedule is stored as `card-*::` block properties | github.com/logseq/docs pages/Flashcards.md, Cloze.md |
| **Memrise** | Community-courses site: bulk-add paste from a spreadsheet (no header). The in-app word lists (2026) have no documented file import | Columns in database column order; tab or comma per the explore page | No bulk media. Stops at attribute or audio columns. Aim for 30–35 words per level | NOT VERIFIED | memrise.zendesk 360015886877 (edited 2022-02-10), 360015973338; explore.memrise.com/community-courses |
| **StudyStack** | Data tab, then "Import Text" (paste) | Uses its own "Delimited Export" text; exact delimiter NOT VERIFIED | — | — | studystack.com/FAQ |
| **Cram.com** | Home page has an "Import flashcards" button | NOT VERIFIED | — | — | cram.com (home HTML) |
| **Anki (reference)** | .txt/.csv plus `#` headers; .apkg | Comma, semicolon or tab, auto-detected. `#separator:`, `#html:`, `#tags:`, `#columns:`, `#deck:`, `#notetype:`, `#tags column:`, `#guid column:` | `<img src>`, `[sound:x.mp3]` | First field or GUID match **updates** the note in place and keeps scheduling | docs.ankiweb.net/importing/text-files.html |
| **CSV / Sheets fallback** | RFC 4180 CSV | Comma. Quote any field that contains CRLF, `"` or `,`. Escape `"` as `""` | Optional header | n/a | rfc-editor.org/rfc/rfc4180.txt |

---

## Quizlet

Sources:
- https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content (Zendesk API copy `raw/quizlet_import_api.json`: created 2019-06-26, edited 2025-08-15, updated 2026-09-23). The HTML page returned 403, so I read it through the public Zendesk API (`/api/v2/help_center/en-us/articles/<id>.json`).
- 360030154311 "Adding your own images to sets"
- 360034345672 "Exporting your sets"
- 360029780752 "Creating flashcard sets"

What the pages say:
- "Separate terms and definitions with a **comma, tab, or dash**." "Separate rows with a **semicolon or a new line**." "Each row of your document will become a distinct card."
- The flow is Create, then Flashcard set, then Import, then paste, then Import, then set the language, then Create. "You can currently only import flashcard sets on the website."
- Rich text: only Plus subscribers can highlight, bold, italicize or underline. Nothing in the import article covers HTML or Markdown.
- Images are not part of the text import. They are added in the editor: "JPG, GIF, or PNG up to 3MB", "one image to the definition side of a card. You can't currently add an image to the term side". Uploading your own images requires Plus. The free gallery is also available.
- Export (creator only) copies text with separators you choose. "Image exports aren't currently available."
- **NOT VERIFIED:** the "custom" separator option, the maximum terms per set or per import, character limits, cloze, tags, and whether a re-import updates a set. None of these appear in any help article I fetched. The Zendesk search API did not surface them.

Export recommendation *(derived)*: produce `quizlet.txt` with a TAB between term and definition and `\n` between rows. Strip tabs and newlines from content (or use a semicolon row separator only when content has no semicolons). Plain text only.

## Mochi

Sources:
- https://mochi.cards/docs/import-and-export/importing/
- https://mochi.cards/docs/import-and-export/mochi-format-reference/
- https://mochi.cards/docs/reviewing/cloze-deletions/
- https://mochi.cards/docs/cards/
- https://mochi.cards/docs/decks/sharing/

None of these pages carries a date. The site footer says © 2026.

**CSV:**
- "If the deck uses a template: Each column becomes a field. The header values determine which field each column maps to. You can use either the field name or field ID as the header." Example header: `word,definition`.
- "If the deck has no template: Each column is treated as a side of the card. The header row is optional. Each row becomes a separate card."
- Attachments: "Reference the attachment with standard markdown syntax in your CSV file. Select the attachment(s) along with your CSV file from the file picker."

**Markdown:** "A folder of Markdown files, where each file becomes its own card" or "A single Markdown file, split into multiple cards using a delimiter you choose". Markdown imports "do not preserve metadata such as review history or card order".

**Card syntax:** a line of `---` splits sides, and there can be more than two sides. Tags can be "Embedded directly in the Markdown (e.g., #biology)" or set as footer metadata. `[[double bracket]]` links other cards.

**Cloze:** `{{insulin}}` hides text. `{{1::insulin}} … {{2::pancreas}}` gives groups, each with its own schedule.

**.mochi format (format reference):**
- A ZIP holding `data.edn` or `data.json` plus any number of media files. "If using JSON, the file should be encoded with **Transit** semantics." JSON is recommended for large sets.
- Top level: `:version` 2 (required); optional `:decks`, `:cards` ("must contain a valid :deck-id"), `:templates`.
- Deck: `:name` (required); `:id` (keyword `[0-9A-Za-z]`, globally unique, ≥8 chars); `:cards`; `:parent-id`.
- Template: `:id`, `:name` (required); `:content` (mustache); `:fields` (a map; "at least one field needs to have an ID of :name"); `:pos`.
- Field: `:id` (≥8 chars, unique within the template), `:name`; optional `:type` (`:text :boolean :speech :image :translate :dictionary`), `:pos`, `:options`, `:lang`, `:from`, `:to`, `:boolean-default`.
- Card: `:content` (required); `:deck-id` (required only in top-level `:cards`); optional `:id`, `:name`, `:pos` (lexicographic sort), `:reviews`, `:fields` (a map of field id to value).

**Update:** "To update an existing deck with an externally created .mochi file … include a top-level :cards key in your data file with a list of cards. Make sure your cards have a :deck-id key corresponding to the deck you want to update." **NOT VERIFIED:** whether cards with a matching `:id` are overwritten or appended. The docs do not say.

**Other:**
- Mochi imports `.apkg` "including review history". It strips CSS and JS and converts HTML to Markdown.
- Publishing a deck (Pro) creates a public read-only link. Cloning it "creates a separate deck", so clones do not receive updates.

## RemNote

Sources:
- https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text (dateModified 2026-09-04)
- 6025481 Creating Flashcards (2026-08-21)
- 7898005 Importing Notes (2026-09-02)
- 6330674 Notes on RemNote Importers (2026-09-14)
- 13771289 Importing and Exporting Tables (2026-09-21)
- 6751471 Importing from Anki (2026-08-15)

**Text/Markdown syntax** (works for "imported notes from our import feature or simply by copying and pasting"):
- Basic: `Question >> Answer` (or `==`). `<<` backward, `<>` two-way, `>-` disabled.
- Cloze: `{{Cloze 1}} and {{Cloze 2}}`. Each cloze is independent: "It is not currently possible to merge clozes prior to pasting." Hints: `{{Cloze 1}}{({Hint 1})}`.
- Lines may start with `- `. Nesting follows consistent leading-space indentation.
- Multi-line: `>>>` on the front bullet, with the child bullets as items. `<<<` and `<><` are the other directions.
- List-answer: `>>1.` (plus `<<1.`, `<>1.`, `>-1.`).
- Multiple-choice: `>>A)`. The first child is the correct answer.
- Extra detail: `#[[Extra Card Detail]]`.
- Concept/descriptor: concept `:>` forward, `:<` backward, `::` two-way, `:-` disabled. Descriptor `;;` forward, `;<` back, `;;<` two-way, `;-` disabled. The multi-line and list tables on the page contain apparent typos, e.g. concept forward multi-line shown as `;>>`. Treat those rows as unverified.

**Markdown importer:** single .md or a zip. Folders become RemNote folders. Each paragraph or list item becomes a bullet. The dialect is MarkedJS default. Images can use public URLs or relative paths inside the zip. `[[Name]]` becomes a reference, and the document is created if it is missing.

**CSV/TSV/XLSX:** these are imported **as tables, not flashcards**. "The first row … becomes the table's header row."

**.apkg:** content and review history are imported. Multi-field note types become tables. CSS and JS are dropped.

**Duplicates:**
- An identical bullet in the same place is skipped.
- A changed bullet "imports the new bullet and keeps the old one right next to it".
- An identical bullet in a different document is copied.

There is no update-in-place mechanism. Imported cards go to a "Need to Learn" queue.

Tags: no import syntax is documented for tags beyond `#[[…]]` references. **NOT VERIFIED.**

## Brainscape

Sources (read through the Zendesk API; the HTML pages return 403):
- https://brainscape.zendesk.com/hc/en-us/articles/115002369931 (edited 2026-01-04)
- 30335658039309 (edited 2026-03-25)
- 115002370391 (edited 2026-04-18)

What the pages say:
- Import can be a "Paste List" or "Upload a File": "You can currently upload a .csv, txt, xlsx, or ods file." After upload you "Analyze", preview, then add cards, which creates a new deck. The alternative is "Fix with AI" (ChatGPT).
- Column labels: "The default is to look for two columns ("question" & "answer"), but the import also supports … Prompt, Body, Clarifier, and Footnote":
  - Question side: `Q. Prompt`, `Q. Body`, `Q. Clarifier`, `Q. Footnote`
  - Answer side: `A. Body`, `A. Clarifier`, `A. Footnote`
  - "case and period are optional"
- "If there are two UNLABELED columns, they are just Q&A by default". The multi-field feature "only works by importing/uploading the file as a CSV or Google Sheet."
- For lists, build the CSV in Google Sheets. In the preview "the syntax will be showing", and the article advises against using Fix with AI at that point.
- Anki imports go through `.txt`. Quizlet imports go through its CSV export. There is no direct .apkg import.
- **NOT VERIFIED:** row limits, cloze, tags, images through import, and updating existing decks.

## Knowt

Sources:
- https://help.knowt.com/en/articles/10298079-how-to-import-flashcards-from-quizlet-to-knowt (upd 2026-09-10)
- 10716239 (2026-09-10)
- 10714472 (2026-09-10)

What the pages say:
- Start options: "Create from a PDF, PPT, or Video/Audio … Import from Quizlet, Import manually (paste a list of terms) or Import from Google Drive."
- Manual import: copy Quizlet's export text, then "Paste your text … and **use the same separators as on Quizlet**."
- Title, description and tags are set per set. Each card can have an Image or a Recorded audio clip, hints and MCQ options, all added in the editor.
- A related article title mentions a 100-card limit for the Quizlet extension ("Why is the Chrome extension only importing 100 flashcards from Quizlet?"). I did not read that article, so the limit is NOT VERIFIED.
- Export is PDF only per the export article.
- **NOT VERIFIED:** which separator options Knowt's paste box offers, file upload of CSV, and cloze.

## Noji (formerly AnkiPro)

Sources:
- https://help.noji.io/en/articles/9654033-importing-from-quizlet-and-csv-files (2025-03-14)
- 9654023 Upload an Anki deck file (2024-07-31)

What the pages say:
- "Noji supports popular flashcard file formats like .apkg and .colpkg." Progress can be migrated, and files can be dragged and dropped at noji.io.
- CSV: web only. Create a deck, click "Import Cards", and you get "a text field where you can paste data or upload a CSV file. Adjust the settings as needed … in the preview area." Spreadsheets can be copied and pasted in.
- Quizlet: paste Quizlet's export text.
- **NOT VERIFIED:** the exact separator options, header handling, cloze syntax in CSV (a "Fill-in-the-Blank (Cloze)" article exists but I did not fetch it), tags, and update behaviour.

## SuperMemo

- **supermemo.com (web/app):** https://www.supermemo.com/en/blog/how-to-import-your-questions-and-answers-to-supermemo (2016-02-09)
  - Click "Import", then paste or type, "choosing the separators for your text and new rows (every new row becomes a new MemoCard) from the ones that are available or create your own customized one". There is a live preview. Cards go into the currently open section. Audio and pictures are added afterwards.
  - Note: this is a 2016 post. Its current validity in the 2023+ SuperMemo app is **NOT VERIFIED**.
- **Desktop SuperMemo "Q&A text" (`Q:` / `A:`):** **NOT VERIFIED.** help.supermemo.org and supermemopedia.com returned 403. super-memory.com reset the connection or returned 503. web.archive.org was blocked by the proxy.

## Mnemosyne

Sources:
- https://mnemosyne-proj.org/help/importing.php
- /help/card-types
- /help/organizing-cards
- /help/adding-media.php
- /help/formatting-cards.php
- The source code, which is authoritative:
  - https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/libmnemosyne/file_formats/tsv.py
  - …/card_types/cloze.py

What the pages and code say:
- Help: "plain text files where each line contains a question/answer pair separated by a tab". Save as UTF-8. Vocabulary is "'foreign word', 'pronunciation', and 'meaning' on a single line, separated by tabs".
- tsv.py: the filter is `*.txt *.tsv *.tab`, opened as UTF-8. A BOM is stripped. `&#NNNN;` entities are decoded. Blank lines are skipped. The line is split on `\t`:
  - 2 fields: Front-to-back (card type 1)
  - ≥3 fields: Vocabulary (type 3), with f, p_1, m_1 and an optional 4th `n` (notes)
  - 1 field: error
- **No escaping of tabs or newlines.** Newlines inside a field must be HTML `<br>`. Its exporter does the same.
- **Tags:** there is no per-line tag column. `extra_tag_names`, entered in the import dialog, applies to all cards. Tags are comma-separated, and `::` marks hierarchy (organizing-cards).
- **Cloze:** a plugin card type (id 5) using `[brackets]` (`[casa:house]` includes a hint). The TSV importer only creates types 1 and 3, so **cloze cannot be created through TSV**.
- **Duplicates:** `create_new_cards(..., check_for_duplicates=False)`, so re-importing creates duplicates. There is no update mechanism.
- Media and formatting: HTML tags work. `<img src="x.jpg">`, `<audio src="a.wav" start stop>` and LaTeX `<$>…</$>`, `<$$>`, `<latex>` are supported. MediaPreprocessor runs on TSV import and adds a `MISSING_MEDIA` tag if files are missing.

## Obsidian Spaced Repetition (st3v3nmw)

Sources:
- https://raw.githubusercontent.com/st3v3nmw/obsidian-spaced-repetition/master/README.md
- https://stephenmwangi.com/obsidian-spaced-repetition/flashcards/q-and-a-cards/
- …/cloze-cards/
- …/decks/
- …/cards-with-blank-lines/
- …/data-storage/

No page dates were shown.

**Deck membership:**
- The default deck tag is `#flashcards`. Sub-decks look like `#flashcards/sub`.
- A tag applies to all following cards until the next tag.
- Several decks go on one line, separated by spaces.
- A tag at the start of a card's first line is question-specific.
- A folder-based deck option exists.

**Cards:**
- `Q::A` (single line), `Q:::A` (bidirectional, sibling cards).
- Multi-line: a line containing only `?` (or `??` for bidirectional). Both sides must "touch" the separator.
- All separators are configurable.
- A blank line ends a multi-line or cloze card. Blank lines need a custom end marker (e.g. `+++`), and even then they work only on the answer side.

**Cloze:**
- The default delimiter is `==highlight==`. The README also lists `**bold**` and `{{curly}}` as options.
- Hint: `==x==^[hint]`. Sequence grouping: `==x==[^1]`. Overlapping: `[^ashh]`.
- Custom patterns such as Anki-like `{{[123::]answer[::hint]}}`. The docs warn this pattern conflicts with the default `::` separator.

Rich content: images, audio, video, LaTeX, code and footnotes are inherited from Obsidian.

Scheduling: an HTML comment `<!--SR:!2024-08-16,51,230-->` on the line after the card. Updating content means editing the file, so exported files that users re-download would overwrite their schedule comments *(derived)*.

## Logseq

Sources (official docs repo; docs.logseq.com is a JS single-page app):
- https://raw.githubusercontent.com/logseq/docs/master/pages/Flashcards.md
- …/pages/Cloze.md

What the pages say:
- A card is "a block with either `#card` or `[[card]]`". The example puts the answer as a child block. Scheduling lives in properties (`card-last-interval::`, `card-repeats::`, `card-ease-factor::`, `card-next-schedule::`, `card-last-reviewed::`, `card-last-score::`).
- Cloze: `{{cloze something}}`, with multiple per block. Cue: `{{cloze answer \\ cue}}`. To use `\\` in the answer, append `\\`.
- Filtering: `{{cards [[Page]]}}` queries.
- **NOT VERIFIED:** behaviour in the newer Logseq DB version.

## Memrise

Sources:
- https://memrise.zendesk.com/hc/en-us/articles/360015886877 (edited 2022-02-10)
- 360015973338 (edited 2024-10-25)
- https://explore.memrise.com/community-courses (2026 content)

What the pages say:
- Community courses have lived at community-courses.memrise.com since 31 March 2024, and course creation still works there. From 2026, in-app "word lists" are the recommended route, and no file import is documented for them.
- Bulk add: Edit course, then Advanced, then "Bulk add items". Paste spreadsheet columns "not including the column headings" in the database column order.
  - "audio files and other types of media such as images won't be able to be bulk-uploaded"
  - Import "will stop adding to a particular row when it meets an attribute or audio column"
- Keep 30–35 words per level. The explore page says bulk paste accepts "tab or comma separated".
- Cloze, tags and updates are not applicable or NOT VERIFIED.

## Cram.com / StudyStack

- **StudyStack** (https://www.studystack.com/FAQ): Data tab, then "Import Text" (bottom right), paste, "Import", "Save Changes". The FAQ pairs this with its own "Delimited Export". The delimiter itself is **NOT VERIFIED**.
- **Cram.com**: the home page has an "Import flashcards" button (raw/cram_home.html). The format is **NOT VERIFIED**.

## Anki text import (reference; the format most alternatives accept via .apkg or TSV)

Source: https://docs.ankiweb.net/importing/text-files.html

- Separators: comma, semicolon or tab, auto-guessed. Quote fields to include newlines or separators. Multi-line clozes need HTML `<br>`.
- Headers (2.1.54+) are `#key:value` lines at the top: `separator`, `html`, `tags`, `columns`, `notetype`, `deck`, `notetype column`, `deck column`, `tags column`, `guid column`.
- Media: `<img src="x.jpg">` and `[sound:x.mp3]`, with the files in collection.media.
- Updating: a matching first field (or GUID) updates the existing note in place and "existing scheduling information … will be preserved".

## Google Sheets / Excel fallback

RFC 4180 (https://www.rfc-editor.org/rfc/rfc4180.txt):
- CRLF records and an optional header.
- "Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes". An inner `"` is escaped as `""`.

Brainscape accepts .xlsx and .ods. RemNote accepts .xlsx as a table. Mochi and Noji accept CSV.

## Printable PDFs

**Verified product specs (avery.com, fetched 2026-09-24):**

| Avery | Size | Per sheet | Notes |
|---|---|---|---|
| **5388** Index Cards | 3" × 5" | 3 | 8½×11" sheets, 65 lb / 176 gsm, micro-perforated, "can be printed on both sides", "use your printer's card setting and feed one sheet at a time" |
| **5389** Postcards | 4" × 6" | 2 | |
| **5371** Business Cards | 2" × 3½" | 10 | |

Avery's exact sheet margins are not stated in the fetched HTML, so they are **NOT VERIFIED**. Take them from Avery's downloadable template before hard-coding.

**Duplex:**
- Epson's driver doc (files.support.epson.com, printing_double_windows_fy14) defines "Long-edge binding … flipping the paper on the long edge" and "Short-edge binding". It also offers Manual long-edge and short-edge modes.
- Microsoft's Word duplex support page covers manual duplex: odd pages first, flip the stack, then even pages. It advises a test run "to determine the correct way to reload the pages".

**Alignment rules** *(derived, not from a source)*:
- For a portrait sheet printed long-edge, the back page is the front grid **mirrored horizontally**. Column order is reversed and rows stay the same, so card (r,c) backs onto (r, ncols−1−c).
- For short-edge flip, mirror vertically (reverse row order).
- Keep the grid symmetric about the page centre so that printer offset errors cancel.
- Add an alignment test page with crop marks.
- Offer a "print fronts only, then backs" mode for printers without duplex.

**Fold-over:**
- Put the front on the left half and the back on the right half of a landscape row, and fold along the vertical centre line. Neither side needs mirroring.
- For a top/bottom fold, rotate the back 180° *(derived)*.

**Sheet sizes:**
- Produce both US Letter (8.5×11 in) and A4 (210×297 mm) variants.
- The "8-up" layout (2 columns × 4 rows) is a common convention and is **not sourced**.

## Recommended export set

1. **`.apkg`** (Anki). This format is also accepted by Mochi, RemNote and Noji, so it is the highest-leverage file.
2. **Anki-style TSV with headers** (`#separator:tab`, `#html:true`, `#tags column:N`, `#deck:`, plus a stable ID as the first field). Anki updates in place from it. Brainscape accepts .txt.
3. **Plain 2-column TSV, no header, UTF-8, no tabs or newlines in fields** (`<br>` for breaks). This single file serves Mnemosyne, Quizlet paste (tab + newline), Knowt paste, Noji paste, SuperMemo web paste, Memrise bulk paste and StudyStack. Also ship a plain-text-only variant with HTML stripped for Quizlet, Knowt and Memrise.
4. **RFC 4180 CSV with a header row** (`Front,Back` or template field names). Serves Mochi, Noji, Google Sheets and Excel. Add an **.xlsx** of the same data for Brainscape and RemNote tables.
5. **Brainscape CSV** with labelled columns `Q. Prompt, Q. Body, A. Body, A. Clarifier, A. Footnote`, used when extra fields exist.
6. **`.mochi`** (ZIP + `data.json`; Transit encoding, which I did not verify further). Give it stable `:id`s for decks, templates and cards, and publish an "update pack" with top-level `:cards` + `:deck-id`. This is the only non-Anki format with a documented deck-update path.
7. **Markdown bundles**:
   - Obsidian SR (`#flashcards/<deck>` + `Q::A` or `?` multi-line, `==cloze==`)
   - Logseq (`Q #card` with the answer as a child block, `{{cloze x}}`)
   - RemNote (`Q >> A`, `{{cloze}}`)
   - Mochi Markdown (`---` sides)
8. **Printable PDFs**: Letter and A4 duplex (long-edge mirrored backs), Avery 5388 3×5 (3-up) and 5371 (10-up), plus a fold-over variant.
