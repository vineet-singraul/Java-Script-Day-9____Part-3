const prompt = require('prompt-sync')();
let num  = prompt("Enter the number:")
num = parseInt(num)
let i=1
while(i<10)
{
    console.log(`${num} * ${i} = ${num * i}`);
    console.log(num + " * " + i + " = " + (num * i));
}