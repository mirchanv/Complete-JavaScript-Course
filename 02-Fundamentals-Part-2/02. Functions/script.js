"use strict";

// Function
function logger() {
  console.log("My name is Vishal");
}

// calling /running / invoking the logger function
logger();
logger();
logger();

// function with parameters with no return value
function greet(name) {
  console.log(`Hello ${name}, have a great day!`);
}

// calling /running / invoking the greet function
greet("Tiger");

// functions with parameters and return value
function fruitProcessor(fruit1, fruit2) {
  console.log(`Preparing your ${fruit1} ${fruit2} juice...`);
  return `Enjoy your juice with ${fruit1} and ${fruit2}`;
}

// calling / running / invoking fruitProcessor function with arguments  and capturing the return value of the fruitProcessor function
const appleBananaJuice = fruitProcessor("apple", "banana");
console.log(appleBananaJuice);

const appleOrangeJuice = fruitProcessor("apple", "orange");
console.log(appleOrangeJuice);
