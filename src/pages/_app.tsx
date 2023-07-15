import { type AppType } from "next/app";
import "~/styles/globals/index.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
