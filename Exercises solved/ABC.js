/*
Implement the function using JavaScript, that returns a string in the 
format abc,abc,abc,end, where "abc" is the text passed by parameter 
and the number of times it repeats is the number passed in the 
repetitions parameter.
Example: it should return la,la,la,end when we pass the text="la" 
and repetitions=3.
*/
const prompt = require('prompt-sync')();
var Text = prompt("Enter the text: ");
var Repetitions = Number(prompt("The number of repetitions? "));

function repeatText(text, repetitions) {
    let repeatedText = text.repeat(repetitions); 
    // Repeat the 'text' parameter 'repetitions' number of times.
    return `${repeatedText},end`; 
    // Return the repeated text and "end" in the desired format.
}

let result = repeatText(Text, Repetitions); 
// Call the function with 'text' = 'la' and 'repetitions' = 3
console.log(result); 
// Output: "la,la,la,end"