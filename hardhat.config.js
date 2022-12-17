require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",

  gasReporter: {
    enabled: true,
    currency: "INR",
    noColors: true,
    outputFile: "gasReport.txt",
  },
};
