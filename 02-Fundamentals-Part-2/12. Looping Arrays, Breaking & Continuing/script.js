"use strict";

const fruits = ["mangos", "oranges", "grapes"];

// looping through array, remember array indexing starts from 0
for (let index = 0; index < fruits.length; index++) {
  console.log(`Element at index ${index} : ${fruits[index]}`);
}

// Another example
const bobArr = ["Bob", "Miller", 33, true, ["Tom", "Harry", "Ron"]];

for (let index = 0; index < bobArr.length; index++) {
  console.log(bobArr[index], typeof bobArr[index]);
}

// Adding values to array via loops
const types = [];

for (let index = 0; index < bobArr.length; index++) {
  types[index] = typeof bobArr[index];
}

console.log("types :", types);

// alternatively we can use push() to add array elements which is a bit neater
const copyTypes = [];

for (let index = 0; index < bobArr.length; index++) {
  copyTypes.push(typeof bobArr[index]);
}

console.log("copyTypes :", copyTypes);

// another example
const birthYears = [1991, 2007, 1990, 1969, 2020];
const ages = [];

for (let index = 0; index < birthYears.length; index++) {
  ages.push(new Date().getFullYear() - birthYears[index]);
}

console.log("birthYears :", birthYears);
console.log("ages :", ages);

// continue is to exit the current iteration and continue to the next iteration
// bobArr = ["Bob", "Miller", 33, true, ["Tom", "Harry", "Ron"]];

for (let index = 0; index < bobArr.length; index++) {
  if (typeof bobArr[index] !== "string") continue;
  console.log(bobArr[index], typeof bobArr[index]);
}

// break is to break out of the loop completely
// for example when we find basketball we want print the index it is found at and break out of the loop

const sports = ["football", "tennis", "basketball", "golf", "hockey"];

for (let index = 0; index < sports.length; index++) {
  if (sports[index] === "basketball") {
    console.log(`${sports[index]} was found at index : ${index}`);
    break;
  }
  console.log(`not found at index : ${index}`);
}
