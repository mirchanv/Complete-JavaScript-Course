"use strict";

// the find() method just like the filter() takes a callback function and we write a condition
// the find() method returns the first element that satisfies the condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((amount) => amount < 0);

console.log("movements:", movements);
console.log("firstWithdrawal:", firstWithdrawal);
