import metaFetcher from "meta-fetcher";
import { translator } from "./deepl";

export const translateDescription = async (url: string) => {
  // メタデータ取得
  const meta = await metaFetcher(url);
  // const ogp = await getOGP(url);

  // 変数に格納
  const metaDescription = meta.metadata.description;
  // const ogpDescription = ogp.description;

  const originalDescription = metaDescription ? metaDescription : undefined;

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
};
