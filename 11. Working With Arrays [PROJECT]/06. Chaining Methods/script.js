"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

// chaining methods to find sum of all deposits
const totalDepositsUSD = movements
  .filter((amount) => amount > 0)
  .map((amount) => amount * eurToUSD)
  .reduce((totalDeposits, amount) => totalDeposits + amount, 0);

console.log(totalDepositsUSD);

// NOTE:
// Do not overuse chaining
// it is bad practice to chain methods that mutate the array itself
