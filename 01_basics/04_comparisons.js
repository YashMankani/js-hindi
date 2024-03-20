// console.log(2 > 1);
// console.log(2 < 3);
// console.log(2 >= 1);
// console.log(2 <= 3);
// console.log(2 == 2);
// console.log(2 === 2);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log(2 > "1");
//the answer is correct but strictly prohibited in typeScript...

//confusing Comparisons
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// //same story with undefined:
// console.log(undefined > 0); // false
// console.log(undefined == 0);// false
// console.log(undefined >= 0); // false

// === > Strict check
// == > Equality check

console.log("2" == 2); // true
console.log("2" === 2); // false