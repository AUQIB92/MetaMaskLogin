module.exports = {

  networks: {
    networks: {
      develop: {
        port: 7545
      }
    
    }},
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",
       // version: "0.6.2",  
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }}
