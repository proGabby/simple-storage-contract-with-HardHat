# Simple Storage with Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## To run only 1 test case:

    run npx hardhat test --grep <test verb>
    or use It.only instead of just It

## to use gas reporter,

1. install and import the 'hardhat-gas-reporter' package
2. make enable true
3. optional: set currency, get coinmarket api key for token price convert to your currency
4. optional: set token to the blockchain you want to deploy eg token: "MATIC"
5. RUN npx hardhat test

## To check which .sol contract we haven't written test for

1. solidity coverage plugin, to install use npm install --save -dev solidity-coverage
2. require it in hardhat.config.js file
3. use it by running npx hardhat coverage

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
