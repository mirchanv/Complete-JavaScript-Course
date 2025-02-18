"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  birthYear: 1990,
  job: "Student",
  friends: ["Bobby", "Molly", "Dolly"],
  hasDriversLicense: false,
  calcAge: function () {
    if (this.age) return this.age;
    console.log("calculating age...");
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  printThis: function () {
    console.log("this :", this); // proof that this keyword refered to the current object/object that is calling the function using this keyword
  },
  getSummary: function () {
    return `${this.firstname} ${
      this.lastname
    } is a ${this.calcAge()}-year old ${this.job}. ${this.firstname} has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license!`;
  },
};

// this keyword referes to the current object, so when we say this.birthYear internally JavaScript is looking for a key-property called birthYear in this current object itself.

console.log("person :", person);
console.log("age :", person.calcAge());
person.printThis();

console.log("age :", person.calcAge()); // should not calc age again
console.log("age :", person.calcAge()); // should not calc age again

// CHALLENGE - write a summary of the person object using string literals
console.log(person.getSummary());
