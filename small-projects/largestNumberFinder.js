function largestOfAll(array){
  let i,j;
  let largestValue;
  let resultArray = [];
  for(i=0;i<array.length;i++){
    largestValue = array[i][0];
    for(j=1;j<array[i].length;j++){
      if(array[i][j] > largestValue){
        largestValue = array[i][j];
      }
    }
    resultArray.push(largestValue);
  }
return resultArray
}

let res = largestOfAll(
[
  [13, 27, 18, 26], 
  [4, 5, 1, 3], 
  [32, 35, 37, 39], 
  [1000, 1001, 857, 1]
]);

console.log(res);
