import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import NProgress from "nprogress";
import Router from "next/router";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { theme } from "../../theme/index.js";
import createEmotionCache from "../../utils/createEmotionCache.js";

import "@fontsource/montserrat";
import "@fontsource/anonymous-pro";
import "@/public/styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ToastContainer />
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export default MyApp;
