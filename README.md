[閱讀中文版說明 (Read in Chinese)](./README.zh-TW.md) | [日本語で読む (Read in Japanese)](./README.ja.md)

# Astro Pu - An Elegant Astro Starter Template
**Live Demo: [pu.code.mountos.com](https://pu.code.mountos.com)**

**Pu**, meaning uncarved jade, represents pure potential and innate beauty.

This template, crafted by **Mountos** ([mountos.com](https://mountos.com)), is designed to provide a "Pu"-like starting point. It strips away all unnecessary complexity to offer a structurally clean, elegantly designed, and SEO-friendly Astro foundation, allowing you to focus on carving your own content and ideas.

---

## ✨ Core Features

This template is more than just a basic skeleton; it comes with several advanced features designed for high-quality content websites:

*   **🚀 Astro v6+**: Built with the latest Astro engine for extreme loading speeds and a superior development experience.
*   **🎨 Elegant & Minimalist Design**: A clean, content-focused layout with ample room for style customization.
*   **📱 Fully Responsive Design (RWD)**: A flawless viewing experience on desktops, tablets, and mobile phones.
*   **✍️ Content Layer Driven**: Powered by Astro 6's **Content Layer**. Manage all your posts efficiently in `src/content.config.ts` using modern loaders.
*   **SEO Optimized**:
    *   **Automatic Sitemap**: Generates `sitemap.xml` automatically using `@astrojs/sitemap`.
    *   **Semantic Tags**: Correct usage of `H1` and other heading tags, optimized for both the homepage and post pages.
    *   **Static Assets for SEO**: Logos and essential assets are stored in `public/images/` to maintain clean, searchable URLs without hashing.
    *   **External Link Handling**: Automatically adds `rel="nofollow noopener noreferrer"` to all external links.
    *   **`robots.txt`**: Includes a `robots.txt` template that is both SEO-friendly and blocks AI crawlers from training on your content.
    *   **Meta Descriptions**: All pages have pre-filled or dynamically generated descriptions.
*   **⚡️ Client Router**: Built-in Astro **Client Router** (formerly View Transitions) for smooth, modern page-to-page navigation.
*   **📖 Dynamic Table of Contents (ToC)**: A floating ToC is automatically generated for long articles.
*   **📄 Pagination**: The main post list is automatically paginated.
*   **🧩 Built-in Pages**: Includes templates for common pages like "About," "Privacy Policy," and "404."
*   **❤️ Support & Branding**:
    *   The footer includes a "Powered by Mountos" brand link.
    *   A placeholder for a "❤️ Donate" link is available in the footer for you to accept community support.

## 🚀 Quick Start

> [!IMPORTANT]
> **Prerequisites**: Node.js **v22.12.0** or higher is required for Astro 6.

1.  **Use This Template**
    *   Click the `Use this template` > `Create a new repository` button on the top right of the GitHub page.
    *   Or, clone it to your local machine: `git clone https://github.com/mountos/astro-pu.git`

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Developing**
    ```bash
    npm run dev
    ```
    You can now view your site at `http://localhost:4321`.

## ⚙️ Customization Guide

Before you start writing your own content, be sure to modify the following settings:

1.  **`astro.config.mjs`**
    *   Find the `site` property and replace `'https://example.com'` with your final deployment URL. This is crucial for generating the correct sitemap.

2.  **`package.json`**
    *   You can modify fields like `name`, `version`, `author`, and `description` to match your project's information.

3.  **`public/robots.txt`**
    *   If you have set the `site` in `astro.config.mjs`, `@astrojs/sitemap` will often generate the sitemap link automatically. If not, manually replace `https://example.com` in the `Sitemap` URL with your own URL.

4.  **Site Title & Description (`src/components/Header.astro`)**
    *   Open this file and modify the default values for `siteTitle` and `siteDescription`.

5.  **Footer Logo & Information (`src/components/Footer.astro`)**
    *   Your site logo is located at `public/images/Mountos-Logo.png`. Replace this file with your own logo to maintain a clean SEO URL.
    *   Modify the site name and introduction in the `footer-intro` section.
    *   Replace `Your Site Name` in the `copyright` section with your site name.
    *   In the "Support Us" menu, replace `href="#"` in the donation link with your own link.

6.  **Start Writing!**
    *   Your content configuration is defined in `src/content.config.ts`.
    *   All your posts are located in the `src/content/blog/` folder.
    *   Refer to the `getting-started.md` example post to learn the format and start writing your own `.md` or `.mdx` files.

## 💖 Support Mountos

If you enjoy this template, please consider keeping the "Powered by Mountos" link in your footer or mentioning it in your project. Your support is the driving force behind our continued creation!

You can also support me by [buying me a coffee](https://mounx.com/s/buyMacoffee). Thank you!

---

*Have fun building!*
