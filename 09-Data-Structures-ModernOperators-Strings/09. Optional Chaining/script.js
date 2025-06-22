"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};

// directly accessing nested properties
// const regNo = user1.vehicle.registrationNo;
// console.log("regNo received:", regNo);

// safely accessing nested properties
// const regNo = user2 && user2.vehicle && user2.vehicle.registrationNo;
// console.log("regNo received:", regNo);

// const regNo = user1?.vehicle?.registrationNo; // optional chaining
// console.log("regNo received:", regNo);

const regNo =
  user2?.vehicle?.registrationNo ?? "This user does not own a vehicle!"; // optional chaining and null operator
console.log("regNo received:", regNo);

// Methods
const car1 = {
  make: "Audi",
  model: "Q7",
  year: 2022,
  drive(speed) {
    return `${this.make} ${this.model} is driving at ${speed} km/h. Wroooom 🚗`;
  },
};

const car2 = {
  make: "Audi",
  model: "Q7",
  year: 2022,
};

console.log(car1.drive?.(80) ?? "drive() method does not exist!");
console.log(car2.drive?.(50) ?? "drive() method does not exist!");

// Optional chaining in arrays
const person = {
  name: "Joey",
  age: 19,
  school: "School of South East Asia",
  friends: ["Brian", "Mike", "Luna"],
  hobbies: [],
};

// optional chaining - first friend in friends array
console.log(person.friends?.[0] ?? "This person has no friends!");

// optional chaining - first hobby in hobbies array
console.log(person.hobbies?.[0] ?? "This person has no hobbies!");
