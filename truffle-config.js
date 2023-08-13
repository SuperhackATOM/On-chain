const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const infuraKey = process.env["INFURA_API_KEY"];
const privateKey = process.env.WALLET_PRIVATE_KEY;
const etherscanAPIKey = process.env.ETHERSCAN_PRIVATE_KEY;

module.exports = {
  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/ethereum-contracts',

  /**
  * contracts_directory tells Truffle where to find your contracts
  */
  contracts_directory: './contracts/ethereum',

  networks: {
    sepolia: {
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://sepolia.infura.io/v3/' + infuraKey)
      },
      network_id: 11155111,
    },
    optimistic_goerli: {
      network_id: 420,
      chain_id: 420,
      provider: function () {
        return new HDWalletProvider(privateKey, "https://optimism-goerli.infura.io/v3/" + infuraKey, 0, 1);
      }
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '666'
    }
  },
  compilers: {
    solc: {
      version: "^0.8.9"
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: etherscanAPIKey,
  },
}
