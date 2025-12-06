function primeNumber(number){
    let count = 0;
    if(number <= 1){
        return false;
    } else if(number === 2){
        return true;
    }else if (number % 2 === 0){
        return false;
    }else{
        for(let i=2;i<=number - 1;i++){
            if(number % i === 0){
                count++;
            }
        }
        return count === 0 ? true : false;
    }
}

const result = primeNumber(65);
console.log(result ? "Prime Number" : "Not prime Number" );