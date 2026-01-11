function frankenSplice(array1,array2,index){
let firstArray = array1.slice(0,array1.length);
console.log(firstArray);
let secondArray = array2.slice(0,array2.length);
console.log(secondArray);

let result = [];
console.log(result);
result = [...secondArray];
result.splice(index,0,...firstArray)
return result;
}

let res = frankenSplice([1, 2, 3], [4, 5], 1);

console.log(res);
