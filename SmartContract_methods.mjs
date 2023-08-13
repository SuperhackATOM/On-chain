import { ethers } from "ethers";
import { config as loadEnv } from 'dotenv';
import { promises } from "fs";
const fsPromises = promises;
loadEnv();

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ABI_FILE_PATH = './ABI/ATOM.json'
const OP_CONTRACT_ADDRESS = "";
const BASE_CONTRACT_ADDRESS = "";
const ZORA_CONTRACT_ADDRESS = "";
const my_address = "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1";
const jaden_address = "0xb2d1BAa5fD0Ba77a6060D2D494a82EC025dA82EF";
const infuraKey = process.env["INFURA_API_KEY"];


async function getAbi(){
    const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    //console.log(abi);
    return abi;
}

const abi = await getAbi();

async function main(network){
    let provider;
    let CONTRACT_ADDRESS
    if(network === "op"){
        provider = ethers.getDefaultProvider("https://optimism-goerli.infura.io/v3/" + infuraKey);
        CONTRACT_ADDRESS = OP_CONTRACT_ADDRESS;
    }
    else if(network === "base"){
        provider = ethers.getDefaultProvider("https://goerli.base.org");
        CONTRACT_ADDRESS = BASE_CONTRACT_ADDRESS;
    }
    else if(network === "zora"){
        provider = ethers.getDefaultProvider('https://testnet.rpc.zora.energy');
        CONTRACT_ADDRESS = ZORA_CONTRACT_ADDRESS;
    }
    else{
        console.log("Wrong network!!")
        return;
    }

    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const my_contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

    let id = 0; // _id
    const mint_tx = await my_contract.mintATOM(userAddress, id, 1, '0x0102');  // second argumnent is id
    return mint_tx;
}


