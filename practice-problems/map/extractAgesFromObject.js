const people = [
  { name: "Gokul", age: 21 },
  { name: "Anu", age: 25 },
  { name: "Rahul", age: 30 }
];


const ages = people.map(({age})=>{
  return age;
});

console.log(people);
console.log(ages);
