require("dotenv").config();
require("solidity-coverage");
require("ts-node").register({
  files: true,
});

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "1337", // Any network (default: none)
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: !(process.env.SOLC_OPTIMIZER === "false"),
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY, // Obtain one at https://etherscan.io/myapikey
  },
  plugins: [
    "solidity-coverage",
    "truffle-plugin-verify",
    "truffle-contract-size",
  ],
};
