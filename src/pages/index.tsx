import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { HomePage, HomeProps } from "~/components/pages/Home";
import { supabase } from "~/utils/supabase";

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <HomePage allTools={props.allTools} allCategories={props.allCategories} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTools = await supabase.from("Tool").select();
  const allCategories = await supabase.from("Category").select();
  return {
    props: {
      allTools: allTools.data,
      allCategories: allCategories.data,
    },
  };
};

export default Home;
