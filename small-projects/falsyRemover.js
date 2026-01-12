function bouncer(array){

console.log(array);

let i;
let result = [];
for(i=0;i<array.length;i++){
  if(Boolean(array[i])){
    console.log("Truthy Value")
    result.push(array[i]);
  }
}
return result;
}

let res = bouncer([7, "ate", "", false, 9]);
console.log(res);
