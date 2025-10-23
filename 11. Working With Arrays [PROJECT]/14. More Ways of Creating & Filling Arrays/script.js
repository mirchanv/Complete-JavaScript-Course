"use strict";

// Ways to create arrays

// defining an array literally
const fruits = ["mango", "grape", "banana"];
console.log("fruits:", fruits);

// using new keyword
const nums = new Array(1, 2, 3, 4, 5);
console.log("nums:", nums);

// using new keyword but passing a single number.
// The below will create an empty array of size 5.
const x = new Array(5);
console.log("x:", x);

// to fill an empty array we should use fill() method
x.fill(1);
console.log("x:", x);

// fill the array with 2 starting from 3rd index till end
x.fill(2, 3);
console.log("x:", x);

// fill the array with 99 starting from 1st index(inclusive) till 4th index(exlusive)
x.fill(99, 1, 4);
console.log("x:", x);

// Array.from()
const y = Array.from({ length: 5 }, () => 1);
console.log(y);

// creating a same array like fruits using Array.from()
const fruitsCopy = Array.from(
  { length: fruits.length },
  (curr, i) => fruits[i]
);
console.log("fruitsCopy:", fruitsCopy);

// creating an array like nums using Array.from()
// remember underscore _ is used to denote we are not using that parameter
const numsCopy = Array.from({ length: nums.length }, (_, i) => i + 1);
console.log("numsCopy:", numsCopy);

// Exercise generate 100 random dice rolls
const diceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log("diceRolls:", diceRolls);

// a more real use-case
const allMovements = document.querySelectorAll(".movement-value");
// allMovements.map((el) => el.textContent.replace("£", ""));

// creating an array from a nodelist which is like an array like structure
const allMovementsArr = Array.from(allMovements, (el) =>
  Number(el.textContent.replace("£", ""))
);

console.log(allMovements);
console.log(allMovementsArr);
