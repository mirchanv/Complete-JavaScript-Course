// Type Conversion : This is also known as explicit conversion, meaning we manually convert the types.

const stringAge = "20";
console.log(typeof stringAge, stringAge);

// using + operator for strings we are not adding but concatenating, hence 205
console.log(stringAge + 5);

// converting string "20" to number type 20
const numAge = Number(stringAge);
console.log(typeof numAge, numAge);

// usiung + operator when both operands are number type will perform arithmetic addition, hence 25
console.log(numAge + 5);

// we can also convert string to number by adding + operator at the start of string
const newAge = +stringAge;
console.log(typeof newAge, newAge);

// usiung + operator when both operands are number type will perform arithmetic addition, hence 25
console.log(numAge + 5);

// Type Coercion : This is also known as implicit conversion, meaning JavaScript automatically converts the type for us.
