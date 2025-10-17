function createBankAccount(initialAmount){
    let balance = initialAmount;

    return {
        checkBalance : function(){
            if(balance < 0){
                console.log("Nothing left here...");
            }
            else{
                console.log("Current Balance: ",balance);
            }   
     },
        deposit: function(amount){
            if(amount < 0){
                console.warn("Enter a valid amount!");
            }
            else{
                balance += amount;
                console.log("Deposited Amount: ",amount);
                console.log("Balance: ",balance);
            }

     },
        withdraw: function(amount){
            if(amount>balance){
                console.warn("Insufficient Fund!");
            }
            else{
                balance -= amount;
                console.log("Withdrawn Amount: ",amount);
                console.log("Balance: ",balance);
            }
        }   
    }
}

const gokulKrishnan = createBankAccount(1000);
gokulKrishnan.checkBalance()
gokulKrishnan.deposit(100);
gokulKrishnan.withdraw(1100);
gokulKrishnan.withdraw(500);
gokulKrishnan.checkBalance();
gokulKrishnan.deposit(300);
