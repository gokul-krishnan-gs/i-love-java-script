# Day 10 - JavaScript Scope and Scope Chain

## What is Scope?

**Scope** defines where a variable is accessible in JavaScript. It determines the visibility and lifetime of variables based on their declaration location.

---

## Types of Scope in JavaScript

JavaScript has four main types of scope:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**
4. **Module Scope** *(covered in future sessions)*

---

### 1. Global Scope

A variable declared **outside of any function or block** has Global scope.

**Key Characteristics:**
- Global variables can be **accessed anywhere** in the code
- Accessible inside functions, outside functions, and within blocks
- Behavior differs based on declaration keyword:

| Declaration | Global Object Behavior |
|------------|------------------------|
| `var` | Becomes a **property of the global object** (window in browsers) |
| `let` / `const` | **Not added** to the global object |

**Example:**
```javascript
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";

console.log(window.globalVar); // "I'm global with var"
console.log(window.globalLet); // undefined
```

---

### 2. Function Scope

A variable declared **inside a function** has function scope.

**Key Characteristics:**
- Variables are **accessible only inside that function**
- Attempting to access outside the function results in a **ReferenceError**
- Applies to **all declaration keywords** (`var`, `let`, `const`)
- Variable lifetime is limited to the function execution

**Example:**
```javascript
function myFunction() {
  var funcVar = "Function scoped";
  let funcLet = "Also function scoped";
  console.log(funcVar); // Works fine
}

myFunction();
console.log(funcVar); // ReferenceError
```

---

### 3. Block Scope

A **block** is defined by curly braces `{}` and appears in structures like:
- `if/else` statements
- `switch` statements
- `for` loops
- Standalone blocks

**Behavior varies by keyword:**

| Keyword | Block Scope Behavior |
|---------|---------------------|
| `let` / `const` | **Strictly block scoped** - Cannot access outside block (ReferenceError) |
| `var` | **Not block scoped** - Can be accessed outside the block (function scoped) |

**Example:**
```javascript
{
  var blockVar = "var is not block scoped";
  let blockLet = "let is block scoped";
  const blockConst = "const is block scoped";
}

console.log(blockVar);   // Works: "var is not block scoped"
console.log(blockLet);   // ReferenceError
console.log(blockConst); // ReferenceError
```

#### Scope Hierarchy

Variables exist in a hierarchy from broadest to most specific:

```
Global Scope (top level)
    ↓
Function Scope
    ↓
Block Scope (lowest level)
```

`var` operates at a higher scope level (function scope) than `let`/`const` (block scope), which explains why `var` can "leak out" of blocks.

---

## The Scope Chain

The **Scope Chain** is JavaScript's mechanism for resolving variable access and determining values, especially in nested functions and blocks.

### How the Scope Chain Works

JavaScript follows a specific search pattern when accessing variables:

1. **Nearest Scope First:** Search in the immediate scope where access occurs
2. **Move Outward:** If not found, move one level higher (outer scope)
3. **Continue Upward:** Repeat until reaching the Global Scope
4. **Error Handling:** If still not found, throw a **ReferenceError**

**Example:**
```javascript
const globalVar = "global";

function outer() {
  const outerVar = "outer";
  
  function inner() {
    const innerVar = "inner";
    console.log(innerVar);  // Found in inner scope
    console.log(outerVar);  // Found in outer scope
    console.log(globalVar); // Found in global scope
  }
  
  inner();
}

outer();
```

The scope chain enables inner functions to access:
- Variables in their own scope
- Variables in containing (outer) functions
- Variables in the global scope

---

## Variable Shadowing

**Variable Shadowing** (also called **variable masking**) occurs when a variable in an inner scope shares the same name as a variable in an outer scope.

**Key Behaviors:**
- **Prioritization:** JavaScript uses the variable from the **nearest scope**
- **Hiding Effect:** The inner variable effectively **hides/shadows** the outer variable's value within that scope
- **Function Boundary:** Function scope rules still apply - outer scopes cannot access inner function variables

**Example:**
```javascript
let name = "Global Name";

function showName() {
  let name = "Function Name"; // Shadows global name
  console.log(name); // "Function Name"
  
  if (true) {
    let name = "Block Name"; // Shadows function name
    console.log(name); // "Block Name"
  }
  
  console.log(name); // "Function Name"
}

showName();
console.log(name); // "Global Name"
```

---

## Comparison: `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| **Scope** | Function scope | Strictly Block scope | Strictly Block scope |
| **Block Access** | Can be accessed outside block | Cannot be accessed outside block | Cannot be accessed outside block |
| **Hoisting/TDZ** | Hoisted and initialized with `undefined` | Subject to Temporal Dead Zone (TDZ) | Subject to Temporal Dead Zone (TDZ) |
| **Global Object** | Attached to global object (window) | Not attached to global object | Not attached to global object |
| **Redeclaration** | ✅ Yes (e.g., `var x = 1; var x = 2;`) | ❌ No | ❌ No |
| **Reassignment** | ✅ Yes | ✅ Yes | ❌ No |
| **Initial Value Required** | No (defaults to `undefined`) | No (defaults to `undefined`) | ✅ Yes (must initialize on declaration) |
| **Mutability** | Mutable (value can change) | Mutable (value can change) | Immutable (value cannot change) |
| **Use in Loops** | ⚠️ Allowed but **not recommended** (not block scoped, pollutes outer scope) | ✅ **Recommended** (block scoped, prevents pollution) | ❌ Not suitable (loops require reassignment) |

---

## Best Practices

1. **Prefer `const` by default** - Use for values that won't be reassigned
2. **Use `let` when reassignment is needed** - Especially in loops and conditionals
3. **Avoid `var`** - Its function scope and hoisting behavior can lead to bugs
4. **Be mindful of scope chains** - Understanding nested scopes prevents unexpected behavior
5. **Watch for variable shadowing** - Use descriptive names to avoid confusion

---

## Summary

- **Scope** determines where variables can be accessed in your code
- **Global scope** allows access everywhere in the program
- **Function scope** restricts access to within the function
- **Block scope** (with `let`/`const`) provides the finest level of control
- The **scope chain** enables nested scopes to access outer variables
- **Variable shadowing** occurs when inner scopes reuse outer variable names
- Modern JavaScript favors `let` and `const` over `var` for better scope control

---
