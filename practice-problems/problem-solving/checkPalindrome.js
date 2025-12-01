function checkPalindrome(value){
    let reversed = "";
    for(let i=value.length-1;i >= 0; i--){
        reversed += value[i];
    }
    return value === reversed ? "Palindrome" : "Not Palindrome";
}

const result = checkPalindrome("bob");

console.log(result);
