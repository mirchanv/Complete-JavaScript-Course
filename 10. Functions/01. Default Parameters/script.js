"use strict";

const greet = function (name = "Stranger") {
  console.log(`Hello ${name}!`);
};

greet();
greet("Vishal");

const allBookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  // creating a booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log("booking:", booking);
  allBookings.push(booking);
};

createBooking("LH123");

// overriding numPassengers because 2 people are travelling
createBooking("LM123", 2);

// assuming there 50% on tickets, we skip numPassengers by passing undefined
createBooking("BA342", undefined, 99.5);
