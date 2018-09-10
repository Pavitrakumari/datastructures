let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;



function prime() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        utility.checkPrime(num1, num2);

    }
}

module.exports = {


    checkPrime: function (min1, max1) {

        let size = (Math.floor(max1 / 100) + 1);
        let range = Math.floor(min1 / 100);

        let arr1 = [];

        min = min1;

        if (min1 == 0) {

            max = 99;
        }

        else {

            max = ((range + 1) * 100) - 1;

        }

        for (let index = range + 1; index <= size; index++) {

            if ((max - min) < 100 && max <= max1) {

                let prime = new Array();

                for (let i = min; i <= max; i++) {
                    let count = 0;

                    for (let j = 1; j <= i; j++) {


                        if (i % j == 0) {

                            count++;
                        }

                    }

                    if (count <= 2) {

                        prime.push(i);


                    }


                }

                arr1.push(prime);

                if (max1 - max < 100) {

                    range = Math.floor(min / 100);

                    min = (min + ((range + 1) * 100) - min);

                    max = max1 - 1;

                }

                else {

                    range = Math.floor(min / 100);

                    min = (min + ((range + 1) * 100) - min);

                    max = max + 100;

                }

            }



        }


        console.log('\n Prime Numbers in the given range are :')
        console.log(arr1);

    },

    prime: function (min, max) {

        let prime = new Array();

        if (min == 0 || min == 1) {
            min = 2;
        }

        for (let i = min; i <= max; i++) {
            let count = 0;

            for (let j = 1; j <= i; j++) {


                if (i % j == 0) {

                    count++;
                }

            }

            if (count <= 2) {

                prime.push(i);


            }

        }

        return prime;

    },

    anagrams: function (str1, str2) {

        var arr1 = str1.split('');
        var arr2 = str2.split('');
        var array1 = this.removeSpace(arr1);
        var array2 = this.removeSpace(arr2);

        var res1 = array1.sort();
        var res2 = array2.sort();

        if (res1.length == res2.length) {

            var output = this.compare(res1, res2);

            if (output) {
                //console.log('given strings are anagram');
                return true;
            }

            else {
                // console.log('given strings are not anagram');
                return false;
            }

        }

        else {

            //console.log('given strings are not anagram');
            return false;

        }

    },
    removeSpace: function (array) {

        var newArray = [];
        for (let i = 0; i < array.length; i++) {

            if (array[i] != ' ') {
                newArray.push(array[i]);
            }

        }

        return newArray;

    },

    compare: function (array1, array2) {

        let count = 0;

        for (let i = 0; i < array1.length; i++) {

            if (array1[i] == array2[i]) {

                count++
            }
        }

        return (array1.length == count);

    },

}
prime();
**************************************

    let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];



function primeAnagram() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);

        console.log('\n Prime numbers given in the range are : \n');
        console.log(prime);

        let anagram = [];
        let anagramNot = [];

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);

                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);

                    /*  console.log();
                      console.log(prime[i] + ' and '+ prime[j] + ' are anagrams');*/
                }

                else {

                    anagramNot.push(prime[i]);
                    anagramNot.push(prime[j]);
                }
            }
        }

        let anag = [];

        let anagN = [];

        anag = removeDuplicates(anagram);

        anagN = removeDuplicates(anagramNot);

        /*console.log('Anagrams are .................');
        
        console.log(anag);
   
        console.log('Not Anagrams are .................');
   
        console.log(anagN);*/

        let res = [];


        res.push(anag);

        res.push(anagN);
        console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');

        console.log('\n 0 index--- Prime Anagrams \n \n 1 index--- Prime that are not Anagrams\n')
        console.log(res);





        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;



        }

    }
}

primeAnagram();



var utility1 = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let utility3 = require('/home/bridgeit/ram mohan reddy/node programs/utility/stack.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];
/* Drier program to test above functions*/
function main() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);

        console.log('Prime are .................');
        console.log(prime);

        let anagram = [];

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);

                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);
                }

            }
        }



        anag = removeDuplicates(anagram);

        console.log('Anagrams in the range are :' + anag);


        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;



        }

    }


    let llist = new utility1();

    for (let i = 0; i < anag.length; i++) {

        llist.add(anag[i]);

    }

    let res = llist.printList();

    console.log(res);

    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let stack = new utility3();

    for (let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);

        stack.push(temp);


    }

    let out = stack.printStack();
    console.log('elements in stack are :' + out);

    for (let i = anag.length; i > 0; i--) {

        console.log(stack.pop());
    }





}

main();


var utility1 = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let utility3 = require('/home/bridgeit/ram mohan reddy/node programs/utility/queue.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];
/* Drier program to test above functions*/
function main() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);

        console.log('Prime are .................');
        console.log(prime);

        let anagram = [];

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);

                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);
                }

            }
        }



        anag = removeDuplicates(anagram);

        console.log('Anagrams in the range are :' + anag);


        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;



        }

    }


    let llist = new utility1();

    for (let i = 0; i < anag.length; i++) {

        llist.add(anag[i]);

    }

    let res = llist.printList();

    console.log(res);

    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let queue = new utility3();

    for (let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);

        queue.enqueue(temp);


    }

    let out = queue.printQueue();
    console.log('elements in stack are :' + out);
}

main();




