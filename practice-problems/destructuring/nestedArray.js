const nestedArray = [1, [2, 3], 4];
// Extract 2 and 3 from the nested array

const [ ,[two,three]] = nestedArray;

console.log(nestedArray);
console.log(two);
console.log(three);
