# Default Parameters

Sometimes it is useful to have function hat where some paramters are set by default.
This way, we do not have to pass them in manually in case we want the default values itself. Also it helps prevent errors and unexpected results in the case of missing function paramaters.

**For Example:**

```javascript
"use strict";

function greet(name) {
  console.log(`Hello ${name}!`);
}

greet();
greet("Vishal");
```

**OUTPUT:**

```
Hello undefined!
Hello Vishal!
```

As we can see if we do not pass in the **`name`** argument that can be mapped to the function paramater **`name`** then the result is **`Hello undefined!`** which is not what we want.

Setting default paramters allows us to have a setback value just incase the user did not pass in the argument as expected.

**For Example:**

```javascript
"use strict";

function greet(name = "Stranger") {
  console.log(`Hello ${name}!`);
}

greet();
greet("Vishal");
```

**OUTPUT:**

```
Hello Stranger!
Hello Vishal!
```

Here we have made use of **`default paramater`**. We can see that **`name = "Stranger"`**, this means when the function **`greet()`** is called **without** a **`name`** argument, the **`name = "Stranger"`**, however this does not restrict the user to in any way, in fact if the user passes in the **`name`** argument while calling then **`greet()`** it will use the user passed argument. As demonstrated above in the code and output.

**Another Example:**

```javascript
const allBookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  // creating a booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log("booking:", booking);
  allBookings.push(booking);
};

createBooking("LH123");
```

**NOTE:** we have set 2 default parameters; **`numPassengers`** and **`price`**. Whenever we want to create a booking it means someone is travelling, could be a group or a couple but at minimum **`1`** person travels hence **`numPassengers = 1`**, the **`price`** is by default 199 per person and therefore the **default value** of **`price = numPassengers * 199`**.

**EXPLANATION:**
Notice, we did not pass in **`numPassengers`** and **`price`** as functions arguments when calling the **`creatingBooking()`**, therefore their default values must be taken.

**OUTPUT**

```
booking: {flightNum: 'LH123', numPassengers: 1, price: 199}
```

**Example of overriding default parameters:**

```javascript
const allBookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  // creating a booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log("booking:", booking);
  allBookings.push(booking);
};

// overriding numPassengers because 2 people are travelling
createBooking("LM123", 2);
```

And here we have overriden the value of **`numPassengers`** and the **`price`** is now calculated dynamically.

**OUTPUT:**

```
booking: {flightNum: 'LM123', numPassengers: 2, price: 398}
```

Let us assume there is a special summer offer where tickets are being sold at half price. How could we skip a parameter and update the price? Well, we simply use the **`undefined`** value as **`undefined`** means **`not assigned`**, since it is not defined it means default value will be taken and problem is solved!

**For Example:**

```javascript
"use strict";

const allBookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers * 199
) {
  // creating a booking object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log("booking:", booking);
  allBookings.push(booking);
};

// assuming there is 50% off on tickets, we want to skip numPassengers by passing undefined and pass in new discounted price
createBooking("BA342", undefined, 99.5);
```
