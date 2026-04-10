#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('src/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 步骤1: 删除订阅页的语言切换器 HTML
# 找到从 &lt;div class="language-switcher"&gt; 到下一个 &lt;/header&gt; 之前的内容
old_html = '''        &lt;h1 style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 18px; font-weight: bold; color: #000000;"&gt;&lt;/h1&gt;
        &lt;div class="language-switcher"&gt;
          &lt;button id="lang-switch-btn" class="language-switch-btn" onclick="toggleLanguageMenu(event)"&gt;
            &lt;span&gt;🌐&lt;/span&gt;
            &lt;span id="current-language-label"&gt;&lt;/span&gt;
          &lt;/button&gt;
          &lt;div id="lang-menu" class="language-menu hidden"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/header&gt;'''

new_html = '''        &lt;h1 style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 18px; font-weight: bold; color: #000000;"&gt;&lt;/h1&gt;
        &lt;div style="width: 24px;"&gt;&lt;/div&gt;
      &lt;/header&gt;'''

content = content.replace(old_html, new_html)

# 步骤2: 删除语言菜单 CSS
old_css = '''    .language-menu {
      position: absolute;
      top: 32px;
      right: 0;
      width: 150px;
      max-height: 220px;
      overflow-y: auto;
      background: #FFFFFF;
      border: 1px solid #E2E2E2;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 80;
    }

    .language-menu.hidden {
      display: none;
    }

    .language-menu-item {
      width: 100%;
      text-align: left;
      border: none;
      background: transparent;
      border-radius: 8px;
      padding: 7px 8px;
      font-size: 12px;
      cursor: pointer;
    }

    .language-menu-item:hover {
      background: #F7F7F7;
    }'''

content = content.replace(old_css, '')

# 步骤3: 删除 getCurrentLocaleLabel 函数
old_func1 = '''function getCurrentLocaleLabel() {
  const target = SUPPORTED_LOCALES.find(locale =&gt; locale.code === currentLocale);
  return target ? (target.shortLabel || target.label) : '简中';
}'''
content = content.replace(old_func1, '')

# 步骤4: 删除 initLanguageSwitcher 函数
old_func2 = '''function initLanguageSwitcher() {
  const label = document.getElementById('current-language-label');
  const menu = document.getElementById('lang-menu');
  if (!label || !menu) return;

  label.textContent = getCurrentLocaleLabel();
  menu.innerHTML = SUPPORTED_LOCALES.map((locale) =&gt; `
    &lt;button class="language-menu-item" onclick="selectLanguage('${locale.code}')"&gt;${locale.label}&lt;/button&gt;
  `).join('');
}'''
content = content.replace(old_func2, '')

# 步骤5: 删除 window.toggleLanguageMenu 函数
old_func3 = '''window.toggleLanguageMenu = function(event) {
  event.stopPropagation();
  const menu = document.getElementById('lang-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
};'''
content = content.replace(old_func3, '')

# 步骤6: 删除 window.selectLanguage 函数
old_func4 = '''window.selectLanguage = function(locale) {
  const menu = document.getElementById('lang-menu');
  if (menu) {
    menu.classList.add('hidden');
  }
  setLocale(locale);
};'''
content = content.replace(old_func4, '')

# 步骤7: 删除 document.addEventListener
old_func5 = '''document.addEventListener('click', (event) =&gt; {
  const menu = document.getElementById('lang-menu');
  const trigger = document.getElementById('lang-switch-btn');
  if (!menu || !trigger) return;
  if (!menu.contains(event.target) &amp;&amp; !trigger.contains(event.target)) {
    menu.classList.add('hidden');
  }
});'''
content = content.replace(old_func5, '')

# 步骤8: 删除 initLanguageSwitcher() 调用
content = content.replace('  initLanguageSwitcher();', '')

# 清理多余的空行
import re
content = re.sub(r'\n{4,}', '\n\n\n', content)

with open('src/main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("清理完成！")
