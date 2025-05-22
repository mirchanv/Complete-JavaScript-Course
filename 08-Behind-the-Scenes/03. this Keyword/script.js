"use strict";

// this in global space

console.log(this);

// this inside a function

function a() {
  // the value depends oin strict / non-strict mode
  console.log(this);
}
a();

// this inside non-strict mode - (this sustitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non-strict mdoe

// this value depends on how the function is called (window)

// calling functions as normal functions
// this keyword is undefined
a();

// obejct calling a method
// the this keyword will simply point to the object on which the method is called
window.a();

// this inside an object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // this keyword will point to object calling the method

const person = {
  name: "Vishal",
  age: 34,
  intro: function () {
    console.log(`my name is ${this.name} and I am ${this.age} years old!`);
  },
};

person.intro(); // this is pointing to person object
// therefore this.name = person.name and this.age = person.age

// call apply and bind methods (sharing methods)

// call()
const printFullName = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastname} is from ${city}, ${country}!`
  );
};

let person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// using call() to burrow function
// where 1st arg is the reference to this keyword points to
// where 2nd and 3rd args are function params
printFullName.call(person1, "Bangalore", "India");

let person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

// using call() to burrow function
// where 1st arg is the object this keyword points to
// where 2nd and 3rd args are function params
printFullName.call(person2, "Hyderabad", "India");

// apply()
printFullName.apply(person1, ["Bangalore", "India"]);
printFullName.apply(person2, ["Hyderabad", "India"]);

// bind()
let printMyDetails = printFullName.bind(person1, "London", "United Kingdom");

console.log(printMyDetails); // copy of function

printMyDetails();

// this inside arrow function
const myObj = {
  a: 10,
  greet: () => {
    console.log(this);
  },
};

myObj.greet();

// this inside nested arrow function
function greet() {
  let person1 = {
    age: 34,
    myFunc: () => {
      console.log(this);
    },
  };
  person1.myFunc();
}

greet();

let myObj1 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // this = obj object
    };
    y();
  },
};

myObj1.x();

// this inside DOM
const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function () {
  console.log(this);
});
