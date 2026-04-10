#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 读取整个文件
with open('src/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 步骤1：删除订阅页的语言切换器 HTML
# 找到并替换这一段
old_html_start = content.find('&lt;div class="language-switcher"&gt;')
if old_html_start != -1:
    # 找到结束位置
    header_end = content.find('&lt;/header&gt;', old_html_start)
    if header_end != -1:
        # 构建新的内容
        before = content[:old_html_start]
        after = content[header_end:]
        content = before + '        &lt;div style="width: 24px;"&gt;&lt;/div&gt;\n      &lt;/header&gt;' + after

# 步骤2：删除 getCurrentLocaleLabel 函数
func_start = content.find('function getCurrentLocaleLabel()')
if func_start != -1:
    brace_count = 0
    func_end = func_start
    for i in range(func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                func_end = i + 1
                break
    content = content[:func_start] + content[func_end:]

# 步骤3：删除 initLanguageSwitcher 函数
func_start = content.find('function initLanguageSwitcher()')
if func_start != -1:
    brace_count = 0
    func_end = func_start
    for i in range(func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                func_end = i + 1
                break
    content = content[:func_start] + content[func_end:]

# 步骤4：删除 window.toggleLanguageMenu
func_start = content.find('window.toggleLanguageMenu')
if func_start != -1:
    brace_count = 0
    func_end = func_start
    for i in range(func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                func_end = i + 1
                break
    content = content[:func_start] + content[func_end:]

# 步骤5：删除 window.selectLanguage
func_start = content.find('window.selectLanguage')
if func_start != -1:
    brace_count = 0
    func_end = func_start
    for i in range(func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                func_end = i + 1
                break
    content = content[:func_start] + content[func_end:]

# 步骤6：删除 document.addEventListener('click'
func_start = content.find("document.addEventListener('click'")
if func_start != -1:
    brace_count = 0
    func_end = func_start
    for i in range(func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                func_end = i + 1
                break
    content = content[:func_start] + content[func_end:]

# 步骤7：删除 initLanguageSwitcher(); 调用
content = content.replace('  initLanguageSwitcher();', '')

# 步骤8：删除 .language-switcher 相关CSS
css_start = content.find('.language-menu {')
if css_start != -1:
    brace_count = 0
    css_end = css_start
    for i in range(css_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        if content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                css_end = i + 1
                break
    content = content[:css_start] + content[css_end:]

# 清理空行
while '\n\n\n\n' in content:
    content = content.replace('\n\n\n\n', '\n\n\n')

# 保存
with open('src/main.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('完成！')
