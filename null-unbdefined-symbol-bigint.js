//null
const datoNull = null;

console.log(datoNull);
console.log(typeof datoNull);

//undefined
let name;

console.log(name);
//Symbol
const uniqueID = Symbol('id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(2);

console.log(symbol1 === symbol2);

const ID = Symbol('id');
let user = {}
user[ID] = '123';

console.log(user);

//BitInt
const bigNumer = 123123333333333333n;
console.log(bigNumer);

const numberBig = 1000000000000000000n;
console.log(numberBig);