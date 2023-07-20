import { type AppType } from "next/app";
import Script from "next/script";
import "~/styles/globals/index.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-J1BK4GFXVN`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-J1BK4GFXVN');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
