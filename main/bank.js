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
    var customers = prompt("Enter number of customers to be added into the queue : ");
    if(isNaN(customers)) console.log("Please enter the count of customers to be added.....")
    if(customers==0) console.log(" No customer added in the queue......");
    for (var i = 0; i < customers; i++) {
        queue.enqueue(i);
    }

    while (queue.getSize()>0) {
        var option = prompt("Enter 1 to withdraw and 2 to deposit amount: ");
        if (option == 1) {
            var withdraw_amt = prompt("Enter the amount to be withdrawn: ");
            if (minimumamount >= withdraw_amt) {
                var balance = Number(minimumamount) - Number(withdraw_amt);
                console.log("available balanace= " + balance);
            }
            else {
                console.log("you have insufficient balance");
            }
        }
        else if (option == 2) {
            var dep_amt = prompt("Enter the amount to be deposited : ");
            balance = Number(minimumamount) + Number(dep_amt);
            console.log("available balance= " + balance);
        }
        else{
            console.log("You have only 2 options...So please enter the valid option.........");
            cashCounter();
        }
        queue.dequeue();


    }
}

cashCounter();


