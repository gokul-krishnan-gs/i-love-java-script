# Day 12 - Mastering JavaScript Objects

## I. Introduction and Fundamentals

JavaScript objects are a crucial data structure used to handle **complex data** (e.g., user data, company data) that cannot be managed solely by simple primitive variables (number, boolean, string).

- **Definition:** Objects are nothing but **key-value pairs**, also known as a **keyed collection**.
- **Data Type:** Object is a **non-primitive data type** (or reference type) in JavaScript.

## II. Creating Objects (Creational Patterns)

Objects can be created in multiple ways:

| Creation Method | Description | Syntax/Usage |
| :--- | :--- | :--- |
| **Object Literal** | The most common and straightforward way. | Uses a pair of curly braces `{}`. Example: `let user = { name: "tapus", age: 40 }`. |
| **Constructor Function** | Used to create different instances from a reusable **blueprint**. | 1. Conventionally starts with a capital letter (e.g., `Car`). 2. Uses the `this` keyword to define properties. 3. **Must be invoked using the `new` keyword** (e.g., `const bmwCar = new Car("BMW", "X1")`). |
| **`new Object()`** | Uses JavaScript's built-in `Object` type to create an instance. | Example: `const person = new Object()`. Drawback: Does not allow you to define a **custom type**. |
| **Factory Function** | A simple, plain function that returns an object literal. | Example: `function createCar(name, model) { return { name, model } }`. **Does not use the `new` keyword**. |

### Key Concept: `instanceof` Operator

Constructor functions allow you to check if an object instance was created from a specific blueprint using the `instanceof` operator (e.g., `BMW car is instance of Car` will return `true`).

## III. Object Properties and Manipulation

### A. Defining and Accessing Properties

#### 1. Key Naming

- If a key does not contain any special characters, JavaScript automatically coerces it to a string; no explicit quotation marks are required (e.g., `name: "tapus"`).
- If a key contains **special characters** (e.g., a space), it **must** be explicitly enclosed in double quotes (e.g., `"is admin": true`).

#### 2. Retrieval/Accessing

- **Dot Notation:** Used for hardcoded keys (e.g., `user.name`).
- **Subscript Notation (Bracket `[]`):**
  - Mandatory for keys containing special characters (e.g., `user["is admin"]`).
  - Mandatory when accessing a property using a **dynamically computed key** (a variable whose value holds the key name) (e.g., `const someKey = 'age'; user[someKey]`).

#### 3. Dynamic Key Construction

When creating an object, if a key needs to be computed dynamically (e.g., from a variable or user input), you must use the subscript notation around the variable name within the object literal (e.g., `const favCars = { [car]: 5 }`).

#### 4. Shorthand Properties

If the key name you are defining in an object literal is the same as the variable name holding the value, you can use a shorthand notation, omitting the colon and value (e.g., `return { name, age }` is shorthand for `name: name, age: age`).

### B. Property Manipulation

- **Adding:** Properties can be added after creation using either dot or subscript notation (e.g., `user.isSeniorCitizen = false`).
- **Modifying:** Assign a new value to the property using dot or subscript notation (e.g., `user.age = 34`).
- **Deleting:** Use the `delete` keyword followed by the property you wish to remove (e.g., `delete user.age`).

### C. Nested Structures

- **Nested Object:** An object can contain a property whose value is another object (e.g., `address` property containing `city`, `state`, etc.).
- **Accessing Nested Values:** Requires chaining the property keys using dot notation (e.g., `profile.address.country`).
- **Method:** A function defined as a property inside an object is called a **method**. (Example: `greet: function() { ... }`).

## IV. Property Existence and Iteration

### A. Checking Property Existence

#### 1. Using `object.property` (Flawed Check)

Checking if a property exists by evaluating if `profile.salary` is not `undefined` works generally, but it **fails** if the property exists but its value is explicitly set to `undefined`. This can lead to incorrect logic.

#### 2. Using the `in` Operator (Correct Method)

Use the `in` operator to reliably check if a property key exists in the object (e.g., `"salary" in profile`). This returns `true` even if the property's value is `undefined`.

### B. Iteration

- **`for...in` Loop:** Used to iterate through all properties (keys) of an object.
  - Syntax: `for (let key in profile) { console.log(key, profile[key]) }`.
  - The value must be accessed using the subscript notation (`profile[key]`) because the key is dynamically determined during the loop.
- **`Object.keys(obj)`:** A static method that returns all property keys of an object as an **array**.

## V. Object References and Cloning

Objects are stored and passed by **reference**, not by value.

### 1. Object Comparison

When comparing two objects using `==` (loose) or `===` (strict), the comparison is based on their **references**.

- Two objects created separately are considered two **distinct objects**, even if their properties and values are identical, because they point to different memory addresses. Comparison results in `false`.
- Comparison results in `true` only if both variables point to the same memory reference (e.g., one object variable is assigned to the other: `fruit = oneMoreFruit`).

### 2. Cloning using `Object.assign()` (Shallow Copy)

- `Object.assign(target, source)` copies properties from the source object to the target object.
- It creates a new object reference for the target, making it a clone of the source.
- **Overriding:** If both target and source share a key, the source value will **override** the target value.
- **Shallow Copy Limitation:** `Object.assign` performs a **shallow copy**. While non-nested primitive properties are copied by value (creating new references), for **nested objects**, `Object.assign` copies only the *reference* of the nested object. If you modify a nested property in the cloned object, the original source object will also be impacted.

### 3. Deep Cloning

To ensure that even deeply nested objects are cloned with new, separate references, preventing unexpected side effects, use the **`structuredClone()`** method.

## VI. Key Static Methods of Object

Static methods are functions accessible directly from the global `Object` class (e.g., `Object.keys()`).

| Method | Purpose | Behavior |
| :--- | :--- | :--- |
| `Object.entries(obj)` | **Translation to Array** | Converts an object into an array where each element is a `[key, value]` array. |
| `Object.fromEntries(array)` | **Translation to Object** | Converts an array of `[key, value]` pairs back into an object. |
| `Object.freeze(obj)` | **Immutability (Total)** | Makes the object completely immutable (read-only). You **cannot** change existing values, add new properties, or delete properties. |
| `Object.isFrozen(obj)` | | Checks if an object has been frozen, returns `true` or `false`. |
| `Object.seal(obj)` | **Immutability (Partial)** | Prevents adding new properties or deleting existing properties, **but allows modifying existing property values**. |
| `Object.hasOwn(obj, prop)` | **Property Check** | Returns `true` if the object has the specified property (similar use case to the `in` operator). |

## VII. Object Destructuring

Destructuring is a syntax that allows you to extract properties and assign them to variables, enabling you to **write less code**.

**Basic Syntax:** `const { name, age } = student;`

### Key Destructuring Use Cases

1. **Adding Default Values:** Provide a fallback value for a variable if the property does not exist in the source object (e.g., `const { meal = "bread" } = student`).

2. **Creating Aliases (Renaming):** Rename a destructured variable to prevent naming conflicts, particularly when dealing with data from multiple sources. Syntax: `const { std: standard } = student;` (The variable `std` is not created; only `standard` is available).

3. **Nested Destructuring:** Extract values from deep within a nested object. Syntax: `const { address: { zip } } = student;`.

4. **Destructuring Function Parameters:** Extract only the necessary properties directly from an object passed to a function, reducing the need for verbose querying inside the function body (e.g., `function sendEmail({ parents: { email } }) { ... }`).

5. **Destructuring Function Return Values:** Extract specific properties from an object returned by a function.

6. **Destructuring within Loops (`for...of`):** Highly useful for iterating over an array of objects and extracting key properties from each object simultaneously. Syntax: `for (let { name, grade } of studentsArray) { ... }`.

## VIII. Optional Chaining (`?.`)

Optional chaining, introduced in ES 2020, simplifies accessing properties within deeply nested objects, especially when uncertainty exists about whether intermediate properties are defined.

- **Function:** Prevents the program from throwing a runtime error ("Cannot read properties of undefined") when trying to access a property on a value that is `null` or `undefined`.
- **Syntax:** Insert `?.` before the property access (e.g., `employee.department?.name`).
- **Result:** If `employee.department` is undefined, the expression gracefully evaluates to **`undefined`** instead of crashing the program. This allows for handling the absence of a value gracefully.
