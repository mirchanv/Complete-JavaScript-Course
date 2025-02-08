const age = 23;

// ternary operator
age >= 18 // condition to check
  ? console.log("You are allowed to drink wine 🍷") // executes if true
  : console.log("You are allowed to drink water 💧"); // executes if false

// declaring and assigning a value to a variable with the result produced by the ternary operator
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log("Drinking", drink);

// ternary operators can be used in template literals
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
