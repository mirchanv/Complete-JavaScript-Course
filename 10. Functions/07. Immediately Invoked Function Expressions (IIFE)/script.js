"use strict";

// function that will execute only once and cannot be called again. Immediately Invoked Function Expressions (IIFE)

(function () {
  console.log("This will never run again!");
})();

(() => console.log("This will ALSO never run again!"))();
