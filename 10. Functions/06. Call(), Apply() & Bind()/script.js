"use strict";

const book = function (flightNum, passengerName) {
  console.log(
    `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    passengerName,
  });
};

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// using call method where this is pointing to eurowings
// the first 1st-arg of call() is always the reference to where the this variable should point to
// all args after the 1st-arg are function params
book.call(lufthansa, 239, "Vishal Mirchandani");
book.call(lufthansa, 635, "Akshay Saini");

book.call(eurowings, 342, "Michael Jordan");
book.call(eurowings, 555, "Ray Donovan");

// doing the same but with apply()
const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

book.apply(swiss, [626, "Sarah Williams"]);
book.apply(swiss, [195, "John Smith"]);

// checking bookings for each airline
console.log("All Lufthansa Bookings:", lufthansa.bookings);
console.log("All Eurowings Bookings:", eurowings.bookings);
console.log("All Swiss Airlines Bookings:", swiss.bookings);

// bind() method
// The bind() method binds the functions with a specified object that the this variable is going to point to and will return a copy of that function. This function can be used later at any time.

const bookEW = book.bind(eurowings);
bookEW(423, "Steven Jones");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Pierce");
bookEW23("Lee Cooper");

console.log("All Eurowings Bookings:", eurowings.bookings);

// use case for bind() with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log("this ", this);
  this.planes++;
  console.log(`No. of planes: ${this.planes}`);
};

const buyPlane = document.querySelector(".buy");

// addEventListener calls buyPlane
// buyPlane button calls the addEventListener
// there for this points to the button, in order to specify this permanantly we use bind()
buyPlane.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// use case for bind() partial applications
const addTax = function (taxPercentage, price) {
  const calculatedTax = (price / 100) * taxPercentage;
  console.log(
    `Tax Rate: ${taxPercentage}%\nGoods Price: ${price}\nTotal Payable Amount: ${
      price + calculatedTax
    }`
  );
};

addTax(25, 100);

// let us assume taxPercentage is fixed for VAT/GST on goods in India is 18%
const addVAT = addTax.bind(null, 18);
addVAT(100);

// CHALLENGE
function getIndianGST(itemPrice) {
  return addVAT(itemPrice);
}

getIndianGST(100);
