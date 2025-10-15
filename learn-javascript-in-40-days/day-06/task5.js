//task 5: Write a function to Count Vowels in a String
//Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string

let countVowels = (str) => {
  let count = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){
      count++;
    }
  }
  return count;
}

let result = countVowels("education");

console.log("Vowels count: ",result);
