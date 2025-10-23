"use strict";

// Sorting strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

// NOTE: the sort() method changes the actual array we are sorting

// Sorting nums
const nums = [2, 7, 10, 32, 4, 8, 3];

// if our callback function returns < 0 that means a should be sorted before b
// if our callback function returns > 0 that means b should be sorted before abs
// if our callback function returns == 0 that means a and b are same numbers

// Ascending order
nums.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(nums);

// Descending order
nums.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(nums);

// Ascending order
nums.sort((a, b) => a - b);
console.log(nums);

// Descending order
nums.sort((a, b) => b - a);
console.log(nums);
