"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
for (const [goalNo, player] of game.scored.entries()) {
  console.log(`Goal ${goalNo + 1}: ${player}`);
}

// Task 2
let avg = 0;
let sumOdds = 0;
for (const currentOdd of Object.values(game.odds)) {
  sumOdds += currentOdd;
}
avg = sumOdds / Object.values(game.odds).length;
console.log("avg =", avg);

// Task 3
let str = "";
for (const [team, odds] of Object.entries(game.odds)) {
  const currTeam = game[team];
  if (currTeam) {
    console.log(`Odd of victory ${currTeam} : ${odds}`);
  } else {
    console.log(`Odd of Draw : ${odds}`);
  }
}

// BONUS
const scorers = {};

for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}

console.log("scorers:", scorers);
