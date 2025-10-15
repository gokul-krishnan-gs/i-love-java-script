// task 2: Create a Function to Find the Maximum of Two Numbers

const findMax = function(num1,num2){
  if(num1 > num2){
    return num1;
  }else if(num1 === num2){
    return num1;
  }else{
    return num2;
  }
}

let maxNumber = findMax(-3,-9);
console.log("Max Number: ",maxNumber);
