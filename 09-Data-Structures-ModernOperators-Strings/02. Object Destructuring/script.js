"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

// extracting object property values using object.propertyName
// const firstname = person.firstname;
// const lastname = person.lastname;
// const age = person.age;

// console.log("firstname:", firstname);
// console.log("lastname:", lastname);
// console.log("age:", age);

// object destructuring
const { firstname, lastname, age } = person;

console.log("firstname:", firstname);
console.log("lastname:", lastname);
console.log("age:", age);

const {
  firstname: myFirstname,
  lastname: myLastname,
  age: myAge = 100,
  language = "Hindi",
} = person;

console.log("myFirstname:", myFirstname);
console.log("myLastname:", myLastname);
console.log("myAge:", myAge);
console.log("language:", language);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Yay! Order Received 🎉
 Starters:
  - ${this.starterMenu[starterIndex]}
 Mains:
  - ${this.mainMenu[mainIndex]}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },
};

// object destructuring of restaurant object
const { name, categories, openingHours } = restaurant;
console.log("Name:", name);
console.log("Categories:", categories);
console.log("Opening Hours:", openingHours);

// Renaming variables by reference their actual property
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log("restaurantName:", restaurantName);
console.log("hours:", hours);
console.log("tags:", tags);

// setting default value for property that doesnt exist
const { dessertMenu = [] } = restaurant;
console.log(dessertMenu);

// Mutating variables
let x = 999;
let y = 888;
console.log("x:", x);
console.log("y:", y);

const obj = {
  a: 10,
  b: 20,
  c: 30,
};

({ a: x, b: y } = obj);
// ({ a, b } = obj); this will work if x was named a and y was named b
console.log("x:", x);
console.log("y:", y);

// Destructuring nested objects
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;

console.log("open:", open);
console.log("close:", close);

restaurant.orderDelivery({
  time: 22.3,
  address: "Via Del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// Another example:
const university = {
  name: "Gerogia Tech",
  founder: "Vishal Mirchandani",
  founded: 1921,
  courses: {
    compSci: {
      courseName: "Bachelors of Computer Science",
      duration: 3,
      mode: "FT",
    },
    AdvMath: {
      courseName: "Master in Advanced Mathematics",
      duration: 2,
      mode: "PT",
    },
  },
};

// Destruct and get property values of compSci course
let {
  courses: {
    compSci: { courseName, duration, mode },
  },
} = university;

duration = duration === "FT" ? "Full-Time" : "Part-Time";

console.log("Details of course compSci");
console.log("  * courseName:", courseName);
console.log("  * duration:", duration, "years");
console.log("  * studyMode:", mode);
