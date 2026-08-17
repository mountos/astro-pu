[English](./README.md) | [繁體中文](./README.zh-TW.md)

# Astro Pu (璞) - エレガントな Astro スタートテンプレート
**ライブデモ: [pu.code.mountos.com](https://pu.code.mountos.com)**

**Pu (璞)** とは、未研磨の玉（ぎょく）を意味し、純粋な可能性と本来の美しさを象徴しています。

このテンプレートは、**Mountos** ([mountos.com](https://mountos.com)) によって作成され、「璞」のような出発点を提供することを目的としています。不要な複雑さをすべて排除し、構造的にクリーンで、洗練されたデザイン、そして SEO に配慮した Astro の基盤を提供することで、コンテンツの作成とアイデアの具体化に集中できるよう設計されています。

---

## ✨ 主な特徴

このテンプレートは単なる基本的な骨組みではありません。高品質なコンテンツサイト向けに設計されたいくつかの高度な機能が備わっています：

*   **🚀 Astro v6+**: 最新の Astro エンジンを使用して構築されており、究極の読み込み速度と優れた開発体験を提供します。
*   **🎨 エレガントでミニマルなデザイン**: コンテンツに焦点を当てたクリーンなレイアウトで、スタイルのカスタマイズにも十分な余地があります。
*   **📱 完全なレスポンシブデザイン (RWD)**: デスクトップ、タブレット、スマートフォンで完璧な閲覧体験を提供します。
*   **✍️ Content Layer 駆動**: Astro 6 の **Content Layer** を搭載。`src/content.config.ts` を通じて、最新のローダー技術を用いた効率的な記事管理が可能です。
*   **SEO 最適化**:
    *   **自動サイトマップ**: `@astrojs/sitemap` を使用して `sitemap.xml` を自動的に生成します。
    *   **セマンティックタグ**: `H1` タグなどの適切な使用により、ホームページと記事ページの両方で SEO が最適化されています。
    *   **静態資産の SEO 最適化**: ロゴなどの重要資産は `public/images/` に保存され、ハッシュ値のないクリーンな URL を維持し、検索エンジンへのインデックスを最適化します。
    *   **外部リンクの処理**: すべての外部リンクに `rel="nofollow noopener noreferrer"` を自動的に追加します。
    *   **`robots.txt`**: SEO に配慮しつつ、AI クローラーによる学習をブロックする `robots.txt` テンプレートが含まれています。
    *   **メタディスクリプション**: すべてのページに、事前入力済みまたは動的に生成されるディスクリプションが設定されています。
*   **⚡️ Client Router**: Astro の **Client Router** (旧 View Transitions) を内蔵し、モダンでスムーズなページ遷移エフェクトを提供します。
*   **📖 動的な目次 (ToC)**: 長い記事では、フローティング目次が自動的に生成されます。
*   **📄 ページネーション**: メインの記事リストは自動的にページネーションされます。
*   **🧩 内蔵ページ**: 「会社概要 (About)」、「プライバシーポリシー」、「404」などの一般的なページテンプレートが含まれています。
*   **❤️ サポートとブランディング**:
    *   フッターには "Powered by Mountos" の品牌リンクが含まれています。
    *   コミュニティからのサポートを受けられるよう、フッターに「❤️ 寄付 (Donate)」リンクのプレースホルダーが用意されています。

## 🚀 クイックスタート

> [!IMPORTANT]
> **前提条件**: Astro 6 を利用するには、Node.js **v22.12.0** 以降が必要です。

1.  **このテンプレートを使用する**
    *   GitHub ページの右上にある `Use this template` > `Create a new repository` ボタンをクリックします。
    *   または、ローカルにクローンします：`git clone https://github.com/mountos/astro-pu.git`

2.  **依存関係のインストール**
    ```bash
    npm install
    ```

3.  **開発を開始する**
    ```bash
    npm run dev
    ```
    これで、`http://localhost:4321` でサイトを確認できます。

## ⚙️ カスタマイズガイド

自分のコンテンツを書き始める前に、以下の設定を変更してください：

1.  **`astro.config.mjs`**
    *   `site` プロパティを見つけ、`'https://example.com'` を最終的なデプロイ先の URL に置き換えます。これは正しいサイトマップを生成するために不可欠です。

2.  **`package.json`**
    *   `name`、`version`、`author`、`description` などのフィールドを、プロジェクトの情報に合わせて変更できます。

3.  **`public/robots.txt`**
    *   `astro.config.mjs` で `site` を設定している場合、`@astrojs/sitemap` が自動的にサイトマップリンクを生成することが多いです。そうでない場合は、`robots.txt` 内の `Sitemap` URL の `https://example.com` を手動で自分の網址に置き換えてください。

4.  **サイトのタイトルと説明 (`src/components/Header.astro`)**
    *   このファイルを開き、`siteTitle` 和 `siteDescription` のデフォルト値を変更します。

5.  **フッターロゴと情報 (`src/components/Footer.astro`)**
    *   サイトのロゴは `public/images/Mountos-Logo.png` にあります。SEO に配慮したクリーンな URL を維持するため、このファイルを独自のロゴに置き換えてください。
    *   `footer-intro` セクションのサイト名と紹介文を変更します。
    *   `copyright` セクションの `Your Site Name` を自分のサイト名に置き換えます。
    *   「サポート (Support Us)」メニューで、寄付リンクの `href="#"` を自分のリンクに置き換えてください。

6.  **執筆を開始！**
    *   コンテンツの設定は `src/content.config.ts` で定義されています。
    *   すべての記事は `src/content/blog/` フォルダにあります。
    *   `getting-started.md` の例を参考に、独自の `.md` または `.mdx` ファイルの作成を開始してください。

## 💖 Mountos をサポートする

このテンプレートが気に入った場合は、フッターの "Powered by Mountos" リンクを残すか、プロジェクトで言及することを検討してください。皆様のサポートが、私たちの継続的な創作の原動力となります！

<a href=\"https://buymeacoffee.com/mountos\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">コーヒーを一杯奢る</a> ことでも、私をサポートできます。ありがとうございます！

---

*Have fun building!*
