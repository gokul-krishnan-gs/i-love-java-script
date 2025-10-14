//task3 : Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for(let i=1;i<=500;i++){
    if(i % 2 !== 0){
        sum += i;
    }
}
console.log("Sum of 1 - 500 - Odd Numbers = ",sum);
