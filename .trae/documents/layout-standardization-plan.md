# 页面布局规范化计划

## 任务概述
对所有页面进行系统性的布局规范化调整，在保持功能完整性的前提下实现视觉统一性。

## 严格限制
- 维持现有页面的DOM结构层级关系与元素排列顺序不变（最外层容器添加除外）
- 完整保留所有视觉元素与功能组件
- 确保所有用户交互功能、数据展示逻辑及业务流程不受影响
- 兼容现有所有浏览器及设备尺寸

## 布局统一目标

### 1. 容器宽度约束
- 所有内容元素被约束在统一容器宽度内
- 跨页面视觉对齐

### 2. 左右留白一致性
- 页面左右两侧留白空间保持均匀一致
- padding: 0 20px

### 3. 按钮与卡片宽度统一
- 所有按钮组件与卡片元素保持统一宽度规格
- width: 100%

### 4. 上下间距标准化
- 页头、内容区、页脚间距需统一
- margin-top/margin-bottom 使用 16px 或 24px

### 5. 垂直间距规范
- 严格遵循 16px/24px 的节奏规范
- 避免间距混乱

## 技术实现方案

### 步骤1：创建 page-container 样式
在CSS中添加：
```css
.page-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}
```

### 步骤2：修改 main-content 样式
统一所有 `.main-content` 样式：
```css
.main-content {
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  margin-top: 56px;
  padding-bottom: 100px;
  flex: 1;
  box-sizing: border-box;
}
```

### 步骤3：统一垂直间距
调整各元素间距：
- `.headline-section { margin-bottom: 24px; }`
- `.selection-cards { gap: 16px; }`
- `.options-list { gap: 16px; }`
- `.style-grid { gap: 16px; }`
- `.palette-grid { gap: 16px; }`

### 步骤4：为页面添加 page-container 容器
在每个页面的最外层 div 添加 `page-container` 类

## 受影响的页面
1. 问题1 - 你的性别是什么？
2. 问题2 - 你的年龄组是什么？
3. 问题3 - 哪种风格最能激励你？
4. 问题4 - 你的目标是什么？
5. 问题5 - 哪些调色板最能引起你的共鸣？
6. 刷子选择页面 - 你最期待尝试哪些刷子？

## 实施步骤

1. **创建全局 page-container CSS 样式**
   - 添加 max-width: 400px
   - 添加 margin: 0 auto
   - 添加 padding: 0 20px

2. **统一所有 .main-content 样式**
   - 修改4处 .main-content CSS 定义
   - 移除内联样式中的 padding/margin

3. **统一垂直间距**
   - 使用 16px 或 24px 作为标准间距
   - 调整 headline-section, cards, grids 等间距

4. **添加 page-container 容器**
   - 在每个页面最外层 div 添加类名

## 测试验证

1. **屏幕尺寸测试**
   - 移动设备 (375px)
   - 平板 (768px)
   - 桌面 (1024px+)

2. **功能测试**
   - 按钮点击
   - 卡片选择
   - 页面导航

3. **视觉验证**
   - 容器宽度一致性
   - 左右留白均匀性
   - 垂直间距符合 16px/24px 规范