# 图片加载性能优化 Spec

## Why
当前项目中的图片资源（clip目录6.0M + images目录644K）导致页面加载缓慢，影响用户体验。引导页2和3在Vercel部署后仍然存在背景图片加载延迟问题。

## What Changes
- 已完成：将PNG图片转换为WebP格式（节省94%体积）
- 已完成：为非首屏图片添加懒加载
- 已完成：配置Vite静态资源复制
- 待处理：引导页2外部CDN图片优化

## Impact
- Affected specs: 性能优化
- Affected code: /Users/eyewind/Desktop/landing/src/main.js

## 图片资源分析

### 引导页背景图问题

| 页面 | 图片来源 | 当前状态 | 问题 |
|------|---------|---------|------|
| 引导页2 | Google CDN (lh3.googleusercontent.com) | 使用外部URL | ⚠️ 依赖第三方CDN |
| 引导页3 | 本地 WebP | ✅ 已优化为60KB | ✅ 已优化 |

### 引导页2问题根因
- 使用了极长的 Google CDN URL（可能是Base64编码或复杂查询）
- 外部CDN请求受网络状况影响
- 无法进行本地缓存优化

### 引导页3优化状态
- ✅ 已转换为 WebP (582KB → 60KB)
- ✅ 图片已保存到 dist/images/
- ⚠️ 需要重新构建并部署

## 已完成工作

### 阶段1: 图片格式转换 ✅
- [x] 引导页3背景图转换为 WebP (89.6%压缩率)
- [x] 12张卡片图片转换为 WebP (94%压缩率)
- [x] 总共节省 1.7MB

### 阶段2: 懒加载实现 ✅
- [x] 为风格选择页8张图片添加 loading="lazy"
- [x] 首屏图片保持立即加载

### 阶段3: Vite配置 ✅
- [x] 配置 vite-plugin-static-copy 复制静态资源
- [x] 配置 clip 和 images 目录复制到 dist

## 待完成工作

### 引导页2外部图片问题
**原因**: Google CDN 图片 URL 过长，可能影响加载性能
**解决方案**: 将外部图片下载到本地，使用本地 WebP 图片替代

### 部署验证
**问题**: dist 目录的 WebP 图片需要通过 npm run build 重新打包
**解决方案**: 用户需要本地执行构建命令

## ADDED Requirements
### Requirement: 引导页2本地图片替换
系统 SHALL 将引导页2的外部Google CDN图片替换为本地优化的WebP图片。

### Requirement: 构建部署
系统 SHALL 确保 dist 目录包含最新的 WebP 图片并正确部署到 Vercel。

## 技术实施计划

### 步骤1: 下载并转换引导页2背景图
1. 从 Google CDN 下载原图
2. 转换为 WebP 格式
3. 保存到 images/ 和 dist/images/

### 步骤2: 更新代码引用
1. 修改 main.js 中引导页2的图片引用
2. 指向本地 WebP 文件

### 步骤3: 用户本地构建部署
1. 运行 npm run build
2. 重新部署到 Vercel
