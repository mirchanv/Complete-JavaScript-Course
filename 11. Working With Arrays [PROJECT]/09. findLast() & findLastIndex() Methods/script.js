"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements:", movements);

const lastWithdrawal = movements.findLast((amount) => amount < 0);
console.log("lastWithdrawal:", lastWithdrawal);

const latestLargeMovement = movements.findLastIndex(
  (amount) => Math.abs(amount) > 2500
);

console.log(
  `You latest large movement ${
    movements.length - latestLargeMovement
  } movements ago!`
);
