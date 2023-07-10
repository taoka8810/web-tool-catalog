export const getOGPImage = async (url: string) => {
  const dummyImageURL =
    "https://generative-placeholders.glitch.me/image?width=1200&height=630&style=cellular-automata&cells=50";
  try {
    const ogpImageURL = await fetch(url)
      .then(async (res) => {
        // 取得したHTMLを文字列に変換
        const html = await res.text();

        // 文字列からog:imageのcontentを正規表現で取得
        const ogImagePattern =
          /<meta\s+property=\"og:image\"\s+content=\"([^\"]+)\"/i;
        const ogImageMatch = html.match(ogImagePattern);
        const ogImage = ogImageMatch ? ogImageMatch[1] : undefined;

        // 文字列からog:imageのcontentを正規表現で取得
        const ogTwitterImagePattern =
          /<meta\s+property=\"twitter:image\"\s+content=\"([^\"]+)\"/i;
        const ogTwitterImageMatch = html.match(ogTwitterImagePattern);
        const ogTwitterImage = ogTwitterImageMatch
          ? ogTwitterImageMatch[1]
          : undefined;

        console.log(ogImage);

        if (ogImage) {
          return ogImage;
        } else if (ogTwitterImage) {
          return ogTwitterImage;
        } else {
          return dummyImageURL;
        }
      })
      .catch((e) => {
        return dummyImageURL;
      });
    return ogpImageURL;
  } catch {
    return dummyImageURL;
  }
};
