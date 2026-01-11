function findElement(array,func){
let i;
for(i=0;i<array.length;i++){
  if(func(array[i])===true){
    return array[i];
  }
}
return undefined;
}
