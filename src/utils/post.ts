import type { Lang } from './i18n';

export interface ParsedPost {
  slug: string;
  lang: Lang;
}

/**
 * 遵循多國語言與 Page Bundle 架構規範解析 post.id:
 * - slug/index.md -> slug, lang: 'zh-tw'
 * - slug/index.sc.md -> slug, lang: 'sc'
 * - slug/index.en.md -> slug, lang: 'en'
 * - slug/index.ja.md -> slug, lang: 'ja'
 */
export function parsePostId(postId: string): ParsedPost {
  const cleanId = postId.replace(/\.mdx?$/, '');
  const parts = cleanId.split('/');

  let lang: Lang = 'zh-tw';
  const pathParts = [...parts];
  const lastPart = parts[parts.length - 1];

  if (lastPart === 'index') {
    pathParts.pop();
  } else if (lastPart === 'index.sc' || lastPart === 'indexsc') {
    lang = 'sc';
    pathParts.pop();
  } else if (lastPart === 'index.en' || lastPart === 'indexen') {
    lang = 'en';
    pathParts.pop();
  } else if (lastPart === 'index.ja' || lastPart === 'indexja') {
    lang = 'ja';
    pathParts.pop();
  } else if (lastPart.endsWith('.sc')) {
    lang = 'sc';
    pathParts[pathParts.length - 1] = lastPart.replace(/\.sc$/, '');
  } else if (lastPart.endsWith('.en')) {
    lang = 'en';
    pathParts[pathParts.length - 1] = lastPart.replace(/\.en$/, '');
  } else if (lastPart.endsWith('.ja')) {
    lang = 'ja';
    pathParts[pathParts.length - 1] = lastPart.replace(/\.ja$/, '');
  } else if (lastPart.endsWith('.zh-TW') || lastPart.endsWith('.zh-tw')) {
    lang = 'zh-tw';
    pathParts[pathParts.length - 1] = lastPart.replace(/\.zh-TW$/i, '');
  }

  const slug = pathParts.join('/');
  return { slug, lang };
}

export function getPostUrl(post: any): string {
  const { slug, lang } = parsePostId(post.id);
  if (lang === 'sc') return `/sc/${slug}/`;
  if (lang === 'en') return `/en/${slug}/`;
  if (lang === 'ja') return `/ja/${slug}/`;
  return `/${slug}/`;
}

export function getPostHeroImage(post: any): string {
  const heroImage = post?.data?.heroImage;
  if (!heroImage || typeof heroImage !== 'string' || heroImage.trim() === '') {
    return '';
  }
  if (heroImage.startsWith('http://') || heroImage.startsWith('https://') || heroImage.startsWith('/')) {
    return heroImage;
  }
  const { slug } = parsePostId(post.id);
  const cleanImg = heroImage.replace(/^\.\//, '');
  return `/${slug}/${cleanImg}`;
}
