async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  const helloWorldDeployment = await HelloWorld.deploy("Hello World!");   
  console.log("Contract deployed to address:", helloWorldDeployment.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });