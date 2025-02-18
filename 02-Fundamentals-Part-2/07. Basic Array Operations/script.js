const fruits = ["mango", "grapes", "oranges"];
console.log("fruits[] :", fruits, "fruits.length =", fruits.length);

// push(element) - adds element to the END of the array with specified element and returns the new length
let newLength = fruits.push("banana");
console.log("fruits[] :", fruits, "fruits.length =", newLength);

// unshift(element) - adds element to the BEGINNING of the array with specified element and returns the new length
newLength = fruits.unshift("apples");
console.log("fruits[] :", fruits, "fruits.length =", newLength);

// pop() - removes and returns the LAST element of the array
let removedItem = fruits.pop();
console.log("removedItem :", removedItem);
console.log("fruits[] :", fruits, "fruits.length =", fruits.length);

// shift() - removes and returns the FIRST element of the array
removedItem = fruits.shift();
console.log("removedItem :", removedItem);
console.log("fruits[] :", fruits, "fruits.length =", fruits.length);

// indexOf(element) - returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log("fruits.indexOf('oranges')", fruits.indexOf("oranges"));
console.log("fruits.indexOf('apples')", fruits.indexOf("apples"));

// includes(element) determines whether or not a specified element is present in the array. If it is present the method returns true else it will return false.
console.log("fruits.includes('mango') :", fruits.includes("mango"));
console.log("fruits.includes('guava') :", fruits.includes("guava"));

// NOTE: includes() used strict equality
fruits.push(23);
console.log(fruits.includes("23")); // false since there is no coercion happening in strict equality

if (fruits.includes("oranges")) console.log("You like to eat oranges!");
