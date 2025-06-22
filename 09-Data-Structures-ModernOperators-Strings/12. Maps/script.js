"use strict";

// creating a map
const restaurant = new Map();

// adding alements to map using set(key, value)
restaurant.set("name", "Indian Fusion!");
restaurant.set(1, "Mumbai, India");
restaurant.set(2, "London, United Kingdom");
restaurant
  .set("categories", ["Indian", "Pan-Asian", "Non-Vegeterian"])
  .set("open", 10)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are close!");

console.log("restaurant:", restaurant);

// reading data from map using get(key) method
console.log(restaurant.get("name"));
console.log(restaurant.get(true));

const time = 24;
const status = restaurant.get(
  time >= restaurant.get("open") && time <= restaurant.get("close")
);
console.log(status);

// checking if a map contains a certain key using has(key) method
console.log(restaurant.has("categories")); // true
console.log(restaurant.has("menu")); // false

// deleting elements from map using delete(key) method
restaurant.delete(2);
console.log("restaurant:", restaurant);

// using set() method to update value of a certain key
console.log(restaurant.set(1, "Bangalore, India"));

// using clear() method to clear all entries in map and have empty map
// restaurant.clear();
// console.log(restaurant);

// getting the size of the map
console.log(restaurant.size);
