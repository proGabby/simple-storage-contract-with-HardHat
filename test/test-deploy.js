const { ethers } = require("hardhat");
const { exoect, assert, expect } = require("chai");
const { solidity } = require("../hardhat.config");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  //before any function is runned, before each runs
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  /*Note: To run only 1 test case:

    run npx hardhat test --grep <test verb>
    or use It.only instead of just It
  */

  //it describes a specific test case
  it("should start with a favourite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "5";
    //test if currentvalue is expected value
    assert.equal(currentValue.toString(), expectedValue);
    //test could also be done using
    // expect(currentValue.toString()).to.equal(expectedValue);
  });

  it("to update when store is called", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("to add a person when addperson is called", async function () {
    expectedPersonname = "john";
    expectedFavouriteNumber = 5;
    const transactionResponse = await simpleStorage.addPerson(
      expectedPersonname,
      expectedFavouriteNumber
    );
    await transactionResponse.wait(1);

    const { name, favoriteNumber } = await simpleStorage.peopleArray(0);
    assert.equal(name, expectedPersonname);
    assert.equal(favoriteNumber, expectedFavouriteNumber);
  });
});
