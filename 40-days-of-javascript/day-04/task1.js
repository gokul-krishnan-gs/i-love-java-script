// task 1 :  What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// Monday and monday are different.
// there is no case for checking "Monday", therfore
// default will execute
