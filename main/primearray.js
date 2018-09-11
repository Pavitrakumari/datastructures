/******************************************************************************
*  Execution       :   1. default node         cmd> node primearray.js 
*        
*  Purpose         :  To store the prime nu bers in a 2-D array. 
* 
*  Description    
* 
*  @file           : primearray.js
*  @overview       : primearray module to store the prime numbers in a 2-D array
*  @module         : primearray.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/

let prompt = require('prompt-sync')();

let utility = require('/home/administrator/js/Datastructures/utility/utilityall.js');

let reg = /[a-zA-Z]/g;
let reg2 = /[!@#$%^&*().<>+-/*"'`~]/g;                     //reg-regular expression



function prime() {

    let num1 = prompt(' Enter the  minimum range to print the prime numbers : ');     //enter the minimum number from where to start print the prime numbers 
    let num2 = prompt(' Enter the maximum range to print the prime numbers : ');     //enter the maximum range upto which to print the prime numbers 

                                                  //to check that only numbers are allowed to be given as inputs
    if (num1.search(reg) == -1 && num2.search(reg2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) 
    {

        num1 = parseInt(num1);              //parseInt():to convert the string into  number 
        num2 = parseInt(num2);

        utility.checkPrime(num1, num2);    //calling the function checkPrime which is in utility

    }
    else    //if input is anything other than numbers,then it's an indication to user to give input in the correct range
    {
        console.log("Please enter only numbers between the range 0-1000..............");
        prime();
    }
}
prime();
