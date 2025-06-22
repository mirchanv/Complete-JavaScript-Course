"use strict";

// closures for creating private variables

const secureBooking = function () {
  let passengerCount = 0;

  function increment() {
    passengerCount++;
    console.log(`No. of Passengers: ${passengerCount}`);
  }
  return increment;
};

const booker = secureBooking();
console.log(booker);
booker();
booker();
booker();
console.dir(booker);
