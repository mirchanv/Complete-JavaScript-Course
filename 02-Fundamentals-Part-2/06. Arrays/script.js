const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// creating arrays
const friends = ["Michael", "Steven", "Peter"];
const fruits = new Array("Mango", "Banana", "Apple");

console.log("friends[] :", friends);
console.log("fruits[] :", fruits);

// reading values from arrays through their index, where indexing of arrays start from 0
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// length of array - number of array elements
console.log("friends[] length :", friends.length);
console.log("fruits[] length  :", fruits.length);

// getting the last element of array using length property
console.log("Last friend in the friends[] : ", friends[friends.length - 1]);
console.log("Last fruit in the fruits[] : ", fruits[fruits.length - 1]);

// replace/update a specific index
friends[2] = "Jay";

console.log("friends[] :", friends);

// Exercise
const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const birthYears = [1990, 1992, 1987];
const ages = [];

ages[0] = calcAge(birthYears[0]);
ages[1] = calcAge(birthYears[1]);
ages[2] = calcAge(birthYears[2]);

console.log("ages[] :", ages);
