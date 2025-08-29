let a = 5;
let b = 10;

// Before Swapping
console.log(a); // 5
console.log(b); // 10

// Swap using destructuring
[b, a] = [a, b];

// After Swapping
console.log(a); // 10
console.log(b); // 5
