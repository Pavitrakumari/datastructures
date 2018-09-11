/******************************************************************************
*  Execution       :   1. default node         cmd> node primeanagram.js 
*        
*  Purpose         :  To add the Prime Numbers that are Anagram in the Range of 0-1000 in a Stack using linkedlist
* 
*  Description    
* 
*  @file           : primeanagram.js
*  @overview       : primeanagram module to add the Prime Numbers that are Anagram in the Range of 0-1000 in a Stack using linkedlist

*  @module         : primeanagram.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/

let prompt = require('prompt-sync')();

let utility = require('/home/administrator/js/Datastructures/utility/utilityall.js');

let reg = /[a-zA-Z]/g;
let reg2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];



function primeAnagram() {

    let num1 = prompt(' Enter the min number : ');
    let num2 = prompt(' Enter the max number : ');


    if (num1.search(reg) == -1 && num2.search(reg2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);  //call prime function to which returns all the primes between the given range

        console.log('\n Prime numbers given in the range are : \n');
        console.log(prime);           //print all the prime numbers within the given range

        let anagram = [];             //declare an empty array that holds the primes which are anagrans
        let anagramNot = [];         //declare an empty array which holds the primes that are not anagrams

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();   //compare one prime with the other using toString function

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);

                if (res1)
                {
                    anagram.push(prime[i]);//push the prime anagrams into the array
                    anagram.push(prime[j]);
                }
                else 
                {

                    anagramNot.push(prime[i]);//push the primes which are not anagrams into the aray
                    anagramNot.push(prime[j]);
                }
            }
        }

        let anag = [];

        let anagN = [];

        anag = removeDuplicates(anagram);   //to add the prime anagrams after removing the duplicates

        anagN = removeDuplicates(anagramNot);//to add the primes which are not anagarams after removing the duplicates

        

        let res = [];


        res.push(anag);

        res.push(anagN);
        console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');

        console.log('\n 0 index--- Prime Anagrams \n \n 1 index--- Prime that are not Anagrams\n')
        console.log(res);





        function removeDuplicates(arr) {    //logic to remove duplicates from the array

            let unique_array = [];


            for (let i = 0; i < arr.length; i++)     
            {

                if (unique_array.indexOf(arr[i]) == -1) //if element is present in the given index ,then push rhe element into the array
                {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;



        }

    }
}

primeAnagram();

