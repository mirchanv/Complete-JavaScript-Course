let favouriteNumber = prompt("What's your favourite number?");
console.log(favouriteNumber, typeof favouriteNumber);

favouriteNumber = Number(favouriteNumber);
console.log(favouriteNumber, typeof favouriteNumber);

if (favouriteNumber == 6)
  console.log("== loose equality operator returns true");

if (favouriteNumber === 6)
  console.log("=== strict equality operator returns true");

// loose not equals operator !=
console.log("2" != 2); // false

// strict not equals operator !==
console.log("2" !== 2); // true

// IMOPORTANT : It is always recommended to use STRICT version of equalaity operators!
