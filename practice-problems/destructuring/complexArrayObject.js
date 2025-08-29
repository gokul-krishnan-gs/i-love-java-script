const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
// Extract the name of the second object in the array

const [ ,{name}] = data;

console.log(name);
