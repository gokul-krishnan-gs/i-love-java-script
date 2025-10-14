### Task 6
# 🧠 Understanding the Differences Between `for`, `while`, and `do-while` Loops

## Overview Table

| Loop Type | When to Use | Condition Check | Executes At Least Once? | Structure |
|-----------|-------------|-----------------|-------------------------|-----------|
| **for** | When you know how many times to loop | Before entering the loop | ❌ No | Initialization → Condition → Increment |
| **while** | When you don't know how many times to loop | Before entering the loop | ❌ No | Condition → Statements → Increment |
| **do-while** | When you want the loop to run at least once | After executing the body | ✅ Yes | Statements → Condition |

---

## 🌀 1. for loop

**Definition:** Used when the number of iterations is known in advance.

**Syntax:**
```javascript
for (initialization; condition; increment) {
    // statements
}
```

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Flow Chart:**
```
           START
             ↓
     ┌───────────────┐
     │ Initialize i  │
     └───────┬───────┘
             ↓
     ┌───────────────┐
  ┌──│ i <= 5 ?      │
  │  └───────┬───────┘
  │          │ Yes
  │          ↓
  │  ┌───────────────┐
  │  │ Execute Body  │
  │  └───────┬───────┘
  │          ↓
  │  ┌───────────────┐
  │  │ Increment i   │
  │  └───────┬───────┘
  │          │
  └──────────┘
             │ No
             ↓
            END
```

---

## 🔁 2. while loop

**Definition:** Used when the number of iterations is not known, and the loop runs as long as the condition is true.

**Syntax:**
```javascript
while (condition) {
    // statements
}
```

**Example:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

**Flow Chart:**
```
           START
             ↓
     ┌───────────────┐
  ┌──│ Condition?    │
  │  └───────┬───────┘
  │          │ Yes
  │          ↓
  │  ┌───────────────┐
  │  │ Execute Body  │
  │  └───────┬───────┘
  │          │
  └──────────┘
             │ No
             ↓
            END
```

---

## 🔂 3. do-while loop

**Definition:** Used when you want to execute the loop body at least once, even if the condition is false the first time.

**Syntax:**
```javascript
do {
    // statements
} while (condition);
```

**Example:**
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```

**Flow Chart:**
```
           START
             ↓
     ┌───────────────┐
  ┌──│ Execute Body  │
  │  └───────┬───────┘
  │          ↓
  │  ┌───────────────┐
  │  │ Condition?    │
  │  └───────┬───────┘
  │          │ Yes
  └──────────┘
             │ No
             ↓
            END
```

---

## 🧾 Summary (Quick Comparison)

| Feature | `for` | `while` | `do-while` |
|---------|-------|---------|------------|
| **Condition check** | Before loop | Before loop | After loop |
| **Minimum execution** | 0 times | 0 times | 1 time |
| **Use case** | Known iterations | Unknown iterations | Run at least once |
| **Example use** | Counting 1–100 | Waiting for user input | Menu-driven program |

---

## 🎯 Key Differences

**for loop:**
- Best for counting or iterating a specific number of times
- All loop control (initialization, condition, increment) in one line
- Most compact syntax

**while loop:**
- Best when you don't know how many iterations you need
- Condition checked before any execution
- Could run zero times if condition is initially false

**do-while loop:**
- Guarantees at least one execution
- Condition checked after execution
- Perfect for menu systems or input validation
