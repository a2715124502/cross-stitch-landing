# 多语言适配 - 实施任务列表

## Task Dependencies
- Task 2, 3, 4, 5, 6, 7, 8 依赖 Task 1
- Task 9 依赖 Task 8
- Task 10 依赖 Task 9

---

## [ ] Task 1: 创建 i18n 核心模块
- **Priority**: P0
- **Depends On**: None
- **Description**:
  创建 `/src/i18n/translator.js` 模块，包含：
  - 当前语言状态管理
  - `t(key)` 翻译函数
  - `setLanguage(lang)` 语言切换函数
  - `getCurrentLanguage()` 获取当前语言
  - localStorage 持久化支持
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `programmatic` TR-1.1: 验证 `t('common.skip')` 返回翻译文本
  - `programmatic` TR-1.2: 验证语言切换后 `t()` 返回新语言文本
  - `programmatic` TR-1.3: 验证刷新页面后语言设置保持

---

## [ ] Task 2: 创建英文翻译文件（默认语言）
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  创建 `/src/locales/en.json` 英文翻译文件，包含所有 UI 文本的英文版本
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-2.1: 验证 en.json 包含所有必需的翻译 key
  - `human-judgement` TR-2.2: 验证翻译文本准确、地道

---

## [ ] Task 3: 创建中文翻译文件（繁體中文、简体中文）
- **Priority**: P1
- **Depends On**: Task 1
- **Description**:
  创建 `/src/locales/zh-TW.json` 和 `/src/locales/zh-CN.json`
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-3.1: 验证两个中文文件 key 结构一致
  - `human-judgement` TR-3.2: 验证繁體/簡體中文显示正确

---

## [ ] Task 4: 创建欧洲语言翻译文件
- **Priority**: P1
- **Depends On**: Task 1
- **Description**:
  创建法语、德语、意大利语、葡萄牙语、西班牙语、俄语、土耳其语翻译文件
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-4.1: 验证所有欧洲语言文件 key 结构一致
  - `human-judgement` TR-4.2: 验证特殊字符（俄语、土耳其语）显示正常

---

## [ ] Task 5: 创建亚洲语言翻译文件
- **Priority**: P1
- **Depends On**: Task 1
- **Description**:
  创建日语、韩语、印尼语翻译文件
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-5.1: 验证亚洲语言文件 key 结构一致
  - `human-judgement` TR-5.2: 验证 CJK（中日韩）字符显示正常

---

## [ ] Task 6: 更新引导页文本为翻译函数
- **Priority**: P0
- **Depends On**: Task 1, Task 2
- **Description**:
  修改 `renderOnboardingPage1()`, `renderOnboardingPage2()`, `renderOnboardingPage3()` 函数，将硬编码文本替换为 `t()` 调用
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-6.1: 验证引导页1-3所有文本使用 `t()` 函数
  - `programmatic` TR-6.2: 验证切换语言后引导页文本更新

---

## [ ] Task 7: 更新问题页文本为翻译函数
- **Priority**: P0
- **Depends On**: Task 1, Task 2
- **Description**:
  修改所有问题页渲染函数，将硬编码文本替换为 `t()` 调用
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-7.1: 验证所有问题页文本使用 `t()` 函数
  - `programmatic` TR-7.2: 验证问题选项显示正确翻译

---

## [ ] Task 8: 更新订阅页文本为翻译函数
- **Priority**: P0
- **Depends On**: Task 1, Task 2
- **Description**:
  修改 `renderSubscriptionPage()` 函数，将硬编码文本替换为 `t()` 调用
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-8.1: 验证订阅页所有文本使用 `t()` 函数
  - `programmatic` TR-8.2: 验证订阅条款完整显示

---

## [ ] Task 9: 添加语言切换 UI
- **Priority**: P1
- **Depends On**: Task 8
- **Description**:
  在订阅页或设置区域添加语言切换器，允许用户选择 12 种语言
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `human-judgement` TR-9.1: 验证语言切换器 UI 显示正常
  - `programmatic` TR-9.2: 验证选择语言后页面文本更新

---

## [ ] Task 10: 更新 HTML lang 属性
- **Priority**: P2
- **Depends On**: Task 9
- **Description**:
  根据当前语言动态更新 index.html 的 `<html lang="...">` 属性
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `programmatic` TR-10.1: 验证 lang 属性随语言切换更新
  - `programmatic` TR-10.2: 验证页面无 lang 属性相关警告

---

## Task Dependencies Diagram

```
Task 1 (i18n核心)
    ↓
Task 2 (英文翻译) ──────────────────────────────────┐
    ↓                                                 │
Task 3 (中文翻译)                                     │
    ↓                                                 │
Task 4 (欧洲语言)                                     │
    ↓                                                 │
Task 5 (亚洲语言)                                     │
    ↓                                                 │
Task 6 (引导页) ───────┐                             │
    ↓                   │                             │
Task 7 (问题页) ───────┼──→ Task 8 (订阅页) ──→ Task 9 (语言切换UI) ──→ Task 10 (lang属性)
    ↓                   │                             │
    └───────────────────┘                             │
```
