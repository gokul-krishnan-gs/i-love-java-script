function dropElements(arr,func){
  console.log(arr);
  let i;
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      return arr.slice(i);
    }
  }
  return [];
}

let res = dropElements([0, 1, 0, 1], function(n) {return n === 1;})

console.log(res);
