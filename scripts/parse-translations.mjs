/**
 * Reads .trae/documents/translations.md and writes browser-safe i18n bundles.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const mdPath = path.join(root, '.trae/documents/translations.md');
const outJsonPath = path.join(root, 'src/i18n/translations.json');
const outJsPath = path.join(root, 'src/i18n/translations.js');

const LOCALE_CODES = [
  'zh-CN',
  'zh-TW',
  'en',
  'fr',
  'de',
  'id',
  'it',
  'ja',
  'ko',
  'pt',
  'ru',
  'es',
  'th',
  'tr',
  'vi',
  'hi',
  'ar'
];

function normalizeCell(value) {
  return String(value)
    .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
    .trim();
}

function parseTableRow(line) {
  const raw = line.trim();
  if (!raw.startsWith('|')) return null;
  const inner = raw.slice(1, -1);
  const cells = inner.split('|').map((s) => normalizeCell(s));
  if (cells.length < 2) return null;
  const key = cells[0];
  if (!key || key === '翻译键' || /^[-]+$/.test(key.replace(/\|/g, ''))) return null;
  return { key, values: cells.slice(1) };
}

const text = fs.readFileSync(mdPath, 'utf8');
const lines = text.split(/\r?\n/);

const bundles = Object.fromEntries(LOCALE_CODES.map((c) => [c, {}]));

for (const line of lines) {
  const row = parseTableRow(line);
  if (!row) continue;
  const { key, values } = row;
  if (values.length < LOCALE_CODES.length) continue;
  for (let i = 0; i < LOCALE_CODES.length; i++) {
    const code = LOCALE_CODES[i];
    const val = values[i];
    if (val !== undefined && val !== '') {
      bundles[code][key] = val;
    }
  }
}

fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
fs.writeFileSync(outJsonPath, JSON.stringify(bundles, null, 0), 'utf8');
fs.writeFileSync(
  outJsPath,
  `const translations = ${JSON.stringify(bundles, null, 2)};\n\nexport default translations;\n`,
  'utf8'
);
console.log(
  'Wrote',
  `${outJsonPath} and ${outJsPath}`,
  'keys per locale:',
  LOCALE_CODES.map((c) => `${c}=${Object.keys(bundles[c]).length}`).join(', ')
);
