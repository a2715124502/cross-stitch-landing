# iPhone 16 Pro 白边显示问题修复 Spec

## Why
iPhone 16 (393x852) 和 iPhone 16 Pro (402x874) 设备上出现细白边问题：
- iPhone 16：底部出现细白边
- iPhone 16 Pro：底部和右侧同时出现细白边

该问题源于CSS视口单位（vh/vw）与iOS动态安全区域不兼容，以及容器定位和overflow设置不当。

## What Changes
- 修复 html/body 基础样式，确保完全覆盖视口
- 使用 100dvh（dynamic viewport height）替代 100vh 处理iOS安全区域
- 为 #app 容器添加固定定位，确保全屏覆盖
- 修复 .mesh-gradient-bg 背景层尺寸计算
- 确保所有页面容器使用全视口高度

## Impact
- Affected specs: 响应式布局、视口显示
- Affected code:
  - /Users/eyewind/Desktop/landing/index.html
  - /Users/eyewind/Desktop/landing/src/main.js

## ADDED Requirements
### Requirement: 全视口覆盖
系统 SHALL 确保页面内容完全覆盖整个设备视口，不留白边。

#### Scenario: iPhone 16 Pro 全屏显示
- **WHEN** 用户在 iPhone 16 Pro (402x874) 上访问网站时
- **THEN** 页面内容应完全填充屏幕，底部和右侧不应出现白色边框

### Requirement: 动态视口高度
系统 SHALL 使用 100dvh 单位处理iOS设备的高度计算。

#### Scenario: iOS Safari 动态工具栏
- **WHEN** iOS Safari 显示/隐藏动态工具栏时
- **THEN** 页面高度应自动调整，不出现滚动条或空白区域

### Requirement: 固定定位背景层
系统 SHALL 确保 .mesh-gradient-bg 背景层始终覆盖完整视口。

#### Scenario: 背景层渲染
- **WHEN** 页面渲染时
- **THEN** 背景层应使用 100vw x 100dvh 尺寸，完全覆盖视口

## MODIFIED Requirements
### Requirement: body 基础样式
**原要求**: body 使用默认定位和 100% 高度
**新要求**: body 使用 position: fixed 并覆盖整个视口

### Requirement: #app 容器
**原要求**: #app 使用流式布局
**新要求**: #app 使用 position: fixed 全屏定位

## REMOVED Requirements
### Requirement: min-height: 100vh
**Reason**: min-height 在iOS Safari上不会正确处理动态工具栏
**Migration**: 使用 height: 100dvh 替代

### Requirement: width: 100% / height: 100%
**Reason**: 百分比无法正确计算视口尺寸
**Migration**: 使用 100vw / 100dvh 单位
