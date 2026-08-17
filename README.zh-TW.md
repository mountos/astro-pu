[Read in English](./README.md) | [日本語で読む (Read in Japanese)](./README.ja.md)

# Astro Pu (璞) - 一個優雅的 Astro 入門模板
**線上預覽：[pu.code.mountos.com](https://pu.code.mountos.com)**

**Pu (璞)**，未經雕琢的玉石，代表著純粹的潛力與內在的美好。

本模板由 **Mountos** ([mountos.com](https://mountos.com)) 打造，旨在提供一個如「璞」玉般的起點。它移除了所有不必要的複雜性，專注於提供一個結構清晰、設計雅緻、SEO 友善的 Astro 基礎，讓您可以專注於雕琢您的內容與想法。

---

## ✨ 核心特性

這個模板不僅僅是一個基礎骨架，它內建了多項為了「高品質內容網站」所設計的進階功能：

*   **🚀 Astro v6+**: 使用最新的 Astro 引擎，享受極致的載入速度與開發體驗。
*   **🎨 雅緻簡約設計**: 乾淨、專注於內容的排版，預留了風格客製化的空間。
*   **📱 完整的響應式設計 (RWD)**: 在桌面、平板和手機上都擁有完美的瀏覽體驗。
*   **✍️ Content Layer 驅動**: 基於 Astro 6 的 **Content Layer** 技術。透過 `src/content.config.ts` 高效管理所有文章，支援現代化的載入器 (Loaders)。
*   **SEO 全方位優化**:
    *   **Sitemap 自動生成**: 使用 `@astrojs/sitemap` 自動建立 `sitemap.xml`。
    *   **語意化標籤**: 正確使用 `H1` 等標題標籤，並針對首頁與文章頁進行優化。
    *   **靜態資源 SEO 優化**: Logo 等核心資源存放於 `public/images/`，確保網址乾淨、不帶雜湊值，利於搜尋引擎收錄。
    *   **自動處理外部連結**: 自動為所有外部連結加上 `rel="nofollow noopener noreferrer"` 屬性。
    *   **`robots.txt`**: 內建一個兼具 SEO 且能阻擋 AI 爬蟲訓練的 `robots.txt` 範本。
    *   **頁面描述 (Meta Descriptions)**: 所有頁面都已預留或動態生成 description。
*   **⚡️ Client Router**: 內建 Astro 的 **Client Router** (原 View Transitions)，提供現代化的流暢頁面切換效果。
*   **📖 動態文章目錄 (ToC)**: 在長篇文章中，側邊欄會自動生成浮動目錄。
*   **📄 分頁功能**: 首頁文章列表會自動進行分頁。
*   **🧩 內建頁面**: 包含「關於我們」、「隱私權政策」和「404」等常用頁面範本。
*   **❤️ 支持與品牌化**:
    *   頁尾 (Footer) 包含 "Powered by Mountos" 品牌連結。
    *   頁尾預留了「❤️ 捐款支持」的連結位置，方便您接受社群支持。

## 🚀 快速開始

> [!IMPORTANT]
> **環境要求**：開發環境需要 Node.js **v22.12.0** 或更高版本以支援 Astro 6。

1.  **使用此模板**
    *   點擊 GitHub 頁面右上角的 `Use this template` > `Create a new repository`。
    *   或透過 `git clone https://github.com/Mountos/astro-pu.git` 將其複製到您的本地電腦。

2.  **安裝依賴**
    ```bash
    npm install
    ```

3.  **開始開發**
    ```bash
    npm run dev
    ```
    現在，您可以在 `http://localhost:4321` 看到您的網站。

## ⚙️ 客製化指南

在開始撰寫您自己的內容之前，請務必修改以下設定：

1.  **`astro.config.mjs`**
    *   找到 `site` 屬性，並將 `'https://example.com'` 替換為您自己的最終部署網址。這是生成正確 Sitemap 的關鍵。

2.  **`package.json`**
    *   您可以修改 `name`, `version`, `author`, `description` 等欄位以符合您的專案資訊。

3.  **`public/robots.txt`**
    *   如果您的 `astro.config.mjs` 中已設定 `site`，`@astrojs/sitemap` 通常會自動生成 sitemap 連結。若無，請手動將 `Sitemap` URL 中的 `https://example.com` 替換為您自己的網址。

4.  **網站標題與描述 (`src/components/Header.astro`)**
    *   打開此檔案，修改 `siteTitle` 和 `siteDescription` 的預設值。

5.  **頁尾 Logo 與資訊 (`src/components/Footer.astro`)**
    *   網站 Logo 存放於 `public/images/Mountos-Logo.png`。請將此檔案替換為您自己的標誌，以維持乾淨的 SEO 網址。
    *   修改 `footer-intro` 區塊的網站名稱和簡介。
    *   將 `copyright` 區塊的 `Your Site Name` 替換為您的網站名稱。
    *   在「支持我們」選單中，將捐款連結的 `href="#"` 替換為您自己的連結。

6.  **開始寫作！**
    *   內容配置現在定義於 `src/content.config.ts` 中。
    *   您的所有文章都放在 `src/content/blog/` 資料夾中。
    *   參考 `getting-started.md` 這篇範例文章的格式，開始撰寫您自己的 `.md` 或 `.mdx` 檔案。

## 💖 支持 Mountos

如果您喜歡這個模板，請考慮在您的網站頁尾保留 "Powered by Mountos" 的連結，或是在您的專案中提及它。您的支持是我們持續創作的動力！

您也可以<a href=\"https://buymeacoffee.com/mountos\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">請我喝杯咖啡</a>，支持我的創作。謝謝您！

---

*Have fun building!*