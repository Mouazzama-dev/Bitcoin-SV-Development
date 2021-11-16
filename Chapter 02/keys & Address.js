var bsv = require('bsv');
const { Console } = require('console');
// const { Console } = require('console');

// var privKey = new bsv.PrivKey().fromRandom();
// //Private keys associated with compressed public keys are 52 characters and start with a capital L or K on mainnet 
// console.log(privKey.toString());
// console.log(privKey.toWif())
// //big number 
// console.log(privKey.bn.toString())
// //Compressed or not
// console.log(privKey.compressed)

// //method to create an a key and address from a random text
// console.log("\nMethod to create an a key and address from a random text\n")

// var value = Buffer.from('Bitcoin is a Peer to Peer Electronic cash system');
// var hash = bsv.Hash.sha256(value);
// console.log("hash : ")
// console.log(hash)
// var bn = bsv.Bn.fromBuffer(hash);
// console.log("bn : ")
// console.log(bn)

// pKey = new bsv.PrivKey().fromBn(bn);
// console.log("from bn : " , pKey.toString())

// console.log(pKey)
// //Displays : 
// // PrivKey {
// //  Constants: { versionByteNum: 128 },
// //  bn: <BN: 6d88fa113491fd265b3ebf3937fb642b7d28c003b280258d114cdf432e6b2380>
// // }
// //Private key for testnet
// let testPrivKey = bsv.PrivKey.Testnet.fromRandom()
// console.log("testnet : " ,testPrivKey.toString())


// const mnemonic = new bsv.Bip39().fromRandom().toString()
// console.log(mnemonic.toString())

// //Generating seed from a known mnemonic 
// const seed = new bsv.Bip39().fromString(mnemonic).toSeed()
// console.log(seed)

// var hdPrivateKey = new bsv.Bip32().fromSeed(seed)
// console.log(hdPrivateKey.toString())

console.log("\nPublic Keys")
//Creating the private key first for which public key will be generated
var privKey = new bsv.PrivKey().fromRandom()
//console.log(privKey)
console.log("Private Key : " ,privKey.toString())
var pubKey = new bsv.PubKey().fromPrivKey(privKey)
console.log("Public Key dervied from Private Key :",pubKey.toString())
// OR if you want to generate from random a completely new key 
var pKey = new bsv.PubKey().fromPrivKey(new bsv.PrivKey().fromRandom())
console.log("Public key " , pKey.toString())
console.log("X : " ,pubKey.point.getX().toString())
// Displays : <BN: 25024429404274683307723848468507134330306190587966059268061713966295827995361>
console.log("Y : " , pubKey.point.getY().toString())
// Displays : <BN: 49916097293361671059444439154399854403146888634252091017903759413376579472114>

// establishing the equation P = p G
var G = bsv.Point.getG()
var pubCalc = G.mul(privKey.bn).toString()
console.log(pubCalc.toString())

console.log(pubKey.toBuffer().length)
// Displays : 33 (32 is the length of Pub Key and 1 last bytes represents if compressed or not)

// uncompressed public key is a combination of X coordinate value, Y coordinate value and an extra byte saying it is uncompressed making it 32 + 32 + 1 = 65 bytes
console.log(pubKey.toHex())
// Displays : '023753533aa34616518e7ee51a1ae4ab72232929ce8cbdb265915c0cc871c1dae1'
console.log(pubKey.compressed)
// Displays : true
// Creating an uncompressed public key
var pubk = new bsv.PubKey(pubKey.point, false)
console.log(pubk.toHex())
// Displays:
//'043753533aa34616518e7ee51a1ae4ab72232929ce8cbdb265915c0cc871c1dae16e5b8286fd0d964aea1a33eb914ccef3ba7c33d0e46adebbc50ce8279a0f0af2'
console.log(pubk.toBuffer().length)
// Displays: 65