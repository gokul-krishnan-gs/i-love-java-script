function fearNotLetter(string){
let i=0;
for(i=0;i<string.length -1;i++){
  let currentCharacter = string[i];
  let nextCharacter = string[i+1];
  let difference = nextCharacter.charCodeAt(0) - currentCharacter.charCodeAt(0);
  if(difference > 1){
    return String.fromCharCode((currentCharacter.charCodeAt(0) + 1))
  }
}
}

let res = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
console.log(res);
