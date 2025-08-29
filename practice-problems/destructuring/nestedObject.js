const user = {
  id: 1,
  info: { email: "gokul@example.com", phone: "12345" }
};
// Extract email from the nested info object

const {info}  = user;

console.log(info);

const {email} = info;

console.log(email);

//one liner 
//const {info : {email}} = user;
