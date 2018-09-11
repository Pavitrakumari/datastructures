/******************************************************************************
*  Execution       :   1. default node         cmd> node queueanagram.js 
*        
*  Purpose         :  To add the Prime Numbers that are Anagram in the Range of 0-1000 in a queue using linkedlist
* 
*  Description    
* 
*  @file           : queueanagram.js
*  @overview       : queueanagram module to add the Prime Numbers that are Anagram in the Range of 0-1000 in a queue using linkedlist

*  @module         : queueanagram.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/
var utility1 = require('/home/administrator/js/Datastructures/utility/utility.js')
let prompt = require('prompt-sync')();

let utility = require('/home/administrator/js/Datastructures/utility/utilityall.js');

let utility3 = require('/home/administrator/js/Datastructures/utility/utility3.js');

let reg = /[a-zA-Z]/g;
let reg2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];
/* Drier program to test above functions*/
function main() {

    let num1 = prompt(' Enter the minimum number : ');
    let num2 = prompt(' Enter the maximum number : ');


    if (num1.search(reg) == -1 && num2.search(reg2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);    //get the prime numbers

        console.log('Prime are .................');
        console.log(prime);                     //print the prime numbers

        let anagram = [];

        for (let i = 0; i < prime.length - 1; i++) {  

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();     

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);  //check whether 2 strings are anagram or not

                if (res1) {
                    anagram.push(prime[i]);         //if res1 is true,then push the element into the prime array
                    anagram.push(prime[j]);
                }

            }
        }



        anag = removeDuplicates(anagram);       /** This function is used to remove duplicates from the anagram primes */

        console.log('Anagrams in the range are :' + anag);/**This is used to print the anagrams in the given range */

/**Function to remove duplicates from the array of anagrams */
        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {/**Returns the index of the 1st occurence of a value in an array */

                    unique_array.push(arr[i])    //pushes the element which is returned from indexOf() function into the array
                }
            }

            return unique_array;



        }

    }


    let llist = new utility1();

    for (let i = 0; i < anag.length; i++) {

        llist.add(anag[i]);

    }

     llist.printList();

    //console.log(res);

    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let queue = new utility3();

    for (let i = 0; i < anag.length; i++) {

        let temp = llist.GetElement(i);

        queue.enqueue(temp);


    }

    let out = queue.printQueue();
    console.log('elements in Queue are :' + out);
}

main();





