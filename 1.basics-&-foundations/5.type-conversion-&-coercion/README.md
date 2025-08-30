# Type Conversion & Coercion in JavaScript

JavaScript is a **loosely typed language**, which means it often tries to **automatically change types** when needed. But sometimes, you have to **do it yourself**. That's where **Type Conversion** and **Type Coercion** come in.

## 1. What is Type Conversion?

**Type Conversion** (also called **type casting**) is when you **manually change a value from one type to another**.

- You do it **intentionally**.
- Example: turning a string `"123"` into a number `123`.

**Example:**

```javascript
let str = "123";
let num = Number(str);   // string → number
console.log(num + 1);    // 124
```

Other conversions:

```javascript
String(123);    // "123"
Boolean(0);     // false
Number("45");   // 45
```

**Analogy:**
- Imagine you have a **pen** and a **pencil**. You can **pick up a pencil instead of a pen** intentionally.
- Type Conversion = **you choosing the tool yourself**.

## 2. What is Type Coercion?

**Type Coercion** is when JavaScript **automatically changes the type of a value** to make an operation work.

- Happens **implicitly**
- Can lead to **surprising results** if you're not careful

**Example:**

```javascript
let result = "5" + 2;  // string + number
console.log(result);   // "52" ✅ number 2 is coerced to string
```

Another example:

```javascript
let result2 = "5" - 2; // string - number
console.log(result2);  // 3 ✅ string "5" is coerced to number
```

**Analogy:**
- Imagine you want to **add apples and oranges**.
- Type Coercion = JavaScript automatically converts **oranges to apples** so it can add them.

## 3. Key Rules of Type Coercion

1. `+` operator → if either is a string, it **concatenates** as a string
2. `-`, `*`, `/` operators → strings containing numbers are converted to numbers
3. **Boolean in math** → `true` → 1, `false` → 0
4. **Falsy values** → `0, "", null, undefined, NaN` convert to `false` in Boolean context

**Examples:**

```javascript
console.log("10" + 5);   // "105" (string)
console.log("10" - 5);   // 5 (number)
console.log(true + 2);   // 3
console.log(false + 5);  // 5
console.log(Boolean(0)); // false
```

## 4. Why it Matters

- Prevent **bugs**
- Avoid **unexpected results** in calculations
- Understand **how JS interprets your values**

## 5. Practical Examples

### Example 1: User Input

```javascript
let age = prompt("Enter your age:"); // always returns string
age = Number(age);                    // convert to number
if(age >= 18){
    console.log("You can vote");
} else {
    console.log("Too young");
}
```

### Example 2: Mixing Types

```javascript
console.log("5" + 5);   // "55"
console.log("5" - 5);   // 0
```

- JavaScript tries to **guess what you want**, but sometimes it's tricky.

## 6. How to Control It

- **Use Type Conversion** to avoid surprises

```javascript
let num = Number("100");
let str = String(100);
let bool = Boolean(1);
```

- **Avoid implicit coercion** in complex expressions

```javascript
let total = Number("10") + 20; // safe, 30
```

## 7. Summary

- **Type Conversion** → **manual change** of type (you control it)
- **Type Coercion** → **automatic change** of type (JavaScript does it for you)

### One-liner
**Conversion = I change it; Coercion = JS changes it automatically.**
