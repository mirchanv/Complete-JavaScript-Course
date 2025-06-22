# The Spread Operator

The spread operator, written as **`...`**, is used to unroll (spread) an iterable _collection (objects, arrays, strings, maps and sets)_ into **`individual elements seperated by comma`**.

Let us assume we are given the following array:
**`const arr = [7, 8, 9];`** and we want to create another array having values 1, 2, and 3 and then all the values of the array **`arr`**.

Doing it manually would look like the following:

```javascript
"use strict";

const arr = [7, 8, 9];

// bad approach
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log("badNewArr:", badNewArr);
```

**`OUTPUT:`**

```
badNewArr: [ 1, 2, 3, 7, 8, 9 ]
```

Sure enough we have achieved the task, but doing it this way can be quite tidious. The same can be achieved by using the **`spread`** operator.

**For Example:**

```javascript
"use strict";

const arr = [7, 8, 9];

// good approach
const newArr = [1, 2, 3, ...arr];
console.log("newArr:", newArr);
```

**`OUTPUT:`**

```
newArr: [ 1, 2, 3, 7, 8, 9 ]
```

As we saw the **`spread`** operator can be very useful. After the **`...`** we simply specify the array of which we want the elements from. In this case we specified we want all elements from array **`arr`** to be **`spread`** after elements 1, 2, and 3 in the **`newArr`** and as a result we get **`newArr: [ 1, 2, 3, 7, 8, 9 ]`**.

**Another Example:**

```javascript
"use strict";

const arr = [7, 8, 9];

// good approach
const newArr = [1, 2, 3, ...arr];

// logging out individual elements of newArr using spread operator
console.log(...newArr);
```

**OUTPUT:**

```
1 2 3 7 8 9
```

**`Another Example:`**

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
  - ${this.mainMenu[mainIndex]}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },
};

// creating a newMenu array from existing one
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log("mainMenu:", restaurant.mainMenu);
console.log("newMenu:", newMenu);
```

**OUTPUT:**

```
mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ]
newMenu: [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]
```

**`NOTE:`** As we can see the original array was not affected this is because we are creating a new array object when we say: **`const newMenu = [...restaurant.mainMenu, "Gnocci"];`** as the square brackets have been used.

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
  - ${this.mainMenu[mainIndex]}
 Deliver To:
  - ${address}},
 Deliver Time:
  - ${time}
        `);
  },
};

// joining arrays together
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("fullMenu:", fullMenu);
```

**OUTPUT:**

```
fullMenu: [
  'Focaccia',
  'Bruschetta',
  'Garlic Bread',
  'Caprese Salad',
  'Pizza',
  'Pasta',
  'Risotto'
]
```

**`Another Example:`** Spread Operator on Strings

```javascript
"use strict";

const name = "Vishal";

// using spread operator to get all letters individually
const letters = [...name];
console.log("letters:", letters);
```

**OUTPUT:**

```
letters: [ 'V', 'i', 's', 'h', 'a', 'l' ]
```

## The Spread Operator on Objects

The **`spread`** operator can also be used on objects. When using the **`spread`** operator on objects it **`copies all properties [key-value]`** pairs.

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

// spread operator on objects
const newRestaurant = {
  founder: "Franco Zane",
  foundedIn: 1933,
  ...restaurant,
};

console.log("restaurant:", restaurant);
console.log("newRestaurant:", newRestaurant);
```

**OUTPUT:**

```
restaurant: {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
  starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
  mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
  },
  orderDelivery: [Function: orderDelivery],
  orderPasta: [Function: orderPasta]
}
newRestaurant: {
  founder: 'Franco Zane',
  foundedIn: 1933,
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
  starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
  mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
  },
  orderDelivery: [Function: orderDelivery],
  orderPasta: [Function: orderPasta]
}
```

**`NOTE:`** Adding more properties to the **`newRestaurant`** did not manipulate the original **`restaurant`** object.

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

// copying a object using spread operator
const restaurantCopy = { ...restaurant };

// renaming the restaurant for restaurantCopy
restaurantCopy.name = "Italiano Shabamo!";

console.log("restaurantCopy.name = ", restaurantCopy.name);
console.log("restaurant.name = ", restaurant.name);
```

**OUTPUT:**

```
restaurantCopy.name =  Italiano Shabamo!
restaurant.name =
```

**`NOTE:`** Again we see that **updating** the property of one object that was copy of another object using the **`spread`** operator did not change the original objects property value. It remains **`unchanged`** and **`intact`**.

<span style="color: red"> **IMPORTANT NOTE: When dealing with nested arrays or objects, the nested references are pointing to the same object in memory, so if one object changes its property value it will reflect on the other object also!**

**For Example:**

```javascript
"use strict";
// spread operator with nested objects
const person = {
  name: "Helen",
  age: 23,
  address: {
    city: "New York",
    country: "USA",
  },
};

// using the spread operator
const personCopy = {
  ...person,
};

// initial state of person and personCopy
console.log(person);
console.log(personCopy);

// updating city for personCopy
personCopy.address.city = "Miami";

// Results affected in both objects as nested objects are shallow copies
console.log(person);
console.log(personCopy);
```
