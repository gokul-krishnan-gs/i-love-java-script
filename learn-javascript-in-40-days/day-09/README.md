# Day 9 - Mastering Hoisting and Temporal Dead Zone (TDZ)

## 1. The Role of Execution Context (EC)

Understanding hoisting requires familiarity with the Execution Context. Every execution context (be it Global EC or Function EC) operates in two phases:

1. **Creation Phase (CP):** JavaScript looks at the code, identifies globally declared variables and functions, and **allocates memory** for them.
2. **Execution Phase (EP):** JavaScript executes the code line by line.

### Hoisting Definition

Hoisting is **not** the mechanical lifting of code by JavaScript. Instead, hoisting refers to the **creation phase** in the execution context where JavaScript creates memory for a variable or function, and, if possible, initializes them.

---

## 2. Variable Hoisting with `var`

When a variable is declared using `var`, it is hoisted, allowing it to be accessed before its declaration without causing an error.

| Phase | Action | Result (for `var name`) |
|:------|:-------|:------------------------|
| **Creation Phase (CP)** | Memory allocation and Initialization | Memory is created for `name`, and it is initialized with **`undefined`**. |
| **Execution Phase (EP)** | Access before declaration | The first `console.log` uses the variable, which currently holds the value **`undefined`**. |

### Why avoid `var`

Using `var` introduces scenarios where variables are used before they are declared or initialized, which can lead to debugging issues and make code error-prone, especially in legacy code. It is recommended to use `let` or `const`.

---

## 3. Hoisting with `let` and `const` (The Temporal Dead Zone)

If a variable is declared using `let` or `const`, attempting to access it before initialization results in a **Reference Error**: "cannot access name before initialization".

| Phase | Action | Result (for `let name`) |
|:------|:-------|:------------------------|
| **Creation Phase (CP)** | Memory allocation and Initialization | Memory is created for `name`, but it is **NOT initialized with `undefined` or anything**. |
| **Execution Phase (EP)** | Access before initialization | Since the variable is uninitialized, trying to use it causes an error. |

### `const` Specific Behavior

If a `const` variable is declared without an immediate assignment, it throws an **Uncaught Syntax Error**: "missing initializer in const declaration".

### Temporal Dead Zone (TDZ)

The TDZ explains why accessing `let` and `const` variables before initialization fails.

- **TDZ Definition:** The Temporal Dead Zone is an area or block in the JavaScript source code where a variable exists (memory is created) but **cannot be accessed until it is initialized**.
- **TDZ Boundary:** If a variable is inside a code block (defined by curly braces `{}`), the TDZ for that variable **starts at the beginning of the block**.
- **TDZ End:** The TDZ **ends when the variable is assigned a proper value** (initialized).
- **Error during TDZ:** If a variable is accessed while it is in its Temporal Dead Zone, JavaScript throws a **Reference Error**.
- Once initialization occurs, the variable leaves the TDZ and can be accessed without error.

---

## 4. Function Hoisting

Functions can be defined in two primary ways, and their behavior regarding hoisting is drastically different.

### A. Function Declaration

A function declaration (e.g., `function chess() { ... }`) can be invoked **before** it is declared in the code without error.

- **Function Hoisting:** In the Creation Phase (CP) of the Global EC, memory is created for the function, and it is fully defined (initialized).
- **Execution:** When the Execution Phase (EP) reaches the function invocation, the function already exists in memory, allowing a Function Execution Context to be created and the function to execute successfully.

### B. Function Expression

A function defined as a variable assignment (e.g., `var test = function() { ... }`) is treated as a **variable declaration**, not a function declaration.

- **Hoisting Behavior:** In the Creation Phase (CP), only the variable `test` is created, and because it uses `var`, it is initialized with **`undefined`**. The function value is assigned only during the Execution Phase.
- **Execution Failure:** If `test()` is called before the assignment happens in the Execution Phase, JavaScript attempts to execute the variable's current value (`undefined`) with parentheses (`undefined()`).
- **Resulting Error:** This leads to a **Type Error**: "test is not a function" (or "undefined is not a function"), because a variable assigned `undefined` cannot be executed like a function.
