"use strict";

const numsDepth1 = [1, 2, 3, [4, 5, 6], [7, 8, 9]];

// flat() - flattens the array and by default it flattens the array to depth 1
let allNums = numsDepth1.flat();
console.log("allNums:", allNums);

const numsDepth2 = [1, [2, 3, [4, 5, 6], 7], 8, 9];

allNums = numsDepth2.flat();
console.log("allNums:", allNums);

allNums = numsDepth2.flat(2);
console.log("allNums:", allNums);

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// calculate total balance of all accounts in bank
const balance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

console.log("balance:", balance);

// NOTE: usually map and flat are used together in many scenarios hence JS combined the 2 methods and made flatMap(condition) which flattens the array (to default depth 1) returned by map condition.

// calculate total balance of all accounts in bank using flatMap()
const balance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log("balance:", balance2);
