import { getPageOGPMetadata } from "metagros/move/cometPunch";
import { translator } from "./deepl";

export const translateDescription = async (url: string) => {
  const originalDescription = await getPageOGPMetadata(url);
  if (!originalDescription.description) return "";
  const translatedDescription = await translator.translateText(
    originalDescription.description,
    null,
    "ja"
  );
  return translatedDescription.text;
};
