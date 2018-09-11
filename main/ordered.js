/******************************************************************************
*  Execution       :   1. default node         cmd> node unordered.js 
*        
*  Purpose         :  To read the text from a file,split it into words & arrange it as Linked List. 
* 
*  Description    
* 
*  @file           : unordered.js
*  @overview       : unordered module to read the text from a file,split it into words & arrange it as Linked List.
*  @module         : unordered.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/
var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
fs = require('fs');
var data = fs.readFileSync('/home/administrator/js/Datastructures/main/file2.txt', 'utf8');
console.log(data);
data = data.toString().split(' ');
data.sort(function (a, b) {
    return a - b;
});

var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList() {
    //var array = [];
    var list = new utility();

    for (var i = 0; i < (data.length); i++)      /**adding data to list*/
    {
        list.add(data[i]);
    }
    console.log("ascending order of list: ");   /**Ascending order representation of list*/
    var string = list.printList1();

    console.log(string);
    
    read.question('Enter the element to search: ', function (element) {
        if(isNaN(element)) 
        {
            console.log("Please enter a numeric value to search...............");
            return;
            
        }
        //string = list.printList();
        if (list.indexOf(element) == -1) {
            list.insertSort(parseInt(element));      /**inserts an element at appropriate position*/
        }
        else {
            list.removeElement(element);              /**Removes the element from the list */
        }
        string = list.printList1();
        console.log(string);                         /**prints the elements in the list */
        fs.writeFileSync('/home/administrator/js/Datastructures/main/file2.txt', string);

        read.close();

    });
}
orderedList();
























