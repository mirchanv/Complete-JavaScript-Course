"use strict";

const jessica = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 27,
  address: {
    city: "New York",
    country: "USA",
  },
};

const jessicaMarried = jessica;
jessicaMarried.lastname = "Davis";

console.log("Before:", jessica);
console.log("After:", jessicaMarried);

// shallow copy
// const jessicaShallowCopy = { ...jessica };
// jessicaShallowCopy.address.city = "Miami";

// deep copy
const jessicaDeepCopy = structuredClone(jessica);
jessicaDeepCopy.address.city = "Miami";

console.log("original :", jessica);
// console.log("shallow copy :", jessicaShallowCopy);
console.log("deep copy :", jessicaDeepCopy);
