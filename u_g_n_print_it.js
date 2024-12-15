const prompt = require('prompt-sync')();
let num  = prompt("Enter the number:")
num = parseInt(num)
i=1
while(i<num)
{
    i=i+1
    console.log(i)
}