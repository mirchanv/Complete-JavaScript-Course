"use strict";

const airline = "Tap Air Portugal";
let plane = "A320";

// toUpperCase() and toLowerCase()
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// fix capitalization in passenger name
const passenger = "HaRrY";
console.log("passenger name:", fixPassengerName(passenger));

// solution
function fixPassengerName(name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
}

// comparing emails
const email = "hello@gmail.com";
const loginEmail = "   HELLO@gmail.com";

console.log("email match:", checkEmail(email, loginEmail));

// 1. convert to lowercase
// 2. remove whitespaces from beginning and end
function checkEmail(correctEmail, email) {
  email = loginEmail.toLowerCase().trim();
  return email === correctEmail;
}

// NOTE: we can also use trimStart() or trimEnd() depending on where we want to remove white spaces.

// replace(oldStr, newStr)
const priceGB = "288,97£";
const priceUSD = priceGB.replace(",", ".").replace("£", "$");

console.log("priceGB:", priceGB);
console.log("priceUSD:", priceUSD);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

const correctAnnouncement = announcement.replaceAll("door", "gate");
console.log(correctAnnouncement);

// using regex
// regex must be between //
const regexAnnouncement = announcement.replace(/door/g, "gate");
console.log(regexAnnouncement);

const newPlane = "Airbus A320neo";
const normalPlane = "A320";

// includes()
console.log(plane.includes("320"));
console.log(plane.includes("R"));

// startWith()
console.log(plane.startsWith("A"));
console.log(plane.startsWith("Air"));

// check if the new plane is part of the Airbus family
checkPlaneFamily(newPlane);
checkPlaneFamily(normalPlane);

function checkPlaneFamily(plane) {
  if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
    console.log(`Plane: ${plane} is part of Airbus family!`);
  } else {
    console.log(`Plane ${plane} is an older model!`);
  }
}

// practice exercise
const checkBaggage = function (items) {
  items = items.toLowerCase();

  const restrictedItems = ["pocket knife", "drug", "gun", "pistol"];
  for (let i = 0; i < restrictedItems.length; i++) {
    if (items.includes(restrictedItems[i])) {
      console.log(`You baggage has been flagged for security reasons!`);
      return;
    }
  }
  console.log("Your baggage is checked in. Wishing you a pleasant flight!");
};

checkBaggage("I have a laptop, some food and a pocket knife!");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
