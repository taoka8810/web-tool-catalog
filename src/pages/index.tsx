import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { HomePage, HomeProps } from "~/components/pages/Home";
import { getOGPImage } from "~/utils/ogp";
import { shuffleArray } from "~/utils/shuffleArray";
import { supabase } from "~/utils/supabase";
import { translateDescription } from "~/utils/translate";

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <HomePage allTools={props.allTools} allCategories={props.allCategories} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTools = await supabase.from("tool").select(`
    id,
    name,
    url,
    category ( id, name, slug )
  `);
  const allCategories = await supabase.from("category").select();

  if (!allTools.data) {
    throw new Error("エラーwwwww ");
  }

  // OGP画像の取得とdescriptionの翻訳
  const allToolData = await Promise.all(
    allTools.data.map(async (tool) => {
      console.log(tool.id);
      const image = await getOGPImage(tool.url);
      const description = await translateDescription(tool.url);
      return {
        ...tool,
        description: description,
        image: image,
      };
    })
  );

  return {
    props: {
      allTools: allToolData,
      allCategories: allCategories.data,
    },
  };
};

export default Home;
