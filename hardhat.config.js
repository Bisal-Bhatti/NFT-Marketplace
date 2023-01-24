require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/lomagLtFAAR6wLySr-jvAKkEuaTWIWw6`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/51c75e51bc8146ccb48744fce376dfb7`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.17",
};