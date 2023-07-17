import metaFetcher from "meta-fetcher";
import { translator } from "./deepl";
import { getOGP } from "ogp-getter";

export const translateDescription = async (url: string) => {
  try {
    // メタデータ取得
    const meta = await metaFetcher(url);
    const ogp = await getOGP(url);

    // 変数に格納
    const metaDescription = meta.metadata.description;
    const ogpDescription = ogp.description;

    const originalDescription = metaDescription
      ? metaDescription
      : ogpDescription
      ? ogpDescription
      : undefined;

    // Deepl APIの文字数制限の節約のため、本番環境以外では翻訳処理をしない
    const isProduction = process.env.IS_PRODUCTION;
    if (isProduction === "true" && originalDescription) {
      const translatedDescription = await translator.translateText(
        originalDescription,
        null,
        "ja"
      );
      return translatedDescription.text;
    } else {
      return originalDescription ? originalDescription : "";
    }
  } catch {
    throw new Error(url);
  }
};
