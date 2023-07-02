export const allCategories = [
  {
    id: 1,
    name: "Framework",
    slug: "framework",
    description:
      "ウェブアプリケーションの開発を効率化するためのツールや構造のセットです。フレームワークは、共通の機能やパターンを提供し、開発者が再利用可能なコードを使用してアプリケーションを構築できるようにします。",
  },
  {
    id: 2,
    name: "CMS",
    slug: "cms",
    description:
      "CMSはコンテンツ管理システムで、ウェブサイトやブログの簡単な作成と更新を可能にするツールです。コードの知識がなくても、テキストや画像などのコンテンツを編集できます。",
  },
  {
    id: 3,
    name: "Database",
    slug: "db",
    description:
      "データベースは、情報を組織化して格納するためのシステムです。テーブルやフィールドで構成され、複数の関連データを保存し、検索や更新ができます。データベースは効率的なデータ管理や情報の整合性を提供し、多種多様なアプリケーションで利用されます。",
  },
  {
    id: 4,
    name: "Storage",
    slug: "storage",
    description:
      "メディアファイル（画像、音声、動画など）の保存にも利用でき、ウェブサイトやアプリケーションでのコンテンツ提供やユーザーエクスペリエンス向上に役立ちます。",
  },
  {
    id: 5,
    name: "Authentication",
    slug: "auth",
    description:
      "Firebase Authenticationには、ユーザー名とパスワード、ソーシャルログイン（GoogleやFacebookなどのアカウントを使用）、OAuth（他のアプリケーションとの信頼関係を構築）などがあります。",
  },
  {
    id: 6,
    name: "Hosting",
    slug: "hosting",
    description:
      "ウェブサイトやアプリケーションをインターネット上で公開するためのサービスです。ホスティングサービスプロバイダは、物理的なサーバーやインフラストラクチャを所有・管理し、ユーザーがウェブコンテンツをサーバーにアップロードして公開できる環境を提供します。",
  },
];

export const allTools = [
  {
    id: 1,
    name: "WordPress",
    icon: "/wordpress.png",
    description: "世界で最も利用されているオープンソースCMS",
    provider: "WordPress Foundation",
    url: "https://ja.wordpress.org/",
    category: {
      id: 2,
      name: "CMS",
      slug: "cms",
      description:
        "CMSはコンテンツ管理システムで、ウェブサイトやブログの簡単な作成と更新を可能にするツールです。コードの知識がなくても、テキストや画像などのコンテンツを編集できます。",
    },
  },
  {
    id: 2,
    name: "Vercel",
    icon: "/vercel.png",
    description:
      "Vercelはリアルタイムのクラウドプラットフォームで、ウェブサイトやアプリケーションの開発とデプロイを簡素化することに特化しています。",
    provider: "Verel Inc.",
    url: "https://vercel.com/",
    category: {
      id: 6,
      name: "Hosting",
      slug: "hosting",
      description:
        "ウェブサイトやアプリケーションをインターネット上で公開するためのサービスです。ホスティングサービスプロバイダは、物理的なサーバーやインフラストラクチャを所有・管理し、ユーザーがウェブコンテンツをサーバーにアップロードして公開できる環境を提供します。",
    },
  },
  {
    id: 3,
    name: "Firebase Cloud Firestore",
    icon: "/firebase.png",
    description:
      "Cloud Firestore は、モバイルアプリやウェブアプリのデータの保存、同期、照会がグローバル スケールで簡単にできる NoSQL ドキュメント データベースです。",
    provider: "Google LLC",
    url: "https://firebase.google.com/products/firestore?hl=ja",
    category: {
      id: 3,
      name: "Database",
      slug: "db",
      description:
        "データベースは、情報を組織化して格納するためのシステムです。テーブルやフィールドで構成され、複数の関連データを保存し、検索や更新ができます。データベースは効率的なデータ管理や情報の整合性を提供し、多種多様なアプリケーションで利用されます。",
    },
  },
  {
    id: 4,
    name: "Firebase Realtime Database",
    icon: "/firebase.png",
    description:
      "Firebase Realtime Database は、リアルタイムでデータを保存してユーザー間で同期できる、クラウドホスト型 NoSQL データベースです。",
    provider: "Google LLC",
    url: "https://firebase.google.com/products/realtime-database?hl=ja",
    category: {
      id: 3,
      name: "Database",
      slug: "db",
      description:
        "データベースは、情報を組織化して格納するためのシステムです。テーブルやフィールドで構成され、複数の関連データを保存し、検索や更新ができます。データベースは効率的なデータ管理や情報の整合性を提供し、多種多様なアプリケーションで利用されます。",
    },
  },
  {
    id: 5,
    name: "Firebase Hosting",
    icon: "/firebase.png",
    description:
      "Firebase Hosting を使用すると、単一ページ型ウェブアプリ、モバイルアプリのランディング ページ、プログレッシブ ウェブアプリなどを簡単にデプロイできます。",
    provider: "Google LLC",
    url: "https://firebase.google.com/products/hosting?hl=ja",
    category: {
      id: 6,
      name: "Hosting",
      slug: "hosting",
      description:
        "ウェブサイトやアプリケーションをインターネット上で公開するためのサービスです。ホスティングサービスプロバイダは、物理的なサーバーやインフラストラクチャを所有・管理し、ユーザーがウェブコンテンツをサーバーにアップロードして公開できる環境を提供します。",
    },
  },
  {
    id: 6,
    name: "Firebase Authentication",
    icon: "/firebase.png",
    description:
      "Firebase Authentication はメールアドレスとパスワードの組み合わせ、電話認証、Google、Twitter、Facebook、GitHub のログインなどに対応したエンドツーエンドの ID ソリューションです。",
    provider: "Google LLC",
    url: "https://firebase.google.com/products/auth?hl=ja",
    category: {
      id: 5,
      name: "Authentication",
      slug: "auth",
      description:
        "ユーザーの身元を確認し、アクセス制御や個人データの保護を行う仕組みです。一般的な認証サービスには、ユーザー名とパスワード、ソーシャルログイン（GoogleやFacebookなどのアカウントを使用）、OAuth（他のアプリケーションとの信頼関係を構築）などがあります。",
    },
  },
  {
    id: 7,
    name: "Firebase Storage",
    icon: "/firebase.png",
    description:
      "Cloud Storage は、ユーザーが作成した写真や動画などのコンテンツを迅速かつ簡単に保管し、提供できるように設計されています。",
    provider: "Google LLC",
    url: "https://firebase.google.com/products/storage?hl=ja",
    category: {
      id: 4,
      name: "Storage",
      slug: "storage",
      description:
        "メディアファイル（画像、音声、動画など）の保存にも利用でき、ウェブサイトやアプリケーションでのコンテンツ提供やユーザーエクスペリエンス向上に役立ちます。",
    },
  },
];
