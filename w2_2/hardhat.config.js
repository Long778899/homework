require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
const privateKey=process.env.PRIVATE_KEY
const scankey = process.env.ETHERSCAN_API_KEY
// const privateKey = process.env.PRIVATEKEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    // hardhat: {
    //   chainId: 31337,
    //   gas: 12000000,
    //   accounts: {
    //     mnemonic: mnemonic,
    //   },
    // },

    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [privateKey],
      chainId: 80001,
    },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [privateKey],
      chainId: 5,
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [privateKey],
      chainId: 11155111,
    },
  },


  abiExporter: {
      path: './deployments/abi',
      clear: true,
      flat: true,
      only: [],
      spacing: 2,
      pretty: true,
  },

  etherscan: {
    apiKey: scankey,
},

};