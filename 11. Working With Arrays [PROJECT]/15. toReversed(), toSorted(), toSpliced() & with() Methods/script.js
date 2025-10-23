"use strict";

// reversing an array without mutating the original array using toReversed()
const nums = [10, 20, 30, 40, 50];
const numsReversed = nums.toReversed();
console.log("nums:", nums);
console.log("numsReversed:", numsReversed);

// sorting an array in ascending order without mutating the original array using toSorted()
const names = ["Akshay", "Vishal", "Jonas", "Oliver"];
const namesSorted = names.toSorted();
console.log("names:", names);
console.log("namesSorted:", namesSorted);

// removing element(s) from an array without mutating the original array using toSpliced()
const allColors = ["red", "blue", "green", "yellow", "purple", "brown"];
const colorsInStore = allColors.toSpliced(3, 2);
console.log("allColors:", allColors);
console.log("colorsInStore:", colorsInStore);

// updating a particular index with a new value without mutating the original array using with()
const hobbies = ["basketball", "football", "cricket", "hockey"];
const myHobbies = hobbies.with(3, "Wrestling");
console.log("hobbies:", hobbies);
console.log("myHobbies:", myHobbies);

// NOTE: all of the above methods are known as non destructive methods. They do not mutate/change the array we are working with.
