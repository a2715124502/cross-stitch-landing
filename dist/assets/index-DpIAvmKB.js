(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const T={"zh-CN":{"common.skip":"跳过","common.continue":"继续","common.next":"下一步","common.start":"开始吧","common.freeTrial":"免费试用","common.subscribeNow":"立即订阅","common.quizProgress":"答题进度","common.letMeTry":"让我试试","common.imageLoadFailed":"图片加载失败","common.restorePurchase":"Restore Purchase","common.termsOfService":"Terms of Service","common.privacyPolicy":"Privacy Policy","common.copyright":"© 2024 Cross Stitch. All rights reserved.","styles.animals":"动物","styles.comics":"艺术","styles.people":"花朵","styles.cute":"自然","styles.food":"宠物","styles.mandala":"庆祝","styles.flowers":"食物","styles.simple":"超级尺寸","onboarding.page1.title":"欢迎来到Cross Stitch","onboarding.page1.subtitle":"每一次填色，都是创作","onboarding.page1.totalDownloads":"累计下载 5M+","onboarding.page1.happyArtists":"快乐的艺术家 1M+","onboarding.page1.testimonial":'"这是我每天放松的最佳方式，Cross Stitch让我的生活更加充实"',"onboarding.page1.author":"Sarah, 资深用户","onboarding.page2.title":"欢迎来到Cross Stitch","onboarding.page2.subtitle":"创造、上色和享受乐趣","onboarding.page2.button":"开始吧","onboarding.page3.title":"你的上色风格是什么？","onboarding.page3.subtitle":"揭示你创造力优势的四个问题","onboarding.page3.button":"继续","questions.page1.title":"你的性别是什么？","questions.page1.subtitle":"这帮助我们个性化您的体验。","questions.page1.skip":"跳过","questions.page1.female":"女性","questions.page1.male":"男性","questions.page1.other":"其他","questions.page2.title":"你的年龄组是什么？","questions.page2.subtitle":"这帮助我们建议相关的风格。","questions.page2.skip":"跳过","questions.page2.under18":"18岁以下","questions.page2.18-29":"18-29岁","questions.page2.30-39":"30-39岁","questions.page2.40-49":"40-49岁","questions.page2.50-59":"50-59岁","questions.page2.over60":"60岁以上","questions.page3.title":"哪种风格最能激励你？","questions.page3.subtitle":"选择所有适合您的选项。","questions.page3.skip":"跳过","questions.page3.button":"下一步","questions.page3.style.animals":"动物","questions.page3.style.comics":"艺术","questions.page3.style.people":"花朵","questions.page3.style.cute":"自然","questions.page3.style.food":"宠物","questions.page3.style.mandala":"庆祝","questions.page3.style.flowers":"食物","questions.page3.style.simple":"超级尺寸","questions.page4.title":"你的目标是什么？","questions.page4.subtitle":"这帮助我们个性化您的体验。","questions.page4.skip":"跳过","questions.page4.relaxMyself":"放松自己","questions.page4.haveFun":"玩得开心","questions.page4.expressCreativity":"表达我的创造力","questions.page4.clearMind":"放空大脑","questions.page4.developSkills":"发展我的着色技巧","questions.page4.relieveStress":"缓解压力","questions.page4.other":"其他","onboarding.page4.title":"这全是关于颜色和<br>画笔的","onboarding.page4.subtitle":"找到你故事的工具","onboarding.page4.button":"继续","questions.page5.title":"哪些调色板最能引起你的共鸣？","questions.page5.skip":"跳过","questions.page5.button":"下一步","questions.page5.palette.basic":"基础","questions.page5.palette.skin":"肤色","questions.page5.palette.makeup":"化妆","questions.page5.palette.galaxy":"银河","questions.page5.palette.fabric":"织物","questions.page5.palette.lips":"嘴唇","questions.page5.palette.rainbow":"彩虹","questions.page5.palette.sky":"天空","questions.page6.title":"你最期待尝试哪些刷子？","questions.page6.skip":"跳过","questions.page6.button":"继续","questions.page6.brush.small":"小刷子","questions.page6.brush.big":"大刷子","questions.page6.brush.spray":"喷雾","questions.page6.brush.watercolor":"水彩画","questions.page6.brush.ballpoint":"圆珠笔","questions.page6.brush.pencil":"铅笔","questions.page6.brush.pastel":"粉彩","questions.page6.brush.splash":"飞溅","loading.analyzing":"正在分析你的风格偏好...","loading.ready":"你的专属填色体验已就绪","loading.tryButton":"让我试试","loading.matched.single":"已为你匹配专属图案","loading.matched.multi":"已为你匹配 {styles} 风格专属图案","loading.matched.many":"已为你匹配 {firstThree} 等{count}种风格专属图案","trial.title":"免费试用3天","trial.day0":"今天","trial.day0.description":"无限访问所有分类和图片，无限制导入图片，无广告","trial.day2":"2天后","trial.day2.description":"试用期结束前一天，您将收到提醒","trial.day3":"3天后","trial.day3.description":"{date}前无需付费。您可以提前取消","trial.button":"免费试用","subscription.title":"解锁你的专属内容","subscription.description":"无限制访问所有分类和图片，无限制导入图片","subscription.weekly":"Weekly","subscription.monthly":"Monthly","subscription.yearly":"Yearly","subscription.bestValue":"Best Value","subscription.freeTrialBadge":"3天免费试用","subscription.weekly.price":"然后$3.49/周","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"免费试用","subscription.button.subscribe":"立即订阅","subscription.legalText":"以上订阅选项均为自动续订订阅，订阅费用会在您确认购买或者试用期结束的时候通过你的苹果账户扣除。如果不需要续订，记得在订阅到期或免费试用到期之前至少24小时取消掉订阅，你可随时在自己的苹果账户的设置中可以找到订阅管理，若您在试用期未结束之前购买月度和年度订阅，则剩余未使用试用期时长自动作废。"},"zh-TW":{"common.skip":"跳過","common.continue":"繼續","common.next":"下一步","common.start":"開始吧","common.freeTrial":"免費試用","common.subscribeNow":"立即訂閱","common.quizProgress":"答題進度","common.letMeTry":"讓我試試","common.imageLoadFailed":"圖片加載失敗","common.restorePurchase":"回復購買","common.termsOfService":"服務條款","common.privacyPolicy":"隱私權政策","common.copyright":"© 2024 Cross Stitch. All rights reserved.","styles.animals":"動物","styles.comics":"藝術","styles.people":"花朵","styles.cute":"自然","styles.food":"寵物","styles.mandala":"慶祝","styles.flowers":"食物","styles.simple":"超級尺寸","onboarding.page1.title":"歡迎來到Cross Stitch","onboarding.page1.subtitle":"每一次填色，都是創作","onboarding.page1.totalDownloads":"累計下載 5M+","onboarding.page1.happyArtists":"快樂的藝術家 1M+","onboarding.page1.testimonial":'"這是我每天放鬆的最佳方式，Cross Stitch讓我的生活更加充實"',"onboarding.page1.author":"Sarah, 資深用戶","onboarding.page2.title":"歡迎來到Cross Stitch","onboarding.page2.subtitle":"創造、上色和享受樂趣","onboarding.page2.button":"開始吧","onboarding.page3.title":"你的上色風格是什麼？","onboarding.page3.subtitle":"揭示你創造力優勢的四個問題","onboarding.page3.button":"繼續","questions.page1.title":"你的性別是什麼？","questions.page1.subtitle":"這幫助我們個性化您的體驗。","questions.page1.skip":"跳過","questions.page1.female":"女性","questions.page1.male":"男性","questions.page1.other":"其他","questions.page2.title":"你的年齡組是什麼？","questions.page2.subtitle":"這幫助我們建議相關的風格。","questions.page2.skip":"跳過","questions.page2.under18":"18歲以下","questions.page2.18-29":"18-29歲","questions.page2.30-39":"30-39歲","questions.page2.40-49":"40-49歲","questions.page2.50-59":"50-59歲","questions.page2.over60":"60歲以上","questions.page3.title":"哪種風格最能激勵你？","questions.page3.subtitle":"選擇所有適合您的選項。","questions.page3.skip":"跳過","questions.page3.button":"下一步","questions.page3.style.animals":"動物","questions.page3.style.comics":"藝術","questions.page3.style.people":"花朵","questions.page3.style.cute":"自然","questions.page3.style.food":"寵物","questions.page3.style.mandala":"慶祝","questions.page3.style.flowers":"食物","questions.page3.style.simple":"超級尺寸","questions.page4.title":"你的目標是什麼？","questions.page4.subtitle":"這幫助我們個性化您的體驗。","questions.page4.skip":"跳過","questions.page4.relaxMyself":"放鬆自己","questions.page4.haveFun":"玩得開心","questions.page4.expressCreativity":"表達我的創造力","questions.page4.clearMind":"放空大腦","questions.page4.developSkills":"發展我的著色技巧","questions.page4.relieveStress":"緩解壓力","questions.page4.other":"其他","onboarding.page4.title":"這全是關於顏色和<br>畫筆的","onboarding.page4.subtitle":"找到你故事的工具","onboarding.page4.button":"繼續","questions.page5.title":"哪些調色板最能引起你的共鳴？","questions.page5.skip":"跳過","questions.page5.button":"下一步","questions.page5.palette.basic":"基礎","questions.page5.palette.skin":"膚色","questions.page5.palette.makeup":"化妝","questions.page5.palette.galaxy":"銀河","questions.page5.palette.fabric":"織物","questions.page5.palette.lips":"嘴唇","questions.page5.palette.rainbow":"彩虹","questions.page5.palette.sky":"天空","questions.page6.title":"你最期待嘗試哪些刷子？","questions.page6.skip":"跳過","questions.page6.button":"繼續","questions.page6.brush.small":"小刷子","questions.page6.brush.big":"大刷子","questions.page6.brush.spray":"噴霧","questions.page6.brush.watercolor":"水彩畫","questions.page6.brush.ballpoint":"圓珠筆","questions.page6.brush.pencil":"鉛筆","questions.page6.brush.pastel":"粉彩","questions.page6.brush.splash":"飛濺","loading.analyzing":"正在分析你的風格偏好...","loading.ready":"你的專屬填色體驗已就緒","loading.tryButton":"讓我試試","loading.matched.single":"已為你匹配專屬圖案","loading.matched.multi":"已為你匹配 {styles} 風格專屬圖案","loading.matched.many":"已為你匹配 {firstThree} 等{count}種風格專屬圖案","trial.title":"免費試用3天","trial.day0":"今天","trial.day0.description":"無限訪問所有分類和圖片，無限制導入圖片，無廣告","trial.day2":"2天後","trial.day2.description":"試用期結束前一天，您將收到提醒","trial.day3":"3天後","trial.day3.description":"{date}前無需付費。您可以提前取消","trial.button":"免費試用","subscription.title":"解鎖你的專屬內容","subscription.description":"無限制訪問所有分類和圖片，無限制導入圖片","subscription.weekly":"Weekly","subscription.monthly":"Monthly","subscription.yearly":"Yearly","subscription.bestValue":"Best Value","subscription.freeTrialBadge":"3天免費試用","subscription.weekly.price":"然後$3.49/週","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"免費試用","subscription.button.subscribe":"立即訂閱","subscription.legalText":"以上訂閱選項均為自動續訂訂閱，訂閱費用會在您確認購買或者試用期結束的時候通過你的蘋果賬戶扣除。如果不需要續訂，記得在訂閱到期或免費試用到期之前至少24小時取消掉訂閱，你可隨時在自己的蘋果賬戶的設置中可以找到訂閱管理，若您在試用期未結束之前購買月度和年度訂閱，則剩餘未使用試用期時長自動作廢。"},en:{"common.skip":"Skip","common.continue":"Continue","common.next":"Next","common.start":"Get Started","common.freeTrial":"Free Trial","common.subscribeNow":"Subscribe Now","common.quizProgress":"Quiz Progress","common.letMeTry":"Let Me Try","common.imageLoadFailed":"Image Load Failed","common.restorePurchase":"Restore Purchase","common.termsOfService":"Terms of Service","common.privacyPolicy":"Privacy Policy","common.copyright":"© 2024 Cross Stitch. All rights reserved.","styles.animals":"Animals","styles.comics":"Comics","styles.people":"People","styles.cute":"Cute","styles.food":"Food","styles.mandala":"Mandala","styles.flowers":"Flowers","styles.simple":"Simple","onboarding.page1.title":"Welcome to Cross Stitch","onboarding.page1.subtitle":"Every coloring is a creation","onboarding.page1.totalDownloads":"Total Downloads 5M+","onboarding.page1.happyArtists":"Happy Artists 1M+","onboarding.page1.testimonial":'"This is the best way for me to relax every day. Cross Stitch makes my life more fulfilling"',"onboarding.page1.author":"Sarah, Senior User","onboarding.page2.title":"Welcome to Cross Stitch","onboarding.page2.subtitle":"Create, Color, and Have Fun","onboarding.page2.button":"Get Started","onboarding.page3.title":"What's Your Coloring Style?","onboarding.page3.subtitle":"Four Questions to Reveal Your Creative Strengths","onboarding.page3.button":"Continue","questions.page1.title":"What's Your Gender?","questions.page1.subtitle":"This helps us personalize your experience.","questions.page1.skip":"Skip","questions.page1.female":"Female","questions.page1.male":"Male","questions.page1.other":"Other","questions.page2.title":"What's Your Age Group?","questions.page2.subtitle":"This helps us suggest relevant styles.","questions.page2.skip":"Skip","questions.page2.under18":"Under 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"60+","questions.page3.title":"Which Style Inspires You Most?","questions.page3.subtitle":"Select all options that apply.","questions.page3.skip":"Skip","questions.page3.button":"Next","questions.page3.style.animals":"Animals","questions.page3.style.comics":"Comics","questions.page3.style.people":"People","questions.page3.style.cute":"Cute","questions.page3.style.food":"Food","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Flowers","questions.page3.style.simple":"Simple","questions.page4.title":"What's Your Goal?","questions.page4.subtitle":"This helps us personalize your experience.","questions.page4.skip":"Skip","questions.page4.relaxMyself":"Relax Myself","questions.page4.haveFun":"Have Fun","questions.page4.expressCreativity":"Express My Creativity","questions.page4.clearMind":"Clear My Mind","questions.page4.developSkills":"Develop My Coloring Skills","questions.page4.relieveStress":"Relieve Stress","questions.page4.other":"Other","onboarding.page4.title":"It's All About Color and <br>Brushes","onboarding.page4.subtitle":"Find the Tools for Your Story","onboarding.page4.button":"Continue","questions.page5.title":"Which Palettes Resonate With You Most?","questions.page5.skip":"Skip","questions.page5.button":"Next","questions.page5.palette.basic":"Basic","questions.page5.palette.skin":"Skin","questions.page5.palette.makeup":"Makeup","questions.page5.palette.galaxy":"Galaxy","questions.page5.palette.fabric":"Fabric","questions.page5.palette.lips":"Lips","questions.page5.palette.rainbow":"Rainbow","questions.page5.palette.sky":"Sky","questions.page6.title":"Which Brushes Are You Most Excited to Try?","questions.page6.skip":"Skip","questions.page6.button":"Continue","questions.page6.brush.small":"Small Brush","questions.page6.brush.big":"Big Brush","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Watercolor","questions.page6.brush.ballpoint":"Ballpoint Pen","questions.page6.brush.pencil":"Pencil","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Splash","loading.analyzing":"Analyzing your style preferences...","loading.ready":"Your exclusive coloring experience is ready","loading.tryButton":"Let Me Try","loading.matched.single":"Matched exclusive pattern for you","loading.matched.multi":"Matched {styles} style exclusive pattern for you","loading.matched.many":"Matched {firstThree} and {count} other styles exclusive patterns for you","trial.title":"Free 3-Day Trial","trial.day0":"Today","trial.day0.description":"Unlimited access to all categories and images, unlimited image imports, no ads","trial.day2":"In 2 Days","trial.day2.description":"You'll receive a reminder one day before the trial ends","trial.day3":"In 3 Days","trial.day3.description":"No payment required before {date}. You can cancel early","trial.button":"Free Trial","subscription.title":"Unlock Your Exclusive Content","subscription.description":"Unlimited access to all categories and images, unlimited image imports","subscription.weekly":"Weekly","subscription.monthly":"Monthly","subscription.yearly":"Yearly","subscription.bestValue":"Best Value","subscription.freeTrialBadge":"3-Day Free Trial","subscription.weekly.price":"Then $3.49/week","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Free Trial","subscription.button.subscribe":"Subscribe Now","subscription.legalText":"All subscription options above are auto-renewing. Subscription fees will be charged to your Apple account when you confirm purchase or at the end of the trial period. If you don't want to renew, remember to cancel the subscription at least 24 hours before the subscription or free trial expires. You can find subscription management in your Apple account settings at any time. If you purchase a monthly or yearly subscription before the trial period ends, the remaining unused trial time will be automatically forfeited."},fr:{"common.skip":"Passer","common.continue":"Continuer","common.next":"Suivant","common.start":"Commencer","common.freeTrial":"Essai Gratuit","common.subscribeNow":"S'abonner Maintenant","common.quizProgress":"Progression du Quiz","common.letMeTry":"Laissez-moi Essayer","common.imageLoadFailed":"Échec du Chargement de l'Image","common.restorePurchase":"Restaurer l'Achat","common.termsOfService":"Conditions d'Utilisation","common.privacyPolicy":"Politique de Confidentialité","common.copyright":"© 2024 Cross Stitch. Tous droits réservés.","styles.animals":"Animaux","styles.comics":"Bandes dessinées","styles.people":"Personnes","styles.cute":"Mignon","styles.food":"Nourriture","styles.mandala":"Mandala","styles.flowers":"Fleurs","styles.simple":"Simple","onboarding.page1.title":"Bienvenue à Cross Stitch","onboarding.page1.subtitle":"Chaque coloriage est une création","onboarding.page1.totalDownloads":"Téléchargements Totaux 5M+","onboarding.page1.happyArtists":"Artistes Heureux 1M+","onboarding.page1.testimonial":`"C'est la meilleure façon pour moi de me détendre chaque jour. Cross Stitch rend ma vie plus épanouissante"`,"onboarding.page1.author":"Sarah, Utilisateur Senior","onboarding.page2.title":"Bienvenue à Cross Stitch","onboarding.page2.subtitle":"Créer, Colorier et S'amuser","onboarding.page2.button":"Commencer","onboarding.page3.title":"Quel est votre style de coloriage?","onboarding.page3.subtitle":"Quatre questions pour révéler vos forces créatives","onboarding.page3.button":"Continuer","questions.page1.title":"Quel est votre genre?","questions.page1.subtitle":"Cela nous aide à personnaliser votre expérience.","questions.page1.skip":"Passer","questions.page1.female":"Femelle","questions.page1.male":"Mâle","questions.page1.other":"Autre","questions.page2.title":"Quel est votre groupe d'âge?","questions.page2.subtitle":"Cela nous aide à suggérer des styles pertinents.","questions.page2.skip":"Passer","questions.page2.under18":"Moins de 18 ans","questions.page2.18-29":"18-29 ans","questions.page2.30-39":"30-39 ans","questions.page2.40-49":"40-49 ans","questions.page2.50-59":"50-59 ans","questions.page2.over60":"60 ans et plus","questions.page3.title":"Quel style vous inspire le plus?","questions.page3.subtitle":"Sélectionnez toutes les options qui s'appliquent.","questions.page3.skip":"Passer","questions.page3.button":"Suivant","questions.page3.style.animals":"Animaux","questions.page3.style.comics":"Bandes dessinées","questions.page3.style.people":"Personnes","questions.page3.style.cute":"Mignon","questions.page3.style.food":"Nourriture","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Fleurs","questions.page3.style.simple":"Simple","questions.page4.title":"Quel est votre objectif?","questions.page4.subtitle":"Cela nous aide à personnaliser votre expérience.","questions.page4.skip":"Passer","questions.page4.relaxMyself":"Me détendre","questions.page4.haveFun":"S'amuser","questions.page4.expressCreativity":"Exprimer ma créativité","questions.page4.clearMind":"Libérer mon esprit","questions.page4.developSkills":"Développer mes compétences en coloriage","questions.page4.relieveStress":"Soulager le stress","questions.page4.other":"Autre","onboarding.page4.title":"C'est Tout sur la Couleur et les <br>Pinceaux","onboarding.page4.subtitle":"Trouvez les outils pour votre histoire","onboarding.page4.button":"Continuer","questions.page5.title":"Quelles palettes vous résonnent le plus?","questions.page5.skip":"Passer","questions.page5.button":"Suivant","questions.page5.palette.basic":"Basique","questions.page5.palette.skin":"Peau","questions.page5.palette.makeup":"Maquillage","questions.page5.palette.galaxy":"Galaxie","questions.page5.palette.fabric":"Tissu","questions.page5.palette.lips":"Lèvres","questions.page5.palette.rainbow":"Arc-en-ciel","questions.page5.palette.sky":"Ciel","questions.page6.title":"Quels pinceaux êtes-vous le plus excité d'essayer?","questions.page6.skip":"Passer","questions.page6.button":"Continuer","questions.page6.brush.small":"Petit Pinceau","questions.page6.brush.big":"Grand Pinceau","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Aquarelle","questions.page6.brush.ballpoint":"Stylo à Bille","questions.page6.brush.pencil":"Crayon","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Éclaboussure","loading.analyzing":"Analyse de vos préférences de style...","loading.ready":"Votre expérience de coloriage exclusive est prête","loading.tryButton":"Laissez-moi Essayer","loading.matched.single":"Motif exclusif correspondant pour vous","loading.matched.multi":"Motif exclusif de style {styles} correspondant pour vous","loading.matched.many":"Motifs exclusifs de style {firstThree} et {count} autres styles correspondants pour vous","trial.title":"Essai Gratuit de 3 Jours","trial.day0":"Aujourd'hui","trial.day0.description":"Accès illimité à toutes les catégories et images, importations illimitées d'images, pas de publicités","trial.day2":"Dans 2 Jours","trial.day2.description":"Vous recevrez un rappel un jour avant la fin de l'essai","trial.day3":"Dans 3 Jours","trial.day3.description":"Aucun paiement requis avant {date}. Vous pouvez annuler prématurément","trial.button":"Essai Gratuit","subscription.title":"Débloquez Votre Contenu Exclusif","subscription.description":"Accès illimité à toutes les catégories et images, importations illimitées d'images","subscription.weekly":"Hebdomadaire","subscription.monthly":"Mensuel","subscription.yearly":"Annuel","subscription.bestValue":"Meilleur Rapport Qualité-Prix","subscription.freeTrialBadge":"Essai Gratuit de 3 Jours","subscription.weekly.price":"Puis 3,49 $/semaine","subscription.monthly.price":"9,99 $","subscription.yearly.price":"59,99 $","subscription.button.freeTrial":"Essai Gratuit","subscription.button.subscribe":"S'abonner Maintenant","subscription.legalText":"Toutes les options d'abonnement ci-dessus sont à renouvellement automatique. Les frais d'abonnement seront facturés sur votre compte Apple lors de la confirmation de l'achat ou à la fin de la période d'essai. Si vous ne souhaitez pas renouveler, n'oubliez pas d'annuler l'abonnement au moins 24 heures avant l'expiration de l'abonnement ou de l'essai gratuit. Vous pouvez trouver la gestion des abonnements dans les paramètres de votre compte Apple à tout moment. Si vous achetez un abonnement mensuel ou annuel avant la fin de la période d'essai, la durée d'essai inutilisée restante sera automatiquement perdue."},de:{"common.skip":"Überspringen","common.continue":"Weiterfahren","common.next":"Weiter","common.start":"Loslegen","common.freeTrial":"Kostenlose Testversion","common.subscribeNow":"Jetzt Abonnieren","common.quizProgress":"Quiz-Fortschritt","common.letMeTry":"Lass Mich Probieren","common.imageLoadFailed":"Bild Laden Fehlgeschlagen","common.restorePurchase":"Einkauf Wiederherstellen","common.termsOfService":"Nutzungsbedingungen","common.privacyPolicy":"Datenschutzrichtlinie","common.copyright":"© 2024 Cross Stitch. Alle Rechte vorbehalten.","styles.animals":"Tiere","styles.comics":"Comics","styles.people":"Menschen","styles.cute":"Süß","styles.food":"Essen","styles.mandala":"Mandala","styles.flowers":"Blumen","styles.simple":"Einfach","onboarding.page1.title":"Willkommen bei Cross Stitch","onboarding.page1.subtitle":"Jede Färbung ist eine Schöpfung","onboarding.page1.totalDownloads":"Gesamte Downloads 5M+","onboarding.page1.happyArtists":"Glückliche Künstler 1M+","onboarding.page1.testimonial":'"Das ist der beste Weg für mich, jeden Tag zu entspannen. Cross Stitch macht mein Leben erfüllender"',"onboarding.page1.author":"Sarah, Erfahrene Nutzerin","onboarding.page2.title":"Willkommen bei Cross Stitch","onboarding.page2.subtitle":"Erstellen, Färben und Spaß haben","onboarding.page2.button":"Loslegen","onboarding.page3.title":"Was ist dein Färbestil?","onboarding.page3.subtitle":"Vier Fragen zur Entdeckung Ihrer kreativen Stärken","onboarding.page3.button":"Weiterfahren","questions.page1.title":"Was ist dein Geschlecht?","questions.page1.subtitle":"Dies hilft uns, Ihre Erfahrung zu personalisieren.","questions.page1.skip":"Überspringen","questions.page1.female":"Weiblich","questions.page1.male":"Männlich","questions.page1.other":"Anderes","questions.page2.title":"Was ist Ihre Altersgruppe?","questions.page2.subtitle":"Dies hilft uns, relevante Stile vorzuschlagen.","questions.page2.skip":"Überspringen","questions.page2.under18":"Unter 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"60+","questions.page3.title":"Welcher Stil inspiriert dich am meisten?","questions.page3.subtitle":"Wähle alle zutreffenden Optionen aus.","questions.page3.skip":"Überspringen","questions.page3.button":"Weiter","questions.page3.style.animals":"Tiere","questions.page3.style.comics":"Comics","questions.page3.style.people":"Menschen","questions.page3.style.cute":"Süß","questions.page3.style.food":"Essen","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Blumen","questions.page3.style.simple":"Einfach","questions.page4.title":"Was ist dein Ziel?","questions.page4.subtitle":"Dies hilft uns, Ihre Erfahrung zu personalisieren.","questions.page4.skip":"Überspringen","questions.page4.relaxMyself":"Mich entspannen","questions.page4.haveFun":"Spaß haben","questions.page4.expressCreativity":"Meine Kreativität ausdrücken","questions.page4.clearMind":"Meinen Kopf freimachen","questions.page4.developSkills":"Meine Färbefähigkeiten entwickeln","questions.page4.relieveStress":"Stress abbauen","questions.page4.other":"Anderes","onboarding.page4.title":"Es geht alles um Farbe und <br>Pinsel","onboarding.page4.subtitle":"Finde die Tools für deine Geschichte","onboarding.page4.button":"Weiterfahren","questions.page5.title":"Welche Paletten sprechen dich am meisten an?","questions.page5.skip":"Überspringen","questions.page5.button":"Weiter","questions.page5.palette.basic":"Basic","questions.page5.palette.skin":"Haut","questions.page5.palette.makeup":"Make-up","questions.page5.palette.galaxy":"Galaxie","questions.page5.palette.fabric":"Stoff","questions.page5.palette.lips":"Lippen","questions.page5.palette.rainbow":"Regenbogen","questions.page5.palette.sky":"Himmel","questions.page6.title":"Welche Pinsel bist du am meisten gespannt, auszuprobieren?","questions.page6.skip":"Überspringen","questions.page6.button":"Weiterfahren","questions.page6.brush.small":"Kleiner Pinsel","questions.page6.brush.big":"Großer Pinsel","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Aquarell","questions.page6.brush.ballpoint":"Kugelschreiber","questions.page6.brush.pencil":"Bleistift","questions.page6.brush.pastel":"Pastell","questions.page6.brush.splash":"Spritzer","loading.analyzing":"Analysiere deine Stilpräferenzen...","loading.ready":"Dein exklusives Färbeerlebnis ist bereit","loading.tryButton":"Lass Mich Probieren","loading.matched.single":"Exklusives Muster für dich gefunden","loading.matched.multi":"Exklusives Muster im {styles}-Stil für dich gefunden","loading.matched.many":"Exklusive Muster im {firstThree}-Stil und {count} weiteren Stilen für dich gefunden","trial.title":"Kostenlose 3-Tage-Testversion","trial.day0":"Heute","trial.day0.description":"Unbegrenzter Zugriff auf alle Kategorien und Bilder, unbegrenzte Bildimporte, keine Werbung","trial.day2":"In 2 Tagen","trial.day2.description":"Sie erhalten eine Erinnerung einen Tag vor Ablauf des Testzeitraums","trial.day3":"In 3 Tagen","trial.day3.description":"Keine Zahlung erforderlich vor {date}. Sie können frühzeitig stornieren","trial.button":"Kostenlose Testversion","subscription.title":"Schalte Deinen Exklusiven Inhalt Frei","subscription.description":"Unbegrenzter Zugriff auf alle Kategorien und Bilder, unbegrenzte Bildimporte","subscription.weekly":"Wöchentlich","subscription.monthly":"Monatlich","subscription.yearly":"Jährlich","subscription.bestValue":"Bestes Preis-Leistungs-Verhältnis","subscription.freeTrialBadge":"Kostenlose 3-Tage-Testversion","subscription.weekly.price":"Dann 3,49 $/Woche","subscription.monthly.price":"9,99 $","subscription.yearly.price":"59,99 $","subscription.button.freeTrial":"Kostenlose Testversion","subscription.button.subscribe":"Jetzt Abonnieren","subscription.legalText":"Alle oben genannten Abonnementoptionen werden automatisch verlängert. Die Abonnementgebühren werden Ihrem Apple-Konto bei der Bestätigung des Kaufs oder am Ende des Testzeitraums belastet. Wenn Sie nicht verlängern möchten, denken Sie daran, das Abonnement mindestens 24 Stunden vor Ablauf des Abonnements oder des kostenlosen Testzeitraums zu stornieren. Sie können die Abonnementverwaltung jederzeit in den Einstellungen Ihres Apple-Kontos finden. Wenn Sie ein monatliches oder jährliches Abonnement vor Ablauf des Testzeitraums kaufen, wird die verbleibende, nicht genutzte Testdauer automatisch verfällt."},id:{"common.skip":"Lewati","common.continue":"Lanjutkan","common.next":"Berikutnya","common.start":"Mulai","common.freeTrial":"Uji Coba Gratis","common.subscribeNow":"Berlangganan Sekarang","common.quizProgress":"Kemajuan Kuis","common.letMeTry":"Biarkan Saya Coba","common.imageLoadFailed":"Gagal Memuat Gambar","common.restorePurchase":"Pulihkan Pembelian","common.termsOfService":"Ketentuan Layanan","common.privacyPolicy":"Kebijakan Privasi","common.copyright":"© 2024 Cross Stitch. Hak cipta dilindungi.","styles.animals":"Hewan","styles.comics":"Komik","styles.people":"Orang","styles.cute":"Lucu","styles.food":"Makanan","styles.mandala":"Mandala","styles.flowers":"Bunga","styles.simple":"Sederhana","onboarding.page1.title":"Selamat Datang di Cross Stitch","onboarding.page1.subtitle":"Setiap pewarnaan adalah sebuah kreasi","onboarding.page1.totalDownloads":"Total Unduhan 5M+","onboarding.page1.happyArtists":"Seniman Bahagia 1M+","onboarding.page1.testimonial":'"Ini adalah cara terbaik untuk saya bersantai setiap hari. Cross Stitch membuat hidup saya lebih memuaskan"',"onboarding.page1.author":"Sarah, Pengguna Senior","onboarding.page2.title":"Selamat Datang di Cross Stitch","onboarding.page2.subtitle":"Buat, Warnai, dan Bersenang-senang","onboarding.page2.button":"Mulai","onboarding.page3.title":"Apa gaya pewarnaanmu?","onboarding.page3.subtitle":"Empat pertanyaan untuk mengungkap kekuatan kreatifmu","onboarding.page3.button":"Lanjutkan","questions.page1.title":"Apa gendermu?","questions.page1.subtitle":"Ini membantu kami mempersonalisasikan pengalamanmu.","questions.page1.skip":"Lewati","questions.page1.female":"Perempuan","questions.page1.male":"Laki-laki","questions.page1.other":"Lainnya","questions.page2.title":"Apa kelompok usiamu?","questions.page2.subtitle":"Ini membantu kami menyarankan gaya yang relevan.","questions.page2.skip":"Lewati","questions.page2.under18":"Di bawah 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"Di atas 60","questions.page3.title":"Gaya mana yang paling menginspirasi kamu?","questions.page3.subtitle":"Pilih semua opsi yang sesuai.","questions.page3.skip":"Lewati","questions.page3.button":"Berikutnya","questions.page3.style.animals":"Hewan","questions.page3.style.comics":"Komik","questions.page3.style.people":"Orang","questions.page3.style.cute":"Lucu","questions.page3.style.food":"Makanan","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Bunga","questions.page3.style.simple":"Sederhana","questions.page4.title":"Apa tujuanmu?","questions.page4.subtitle":"Ini membantu kami mempersonalisasikan pengalamanmu.","questions.page4.skip":"Lewati","questions.page4.relaxMyself":"Bersantai","questions.page4.haveFun":"Bersenang-senang","questions.page4.expressCreativity":"Mengekspresikan kreativitasku","questions.page4.clearMind":"Menghilangkan pikiran","questions.page4.developSkills":"Mengembangkan keterampilan pewarnaanku","questions.page4.relieveStress":"Meredakan stres","questions.page4.other":"Lainnya","onboarding.page4.title":"Ini Semua Tentang Warna dan <br>Kuas","onboarding.page4.subtitle":"Temukan Alat untuk Ceritamu","onboarding.page4.button":"Lanjutkan","questions.page5.title":"Palet mana yang paling beresonansi denganmu?","questions.page5.skip":"Lewati","questions.page5.button":"Berikutnya","questions.page5.palette.basic":"Dasar","questions.page5.palette.skin":"Kulit","questions.page5.palette.makeup":"Make-up","questions.page5.palette.galaxy":"Galaksi","questions.page5.palette.fabric":"Kain","questions.page5.palette.lips":"Bibir","questions.page5.palette.rainbow":"Pelangi","questions.page5.palette.sky":"Langit","questions.page6.title":"Kuas mana yang paling kamu ingin coba?","questions.page6.skip":"Lewati","questions.page6.button":"Lanjutkan","questions.page6.brush.small":"Kuas Kecil","questions.page6.brush.big":"Kuas Besar","questions.page6.brush.spray":"Semprotan","questions.page6.brush.watercolor":"Cat Air","questions.page6.brush.ballpoint":"Pulpen","questions.page6.brush.pencil":"Pensil","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Percikan","loading.analyzing":"Menganalisis preferensi gaya kamu...","loading.ready":"Pengalaman pewarnaan eksklusifmu sudah siap","loading.tryButton":"Biarkan Saya Coba","loading.matched.single":"Pola eksklusif yang cocok untukmu","loading.matched.multi":"Pola eksklusif gaya {styles} yang cocok untukmu","loading.matched.many":"Pola eksklusif gaya {firstThree} dan {count} gaya lainnya yang cocok untukmu","trial.title":"Uji Coba Gratis 3 Hari","trial.day0":"Hari ini","trial.day0.description":"Akses tak terbatas ke semua kategori dan gambar, impor gambar tak terbatas, tanpa iklan","trial.day2":"Dalam 2 Hari","trial.day2.description":"Anda akan menerima pengingat satu hari sebelum uji coba berakhir","trial.day3":"Dalam 3 Hari","trial.day3.description":"Tidak diperlukan pembayaran sebelum {date}. Anda dapat membatalkan lebih awal","trial.button":"Uji Coba Gratis","subscription.title":"Buka Konten Eksklusif Anda","subscription.description":"Akses tak terbatas ke semua kategori dan gambar, impor gambar tak terbatas","subscription.weekly":"Mingguan","subscription.monthly":"Bulanan","subscription.yearly":"Tahunan","subscription.bestValue":"Nilai Terbaik","subscription.freeTrialBadge":"Uji Coba Gratis 3 Hari","subscription.weekly.price":"Kemudian $3.49/minggu","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Uji Coba Gratis","subscription.button.subscribe":"Berlangganan Sekarang","subscription.legalText":"Semua opsi langganan di atas adalah langganan otomatis diperbarui. Biaya langganan akan dikenakan ke akun Apple Anda ketika Anda mengkonfirmasi pembelian atau di akhir periode uji coba. Jika Anda tidak ingin memperbarui, ingat untuk membatalkan langganan setidaknya 24 jam sebelum langganan atau uji coba gratis berakhir. Anda dapat menemukan manajemen langganan di pengaturan akun Apple Anda kapan saja. Jika Anda membeli langganan bulanan atau tahunan sebelum periode uji coba berakhir, sisa waktu uji coba yang tidak terpakai akan secara otomatis hangus."},it:{"common.skip":"Salta","common.continue":"Continua","common.next":"Successivo","common.start":"Inizia","common.freeTrial":"Prova Gratuita","common.subscribeNow":"Iscriviti Ora","common.quizProgress":"Progresso Quiz","common.letMeTry":"Lasciami Provare","common.imageLoadFailed":"Caricamento Immagine Non Riuscito","common.restorePurchase":"Ripristina Acquisto","common.termsOfService":"Termini di Servizio","common.privacyPolicy":"Informativa sulla Privacy","common.copyright":"© 2024 Cross Stitch. Tutti i diritti riservati.","styles.animals":"Animali","styles.comics":"Fumetti","styles.people":"Persone","styles.cute":"Carino","styles.food":"Cibo","styles.mandala":"Mandala","styles.flowers":"Fiori","styles.simple":"Semplice","onboarding.page1.title":"Benvenuto su Cross Stitch","onboarding.page1.subtitle":"Ogni colorazione è una creazione","onboarding.page1.totalDownloads":"Download Totali 5M+","onboarding.page1.happyArtists":"Artisti Felici 1M+","onboarding.page1.testimonial":'"Questo è il modo migliore per me di rilassarmi ogni giorno. Cross Stitch rende la mia vita più appagante"',"onboarding.page1.author":"Sarah, Utente Senior","onboarding.page2.title":"Benvenuto su Cross Stitch","onboarding.page2.subtitle":"Crea, Colora e Divertiti","onboarding.page2.button":"Inizia","onboarding.page3.title":"Qual è il tuo stile di colorazione?","onboarding.page3.subtitle":"Quattro domande per rivelare i tuoi punti di forza creativi","onboarding.page3.button":"Continua","questions.page1.title":"Qual è il tuo genere?","questions.page1.subtitle":"Questo ci aiuta a personalizzare la tua esperienza.","questions.page1.skip":"Salta","questions.page1.female":"Femmina","questions.page1.male":"Maschio","questions.page1.other":"Altro","questions.page2.title":"Qual è la tua fascia d'età?","questions.page2.subtitle":"Questo ci aiuta a suggerire stili pertinenti.","questions.page2.skip":"Salta","questions.page2.under18":"Sotto i 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"Oltre i 60","questions.page3.title":"Quale stile ti ispira di più?","questions.page3.subtitle":"Seleziona tutte le opzioni applicabili.","questions.page3.skip":"Salta","questions.page3.button":"Successivo","questions.page3.style.animals":"Animali","questions.page3.style.comics":"Fumetti","questions.page3.style.people":"Persone","questions.page3.style.cute":"Carino","questions.page3.style.food":"Cibo","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Fiori","questions.page3.style.simple":"Semplice","questions.page4.title":"Qual è il tuo obiettivo?","questions.page4.subtitle":"Questo ci aiuta a personalizzare la tua esperienza.","questions.page4.skip":"Salta","questions.page4.relaxMyself":"Rilassarmi","questions.page4.haveFun":"Divertirmi","questions.page4.expressCreativity":"Esprimere la mia creatività","questions.page4.clearMind":"Svuotare la mente","questions.page4.developSkills":"Sviluppare le mie abilità di colorazione","questions.page4.relieveStress":"Alleviare lo stress","questions.page4.other":"Altro","onboarding.page4.title":"È Tutto sul Colore e sui <br>Pennelli","onboarding.page4.subtitle":"Trova gli Strumenti per la Tua Storia","onboarding.page4.button":"Continua","questions.page5.title":"Quali tavolozze ti risuonano di più?","questions.page5.skip":"Salta","questions.page5.button":"Successivo","questions.page5.palette.basic":"Base","questions.page5.palette.skin":"Pelle","questions.page5.palette.makeup":"Trucco","questions.page5.palette.galaxy":"Galassia","questions.page5.palette.fabric":"Tessuto","questions.page5.palette.lips":"Labbra","questions.page5.palette.rainbow":"Arcobaleno","questions.page5.palette.sky":"Cielo","questions.page6.title":"Quali pennelli sei più entusiasta di provare?","questions.page6.skip":"Salta","questions.page6.button":"Continua","questions.page6.brush.small":"Pennello Piccolo","questions.page6.brush.big":"Pennello Grande","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Acquerello","questions.page6.brush.ballpoint":"Penna a Sfera","questions.page6.brush.pencil":"Matita","questions.page6.brush.pastel":"Pastello","questions.page6.brush.splash":"Schizzo","loading.analyzing":"Analizzando le tue preferenze di stile...","loading.ready":"La tua esperienza di colorazione esclusiva è pronta","loading.tryButton":"Lasciami Provare","loading.matched.single":"Motivo esclusivo trovato per te","loading.matched.multi":"Motivo esclusivo in stile {styles} trovato per te","loading.matched.many":"Motivi esclusivi in stile {firstThree} e {count} altri stili trovati per te","trial.title":"Prova Gratuita di 3 Giorni","trial.day0":"Oggi","trial.day0.description":"Accesso illimitato a tutte le categorie e immagini, importazioni illimitate di immagini, nessuna pubblicità","trial.day2":"Tra 2 Giorni","trial.day2.description":"Riceverai un promemoria un giorno prima della fine della prova","trial.day3":"Tra 3 Giorni","trial.day3.description":"Nessun pagamento richiesto prima di {date}. Puoi annullare in anticipo","trial.button":"Prova Gratuita","subscription.title":"Sblocca il Tuo Contenuto Esclusivo","subscription.description":"Accesso illimitato a tutte le categorie e immagini, importazioni illimitate di immagini","subscription.weekly":"Settimanale","subscription.monthly":"Mensile","subscription.yearly":"Annuale","subscription.bestValue":"Miglior Rapporto Qualità-Prezzo","subscription.freeTrialBadge":"Prova Gratuita di 3 Giorni","subscription.weekly.price":"Poi $3.49/settimana","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Prova Gratuita","subscription.button.subscribe":"Iscriviti Ora","subscription.legalText":"Tutte le opzioni di abbonamento sopra sono ad rinnovo automatico. Le tariffe di abbonamento verranno addebitate sul tuo account Apple quando confermi l'acquisto o alla fine del periodo di prova. Se non vuoi rinnovare, ricorda di annullare l'abbonamento almeno 24 ore prima della scadenza dell'abbonamento o della prova gratuita. Puoi trovare la gestione degli abbonamenti nelle impostazioni del tuo account Apple in qualsiasi momento. Se acquisti un abbonamento mensile o annuale prima della fine del periodo di prova, il tempo di prova rimanente inutilizzato verrà automaticamente perso."},ja:{"common.skip":"スキップ","common.continue":"続行","common.next":"次へ","common.start":"はじめる","common.freeTrial":"無料トライアル","common.subscribeNow":"今すぐ購読","common.quizProgress":"クイズの進行状況","common.letMeTry":"やってみる","common.imageLoadFailed":"画像の読み込みに失敗しました","common.restorePurchase":"購入を復元","common.termsOfService":"利用規約","common.privacyPolicy":"プライバシーポリシー","common.copyright":"© 2024 Cross Stitch. All rights reserved.","styles.animals":"動物","styles.comics":"コミック","styles.people":"人","styles.cute":"かわいい","styles.food":"食べ物","styles.mandala":"マンダラ","styles.flowers":"花","styles.simple":"シンプル","onboarding.page1.title":"Cross Stitchへようこそ","onboarding.page1.subtitle":"一つ一つの着色が創作です","onboarding.page1.totalDownloads":"総ダウンロード数 5M+","onboarding.page1.happyArtists":"ハッピーアーティスト 1M+","onboarding.page1.testimonial":'"これは私が毎日リラックスするための最良の方法です。Cross Stitchは私の人生をより充実させてくれます"',"onboarding.page1.author":"Sarah、シニアユーザー","onboarding.page2.title":"Cross Stitchへようこそ","onboarding.page2.subtitle":"作って、着色して、楽しもう","onboarding.page2.button":"はじめる","onboarding.page3.title":"あなたの着色スタイルは？","onboarding.page3.subtitle":"あなたのクリエイティブな強みを明らかにする4つの質問","onboarding.page3.button":"続行","questions.page1.title":"あなたの性別は？","questions.page1.subtitle":"これにより、あなたの体験をパーソナライズできます。","questions.page1.skip":"スキップ","questions.page1.female":"女性","questions.page1.male":"男性","questions.page1.other":"その他","questions.page2.title":"あなたの年齢層は？","questions.page2.subtitle":"これにより、関連するスタイルを提案できます。","questions.page2.skip":"スキップ","questions.page2.under18":"18歳未満","questions.page2.18-29":"18-29歳","questions.page2.30-39":"30-39歳","questions.page2.40-49":"40-49歳","questions.page2.50-59":"50-59歳","questions.page2.over60":"60歳以上","questions.page3.title":"どのスタイルが最もあなたをインスパイアしますか？","questions.page3.subtitle":"該当するすべてのオプションを選択してください。","questions.page3.skip":"スキップ","questions.page3.button":"次へ","questions.page3.style.animals":"動物","questions.page3.style.comics":"コミック","questions.page3.style.people":"人","questions.page3.style.cute":"かわいい","questions.page3.style.food":"食べ物","questions.page3.style.mandala":"マンダラ","questions.page3.style.flowers":"花","questions.page3.style.simple":"シンプル","questions.page4.title":"あなたの目標は？","questions.page4.subtitle":"これにより、あなたの体験をパーソナライズできます。","questions.page4.skip":"スキップ","questions.page4.relaxMyself":"自分をリラックスさせる","questions.page4.haveFun":"楽しむ","questions.page4.expressCreativity":"自分の創造性を表現する","questions.page4.clearMind":"頭を空っぽにする","questions.page4.developSkills":"自分の着色スキルを磨く","questions.page4.relieveStress":"ストレスを解消する","questions.page4.other":"その他","onboarding.page4.title":"色と<br>ブラシについてです","onboarding.page4.subtitle":"あなたの物語のツールを見つけよう","onboarding.page4.button":"続行","questions.page5.title":"どのパレットが最もあなたに共感しますか？","questions.page5.skip":"スキップ","questions.page5.button":"次へ","questions.page5.palette.basic":"ベーシック","questions.page5.palette.skin":"肌","questions.page5.palette.makeup":"メイク","questions.page5.palette.galaxy":"銀河","questions.page5.palette.fabric":"布地","questions.page5.palette.lips":"唇","questions.page5.palette.rainbow":"レインボー","questions.page5.palette.sky":"空","questions.page6.title":"どのブラシを最も試してみたいですか？","questions.page6.skip":"スキップ","questions.page6.button":"続行","questions.page6.brush.small":"小さいブラシ","questions.page6.brush.big":"大きいブラシ","questions.page6.brush.spray":"スプレー","questions.page6.brush.watercolor":"水彩","questions.page6.brush.ballpoint":"ボールペン","questions.page6.brush.pencil":"鉛筆","questions.page6.brush.pastel":"パステル","questions.page6.brush.splash":"スプラッシュ","loading.analyzing":"あなたのスタイルの好みを分析中...","loading.ready":"あなただけの着色体験の準備ができました","loading.tryButton":"やってみる","loading.matched.single":"あなたに合った専用のパターンを見つけました","loading.matched.multi":"{styles}スタイルの専用パターンを見つけました","loading.matched.many":"{firstThree}スタイルと{count}つの他のスタイルの専用パターンを見つけました","trial.title":"3日間無料トライアル","trial.day0":"今日","trial.day0.description":"すべてのカテゴリと画像への無制限アクセス、無制限の画像インポート、広告なし","trial.day2":"2日後","trial.day2.description":"トライアル終了の1日前にリマインダーを受け取ります","trial.day3":"3日後","trial.day3.description":"{date}まで支払いは不要です。早期にキャンセルできます","trial.button":"無料トライアル","subscription.title":"あなただけの限定コンテンツをアンロック","subscription.description":"すべてのカテゴリと画像への無制限アクセス、無制限の画像インポート","subscription.weekly":"毎週","subscription.monthly":"毎月","subscription.yearly":"毎年","subscription.bestValue":"ベストバリュー","subscription.freeTrialBadge":"3日間無料トライアル","subscription.weekly.price":"その後$3.49/週","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"無料トライアル","subscription.button.subscribe":"今すぐ購読","subscription.legalText":"上記のサブスクリプションオプションはすべて自動更新されます。サブスクリプション料金は、購入確認時または試用期間終了時にAppleアカウントに請求されます。更新したくない場合は、サブスクリプションまたは無料トライアルの期限が切れる少なくとも24時間前にサブスクリプションをキャンセルしてください。いつでもAppleアカウントの設定でサブスクリプション管理を見つけることができます。試用期間が終了する前に月額または年額サブスクリプションを購入した場合、残りの未使用試用期間は自動的に無効になります。"},ko:{"common.skip":"건너뛰기","common.continue":"계속하기","common.next":"다음으로","common.start":"시작하기","common.freeTrial":"무료 체험","common.subscribeNow":"지금 구독하기","common.quizProgress":"퀴즈 진행률","common.letMeTry":"해보기","common.imageLoadFailed":"이미지 로드 실패","common.restorePurchase":"구매 복원","common.termsOfService":"이용 약관","common.privacyPolicy":"개인정보 처리방침","common.copyright":"© 2024 Cross Stitch. All rights reserved.","styles.animals":"동물","styles.comics":"만화","styles.people":"사람","styles.cute":"귀여운","styles.food":"음식","styles.mandala":"만다라","styles.flowers":"꽃","styles.simple":"단순","onboarding.page1.title":"Cross Stitch에 오신 것을 환영합니다","onboarding.page1.subtitle":"매번 색칠하는 것도 창작이에요","onboarding.page1.totalDownloads":"총 다운로드 5M+","onboarding.page1.happyArtists":"행복한 아티스트 1M+","onboarding.page1.testimonial":'"이것은 매일 편안함을 느끼는 최고의 방법이에요. Cross Stitch가 제 삶을 더욱 풍성하게 해줘요"',"onboarding.page1.author":"Sarah, 시니어 사용자","onboarding.page2.title":"Cross Stitch에 오신 것을 환영합니다","onboarding.page2.subtitle":"만들고, 색칠하고, 즐기세요","onboarding.page2.button":"시작하기","onboarding.page3.title":"당신의 색칠 스타일은 무엇인가요?","onboarding.page3.subtitle":"당신의 창의력 강점을 밝혀줄 네 가지 질문","onboarding.page3.button":"계속하기","questions.page1.title":"당신의 성별은 무엇인가요?","questions.page1.subtitle":"이는 당신의 경험을 개인화하는 데 도움이 됩니다.","questions.page1.skip":"건너뛰기","questions.page1.female":"여성","questions.page1.male":"남성","questions.page1.other":"기타","questions.page2.title":"당신의 연령대는 무엇인가요?","questions.page2.subtitle":"이는 관련 스타일을 제안하는 데 도움이 됩니다.","questions.page2.skip":"건너뛰기","questions.page2.under18":"18세 미만","questions.page2.18-29":"18-29세","questions.page2.30-39":"30-39세","questions.page2.40-49":"40-49세","questions.page2.50-59":"50-59세","questions.page2.over60":"60세 이상","questions.page3.title":"어떤 스타일이 가장 당신에게 영감을 주나요?","questions.page3.subtitle":"적용되는 모든 옵션을 선택하세요.","questions.page3.skip":"건너뛰기","questions.page3.button":"다음으로","questions.page3.style.animals":"동물","questions.page3.style.comics":"만화","questions.page3.style.people":"사람","questions.page3.style.cute":"귀여운","questions.page3.style.food":"음식","questions.page3.style.mandala":"만다라","questions.page3.style.flowers":"꽃","questions.page3.style.simple":"단순","questions.page4.title":"당신의 목표는 무엇인가요?","questions.page4.subtitle":"이는 당신의 경험을 개인화하는 데 도움이 됩니다.","questions.page4.skip":"건너뛰기","questions.page4.relaxMyself":"나를 편안하게 하다","questions.page4.haveFun":"즐거워하다","questions.page4.expressCreativity":"나의 창의력을 표현하다","questions.page4.clearMind":"마음을 비우다","questions.page4.developSkills":"나의 색칠 기술을 발전시키다","questions.page4.relieveStress":"스트레스를 해소하다","questions.page4.other":"기타","onboarding.page4.title":"색과<br>브러시에 관한 모든 것입니다","onboarding.page4.subtitle":"당신의 이야기를 위한 도구를 찾아보세요","onboarding.page4.button":"계속하기","questions.page5.title":"어떤 팔레트가 가장 당신과 공감하나요?","questions.page5.skip":"건너뛰기","questions.page5.button":"다음으로","questions.page5.palette.basic":"기본","questions.page5.palette.skin":"피부","questions.page5.palette.makeup":"메이크업","questions.page5.palette.galaxy":"은하","questions.page5.palette.fabric":"직물","questions.page5.palette.lips":"입술","questions.page5.palette.rainbow":"레인보우","questions.page5.palette.sky":"하늘","questions.page6.title":"어떤 브러시를 가장 시도해보고 싶으세요?","questions.page6.skip":"건너뛰기","questions.page6.button":"계속하기","questions.page6.brush.small":"작은 브러시","questions.page6.brush.big":"큰 브러시","questions.page6.brush.spray":"스프레이","questions.page6.brush.watercolor":"수채화","questions.page6.brush.ballpoint":"볼펜","questions.page6.brush.pencil":"연필","questions.page6.brush.pastel":"파스텔","questions.page6.brush.splash":"스플래시","loading.analyzing":"당신의 스타일 선호도 분석 중...","loading.ready":"당신만의 독점적인 색칠 경험 준비 완료","loading.tryButton":"해보기","loading.matched.single":"당신에 맞는 독점적인 패턴 찾기 완료","loading.matched.multi":"{styles} 스타일의 독점적인 패턴 찾기 완료","loading.matched.many":"{firstThree} 스타일과 {count}개의 다른 스타일의 독점적인 패턴 찾기 완료","trial.title":"3일 무료 체험","trial.day0":"오늘","trial.day0.description":"모든 카테고리와 이미지에 대한 무제한 액세스, 무제한 이미지 가져오기, 광고 없음","trial.day2":"2일 후","trial.day2.description":"체험 기간 종료 하루 전에 알림을 받으실 수 있습니다","trial.day3":"3일 후","trial.day3.description":"{date} 전까지 결제가 필요 없습니다. 미리 취소하실 수 있습니다","trial.button":"무료 체험","subscription.title":"당신만의 독점 콘텐츠를 잠금 해제하세요","subscription.description":"모든 카테고리와 이미지에 대한 무제한 액세스, 무제한 이미지 가져오기","subscription.weekly":"매주","subscription.monthly":"매월","subscription.yearly":"매년","subscription.bestValue":"최고의 가치","subscription.freeTrialBadge":"3일 무료 체험","subscription.weekly.price":"그 후 $3.49/주","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"무료 체험","subscription.button.subscribe":"지금 구독하기","subscription.legalText":"위의 모든 구독 옵션은 자동 갱신 구독입니다. 구독 요금은 구매 확인 시 또는 체험 기간 종료 시 Apple 계정에 청구됩니다. 갱신을 원하지 않는 경우, 구독 또는 무료 체험 만료 최소 24시간 전에 구독을 취소하는 것을 기억하세요. 언제든지 Apple 계정 설정에서 구독 관리를 찾을 수 있습니다. 체험 기간이 종료되기 전에 월간 또는 연간 구독을 구매하는 경우, 남은 미사용 체험 기간은 자동으로 소멸됩니다."},pt:{"common.skip":"Pular","common.continue":"Continuar","common.next":"Próximo","common.start":"Começar","common.freeTrial":"Teste Grátis","common.subscribeNow":"Inscreva-se Agora","common.quizProgress":"Progresso do Quiz","common.letMeTry":"Deixe-me Tentar","common.imageLoadFailed":"Falha ao Carregar Imagem","common.restorePurchase":"Restaurar Compra","common.termsOfService":"Termos de Serviço","common.privacyPolicy":"Política de Privacidade","common.copyright":"© 2024 Cross Stitch. Todos os direitos reservados.","styles.animals":"Animais","styles.comics":"Histórias em quadrinhos","styles.people":"Pessoas","styles.cute":"Fofo","styles.food":"Comida","styles.mandala":"Mandala","styles.flowers":"Flores","styles.simple":"Simples","onboarding.page1.title":"Bem-vindo ao Cross Stitch","onboarding.page1.subtitle":"Cada coloração é uma criação","onboarding.page1.totalDownloads":"Downloads Totais 5M+","onboarding.page1.happyArtists":"Artistas Felizes 1M+","onboarding.page1.testimonial":'"Esta é a melhor forma de relaxar todos os dias. Cross Stitch torna minha vida mais gratificante"',"onboarding.page1.author":"Sarah, Usuário Sênior","onboarding.page2.title":"Bem-vindo ao Cross Stitch","onboarding.page2.subtitle":"Crie, Coloreie e Divirta-se","onboarding.page2.button":"Começar","onboarding.page3.title":"Qual é o seu estilo de coloração?","onboarding.page3.subtitle":"Quatro perguntas para revelar seus pontos fortes criativos","onboarding.page3.button":"Continuar","questions.page1.title":"Qual é o seu gênero?","questions.page1.subtitle":"Isso nos ajuda a personalizar sua experiência.","questions.page1.skip":"Pular","questions.page1.female":"Feminino","questions.page1.male":"Masculino","questions.page1.other":"Outro","questions.page2.title":"Qual é a sua faixa etária?","questions.page2.subtitle":"Isso nos ajuda a sugerir estilos relevantes.","questions.page2.skip":"Pular","questions.page2.under18":"Menos de 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"Mais de 60","questions.page3.title":"Qual estilo mais inspira você?","questions.page3.subtitle":"Selecione todas as opções aplicáveis.","questions.page3.skip":"Pular","questions.page3.button":"Próximo","questions.page3.style.animals":"Animais","questions.page3.style.comics":"Histórias em quadrinhos","questions.page3.style.people":"Pessoas","questions.page3.style.cute":"Fofo","questions.page3.style.food":"Comida","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Flores","questions.page3.style.simple":"Simples","questions.page4.title":"Qual é o seu objetivo?","questions.page4.subtitle":"Isso nos ajuda a personalizar sua experiência.","questions.page4.skip":"Pular","questions.page4.relaxMyself":"Relaxar-me","questions.page4.haveFun":"Divertir-me","questions.page4.expressCreativity":"Expressar minha criatividade","questions.page4.clearMind":"Limpar minha mente","questions.page4.developSkills":"Desenvolver minhas habilidades de coloração","questions.page4.relieveStress":"Aliviar o estresse","questions.page4.other":"Outro","onboarding.page4.title":"É Tudo Sobre Cor e <br>Pincéis","onboarding.page4.subtitle":"Encontre as Ferramentas para Sua História","onboarding.page4.button":"Continuar","questions.page5.title":"Quais paletas ressoam mais com você?","questions.page5.skip":"Pular","questions.page5.button":"Próximo","questions.page5.palette.basic":"Básico","questions.page5.palette.skin":"Pele","questions.page5.palette.makeup":"Maquiagem","questions.page5.palette.galaxy":"Galáxia","questions.page5.palette.fabric":"Tecido","questions.page5.palette.lips":"Lábios","questions.page5.palette.rainbow":"Arco-íris","questions.page5.palette.sky":"Céu","questions.page6.title":"Quais pincéis você está mais animado para experimentar?","questions.page6.skip":"Pular","questions.page6.button":"Continuar","questions.page6.brush.small":"Pincel Pequeno","questions.page6.brush.big":"Pincel Grande","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Aquarela","questions.page6.brush.ballpoint":"Caneta Esférica","questions.page6.brush.pencil":"Lápis","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Salpico","loading.analyzing":"Analisando suas preferências de estilo...","loading.ready":"Sua experiência de coloração exclusiva está pronta","loading.tryButton":"Deixe-me Tentar","loading.matched.single":"Padrão exclusivo correspondente para você","loading.matched.multi":"Padrão exclusivo no estilo {styles} correspondente para você","loading.matched.many":"Padrões exclusivos no estilo {firstThree} e {count} outros estilos correspondentes para você","trial.title":"Teste Grátis de 3 Dias","trial.day0":"Hoje","trial.day0.description":"Acesso ilimitado a todas as categorias e imagens, importações ilimitadas de imagens, sem anúncios","trial.day2":"Em 2 Dias","trial.day2.description":"Você receberá um lembrete um dia antes do fim do teste","trial.day3":"Em 3 Dias","trial.day3.description":"Nenhum pagamento necessário antes de {date}. Você pode cancelar antecipadamente","trial.button":"Teste Grátis","subscription.title":"Desbloqueie Seu Conteúdo Exclusivo","subscription.description":"Acesso ilimitado a todas as categorias e imagens, importações ilimitadas de imagens","subscription.weekly":"Semanal","subscription.monthly":"Mensal","subscription.yearly":"Anual","subscription.bestValue":"Melhor Valor","subscription.freeTrialBadge":"Teste Grátis de 3 Dias","subscription.weekly.price":"Depois $3.49/semana","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Teste Grátis","subscription.button.subscribe":"Inscreva-se Agora","subscription.legalText":"Todas as opções de assinatura acima são de renovação automática. As taxas de assinatura serão cobradas na sua conta Apple quando você confirmar a compra ou no final do período de teste. Se não quiser renovar, lembre-se de cancelar a assinatura pelo menos 24 horas antes do vencimento da assinatura ou do teste gratuito. Você pode encontrar o gerenciamento de assinaturas nas configurações da sua conta Apple a qualquer momento. Se comprar uma assinatura mensal ou anual antes do final do período de teste, o tempo de teste restante não utilizado será automaticamente perdido."},ru:{"common.skip":"Пропустить","common.continue":"Продолжить","common.next":"Далее","common.start":"Начать","common.freeTrial":"Бесплатный пробный период","common.subscribeNow":"Подписаться Сейчас","common.quizProgress":"Прогресс Викторины","common.letMeTry":"Позвольте Мне Попробовать","common.imageLoadFailed":"Ошибка Загрузки Изображения","common.restorePurchase":"Восстановить Покупку","common.termsOfService":"Условия Использования","common.privacyPolicy":"Политика Конфиденциальности","common.copyright":"© 2024 Cross Stitch. Все права защищены.","styles.animals":"Животные","styles.comics":"Комиксы","styles.people":"Люди","styles.cute":"Милый","styles.food":"Еда","styles.mandala":"Мандала","styles.flowers":"Цветы","styles.simple":"Простой","onboarding.page1.title":"Добро пожаловать в Cross Stitch","onboarding.page1.subtitle":"Каждое окрашивание - это творчество","onboarding.page1.totalDownloads":"Всего Загрузок 5M+","onboarding.page1.happyArtists":"Счастливые Художники 1M+","onboarding.page1.testimonial":'"Это лучший способ для меня расслабляться каждый день. Cross Stitch делает мою жизнь более насыщенной"',"onboarding.page1.author":"Сара, Опытный Пользователь","onboarding.page2.title":"Добро пожаловать в Cross Stitch","onboarding.page2.subtitle":"Создавайте, Раскрашивайте и Наслаждайтесь","onboarding.page2.button":"Начать","onboarding.page3.title":"Какой ваш стиль окрашивания?","onboarding.page3.subtitle":"Четыре вопроса, чтобы раскрыть ваши творческие способности","onboarding.page3.button":"Продолжить","questions.page1.title":"Какой ваш пол?","questions.page1.subtitle":"Это помогает нам персонализировать ваш опыт.","questions.page1.skip":"Пропустить","questions.page1.female":"Женский","questions.page1.male":"Мужской","questions.page1.other":"Другой","questions.page2.title":"Какая ваша возрастная группа?","questions.page2.subtitle":"Это помогает нам предлагать релевантные стили.","questions.page2.skip":"Пропустить","questions.page2.under18":"До 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"От 60","questions.page3.title":"Какой стиль вас больше всего вдохновляет?","questions.page3.subtitle":"Выберите все подходящие варианты.","questions.page3.skip":"Пропустить","questions.page3.button":"Далее","questions.page3.style.animals":"Животные","questions.page3.style.comics":"Комиксы","questions.page3.style.people":"Люди","questions.page3.style.cute":"Милый","questions.page3.style.food":"Еда","questions.page3.style.mandala":"Мандала","questions.page3.style.flowers":"Цветы","questions.page3.style.simple":"Простой","questions.page4.title":"Какова ваша цель?","questions.page4.subtitle":"Это помогает нам персонализировать ваш опыт.","questions.page4.skip":"Пропустить","questions.page4.relaxMyself":"Расслабиться","questions.page4.haveFun":"Провести время с удовольствием","questions.page4.expressCreativity":"Выразить мою креативность","questions.page4.clearMind":"Освободить мой разум","questions.page4.developSkills":"Развивать мои навыки окрашивания","questions.page4.relieveStress":"Снять стресс","questions.page4.other":"Другой","onboarding.page4.title":"Все о Цвете и <br>Кистях","onboarding.page4.subtitle":"Найдите Инструменты для Вашей Истории","onboarding.page4.button":"Продолжить","questions.page5.title":"Какие палитры вам больше всего нравятся?","questions.page5.skip":"Пропустить","questions.page5.button":"Далее","questions.page5.palette.basic":"Базовый","questions.page5.palette.skin":"Кожа","questions.page5.palette.makeup":"Макияж","questions.page5.palette.galaxy":"Галактика","questions.page5.palette.fabric":"Ткань","questions.page5.palette.lips":"Губы","questions.page5.palette.rainbow":"Радуга","questions.page5.palette.sky":"Небо","questions.page6.title":"Какие кисти вам больше всего хочется попробовать?","questions.page6.skip":"Пропустить","questions.page6.button":"Продолжить","questions.page6.brush.small":"Маленькая Кисть","questions.page6.brush.big":"Большая Кисть","questions.page6.brush.spray":"Спрей","questions.page6.brush.watercolor":"Акварель","questions.page6.brush.ballpoint":"Шариковая Ручка","questions.page6.brush.pencil":"Карандаш","questions.page6.brush.pastel":"Пастель","questions.page6.brush.splash":"Брызг","loading.analyzing":"Анализируем ваши предпочтения по стилю...","loading.ready":"Ваш эксклюзивный опыт окрашивания готов","loading.tryButton":"Позвольте Мне Попробовать","loading.matched.single":"Найден эксклюзивный узор для вас","loading.matched.multi":"Найден эксклюзивный узор в стиле {styles} для вас","loading.matched.many":"Найдены эксклюзивные узоры в стиле {firstThree} и {count} других стилях для вас","trial.title":"Бесплатный 3-дневный пробный период","trial.day0":"Сегодня","trial.day0.description":"Неограниченный доступ ко всем категориям и изображениям, неограниченный импорт изображений, без рекламы","trial.day2":"Через 2 дня","trial.day2.description":"Вы получите напоминание за день до окончания пробного периода","trial.day3":"Через 3 дня","trial.day3.description":"Оплата не требуется до {date}. Вы можете отменить досрочно","trial.button":"Бесплатный пробный период","subscription.title":"Разблокируйте Ваш Эксклюзивный Контент","subscription.description":"Неограниченный доступ ко всем категориям и изображениям, неограниченный импорт изображений","subscription.weekly":"Еженедельный","subscription.monthly":"Ежемесячный","subscription.yearly":"Ежегодный","subscription.bestValue":"Лучшее Соотношение Цена/Качество","subscription.freeTrialBadge":"Бесплатный 3-дневный пробный период","subscription.weekly.price":"Затем 3,49 $/неделю","subscription.monthly.price":"9,99 $","subscription.yearly.price":"59,99 $","subscription.button.freeTrial":"Бесплатный пробный период","subscription.button.subscribe":"Подписаться Сейчас","subscription.legalText":"Все вышеперечисленные варианты подписки являются автоматически возобновляемыми. Стоимость подписки будет снята с вашего аккаунта Apple при подтверждении покупки или в конце пробного периода. Если вы не хотите возобновлять, не забывайте отменить подписку не менее чем за 24 часа до истечения подписки или бесплатного пробного периода. Вы можете найти управление подпиской в настройках вашего аккаунта Apple в любое время. Если вы приобретете месячную или годовую подписку до окончания пробного периода, оставшееся неиспользованное время пробного периода будет автоматически аннулировано."},es:{"common.skip":"Saltar","common.continue":"Continuar","common.next":"Siguiente","common.start":"Empezar","common.freeTrial":"Prueba Gratuita","common.subscribeNow":"Suscribirse Ahora","common.quizProgress":"Progreso del Cuestionario","common.letMeTry":"Déjame Probar","common.imageLoadFailed":"Error al Cargar la Imagen","common.restorePurchase":"Restaurar Compra","common.termsOfService":"Términos de Servicio","common.privacyPolicy":"Política de Privacidad","common.copyright":"© 2024 Cross Stitch. Todos los derechos reservados.","styles.animals":"Animales","styles.comics":"Cómics","styles.people":"Personas","styles.cute":"Tierno","styles.food":"Comida","styles.mandala":"Mandala","styles.flowers":"Flores","styles.simple":"Simple","onboarding.page1.title":"Bienvenido a Cross Stitch","onboarding.page1.subtitle":"Cada coloreo es una creación","onboarding.page1.totalDownloads":"Descargas Totales 5M+","onboarding.page1.happyArtists":"Artistas Felices 1M+","onboarding.page1.testimonial":'"Esta es la mejor forma de relajarme cada día. Cross Stitch hace que mi vida sea más satisfactoria"',"onboarding.page1.author":"Sarah, Usuario Senior","onboarding.page2.title":"Bienvenido a Cross Stitch","onboarding.page2.subtitle":"Crea, Colorea y Diviértete","onboarding.page2.button":"Empezar","onboarding.page3.title":"¿Cuál es tu estilo de colorear?","onboarding.page3.subtitle":"Cuatro preguntas para revelar tus puntos fuertes creativos","onboarding.page3.button":"Continuar","questions.page1.title":"¿Cuál es tu género?","questions.page1.subtitle":"Esto nos ayuda a personalizar tu experiencia.","questions.page1.skip":"Saltar","questions.page1.female":"Femenino","questions.page1.male":"Masculino","questions.page1.other":"Otro","questions.page2.title":"¿Cuál es tu grupo de edad?","questions.page2.subtitle":"Esto nos ayuda a sugerir estilos relevantes.","questions.page2.skip":"Saltar","questions.page2.under18":"Menos de 18","questions.page2.18-29":"18-29","questions.page2.30-39":"30-39","questions.page2.40-49":"40-49","questions.page2.50-59":"50-59","questions.page2.over60":"Más de 60","questions.page3.title":"¿Qué estilo te inspira más?","questions.page3.subtitle":"Selecciona todas las opciones que apliquen.","questions.page3.skip":"Saltar","questions.page3.button":"Siguiente","questions.page3.style.animals":"Animales","questions.page3.style.comics":"Cómics","questions.page3.style.people":"Personas","questions.page3.style.cute":"Tierno","questions.page3.style.food":"Comida","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Flores","questions.page3.style.simple":"Simple","questions.page4.title":"¿Cuál es tu objetivo?","questions.page4.subtitle":"Esto nos ayuda a personalizar tu experiencia.","questions.page4.skip":"Saltar","questions.page4.relaxMyself":"Relajarme","questions.page4.haveFun":"Divertirme","questions.page4.expressCreativity":"Expresar mi creatividad","questions.page4.clearMind":"Aclarar mi mente","questions.page4.developSkills":"Desarrollar mis habilidades de coloreo","questions.page4.relieveStress":"Aliviar el estrés","questions.page4.other":"Otro","onboarding.page4.title":"Es Todo sobre el Color y los <br>Pinceles","onboarding.page4.subtitle":"Encuentra las Herramientas para Tu Historia","onboarding.page4.button":"Continuar","questions.page5.title":"¿Qué paletas te resuenan más?","questions.page5.skip":"Saltar","questions.page5.button":"Siguiente","questions.page5.palette.basic":"Básico","questions.page5.palette.skin":"Piel","questions.page5.palette.makeup":"Maquillaje","questions.page5.palette.galaxy":"Galaxia","questions.page5.palette.fabric":"Tela","questions.page5.palette.lips":"Labios","questions.page5.palette.rainbow":"Arcoíris","questions.page5.palette.sky":"Cielo","questions.page6.title":"¿Qué pinceles estás más emocionado de probar?","questions.page6.skip":"Saltar","questions.page6.button":"Continuar","questions.page6.brush.small":"Pincel Pequeño","questions.page6.brush.big":"Pincel Grande","questions.page6.brush.spray":"Spray","questions.page6.brush.watercolor":"Acuarela","questions.page6.brush.ballpoint":"Bolígrafo","questions.page6.brush.pencil":"Lápiz","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Salpicadura","loading.analyzing":"Analizando tus preferencias de estilo...","loading.ready":"Tu experiencia de coloreo exclusiva está lista","loading.tryButton":"Déjame Probar","loading.matched.single":"Patrón exclusivo encontrado para ti","loading.matched.multi":"Patrón exclusivo en estilo {styles} encontrado para ti","loading.matched.many":"Patrones exclusivos en estilo {firstThree} y {count} otros estilos encontrados para ti","trial.title":"Prueba Gratuita de 3 Días","trial.day0":"Hoy","trial.day0.description":"Acceso ilimitado a todas las categorías e imágenes, importaciones ilimitadas de imágenes, sin anuncios","trial.day2":"En 2 Días","trial.day2.description":"Recibirás un recordatorio un día antes de que termine la prueba","trial.day3":"En 3 Días","trial.day3.description":"No se requiere pago antes de {date}. Puedes cancelar anticipadamente","trial.button":"Prueba Gratuita","subscription.title":"Desbloquea Tu Contenido Exclusivo","subscription.description":"Acceso ilimitado a todas las categorías e imágenes, importaciones ilimitadas de imágenes","subscription.weekly":"Semanal","subscription.monthly":"Mensual","subscription.yearly":"Anual","subscription.bestValue":"Mejor Valor","subscription.freeTrialBadge":"Prueba Gratuita de 3 Días","subscription.weekly.price":"Luego $3.49/semana","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Prueba Gratuita","subscription.button.subscribe":"Suscribirse Ahora","subscription.legalText":"Todas las opciones de suscripción anteriores son de renovación automática. Las tarifas de suscripción se cargarán a tu cuenta de Apple cuando confirmes la compra o al final del período de prueba. Si no quieres renovar, recuerda cancelar la suscripción al menos 24 horas antes de que expire la suscripción o la prueba gratuita. Puedes encontrar la gestión de suscripciones en la configuración de tu cuenta de Apple en cualquier momento. Si compras una suscripción mensual o anual antes de que termine el período de prueba, el tiempo de prueba no utilizado restante se perderá automáticamente."},th:{"common.skip":"ข้าม","common.continue":"ต่อไป","common.next":"ถัดไป","common.start":"เริ่มต้น","common.freeTrial":"ทดลองใช้ฟรี","common.subscribeNow":"สมัครสมาชิกทันที","common.quizProgress":"ความคืบหน้าควิซ","common.letMeTry":"ขอฉันลองดู","common.imageLoadFailed":"โหลดรูปภาพล้มเหลว","common.restorePurchase":"คืนค่าการซื้อ","common.termsOfService":"ข้อกำหนดการใช้บริการ","common.privacyPolicy":"นโยบายความเป็นส่วนตัว","common.copyright":"© 2024 Cross Stitch. สงวนลิขสิทธิ์","styles.animals":"สัตว์","styles.comics":"การ์ตูน","styles.people":"คน","styles.cute":"น่ารัก","styles.food":"อาหาร","styles.mandala":"มันดาลา","styles.flowers":"ดอกไม้","styles.simple":"ง่ายๆ","onboarding.page1.title":"ยินดีต้อนรับสู่ Cross Stitch","onboarding.page1.subtitle":"การระบายสีแต่ละครั้งคือการสร้างสรรค์","onboarding.page1.totalDownloads":"การดาวน์โหลดทั้งหมด 5M+","onboarding.page1.happyArtists":"ศิลปินที่มีความสุข 1M+","onboarding.page1.testimonial":'"นี่คือวิธีที่ดีที่สุดสำหรับฉันที่จะผ่อนคลายทุกวัน Cross Stitch ทำให้ชีวิตของฉันมีความหมายมากขึ้น"',"onboarding.page1.author":"Sarah, ผู้ใช้ชั้นสูง","onboarding.page2.title":"ยินดีต้อนรับสู่ Cross Stitch","onboarding.page2.subtitle":"สร้างระบายสีและสนุกสนาน","onboarding.page2.button":"เริ่มต้น","onboarding.page3.title":"สไตล์การระบายสีของคุณคืออะไร?","onboarding.page3.subtitle":"สี่คำถามที่จะเปิดเผยจุดแข็งด้านความคิดสร้างสรรค์ของคุณ","onboarding.page3.button":"ต่อไป","questions.page1.title":"เพศของคุณคืออะไร?","questions.page1.subtitle":"นี่ช่วยให้เราปรับแต่งประสบการณ์ของคุณได้","questions.page1.skip":"ข้าม","questions.page1.female":"หญิง","questions.page1.male":"ชาย","questions.page1.other":"อื่นๆ","questions.page2.title":"กลุ่มอายุของคุณคืออะไร?","questions.page2.subtitle":"นี่ช่วยให้เราแนะนำสไตล์ที่เกี่ยวข้อง","questions.page2.skip":"ข้าม","questions.page2.under18":"อายุต่ำกว่า 18 ปี","questions.page2.18-29":"อายุ 18-29 ปี","questions.page2.30-39":"อายุ 30-39 ปี","questions.page2.40-49":"อายุ 40-49 ปี","questions.page2.50-59":"อายุ 50-59 ปี","questions.page2.over60":"อายุ 60 ปีขึ้นไป","questions.page3.title":"สไตล์ใดที่ตั้งตัวคุณได้มากที่สุด?","questions.page3.subtitle":"เลือกตัวเลือกที่ใช้กับคุณทั้งหมด","questions.page3.skip":"ข้าม","questions.page3.button":"ถัดไป","questions.page3.style.animals":"สัตว์","questions.page3.style.comics":"การ์ตูน","questions.page3.style.people":"คน","questions.page3.style.cute":"น่ารัก","questions.page3.style.food":"อาหาร","questions.page3.style.mandala":"มันดาลา","questions.page3.style.flowers":"ดอกไม้","questions.page3.style.simple":"ง่ายๆ","questions.page4.title":"เป้าหมายของคุณคืออะไร?","questions.page4.subtitle":"นี่ช่วยให้เราปรับแต่งประสบการณ์ของคุณได้","questions.page4.skip":"ข้าม","questions.page4.relaxMyself":"ผ่อนคลายตัวเอง","questions.page4.haveFun":"มีความสุข","questions.page4.expressCreativity":"แสดงความคิดสร้างสรรค์ของฉัน","questions.page4.clearMind":"ขจัดความคิดออกไป","questions.page4.developSkills":"พัฒนาทักษะการระบายสีของฉัน","questions.page4.relieveStress":"บรรเทาความเครียด","questions.page4.other":"อื่นๆ","onboarding.page4.title":"ทั้งหมดเกี่ยวกับสีและ<br>แปรง","onboarding.page4.subtitle":"ค้นหาเครื่องมือสำหรับเรื่องราวของคุณ","onboarding.page4.button":"ต่อไป","questions.page5.title":"พาเลตใดที่ตรงกับคุณมากที่สุด?","questions.page5.skip":"ข้าม","questions.page5.button":"ถัดไป","questions.page5.palette.basic":"พื้นฐาน","questions.page5.palette.skin":"ผิวหนัง","questions.page5.palette.makeup":"แต่งหน้า","questions.page5.palette.galaxy":"กาแล็กซี","questions.page5.palette.fabric":"ผ้า","questions.page5.palette.lips":"ริมฝีปาก","questions.page5.palette.rainbow":"สีรุ้ง","questions.page5.palette.sky":"ท้องฟ้า","questions.page6.title":"แปรงใดที่คุณต้องการลองมากที่สุด?","questions.page6.skip":"ข้าม","questions.page6.button":"ต่อไป","questions.page6.brush.small":"แปรงเล็ก","questions.page6.brush.big":"แปรงใหญ่","questions.page6.brush.spray":"สเปรย์","questions.page6.brush.watercolor":"สีน้ำ","questions.page6.brush.ballpoint":"ปากกาบอลพอยต์","questions.page6.brush.pencil":"ดินสอ","questions.page6.brush.pastel":"พาสเทล","questions.page6.brush.splash":"สแพลช","loading.analyzing":"กำลังวิเคราะห์ความชอบสไตล์ของคุณ...","loading.ready":"ประสบการณ์ระบายสีเฉพาะของคุณพร้อมแล้ว","loading.tryButton":"ขอฉันลองดู","loading.matched.single":"ค้นหารูปแบบเฉพาะที่ตรงกับคุณแล้ว","loading.matched.multi":"ค้นหารูปแบบเฉพาะสไตล์ {styles} ที่ตรงกับคุณแล้ว","loading.matched.many":"ค้นหารูปแบบเฉพาะสไตล์ {firstThree} และอีก {count} สไตล์ที่ตรงกับคุณแล้ว","trial.title":"ทดลองใช้ฟรี 3 วัน","trial.day0":"วันนี้","trial.day0.description":"เข้าถึงทุกหมวดหมู่และรูปภาพไม่จำกัด นำเข้ารูปภาพไม่จำกัด ไม่มีโฆษณา","trial.day2":"ในอีก 2 วัน","trial.day2.description":"คุณจะได้รับการแจ้งเตือนหนึ่งวันก่อนสิ้นสุดระยะทดลองใช้","trial.day3":"ในอีก 3 วัน","trial.day3.description":"ไม่จำเป็นต้องชำระเงินก่อน {date} คุณสามารถยกเลิกก่อนเวลาได้","trial.button":"ทดลองใช้ฟรี","subscription.title":"ปลดล็อคเนื้อหาเฉพาะของคุณ","subscription.description":"เข้าถึงทุกหมวดหมู่และรูปภาพไม่จำกัด นำเข้ารูปภาพไม่จำกัด","subscription.weekly":"รายสัปดาห์","subscription.monthly":"รายเดือน","subscription.yearly":"รายปี","subscription.bestValue":"คุ้มค่าที่สุด","subscription.freeTrialBadge":"ทดลองใช้ฟรี 3 วัน","subscription.weekly.price":"แล้ว $3.49/สัปดาห์","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"ทดลองใช้ฟรี","subscription.button.subscribe":"สมัครสมาชิกทันที","subscription.legalText":"ตัวเลือกการสมัครสมาชิกทั้งหมดข้างต้นเป็นการสมัครที่ต่ออายุอัตโนมัติ ค่าธรรมเนียมการสมัครจะถูกเรียกเก็บจากบัญชี Apple ของคุณเมื่อคุณยืนยันการซื้อหรือเมื่อสิ้นสุดระยะทดลองใช้ ถ้าคุณไม่ต้องการต่ออายุ อย่าลืมยกเลิกการสมัครอย่างน้อย 24 ชั่วโมงก่อนที่การสมัครหรือทดลองใช้ฟรีจะสิ้นสุด คุณสามารถค้นหาการจัดการการสมัครในการตั้งค่าบัญชี Apple ของคุณได้ทุกเมื่อ ถ้าคุณซื้อการสมัครรายเดือนหรือรายปีก่อนที่ระยะทดลองใช้จะสิ้นสุด ระยะเวลาทดลองใช้ที่เหลือที่ยังไม่ได้ใช้จะถูกยกเลิกโดยอัตโนมัติ"},tr:{"common.skip":"Atla","common.continue":"Devam et","common.next":"Sonraki","common.start":"Başla","common.freeTrial":"Ücretsiz Deneme","common.subscribeNow":"Şimdi Abone Ol","common.quizProgress":"Sınav İlerlemesi","common.letMeTry":"Deneme İzni Ver","common.imageLoadFailed":"Resim Yüklenemedi","common.restorePurchase":"Satın Almayı Geri Yükle","common.termsOfService":"Hizmet Şartları","common.privacyPolicy":"Gizlilik Politikası","common.copyright":"© 2024 Cross Stitch. Tüm hakları saklıdır.","styles.animals":"Hayvanlar","styles.comics":"Çizgi roman","styles.people":"İnsanlar","styles.cute":"Sevimli","styles.food":"Yemek","styles.mandala":"Mandala","styles.flowers":"Çiçekler","styles.simple":"Basit","onboarding.page1.title":"Cross Stitch'a Hoş Geldiniz","onboarding.page1.subtitle":"Her renklendirme bir yaratımdır","onboarding.page1.totalDownloads":"Toplam İndirme 5M+","onboarding.page1.happyArtists":"Mutlu Sanatçılar 1M+","onboarding.page1.testimonial":'"Bu benim için her gün rahatlamanın en iyi yolu. Cross Stitch hayatımı daha dolu kılıyor"',"onboarding.page1.author":"Sarah, Kıdemli Kullanıcı","onboarding.page2.title":"Cross Stitch'a Hoş Geldiniz","onboarding.page2.subtitle":"Yarat, Renklendir ve Eğlen","onboarding.page2.button":"Başla","onboarding.page3.title":"Renklendirme tarzınız nedir?","onboarding.page3.subtitle":"Yaratıcı güçlerinizi ortaya çıkaran dört soru","onboarding.page3.button":"Devam et","questions.page1.title":"Cinsiyetiniz nedir?","questions.page1.subtitle":"Bu deneyiminizi kişiselleştirmemize yardımcı olur.","questions.page1.skip":"Atla","questions.page1.female":"Kadın","questions.page1.male":"Erkek","questions.page1.other":"Diğer","questions.page2.title":"Yaş grubunuz nedir?","questions.page2.subtitle":"Bu ilgili stilleri önermemize yardımcı olur.","questions.page2.skip":"Atla","questions.page2.under18":"18 yaşından küçük","questions.page2.18-29":"18-29 yaş","questions.page2.30-39":"30-39 yaş","questions.page2.40-49":"40-49 yaş","questions.page2.50-59":"50-59 yaş","questions.page2.over60":"60 yaşından büyük","questions.page3.title":"Hangi stil size en çok ilham veriyor?","questions.page3.subtitle":"Uygulanan tüm seçenekleri seçin.","questions.page3.skip":"Atla","questions.page3.button":"Sonraki","questions.page3.style.animals":"Hayvanlar","questions.page3.style.comics":"Çizgi roman","questions.page3.style.people":"İnsanlar","questions.page3.style.cute":"Sevimli","questions.page3.style.food":"Yemek","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Çiçekler","questions.page3.style.simple":"Basit","questions.page4.title":"Amacınız nedir?","questions.page4.subtitle":"Bu deneyiminizi kişiselleştirmemize yardımcı olur.","questions.page4.skip":"Atla","questions.page4.relaxMyself":"Kendimi Rahatlat","questions.page4.haveFun":"Eğlenmek","questions.page4.expressCreativity":"Yaratıcılığımı İfade Et","questions.page4.clearMind":"Aklımı Boşalt","questions.page4.developSkills":"Renklendirme Becerilerimi Geliştir","questions.page4.relieveStress":"Stresi Azalt","questions.page4.other":"Diğer","onboarding.page4.title":"Her Şey Renk ve <br>Fırçalar Hakkında","onboarding.page4.subtitle":"Hikayen için Araçları Bul","onboarding.page4.button":"Devam et","questions.page5.title":"Hangi paletler size en çok hitap ediyor?","questions.page5.skip":"Atla","questions.page5.button":"Sonraki","questions.page5.palette.basic":"Temel","questions.page5.palette.skin":"Cilt","questions.page5.palette.makeup":"Makyaj","questions.page5.palette.galaxy":"Galaksi","questions.page5.palette.fabric":"Kumaş","questions.page5.palette.lips":"Dudak","questions.page5.palette.rainbow":"Gökkuşağı","questions.page5.palette.sky":"Gökyüzü","questions.page6.title":"Hangi fırçaları denemek için en çok heyecanlısın?","questions.page6.skip":"Atla","questions.page6.button":"Devam et","questions.page6.brush.small":"Küçük Fırça","questions.page6.brush.big":"Büyük Fırça","questions.page6.brush.spray":"Sprey","questions.page6.brush.watercolor":"Suluboya","questions.page6.brush.ballpoint":"Tükenmez Kalem","questions.page6.brush.pencil":"Kurşun Kalem","questions.page6.brush.pastel":"Pastel","questions.page6.brush.splash":"Sıçrama","loading.analyzing":"Stil tercihlerinizi analiz ediyoruz...","loading.ready":"Özel renklendirme deneyiminiz hazır","loading.tryButton":"Deneme İzni Ver","loading.matched.single":"Sizin için özel desen eşleştirildi","loading.matched.multi":"{styles} stili için özel desen eşleştirildi","loading.matched.many":"{firstThree} stili ve {count} başka stil için özel desenler eşleştirildi","trial.title":"3 Günlük Ücretsiz Deneme","trial.day0":"Bugün","trial.day0.description":"Tüm kategorilere ve görsellere sınırsız erişim, sınırsız görsel aktarımı, reklam yok","trial.day2":"2 Gün Sonra","trial.day2.description":"Deneme süresi bitmeden bir gün önce bir hatırlatma alacaksınız","trial.day3":"3 Gün Sonra","trial.day3.description":"{date}'den önce ödeme gerekmez. Erken iptal edebilirsiniz","trial.button":"Ücretsiz Deneme","subscription.title":"Özel İçeriğinizin Kilidini Açın","subscription.description":"Tüm kategorilere ve görsellere sınırsız erişim, sınırsız görsel aktarımı","subscription.weekly":"Haftalık","subscription.monthly":"Aylık","subscription.yearly":"Yıllık","subscription.bestValue":"En Değerli","subscription.freeTrialBadge":"3 Günlük Ücretsiz Deneme","subscription.weekly.price":"Sonra $3.49/hafta","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Ücretsiz Deneme","subscription.button.subscribe":"Şimdi Abone Ol","subscription.legalText":"Yukarıdaki tüm abonelik seçenekleri otomatik yenilenebilir. Abonelik ücretleri, satın almayı onayladığınızda veya deneme süresi sonunda Apple hesabınızdan tahsil edilecektir. Yenilemek istemiyorsanız, abonelik veya ücretsiz deneme süresi dolmadan en az 24 saat önce aboneliği iptal etmeyi unutmayın. Abonelik yönetimini istediğiniz zaman Apple hesap ayarlarınızda bulabilirsiniz. Deneme süresi bitmeden aylık veya yıllık abonelik satın alırsanız, kalan kullanılmayan deneme süresi otomatik olarak geçersiz hale gelecektir."},vi:{"common.skip":"Bỏ qua","common.continue":"Tiếp tục","common.next":"Tiếp theo","common.start":"Bắt đầu","common.freeTrial":"Dùng thử miễn phí","common.subscribeNow":"Đăng ký ngay","common.quizProgress":"Tiến độ bài kiểm tra","common.letMeTry":"Để tôi thử","common.imageLoadFailed":"Tải hình ảnh thất bại","common.restorePurchase":"Khôi phục mua hàng","common.termsOfService":"Điều khoản dịch vụ","common.privacyPolicy":"Chính sách quyền riêng tư","common.copyright":"© 2024 Cross Stitch. Bản quyền đã được bảo hộ.","styles.animals":"Động vật","styles.comics":"Truyện tranh","styles.people":"Con người","styles.cute":"Dễ thương","styles.food":"Thực phẩm","styles.mandala":"Mandala","styles.flowers":"Hoa","styles.simple":"Đơn giản","onboarding.page1.title":"Chào mừng đến với Cross Stitch","onboarding.page1.subtitle":"Mỗi lần tô màu đều là một sự sáng tạo","onboarding.page1.totalDownloads":"Tổng lượt tải xuống 5M+","onboarding.page1.happyArtists":"Nghệ sĩ hạnh phúc 1M+","onboarding.page1.testimonial":'"Đây là cách tốt nhất để tôi thư giãn mỗi ngày. Cross Stitch làm cho cuộc sống của tôi thêm ý nghĩa"',"onboarding.page1.author":"Sarah, người dùng lâu năm","onboarding.page2.title":"Chào mừng đến với Cross Stitch","onboarding.page2.subtitle":"Tạo, tô màu và tận hưởng niềm vui","onboarding.page2.button":"Bắt đầu","onboarding.page3.title":"Phong cách tô màu của bạn là gì?","onboarding.page3.subtitle":"Bốn câu hỏi để hé lộ điểm mạnh sáng tạo của bạn","onboarding.page3.button":"Tiếp tục","questions.page1.title":"Giới tính của bạn là gì?","questions.page1.subtitle":"Điều này giúp chúng tôi cá nhân hóa trải nghiệm của bạn.","questions.page1.skip":"Bỏ qua","questions.page1.female":"Nữ","questions.page1.male":"Nam","questions.page1.other":"Khác","questions.page2.title":"Nhóm tuổi của bạn là gì?","questions.page2.subtitle":"Điều này giúp chúng tôi đề xuất các phong cách phù hợp.","questions.page2.skip":"Bỏ qua","questions.page2.under18":"Dưới 18 tuổi","questions.page2.18-29":"18-29 tuổi","questions.page2.30-39":"30-39 tuổi","questions.page2.40-49":"40-49 tuổi","questions.page2.50-59":"50-59 tuổi","questions.page2.over60":"Trên 60 tuổi","questions.page3.title":"Phong cách nào truyền cảm hứng cho bạn nhất?","questions.page3.subtitle":"Chọn tất cả các tùy chọn phù hợp.","questions.page3.skip":"Bỏ qua","questions.page3.button":"Tiếp theo","questions.page3.style.animals":"Động vật","questions.page3.style.comics":"Truyện tranh","questions.page3.style.people":"Con người","questions.page3.style.cute":"Dễ thương","questions.page3.style.food":"Thực phẩm","questions.page3.style.mandala":"Mandala","questions.page3.style.flowers":"Hoa","questions.page3.style.simple":"Đơn giản","questions.page4.title":"Mục tiêu của bạn là gì?","questions.page4.subtitle":"Điều này giúp chúng tôi cá nhân hóa trải nghiệm của bạn.","questions.page4.skip":"Bỏ qua","questions.page4.relaxMyself":"Thư giãn bản thân","questions.page4.haveFun":"Vui vẻ","questions.page4.expressCreativity":"Thể hiện sự sáng tạo của tôi","questions.page4.clearMind":"Làm rỗng tâm trí","questions.page4.developSkills":"Phát triển kỹ năng tô màu của tôi","questions.page4.relieveStress":"Giảm căng thẳng","questions.page4.other":"Khác","onboarding.page4.title":"Đó là tất cả về màu sắc và<br>cọ vẽ","onboarding.page4.subtitle":"Tìm các công cụ cho câu chuyện của bạn","onboarding.page4.button":"Tiếp tục","questions.page5.title":"Những bảng màu nào gây cảm共鸣 với bạn nhất?","questions.page5.skip":"Bỏ qua","questions.page5.button":"Tiếp theo","questions.page5.palette.basic":"Cơ bản","questions.page5.palette.skin":"Da","questions.page5.palette.makeup":"Trang điểm","questions.page5.palette.galaxy":"Ngân hà","questions.page5.palette.fabric":"Vải","questions.page5.palette.lips":"Môi","questions.page5.palette.rainbow":"Cầu vồng","questions.page5.palette.sky":"Bầu trời","questions.page6.title":"Những cọ nào bạn mong muốn thử nhất?","questions.page6.skip":"Bỏ qua","questions.page6.button":"Tiếp tục","questions.page6.brush.small":"Cọ nhỏ","questions.page6.brush.big":"Cọ lớn","questions.page6.brush.spray":"Xịt","questions.page6.brush.watercolor":"Màu nước","questions.page6.brush.ballpoint":"Bút bi","questions.page6.brush.pencil":"Bút chì","questions.page6.brush.pastel":"Phấn màu","questions.page6.brush.splash":"Giật nước","loading.analyzing":"Đang phân tích sở thích phong cách của bạn...","loading.ready":"Trải nghiệm tô màu độc quyền của bạn đã sẵn sàng","loading.tryButton":"Để tôi thử","loading.matched.single":"Đã tìm thấy mẫu độc quyền phù hợp với bạn","loading.matched.multi":"Đã tìm thấy mẫu độc quyền phong cách {styles} phù hợp với bạn","loading.matched.many":"Đã tìm thấy mẫu độc quyền phong cách {firstThree} và {count} phong cách khác phù hợp với bạn","trial.title":"Dùng thử miễn phí 3 ngày","trial.day0":"Hôm nay","trial.day0.description":"Truy cập không giới hạn tất cả các danh mục và hình ảnh, nhập hình ảnh không giới hạn, không có quảng cáo","trial.day2":"Sau 2 ngày","trial.day2.description":"Bạn sẽ nhận được nhắc nhở một ngày trước khi hết thời gian dùng thử","trial.day3":"Sau 3 ngày","trial.day3.description":"Không cần thanh toán trước {date}. Bạn có thể hủy trước thời hạn","trial.button":"Dùng thử miễn phí","subscription.title":"Mở khóa nội dung độc quyền của bạn","subscription.description":"Truy cập không giới hạn tất cả các danh mục và hình ảnh, nhập hình ảnh không giới hạn","subscription.weekly":"Hàng tuần","subscription.monthly":"Hàng tháng","subscription.yearly":"Hàng năm","subscription.bestValue":"Giá trị tốt nhất","subscription.freeTrialBadge":"Dùng thử miễn phí 3 ngày","subscription.weekly.price":"Sau đó $3.49/tuần","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"Dùng thử miễn phí","subscription.button.subscribe":"Đăng ký ngay","subscription.legalText":"Tất cả các tùy chọn đăng ký trên đều là đăng ký tự động gia hạn. Phí đăng ký sẽ được tính vào tài khoản Apple của bạn khi bạn xác nhận mua hoặc vào cuối thời gian dùng thử. Nếu không muốn gia hạn, hãy nhớ hủy đăng ký ít nhất 24 giờ trước khi đăng ký hoặc dùng thử miễn phí hết hạn. Bạn có thể tìm thấy quản lý đăng ký trong cài đặt tài khoản Apple của mình bất cứ lúc nào. Nếu bạn mua đăng ký hàng tháng hoặc hàng năm trước khi hết thời gian dùng thử, thời gian dùng thử chưa sử dụng còn lại sẽ tự động bị hủy bỏ."},hi:{"common.skip":"छोड़ दें","common.continue":"जारी रखें","common.next":"अगला","common.start":"शुरू करें","common.freeTrial":"निःशुल्क परीक्षण","common.subscribeNow":"अभी सदस्यता लें","common.quizProgress":"प्रश्नोत्तरी प्रगति","common.letMeTry":"मुझे आज़माने दें","common.imageLoadFailed":"छवि लोड विफल","common.restorePurchase":"खरीद पुनर्स्थापित करें","common.termsOfService":"सेवा की शर्तें","common.privacyPolicy":"गोपनीयता नीति","common.copyright":"© 2024 Cross Stitch. सर्वाधिकार सुरक्षित।","styles.animals":"जानवर","styles.comics":"कॉमिक्स","styles.people":"लोग","styles.cute":"प्यारा","styles.food":"भोजन","styles.mandala":"मंडला","styles.flowers":"फूल","styles.simple":"सरल","onboarding.page1.title":"Cross Stitch में आपका स्वागत है","onboarding.page1.subtitle":"हर रंग भरना एक रचना है","onboarding.page1.totalDownloads":"कुल डाउनलोड 5M+","onboarding.page1.happyArtists":"खुश कलाकार 1M+","onboarding.page1.testimonial":'"यह मेरे लिए हर दिन आराम करने का सबसे अच्छा तरीका है। Cross Stitch मेरे जीवन को और संतोषजनक बनाता है"',"onboarding.page1.author":"Sarah, वरिष्ठ उपयोगकर्ता","onboarding.page2.title":"Cross Stitch में आपका स्वागत है","onboarding.page2.subtitle":"बनाएं, रंग भरें और मज़े करें","onboarding.page2.button":"शुरू करें","onboarding.page3.title":"आपका रंग भरने का स्टाइल क्या है؟","onboarding.page3.subtitle":"आपकी रचनात्मक शक्तियों को प्रकट करने के लिए चार प्रश्न","onboarding.page3.button":"जारी रखें","questions.page1.title":"आपका लिंग क्या है؟","questions.page1.subtitle":"यह हमें आपके अनुभव को व्यक्तिगत बनाने में मदद करता है।","questions.page1.skip":"छोड़ दें","questions.page1.female":"महिला","questions.page1.male":"पुरुष","questions.page1.other":"अन्य","questions.page2.title":"आपकी आयु समूह क्या है؟","questions.page2.subtitle":"यह हमें प्रासंगिक शैलियों का सुझाव देने में मदद करता है।","questions.page2.skip":"छोड़ दें","questions.page2.under18":"18 साल से कम","questions.page2.18-29":"18-29 साल","questions.page2.30-39":"30-39 साल","questions.page2.40-49":"40-49 साल","questions.page2.50-59":"50-59 साल","questions.page2.over60":"60 साल से ऊपर","questions.page3.title":"कौन सी शैली आपको सबसे अधिक प्रेरित करती है؟","questions.page3.subtitle":"सभी लागू विकल्पों का चयन करें।","questions.page3.skip":"छोड़ दें","questions.page3.button":"अगला","questions.page3.style.animals":"जानवर","questions.page3.style.comics":"कॉमिक्स","questions.page3.style.people":"लोग","questions.page3.style.cute":"प्यारा","questions.page3.style.food":"भोजन","questions.page3.style.mandala":"मंडला","questions.page3.style.flowers":"फूल","questions.page3.style.simple":"सरल","questions.page4.title":"आपका लक्ष्य क्या है؟","questions.page4.subtitle":"यह हमें आपके अनुभव को व्यक्तिगत बनाने में मदद करता है।","questions.page4.skip":"छोड़ दें","questions.page4.relaxMyself":"खुद को आराम दें","questions.page4.haveFun":"मज़े करें","questions.page4.expressCreativity":"अपनी रचनात्मकता व्यक्त करें","questions.page4.clearMind":"मेरे मन को साफ करें","questions.page4.developSkills":"मेरे रंग भरने के कौशल को विकसित करें","questions.page4.relieveStress":"तनाव कम करें","questions.page4.other":"अन्य","onboarding.page4.title":"यह सब रंग और <br>ब्रश के बारे में है","onboarding.page4.subtitle":"अपनी कहानी के लिए उपकरण खोजें","onboarding.page4.button":"जारी रखें","questions.page5.title":"कौन से पैलेट आपके साथ सबसे ज्यादा गूंजते हैं؟","questions.page5.skip":"छोड़ दें","questions.page5.button":"अगला","questions.page5.palette.basic":"मूलभूत","questions.page5.palette.skin":"त्वचा","questions.page5.palette.makeup":"मेकअप","questions.page5.palette.galaxy":"आकाशगंगा","questions.page5.palette.fabric":"कपड़ा","questions.page5.palette.lips":"होंठ","questions.page5.palette.rainbow":"इंद्रधनुष","questions.page5.palette.sky":"आकाश","questions.page6.title":"आप कौन से ब्रश आज़माने के लिए सबसे उत्साहित हैं؟","questions.page6.skip":"छोड़ दें","questions.page6.button":"जारी रखें","questions.page6.brush.small":"छोटा ब्रश","questions.page6.brush.big":"बड़ा ब्रश","questions.page6.brush.spray":"स्प्रे","questions.page6.brush.watercolor":"जलरंग","questions.page6.brush.ballpoint":"बॉलपॉइंट पेन","questions.page6.brush.pencil":"पेंसिल","questions.page6.brush.pastel":"पेस्टल","questions.page6.brush.splash":"स्प्लैश","loading.analyzing":"आपकी शैली प्राथमिकताओं का विश्लेषण किया जा रहा है...","loading.ready":"आपका विशेष रंग भरने का अनुभव तैयार है","loading.tryButton":"मुझे आज़माने दें","loading.matched.single":"आपके लिए विशेष पैटर्न मिल गया है","loading.matched.multi":"आपके लिए {styles} शैली का विशेष पैटर्न मिल गया है","loading.matched.many":"आपके लिए {firstThree} शैली और {count} अन्य शैलियों के विशेष पैटर्न मिल गए हैं","trial.title":"3 दिनों का निःशुल्क परीक्षण","trial.day0":"आज","trial.day0.description":"सभी श्रेणियों और छवियों तक असीमित पहुंच, असीमित छवि आयात, कोई विज्ञापन नहीं","trial.day2":"2 दिनों में","trial.day2.description":"परीक्षण अवधि समाप्त होने से एक दिन पहले आपको एक अनुस्मारक प्राप्त होगा","trial.day3":"3 दिनों में","trial.day3.description":"{date} से पहले कोई भुगतान आवश्यक नहीं है। आप पहले से रद्द कर सकते हैं","trial.button":"निःशुल्क परीक्षण","subscription.title":"अपना विशेष सामग्री अनलॉक करें","subscription.description":"सभी श्रेणियों और छवियों तक असीमित पहुंच, असीमित छवि आयात","subscription.weekly":"साप्ताहिक","subscription.monthly":"मासिक","subscription.yearly":"वार्षिक","subscription.bestValue":"सर्वोत्तम मूल्य","subscription.freeTrialBadge":"3 दिनों का निःशुल्क परीक्षण","subscription.weekly.price":"फिर $3.49/सप्ताह","subscription.monthly.price":"$9.99","subscription.yearly.price":"$59.99","subscription.button.freeTrial":"निःशुल्क परीक्षण","subscription.button.subscribe":"अभी सदस्यता लें","subscription.legalText":"उपरोक्त सभी सदस्यता विकल्प स्वचालित रूप से नवीनीकरण होते हैं। सदस्यता शुल्क आपके Apple खाते से तब वसूला जाएगा जब आप खरीदारी की पुष्टि करेंगे या परीक्षण अवधि के अंत में। यदि आप नवीनीकरण नहीं करना चाहते हैं, तो याद रखें कि सदस्यता या निःशुल्क परीक्षण की समय सीमा समाप्त होने से कम से कम 24 घंटे पहले सदस्यता रद्द कर दें। आप किसी भी समय अपने Apple खाते की सेटिंग्स में सदस्यता प्रबंधन पा सकते हैं। यदि आप परीक्षण अवधि समाप्त होने से पहले मासिक या वार्षिक सदस्यता खरीदते हैं, तो शेष अप्रयुक्त परीक्षण समय स्वचालित रूप से समाप्त हो जाएगा।"},ar:{"common.skip":"تخطي","common.continue":"متابعة","common.next":"التالي","common.start":"ابدأ","common.freeTrial":"تجربة مجانية","common.subscribeNow":"اشترك الآن","common.quizProgress":"تقدم الاختبار","common.letMeTry":"اسمحلي بالتجربة","common.imageLoadFailed":"فشل تحميل الصورة","common.restorePurchase":"استعادة الشراء","common.termsOfService":"شروط الخدمة","common.privacyPolicy":"سياسة الخصوصية","common.copyright":"© 2024 Cross Stitch. جميع الحقوق محفوظة.","styles.animals":"حيوانات","styles.comics":"كوميكس","styles.people":"أشخاص","styles.cute":"لطيف","styles.food":"طعام","styles.mandala":"ماندالا","styles.flowers":"أزهار","styles.simple":"بسيط","onboarding.page1.title":"مرحبًا بك في Cross Stitch","onboarding.page1.subtitle":"كل عملية تلوين هي إبداع","onboarding.page1.totalDownloads":"إجمالي التنزيلات 5M+","onboarding.page1.happyArtists":"فنانون سعداء 1M+","onboarding.page1.testimonial":'"هذه هي أفضل طريقة لي للاسترخاء كل يوم. Cross Stitch يجعل حياتي أكثر إشباعًا"',"onboarding.page1.author":"سارة، مستخدم متمرس","onboarding.page2.title":"مرحبًا بك في Cross Stitch","onboarding.page2.subtitle":"أنشئ، لون، واستمتع","onboarding.page2.button":"ابدأ","onboarding.page3.title":"ما هو أسلوب التلوين الخاص بك؟","onboarding.page3.subtitle":"أربعة أسئلة لكشف نقاط قوتك الإبداعية","onboarding.page3.button":"متابعة","questions.page1.title":"ما هو جنسك؟","questions.page1.subtitle":"هذا يساعدنا على تخصيص تجربتك.","questions.page1.skip":"تخطي","questions.page1.female":"أنثى","questions.page1.male":"ذكر","questions.page1.other":"آخر","questions.page2.title":"ما هي فئة عمرك؟","questions.page2.subtitle":"هذا يساعدنا على اقتراح الأنماط ذات الصلة.","questions.page2.skip":"تخطي","questions.page2.under18":"أقل من 18 سنة","questions.page2.18-29":"18-29 سنة","questions.page2.30-39":"30-39 سنة","questions.page2.40-49":"40-49 سنة","questions.page2.50-59":"50-59 سنة","questions.page2.over60":"أكثر من 60 سنة","questions.page3.title":"أي نمط يلهمك أكثر؟","questions.page3.subtitle":"حدد جميع الخيارات التي تنطبق.","questions.page3.skip":"تخطي","questions.page3.button":"التالي","questions.page3.style.animals":"حيوانات","questions.page3.style.comics":"كوميكس","questions.page3.style.people":"أشخاص","questions.page3.style.cute":"لطيف","questions.page3.style.food":"طعام","questions.page3.style.mandala":"ماندالا","questions.page3.style.flowers":"أزهار","questions.page3.style.simple":"بسيط","questions.page4.title":"ما هو هدفك؟","questions.page4.subtitle":"هذا يساعدنا على تخصيص تجربتك.","questions.page4.skip":"تخطي","questions.page4.relaxMyself":"استرخِ","questions.page4.haveFun":"استمتع","questions.page4.expressCreativity":"أعبر عن إبداعي","questions.page4.clearMind":"أفرغ ذهني","questions.page4.developSkills":"طوّر مهاراتي في التلوين","questions.page4.relieveStress":"تخفيف التوتر","questions.page4.other":"آخر","onboarding.page4.title":"كل شيء عن اللون و<br>الفرش","onboarding.page4.subtitle":"ابحث عن الأدوات لقصتك","onboarding.page4.button":"متابعة","questions.page5.title":"أي لوحات الألوان تناسبك أكثر؟","questions.page5.skip":"تخطي","questions.page5.button":"التالي","questions.page5.palette.basic":"أساسي","questions.page5.palette.skin":"الجلد","questions.page5.palette.makeup":"الماكياج","questions.page5.palette.galaxy":"المجرة","questions.page5.palette.fabric":"القماش","questions.page5.palette.lips":"الشفاه","questions.page5.palette.rainbow":"قوس قزح","questions.page5.palette.sky":"السماء","questions.page6.title":"أي الفرش الأكثر حماسًا لتجربتها؟","questions.page6.skip":"تخطي","questions.page6.button":"متابعة","questions.page6.brush.small":"فرشاة صغيرة","questions.page6.brush.big":"فرشاة كبيرة","questions.page6.brush.spray":"رذاذ","questions.page6.brush.watercolor":"ألوان مائية","questions.page6.brush.ballpoint":"قلم حبري","questions.page6.brush.pencil":"قلم رصاص","questions.page6.brush.pastel":"باستيل","questions.page6.brush.splash":"رش","loading.analyzing":"تحليل تفضيلات أسلوبك...","loading.ready":"تجربة التلوين الحصرية لديك جاهزة","loading.tryButton":"اسمحلي بالتجربة","loading.matched.single":"تم العثور على نمط حصري لك","loading.matched.multi":"تم العثور على نمط حصري بنمط {styles} لك","loading.matched.many":"تم العثور على أنماط حصرية بنمط {firstThree} و {count} أنماط أخرى لك","trial.title":"تجربة مجانية لمدة 3 أيام","trial.day0":"اليوم","trial.day0.description":"وصول غير محدود إلى جميع الفئات والصور، استيراد صور غير محدود، بدون إعلانات","trial.day2":"بعد يومين","trial.day2.description":"ستتلقى تذكيرًا قبل يوم واحد من انتهاء التجربة","trial.day3":"بعد 3 أيام","trial.day3.description":"لا يلزم دفع قبل {date}. يمكنك الإلغاء مبكرًا","trial.button":"تجربة مجانية","subscription.title":"افتح محتواك الحصري","subscription.description":"وصول غير محدود إلى جميع الفئات والصور، استيراد صور غير محدود","subscription.weekly":"أسبوعي","subscription.monthly":"شهري","subscription.yearly":"سنوي","subscription.bestValue":"أفضل قيمة","subscription.freeTrialBadge":"تجربة مجانية لمدة 3 أيام","subscription.weekly.price":"ثم 3.49 دولارًا أمريكيًا أسبوعيًا","subscription.monthly.price":"9.99 دولارات أمريكيّة","subscription.yearly.price":"59.99 دولارات أمريكيّة","subscription.button.freeTrial":"تجربة مجانية","subscription.button.subscribe":"اشترك الآن","subscription.legalText":"جميع خيارات الاشتراك أعلاه قابلة للتجديد التلقائي. ستتم محاسبة رسوم الاشتراك على حساب Apple الخاص بك عند تأكيد الشراء أو في نهاية فترة التجربة. إذا كنت لا ترغب في التجديد، تذكر إلغاء الاشتراك قبل 24 ساعة على الأقل من انتهاء صلاحية الاشتراك أو التجربة المجانية. يمكنك العثور على إدارة الاشتراك في إعدادات حساب Apple الخاص بك في أي وقت. إذا اشتريت اشتراكًا شهريًا أو سنويًا قبل انتهاء فترة التجربة، فسيتم إلغاء الوقت المتبقي من التجربة غير المستخدم تلقائيًا."}},B=["zh-CN","zh-TW","en","fr","de","id","it","ja","ko","pt","ru","es","th","tr","vi","hi","ar"],L=[{code:"zh-CN",label:"简体中文",shortLabel:"简中"},{code:"zh-TW",label:"繁體中文",shortLabel:"繁中"},{code:"en",label:"English",shortLabel:"EN"},{code:"fr",label:"Français",shortLabel:"FR"},{code:"de",label:"Deutsch",shortLabel:"DE"},{code:"id",label:"Bahasa Indonesia",shortLabel:"ID"},{code:"it",label:"Italiano",shortLabel:"IT"},{code:"ja",label:"日本語",shortLabel:"JA"},{code:"ko",label:"한국어",shortLabel:"KO"},{code:"pt",label:"Português",shortLabel:"PT"},{code:"ru",label:"Русский",shortLabel:"RU"},{code:"es",label:"Español",shortLabel:"ES"},{code:"th",label:"ไทย",shortLabel:"TH"},{code:"tr",label:"Türkçe",shortLabel:"TR"},{code:"vi",label:"Tiếng Việt",shortLabel:"VI"},{code:"hi",label:"हिन्दी",shortLabel:"HI"},{code:"ar",label:"العربية",shortLabel:"AR"}],G=new Set(["ar"]),A="crossstitch_locale";let h=typeof localStorage<"u"?localStorage.getItem(A):null;(!h||!B.includes(h))&&(h="zh-CN");let P=null;function U(t,i){if(!t||!i)return t;let o=t;for(const[n,s]of Object.entries(i))o=o.split(`{${n}}`).join(String(s??""));return o}function e(t,i){const o=T[h]||{},n=T["zh-CN"]||{},s=o[t]??n[t]??t;return U(s,i)}function N(){return h}function I(){const t=document.documentElement;t&&(t.lang=h,t.dir=G.has(h)?"rtl":"ltr")}function Y(t){P=t}function K(t){if(B.includes(t)){h=t;try{localStorage.setItem(A,t)}catch{}I(),typeof P=="function"&&P(t)}}function E(t){const i=t.trim(),o=i.match(/^(.+?)\s+(\S+)$/);return o?{subtitle:o[1],value:o[2]}:{subtitle:i,value:""}}function Q(){return["zh-CN","zh-TW","ja","ko"].includes(h)?"、":", "}function R(){return L.map(t=>`<button type="button" class="language-menu-item" data-locale="${t.code}" onclick="selectLanguage('${t.code}')">${t.label}</button>`).join("")}function W(){const t=document.getElementById("current-language-label");if(!t)return;const i=L.find(o=>o.code===h);t.textContent=i?i.shortLabel:h}function V(){window.toggleLanguageMenu=function(t){var o;(o=t==null?void 0:t.stopPropagation)==null||o.call(t);const i=document.getElementById("lang-menu");i&&i.classList.toggle("hidden")},window.selectLanguage=function(t){const i=document.getElementById("lang-menu");i&&i.classList.add("hidden"),K(t)},window.__crossStitchI18nDocClose||(window.__crossStitchI18nDocClose=!0,document.addEventListener("click",t=>{const i=document.getElementById("lang-menu"),o=document.getElementById("lang-switch-btn");if(!i||i.classList.contains("hidden"))return;const n=t.target;o&&(o===n||o.contains(n))||i.contains(n)||i.classList.add("hidden")}))}let c=0;const j=9;let d=!1,f=0;const D=4;let C=[];const k=new Map,_=50;function p(t,i="square"){const o=`${t}-${i}`;if(k.has(o))return k.get(o);const n=encodeURIComponent(t),s=encodeURIComponent(i),a=`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${n}&image_size=${s}`;if(k.size>=_){const r=k.keys().next().value;k.delete(r)}return k.set(o,a),a}const X=`
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

  html[dir='rtl'] .page-container,
  html[dir='rtl'] .main-content,
  html[dir='rtl'] .subscription-content-container,
  html[dir='rtl'] .subscription-page,
  html[dir='rtl'] .trial-intro-page,
  html[dir='rtl'] .bottom-action {
    direction: rtl;
  }
`,M=new Set;function J(){const t="shared-unified-styles";if(!document.getElementById(t)){const i=document.createElement("style");i.id=t,i.textContent=X,document.head.appendChild(i)}}function Z(){M.forEach(t=>{const i=document.getElementById(t);i&&i.remove()}),M.clear()}J();function z(t,i=!1){const o=Math.round(f/D*100);return`
    <div class="progress-bar-container" role="progressbar" aria-label="${e("common.quizProgress")}" aria-valuenow="${o}" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar-wrapper">
        <div class="progress-bar-fill" data-question="${t}" style="width: ${o}%"></div>
      </div>
    </div>
  `}function S(t){t>=f&&(f=t);const i=document.querySelector(".progress-bar-fill");if(i){const o=Math.round(f/D*100);i.style.width=o+"%"}}p("cute animals cross stitch pattern"),p("comic book cross stitch pattern"),p("people cross stitch pattern"),p("cute cartoon cross stitch pattern"),p("food cross stitch pattern"),p("mandala cross stitch pattern"),p("flower cross stitch pattern"),p("simple cross stitch pattern");p("basic color palette for cross stitch"),p("skin tone color palette for cross stitch"),p("makeup color palette for cross stitch"),p("galaxy color palette for cross stitch"),p("fabric color palette for cross stitch"),p("lip color palette for cross stitch"),p("rainbow color palette for cross stitch"),p("sky color palette for cross stitch");p("small brush for cross stitch"),p("big brush for cross stitch"),p("spray brush for cross stitch"),p("watercolor brush for cross stitch"),p("ballpoint pen for cross stitch"),p("pencil for cross stitch"),p("pastel for cross stitch"),p("splash brush for cross stitch");const $=document.createElement("style");$.textContent=`
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
`;document.head.appendChild($);function x(t=!0){const i=document.getElementById("app");switch(document.getElementById("meshGradientBg"),Z(),i.innerHTML="",c){case 0:ie();break;case 1:se();break;case 2:oe();break;case 3:ae();break;case 4:ne();break;case 5:re();break;case 6:le();break;case 7:pe();break;case 8:ce();break;case 9:ue();break}t&&(c===0||c===1||c===2||c===8)&&ee(),I()}function ee(){const i=document.getElementById("app").firstElementChild;i&&i.classList.add("page-transition-enter")}let b=[];function te(){b.forEach(t=>clearTimeout(t)),b=[]}function ie(){te();const t=document.getElementById("app"),i=E(e("onboarding.page1.totalDownloads")),o=E(e("onboarding.page1.happyArtists")),n=(s,a)=>`
    <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin: 0 auto;">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#CCCCCC" d="M554.92 162.9c10.18 10.44 32.76 7.23 59.24-8.41 26.48-15.64 52.83-41.34 69.14-67.42 16.3-26.08 20.07-48.57 9.89-59.01-10.18-10.44-32.76-7.23-59.24 8.41-26.48 15.65-52.83 41.35-69.14 67.43-16.3 26.08-20.07 48.57-9.89 59z m0 0M494.33 262.41c2.97 14.28 23.73 23.71 54.47 24.76 30.74 1.05 66.78-6.45 94.55-19.67 27.77-13.22 43.04-30.16 40.07-44.44-2.97-14.27-23.73-23.71-54.47-24.76-30.74-1.05-66.78 6.45-94.55 19.67-27.77 13.23-43.04 30.17-40.07 44.44z m0 0M424.36 150.64c2.56 34.4 12.68 65.62 26.55 81.89 13.87 16.27 29.38 15.11 40.69-3.03 11.31-18.14 16.7-50.51 14.14-84.92-2.56-34.41-12.68-65.62-26.55-81.89-13.87-16.27-29.38-15.11-40.69 3.03-11.31 18.14-16.7 50.51-14.14 84.92z m0 0M426.3 401.09c5.03 13.68 26.95 19.98 57.51 16.51 30.56-3.46 65.11-16.17 90.64-33.32s38.16-36.14 33.12-49.82c-5.03-13.69-26.95-19.98-57.51-16.51-30.56 3.46-65.12 16.17-90.64 33.32-25.52 17.14-38.15 36.13-33.12 49.82z m0 0M341.03 302.08c11.71 52.03 39.03 90.2 61.01 85.26 21.98-4.95 30.31-51.14 18.6-103.17-11.71-52.03-39.03-90.2-61.01-85.25-21.98 4.94-30.31 51.13-18.6 103.16z m0 0M425.92 566.28c9.45 11.09 32.2 9.41 59.67-4.43s55.48-37.71 73.49-62.65c18.01-24.93 23.28-47.12 13.82-58.21-9.46-11.1-32.2-9.41-59.67 4.42s-55.48 37.72-73.49 62.65c-18.01 24.93-23.28 47.13-13.82 58.22z m0 0M311.48 502.97c29.01 44.75 67.85 71.1 86.76 58.84 18.91-12.26 10.72-58.47-18.28-103.23-29.01-44.76-67.85-71.1-86.76-58.84-18.92 12.26-10.73 58.48 18.28 103.23z m0 0M475.69 723.78c12.67 7.21 33.48-2.12 54.59-24.48 21.11-22.36 39.32-54.36 47.76-83.93 8.44-29.57 5.84-52.23-6.83-59.44-12.67-7.21-33.48 2.12-54.59 24.48-21.11 22.36-39.32 54.36-47.76 83.93-8.45 29.58-5.84 52.24 6.83 59.44z m0 0M346.24 702.24c42.51 32.21 88.01 43.75 101.61 25.79 13.61-17.96-9.82-58.63-52.34-90.83-42.51-32.21-88.01-43.75-101.61-25.78-13.61 17.95 9.82 58.62 52.34 90.82z m0 0M584.76 856.77c22.39 2.57 45.48-38.29 51.57-91.27 6.09-52.98-7.11-98.02-29.5-100.6-22.39-2.57-45.48 38.29-51.57 91.27-6.09 52.99 7.11 98.02 29.5 100.6z m0 0M457.99 889.39c51.73 12.96 98.11 5.74 103.58-16.12 5.48-21.86-32.02-50.08-83.76-63.04s-98.11-5.74-103.59 16.12c-5.46 21.86 32.04 50.08 83.77 63.04z m0 0M658.45 851.41c6.05 52.99 29.1 93.87 51.49 91.32 22.39-2.55 35.64-47.59 29.59-100.57-6.05-52.99-29.1-93.87-51.49-91.31-22.39 2.55-35.64 47.57-29.59 100.56z m0 0M593.72 1001.97c34.5 0.59 66.51-6.63 83.98-18.96 17.47-12.32 17.73-27.88 0.7-40.8-17.03-12.92-48.78-21.25-83.28-21.84-34.5-0.59-66.51 6.63-83.98 18.96-17.47 12.32-17.73 27.88-0.7 40.8 17.04 12.92 48.78 21.24 83.28 21.84z m0 0"></path></svg>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #000000; line-height: 1.2; margin: 0;" class="title">${s}</h2>
        <p class="subtitle" style="margin: 0;">${a}</p>
      </div>
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#CCCCCC" d="M371.99 124.79c38.21 37.27 81.95 54.39 97.7 38.24 15.74-16.14-2.46-59.45-40.68-96.71-38.21-37.27-81.96-54.39-97.7-38.25-15.75 16.16 2.47 59.46 40.68 96.72z m0 0M429.03 281.36c52.25 10.88 98.34 1.79 102.94-20.29 4.59-22.08-34.05-48.8-86.3-59.67-52.26-10.87-98.35-1.79-102.94 20.29-4.6 22.08 34.04 48.79 86.3 59.67z m0 0M551.57 243.35c22.49 1.67 43.94-40.12 47.89-93.35 3.96-53.23-11.06-97.73-33.55-99.41-22.49-1.67-43.94 40.12-47.89 93.35-3.96 53.23 11.06 97.73 33.55 99.41z m0 0M494.35 406.27c50.1 18.42 97.02 16.18 104.8-4.98 7.78-21.17-26.52-53.26-76.62-71.68-50.1-18.42-97.02-16.18-104.8 4.99-7.79 21.17 26.52 53.25 76.62 71.67z m0 0M623.46 387.55c14.23 3.21 31.43-11.8 45.12-39.37 13.68-27.57 21.78-63.52 21.23-94.29-0.55-30.78-9.66-51.71-23.9-54.91-14.23-3.2-31.43 11.81-45.12 39.38-13.68 27.57-21.77 63.52-21.22 94.29 0.55 30.77 9.65 51.7 23.89 54.9z m0 0M498.87 533.64c40.62 34.63 85.41 48.78 100.04 31.62 14.63-17.16-6.44-59.15-47.06-93.78-40.62-34.62-85.41-48.78-100.04-31.62-14.63 17.17 6.44 59.15 47.06 93.78z m0 0M626.62 560.34c12.24 7.94 33.57-0.19 55.96-21.31 22.39-21.13 42.43-52.05 52.57-81.11 10.14-29.06 8.84-51.85-3.4-59.79-12.24-7.94-33.57 0.19-55.96 21.31-22.39 21.13-42.43 52.04-52.57 81.11-10.15 29.07-8.85 51.86 3.4 59.79z m0 0M465.46 660.22c26.41 46.39 63.7 74.95 83.3 63.8 19.6-11.16 14.09-57.81-12.31-104.2s-63.69-74.95-83.29-63.8c-19.62 11.16-14.11 57.81 12.3 104.2z m0 0M576.22 728.09c8.81 11.63 31.63 11.26 59.87-0.98s57.61-34.49 77.05-58.36c19.43-23.87 25.98-45.74 17.16-57.37-8.81-11.63-31.63-11.26-59.88 0.98-28.24 12.24-57.61 34.49-77.04 58.36-19.43 23.87-25.97 45.74-17.16 57.37z m0 0M387.03 765.67c6.1 53.03 29.21 93.92 51.62 91.35 22.41-2.58 35.63-47.66 29.52-100.68-6.1-53.03-29.21-93.92-51.62-91.35-22.41 2.57-35.62 47.65-29.52 100.68z m0 0M463.17 872.94c3.54 14.15 24.69 22.75 55.47 22.56 30.78-0.19 66.52-9.15 93.75-23.5 27.24-14.35 41.82-31.9 38.28-46.05-3.55-14.16-24.69-22.75-55.47-22.56-30.78 0.19-66.52 9.15-93.75 23.5-27.24 14.34-41.83 31.89-38.28 46.05z m0 0M313.14 942.95c14.49 1.66 29.98-15.12 40.62-44 10.64-28.88 14.82-65.49 10.96-96.03-3.86-30.54-15.16-50.37-29.66-52.02-14.5-1.65-29.98 15.12-40.62 44-10.64 28.88-14.82 65.49-10.96 96.03 3.86 30.54 15.16 50.37 29.66 52.02z m0 0M332.44 962.8c0.25 14.59 18.91 27.75 48.93 34.53 30.03 6.78 66.87 6.14 96.64-1.67 29.78-7.81 47.96-21.61 47.71-36.2-0.25-14.59-18.9-27.75-48.93-34.52-30.03-6.78-66.87-6.14-96.64 1.67-29.78 7.8-47.97 21.6-47.71 36.19z m0 0"></path></svg>
    </div>
  `;t.innerHTML=`
    <div class="container" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; height: 100dvh;">
      <div 
        id="text1"
        style="animation: fadeInUp 0.8s ease forwards; position: absolute; text-align: center; width: 100%; max-width: 335px;"
      >
        <h1 style="font-size: 32px; white-space: nowrap; margin-bottom: 8px;" class="title">${e("onboarding.page1.title")}</h1>
        <p style="margin-top: 8px;" class="subtitle">${e("onboarding.page1.subtitle")}</p>
      </div>
      
      <div id="statContainer" style="opacity: 0; display: flex; flex-direction: column; align-items: center; gap: 72px; position: absolute; width: 100%; max-width: 335px;">
        <div id="stat1" style="opacity: 0; width: 100%;">
          ${n(i.value,i.subtitle)}
        </div>
        <div id="stat2" style="opacity: 0; width: 100%;">
          ${n(o.value,o.subtitle)}
        </div>
        <div id="stat3" style="opacity: 0; width: 100%;">
          ${n("4.7+","Appstore")}
        </div>
      </div>
      
      <div id="testimonialContainer" style="opacity: 0; position: absolute; text-align: center; width: 100%; max-width: 335px;">
        <h1 style="font-size: 24px; white-space: normal; margin-bottom: 8px; line-height: 1.3;" class="title">${e("onboarding.page1.testimonial")}</h1>
        <p style="margin-top: 8px;" class="subtitle">${e("onboarding.page1.author")}</p>
      </div>
    </div>
  `,b.push(setTimeout(()=>{const s=document.getElementById("text1"),a=document.getElementById("statContainer");s&&a&&(s.style.animation="fadeOutUp 0.8s ease forwards",b.push(setTimeout(()=>{a.style.opacity="1"},400)))},2e3)),b.push(setTimeout(()=>{const s=document.getElementById("stat1");s&&(s.style.animation="fadeInUp 0.8s ease forwards")},3100)),b.push(setTimeout(()=>{const s=document.getElementById("stat2");s&&(s.style.animation="fadeInUp 0.8s ease forwards")},3700)),b.push(setTimeout(()=>{const s=document.getElementById("stat3");s&&(s.style.animation="fadeInUp 0.8s ease forwards")},4300)),b.push(setTimeout(()=>{const s=document.getElementById("stat1"),a=document.getElementById("stat2"),r=document.getElementById("stat3"),l=document.getElementById("testimonialContainer");s&&(s.style.animation="fadeOutUp 0.8s ease forwards"),a&&(a.style.animation="fadeOutUp 0.8s ease forwards"),r&&(r.style.animation="fadeOutUp 0.8s ease forwards"),b.push(setTimeout(()=>{l&&(l.style.opacity="1",l.style.animation="fadeInUp 0.8s ease forwards"),b.push(setTimeout(()=>{l&&(l.style.animation="fadeOutUp 0.8s ease forwards"),b.push(setTimeout(()=>{c=1,x()},800))},2e3))},800))},5700))}function se(){const t=document.getElementById("app");t.innerHTML=`
    <div class="onboarding-page-2">
      <!-- Fullscreen Background Image -->
      <main class="background-main">
        <img alt="Background illustration" class="background-image" src="/images/Gemini_Generated_Image_w6zdxow6zdxow6zd.png">
        <!-- Gradient Overlay for smooth transition -->
        <div class="gradient-overlay"></div>
      </main>
      <!-- Fixed Bottom Action Area -->
      <footer class="bottom-action">
        <div class="text-center space-y-2 mb-8">
          <h1 style="font-size: 32px; animation: fadeInUp 0.6s ease forwards; white-space: nowrap; width: 100%; text-align: center;" class="main-title">${e("onboarding.page2.title")}</h1>
          <p style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; font-size: 16px;" class="subtitle">${e("onboarding.page2.subtitle")}</p>
        </div>
        <div class="button-container">
          <button 
            style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;"
            class="bottom-button"
            onclick="nextPage()"
          >
            ${e("onboarding.page2.button")}
          </button>
        </div>
      </footer>
    </div>
  `;const i=document.createElement("style");i.textContent=`
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
    }
    
    .space-y-2 > * + * {
      margin-top: 8px;
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
      white-space: nowrap;
      overflow: visible;
      width: 100%;
      text-align: center;
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
  `,document.head.appendChild(i)}function oe(){const t=document.getElementById("app");t.innerHTML=`
    <div class="onboarding-page-3">
      <!-- Fullscreen Background Image -->
      <main class="background-main">
        <img alt="Vibrant artistic collage" class="background-image" src="/images/Gemini_Generated_Image_ipgi7aipgi7aipgi.png" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
        <!-- Gradient Overlay for smooth transition to bottom content area -->
        <div class="gradient-overlay"></div>
      </main>
      <!-- Fixed Content at Bottom -->
      <footer class="bottom-action">
        <div class="text-center space-y-2 mb-8">
          <h1 style="font-size: 32px; animation: fadeInUp 0.6s ease forwards; white-space: nowrap; width: 100%; text-align: center;" class="main-title">${e("onboarding.page3.title")}</h1>
          <p style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; font-size: 16px;" class="subtitle">${e("onboarding.page3.subtitle")}</p>
        </div>
        <div class="button-container">
          <button 
            style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;"
            class="bottom-button"
            onclick="nextPage()"
          >
            ${e("onboarding.page3.button")}
          </button>
        </div>
      </footer>
    </div>
  `;const i=document.createElement("style");i.textContent=`
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
    }
    
    .main-title {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      margin-bottom: 8px;
      width: 100%;
      text-align: center;
    }

    .subtitle {
      font-size: 14px;
      color: #888888;
      font-weight: normal;
      margin-top: 8px;
    }

    .space-y-2 > * + * {
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
  `,document.head.appendChild(i)}function ae(){const t=document.getElementById("app");t.innerHTML=`
    <div class="question-page-1 page-container">
      <!-- TopAppBar Section -->
      <nav class="top-nav">
        <div class="placeholder" style="width: 24px;"></div>
        ${z(1)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${e("common.skip")}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Headline Section - Fixed -->
        <div class="headline-section" style="animation: fadeInUp 0.6s ease forwards; position: sticky; top: 0; z-index: 10; background-color: #FFFFFF; padding-top: 8px;">
          <h2 class="main-title">${e("questions.page1.title")}</h2>
          <p class="subtitle">${e("questions.page1.subtitle")}</p>
        </div>
        <!-- Selection Cards - Scrollable -->
        <div class="selection-cards scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Female Card -->
          <div class="option-card" onclick="selectOption('female')">
            <div class="option-content">
              <span class="option-icon">👩</span>
              <span class="option-text">${e("questions.page1.female")}</span>
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
              <span class="option-text">${e("questions.page1.male")}</span>
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
              <span class="option-text">${e("questions.page1.other")}</span>
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
  `;const i=document.createElement("style");i.textContent=`
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
      justify-content: space-between;
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
      gap: 16px;
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
  `,document.head.appendChild(i),window.selectOption=function(o){if(d)return;document.querySelectorAll(".option-card").forEach(s=>{s.classList.remove("selected"),s.style.pointerEvents="none"}),event.target.closest(".option-card").classList.add("selected"),S(1),setTimeout(()=>{nextPage()},500)}}function ne(){const t=document.getElementById("app");t.innerHTML=`
    <div class="question-page-2 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${z(2)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${e("common.skip")}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Header Section - Fixed -->
        <header class="header-section" style="position: sticky; top: 0; z-index: 10; background-color: #FFFFFF; padding-top: 8px;">
          <h2 class="main-title">${e("questions.page2.title")}</h2>
          <p class="subtitle">${e("questions.page2.subtitle")}</p>
        </header>
        <!-- Options List - Scrollable -->
        <div class="options-list scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Option Card 1 -->
          <button class="option-card" onclick="selectOption('under14')">
            <div class="option-content">
              <span class="option-icon">✏️</span>
              <span class="option-text">${e("questions.page2.under18")}</span>
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
              <span class="option-text">${e("questions.page2.18-29")}</span>
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
              <span class="option-text">${e("questions.page2.30-39")}</span>
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
              <span class="option-text">${e("questions.page2.40-49")}</span>
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
              <span class="option-text">${e("questions.page2.50-59")}</span>
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
              <span class="option-text">${e("questions.page2.over60")}</span>
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
  `;const i=document.createElement("style");i.textContent=`
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
      margin-left: auto;
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
      gap: 16px;
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
  `,document.head.appendChild(i),window.selectOption=function(o){if(d)return;document.querySelectorAll(".option-card").forEach(s=>{s.classList.remove("selected"),s.style.pointerEvents="none"}),event.target.closest(".option-card").classList.add("selected"),S(2),setTimeout(()=>{nextPage()},500)}}function re(){const t=document.getElementById("app");t.innerHTML=`
    <div class="question-page-3 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${z(3)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${e("common.skip")}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Headline - Fixed -->
        <div style="position: sticky; top: 0; z-index: 10; background-color: #FFFFFF; padding-top: 8px;">
          <h2 class="main-title" style="animation: fadeInUp 0.6s ease forwards;">${e("questions.page3.title")}</h2>
        </div>
        <!-- Style Selection Grid - Scrollable -->
        <div class="style-grid scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0;">
          <!-- Card 1: Animals -->
          <div class="style-card" onclick="toggleOption('style', 'animals')">
            <img class="card-image" src="./clip/图片/066e989deaf84f8049c78964200ddc54.webp" alt="${e("questions.page3.style.animals")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.animals")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 2: Comic -->
          <div class="style-card" onclick="toggleOption('style', 'comics')">
            <img class="card-image" src="./clip/图片/ac7ba83687f9c31480e70e23b4e504fb.webp" alt="${e("questions.page3.style.comics")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.comics")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 3: People -->
          <div class="style-card" onclick="toggleOption('style', 'people')">
            <img class="card-image" src="./clip/图片/4322aab16149485ce68b0468f48ea2a3.webp" alt="${e("questions.page3.style.people")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.people")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 4: Cute -->
          <div class="style-card" onclick="toggleOption('style', 'cute')">
            <img class="card-image" src="./clip/图片/883bb99b4fa272288c87760b52809443.webp" alt="${e("questions.page3.style.cute")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.cute")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 5: Food -->
          <div class="style-card" onclick="toggleOption('style', 'food')">
            <img class="card-image" src="./clip/图片/572879658e58ccb130aa3a6b9501392b.webp" alt="${e("questions.page3.style.food")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.food")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 6: Mandala -->
          <div class="style-card" onclick="toggleOption('style', 'mandala')">
            <img class="card-image" src="./clip/图片/163f774efff4493497edd2504b5d6224.webp" alt="${e("questions.page3.style.mandala")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.mandala")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 7: Flower -->
          <div class="style-card" onclick="toggleOption('style', 'flowers')">
            <img class="card-image" src="./clip/图片/fefe89a79b554f068d18b994058ecbdf.webp" alt="${e("questions.page3.style.flowers")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.flowers")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <!-- Card 8: Simple -->
          <div class="style-card" onclick="toggleOption('style', 'simple')">
            <img class="card-image" src="./clip/图片/cf0c4dfd283c24ee59824136205f8c73.webp" alt="${e("questions.page3.style.simple")}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23FED11F%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E图片加载失败%3C/text%3E%3C/svg%3E';">
            <div class="card-overlay"></div>
            <div class="card-label">
              <span class="label-text">${e("questions.page3.style.simple")}</span>
            </div>
            <div class="check-icon">
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <!-- Fixed Bottom Button Section -->
      <footer class="bottom-action" id="style-bottom-action">
        <div class="button-container">
          <button class="next-button bottom-button" id="continueButton" disabled onclick="goToNextFromStylePage()" style="opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease;">
            ${e("questions.page3.button")}
          </button>
        </div>
      </footer>
    </div>
  `;const i=document.createElement("style");i.textContent=`
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
    
    .card-label {
      position: absolute;
      bottom: 16px;
      left: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .label-text {
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
  `,document.head.appendChild(i),window.goToNextFromStylePage=function(){S(3),nextPage()},window.toggleOption=function(o,n){const s=document.querySelector(`[onclick="toggleOption('${o}', '${n}')"]`),a=document.getElementById("continueButton");if(s){const r=s.classList.contains("selected");s.classList.toggle("selected");let l=[];if(o==="style"?(l=document.querySelectorAll(".style-card.selected"),C=[],l.forEach(y=>{const w=y.getAttribute("onclick").match(/toggleOption\('style',\s*'([^']+)'\)/);w&&w[1]&&C.push(w[1])})):o==="palette"?l=document.querySelectorAll(".palette-card.selected"):o==="brush"&&(l=document.querySelectorAll(".brush-card.selected")),a)if(l.length>=1){if(a.style.opacity="1",a.style.visibility="visible",a.disabled=!1,!r&&l.length===1){const y=document.querySelector(".progress-bar-fill");if(y){const v=parseInt(y.getAttribute("data-question"));v&&v>f&&S(v)}}}else a.style.opacity="0",a.style.visibility="hidden",a.disabled=!0}}}function le(){const t=document.getElementById("app");t.innerHTML=`
    <div class="question-page-4 page-container">
      <!-- Top Navigation Bar -->
      <nav class="top-nav">
        <div class="back-button" onclick="prevPage()">
          <svg class="back-icon" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79889 24H41.7989" stroke="#999999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.7988 36L5.79883 24L17.7988 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        ${z(4)}
        <div class="skip-button" onclick="skipCurrentQuestion()">${e("common.skip")}</div>
      </nav>
      <!-- Main Content Canvas -->
      <main class="main-content">
        <!-- Header Titles - Fixed -->
        <div class="header-section" style="position: sticky; top: 0; z-index: 10; background-color: #FFFFFF; padding-top: 8px;">
          <h2 class="main-title">${e("questions.page4.title")}</h2>
          <p class="subtitle">${e("questions.page4.subtitle")}</p>
        </div>
        <!-- Selection List - Scrollable -->
        <div class="options-list scrollable-options" style="animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0;">
          <!-- Option: Relax -->
          <button class="option-item" onclick="selectOption('relax')">
            <div class="option-content">
              <span class="option-icon">☕️</span>
              <span class="option-text">${e("questions.page4.relaxMyself")}</span>
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
              <span class="option-text">${e("questions.page4.haveFun")}</span>
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
              <span class="option-text">${e("questions.page4.expressCreativity")}</span>
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
              <span class="option-text">${e("questions.page4.clearMind")}</span>
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
              <span class="option-text">${e("questions.page4.developSkills")}</span>
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
              <span class="option-text">${e("questions.page4.relieveStress")}</span>
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
              <span class="option-text">${e("questions.page4.other")}</span>
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
  `;const i=document.createElement("style");i.textContent=`
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
      justify-content: space-between;
      padding: 20px;
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
      gap: 16px;
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
      margin-left: auto;
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
  `,document.head.appendChild(i),window.selectOption=function(o){if(d)return;document.querySelectorAll(".option-item").forEach(a=>{a.classList.remove("selected"),a.style.pointerEvents="none";const r=a.querySelector(".option-checkbox");r&&r.classList.remove("selected");const l=a.querySelector(".option-text");l&&l.classList.remove("selected-text");const y=a.querySelector(".option-icon");y&&(y.style.fontVariationSettings="")});const s=event.target.closest(".option-item");if(s){s.classList.add("selected");const a=s.querySelector(".option-checkbox");a&&a.classList.add("selected");const r=s.querySelector(".option-text");r&&r.classList.add("selected-text");const l=s.querySelector(".option-icon");l&&(l.style.fontVariationSettings="'FILL' 1")}S(4),setTimeout(()=>{nextPage()},500)}}function pe(){const t=document.getElementById("app");t.innerHTML=`
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
          ${e("loading.analyzing")}
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
          ${e("loading.ready")}
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
            ${e("loading.tryButton")}
          </button>
        </div>
      </footer>
    </div>
  `;const i=["🎨","🖌️","🌈","✏️","🎭","✨","🌟","💫"],o=document.getElementById("emojiContainer"),n=50,s=50,a=48,r=32,l=[.15*Math.PI,.65*Math.PI,1.15*Math.PI,1.65*Math.PI,.4*Math.PI,.9*Math.PI,1.4*Math.PI,1.9*Math.PI],y=[...i].sort(()=>Math.random()-.5);for(let g=0;g<8;g++){const u=document.createElement("div");u.className="emoji",u.textContent=y[g];const m=g<4?[a,r]:[r,a],q=m[Math.floor(Math.random()*m.length)],F=l[g],O=n+q*Math.cos(F),H=s+q*Math.sin(F);u.style.left=`${O}%`,u.style.top=`${H}%`,u.style.setProperty("--emoji-index",g),o.appendChild(u)}const v=document.createElement("style");v.textContent=`
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
  `,document.head.appendChild(v);function w(){if(C.length===0)return e("loading.matched.single");const g=Q(),u=C.map(q=>e(`styles.${q}`));if(u.length<=3)return e("loading.matched.multi",{styles:u.join(g)});const m=u.slice(0,3).join(g);return e("loading.matched.many",{firstThree:m,count:u.length})}setTimeout(()=>{const g=document.getElementById("loadingCircle"),u=document.getElementById("loadingText1"),m=document.getElementById("loadingText2"),q=document.getElementById("loadingText3"),F=document.getElementById("tryButton");g&&(g.className="loading-check",g.innerHTML="✓"),u&&(u.style.animation="scaleOut 0.3s ease forwards"),setTimeout(()=>{m&&(m.textContent=w(),m.style.visibility="visible",m.style.animation="popIn 0.3s ease forwards"),setTimeout(()=>{m&&(m.style.animation="scaleOut 0.3s ease forwards"),setTimeout(()=>{q&&(q.style.visibility="visible",q.style.animation="popIn 0.3s ease forwards"),F&&setTimeout(()=>{F.style.animation="fadeInUp 0.6s ease forwards"},300)},500)},1500)},500)},3e3)}function ce(){const t=document.getElementById("app"),i=new Date,o=new Date(i);o.setDate(o.getDate()+3);const n=new Intl.DateTimeFormat(N(),{year:"numeric",month:"short",day:"numeric"}).format(o),s=e("onboarding.page1.title"),a=encodeURIComponent(e("common.imageLoadFailed"));t.innerHTML=`
    <div class="trial-intro-page" style="font-family: 'PingFang SC', 'SF Pro', sans-serif; background-color: #FFFFFF; color: #000000; height: 100vh; height: 100dvh; display: flex; flex-direction: column;">
      <!-- TopAppBar -->
      <header style="position: fixed; top: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 56px; background-color: transparent; z-index: 50;">
        <div style="width: 24px;"></div>
      </header>
      
      <!-- Main Content -->
      <main style="flex: 1; padding-top: 56px; display: flex; flex-direction: column; align-items: center; overflow-y: auto;">
        <!-- Hero Section -->
        <div class="hero-section">
          <img class="hero-image" src="/images/unnamed-2.png" alt="${s}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${a}%3C/text%3E%3C/svg%3E';">
          <div class="hero-gradient"></div>
        </div>
        
        <!-- Content Container -->
        <div class="trial-intro-content">
          <h2 class="page-title">${e("trial.title")}</h2>
          
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
                <h3 class="timeline-title">${e("trial.day0")}</h3>
                <p class="timeline-description">${e("trial.day0.description")}</p>
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
                <h3 class="timeline-title">${e("trial.day2")}</h3>
                <p class="timeline-description">${e("trial.day2.description")}</p>
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
                <h3 class="timeline-title">${e("trial.day3")}</h3>
                <p class="timeline-description">${e("trial.day3.description",{date:n})}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Fixed Bottom CTA Section -->
      <footer class="bottom-action" style="z-index: 100; animation: fadeInUp 0.2s ease forwards; animation-delay: 0.5s; opacity: 0;">
        <div class="button-container" style="padding-top: 12px;">
          <button class="bottom-button" onclick="goToSubscription()">${e("trial.button")}</button>
        </div>
      </footer>
    </div>
  `;const r=document.createElement("style");r.id="trial-intro-page-styles",r.textContent=`
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
  `;const l=document.getElementById("trial-intro-page-styles");l&&l.remove(),document.head.appendChild(r)}window.goToSubscription=function(){if(d)return;d=!0;const i=document.getElementById("app").firstElementChild;i&&i.classList.add("page-transition-exit"),setTimeout(()=>{c=9,x(),setTimeout(()=>{d=!1},400)},300)};function ue(){const t=document.getElementById("app"),i=e("onboarding.page1.title"),o=encodeURIComponent(e("common.imageLoadFailed"));t.innerHTML=`
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
          <div id="lang-menu" class="language-menu hidden" role="menu">${R()}</div>
        </div>
      </header>
      
      <!-- Main Content -->
      <main style="flex: 1; padding-top: 56px; display: flex; flex-direction: column; align-items: center; padding-bottom: 10px; overflow-y: auto;">
        <!-- Hero Section -->
        <div class="hero-section">
          <img class="hero-image" src="/images/unnamed-2.png" alt="${i}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23FED11F%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23000000%22 font-family=%22PingFang SC, SF Pro%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${o}%3C/text%3E%3C/svg%3E';">
          <div class="hero-gradient"></div>
        </div>
        
        <!-- Content Canvas - 统一容器 -->
        <div class="subscription-content-container">
          <h2 class="subscription-title">${e("subscription.title")}</h2>
          <p class="subscription-description">${e("subscription.description")}</p>
          
          <!-- Subscription Cards Cluster -->
          <div class="subscription-cards">
            <!-- Weekly Plan -->
            <div class="subscription-card subscription-card-selected" onclick="toggleSubscription('weekly')" id="weekly-plan">
              <div class="subscription-card-left">
                <span>${e("subscription.weekly")}</span>
                <span class="best-value-badge">${e("subscription.freeTrialBadge")}</span>
              </div>
              <div class="subscription-card-right">
                <span>${e("subscription.weekly.price")}</span>
                <div class="subscription-check subscription-check-active" id="weekly-check">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </div>
            </div>

            <!-- Monthly Plan -->
            <div class="subscription-card" onclick="toggleSubscription('monthly')" id="monthly-plan">
              <span>${e("subscription.monthly")}</span>
              <div class="subscription-card-right">
                <span>${e("subscription.monthly.price")}</span>
                <div class="subscription-check" id="monthly-check"></div>
              </div>
            </div>

            <!-- Yearly Plan -->
            <div class="subscription-card" onclick="toggleSubscription('yearly')" id="yearly-plan">
              <span>${e("subscription.yearly")}</span>
              <div class="subscription-card-right">
                <span>${e("subscription.yearly.price")}</span>
                <div class="subscription-check" id="yearly-check"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Fixed Bottom CTA Section -->
      <footer class="bottom-action" style="z-index: 100; animation: fadeInUp 0.2s ease forwards; animation-delay: 0.5s; opacity: 0;">
        <div class="button-container" style="padding-top: 12px;">
          <div style="font-size: 12px; color: #999999; text-align: center; margin-bottom: 10px;">
            ${e("subscription.legalText")}
          </div>
          <button class="bottom-button" id="subscription-button">${e("subscription.button.freeTrial")}</button>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; border-top: 1px solid #F1F1F1; padding-top: 12px; padding-bottom: 12px;">
          <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${e("common.termsOfService")}</a>
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${e("common.privacyPolicy")}</a>
            <a style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888; transition: color 0.2s ease; text-decoration: underline; cursor: pointer;" href="#">${e("common.restorePurchase")}</a>
          </div>
          <p style="font-family: 'PingFang SC', 'SF Pro', sans-serif; font-size: 12px; color: #888888;">${e("common.copyright")}</p>
        </div>
      </footer>
    </div>
  `;const n=document.createElement("style");n.id="subscription-page-styles",n.textContent=`
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
      padding: 40px 20px 32px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .subscription-content-container h2 {
      font-size: 32px;
      font-weight: bold;
      color: #000000;
      line-height: 1.2;
      text-align: center;
      font-family: 'PingFang SC', sans-serif;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.2s;
      opacity: 0;
      margin: 0;
    }
    
    .subscription-content-container p {
      font-size: 14px;
      color: #888888;
      font-weight: normal;
      text-align: center;
      margin-top: 8px;
      font-family: 'PingFang SC', sans-serif;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    .subscription-cards {
      width: 100%;
      margin-top: 32px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      animation: fadeInUp 0.2s ease forwards;
      animation-delay: 0.4s;
      opacity: 0;
    }
    
    .subscription-card {
      position: relative;
      width: 100%;
      padding: 16px;
      border: 1px solid #E2E2E2;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease;
      background-color: #F7F7F7;
      cursor: pointer;
      box-sizing: border-box;
    }
    
    .subscription-card:active {
      transform: scale(0.98);
    }
    
    .subscription-card-selected {
      border: 2px solid #FED11F;
      background-color: #FFF9E6;
    }
    
    .subscription-card > span:first-child {
      font-size: 18px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .subscription-card-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .subscription-card-right > span {
      font-size: 14px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .subscription-card-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .subscription-card-left > span:first-child {
      font-size: 18px;
      font-weight: bold;
      font-family: 'PingFang SC', sans-serif;
    }
    
    .subscription-check {
      width: 20px;
      height: 20px;
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
  `;const s=document.getElementById("subscription-page-styles");s&&s.remove(),document.head.appendChild(n),W()}window.toggleSubscription=function(t){const i=document.getElementById("weekly-plan"),o=document.getElementById("monthly-plan"),n=document.getElementById("yearly-plan"),s=document.getElementById("weekly-check"),a=document.getElementById("monthly-check"),r=document.getElementById("yearly-check"),l=document.getElementById("subscription-button");t==="weekly"?(i.classList.add("subscription-card-selected"),i.style.border="2px solid #FED11F",i.style.backgroundColor="#FFF9E6",s.innerHTML='<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',s.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center; margin-top: 4px;",o.classList.remove("subscription-card-selected"),o.style.border="1px solid #E2E2E2",o.style.backgroundColor="#F7F7F7",a.innerHTML="",a.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",n.classList.remove("subscription-card-selected"),n.style.border="1px solid #E2E2E2",n.style.backgroundColor="#F7F7F7",r.innerHTML="",r.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",l&&(l.textContent=e("subscription.button.freeTrial"))):t==="monthly"?(o.classList.add("subscription-card-selected"),o.style.border="2px solid #FED11F",o.style.backgroundColor="#FFF9E6",a.innerHTML='<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',a.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center; margin-top: 4px;",i.classList.remove("subscription-card-selected"),i.style.border="1px solid #E2E2E2",i.style.backgroundColor="#F7F7F7",s.innerHTML="",s.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",n.classList.remove("subscription-card-selected"),n.style.border="1px solid #E2E2E2",n.style.backgroundColor="#F7F7F7",r.innerHTML="",r.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",l&&(l.textContent=e("subscription.button.subscribe"))):t==="yearly"&&(n.classList.add("subscription-card-selected"),n.style.border="2px solid #FED11F",n.style.backgroundColor="#FFF9E6",r.innerHTML='<svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 24L20 34L40 14" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',r.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: #FED11F; border: none; display: flex; align-items: center; justify-content: center; margin-top: 4px;",i.classList.remove("subscription-card-selected"),i.style.border="1px solid #E2E2E2",i.style.backgroundColor="#F7F7F7",s.innerHTML="",s.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",o.classList.remove("subscription-card-selected"),o.style.border="1px solid #E2E2E2",o.style.backgroundColor="#F7F7F7",a.innerHTML="",a.style.cssText="width: 20px; height: 20px; border-radius: 50%; background-color: transparent; border: 1px solid #E2E2E2; display: flex; align-items: center; justify-content: center; margin-top: 4px;",l&&(l.textContent=e("subscription.button.subscribe")))};window.nextPage=function(){if(c<j-1&&!d){d=!0;const t=c;if(c++,t>=3&&t<=6){const i=t-2;i>f&&(f=i)}x(),setTimeout(()=>{d=!1},400)}};window.prevPage=function(){c>0&&!d&&(d=!0,c--,x(),setTimeout(()=>{d=!1},400))};window.skipToPage=function(t){c=t,x()};window.skipCurrentQuestion=function(){if(c<j-1){if(c>=3&&c<=6){const t=c-2;t>f&&(f=t)}c++,x()}};window.selectOption=function(t){document.querySelectorAll(".option").forEach(n=>{n.classList.remove("selected");const s=n.querySelector(".checkbox");s&&(s.innerHTML="",s.classList.remove("checked"))}),event.target.closest(".option").classList.add("selected");const o=event.target.closest(".option").querySelector(".checkbox");o&&(o.innerHTML="✓",o.classList.add("checked")),setTimeout(()=>{nextPage()},300)};window.selectGridOption=function(t){document.querySelectorAll(".grid-item").forEach(o=>{o.classList.remove("selected")}),event.target.closest(".grid-item").classList.add("selected"),setTimeout(()=>{nextPage()},300)};V();Y(()=>{x(!1)});x();
