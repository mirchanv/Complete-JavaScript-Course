"use strict";

const newGameBtn = document.getElementById("new-game-btn");
const rollBtn = document.getElementById("roll-btn");
const holdBtn = document.getElementById("hold-btn");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let image = document.querySelector("img");
let player1Total = document.getElementById("total-player1");
let player2Total = document.getElementById("total-player2");
let runningScorePlayer1 = document.querySelector(".running-score-p1");
let runningScorePlayer2 = document.querySelector(".running-score-p2");
let runningTotal = 0;
let currentPlayer = 1;

const diceRoll = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  image.src = `./images/dice-${dice}.png`;
  image.classList.remove("hidden");
  updateRunningTotal(Number(dice));
};

const updateRunningTotal = function (diceVal) {
  if (diceVal === 1) {
    document.querySelector(`.running-score-p${currentPlayer}`).textContent = 0;
    switchPlayers(currentPlayer);
  } else {
    runningTotal += diceVal;
    document.querySelector(`.running-score-p${currentPlayer}`).textContent =
      runningTotal;
  }
};

const switchPlayers = function () {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  player1.classList.toggle("inactive");
  player2.classList.toggle("inactive");
  runningTotal = 0;
};

const updateTotalScore = function (player) {
  const activePlayer = document.getElementById(`total-player${player}`);
  let runningScore = player === 1 ? runningScorePlayer1 : runningScorePlayer2;
  let currentTotal = Number(activePlayer.textContent);

  currentTotal += runningTotal;
  activePlayer.textContent = currentTotal;
  runningScore.textContent = 0;
  checkWinner(player, currentTotal);
  switchPlayers();
};

const checkWinner = function (activePlayer, currTotal) {
  if (currTotal >= 100) {
    document.querySelector(`.player${activePlayer}`).classList.add("winner");
    image.classList.add("hidden");
    disableButtons(true);
    return;
  }
};

const disableButtons = function (status) {
  rollBtn.disabled = status;
  holdBtn.disabled = status;
  hideDice();
};

const startNewGame = function () {
  player1Total.textContent = 0;
  player2Total.textContent = 0;
  runningScorePlayer1.textContent = 0;
  runningScorePlayer2.textContent = 0;
  runningTotal = 0;
  player1.classList.remove("winner");
  player2.classList.remove("winner");
  player1.classList.remove("inactive");
  player2.classList.add("inactive");
  currentPlayer = 1;
  image.classList.add("hidden");
  disableButtons(false);
};

rollBtn.addEventListener("click", function () {
  diceRoll();
});

holdBtn.addEventListener("click", function () {
  updateTotalScore(currentPlayer);
});

newGameBtn.addEventListener("click", function () {
  startNewGame();
});
