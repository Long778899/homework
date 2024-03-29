const { ethers, network, artifacts } = require("hardhat");
require('hardhat-abi-exporter');


const { writeAbiAddr } = require('./artifact_saver.js');


const contantJson = require('./contants.json');

async function main() {
  // await hre.run('compile');
  const Counter = await ethers.getContractFactory("Bank");
  const initVal = contantJson[network.name];
  const signer = await ethers.getSigner()
  const address = await signer.getAddress()
  console.log('deployer address:', address)

  console.log(initVal);
  console.log(initVal.INIT);

  const counter = await Counter.deploy();


  await counter.deployed();
  // tx.wait();

  console.log("Bank deployed to:", counter.address);

  let tx = await counter.count();
  await tx.wait();

  let Artifact = await artifacts.readArtifact("Bank");
  await writeAbiAddr(Artifact, counter.address, "Bank", network.name);

  console.log(`Please verify: npx hardhat verify ${counter.address}` );

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });




  