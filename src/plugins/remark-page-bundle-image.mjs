import { visit } from 'unist-util-visit';
import path from 'node:path';

/**
 * Remark 插件：將文章 Markdown 內文中的相對圖片路徑（如 ./hero.png 或 photo.jpg）
 * 轉換為以網站根目錄為基準的絕對路徑（如 /getting-started/hero.png）。
 *
 * 好處：
 * 1. 阻止 Astro Assets Pipeline 介入轉檔，避免在 dist/_astro/ 下生成重複 WebP 檔案，保持 Page Bundle 純粹性。
 * 2. 產生的 HTML <img src="..."> 直接請求 dist/<slug>/photo.jpg，符合 Page Bundle 架構。
 */
export default function remarkPageBundleImage() {
  const blogDir = path.resolve('src/content/blog');

  return (tree, file) => {
    if (!file?.path) return;
    const filePath = file.path;
    if (!filePath.startsWith(blogDir)) return;

    // 由檔案路徑計算 slug（與 utils/post.ts 邏輯一致）
    const rel = path.relative(blogDir, filePath).replace(/\\/g, '/');
    const cleanId = rel.replace(/\.mdx?$/, '');
    const parts = cleanId.split('/');
    if (parts[parts.length - 1].startsWith('index')) {
      parts.pop();
    }
    const slug = parts.join('/');
    if (!slug) return;

    visit(tree, 'image', (node) => {
      if (!node.url) return;
      const url = node.url.trim();

      // 如果已經是絕對路徑、外部連結或 protocol-relative，不作修改
      if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') || url.startsWith('//')) {
        return;
      }

      // 將 ./image.png 或 image.png 轉為 /slug/image.png
      const cleanImg = url.replace(/^\.\//, '');
      node.url = `/${slug}/${cleanImg}`;
    });
  };
}
