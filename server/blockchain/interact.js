const TX = require("ethereumjs-tx");
const Web3 = require("web3");

var providerURL =
    "https://rinkeby.infura.io/v3/e72daeeafa5f4e8cae0110b45fed3645";
const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));

var ContractAddress = "0xDD808B42049c076D88447993313E6bD08eAF92D1";

const _interface = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_initialSupply",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_reduceSupply",
                type: "uint256",
            },
        ],
        name: "DecreaseSupply",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "_newSupply",
                type: "uint256",
            },
        ],
        name: "IncreaseSupply",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "request",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "balances",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_newaddress",
                type: "address",
            },
        ],
        name: "changeowner",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "ownerAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
];
var zeron = new web3.eth.Contract(_interface, ContractAddress); //deployed address

//////////////////////////////////////////////////////////////////////////////////////////////////////////ACCOUNTS USED////////////

const account1 = "0x273C249b8bE25a88aDe9ec182655Af6ae263C58a";
const account2 = "0xF7C17c02428CcC44a35725DfDe473cCA2c4393ff";
const account3 = "0xf158F22ec9ef60A64F83Cf2BD59F6b5554E9caC4";
const account4 = "0x63580a35A6B6Da5c13c1Bf9c62C51FbCe64c806F";

const privateKey1 = new Buffer.from(
    "d126dd29ecae53e923d3b59b2e4b8281b447bd18bd81dc4e9890fd559f1525fb",
    "hex"
);
const privateKey2 = new Buffer.from(
    "60d4a93d45c1b890b340db0fbc9ce48afedcee22f71433812828e5c8e8f7774c",
    "hex"
);
const privateKey3 = new Buffer.from(
    "1d74031771cabab38b07d31937bdcf279c712f0e2f358c1072bc0cf27898e004",
    "hex"
);
const privateKey4 = new Buffer.from(
    "7958cb545ad3be8ad142a8f632c7c7cc5c8bc18bdd098f69998ee026e4fa525a",
    "hex"
);

//////////////////////////////////////////////////////////transcation function for game////////////////////////////////////////////
async function runCode(data, account, privateKey, deployedAddress) {
    var count = await web3.eth.getTransactionCount(account);
    //console.log(count);
    var Price = await web3.eth.getGasPrice();

    var txData = {
        nonce: web3.utils.toHex(count),

        gasLimit: web3.utils.toHex(2500000),

        gasPrice: web3.utils.toHex(Price * 1.4),

        to: deployedAddress,

        from: account,

        data: data,
    };

    var run_code = new TX(txData, { chain: "rinkeby" });

    run_code.sign(privateKey); //change here

    const serialisedrun_code = run_code.serialize().toString("hex");

    const result = await web3.eth.sendSignedTransaction(
        "0x" + serialisedrun_code
    );
    console.log(result);
}

//////////////////////////////////////////////////////////////////////////////interact with game functions //////////////////////////////////////////

async function Transfer(_to, value, account, privateKey, deployedAddress) {
    ///transfer stars from self to other
    try {
        var data = await zeron.methods.transfer(_to, value).encodeABI();
        console.log(data);
        await runCode(data, account, privateKey, deployedAddress);
    } catch (err) {
        throw { message: "ERROR : Token not transferred using transfer" };
    }
}

async function TransferFrom(
    _from,
    _to,
    value,
    account,
    privateKey,
    deployedAddress
) {
    ////transfer stars from other to someone else account ///approval needed
    try {
        var Transferred = await zeron.methods
            .transferFrom(_from, _to, value)
            .encodeABI();
        await runCode(Transferred, account, privateKey, deployedAddress);
    } catch (err) {
        throw { message: "ERROR : Token not transferred using transferFrom" };
    }
}

async function getbalance(_address) {
    // PARAMS 	: address
    // returns	: total stars account is holding
    try {
        var balance = await zeron.methods.balanceOf(_address).call();
        console.log(balance);
        return balance;
    } catch (err) {
        throw { message: "ERROR : Balance not retrieved" };
    }
}
async function approve(address, amount, account, privateKey, deployedAddress) {
    try {
        var data = await zeron.methods.approve(address, amount).encodeABI();
        await runCode(data, account, privateKey, deployedAddress);
    } catch {
        throw { message: "ERROR: Unable to approve the user" };
    }
}

module.exports = {
    approve,
    getbalance,
    Transfer,
    TransferFrom,
    account1,
    account2,
    account3,
    account4,
    privateKey1,
    zeron,
    ContractAddress,
};
