// task 8 :Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter. 

let greet = (name,callback) => callback(name);

greet("Gokul Krishnan",name => console.log("Hello "+name));
