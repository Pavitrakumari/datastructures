fs = require('fs');
var utility2 = require('/home/administrator/js/Datastructures/utility/utility2.js');
var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function stack() {

    read.question("Enter the expression : ", function (exp) {     //take the expression from the user
        var front,back;
        var stack = new utility2();                     //create an object for stack which is in utility2 class
        var len=exp.length;                             //to calculate the length of the given expression
        for(var i=0;i<len;i++)
        {
            var ch=exp.charAt(i);                      //consider each character of the given expression
            if(ch=='(')                               //if the character is '(' then push that character into the stack
            {
                    stack.push(ch);
                    front++;  //consider a variable front & increment it whenever character is pushed into the stack
            }
            else if((ch==')'))        //else if character is ')' then pop the element from the stack
            {
                try{                  //try-catch is used to handle the error
                    stack.pop();
                    back++; //A variable back is used & incremented whenever stack is poped
                }
                catch(err){           //whenever an error occurs,then catch is used to catch the error
                    console.log('unmatched');
                }
            }    
                
            
        }
    if ((stack.isEmpty()) && (front==back))           //if stack is empty & front ,back are equal, then 
        {
                console.log("Balanced Parenthisis");   //the given expression is balanced expression
        }
        else
                console.log(" unBalanced");           //else the given expression is unbalanced 
        read.close();
    });
}
stack();




















