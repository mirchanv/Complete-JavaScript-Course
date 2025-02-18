// Function Declaration
function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// calling the function
const age = calcAge(1990);
console.log(`You are or will be ${age} years old this year!`);

// Function Expression being stgored in a variable
const calculateMyAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

// calling the function expression from the variable it is stored in
const facebookAge = calculateMyAge(2004);
console.log(`Facebook has been up and running for ${facebookAge} years!`);
