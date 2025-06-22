# For of Loop

A **`for...of`** loop operates on the values sourced from an **`iterable`** one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. **`Iterable objects`** include: **Array, String, TypedArray, Map, Set, and NodeList.**

<span style="color:red; background-color:yellow"><Strong>IMPORTANT NOTE: We can/able use break and continue statements in the for of loop.</Strong></span>

## Syntax

```javascript
for (const variable of iterable) // statement
```

```javascript
for (const variable of iterable) {
  // statement
}
```

- Where **`variable`** receives a value from from the iterable we are iterating through.

- Where **`iterable`** is an iterable object. The source of values on which the loop operates.

- Where **`statement`** is a statement to be executed on every iteration. You can use a block statement to execute multiple statements.

**`For Example:`**

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

// using the spread operator to get all individual elements from starterMenu and mainMenu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// iterating over the menu array using for of loop
for (const currentItem of menu) {
  console.log(currentItem);
}
```

**OUTPUT:**

```
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto
```

Here we see that **`menu`** is the iterable we are looping through and at each iteration we get access to the current array element which is then stored in a variable named **`currentItem`**.

**But what if we also wanted the current index along with the value at each iteration?**

There is a way to get both; index values and the values at those index positions. We would have to do the following:

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

// using the spread operator to get all individual elements from starterMenu and mainMenu
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("menu:", menu);

// using array entries() method to get index values
for (const currentItem of menu.entries()) {
  console.log(`${currentItem[0] + 1} : ${currentItem[1]}`);
}
```

**OUTPUT:**

```
1 : Focaccia
2 : Bruschetta
3 : Garlic Bread
4 : Caprese Salad
5 : Pizza
6 : Pasta
7 : Risotto
```

Let us understand a little more about the arrays entries() in order to understand how we got this output. So what exactly is **`menu.entries();`**

Well, one thing we can say for sure is that the entried() returns an iterable object therefore it can be used in for of loop.

So let us first check what currentItem stores at each iteration. That will give us an idea what menu.emtries() returned.

```javascript
for (const currentItem of menu.entries()) {
  console.log(currentItem);
}
```

OUTPUT:

```
[1, 'Bruschetta']
[2, 'Garlic Bread']
[3, 'Caprese Salad']
[4, 'Pizza']
[5, 'Pasta']
[6, 'Risotto']
```

Great, so now we know that the entries() returned an **`iterable object`** that contains a list of arrays storing key/value pairs from an **`menu`** array.

We can also prove this by simple using the **`spread operator ...`** on **`menu.entries()`**

```javascript
console.log(menu.entries());
```

**OUTPUT:**

```
[
  [ 0, 'Focaccia' ],
  [ 1, 'Bruschetta' ],
  [ 2, 'Garlic Bread' ],
  [ 3, 'Caprese Salad' ],
  [ 4, 'Pizza' ],
  [ 5, 'Pasta' ],
  [ 6, 'Risotto' ]
]
```

So we can now say it returns an array, which in each position contains a new array containing the key/value pairs of the **`menu`** array.

Therefore **`currentItem`** at each iteration is actually an array.

- where **`currentItem[0]`** is the index/key
- where **`currentItem[1]`** is the corresponding value mapped to that index

But, we can make our solution even better now that we know what is actually going on and what is being received at each iteration by using destructing syntax for arrays.

**ORIGINAL APPROACH:**

```javascript
// using array entries() method to get index values
for (const currentItem of menu.entries()) {
  console.log(`${currentItem[0] + 1} : ${currentItem[1]}`);
}
```

**OUTPUT:**

```
1 : Focaccia
2 : Bruschetta
3 : Garlic Bread
4 : Caprese Salad
5 : Pizza
6 : Pasta
7 : Risotto
```

Since we know that at each iteration we get an array of **`[index, value]`** let us destrcture it and make our syntax even more readble and concise.

**NEW & IMPROVED APPROACH:**

```javascript
// using array entries() method to get index values with destructing
for (const [itemNo, item] of menu.entries()) {
  console.log(`${itemNo + 1} : ${item}`);
}
```

**SAME OUTPUT:**

```
1 : Focaccia
2 : Bruschetta
3 : Garlic Bread
4 : Caprese Salad
5 : Pizza
6 : Pasta
7 : Risotto
```
