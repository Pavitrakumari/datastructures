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
var data = fs.readFileSync('/home/administrator/js/Datastructures/main/file1.txt', 'utf8');
console.log(data);                       //It's used to print the data that we had displayed in text file
data = data.toString().split(' ');       //To split the given data & convert into string using toString() function



var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
                                     //UnorderedList() is used to add & remove the elements when required
function unOrderedList() {

    read.question('Enter the element to search: ', function (element) {

        var list = new utility();                    //create an object for list which is in utility
      
        for (var i = 0; i < (data.length); i++)     //adding data to list
       {
            list.add(data[i]);
       }
       if (list.indexOf(element) == -1)           //if element is not found then add the element into the list
       {
           list.add(element);
           
       }
       else                                      //if element is found,then remove the element from the list
        {
            list.removeElement(element);
           
        }
        list.printList();                       //print the list which is modified
        var l1=list.printList1();               
        fs.writeFileSync('/home/administrator/js/Datastructures/main/file1.txt', l1); //rewrite the file with the modified list
        read.close();
    });
}
unOrderedList();




















