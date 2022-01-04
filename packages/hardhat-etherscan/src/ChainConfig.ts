import { ChainConfig } from "./types";

// See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids
export const chainConfig: ChainConfig = {
  mainnet: {
    chainId: 1,
    urls: {
      apiURL: "https://api.etherscan.io/api",
      browserURL: "https://etherscan.io",
    },
  },
  ropsten: {
    chainId: 3,
    urls: {
      apiURL: "https://api-ropsten.etherscan.io/api",
      browserURL: "https://ropsten.etherscan.io",
    },
  },
  rinkeby: {
    chainId: 4,
    urls: {
      apiURL: "https://api-rinkeby.etherscan.io/api",
      browserURL: "https://rinkeby.etherscan.io",
    },
  },
  goerli: {
    chainId: 5,
    urls: {
      apiURL: "https://api-goerli.etherscan.io/api",
      browserURL: "https://goerli.etherscan.io",
    },
  },
  kovan: {
    chainId: 42,
    urls: {
      apiURL: "https://api-kovan.etherscan.io/api",
      browserURL: "https://kovan.etherscan.io",
    },
  },
  bsc: {
    chainId: 56,
    urls: {
      apiURL: "https://api.bscscan.com/api",
      browserURL: "https://bscscan.com",
    },
  },
  bscTestnet: {
    chainId: 97,
    urls: {
      apiURL: "https://api-testnet.bscscan.com/api",
      browserURL: "https://testnet.bscscan.com",
    },
  },
  heco: {
    chainId: 128,
    urls: {
      apiURL: "https://api.hecoinfo.com/api",
      browserURL: "https://hecoinfo.com",
    },
  },
  hecoTestnet: {
    chainId: 256,
    urls: {
      apiURL: "https://api-testnet.hecoinfo.com/api",
      browserURL: "https://testnet.hecoinfo.com",
    },
  },
  opera: {
    chainId: 250,
    urls: {
      apiURL: "https://api.ftmscan.com/api",
      browserURL: "https://ftmscan.com",
    },
  },
  ftmTestnet: {
    chainId: 4002,
    urls: {
      apiURL: "https://api-testnet.ftmscan.com/api",
      browserURL: "https://testnet.ftmscan.com",
    },
  },
  optimisticEthereum: {
    chainId: 10,
    urls: {
      apiURL: "https://api-optimistic.etherscan.io/api",
      browserURL: "https://optimistic.etherscan.io/",
    },
  },
  optimisticKovan: {
    chainId: 69,
    urls: {
      apiURL: "https://api-kovan-optimistic.etherscan.io/api",
      browserURL: "https://kovan-optimistic.etherscan.io/",
    },
  },
  polygon: {
    chainId: 137,
    urls: {
      apiURL: "https://api.polygonscan.com/api",
      browserURL: "https://polygonscan.com",
    },
  },
  polygonMumbai: {
    chainId: 80001,
    urls: {
      apiURL: "https://api-testnet.polygonscan.com/api",
      browserURL: "https://mumbai.polygonscan.com/",
    },
  },
  arbitrumOne: {
    chainId: 42161,
    urls: {
      apiURL: "https://api.arbiscan.io/api",
      browserURL: "https://arbiscan.io/",
    },
  },
  arbitrumTestnet: {
    chainId: 421611,
    urls: {
      apiURL: "https://api-testnet.arbiscan.io/api",
      browserURL: "https://testnet.arbiscan.io/",
    },
  },
  avalanche: {
    chainId: 43114,
    urls: {
      apiURL: "https://api.snowtrace.io/api",
      browserURL: "https://snowtrace.io/",
    },
  },
  avalancheFujiTestnet: {
    chainId: 43113,
    urls: {
      apiURL: "https://api-testnet.snowtrace.io/api",
      browserURL: "https://testnet.snowtrace.io/",
    },
  },
  moonriver: {
    chainId: 1285,
    urls: {
      apiURL: "https://api-moonriver.moonscan.io/api",
      browserURL: "https://moonscan.io",
    },
  },
  moonbaseAlpha: {
    chainId: 1287,
    urls: {
      apiURL: "https://api-moonbase.moonscan.io/api",
      browserURL: "https://moonbase.moonscan.io/",
    },
  },
  palm: {
    chainId: 11297108109,
    urls: {
      apiURL: "https://explorer.palm.io/api",
      browserURL: "https://explorer.palm.io/",
    },
  },
  palmTestnet: {
    chainId: 11297108099,
    urls: {
      apiURL: "https://explorer.palm-uat.xyz/api",
      browserURL: "https://explorer.palm-uat.xyz/",
    },
  },
  xDai: {
    chainId: 100,
    urls: {
      apiURL: "https://blockscout.com/xdai/mainnet/api",
      browserURL: "https://blockscout.com/xdai/mainnet",
    }, 
  },
  xDaiTestnet: {
    chainId: 200,
    urls: {
      apiURL: "https://blockscout.com/xdai/aox/api",
      browserURL: "https://blockscout.com/xdai/aox",
    },
  },
  btt: {
    chainId: 199,
    urls: {
      apiURL: "https://scanapi.bt.io/api",
      browserURL: "https://scan.bt.io/",
    },
  },
  donau: {
    chainId: 1029,
    urls: {
      apiURL: "https://testscanapi.bt.io/api",
      browserURL: "https://testscan.bt.io/",
    },
  },
  celo: {
    chainId: 42220,
    urls: {
      apiURL: "https://explorer.celo.org/api",
      browserURL: "https://explorer.celo.org/",
    },
  },
  alfajores: {
    chainId: 44787,
    urls: {
      apiURL: "https://alfajores-blockscout.celo-testnet.org/api",
      browserURL: "https://alfajores-blockscout.celo-testnet.org/",
    },
  },
  baklava: {
    chainId: 62320,
    urls: {
      apiURL: "hhttps://baklava-blockscout.celo-testnet.org/api",
      browserURL: "https://baklava-blockscout.celo-testnet.org/",
    },
  },
  shiba: {
    chainId: 27,
    urls: {
      apiURL: "https://exp.shibachain.net/api",
      browserURL: "https://exp.shibachain.net/",
    },
  }
};