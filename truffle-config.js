module.exports = {
  contracts_directory: "./contracts",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20", // Fetch exact version from solc-bin (default: truffle's version)
      parser: "solcjs",
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "byzantium",
      viaIR: true
    },
  },
};
