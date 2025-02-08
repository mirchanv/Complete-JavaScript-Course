// 03 Operators -  Assignment operators
let a = 20;
let b = 10;

console.log("a =", a);
console.log("b =", b);

a += b; // this means a = a + b, a = 20 + 10,  a = 30
console.log("a =", a);

b -= 5; // this means b = b - 5, b = 10 - 5, b = 5
console.log("b =", b);

// pre & post-increment

// pre-increment means you increment first the use the variable
let myValue = 10;
console.log("myValue original      =", myValue); // 10
console.log("myValue pre-increment =", ++myValue); // increment by 1 first then print so output is 11

// post-increment means you use variable with its value first and then increment
myValue = 10;
console.log("myValue original       =", myValue); // 10
console.log("myValue post-increment =", myValue++); // 10 will be printed but internally it has incremented the value to 11
console.log("myValue                =", myValue); // 11
