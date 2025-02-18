"use strict";

let rep = 1;

while (rep <= 10) {
  console.log(`Lifting weights repetition : ${rep} 🏋️`);
  rep++;
}

// Math.random() generates a number >= 0 and < 1 (if we want between 0 and 6) we multiply by 6 and add 1
// Math.random() results in a decimal number and we want only whole number hence we can use Math.trunc()
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Oh nooo... I rolled a ${dice}! Rolling the dice again.`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`Finally! I rolled a SIXERRR`);
