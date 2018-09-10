var prompt = require('prompt-sync')();
module.exports = {
    isPrime: function () 
    {

        //var arr = [];
        var i, j, k;
        for (i = 2; i <= 1000; i++)     //starts the for loop from i=2 to the given range
        {
            k = 0;
            for (j = 0; j < i; j++)      //starts the iteration between i & j
            {
                if (i % j == 0) {
                    k = 1;
                    break;
                }
            }
            if (k == 0) {

                return i;    //prints the prime numbers in an arary
            }
        }
        //return arr;
    },
    isPrime1:function()
    {
    var arr = [];
    var count = 0;
    for(var i = 0; i<= 1000; i++)
        {
    var flag = false;
    for (var j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            flag = true;
        }
    }
    if (flag === false) {
      return  arr.push(i);
    }
} 


    }


}