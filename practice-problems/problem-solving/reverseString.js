// function reverseString(value){
//     const array = value.split("");
//     const revArray = array.reverse();
//     const revValue = revArray.join("");
//     return revValue;
// }

function reverseString(value){
    let reversed = "";
    for(let i=value.length-1; i>= 0;i--){
        reversed += value[i];
    }

    return reversed;
}

const result = reverseString("gokul");

console.log(result);
