"use strict";

// SQUARE ROOT
// --------------------------------------------------------------------

// Find square root of a number
console.log(Math.sqrt(25));

// Find square root of a number
console.log(25 ** (1 / 2));

// Find cubic root of a number
console.log(8 ** (1 / 3));

// MIN & MAX
// --------------------------------------------------------------------

console.log(Math.max(2, 30, 18, 64, 16));
console.log(Math.max(2, 30, "18", 64, 16));
console.log(Math.max(2, 30, "18rem", 64, 16)); // will not work, result NaN

console.log(Math.min(2, 30, 18, 64, 16));
console.log(Math.min(2, 30, "18", 64, 16));
console.log(Math.min(2, 30, "18rem", 64, 16)); // will not work, result NaN

// RANDOM NUMBERS
// --------------------------------------------------------------------

// generate random number between(min and max) -> in this example -> 10-20
// this means 11 random possibilities [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// Math.floor(Math.random() * (max - min)) generates 10 random nums but we need 11 so + 1
// Math.floor(Math.random() * (max - min + 1)); generates random nums from 0-10 but we want 10-20 so we do + min

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomInt(10, 20));

// ROUNDING INTEGERS

// trunc - simply removes decimal part
console.log(Math.trunc(10.2));
console.log(Math.trunc(10.5));
console.log(Math.trunc(10.8));

// floor - will always round down
console.log(Math.floor(10.2));
console.log(Math.floor(10.5));
console.log(Math.floor(10.8));

// ceil - will always round up
console.log(Math.ceil(10.2));
console.log(Math.ceil(10.5));
console.log(Math.ceil(10.8));

// round - round to nearest integers
console.log(Math.round(10.2));
console.log(Math.round(10.5));
console.log(Math.round(10.8));

// NOTE: trunc, floor, ceil and round all do type coercion
console.log(Math.round("23.4"));

console.log(Math.trunc(-23.3)); // removes decimal part so -23
console.log(Math.floor(-23.3)); // will round down to -24

// ROUNDING DECIMALS
// --------------------------------------------------------------------

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));

console.log((2.345).toFixed(2));
console.log(+(2.344).toFixed(2));
