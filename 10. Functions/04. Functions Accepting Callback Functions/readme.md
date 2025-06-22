# Callback Functions In JS

A **`callback function`** is a function that is passed as an argument to another function.
Using callback functions allows you to call a function from another function.

On the other hand a **`higher order function`** is a function that takes a function as parameters, or returns a function as a resul, or both.

**`For Example:`**

```javascript
"use strict";

const print = function (value) {
  console.log(value);
};

// higher order function that accepts a function as a parameter
function calculateSum(num1, num2, printFn) {
  const sum = num1 + num2;

  // invoking the funtion
  printFn(sum);
}

// callback function
calculateSum(10, 20, print);
```

In this example we have a **`calculateSum()`** function that takes 2 numbers and a function, **`calculateSum()`** is an example of a **`higher order function`**. We simply calculate the sum of the numbers and store it in a variable named **`sum`** . We then invoke the **`callback function printFn()`** passing in **`sum`** as the argument.

The **`callback function`** is passed as an argument when we call the **`calculateSum()`** function.

The definition of the **`callback function`** is very simple, it print out the argument passed which is **`sum`** in our case on to the console.

**OUTPUT:**

```
30
```

Another example:

```javascript
// definition of callback function
const ISBNFormatter = function (isbn) {
  console.log(`Inside ISBNFormatter(), formatting your ISBN...`);

  // replacing all spaces with -
  return isbn.replaceAll(/ /g, "-");
};

// higher order function
const transformer = function (isbn, format) {
  console.log(`Inside transformer(), received ISBN = ${isbn}`);
  console.log(`Calling ${format.name} from transformer()`);
  console.log(`Formatted ISBN: ${format(isbn)}`);
};

// callback function
transformer("978 0 306 40615 7", ISBNFormatter);
```

**OUTPUT:**

```
Inside transformer(), received ISBN = 978 0 306 40615 7
Calling ISBNFormatter from transformer()
Inside ISBNFormatter(), formatting your ISBN...
Formatted ISBN: 978-0-306-40615-7
```

In this example the **`higher order function `**is **`transformer()`** function as it accepts **`ISBNFormatter`** function as an argument. The **`transformer()`** receives the **ISBN** number and invokes the **`callback function`**, the **`callback function`** formats the **ISBN** number correctly and returns it.

<span style="color: red; background-color: yellow"><strong>NOTE: JS uses callback all the time</strong></span> ☺️
