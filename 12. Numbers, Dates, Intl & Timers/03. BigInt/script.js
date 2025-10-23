"use strict";

// BigInt is a primitive data type
// BigInt values represent integer values which are too high or too low to be represented by the number primitive.

// max safe integer using Number data type
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// BigInt can store any number we want, adding n to the end of the number tranform it to BigInt type
let myBigNum = 90071992547409919007199254740991n;
console.log(typeof myBigNum, myBigNum);

// we can also create BigInt like this:
// the value being passed it may be a string, an integer, a boolean, or another BigInt.
console.log(BigInt("90071992547409919007199254740991"));

// operations on BigInt
console.log(10000n + 10000n);

// NOTE: we cannot mix bigint with regular number types
// console.log(10000n * 2);

console.log(20n === 20); // strict quality check for value and type bigint and number type not same so false
console.log(20n == 20); // true since value 20n will be coerced to number type and value are same
console.log(20n > 15); // can mix bigint and number type for comparison

// NOTE: strict quality no type coercion, loose equality type coercion

// division with bigint - cuts the decimal part off
console.log(10n / 3n);
console.log(5n / 2n);

// when using + for concatenating bigint and string, the bigInt is converted to a string
let huge = "90071992547409919007199254740991n";
let output = huge + " is a very HUGE number!";
console.log(typeof output, output);

// NOTE: bigint not used very much but good to know about it and how it works.
