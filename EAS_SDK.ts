import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

const infuraKey = process.env["INFURA_API_KEY"];
let chain: string  = "OP";
let network : string = "";
export let EASContractAddress: string;

if (chain === "Base"){ // Base 
    EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
    network = ""; 
} 
else { // OP
    EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
    network = "https://optimism-goerli.infura.io/v3/"; 
}

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.getDefaultProvider(
    network, 
    { infura: infuraKey }
);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider as any);