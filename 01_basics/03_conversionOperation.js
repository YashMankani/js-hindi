let score = "33abc"

// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number but actually it is not
// console.log(valueInNumber) // NaN (Not a Number)



score = null

// console.log(typeof(score));

valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number but actually it is not
// console.log(valueInNumber) // 0



score = undefined

// console.log(typeof(score));

valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number but actually it is not
// console.log(valueInNumber) // NaN (Not a Number)



score = true

// console.log(typeof(score));

valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number but actually it is not
// console.log(valueInNumber) // 1



score = false

// console.log(typeof(score));

valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number but actually it is not
// console.log(valueInNumber) // 0

// Notes:
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let isLoggedOut = 0

let booleanLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedOut = Boolean(isLoggedOut)

// console.log(booleanLoggedIn);
// console.log(booleanIsLoggedOut);


isLoggedIn = "Swastik"

isLoggedOut = ""

booleanLoggedIn = Boolean(isLoggedIn)
booleanIsLoggedOut = Boolean(isLoggedOut)

// console.log(booleanLoggedIn);
// console.log(booleanIsLoggedOut);

// "Swastik" => true
// "" => false

let someMumber = 33

let stringNumber = String(someMumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// *****************Operation*****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3); //power
// console.log(2/3); 
// console.log(2%3); //reaminder

let str1 = "Hello"
let str2 = " Swastik"

let product = str1 + str2

// console.log(product);

// console.log("2" + 1); // string
// console.log(2 + "1"); // string
// console.log("2" + 1 + 1); // string
// console.log(2 + 1 + "1"); // number leaving lat string

// console.log(1 + 2 * 3 % 4 / 5);

// pls, pls, pls, use parenthesis..

// console.log((1 + 2) * 3 % 4);

// console.log(+true); 
// console.log(+"");

let gameCounter = 100
++gameCounter; // prefix
console.log(gameCounter);

console.log(gameCounter);
gameCounter++; // postfix