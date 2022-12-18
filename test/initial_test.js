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

  it("you dont have permission to withdraw ether from contract", async function () {
    const wallet = token.connect(accounts[2]);
    await expect(wallet.withdraw(amount)).to.be.reverted;
  });

  it("transfer amount to destination account", async function () {
    await token.transfer(accounts[1].address, amount);
    expect(await token.balanceOf(accounts[1].address)).to.equal(amount);
  });

  it("Can not transfer above the amount", async function () {
    const wallet = token.connect(accounts[3]);
    await expect(wallet.transfer(accounts[1].address, 1)).to.be.reverted;
  });

  it("Do not transfer from an empty account", async () => {
    const wallet = token.connect(accounts[3]);
    await expect(wallet.transfer(accounts[1].address, 1)).to.be.reverted;
  });

  it("Test Minting token", async () => {
    const before_mint = await token.balanceOf(accounts[0].address);
    await token.mint(accounts[0].address, amount);
    const after_mint = await token.balanceOf(accounts[0].address);
    expect(after_mint).to.equal(before_mint.add(amount));
  });

  it("Test burn token", async () => {
    const before_burn = await token.balanceOf(accounts[0].address);
    await token.burn(accounts[0].address, amount);
    const after_burn = await token.balanceOf(accounts[0].address);
    expect(after_burn).to.equal(before_burn.sub(amount));
  });

  it("Test Withdraw token", async function () {
    const before_withdraw = await accounts[0].getBalance();
    await token.withdraw(amount);
    const after_withdraw = await accounts[0].getBalance();
    expect(before_withdraw.lt(after_withdraw)).to.equal(true);
  });

  it("Don't have enough ehter to buy token", async () => {
    const wallet = token.connect(accounts[3]);
    const big_amount = ethers.utils.parseEther("9999");
    const option = { value: big_amount };
    let error;
    try {
      await wallet.buy(option);
    } catch (err) {
      error = "Sender does not have enough funds";
    }
    expect(error).to.equal("Sender does not have enough funds");
  });
});

// account 2 - is empty in the begining
// once you buy a certain amt of erc20
