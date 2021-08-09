"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleStorageWrapper = void 0;
const SimpleStorageJSON = __importStar(require("../../../build/contracts/SimpleStorage.json"));
class SimpleStorageWrapper {
    constructor(web3) {
        this.web3 = web3;
        this.contract = new web3.eth.Contract(SimpleStorageJSON.abi);
    }
    get isDeployed() {
        return Boolean(this.address);
    }
    async getStoredValue(fromAddress) {
        const data = await this.contract.methods.get().call({ from: fromAddress });
        return parseInt(data, 10);
    }
    async setStoredValue(value, fromAddress) {
        const tx = await this.contract.methods.set(value).send({
            from: fromAddress
        });
        return tx;
    }
    async deploy(fromAddress) {
        const contract = await this.contract
            .deploy({
            data: SimpleStorageJSON.bytecode,
            arguments: []
        })
            .send({
            from: fromAddress
        });
        this.useDeployed(contract._address);
    }
    useDeployed(contractAddress) {
        this.address = contractAddress;
        this.contract.options.address = contractAddress;
    }
}
exports.SimpleStorageWrapper = SimpleStorageWrapper;
//# sourceMappingURL=SimpleStorageWrapper.js.map