# JavaScript Destructuring 

## 1. What is Destructuring?

Destructuring is a **JavaScript feature** that allows you to **unpack values from arrays or objects into separate variables**. It makes code cleaner, shorter, and easier to read.

* Works for **arrays** and **objects**.
* Can handle **nested structures**.
* Can provide **default values** and **rename variables**.

## 2. Array Destructuring

```javascript
const numbers = [10, 20, 30];

// Basic destructuring
const [a, b] = numbers;
console.log(a, b); // 10 20

// Skip elements
const [first, , third] = numbers;
console.log(first, third); // 10 30

// Default values
const [x, y = 100] = [5];
console.log(x, y); // 5 100

// Swap variables
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2 1

// Nested array destructuring
const nested = [1, [2, 3]];
const [, [n1, n2]] = nested;
console.log(n1, n2); // 2 3
```

## 3. Object Destructuring

```javascript
const person = { name: "Gokul", age: 20 };

// Basic object destructuring
const { name, age } = person;
console.log(name, age); // "Gokul" 20

// Nested object destructuring
const user = { info: { email: "gokul@example.com" } };
const { info: { email } } = user;
console.log(email); // "gokul@example.com"

// Renaming variables
const product = { price: 500 };
const { price: cost } = product;
console.log(cost); // 500

// Function parameters destructuring
function printUser({ username, role }) {
  console.log(username, role);
}
printUser({ username: "Gokul", role: "admin" }); // "Gokul" "admin"
```

## 4. Array + Object Destructuring

```javascript
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const [, { name }] = data;
console.log(name); // "Bob"
```

## 5. Tips & Tricks for Mastery

1. **Skip values in arrays** using commas:
```javascript
const [first, , third] = [1, 2, 3];
```

2. **Use default values** to avoid `undefined`:
```javascript
const [x, y = 10] = [5];
```

3. **Swap variables easily** without a temporary variable:
```javascript
[a, b] = [b, a];
```

4. **Rename object properties** for clarity:
```javascript
const { price: cost } = product;
```

5. **Destructure nested structures** directly:
```javascript
const { info: { email } } = user;
```

6. **Destructure in function parameters** for clean code:
```javascript
function print({ name, age }) { ... }
```

7. **Combine arrays & objects** to access deep data:
```javascript
const [, { name }] = data;
```

8. **Practice is key** — the more you destructure, the faster and cleaner your code becomes.

## Summary

Destructuring is a **powerful tool** to write **cleaner, readable, and efficient JavaScript**. It reduces temporary variables, simplifies nested data access, and works perfectly with modern ES6+ code.
