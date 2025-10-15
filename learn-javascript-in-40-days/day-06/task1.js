// task 1: Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
  return (celsius * (9/5)) + 32;
}

let celsius = 32;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("Celsius: "+celsius+"C");
console.log("Fahrenheit: " + fahrenheit+"F");
