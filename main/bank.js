var prompt = require('prompt-sync')()
var utility = require('/home/administrator/js/Datastructures/utility/utility3.js')
function cashCounter() {

    var queue = new utility();
    // Testing dequeue and pop on an empty queue
    if (queue.isEmpty()) {
        console.log("Queue is empty");
    }
    else {

        console.log("queue not empty");

    }
    var minimumamount = 20000;
    var customers = prompt("Enter number of customers to be added into the queue : ");//input to add the custonmers into the queue
    if(isNaN(customers)) console.log("Please enter the count of customers to be added.....")
    if(customers==0) console.log(" No customer added in the queue......");
    for (var i = 0; i < customers; i++) {   //to add the customers into the queue(enqueue)
        queue.enqueue(i);
    }

    while (queue.getSize()>0) {                 //if queue size is greater than 0
        var option = prompt("Enter 1 to withdraw and 2 to deposit amount: ");  //taking user's choice to perform a certain operation
        if (option == 1) {                                  //if option is '1' it performs withdraw operation
            var withdraw_amt = prompt("Enter the amount to be withdrawn: ");
            if (minimumamount >= withdraw_amt) {            //the min amount in the bank should be greater than withdraw amount
                var balance = Number(minimumamount) - Number(withdraw_amt);  //performing withdarw & calculating the balance left in the account
                console.log("available balanace= " + balance);
            }
            else {
                console.log("you have insufficient balance"); //if min amount is less than withdraw amount,the it displays insufficient balance
            }
        }
        else if (option == 2) {                               //option '2' performs deposit operation
            var dep_amt = prompt("Enter the amount to be deposited : ");
            balance = Number(minimumamount) + Number(dep_amt);//calculates the balance by adding the min_amt & deposit_amt 
            console.log("available balance= " + balance);
        }
        else{
            console.log("You have only 2 options...So please enter the valid option.........");//only 2 options must be performed
            cashCounter();
        }
        queue.dequeue();


    }
}

cashCounter();


