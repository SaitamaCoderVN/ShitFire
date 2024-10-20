import { http, createConfig } from '@wagmi/core'
import { klaytn, klaytnBaobab } from "wagmi/chains";

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

export const config = createConfig({
    chains: [klaytn, klaytnBaobab, moonbaseAlphaTestnet],
    transports: {
      [klaytn.id]: http("https://public-en.node.kaia.io"),
      [klaytnBaobab.id]: http("https://public-en.kairos.node.kaia.io"),
      [1287]: http("https://rpc.api.moonbase.moonbeam.network"),
    },
})