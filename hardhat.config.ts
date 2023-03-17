import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Load environment variables.
dotenv.config();
const { PK } = process.env;
const accounts = new Array<string>();
if (PK) {
  accounts.push(PK);
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      accounts
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts
    },
  },
};

export default config;
