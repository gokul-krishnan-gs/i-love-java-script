# Day 3 - JavaScript Operators and Expressions
---

## I. Fundamental Concepts

| Term | Definition | Example |
| :--- | :--- | :--- |
| **Operator** | Symbols used to carry out a calculation or perform an operation. | `+` (addition), `-` (subtraction), `*` (multiplication). |
| **Operand** | The actual values on which the operator works. | In `x + y`, `x` and `y` are the operands. |
| **Expression** | Something that resolves to a single value. | |

There are two main types of expressions encountered in programming:

1. **Assignment Expression:** Where a value is assigned to something.
   - *Example:* `x = 2` (assigning the value 2 to variable X).
2. **Evaluating Expression:** Where operands and operators are used together to calculate a new value.
   - *Example:* `3 + 4` resolves to 7.

Expressions often combine both types, such as `let X = 4 + 5`. Here, `4` and `5` are operands, `+` is the operator, the expression `4 + 5` evaluates to 9, and the assignment operator (`=`) assigns 9 to `X`.

---

## II. Types of Operators

The sources cover several types of operators, including Arithmetic, Assignment, Comparison, Relational, Logical, Bitwise, and Conditional (Ternary).

### A. Arithmetic Operators

Arithmetic operators work on numeric values (operands) and return a single numeric value.

| Operator | Name | Example | Result |
| :--- | :--- | :--- | :--- |
| `+` | Addition | `10 + 20` | `30` |
| `-` | Subtraction | `10 - 20` | `-10` |
| `*` | Multiplication | `10 * 20` | `200` |
| `/` | Division | `10 / 20` | `0.5` |
| `**` | Exponential | `2 ** 3` (2³) | `8` |
| `%` | Remainder (Modulus) | `12 % 5` | `2` (since 12 = 5 × 2 + 2) |

#### Special Cases for `+`

If used with strings, the `+` operator acts as a concatenation operator (e.g., `"Tapas" + "Adhikary"`). (Note: Template literals are recommended for string concatenation instead).

#### Increment/Decrement Operators

These operators change the value of the operand by one.

| Operator | Type | Effect | Example (Start: `count = 5`) |
| :--- | :--- | :--- | :--- |
| `count++` | **Post-Increment** | Returns the value first, then increments it later. | `console.log(count++)` prints `5`. Next time `count` is used, it is `6`. |
| `++count` | **Pre-Increment** | Increments the value first, then returns the new value. | `console.log(++count)` prints `6` (if initial count was 5). |
| `count--` | **Post-Decrement** | Returns value first, then decrements it. | If `count = 5`, returns `5`, then `count` becomes `4`. |
| `--count` | **Pre-Decrement** | Decrements value first, then returns the new value. | If `count = 5`, `console.log(--count)` prints `4`. |

### B. Assignment Operators

The basic assignment operator is `=`, which assigns a value to a variable (e.g., `let x = 10`).

#### Shorthand Assignment Operators

These operators combine an arithmetic operation and an assignment.

| Shorthand | Equivalent Long Form | Example (Start: `x = 10`) | Result of X |
| :--- | :--- | :--- | :--- |
| `x += 5` | `x = x + 5` | `x += 5` | `15` |
| `x -= 3` | `x = x - 3` | `x -= 3` (after being 15) | `12` |
| `x *= 2` | `x = x * 2` (after being 12) | `x *= 2` | `24` |
| `x /= 4` | `x = x / 4` (after being 24) | `x /= 4` | `6` |

### C. Comparison Operators

Comparison operators return a **Boolean value** (`true` or `false`) based on whether a specified condition is satisfied.

#### 1. Equality Operators

| Operator | Name | Behavior | Why to Use/Avoid |
| :--- | :--- | :--- | :--- |
| `==` | **Loose Equality** | Performs implicit type conversion (coercion) before checking for equality. | **Avoid using.** Can lead to unexpected results (e.g., `0 == false` returns `true` because false is converted to 0). |
| `===` | **Strict Equality** | Returns `true` only if both operands are equal **and** of the same type. | **Always use.** If types differ, comparison immediately returns `false`. |
| `!=` | **Loose Inequality** | Checks if values are not equal (with coercion). | **Avoid using**. |
| `!==` | **Strict Inequality** | Checks if values are not equal OR if types are different. | Preferred inequality check. |

#### Key Rules for Strict Equality (`===`)

1. If operands are of different types, the result is straight away `false`.
2. If both operands are `null` or both are `undefined`, the result is `true`.
3. If any operand is `NaN` (Not a Number), the result is always `false`.
4. **Object Comparison:** When comparing two distinct objects (even if they have the same content), strict equality returns `false` because the comparison checks if they point to the same memory address/reference.

#### 2. Relational Comparison Operators

| Operator | Name | Example | Result |
| :--- | :--- | :--- | :--- |
| `>` | Greater than | `4 > 3` | `true` |
| `<` | Lesser than | `4 < 7` | `true` |
| `>=` | Greater than or equals to | `2 >= 2` | `true` |
| `<=` | Lesser than or equals to | `3 <= 9` | `true` |

### D. Logical Operators

Logical operators are typically used with Boolean values and return Boolean values, though they can handle non-Boolean operands.

| Operator | Name | Rule/Behavior | Example |
| :--- | :--- | :--- | :--- |
| `&&` | **Logical AND** | If the left operand (op1) can be converted to `false` (is falsy), return op1. Otherwise, return the right operand (op2). | `(4 > 5) && (4 == 6)` results in `false` because both sides are false. `"cow" && "horse"` results in `"horse"`. |
| `||` | **Logical OR** | If the left operand (op1) can be converted to `true` (is truthy), return op1. Otherwise, return the right operand (op2). | `false || true` results in `true`. `"cow" || "horse"` results in `"cow"`. |
| `!` | **Logical NOT** | Negates the Boolean value. | `!true` results in `false`. |
| `??` | **Nullish Coalescing** | If the first operand (op1) is `null` or `undefined`, return the second operand (op2). Otherwise, return op1. | `undefined ?? 3` results in `3`. `false ?? "script"` results in `false` (since false is not null/undefined). |

### E. Conditional (Ternary) Operator

This operator provides a concise way to evaluate a condition and return one of two values.

**Syntax:** `condition ? value_if_true : value_if_false`.

- The condition must return a Boolean value.

**Example:**

```javascript
let age = 23;
age >= 60 ? "senior citizen" : "non senior citizen" 
// Result: "non senior citizen" (because 23 >= 60 is false)
```

### F. Bitwise Operators

Bitwise operators treat operands as 32 bits represented in zeros and ones (binary). They are useful for operations requiring manipulation at the binary level.

| Operator | Name | Symbol |
| :--- | :--- | :--- |
| `&` | Bitwise AND | Single ampersand |
| `|` | Bitwise OR | Single pipe |
| `^` | Bitwise XOR | Caret symbol |
| `~` | Bitwise NOT | Tilde |
| `<<` | Left Shift | |
| `>>` | Right Shift | |

#### Bitwise Example (AND)

The operation is performed purely in binary, then converted back to decimal.

- 15 in binary: `1111`
- 9 in binary: `1001`
- `15 & 9` (Bitwise AND)
  - `1111` & `1001` = `1001`
  - Result in Decimal: `9`

#### Bitwise Example (Left Shift)

A left shift by N positions fills the new positions on the right with zeros.

- `9 << 2`
- Binary 9: `1001`
- Shifted left by 2: `100100`
- Result in Decimal: `36`

### G. Grouping Operator

The grouping operator uses parenthesis `()` and controls the precedence of evaluation or execution in an expression. Operations placed inside parentheses are evaluated first, overriding default operator precedence (like BODMAS/PEMDAS).

- **Default Precedence Example:** In `P + Q * R`, multiplication (`*`) has higher precedence, so 1 + (2 × 3) = 7 (where P=1, Q=2, R=3).
- **Grouping Example:** In `(P + Q) * R`, grouping forces addition first, so (1 + 2) × 3 = 9.

### H. Specialized Operators

#### 1. `typeof` Operator

This operator takes a single operand and returns a string that indicates or specifies the type of the operand.

- *Example:* `typeof "tapas"` returns `"string"`.
- *Example:* `typeof 100` returns `"number"`.
- *Special Case:* `typeof` an array (e.g., `[1, 2, 3]`) returns `"object"` because an array is considered an object in JavaScript.
- *Infamous Case:* `typeof null` returns `"object"`, which is considered a long-standing mistake in JavaScript.

#### 2. `instanceof` Operator

This operator is used to check if a specific object is an instance of a particular object type. This is best learned when custom objects and classes are introduced.

- *Syntax:* `object instanceof object_type` (returns `true` or `false`).

#### 3. Relational Operator (`in`)

The `in` keyword is used to check a property's existence in an object. Discussion of this operator is deferred until the object session.
