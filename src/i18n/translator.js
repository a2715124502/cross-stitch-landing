import en from '../locales/en.json';
import zhTW from '../locales/zh-TW.json';
import zhCN from '../locales/zh-CN.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import it from '../locales/it.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';
import ru from '../locales/ru.json';
import tr from '../locales/tr.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';
import id from '../locales/id.json';

const translations = {
  'en': en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'fr': fr,
  'de': de,
  'it': it,
  'pt': pt,
  'es': es,
  'ru': ru,
  'tr': tr,
  'ja': ja,
  'ko': ko,
  'id': id
};

let currentLanguage = 'en';

export function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('app_language', lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'zh-CN', name: '简体中文' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'ru', name: 'Русский' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'id', name: 'Bahasa Indonesia' }
];

export function initLanguage() {
  const saved = localStorage.getItem('app_language');
  if (saved && translations[saved]) {
    currentLanguage = saved;
    document.documentElement.lang = saved;
  }
  return currentLanguage;
}
