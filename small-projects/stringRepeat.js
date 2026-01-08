function repeatStringNumTimes(string,number){
if(number <= 0){
  return "";
}

let i;
let repeatString = "";
for(i=0;i<number;i++){
  repeatString += string;
}
return repeatString;
}

let res = repeatStringNumTimes("abc", 0);

console.log(res);
