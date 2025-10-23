"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements:", movements);

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
console.log("accounts:", accounts);

// 1. get total money deposited into the bank
const totalDeposits = accounts
  .flatMap((acc) => acc.movements)
  .filter((amount) => amount > 0)
  .reduce((total, currVal) => total + currVal, 0);
console.log("totalDeposits: ", totalDeposits);

// 2. count the number of deposits >= 1000
const numDeposits = accounts
  .flatMap((acc) => acc.movements)
  .filter((amount) => amount >= 1000);

console.log("total deposites of atleast 1000 :", numDeposits);

// 3. create an object which contains sum of deposits and sum of withdrawals made
const obj = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (bankObj, currAmount) => {
      currAmount > 0
        ? (bankObj.sumDeposits += currAmount)
        : (bankObj.sumWithdrawals += currAmount);
      return bankObj;
    },
    { sumDeposits: 0, sumWithdrawals: 0 }
  );
console.log("obj:", obj);

// 4.
const convertTitleCase = function (str) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const capitalize = (str) => str.at(0).toUpperCase() + str.slice(1);
  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("here is another title with an EXAMPLE"));
console.log(convertTitleCase("and here is another title"));
