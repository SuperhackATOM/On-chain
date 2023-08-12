require('dotenv').config();

const infuraKey = process.env["INFURA_KEY"];
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env.WALLET_PRIVATE_KEY;

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
    optimistic_ethereum: {
      network_id: 17,
      provider: function () {
        return new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic
          },
          providerOrUrl: "http://127.0.0.1:8545/",
          addressIndex: 0,
          numberOfAddresses: 1,
          chainId: 17
        })
      }
    },
    optimistic_goerli: {
      network_id: 420,
      chain_id: 420,
      provider: function () {
        return new HDWalletProvider(privateKey, "https://optimism-goerli.infura.io/v3/" + infuraKey, 0, 1);
      }
    },
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
      version: "^0.8.19",
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
  }
}
