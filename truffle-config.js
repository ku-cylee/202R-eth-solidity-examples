module.exports = {
  networks: {
    develop: {
      network_id: "*",
      host: "localhost",
      port: 8545,
    }
  },
  compilers: {
    solc: {
      version: "0.4.22",
      settings: {
       optimizer: {
         enabled: false,
         runs: 200
       },
      }
    }
  }
}
