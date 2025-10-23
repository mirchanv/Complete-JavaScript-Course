"use strict";

const h1 = document.querySelector("h1");
console.log(h1);

// Going downwards : selecting child elements
// -----------------------------------------------------

// selecting all the child elements with class "highlight" of the h1 element
console.log(h1.querySelectorAll(".highlight"));

// selecting only the direct child NODES of h1 - childNodes not used much
console.log(h1.childNodes);

// we work with elements so we can get direct child elements by using children
console.log(h1.children);

// selecting the first child element of h1 and updating its color
h1.firstElementChild.style.color = "orangered";

// selecting the last child element of h1 and updating its color
h1.lastElementChild.style.color = "red";

// Going upwards : selecting parent elements
// -----------------------------------------------------

// to select the parent node of h1 we do
console.log(h1.parentNode, h1.parentElement);

// selecting the closest parent element(with class "header") of h1
h1.closest(".header").style.background = "yellow";

// selecting the element itself
// the closes parent of h1 with the tag h1 is the element itself
h1.closest("h1").style.background = "lime";

// Going sideways : selecting siblings
// -----------------------------------------------------

// NOTE: in javascript we can only access direct siblings (prev, next)
console.log(h1.previousElementSibling, h1.nextElementSibling);

// if we need all the siblings - then move to parent element and read children from there
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach((el) => {
  if (el !== h1) {
    el.style.transform = "scale(0.5)";
  }
});
