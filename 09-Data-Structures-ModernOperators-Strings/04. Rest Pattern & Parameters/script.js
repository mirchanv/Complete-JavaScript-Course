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

  orderPizza: function (mainIntgredient, ...additionalToppings) {
    if (additionalToppings.length === 0) additionalToppings = "None";

    console.log(
      `Pizza Order Confirmed 🎉 \n -> mainIntgredient: ${mainIntgredient} \n -> additionalToppings: ${additionalToppings}`
    );
  },
};

const [a, b, ...remainingNums] = [1, 2, 3, 4, 5];
console.log("a:", a);
console.log("b:", b);
console.log("remainingNums:", remainingNums);

// storing pizza and risotto dish into variables names bestseller1 and bestseller2 and storing all other menu items into a array named menu
const [bestseller1, , bestseller2, ...menu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log("bestseller1:", bestseller1);
console.log("bestseller2:", bestseller2);
console.log("menu:", menu);

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log("sat:", sat);
console.log("weekdays:", weekdays);

// rest parameters
const add = function (...nums) {
  console.log("nums:", nums);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(2, 3, 5, 7));
console.log(add(3, 5, 1));

// Another example
const addCopy = function (a, b, ...nums) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("nums:", nums);

  let sum = a + b;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(addCopy(10, 20, 2, 1, 5, 6));

restaurant.orderPizza("Cheese");
restaurant.orderPizza("Cheese", "Ham", "Mushrooms", "Olives");
