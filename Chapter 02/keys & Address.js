var bsv = require('bsv')

var privKey = new bsv.PrivKey().fromRandom();
console.log(privKey.toString());
console.log(privKey.toWif());

// Private Key is a big number. Display the actual big number 
console.log("Private Key in a Big number format " + privKey.bn.toString());

// compressed or not check 
console.log(privKey.compressed);