import { getOGP } from "ogp-getter";
import { translator } from "./deepl";

export const translateDescription = async (url: string) => {
  // Deepl APIの文字数制限の節約のため、本番環境以外ではダミーテキストを返す
  const isProduction = process.env.IS_PRODUCTION;

  if (isProduction === "true") {
    const originalDescription = await getOGP(url);
    if (!originalDescription.description) return " ";
    const translatedDescription = await translator.translateText(
      originalDescription.description,
      null,
      "ja"
    );
    return translatedDescription.text;
  } else {
    return "【ダミー】Prismicはヘッドレス・ウェブサイト・ビルダーであり、開発者やマーケティング担当者は、より速く出荷し、反復し、より良いサイトを構築することができます。";
  }
};
