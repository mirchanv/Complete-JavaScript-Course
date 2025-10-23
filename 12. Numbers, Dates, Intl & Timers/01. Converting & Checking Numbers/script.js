"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// All numbers in JS are iunterally represented/stored as floating point numbers
// there is only one data type for numbers in JS
console.log(23 === 23.0);

// Base 10 (numbers from 0-9)
// Base 2 (aka binary numbers) only 0's and 1's

// DIFFERENT WAYS OF WRITING A NUMBER
let num1 = 1000000000;
let num2 = 1_000_000_000; // js engine will ignore the _
let num3 = 1e9; // same as saying 1 * 10^9
console.log(num1, num2, num3);

// converting string to a number
console.log(Number("45"));
console.log(typeof +"45"); // adding plus in front of string will coerce the string to a number
console.log(+"45" + 5);

// parsing

// parseInt allows non-numeric characters, but it must start with a number
// 10 represent base number system 10
console.log(Number.parseInt("30px", 10));

console.log(Number.parseInt("e23", 10)); // NaN

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// isNan() to check if a value is a NaN (not a number)
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(20 / 0));

console.log("-----------------");

// better way of checking is a value is a number
console.log(Number.isFinite(20)); // true - it is a number
console.log(Number.isFinite("20")); // false - not a number
console.log(Number.isFinite(+"20")); // true
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(20 / 0)); // false

console.log("-----------------");

// to check if value is integer
console.log(Number.isInteger(3.5)); // false
console.log(Number.isInteger(3)); // true

console.log("-----------------");

// tricky example
console.log(23.0); // will print 23 not 23.0
console.log(Number.isInteger(23.0)); // true
