//This is my first JavaScript code
console.log('Hello World');
//Const name cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain space or hyphen
//Are case-sensitive
const interesRate = 0.3; //Number literal
let isApproved = false; //Boolean literal
let firsName = undefined; //Undefined
let selectedColor = null; //null

let person = {
    name: 'Augusto', //String literal
    lastName: 'Vilarinho',
    age: 30 //Number literal
};

//Dot notation
person.name = 'Lucas'
//Bracket notation
person['name'] = 'Mary';

//An array is data structer that we use to represent a list of itens
let Colors = ['red','blue'];
Colors[2] = 'Green';
Colors[3] = 23;

//Performing a value
function greet(name, lastName) {
    console.log('This is a function '+name+' '+lastName);
}

//Calculating a value
function square(number) {
    return number * number;
}

//If you need to reasing use 'let', if you don't need use 'const'
console.log(interesRate);
console.log(isApproved);
console.log(Colors.length);
console.log('Her name: '+ person.name);
console.log('Her age: '+person.age);
greet(person.name, person.lastName);
console.log(square(Colors[3]));