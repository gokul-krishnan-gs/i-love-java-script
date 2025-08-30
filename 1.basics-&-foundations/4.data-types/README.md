# JavaScript Data Types (Primitive & Reference)

In JavaScript, **everything is a value**, and **values have types**. Think of **types as categories of things** in real life: apples, cars, or people. Different types behave differently.

## 1. What is a Data Type?

A **data type** tells the computer **what kind of value a variable is storing** and **what you can do with it**.

**Example:**

```javascript
let name = "Gokul";  // string type
let age = 20;         // number type
let isStudent = true; // boolean type
```

Here:
- `"Gokul"` → Text → String
- `20` → Number
- `true` → Boolean

## 2. Two Main Categories of Data Types

### A. Primitive Data Types

- **Stored directly in memory**
- **Immutable** → value cannot be changed, only replaced
- **Copied by value** → if you assign it to another variable, a **new copy** is created

**Primitive Types in JS:**
1. **Number** → all numbers (integer, float)
2. **String** → text
3. **Boolean** → true or false
4. **Undefined** → variable declared but not assigned
5. **Null** → intentional empty value
6. **Symbol** → unique and immutable (advanced, used in objects)
7. **BigInt** → very big numbers beyond normal Number limit

**Example:**

```javascript
let a = 10;    // number
let b = a;     // copy by value
b = 20;        // a stays 10, b becomes 20

let name1 = "Alice";
let name2 = name1; 
name2 = "Bob";  // name1 is still "Alice"
```

**Real-world analogy:**
- Think of primitive types as **stickers**:
  - If you copy a sticker, you get a **new sticker**, not the original.
  - Changing one sticker **doesn't affect the other**.

### B. Reference Data Types

- **Stored as a reference (memory address), not the actual value**
- **Mutable** → contents can change
- **Copied by reference** → if you assign it to another variable, **both point to the same object**

**Reference Types in JS:**
1. **Object** → general-purpose container
2. **Array** → ordered collection of values
3. **Function** → a callable object
4. **Date, Map, Set, RegExp** → specialized objects

**Example:**

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;   // copied by reference
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] ✅ arr1 changed too
console.log(arr2); // [1, 2, 3, 4]
```

**Real-world analogy:**
- Think of reference types as **houses with people living in them**:
  - `arr1` and `arr2` are **addresses pointing to the same house**
  - If someone in the house **changes something**, everyone sees the change.

## 3. Key Differences Between Primitive & Reference

| Feature | Primitive | Reference |
|---------|-----------|-----------|
| Stored In | Stack (direct value) | Heap (memory address) |
| Mutability | Immutable | Mutable |
| Copy Behavior | Copy by value | Copy by reference |
| Examples | Number, String, Boolean, Null, Undefined, Symbol, BigInt | Object, Array, Function, Date, Map, Set |

## 4. Why it Matters

- **Performance:** Primitive types are faster to access and store.
- **Bug Prevention:** Reference types can lead to **unexpected changes** if multiple variables point to the same object.
- **Memory Management:** Knowing the difference helps manage memory efficiently.

## 5. Practical Examples

### Primitive Example (Copy by Value)

```javascript
let x = 5;
let y = x;  // copy value
y = 10;
console.log(x); // 5 ✅ original stays same
```

### Reference Example (Copy by Reference)

```javascript
let user = {name: "Gokul", age: 20};
let newUser = user;  // copy reference
newUser.age = 21;

console.log(user.age); // 21 ✅ original changed
```

### How to Copy Reference Without Affecting Original

```javascript
let original = [1,2,3];
let copy = [...original]; // spread operator makes a new array
copy.push(4);

console.log(original); // [1,2,3] ✅ unchanged
console.log(copy);     // [1,2,3,4]
```

## 6. Real World Use

- **Primitive:** Store fixed values like scores, names, flags, settings.
- **Reference:** Store complex data like shopping carts, user profiles, or game states.

## 7. Summary

- **Primitive types** → simple, immutable, copied by value
- **Reference types** → complex, mutable, copied by reference
- Understanding this **prevents bugs** and **improves performance** in your programs.

### One-liner
**Primitives = simple, independent values; References = complex, shared objects.**
