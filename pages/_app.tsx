import "../styles/globals.css";
import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { global } from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
