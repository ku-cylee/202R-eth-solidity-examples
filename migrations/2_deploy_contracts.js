const Faucet = artifacts.require('Faucet.sol');

module.exports = deployer => {
    deployer.deploy(Faucet);
};
