import * as deepl from "deepl-node";

const key = process.env.NEXT_PUBLIC_DEEPL_API_KEY;

if (!key) {
  throw new Error("DeeplのAPI Keyがないお" + "：" + key);
}

export const translator = new deepl.Translator(key);
