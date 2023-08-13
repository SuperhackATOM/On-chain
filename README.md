# ATestation Of Meet

Custom schemas and contracts were created and deployed on 3 chains: Optimism Goerli, Zora Goerli and Base Goerli.

## Schemas
- Optimism Goerli: https://optimism-goerli-bedrock.easscan.org/schema/view/0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872

- Base Goerli: https://base-goerli.easscan.org/schema/view/0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872

- Sepolia: https://sepolia.easscan.org/schema/view/0x22cc8bd78942a630e45ac11521b9d126675b9e1958c5a269cdbda9c2749dd872

## Contracts 
- Optimism Goerli: https://goerli-optimism.etherscan.io/address/0x331e7DfD2699b5199DfC797e2232E78Cc05dfF76

- Base Goerli: https://testnet.explorer.zora.energy/address/0x2BbCDdD17B209dC70493807F62a46a6F3F261072

- Zora Goerli: https://testnet.explorer.zora.energy/address/0x2BbCDdD17B209dC70493807F62a46a6F3F261072

### The repository contains contracts, deployment scripts, ABI, methods for contract manipulation, EAS GraphQL API calls and EAS SDK scripts.

### Structure

- ABI folder contains ATOM contract ABI

- Migrations folder contains deployment scripts

- Contracts folder contains Optimism compatible contracts

- EAS folder has scripts to create attestations and retrieve data about them from EAS

## Basic Commands

The following commands can be run:

 To compile:
 ```
 npm run compile:ovm
 ```

 To migrate:
 ```
 npm run migrate:ovm --network=(ganache | optimistic_ethereum | optimistic_goerli | dashboard)
 ```

 To test:
 ```
 npm run test:ovm --network=(ganache | optimistic_ethereum | optimistic_goerli | dashboard)
 ```

 To run a script:
 ```
 npm run exec:ovm script --network=(ganache | optimistic_ethereum | optimistic_goerli | dashboard)
 ```