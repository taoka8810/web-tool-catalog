import { getOGP } from "ogp-getter";

export const getOGPImage = async (url: string) => {
  const dummyImageURL =
    "https://generative-placeholders.glitch.me/image?width=1200&height=630&style=cellular-automata&cells=50";
  try {
    const metadata = await getOGP(url);
    return metadata.image ? metadata.image : dummyImageURL;
  } catch {
    return dummyImageURL;
  }
};
