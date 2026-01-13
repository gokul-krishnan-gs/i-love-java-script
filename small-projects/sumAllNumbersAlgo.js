function sumAll(array){
  let lowest;
  let greatest;
  let i;
  let sum = 0;
  if(array[0]<array[1]){
    greatest = array[1];
    lowest = array[0];
  }else{
    greatest = array[0];
    lowest = array[1];
  }
  for(i=lowest;i<=greatest;i++){
    sum += i;
  }
  return sum;
}
