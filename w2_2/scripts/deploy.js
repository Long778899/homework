const { ethers, network, artifacts } = require("hardhat");
require('hardhat-abi-exporter');

const { writeAbiAddr } = require('./artifact_saver.js');

async function main() {
  // await hre.run('compile');
  const Score = await ethers.getContractFactory("Score");
  const signer = await ethers.getSigner()
  const address = await signer.getAddress()
  console.log('deployer address:', address)
  const score = await Score.deploy();
  await score.deployed();
  // tx.wait();

  console.log("Counter deployed to:", score.address);

  // let Artifact = await artifacts.readArtifact("Score");
  // await writeAbiAddr(Artifact, counter.address, "Score", network.name);
  // console.log(`Please verify: npx hardhat verify ${counter.address}` );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
