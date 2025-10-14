//Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

// task 3 : Build a Calculator with switch-case

let operator = '+';

let num1 = 7;

let num2 = 3;

switch(operator){
    case '+':
        console.log(num1 + num2);
    break;
    case '-':
        console.log(num1 - num2);
    break;
    case '*':
        console.log(num1 * num2);
    break;
    case '/':
        console.log(num1 / num2);
    break;
    case '%':
        console.log(num1 % num2);
    break;
    default:
        console.warn("Invalid Input!!!");
}
