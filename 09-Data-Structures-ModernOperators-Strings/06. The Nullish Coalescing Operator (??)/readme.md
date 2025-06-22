# The Nullish Coalescing operator (??)

The **`nullish coalescing operator`** is written as two question marks **`??`**. It is a logical operator that returns its right-hand side operand when its left-hand side operand is **`null`** or **`undefined`**, and otherwise returns its left-hand side operand. It's commonly used to provide default values for variables.

But can we not just use the logical **`OR ||`** to set default values for variables.

That is correct we can do that, so let's us dive into an example!

**For Example: **

```javascript
"use strict";

const johnsMarks = {
  english: 76,
  compSci: 80,
  math: 68,
  physics: 70,
  biology: 0,
};

const biologyMarks = johnsMarks.biology || "NA";
console.log("biologyMarks:", biologyMarks);
```

In the above example we a simple object named **`johnsMarks`** that has marks of subjects that John is currently taking this semester.

When we say the following:

**`const biologyMarks = johnsMarks.biology || "NA";`**

We are using the **`OR ||`** operator here, so if a **`truthy`** value is found short circuit and the rest of expression need not be evaluated. **`johnsMarks.biology`** does actually have a valid mark as you can achieve a mark of **`0`**. However, 0 is a **`falsy`** value and therefore **`NA`** is logged to the console.

OUTPUT:

```
biologyMarks: NA
```

Here we can see the **`limitation`** of setting default values with **`OR ||`** operator, because we did not expect **`NA`** as the result as **`0`** is indeed a valid mark.

To overcome this issue JavaScript introduced the **`nullish coalescing operator ??`**

The **nullish coalescing operator** is related to **`null`** and **`undefined`** values while other logical operators are related to truthy and falsy values in general.

As mentioned earlier, it is a logical operator that returns its right-hand side operand when its left-hand side operand is **`null`** or **`undefined`**, and otherwise returns its left-hand side operand.

So let us try it to see if it resolves the previous example.

**For Example**

```javascript
"use strict";

const JohnsMarks = {
  english: 76,
  compSci: 80,
  math: 68,
  physics: 70,
  biology: 0,
};

// using the nullish coalescing operator
const biologyMarks = JohnsMarks.biology ?? "NA";
console.log("biologyMarks:", biologyMarks);
```

**OUTPUT:**

```
biologyMarks: 0
```

And now we get the marks as **`0`** which is what we expect! This due to the fact that the **`nullish`** operator checks for **`null`** and **`undefined`** values only and since property **`biology`** has a value which is neither **`null`** nor **`undefined`** it takes and returns the actual value but if the value was **`null`** or **`undefined`** it would return **`NA`**.

Let us also see that in practice:

```javascript
"use strict";

const address = {
  country: "USA",
};

// The below is same as:
// address.country = address.country ?? "India";
// Since country is not null or undefined country remains as USA
address.country ??= "India";

// trying to define city key which is not yet defined - in this case the city is undefined therefore it will NEW YORK as value
address.city ??= "NEW YORK";

console.log("address:", address);
```

**OUTPUT:**

```
address: { country: 'USA', city: 'NEW YORK' }
```

**`HINT`**
<span style="color:red">What you must always rememeber is thta the <strong> nullish operator</strong> always returns the <strong>first truthy value</strong>. Truthy values are all values except <strong>
null</strong> and <strong>undefined</strong></span>

**`Tricky Example:`**

```javascript
"use strict";

// nullish falsy values are: null/undefined that means false is a truthy value and hence false is returned as it is the first truthy value
const isTall = false;
console.log(isTall ?? "You should jump more!");
```

**OUTPUT:**

```
false
```
