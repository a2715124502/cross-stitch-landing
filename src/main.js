import {
  t,
  applyLocaleMeta,
  setLocaleChangeHandler,
  attachI18nWindowHandlers,
  initLanguageSwitcherUi,
  splitStatTranslation,
  styleListSeparator,
  getLanguageMenuMarkup,
  getCurrentLocale
} from './i18n/index.js';

// 页面状态管理
let currentPage = 0;
const totalPages = 9;
let isTransitioning = false;

let completedQuestions = 0;
const totalQuestions = 4;

// 存储用户选择的风格
let selectedStyles = [];

const progressStore = {
  completedQuestions: 0,
  totalQuestions: 4,
  save() {
    try {
      localStorage.setItem('crossstitch_progress', JSON.stringify({
        completedQuestions: this.completedQuestions
      }));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  },
  load() {
    try {
      const saved = localStorage.getItem('crossstitch_progress');
      if (saved) {
        const data = JSON.parse(saved);
        this.completedQuestions = data.completedQuestions || 0;
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
  }
};

// 图片URL缓存
const imageUrlCache = new Map();
const MAX_CACHE_SIZE = 50;

// 生成图片URL的函数
function generateImageUrl(prompt, size = 'square') {
  const cacheKey = `${prompt}-${size}`;

  if (imageUrlCache.has(cacheKey)) {
    return imageUrlCache.get(cacheKey);
  }

  const encodedPrompt = encodeURIComponent(prompt);
  const encodedSize = encodeURIComponent(size);
  const url = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=${encodedSize}`;

  if (imageUrlCache.size >= MAX_CACHE_SIZE) {
    const firstKey = imageUrlCache.keys().next().value;
    imageUrlCache.delete(firstKey);
  }
  imageUrlCache.set(cacheKey, url);

  return url;
}

// 共享CSS样式 - 统一类定义
const sharedStyles = `
  .page-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .main-content {
    width: 100%;
    max-width: 400px;
    padding: 20px 0;
    margin-top: 56px;
    padding-bottom: 100px;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    box-sizing: border-box;
  }

  .main-content::-webkit-scrollbar {
    display: none;
  }

  .header-section,
  .headline-section {
    margin-bottom: 24px;
  }

  /*
   * 问题页 1-4 的 main-content 自带 20px 顶部内边距。
   * 让粘性标题头向上覆盖这段区域，避免滚动时从导航栏和标题之间的缝隙看到下方选项。
   */
  .question-sticky-header {
    position: sticky;
    top: -20px;
    z-index: 10;
    background-color: #FFFFFF;
    padding-top: 28px;
  }

  .main-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 8px;
    color: #000000;
    white-space: nowrap;
    overflow: visible;
    width: 100%;
    text-align: center;
  }

  /* 非中文/繁中：拉丁字母用系统/SF，字重略重于默认 bold，避免过粗 */
  html:not([lang='zh-CN']):not([lang='zh-TW']) .bottom-button,
  html:not([lang='zh-CN']):not([lang='zh-TW']) .next-button,
  html:not([lang='zh-CN']):not([lang='zh-TW']) .continue-button {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', sans-serif !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em;
  }

  .back-icon {
    width: 24px;
    height: 24px;
    display: block;
  }

  .palette-grid,
  .style-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    max-width: 400px;
    margin: 0 auto;
  }

  .brush-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

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

  @keyframes fadeOutUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-50px);
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeOutUp {
    from {
      -webkit-transform: translateY(0);
      opacity: 1;
    }
    to {
      -webkit-transform: translateY(-50px);
      opacity: 0;
    }
  }

  /* 进度条样式 */
  .progress-bar-container {
    flex: 1;
    margin: 0 12px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .progress-bar-wrapper {
    position: relative;
    height: 6px;
    width: 100%;
    background-color: #EEEEEE;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    width: 0%;
    background-color: #FED11F;
    border-radius: 4px;
    transition: width 0.4s ease-in-out;
  }

  /* 阿拉伯语：整体布局保持 LTR，避免返回箭头、进度条、勾选、卡片角标位置被镜像 */
  html[dir='rtl'] .page-container,
  html[dir='rtl'] .main-content,
  html[dir='rtl'] .subscription-content-container,
  html[dir='rtl'] .subscription-page,
  html[dir='rtl'] .trial-intro-page,
  html[dir='rtl'] .bottom-action {
    direction: ltr;
  }

  html[dir='rtl'] .top-nav {
    direction: ltr;
  }

  /* 引导页1 / 加载页等：根 .container 强制 LTR，避免第二屏统计行 flex 镜像导致两侧装饰 icon 对调 */
  html[dir='rtl'] .container {
    direction: ltr;
  }

  /* 统计行内阿拉伯说明仍按 RTL 排版，居中 */
  html[dir='rtl'] #statContainer .subtitle {
    direction: rtl;
    unicode-bidi: isolate;
    text-align: center;
  }

  /* 问题页：标题、副标题、选项文案右对齐 + 阿拉伯语排版 */
  html[dir='rtl'] .question-page-1 .main-title,
  html[dir='rtl'] .question-page-2 .main-title,
  html[dir='rtl'] .question-page-3 .main-title,
  html[dir='rtl'] .question-page-4 .main-title,
  html[dir='rtl'] .question-page-5 .main-title,
  html[dir='rtl'] .question-page-6 .main-title {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .question-page-1 .subtitle,
  html[dir='rtl'] .question-page-2 .subtitle,
  html[dir='rtl'] .question-page-3 .subtitle,
  html[dir='rtl'] .question-page-4 .subtitle,
  html[dir='rtl'] .question-page-5 .subtitle,
  html[dir='rtl'] .question-page-6 .subtitle {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .option-text {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .label-text {
    direction: rtl;
    unicode-bidi: isolate;
  }

  /* 订阅页文案（价格列等布局仍为 LTR） */
  html[dir='rtl'] .subscription-card > span:first-child,
  html[dir='rtl'] .subscription-card-left,
  html[dir='rtl'] .subscription-card-left > span,
  html[dir='rtl'] .best-value-badge {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .subscription-card-left .best-value-badge {
    text-align: center;
  }

  html[dir='rtl'] .subscription-card-right > span {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .subscription-content-container h2.subscription-title,
  html[dir='rtl'] .subscription-content-container p.subscription-description,
  html[dir='rtl'] .subscription-legal-text {
    direction: rtl;
    unicode-bidi: isolate;
    text-align: center;
  }

  html[dir='rtl'] .trial-intro-page .page-title {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .trial-intro-page .timeline-title,
  html[dir='rtl'] .trial-intro-page .timeline-description {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .language-menu-item {
    direction: rtl;
    text-align: right;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .bottom-button,
  html[dir='rtl'] .continue-button,
  html[dir='rtl'] .next-button {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] #text1 .title,
  html[dir='rtl'] #text1 .subtitle,
  html[dir='rtl'] #testimonialContainer .title,
  html[dir='rtl'] #testimonialContainer .subtitle {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .onboarding-page-2 .main-title,
  html[dir='rtl'] .onboarding-page-2 .subtitle,
  html[dir='rtl'] .onboarding-page-3 .main-title,
  html[dir='rtl'] .onboarding-page-3 .subtitle {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] .onboarding-page-4 h1,
  html[dir='rtl'] .onboarding-page-4 p {
    direction: rtl;
    unicode-bidi: isolate;
  }

  html[dir='rtl'] #loadingText1,
  html[dir='rtl'] #loadingText2,
  html[dir='rtl'] #loadingText3 {
    direction: rtl;
    unicode-bidi: isolate;
  }
`;

// 注入共享样式
const injectedPageStyles = new Set();

function injectSharedStyles() {
  const styleId = 'shared-unified-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = sharedStyles;
    document.head.appendChild(style);
  }
}

function injectPageStyle(styleId, styleContent) {
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = styleContent;
  document.head.appendChild(style);
  injectedPageStyles.add(styleId);
}

function cleanupPageStyles() {
  injectedPageStyles.forEach(styleId => {
    const style = document.getElementById(styleId);
    if (style) {
      style.remove();
    }
  });
  injectedPageStyles.clear();
}

// 页面加载时注入共享样式
injectSharedStyles();

// 生成进度条HTML
// questionNumber: 当前问题编号（1-6），用于在用户完成后计算进度
// initialLoad: 是否为初始加载（首次加载时不显示进度，等用户选择后再更新）
function generateProgressBar(questionNumber, initialLoad = false) {
  const percentage = Math.round((completedQuestions / totalQuestions) * 100);
  
  return `
    <div class="progress-bar-container" role="progressbar" aria-label="${t('common.quizProgress')}" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar-wrapper">
        <div class="progress-bar-fill" data-question="${questionNumber}" style="width: ${percentage}%"></div>
      </div>
    </div>
  `;
}

// 更新进度条宽度（带动画效果）
function updateProgressBar(questionNumber) {
  // 根据问题编号更新已完成数量
  if (questionNumber >= completedQuestions) {
    completedQuestions = questionNumber;
  }
  
  const progressBarFill = document.querySelector('.progress-bar-fill');
  if (progressBarFill) {
    const percentage = Math.round((completedQuestions / totalQuestions) * 100);
    progressBarFill.style.width = percentage + '%';
  }
}

// 风格选项
const styleOptions = [
  { id: 'animals', label: '动物', image: generateImageUrl('cute animals cross stitch pattern') },
  { id: 'comics', label: '漫画', image: generateImageUrl('comic book cross stitch pattern') },
  { id: 'people', label: '人们', image: generateImageUrl('people cross stitch pattern') },
  { id: 'cute', label: '可爱', image: generateImageUrl('cute cartoon cross stitch pattern') },
  { id: 'food', label: '食物', image: generateImageUrl('food cross stitch pattern') },
  { id: 'mandala', label: '曼茶罗', image: generateImageUrl('mandala cross stitch pattern') },
  { id: 'flowers', label: '花', image: generateImageUrl('flower cross stitch pattern') },
  { id: 'simple', label: '简单', image: generateImageUrl('simple cross stitch pattern') }
];

// 调色板选项
const paletteOptions = [
  { id: 'basic', label: '基础', image: generateImageUrl('basic color palette for cross stitch') },
  { id: 'skin', label: '肤色', image: generateImageUrl('skin tone color palette for cross stitch') },
  { id: 'makeup', label: '化妆', image: generateImageUrl('makeup color palette for cross stitch') },
  { id: 'galaxy', label: '银河', image: generateImageUrl('galaxy color palette for cross stitch') },
  { id: 'fabric', label: '织物', image: generateImageUrl('fabric color palette for cross stitch') },
  { id: 'lips', label: '嘴唇', image: generateImageUrl('lip color palette for cross stitch') },
  { id: 'rainbow', label: '彩虹', image: generateImageUrl('rainbow color palette for cross stitch') },
  { id: 'sky', label: '天空', image: generateImageUrl('sky color palette for cross stitch') }
];

// 笔刷选项
const brushOptions = [
  { id: 'small', label: '小刷子', image: generateImageUrl('small brush for cross stitch') },
  { id: 'big', label: '大刷子', image: generateImageUrl('big brush for cross stitch') },
  { id: 'spray', label: '喷雾', image: generateImageUrl('spray brush for cross stitch') },
  { id: 'watercolor', label: '水彩画', image: generateImageUrl('watercolor brush for cross stitch') },
  { id: 'ballpoint', label: '圆珠笔', image: generateImageUrl('ballpoint pen for cross stitch') },
  { id: 'pencil', label: '铅笔', image: generateImageUrl('pencil for cross stitch') },
  { id: 'pastel', label: '粉彩', image: generateImageUrl('pastel for cross stitch') },
  { id: 'splash', label: '飞溅', image: generateImageUrl('splash brush for cross stitch') }
];

// 页面过渡动画 CSS
const transitionStyles = document.createElement('style');
transitionStyles.textContent = `
  .page-transition-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .page-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  .page-content.slide-out-left {
    animation: slideOutLeft 350ms ease-in-out forwards;
  }

  .page-content.slide-in-right {
    animation: slideInRight 350ms ease-in-out forwards;
  }

  .page-content.slide-out-right {
    animation: slideOutRight 350ms ease-in-out forwards;
  }

  .page-content.slide-in-left {
    animation: slideInLeft 350ms ease-in-out forwards;
  }

  @keyframes slideOutLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0.8;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0.8;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(transitionStyles);

// 渲染当前页面
function renderPage(animate = true) {
  const app = document.getElementById('app');
  const meshBg = document.getElementById('meshGradientBg');

  cleanupPageStyles();
  app.innerHTML = '';
  
  switch(currentPage) {
    case 0:
      renderOnboardingPage1();
      break;
    case 1:
      renderOnboardingPage2();
      break;
    case 2:
      renderOnboardingPage3();
      break;
    case 3:
      renderQuestionPage1();
      break;
    case 4:
      renderQuestionPage2();
      break;
    case 5:
      renderQuestionPage3();
      break;
    case 6:
      renderQuestionPage4();
      break;
    case 7:
      renderOnboardingPage5();
      break;
    case 8:
      renderTrialIntroPage();
      break;
    case 9:
      renderSubscriptionPage();
      break;
  }
  
  // 只为引导页1-3和介绍页添加过渡动画
  if (animate && (currentPage === 0 || currentPage === 1 || currentPage === 2 || currentPage === 8)) {
    addPageEnterAnimation();
  }

  applyLocaleMeta();
}

// 为页面容器添加进入动画
function addPageEnterAnimation() {
  const app = document.getElementById('app');
  const firstChild = app.firstElementChild;
  if (firstChild) {
    firstChild.classList.add('page-transition-enter');
  }
}

// 文字动画序列定时器ID存储
let animationTimerIds = [];

function clearAnimationTimers() {
  animationTimerIds.forEach(timerId => clearTimeout(timerId));
  animationTimerIds = [];
}

// 引导页1 - 产品介绍
function renderOnboardingPage1() {
  clearAnimationTimers();

  const app = document.getElementById('app');
  
  const statDl = splitStatTranslation(t('onboarding.page1.totalDownloads'));
  const statHa = splitStatTranslation(t('onboarding.page1.happyArtists'));

  // 创建组件的辅助函数
  const createStatComponent = (value, subtitle) => `
    <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin: 0 auto;">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#CCCCCC" d="M554.92 162.9c10.18 10.44 32.76 7.23 59.24-8.41 26.48-15.64 52.83-41.34 69.14-67.42 16.3-26.08 20.07-48.57 9.89-59.01-10.18-10.44-32.76-7.23-59.24 8.41-26.48 15.65-52.83 41.35-69.14 67.43-16.3 26.08-20.07 48.57-9.89 59z m0 0M494.33 262.41c2.97 14.28 23.73 23.71 54.47 24.76 30.74 1.05 66.78-6.45 94.55-19.67 27.77-13.22 43.04-30.16 40.07-44.44-2.97-14.27-23.73-23.71-54.47-24.76-30.74-1.05-66.78 6.45-94.55 19.67-27.77 13.23-43.04 30.17-40.07 44.44z m0 0M424.36 150.64c2.56 34.4 12.68 65.62 26.55 81.89 13.87 16.27 29.38 15.11 40.69-3.03 11.31-18.14 16.7-50.51 14.14-84.92-2.56-34.41-12.68-65.62-26.55-81.89-13.87-16.27-29.38-15.11-40.69 3.03-11.31 18.14-16.7 50.51-14.14 84.92z m0 0M426.3 401.09c5.03 13.68 26.95 19.98 57.51 16.51 30.56-3.46 65.11-16.17 90.64-33.32s38.16-36.14 33.12-49.82c-5.03-13.69-26.95-19.98-57.51-16.51-30.56 3.46-65.12 16.17-90.64 33.32-25.52 17.14-38.15 36.13-33.12 49.82z m0 0M341.03 302.08c11.71 52.03 39.03 90.2 61.01 85.26 21.98-4.95 30.31-51.14 18.6-103.17-11.71-52.03-39.03-90.2-61.01-85.25-21.98 4.94-30.31 51.13-18.6 103.16z m0 0M425.92 566.28c9.45 11.09 32.2 9.41 59.67-4.43s55.48-37.71 73.49-62.65c18.01-24.93 23.28-47.12 13.82-58.21-9.46-11.1-32.2-9.41-59.67 4.42s-55.48 37.72-73.49 62.65c-18.01 24.93-23.28 47.13-13.82 58.22z m0 0M311.48 502.97c29.01 44.75 67.85 71.1 86.76 58.84 18.91-12.26 10.72-58.47-18.28-103.23-29.01-44.76-67.85-71.1-86.76-58.84-18.92 12.26-10.73 58.48 18.28 103.23z m0 0M475.69 723.78c12.67 7.21 33.48-2.12 54.59-24.48 21.11-22.36 39.32-54.36 47.76-83.93 8.44-29.57 5.84-52.23-6.83-59.44-12.67-7.21-33.48 2.12-54.59 24.48-21.11 22.36-39.32 54.36-47.76 83.93-8.45 29.58-5.84 52.24 6.83 59.44z m0 0M346.24 702.24c42.51 32.21 88.01 43.75 101.61 25.79 13.61-17.96-9.82-58.63-52.34-90.83-42.51-32.21-88.01-43.75-101.61-25.78-13.61 17.95 9.82 58.62 52.34 90.82z m0 0M584.76 856.77c22.39 2.57 45.48-38.29 51.57-91.27 6.09-52.98-7.11-98.02-29.5-100.6-22.39-2.57-45.48 38.29-51.57 91.27-6.09 52.99 7.11 98.02 29.5 100.6z m0 0M457.99 889.39c51.73 12.96 98.11 5.74 103.58-16.12 5.48-21.86-32.02-50.08-83.76-63.04s-98.11-5.74-103.59 16.12c-5.46 21.86 32.04 50.08 83.77 63.04z m0 0M658.45 851.41c6.05 52.99 29.1 93.87 51.49 91.32 22.39-2.55 35.64-47.59 29.59-100.57-6.05-52.99-29.1-93.87-51.49-91.31-22.39 2.55-35.64 47.57-29.59 100.56z m0 0M593.72 1001.97c34.5 0.59 66.51-6.63 83.98-18.96 17.47-12.32 17.73-27.88 0.7-40.8-17.03-12.92-48.78-21.25-83.28-21.84-34.5-0.59-66.51 6.63-83.98 18.96-17.47 12.32-17.73 27.88-0.7 40.8 17.04 12.92 48.78 21.24 83.28 21.84z m0 0"></path></svg>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #000000; line-height: 1.2; margin: 0;" class="title">${value}</h2>
        <p class="subtitle" style="margin: 0;">${subtitle}</p>
      </div>
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#CCCCCC" d="M371.99 124.79c38.21 37.27 81.95 54.39 97.7 38.24 15.74-16.14-2.46-59.45-40.68-96.71-38.21-37.27-81.96-54.39-97.7-38.25-15.75 16.16 2.47 59.46 40.68 96.72z m0 0M429.03 281.36c52.25 10.88 98.34 1.79 102.94-20.29 4.59-22.08-34.05-48.8-86.3-59.67-52.26-10.87-98.35-1.79-102.94 20.29-4.6 22.08 34.04 48.79 86.3 59.67z m0 0M551.57 243.35c22.49 1.67 43.94-40.12 47.89-93.35 3.96-53.23-11.06-97.73-33.55-99.41-22.49-1.67-43.94 40.12-47.89 93.35-3.96 53.23 11.06 97.73 33.55 99.41z m0 0M494.35 406.27c50.1 18.42 97.02 16.18 104.8-4.98 7.78-21.17-26.52-53.26-76.62-71.68-50.1-18.42-97.02-16.18-104.8 4.99-7.79 21.17 26.52 53.25 76.62 71.67z m0 0M623.46 387.55c14.23 3.21 31.43-11.8 45.12-39.37 13.68-27.57 21.78-63.52 21.23-94.29-0.55-30.78-9.66-51.71-23.9-54.91-14.23-3.2-31.43 11.81-45.12 39.38-13.68 27.57-21.77 63.52-21.22 94.29 0.55 30.77 9.65 51.7 23.89 54.9z m0 0M498.87 533.64c40.62 34.63 85.41 48.78 100.04 31.62 14.63-17.16-6.44-59.15-47.06-93.78-40.62-34.62-85.41-48.78-100.04-31.62-14.63 17.17 6.44 59.15 47.06 93.78z m0 0M626.62 560.34c12.24 7.94 33.57-0.19 55.96-21.31 22.39-21.13 42.43-52.05 52.57-81.11 10.14-29.06 8.84-51.85-3.4-59.79-12.24-7.94-33.57 0.19-55.96 21.31-22.39 21.13-42.43 52.04-52.57 81.11-10.15 29.07-8.85 51.86 3.4 59.79z m0 0M465.46 660.22c26.41 46.39 63.7 74.95 83.3 63.8 19.6-11.16 14.09-57.81-12.31-104.2s-63.69-74.95-83.29-63.8c-19.62 11.16-14.11 57.81 12.3 104.2z m0 0M576.22 728.09c8.81 11.63 31.63 11.26 59.87-0.98s57.61-34.49 77.05-58.36c19.43-23.87 25.98-45.74 17.16-57.37-8.81-11.63-31.63-11.26-59.88 0.98-28.24 12.24-57.61 34.49-77.04 58.36-19.43 23.87-25.97 45.74-17.16 57.37z m0 0M387.03 765.67c6.1 53.03 29.21 93.92 51.62 91.35 22.41-2.58 35.63-47.66 29.52-100.68-6.1-53.03-29.21-93.92-51.62-91.35-22.41 2.57-35.62 47.65-29.52 100.68z m0 0M463.17 872.94c3.54 14.15 24.69 22.75 55.47 22.56 30.78-0.19 66.52-9.15 93.75-23.5 27.24-14.35 41.82-31.9 38.28-46.05-3.55-14.16-24.69-22.75-55.47-22.56-30.78 0.19-66.52 9.15-93.75 23.5-27.24 14.34-41.83 31.89-38.28 46.05z m0 0M313.14 942.95c14.49 1.66 29.98-15.12 40.62-44 10.64-28.88 14.82-65.49 10.96-96.03-3.86-30.54-15.16-50.37-29.66-52.02-14.5-1.65-29.98 15.12-40.62 44-10.64 28.88-14.82 65.49-10.96 96.03 3.86 30.54 15.16 50.37 29.66 52.02z m0 0M332.44 962.8c0.25 14.59 18.91 27.75 48.93 34.53 30.03 6.78 66.87 6.14 96.64-1.67 29.78-7.81 47.96-21.61 47.71-36.2-0.25-14.59-18.9-27.75-48.93-34.52-30.03-6.78-66.87-6.14-96.64 1.67-29.78 7.8-47.97 21.6-47.71 36.19z m0 0"></path></svg>
    </div>
  `;  
  app.innerHTML = `
    <div class="container" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; height: 100dvh;">
      <div 
        id="text1"
        style="animation: fadeInUp 0.8s ease forwards; position: absolute; text-align: center; width: 100%; max-width: 335px;"
      >
        <h1 style="font-size: 32px; white-space: normal; margin-bottom: 8px; display: block; width: 100%; text-align: center !important; overflow-wrap: anywhere; word-break: break-word;" class="title">${t('onboarding.page1.title')}</h1>
        <p style="margin-top: 8px; text-align: center;" class="subtitle">${t('onboarding.page1.subtitle')}</p>
      </div>
      
      <div id="statContainer" style="opacity: 0; display: flex; flex-direction: column; align-items: center; gap: 72px; position: absolute; width: 100%; max-width: 335px;">
        <div id="stat1" style="opacity: 0; width: 100%;">
          ${createStatComponent(statDl.value, statDl.subtitle)}
        </div>
        <div id="stat2" style="opacity: 0; width: 100%;">
          ${createStatComponent(statHa.value, statHa.subtitle)}
        </div>
        <div id="stat3" style="opacity: 0; width: 100%;">
          ${createStatComponent('4.7+', 'Appstore')}
        </div>
      </div>
      
      <div id="testimonialContainer" style="opacity: 0; position: absolute; text-align: center; width: 100%; max-width: 335px;">
        <h1 style="font-size: 24px; white-space: normal; margin-bottom: 8px; line-height: 1.3;" class="title">${t('onboarding.page1.testimonial')}</h1>
        <p style="margin-top: 8px;" class="subtitle">${t('onboarding.page1.author')}</p>
      </div>
    </div>
  `;
  
  // 文字动画序列
  animationTimerIds.push(setTimeout(() => {
    const text1 = document.getElementById('text1');
    const statContainer = document.getElementById('statContainer');

    if (text1 && statContainer) {
      text1.style.animation = 'fadeOutUp 0.8s ease forwards';
      animationTimerIds.push(setTimeout(() => {
        statContainer.style.opacity = '1';
      }, 400));
    }
  }, 2000));

  // 三个组件依次出现 - 每个增加0.5秒延迟
  animationTimerIds.push(setTimeout(() => {
    const stat1 = document.getElementById('stat1');
    if (stat1) {
      stat1.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  }, 3100));

  animationTimerIds.push(setTimeout(() => {
    const stat2 = document.getElementById('stat2');
    if (stat2) {
      stat2.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  }, 3700));

  animationTimerIds.push(setTimeout(() => {
    const stat3 = document.getElementById('stat3');
    if (stat3) {
      stat3.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  }, 4300));

  // 所有组件统一消失 - 整体时间往后推迟
  animationTimerIds.push(setTimeout(() => {
    const stat1 = document.getElementById('stat1');
    const stat2 = document.getElementById('stat2');
    const stat3 = document.getElementById('stat3');
    const testimonialContainer = document.getElementById('testimonialContainer');
    
    if (stat1) stat1.style.animation = 'fadeOutUp 0.8s ease forwards';
    if (stat2) stat2.style.animation = 'fadeOutUp 0.8s ease forwards';
    if (stat3) stat3.style.animation = 'fadeOutUp 0.8s ease forwards';
    
    animationTimerIds.push(setTimeout(() => {
      if (testimonialContainer) {
        testimonialContainer.style.opacity = '1';
        testimonialContainer.style.animation = 'fadeInUp 0.8s ease forwards';
      }
      
      animationTimerIds.push(setTimeout(() => {
        if (testimonialContainer) {
          testimonialContainer.style.animation = 'fadeOutUp 0.8s ease forwards';
        }
        
        animationTimerIds.push(setTimeout(() => {
          currentPage = 1;
          renderPage();
        }, 800));
      }, 2000));
    }, 800));
  }, 5700));
}
function renderOnboardingPage2() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="onboarding-page-2">
      <!-- Fullscreen Background Image -->
      <main class="background-main">
        <img alt="Background illustration" class="background-image" src="/images/Gemini_Generated_Image_w6zdxow6zdxow6zd.png">
        <!-- Gradient Overlay for smooth transition -->
        <div class="gradient-overlay"></div>
      </main>
      <!-- Fixed Bottom Action Area -->
      <footer class="bottom-action">
        <div class="text-center mb-8 onboarding-text-block">
          <h1 style="font-size: 32px; animation: fadeInUp 0.6s ease forwards; white-space: normal; width: 100%; display: block; text-align: center !important; overflow-wrap: anywhere; word-break: break-word;" class="main-title">${t('onboarding.page2.title')}</h1>
          <p style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; font-size: 16px;" class="subtitle">${t('onboarding.page2.subtitle')}</p>
        </div>
        <div class="button-container">
          <button 
            style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;"
            class="bottom-button"
            onclick="nextPage()"
          >
            ${t('onboarding.page2.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .onboarding-page-2 {
      font-family: 'PingFang SC', 'SF Pro', 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      padding: 0;
      background-color: #FFFFFF;
      color: #000000;
      overflow: hidden;
      height: 100vh;
      height: 100dvh;
      width: 100%;
      position: relative;
    }

    .page-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .top-app-bar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      background-color: #FFFFFF;
    }
    
    .app-title {
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      opacity: 1;
    }
    
    .placeholder {
      width: 24px;
    }
    
    .background-main {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .onboarding-page-3 .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .gradient-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0,0,0,0.67) 0%, rgba(0,0,0,0.34) 50%, transparent 100%);
    }
    
    .text-center {
      text-align: center;
      margin-bottom: 32px;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .onboarding-page-2 .text-center.onboarding-text-block {
      gap: 8px;
      padding-top: 20px;
    }

    .onboarding-page-2 .text-center.onboarding-text-block .main-title {
      margin-bottom: 0;
    }

    .onboarding-page-2 .text-center.onboarding-text-block .subtitle {
      margin-top: 0;
    }
    
    .mb-8 {
      margin-bottom: 32px;
    }
    
    .main-title {
      font-size: 32px;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 1.2;
      margin-bottom: 8px;
      white-space: normal;
      overflow: visible;
      overflow-wrap: anywhere;
      word-break: break-word;
      width: 100%;
      text-align: center;
    }

    .onboarding-page-2 .main-title {
      display: block;
      width: 100%;
      text-align: center !important;
      margin-left: auto;
      margin-right: auto;
    }

    /* 英文等语言：PingFang 对拉丁字母字重差异不明显，改用系统/SF 字体才能看出加粗 */
    html:not([lang='zh-CN']):not([lang='zh-TW']) .onboarding-page-2 .main-title {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', sans-serif !important;
      font-weight: 800 !important;
      letter-spacing: -0.02em;
    }
    
    .subtitle {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.4;
      margin-top: 8px;
    }
    
    @keyframes fadeInUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    @keyframes fadeOutUp {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-50px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// 引导页3 - 引导用户进入个性化测试
function renderOnboardingPage3() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="onboarding-page-3">
      <!-- Fullscreen Background Image -->
      <main class="background-main">
        <img alt="Vibrant artistic collage" class="background-image" src="/images/Gemini_Generated_Image_ipgi7aipgi7aipgi.png" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
        <!-- Gradient Overlay for smooth transition to bottom content area -->
        <div class="gradient-overlay"></div>
      </main>
      <!-- Fixed Content at Bottom -->
      <footer class="bottom-action">
        <div class="text-center mb-8 onboarding-text-block">
          <h1 style="font-size: 32px; animation: fadeInUp 0.6s ease forwards; white-space: normal; width: 100%; display: block; text-align: center !important; overflow-wrap: anywhere; word-break: break-word;" class="main-title">${t('onboarding.page3.title')}</h1>
          <p style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; font-size: 16px;" class="subtitle">${t('onboarding.page3.subtitle')}</p>
        </div>
        <div class="button-container">
          <button 
            style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;"
            class="bottom-button"
            onclick="nextPage()"
          >
            ${t('onboarding.page3.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .onboarding-page-3 {
      font-family: 'PingFang SC', 'SF Pro', 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      padding: 0;
      background-color: #FFFFFF;
      color: #000000;
      overflow: hidden;
      height: 100vh;
      height: 100dvh;
      width: 100%;
      position: relative;
    }

    .page-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .top-app-bar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      background-color: #FFFFFF;
    }
    
    .app-title {
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      opacity: 1;
    }
    
    .placeholder {
      width: 24px;
    }
    
    .background-main {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    
    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .gradient-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 15%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
    }
    
    .text-center {
      text-align: center;
      margin-bottom: 32px;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .onboarding-page-3 .text-center.onboarding-text-block {
      gap: 8px;
      padding-top: 20px;
    }

    .onboarding-page-3 .text-center.onboarding-text-block .main-title {
      margin-bottom: 0;
    }

    .onboarding-page-3 .text-center.onboarding-text-block .subtitle {
      margin-top: 0;
    }
    
    .main-title {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      margin-bottom: 8px;
      width: 100%;
      text-align: center;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .onboarding-page-3 .main-title {
      display: block;
      width: 100%;
      text-align: center !important;
      margin-left: auto;
      margin-right: auto;
    }

    html:not([lang='zh-CN']):not([lang='zh-TW']) .onboarding-page-3 .main-title {
      font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', sans-serif !important;
      font-weight: 800 !important;
      letter-spacing: -0.02em;
    }

    .subtitle {
      font-size: 14px;
      color: #888888;
      font-weight: normal;
      margin-top: 8px;
    }
    
    @keyframes fadeInUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

// 问题页1 - 性别选择
function renderQuestionPage1() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-1 page-container">
      <!-- TopAppBar Section -->
      <nav class="top-nav">
        <div class="placeholder" style="width: 24px;"></div>
        ${generateProgressBar(1)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Headline Section - Fixed -->
        <div class="headline-section question-sticky-header" style="animation: fadeInUp 0.6s ease forwards;">
          <h2 class="main-title">${t('questions.page1.title')}</h2>
          <p class="subtitle">${t('questions.page1.subtitle')}</p>
        </div>
        <!-- Selection Cards - Scrollable -->
        <div class="selection-cards scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Female Card -->
          <div class="option-card" onclick="selectOption('female')">
            <div class="option-content">
              <span class="option-icon">👩</span>
              <span class="option-text">${t('questions.page1.female')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Male Card -->
          <div class="option-card" onclick="selectOption('male')">
            <div class="option-content">
              <span class="option-icon">👨</span>
              <span class="option-text">${t('questions.page1.male')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Other Card -->
          <div class="option-card" onclick="selectOption('other')">
            <div class="option-content">
              <span class="option-icon">🧒</span>
              <span class="option-text">${t('questions.page1.other')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .question-page-1 {
      font-family: 'Inter', 'PingFang SC', sans-serif;
      color: #000000;
      background-color: #FFFFFF;
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }
    
    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .main-content {
      width: 100%;
      max-width: 400px;
      padding: 20px 0;
      margin-top: 56px;
      padding-bottom: 100px;
      flex: 1;
      overflow-y: auto;
      box-sizing: border-box;
    }

    .headline-section {
      margin-bottom: 24px;
    }
    
    .main-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 8px;
      color: #000000;
      text-align: left;
    }
    
    .subtitle {
      font-size: 14px;
      color: #888888;
      text-align: left;
    }
    
    .selection-cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .scrollable-options {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-right: 2px;
      padding-left: 2px;
    }

    .scrollable-options::-webkit-scrollbar {
      display: none;
    }
    
    .option-card {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      padding: 20px;
      background-color: #F9F9F9;
      border-radius: 12px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .option-card:active {
      transform: scale(0.98);
    }
    
    .option-card.selected {
      border-color: #FED11F;
    }
    
    .option-content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .option-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 24px;
    }

    .option-icon svg {
      width: 24px;
      height: 24px;
      display: block;
    }

    .option-text {
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      text-align: left;
    }
    
    .checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #E2E2E2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      overflow: hidden;
    }
    
    .checkbox svg {
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
    }
    
    .option-card.selected .checkbox {
      background-color: #FED11F;
      border-color: #FED11F;
    }
    
    .option-card.selected .checkbox svg {
      opacity: 1;
      transform: scale(1);
    }
    
    .bottom-action {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      padding: 0 20px;
      padding-bottom: env(safe-area-inset-bottom);
      background-color: #FFFFFF;
    }
    
    .button-container {
      padding-bottom: 24px;
    }
  `;
  document.head.appendChild(style);
  
  // 监听选项选择，启用下一步按钮
  window.selectOption = function(value) {
      if (isTransitioning) {
        return;
      }

      const options = document.querySelectorAll('.option-card');
      options.forEach(option => {
        option.classList.remove('selected');
        option.style.pointerEvents = 'none';
      });

      event.target.closest('.option-card').classList.add('selected');

      updateProgressBar(1);

      setTimeout(() => {
        nextPage();
      }, 500);
    };
  }

// 问题页2 - 年龄组选择
function renderQuestionPage2() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-2 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${generateProgressBar(2)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Header Section - Fixed -->
        <header class="header-section question-sticky-header">
          <h2 class="main-title">${t('questions.page2.title')}</h2>
          <p class="subtitle">${t('questions.page2.subtitle')}</p>
        </header>
        <!-- Options List - Scrollable -->
        <div class="options-list scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Option Card 1 -->
          <button class="option-card" onclick="selectOption('under14')">
            <div class="option-content">
              <span class="option-icon">✏️</span>
              <span class="option-text">${t('questions.page2.under18')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option Card 2 -->
          <button class="option-card" onclick="selectOption('14-20')">
            <div class="option-content">
              <span class="option-icon">🎓</span>
              <span class="option-text">${t('questions.page2.18-29')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option Card 3 -->
          <button class="option-card" onclick="selectOption('20-25')">
            <div class="option-content">
              <span class="option-icon">✒️</span>
              <span class="option-text">${t('questions.page2.30-39')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option Card 4 -->
          <button class="option-card" onclick="selectOption('26-35')">
            <div class="option-content">
              <span class="option-icon">💼</span>
              <span class="option-text">${t('questions.page2.40-49')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option Card 5 -->
          <button class="option-card" onclick="selectOption('36-50')">
            <div class="option-content">
              <span class="option-icon">🌳</span>
              <span class="option-text">${t('questions.page2.50-59')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option Card 6 -->
          <button class="option-card" onclick="selectOption('50+')">
            <div class="option-content">
              <span class="option-icon">💎</span>
              <span class="option-text">${t('questions.page2.over60')}</span>
            </div>
            <div class="checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </main>
      <!-- Visual Anchor / Background Decoration -->
      <div class="background-decoration"></div>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .question-page-2 {
      font-family: 'PingFang SC', 'SF Pro', 'Inter', sans-serif;
      color: #000000;
      background-color: #FFFFFF;
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .main-title {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: #888888;
      margin-top: 8px;
      text-align: left;
    }
    
    .options-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .scrollable-options {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-right: 2px;
      padding-left: 2px;
    }

    .scrollable-options::-webkit-scrollbar {
      display: none;
    }
    
    .option-card {
      width: 100%;
      height: 64px;
      background-color: #f8f8f8;
      border-radius: 12px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      transition: all 0.2s ease;
      border: 2px solid transparent;
      cursor: pointer;
    }
    
    .option-card:active {
      border-color: #FED11F;
    }
    
    .option-card.selected {
      border: 2px solid #FED11F;
      position: relative;
    }
    
    .checkbox {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #E2E2E2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      overflow: hidden;
      flex-shrink: 0;
    }
    
    .checkbox svg {
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
    }
    
    .option-card.selected .checkbox {
      background-color: #FED11F;
      border-color: #FED11F;
    }
    
    .option-card.selected .checkbox svg {
      opacity: 1;
      transform: scale(1);
    }

    .option-content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
      min-width: 0;
    }

    .option-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 24px;
    }

    .option-text {
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      text-align: left;
    }

    .background-decoration {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 375px;
      height: 64px;
      z-index: -10;
      overflow: hidden;
      pointer-events: none;
    }
    
    .background-decoration::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(254, 209, 31, 0.05) 0%, transparent 100%);
      opacity: 0.5;
    }
  `;
  document.head.appendChild(style);
  
  // 监听选项选择
  window.selectOption = function(value) {
    if (isTransitioning) {
      return;
    }

    const options = document.querySelectorAll('.option-card');
    options.forEach(option => {
      option.classList.remove('selected');
      option.style.pointerEvents = 'none';
    });

    event.target.closest('.option-card').classList.add('selected');

    updateProgressBar(2);

    setTimeout(() => {
      nextPage();
    }, 500);
  };
}

// 问题页3 - 风格偏好
function renderQuestionPage3() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-3 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${generateProgressBar(3)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Headline - Fixed -->
        <div class="question-sticky-header">
          <h2 class="main-title" style="animation: fadeInUp 0.6s ease forwards;">${t('questions.page3.title')}</h2>
        </div>
        <!-- Style Selection Grid - Scrollable -->
        <div class="style-grid scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0;">
          <!-- Card 1: Animals -->
          <div class="style-card" onclick="toggleOption('style', 'animals')">
            <img class="card-image" src="./clip/图片/066e989deaf84f8049c78964200ddc54.webp" alt="${t('questions.page3.style.animals')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.animals')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 2: Comic -->
          <div class="style-card" onclick="toggleOption('style', 'comics')">
            <img class="card-image" src="./clip/图片/ac7ba83687f9c31480e70e23b4e504fb.webp" alt="${t('questions.page3.style.comics')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.comics')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 3: People -->
          <div class="style-card" onclick="toggleOption('style', 'people')">
            <img class="card-image" src="./clip/图片/4322aab16149485ce68b0468f48ea2a3.webp" alt="${t('questions.page3.style.people')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.people')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 4: Cute -->
          <div class="style-card" onclick="toggleOption('style', 'cute')">
            <img class="card-image" src="./clip/图片/883bb99b4fa272288c87760b52809443.webp" alt="${t('questions.page3.style.cute')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.cute')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 5: Food -->
          <div class="style-card" onclick="toggleOption('style', 'food')">
            <img class="card-image" src="./clip/图片/572879658e58ccb130aa3a6b9501392b.webp" alt="${t('questions.page3.style.food')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.food')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 6: Mandala -->
          <div class="style-card" onclick="toggleOption('style', 'mandala')">
            <img class="card-image" src="./clip/图片/163f774efff4493497edd2504b5d6224.webp" alt="${t('questions.page3.style.mandala')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.mandala')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 7: Flower -->
          <div class="style-card" onclick="toggleOption('style', 'flowers')">
            <img class="card-image" src="./clip/图片/fefe89a79b554f068d18b994058ecbdf.webp" alt="${t('questions.page3.style.flowers')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.flowers')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Card 8: Simple -->
          <div class="style-card" onclick="toggleOption('style', 'simple')">
            <img class="card-image" src="./clip/图片/cf0c4dfd283c24ee59824136205f8c73.webp" alt="${t('questions.page3.style.simple')}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="style-card-footer">
              <span class="label-text">${t('questions.page3.style.simple')}</span>
              <div class="check-icon">
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- Fixed Bottom Button Section -->
      <footer class="bottom-action" id="style-bottom-action">
        <div class="button-container">
          <button class="next-button bottom-button" id="continueButton" disabled onclick="goToNextFromStylePage()" style="opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease;">
            ${t('questions.page3.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .question-page-3 {
      font-family: 'PingFang SC', 'SF Pro Display', 'Noto Sans SC', sans-serif;
      color: #000000;
      background-color: #FFFFFF;
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
    }
    
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .main-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 8px;
      color: #000000;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
    
    .scrollable-options {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-right: 2px;
      padding-left: 2px;
    }
    
    .scrollable-options::-webkit-scrollbar {
      display: none;
    }

    .style-card {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s ease;
      aspect-ratio: 1 / 0.8;
      cursor: pointer;
    }
    
    .style-card:active {
      transform: scale(0.95);
    }
    
    .style-card.selected {
      border: 2px solid #FED11F;
    }
    
    .check-icon {
      position: static;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FED11F;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
      z-index: 20;
      flex-shrink: 0;
    }
    
    .check-icon svg {
      opacity: 1;
      transform: scale(1);
    }
    
    .style-card.selected .check-icon {
      opacity: 1;
      transform: scale(1);
    }
    
    .card-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
    }
    
    .style-card-footer {
      position: absolute;
      bottom: 16px;
      left: 16px;
      right: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      z-index: 15;
    }

    .label-text {
      flex: 1;
      min-width: 0;
      color: white;
      font-size: 18px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .bottom-action {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      padding: 0 20px;
      padding-bottom: env(safe-area-inset-bottom);
      background-color: #FFFFFF;
    }
    
    .button-container {
      padding-bottom: 24px;
    }
  `;
  document.head.appendChild(style);
  
  // 从风格页面进入下一页
  window.goToNextFromStylePage = function() {
    // 更新进度条（从50%更新到75%）
    updateProgressBar(3);
    nextPage();
  };
  
  // 监听选项选择
  window.toggleOption = function(type, id) {
    const element = document.querySelector(`[onclick="toggleOption('${type}', '${id}')"]`);
    const continueButton = document.getElementById('continueButton');
    if (element) {
      const wasSelected = element.classList.contains('selected');
      element.classList.toggle('selected');

      // 根据类型检查对应的选中选项
      let selectedOptions = [];
      if (type === 'style') {
        selectedOptions = document.querySelectorAll('.style-card.selected');
        
        // 更新 selectedStyles 数组
        selectedStyles = [];
        selectedOptions.forEach(option => {
          const onclickAttr = option.getAttribute('onclick');
          const match = onclickAttr.match(/toggleOption\('style',\s*'([^']+)'\)/);
          if (match && match[1]) {
            selectedStyles.push(match[1]);
          }
        });
      } else if (type === 'palette') {
        selectedOptions = document.querySelectorAll('.palette-card.selected');
      } else if (type === 'brush') {
        selectedOptions = document.querySelectorAll('.brush-card.selected');
      }

      if (continueButton) {
        if (selectedOptions.length >= 1) {
          continueButton.style.opacity = '1';
          continueButton.style.visibility = 'visible';
          continueButton.disabled = false;

          // 如果是新选中选项，更新进度条（问题3->50%）
          if (!wasSelected && selectedOptions.length === 1) {
            const progressBarFill = document.querySelector('.progress-bar-fill');
            if (progressBarFill) {
              const questionNum = parseInt(progressBarFill.getAttribute('data-question'));
              if (questionNum && questionNum > completedQuestions) {
                updateProgressBar(questionNum);
              }
            }
          }
        } else {
          continueButton.style.opacity = '0';
          continueButton.style.visibility = 'hidden';
          continueButton.disabled = true;
        }
      }
    }
  };
}

// 问题页4 - 目标选择
function renderQuestionPage4() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-4 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${generateProgressBar(4)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Header Titles - Fixed -->
        <div class="header-section question-sticky-header">
          <h2 class="main-title">${t('questions.page4.title')}</h2>
          <p class="subtitle">${t('questions.page4.subtitle')}</p>
        </div>
        <!-- Selection List - Scrollable -->
        <div class="options-list scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Option: Relax -->
          <button class="option-item" onclick="selectOption('relax')">
            <div class="option-content">
              <span class="option-icon">☕️</span>
              <span class="option-text">${t('questions.page4.relaxMyself')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Have Fun -->
          <button class="option-item" onclick="selectOption('fun')">
            <div class="option-content">
              <span class="option-icon">🎮</span>
              <span class="option-text">${t('questions.page4.haveFun')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Express Creativity -->
          <button class="option-item" onclick="selectOption('creativity')">
            <div class="option-content">
              <span class="option-icon">🧠</span>
              <span class="option-text">${t('questions.page4.expressCreativity')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Disconnect -->
          <button class="option-item" onclick="selectOption('disconnect')">
            <div class="option-content">
              <span class="option-icon">⛓️‍💥</span>
              <span class="option-text">${t('questions.page4.clearMind')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Develop Coloring Skills -->
          <button class="option-item" onclick="selectOption('skills')">
            <div class="option-content">
              <span class="option-icon">🎨</span>
              <span class="option-text">${t('questions.page4.developSkills')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Relieve Stress -->
          <button class="option-item" onclick="selectOption('stress')">
            <div class="option-content">
              <span class="option-icon">⏱️</span>
              <span class="option-text">${t('questions.page4.relieveStress')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
          <!-- Option: Other -->
          <button class="option-item" onclick="selectOption('other')">
            <div class="option-content">
              <span class="option-icon">♾️</span>
              <span class="option-text">${t('questions.page4.other')}</span>
            </div>
            <div class="option-checkbox">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </main>
      <!-- Bottom Action Button -->
      <footer class="bottom-action">
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .question-page-4 {
      font-family: 'PingFang SC', 'SF Pro', 'Inter', sans-serif;
      color: #000000;
      background-color: #FFFFFF;
      height: 100vh;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .main-title {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 8px;
      color: #000000;
    }

    .subtitle {
      font-size: 14px;
      color: #888888;
      text-align: left;
    }

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    
    .scrollable-options {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-right: 2px;
      padding-left: 2px;
    }
    
    .scrollable-options::-webkit-scrollbar {
      display: none;
    }

    .option-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;
      padding: 16px 20px;
      background-color: #F9F9F9;
      border-radius: 12px;
      border: 2px solid transparent;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    
    .option-item:active {
      transform: scale(0.98);
    }
    
    .option-item.selected {
      border: 2px solid #FED11F;
    }
    
    .option-content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }

    .option-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 24px;
    }

    .option-icon svg {
      width: 24px;
      height: 24px;
      display: block;
    }

    .text-on-surface-variant {
      stroke: #888888;
    }

    .option-item.selected .option-icon {
      stroke: #000000;
    }

    .option-text {
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
      text-align: left;
    }
    
    .selected-text {
      font-weight: 500;
      color: #000000;
    }
    
    .option-checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #E2E2E2;
      border-radius: 50%;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .option-checkbox svg {
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
    }
    
    .option-checkbox.selected {
      background-color: #FED11F;
      border-color: #FED11F;
    }
    
    .option-checkbox.selected svg {
      opacity: 1;
      transform: scale(1);
    }
    
    .bottom-action {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      padding: 0 20px;
      padding-bottom: env(safe-area-inset-bottom);
      background-color: #FFFFFF;
    }
    
    .button-container {
      padding-bottom: 24px;
    }
  `;
  document.head.appendChild(style);
  
  // 监听选项选择
  window.selectOption = function(value) {
    if (isTransitioning) {
      return;
    }

    const options = document.querySelectorAll('.option-item');
    options.forEach(option => {
      option.classList.remove('selected');
      option.style.pointerEvents = 'none';
      const checkbox = option.querySelector('.option-checkbox');
      if (checkbox) {
        checkbox.classList.remove('selected');
      }
      const text = option.querySelector('.option-text');
      if (text) {
        text.classList.remove('selected-text');
      }
      const icon = option.querySelector('.option-icon');
      if (icon) {
        icon.style.fontVariationSettings = '';
      }
    });

    const selectedOption = event.target.closest('.option-item');
    if (selectedOption) {
      selectedOption.classList.add('selected');
      const checkbox = selectedOption.querySelector('.option-checkbox');
      if (checkbox) {
        checkbox.classList.add('selected');
      }
      const text = selectedOption.querySelector('.option-text');
      if (text) {
        text.classList.add('selected-text');
      }
      const icon = selectedOption.querySelector('.option-icon');
      if (icon) {
        icon.style.fontVariationSettings = "'FILL' 1";
      }
    }

    updateProgressBar(4);

    setTimeout(() => {
      nextPage();
    }, 500);
  };
}

// 引导页4 - 引导用户进入更多测试
function renderOnboardingPage4() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="onboarding-page-4" style="font-family: 'PingFang SC', 'SF Pro', 'Inter', sans-serif; -webkit-font-smoothing: antialiased; margin: 0; padding: 0; background-color: #FFFFFF; color: #000000; overflow: hidden; height: 100vh; height: 100dvh; width: 100%; display: flex; flex-direction: column;">
      <!-- TopAppBar -->
      <header class="top-app-bar" style="position: fixed; top: 0; width: 100%; z-index: 50; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 56px; background-color: transparent;">
        <h1 class="app-title" style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 18px; font-weight: bold; color: #000000; opacity: 0;"></h1>
        <div class="placeholder" style="width: 24px;"></div>
      </header>
      <!-- Fullscreen Background Image -->
      <main class="background-main" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; z-index: 0;">
        <!-- Combined Component -->
        <div style="width: 280px; margin: 0 auto; animation: fadeInUp 0.6s ease forwards; position: relative; padding-top: 200px;">
          <!-- Illustration -->
          <div style="width: 100%; height: 280px; position: relative;">
            <!-- Shadow layers -->
            <div style="position: absolute; top: 10px; left: 10px; right: -10px; bottom: -10px; background-color: rgba(0,0,0,0.1); border-radius: 16px; z-index: -1;"></div>
            <div style="position: absolute; top: 5px; left: 5px; right: -5px; bottom: -5px; background-color: rgba(0,0,0,0.05); border-radius: 16px; z-index: -1;"></div>
            
            <!-- Image container -->
            <div style="width: 100%; height: 100%; background-color: white; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <img src="./clip/pic/17d82d6efd0df9d185839c87595d53ae.webp" alt="Blue haired girl" style="width: 100%; height: 100%; object-fit: cover;"/>
            </div>
          </div>
        </div>
      </main>
      <!-- Fixed Content at Bottom -->
      <footer class="bottom-action">
        <div class="text-center space-y-2 mb-8">
          <h1 style="font-size: 32px; animation: fadeInUp 0.6s ease forwards; font-weight: bold; color: #000000; line-height: 1.2; text-align: center; font-family: 'PingFang SC', sans-serif;">
            ${t('onboarding.page4.title')}
          </h1>
          <p style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; font-size: 16px; color: #888888; font-weight: normal; text-align: center; font-family: 'PingFang SC', sans-serif;">
            ${t('onboarding.page4.subtitle')}
          </p>
        </div>
        <div class="button-container">
          <button style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0;" class="continue-button bottom-button" onclick="nextPage()">
            ${t('onboarding.page4.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
}

// 问题页5 - 调色板选择
function renderQuestionPage5() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-5 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${generateProgressBar(5)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <main class="main-content">
        <!-- Headline -->
        <h2 class="main-title" style="animation: fadeInUp 0.6s ease forwards;">
          ${t('questions.page5.title')}
        </h2>
        <!-- Palette Grid -->
        <div class="palette-grid" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0;">
          <!-- Card 1: 基础 -->
          <div class="palette-card" onclick="togglePaletteOption('basic')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #262626;"></div>
              <div style="background-color: #9E9E9E;"></div>
              <div style="background-color: #E0E0E0;"></div>
              <div style="background-color: #757575;"></div>
              <div style="background-color: #BDBDBD;"></div>
              <div style="background-color: #F5F5F5;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.basic')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 2: 肤色 -->
          <div class="palette-card" onclick="togglePaletteOption('skin')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #F5D0B4;"></div>
              <div style="background-color: #E6B89C;"></div>
              <div style="background-color: #C68642;"></div>
              <div style="background-color: #8D5524;"></div>
              <div style="background-color: #FFDBAC;"></div>
              <div style="background-color: #F1C27D;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.skin')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 3: 化妆 -->
          <div class="palette-card" onclick="togglePaletteOption('makeup')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #E91E63;"></div>
              <div style="background-color: #F06292;"></div>
              <div style="background-color: #F8BBD0;"></div>
              <div style="background-color: #AD1457;"></div>
              <div style="background-color: #FF80AB;"></div>
              <div style="background-color: #C2185B;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.makeup')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 4: 银河 -->
          <div class="palette-card" onclick="togglePaletteOption('galaxy')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #1A237E;"></div>
              <div style="background-color: #311B92;"></div>
              <div style="background-color: #4A148C;"></div>
              <div style="background-color: #0D47A1;"></div>
              <div style="background-color: #000000;"></div>
              <div style="background-color: #303F9F;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.galaxy')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 5: 织物 -->
          <div class="palette-card" onclick="togglePaletteOption('fabric')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #D7CCC8;"></div>
              <div style="background-color: #BCAAA4;"></div>
              <div style="background-color: #A1887F;"></div>
              <div style="background-color: #8D6E63;"></div>
              <div style="background-color: #795548;"></div>
              <div style="background-color: #6D4C41;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.fabric')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 6: 嘴唇 -->
          <div class="palette-card" onclick="togglePaletteOption('lips')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #FF5252;"></div>
              <div style="background-color: #FF1744;"></div>
              <div style="background-color: #D50000;"></div>
              <div style="background-color: #B71C1C;"></div>
              <div style="background-color: #C62828;"></div>
              <div style="background-color: #E53935;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.lips')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 7: 彩虹 -->
          <div class="palette-card" onclick="togglePaletteOption('rainbow')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #F44336;"></div>
              <div style="background-color: #FFEB3B;"></div>
              <div style="background-color: #4CAF50;"></div>
              <div style="background-color: #2196F3;"></div>
              <div style="background-color: #9C27B0;"></div>
              <div style="background-color: #FF9800;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.rainbow')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 8: 天空 -->
          <div class="palette-card" onclick="togglePaletteOption('sky')" style="background-color: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #F1F1F1; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease; cursor: pointer; position: relative;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; height: 72px; border-radius: 4px; overflow: hidden;">
              <div style="background-color: #E1F5FE;"></div>
              <div style="background-color: #B3E5FC;"></div>
              <div style="background-color: #81D4FA;"></div>
              <div style="background-color: #4FC3F7;"></div>
              <div style="background-color: #29B6F6;"></div>
              <div style="background-color: #03A9F4;"></div>
            </div>
            <span style="font-size: 14px; font-weight: 500; text-align: center;">${t('questions.page5.palette.sky')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <!-- Fixed Action Button -->
      <footer class="bottom-action" id="palette-bottom-action" style="opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease;">
        <div class="button-container">
          <button class="bottom-button" onclick="nextPage()">
            ${t('questions.page5.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .palette-card {
      border-radius: 12px;
    }

    .palette-card:active {
      transform: scale(0.95);
    }
    
    .palette-card.selected {
      border: 2px solid #FED11F !important;
    }
    
    .palette-card .check-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FED11F;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
      z-index: 20;
    }
    
    .palette-card.selected .check-icon {
      opacity: 1;
      transform: scale(1);
    }
  `;
  document.head.appendChild(style);
  
  // 监听调色板选择
  let selectedPaletteCount = 0;
  window.togglePaletteOption = function(id) {
    const element = document.querySelector(`[onclick="togglePaletteOption('${id}')"]`);
    const bottomAction = document.getElementById('palette-bottom-action');
    if (element) {
      const wasSelected = element.classList.contains('selected');
      element.classList.toggle('selected');
      if (element.classList.contains('selected')) {
        selectedPaletteCount++;
        element.style.border = '2px solid #FED11F';
      } else {
        selectedPaletteCount--;
        element.style.border = '1px solid #F1F1F1';
      }
      if (selectedPaletteCount > 0) {
        bottomAction.style.opacity = '1';
        bottomAction.style.visibility = 'visible';
        
        // 如果是新选中选项，更新进度条（问题5->83%）
        if (!wasSelected && selectedPaletteCount === 1) {
          const progressBarFill = document.querySelector('.progress-bar-fill');
          if (progressBarFill) {
            const questionNum = parseInt(progressBarFill.getAttribute('data-question'));
            if (questionNum && questionNum > completedQuestions) {
              updateProgressBar(questionNum);
            }
          }
        }
      } else {
        bottomAction.style.opacity = '0';
        bottomAction.style.visibility = 'hidden';
      }
    }
  };
}

// 问题页6 - 笔刷选择
function renderQuestionPage6() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="question-page-6 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${generateProgressBar(6)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${t('common.skip')}</div>
      </nav>
      <!-- Content Area -->
      <main class="main-content">
        <!-- Headline -->
        <h2 class="main-title" style="animation: fadeInUp 0.6s ease forwards;">
          ${t('questions.page6.title')}
        </h2>
        <!-- Grid Layout -->
        <div class="brush-grid" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0;">
          <!-- Card: 小刷子 -->
          <div class="brush-card" onclick="toggleBrushOption('small')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="whimsical illustration of a tiny delicate paintbrush" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLZgvpduIoeZlsTYWY2YRoXatKKSJgNBT99vzMxj5onYKCUlok8_cbzlK_VdgS7UL3-HYM8MCNpVAZ-Lkr7viEB_aLktJ9k7p9BW2WJ3jTjdbAjnQ76KrwYHpNGRGIZNH1_lU-ezXCQxKHgFphyZmKYDyLAl2SNgzRcouNNI5Je2I_PSyT6NlTHfGz9ckb2gCBnn5MaaNg7648SJVLTDnRmgFXZ1jrc7Zw9lyiBcqo74eepHvV7yvglNzO7GOt-y8pMSd1LQMdyeAV">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.small')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 大刷子 -->
          <div class="brush-card" onclick="toggleBrushOption('big')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="bold wide painting brush" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB39-uoruVTB_-xVSgseibuhsoV5nHqr0JaHkzux4OyiGYsk1jK6piivYbbY-oBu5GcJcUNUj-K8cXLavr_KGa6ANruuuqRacHWssT40l7vKLF6x8OtQzDbcLWYfIuA2roGiDyX7dWqDSBQ01Mluj9PpjC_2l6SD_-1ZFHlat6iwnfD4HAmaDU5ImZecZ-nHVIlKqVTvYZYuiHrOq6u8X1yjn9i7Kej_GNuM9Zry-973H2WGgFfBrUK30QUdNnD8SwERq0Qblz0mr79">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.big')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 喷雾 -->
          <div class="brush-card" onclick="toggleBrushOption('spray')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="colorful spray paint can" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-QYiA69yqPcwAoDJGF4bU2yBIU2-tIvZkbqWEZXX_tTZW1MPKfskfV8o-I6GrQcyPze4_DXAjrvQzTTqsN8dUNkML_7mpXizNA9OOjXw2QkDbulrUZYvUVNhnWpWQdVnvrkKcJSHm3b6SeGPg7Ga3fV-EmheojDvarBbTUxoykaa_Yhl115QvEeMpiqa9lN-COkSZwQJ1DEHNbOzmDViDZOfWMA6l-atwSR58fMFdo8ATeZ9F-25OE0o5JD4WzoIrTZbwoHk5toDr">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.spray')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 水彩画 -->
          <div class="brush-card" onclick="toggleBrushOption('watercolor')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="dreamy watercolor brush effect" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbDW502n5WlTwsOJLV7f24Icv5BknmjSU74QeAPCtQnzEPYVADivp4JdQ3ePoueSHknI_U8RoAhBLp2OCp6ZFyz3xksN8KjM8t6zkJWThFbP-vddFmGIqXOqnJLBeYwdLmRrE9PAJ3cBPmrlCx3AHx-YKzeozOnYFVhg9OSlTKrLexw7bSy3oBUFqfMcJGi9POcmqUAaahkdI4JTj7tgwo-C-Sui8V3s1Afe-WBd34NZqB_4f6pUFSzomtGijojkcC6tqpLVGVtBQo">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.watercolor')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 圆珠笔 -->
          <div class="brush-card" onclick="toggleBrushOption('ballpoint')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="sleek blue ballpoint pen" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJwEHDaNVZdodf-lrbhSETEYX417n13bS01fHhgt-f5XvT1tZ2v3OrEzc-vHeW3SxEsGQPid5WND7x9qrdteud1GcEGDWvVMsAZS1QRKc-HoiQy673NBoAwTS8wK-Pia2Y_av5qrVT8EC2k2I5vzquo4HeCnHh0ew4BGqf51M47MCt23AUbAMUsBQms2eBcrnzwhvrZV_d8_7hauVl-LIWIpOLfq-sabKQuXdFNZ459J8lMKONf7uq-7cH-FjcdDeG_xXolbfHeeLf">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.ballpoint')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 铅笔 -->
          <div class="brush-card" onclick="toggleBrushOption('pencil')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="classic graphite pencil" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfimSDKKlRrGmnnOX1jjAkwkmrxamOFm4nqKpXBGhNYrE8beaODA8QvSGPPlhxW9jyJqDsyR0fQTQYb4TaR44M-zfaq3HNL4ZzXen8pEzuXDSrHhqXk7p1BXl8OBywq6WErd1F5dZ-WVFeT_G2iqqIZq256KeTN7MlczuDKskYznIp6RB5zOrkkeV_4H2zGxwapkElh-VK7KJxNsfaJmAjXsgmdKIGcnNDwx9bzBBIIgAuJk5w3hfT4MTl36C4A1Gtg7tFMl4GGB7n">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.pencil')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 粉彩 -->
          <div class="brush-card" onclick="toggleBrushOption('pastel')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="soft chalk pastel sticks" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIEh_uS1e9CTGz7ix2Kg_AJHByWaL-zTAl8J1IoAslz_gDdyNHY5xDa7649MP1YC3iXqMyfZAuIMAytPy0BeTDz3cNnpvtihxF8GHKx_FvKatz3mrNQzSvfWyZU_2EKnUEtUNqTW0cBuAnqiDK7i7FsKcOJUxmxQNWusb5HoVKZmOaP7QumoeyekSwJFcNHgZt51H1XJOzy-09Dw_fZge3m5qR_1hVs8hRv0YMtqP-qbQsMLmf_SoexTpLHjnZ9g1HlxvFzJ0HhOKI">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.pastel')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card: 飞溅 -->
          <div class="brush-card" onclick="toggleBrushOption('splash')" style="position: relative; aspect-ratio: 1/0.8; background-color: #F3F3F4; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; border: 2px solid transparent; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;">
            <img alt="dynamic ink splatter effect" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1chEn-9fp1MJr1bipTUflAqZq3GZeVQaNvZUJs3Ui8L1DB-Nl7xA33cqYoD7b_QLdfufQLG1Vi5t39LLeu7ps4zAX6DHcIQqFN76uRforMi46_Lcbh_oyHSNKJinBLOdT5VtBt_D6Vc17sPTOjz7nvT2zMtu9h0nSRB3NP2G8Y1NIPiNNAQn0ML6OE-WNtBUOYIxXZypVRkq9DF7_jgvA0EP5u8iFq9GTCql6jjHQOFgEpObdqobs2DjljWcfBnxwtVFuEA533Es8">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); z-index: 10;"></div>
            <span style="font-size: 18px; font-weight: bold; color: white; z-index: 20; position: absolute; bottom: 16px; left: 16px; font-family: 'PingFang SC', sans-serif;">${t('questions.page6.brush.splash')}</span>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <!-- Fixed Bottom Button -->
      <footer class="bottom-action" id="brush-bottom-action" style="opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease;">
        <div class="button-container">
          <button class="bottom-button" onclick="nextPage()">
            ${t('questions.page6.button')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      height: 56px;
      border: none;
      box-sizing: border-box;
    }
    
    .top-nav .placeholder {
      width: 24px;
      flex-shrink: 0;
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      transition: transform 0.2s ease;
      margin-left: 0;
      padding-left: 0;
    }

    .back-button:active {
      transform: scale(0.95);
    }

    .back-button .back-icon {
      width: 24px;
      height: 24px;
      display: block;
      margin: 0;
      padding: 0;
    }

    .skip-button {
      font-family: 'PingFang SC', sans-serif;
      font-size: 16px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      text-align: right;
      min-width: 60px;
      margin-right: 0;
      padding-right: 0;
    }

    .skip-button:hover {
      opacity: 0.8;
    }

    .skip-button:active {
      transform: scale(0.95);
    }

    .brush-card {
      border-radius: 12px;
    }

    .brush-card:active {
      transform: scale(0.96);
    }
    
    .brush-card.selected {
      outline: 3px solid #FED11F;
      outline-offset: -3px;
    }
    
    .brush-card .check-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FED11F;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease;
      z-index: 20;
    }
    
    .brush-card.selected .check-icon {
      opacity: 1;
      transform: scale(1);
    }
  `;
  document.head.appendChild(style);
  
  // 监听刷子选择
  let selectedBrushCount = 0;
  window.toggleBrushOption = function(id) {
    const element = document.querySelector(`[onclick="toggleBrushOption('${id}')"]`);
    const bottomAction = document.getElementById('brush-bottom-action');
    if (element) {
      const wasSelected = element.classList.contains('selected');
      element.classList.toggle('selected');
      if (element.classList.contains('selected')) {
        selectedBrushCount++;
      } else {
        selectedBrushCount--;
      }
      if (selectedBrushCount >= 1) {
        bottomAction.style.opacity = '1';
        bottomAction.style.visibility = 'visible';
        
        // 如果是新选中选项，更新进度条（问题6->100%）
        if (!wasSelected && selectedBrushCount === 1) {
          const progressBarFill = document.querySelector('.progress-bar-fill');
          if (progressBarFill) {
            const questionNum = parseInt(progressBarFill.getAttribute('data-question'));
            if (questionNum && questionNum > completedQuestions) {
              updateProgressBar(questionNum);
            }
          }
        }
      } else {
        bottomAction.style.opacity = '0';
        bottomAction.style.visibility = 'hidden';
      }
    }
  };
}

// 引导页5 - 加载动画
function renderOnboardingPage5() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="container" style="justify-content: center;">
      <div class="emoji-container" id="emojiContainer"></div>
      
      <div class="ring-container" id="ringContainer">
        <svg class="progress-ring" width="468" height="468">
          <circle class="progress-ring-circle-bg" cx="234" cy="234" r="203"></circle>
          <circle class="progress-ring-circle" cx="234" cy="234" r="203"></circle>
        </svg>
        <svg class="progress-ring-inner" width="312" height="312">
          <circle class="progress-ring-circle-bg-inner" cx="156" cy="156" r="125"></circle>
          <circle class="progress-ring-circle-inner" cx="156" cy="156" r="125"></circle>
        </svg>
      </div>
      
      <div class="loading-container">
        <div 
          style="animation: scaleIn 0.3s ease forwards;"
          class="loading-circle" 
          id="loadingCircle"
        ></div>
        
        <h1 
          style="animation: fadeInUp 0.6s ease forwards; opacity: 0; top: 122px; text-align: center; color: #000000; font-size: 24px; white-space: normal; position: absolute; width: 340px; padding: 0; box-sizing: border-box;"
          class="title" 
          id="loadingText1"
        >
          ${t('loading.analyzing')}
        </h1>
        
        <h1 
          style="animation: fadeInUp 0.6s ease forwards; opacity: 0; top: 122px; text-align: center; color: #000000; font-size: 24px; white-space: normal; position: absolute; visibility: hidden; width: 340px; padding: 0; box-sizing: border-box;"
          class="title" 
          id="loadingText2"
        >
        </h1>
        
        <h1 
          style="animation: fadeInUp 0.6s ease forwards; opacity: 0; top: 122px; text-align: center; color: #000000; font-size: 24px; white-space: normal; position: absolute; visibility: hidden; width: 340px; padding: 0; box-sizing: border-box;"
          class="title" 
          id="loadingText3"
        >
          ${t('loading.ready')}
        </h1>
      </div>
      
      <footer class="bottom-action">
        <div class="button-container">
          <button 
            style="opacity: 0;"
            class="bottom-button" 
            id="tryButton"
            onclick="nextPage()"
          >
            ${t('loading.tryButton')}
          </button>
        </div>
      </footer>
    </div>
  `;
  
  // 生成emoji并使其随机但精确地分布在圆环轮廓线上
  const emojis = ['🎨', '🖌️', '🌈', '✏️', '🎭', '✨', '🌟', '💫'];
  const emojiContainer = document.getElementById('emojiContainer');
  
  const centerX = 50; // 容器中心点X坐标（百分比）
  const centerY = 50; // 容器中心点Y坐标（百分比）
  const outerRadius = 48; // 外层圆环半径（百分比）- 对应增大20%后的尺寸
  const innerRadius = 32; // 内层圆环半径（百分比）- 对应增大20%后的尺寸
  
  // 预定义一些随机但非规则的角度，避免明显的对称
  const randomAngles = [
    0.15 * Math.PI,   // ~27度
    0.65 * Math.PI,   // ~117度
    1.15 * Math.PI,   // ~207度
    1.65 * Math.PI,   // ~297度
    0.4 * Math.PI,    // ~72度
    0.9 * Math.PI,    // ~162度
    1.4 * Math.PI,    // ~252度
    1.9 * Math.PI     // ~342度
  ];
  
  // 打乱emoji顺序增加随机性
  const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < 8; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = shuffledEmojis[i];
    
    // 随机选择外层或内层圆环，但确保分布均匀
    const radiusOptions = i < 4 ? [outerRadius, innerRadius] : [innerRadius, outerRadius];
    const radius = radiusOptions[Math.floor(Math.random() * radiusOptions.length)];
    
    // 使用预定义的非规则角度，避免对称
    const angle = randomAngles[i];
    
    // 计算在圆环上的精确坐标
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    emoji.style.left = `${x}%`;
    emoji.style.top = `${y}%`;
    emoji.style.setProperty('--emoji-index', i);
    emojiContainer.appendChild(emoji);
  }
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .ring-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 0;
      transform: translateY(-40px);
    }
    
    .progress-ring,
    .progress-ring-inner {
      position: absolute;
    }
    
    .progress-ring {
      animation: ringBreath 4s ease-in-out infinite;
    }
    
    .progress-ring-inner {
      animation: ringBreathInner 5s ease-in-out infinite;
    }
    
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      position: relative;
      z-index: 5;
    }
    
    .loading-circle,
    .loading-check {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      transform: translateY(-24px);
      position: relative;
    }
    
    .loading-circle {
      border: 4px solid #F0F0F0;
      background: none;
    }
    
    .loading-circle::before {
      content: '';
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top-color: #FED11F;
      animation: loadingSpin 1s linear infinite;
    }
    
    .loading-check {
      background-color: #FED11F;
    }
    
    @keyframes loadingSpin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes scaleIn {
      from {
        transform: translateY(-24px) scale(0);
        opacity: 0;
      }
      to {
        transform: translateY(-24px) scale(1);
        opacity: 1;
      }
    }
    
    .progress-ring-circle-bg,
    .progress-ring-circle-bg-inner {
      fill: none;
      stroke: #F0F0F0;
      stroke-width: 2;
      opacity: 0.8;
    }
    
    .progress-ring-circle {
      fill: none;
      stroke: #FFEE99;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 1275;
      stroke-dashoffset: 1275;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      animation: progressDraw 3s ease-in-out forwards, ringRotate 15s linear infinite;
      opacity: 0.8;
    }
    
    .progress-ring-circle-inner {
      fill: none;
      stroke: #FFEE99;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-dasharray: 785;
      stroke-dashoffset: 785;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      animation: progressDrawInner 3s ease-in-out forwards, ringRotateInner 12s linear infinite reverse;
      animation-delay: 0.2s;
      opacity: 0.8;
    }
    
    @keyframes progressDraw {
      0% {
        stroke-dashoffset: 1275;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes progressDrawInner {
      0% {
        stroke-dashoffset: 785;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes ringRotate {
      0% {
        transform: rotate(-90deg);
      }
      100% {
        transform: rotate(270deg);
      }
    }
    
    @keyframes ringRotateInner {
      0% {
        transform: rotate(-90deg);
      }
      100% {
        transform: rotate(270deg);
      }
    }
    
    @keyframes ringBreath {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.03);
      }
    }
    
    @keyframes ringBreathInner {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.97);
      }
    }
    
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
    
    @keyframes scaleOut {
      from {
        transform: scale(1);
        opacity: 1;
      }
      to {
        transform: scale(0.8);
        opacity: 0;
      }
    }
    
    @keyframes popIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    .emoji-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 1;
      transform: translateY(-40px);
    }
    
    .emoji {
      position: absolute;
      font-size: 24px;
      z-index: 10;
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      animation: emojiSequence 12s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
      animation-delay: calc(var(--emoji-index) * 1.5s);
    }
    
    @keyframes emojiSequence {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      4.17% {
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 1;
      }
      6.25% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      22.92% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      25% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      100% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
    }

    .back-icon {
      width: 24px;
      height: 24px;
      display: block;
    }
  `;
  document.head.appendChild(style);
  
  // 生成风格文案
  function generateStyleText() {
    if (selectedStyles.length === 0) {
      return t('loading.matched.single');
    }
    const sep = styleListSeparator();
    const styleLabels = selectedStyles.map((id) => t(`styles.${id}`));
    if (styleLabels.length <= 3) {
      return t('loading.matched.multi', { styles: styleLabels.join(sep) });
    }
    const firstThree = styleLabels.slice(0, 3).join(sep);
    return t('loading.matched.many', { firstThree, count: styleLabels.length });
  }
  
  // 模拟加载过程 - 三个阶段
  setTimeout(() => {
    const loadingCircle = document.getElementById('loadingCircle');
    const loadingText1 = document.getElementById('loadingText1');
    const loadingText2 = document.getElementById('loadingText2');
    const loadingText3 = document.getElementById('loadingText3');
    const tryButton = document.getElementById('tryButton');
    
    if (loadingCircle) {
      loadingCircle.className = 'loading-check';
      loadingCircle.innerHTML = '✓';
    }
    
    // 第一阶段：文案1消失
    if (loadingText1) {
      loadingText1.style.animation = 'scaleOut 0.3s ease forwards';
    }
    
    // 第二阶段：显示文案2
    setTimeout(() => {
      if (loadingText2) {
        loadingText2.textContent = generateStyleText();
        loadingText2.style.visibility = 'visible';
        loadingText2.style.animation = 'popIn 0.3s ease forwards';
      }
      
      // 第三阶段：文案2消失，显示文案3
      setTimeout(() => {
        if (loadingText2) {
          loadingText2.style.animation = 'scaleOut 0.3s ease forwards';
        }
        
        setTimeout(() => {
          if (loadingText3) {
            loadingText3.style.visibility = 'visible';
            loadingText3.style.animation = 'popIn 0.3s ease forwards';
          }
          
          if (tryButton) {
            setTimeout(() => {
              tryButton.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 300);
          }
        }, 500);
      }, 1500); // 文案2显示1.5秒
    }, 500); // 文案1消失后0.5秒
  }, 3000); // 初始3秒后开始
}

// 介绍页 - 免费试用3天
function renderTrialIntroPage() {
  const app = document.getElementById('app');
  
  // 计算3天后的日期
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(futureDate.getDate() + 3);
  const formattedDate = new Intl.DateTimeFormat(getCurrentLocale(), {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(futureDate);

  const trialHeroAlt = t('onboarding.page1.title');
  const trialImgFail = encodeURIComponent(t('common.imageLoadFailed'));

  app.innerHTML = `
    <div class="trial-intro-page" style="font-family: 'PingFang SC', 'SF Pro', sans-serif; background-color: #FFFFFF; color: #000000; height: 100vh; height: 100dvh; display: flex; flex-direction: column;">
      <!-- TopAppBar -->
      <header style="position: fixed; top: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 56px; background-color: transparent; z-index: 50;">
        <div style="width: 24px;"></div>
      </header>
      
      <!-- Main Content -->
      <main style="flex: 1; padding-top: 56px; display: flex; flex-direction: column; align-items: center; overflow-y: auto;">
        <!-- Hero Section -->
        <div class="hero-section">
          <img class="hero-image" src="/images/unnamed-2.png" alt="${trialHeroAlt}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${trialImgFail}%3C/text%3E%3C/svg%3E';">
          <div class="hero-gradient"></div>
        </div>
        
        <!-- Content Container -->
        <div class="trial-intro-content">
          <h2 class="page-title">${t('trial.title')}</h2>
          
          <!-- Timeline -->
          <div class="timeline-container">
            <!-- Timeline Line -->
            <div class="timeline-line"></div>
            
            <!-- Item 1: Today -->
            <div class="timeline-item">
              <div class="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="32" height="28" rx="4" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 20H40" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="18" cy="8" r="4" fill="#333333"/>
                  <circle cx="30" cy="8" r="4" fill="#333333"/>
                </svg>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">${t('trial.day0')}</h3>
                <p class="timeline-description">${t('trial.day0.description')}</p>
              </div>
            </div>
            
            <!-- Item 2: 2 Days Later -->
            <div class="timeline-item">
              <div class="timeline-icon">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4V8" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24 40V44" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M40 24H44" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 24H8" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="24" cy="24" r="16" stroke="#333333" stroke-width="4"/>
                  <path d="M24 16V24L30 28" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">${t('trial.day2')}</h3>
                <p class="timeline-description">${t('trial.day2.description')}</p>
              </div>
            </div>
            
            <!-- Item 3: 3 Days Later -->
            <div class="timeline-item" style="margin-top: 18px;">
              <div class="timeline-icon" style="margin-top: 8px;">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 24L20 34L40 14" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="timeline-content">
                <h3 class="timeline-title">${t('trial.day3')}</h3>
                <p class="timeline-description">${t('trial.day3.description', { date: formattedDate })}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Fixed Bottom CTA Section -->
      <footer class="bottom-action" style="z-index: 100; animation: fadeInUp 0.2s ease forwards; animation-delay: 0.5s; opacity: 0;">
        <div class="button-container" style="padding-top: 12px;">
          <button class="bottom-button" onclick="goToSubscription()">${t('trial.button')}</button>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.id = 'trial-intro-page-styles';
  style.textContent = `
    .trial-intro-page .hero-section {
      width: 100%;
      position: relative;
      min-height: 200px;
      max-height: 40vh;
      overflow: hidden;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .trial-intro-page .hero-image {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 40vh;
      object-fit: contain;
      display: block;
    }
    
    .trial-intro-page .hero-gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 96px;
      background: linear-gradient(to top, white 0%, transparent 100%);
    }
    
    .trial-intro-page .trial-intro-content {
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .trial-intro-page .page-title {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      text-align: center;
      font-family: 'PingFang SC', sans-serif;
      margin: 0;
      margin-bottom: 32px;
    }
    
    .trial-intro-page .timeline-container {
      width: 100%;
      position: relative;
      padding-left: 48px;
      padding-right: 0;
    }
    
    .trial-intro-page .timeline-line {
      position: absolute;
      left: 15px;
      top: 12px;
      bottom: 12px;
      width: 4px;
      background-color: #FED11F;
    }
    
    .trial-intro-page .timeline-item {
      position: relative;
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    
    .trial-intro-page .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .trial-intro-page .timeline-icon {
      position: absolute;
      left: -48px;
      width: 32px;
      height: 32px;
      background-color: #FED11F;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
    
    .trial-intro-page .timeline-icon svg path,
    .trial-intro-page .timeline-icon svg rect,
    .trial-intro-page .timeline-icon svg circle {
      stroke: #FFFFFF;
      fill: none;
    }
    
    .trial-intro-page .timeline-icon svg circle[fill] {
      fill: none;
    }
    
    .trial-intro-page .timeline-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .trial-intro-page .timeline-title {
      font-size: 20px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      margin: 0;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .trial-intro-page .timeline-description {
      font-size: 14px;
      color: #888888;
      line-height: 1.4;
      margin: 0;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .trial-intro-page .bottom-button {
      background-color: #FED11F;
    }
    
    @keyframes fadeInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .page-transition-enter {
      animation: pageFadeIn 0.4s ease-out forwards;
    }
    
    @keyframes pageFadeIn {
      from {
        opacity: 0;
        transform: scale(1.02);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .page-transition-exit {
      animation: pageFadeOut 0.3s ease-in forwards;
    }
    
    @keyframes pageFadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.98);
      }
    }
  `;
  
  // 移除可能存在的旧样式
  const oldStyle = document.getElementById('trial-intro-page-styles');
  if (oldStyle) {
    oldStyle.remove();
  }
  
  document.head.appendChild(style);
}

// 跳转到订阅页
window.goToSubscription = function() {
  if (isTransitioning) return;
  isTransitioning = true;
  
  const app = document.getElementById('app');
  const firstChild = app.firstElementChild;
  if (firstChild) {
    firstChild.classList.add('page-transition-exit');
  }
  
  setTimeout(() => {
    currentPage = 9;
    renderPage();
    setTimeout(() => {
      isTransitioning = false;
    }, 400);
  }, 300);
};

// 订阅页
function renderSubscriptionPage() {
  const app = document.getElementById('app');

  const subHeroAlt = t('onboarding.page1.title');
  const subImgFail = encodeURIComponent(t('common.imageLoadFailed'));

  app.innerHTML = `
    <div class="subscription-page" style="font-family: 'PingFang SC', 'SF Pro', sans-serif; background-color: #FFFFFF; color: #000000; height: 100vh; height: 100dvh; display: flex; flex-direction: column;">
      <!-- TopAppBar -->
      <header style="position: fixed; top: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 56px; background-color: transparent; z-index: 50; animation: fadeInUp 0.2s ease forwards; opacity: 0;">
        <div style="display: flex; align-items: center; transition: transform 0.2s ease; cursor: pointer;" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L34 34" stroke="#999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h1 style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 18px; font-weight: bold; color: #000000;"></h1>
        <div class="language-switcher">
          <button type="button" id="lang-switch-btn" class="language-switch-btn" onclick="toggleLanguageMenu(event)">
            <span aria-hidden="true">🌐</span>
            <span id="current-language-label"></span>
          </button>
          <div id="lang-menu" class="language-menu hidden" role="menu">${getLanguageMenuMarkup()}</div>
        </div>
      </header>
      
      <!-- Main Content -->
      <main style="flex: 1; padding-top: 0; display: flex; flex-direction: column; align-items: center; padding-bottom: 0; overflow-y: auto;">
        <!-- Hero Section -->
        <div class="hero-section">
          <img class="hero-image" src="/images/unnamed-2.png" alt="${subHeroAlt}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${subImgFail}%3C/text%3E%3C/svg%3E';">
          <div class="hero-gradient"></div>
        </div>
        
        <!-- Content Canvas - 统一容器 -->
        <div class="subscription-content-container">
          <h2 class="subscription-title">${t('subscription.title')}</h2>
          <p class="subscription-description">${t('subscription.description')}</p>
          
          <!-- Subscription Cards Cluster -->
          <div class="subscription-cards">
            <!-- Weekly Plan -->
            <div class="subscription-card subscription-card-selected" onclick="toggleSubscription('weekly')" id="weekly-plan">
              <div class="subscription-card-left">
                <span>${t('subscription.weekly')}</span>
                <span class="best-value-badge">${t('subscription.freeTrialBadge')}</span>
              </div>
              <div class="subscription-card-right">
                <span>${t('subscription.weekly.price')}</span>
                <div class="subscription-check subscription-check-active" id="weekly-check">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </div>
            </div>

            <!-- Monthly Plan -->
            <div class="subscription-card" onclick="toggleSubscription('monthly')" id="monthly-plan">
              <span>${t('subscription.monthly')}</span>
              <div class="subscription-card-right">
                <span>${t('subscription.monthly.price')}</span>
                <div class="subscription-check" id="monthly-check"></div>
              </div>
            </div>

            <!-- Yearly Plan -->
            <div class="subscription-card" onclick="toggleSubscription('yearly')" id="yearly-plan">
              <span>${t('subscription.yearly')}</span>
              <div class="subscription-card-right">
                <span>${t('subscription.yearly.price')}</span>
                <div class="subscription-check" id="yearly-check"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Fixed Bottom CTA Section -->
      <footer class="bottom-action" style="z-index: 100; animation: fadeInUp 0.2s ease forwards; animation-delay: 0.5s; opacity: 0;">
        <div class="button-container" style="padding-top: 12px;">
          <div class="subscription-legal-text">
            ${t('subscription.legalText')}
          </div>
          <button class="bottom-button" id="subscription-button">${t('subscription.button.freeTrial')}</button>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; border-top: 1px solid #F1F1F1; padding-top: 12px; padding-bottom: 12px;">
          <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${t('common.termsOfService')}</a>
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${t('common.privacyPolicy')}</a>
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${t('common.restorePurchase')}</a>
          </div>
          <p style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888;">${t('common.copyright')}</p>
        </div>
      </footer>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.id = 'subscription-page-styles';
  style.textContent = `
    .subscription-page {
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    .subscription-page > main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      top: 0;
    }

    .subscription-page .subscription-content-container {
      flex-shrink: 0;
      margin-bottom: 0;
    }

    .subscription-page .button-container,
    .subscription-page footer.bottom-action {
      flex-shrink: 0;
      position: relative;
      bottom: auto;
      left: auto;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    .subscription-page .subscription-legal-text {
      font-size: 12px !important;
      line-height: 1.1 !important;
      color: #999999;
      text-align: center;
      margin-bottom: 10px;
      font-family: 'PingFang SC', 'SF Pro', sans-serif;
    }

    .language-switcher {
      position: relative;
      min-width: 24px;
      display: flex;
      justify-content: flex-end;
    }

    .language-switch-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 28px;
      border-radius: 14px;
      border: 1px solid #E2E2E2;
      background: #FFFFFF;
      color: #333333;
      padding: 0 8px;
      font-size: 11px;
      cursor: pointer;
      white-space: nowrap;
    }

    .language-menu {
      position: absolute;
      top: 34px;
      right: 0;
      width: min(220px, 72vw);
      max-height: 240px;
      overflow-y: auto;
      background: #FFFFFF;
      border: 1px solid #E2E2E2;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 120;
    }

    .language-menu.hidden {
      display: none;
    }

    .language-menu-item {
      display: block;
      width: 100%;
      text-align: start;
      border: none;
      background: transparent;
      border-radius: 8px;
      padding: 8px 8px;
      font-size: 12px;
      cursor: pointer;
    }

    .language-menu-item:hover {
      background: #F7F7F7;
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .hero-section {
      width: 100%;
      position: relative;
      min-height: 200px;
      max-height: 40vh;
      overflow: hidden;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.1s;
      opacity: 0;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-image {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 40vh;
      object-fit: contain;
      display: block;
    }
    
    .hero-gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 96px;
      background: linear-gradient(to top, white 0%, transparent 100%);
    }
    
    .subscription-content-container {
      width: 100%;
      max-width: 400px;
      padding: 8px 20px 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .subscription-content-container h2.subscription-title {
      font-size: 20px;
      font-weight: bold;
      color: #000000;
      line-height: 1.15;
      text-align: center;
      font-family: 'PingFang SC', sans-serif;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.2s;
      opacity: 0;
      margin: 0;
    }
    
    .subscription-content-container p.subscription-description {
      font-size: 14px;
      color: #888888;
      font-weight: normal;
      line-height: 1.12;
      text-align: center;
      margin-top: 4px;
      font-family: 'PingFang SC', sans-serif;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    .subscription-cards {
      width: 100%;
      margin-top: 22px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.4s;
      opacity: 0;
    }
    
    .subscription-card {
      position: relative;
      width: 100%;
      /* 与未选中 1px 视觉等效：16px pad + 1px 边 ≈ 15px pad + 2px 边，选中仅改边框色、不改变占位 */
      padding: 15px;
      border: 2px solid #E2E2E2;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      transition: background-color 0.2s ease, border-color 0.2s ease;
      background-color: #F7F7F7;
      cursor: pointer;
      box-sizing: border-box;
    }
    
    .subscription-card:active {
      transform: scale(0.98);
    }
    
    .subscription-card-selected {
      border-color: #FED11F;
      background-color: #FFF9E6;
    }
    
    .subscription-card > span:first-child {
      flex: 1;
      min-width: 0;
      font-size: 18px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .subscription-card-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      flex-shrink: 0;
      flex-wrap: nowrap;
      min-width: 0;
    }
    
    .subscription-card-right > span {
      font-size: 14px !important;
      font-weight: 400;
      font-family: 'PingFang SC', sans-serif;
      color: #999999;
      min-width: 84px;
      text-align: right;
    }
    
    .subscription-card-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      min-width: 0;
    }

    .subscription-card-left > span:first-child {
      font-size: 18px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }

    /* 周套餐：左侧标题+徽章在容器内换行，避免长语文溢出 */
    #weekly-plan.subscription-card {
      align-items: flex-start;
    }

    #weekly-plan .subscription-card-left {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 100%;
    }

    #weekly-plan .subscription-card-left > span:first-child {
      max-width: 100%;
      white-space: normal;
      word-break: break-word;
      overflow-wrap: anywhere;
    }

    #weekly-plan .best-value-badge {
      display: block;
      max-width: 100%;
      box-sizing: border-box;
      white-space: normal;
      word-break: break-word;
      overflow-wrap: anywhere;
    }

    /* 整列与卡片顶部对齐；价格与勾选顶对齐（避免勾选在多行价格旁垂直居中） */
    #weekly-plan .subscription-card-right {
      flex: 0 1 40%;
      max-width: 148px;
      min-width: 0;
      align-items: center;
      align-self: center;
      flex-wrap: nowrap;
    }

    #weekly-plan .subscription-check {
      margin-top: 0;
    }

    #weekly-plan .subscription-card-right > span {
      flex: 1 1 auto;
      min-width: 0 !important;
      max-width: none;
      white-space: normal;
      word-break: break-word;
      overflow-wrap: anywhere;
      text-align: right;
      line-height: 1.3;
    }
    
    .subscription-check {
      box-sizing: border-box;
      flex: 0 0 20px;
      width: 20px;
      height: 20px;
      min-width: 20px;
      min-height: 20px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid #E2E2E2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .subscription-check-active {
      background-color: #FED11F;
      border: none;
    }
    
    .subscription-toggle {
      width: 44px;
      height: 24px;
      background-color: #E2E2E2;
      border-radius: 12px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .subscription-toggle.toggle-active {
      background-color: #FED11F;
    }
    
    .toggle-thumb {
      width: 20px;
      height: 20px;
      background-color: #FFFFFF;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: transform 0.3s ease;
    }
    
    .subscription-toggle.toggle-active .toggle-thumb {
      transform: translateX(20px);
    }
    
    .best-value-badge {
      background-color: #FED11F;
      color: black;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* iPad specific styles */
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      .subscription-page > main {
        justify-content: center;
        padding-bottom: 80px;
      }

      .hero-section {
        min-height: 200px;
        max-height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 0;
      }

      .hero-image {
        max-height: 280px;
        width: auto;
        height: auto;
        max-width: 100%;
        object-fit: contain;
        margin-top: 0;
      }

      .subscription-content-container {
        max-width: 500px;
      }
    }

    /* iPad Pro specific styles */
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      .subscription-page > main {
        justify-content: center;
        padding-bottom: 80px;
      }

      .hero-section {
        min-height: 250px;
        max-height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 0;
      }

      .hero-image {
        max-height: 320px;
        width: auto;
        height: auto;
        max-width: 100%;
        object-fit: contain;
        margin-top: 0;
      }

      .subscription-content-container {
        max-width: 500px;
      }
    }

    /* Desktop styles */
    @media only screen and (min-width: 1367px) {
      .hero-section {
        min-height: 300px;
        max-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-image {
        max-height: 400px;
        width: auto;
        height: auto;
        max-width: 100%;
        object-fit: contain;
      }

      .subscription-content-container {
        max-width: 500px;
      }
    }
  `;
  
  // 移除旧样式
  const oldStyle = document.getElementById('subscription-page-styles');
  if (oldStyle) {
    oldStyle.remove();
  }
  document.head.appendChild(style);
  initLanguageSwitcherUi();
}

// 订阅计划选择
window.toggleSubscription = function(plan) {
  const weeklyPlan = document.getElementById('weekly-plan');
  const monthlyPlan = document.getElementById('monthly-plan');
  const yearlyPlan = document.getElementById('yearly-plan');
  const weeklyCheck = document.getElementById('weekly-check');
  const monthlyCheck = document.getElementById('monthly-check');
  const yearlyCheck = document.getElementById('yearly-check');
  const subscriptionButton = document.getElementById('subscription-button');

  if (plan === 'weekly') {
    weeklyPlan.classList.add('subscription-card-selected');
    weeklyCheck.innerHTML = '<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    weeklyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center;';

    monthlyPlan.classList.remove('subscription-card-selected');
    monthlyCheck.innerHTML = '';
    monthlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    yearlyPlan.classList.remove('subscription-card-selected');
    yearlyCheck.innerHTML = '';
    yearlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    if (subscriptionButton) {
      subscriptionButton.textContent = t('subscription.button.freeTrial');
    }
  } else if (plan === 'monthly') {
    monthlyPlan.classList.add('subscription-card-selected');
    monthlyCheck.innerHTML = '<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    monthlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    weeklyPlan.classList.remove('subscription-card-selected');
    weeklyCheck.innerHTML = '';
    weeklyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center;';

    yearlyPlan.classList.remove('subscription-card-selected');
    yearlyCheck.innerHTML = '';
    yearlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    if (subscriptionButton) {
      subscriptionButton.textContent = t('subscription.button.subscribe');
    }
  } else if (plan === 'yearly') {
    yearlyPlan.classList.add('subscription-card-selected');
    yearlyCheck.innerHTML = '<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    yearlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    weeklyPlan.classList.remove('subscription-card-selected');
    weeklyCheck.innerHTML = '';
    weeklyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center;';

    monthlyPlan.classList.remove('subscription-card-selected');
    monthlyCheck.innerHTML = '';
    monthlyCheck.style.cssText = 'width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;';

    if (subscriptionButton) {
      subscriptionButton.textContent = t('subscription.button.subscribe');
    }
  }
};

// 辅助函数
window.nextPage = function() {
  if (currentPage < totalPages - 1 && !isTransitioning) {
    isTransitioning = true;
    const prevPage = currentPage;
    currentPage++;
    
    // 根据前一个页面更新进度
    // 问题页面对应的进度索引: 3->1, 4->2, 5->3, 6->4
    if (prevPage >= 3 && prevPage <= 6) {
      const questionNum = prevPage - 2;
      if (questionNum > completedQuestions) {
        completedQuestions = questionNum;
      }
    }
    
    renderPage();
    setTimeout(() => {
      isTransitioning = false;
    }, 400);
  }
};

window.prevPage = function() {
  if (currentPage > 0 && !isTransitioning) {
    isTransitioning = true;
    currentPage--;
    renderPage();
    setTimeout(() => {
      isTransitioning = false;
    }, 400);
  }
};

window.skipToPage = function(page) {
  currentPage = page;
  renderPage();
};

// 跳过当前问题，只前进一页
window.skipCurrentQuestion = function() {
  if (currentPage < totalPages - 1) {
    // 记录当前问题为已完成（即使是跳过）
    // 问题页面对应的进度索引: 3->1, 4->2, 5->3, 6->4
    if (currentPage >= 3 && currentPage <= 6) {
      const questionNum = currentPage - 2;
      if (questionNum > completedQuestions) {
        completedQuestions = questionNum;
      }
    }
    
    currentPage++;
    renderPage();
  }
};

window.selectOption = function(value) {
  // 移除其他选项的选中状态
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.classList.remove('selected');
    const checkbox = option.querySelector('.checkbox');
    if (checkbox) {
      checkbox.innerHTML = '';
      checkbox.classList.remove('checked');
    }
  });
  
  // 添加当前选项的选中状态
  event.target.closest('.option').classList.add('selected');
  const checkbox = event.target.closest('.option').querySelector('.checkbox');
  if (checkbox) {
    checkbox.innerHTML = '✓';
    checkbox.classList.add('checked');
  }
  
  // 延迟进入下一页，让用户看到选中效果
  setTimeout(() => {
    nextPage();
  }, 300);
};

window.selectGridOption = function(value) {
  // 移除其他选项的选中状态
  const options = document.querySelectorAll('.grid-item');
  options.forEach(option => {
    option.classList.remove('selected');
  });
  
  // 添加当前选项的选中状态
  event.target.closest('.grid-item').classList.add('selected');
  
  // 延迟进入下一页，让用户看到选中效果
  setTimeout(() => {
    nextPage();
  }, 300);
};

// 初始化：语言菜单回调需先于首次渲染注册，切换语言后仅重绘文案（结构不变）
attachI18nWindowHandlers();
setLocaleChangeHandler(() => {
  renderPage(false);
});
renderPage();