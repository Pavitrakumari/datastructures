
var readlineSync = require('readline-sync')
/*Including the readline module from package to program*/
/* Including the folder address for calling the functions to main*/
var utility = require('/home/administrator/js/Datastructures/utility/dequtility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
function palinchecker() {
    var dequeue = new utility();
    var string = readlineSync.question("Enter the string value to for palindrome: ");
    string= string.replace(" ", "");

    if (isNaN(string) == false) {
        console.log("please  enter only strings......");
        return;
    }
    var str = string.toLowerCase('').split('');
    //str=str.replace(" ","");
    for (var i = 0; i < str.length; i++) {
        dequeue.addRear(str[i]);
    }
    var flag = true;
    while (dequeue.size() > 1 && flag == true) {
        var first = dequeue.removeFront();
        var last = dequeue.removeRear();
        if (first != last) {
            flag = false;
        }
        else {
            flag = true;
        }
    }
    if (flag === true) {
        console.log("the given string is a palindrome");
    }
    else {
        console.log("the given string is not a palindrome");
    }

}
palinchecker();



