# Day 14 -  JavaScript Error Handling and Exceptions

---

## I. Importance and Consequences of Error Handling

Handling errors is crucial for writing robust, production-ready code. Properly handling errors safeguards your code and ensures graceful error reporting in different conditions.

Consequences of not handling errors include:

- Poor usability.
- System crashing.
- Security risks.
- A very bad user experience, such as the end customer seeing a white screen, black screen, or confusing red flashes like a **Type Error**. Users often exit applications if they see uncaught errors.

It is essential to make error handling a regular practice integrated with writing code and building logic.

## II. Types of Errors in JavaScript

JavaScript errors can be categorized into two main types:

1. **Parsing Error (Syntactical Error):**
   - These occur when the grammar of the programming language is broken.
   - JavaScript cannot interpret or parse the script to produce the expected output.
   - There is nothing that can be done for these errors except fixing the syntaxes to ensure the programming grammar is intact.

2. **Runtime Error (Exception):**
   - The code syntax looks great, but an error scenario is produced when the program runs due to certain values, situations, or conditions.
   - These are the errors that you typically need to handle.
   - **Exceptions** are specifically defined as **runtime errors that disrupt program execution**.

## III. Examples of Built-in Errors

JavaScript contains several built-in errors that you may encounter:

| Error Type | Description | Example Scenario |
| :--- | :--- | :--- |
| **Reference Error** | Occurs when attempting to access a variable that has not been defined. | `console.log(x)` where `x` is undefined. Result: `uncaught reference error x is not defined`. |
| **Type Error** | Occurs when performing an operation that requires a specific type, such as attempting to read a property of `null` or `undefined`. | `let obj = null; console.log(obj.name)`. Result: `uncaught type error cannot read properties of null reading name`. |
| **Syntax Error** | Occurs due to a problem with the syntax or grammar structure. | `console.log("hi"` (missing closing parenthesis). Result: `uncaught syntax error missing a parenthesis`. |
| **Range Error** | Occurs when a numeric value is outside the expected set or range. | Creating an array with a negative length: `let array = new Array(-1)`. Result: `uncaught range error invalid array length`. |
| **URI Error** | Occurs if there is an issue during the encoding or decoding of a URI. | N/A |
| **Eval Error** | Occurs if you are using JavaScript's `eval` function (highly discouraged) to evaluate an expression that does not make sense. | N/A |

## IV. The `try...catch` Syntax and Execution Flow

The `try...catch` syntax is used to handle errors and allows you to catch errors so that you can react to them gracefully instead of crashing the application.

### Syntax Structure

The syntax consists of two main blocks:

```javascript
try {
    // Write logic or code here
} 
catch (err) { // err is the error object
    // Handle the error here
}
```

### Execution Flow

1. **Execution Starts:** JavaScript executes the code inside the **`try`** block line by line.
2. **No Error:** If no error occurs inside the `try` block, the **`catch`** block is completely ignored and will not be executed.
3. **Error Occurs:** If an error occurs inside the `try` block, the execution of the `try` block is **halted (suspended)** at that point.
4. **Control Transfer:** Control is immediately shifted to the **`catch`** block, along with the information about the error that caused the shift.

*Example of suspension:* If a line in the middle of a `try` block throws an error, subsequent lines within the `try` block are not executed.

## V. The Error Object

The parameter received by the `catch` block (e.g., `err` or `error`) is an instance of an error object containing all necessary details about the exception.

Key properties available on the Error Object:

| Property | Description | Use Case |
| :--- | :--- | :--- |
| **`message`** | A human-readable textual message providing details of the error. | Displaying a concise error description to the end user. |
| **`name`** | The specific name or type of the error that occurred (e.g., "ReferenceError"). | Checking the type of error that happened to provide a customized response. |
| **`stack`** | The current **call stack**, providing the sequence of all nested calls that led to the error. | Immensely useful for debugging purposes, allowing the developer to trace the error back through multiple functions/files. |

**Note on Omission:** JavaScript now supports not explicitly passing the error object in the `catch` block (e.g., `catch {}`). The code will still run, and necessary debugging information will often still be available in the console.

## VI. Throwing Errors (`throw`)

The **`throw`** keyword allows a developer to intentionally generate (throw) an exception or error based on a specific condition within the `try` block.

You can throw a completely new error instance using the built-in `Error` constructor function:

```javascript
// Throwing a new instance of the Error object
throw new Error("Division by zero is not allowed");
```

This is often done to safeguard code against undesirable outcomes that JavaScript might not otherwise treat as errors (e.g., division by zero results in `Infinity`, which may not be useful to the user).

### Real-World Use Case Example: Input Validation

A function can validate input and throw an error if the input criteria are not met:

```javascript
function validateAge(age) {
    try {
        if (isNaN(age)) {
            // Throw a custom validation error
            throw new Error(`invalid input age must be a number. Your input is ${age}`);
        }
        console.log(`User's age is ${age}`); 
    } catch (error) {
        console.error("Validation Error:", error.message);
    }
}
// Example Call:
validateAge("tapus"); 
// Output: Validation Error: invalid input age must be a number. Your input is tapus
```

## VII. Rethrowing Errors

**Rethrowing** occurs when you catch an error in a `catch` block, process it locally (e.g., logging it), and then throw the same error object again so that a function higher up in the call hierarchy can handle it.

**When to Rethrow:** Rethrowing is useful when the function that initially catches the error does not want to decide the ultimate action; instead, it delegates the handling and resolution of the exception to the caller function.

### Syntax for Rethrowing

Since the error object is already an instance of `Error`, the `new` keyword is omitted:

```javascript
catch (error) {
    console.error("Preliminary log:", error.message);
    throw error; // Rethrows the existing error instance
}
```

### Best Practices for Rethrowing

When handling errors across nested functions:

1. It is acceptable and helpful for debugging to log error messages internally in all functions where the error is caught or rethrown.
2. However, when displaying messages to the end user (e.g., via a popup or "toaster" message), you should **always show the error message only from the top-level caller function**. Showing multiple error messages from nested functions results in a poor user experience.

## VIII. The `try...catch...finally` Statement

The **`finally`** statement is used in conjunction with `try` and `catch` primarily for **cleanup purposes**.

### Execution Flow of `finally`

The `finally` block **will always be executed**, irrespective of whether an error was thrown in the `try` block or whether the `catch` block ran.

### Use Cases for `finally`

The `finally` block is essential for cleanup operations, such as:

- Closing connections (e.g., database connections).
- Releasing resources (e.g., file systems or I/O).
- Setting variables holding memory references to `null`.

### Example of `try...catch...finally`

```javascript
function processInformation(info) {
    try {
        console.log("processing information");
        if (!info) {
            throw new Error("No information available to process");
        }
        console.log("information processed"); 
    } catch (error) {
        console.error("An error:", error.message);
    } finally {
        console.log("Closing database connection (Cleanup code)");
    }
}

// Case 1: Success (No Error)
processInformation("data"); 
// Output: processing information, information processed, Closing database connection (Cleanup code)

// Case 2: Failure (Error Thrown)
processInformation(null); 
// Output: processing information, An error: No information available to process, Closing database connection (Cleanup code)
```

## IX. Creating Custom Errors

Custom errors are necessary to handle specific use cases and scenarios. They offer several benefits:

- Provide more meaningful error messages to users and developers.
- Aid in easier debugging.
- Standardize error handling across different application functionalities (normalization).
- Provide better control in managing errors.

### Method for Creating Custom Errors

Custom errors are created using a **constructor function** (which should be capitalized, e.g., `ValidationError`).

1. **Define the Constructor:** The constructor accepts a `message` parameter.
   
   ```javascript
   function ValidationError(message) {
       // Set custom name and message
       this.name = "ValidationError";
       this.message = message;

       // Initialize stack property using JavaScript's base Error constructor
       this.stack = (new Error()).stack;
   }
   ```

2. **Attach Prototype:** To ensure the custom error inherits properties like the full call stack, the custom error's prototype must be associated with the built-in `Error` constructor's prototype:
   
   ```javascript
   ValidationError.prototype = Object.create(Error.prototype);
   ```
   
   *Note: Understanding prototype mechanics requires knowledge of Object-Oriented JavaScript concepts that will be covered in future modules*.

3. **Usage:** The custom error is thrown like any other error instance using `new`:
   
   ```javascript
   // Inside a validation function:
   throw new ValidationError("You are not a senior citizen");
   ```

## X. Note on Proposed Self Assignment Operator

The source material notes that there are tutorials suggesting that a new **self assignment operator** (e.g., `?=`) might replace `try...catch`. However, this operator is **not yet available in JavaScript** and is only in the proposal stage. Developers must continue to learn and use standard error handling techniques, including `try...catch`, rethrowing, and custom errors, as existing codebases depend on them.
