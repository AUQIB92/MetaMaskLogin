
const Storage = artifacts.require('Storagedemo')

module.exports = async function(deployer, network, accounts) {
    // Deploy MyToken
    await deployer.deploy(Storage)
}
