# Day 13 -  Understanding JavaScript's `this` Keyword

The JavaScript `this` keyword is notoriously complex and has confused developers for decades, often leading to unexpected results and extensive debugging. However, understanding its internal fundamental concepts is crucial for JavaScript mastery. The value of `this` is not based on where it is placed in the code, but rather on the **execution time** of the code and where `this` is used.

The main purpose of the `this` keyword is to help determine the **current execution context** and to understand which object the program is currently running within. Because the value of `this` changes based on the circumstances of its invocation, it is often compared to a friend who loves to change sides in an argument.

---

## 1. Global Execution Context

When JavaScript code is loaded, a **Global execution context** is created.

- **Browser Environment:** In a browser environment, the global execution context provides the `this` keyword and the `window` object.
- **Server-side Environment (e.g., Node):** In a server-side environment, it provides the `this` keyword and the `global` object.
- **Initial Value:** In the initial execution context (or global level), the value of `this` is equal to the `window` object.

---

## 2. Standalone Functions (Regular Functions)

When `this` is used inside a **plain old JavaScript Standalone function** (one that is not part of an object, i.e., not a method), its behavior depends heavily on whether the code is running in strict mode.

### Non-Strict Mode

If the JavaScript is running in non-strict mode, `this` inside a standalone function refers to the `window` object (the global object). This applies even to nested functions; the inner function does not refer to the outer function's scope, but rather goes to the outer scope, which is the global scope.

### Strict Mode

When running JavaScript in **strict mode** (by declaring `"use strict"` at the top of the file):

- Strict mode prevents `this` inside a standalone function from referring to the global/window object.
- The value of `this` will straightway be **undefined**.
- Since most real-world applications run in strict mode, for a standalone non-arrow function, developers should expect `this` to resolve to `undefined`.

---

## 3. Implicit Binding (Object Methods)

Implicit binding is the most common way to determine the value of `this` in object-oriented JavaScript.

### The Rule of Implicit Binding

When a method is called on an object using the **dot notation** (e.g., `employee.returnThis()`), the `this` keyword inside that method is **bound (or associated) to the object** on which the method was invoked.

- **Context:** If `employee.returnThis()` is called, the `this` inside `returnThis` refers to the `employee` object itself.
- **Accessing Properties:** Because `this` is bound to the object, you can access the object's properties (e.g., `this.ID`, `this.firstName`).
- **Invocation Point:** To determine the value of `this`, one must look for **where exactly the function is invoked or called**.

### Implicit Binding in Practice

If a method uses `this.name` or `this.age` and is invoked as `Tom.logMessage()`, the implicit binding rule applies: `this` refers to the `Tom` object, and the properties are resolved from `Tom`.

### Implicit Binding with Constructors (`new` Keyword)

When creating objects using a **Constructor Function** via the `new` keyword, methods called on the resulting instance also follow implicit binding. If `TomCartoon.log()` is called, the `this` inside the `log` method refers to the `TomCartoon` object instance.

---

## 4. Arrow Functions (Lexical Scoping)

Arrow functions behave fundamentally differently regarding `this` compared to regular functions.

### The Rule of Lexical Scoping

- **No Own `this`:** Arrow functions **do not have their own `this`** keyword.
- **Parent Scope:** The resolution of `this` inside an arrow function is always determined by its **lexical scope**—where the arrow function is physically placed or defined in the code. It refers to the `this` of the parent scope.

### Arrow Functions in Global Scope

If an arrow function is defined in the global scope (like `getFood`), its parent scope is the global object, meaning `this` will refer to the **window object**, even if the code is running in strict mode.

### Arrow Functions as Object Methods (Caution)

If an arrow function is defined directly as a method within an object block:

1. It looks to its parent scope.
2. The parent scope of the object block itself is the **global scope**.
3. Consequently, `this` refers to the `window` object. Since the window object likely doesn't have the desired properties (e.g., `name` and `color`), `this.name` and `this.color` will resolve to `undefined`.

### Fixing `this` in Arrow Functions (Playing with Scope)

To make an arrow function method correctly refer to its containing object, you must manipulate the lexical scope.

This is achieved by wrapping the arrow function inside a regular JavaScript function (which serves as a method of the object).

1. The regular function (method) establishes an implicit binding, so its `this` refers to the object (e.g., `food`).
2. The inner arrow function looks to its immediate parent scope, which is the scope of the regular function.
3. Since the arrow function's parent scope now has the desired `this` context (bound to the object), the arrow function resolves its `this` correctly.
4. This interaction often involves **closure**, where the `this` value from the outer function's execution context is "closed in" and retained by the inner function for later access.

### Arrow Functions to Fix Nested `this` Issues

Arrow functions are valuable because they offer a straightforward fix for the problematic behavior of regular functions when nested inside object methods.

- If a regular method contains a nested **standalone regular function**, the nested function loses the implicit binding and reverts to the standard standalone function rule (pointing to `window` or `undefined` in strict mode).
- If the nested function is changed to an **arrow function**, it lexically binds to the parent method's scope, which, due to implicit binding, is correctly referring to the object (e.g., the `user` object), thereby fixing the issue.

---

## 5. Explicit Binding

Explicit binding is used when you want to refer the `this` keyword from one execution context to an external object that is completely disjoint or unrelated. This can be achieved using the `call`, `apply`, and `bind` methods, which are available on JavaScript functions.

### A. Call Method

The `call` method immediately executes the function and sets the value of `this` explicitly.

- **Syntax:** `function.call(objectToBindTo, arg1, arg2, ...)`.
- **Arguments:** Additional arguments are passed individually, separated by commas.
- **Execution:** The function is executed **then and there** to get the desired output.

### B. Apply Method

The `apply` method is very similar to `call` but handles arguments differently. It immediately executes the function and sets the value of `this`.

- **Syntax:** `function.apply(objectToBindTo, [arg1, arg2, ...])`.
- **Arguments:** All arguments must be passed together as an **array**.
- **Execution:** The function is executed immediately.

### C. Bind Method

The `bind` method differs from `call` and `apply` because it does not execute the function immediately.

- **Syntax:** `const newFn = function.bind(objectToBindTo, arg1, arg2, ...)`.
- **Return Value:** `bind` returns a **completely new function** (a copy of the original function but permanently bound to the specified object).
- **Execution:** This new function must be executed later point in time (e.g., `newFn()`) to get the desired output. This is useful if execution needs to occur based on certain conditions or circumstances later in the program.

---

## Summary of `this` Rules (Situations and Behavior)

| Situation | Environment/Context | Behavior of `this` |
| :--- | :--- | :--- |
| **Global Scope** | Browser | Refers to the **window object** |
| **Global Scope** | Node (Server-side) | Refers to the **global object** |
| **Standalone Function** | Strict Mode | Resolves to **undefined** |
| **Standalone Function** | Non-Strict Mode | Refers to the **window object** |
| **Object Method** | Implicit Binding (Non-Arrow function) | Bound to the **object** on which the method was invoked (using dot notation) |
| **Constructor** | Used with `new` keyword | Refers to the newly created instance object |
| **Arrow Function** | Anywhere (Global, Object Method, or Nested) | Always refers to the `this` value of its **lexical (parent) scope** (Arrow functions do not have their own `this`) |
| **Explicit Binding** | Using `call` or `apply` | Bound immediately to the external object passed as the first argument |
| **Explicit Binding** | Using `bind` | Returns a new function permanently bound to the external object passed as the first argument, for later execution |
