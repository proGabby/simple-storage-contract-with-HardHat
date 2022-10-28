const { task } = require("hardhat/config");

//task takes a key(string) adn description(string)
task("block_number", "prints the current block number").setAction(
  //hre is the HardHat Runtime Env
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`current block number is: ${blockNumber}`);
  }
);

module.exports = {};
