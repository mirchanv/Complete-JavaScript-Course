"use strict";

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// 1
const huskyWeight = breeds.find((dog) => dog.breed === "Husky").averageWeight;

console.log("huskyWeight:", huskyWeight);

// 2
const dogBothActivities = breeds.filter(
  (dog) =>
    dog.activities.includes("fetch") && dog.activities.includes("running")
)[0].breed;

console.log("dogBothActivities:", dogBothActivities);

// 3
const allActivities = breeds.flatMap((dog) => dog.activities);
console.log("allActivities:", allActivities);

// 4
const mySet = new Set(allActivities);
const uniqueActivities = [...mySet];

console.log("uniqueActivities:", uniqueActivities);

// 5
let swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((dog) => dog.activities.includes("swimming"))
      .flatMap((dog) => dog.activities)
      .filter((activity) => activity !== "swimming")
  ),
];

console.log("swimmingAdjacent:", swimmingAdjacent);

// 6
const result = breeds.every((dog) => dog.averageWeight >= 10);

console.log("Avg weight >= 10kg :", result);

// 7
const anyActiveBreeds = breeds.some((dog) => dog.activities.length >= 3);

console.log("anyActiveBreeds:", anyActiveBreeds);

// BONUS
const breedThatLikesToFecth = breeds
  .filter((dog) => dog.activities.includes("fetch"))
  .map((dog) => dog.averageWeight);

const heaviestBreedThatLikesToFecth = Math.max(...breedThatLikesToFecth);
console.log("heaviestBreedThatLikesToFecth:", heaviestBreedThatLikesToFecth);
