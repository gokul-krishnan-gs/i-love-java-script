function titleCase(title){

console.log(title);

let wordArray = title.split(" ");
console.log(wordArray);

let i,j;
let resultArray = [];
let word;

for(i=0;i<wordArray.length;i++){
  console.log(wordArray[i]);
  word = "";
  word += wordArray[i][0].toUpperCase();
  console.log(word)
  for(j=1;j<wordArray[i].length;j++){
    word += wordArray[i][j].toLowerCase();
    console.log(word)
  }
   resultArray.push(word);
}
return resultArray.join(" ");
}

let res = titleCase("javaScript is fun");

console.log(res);
