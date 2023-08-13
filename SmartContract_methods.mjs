import { ethers } from "ethers";
import { config as loadEnv } from 'dotenv';
import { promises } from "fs";
const fsPromises = promises;
loadEnv();

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ABI_FILE_PATH = './ABI/ATOM.json'
const OP_CONTRACT_ADDRESS = "0x331e7DfD2699b5199DfC797e2232E78Cc05dfF76";
const BASE_CONTRACT_ADDRESS = "0x2BbCDdD17B209dC70493807F62a46a6F3F261072";
const ZORA_CONTRACT_ADDRESS = "0x2BbCDdD17B209dC70493807F62a46a6F3F261072";
const my_address = "0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1";
const jaden_address = "0xF7423cF85d8FD5944c4BB29c99844bB1995B7Bb3";
const infuraKey = process.env["INFURA_API_KEY"];


async function getAbi(){
    const data = await fsPromises.readFile(ABI_FILE_PATH, 'utf8');
    const abi = JSON.parse(data)['abi'];
    //console.log(abi);
    return abi;
}

async function mintATOM(userAddresses, contract) {  // array 
    let id = 0; // _id
    const mint_tx = await contract.mintATOM(userAddresses, id, '0x0102');  // second argumnent is id
    return mint_tx;
}

async function changeOwner(newOwner, contract) {  // address (string)
    const tx = await contract.transferOwnership(newOwner);  // second argumnent is id
    return tx;
}

async function balanceOf(account, contract){
    let id = 0; // _id
    const tx = await contract.balanceOf(account, id);  // second argumnent is id
    return tx;
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

    //const mint_tx = await mintATOM([my_address,jaden_address], my_contract);
    //console.log(mint_tx)
    const balance = await balanceOf(my_address, my_contract);
    console.log(balance);
    const change_tx =  changeOwner(jaden_address, my_contract);
}

main("zora");


