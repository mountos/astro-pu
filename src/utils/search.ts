import { getCollection } from 'astro:content';
import { parsePostId, getPostUrl } from './post';

export function cleanMarkdown(text: string): string {
  if (!text) return '';
  return text
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*~_>=\-+|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export interface SearchIndexItem {
  title: string;
  excerpt: string;
  tags: string[];
  url: string;
  lang?: string;
}

export async function buildSearchIndex(targetLang?: string): Promise<Response> {
  let posts: any[] = [];
  try {
    posts = await getCollection('blog');
  } catch (e) {
    console.warn('No blog collection found:', e);
  }

  const filtered = targetLang && targetLang !== 'all'
    ? posts.filter(post => {
        const { lang: parsedLang } = parsePostId(post.id);
        const rawLang = (post.data.lang || parsedLang || 'zh-tw').toLowerCase();
        const lang = (rawLang === 'zh' || rawLang === 'zh-hant') ? 'zh-tw' : rawLang;
        return lang === targetLang;
      })
    : posts;

  const index: SearchIndexItem[] = filtered.map(post => {
    const { lang: parsedLang } = parsePostId(post.id);
    const description = (post.data.description || '').trim();
    const excerpt = description || cleanMarkdown(post.body || '').substring(0, 160);
    const rawLang = (post.data.lang || parsedLang || 'zh-tw').toLowerCase();
    const lang = (rawLang === 'zh' || rawLang === 'zh-hant') ? 'zh-tw' : rawLang;

    return {
      title: (post.data.title || '').trim(),
      excerpt,
      tags: Array.isArray(post.data.tags) ? post.data.tags : [],
      url: getPostUrl(post),
      lang,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    }
  });
}
