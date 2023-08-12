const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const infuraKey = process.env["INFURA_API_KEY"];
const privateKey = process.env.WALLET_PRIVATE_KEY;

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
    zora_goerli: {  // explorer: https://testnet.explorer.zora.energy
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://testnet.rpc.zora.energy')
      },
      network_id: 999,
    },
    sepolia: {
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://sepolia.infura.io/v3/cc8cc7e34bb440b19e75b2910913a25e')
      },
      network_id: 11155111,
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '666'
    }
  },
  compilers: {
    solc: {
      version: "^0.8.19"
    }
  }
}
