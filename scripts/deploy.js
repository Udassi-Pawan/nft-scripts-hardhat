(async () => {
  const Spacebear = await hre.ethers.getContractFactory("Spacebear");

  const spacebearInstance = await Spacebear.deploy();

  await spacebearInstance.deployed();

  console.log("deployed at: ", spacebearInstance.address);
})();
