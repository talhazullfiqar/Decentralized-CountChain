# 🧮 Counter DApp

## 📝 Overview

This is a simple Counter DApp that allows users to add and subtract numbers and displays the current counter value. Built using modern web technologies, this project utilizes **Hardhat** for testing and development, **Next.js 14** for the frontend, and **Ethers.js v6** for connecting the frontend to the blockchain.

## ✨ Features

- ➕ **Add and Subtract Numbers**: Users can increment and decrement a counter value.
- 🏗️ **Local Blockchain**: Uses Hardhat Node for a simulated local blockchain environment.
- 💻 **User-Friendly Interface**: Built with Next.js to provide a seamless user experience.

## 🛠️ Tech Stack

- ⛓️ **Blockchain Development**: Hardhat
- 🌐 **Frontend Framework**: Next.js 14
- 🔗 **Blockchain Interaction**: Ethers.js v6

## 🚀 Getting Started

To get a copy of this project up and running on your local machine, follow these instructions:

### 📋 Prerequisites

- 🟢 Node.js (>= 14.x)
- 📦 npm or yarn

### ⚙️ Installation

1. **📂 Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/counter-dapp.git
   cd counter-dapp
2. **📥 Install dependencies:**
   ```npm
   npm install
3. **🚀 Start the Hardhat local blockchain:**
   ```npx
   npx hardhat node
4. **📜 Deploy the smart contract (in another terminal):**
   ```npx
   npx hardhat run scripts/deploy.js --network localhost
5. **▶️ Run the Next.js application:**
   ```npm
   npm run dev
6. **🌐 Open your browser:**
   - Navigate to http://localhost:3000 to interact with the DApp.
