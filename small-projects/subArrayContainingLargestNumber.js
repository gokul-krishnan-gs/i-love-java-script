function largestOfAll(array){
let largestArray = array[0];
let largestValue = array[0][0];
let i,j;
for(i=0;i<array.length;i++){
  for(j=0;j<array[i].length;j++){
    if(largestValue < array[i][j]){
      largestValue = array[i][j];
      largestArray = array[i];
    }
  }
}     
return largestArray;
}

let res = largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

console.log(res);
