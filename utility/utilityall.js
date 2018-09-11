module.exports = {


    checkPrime: function (min1, max1) {        

        let size = (Math.floor(max1 / 100) + 1);     //to define the size of the array
        let range = Math.floor(min1 / 100);         //

        let arr1 = [];

        min = min1;
                                           //to define min & max values based on the given input
        if (min1 == 0 && max1 >= 100) {

            //max = 99;

            max = 100;
        }

        else if (max1 < 100) {

            max = max1;

            console.log(max);


        }

        else 
        {
            max = ((range + 1) * 100);
        }

        if (min == 0 || min == 1) 
        {
            min = 2;
        }

        for (let index = range + 1; index <= size; index++)   
        {

            if ((max - min) <= 100 && max <= max1 && (max - min) != 0) //based on the given conditions create a new array 
            {

                let prime = new Array();

                for (let i = min; i <= max; i++) //logic to get prime numbers between the min & max range 
                {
                    let count = 0;

                    for (let j = 1; j <= i; j++)
                    {


                        if (i % j == 0) 
                        {

                            count++;
                        }

                    }

                    if (count <= 2)
                    {                                   //push the prime numbers 

                        prime.push(i);
                    }
                }
                arr1.push(prime);
                if (max1 - max <= 100)       //if the difference between max1 & max is less than or equal to 100
                {
                    range = Math.floor(min / 100);      //then range is min number divided by 100
                    min = (min + ((range + 1) * 100) - min);//assigning the min value
                    max = max1;                            //assigning the max value
                }
                else
                {
                    range = Math.floor(min / 100);      
                    min = (min + ((range + 1) * 100) - min);
                    max = max + 100;                  //the max is assigned as max+100
                }
            }
        }
        console.log('\n Prime Numbers in the given range are :')
        console.log(arr1);
    },
    prime: function (min, max) 
    {
        let prime = new Array();
        if (min == 0 || min == 1) 
        {
            min = 2;
        }
        for (let i = min; i <= max; i++)  //logic to get all the prime numbers between the given range 
        {
            let count = 0;
            for (let j = 1; j <= i; j++) 
            {
                if (i % j == 0) 
                {
                    count++;
                }
            }
            if (count <= 2)
             {
                 prime.push(i);
            }
        }
        return prime;
    },
    anagrams: function (str1, str2) //anagram function to check whether 2 given inputs are anagrams are not
    {

        var arr1 = str1.split('');  //split() function is used to split the given input
        var arr2 = str2.split('');
        var array1 = this.removeSpace(arr1);   //removeSpace() function is used to remove spaces 
        var array2 = this.removeSpace(arr2);

        var res1 = array1.sort();        //sort() function is used to sort an array
        var res2 = array2.sort();

        if (res1.length == res2.length) 
        {

            var output = this.compare(res1, res2);

            if (output) 
            {
                //console.log('given strings are anagram');
                return true;
            }

            else
             {
                // console.log('given strings are not anagram');
                return false;
            }

        }

        else {

            //console.log('given strings are not anagram');
            return false;

        }

    },
    removeSpace: function (array) 
    {

        var newArray = [];
        for (let i = 0; i < array.length; i++) 
        {

            if (array[i] != ' ') 
            {
                newArray.push(array[i]);
            }

        }

        return newArray;

    },

    compare: function (array1, array2) {    /**Function to compare 2 arrays whether they are anagram or not */

        let count = 0;

        for (let i = 0; i < array1.length; i++) 
        {

            if (array1[i] == array2[i])
            {

                count++
            }
        }

        return (array1.length == count);

    },

}

