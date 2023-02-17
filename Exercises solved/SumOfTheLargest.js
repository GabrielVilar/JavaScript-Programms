/*
Implement a function that takes 3 numbers and returns the sum of the 2 
largest
Example:
If num1=2, num2=5 and num3=1 are passed in, the function should return 
7, because num1 and num2 are the 2 largest values that added together 
give 7.
Remark:
All values will be distinct from each other, that is, something like 
num1=2, num2=2 will not occur.
*/
const prompt = require('prompt-sync')();
var number1 = Number(prompt("First number: "));
var number2 = Number(prompt("Second number: "));
var number3 = Number(prompt("Third number: "));

function sumOfTwoLargestNumbers(num1, num2, num3){
    
    let sum = 0;

    if(num1 >= num2 && num1 >= num3){
        sum = num1;
        if(num2 >= num3){
            sum += num2;
        }else{
            sum += num3;
        }
    }else if(num2 >= num1 && num2 >= num3){
        sum = num2;
        if(num1 >= num3){
            sum += num1;
        }else{
            sum += num3;
        }
    }else if(num3 >= num1 && num3 >= num2){
        sum = num3;
        if(num1 >= num2){
            sum += num1;
        }else{
            sum += num2
        }
    }

    return sum;

}

console.log(sumOfTwoLargestNumbers(number1, number2, number3));