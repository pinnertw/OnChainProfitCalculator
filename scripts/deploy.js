const hre = require("hardhat");

async function main() {
    const [owner, acct1, acct2] = await hre.ethers.getSigners();
    const Contract = await hre.ethers.getContractFactory("OnChainProfitCalculator");
    const contract = await Contract.deploy();
    //await contract.connect(acct1).mint();
    //await contract.connect(acct2).mint();
    console.log(contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
