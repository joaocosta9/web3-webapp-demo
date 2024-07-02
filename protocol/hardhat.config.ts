import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
// import * as dotenv from "dotenv";

// dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [
        "d05b2dbb763f0b230b87b2b7ad58c031da030be7936a5a48d3fabf190535478b",
      ],
      gasPrice: 1000000000,
    },
  },
};

export default config;
