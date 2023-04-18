const { expect } = require("chai");
const hre = require("hardhat");

describe("Spacebear", () => {
  it("token minted?", async () => {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy();
    const [owner, otherAccount] = await ethers.getSigners();
    await spacebearInstance.safeMint(owner.address, "spacebear_1.json");
    expect(await spacebearInstance.ownerOf(0)).to.equal(owner.address);
  });
});
