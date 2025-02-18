// Arrow Function where birthYear is parameter and result is stored in variable age
const age = (birthYear) => new Date().getFullYear() - birthYear;

// calling arrow funvtion via variable the function is stored in and passing birthYear as an argument
console.log(`My age is ${age(1990)} years old.`);

// Function Expression
const yearsLeft = function yearsUntilRetirement(birthYear) {
  const RETIREMENT_AGE = 67;
  const currentAge = new Date().getFullYear - birthYear;
  return RETIREMENT_AGE - currentAge;
};

// Arrow Function
const yearsRemaining = (birthYear) => {
  const RETIREMENT_AGE = 67;
  const currentAge = new Date().getFullYear() - birthYear;
  console.log(`Your current age is : ${currentAge}`);
  if (currentAge >= 67) return 0;
  return RETIREMENT_AGE - currentAge;
};

console.log(
  `You have ${yearsRemaining(1990)} years until you reach retirement age.`
);

console.log(
  `You have ${yearsRemaining(1950)} years until you reach retirement age.`
);

// Another Arrow function
const aboutMe = (fullname, age, country) => {
  console.log(`Hello everyone! My name is ${fullname}.
I am ${age} years old.
I come from ${country}!`);
};

aboutMe("Tiger Scott", 34, "Texas");
