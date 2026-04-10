#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

def cleanup_file():
    with open('/Users/eyewind/Desktop/landing/src/main.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. 删除订阅页的语言切换器 HTML
    # 找到 <div class="language-switcher"> ... </div> 并替换为 <div style="width: 24px;"></div>
    lang_switcher_pattern = re.compile(
        r'        &lt;div class="language-switcher"&gt;.*?        &lt;/div&gt;',
        re.DOTALL
    )
    content = lang_switcher_pattern.sub('        &lt;div style="width: 24px;"&gt;&lt;/div&gt;', content)
    
    # 2. 删除语言菜单相关的 CSS
    # 从 .language-menu { 到 }
    css_pattern = re.compile(
        r'    \.language-menu \{.*?    \.language-menu-item:hover \{.*?    \}',
        re.DOTALL
    )
    content = css_pattern.sub('', content)
    
    # 3. 删除剩余的语言相关函数
    # 删除 getCurrentLocaleLabel, initLanguageSwitcher, toggleLanguageMenu, selectLanguage, 以及那个 click listener
    lines = content.split('\n')
    new_lines = []
    skip_until = -1
    
    for i, line in enumerate(lines):
        if i &lt; skip_until:
            continue
        
        # 检测并删除 getCurrentLocaleLabel 函数
        if 'function getCurrentLocaleLabel()' in line:
            # 找到函数结束的 }
            brace_count = 0
            for j in range(i, len(lines)):
                if '{' in lines[j]:
                    brace_count += 1
                if '}' in lines[j]:
                    brace_count -= 1
                    if brace_count == 0:
                        skip_until = j + 1
                        break
            continue
        
        # 检测并删除 initLanguageSwitcher 函数
        if 'function initLanguageSwitcher()' in line:
            brace_count = 0
            for j in range(i, len(lines)):
                if '{' in lines[j]:
                    brace_count += 1
                if '}' in lines[j]:
                    brace_count -= 1
                    if brace_count == 0:
                        skip_until = j + 1
                        break
            continue
        
        # 检测并删除 window.toggleLanguageMenu
        if 'window.toggleLanguageMenu' in line:
            brace_count = 0
            for j in range(i, len(lines)):
                if '{' in lines[j]:
                    brace_count += 1
                if '}' in lines[j]:
                    brace_count -= 1
                    if brace_count == 0:
                        skip_until = j + 1
                        break
            continue
        
        # 检测并删除 window.selectLanguage
        if 'window.selectLanguage' in line:
            brace_count = 0
            for j in range(i, len(lines)):
                if '{' in lines[j]:
                    brace_count += 1
                if '}' in lines[j]:
                    brace_count -= 1
                    if brace_count == 0:
                        skip_until = j + 1
                        break
            continue
        
        # 检测并删除那个 document.addEventListener
        if "document.addEventListener('click'" in line:
            brace_count = 0
            for j in range(i, len(lines)):
                if '{' in lines[j]:
                    brace_count += 1
                if '}' in lines[j]:
                    brace_count -= 1
                    if brace_count == 0:
                        skip_until = j + 1
                        break
            continue
        
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # 4. 清理空行（可选，但让文件更整洁）
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    
    with open('/Users/eyewind/Desktop/landing/src/main.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("清理完成！")

if __name__ == '__main__':
    cleanup_file()
