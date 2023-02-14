/* My First JavaScript programm 
   It calculates the weighted average betwenn three grades,
   with the first having a weight of 3, the second having a
   weight of 3, and the third having a weight of 4:
*/

//Here we have our variables
const prompt = require('prompt-sync')();
var numberA = Number(prompt("Input your grades below:\nFirst grade: "));
var numberB = Number(prompt("Second grade: "));
var numberC = Number(prompt("Third grade: "));

var result = weightedAverage(numberA, numberB, numberC);

function weightedAverage(grade1, grade2, grade3){
   result = (grade1 * 3 + grade2 * 3 + grade3 * 4)/10;
   return result;
}

console.log(`The result of the weighted average is ${result}`);

/*
   The function 'weightedAverage' takes in three arguments,
  witch repressnte the three grades. The function calculates
  the weighted average by multiplying each grade by its 
  corresponding weight and then dividing the sum by the
  total weight (ten in this case). The result is then
  logged to the console.
*/