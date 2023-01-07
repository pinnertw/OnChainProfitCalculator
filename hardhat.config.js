require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const PRIVATE_KEY3 = process.env.PRIVATE_KEY3;
const ENDPOINT_URL = process.env.ENDPOINT_URL;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
      version: "0.8.13",
      settings: {
          optimizer: {
              enabled: true,
              runs: 200,
          },
      },
  },
  networks: {
      sepolia: {
          url: ENDPOINT_URL,
          accounts: [`0x${PRIVATE_KEY}`,
          `0x${PRIVATE_KEY2}`,
          `0x${PRIVATE_KEY3}`],
      },
      goerli: {
          url: ENDPOINT_URL,
          accounts: [`0x${PRIVATE_KEY}`,
          `0x${PRIVATE_KEY2}`,
          `0x${PRIVATE_KEY3}`],
          gas: 2100000,
          gasPrice: 8000000000
      },
      mainnet: {
          url: "https://mainnet.infura.io/v3/35f5ce3a8e9d4169a937431712cd6620"
      }
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
      enabled: true,
      currency: "USD",
      gasPrice: 21,
  },
};
