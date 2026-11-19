document.documentElement.classList.add('js');

const translations = {
  tw: {
    edition:'水墨彩色故事', currentSite:'目前網站 ↗', navOpening:'開場', navFarm:'魚場', navWorld:'世界', navAuction:'競標', navEye:'眼光', navVoice:'她的聲音',
    openingKicker:'游動藝術中的人生', openingTitle1:'錦鯉', openingTitle2:'女王', openingIntro:'從魚池邊長大的女孩，到把臺灣錦鯉帶向世界的經營者。這是鍾女士的故事，以水、墨與典藏照片述說。', begin:'開始閱讀', openingCredit:'魚池照片 · 鍾女士提供予《鏡週刊》',
    prologueKicker:'序 / 臺灣雲林', prologueTitle:'故事從水開始。', prologueBody:'在海外展覽與創紀錄的拍賣之前，先有一座家族錦鯉魚場。鍾女士在魚池旁長大，赴北京學習美術，後來回到欣昌，擔任總經理。', familyCaption:'家族影像 · 《鏡週刊》刊登',
    farmKicker:'01 / 家族魚場', farmTitle:'在魚池旁長大，回來帶領魚場。', farmBody:'鍾女士返鄉時，家族事業正背負沉重債務。美術訓練成為她挑選與展示錦鯉的眼光；擔任總經理期間，她帶領欣昌參加國際展覽，直接與海外買家建立關係。', farmSource:'欣昌 2007 年報告 ↗', farmCaption:'家族魚場 · 《鏡週刊》典藏照片',
    bridgeKicker:'轉折點', bridgeTitle:'魚池在家鄉，視野跨越海洋。', bridgeBody:'2003 年赴荷蘭錦鯉展，鍾女士發現歐洲市場幾乎不認識臺灣錦鯉。她選擇重返展場，展示魚，也親自與人建立關係。', bridgeFrom:'雲林', bridgeTo:'荷蘭',
    worldKicker:'02 / 走向世界', worldTitle:'一個展位，成為橋樑。', worldBody:'鍾女士後來以「Formosa Taiwan」之名回到歐洲展場。到了 2010 年，報導記載她每年參加五場國際展覽，並直接與跨國買家往來。', worldSource:'閱讀典藏報導 ↗', worldCaption:'2009 年荷蘭錦鯉展 · 資料照片',
    auctionKicker:'03 / S 傳說 · 2018', auctionTitle:'一槌，2.03 億日圓。', auctionBody:'在阪井養魚場拍賣會上，鍾女士以臺灣代理商身分，代表客戶標下紅白錦鯉「S 傳說」。成交價傳遍世界，背後的判斷卻是多年累積而來。', auctionSource:'英國錦鯉評審團紀錄 ↗', auctionCaption:'2018 年阪井拍賣會 · 資料照片',
    eyeInterludeKicker:'數字之後', eyeInterludeTitle:'魚，不只是價格。', eyeInterludeBody:'色彩、體態、游姿、血統與時間：每尾錦鯉都值得仔細觀看。鍾女士教大家不只看第一張照片，也思考一尾魚未來的變化。',
    eyeKicker:'04 / 眼光', eyeTitle:'看見一尾錦鯉的未來。', eyeBody:'鍾女士以成長前後的照片，說明幼魚如何展現潛力。比較之中，她觀察體態、花紋、色彩及時間的眼光，也變得可以分享。', eyeSource:'聽她的 TEDxTaipei 演講 ↗', eyeCaption:'欣昌的錦鯉 · 《鏡週刊》典藏照片',
    voiceKicker:'05 / 親自講述', voiceTitle:'魚場的故事，走上螢幕。', voiceBody:'2011 年，Discovery Channel 記錄鍾女士的創業歷程。2014 年，她站上 TEDxTaipei 舞台，談起回到家族事業，以及如何把挫折看作選擇。', voiceSource1:'雲林縣政府紀錄 ↗', voiceSource2:'觀看 TEDx 演講 ↗', voiceCaption:'鍾女士與錦鯉 · 紀錄片畫面',
    endingKicker:'故事仍在繼續', endingTitle:'一生學會讀懂水。', endingBody:'魚池、同行的人與錦鯉，始終是鍾女士工作的核心。這是進入故事的一種方式；完整資料與目前網站，還在下一頁。', endingCurrent:'瀏覽目前網站 ↗', endingAgain:'回到開場 ↑', endingCredit:'鍾女士與父親在魚場 · 《鏡週刊》典藏照片', footerNote:'以典藏照片重新敘述的實驗版本。各章附有資料來源。'
  },
  cn: {
    edition:'水墨彩色故事', currentSite:'当前网站 ↗', navOpening:'开场', navFarm:'鱼场', navWorld:'世界', navAuction:'竞标', navEye:'眼光', navVoice:'她的声音',
    openingKicker:'游动艺术中的人生', openingTitle1:'锦鲤', openingTitle2:'女王', openingIntro:'从鱼池边长大的女孩，到把台湾锦鲤带向世界的经营者。这是钟女士的故事，以水、墨与存档照片讲述。', begin:'开始阅读', openingCredit:'鱼池照片 · 钟女士提供给《镜周刊》',
    prologueKicker:'序 / 台湾云林', prologueTitle:'故事从水开始。', prologueBody:'在海外展览与创纪录的拍卖之前，先有一座家族锦鲤鱼场。钟女士在鱼池旁长大，赴北京学习美术，后来回到欣昌，担任总经理。', familyCaption:'家族影像 · 《镜周刊》刊登',
    farmKicker:'01 / 家族鱼场', farmTitle:'在鱼池旁长大，回来带领鱼场。', farmBody:'钟女士返乡时，家族事业正背负沉重债务。美术训练成为她挑选与展示锦鲤的眼光；担任总经理期间，她带领欣昌参加国际展览，直接与海外买家建立关系。', farmSource:'欣昌 2007 年报告 ↗', farmCaption:'家族鱼场 · 《镜周刊》存档照片',
    bridgeKicker:'转折点', bridgeTitle:'鱼池在家乡，视野跨越海洋。', bridgeBody:'2003 年赴荷兰锦鲤展，钟女士发现欧洲市场几乎不认识台湾锦鲤。她选择重返展场，展示鱼，也亲自与人建立关系。', bridgeFrom:'云林', bridgeTo:'荷兰',
    worldKicker:'02 / 走向世界', worldTitle:'一个展位，成为桥梁。', worldBody:'钟女士后来以“Formosa Taiwan”之名回到欧洲展场。到了 2010 年，报道记载她每年参加五场国际展览，并直接与跨国买家往来。', worldSource:'阅读存档报道 ↗', worldCaption:'2009 年荷兰锦鲤展 · 资料照片',
    auctionKicker:'03 / S 传说 · 2018', auctionTitle:'一槌，2.03 亿日元。', auctionBody:'在阪井养鱼场拍卖会上，钟女士以台湾代理商身份，代表客户标下红白锦鲤“S 传说”。成交价传遍世界，背后的判断却是多年积累而来。', auctionSource:'英国锦鲤评审团记录 ↗', auctionCaption:'2018 年阪井拍卖会 · 资料照片',
    eyeInterludeKicker:'数字之后', eyeInterludeTitle:'鱼，不只是价格。', eyeInterludeBody:'色彩、体态、游姿、血统与时间：每尾锦鲤都值得仔细观看。钟女士教大家不只看第一张照片，也思考一尾鱼未来的变化。',
    eyeKicker:'04 / 眼光', eyeTitle:'看见一尾锦鲤的未来。', eyeBody:'钟女士以成长前后的照片，说明幼鱼如何展现潜力。比较之中，她观察体态、花纹、色彩及时间的眼光，也变得可以分享。', eyeSource:'听她的 TEDxTaipei 演讲 ↗', eyeCaption:'欣昌的锦鲤 · 《镜周刊》存档照片',
    voiceKicker:'05 / 亲自讲述', voiceTitle:'鱼场的故事，走上荧幕。', voiceBody:'2011 年，Discovery Channel 记录钟女士的创业历程。2014 年，她站上 TEDxTaipei 舞台，谈起回到家族事业，以及如何把挫折看作选择。', voiceSource1:'云林县政府记录 ↗', voiceSource2:'观看 TEDx 演讲 ↗', voiceCaption:'钟女士与锦鲤 · 纪录片画面',
    endingKicker:'故事仍在继续', endingTitle:'一生学会读懂水。', endingBody:'鱼池、同行的人与锦鲤，始终是钟女士工作的核心。这是进入故事的一种方式；完整资料与当前网站，还在下一页。', endingCurrent:'浏览当前网站 ↗', endingAgain:'回到开场 ↑', endingCredit:'钟女士与父亲在鱼场 · 《镜周刊》存档照片', footerNote:'以存档照片重新讲述的实验版本。各章附有资料来源。'
  }
};

const languageSelect = document.getElementById('language');
const translatable = [...document.querySelectorAll('[data-i18n]')];
const englishMarkup = new Map(translatable.map(element => [element, element.innerHTML]));
const languageCodes = {en:'en',tw:'zh-Hant',cn:'zh-Hans'};
const translatableImages = [...document.querySelectorAll('[data-i18n-alt]')];
const englishAlts = new Map(translatableImages.map(image => [image, image.alt]));
const imageAlts = {
  tw: {family:'鍾女士的家族合照',farm:'鍾女士走過家族錦鯉魚場',world:'鍾女士與其他參展者及獎盃在 2009 年荷蘭錦鯉展合照',auction:'鍾女士在阪井拍賣會，站在 2.03 億日圓成交紀錄旁',eye:'錦鯉在藍色水中游動',voice:'鍾女士仔細觀察一尾錦鯉'},
  cn: {family:'钟女士的家族合照',farm:'钟女士走过家族锦鲤鱼场',world:'钟女士与其他参展者及奖杯在 2009 年荷兰锦鲤展合影',auction:'钟女士在阪井拍卖会，站在 2.03 亿日元成交纪录旁',eye:'锦鲤在蓝色水中游动',voice:'钟女士仔细观察一尾锦鲤'}
};

function setLanguage(language) {
  if (!languageCodes[language]) language = 'en';
  document.documentElement.lang = languageCodes[language];
  languageSelect.value = language;
  for (const element of translatable) {
    if (language === 'en') element.innerHTML = englishMarkup.get(element);
    else if (translations[language][element.dataset.i18n]) element.textContent = translations[language][element.dataset.i18n];
  }
  for (const image of translatableImages) image.alt = language === 'en' ? englishAlts.get(image) : imageAlts[language][image.dataset.i18nAlt];
  document.title = language === 'en' ? 'Koi Queen — Ink & Color Story' : '錦鯉女王 — 水墨彩色故事';
  const url = new URL(location.href);
  url.searchParams.set('lang',language);
  history.replaceState(null,'',url);
  try { localStorage.setItem('kq-ink-language',language); } catch {}
}

const chosenLanguage = new URLSearchParams(location.search).get('lang') || (() => { try { return localStorage.getItem('kq-ink-language'); } catch { return null; } })() || 'en';
setLanguage(chosenLanguage);
languageSelect.addEventListener('change', event => setLanguage(event.target.value));

const progress = document.getElementById('reading-progress');
const scenes = [...document.querySelectorAll('[data-scene]')];
const chapterLinks = [...document.querySelectorAll('.chapter-rail a')];
const chapters = chapterLinks.map(link => document.getElementById(link.dataset.chapter));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let ticking = false;

function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${scrollable > 0 ? Math.max(0, Math.min(100, scrollY / scrollable * 100)) : 0}%`;
  let current = 'opening';
  chapters.forEach(chapter => { if (chapter.getBoundingClientRect().top <= innerHeight * .55) current = chapter.id; });
  chapterLinks.forEach(link => {
    const active = link.dataset.chapter === current;
    link.classList.toggle('is-active',active);
    if (active) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
  if (!reducedMotion.matches && innerWidth > 700) {
    scenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) return;
      const progressThrough = (innerHeight - rect.top) / (innerHeight + rect.height);
      scene.style.setProperty('--drift',`${Math.round((progressThrough - .5) * 70)}px`);
    });
  }
  ticking = false;
}

addEventListener('scroll',() => {
  if (!ticking) { requestAnimationFrame(updateScroll); ticking = true; }
},{passive:true});
addEventListener('resize',updateScroll);
updateScroll();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  },{threshold:.1});
  scenes.forEach(scene => observer.observe(scene));
} else scenes.forEach(scene => scene.classList.add('is-visible'));
