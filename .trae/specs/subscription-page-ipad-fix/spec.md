# 订阅页面 iPad 适配问题修复 Spec

## Why
当前订阅页面在 iPad 设备（分辨率 1024x1366）上存在适配问题：顶部 Hero 图片被裁剪约 50%，而 iPhone 设备显示正常。问题根源在于固定高度的 Hero 图片区域（300px）与 flex 布局的组合在平板设备上表现异常。

## What Changes
- 修复订阅页面 Hero 图片在 iPad 上的裁剪问题
- 将 h2、p 和订阅卡片 div 整合到统一的容器中，优化布局层级
- 添加 iPad 特定响应式样式
- 确保订阅卡片在所有设备上布局合理

## Impact
- Affected specs: 响应式布局系统
- Affected code:
  - /Users/eyewind/Desktop/landing/src/main.js（renderSubscriptionPage 函数）
  - /Users/eyewind/Desktop/landing/index.html（全局样式）

## ADDED Requirements
### Requirement: Hero 图片响应式布局
系统 SHALL 确保 Hero 图片在不同设备上完整显示，不被裁剪。

#### Scenario: iPad (1024x1366) 设备
- **WHEN** 用户在 iPad 设备上访问订阅页面时
- **THEN** Hero 图片应完整显示，高度应自适应设备

### Requirement: 统一内容容器
系统 SHALL 将标题、描述和订阅卡片整合到统一容器中，确保布局层级清晰。

#### Scenario: 内容区域布局
- **WHEN** 页面渲染时
- **THEN** h2、p 和订阅卡片应在同一个容器内，间距合理

### Requirement: iPad 响应式断点
系统 SHALL 提供 iPad 特定样式（768px-1024px）来修复平板布局。

#### Scenario: iPad 设备检测
- **WHEN** 设备宽度在 768px-1024px 范围内时
- **THEN** Hero 图片高度应调整为适应视口，订阅卡片宽度应合理约束

## MODIFIED Requirements
### Requirement: Hero 图片高度
**原要求**: 固定高度 300px
**新要求**: 在 iPad 上使用自适应高度（min-height: 200px, max-height: 40vh）

### Requirement: 内容容器宽度
**原要求**: 内容区域宽度 100%
**新要求**: 内容区域最大宽度 400px，居中显示

## REMOVED Requirements
### Requirement: 固定 Hero 高度
**Reason**: 固定高度在 iPad 上导致图片被裁剪
**Migration**: 使用 min-height 和 max-height 组合实现响应式高度
