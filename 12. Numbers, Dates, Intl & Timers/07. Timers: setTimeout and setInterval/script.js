"use strict";

const intgredients = ["olives", "eggs"];
let i = 10;

// setTimeout simply registers the callback function and attaches a timer to it. Once time is elapsed the function executes.
const pizzaTimer = setTimeout(
  (item1, item2) => {
    console.log(`Here is your pizza with ${item1} and ${item2} 🍕`);
    console.log("i", i);
  },
  3000,
  ...intgredients
);

i = 300;

console.log("I will be executed first!");

// if we do not want to execute the timer then we havve store it in a variable and use the clearTimeout function

// now pizzaTimer will not execute becasue if condition evaluates to true
if (intgredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval for running a function over and over again

// printing date every second
setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  console.log(`${hour}:${min}:${sec}`);
}, 1000);
