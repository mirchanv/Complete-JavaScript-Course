# This keyword in JavaScript

The this keyword in JavaScript is special keyword/variable that is created for every execution context.

# Table of contents

1. [this in global space](#this-GlobalSpace)
2. [this inside a function](#this-Function)
3. [this inside non-strict mode](#this-NonStrictMode)
4. [this value depends on how the function is called (window)](#this-HowItsCalled)
5. [this inside an object's method](#this-InsideObjMethod)
6. [How this is modified using call(), apply() and bind() methods](#this-CallApplyBind)
7. [this inside an arrow function](#this-ArrowFunction)
8. [this inside nested arrow function](#this-NestedArrowFunction)
9. [this inside DOM elements](#this-DOM)

## this in global space<a id="this-GlobalSpace"></a>

The **`this`** keyword in global space will always have the value of the **`globalObject`**, which in the case of browsers is known as **`window`** object.

**For Example**

```javascript
console.log(this);
```

## this inside a fucntion<a id="this-Function"></a>

The value of **`this`** keyword inside a function is **`undefined`** but because JavaScript has something known as **this substitution** the value of **`this`** keyword become the **`globalObject`** if not using strict mode.

**Example: Using non-strict mode**

```javascript
function a() {
  console.log(this);
}
```

**OUTPUT:** `window`

**Explanation:**
This keyword inside a function in non-strict mode will have value of **`globalObject`**, hence **`window`**.

**Example: Using strict mode**

```javascript
"use strict"; // using strict mode

function a() {
  console.log(this);
}

a();
```

**OUTPUT:** `undefined`

**Explanation:**
This keyword inside a function in strict mode will have value of **`undefined`**.

## this inside non-strict mode<a id="this-NonStrictMode"></a>

In javaScript there is something called **this substitution** and according to this substitution:

- If the value of this keyword is **`undefined`** or **`null`** then the this keyword will be replaced with **`globalObject`** when using **non-strict** mode.

## this value depends on how the function is called (window)<a id="HowItsCalled"></a>

When calling functions as normal functions, meaning without a refernece to an object the **`this`** keyword is always undefined.

When an object is calling the method the **`this`** keyword will simply point to the **`object`** on which the method is called.

**For Example:**

```javascript
"use strict"; // using strict mode

function a() {
  console.log(this);
}

a(); // undefined
window.a(); // window object
```

## this inside an object's method<a id="this-InsideObjMethod"></a>

**`Important Note:`** A fucntion that is a part of an object is known as a **`method`** in JavaScript.

The **`this`** keyword will point to object calling the method.

**For Example:**

```javascript
"use strict"; // using strict mode

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

obj.x(); // this is pointing to obj
```

**OUTPUT:** `> {a: 10, x: ƒ}`

**Another Example:**

```javascript
"use strict"; // using strict mode

const person = {
  name: "Vishal",
  age: 34,
  intro: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old!`);
  },
};

person.intro(); // this is pointing to person object
```

**OUTPUT:** `My name is Vishal and I am 34 years old!`

Since **`this`** is pointing to the **`person`** object that means:

- this.name = person.name
- this.age = person.age

Therfore we get the values of **`name`** and **`age`** correctly in the output.

## How this is modified using call(), apply() and bind() methods<a id="this-CallApplyBind"></a>

The value of **`this`** can be modified using call(), apply() and bind() methods.

The call, apply and bind methods are used when we have to share methods.

What we mean bu `sharing` is that if a particular object has a method it can be used by other objects, this is called sharing/burrowing methods.

**For Example:**

```javascript
"use strict"; // using strict mode

const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  printFullName: function () {
    console.log(`${this.name} ${this.lastname}`);
  },
};

person1.printFullName(); // this is pointing to person1 object
```

- each and every function in JavaScript has access to the **`this`** keyword.
- In the example above the **`this = person1`**, as the **`person1`** is calling the method **`printFullName()`**.
- Therefore, **`this.firstname = person1.firstname = "Vishal"`**
- Therefore, **`this.lastname = person1.lastname = "Mirchandani"`**

**OUTPUT** `Vishal Mirchandani`

Now, let us assume there was another object named person2 which looked like the following:

```javascript
"use strict"; // using strict mode

// person2 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  printFullName: function () {
    console.log(`${this.name} ${this.lastname}`);
  },
};

person1.printFullName(); // this is pointing to person1 object

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};
```

## The call() method

We mentioned that call, apply and bind methods can be used to modify the **`this`** variable. But how?

Using the **`call()`** method we can do something known as **`function burrowing`**. We can burrow functions from other objects and use it with the data of some other object.

So let us try to use to **`call()`** method to burrow the **`printFullName()`** method from **`person1`** object but print out the details of **`person2`** object.

```javascript
"use strict"; // using strict mode

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  printFullName: function () {
    console.log(`${this.name} ${this.lastname}`);
  },
};

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

// using call()
person1.printFullName.call(person2);
```

- Where **`person1.printFullName`** is the object and method from whom you want to burrow.
- Where **`call`** is the method used to burrow another objects method.
- Where **`person2`** is the object you want **`this`** to point to.

**`NOTE:`** Generally when we are burrowing methods/functions we don't keep them inside a particular object, we just create a function expression as such:

```javascript
"use strict"; // using strict mode

// function expression
const printFullName = function () {
  console.log(`${this.name} ${this.lastname}`);
};

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};
```

Now we have a function expression **`printFullName(),person1 and person2`** objects, and we want to burrow this function **`printFullName()`** using call() method, so we simply do:

```javascript
"use strict"; // using strict mode

// function expression
const printFullName = function () {
  console.log(`${this.name} ${this.lastname}`);
};

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

// using call() to burrow printFullName()
printFullName.call(person1); // this = person1
printFullName.call(person2); // this = person2
```

**OUTPUT:**

`Vishal Mirchandani`

`Akshay Saini`

Let us go a step even further and say we modified the **`printFullName()`** that has parametes city and country. Our **`printFullName()`** would now look like this:

```javascript
"use strict"; // using strict mode

// function expression
const printFullName = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastname} is from ${city}, ${country}!`
  );
};
```

**How could we use the call() now?**

It is very simple actually, the **`1st argument passed in the call() is always the reference to which the this variable points to and all other arguments after that will be arguments function params.`**

**For Example:**

```javascript
"use strict"; // using strict mode

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

// function expression
const printFullName = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastname} is from ${city}, ${country}!`
  );
};

// using call() to burrow function
// where 1st arg is the reference to this keyword points to
// where 2nd and 3rd args are function params
printFullName.call(person1, "Bangalore", "India");

// using call() to burrow function
// where 1st arg is the object this keyword points to
// where 2nd and 3rd args are function params
printFullName.call(person2, "Hyderabad", "India");
```

**OUTPUT:**

`Vishal Mirchandani is from Bangalore, India!`

`Akshay Saini is from Hyderabad, India!`

## The apply() method

The **`apply()`** method works exactly the same as the **`call()`** method does. The only difference between **`call() and apply()`** is the way we pass arguments to the function.

- In **`call()`** method the 1st argument is always the reference to which the **`this`** variable is pointing to, and all other arguments are passed individually and comma seperated as we have seen in the previous example.
- In **`apply()`** method the 1st argument is always the reference to which the **`this`** variable is pointing to, and **`2nd argument is a list of arguments for the function params.`**

Re-writing the previous example using **`apply()`** method:

```javascript
"use strict"; // using strict mode

// function expression
const printFullName = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastname} is from ${city}, ${country}!`
  );
};

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// person2 object
const person2 = {
  firstname: "Akshay",
  lastname: "Saini",
};

// using apply() to burrow function
// where 1st arg is the reference to this keyword points to
// where 2nd arg is list of function params
printFullName.call(person1, ["Bangalore", "India"]);

// using apply() to burrow function
// where 1st arg is the object this keyword points to
// where 2nd arg is list of function params
printFullName.call(person2, ["Hyderabad", "India"]);
```

**OUTPUT:**

`Vishal Mirchandani is from Bangalore, India!`

`Akshay Saini is from Hyderabad, India!`

## The bind() method

The **`bind()`** method binds the functions with a specified object that the **`this`** variable is going to point to and will **`return a copy of that function.`**
This function can be used later at any time.

**For Example:**

```javascript
"use strict"; // using strict mode

// function expression
const printFullName = function (city, country) {
  console.log(
    `${this.firstname} ${this.lastname} is from ${city}, ${country}!`
  );
};

// person1 object
const person1 = {
  firstname: "Vishal",
  lastname: "Mirchandani",
};

// using bind()
let printMyDetails = printFullName.bind(person1, "London", "United Kingdom");

console.log(printMyDetails); // copy of function

printMyDetails(); // calling the function
```

**OUTPUT:**

**`printMyDetails`** contains an actual copy of the function which was returned by the **`bind()`**:

![alt text](<./images/bind().png>)

When calling **`printMyDetails()`** as a function, we get:

`Vishal Mirchandani is from London, United Kingdom!`

## this inside an arrow function<a id="this-ArrowFunction"></a>

Arrow functions do not have their own **`this`** binding. They retain the value of **`this`** from the **lexical context** in which they are eclosed in.

**For Example:**

```javascript
"use strict"; // using strict mode

const person1 = {
  name: "Vishal",
  age: 34,
  printDetails: () => {
    console.log(this);
  },
};

person1.printDetails(); // window object
```

**OUTPUT:**

`> Window {window: Window, self: Window, document: document, name: '', location: Location, …}`

Okay, so this might seem a bit confusing! Normally we would have expected that **`person1`** would be printed out to the console as **`this`** should be pointing to the caller object. However in our example we made use of an **arrow function** and hence the **`this`** value is not **`person1`** object, instead it will be its **`enclosing lexical context`**.

### What does lexical mean?

We must ask ourselves where **`person1`** object is written in our code? Where is the **`person1`** object lexcically present inside the code?

**Answer:** **`person1`** is lexically inside **`global scope`**

Inside global scope we know that **`this`** variable is pointing to the global object, which in the case of browsers is **`window`** object. Therefore, the value of **`this`** inside the arrow function is retained by its **lexically enclosing context** that is **`this = window`**

**Another Example:**

```javascript
"use strict"; // using strict mode

function greet() {
  let person1 = {
    age: 34,
    printDetails: () => {
      console.log(this); // this = undefined
    },
  };
  person1.printDetails();
}

greet();
```

**OUTPUT:** `undefined`

In the above example we have made use of an arrow function. We already know that when using arrow function the value of **`this`** is not the calling object, hence in our example the value of **`this`** will not be **`person1`** object. Instead, the value of **`this`** will come from where it is lexically present in, **`person1`** is lexically present inside function **greet()** and we know that when using **strict mode** the value of **`this`** inside normal functions is **`undefined`**.

In **`non-strict`** mode the value of this inside a function would be the same as in **global scope**, that is **`window`** object. Please see below:

```javascript
function greet() {
  let person1 = {
    age: 34,
    printDetails: () => {
      console.log(this); // this = window object
    },
  };
  person1.printDetails();
}

greet();
```

**OUTPUT:**
`> Window {window: Window, self: Window, document: document, name: '', location: Location, …}`

## this inside nested arrow function<a id="this-NestedArrowFunction"></a>

**Code Example:**

```javascript
"use strict"; // using strict mode

let obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // this = obj object
    };
    y();
  },
};

obj.x();
```

**OUTPUT:** `{a: 10, x: ƒ}`

In the above example we have a **`obj`** object containing a method **`x()`** and inside this method we have an **arrow function** named stored in variable **`'y'`**. The value of this inside an arrow function will be its **enclosing lexical context** which in this case is function **`x()`**, but function **`x()`** is called by **`obj`** object, therefore the value of **`this = obj`** object.

## this inside DOM elements<a id="this-DOM"></a>

If a function is called as an **event listener**, then the **`this`** keyword will always point to the **`DOM html element`** ​that the handler function is attached to.​

**For Example:**

```javascript
// this inside DOM elements
const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function () {
  console.log(this); // this = button element itself
});
```

**OUTPUT:** **`<button id="btn">Click Me</button>`**

**Explanation:** The button element itself is the value of **`this`** in our example.

The same example could be done in our HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>This Keyword</title>
  </head>
  <body>
    <h1>This Keyword in JavaScript 🙏🏽</h1>
    <button id="btn" onclick="alert(this)">Click Me</button>
    <script src="script.js"></script>
  </body>
</html>
```

**OUTPUT:** alerting what this is pointing to -> HTML Button Element as the event handler **`onclick`** is attached to the button element.

![alt text](./images/this-DOM.png)
