function truncateString(str,num){
let lengthOfTheString = str.length;
if(lengthOfTheString > num){
  let truncateStringBasedOnNumber = str.slice(0,num);
  let result = truncateStringBasedOnNumber+"...";
  return result;
}else{
  return str;
}
}

const res = truncateString("Absolutely Longer", 2);

console.log(res);
// Ab...
