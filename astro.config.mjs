/**
 * Astro Pu (Uncarved Jade) Template
 *
 * @author    Mountos (https://mountos.com)
 * @license   MIT
 * @see       https://github.com/mountos/astro-pu
 */

import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeExternalLinks from './src/plugins/rehype-external-links.mjs';
import remarkPageBundleImage from './src/plugins/remark-page-bundle-image.mjs';

function pageBundleAssetsIntegration() {
  return {
    name: 'page-bundle-assets',
    hooks: {
      'astro:server:setup': ({ server }) => {
        const blogDir = path.resolve('src/content/blog');
        const mimeMap = {
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.png': 'image/png',
          '.webp': 'image/webp',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml',
          '.avif': 'image/avif',
        };

        server.middlewares.use((req, res, next) => {
          if (!req.url) return next();
          const urlPath = req.url.split('?')[0];

          const ext = path.extname(urlPath).toLowerCase();
          if (mimeMap[ext]) {
            let cleanPath = urlPath.replace(/^\/(?:sc|en|ja)\//, '/');
            const parts = cleanPath.split('/').filter(Boolean);
            if (parts.length >= 2) {
              const file = decodeURIComponent(parts.pop());
              const slug = decodeURIComponent(parts.join('/'));
              const filePath = path.join(blogDir, slug, file);
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                res.setHeader('Content-Type', mimeMap[ext]);
                fs.createReadStream(filePath).pipe(res);
                return;
              }
            }
          }
          next();
        });
      },
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const blogDir = path.resolve('src/content/blog');
        if (!fs.existsSync(blogDir)) return;

        function findArticleDirs(currentDir) {
          let dirs = [];
          const entries = fs.readdirSync(currentDir, { withFileTypes: true });
          let hasIndex = false;
          for (const e of entries) {
            if (e.isDirectory()) {
              dirs = dirs.concat(findArticleDirs(path.join(currentDir, e.name)));
            } else if (e.isFile() && e.name.startsWith('index') && e.name.endsWith('.md')) {
              hasIndex = true;
            }
          }
          if (hasIndex) {
            dirs.push(currentDir);
          }
          return dirs;
        }

        const articleDirs = findArticleDirs(blogDir);
        for (const srcPostDir of articleDirs) {
          const relDir = path.relative(blogDir, srcPostDir);
          const entries = fs.readdirSync(srcPostDir, { withFileTypes: true });
          for (const dirent of entries) {
            if (!dirent.isFile() || dirent.name.endsWith('.md')) continue;
            const assetName = dirent.name;
            const srcFile = path.join(srcPostDir, assetName);
            const targetDir = path.join(outDir, relDir);
            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir, { recursive: true });
            }
            const dstFile = path.join(targetDir, assetName);
            if (!fs.existsSync(dstFile)) {
              try {
                fs.linkSync(srcFile, dstFile);
              } catch {
                fs.copyFileSync(srcFile, dstFile);
              }
            }
          }
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://pu.code.mountos.com',
  trailingSlash: 'always',
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    remarkPlugins: [remarkPageBundleImage],
    rehypePlugins: [rehypeExternalLinks],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/search') &&
        !page.includes('/404'),
      i18n: {
        defaultLocale: 'zh-tw',
        locales: {
          'zh-tw': 'zh-TW',
          sc: 'zh-Hans',
          en: 'en',
          ja: 'ja',
        },
      },
    }),
    pageBundleAssetsIntegration(),
  ],
});
