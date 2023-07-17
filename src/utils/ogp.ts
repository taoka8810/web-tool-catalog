import metaFetcher from "meta-fetcher";

export const getOGPImage = async (url: string) => {
  // ダミー画像のURL
  const dummyImageURL =
    "https://generative-placeholders.glitch.me/image?width=1200&height=630&style=cellular-automata&cells=50";
  try {
    // メタデータ取得
    const res = await metaFetcher(url);

    // 画像を変数に格納
    const image = res.metadata.banner;
    const twitter = res.socials["twitter:image"];

    if (image) {
      return image;
    } else if (twitter) {
      return twitter;
    } else {
      return dummyImageURL;
    }
  } catch {
    return dummyImageURL;
  }
};
