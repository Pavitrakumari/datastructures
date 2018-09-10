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
console.log(data);                                        //to print the data given in text file
data = data.toString().split(' ');
data.sort(function (a, b) {                               //to sort the given data
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

    

        var list = new utility();                             //create an object for list class
        for (var i = 0; i < (data.length); i++)               //adding data to list
        {
            list.add(data[i]);
        }
        console.log(" Ascending order representation of the given list is : ")
        list.printList();                    //print the ascending order representation of the given list
        read.question('Enter a number  to search: ', function (element) {  //take user input to search the element
        if (list.indexOf(element) == -1)                //if index is not found then add the element into the list
         {
            list.add(element);
            var l1=[];
            l1 = list.printList1();
             l2=list.sort(l1);                      //sort the list after the element is added into the list     
           console.log(l2);                          //print the list which is sorted

        }
        else                                        //if the element is not found among the give input then 
        {
            list.removeElement(element);             //remove the element from the list
            list.printList();                        //print the modified list after removing the element

       }



        read.close();
    });
}
orderedList();




















