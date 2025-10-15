# Day 05: MASTERING Loops and Iterations in JavaScript 🤩
---

## I. Definition of Loops and Iteration

**Loop/Looping** means doing the same work repeatedly. In programming, loops allow the repeated performance of one or more tasks without writing the code for every repetition. A loop construct automates task execution.

**Iteration** is another word for looping:
- Looping once = one iteration
- Looping twice = two iterations
- And so on...

---

## II. Types of Loops

JavaScript provides three main types of loops, each suited for different scenarios:

| Loop Type | Best Used When... | Key Feature |
|-----------|-------------------|-------------|
| **For Loop** | You know exactly how many times you need to loop (fixed number of iterations) | Designed for fixed iterations |
| **While Loop** | You don't know in advance how many times you have to iterate | Runs as long as a condition is true. Often used for processing user input where the exit point is unknown |
| **Do-While Loop** | You need to guarantee at least one execution | Executes the code block before checking the condition |

---

## III. The `for` Loop

The `for` loop is ideal when the number of iterations is fixed.

### A. Syntax and Components

```javascript
for (initialization; condition; update) {
    // Code block to be executed
}
```

**Three Main Parts**:

1. **Initialization**: Tells where the loop will start (e.g., initializing a counter variable)
2. **Condition**: The criteria based on which the loop will run. If the condition returns true, the code block executes
3. **Update**: Determines how the initialized value is updated so the loop can move forward (e.g., incrementing the counter)

### B. `for` Loop Flowchart

The execution flow of a `for` loop:

1. **Start**
2. **Initialize Variable**
3. **Check Condition** (decision point):
   - If **False (No)**: Loop terminates and **Ends**
   - If **True (Yes)**:
     - Execute the Code block
     - Update the Variable
     - Go back to Check Condition

### C. `for` Loop Examples

#### 1. Printing Numbers 1 to 5

```javascript
for (let count = 1; count <= 5; count++) {
    console.log("Iteration/Loop " + count);
}
// Output: 1, 2, 3, 4, 5
```

#### 2. Summing Even Numbers Between 1 and 100

This example incorporates conditional statements (`if`) within the loop.

```javascript
let sum = 0;  // Initialize outside the loop

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {  // Check if number is even
        sum += i;  // Short form of: sum = sum + i
    }
}

console.log(sum);  // Output: 2550
```

**Key Points**:
- Even number check uses modulus operator: `i % 2 === 0`
- Variable `sum` is initialized outside the loop
- The sum is updated inside the `if` block

#### 3. Iterating Over a String

```javascript
let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
    console.log(language.charAt(i));
}
// Loop goes from i=0 to i=9 (less than 10)
```

**Key Points**:
- Initialization starts at index `0`
- Condition is based on string's `length` property
- Use `charAt(i)` to retrieve each character

### D. Nested Loops

A **nested loop** is a loop kept inside another loop.

```javascript
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row}, Column ${col}`);
    }
}
```

**Execution Flow**: For each iteration of the outside loop, the inside loop completes its full execution entirely.

Example output:
```
Row 1, Column 1
Row 1, Column 2
Row 1, Column 3
Row 2, Column 1
Row 2, Column 2
Row 2, Column 3
Row 3, Column 1
Row 3, Column 2
Row 3, Column 3
```

**Use Cases**:
- Working with multi-dimensional data (tables, grids, matrices)
- Data with rows and columns
- As opposed to single-dimensional data (just one row)

**Best Practice**: Nested loops can have performance implications and should generally be avoided unless necessary for tasks involving tables or matrix calculations.

### E. Multiple Counters in One `for` Loop

A single `for` loop can handle multiple counters using the comma operator (`,`).

```javascript
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i, j);
}
```

**Output pairs**:
```
(1, 10)
(2, 9)
(3, 8)
(4, 7)
(5, 6)
(6, 5)
(7, 4)
(8, 3)
(9, 2)
(10, 1)
```

**Syntax Notes**:
- Use comma operator to declare and initialize multiple counters
- Use comma operator to perform multiple updates
- Only one conditional expression is used

---

## IV. Loop Control Statements

These statements modify the flow of iteration within a loop.

### A. `break` Statement

The `break` statement stops the loop immediately, causing an exit from the current loop.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Exit the loop when i is 5
    }
    console.log(i);
}
// Output: 1, 2, 3, 4
```

**Key Points**:
- Purpose: Exiting from the loop so no more iteration happens
- If `break` is encountered, anything below it in the current iteration is not executed
- Program exits the loop block entirely

### B. `continue` Statement

The `continue` statement skips the current iteration and moves immediately to the next iteration.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // Skip when i is 3
    }
    console.log(i);
}
// Output: 1, 2, 4, 5 (3 is skipped)
```

**Key Points**:
- Purpose: Skipping a particular iteration and moving to the next one
- The rest of the code in that iteration is not executed
- Loop continues with the next iteration

---

## V. The `while` Loop

The `while` loop runs as long as a specified condition is true. It is best used when the number of iterations is not known in advance.

### A. Syntax and Flowchart

```javascript
while (condition) {
    // Code block
    // Must include a way to update variables to eventually make the condition false
}
```

**Example**:

```javascript
let count = 1;  // Initialize outside the loop

while (count <= 5) {
    console.log(count);
    count++;  // Update inside the loop
}
// Output: 1, 2, 3, 4, 5
```

### Execution Flow

1. **Start** (Initialize variable, if necessary)
2. **Check Condition**:
   - If **True**: Execute Code
   - If **False**: Terminate/End
3. If True, return to Check Condition

**Important Note**: Unlike the `for` loop, initialization and variable updates (like incrementing a counter) must be handled explicitly outside and inside the `while` block, respectively.

---

## VI. The `do-while` Loop

The `do-while` loop guarantees that the code executes at least once before the condition is checked.

### A. Syntax and Flowchart

```javascript
do {
    // Code block (guaranteed to run at least once)
} while (condition);
```

**Example**:

```javascript
let count = 1;  // Initialize

do {
    console.log(count);
    count++;  // Update
} while (count <= 5);
// Output: 1, 2, 3, 4, 5
```

**Example with False Initial Condition**:

```javascript
let count = 10;

do {
    console.log(count);
    count++;
} while (count <= 5);
// Output: 10 (executes once despite condition being false)
```

### Execution Flow

1. **Start** (Initialize variable, if necessary)
2. **Execute the Code**
3. **Increment/Update the Variable** (if required)
4. **Check the Condition**:
   - If **True (Yes)**: Go back and Execute the Code again
   - If **False (No)**: End the loop

---

## VII. Infinite Loops

An infinite loop is a loop that never terminates because its exit condition is never met (it always remains true).

### Consequences

- Consumes excessive resources
- Potentially crashes the program
- Causes the program to hang

### Causes

- Missing an exit condition
- Providing a condition that is always hardcoded as `true`
- Logic error that prevents the condition from ever becoming false

### Examples to Avoid

**Infinite `for` Loop**:
```javascript
// ❌ Don't do this
for (;;) {
    console.log("This runs forever!");
}
```

**Infinite `while` Loop**:
```javascript
// ❌ Don't do this
while (true) {
    console.log("This runs forever!");
}
```

**Missing Update**:
```javascript
// ❌ Don't do this
let i = 1;
while (i <= 5) {
    console.log(i);
    // Missing i++ causes infinite loop
}
```

### Best Practice

Infinite loops should be avoided unless the developer is sure why they are needed (advanced cases with explicit break conditions).

---

## VIII. Comparison of Loop Types

### When to Use Each Loop

**Use `for` loop when**:
- You know the exact number of iterations
- Working with arrays or strings (indexed iteration)
- Need a counter variable

**Use `while` loop when**:
- Number of iterations is unknown
- Processing user input
- Waiting for a condition to change
- Exit point depends on runtime data

**Use `do-while` loop when**:
- Need guaranteed first execution
- Menu-driven programs
- Input validation (ask at least once)

---

## IX. Best Practices

1. **Always ensure loops have a proper exit condition** to avoid infinite loops
2. **Use meaningful variable names** for counters (e.g., `i`, `j`, `k` for simple counters; descriptive names for complex logic)
3. **Avoid nested loops when possible** due to performance implications
4. **Use `break` and `continue` judiciously** to improve readability
5. **Initialize variables properly** before loops
6. **Test loop boundaries** to ensure correct start and end points
7. **Choose the right loop type** based on your use case


---

## Summary

Loops are fundamental control structures in JavaScript that enable code repetition efficiently. Understanding when to use `for`, `while`, or `do-while` loops, along with control statements like `break` and `continue`, is essential for building logic and solving programming problems effectively.
