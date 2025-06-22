# Enhanced Object Literals

In ES6 JavaScript also introduced **`enhancements to object literals`**. With these enhancements you can write code to create objects that is easier to read and more concise.

## Key Shorthand

Let us assume we have the following two objects; **`address`** object and **`person`** object.

```javascript
"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,
};
```

Before ES6, if we wanted the address object to be inside the person object, we would do something like this:

```javascript
"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,
  address: address,
};

console.log("person:", person);
```

**OUTPUT:**

```
person: {
  firstname: 'Jessica',
  lastname: 'Williams',
  age: 47,
  address: { country: 'USA', city: 'Chicago' }
}
```

The output is as we expect where the person object now also has a address property. It is very common to set object keys that have the same name as the variable you are using to assign the value this can be confusing and quite repetitive when we are dealing with large objects, so JavaScript added the following shorthand syntax.

```javascript
"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,

  // ES6 key shorthand
  address,
};

console.log("person:", person);
```

The above code is the same as the previous example but we are taking advantage of this shorthand syntax to automatically assign the value of the **`address`** object to the **`address`** key in the **`person`** object.

**OUTPUT:**

```
person: {
  firstname: 'Jessica',
  lastname: 'Williams',
  age: 47,
  address: { country: 'USA', city: 'Chicago' }
}
```

## Function Shorthand

JavaScript also added the ability to shorten function definitions as well. Normally you would need to write code like the following.

```javascript
"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,

  // ES6 key shorthand
  address,

  // old way to write function
  getDetails: function () {
    console.log(
      `${this.firstname} ${this.lastname} is ${this.age} years old, who resides in ${this.address.city}, ${this.address.country}!`
    );
  },
};

// calling getDetails() function
person.getDetails();
```

With the new function shorthand syntax we can write the getDetails() function in object literals as follows:

```javascript
"use strict";

const address = {
  country: "USA",
  city: "Chicago",
};

const person = {
  firstname: "Jessica",
  lastname: "Williams",
  age: 47,

  // ES6 key shorthand
  address,

  // ES6 function shorthand
  getDetails() {
    console.log(
      `${this.firstname} ${this.lastname} is ${this.age} years old, who resides in ${this.address.city}, ${this.address.country}!`
    );
  },
};

// calling getDetails() function
person.getDetails();
```

The output in both cases are same!

**OUTPUT:**

```
Jessica Williams is 47 years old, who resides in Chicago, USA!
```

## Computed Property Names

The final enhancement to object literals is **`computed property names`**. Nowe we can use **`variables`** or **`expressions`** to define object keys when creating an object.

**For Example:**

```javascript
"use strict";

const fri = "friday";
const weekdays = ["mon", "tue", "wed", "thu", "sat", "sun"];

const footballPracticeSchedule = {
  // ES6 computed property names : weekday[0] -> "mon"
  [weekdays[0]]: {
    start: 10,
    end: 12,
  },

  // ES6 computed property names : "wed" + "nesday" -> "wednesday"
  [weekdays[2] + "nesday"]: {
    start: 15,
    end: 18,
  },

  // ES6 computed property names : variable fri -> "friday"
  [fri]: {
    start: 12,
    end: 14,
  },
};

console.log("schedule:", footballPracticeSchedule);
```

In the above code you can see that we wrapped the computed property names in square brackets and put some JavaScript code in there which will be converted to a string and then used as the property name. In our case this creates the following object.

**OUTPUT:**

```
schedule: {
  mon: { start: 10, end: 12 },
  wednesday: { start: 15, end: 18 },
  friday: { start: 12, end: 14 }
}
```

<span style="color:red; background-color:yellow"><strong>IMPORTANT NOTE: In order to do this before these enhancements we would have had to create the entire object first and then add the dynamic keys.</strong></span>
