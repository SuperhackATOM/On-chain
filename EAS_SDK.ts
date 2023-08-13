import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import { load } from 'ts-dotenv';
//import { useWalletClient } from 'wagmi';
import { SCHEMAS } from './EAS/Schema';


const env = load({
    INFURA_API_KEY: String,
    WALLET_PRIVATE_KEY: String
});

const infuraKey = env.INFURA_API_KEY;
const PRIVATE_KEY = env.WALLET_PRIVATE_KEY;
let chain: string  = "OP";
let network : string = "";
export let EASContractAddress: string;
const jaden_address = "0xF7423cF85d8FD5944c4BB29c99844bB1995B7Bb3";

if (chain === "Base"){ // Base 
    const BaseEASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
    network = "https://goerli.base.org"; 
} else if (chain === "Zora"){ //Sepolia
    EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
    network: ''
}
else { // OP
    EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
    network = "https://optimism-goerli.infura.io/v3/"; 
}

const BaseEASContractAddress = "0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A";
const OPEASContractAddress = "0x4200000000000000000000000000000000000021"
// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(OPEASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const zoraProvider = ethers.getDefaultProvider('https://testnet.rpc.zora.energy');
const opProvider = ethers.getDefaultProvider("https://optimism-goerli.infura.io/v3/" + infuraKey);
const baseProvider = ethers.getDefaultProvider("https://goerli.base.org");
//const {data: wagmiSigner} = useWalletClient();
const signer = new ethers.Wallet(PRIVATE_KEY, opProvider);
// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(signer as any);

const location = "Seoul";
const context = "ETHSEOUL Hackathon";
const schemaEncoder = new SchemaEncoder("bool ATestationOfMeet, string location, string context");
const encoded_data = schemaEncoder.encodeData([
    { name: "ATestationOfMeet", type: 'bool', value: true },
    { name: "location", type: "string", value: location }, 
    { name: "context", type: "string", value: context }
]);

const tx = eas.attest({
    data: {
        recipient: jaden_address,
        data: encoded_data,
        refUID: ethers.constants.HashZero,
        revocable: false,
        expirationTime: 0n
    },
    schema: SCHEMAS.ATOM_SCHEMA
})

console.log(tx)