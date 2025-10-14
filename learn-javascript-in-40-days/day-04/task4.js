/*
Imagine, the INOX charges ticket prices based on age:
Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/

// task 4: Pay for your movie ticket

let age = 61;

console.log("Age:",age);

if(age < 18){
    console.log("Ticket Charge : $3");
}else if(age >= 18 && age <= 60){
    console.log("Ticket Charge: $10");
}else{
    console.log("Ticket Charge: $8");
}
