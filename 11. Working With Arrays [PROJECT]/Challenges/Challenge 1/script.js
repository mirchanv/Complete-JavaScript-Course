"use strict";

const checkDogs = function (juliasData, katesData) {
  const shallowCopyJulia = juliasData.slice(1, -2);
  const allDogs = [...shallowCopyJulia, ...katesData];

  allDogs.forEach(function (age, index) {
    const isAdult = age >= 3 ? true : false;
    if (isAdult) {
      console.log(`Dog number ${index + 1} is an adult, and is 5 years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

// TEST
const juliasData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];

checkDogs(juliasData, katesData);
