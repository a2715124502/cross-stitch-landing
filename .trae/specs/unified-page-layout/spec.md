# 统一页面容器布局规范 Spec

## Why
当前页面（问题1-5、调色盘选择、笔刷选择页面）的容器元素存在布局不一致问题：不同页面使用不同的内联样式、不同的间距设置、不同的CSS类结构。需要建立统一的布局规范来确保跨页面视觉一致性。

## What Changes
- 统一所有页面的 `page-container` 容器样式（max-width: 400px, padding: 0 20px）
- 统一所有页面的 `main.main-content` 容器样式（width: 100%, padding: 0 20px）
- 统一所有页面的标题区样式（header-section/headline-section，margin-bottom: 24px）
- 统一所有页面的选项列表样式（gap: 16px）
- 移除所有内联样式中的重复布局属性，统一使用CSS类

## Impact
- Affected specs: 页面布局系统
- Affected code: /Users/eyewind/Desktop/landing/src/main.js

## ADDED Requirements
### Requirement: page-container 容器
系统 SHALL 提供统一的 page-container 样式类，用于包裹所有问题页面内容。

#### Scenario: 标准容器
- **WHEN** 页面渲染时
- **THEN** 页面内容应被约束在 max-width: 400px，水平居中的容器内

### Requirement: main-content 容器
系统 SHALL 提供统一的主内容容器样式，确保所有页面使用相同的宽度和内边距。

#### Scenario: 主内容区域
- **WHEN** 渲染主内容区域时
- **THEN** 内容宽度应为 100%，内边距为 0 20px

### Requirement: 标题区样式
系统 SHALL 提供统一的标题区样式，确保标题与内容之间的间距一致。

#### Scenario: 标题区间距
- **WHEN** 渲染标题区时
- **THEN** 标题区底部间距应为 24px

### Requirement: 选项列表间距
系统 SHALL 提供统一的选项列表样式，确保列表项之间间距为 16px。

#### Scenario: 选项列表
- **WHEN** 渲染选项列表时
- **THEN** 列表项之间间距应为 16px

## MODIFIED Requirements
### Requirement: 统一页面容器
所有问题页面（1-5）、调色盘选择页面和笔刷选择页面的外层容器应统一使用 page-container 类。

**原要求**: 各页面使用不同的内联样式
**新要求**: 统一使用 page-container CSS 类定义布局

## REMOVED Requirements
### Requirement: 内联布局样式
**Reason**: 内联样式导致维护困难和一致性问题
**Migration**: 使用统一的 CSS 类替代内联样式