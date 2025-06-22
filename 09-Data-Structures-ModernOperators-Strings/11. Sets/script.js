"use strict";

// creating a set without passing any iterable
const mySet = new Set();
console.log("mySet:", mySet);

// array
const nums = [2, 3, 94, 45, 2, 10, 3];

// creating a set by passing an iterable
const numSet = new Set(nums);
console.log("numSet:", numSet);

// creating a set by passing a string
const letters = new Set("Anna");
console.log("letters:", letters);

// adding elements to mySet
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3);
mySet.add("four");
mySet.add("four");

console.log("mySet:", mySet);

// checking size of sets
console.log("mySet size =", mySet.size);
console.log("numSet size =", numSet.size);

console.log(mySet.has(2));
console.log(mySet.has(99));
console.log(mySet.has("ten"));

const fruits = new Set(["bananas", "oranges", "mangoes", "grapes"]);

console.log("Original fruits set:", fruits);

// using delete() to delete oranges from set
fruits.delete("oranges");

console.log("After deletion fruits set:", fruits);

// creating a set
const studentIds = new Set(["S-111", "S-222", "S-333"]);

console.log("studentIds:", studentIds);

// using clear() to delete all items
studentIds.clear();

// verify no items in set by checking size
console.log("studentIds size =", studentIds.size);

// check actual set by logging it out
console.log("studentIds:", studentIds);

// creating a set
const menu = new Set(["Pasta", "Pizza", "Garlic Bread"]);

// looping over menu set
for (const item of menu) {
  console.log(item);
}

// USE CASE
const nums1 = [1, 2, 2, 22, 3, 3, 4, 4, 5, 5];

// remove duplicates by using a set
const newSet = new Set(nums1);

// getting all the unique values back into an array using the spread (...) operator
const cleanArr = [...newSet];
console.log("cleanArr:", cleanArr);

// -------------------------------------------
// New operations to make Sets useful!

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// getting only common foods
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("intersection:", commonFoods);
console.log([...commonFoods]);

// getting all foods without duplicates
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("union:", italianMexicanFusion);

// getting all unique italianFoods
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log("Unique Italian Foods:", uniqueItalianFoods);

// getting all unique mexican commonFoods
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log("Unique Mexican Foods:", uniqueMexicanFoods);

// getting all elements from both sets that are not common to both
// this is also the union of all uniqueItalianFoods and uniqueMexicanFoods
const allNotCommonFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(allNotCommonFoods);

// isDisjointFrom() - if two sets have nothing in common it returns true else returns false

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false

const evenNums = new Set([2, 4, 6, 8, 10]);
const oddNums = new Set([1, 3, 5, 7, 9, 11]);
console.log(evenNums.isDisjointFrom(oddNums)); // true
