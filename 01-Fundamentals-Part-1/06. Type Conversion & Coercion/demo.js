let sum = "20" + 30;
console.log(sum, typeof sum); // 2030 string

// NOTE: the above internally translates to "20" + "30" where JS coarsed the number 30 to a string type in order to complete the concatenation operation which results in "2030"

sum = "20" * 30;
console.log(sum, typeof sum); // 600 number

// NOTE: the above internally translates to 20 * 30 where JavaScript coarsed the string "20" to a number type in order to complete the mulitplication operation. Converting number 30 to string wont complete the operation as strings cannot be multiplied.

sum = "hello" * 30;
console.log(sum, typeof sum); // NaN number

// NOTE: the above internally translates to NaN * 30 where JavaScript cannot coarse the string "hello" to a valid number type, hence it results in NaN in order to complete the mulitplication operation.

sum = 50 + true;
console.log(sum, typeof sum); // 51 number

// NOTE: the above internally translates to 50 + 1 where JavaScript coarsed the boolean true to a number type in order to complete the addition operation which results in "51". true = 1 or more, false = 0 only

sum = 50 * false;
console.log(sum, typeof sum); // 0 number

sum = false + true;
console.log(sum, typeof sum); // 1 number

// NOTE: the above internally translates to 0 + 1 = 1

let httpResponse = 200;

if (httpResponse) {
  console.log("Webpage is shown!");
} else {
  console.log("Something went wrong!");
}

// NOTE: the if statement is expecting a boolean expression and the boolean equivalent of 200 is true

console.log(Boolean(-1));
console.log(Boolean(0)); // only 0 is false
console.log(Boolean(1));
console.log(Boolean(8));
console.log(Boolean(200));

// == lose equality (when using loose equality operator JavaScript will attempt to coarse one of the values to fit the eqality comparison)
console.log("20" == 20); // true
console.log(0 == false); // true

// === strict equality checking the value and type
console.log("20" === 20); // false
console.log(0 === false); // false

// Explicit Type Conversion

console.log(Number("20")); // converting string "20" to number 20
console.log(String(100)); // converting number 100 to string "100"
console.log(Number(false)); // converting boolean false to number 0
console.log(Boolean("Hello")); // converting string "hello" to boolean value true
console.log(Boolean("")); // converting string "" to boolean value false
console.log(Boolean(0)); // converting number 0 to boolean value false
console.log(Number("Hello")); // converting string "hello" to NaN number type
