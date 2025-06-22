# Optional Chaining

**`Optional chaining`** in JavaScript is a powerful feature that allows you to **`safely access nested properties`** of an object without having to manually check for the existence of each level in the chain.

## The problem without optional chaining

Let us assume we are dealing with objects specifically **`user objects`**. Where each **`user`** may have a vehicle but not everybody has a vehicle.

**Examples of objects:**

```javascript
"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};
```

As you can see above **`user1`** has a **`vehicle`** and therefore has information related to it within a nested object. Whereas **`user2`** does not have a **`vehicle`** and there for no nested objects are found. We want to extract **`registrationNo`** for all the **`user`** data that we get.

One way to do this is to directly access the **`registrationNo`** property:

```javascript
"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};

// directly accessing nested property: registrationNo of user1
const regNo = user1.vehicle.registrationNo;
console.log("regNo received:", regNo);
```

**OUTPUT:**

```
regNo received: BG 46 284
```

Sure, we can do that but it will not work in all cases as we are not safely accessing the nested property. Here we are assuming the property exists, but it may not exist as we previously seen, we can get data of users who do not own a vehicle. If we directly access nested properties for users that do not have vehicle information then we will get **`Error`**.

**For Example:**

```javascript
"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};

// directly accessing nested property: registrationNo of user2
const regNo = user2.vehicle.registrationNo;
console.log("regNo received:", regNo);
```

**OUTPUT:**

```
Uncaught TypeError: Cannot read properties of undefined (reading 'registrationNo')
```

As we expected we get an **`error`**. But why? This is because we want access the property **`registrationNo`** from **`vehicle`** and we want property **`vehicle`** from **`user2`** object. **`user2`** object exist so JavaScript will try to find property named **`vehicle`**, since **`user2`** object does not have **`vehicle`** the following **`user2.vehicle`** returns **`undefined`** and then we are trying to call **`undefined.registrationNo`** which is what gives an error.

To safely access nested properties without optional chaining we would have to do the following:

- check is user object exists, if it exists then check is if user object has a vehicle object, and only if it has a vehicle object should we access the registrationNo.

Translating the above to code would look like:

**`user1 && user1.vehicle && user1.vehicle.registrationNo`**

**Full Code:**

```javascript
"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};

// safely accessing nested properties without optional chaining
const regNo = user1 && user1.vehicle && user1.vehicle.registrationNo;
console.log("regNo received:", regNo);
```

**OUTPUT:**

```
regNo received: BG 46 284
```

As we can see we get the correct output but does it also work for user2 who does not have vehicle information.

```javascript
"use strict";

const user1 = {
  fullname: "Jessica Williams",
  age: 34,
  vehicle: {
    make: "Audi",
    model: "Q7",
    year: 2020,
    registrationNo: "BG 46 284",
  },
};

const user2 = {
  fullname: "John Smith",
  age: 43,
};

// safely accessing nested properties without optional chaining
const regNo = user2 && user2.vehicle && user2.vehicle.registrationNo;
console.log("regNo received:", regNo);
```

**OUTPUT:**

```
regNo received: undefined
```

Since **`user2.vehicle`** is **`undefined`** meaning a **`falsy value`** the && operator short-circuits and returns the first falsy value found and the rest of the expression is not evaluated.

**But it does work and we do not get error!** The above line of code that we used works for all user objects but as nesting gets deeper each level of nested chain has to be checked and it can quickly get long and very hard to hard. This is where **`optional chaining`** becomes a great choice.

**`Optional chaining`** addresses this issue by providing a more concise and readable way to handle such cases. It allows you to write code that attempts to access a property of an object, but if at any level in the chain the value is **`null`** or **`undefined`**, it will return **`undefined`** instead of throwing an error.

The syntax for optional chaining uses the **`?.`** operator:

**Before optional chaining:**

```javascript
// safely accessing nested properties without optional chaining
const regNo = user1 && user1.vehicle && user1.vehicle.registrationNo;
console.log("regNo received:", regNo);
```

**After optional chaining:**

```javascript
const regNo = user1?.vehicle?.registrationNo; // optional chaining
console.log("regNo received:", regNo);
```

In both the cases we get the same output:

```
regNo received: BG 46 284
```

We can also combine **`optional chaining`** with **`nullish operator`** to get a more descriptive message for users without vehicle information.

**For Example:**

```javascript
// optional chaining and null operator
const regNo =
  user2?.vehicle?.registrationNo ?? "This user does not own a vehicle!";
console.log("regNo received:", regNo);
```

**OUTPUT:**

```
regNo received: This user does not own a vehicle!
```

Optional chaining also works for calling methods. Essentially we can check if a method exists before we call it.

**For Example:**

```javascript
"use strict";

// car1 objct that has drive() method
const car1 = {
  make: "Audi",
  model: "Q7",
  year: 2022,
  drive(speed) {
    return `${this.make} ${this.model} is driving at ${speed} km/h. Wroooom 🚗`;
  },
};

// car2 object without drive() method
const car2 = {
  make: "Audi",
  model: "Q7",
  year: 2022,
};

// Optional chaining for method calls
console.log(car1.drive?.(80) ?? "drive() method does not exist!");
console.log(car2.drive?.(50) ?? "drive() method does not exist!");
```

In this example we are first checking if the **`drive()`** mnethod exists, if it does then the **`drive()`** simply returns a string which will then be logged to the console and if it doesn't exist then the **`right side`** of the expression is logged as we are using the **`nullish operator`**!

**OUTPUT:**

```
Audi Q7 is driving at 80 km/h. Wroooom 🚗
drive() method does not exist!
```

- Since **`drive()`** exists for **`car1`** object it successfully logged out the message **Audi Q7 is driving at 80 km/h. Wroooom 🚗**
- Since the **`drive()`** does not exist for **`car2`** object it prints the message: **`drive() method does not exist!`**

## Optional Chaining in Arrays

Optional chaining also works on arrays, ands this can be very useful in some cases in order to avoid unwanted errors.

**For Example:**

```javascript
"use strict";

// Optional chaining in arrays
const person = {
  name: "Joey",
  age: 19,
  school: "School of South East Asia",
  friends: ["Brian", "Mike", "Luna"],
  hobbies: [],
};

// optional chaining - first friend in friends array
console.log(person.friends?.[0] ?? "This person has no friends!");

// optional chaining - first hobby in hobbies array
console.log(person.hobbies?.[0] ?? "This person has no hobbies!");
```

**OUTPUT:**

```
Brian
This person has no hobbies!
```
