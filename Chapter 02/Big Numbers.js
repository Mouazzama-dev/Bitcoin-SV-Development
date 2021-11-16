//Creating a big number and performing basic arithmetic with it
var bsv = require ('bsv')
// Generate a random hex number with bsv
var hex = bsv.Random.getRandomBuffer(32)
// Display hex number 
hex
//Displays : 
// <Buffer 00 d9 2a 1b 8e dd 13 d4 ff 49 e8 a4 5d 5f ff 06 40 22 f8 1d 58 e3 6b a2 49 9e 92 84 24 0a 01 a7>
// Display in string format
hex.toString('hex')
// Displays : '00d92a1b8edd13d4ff49e8a45d5fff064022f81d58e36ba2499e9284240a01a7'
//_____________________________________________________________________________
// Creating a variable big number using hex values shown above
var bn = bsv.Bn.fromBuffer(hex)
bn.toString()
// Displays : '383696429367326028821109100504432478931051162465186501110963416701204038055' 
//converting bn to base 16 should give the same value as the original value of hex
bn.toString(16)
//Displays : 'd92a1b8edd13d4ff49e8a45d5fff064022f81d58e36ba2499e9284240a01a7'
//Adding 1 to a big number 
let bx = bsv.Bn
bn.add(new bx(1)).toString()
'383696429367326028821109100504432478931051162465186501110963416701204038056'
// Similarly most of the arithmetic functions are possible in such manner.
let n = bx(5)
let m = bx(6)
console.log(n.add(m))
// Displays : <BN: b>
// other operations possible are mul, sub, div, mod and invm (modulus and inverse modulus)
