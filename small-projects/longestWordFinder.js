function findLongestWordLength(sentence){
let count = 0;
let maxLengthWord = 0;

for(let char of sentence.toLowerCase().trim()){
  if(char !== " "){
    count++;
    if(count > maxLengthWord){
      maxLengthWord = count;
    }
  }else if(char === " "){
    if(count > maxLengthWord){
      maxLengthWord = count;
    }
    count = 0; 
  }
}
return maxLengthWord;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

