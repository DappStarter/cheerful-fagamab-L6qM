require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain slow guess arena flame service'; 
let testAccounts = [
"0x9ef4a0fc97992cb927981bece5a71a90d904efc8e9094f7ce7b05b133f8d09e0",
"0x3d4dae0ae1f1a0c62656f2eb2f226ee371ae0b02dda5b1131cdbec1d06b03137",
"0x8f06ff2e8bba6c336c624a203880c2807659b606e1a29450afc67cf44f27885f",
"0xba0158732dd5344e6328ca490ee6a44f8ea071c046bd4b1f093143d9bb5d2190",
"0x4ada1cf6fe1dc2a54449a5bd71277ad205044fe35abaa07f96b46a2be097d308",
"0x544f7cb1e5b6311e1eb20fcd9f7c532c0934c4a503fa885e7069533fb5d89d3d",
"0xec939c074799d16db44a5415e534f47b3ce8791a6dc6bcd6f7dc579bcfd15afe",
"0x7266e3d1a2a662bff960ec7b2cfddbb7f7fe7df791391c50c0a4b481cccc9958",
"0x907dfa32f019c0d5a5e1b9a5fd94fd871b6fa01869ef4069cb74588f3b31261f",
"0xa1ce94e91f841851b0db6cf513866bd399c0e1e2ba656d48e1d7ce197ec3a6e4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

