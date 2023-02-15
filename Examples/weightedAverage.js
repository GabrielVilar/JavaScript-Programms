/* My First JavaScript programm 
   It calculates the weighted average betwenn three grades,
   with the first having a weight of 3, the second having a
   weight of 3, and the third having a weight of 4:
*/

//Here we have our variables
const prompt = require('prompt-sync')();
var name = prompt("Hi, what's your name? ");
console.info(`${name} input your grades below:`);
var numberA = Number(prompt("First grade: "));
var numberB = Number(prompt("Second grade: "));
var numberC = Number(prompt("Third grade: "));
console.info("Input the number of absences in the semester below:");
var Absences = Number(prompt("Absences: "));

var result = weightedAverage(numberA, numberB, numberC);

function weightedAverage(grade1, grade2, grade3){
   result = (grade1 * 3 + grade2 * 3 + grade3 * 4)/10;
   return result;
}
/* 
      A statement that determines if you passed or you failed, 
   if your weighted average is greater than 7 you passed 
   else you don't. 
*/

let end = `congratulations ${name}, you Passed!`;
if(result < 5){
    end = "you Failed.";
}else if(Absences > 10){
   end = "you Failed, you have more than ten absences.";
}else if(result < 7){
    end = "you have to do the final exam.";
}

console.log(`The result of the weighted average is ${result} ${end}`);

/*
   The function 'weightedAverage' takes in three arguments,
  witch repressnte the three grades. The function calculates
  the weighted average by multiplying each grade by its 
  corresponding weight and then dividing the sum by the
  total weight (ten in this case). The result is then
  logged to the console.
*/