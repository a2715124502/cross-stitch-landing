(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();let c=0;const r=12;function s(e,t="square"){return`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(e)}&image_size=${t}`}const p=[{id:"animals",label:"动物",image:s("cute animals cross stitch pattern")},{id:"comics",label:"漫画",image:s("comic book cross stitch pattern")},{id:"people",label:"人们",image:s("people cross stitch pattern")},{id:"cute",label:"可爱",image:s("cute cartoon cross stitch pattern")},{id:"food",label:"食物",image:s("food cross stitch pattern")},{id:"mandala",label:"曼茶罗",image:s("mandala cross stitch pattern")},{id:"flowers",label:"花",image:s("flower cross stitch pattern")},{id:"simple",label:"简单",image:s("simple cross stitch pattern")}],m=[{id:"basic",label:"基础",image:s("basic color palette for cross stitch")},{id:"skin",label:"肤色",image:s("skin tone color palette for cross stitch")},{id:"makeup",label:"化妆",image:s("makeup color palette for cross stitch")},{id:"galaxy",label:"银河",image:s("galaxy color palette for cross stitch")},{id:"fabric",label:"织物",image:s("fabric color palette for cross stitch")},{id:"lips",label:"嘴唇",image:s("lip color palette for cross stitch")},{id:"rainbow",label:"彩虹",image:s("rainbow color palette for cross stitch")},{id:"sky",label:"天空",image:s("sky color palette for cross stitch")}],v=[{id:"small",label:"小刷子",image:s("small brush for cross stitch")},{id:"big",label:"大刷子",image:s("big brush for cross stitch")},{id:"spray",label:"喷雾",image:s("spray brush for cross stitch")},{id:"watercolor",label:"水彩画",image:s("watercolor brush for cross stitch")},{id:"ballpoint",label:"圆珠笔",image:s("ballpoint pen for cross stitch")},{id:"pencil",label:"铅笔",image:s("pencil for cross stitch")},{id:"pastel",label:"粉彩",image:s("pastel for cross stitch")},{id:"splash",label:"飞溅",image:s("splash brush for cross stitch")}];function l(){const e=document.getElementById("app");switch(e.innerHTML="",c){case 0:g();break;case 1:u();break;case 2:b();break;case 3:f();break;case 4:y();break;case 5:h();break;case 6:x();break;case 7:k();break;case 8:w();break;case 9:I();break;case 10:z();break;case 11:M();break}}function g(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container" style="position: relative; display: flex; align-items: center; justify-content: center;">
      <div 
        id="text1"
        style="animation: fadeInUp 0.8s ease forwards; position: absolute; text-align: center; width: 100%; max-width: 335px;"
      >
        <h1 class="title">欢迎来到Cross Stitch</h1>
        <p class="subtitle">在这里，你可以通过填色来放松心情，释放创造力，成为真正的艺术家</p>
      </div>
      
      <div 
        id="text2"
        style="opacity: 0; position: absolute; text-align: center; width: 100%; max-width: 335px;"
      >
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin: 0 auto;">
          <svg t="1774519416064" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1694" width="48" height="48"><path d="M554.92 162.9c10.18 10.44 32.76 7.23 59.24-8.41 26.48-15.64 52.83-41.34 69.14-67.42 16.3-26.08 20.07-48.57 9.89-59.01-10.18-10.44-32.76-7.23-59.24 8.41-26.48 15.65-52.83 41.35-69.14 67.43-16.3 26.08-20.07 48.57-9.89 59z m0 0M494.33 262.41c2.97 14.28 23.73 23.71 54.47 24.76 30.74 1.05 66.78-6.45 94.55-19.67 27.77-13.22 43.04-30.16 40.07-44.44-2.97-14.27-23.73-23.71-54.47-24.76-30.74-1.05-66.78 6.45-94.55 19.67-27.77 13.23-43.04 30.17-40.07 44.44z m0 0M424.36 150.64c2.56 34.4 12.68 65.62 26.55 81.89 13.87 16.27 29.38 15.11 40.69-3.03 11.31-18.14 16.7-50.51 14.14-84.92-2.56-34.41-12.68-65.62-26.55-81.89-13.87-16.27-29.38-15.11-40.69 3.03-11.31 18.14-16.7 50.51-14.14 84.92z m0 0M426.3 401.09c5.03 13.68 26.95 19.98 57.51 16.51 30.56-3.46 65.11-16.17 90.64-33.32s38.16-36.14 33.12-49.82c-5.03-13.69-26.95-19.98-57.51-16.51-30.56 3.46-65.12 16.17-90.64 33.32-25.52 17.14-38.15 36.13-33.12 49.82z m0 0M341.03 302.08c11.71 52.03 39.03 90.2 61.01 85.26 21.98-4.95 30.31-51.14 18.6-103.17-11.71-52.03-39.03-90.2-61.01-85.25-21.98 4.94-30.31 51.13-18.6 103.16z m0 0M425.92 566.28c9.45 11.09 32.2 9.41 59.67-4.43s55.48-37.71 73.49-62.65c18.01-24.93 23.28-47.12 13.82-58.21-9.46-11.1-32.2-9.41-59.67 4.42s-55.48 37.72-73.49 62.65c-18.01 24.93-23.28 47.13-13.82 58.22z m0 0M311.48 502.97c29.01 44.75 67.85 71.1 86.76 58.84 18.91-12.26 10.72-58.47-18.28-103.23-29.01-44.76-67.85-71.1-86.76-58.84-18.92 12.26-10.73 58.48 18.28 103.23z m0 0M475.69 723.78c12.67 7.21 33.48-2.12 54.59-24.48 21.11-22.36 39.32-54.36 47.76-83.93 8.44-29.57 5.84-52.23-6.83-59.44-12.67-7.21-33.48 2.12-54.59 24.48-21.11 22.36-39.32 54.36-47.76 83.93-8.45 29.58-5.84 52.24 6.83 59.44z m0 0M346.24 702.24c42.51 32.21 88.01 43.75 101.61 25.79 13.61-17.96-9.82-58.63-52.34-90.83-42.51-32.21-88.01-43.75-101.61-25.78-13.61 17.95 9.82 58.62 52.34 90.82z m0 0M584.76 856.77c22.39 2.57 45.48-38.29 51.57-91.27 6.09-52.98-7.11-98.02-29.5-100.6-22.39-2.57-45.48 38.29-51.57 91.27-6.09 52.99 7.11 98.02 29.5 100.6z m0 0M457.99 889.39c51.73 12.96 98.11 5.74 103.58-16.12 5.48-21.86-32.02-50.08-83.76-63.04s-98.11-5.74-103.59 16.12c-5.46 21.86 32.04 50.08 83.77 63.04z m0 0M658.45 851.41c6.05 52.99 29.1 93.87 51.49 91.32 22.39-2.55 35.64-47.59 29.59-100.57-6.05-52.99-29.1-93.87-51.49-91.31-22.39 2.55-35.64 47.57-29.59 100.56z m0 0M593.72 1001.97c34.5 0.59 66.51-6.63 83.98-18.96 17.47-12.32 17.73-27.88 0.7-40.8-17.03-12.92-48.78-21.25-83.28-21.84-34.5-0.59-66.51 6.63-83.98 18.96-17.47 12.32-17.73 27.88-0.7 40.8 17.04 12.92 48.78 21.24 83.28 21.84z m0 0" fill="#B5B5B5" p-id="1695"></path></svg>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
            <h2 class="title">100M</h2>
            <p class="subtitle">快乐的艺术家</p>
          </div>
          <svg t="1774519452716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1836" width="48" height="48"><path d="M371.99 124.79c38.21 37.27 81.95 54.39 97.7 38.24 15.74-16.14-2.46-59.45-40.68-96.71-38.21-37.27-81.96-54.39-97.7-38.25-15.75 16.16 2.47 59.46 40.68 96.72z m0 0M429.03 281.36c52.25 10.88 98.34 1.79 102.94-20.29 4.59-22.08-34.05-48.8-86.3-59.67-52.26-10.87-98.35-1.79-102.94 20.29-4.6 22.08 34.04 48.79 86.3 59.67z m0 0M551.57 243.35c22.49 1.67 43.94-40.12 47.89-93.35 3.96-53.23-11.06-97.73-33.55-99.41-22.49-1.67-43.94 40.12-47.89 93.35-3.96 53.23 11.06 97.73 33.55 99.41z m0 0M494.35 406.27c50.1 18.42 97.02 16.18 104.8-4.98 7.78-21.17-26.52-53.26-76.62-71.68-50.1-18.42-97.02-16.18-104.8 4.99-7.79 21.17 26.52 53.25 76.62 71.67z m0 0M623.46 387.55c14.23 3.21 31.43-11.8 45.12-39.37 13.68-27.57 21.78-63.52 21.23-94.29-0.55-30.78-9.66-51.71-23.9-54.91-14.23-3.2-31.43 11.81-45.12 39.38-13.68 27.57-21.77 63.52-21.22 94.29 0.55 30.77 9.65 51.7 23.89 54.9z m0 0M498.87 533.64c40.62 34.63 85.41 48.78 100.04 31.62 14.63-17.16-6.44-59.15-47.06-93.78-40.62-34.62-85.41-48.78-100.04-31.62-14.63 17.17 6.44 59.15 47.06 93.78z m0 0M626.62 560.34c12.24 7.94 33.57-0.19 55.96-21.31 22.39-21.13 42.43-52.05 52.57-81.11 10.14-29.06 8.84-51.85-3.4-59.79-12.24-7.94-33.57 0.19-55.96 21.31-22.39 21.13-42.43 52.04-52.57 81.11-10.15 29.07-8.85 51.86 3.4 59.79z m0 0M465.46 660.22c26.41 46.39 63.7 74.95 83.3 63.8 19.6-11.16 14.09-57.81-12.31-104.2s-63.69-74.95-83.29-63.8c-19.62 11.16-14.11 57.81 12.3 104.2z m0 0M576.22 728.09c8.81 11.63 31.63 11.26 59.87-0.98s57.61-34.49 77.05-58.36c19.43-23.87 25.98-45.74 17.16-57.37-8.81-11.63-31.63-11.26-59.88 0.98-28.24 12.24-57.61 34.49-77.04 58.36-19.43 23.87-25.97 45.74-17.16 57.37z m0 0M387.03 765.67c6.1 53.03 29.21 93.92 51.62 91.35 22.41-2.58 35.63-47.66 29.52-100.68-6.1-53.03-29.21-93.92-51.62-91.35-22.41 2.57-35.62 47.65-29.52 100.68z m0 0M463.17 872.94c3.54 14.15 24.69 22.75 55.47 22.56 30.78-0.19 66.52-9.15 93.75-23.5 27.24-14.35 41.82-31.9 38.28-46.05-3.55-14.16-24.69-22.75-55.47-22.56-30.78 0.19-66.52 9.15-93.75 23.5-27.24 14.34-41.83 31.89-38.28 46.05z m0 0M313.14 942.95c14.49 1.66 29.98-15.12 40.62-44 10.64-28.88 14.82-65.49 10.96-96.03-3.86-30.54-15.16-50.37-29.66-52.02-14.5-1.65-29.98 15.12-40.62 44-10.64 28.88-14.82 65.49-10.96 96.03 3.86 30.54 15.16 50.37 29.66 52.02z m0 0M332.44 962.8c0.25 14.59 18.91 27.75 48.93 34.53 30.03 6.78 66.87 6.14 96.64-1.67 29.78-7.81 47.96-21.61 47.71-36.2-0.25-14.59-18.9-27.75-48.93-34.52-30.03-6.78-66.87-6.14-96.64 1.67-29.78 7.8-47.97 21.6-47.71 36.19z m0 0" fill="#B5B5B5" p-id="1837"></path></svg>
        </div>
      </div>
      
      <div 
        id="text3"
        style="opacity: 0; position: absolute; text-align: center; width: 100%; max-width: 335px;"
      >
        <h2 class="title">"这是我每天放松的最佳方式，Cross Stitch让我的生活更加充实"</h2>
        <p class="subtitle" style="margin-top: 16px;">- Sarah, 资深用户</p>
      </div>
    </div>
  `,setTimeout(()=>{const t=document.getElementById("text1"),a=document.getElementById("text2");t&&a&&(t.style.animation="fadeOutUp 0.8s ease forwards",setTimeout(()=>{a.style.animation="fadeInUp 0.8s ease forwards"},400))},2e3),setTimeout(()=>{const t=document.getElementById("text2"),a=document.getElementById("text3");t&&a&&(t.style.animation="fadeOutUp 0.8s ease forwards",setTimeout(()=>{a.style.animation="fadeInUp 0.8s ease forwards"},400))},4e3),setTimeout(()=>{const t=document.getElementById("text3");t&&(t.style.animation="fadeOutUp 0.8s ease forwards",setTimeout(()=>{c=1,l()},800))},6e3)}function u(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container" style="background-image: url('${s("person using iPad for cross stitch coloring")}'); background-size: cover; background-position: center; justify-content: flex-end; position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%); z-index: 1;"></div>
      
      <div style="position: relative; z-index: 2; width: 100%; max-width: 335px; text-align: center; margin-bottom: 16px;">
        <h1 
          style="animation: fadeInUp 0.8s ease forwards; font-size: 32px;"
          class="title text-white"
        >
          你每天的上色乐趣空间
        </h1>
      </div>
      
      <div style="position: relative; z-index: 2; width: 100%; display: flex; justify-content: center;">
        <button 
          style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
          class="button"
          onclick="nextPage()"
        >
          开始吧
        </button>
      </div>
    </div>
  `;const t=document.createElement("style");t.textContent=`
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
  `,document.head.appendChild(t)}function b(){const e=document.getElementById("app"),t=["https://neeko-copilot.bytedance.net/api/text2image?prompt=colorful cartoon girl with blue hair&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=black and white line art girl with bun hairstyle&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=cute lion cartoon character&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=mermaid with green hair&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=princess line art coloring page&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=girl with cat on roof at night&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=cartoon cow with strawberry&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=girl with purple curly hair&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=floral pattern background&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=purple hair girl cartoon&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=black and white doodle art&size=512x512","https://neeko-copilot.bytedance.net/api/text2image?prompt=cherry blossom pattern&size=512x512"];e.innerHTML=`
    <div class="container" style="position: relative; justify-content: flex-end; background-color: #f5f5f5;">
      <!-- 网格背景 -->
      <div 
        style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr); gap: 8px; padding: 8px;">
        ${t.map(a=>`
          <div 
            style="background-image: url('${a}'); background-size: cover; background-position: center; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"
          >
          </div>
        `).join("")}
      </div>
      
      <!-- 渐变蒙版 -->
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.8) 100%); z-index: 1;"></div>
      
      <!-- 内容区域 -->
      <div style="position: relative; z-index: 2; width: 100%; max-width: 335px; text-align: center; margin-bottom: 16px;">
        <h1 
          style="animation: fadeInUp 0.8s ease forwards; font-size: 28px; color: #333333; font-weight: 700;"
          class="title"
        >
          你的上色风格是什么？
        </h1>
        <p 
          style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0; color: #666666; font-size: 16px;"
          class="text"
        >
          揭示你创造力优势的四个问题
        </p>
      </div>
      
      <!-- 继续按钮 -->
      <button 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0; position: relative; z-index: 2; background-color: #4A90E2; color: white; border-radius: 28px; height: 56px; font-size: 18px; font-weight: 600; width: 100%; max-width: 335px;"
        class="button"
        onclick="nextPage()"
      >
        继续
      </button>
    </div>
  `}function f(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <div style="width: 36px;"></div> <!-- 占位 -->
        <div class="progress-bar">
          <div class="progress-fill" style="width: 25%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(7)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        你的性别是什么？
      </h1>
      
      <p 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="text"
      >
        这帮助我们个性化您的体验
      </p>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0;"
        class="option-list"
      >
        <div class="option" onclick="selectOption('female')">
          <div class="option-icon">👩</div>
          <div class="option-text">女性</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('male')">
          <div class="option-icon">👨</div>
          <div class="option-text">男性</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('other')">
          <div class="option-icon">⚧</div>
          <div class="option-text">其他</div>
          <div class="checkbox"></div>
        </div>
      </div>
    </div>
  `}function y(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <button class="back-button" onclick="prevPage()">←</button>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 50%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(7)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        你的年龄组是什么？
      </h1>
      
      <p 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="text"
      >
        这帮助我们建议相关的风格
      </p>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0;"
        class="option-list"
      >
        <div class="option" onclick="selectOption('under14')">
          <div class="option-text">14岁以下</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('14-17')">
          <div class="option-text">14-17</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('18-24')">
          <div class="option-text">18-24</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('25-34')">
          <div class="option-text">25-34</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('35-44')">
          <div class="option-text">35-44</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('45+')">
          <div class="option-text">45岁或更大</div>
          <div class="checkbox"></div>
        </div>
      </div>
    </div>
  `}function h(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <button class="back-button" onclick="prevPage()">←</button>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 75%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(7)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        哪种风格最能激励你？
      </h1>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="grid-container"
      >
        ${p.map(t=>`
          <div 
            class="grid-item" 
            style="background-image: url('${t.image}'); background-size: cover; background-position: center;"
            onclick="toggleOption('style', '${t.id}')"
          >
            <span>${t.label}</span>
          </div>
        `).join("")}
      </div>
      
      <button 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0;"
        class="button" 
        id="continueButton"
        disabled
        onclick="nextPage()"
      >
        继续
      </button>
    </div>
  `,window.toggleOption=function(t,a){const n=document.querySelector(`[onclick="toggleOption('${t}', '${a}')"]`);if(n){n.classList.toggle("selected");const i=document.querySelectorAll(".grid-item.selected"),o=document.getElementById("continueButton");o&&(o.disabled=i.length===0)}}}function x(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <button class="back-button" onclick="prevPage()">←</button>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 100%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(7)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        你的目标是什么？
      </h1>
      
      <p 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="text"
      >
        这帮助我们个性化您的体验
      </p>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0;"
        class="option-list"
      >
        <div class="option" onclick="selectOption('relax')">
          <div class="option-text">放松自己</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('fun')">
          <div class="option-text">玩的开心</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('creativity')">
          <div class="option-text">表达我的创造力</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('disconnect')">
          <div class="option-text">断开我的大脑</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('skills')">
          <div class="option-text">发展我的着色技巧</div>
          <div class="checkbox"></div>
        </div>
        <div class="option" onclick="selectOption('other')">
          <div class="option-text">其他</div>
          <div class="checkbox"></div>
        </div>
      </div>
    </div>
  `}function k(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container" style="justify-content: center;">
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        这全是关于颜色和画笔的
      </h1>
      
      <p 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="text"
      >
        找到你故事的工具
      </p>
      
      <div style="position: absolute; bottom: 20px; width: 100%; display: flex; justify-content: center;">
        <button 
          style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.4s; opacity: 0;"
          class="button"
          onclick="nextPage()"
        >
          继续
        </button>
      </div>
    </div>
  `}function w(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <button class="back-button" onclick="prevPage()">←</button>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 50%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(10)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        你喜欢哪种调色板？
      </h1>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="grid-container"
      >
        ${m.map(t=>`
          <div 
            class="grid-item" 
            style="background-image: url('${t.image}'); background-size: cover; background-position: center;"
            onclick="selectGridOption('${t.id}')"
          >
            <span>${t.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function I(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container">
      <div class="header">
        <button class="back-button" onclick="prevPage()">←</button>
        <div class="progress-bar">
          <div class="progress-fill" style="width: 100%;"></div>
        </div>
        <button class="skip-button" onclick="skipToPage(10)">跳过</button>
      </div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title"
      >
        你喜欢哪种笔刷？
      </h1>
      
      <div 
        style="animation: fadeInUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0;"
        class="grid-container"
      >
        ${v.map(t=>`
          <div 
            class="grid-item" 
            style="background-image: url('${t.image}'); background-size: cover; background-position: center;"
            onclick="selectGridOption('${t.id}')"
          >
            <span>${t.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function z(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container" style="justify-content: center;">
      <div class="emoji-container" id="emojiContainer"></div>
      
      <h1 
        style="animation: fadeInUp 0.8s ease forwards;"
        class="title" 
        id="loadingText"
      >
        正在设置您的上色体验
      </h1>
      
      <div class="loading-container">
        <div 
          style="animation: scaleIn 0.5s ease forwards;"
          class="loading-circle" 
          id="loadingCircle"
        ></div>
      </div>
      
      <div style="position: absolute; bottom: 20px; width: 100%; display: flex; justify-content: center;">
        <button 
          style="opacity: 0;"
          class="button" 
          id="tryButton"
          onclick="nextPage()"
        >
          让我们试试
        </button>
      </div>
    </div>
  `;const t=["🎨","🖌️","🌈","✏️","🎭","✨","🌟","💫"],a=document.getElementById("emojiContainer");for(let n=0;n<8;n++){const i=document.createElement("div");i.className="emoji",i.textContent=t[Math.floor(Math.random()*t.length)],i.style.left=`${Math.random()*100}%`,i.style.top=`${Math.random()*100}%`,i.style.animationDelay=`${Math.random()*3}s`,a.appendChild(i)}setTimeout(()=>{const n=document.getElementById("loadingCircle"),i=document.getElementById("loadingText"),o=document.getElementById("tryButton");n&&(n.className="loading-check",n.innerHTML="✓"),i&&(i.textContent="准备好了。准备好尝试一下吗？"),o&&(o.style.animation="fadeInUp 0.8s ease forwards")},3e3)}function M(){const e=document.getElementById("app");e.innerHTML=`
    <div class="container" style="justify-content: flex-start; padding-top: 20px;">
      <div 
        style="animation: fadeInUp 0.8s ease forwards; width: 100%; max-width: 335px;"
      >
        <img 
          src="${s("cross stitch coloring art")}" 
          alt="十字绣涂色艺术" 
          class="banner"
        />
        
        <h1 class="title">无限制访问所有分类和图片，无限制导入图片,无广告</h1>
        
        <p class="text">解锁全部功能，享受无限创作乐趣</p>
        
        <div class="plan-container">
          <div class="plan-item">
            <span class="plan-name">月订阅</span>
            <span class="plan-price">$9.99</span>
          </div>
          <div class="plan-item">
            <span class="plan-name">年订阅</span>
            <span class="plan-price">$59.99</span>
          </div>
        </div>
        
        <div class="restore-link">内购恢复</div>
        
        <p class="terms-text">
          以上订阅选项均为自动续订订阅，订阅费用会在您确认购买或者试用期结束的时候通过你的苹果账户扣除。如果不需要续订，记得在订阅到期或免费试用到期之前至少24小时取消掉订阅，你可随时在自己的苹果账户的设置中可以找到订阅管理。
        </p>
      </div>
      
      <div style="position: absolute; bottom: 20px; width: 100%; display: flex; justify-content: center;">
        <button class="button">立即订阅</button>
      </div>
    </div>
  `}window.nextPage=function(){c<r-1&&(c++,l())};window.prevPage=function(){c>0&&(c--,l())};window.skipToPage=function(e){c=e,l()};window.selectOption=function(e){document.querySelectorAll(".option").forEach(n=>{n.classList.remove("selected");const i=n.querySelector(".checkbox");i&&(i.innerHTML="",i.classList.remove("checked"))}),event.target.closest(".option").classList.add("selected");const a=event.target.closest(".option").querySelector(".checkbox");a&&(a.innerHTML="✓",a.classList.add("checked")),setTimeout(()=>{nextPage()},300)};window.selectGridOption=function(e){document.querySelectorAll(".grid-item").forEach(a=>{a.classList.remove("selected")}),event.target.closest(".grid-item").classList.add("selected"),setTimeout(()=>{nextPage()},300)};l();
