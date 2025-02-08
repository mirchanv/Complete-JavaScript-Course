/* 
  Falsy values : 0, "", undefined, null, NaN
  And ofcourse the actual boolean value false is also a FALSY VALUE
*/

// Example 1 : falsy value 0
const balance = 0;
if (balance) {
  console.log(`You have a balance of : £${balance} left!`);
} else {
  console.log("You do not have any balance left!"); // this will execute
}

// Example 2 : falsy value ""
if ("") {
  console.log("I am true");
} else {
  console.log("Empty strings are falsy values!"); // this will execute
}

// Example 3 : falsy value undefined
let age;
if (age) {
  console.log(`Age : ${age}`);
} else {
  console.log("undefined is falsy value!"); // this will execute
}

// Example 4 : falsy value null
let person = null;
if (person) {
  console.log(person);
} else {
  console.log("null is a falsy values!"); // this will execute
}

// Example 5 : falsy value NaN
let name = Number("Vishal"); // this will result in NaN
if (name) {
  console.log(name);
} else {
  console.log("NaN is a falsy values!"); // this will execute
}

console.log(1 + false); // 1
console.log(1 + true); // 2
