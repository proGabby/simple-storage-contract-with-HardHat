//import ethers directly form hardhat not ethers
const { ethers, run } = require("hardhat");

//async main
async function main() {
  //get the contract factory from our sol file
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();
  //if no network is specify in the hardhat.config.js file, the contract is deploy the hardhat network
  await simpleStorage.deployed();

  console.log(`deploying contract to: ${simpleStorage.address}`);

  //verify if we are working in testNest and have etherscan api key
  if (network.config.chainId === 5 && process.env.ETHER_SCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await simpleStorage.deployTransaction.wait(6);
    await verifyContract(simpleStorage.address, []);
  }

  //interact with contract
  const currentValue = await simpleStorage.retrieve();
  console.log(`current value is: ${currentValue}`);

  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updateValue = await simpleStorage.retrieve();
  console.log(`updated value is ${updateValue}`);
}

async function verifyContract(contractAddress, args) {
  //since verify might throw an error, we use try/catch
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
}

//main
main()
  .then(() => process.exit(0))
  .catch(() => {
    console.error(error);
    process.exit(1);
  });
