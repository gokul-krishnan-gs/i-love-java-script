const user = { username: "Gokul", role: "admin" };
// Write a function that accepts this object and prints username and role using destructuring

const userDetails= function({username,role}){
  console.log(username);
  console.log(role);
}

userDetails(user);
