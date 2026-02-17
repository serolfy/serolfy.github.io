import "@/styles/globals.css";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import Head from "next/head";

import Layout from "../components/layout";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_CLARITY_ID) {
      Clarity.init('viugpt40po');
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Yair Flores</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
