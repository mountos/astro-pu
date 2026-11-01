export type Lang = 'zh-tw' | 'sc' | 'en' | 'ja';

export const SUPPORTED_LANGS: Lang[] = ['zh-tw', 'sc', 'en', 'ja'];
export const DEFAULT_LANG: Lang = 'zh-tw';

/** URL 語言前綴（zh-tw 預設語言無前綴） */
export const LANG_PREFIX: Record<Lang, string> = {
  'zh-tw': '',
  'sc': '/sc',
  'en': '/en',
  'ja': '/ja',
};

/** HTML lang 屬性值 */
export const LANG_HTML: Record<Lang, string> = {
  'zh-tw': 'zh-TW',
  'sc': 'zh-Hans',
  'en': 'en',
  'ja': 'ja',
};

/** hreflang 屬性值 */
export const LANG_HREFLANG: Record<Lang, string> = {
  'zh-tw': 'zh-TW',
  'sc': 'zh-Hans',
  'en': 'en',
  'ja': 'ja',
};

/** 語言顯示名稱 */
export const LANG_LABELS: Record<Lang, string> = {
  'zh-tw': '繁體中文',
  'sc': '简体中文',
  'en': 'English',
  'ja': '日本語',
};

/** 語言 emoji */
export const LANG_EMOJI: Record<Lang, string> = {
  'zh-tw': '🌏',
  'sc': '🇨🇳',
  'en': '🌍',
  'ja': '🗾',
};

/** UI 翻譯字典 */
export const translations: Record<Lang, Record<string, string>> = {
  'zh-tw': {
    siteTitle: 'Astro Pu  璞',
    siteDescription: '簡約雅致的 Astro 開源母版範本，融合現代技術與東方美學。',
    latestPosts: '最新文章',
    page: '第 {page} 頁',
    pageLabel: '頁',
    home: '首頁',
    categories: '分類',
    tags: '標籤',
    category: '分類',
    tag: '標籤',
    postedOn: '發佈日期',
    updatedOn: '更新日期',
    author: '作者',
    moreCategories: '更多分類',
    siteInfo: '網站資訊',
    supportUs: '支持我們',
    aboutUs: '關於我們',
    contactUs: '聯絡我們',
    privacyPolicy: '隱私權政策',
    siteSearch: '網站搜尋',
    donate: '❤️ 贊助',
    language: '語言',
    readingTime: '閱讀時間',
    prevPage: '上一頁',
    nextPage: '下一頁',
    tableOfContents: '目錄導覽',
    searchPlaceholder: '輸入關鍵字搜尋…',
  },
  'sc': {
    siteTitle: 'Astro Pu  璞',
    siteDescription: '简约雅致的 Astro 开源母版范本，融合现代技术与东方美学。',
    latestPosts: '最新文章',
    page: '第 {page} 页',
    pageLabel: '页',
    home: '首页',
    categories: '分类',
    tags: '标签',
    category: '分类',
    tag: '标签',
    postedOn: '发布日期',
    updatedOn: '更新日期',
    author: '作者',
    moreCategories: '更多分类',
    siteInfo: '网站资讯',
    supportUs: '支持我们',
    aboutUs: '关于我们',
    contactUs: '联系我们',
    privacyPolicy: '隐私政策',
    siteSearch: '全站搜索',
    donate: '❤️ 赞助',
    language: '语言',
    readingTime: '阅读时间',
    prevPage: '上一页',
    nextPage: '下一页',
    tableOfContents: '目录导览',
    searchPlaceholder: '输入关键词搜索…',
  },
  'en': {
    siteTitle: 'Astro Pu',
    siteDescription: 'A clean and elegant Astro starter template, infused with modern web standards and oriental aesthetics.',
    latestPosts: 'Latest Posts',
    page: 'Page {page}',
    pageLabel: 'Page',
    home: 'Home',
    categories: 'Categories',
    tags: 'Tags',
    category: 'Category',
    tag: 'Tag',
    postedOn: 'Posted on',
    updatedOn: 'Updated on',
    author: 'Author',
    moreCategories: 'More Categories',
    siteInfo: 'Site Information',
    supportUs: 'Support Us',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    siteSearch: 'Site Search',
    donate: '❤️ Donate',
    language: 'Language',
    readingTime: 'Reading Time',
    prevPage: 'Previous',
    nextPage: 'Next',
    tableOfContents: 'Table of Contents',
    searchPlaceholder: 'Search articles...',
  },
  'ja': {
    siteTitle: 'Astro Pu  璞',
    siteDescription: 'モダンな技術と東洋の美学を融合させた、シンプルでエレガントなAstroスターターテンプレート。',
    latestPosts: '最新記事',
    page: '{page} ページ',
    pageLabel: 'ページ',
    home: 'ホーム',
    categories: 'カテゴリー',
    tags: 'タグ',
    category: 'カテゴリー',
    tag: 'タグ',
    postedOn: '公開日',
    updatedOn: '更新日',
    author: '著者',
    moreCategories: 'その他のカテゴリー',
    siteInfo: 'サイト情報',
    supportUs: 'ご支援',
    aboutUs: 'サイトについて',
    contactUs: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    siteSearch: 'サイト内検索',
    donate: '❤️ 支援する',
    language: '言語',
    readingTime: '読了時間',
    prevPage: '前へ',
    nextPage: '次へ',
    tableOfContents: '目次',
    searchPlaceholder: 'キーワードで検索…',
  },
};

export function useTranslations(lang: Lang = DEFAULT_LANG) {
  return function t(key: string, params?: Record<string, string | number>): string {
    let str = translations[lang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };
}

export function getLangFromUrl(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first === 'sc' || first === 'en' || first === 'ja') {
    return first as Lang;
  }
  return DEFAULT_LANG;
}

export function getAlternateUrls(
  path: string,
  availableLangs: Lang[] = SUPPORTED_LANGS,
  siteUrl: string = 'https://pu.code.mountos.com',
): Record<string, string> {
  const cleanBase = siteUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');

  const has = (lang: Lang) => availableLangs.includes(lang);

  const urlFor = (lang: Lang): string => {
    const prefix = LANG_PREFIX[lang];
    if (cleanPath === '') return prefix ? `${cleanBase}${prefix}/` : `${cleanBase}/`;
    return prefix
      ? `${cleanBase}${prefix}/${cleanPath}/`
      : `${cleanBase}/${cleanPath}/`;
  };

  const result: Record<string, string> = {};

  if (has('zh-tw')) {
    result['x-default'] = urlFor('zh-tw');
  } else if (availableLangs.length > 0) {
    result['x-default'] = urlFor(availableLangs[0]);
  }

  for (const lang of availableLangs) {
    result[LANG_HREFLANG[lang]] = urlFor(lang);
  }

  return result;
}
