type Chain =
  | "mainnet"
  | "ropsten"
  | "rinkeby"
  | "goerli"
  | "kovan"
  // binance smart chain
  | "bsc"
  | "bscTestnet"
  // huobi eco chain
  | "heco"
  | "hecoTestnet"
  // fantom mainnet
  | "opera"
  | "ftmTestnet"
  // optimistim
  | "optimisticEthereum"
  | "optimisticKovan"
  // polygon
  | "polygon"
  | "polygonMumbai"
  // arbitrum
  | "arbitrumOne"
  | "arbitrumTestnet"
  // avalanche
  | "avalanche"
  | "avalancheFujiTestnet"
  // moonriver
  | "moonriver"
  | "moonbaseAlpha"
  // palm
  | "palm"
  | "palmTestnet"
  // xDai
  | "xDai"
  | "xDaiTestnet"
  // BitTorrent
  | "btt"
  | "donau"
  // Celo
  | "celo"
  | "alfajores"
  | "baklava"
  // ShibaChain
  | "shiba"
  ;

export type ChainConfig = {
  [Network in Chain]: EtherscanChainConfig;
};

type EtherscanApiKeys = {
  [Network in Chain]?: string;
};

export interface EtherscanConfig {
  apiKey?: string | EtherscanApiKeys;
}

export interface EtherscanURLs {
  apiURL: string;
  browserURL: string;
}

interface EtherscanChainConfig {
  chainId: number;
  urls: EtherscanURLs;
}

export interface EtherscanNetworkEntry {
  network: Chain;
  urls: EtherscanURLs;
}
