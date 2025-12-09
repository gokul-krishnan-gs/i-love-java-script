function reverseNumber(number){
    const isNegative = number < 0;
    number = Math.abs(number);
    let rev = 0;
    while(number > 0){
        let digit = number % 10;
        number = Math.floor(number / 10);
        rev = rev * 10 + digit;
    }
    return isNegative ? -rev: rev;
}

const result = reverseNumber(4257);
console.log(`Result: ${result}`);