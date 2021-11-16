var bsv = require('bsv');
let BN = bsv.crypto.BN;
let n = BN.fromNumber(5);
let m = BN.fromNumber(6);
console.log(n.add(m));
