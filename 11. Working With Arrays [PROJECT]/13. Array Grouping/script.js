"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("movements:", movements);

const groupedMovements = Object.groupBy(movements, (amount) =>
  amount > 0 ? "deposits" : "withdrawals"
);
console.log("groupedMovements:", groupedMovements);

("use strict");

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 200, -394],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [],
  interestRate: 0.7,
  pin: 3333,
  type: "standard",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const account5 = {
  owner: "Meech Meechi",
  movements: [100],
  interestRate: 1,
  pin: 5555,
  type: "standard",
};

const accounts = [account1, account2, account3, account4, account5];

const groupedByActivity = Object.groupBy(accounts, (acc) => {
  const movementCount = acc.movements.length;

  if (movementCount >= 10) return "very active";
  if (movementCount >= 5) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});

console.log("groupedByActivity:", groupedByActivity);

// const groupedByAccountType = Object.groupBy(accounts, (acc) => acc.type);

// using object destructing syntax
const groupedByAccountType = Object.groupBy(accounts, ({ type }) => type);
console.log("groupedByAccountType:", groupedByAccountType);
