"use strict";

const h1 = document.querySelector("h1");

const h1Alert = function (e) {
  alert("mouse has entered the h1 html element using addEventListener");

  // remove event listener from h1
  h1.removeEventListener("mouseenter", h1Alert);
};

h1.addEventListener("mouseenter", h1Alert);

// using the property
// h1.onmouseenter = function (e) {
//   alert("mouse has entered the h1 html element using onmouseenter property");
// };

// we can also use setTimeout to remove event listener
// setTimeout(() => h1.removeEventListener("mouseenter", h1Alert), 5000);
