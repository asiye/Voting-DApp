# Voting DApp Backend

This is the backend part of a decentralized application (DApp) built on the Ethereum blockchain. The backend is developed using Node.js and Express, and it interacts with a smart contract deployed on a local Ethereum blockchain using Ganache.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Ganache](https://www.trufflesuite.com/ganache) (for local Ethereum blockchain)
- [Truffle](https://www.trufflesuite.com/truffle) (for compiling and deploying smart contracts)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Voting-DApp.git
cd Voting-DApp/backend

Install the necessary Node.js dependencies:
npm install

Ensure Ganache is running on http://localhost:7545. Then, compile and deploy the smart contract using Truffle:
truffle compile
truffle migrate

Start the backend server:
node server.js
