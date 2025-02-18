/* Write your code below. Good luck! 🙂 */

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) return billValue * 0.15;
  else return billValue * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// BONUS
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("tips[]   :", tips);
console.log("totals[] :", totals);
