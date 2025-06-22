"use strict";

const person = ["Vishal", "Mirchandani", 34];

// extracting array elements using their indexes and storing them into variables
const firstname = person[0];
const lastname = person[1];
const age = person[2];

console.log("firstname:", firstname);
console.log("lastname:", lastname);
console.log("age:", age);

// array destructuring
const [myFirstname, myLastname, myAge] = person;
console.log("myFirstname:", myFirstname);
console.log("myLastname:", myLastname);
console.log("myAge:", myAge);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// only extracting the first 2 array elements from categories arr
// const [firstCategory, secondCategory] = restaurant.categories;
// console.log("firstCategory:", firstCategory);
// console.log("secondCategory:", secondCategory);

// only extracting the first and third array elements from categories arr
const [firstCategory, , thirdCategory] = restaurant.categories;
console.log("firstCategory:", firstCategory);
console.log("thirdCategory:", thirdCategory);

// destructing from a functions return value
const [starter, main] = restaurant.order(2, 0);
console.log("myStarter item:", starter);
console.log("myMain item:", main);

// destructuring nested arrays
const nums = [2, 4, [5, 6]];

// extracting 2, 5, and 6
const [two, , [five, six]] = nums;
console.log("two:", two);
console.log("five:", five);
console.log("six:", six);

const animal = ["Kangaroo", "Mammal"];

// default values in destructing
const [animalName, type, origin = "Australia"] = animal;
console.log("animalName:", animalName);
console.log("type:", type);
console.log("origin:", origin);
