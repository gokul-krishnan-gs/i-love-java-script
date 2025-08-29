const numbers = [10,20,30];

const stringNumbers = numbers.map((number)=>{
  return String(number);
        //number.toString()
});

console.log(numbers);
console.log(stringNumbers);
