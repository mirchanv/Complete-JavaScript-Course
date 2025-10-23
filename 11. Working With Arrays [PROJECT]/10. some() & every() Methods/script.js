"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// SOME - returns true if any elements in array satisfies the condition else returns false
const anyDeposits = movements.some((amount) => amount > 0);
console.log("anyDeposits:", anyDeposits);

const anyWithdrawals = movements.some((amount) => amount < 0);
console.log("anyWithdrawals:", anyWithdrawals);

const anyDepositsGreaterThan5000 = movements.some((amount) => amount > 5000);
console.log("anyDepositsGreaterhan5000:", anyDepositsGreaterThan5000);

const anyWithdrawalsGreaterThan500 = movements.some((amount) => amount < -500);
console.log("anyWithdrawalsGreaterThan500:", anyWithdrawalsGreaterThan500);

// EVERY - returns true if all elements in array satisfies the condition else returns false
const allDeposits = movements.every((amount) => amount > 0);
console.log("allDeposits:", allDeposits);
