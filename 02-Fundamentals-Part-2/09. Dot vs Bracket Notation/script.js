const vishal = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: new Date().getFullYear() - 1990,
  occupation: "Chef",
  friends: ["Bobby", "Dolly", "Molly", "Sally"],
};

console.log(vishal);

// getting properties using DOT notation
console.log(vishal.lastname);

// getting properties using BRACKET notation bracket (recommended to use if something needs to be computed)
console.log(vishal["lastname"]);

const fullname = vishal["firstname"] + " " + vishal["lastname"];
console.log("fullname :", fullname);

const userInput = prompt(
  "What do you want to know about Vishal? Please choose from firstname, lastname, age, firends, occupation."
);

if (vishal[userInput]) console.log(userInput, ":", vishal[userInput]);
else console.log("Please enter a valid property!");

// adding properties to object
vishal.location = "Denmark";
vishal["email"] = "test@gmail.com";

console.log(vishal.location);
console.log(vishal.email);

// CHALLENGE : without hard coiading any values try to print the following sentence using dot/bracket notation

// sentence : vishal has 3 friends, and his best friend is called Bobby!

console.log(
  `${vishal.firstname} has ${vishal.friends.length} friends, and his best friend is called ${vishal.friends[0]}!`
);
