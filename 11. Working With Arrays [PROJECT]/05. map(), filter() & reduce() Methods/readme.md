# map(), filter() & reduce() methods

## map()

The **`map()`** method transforms each and every array element and returns a new transformed array. It does not change the original array.

**NOTE:** **`map()`** method is a **higher order function** as it takes a function as an argument. This function defines the transformation being done. This function will be called for each and every array element. The function passed in as an argument can take upto 3 parameters:

- where the **`1st param`** is the current array element
- where the **`2nd param`** is the current index value
- where the **`3rd param`** is the array itself.

**`For Example`**

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

const result = arr.map(function (curr, index, arr) {
  return `${curr} found at index ${index}`;
});

console.log("result:", result);
```

**OUTPUT:**

```
result: [
  '5 found at index 0',
  '1 found at index 1',
  '3 found at index 2',
  '2 found at index 3',
  '6 found at index 4'
]
```

**Another Example:**

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

// function to double a number
function double(x) {
  return x * 2;
}

let output = arr.map(double);

console.log("arr:", arr);
console.log("output:", output);
```

In the above code we have return a simple function that doubles a number. This **`double()`** function is passed as an argument to the **`map()`** method, and internally it runs the **`double()`** function for each and every array element in **`arr`** and creates a new array out of it, which is stored in **`output`**.

**OUTPUT:**

```
arr: [ 5, 1, 3, 2, 6 ]
doubleArr: [ 10, 2, 6, 4, 12 ]
```

**Another example:**

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

let output = arr.map(function (x) {
  return x * 3;
});

console.log("arr:", arr);
console.log("output:", output);
```

In the above example we have written an **anonymous function** which is still passed as an argument to the map function, and this anonymous function **triples** a number. This means internally for every array element this anonymous function will be called and each array element will be tripled and stored into a new array named **`output`**.

**OUTPUT:**

```
arr: [ 5, 1, 3, 2, 6 ]
output: [ 15, 3, 9, 6, 18 ]
```

**NOTE:** The above code could also be written using a arrow function.

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

let trioutputpleArr = arr.map((x) => x * 3);

console.log("arr:", arr);
console.log("output:", output);
```

## filter()

The filter() method creates a new array with elements that pass test/condition provided by a function. It does not change the original array.

**For Example:**

```javascript
"use strict";

// function to check if number is odd
function isOdd(x) {
  return x % 2 !== 0;
}

const oddNums = arr.filter(isOdd);

console.log("arr:", arr);
console.log("oddNums:", oddNums);
```

Here, the **`filter()`** function calls the **`isOdd()`** function for every array element in **`arr`**.

- when **`x = 5`**, we check is 5 % 2 != 0 -> **`true`**
- when **`x = 1`**, we check is 1 % 2 != 0 -> **`true`**
- when **`x = 3`**, we check is 3 % 2 != 0 -> **`true`**
- when **`x = 2`**, we check is 2 % 2 != 0 -> **`false`**
- when **`x = 6`**, we check is 6 % 2 != 0 -> **`false`**

All the values that passed the condition, should be stored in an array called **`oddNums`** according to the code example.

**OUTPUT:**

```
arr: [ 5, 1, 3, 2, 6 ]
oddNums: [ 5, 1, 3 ]
```

**Another Example:**

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

const numsOver4 = arr.filter((x) => x > 4);

console.log("arr:", arr);
console.log("numsOver4:", numsOver4);
```

**OUTPUT:**

```
arr: [ 5, 1, 3, 2, 6 ]
numsOver4: [ 5, 6 ]
```

## reduce()

When using the **reduce()** method we take up all the elements of an array and come up with a **single value**. When using the **`reduce()`** we generally pass in two arguments, first a function that **`reduce()`** calls for every array element, this function also takes 2 arguments; **`acc`** and **`curr`**
respectively.

- where **`acc`** is known as accumulator, which accumulates the result we have to get from the values present in the array.
- where **`curr`** is the current array element.

The second argument passed to **`reduce()`** after the function is the **initial value** of **`acc`**.

**For example:**

- to find sum of all array elements
- to find maximum/minimum number in an array

**For Example:** find sum of all array elements

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

// find sum of array elements using reduce()
const sum = arr.reduce(function (acc, curr) {
  console.log(acc, curr);
  acc = acc + curr;
  return acc;
}, 0);

console.log("sum:", sum);
```

**OUTPUT:**

```
0 5
5 1
6 3
9 2
11 6
sum: 17
```

**EXPLANATION:**

- **Iteration 1**

  - **`acc`** = 0 intially because we set it to 0
  - **`curr`** = 5 (first array element)
  - acc = acc + curr (5 + 0 = 5)
  - **`acc = 5`** and returned

- **Iteration 2**

  - **`acc`** = 5 because it was returned from the previous iteration
  - **`curr`** = 1 (second array element)
  - acc = acc + curr (5 + 1 = 6)
  - **`acc = 6`** and returned

- **Iteration 3**

  - **`acc`** = 6 because it was returned from the previous iteration
  - **`curr`** = 3 (second array element)
  - acc = acc + curr (6 + 3 = 9)
  - **`acc = 9`** and returned

- **Iteration 4**

  - **`acc`** = 9 because it was returned from the previous iteration
  - **`curr`** = 2 (second array element)
  - acc = acc + curr (9 + 2 = 11)
  - **`acc = 11`** and returned

- **Iteration 5**
  - **`acc`** = 11 because it was returned from the previous iteration
  - **`curr`** = 6 (second array element)
  - acc = acc + curr (11 + 6 = 7)
  - **`acc = 11`** and returned but there is no more array elements so **`acc`** is returned and stored in **`sum`** variable.

**For Example:** find maximum number in an array

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

// find max number in an array using reduce()
const max = arr.reduce(function (currMax, curr) {
  currMax = Math.max(currMax, curr);
  return currMax;
}, -Infinity);

console.log("max:", max);
```

**OUTPUT:**

```
max: 6
```

**For Example:** find minimum number in an array

```javascript
"use strict";

const arr = [5, 1, 3, 2, 6];

// find min number in an array using reduce()
const min = arr.reduce(function (currMin, curr) {
  currMin = Math.min(currMin, curr);
  return currMin;
}, Infinity);

console.log("min:", min);
```

**OUTPUT:**

```
min: 1
```
