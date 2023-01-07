const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { BigNumber } = require("ethers");
const { expect } = require("chai");
const fs = require("fs");

async function deploy() {
    const [owner, acct1, acct2, acct3] = await ethers.getSigners();
    // console.log(owner.address, acct1.address, acct2.address);
    const Contract = await ethers.getContractFactory("OnChainProfitCalculator");
    const contract = await Contract.deploy();
    await contract.connect(acct1).mint({value: ethers.utils.parseEther("0")});
    await contract.connect(acct2).mint({value: ethers.utils.parseEther("0")});
    await contract.connect(acct3).mint({value: ethers.utils.parseEther("0")});
    await contract.connect(acct1).setWallets([acct1.address, acct2.address, acct3.address], 20);
    await contract.connect(acct1).transferFrom(acct1.address, acct2.address, 20);
    await contract.connect(acct2).transferFrom(acct2.address, acct1.address, 20);
    // console.log(await contract.tokenURI(20));
    return { owner, acct1, acct2, acct3, contract };
}
describe("Deployment", function () {
    it("Deployment", async function deployed() {
        const { owner, contract} = await loadFixture(deploy);
        expect(await contract.owner()).to.equal(owner.address);
    });
});

describe("Mint", function (){
    it("mint", async function () {
        const { owner, contract, acct1, acct2, acct3 } = await loadFixture(deploy);
        await contract.tokenURI(20);
    });
    it("test", async function () {
        const { owner, contract, acct1, acct2, acct3 } = await loadFixture(deploy);
        await contract.connect(owner).setOpensea(owner.address);
        await contract.connect(owner).setOpenseaSale(owner.address);
        await contract.connect(owner).transferFrom(acct1.address, acct2.address, 20);
        await owner.sendTransaction( { to: contract.address, value: ethers.utils.parseEther("0.1") } );
        // console.log(await contract.tokenURI(20));
        console.log(await contract.tokenURI(0));
        // console.log(await contract.tokenURI(0));
        // console.log(await contract.tokenURI(21));
        //console.log(await contract.stringETHint(BigNumber.from("-10008000000000000000")));
    });
});
