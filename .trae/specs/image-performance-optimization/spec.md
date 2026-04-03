# 图片加载性能优化 - Product Requirement Document

## Overview
- **Summary**: 对当前项目的图片加载机制进行全面优化，解决首次加载缓慢问题，确保所有图片在各种网络环境下快速加载
- **Purpose**: 提升用户体验，减少页面加载时间，特别是首屏关键路径图片
- **Target Users**: 移动端和桌面端用户

## Goals
- 将首屏图片首次加载时间降低到0.2秒以内
- 减少总图片加载体积约80%
- 实现非首屏图片的懒加载
- 保持图片显示质量不受影响
- 在2G/3G/4G/WiFi网络下均能正常工作

## Non-Goals (Out of Scope)
- 不修改现有页面功能和布局
- 不修改图片内容和设计
- 不引入额外的依赖库（除已有之外）

## Background & Context
当前项目图片资源总计约6.6MB，主要分布在：
- 引导页背景图：约1MB
- 风格选择页卡片：约5MB
- 调色板页和其他页：约0.6MB

## Functional Requirements
- **FR-1**: 所有PNG和JPEG图片转换为WebP格式
- **FR-2**: 非首屏图片实现懒加载
- **FR-3**: 首屏关键图片预加载
- **FR-4**: 保持图片显示质量一致

## Non-Functional Requirements
- **NFR-1**: 首屏图片首次加载时间 ≤ 0.2秒
- **NFR-2**: 总图片体积减少 ≥ 80%
- **NFR-3**: 懒加载图片不影响用户感知体验
- **NFR-4**: 在移动设备和桌面设备上均兼容

## Constraints
- **Technical**: 必须使用WebP格式（浏览器兼容性好）
- **Business**: 两周内完成优化
- **Dependencies**: 现有构建工具Vite

## Assumptions
- WebP格式在主流浏览器（Chrome、Firefox、Safari、Edge）均有良好支持
- 懒加载使用原生loading="lazy"属性即可
- 质量参数80-85%不会明显影响视觉效果

## Acceptance Criteria

### AC-1: WebP格式转换完成
- **Given**: 所有PNG和JPEG图片
- **When**: 构建项目时
- **Then**: 生成对应的WebP格式图片，质量参数80-85%
- **Verification**: programmatic
- **Notes**: 保留原图作为降级方案

### AC-2: 图片体积减少≥80%
- **Given**: 优化前后的图片文件
- **When**: 对比文件大小
- **Then**: WebP格式文件体积比原格式小80%以上
- **Verification**: programmatic

### AC-3: 首屏加载时间≤0.2秒
- **Given**: 4G网络环境
- **When**: 用户首次访问首页
- **Then**: 所有首屏图片在0.2秒内加载完成
- **Verification**: programmatic

### AC-4: 非首屏图片懒加载
- **Given**: 用户访问页面
- **When**: 滚动到非首屏区域
- **Then**: 对应区域的图片才开始加载
- **Verification**: programmatic

### AC-5: 图片显示质量无明显变化
- **Given**: WebP和原图对比
- **When**: 用户查看图片
- **Then**: 无法看出明显的质量差异
- **Verification**: human-judgment

## Open Questions
- [ ] 是否需要为老浏览器提供PNG/JPEG降级方案？
- [ ] 是否需要使用CDN加速图片加载？
