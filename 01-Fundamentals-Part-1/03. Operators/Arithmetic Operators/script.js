// 03 Operators - Mathematical / Arithmetic operators
const currentYear = 2025;
const birthYear = 1990;
const myAge = currentYear - birthYear;

console.log(myAge);

const x = 10;
const y = 5;

// basic arithmetic operators
const addResult = x + y;
const subtractResult = x - y;
const multiplyResult = x * y;
const divideResult = x / y;
const remainderResult = x % y; // this returns the raminder after dividing x by y
const exponentResult = x ** y; // this means x^y

console.log("addResult       =", addResult);
console.log("subtractResult  =", subtractResult);
console.log("multiplyResult  =", multiplyResult);
console.log("divideResult    =", divideResult);
console.log("remainderResult =", remainderResult);
console.log("exponentResult  =", exponentResult);
console.log("5^2             =", Math.pow(y, 2)); // using in-built JS function

// + operator can also be used for string concatenation
const firstName = "Tiger";
const lastName = "Scott";
const fullName = firstName + " " + lastName;
console.log("firstName :", firstName);
console.log("lastName  :", lastName);
console.log("fullName  :", fullName);
