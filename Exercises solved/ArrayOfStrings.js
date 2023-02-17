/*
Implement a JavaScript function that takes an array of strings and 
returns a single string by concatenating the elements of the array, 
but leaving each element separated by "-" as in the example below.
Example: 
If the array arr=["person", "love", "title"] is passed, the function 
should return "person-love-title".
Example: 
If the array arr=["bye"] is passed, the function should return "bye".
*/
const prompt = require('prompt-sync')();
var arrStrings = [];
var numberOfwords = Number(prompt("Input the number of words: "));

let i = 1;

while(i <= numberOfwords){
    const word  = prompt(`Input the ${i}º word: `);
    arrStrings.push(word);
    i++;
}

function concatenateWithHyphen(arr){
    return arr.join("-");
}

console.log(concatenateWithHyphen(arrStrings));