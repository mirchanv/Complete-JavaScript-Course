"use strict";

const arr = [5, 1, 3, 2, 6];

// 1. MAP METHOD

const result = arr.map(function (curr, index, arr) {
  return `${curr} found at index ${index}`;
});

console.log("result:", result);

// function to double a number
function double(x) {
  return x * 2;
}

// function to triple a number
function triple(x) {
  return x * 3;
}

// converting number to binary
function toBinary(x) {
  return x.toString(2);
}

let doubleArr = arr.map(double);
let tripleArr = arr.map((x) => x * 3);
let binaries = arr.map((x) => x.toString(2));

console.log("arr:", arr);
console.log("doubleArr:", doubleArr);
console.log("tripleArr:", tripleArr);
console.log("binaries:", binaries);

// 2. FILTER METHOD

// function to check if number is odd
function isOdd(x) {
  return x % 2 !== 0;
}

// function to filter out values > 4
function greaterThan4(x) {
  return x > 4;
}

const oddNums = arr.filter(isOdd);
const numsOver4 = arr.filter((x) => x > 4);

console.log("arr:", arr);
console.log("oddNums:", oddNums);
console.log("numsOver4:", numsOver4);

// 3. REDUCE

// find sum of array elements using reduce()
const sum = arr.reduce(function (acc, curr) {
  console.log(acc, curr);
  acc = acc + curr;
  return acc;
}, 0);

console.log("sum:", sum);

// find max number in an array using reduce()
const max = arr.reduce(function (currMax, curr) {
  currMax = Math.max(currMax, curr);
  return currMax;
}, -Infinity);

console.log("max:", max);

// find min number in an array using reduce()
const min = arr.reduce(function (currMin, curr) {
  currMin = Math.min(currMin, curr);
  return currMin;
}, Infinity);

console.log("min:", min);

// calculate sum of all even numbers in an array using reduce()
const sumEven = arr.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc = acc + curr;
  }
  return acc;
}, 0);

console.log("sumEven:", sumEven);

const users = [
  { firstname: "Akshay", lastname: "Saini", age: 26 },
  { firstname: "Vishal", lastname: "Mirchandani", age: 34 },
  { firstname: "Donald", lastname: "Trump", age: 75 },
  { firstname: "Jonas", lastname: "Smith", age: 42 },
  { firstname: "Jessica", lastname: "Davies", age: 26 },
  { firstname: "Deepika", lastname: "Mishra", age: 35 },
  { firstname: "Elon", lastname: "Musk", age: 35 },
];

const usernames = users.map((user) => {
  const { firstname, lastname } = user;
  const username = [firstname[0], lastname[0]].join("").toLowerCase();
  console.log(username);
});

const ages = users.reduce(function (map, user) {
  if (map[user.age]) {
    map[user.age] = map[user.age] + 1;
  } else {
    map[user.age] = 1;
  }
  return map;
}, {});

console.log(ages);

const names = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstname);

console.log(names);

const namesNew = users.reduce(function (names, currUser) {
  if (currUser.age < 30) {
    names.push(currUser.firstname);
  }
  return names;
}, []);

console.log(namesNew);

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map((amount) => amount * eurToUsd);
console.log("movementsUSD:", movementsUSD);
