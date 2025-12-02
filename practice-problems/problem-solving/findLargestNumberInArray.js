function findLargestNumber(arr){
    let maxNumber = arr[0];
    for(let i = 1;i < arr.length;i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

const result = findLargestNumber([10,50,2,8]);

console.log(result);