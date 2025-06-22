"use strict";

// split(pattern) - takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const intro = "Hello my name is Vishal. I am learning JavaScript strings!";
const words = intro.split(" ");
console.log("words:", words);

const weather = "Today+is+going+to+be+very+rainy";
console.log(weather.split("+"));

// combining destructuring with split()
const fullname = "Vishal Mirchandani";
const [firstname, lastname] = fullname.split(" ");
console.log("firstname:", firstname);
console.log("lastname:", lastname);

// join(seperator) - creates and returns a new string by concatenating all of the elements in this array. We can also add a seperator but its optional, if omitted the array elements are sperated by a comma.

const name = ["Mr.", "Harry", "Potter"].join(); // without seperator
console.log("name:", name);

const betterName = ["Mr.", "Harry", "Potter"].join(" "); // with seperator
console.log("betterName:", betterName);

// great example of split and join working together
const capitalizeFirstLetter = function (name) {
  const names = name.split(" ");
  const updatedName = [];
  for (let n of names) {
    n = n.toLowerCase(); // incase of mixed cases
    updatedName.push(n[0].toUpperCase() + n.slice(1));
  }
  return updatedName.join(" ");
};

console.log(capitalizeFirstLetter("jessica ann smith davis"));
console.log(capitalizeFirstLetter("VishAl mirCHANdanI"));

// string padding to get same size string
const message = "Go to gate 23!";
console.log(message.padStart(25, "*").padEnd(35, "*"));

// real world example of string padding

const maskCardNo = function (cardNo) {
  const cardStr = cardNo + "";
  const lastFourDigits = cardStr.slice(-4);
  const maskedCard = lastFourDigits.padStart(cardStr.length, "*");
  console.log("last four digits:", maskedCard);
};

maskCardNo(3782822463102351);

// repeat(numTimes)
const update = "Bad weather, flight delayed!\n";
console.log(update.repeat(5));
