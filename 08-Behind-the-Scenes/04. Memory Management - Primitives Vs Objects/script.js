"use strict";

const name = "Jonas";
const age = calcAge(1991);
let newAge = age;
newAge++;

const location = {
  city: "Faro",
  country: "Portugal",
};

const newLocation = location;
newLocation.city = "Lisbon";

console.log(location);
// { city: 'Lisbon', country: 'Portugal' }

function calcAge(birthYear) {
  const now = 2037;
  const x = now - birthYear;
  return x;
}

// The call stack and heap work together to manage the executions of our JavaScript code
// The call stack calls a function from the memory heap and after executing it removes it from the stack if unused.
// The removal of unused objects and functions in memory heap are managed by the Garbage Collector
