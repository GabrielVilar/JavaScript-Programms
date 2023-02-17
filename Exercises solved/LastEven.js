/*
Implement a function using JavaScript that takes an array and returns 
the last even element of the array.
*/
const prompt = require('prompt-sync')();

const ArrOfNumbers = [];
var number = Number(prompt("Total of numbers: "));
let i = 1;

while(i <= number){

     let nmb = Number(prompt(`Input the ${i}º number: `));
     ArrOfNumbers.push(nmb);
     i++;
}

function getLastEvenElement(arr){
    for(let i = arr.length - 1; i >=0; i--){
        if(arr[i] % 2 === 0){
            return arr[i];
        }
    }
    return null; //No even elements found;
}

console.log(getLastEvenElement(ArrOfNumbers));