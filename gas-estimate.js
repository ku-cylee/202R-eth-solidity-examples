const FaucetContract = artifacts.require('./contracts/Faucet.sol');

(async () => {
    const gasPriceStr = await web3.eth.getGasPrice();
    const gasPrice = Number(gasPriceStr);
    const instance = FaucetContract.deployed();
    instance.send(web3.utils.toWei('1', 'ether'));
    const gas = Number(instance.withdraw.estimateGas(web3.utils.toWei('0.1', 'ether')));
    const estimatedCost = (gas * gasPrice).toString();
    console.log(`gas estimation = ${gas} units`);
    console.log(`gas cost estimation = ${gas} units`);
    console.log(`gas cost estimation = ${FaucetContract.web3.utils.fromWei(estimatedCost, 'ether')} ether`);
})();
