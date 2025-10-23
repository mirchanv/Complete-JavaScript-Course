"use script";

let arr = ["a", "b", "c", "d", "e"];

// slice() method
console.log(arr.slice(2));
console.log(arr.slice(1, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); // everything from index 1 except the last 2
console.log(arr.slice());

// splice() method - mutates the original array
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

// reverse() method - mutates the original array
const arr2 = ["i", "h", "g", "f", "e"];
console.log(arr2.reverse());
console.log(arr2);

// concat()
arr = ["a", "b", "c", "d"];
const letters = arr.concat(arr2);
console.log("arr", arr);
console.log("arr2", arr2);
console.log("letters", letters);

// join()
console.log(letters.join(" - "));
