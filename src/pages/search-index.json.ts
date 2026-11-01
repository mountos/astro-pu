import { getCollection } from 'astro:content';
import { parsePostId, getPostUrl } from '../utils/post';

export async function GET() {
  let posts: any[] = [];
  try {
    posts = await getCollection('blog');
  } catch (e) {
    console.warn('No blog collection found');
  }
  
  const index = posts.map(post => {
    const { slug, lang } = parsePostId(post.id);
    const bodyText = post.body ? post.body.substring(0, 300).replace(/\n/g, ' ').replace(/[#*>_\-\[\]]/g, '') : '';
    return {
      id: slug,
      title: post.data.title,
      author: post.data.author || 'Mountos',
      excerpt: (post.data.description || bodyText.substring(0, 150)),
      url: getPostUrl(post),
      lang: post.data.lang || lang || 'zh-tw',
      categories: post.data.categories || [],
      tags: post.data.tags || [],
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
