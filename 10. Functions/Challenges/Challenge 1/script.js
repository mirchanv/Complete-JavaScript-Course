// "use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    if (answer >= 0 && answer < this.answers.length) this.answers[answer]++;
    else alert("OOPS...Invlid answer please try again!");
    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}.`);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

var answers = [5, 2, 3];
var printResults = poll.displayResults;

printResults.call(this);
printResults.call(this, "string");
