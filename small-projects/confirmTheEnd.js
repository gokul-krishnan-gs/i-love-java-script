function confirmEnding(str,againstString){

  let lengthOfAgainstString = againstString.length;

  let lengthOfActualStr = str.length;

  let position = lengthOfActualStr - lengthOfAgainstString;

  let lastStr = str.slice(position);

  return lastStr === againstString ? true : false;
}

console.log(confirmEnding("Bastian","n"));
