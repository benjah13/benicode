import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import i18n from "../i18n";
import I18nProvider from "../i18n/I18nProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider i18n={i18n}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </I18nProvider>
  );
}
