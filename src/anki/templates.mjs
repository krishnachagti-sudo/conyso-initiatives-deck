// Anki card templates and stylesheet (CARD-STANDARD.md §2, §4).
//
// Templates use only Anki's documented field replacements and conditional
// sections ({{#Field}}…{{/Field}}, {{cloze:Field}}, {{FrontSide}}). No
// JavaScript: RemNote and Mochi drop it, and cards must read unstyled.
// Changing a template is safe for learners (unlike changing fields), but the
// template NAMES are part of the note type and stay fixed.

const context = '<div class="ctx">{{Topic}}</div>';

const backMatter = `
{{#Explanation}}<div class="why">{{Explanation}}</div>{{/Explanation}}
{{#Example}}<div class="ex"><b>Example:</b> {{Example}}</div>{{/Example}}
{{#Contrast}}<div class="contrast"><b>Not to be confused with:</b> {{Contrast}}</div>{{/Contrast}}
{{#Links}}<div class="links">{{Links}}</div>{{/Links}}
{{#NotePrompt}}<div class="prompt">{{NotePrompt}}</div>{{/NotePrompt}}
{{#MyNote}}<div class="mynote"><b>My note:</b> {{MyNote}}</div>{{/MyNote}}
<div class="meta">
  Source: <a href="{{SourceURL}}">{{Source}}</a>{{#ValidAsOf}} · valid as of {{ValidAsOf}}{{/ValidAsOf}}<br>
  <a href="{{PageURL}}">Read the explanation</a> · <a href="{{ReportURL}}">Report a problem</a>
</div>`;

export const TEMPLATES = {
  basic: [{
    name: 'Card 1',
    qfmt: `${context}\n<div class="q">{{Front}}</div>`,
    afmt: `{{FrontSide}}\n<hr id="answer">\n<div class="a">{{Back}}</div>${backMatter}`,
  }],
  cloze: [{
    name: 'Cloze',
    qfmt: `${context}\n<div class="q">{{cloze:Front}}</div>`,
    afmt: `${context}\n<div class="q">{{cloze:Front}}</div>\n<hr id="answer">${backMatter}`,
  }],
  scenario: [{
    name: 'Scenario',
    qfmt: `${context}\n<div class="q">{{Front}}</div>\n{{#Choices}}<div class="choices">{{Choices}}</div>{{/Choices}}`,
    afmt: `{{FrontSide}}\n<hr id="answer">\n<div class="a">{{Back}}</div>\n{{#ChoicesExplained}}<div class="why-not"><b>Why not the others:</b> {{ChoicesExplained}}</div>{{/ChoicesExplained}}${backMatter}`,
  }],
};

// Accessibility (CARD-STANDARD.md §4): sans-serif system fonts at 18px, line
// height 1.5, left-aligned; contrast at least 4.5:1 in light and night mode
// (#1c1c1c on #ffffff, #e8e8e8 on #1e1e1e; muted #5a5a5a / #b0b0b0 both clear
// 4.5:1 on their grounds); bold, not italics, for emphasis; meaning never by
// colour alone.
export const CSS = `.card {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
  color: #1c1c1c;
  background: #ffffff;
  max-width: 40em;
  margin: 0 auto;
  padding: 0 12px;
}
.ctx { font-size: 14px; color: #5a5a5a; margin-bottom: 6px; }
.q { font-weight: 600; }
.cloze { font-weight: 700; text-decoration: underline; }
.choices { margin-top: 10px; }
.a { font-weight: 600; margin-bottom: 10px; }
.why, .why-not, .ex, .contrast, .links { margin: 8px 0; }
.prompt { margin: 12px 0; padding: 8px 10px; border-left: 3px solid currentColor; }
.mynote { margin: 12px 0; }
.meta { margin-top: 16px; font-size: 14px; color: #5a5a5a; }
.meta a { color: inherit; }
hr#answer { border: 0; border-top: 1px solid #c8c8c8; margin: 14px 0; }
.fig img { display: block; max-width: 100%; height: auto; margin: 12px auto; }
.card.nightMode { color: #e8e8e8; background: #1e1e1e; }
.nightMode .fig img { background: #ffffff; padding: 6px; border-radius: 4px; }
.nightMode .ctx, .nightMode .meta { color: #b0b0b0; }
.nightMode hr#answer { border-top-color: #555555; }
`;
