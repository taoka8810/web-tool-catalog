import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { HomePage, HomeProps } from "~/components/pages/Home";
import { getOGPImage } from "~/utils/ogp";
import { supabase } from "~/utils/supabase";

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <HomePage allTools={props.allTools} allCategories={props.allCategories} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTools = await supabase.from("Tool").select();
  const allCategories = await supabase.from("Category").select();

  // ToolsのurlからOGP画像を取得する
  if (!allTools.data) {
    throw Error;
  }
  const allToolsWithOGP = await Promise.all(
    allTools.data.map(async (tool) => {
      const image = await getOGPImage(tool.url);
      return {
        ...tool,
        image: image,
      };
    })
  );

  return {
    props: {
      allTools: allToolsWithOGP,
      allCategories: allCategories.data,
    },
  };
};

export default Home;
