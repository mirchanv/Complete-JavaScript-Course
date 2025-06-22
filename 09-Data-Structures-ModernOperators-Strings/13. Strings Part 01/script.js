"use strict";

const airline = "Tap Air Portugal";
const plane = "A320";

// reading character of a string
console.log(plane[0]); // A
console.log(plane[1]); // 3

// getting character of a string directly from a string literal
console.log("B737"[1]); // 7

// length property of strings
console.log(airline.length);

// indexOf() - to find find first occurrence of a particular chartacter in a string and return its index
console.log(airline.indexOf("r"));

// lastIndexOf() - to find find last occurrence of a particular chartacter in a string and return its index
console.log(airline.lastIndexOf("r"));

// slice(startIndex)
// slice(startIndex, endIndex)
// NOTE: If we only specify the startIndex and not the endIndex then it will extract everything from the specified startIndex (inclusive) till the end of the string, and if both startIndex and endIndex are specified then it will extract characters within that range where startIndex is inclusive and endIndex is exclusive.

// Examples
console.log(airline.slice(4)); // "Air Portugal"
console.log(airline.slice(0, 4)); // "Tap"
console.log(airline.slice(0, 8)); // "Tap Air "

// NOTE: we can also use -ve numbers in the slice() but th eindex starts with -1 from right to left

console.log(airline.slice(-8)); // "Portugal"
console.log(airline.slice(-8, -4)); //"Port"

// Write a function to check if a given seat is a middle seat
// Seats {A B C || D E F}

const checkMiddleSeat = function (seat) {
  if (seat.slice(-1) == "B" || seat.slice(-1) == "E") {
    console.log(`Seat ${seat} is a middle seat 😒`);
  } else {
    console.log(`Wohooo! ${seat} is not a middle seat 😎`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
