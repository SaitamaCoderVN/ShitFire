import { http, createConfig } from '@wagmi/core'
import { klaytn, klaytnBaobab } from "wagmi/chains";

export const config = createConfig({
    chains: [klaytn, klaytnBaobab],
    transports: {
      [klaytn.id]: http("https://public-en-cypress.klaytn.net"),
      [klaytnBaobab.id]: http("https://public-en.kairos.node.kaia.io"),
    },
})