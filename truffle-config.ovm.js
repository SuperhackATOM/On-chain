require('dotenv').config();

const infuraKey = process.env["INFURA_API_KEY"];
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env.WALLET_PRIVATE_KEY;
const etherscanAPIKey = process.env.ETHERSCAN_PRIVATE_KEY;

module.exports = {

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/optimism-contracts',

  /**
  *  contracts_directory tells Truffle where to find your contracts
  */
  contracts_directory: './contracts/optimism',

  networks: {
    zora_goerli: {  // explorer: https://testnet.explorer.zora.energy
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://testnet.rpc.zora.energy')
      },
      network_id: 999,
    },
    base_goerli: {  // explorer: https://goerli.basescan.org
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://goerli.base.org')
      },
      network_id: 84531,
    },
    optimistic_goerli: {
      network_id: 420,
      chain_id: 420,
      provider: function () {
        return new HDWalletProvider(privateKey, "https://optimism-goerli.infura.io/v3/" + infuraKey, 0, 1);
      }
    },
    // true: {
    //   network_id: 420,
    //   chain_id: 420,
    //   provider: function () {
    //     return new HDWalletProvider(privateKey, "https://optimism-goerli.infura.io/v3/" + infuraKey);
    //   }
    // },
    dashboard: {
      host: "127.0.0.1",
      port: 24012,
      network_id: "*"
    }
  },

  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 800
        }
      }
    },
  },
  db: {
    enabled: false
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: etherscanAPIKey,
  },
}
