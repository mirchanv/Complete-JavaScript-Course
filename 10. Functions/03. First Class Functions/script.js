"use strict";

greet();
// sayHello(); // error sayHello not a function

// HOISTING biggest diffrence between function statement and function expression.

// during memory creation phase greet as has been allocated some memory and greet() is assigned to greet. But incase of a function expression the sayHello is treated like any other variable and it is assigned undefined initially until it reaches line:19 where we are assigning a function to sayHello variable.

// function statement aka function declaration
function greet() {
  console.log("Namaste 🙏🏽");
}

greet();

// function expression - assigning a function into a variable
// functions act as a value
var sayHello = function () {
  console.log("Hello");
};

sayHello();

// passing functions as args example
const weatherReport = function (param1) {
  console.log(param1);
  param1();
};

function getWeather() {
  console.log("Today will be 20 degrees!");
}

// passing functions as args
weatherReport(getWeather);
weatherReport(function () {
  console.log("Hello there!");
});

// example of returning a function from a function
const x = function () {
  return function () {};
};

console.log(x());

const y = function () {
  return function xyz() {};
};

console.log(y());
