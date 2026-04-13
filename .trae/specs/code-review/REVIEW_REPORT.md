# Cross Stitch 代码审查报告

**审查日期**: 2026-04-03
**审查范围**: main.js, index.html
**审查目的**: 稳定性、Bug预防、安全漏洞、兼容性、性能

---

## 执行摘要

本次代码审查发现了 **15 个问题**，其中：
- **高优先级**: 4 个
- **中优先级**: 8 个
- **低优先级**: 3 个

代码整体质量**良好**，但存在一些需要立即修复的安全和稳定性问题。

---

## 一、稳定性问题

### 1. [高] localStorage 操作缺少错误处理
**位置**: 代码中多处使用 localStorage

**问题描述**:
代码使用 localStorage 存储用户选择数据，但没有 try-catch 保护。如果浏览器隐私模式或存储满，会抛出异常导致页面崩溃。

**修复建议**:
```javascript
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage write failed:', e);
  }
}

function safeGetItem(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.warn('localStorage read failed:', e);
    return null;
  }
}
```

### 2. [高] 动画状态 isTransitioning 在问题页函数内重复定义
**位置**: `renderQuestionPage1()` (line 954), `renderQuestionPage2()` (line 1270), `renderQuestionPage4()` (line 1979)

**问题描述**:
`isTransitioning` 变量在每个问题页函数内部重新声明为 `let isTransitioning = false;`，这与顶层的全局变量 `let isTransitioning = false;` (line 4) 冲突。导致全局状态无法正确控制页面过渡。

**修复建议**:
删除所有问题页函数内部的 `let isTransitioning = false;` 声明，直接使用全局变量。

### 3. [中] setTimeout 回调中的内存泄漏风险
**位置**: `renderOnboardingPage1()` (lines 376-410)

**问题描述**:
页面使用多个 setTimeout 进行文字动画序列，但页面切换时没有清除这些定时器。如果用户在动画进行中切换页面，定时器回调仍会执行，可能导致错误的状态更新。

**修复建议**:
在页面切换时调用 `clearTimeout()` 清除所有待执行的定时器。

### 4. [中] selectOption 函数定义冲突
**位置**: `renderQuestionPage1()` (line 955), `renderQuestionPage2()` (line 1271), `renderQuestionPage4()` (line 1980), 全局 (line 3406)

**问题描述**:
`selectOption` 函数在多个问题页内部定义并通过 `window.selectOption = function()` 赋值到全局作用域。这导致函数覆盖，可能产生难以调试的问题。

**修复建议**:
将 `selectOption` 改为一个带参数的工厂函数，根据当前页面类型处理不同的选择逻辑。

---

## 二、安全漏洞

### 1. [高] 外部 API URL 可信度问题
**位置**: `generateImageUrl()` (line 13)

**问题描述**:
API URL `https://trae-api-cn.mchost.guru` 指向不明域名，用户输入的 prompt 会发送到该服务器，存在数据安全风险。

**修复建议**:
- 确认该 API 的真实来源和运营方
- 考虑使用更知名的 AI API 服务
- 如果是自建服务，应使用自己的域名

### 2. [中] URL 参数编码不完整
**位置**: `generateImageUrl()` (line 11-14)

**问题描述**:
`prompt` 参数使用了 `encodeURIComponent`，但 `size` 参数未编码。如果 `size` 传入特殊字符可能导致 URL 解析错误或安全问题。

**修复建议**:
```javascript
function generateImageUrl(prompt, size = 'square') {
  const encodedPrompt = encodeURIComponent(prompt);
  const encodedSize = encodeURIComponent(size);
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=${encodedSize}`;
}
```

### 3. [中] 动态生成的图片缺少 fallback 处理
**位置**: `styleOptions`, `paletteOptions`, `brushOptions`

**问题描述**:
这些选项的图片使用 `generateImageUrl()` 动态生成，没有错误处理。当 API 请求失败时，用户只会看到空白图片。

**修复建议**:
在图片元素上添加 `onerror` 事件处理，提供默认占位图。

### 4. [低] 图片 onerror 处理不够健壮
**位置**: 订阅页 (line 3029)

**问题描述**:
onerror fallback 从 webp 降级到 jpg，如果 jpg 也加载失败没有最终兜底。

**修复建议**:
添加多重 fallback 或默认占位图。

---

## 三、兼容性

### 1. [中] CSS @keyframes 缺少浏览器前缀
**位置**: 多个页面

**问题描述**:
`@keyframes fadeInUp` 等动画没有 `-webkit-` 前缀，在旧版 iOS Safari (< 14) 上可能不支持。

**修复建议**:
```css
@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 添加 webkit 前缀 */
@-webkit-keyframes fadeInUp {
  from {
    -webkit-transform: translateY(30px);
    opacity: 0;
  }
  to {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}
```

### 2. [中] flexbox 旧版兼容性
**位置**: 全局

**问题描述**:
多处使用 flexbox 没有指定 `display: -webkit-box` 等旧版前缀。

**修复建议**:
为 flex 容器添加 `-webkit-` 前缀版本。

### 3. [低] dvh 单位兼容性
**位置**: `index.html` line 43, `main.js` 多处

**问题描述**:
`height: 100dvh` 是较新的 CSS 特性， iOS Safari 15 以下版本支持不完整。

**修复建议**:
提供 fallback：
```css
height: 100vh; /* fallback */
height: 100dvh; /* iOS 15+ */
```

### 4. [低] 触摸事件处理
**位置**: 多个点击元素

**问题描述**:
使用 `onclick` 处理触摸操作，在快速连续点击时可能无法正确触发 `active` 状态。

**修复建议**:
考虑添加 `touchstart` 事件或使用 CSS `:active` 伪类。

---

## 四、性能

### 1. [中] 动态样式注入性能问题
**位置**: 每个页面渲染函数内

**问题描述**:
每个页面渲染函数都通过 `document.head.appendChild(style)` 动态注入样式。页面切换时样式累积增加，没有清理机制。

**修复建议**:
- 将所有共享样式移到 index.html 中
- 页面特定样式使用唯一的 style id，重复注入前先移除

### 2. [中] 图片资源未使用 CDN 加速
**位置**: 所有本地图片路径

**问题描述**:
所有图片资源从同一域名加载，没有使用 CDN 加速。用户在地理位置较远时加载缓慢。

**修复建议**:
将图片资源部署到 CDN。

### 3. [中] generateImageUrl 没有缓存策略
**位置**: `generateImageUrl()` (line 11-14)

**问题描述**:
每次调用都生成新的 URL，相同 prompt 的图片不会被缓存。

**修复建议**:
添加图片 URL 缓存：
```javascript
const imageCache = new Map();

function generateImageUrl(prompt, size = 'square') {
  const cacheKey = `${prompt}-${size}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }
  // ... 生成 URL
  imageCache.set(cacheKey, url);
  return url;
}
```

### 4. [低] 动画性能优化不足
**位置**: `@keyframes fadeInUp`

**问题描述**:
动画使用 `transform` 和 `opacity`，但没有添加 `will-change` 提示浏览器优化。

**修复建议**:
```css
.page-transition-enter {
  will-change: transform, opacity;
  animation: pageFadeIn 0.4s ease-out forwards;
}
```

### 5. [低] Google Fonts 加载阻塞渲染
**位置**: `index.html` lines 10-11

**问题描述**:
字体加载使用阻塞式 link 标签，可能延迟首次渲染。

**修复建议**:
使用 `font-display: swap` 或预加载关键字体。

---

## 五、代码质量

### 1. [中] 重复代码块
**位置**: 多个问题页

**问题描述**:
多个问题页（Q1, Q2, Q4）有相同的选项选择逻辑代码。

**修复建议**:
提取为通用函数：
```javascript
function setupOptionSelection(containerSelector, onSelect) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.addEventListener('click', (e) => {
    const option = e.target.closest('.option-card, .option-item');
    if (!option) return;

    // 移除其他选中状态
    container.querySelectorAll('.selected').forEach(el => {
      el.classList.remove('selected');
    });

    // 添加当前选中状态
    option.classList.add('selected');
    onSelect(option.dataset.value);
  });
}
```

### 2. [低] CSS 类名命名不一致
**位置**: 全局

**问题描述**:
同时使用 `.option-card`, `.option-item`, `.palette-card`, `.brush-card` 等相似命名规则的类名。可以统一。

**修复建议**:
统一使用 `.selection-card` 或 `.option-card` 作为所有选项卡片的类名。

### 3. [低] 魔法数字
**位置**: 多处

**问题描述**:
代码中存在硬编码的数字，如 `0.5秒` (line 978), `100dvh` 等。

**修复建议**:
提取为常量：
```javascript
const ANIMATION_DELAY_MS = 500;
const TRANSITION_DURATION_MS = 400;
```

---

## 六、问题汇总表

| # | 类别 | 问题 | 严重性 | 位置 |
|---|------|------|--------|------|
| 1 | 稳定性 | localStorage 操作缺少错误处理 | 高 | 全局 |
| 2 | 稳定性 | isTransitioning 重复定义冲突 | 高 | Line 954, 1270, 1979 |
| 3 | 稳定性 | setTimeout 内存泄漏风险 | 中 | Lines 376-410 |
| 4 | 稳定性 | selectOption 函数定义冲突 | 中 | 多处 |
| 5 | 安全 | 外部 API URL 可信度问题 | 高 | Line 13 |
| 6 | 安全 | URL 参数编码不完整 | 中 | Line 11-14 |
| 7 | 安全 | 动态图片缺少 fallback | 中 | styleOptions 等 |
| 8 | 安全 | 图片 onerror 处理不健壮 | 低 | Line 3029 |
| 9 | 兼容 | CSS @keyframes 缺少前缀 | 中 | 全局 |
| 10 | 兼容 | flexbox 旧版兼容性 | 中 | 全局 |
| 11 | 兼容 | dvh 单位兼容性 | 低 | 多处 |
| 12 | 兼容 | 触摸事件处理 | 低 | 多个点击元素 |
| 13 | 性能 | 动态样式注入累积 | 中 | 每个页面函数 |
| 14 | 性能 | 图片未使用 CDN | 中 | 所有图片 |
| 15 | 性能 | generateImageUrl 无缓存 | 中 | Line 11-14 |

---

## 七、修复优先级建议

### 第一批（立即修复）
1. 修复 isTransitioning 重复定义冲突
2. 为 localStorage 操作添加错误处理
3. 调查并解决外部 API URL 可信度问题

### 第二批（本周修复）
4. 添加 CSS 浏览器前缀
5. 实现动态样式注入的清理机制
6. 修复 URL 参数编码不完整问题
7. 为动态图片添加 fallback

### 第三批（后续迭代）
8. 优化 generateImageUrl 缓存策略
9. 提取重复代码为通用函数
10. 添加触摸事件优化

---

## 八、结论

Cross Stitch 项目整体代码结构清晰，UI/UX 设计良好。主要问题集中在：

1. **安全性**：外部 API 的可信度需要确认，URL 参数编码需要完善
2. **稳定性**：动画状态管理和 localStorage 错误处理需要加强
3. **兼容性**：CSS 前缀和移动端特殊单位需要补充

建议按照上述优先级分批修复，确保不影响现有功能和用户体验。