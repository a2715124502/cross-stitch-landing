# Checklist - 统一页面容器布局规范验证

## CSS 样式类验证
- [ ] .page-container 样式正确定义（max-width: 400px, margin: 0 auto, padding: 0 20px）
- [ ] .main-content 样式正确定义（width: 100%, padding: 0 20px, margin-top: 56px, padding-bottom: 100px）
- [ ] .header-section 和 .headline-section 样式正确定义（margin-bottom: 24px）
- [ ] .palette-grid 和 .style-grid 样式正确定义（gap: 16px, grid 2列）
- [ ] .brush-grid 样式正确定义（gap: 16px, grid 2列）

## 问题1页面验证
- [ ] question-page-1 使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2.main-title 不包含内联 font-size 样式
- [ ] headline-section 结构正确包裹标题

## 问题2页面验证
- [ ] question-page-2 使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2.main-title 不包含内联 font-size 样式
- [ ] header-section 结构正确

## 问题3页面验证
- [ ] question-page-3 使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2.main-title 不包含内联 font-size 样式
- [ ] style-grid 使用统一类

## 问题4页面验证
- [ ] question-page-4 使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2.main-title 不包含内联 font-size 样式
- [ ] header-section 结构正确

## 调色盘选择页面验证
- [ ] 页面使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2.main-title 使用统一类
- [ ] palette-grid 使用统一类

## 笔刷选择页面验证
- [ ] 页面使用 page-container 类
- [ ] main.main-content 不包含内联布局样式
- [ ] h2 使用统一类
- [ ] brush-grid 使用统一类

## 视觉一致性验证
- [ ] 所有页面容器宽度一致
- [ ] 所有页面左右边距一致
- [ ] 所有页面标题区间距一致
- [ ] 所有页面选项列表间距一致

## 响应式验证
- [ ] 移动设备 (375px) 布局正确
- [ ] 平板设备 (768px) 布局正确
- [ ] 桌面设备 (1024px+) 布局正确

## 功能验证
- [ ] 页面导航功能正常
- [ ] 选项选择功能正常
- [ ] 按钮点击功能正常