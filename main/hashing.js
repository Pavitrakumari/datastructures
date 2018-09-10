var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
fs = require('fs');
var data = fs.readFileSync('/home/administrator/js/Datastructures/main/file3.txt', 'utf8');
console.log(data);
data = data.toString().split(' ');



var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function hashing()
{

    read.question('Enter the element to search: ', function (element) {
        //OrderedLinkedList[] order = new OrderedLinkedList[11];
        var list = new utility();
        //  list.add(data);
        //  list.printList();
        for (var i = 0; i < (data.length); i++)//adding data to list
        {
            list.printList();

            var rem = data[i]%11;
            
                list.add(data[rem]);
            list.printList();

            
        }
        for(var i=0;i<11;i++)
        {
            console.log(i);
            if(data[i]!=null)
            {
                list.printList();
            }
        }

    });
}
hashing();