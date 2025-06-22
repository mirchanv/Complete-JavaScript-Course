# The Rest pattern & Parameters

The **`rest`** pattern uses the exact same syntax as the **`spread`** operator. However, the **`rest`** pattern uses **`...`** to **collect muliple elements and condense them into an array.**

The **`rest`** pattern can be used for arrays and objects and it becomes even more handy when dealing with function paramters.

Let us go through some examples in order to understand how the **`rest`** pattern works and how it is different than the **`spread`** operator.

## The Rest pattern used with arrays

**For Example:** Store the first two elements of a given array into variables **`a`** and **`b`** and the rest or the elements into an array named **`remainingNums`**.

```javascript
"use strict";

const [a, b, ...remainingNums] = [1, 2, 3, 4, 5];
console.log("a:", a);
console.log("b:", b);
console.log("remainingNums:", remainingNums);
```

**OUTPUT:**

```
a: 1
b: 2
remainingNums: [ 3, 4, 5 ]
```

As we can see, we first used destrcutring to store the first element of the array into variable **`a`** and then we stored the second element of the array into variable **`b`** and finally for the rest of the array elements we used the **`rest`** pattern to collect the remaining array elements which have been condensed into an array object named **`remainingNums`**.

**Another Example:**

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

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(`Yay! Order Received 🎉
 Starters:
  - ${this.starterMenu[starterIndex]}
 Mains:
  - ${(this, this.mainMenu[mainIndex])}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta iw now being cooked with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
};

// storing pizza and risotto dish into variables names bestseller1 and bestseller2 and storing all other menu items into a array named menu
const [bestseller1, , bestseller2, ...menu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log("bestseller1:", bestseller1);
console.log("bestseller2:", bestseller2);
console.log("menu:", menu);
```

## The Rest pattern used with objects

The **`rest`** pattern can be used with objects also and the only difference here is that the remaining/rest of the properties of the objects will be condensed in an **`object`** and not an array.

**For Example:** From our **`restaurant`** object we would like sat from **`openingHours`** to be stored in a variable named **`sat`**, and the rest of the days into an object named **weekdays**.

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

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(`Yay! Order Received 🎉
 Starters:
  - ${this.starterMenu[starterIndex]}
 Mains:
  - ${(this, this.mainMenu[mainIndex])}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Your delicious pasta iw now being cooked with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
};

// rest pattern used with objects
const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log("sat:", sat);
console.log("weekdays:", weekdays);
```

**OUTPUT:**

```
sat: { open: 0, close: 24 }
weekdays: { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }
```

In the above examples we have seperated **`sat`** opening hours from **`weekday`** opening hours, where **`weekday`** contains **`thu`** and **`fri`** opening hours.

## Rest Parameters in Functions

**`Rest`** parameter allows a function to accept an **`indefinite number of arguments as an array`**

Let us assume we have **`add()`** function and we would like to be able to call as follow:

- add(2, 3);
- add(2, 3, 5, 7);
- add(3, 5, 1);

Normally when we write functions we have fixed parameters defined in functions but in our case we do not know how many numbers the user wants to add. In this case we can make use of the rest paramters. When using rest paramaters we can pass as many arguments as we want and the function will accepts them as a condensed array arguments passed to it.

**For Example:**

```javascript
"use strict";

// rest parameters
const add = function (...nums) {
  console.log("nums:", nums);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(2, 3, 5, 7));
console.log(add(3, 5, 1));
```

OUTPUT:

```
nums: [ 2, 3 ]
5
nums: [ 2, 3, 5, 7 ]
17
nums: [ 3, 5, 1 ]
9
```

In the above example we have made use of **`rest`** paramters wherby when calling the function we can pass indefinite number of arguments to the **`add()`** function. By making use of the **`rest`** paramters this is possible in JavaScript as all arguments passed will be condensed into an array. We can also see the array and its containing elements for each call. Finally we are simply looping through the array and calculating the sum and return it.

**Another Example:**

```javascript
"use strict";

const addCopy = function (a, b, ...nums) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("nums:", nums);

  // adding the a and b
  let sum = a + b;
  for (let i = 0; i < nums.length; i++) {
    // adding all other elements in nums[]
    sum += nums[i];
  }
  return sum;
};

console.log(addCopy(10, 20, 2, 1, 5, 6));
```

**OUTPUT:**

```
a: 10
b: 20
nums: [ 2, 1, 5, 6 ]
44
```

Here, the first two arguments stored in variables names **`a`** and **`b`** and then the rest are condensed into an array named **`nums`** as the **`rest`** paramters has been used.
