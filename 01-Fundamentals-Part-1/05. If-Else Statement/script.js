// 05. If-else Statement

const legalDrivingAge = 18;
const myAge = 19;

// if without else block
if (myAge >= legalDrivingAge) {
  console.log("You are old enough to drive 🚗");
}

const userLoggedIn = false;

// if with else block
if (userLoggedIn == true) {
  console.log("User is logged in.");
} else {
  console.log("User not logged in.");
}

/*  
    NOTE : the condition in the if expression must always evaluate to a boolean value.
    NOTE : if specified condition evaluates to true, the if block executes otherwise the else block      excutes if it is available.
    NOTE : Having an else block is optional
*/

// Example with multiple else-ifs
const mark = 78;
let degree;

if ((mark >= 75) & (mark <= 100)) degree = "First Class";
else if (mark >= 65) degree = "Upper Second Class";
else if (mark >= 55) degree = "Second Class";
else degree = "Third Class";

console.log(`Mark   : ${mark}
Degree : ${degree}. 
Congratulations 🎉`);

// Example to assign variable depending on a condition
const age = "34";
let ageDescription;

if (age < 50) {
  ageDescription = "Young!";
} else {
  ageDescription = "Oldie";
}

console.log("ageDescription :", ageDescription);
