function sumFibs(number){
  let prev = 0;
  let curr = 1;
  let sum = 0;
  let newCurrent;
while(curr <= number){
  if(curr % 2 !== 0){

    sum += curr;
  }

  newCurrent = prev + curr;
  prev = curr;
  curr = newCurrent;


}
  return sum;
}

let res = sumFibs(4);
console.log(res);
