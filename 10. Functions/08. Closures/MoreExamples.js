"use strict";

// EXAMPLE 1
let x;

const y = function () {
  const a = 23;
  x = function () {
    console.log(a * 2);
  };
};

// calling function y()
y();

// we can also call x() because x is global scoped and was reassigned to be a function when calling y() now function x remembers reference of variable a
x();

console.dir(x);

const h = function () {
  const b = 777;
  x = function () {
    console.log(b * 2);
  };
};

// calling function h()
h();

// we can also call x() because x is global scoped and was reassigned to be a function when calling h() now function x remembers reference of variable b
x();

console.dir(x);

// EXAMPLE 2
const boardPassengers = function (numPassengers, wait) {
  const perGroup = numPassengers / 3;

  setTimeout(function () {
    console.log(`We are now boarding ${numPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers!`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds.`);
};

boardPassengers(180, 3);

// NOTE: setTimeout function takes a callback function and a time in milliseconds. The callback function will be invoked exactly after the specified time in millinseconds. Here a closure is being created with the function itself and the scope of boardPassengers that have references to variables numPassengers and perGroup and wait.
