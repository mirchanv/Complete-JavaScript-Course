"use strict";

// MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Sterling Pounds"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// SET
const currenciesUnique = new Set(["USD", "EUR", "GBP"]);

// NOTE: sets do not have keys and indexes
// _ is convention for a variable that is completely unnecessary
currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});
