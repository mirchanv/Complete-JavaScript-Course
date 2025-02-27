"use strict";

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is: "Give an array of temperatures of the day, calculate the temperatures amplitude. Do keep in mind that sometimes there might be a sensor error."

// Sample Data
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/* 
  1. Understanding the problem
      -> What is the formula for calculating temperatures amplitude?
          => ANSWER: maxTemp - minTemp
      -> How do we calculate maxTemp and minTemp?
          => ANSWER: Loop through the array
      -> How do we handle "error" values?
          => ANSWER: ignore it and work with the rest of the data

  2. Breaking into sub problems
      -> How to ignore errors?
      -> Find maxTemp
      -> Find minTemp
      -> Calculate & Return temperature amplitude using maxTemp and minTemp
*/

const calcAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let maxTemp = Number.MIN_VALUE;
  let minTemp = Number.MAX_VALUE;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }

  console.log("maxTemp =", maxTemp);
  console.log("minTemp =", minTemp);
  return maxTemp - minTemp;
};

console.log("Temperature Amplitude =", calcAmplitude(temperatures));

// PROBLEM 2
// Function should now recieve 2 arrays of temps

/* 
  1. Understanding the problem
      -> What is the formula for calculating temperatures amplitude?
          => ANSWER: maxTemp - minTemp
      -> How do we calculate maxTemp and minTemp?
          => ANSWER: merge 2 arrays and loop through the array     
            minTemp
      -> How do we handle "error" values?
          => ANSWER: ignore it and work with the rest of the data

  2. Breaking into sub problems
      -> How to ignore errors?
      -> Find maxTemp
      -> Find minTemp
      -> Calculate & Return temperature amplitude using maxTemp and minTemp
*/

console.log("Temperature Amplitude =", calcAmplitude([3, 5, 1], [9, 0, 5]));
