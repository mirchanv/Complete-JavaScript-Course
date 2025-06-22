"use strict";

console.log("-------OR-------");

// 2 is a truthy value hence 2 is printed
console.log(2 || "Mike");

// "" is a falsy value so "Mike" is printed
console.log("" || "Mike");

// true is a truthy value hence true is printed
console.log(true || 0);

// both are falsy values but null is printed
console.log(undefined || null);

// OR || short circuit looks for the first true value in the list and returns that. If there is not a true value it returns the final value entered.

console.log(0 || "" || undefined || null); // prints 'null'
console.log(0 || "" || null || undefined); // prints 'undefined'
console.log(null || "" || undefined || 0); // prints '0'
console.log(null || "" || "hello" || undefined || 0); // prints 'hello'

// AND && short circuit looks:
// If the first value is truthy, the evaluation continues, and the last value will be selected.
// If the first value is falsy, the first value will be selected, and the rest of the expression won't be evaluated.

console.log("-------AND-------");

// first value is falsy hence it will be printed and the rest of the expression won't be evaluated.
console.log(0 && "Mike");

// first value is truthy, the evaluation continues, and the last value will be printed.
console.log(22 && "Mike");

// first value is truty, second value is truthy, third value is falsy which means this value will be printed and rest of the expression won't be evaluated
console.log(22 && "Mike" && undefined && true);

const restaurant = {
  orderPizza: function (mainIntgredient, ...toppings) {
    console.log(mainIntgredient);
    console.log(toppings);
  },
};

restaurant.orderPizza &&
  restaurant.orderPizza("Cheese", "Ham", "Mushroom", "Spinach");
