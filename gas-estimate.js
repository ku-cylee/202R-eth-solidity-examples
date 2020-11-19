const FaucetContract = artifacts.require('./contracts/Faucet.sol');

FaucetContract.web3.eth.getGasPrice((err, res) => {
    const gasPrice = Number(res);
    console.log(`Gas Price is ${gasPrice} wei`);

    FaucetContract.deployed().then(FaucetContractInstance => {
        FaucetContractInstance.send(web3.utils.toWei('1', 'ether'));
        return FaucetContractInstance.withdraw.estimateGas(web3.utils.toWei('0.1', 'ether'));
    }).then(res => {
        const gas = Number(res);
        const estimatedCost = (gas * gasPrice).toString();
        console.log(`gas estimation = ${gas} units
        gas cost estimation = ${estimatedCost} wei
        gas cost estimation = ${FaucetContract.web3.utils.fromWei(estimatedCost, 'ether')} ether`);
    });
});
