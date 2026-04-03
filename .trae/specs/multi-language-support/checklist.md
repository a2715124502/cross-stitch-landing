# 多语言适配 - 验证清单

## i18n 核心模块验证

- [ ] Checkpoint 1: `/src/i18n/translator.js` 文件存在
- [ ] Checkpoint 2: `t(key)` 函数正确返回翻译文本
- [ ] Checkpoint 3: `setLanguage(lang)` 函数正确切换语言
- [ ] Checkpoint 4: localStorage 正确保存和恢复语言设置

## 翻译文件验证

- [ ] Checkpoint 5: `/src/locales/en.json` 存在且格式正确
- [ ] Checkpoint 6: `/src/locales/zh-TW.json` 存在且格式正确
- [ ] Checkpoint 7: `/src/locales/zh-CN.json` 存在且格式正确
- [ ] Checkpoint 8: `/src/locales/fr.json` 存在且格式正确
- [ ] Checkpoint 9: `/src/locales/de.json` 存在且格式正确
- [ ] Checkpoint 10: `/src/locales/it.json` 存在且格式正确
- [ ] Checkpoint 11: `/src/locales/pt.json` 存在且格式正确
- [ ] Checkpoint 12: `/src/locales/es.json` 存在且格式正确
- [ ] Checkpoint 13: `/src/locales/ru.json` 存在且格式正确
- [ ] Checkpoint 14: `/src/locales/tr.json` 存在且格式正确
- [ ] Checkpoint 15: `/src/locales/ja.json` 存在且格式正确
- [ ] Checkpoint 16: `/src/locales/ko.json` 存在且格式正确
- [ ] Checkpoint 17: `/src/locales/id.json` 存在且格式正确
- [ ] Checkpoint 18: 所有翻译文件包含相同的 key 结构

## 页面文本验证

- [ ] Checkpoint 19: 引导页1 所有文本使用 `t()` 函数
- [ ] Checkpoint 20: 引导页2 所有文本使用 `t()` 函数
- [ ] Checkpoint 21: 引导页3 所有文本使用 `t()` 函数
- [ ] Checkpoint 22: 问题页1（性别）所有文本使用 `t()` 函数
- [ ] Checkpoint 23: 问题页2（年龄）所有文本使用 `t()` 函数
- [ ] Checkpoint 24: 问题页3（风格）所有文本使用 `t()` 函数
- [ ] Checkpoint 25: 问题页4（目标）所有文本使用 `t()` 函数
- [ ] Checkpoint 26: 问题页5（调色板）所有文本使用 `t()` 函数
- [ ] Checkpoint 27: 问题页6（笔刷）所有文本使用 `t()` 函数
- [ ] Checkpoint 28: 订阅页所有文本使用 `t()` 函数

## 功能验证

- [ ] Checkpoint 29: 默认语言为英文
- [ ] Checkpoint 30: 语言切换后所有页面文本更新
- [ ] Checkpoint 31: 刷新页面后语言设置保持
- [ ] Checkpoint 32: 切换到所有12种语言后无错误

## 显示效果验证

- [ ] Checkpoint 33: 英文显示正常
- [ ] Checkpoint 34: 中文（繁體/簡體）显示正常
- [ ] Checkpoint 35: 日语显示正常（CJK字符）
- [ ] Checkpoint 36: 韩语显示正常（CJK字符）
- [ ] Checkpoint 37: 俄语显示正常（西里尔字符）
- [ ] Checkpoint 38: 土耳其语显示正常（特殊字符）
- [ ] Checkpoint 39: 德语长词显示正常（界面不溢出）

## HTML 验证

- [ ] Checkpoint 40: `<html lang="...">` 属性存在
- [ ] Checkpoint 41: lang 属性随语言切换更新

## 翻译准确性验证

- [ ] Checkpoint 42: 产品名 "Cross Stitch" 在所有语言中保持不变
- [ ] Checkpoint 43: 翻译文本语法正确
- [ ] Checkpoint 44: 翻译文本长度适合 UI 容器

## 向后兼容性验证

- [ ] Checkpoint 45: 不改变页面布局
- [ ] Checkpoint 46: 不改变功能流程
- [ ] Checkpoint 47: 不改变 API 调用逻辑
