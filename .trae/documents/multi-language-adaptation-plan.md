# 多语言文档适配方案实施计划

## 项目概述
将网页应用的所有可见文案翻译成12种目标语言，并实现语言切换功能，确保界面布局在各种语言下都能正常显示。

## 目标语言列表
1. 繁體中文 (zh-TW)
2. English (en)
3. French (fr)
4. German (de)
5. Indonesian (id)
6. Italian (it)
7. Japanese (ja)
8. Korean (ko)
9. Portuguese (pt)
10. Russian (ru)
11. Spanish (es)
12. Turkish (tr)

## 实施阶段

### 阶段1：文案提取与分析
**步骤1.1**: 提取所有可见文案
- 扫描 index.html 和 main.js 中的所有文本内容
- 识别动态文案（JavaScript 中的字符串）
- 识别静态文案（HTML 中的文本节点）

**步骤1.2**: 文案分类
- 导航文案：返回、跳过、继续等
- 问题文案：问题标题、选项描述
- 订阅文案：定价、条款、按钮文案
- 引导页文案：欢迎语、功能介绍

**步骤1.3**: 建立文案清单
- 创建 spreadsheet 或文档记录所有需要翻译的文案
- 标注文案ID和上下文（用于翻译准确性）

### 阶段2：技术架构设计
**步骤2.1**: 选择i18n方案
- 推荐方案：vue-i18n 风格的对象结构
- 备选方案：JSON 语言文件 + JavaScript 加载器

**步骤2.2**: 文件结构设计
```
/src
  /locales
    - en.json
    - zh-TW.json
    - fr.json
    - de.json
    - id.json
    - it.json
    - ja.json
    - ko.json
    - pt.json
    - ru.json
    - es.json
    - tr.json
  /i18n
    - index.js (i18n 核心配置)
    - translator.js (翻译函数)
```

**步骤2.3**: 数据结构设计
```javascript
// 示例翻译文件结构
{
  "common": {
    "back": "Back",
    "skip": "Skip",
    "continue": "Continue",
    "next": "Next"
  },
  "onboarding": {
    "welcome": "Welcome to Cross Stitch",
    "subtitle": "Relax and unleash your creativity"
  },
  "questions": {
    "q1_title": "Which style inspires you?",
    "q1_option1": "Animals"
  },
  "subscription": {
    "choose_plan": "Choose your plan",
    "weekly": "Weekly",
    "yearly": "Yearly",
    "best_value": "Best Value"
  }
}
```

### 阶段3：翻译执行
**步骤3.1**: 建立翻译模板
- 提取所有文案为key-value格式
- 添加翻译备注和上下文说明

**步骤3.2**: 分发翻译任务
- 建议使用专业翻译工具或服务
- 或使用AI辅助翻译后人工审核

**步骤3.3**: 翻译审核
- 校对术语一致性
- 检查文化适应性
- 验证文本长度适应性

### 阶段4：代码集成
**步骤4.1**: 创建i18n核心模块
```javascript
// translator.js
const translations = {
  en: { ... },
  zh-TW: { ... },
  // ... 其他语言
};

let currentLang = 'en';

function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('app_language', lang);
  updatePageTranslations();
}
```

**步骤4.2**: 修改页面渲染函数
- 将硬编码文本替换为 `t('key')` 调用
- 确保所有动态文案通过翻译函数获取

**步骤4.3**: 实现语言切换UI
- 在设置或导航中添加语言选择器
- 支持下拉菜单或国旗图标选择

### 阶段5：界面适配
**步骤5.1**: 文本溢出处理
- 使用 `text-overflow: ellipsis` 处理超长文本
- 设置 `max-width` 和 `word-break: break-word`

**步骤5.2**: 响应式文本容器
- 允许文本换行
- 调整字体大小断点

**步骤5.3**: 长文本语言特殊处理
- 德语等长词语言：增加容器宽度
- 日语/韩语：确保正确对齐

### 阶段6：性能优化
**步骤6.1**: 按需加载
- 初始加载默认语言
- 其他语言延迟加载

**步骤6.2**: 资源压缩
- 压缩JSON翻译文件
- 启用Gzip压缩

**步骤6.3**: 缓存策略
- 使用localStorage缓存已加载的语言
- 设置语言文件缓存时间

### 阶段7：测试与验证
**步骤7.1**: 功能测试
- 验证所有12种语言的正确显示
- 测试语言切换功能
- 验证页面状态保持

**步骤7.2**: 视觉测试
- 验证各语言下界面布局
- 检查文本溢出和换行
- 验证不同屏幕尺寸

**步骤7.3**: 兼容性测试
- Chrome、Firefox、Safari、Edge
- iOS、Android移动设备
- 不同屏幕尺寸

### 阶段8：文档交付
**步骤8.1**: 集成文档
- 翻译文件结构说明
- i18n API 使用说明
- 新增文案流程

**步骤8.2**: 维护指南
- 如何添加新语言
- 如何更新翻译
- 翻译审核流程

**步骤8.3**: 测试报告
- 功能测试结果
- 视觉测试截图
- 性能测试数据

## 时间估算
- 阶段1-2：2-3天
- 阶段3：3-5天（取决于翻译量）
- 阶段4：2-3天
- 阶段5：1-2天
- 阶段6：1天
- 阶段7：2-3天
- 阶段8：1-2天

总计：约12-19个工作日

## 关键风险点
1. 翻译质量一致性
2. 长文本语言界面适配
3. 动态内容翻译覆盖完整性
4. 维护流程建立

## 建议工具
- 翻译管理：Crowdin、Lokalise
- AI辅助翻译：DeepL、Google Translate
- 版本控制：Git（用于翻译文件）
