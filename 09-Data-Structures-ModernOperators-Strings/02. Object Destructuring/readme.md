# Object Destructuring

**`Object destructuring`** allows you to easily **extract** properties from an object and assign those properties to variables.

Typically, without using **`object destructuring`** we would do the following:

```javascript
"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

// extracting object property values using object.propertyName
const firstname = person.firstname;
const lastname = person.lastname;
const age = person.age;

console.log("firstname:", firstname);
console.log("lastname:", lastname);
console.log("age:", age);
```

**OUTPUT:**

```
firstname: Vishal
lastname: Mirchandani
age: 34
```

With **`object destructuring`** we can achieve the same result but with just a single line of code that is more readable.

**For Example:**

```javascript
"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

// object destructuring
const { firstname, lastname, age } = person;

console.log("firstname:", firstname);
console.log("lastname:", lastname);
console.log("age:", age);
```

**OUTPUT:**

```
firstname: Vishal
lastname: Mirchandani
age: 34
```

Now what if we wanted to extract all the properties values of person object but in variables named:

1. **`myFirstname`** (should be assigned **`Vishal`**)
2. **`myLastname`** (should be assigned **`Mirchandani`**)
3. **`myAge`** (should be assigned **`34`**)

Is this even possible? Yes. There are cases where you want the destructured variable to have a different name than the **property name**; in that case, you'll use a **`: newName`** to specify a name for the variable.

**`For Example:`**

```javascript
"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

// object destructuring with different variables names than property names
const { firstname: myFirstname, lastname: myLastname, age: myAge } = person;

console.log("myFirstname:", myFirstname);
console.log("myLastname:", myLastname);
console.log("myAge:", myAge);
```

**OUTPUT:**

```
myFirstname: Vishal
myLastname: Mirchandani
myAge: 34
```

## Accessing Object Properties That Don't Exist

Let us try to see what happens when we try to access a property that does not exist in the object itself.

**`For Example:`**

```javascript
"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

// accessing language property that does not exist
const {
  firstname: myFirstname,
  lastname: myLastname,
  age: myAge,
  language,
} = person;

console.log("myFirstname:", myFirstname);
console.log("myLastname:", myLastname);
console.log("myAge:", myAge);
console.log("language:", language);
```

**OUTPUT:**

```
myFirstname: Vishal
myLastname: Mirchandani
myAge: 34
language: undefined
```

As we can see from the output above, if we try to access a property that doesn't exist in the object we will simply get value of **`undefined`**.

## Passing default values while destructuring

While **`destructuring`** we can also set default values to variables in case the property the property does not exist the **`default value`** can be used instead.

**`For Example:`**

```javascript
"use strict";

const person = {
  firstname: "Vishal",
  lastname: "Mirchandani",
  age: 34,
};

const {
  firstname: myFirstname,
  lastname: myLastname,
  age: myAge = 100, // passing a default value to existing property
  language = "Hindi", // passing a default value to non-existing property
} = person;

console.log("myFirstname:", myFirstname);
console.log("myLastname:", myLastname);
console.log("myAge:", myAge);
console.log("language:", language);
```

**OUTPUT:**

```
myFirstname: Vishal
myLastname: Mirchandani
myAge: 34
language: Hindi
```

From the output it is clear that default values are only taking affect when a property isn't found in that object, for example in our case the **`language`** property was not found, since it wasn't found it was assigned the specified default value **`Hindi`** and printed that out. Whereas in the case of **`age`**, since it is a valid property that exists, it contained and printed the value specified in the object and not the default value of 100.

## Destructuring Nested Objects

In real world applications we are dealing objects and many of these objects can be **`nested`**, many of them even containing multi-layers of nesting. Often times all we want is to **`extract`** a specific property from an object in order to complete our task. We already know how to destructure obejcts and extract a particular property, but let's now see how we can **`destucture nested object`**.

**For Example:**

```javascript
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
```

Let us assume that we are given the above **`restaurant`** object and our task is use **`destructing`** in order to get the **`open`** and **`close`** times for **`fri`**.

From what we have learned up until this point we could solve the problem by doing the following:

**STEP 1:** Destructure **`openingHours`** from **`restaurant`** object

```javascript
"use strict";

const { openingHours } = restaurant;
console.log("openingHours:", openingHours);
```

**OUTPUT:**

```
openingHours: {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
}
```

**STEP 2:** Destructure **`fri`** from **`openingHours`** object

```javascript
"use strict";

const { fri } = openingHours;
console.log("fri:", fri);
```

**OUTPUT:**

```
fri: { open: 11, close: 23 }
```

**STEP 3:** Destructure **`open`** and **`close`** from **`fri`** object

```javascript
"use strict";

const { open, close } = fri;
console.log("open:", open);
console.log("close:", close);
```

**OUTPUT:**

```
open: 11
close: 23
```

**Putting it all together:**

```javascript
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { openingHours } = restaurant;
console.log("openingHours", openingHours);

const { fri } = openingHours;
console.log("fri:", fri);

const { open, close } = fri;
console.log("open:", open);
console.log("close:", close);
```

Now we have achieved the task of extracting **`open`** and **`close`** times for **`fri`**. But this is not exactly the most efficient way and it is quite long. We can re-write and achieve the same by doing the following:

**The better way to do it:**

```javascript
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring nested objects
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;

console.log("open:", open);
console.log("close:", close);
```

**OUTPUT:**

```
open: 11
close: 23
```
