function palindromeNumber(number){
    let original = number;
    const isNegative = number < 0;
    if(isNegative){
        return "Not Palindrome"
    }
    number = Math.abs(number);
    let rev = 0;
    while(number > 0){
        let digit = number % 10;
        rev = rev * 10 + digit;
        number = Math.floor(number / 10);
    }
    return original === rev ? "Palindrome" : "Not Palindrome";
}

const result = palindromeNumber(1231);
console.log(`Result: ${result}`);