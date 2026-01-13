function pairElement(dnaString){
console.log(dnaString);
let i;
let result = [];
for(i=0;i<dnaString.length;i++){
  console.log(`Value: ${dnaString[i]}\n`);
  if(dnaString[i] === 'A'){
    result.push(['A',"T"]);
  } else if(dnaString[i] === 'T'){
    result.push(['T',"A"]);
  } else if(dnaString[i] === 'C'){
    result.push(['C',"G"]);
  } else if(dnaString[i] === 'G'){
    result.push(['G',"C"]);
  }

}
return result;
}

let result = pairElement("ATCGA");
console.log(result);
