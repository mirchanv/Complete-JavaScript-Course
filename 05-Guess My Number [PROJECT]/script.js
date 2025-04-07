"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".feedback").textContent = message;
};

const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".display").value = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".feedback").textContent = "⏳ Start guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "rgb(85, 85, 85)";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⚠️ Invalid Input!");
  } else if (guess === secretNumber) {
    displayMessage("✅ Correct");
    document.querySelector(".display").value = guess;
    highscore = Math.max(highscore, score);
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector("body").style.backgroundColor = " #60b347";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!");
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 Game Over !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".play-again").addEventListener("click", function () {
  resetGame();
});

// With input fields we must use the value property and not textContent
