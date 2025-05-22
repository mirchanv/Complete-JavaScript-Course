console.log(a); // will print undefined
// console.log(b); // error let variables cannot be access before declaration as they are in TDZ
// console.log(c); // error const variables cannot be access before declaration as they are in TDZ

var a = 10;
let b = 20;
const c = 30;

// let d; // decalred but not defined - can be accessed after this point, default value in memory undefined
// console.log(d);

greet(); // can be accessed before function declaration

// console.log(sum(2, 4)); // cannot be accessed as sum is declared using let and in TDZ at this point

// console.log(message); // cannot be accessed as message is declared using const and in TDZ at this point

console.log(arrowFunc(1, 3)); // cannot be accessed as message is declared using const and in TDZ at this point

function greet() {
  console.log("Hello, there");
}

let sum = function (a, b) {
  return a + b;
};

const message = function () {
  console.log("Today will be a great day!");
};

const arrowFunc = (a, b) => a + b;
