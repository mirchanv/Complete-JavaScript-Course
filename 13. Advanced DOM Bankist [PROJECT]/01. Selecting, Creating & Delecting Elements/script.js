"use strict";

// SELECTING ELEMENTS
// ---------------------------------------------------------------------------------------------------

// truly selecting the whole document element
console.log(document.documentElement);

// selecting the head element
console.log(document.head);

// seleting the body element
console.log(document.body);

// selecting the first element with class named header
const headerElement = document.querySelector(".header");
console.log(headerElement);

// selecting multiple elemnts with same class name, will return nodeList
const allSections = document.querySelectorAll(".section");
console.log(allSections);

// selecting element by id
const section1 = document.getElementById("section--1");
console.log(section1);

// selecting elements by their tag name
const allBtns = document.getElementsByTagName("button");
console.log(allBtns);

// selecting multiple elemnts with same class name, will return HTMLCollection
console.log(document.getElementsByClassName("btn"));

// CREATING & INSERTING HTML ELEMENTS
// ---------------------------------------------------------------------------------------------------

//.insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got It!</button>';

// headerElement.prepend(message);
headerElement.append(message);
// headerElement.append(message.cloneNode(true));

// NOTE: prepend will make message the first child inside the headerElement
// append will make message the last child inside the headerElement

// if we want the message element to be before or after the headerElement we use before() and after()
// headerElement.before(message);

// DELETING ELEMENTS
// ---------------------------------------------------------------------------------------------------
const closeCookieBtn = document.querySelector(".btn--close-cookie");

closeCookieBtn.addEventListener("click", function () {
  message.remove();
});

// STYLES
// ---------------------------------------------------------------------------------------------------
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

// height before
console.log(getComputedStyle(message).height);

// let get the height and increase it by 40px
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

// height after
console.log(getComputedStyle(message).height);

// changing/setting the color of a style defined in CSS
// over-writing --color-primary from style.css with orangered
document.documentElement.style.setProperty("--color-primary", "orangered");

// ATTRIBUTES
// ---------------------------------------------------------------------------------------------------
const logo = document.querySelector(".nav__logo");

// standard(required) attributes can be read
console.log(logo.alt);
console.log(logo.src); // this returns the absolute URL
console.log(logo.getAttribute("src")); // returns relative path
console.log(logo.className);

// to read non-standard attributes we msut use getAttribute() method
console.log(logo.getAttribute("designer"));

// setting/updating an attribute
logo.alt = "Beautiful Minimalist Logo";

// seting/updating a non-standard attribute
logo.setAttribute("designer", "Jonas");
console.log(logo.getAttribute("designer"));

// we can also set an attribute which did not exist before
logo.setAttribute("company", "Bankist");

const twitter = document.querySelector(".nav__link--btn");
console.log(twitter);
console.log(twitter.href);
console.log(twitter.getAttribute("href"));

// DATA ATTRIBUTES
// ---------------------------------------------------------------------------------------------------

// all attributes starting with data-
// must use camelCase for whatever is after data-
console.log(logo.dataset.versionNumber);

// CLASSES
// ---------------------------------------------------------------------------------------------------
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
