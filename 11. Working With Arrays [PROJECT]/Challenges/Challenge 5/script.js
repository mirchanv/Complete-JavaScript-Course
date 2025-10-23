"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((currDog) => {
  currDog.recFood = Math.floor(currDog.weight ** 0.75 * 28);
});

console.log("dogs:", dogs);

// 2.
const sarahsDog = dogs.find((currDog) => currDog.owners.includes("Sarah"));

console.log("sarahsDog:", sarahsDog);

const maxFood = Math.floor(sarahsDog.recFood * 1.1);
const minFood = Math.floor(sarahsDog.recFood * 0.9);
console.log(minFood, maxFood);

console.log(
  "sarahsDog is eating",
  sarahsDog.curFood > maxFood
    ? "too much food"
    : sarahsDog.curFood < minFood
    ? "less food"
    : "normal portions"
);

// 3.
const ownersTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood * 1.1)
  .flatMap((dog) => dog.owners);

console.log("ownersTooMuch", ownersTooMuch);

const ownersTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log("ownersTooLittle", ownersTooLittle);

// 4.
const strOwnersTooMuch = ownersTooMuch
  .join(" and ")
  .concat("'s dogs eat too much!");
console.log(strOwnersTooMuch);

const strOwnersTooLittle = ownersTooLittle
  .join(" and ")
  .concat("'s dogs eat too little!");
console.log(strOwnersTooLittle);

// 5.
console.log(
  dogs.some(
    (currDog) =>
      currDog.curFood > currDog.recFood * 0.9 &&
      currDog.curFood < currDog.recFood * 1.1
  )
);

// 6.
console.log(
  dogs.every(
    (currDog) =>
      currDog.curFood > currDog.recFood * 0.9 &&
      currDog.curFood < currDog.recFood * 1.1
  )
);

// 7.
const dogsEatingNormal = dogs.filter(
  (currDog) =>
    currDog.curFood > currDog.recFood * 0.9 &&
    currDog.curFood < currDog.recFood * 1.1
);

console.log("dogsEatingNormal:", dogsEatingNormal);

// 8.
const groupedByFood = Object.groupBy(dogs, (currDog) => {
  const maxFood = Math.floor(currDog.recFood * 1.1);
  const minFood = Math.floor(currDog.recFood * 0.9);

  if (currDog.curFood > maxFood) return "too-much";
  if (currDog.curFood > minFood) return "exact";
  return "too-little";
});

console.log("groupedByFood:", groupedByFood);

// 9.
const groupedByOwners = Object.groupBy(dogs, (currDog) => {
  return `${currDog.owners.length}-owners`;
});

console.log("groupedByOwners:", groupedByOwners);

// 10.
const sortedDogs = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log("dogs:", dogs);
console.log("sortedDogs:", sortedDogs);
