// task 4: Write a Function to Find Factorial of a Number
//Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n){
  let result = 1;
  for(let i=1;i<=n;i++){
    result *= i;
  }
  return result;
}

let value = factorial(5);
console.log(value);
