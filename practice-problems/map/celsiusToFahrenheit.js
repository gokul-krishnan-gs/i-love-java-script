const celsius = [0,10,20,30];
const fahrenheit = celsius.map((c)=>{
  return (c* 9/5) + 32;
});

console.log(celsius);
console.log(fahrenheit);
