import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import {
  baseSepolia,
  hardhat,
} from "wagmi/chains";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import Layout from "../components/Layout";
import TransferProvider from "../components/context/TransferListenerContext";

const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [hardhat, baseSepolia],
  ssr: true,
});

const client = new QueryClient();

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider initialChain={84532}>
          <TransferProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TransferProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
