const lunches = [];

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  if(arr.length === 0){
    console.log(`No lunches to remove.`);
    return arr;
  }
  const value = arr.pop();
  console.log(`${value} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr){
  if(arr.length === 0){
    console.log(`No lunches to remove.`);
    return arr;
  }
  const value = arr.shift();
  console.log(`${value} removed from the start of the lunch menu.`); 
  return arr;
}

function getRandomLunch(arr){
  if(arr.length === 0){
    console.log("No lunches available.");
    return;
  }
  let min = 0;
  let max = arr.length;
  let randomIndex = Math.floor(Math.random()*max - min) + min;
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

function showLunchMenu(arr){
  if(arr.length === 0){
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}

