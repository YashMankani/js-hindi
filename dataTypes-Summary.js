// Primitive

// 7 Types = String, Number, Boolean, BigInt, Symbol, Null, Undefined

const Name = "Swastik"

const Age = 14

let isLoggedIn = true

const UserNum = 84837298569865895n

const userId = Symbol(24474)
const anotherUserId = Symbol(24474)

// console.log(userId === anotherUserId);

let outSideTemp = null

let userEmail;

// console.log(outSideTemp)

// Non-Primive/ Reference Type
 
// Arrays, Objects, Functions

const heroes = ["shaktimaan", "Naagraj", "Doga"] // Arrays

let myObj = {
    name: "Swastik",
    age : 14
} // Object

// Function
let myFunction = function() {
    console.log("Hello World");
}

// Typeof
console.log(typeof Name);
console.log(typeof Age);
console.log(typeof UserNum);
console.log(typeof userId);
console.log(typeof outSideTemp);
console.log(typeof userEmail);

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);