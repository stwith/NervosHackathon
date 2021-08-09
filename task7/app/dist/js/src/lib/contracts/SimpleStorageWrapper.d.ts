import Web3 from 'web3';
import { SimpleStorage } from '../../types/SimpleStorage';
export declare class SimpleStorageWrapper {
    web3: Web3;
    contract: SimpleStorage;
    address: string;
    constructor(web3: Web3);
    get isDeployed(): boolean;
    getStoredValue(fromAddress: string): Promise<number>;
    setStoredValue(value: number, fromAddress: string): Promise<import("web3-core").TransactionReceipt>;
    deploy(fromAddress: string): Promise<void>;
    useDeployed(contractAddress: string): void;
}
