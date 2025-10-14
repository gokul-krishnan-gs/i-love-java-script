/*
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/

// task 6 : Which Triangle?

let a,b,c;

a = 10;
b = 12;
c = 10;
if(a+b > c && b+c > a && a+c > b){
    if(a === b && b === c && a === c){
        console.log("Equilateral Triangle!");
    }else if((a===b && c!==a) || (b===c && a!==b)|| (a===c && b!==a)){
        console.log("Isosceles Triangle");
    }else if(a !== b && b!== c && a!==c ){
        console.log("Scalene Triangle");
    }
}else{
    console.log("Not a Valid Triangle");
}
