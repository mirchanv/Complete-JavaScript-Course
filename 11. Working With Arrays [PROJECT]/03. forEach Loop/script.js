"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const amount of movements) {
  amount > 0
    ? console.log(`You deposited ${amount}`)
    : console.log(`You withdres ${Math.abs(amount)}`);
}

// USING FOREACH LOOP
// the forEach method is a higher order function that takes a callback function as an argument and calls the callback function for every array iteration
movements.forEach(function (element, index, arr) {
  console.log(element, index, arr);
});
// calling function(200, 0, arr)
// calling function(450, 1, arr) etc...

movements.forEach(function (amount, index) {
  const action =
    amount > 0
      ? `Movement ${index + 1} : You deposited ${amount}`
      : `Movement ${index + 1} : You withdrew ${Math.abs(amount)}`;
  console.log(action);
});

movements.forEach(function (element) {
  const action =
    element > 0
      ? `You deposited ${element}`
      : `You withdrew ${Math.abs(element)}`;
  console.log(action);
});

// NOTE: we cannot use break in forEach loops
