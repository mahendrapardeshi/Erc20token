const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erc20 smart contract testing", function () {
  let token;
  let accounts;
  // this line will take input in str formatand convert to ether/wei format.
  const amount = ethers.utils.parseEther("1");
  before(async () => {
    const contract = await ethers.getContractFactory("ICO");
    token = await contract.deploy();
    accounts = await ethers.getSigners();
    await token.deployed();
  });

  it("assign initial balance", async function () {
    const totaSupply = await token.totalSupply();
    expect(await token.balanceOf(accounts[0].address)).to.equal(totaSupply);
  });

  it("Don't have permission to mint token", async function () {
    const wallet = token.connect(accounts[1]);
    await expect(wallet.mint(accounts[2].address, amount)).to.be.reverted;
  });

  it("Don't have permission to mint token", async function () {
    const wallet = token.connect(accounts[1]);
    await expect(wallet.burn(accounts[2].address, amount)).to.be.reverted;
  });

  it("Buy token with ether", async function () {
    const wallet = token.connect(accounts[2]);
    const option = { value: amount }; // amount we are passing from - ethers.utils.parseEther("1");
    const calculate = option.value.mul(1000); // 1000 is declared in smart contract
    await wallet.buy(option);
    expect(await wallet.balanceOf(accounts[2].address)).to.equal(calculate);
  });
});

// account 2 - is empty in the begining
// once you buy a certain amt of erc20
