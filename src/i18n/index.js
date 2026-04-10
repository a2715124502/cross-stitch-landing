import translations from './translations.js';

export const LOCALE_CODES = [
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

export const SUPPORTED_LOCALES = [
  { code: 'zh-CN', label: '简体中文', shortLabel: '简中' },
  { code: 'zh-TW', label: '繁體中文', shortLabel: '繁中' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'fr', label: 'Français', shortLabel: 'FR' },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE' },
  { code: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID' },
  { code: 'it', label: 'Italiano', shortLabel: 'IT' },
  { code: 'ja', label: '日本語', shortLabel: 'JA' },
  { code: 'ko', label: '한국어', shortLabel: 'KO' },
  { code: 'pt', label: 'Português', shortLabel: 'PT' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU' },
  { code: 'es', label: 'Español', shortLabel: 'ES' },
  { code: 'th', label: 'ไทย', shortLabel: 'TH' },
  { code: 'tr', label: 'Türkçe', shortLabel: 'TR' },
  { code: 'vi', label: 'Tiếng Việt', shortLabel: 'VI' },
  { code: 'hi', label: 'हिन्दी', shortLabel: 'HI' },
  { code: 'ar', label: 'العربية', shortLabel: 'AR' }
];

const RTL_LOCALES = new Set(['ar']);
const STORAGE_KEY = 'crossstitch_locale';

let currentLocale =
  typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
if (!currentLocale || !LOCALE_CODES.includes(currentLocale)) {
  currentLocale = 'en';
}

let onLocaleChange = null;

function interpolate(str, params) {
  if (!str || !params) return str;
  let out = str;
  for (const [k, v] of Object.entries(params)) {
    out = out.split(`{${k}}`).join(String(v ?? ''));
  }
  return out;
}

export function t(key, params) {
  const bag = translations[currentLocale] || {};
  const fallback = translations['zh-CN'] || {};
  const str = bag[key] ?? fallback[key] ?? key;
  return interpolate(str, params);
}

export function getCurrentLocale() {
  return currentLocale;
}

export function applyLocaleMeta() {
  const root = document.documentElement;
  if (!root) return;
  root.lang = currentLocale;
  root.dir = RTL_LOCALES.has(currentLocale) ? 'rtl' : 'ltr';
}

export function setLocaleChangeHandler(fn) {
  onLocaleChange = fn;
}

export function setLocaleFromUser(code) {
  if (!LOCALE_CODES.includes(code)) return;
  currentLocale = code;
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch (_) {
    /* ignore */
  }
  applyLocaleMeta();
  if (typeof onLocaleChange === 'function') {
    onLocaleChange(code);
  }
}

export function splitStatTranslation(line) {
  const s = line.trim();
  const m = s.match(/^(.+?)\s+(\S+)$/);
  if (!m) return { subtitle: s, value: '' };
  return { subtitle: m[1], value: m[2] };
}

export function styleListSeparator() {
  return ['zh-CN', 'zh-TW', 'ja', 'ko'].includes(currentLocale) ? '、' : ', ';
}

export function getLanguageMenuMarkup() {
  return SUPPORTED_LOCALES.map(
    (l) =>
      `<button type="button" class="language-menu-item" data-locale="${l.code}" onclick="selectLanguage('${l.code}')">${l.label}</button>`
  ).join('');
}

export function initLanguageSwitcherUi() {
  const label = document.getElementById('current-language-label');
  if (!label) return;
  const meta = SUPPORTED_LOCALES.find((l) => l.code === currentLocale);
  label.textContent = meta ? meta.shortLabel : currentLocale;
}

export function attachI18nWindowHandlers() {
  window.toggleLanguageMenu = function (event) {
    event?.stopPropagation?.();
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.toggle('hidden');
  };
  window.selectLanguage = function (code) {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.add('hidden');
    setLocaleFromUser(code);
  };
  if (!window.__crossStitchI18nDocClose) {
    window.__crossStitchI18nDocClose = true;
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('lang-menu');
      const btn = document.getElementById('lang-switch-btn');
      if (!menu || menu.classList.contains('hidden')) return;
      const target = e.target;
      if (btn && (btn === target || btn.contains(target))) return;
      if (menu.contains(target)) return;
      menu.classList.add('hidden');
    });
  }
}
