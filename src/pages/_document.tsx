import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Web Tool CatalogはWeb開発でよく利用される、CMS、データベース、ストレージ、ホスティングなどのサービスやツールを一覧で紹介するポータルサイトです。"
        />
        <meta name="keywords" content="web,一覧,ポータルサイト,ツール" />
        <meta name="author" content="taoka8810" />
        <meta property="og:url" content="https://web-tool-catalog.com" />
        <meta
          property="og:title"
          content="Web Tool Catalog | Web開発に役立つツール・サービスの一覧サイト"
        />
        <meta
          property="og:description"
          content="Web Tool CatalogはWeb開発でよく利用される、CMS、データベース、ストレージ、ホスティングなどのサービスやツールを一覧で紹介するポータルサイトです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Web Tool Catalog" />
        <meta property="og:image" content="/ogp.png" />
        <title>Web Tool Catalog</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
