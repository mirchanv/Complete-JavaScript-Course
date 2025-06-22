"use strict";

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

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(`Yay! Order Received 🎉
 Starters:
  - ${this.starterMenu[starterIndex]}
 Mains:
  - ${(this, this.mainMenu[mainIndex])}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta iw now being cooked with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
};

const arr = [7, 8, 9];

// bad approach
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log("badNewArr:", badNewArr);

// good approach
const newArr = [1, 2, 3, ...arr];
console.log("newArr:", newArr);

// logging out individual elements of newArr using spread operator
console.log(...newArr);

// creating a newMenu array from existing one
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log("newMenu:", newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log("mainMenuCopy:", mainMenuCopy);

// join arrays together
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("fullMenu:", fullMenu);

const name = "Vishal";

// using spread operator to get all letters individually
const letters = [...name];
console.log("letters:", letters);

// const intgredients = [
//   prompt("Let's make pasta! Intgredient 1?"),
//   prompt("Intgredient 2?"),
//   prompt("Intgredient 3?"),
// ];

// // calling orderPasta bad way
// // restaurant.orderPasta(intgredients[0], intgredients[1], intgredients[2]);

// // calling orderPasta good way using spread operator
// restaurant.orderPasta(...intgredients);

// spread operator on objects
const newRestaurant = {
  founder: "Franco Zane",
  foundedIn: 1933,
  ...restaurant,
};

console.log("restaurant:", restaurant);
console.log("newRestaurant:", newRestaurant);

// copying a object using spread operator
const restaurantCopy = { ...restaurant };

// renaming the restaurant for restaurantCopy
restaurantCopy.name = "Italiano Shabamo!";

console.log("restaurantCopy.name = ", restaurantCopy.name);
console.log("restaurant.name = ", restaurant.name);

// spread operator with nested objects
const person = {
  name: "Helen",
  age: 23,
  address: {
    city: "New York",
    country: "USA",
  },
};

const personCopy = {
  ...person,
};

console.log(person);
console.log(personCopy);

personCopy.address.city = "Miami";
console.log(person);
console.log(personCopy);
