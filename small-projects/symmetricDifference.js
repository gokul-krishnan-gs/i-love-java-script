function diffArray(arrayA,arrayB){
const diffAB = arrayA.filter(item => !arrayB.includes(item));
const diffBA = arrayB.filter(item => !arrayA.includes(item));

const symmetricDifference = [...diffAB, ...diffBA];
return symmetricDifference;
}

let res = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

console.log(res);
