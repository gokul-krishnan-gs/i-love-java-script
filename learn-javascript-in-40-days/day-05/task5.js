// task 5:  Reverse Digits of a Number

/*
Input: 6789
Output: 9876
*/

let number = 6789;
let original = number;
let revNumber = 0;
while(number>0){
    let digit = number % 10;
    number = Math.floor(number/10);
    revNumber = revNumber * 10 + digit;
}

console.log(original);
console.log(revNumber);
