"use strict";

const fruits = ["bananas", "mangoes", "grapes"];

// normally to retrieve elements we do the following:
console.log(fruits[1]);

// now we can use the at(index) method to do the same:
console.log(fruits.at(1));

// getting the last element from array
console.log(fruits[fruits.length - 1]);
console.log(fruits.slice(-1)[0]);
console.log(fruits.at(-1));

// at() method also works on strings
console.log("Vishal".at(0));
console.log("Vishal".at(-1));
