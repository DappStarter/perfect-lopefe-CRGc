require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth random unlock grace creek equal ghost'; 
let testAccounts = [
"0x587886d6df3565c657ee8e81e66e7aa57974a367e4057d0b02891642400202f3",
"0xef5a8f17b783bd61caba78975f41f66c465fb83a74e53fb7a593bcd11f13f8bd",
"0xb6601adb69ca8834cfa2e2d8f78ac498d5e46f37ea9f4f0e8c875f45d064cb01",
"0x3b59191308ea7438f81d101daabf13e24588995fe815a193b3569a293877e328",
"0x28d76fd4f0e6d4269f4f9d6ecf06cb037ea99f83fd435f6ec0e0207225e6164c",
"0xfa4651d42ad01f05c710cd0a22bacda2169e0f48a82b6be3cb40aefd9916c9dd",
"0xd87c21cde297d8ff1e7b2af6660d9ee6174b535e53340efeba547ba3d26f6766",
"0x8c081f079077944fa7e5086c6c322763d8bb4a8cbd9896e4912893820dbcaebb",
"0x31d433ea91e8c42d95fd2934ddc089de2152d1cf60f093b6446e039234781fa8",
"0xf3ffc5ca50069672a7b887aa75c4a86e09ae54cea0650454297c29bbada06bbb"
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

