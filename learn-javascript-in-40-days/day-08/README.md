# Day 8: JavaScript Execution Context & Memory Management

## 1. Lexical Environment

### Definition
A **lexical environment** defines how and where your code is physically placed or positioned in your program.

### Key Concepts
- JavaScript must map and understand where code elements are positioned to enforce proper grammar and syntax
- A single JavaScript file can contain multiple lexical environments
- Examples: variables inside functions, functions inside files, nested structures

### Importance
The JavaScript engine needs to know the physical location of code to:
- Ensure grammar compliance
- Prevent errors
- Execute code meaningfully

---

## 2. Execution Context

### Definition
**Execution context** refers to the code that is currently running and everything surrounding it that helps it execute.

### Core Principles
- Provides information about the current code being executed
- Manages surrounding resources that support code execution
- Handles which piece of code is currently running within various lexical environments

### JavaScript Execution Flow
JavaScript processes code through multiple phases, creating and managing different types of execution contexts.

---

## 3. Types of Execution Contexts

### A. Global Execution Context (GEC)

The starting point of all JavaScript execution.

#### Characteristics
- Created immediately when JavaScript receives code
- Always the **first** execution context created
- Created even for empty JavaScript files
- "Global" = anything outside of a function

#### Phase 1: Creation Phase (CP)

**Memory Allocation and Initialization:**

1. **Window Object**: Created (browser's global object with properties like `alert`, `prompt`)
2. **`this` Keyword**: Created and set to reference the `window` object
3. **Variables**: 
   - Memory allocated
   - Initialized with `undefined`
   - Enables hoisting behavior
4. **Functions**: 
   - Memory allocated
   - Entire function body stored in memory

#### Phase 2: Execution Phase (EP)

**Code Execution:**

- JavaScript executes code line by line
- Variables receive their actual values (replacing `undefined`)
- Function calls trigger new Function Execution Contexts
- Current GEC execution halts when functions are invoked

### B. Function Execution Context (FEC)

Created **only** when a function is invoked.

#### Characteristics
- One FEC created per function call
- Each FEC has its own Creation and Execution phases
- Multiple FECs can exist simultaneously

#### Phase 1: Creation Phase (CP)

**Local Scope Setup:**

1. Identifies local variables and parameters
2. Allocates memory for local variables
3. Initializes local variables with `undefined`
4. Allocates memory for nested functions

#### Phase 2: Execution Phase (EP)

**Function Code Execution:**

- Executes function code line by line
- On nested function calls:
  - Current FEC execution **halts**
  - New FEC created for invoked function
  - New FEC runs through complete Creation and Execution phases
  - Original FEC resumes only after nested function completes

---

## 4. Memory Management

JavaScript uses two memory structures: **Stack** and **Heap**.

### Stack Memory

#### Characteristics
- **LIFO** structure (Last In, First Out)
- Stores primitive values (numbers, simple strings, booleans)
- Stores references/pointers to heap-stored objects

#### Contents
- Execution contexts (GEC and FECs)
- Primitive variable values
- Memory addresses pointing to heap locations

### Heap Memory

#### Characteristics
- Discrete memory area
- Unstructured storage

#### Contents
- Non-primitive values (objects, arrays, functions)
- Complete function definitions
- Complex data structures
- Each item identified by unique memory address

---

## 5. Call Stack Flow

### Execution Sequence

1. **GEC Placement**: GEC pushed onto empty stack
2. **Creation Phase**: Memory allocated for variables and functions
   - Primitives → Stack (initialized to `undefined`)
   - Non-primitives → Heap (reference stored in stack)
3. **Execution Phase**: Code executes, values assigned
4. **Function Call**: FEC pushed onto stack above GEC
5. **Nested Call**: New FEC pushed above current FEC
6. **Function Completion**: FEC pops off stack (LIFO)
7. **Execution Resumes**: Previously halted context continues
8. **GEC Completion**: GEC removed, stack becomes empty

### Stack State Example

```
Empty Stack
↓
[GEC]
↓
[GEC, testMe FEC]
↓
[GEC, testMe FEC, testAgain FEC]
↓
[GEC, testMe FEC]  ← testAgain completes
↓
[GEC]  ← testMe completes
↓
Empty  ← GEC completes
```

---

## 6. Garbage Collection

### Process

1. When execution context removed from stack
2. Heap objects no longer referenced (no pointers)
3. Garbage collector identifies unreferenced memory
4. Memory freed and made available for reuse

### Purpose
- Automatic memory management
- Prevents memory leaks
- Optimizes memory usage

---

## 7. Key Takeaways

### Execution Context Hierarchy
- **GEC**: Base level, created first, lasts until program ends
- **FEC**: Function level, created on invocation, removed on completion

### Memory Strategy
- **Stack**: Fast access, limited size, primitives and references
- **Heap**: Flexible size, complex objects, accessed via references


### Understanding Benefits
Mastery of these concepts enables understanding of:
- Variable hoisting
- Function scoping
- Scope chain
- Closures
- Event loop mechanics
- Asynchronous behavior

---
