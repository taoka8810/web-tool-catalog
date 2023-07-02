import { GetStaticProps, NextPage } from "next";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { HomePage } from "~/components/pages/Home";
import { api } from "~/utils/api";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
