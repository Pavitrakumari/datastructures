/******************************************************************************
*  Execution       :   1. default node         cmd> node palindrome.js 
*        
*  Purpose         :  To check whether the given string is palindrome or not. 
* 
*  Description    
* 
*  @file           : palindrome.js
*  @overview       : palindrome module to check whether the given string is palindrome or not.
*  @module         : palindrome.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/

var readlineSync = require('readline-sync')
/*Including the readline module from package to program*/
/* Including the folder address for calling the functions to main*/
var utility = require('/home/administrator/js/Datastructures/utility/dequtility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
function palinchecker() {
    var dequeue = new utility();
    var string = readlineSync.question("Enter the string value to for palindrome: ");
    string= string.replace(" ", "");   //replace() function to remove the empty spaces 

    if (isNaN(string) == false) {
        console.log("please  enter only strings......");
        return;
    }
    var str = string.toLowerCase('').split('');     //to covert the given string into lower case & split the string
    //str=str.replace(" ","");
    for (var i = 0; i < str.length; i++) {
        dequeue.addRear(str[i]);                   //to add the splitted character into the queue 
    }
    var flag = true;                              
    while (dequeue.size() > 1 && flag == true) {   //if the queue size is not empty
        var first = dequeue.removeFront();        //removing the first element from the queue
        var last = dequeue.removeRear();          //removing the last element from the queue
        if (first != last) {                      //if first is not equal to last then make flag as false
            flag = false;
        }
        else {                                   //if first is equal to last,then make the flag as true
            flag = true;
        }
    }
    if (flag === true) {                        
        console.log("the given string is a palindrome");//if flag is true means the given string is palindrome
    }
    else {
        console.log("the given string is not a palindrome");//if flag is false means the given string is not palindrome
    }

}
palinchecker();



