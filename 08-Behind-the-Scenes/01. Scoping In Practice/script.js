"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} was born in the year ${birthYear} and is ${age} years old!`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "Steven";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      output = "NEW OUTPUT";
    }

    console.log(output); // NEW OUTPUT
  }

  printAge();
  return age;
}

const firstName = "Vishal";
calcAge(1990);
