# Maps

A **`map`** is a collection of **key-value pairs**. A **`map`** maintains **insertion order** and maps can have any data type **(primitves and objects)** as keys and values.

<span style="color: red; background: yellow"><strong>NOTE: A key in the map may only occur once, it is unique in the map's collection.</strong></span>

## Creating a Map

In order to create a **`map`** we use the **new** keyword.

**For Example:**

```javascript
"use strict";

// creating a map object
const restaurant = new Map();
```

## Adding elements in a Map

We can add elements by using the **`set()`** method, where we pass in the **key** as the first arguement and it's **value** as the second argument.

**For Example:**

```javascript
"use strict";

// creating a map object
const restaurant = new Map();

// adding elements to map using set(key, value) method
restaurant.set("name", "Indian Fusion!");
restaurant.set(1, "Mumbai, India");
restaurant.set(2, "London, United Kingdom");
```

<span style="color: red; background: yellow"><strong>NOTE: Calling the set() returns the updated map, which essentially means we can chain multiple set() methods one after the other.</strong></span>

**For Example:**

```javascript
"use strict";

// creating a map object
const restaurant = new Map();

// adding elements to map using set(key, value) method
restaurant.set("name", "Indian Fusion!");
restaurant.set(1, "Mumbai, India");
restaurant.set(2, "London, United Kingdom");

// chaining multiple set() methods one after another
restaurant
  .set("categories", ["Indian", "Pan-Asian", "Non-Vegeterian"])
  .set("open", 10)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are close!");

console.log("restaurant:", restaurant);
```

**OUTPUT:**

```
restaurant: Map(8) {
  'name' => 'Indian Fusion!',
  1 => 'Mumbai, India',
  2 => 'London, United Kingdom',
  'categories' => [ 'Indian', 'Pan-Asian', 'Non-Vegeterian' ],
  'open' => 10,
  'close' => 23,
  true => 'we are open :D',
  false => 'we are close!'
}
```

## Reading data from a Map

We can use the **`get()`** method to retrieve the **`value`** of the specified **`key`**.

**For Example:**

```javascript
// reading data from map using get(key) method
console.log(restaurant.get("name"));
console.log(restaurant.get(true));
```

**OUTPUT:**

```
Indian Fusion!
we are open :D
```

You might have noticed that it is pretty weird to have **`boolean`** values as **`keys`** in a map. But in some cases it can come in handy.

Since we are allowed to use and data types for keys we could use boolean values as such:

```javascript
const time = 24;
const status = restaurant.get(
  time >= restaurant.get("open") && time <= restaurant.get("close")
);
console.log(status);
```

As you can see above we can write some cool expressions and get some nice results.

- **`time = 24`**
- when we get opening time by saying **`restaurant.get("open")`** we get the value **`10`**.
- when we get closing time by saying **`restaurant.get("close")`** we get the value **`23`**.
- When we check if **`time`** is within the opening and closing hours we get a boolean value either **`true`** or **`false`**. This boolean value is passed as an argument to **`restaurant.get()`** method which gives you a message about the restaurant being open or closed, because in the **`restaurant`** object **`true`** & **`false`** are **`keys`**. So whatever boolean value we get it will have some value associated with it.

**OUTPUT:**

```
we are close!
```

## Checking if a key exists in a map

We can check if a map contains a specified key by using the **`has()`** method. We specify the **`key`** we want to check for as the argument.

**For Example:**

```javascript
// checking if a map contains a certain key using has(key) method
console.log(restaurant.has("categories"));
console.log(restaurant.has("menu"));
```

OUTPUT:

```
true
false
```

## Deleting entries from a map

We can delete entries from a map by using the **`delete()`** method. We specify the **`key`** as the argument.

**For Example:**

```javascript
// using delete() method
restaurant.delete(2);
console.log("restaurant:", restaurant);
```

**OUTPUT:**

```
restaurant: Map(7) {
  'name' => 'Indian Fusion!',
  1 => 'Mumbai, India',
  'categories' => [ 'Indian', 'Pan-Asian', 'Non-Vegeterian' ],
  'open' => 10,
  'close' => 23,
  true => 'we are open :D',
  false => 'we are close!'
}
```

## Updating values of a key in a map

We can use the **set()** to update the value of a given **`key`**. When we pass the **`key`** as an argument in the **`set()`** method it will override its old value with the new one.

**For Example:**

```java
// using set() method to update value of a certain key
console.log(restaurant.set(1, "Bangalore, India"));
```

**OUTPUT:**

```
Map(7) {
  'name' => 'Indian Fusion!',
  1 => 'Bangalore, India',
  'categories' => [ 'Indian', 'Pan-Asian', 'Non-Vegeterian' ],
  'open' => 10,
  'close' => 23,
  true => 'we are open :D',
  false => 'we are close!'
}
```

**NOTE:** previously **`1 => "Mumbai, India"`** now it is updated to **`1 => "Bangalore, India"`**

## Size of map

We can use the **`size`** property to get the number of elements/entries of a **`map`**.

**For Example:**

```javascript
// getting the size of the map
console.log(restaurant.size);
```

**OUTPUT:**

```
7
```

## Clear all entries of a map

We can clear all elements/entries of a map, by simply calling the **`clear()`** method on the map object.

**For Example:**

```javascript
// using clear() method to clear all entries in map and have empty a map
restaurant.clear();
console.log("restaurant:", restaurant);
```

**OUTPUT:**

```
restaurant: Map(0) {}
```

## Iterating over a map

A **`map`** is an iterable object and therefore we can **`iterate through maps`** unlike objects.

```javascript
"use strict";

// creating a map
const books = new Map([
  ["Barbara Minto", "The Pyramid Principle"],
  ["Brianna Wiest", "The Mountain Is You"],
  ["Harper Lee", "To Kill a Mockingbird"],
  ["F. Scott Fitzgerald", "The Great Gatsby"],
  ["Michael D. Watkins", "The First 90 Days"],
  ["Kim Scott", "Radical Candor"],
]);

console.log("books", books);

// getting all the keys of the map
for (const key of books.keys()) {
  console.log(key);
}

// getting all the values of the map
for (const value of books.values()) {
  console.log(value);
}

// getting keys and values of the map
for (const [author, book] of books.entries()) {
  console.log(`${author} wrote the book : ${book}`);
}
```
