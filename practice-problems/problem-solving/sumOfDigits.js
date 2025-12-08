function sumOfDigits(number){
    number = Math.abs(number);
    let sum = 0;
    while(number > 0){
        let digit = number % 10;
        sum += digit;
        number = Math.floor(number/10);
    }
    return sum;
}

const result = sumOfDigits(35);
console.log(`Result: ${result}`);