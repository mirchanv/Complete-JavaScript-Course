// 02. Data Types

// NOTE: typeof operator returns a string indicating the type of the operand's value

// Number
let todaysTemp = 23;
let balance = 1002.34;

console.log(typeof todaysTemp, todaysTemp);
console.log(typeof balance, balance);

// String
let username = "topcoder";
let greet = "Wishing you a pleasant Day!";

console.log(typeof username, username);
console.log(typeof greet, greet);

// Boolean
let isAdult = false;
let isLoggedIn = true;

console.log(typeof isAdult, isAdult);
console.log(typeof isLoggedIn, isLoggedIn);

// Undefined
let salary;
console.log(typeof salary, salary);

// Null
let person = null;
console.log(typeof person, person);

/* 
  NOTE JS BUG:
  In the earlier version of JavaScript, values are stored in 32 bits, where the first 3 bits indicate the data type and the rest represents the value. For an object, the first three bits are 000. Null in JavaScript means nothing or void so it gets represented as all 0. Hence, the weird bug.
*/
