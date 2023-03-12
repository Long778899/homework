require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
require("./task/balance.js");

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const mnemonic = process.env.MNEMONIC
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

    // mumbai: {
    //   url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    //   accounts: {
    //     mnemonic: mnemonic,
    //   },
    //   chainId: 80001,
    // },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      // accounts: {
      //   mnemonic: mnemonic,
      //   sprocess.env.PRIVATE KEY
      // },
      accounts:['225eaf9bb94ad8eb88a1520ab27288902d2cd0564ee7a3de0265559304b9a03a'],
      chainId: 5,
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
    apiKey: scankey
},

};