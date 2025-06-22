"use strict";

const print = function (value) {
  console.log(value);
};

// higher order function that accepts a function as a paramter
function calculateSum(num1, num2, printFn) {
  const sum = num1 + num2;

  // invoking the funtion
  printFn(sum);
}

// callback function
calculateSum(10, 20, print);

// Another example

// definition of callback function
const ISBNFormatter = function (isbn) {
  console.log(`Inside ISBNFormatter(), formatting your ISBN...`);
  return isbn.replaceAll(/ /g, "-");
};

// higher order function
const transformer = function (isbn, format) {
  console.log(`Inside transformer(), received ISBN = ${isbn}`);
  console.log(`Calling ${format.name} from transformer()`);
  console.log(`Formatted ISBN: ${format(isbn)}`);
};

// callback function
transformer("978 0 306 40615 7", ISBNFormatter);

// final example
const friends = ["jonas", "Martha", "Adam"];

// callback function definiton
const greet = function () {
  console.log("Hello my friend 👋");
};

// forEach is the higher order function which takes in a function as argument and calls it for even array item. Since we have 3 friends in the array, it will call the greet() 3 times.
friends.forEach(greet);
