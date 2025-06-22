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
};

// using the spread operator to get all individual elements from starterMenu and mainMenu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("menu:", menu);

// iterating over the menu array using for of loop
for (const currentItem of menu) {
  console.log(currentItem);
}

// using array entries() method to get index values
for (const currentItem of menu.entries()) {
  console.log(`${currentItem[0] + 1} : ${currentItem[1]}`);
}

for (const currentItem of menu.entries()) {
  console.log(currentItem);
}

console.log([...menu.entries()]);

// using array entries() method to get index values with destructing
for (const [itemNo, item] of menu.entries()) {
  console.log(`${itemNo + 1} : ${item}`);
}
