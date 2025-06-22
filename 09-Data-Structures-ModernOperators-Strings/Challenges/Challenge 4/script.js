"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").textContent = "Convert";

const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");

const convert = btn.addEventListener("click", function () {
  const variables = textArea.value.split("\n");

  for (const [i, variable] of variables.entries()) {
    let [first, second] = variable.split("_");
    first = first.trim().toLowerCase();
    second = second.trim().toLowerCase();

    let newName = first + second[0].toUpperCase() + second.slice(1);
    newName = newName.padEnd(20, " ");
    newName = newName + "✅".repeat(i + 1);

    console.log(newName);
  }
});
