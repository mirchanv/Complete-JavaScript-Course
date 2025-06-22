"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hello");
greeterHey("Vishal");
greeterHey("Akshay");

greet("Yoooo")("Jonas");
