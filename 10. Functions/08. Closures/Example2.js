"use strict";

// Closures also let you create “function factories.” These are functions that generate other functions with specific behaviors.

function multiplier(num) {
  return function timetable() {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} X ${i} = ${num * i}`);
    }
  };
}

const twosTimetable = multiplier(2);
twosTimetable();

const fivesTimetable = multiplier(5);
fivesTimetable();
