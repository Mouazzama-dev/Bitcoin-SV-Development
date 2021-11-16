// Creating Point and using base point G with BSV library. You can access 
// points with bsv using object : bsv.crypto.Point
var bsv = require ('bsv')
bsv.Point
//Generating base point G
var G = bsv.Point.getG()
console.log(G)
// Displays: (among other things)
// x: <BN-R: 79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798>,
// y: <BN-R: 483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8>,

console.log(G.mul(bsv.Bn('2')))
// Displays:
// x: <BN-R: c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5>,
// y: <BN-R: 1ae168fea63dc339a3c58419466ceaeef7f632653266d0e1236431a950cfe52a>
// G is the base point and it can be used to create a Public key as P = p G
var hex = bsv.Random.getRandomBuffer(32)
var phex = bsv.Random.getRandomBuffer(32).toString('hex')
var p = bsv.Bn.fromBuffer(Buffer.from(phex, 'hex'))

console.log(p)
// Displays:
// <BN: 93d92d491c8da3432eaa920800db3ef00dde7112870a8f5019511b3657ecca79>
var P = G.mul(p)
console.log(P)
// Displays:
// x: <BN-R: ee09a76a8e8531a8995af7bef1e2888a36baf4ed0e6129df4218e4ebd6fbfc4e>,
// y: <BN-R: 6f50ca12a0ed39d6495fd2da38648d03646c21cf17f4dfd923ea8e9b9971f7d3>
P.getX()
// Displays: <BN: ee09a76a8e8531a8995af7bef1e2888a36baf4ed0e6129df4218e4ebd6fbfc4e>
P.getY()
// Displays: <BN: 6f50ca12a0ed39d6495fd2da38648d03646c21cf17f4dfd923ea8e9b9971f7d3>
