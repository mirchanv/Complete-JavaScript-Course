"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees Celsius:")),
  };

  console.table(measurement);

  // BUG
  // const kelvin = measurement.value + 273;

  const kelvin = measurement.value + 273;
  return `${measurement.value} degree celsius equals ${kelvin} in kelvin units`;
};

console.log(measureKelvin());

// STEPS to resolve a BUG

// STEP 1: IDENTIFY
// STEP 2: INSPECT
// STEP 3: RESOLVE
