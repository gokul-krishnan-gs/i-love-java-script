function sumOfAllNumbers(arrayOfNumbers){
    let sum = 0;
    for(let i=0;i<arrayOfNumbers.length;i++){
        sum += arrayOfNumbers[i];
    }
    return sum;
}

const result = sumOfAllNumbers([1,2,3,4,5]);
console.log(result);
