var bsv = require('bsv')

//sha256 & sha256Ripemd160
console.log("\nsha256 & sha256Ripemd160 \n")
var hash1 = bsv.Hash.sha256(Buffer.from('Bitcoin is a global public blockchain')).toString('hex')
console.log("sha256 hash: " + hash1)
var hash2 = bsv.Hash.sha256Ripemd160(Buffer.from('Hashing is so much fun')).toString('hex')
console.log("sha256ripemd160 hash: " + hash2)



//Base 58 and Base 58 Check classes in BSV
console.log("\nBase 58 and Base 58 Check \n")
var string = "my random string"
var base58 = bsv.Base58.fromBuffer(Buffer.from(string)).toString()
console.log("Base 58: " + base58 )
var base58Check = bsv.Base58Check.fromBuffer(Buffer.from(string)).toString()
console.log("Base 58 Check: " + base58Check +"\n")


//To decode these we can simply use the same functions to decode
console.log("\nDecoding by Base 58 and Base 58 Check classes \n")
var base58 = 'EX4GGfMqowb3SahgwQS6bg'
var buf = bsv.Base58.fromString(base58).toBuffer()
console.log("Sring = " + buf.toString())
var base58check = '2XTb6Gp8zqqq1g5ED7YDsUXom9an'
var buf = bsv.Base58Check.fromString(base58check).toBuffer()
console.log("String = " + buf.toString())
