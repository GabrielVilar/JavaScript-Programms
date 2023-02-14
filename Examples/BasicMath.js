/*
   JavaScript types of Variables
   In JavaScript, there are three types of variables:
      1. var: a variable declared with the "var" keyword has function scope 
         and is accessible within the function it was declared in.
      2. let: a variable declared with the "let" keyword has block scope 
         and is accessible within the block it was declared in.
      3. const: a variable declared with the "const" keyword is also block-scoped, 
         but its value cannot be reassigned once it has been initialized.
*/

//Here we have our variables
const prompt = require('prompt-sync')();
var numberA = Number(prompt("Enter the first number: "));
var numberB = Number(prompt("Enter the second number: "));
var operationC = prompt("Enter the operation to perform (+, -, *, /, %): ");
/* "%" is the symbol of the remainder of the division, used to find out 
if the number is even or odd*/

var result = Math(numberA, numberB, operationC);
//Creating essential Math functions that include four operations
function Math(number1, number2, operation){
    if(operation === "+"){
        result = number1 + number2;
        return (result);
    }else if(operation === "-"){
        result = number1 - number2;
        return (result);
    }else if(operation === "*"){
        result = number1 * number2;
        return (result);
    }else if(operation === "/"){
        result = number1 / number2;
        return (result);
    }else if(operation === "%"){
        result = number1 % number2;
        return (result);
    }else{
        console.log("Invalid operation entered.");
    }
}

console.log(`The result of ${numberA} ${operationC} ${numberB} is: ${result}`);

/*
//Separeted Math functions
//Sum function
function Sum(number1, number2){
    return(number1 + number2);
}
//Subtraction function
function Sub(number1, number2){
    return(number1 - number2);
}
//Multiplication function
function mult(number1, number2){
    return(number1 * number2);
}
//Division function
function div(number1, number2){
    return(number1/number2);
}

const result1 = Sum(2, 8);
console.log(result1);

const result2 = Sub(10, 9);
console.log(result2);

const result3 = mult(5, 6);
console.log(result3);

const result4 = div(50, 5);
console.log(result4);
*/