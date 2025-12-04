function findSmallestNumberInArray(arr){
    let smallNumber = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i] < smallNumber)
            smallNumber = arr[i]
    }
    return smallNumber;
}

const result = findSmallestNumberInArray([9,3,4,1]);
console.log(result);