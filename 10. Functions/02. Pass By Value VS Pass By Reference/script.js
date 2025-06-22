"use strict";

const flight = "LH234";
const person = {
  name: "Vishal Mirchandani",
  passportNo: 23435443563,
};

const checkin = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passportNo === 23435443563) {
    alert("Checked In");
  } else {
    alert("Wrong Passport!");
  }
};

checkin(flight, person);

console.log("flight:", flight); // LH234
console.log("person:", person); // name: Mr. Vishal Mirchandani
