//Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount

// task 2 :  Build an ATM Cash Withdrawal System

let amount = 1000;

if(amount % 100 === 0){
    console.log("Withdrawal Successful");
}else{
    console.log("Invalid Amount");
}
