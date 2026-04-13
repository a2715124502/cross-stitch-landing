# 图片加载性能优化 - The Implementation Plan (Decomposed and Prioritized Task List)

## [x] Task 1: 图片格式转换为WebP
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 将所有PNG和JPEG图片转换为WebP格式
  - 质量参数设置为80-85%
  - 保留原图片作为降级方案
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `programmatic` TR-1.1: 验证所有图片均有对应的WebP版本
  - `programmatic` TR-1.2: 验证WebP文件体积比原文件小80%以上
  - `human-judgement` TR-1.3: 对比WebP和原图，确认视觉质量无明显差异

## [x] Task 2: 更新代码中的图片引用
- **Priority**: P0
- **Depends On**: Task 1
- **Description**: 
  - 更新 main.js 中的图片路径引用，使用WebP格式
  - 检查所有img标签和CSS背景图
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-2.1: 验证所有图片引用均指向WebP文件
  - `programmatic` TR-2.2: 验证页面加载时没有404错误

## [/] Task 3: 实现非首屏图片懒加载
- **Priority**: P1
- **Depends On**: None
- **Description**: 
  - 为风格选择页等非首屏图片添加 loading="lazy" 属性
  - 确保首屏关键图片正常加载
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `programmatic` TR-3.1: 验证非首屏图片有 loading="lazy" 属性
  - `programmatic` TR-3.2: 验证滚动时图片才开始加载

## [/] Task 4: 首屏图片预加载优化
- **Priority**: P1
- **Depends On**: Task 1
- **Description**: 
  - 为引导页关键背景图添加 preload 标记
  - 确保首屏关键资源优先加载
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-4.1: 验证首屏图片有 preload 标记
  - `programmatic` TR-4.2: 验证首屏图片在网络面板中优先加载

## [/] Task 5: 更新 Vite 配置确保静态资源复制
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 确保 clip/ 和 images/ 目录在构建时正确复制到 dist/
  - 使用 vite-plugin-static-copy 或 public 目录
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-5.1: 验证构建后 dist/ 目录包含所有图片资源
  - `programmatic` TR-5.2: 验证 Vercel 部署后能正常访问图片

## [ ] Task 6: 多设备和网络环境测试
- **Priority**: P2
- **Depends On**: Task 1, Task 2, Task 3, Task 4, Task 5
- **Description**: 
  - 在不同设备（iPhone/Android/桌面）上测试
  - 在不同网络（2G/3G/4G/WiFi）下测试
  - 记录加载时间数据
- **Acceptance Criteria Addressed**: AC-3, AC-4, AC-5
- **Test Requirements**:
  - `human-judgement` TR-6.1: 验证在各设备上图片显示正常
  - `programmatic` TR-6.2: 验证4G网络下首屏加载≤0.2秒
  - `human-judgement` TR-6.3: 验证不同网络下用户体验流畅

# Task Dependencies
- Task 2 depends on Task 1
- Task 4 depends on Task 1
- Task 6 depends on Task 1, Task 2, Task 3, Task 4, Task 5
