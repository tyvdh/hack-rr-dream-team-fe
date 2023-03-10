import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {
  SorobanReactProvider,
  getDefaultConnectors,
} from "@soroban-react/core";
// eslint-disable-next-line
import { chains } from "@soroban-react/chains";
import { ChainMetadata, ConnectorList } from "@soroban-react/types";

const appName = "Recurring Revenue Dapp";
const allowedChains: ChainMetadata[] = [
  chains.sandbox,
  chains.standalone,
  chains.futurenet,
];
const { connectors } = getDefaultConnectors({
  appName: "Exanple Stellar App",
  chains: allowedChains,
});

const allowedConnectors: ConnectorList = [];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SorobanReactProvider
      appName={appName}
      chains={allowedChains}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </SorobanReactProvider>
  );
}
