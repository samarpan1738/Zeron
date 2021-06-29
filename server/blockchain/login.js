const bip39 = require("bip39js");
const ethers = require("ethers");

function getEntropy() {
	return bip39.genEntropy(128);
}

function createEthereumAccount() {
	// GENERATE MNEMONIC
	const mnemonic = bip39.genMnemonic(getEntropy());

	// GET PRIVATE KEY
	let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
	const privateKey = mnemonicWallet.privateKey;

	// GET ADDRESS
	const address = mnemonicWallet.address;

	return { address, privateKey, mnemonic };
}

function getAccountFromMnemonic(mnemonic) {
	try {
		if (!bip39.validMnemonic(mnemonic)) {
			error = "Invalid Mnemonic.";
			return error;
		}
	} catch (err) {
		error = "Invalid Mnemonic.";
		return error;
	}

	//Path for extra accounts
	//path = "m/44'/60'/0'/0/0"

	// Get Private Key
	let wallet = ethers.Wallet.fromMnemonic(mnemonic);
	const privateKey = wallet.privateKey;

	// Get Address
	const address = wallet.address;

	return { address, privateKey, mnemonic };
}

function createAccounts() {
	console.log(createEthereumAccount());
}

function getAccountByMnemoics(_stringOfMnemonics) {
	console.log(getAccountFromMnemonic(_stringOfMnemonics));
}


module.exports = { createEthereumAccount };
//console.log(getAccountFromMnemonic('season system maze street yellow current clap lion pretty old comic crack'));// Sample Mnemonic

//sample account created

//address: '0xBa97e35fc5D7250199D709d4CBF53Ed32e8aF4B1',
// privateKey: '0xe29db1ed6e8102b672ac0337deca4f81261164909fd869f4ffd0aea64d03706e',
// mnemonic: 'season system maze street yellow current clap lion pretty old comic crack'
