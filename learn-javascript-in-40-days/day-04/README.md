# Day 4  - Control Flow in javaScript
***

## I. Control Flow Basics

**Control Flow** refers to the mechanism used to control the sequence of execution in programming based on specific conditions.

1.  **Standard Execution:** Normally, JavaScript code is executed line by line.
2.  **Controlling the Flow:** Control flow allows you to skip certain lines of code, jump to different execution paths, or branch out if a condition is met.
3.  **Methods to Achieve Control Flow:** This is achieved using programming constructs like `if`, `if` and `else`, `switch` and `case`, `break`, and `continue`.

***

## II. The `if` and `if...else` Statements

The `if` statement is used for branching execution based on a condition.

### A. Syntax and Conditions
The `if` statement uses a reserved keyword followed by a parenthesis where the condition resides.

1.  **Condition Requirement:** The condition specified within the parenthesis must always evaluate to a **Boolean value (true or false)**.
2.  **Execution Logic:** If the condition is `true`, the code block inside the `if` curly braces is executed.
3.  **`else` Keyword:** If the condition is not met (`false`), and you want to execute a specific block of code in that case, you use the `else` keyword.
4.  **Requirement:** An `else` block cannot exist alone; it must always be paired with an `if`.

**Example 1: Basic If/Else (Boolean Condition)**

This example uses a variable that results in a Boolean value (`true` or `false`) to control the flow:

```javascript
let catchingBus = true; // Set to true
if (catchingBus) { // Condition is true
    console.log("I will reach home on time"); // This block executes
} else {
    console.log("I will be late to reach"); // This block is skipped
}
// Output: I will reach home on time

// If catchingBus was set to false, the 'else' block would execute instead.
```

**Example 2: Logic Building with Conditional Operators**

Logic building often involves comparing values using conditional operators (like `> =`, learned in Day 3) to form the condition:

```javascript
let age = 18;
// Use >= because eligibility is 18 OR above
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
// Output (for age 18): You are eligible to vote (because 18 equals 18)
// Output (for age 8): You are not eligible to vote (8 is neither greater than nor equal to 18)
```

### B. Curly Braces and Best Practices

While curly braces are necessary for multiple statements, they can be omitted if the `if` or `else` block contains only one statement.

**Recommendation:** It is strongly recommended to **always use curly braces** (`{}`) for `if` and `else` blocks, irrespective of whether they contain one or multiple statements, as this is considered the right way of coding.

### C. Handling Multiple Decisions (`if-else if-else`)

When faced with multiple possible conditions (e.g., determining a grade based on a score), you use `else if`.

1.  **The Difference from Independent `if` Blocks:**
    *   **Independent `if` blocks:** JavaScript executes line by line and checks every single `if` block. If multiple conditions are met, multiple blocks might execute.
    *   **`if-else if-else` chain:** Once a condition in the chain is satisfied, JavaScript performs an **early exit** and is not going to look at the subsequent `else if` or `else` blocks at all.

**Example 3: Independent `if` vs. `if-else if-else` (Early Exit)**

When `let X = 0` is used:

| Independent `if` Blocks | `if-else if-else` Chain |
| :--- | :--- |
| `if (x == 0)` // True | `if (x == 0)` // True |
| `if (x >= 0)` // True | `else if (x >= 0)` // Skipped |
| `if (x <= 0)` // True | `else if (x <= 0)` // Skipped |
| **Output:** `0`, `greater than 0`, `less than 0` | **Output:** `0` |

### D. Nested If/Else

You can **nest** `if` and `else` blocks inside one another to check secondary conditions.

**Example 4: Nested If/Else**

```javascript
let condition = false;
let innerCondition = false;
if (condition) { // Outer if: false
    console.log("outer if"); 
    // ... inner blocks ...
} else { // Jumps straight to outer else
    console.log("outer else"); 
}
// Output: outer else
```

***

## III. The `switch...case` Statement

`switch/case` is another method for branching control flow, often used instead of lengthy `if-else if-else` chains.

### A. Syntax and Structure

1.  **Value Check:** Unlike `if/else`, which uses a condition that evaluates to a Boolean, `switch` takes a **value** (which can be a number, string, or Boolean).
2.  **Case Matching:** Inside the block, the `case` keyword is used to specify a fixed value. The input value is checked against each case value sequentially.
3.  **Execution:** If a match is found, the code under that `case` executes.

**Example 5: Detecting Day Number**

```javascript
let day = 5;
switch (day) { // Checking the value of 'day'
    case 1: console.log("Monday"); break;
    // ... cases 2, 3, 4
    case 5: console.log("Friday"); break; // Match found
    // ... case 6, 7
    default: console.log("Invalid day number");
}
// Output: Friday
```

### B. Keywords in Switch Case

1.  **`break`:** The `break` keyword is essential within a `case` block. If `break` is omitted after a match, the execution will **fall through** and execute the code blocks of subsequent cases until a `break` or the end of the switch statement is reached.
2.  **`default`:** The `default` keyword handles the **fallback value**. If the value being checked does not match any of the provided cases, the code under `default` will execute. This acts similarly to the `else` block.

**Example 6: Using Strings and Case Sensitivity**

The switch statement performs exact matching on strings, meaning it is case-sensitive:

```javascript
let name = "Google"; // Capital G
switch (name) {
    case "TapasScript": console.log("Teaching 40 days of JS"); break;
    case "google": console.log("Giving answer to all searches"); break; // Lowercase 'g'
    default: console.log("You are neither Google nor TapasScript");
}
// Output: You are neither Google nor TapasScript (because "Google" != "google")
```

**Example 7: Intentional Fall-Through**

By omitting `break` strategically, you can execute a single block of code if any of several cases match:

```javascript
let city = "Bangalore";
switch (city) {
    case "Bangalore": // Match found. No break. Fall-through occurs.
    case "Kolkata": // Fall-through. No break.
    case "Agara": // Fall-through. No break.
    case "Jaipur": 
        console.log("All these are in India"); 
        break; // Break stops fall-through
    case "New York": 
        // ...
}
// Output: All these are in India
```

***

## IV. Comparing `switch` and `if/else`

The choice between `switch` and `if/else` depends fundamentally on the use case.

| Factor | `switch` Statement | `if/else` Statement |
| :--- | :--- | :--- |
| **Use Case (Primary)** | Best for checking against a **fixed value** (e.g., number, string). | Must be used for **complex logical conditions** (e.g., ranges, composite conditions like `if (age > 10 && age < 20)`). |
| **Performance** | Can be much faster than lengthy `if-else if-else` chains when checking many values. The compiler often utilizes a **jump table** (an indexed table) for direct lookup, avoiding sequential checks. | Performs sequential checking, evaluating each condition one after the other. Performance degrades if there are too many chained conditions. |
| **Readability** | High; makes it clear which value corresponds to which action. | Can become messy and less readable when many conditions are involved. |

### V. Ternary Operator (Shorthand If/Else)

The ternary operator (learned previously) is a shorthand way to write a simple `if/else` structure that involves a single condition and a single action for both the `if` and the `else`.

**Recommendation:** While the shorthand is encouraged, if you need to nest conditional checks (more than one level), the ternary operator often results in code that is messy and unreadable. In such complex scenarios, it is better to opt for the standard `if/else` structure.
