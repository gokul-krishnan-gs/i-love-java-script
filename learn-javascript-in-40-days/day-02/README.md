# Day 2 - Variables and Data Types in JavaScript (Day 02)


---

## I. Defining and Understanding Variables

Variables are used to **store data in JavaScript**. In programming, variables hold information such as a user's name, age, marks, or salary.

### Analogy for Variables

A variable can be visualized as a **box** or **storage**.

- The **box** itself is the storage, which holds the information.
- The **name of the box** (e.g., `fruit`) is the **variable name**.
- The **content inside the box** (e.g., `mango`) is the **value** of the variable.

## II. Variable Declaration and Assignment

### A. Syntax and the Assignment Operator

The syntax for declaring a variable in modern JavaScript is `let/const storageName = Value`.

**Assignment Operator (`=`):** The single equal sign is the assignment operator in JavaScript.

- The **left side** of the operator is the **variable name** (storage name, e.g., `fruit`).
- The **right side** of the operator is the **value** being assigned to that variable (e.g., `Mango`).

**Example:**

```javascript
let fruit = "Mango"; // fruit is the storage name, "Mango" is the value
```

### B. Reassignment

When a new value is assigned to an existing variable, the old value is wiped out and replaced by the new value.

**Example of Reassignment:**

```javascript
let fruit = "Mango";
fruit = "Kiwi"; // "Mango" is taken out; "Kiwi" is put inside
```

## III. Variable Specifiers: `VAR`, `LET`, and `CONST`

`VAR`, `LET`, and `CONST` are called specifiers that control where and who can access the variable's value, and how many times the value can be changed.

| Specifier | Can be Redeclared? (Declared multiple times with the specifier) | Can be Reassigned? (Value changed later) | Notes |
| :---: | :---: | :---: | :--- |
| **VAR** | **Yes** | Yes | `VAR` should be avoided in modern programming because it allows redeclaration, which can cause confusion. |
| **LET** | **No** | **Yes** | Prevents the error of redeclaring the same variable multiple times. |
| **CONST** | No | **No** | Used for constants; once a value is assigned, it cannot be changed. |

### Examples of Specifier Behavior

| Specifier | Code Example | Output/Result |
| :---: | :--- | :--- |
| **VAR** (Redeclaration Allowed) | `var address = "Bangalore"; var address = "USA";` | Runs without error; prints "USA". |
| **LET** (Redeclaration Denied) | `let address = "Bangalore"; let address = "USA";` | **Error:** `identifier address has already been declared`. |
| **LET** (Reassignment Allowed) | `let address = "Bangalore"; address = "USA";` | Runs without error; prints "USA". |
| **CONST** (Reassignment Denied) | `const address = "Bangalore"; address = "USA";` | **Error:** `TypeError: assignment to constant variable`. |

Variables can be declared first and assigned later, unless using `const` (which requires immediate assignment).

**Example of Separate Declaration and Assignment (Allowed with `let`):**

```javascript
let age;        // Declaration
age = 20;       // Assignment
```

## IV. Variable Naming Rules and Standards

Variable names must adhere to the grammar (rules) of JavaScript.

### A. Required Rules (Grammar)

1. The name must contain **digits (0-9) or letters (a-z, A-Z)**.
2. The name can have special characters **dollar ($) and underscore (_)**.
3. The **first character must not be a digit**.
   - *Invalid Example:* `let 2tomorrow`.
4. You **cannot use reserved keywords** (e.g., `for`, `if`, `else`) as variable names.
5. Variable names are **case sensitive**. Variables defined with different casing (e.g., `myName` vs. `MyName`) are treated as two different variables.
6. Hyphens (`-`) are **not allowed** (only `$` and `_` are allowed special characters).

### B. Standards (Good Practices)

1. Use **camel case**: Start with a lowercase letter, and capitalize the first letter of subsequent words within the name.
   - *Example:* `let myHomeAddress`.
2. The name should be **human readable**.
3. The name should **match the use case**. If dealing with salary, name the variable `salary`, not `amount` or `count`.

## V. Data Types

There are two primary categories of data types in JavaScript: Primitive and Non-Primitive (Reference).

### A. Primitive Data Types

Primitive data types are the very basic data types in the programming language. All primitive values are handled by **pass by value** during assignment.

| Type | Description | Example |
| :--- | :--- | :--- |
| **String** | Text, typically enclosed in single or double quotes. | `"hello"` |
| **Number** | Numeric values (integers or floating point). | `24`, `3.14` |
| **Boolean** | Logical value, either `true` or `false`. | `true`, `false` |
| **Undefined** | Occurs when a variable is **declared but has not been assigned a value**. | `let name;` (If printed, output is `undefined`) |
| **Null** | Occurs when a variable is explicitly **declared and assigned a value of nothing**. The value is something which is nothing. | `let salary = null;` |
| **BigInt** | Used to represent very large numbers. | (Not explicitly defined with an example in source) |
| **Symbol** | Used to create unique identifiers. | (Used in advanced sections later) |

### B. Pass by Value (Assignment of Primitive Types)

When assigning one variable to another, if the values are primitive, the value itself is copied.

**Example:**

```javascript
let fruit = "mango";
let vegetable = "carrots";

// Assigning the value of 'vegetable' to 'fruit'
fruit = vegetable;
// Result: fruit now holds "carrots".
// Crucially, vegetable still holds "carrots" (it is intact).
```

This means the right side variable's value replaces the left side variable's value; the right side variable is unaffected.

### C. Non-Primitive (Reference/Complex) Data Types

Non-primitive data types are complex values built using primitive data types.

**Examples:** **Objects**, **Arrays**, and **Functions**.

#### 1. Objects

An object is a structure of **key-value pairs** enclosed in curly braces `{}`. Keys and values are separated by a colon `:`.

**Example of an Object:**

```javascript
let student = {
    name: "Alice",      // Key 'name', Value is String (primitive) "Alice"
    age: 22,            // Key 'age', Value is Number (primitive) 22
    isEnrolled: true    // Key 'isEnrolled', Value is Boolean (primitive) true
};
```

#### 2. Arrays

An array is a sequence of values contained inside square brackets `[]`.

**Example of an Array:**

```javascript
let numbers = [1, 2, 3, 4, 5]; // Sequence of Number (primitive) values
```

## VI. Memory Storage (Stack vs. Heap)

All variables and values must be stored in the computer's memory. At a high level, JavaScript uses two types of memory:

1. **Stack Memory:** **Primitive data types** (like numbers and strings) are stored directly into the stack memory.
2. **Heap Memory:** **Reference data types** (non-primitive values, like objects and arrays) store their *values* in the heap memory. The variable itself (in the stack) holds a unique **memory address** (reference) that points to where the value is stored in the heap.

## VII. JavaScript Engine Processing (Grammar Enforcement)

When JavaScript code is run, the JavaScript engine takes the code through several phases to verify it adheres to the language's grammar before execution:

1. **Tokenizing:** The code is broken down into multiple pieces called tokens.
2. **Parsing:** The tokens are used to create a tree structure called the **Abstract Syntax Tree (AST)**. This tree represents the structure and definition of the code.
3. **Interpreting/Code Generation:** Finally, the AST is used to generate the machine code that the computer understands.

If a line of code violates the grammar (e.g., trying to start a variable name with a number, which is not allowed), the AST is not formed, and an error is thrown.

## VIII. Code Comments

Comments are lines in the code that the JavaScript engine will skip and not execute as a program.

- **Single-Line Comment:** Use two forward slashes (`//`).
- **Block Comment:** Use `/*` to start the block and `*/` to end the block.
