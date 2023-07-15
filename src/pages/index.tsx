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
  const allTools = await supabase.from("tool").select(`
    id,
    name,
    description,
    provider,
    url,
    category ( id, name, slug )
  `);
  const allCategories = await supabase.from("category").select();

  if (!allTools.data) {
    throw new Error("エラーwwwww ");
  }

  // ToolsのurlからOGP画像を取得する
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
