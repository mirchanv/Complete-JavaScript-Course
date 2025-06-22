"use strict";

function changeFontSize(size) {
  return function () {
    document.getElementById("para").style.fontSize = `${size}px`;
  };
}

const textSize12 = changeFontSize(12);
const textSize16 = changeFontSize(16);
const textSize20 = changeFontSize(20);

document.getElementById("size12").addEventListener("click", textSize12);
document.getElementById("size16").addEventListener("click", textSize16);
document.getElementById("size20").addEventListener("click", textSize20);
