import { ethers } from "ethers";

const TEST_PK = '0x38c81b822d4bad5052935ff69a7315424a5890ed800dd5fd94439eb369a2b17f';
const RETH_URL = 'http://localhost:8545';

async function main() {
    const provider = new ethers.JsonRpcProvider(RETH_URL);
    provider.pollingInterval = 100;
    const wallet = new ethers.Wallet(TEST_PK, provider);

    while (true) {
        const tx = await wallet.sendTransaction({
            to: wallet.address,
            value: 1
        });
        await tx.wait();
        console.log(tx.nonce);
    }
}

main();
