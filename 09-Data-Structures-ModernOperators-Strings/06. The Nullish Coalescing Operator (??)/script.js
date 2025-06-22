"use strict";

const JohnsMarks = {
  english: 76,
  compSci: 80,
  math: 68,
  physics: 70,
  biology: 0,
};

const biologyMarks = JohnsMarks.biology ?? "NA";
console.log("biologyMarks:", biologyMarks);

const address = {
  country: "USA",
};

// The below is same as:
// address.country  = address.country ?? "India";
// Since country is not null or undefined country remains as USA
address.country ??= "India";

// trying to define city key which is not yet defined - in this case the city is undefined therefore it will NEW YORK as value
address.city ??= "NEW YORK";

console.log("address:", address);

// tricky example
// nullish falsy values are: null/undefined that means false is a truthy value and hence false is returned
const isTall = false;
console.log(isTall ?? "You should jump more!");
