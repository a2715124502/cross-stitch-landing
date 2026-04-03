# 多语言适配实施规格 - Multi-Language Adaptation Spec

## Overview
- **Summary**: 对当前项目实施完整的多语言支持，实现12种语言的切换功能，默认使用英文界面（产品名"Cross Stitch"保持不变）
- **Purpose**: 让全球用户能够使用自己的语言访问应用，提升用户体验和可用性
- **Target Users**: 全球用户（特别是中文、英语、法语、德语、日语、韩语等12种语言用户）

## Why
- 当前应用所有UI文本硬编码为中文，无法支持多语言用户
- 无法满足海外用户的使用需求
- 需要统一界面语言为英文（除产品名外），同时保留切换到其他语言的能力

## What Changes
- 创建 i18n 核心模块（translator.js）
- 创建 12 种语言的翻译文件
- 替换所有硬编码文本为翻译函数调用
- 添加语言切换功能（默认英文）
- 更新 HTML lang 属性
- 添加动态字体加载支持

## Impact
- **Affected specs**:
  - 页面内容显示
  - 用户交互流程
- **Affected code**:
  - `/src/main.js` - 所有页面渲染函数
  - `/index.html` - lang 属性
  - 新增 `/src/i18n/translator.js` - 翻译核心
  - 新增 `/src/locales/*.json` - 12个翻译文件

## Goals
- 默认界面语言为英文（除产品名"Cross Stitch"外）
- 支持 12 种语言切换
- 不改变页面内容和功能流程
- 实现语言设置持久化（localStorage）

## Non-Goals (Out of Scope)
- 不修改页面布局和样式
- 不修改功能逻辑和流程
- 不添加新的功能页面
- 不修改 API 调用逻辑

## ADDED Requirements

### Requirement: i18n 核心模块
系统 SHALL 提供翻译函数 `t(key)` 用于获取翻译后的文本

#### Scenario: 获取翻译文本
- **WHEN** 调用 `t('common.skip')`
- **THEN** 返回当前语言的 "Skip" 或其他对应翻译

### Requirement: 语言切换
系统 SHALL 提供语言切换功能，用户可以切换到 12 种支持的语言

#### Scenario: 切换语言
- **WHEN** 用户选择语言
- **THEN** 页面所有文本更新为新语言，刷新页面后保持选择

### Requirement: 语言持久化
系统 SHALL 将用户选择的语言保存到 localStorage

#### Scenario: 重返应用
- **WHEN** 用户重新打开应用
- **THEN** 自动应用上次选择的语言

## MODIFIED Requirements

### Requirement: 页面文本显示
所有页面渲染函数中的硬编码文本 SHALL 替换为翻译函数调用

#### Scenario: 渲染问题页
- **WHEN** 渲染问题页1
- **THEN** 标题显示 `t('questions.q1.title')` 的翻译结果
- **THEN** 选项显示 `t('questions.q1.option.female')` 等翻译结果

## 文件结构

```
/src
  /i18n
    - translator.js      # 翻译核心模块
  /locales
    - en.json            # 英语（默认）
    - zh-TW.json         # 繁体中文
    - zh-CN.json         # 简体中文
    - fr.json            # 法语
    - de.json            # 德语
    - id.json            # 印尼语
    - it.json            # 意大利语
    - ja.json            # 日语
    - ko.json            # 韩语
    - pt.json            # 葡萄牙语
    - ru.json            # 俄语
    - es.json            # 西班牙语
    - tr.json            # 土耳其语
```

## 翻译Key命名规范

### common - 通用文案
```javascript
{
  "skip": "Skip",
  "continue": "Continue",
  "next": "Next",
  "back": "Back",
  "start": "Start",
  "subscribe_now": "Subscribe Now"
}
```

### onboarding - 引导页
```javascript
{
  "welcome": "Welcome to Cross Stitch",
  "subtitle": "Relax and unleash your creativity through coloring",
  "feature_count": "100M+",
  "feature_desc": "Happy Artists",
  "testimonial": "This is my best way to relax every day. Cross Stitch makes my life more fulfilling"
}
```

### questions - 问题页
```javascript
{
  "q1": {
    "title": "What is your gender?",
    "subtitle": "This helps us personalize your experience.",
    "option": {
      "female": "Female",
      "male": "Male",
      "other": "Other"
    }
  },
  "q2": {
    "title": "What is your age group?",
    "subtitle": "This helps us recommend relevant styles.",
    "option": {
      "under14": "Under 14",
      "range1": "14-20",
      "range2": "20-25",
      "range3": "26-35",
      "range4": "36-50",
      "over50": "Over 50"
    }
  },
  "q3": {
    "title": "Which style inspires you most?",
    "option": {
      "animals": "Animals",
      "art": "Art",
      "flowers": "Flowers",
      "nature": "Nature",
      "pets": "Pets",
      "celebration": "Celebration",
      "food": "Food",
      "super_size": "Super Size"
    }
  },
  "q4": {
    "title": "What are your goals?",
    "subtitle": "This helps us personalize your experience.",
    "option": {
      "relax": "Relax myself",
      "creativity": "Express my creativity"
    }
  },
  "q5": {
    "title": "Which palettes resonate with you most?"
  },
  "q6": {
    "title": "Choose your brushes"
  }
}
```

### subscription - 订阅页
```javascript
{
  "choose_plan": "Choose your plan",
  "unlimited_access": "Unlimited access to all categories and images, unlimited image imports",
  "weekly": "Weekly",
  "yearly": "Yearly",
  "best_value": "Best Value",
  "terms": "All subscription options are auto-renewing subscriptions. The subscription fee will be charged to your Apple account when you confirm your purchase or when your trial period ends...",
  "terms_of_service": "Terms of Service",
  "privacy_policy": "Privacy Policy",
  "restore_purchase": "Restore Purchase"
}
```

### Language Switcher
```javascript
{
  "language": "Language",
  "select_language": "Select Language"
}
```
