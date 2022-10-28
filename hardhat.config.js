require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

G0ERLI_RPC_URL = process.env.G0ERLI_RPC_URL;
PRIVATE_KEY = process.env.PRIVATE_KEY;
ETHERSCAN_API_KEY = process.env.ETHER_SCAN_API_KEY;
COINMARKET_API_KEY = process.env.COINMARKET_CAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: G0ERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    //run locally using hardhat node
    //to run on a local node, ensure to run npx hardhat node on a different bash shell
    //before runing npx hardhat run <deploy script path> --network localhost
    localhost: {
      url: "http://127.0.0.1:8545/", //localhost address
      chainId: 31337,
      //no account as hardhat give us by default
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: "0.8.7",

  /* 
to use gas reporter, 
1. install and import the 'hardhat-gas-reporter' package
2. make enable true
3. optional: set currency, get coinmarket api key for token price convert to your currency
4. optional: set token to the blockchain you want to deploy eg token: "MATIC"
5. RUN npx hardhat test

*/
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API_KEY,
    token: "ETH",
  },
};
