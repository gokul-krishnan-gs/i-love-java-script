// task 3: Function to Check if a String is a Palindrome

function isPalindrome(word){
  for(let i=0;i<word.length/2;i++){
    if(word[i]!=word[word.length-i-1]){
      return false;
    }
  }
  return true
}

let result = isPalindrome("noon");

if(result)
  console.log("It is palindrome");
else
  console.log("It is not palindrome");
