import { ethers } from "hardhat";

async function main() {
  const Factory = await ethers.getContractFactory("TokenTimelockFactory");
  const factory = await Factory.deploy();

  const receipt = await factory.deployTransaction.wait();
  console.log(`TokenTimelockFactory deployed to ${receipt.contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
