"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import { klaytn, klaytnBaobab } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";

const { wallets } = getDefaultWallets();

const moonbaseAlphaTestnet = {
  id: 1287, // Sửa thành 8880 hoặc "0x22b0"
  name: "Moonbase Alpha",
  network: "Moonbase Alpha",
  nativeCurrency: {
    name: "Moonbase Alpha",
    symbol: "DEV",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      websocket: ["wss://rpc.api.moonbase.moonbeam.network"],
    },
    public: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      websocket: ["wss://rpc.api.moonbase.moonbeam.network"],
    },
  },
  blockExplorers: {
    default: { name: "Moonbase Alpha", url: "https://moonbase.moonscan.io/" },
  },
  testnet: true,
};

export const config = getDefaultConfig({
  appName: "DApp Bootcamp Frontends",
  projectId: "b735f0d8b8e242fb3e26f7c8dd1062b1",
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [klaytn, klaytnBaobab, moonbaseAlphaTestnet],
  transports: {
    [klaytn.id]: http("https://public-en.node.kaia.io"),
    [klaytnBaobab.id]: http("https://public-en.kairos.node.kaia.io"),
    [1287]: http("https://rpc.api.moonbase.moonbeam.network"),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
