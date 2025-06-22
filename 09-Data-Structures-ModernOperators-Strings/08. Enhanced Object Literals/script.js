"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

// key shorthand
const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,
  address,

  // function shorthand
  getDetails() {
    console.log(
      `${this.firstname} ${this.lastname} is ${this.age} years old, who resides in ${this.address.city}, ${this.address.country}!`
    );
  },
};

console.log("person:", person);

// calling getDetails() function
person.getDetails();

const fri = "friday";
const weekdays = ["mon", "tue", "wed", "thu", "sat", "sun"];

const footballPracticeSchedule = {
  // ES6 computed property names : "mon"
  [weekdays[0]]: {
    start: 10,
    end: 12,
  },

  // ES6 computed property names : "wed" + "nesday" -> "wednesday"
  [weekdays[2] + "nesday"]: {
    start: 15,
    end: 18,
  },

  // ES6 computed property names : "friday"
  [fri]: {
    start: 12,
    end: 14,
  },
};

console.log("schedule:", footballPracticeSchedule);
