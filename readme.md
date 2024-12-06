# Starknet Frontend Workshop

Welcome to my version of a Starknet workshop! This guide walks you through building a Starknet frontend application using NextJS, StarknetJS v6, and Starknet-react hooks. It’s designed for developers with basic React and TypeScript knowledge who want to dive into Starknet frontend development.

## Prerequisites

Before starting, make sure you have the following:
•	Node.js (v14 or later) and npm installed. You can download them here.
•	A basic understanding of TypeScript and React.
•	Familiarity with Starknet Foundry.

## Getting Started

### Starknet Foundry

This workshop includes a Starknet Foundry repository with a sample smart contract. Here’s what it does:
•	Increase balance: Adds to the contract’s balance (emits an event).
•	Get balance: Retrieves the current balance.
•	Reset balance: Resets the balance to zero (restricted to the contract owner).

If you want to deploy your own contract instance, you can use sncast to declare and/or deploy it. Alternatively, you can use an existing instance.

### Next.js App

The web directory contains a frontend application built with Next.js. It uses the starknet-react template, updated to support StarknetJS v6. Recent updates include:
•	Compatibility with the latest Starknet JS and Starknet-react versions.
•	Full TypeScript support for type-safe development.

To get started:
1.	Navigate to the web directory.
2.	Copy .env.template to .env.local and fill in the required values.
3.	Install dependencies:

`npm install`


4.	Start the development server:

`npm run dev`


5.	Open http://localhost:3000 in your browser.

## Troubleshooting

If you encounter any issues, check the GitHub Issues for solutions or open a new one if needed.

Contributing

Want to improve or extend this workshop? Here’s how:
1.	Fork the repository.
2.	Clone your fork locally.
3.	Create a new branch for your changes (git checkout -b feature/YourFeature).
4.	Commit your changes (git commit -m "Add YourFeature").
5.	Push your branch (git push origin feature/YourFeature).
6.	Open a Pull Request.
