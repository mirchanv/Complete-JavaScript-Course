"use strict";

const questions = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "C++"],
  [3, "Python"],
  [4, "Java"],
  [5, "JavaScript"],
  ["correct", 5],
  [true, "Good job! That is the correct answer 🎉"],
  [false, "Oops! Wrong answer, pleasy try again."],
]);

console.log("questions", questions);

// iterating through the map and getting all the keys
for (const key of questions.keys()) {
  console.log(key);
}

// iterating through the map and getting all the values
for (const value of questions.values()) {
  console.log(value);
}

console.log("-------------------------------");
console.log("Mini Quiz!");

console.log(questions.get("question"));

// iterating over the map and getting keys of type numbers end getting their entries
for (const [key, value] of questions.entries()) {
  if (typeof key == "number") {
    console.log("\t", key, value);
  }
}

const answer = Number(prompt("Please enter the correct answer"));
const result = questions.get(answer == questions.get("correct"));
console.log(result);

// converting map to array
console.log([...questions]);
