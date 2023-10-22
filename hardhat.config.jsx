import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

import * as dotenv from "dotenv";
dotenv.config();

const config = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: { enabled: true, runs: 5000 },
    },
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_ALCHEMY_KEY}`,
      accounts: [process.env.MUMBAI_DEPLOYER_PRIVATE_KEY],
    },

    hardhat: {
      mining: {
        auto: true,
        interval: 1000,
      },
    },
  },
  paths: {
    sources: "./circuits/contract/noirstarter",
  },
};

export default config;
