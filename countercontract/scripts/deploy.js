const hre = require("hardhat");

async function main() {
    // Get the contract to deploy
    const Counter = await hre.ethers.getContractFactory("Counter");

    // Deploy the contract
    console.log("Deploying the contract...");
    const counter = await Counter.deploy();

    // Wait for the contract deployment to be completed
    await counter.waitForDeployment();

    // Output the contract address
    const contractAddress = await counter.getAddress();
    console.log("Counter contract deployed to:", contractAddress);
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});
