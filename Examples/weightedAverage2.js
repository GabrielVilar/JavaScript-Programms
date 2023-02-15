const student = [];

let i = 0;

while(i < 5){
    let Passed = false;
    const prompt = require('prompt-sync')();
    const name  = prompt("Hi, what's your name? ");
    console.info(`${name} input your grades below:`);
    const firstGrade = Number(prompt("First grade: "));
    const secondGrade = Number(prompt("Second grade: "));
    const thirdGrade = Number(prompt("Third grade: "));
    const weightedAverage = ((firstGrade * 3 + secondGrade * 3 + thirdGrade * 4)/10);
    const absences = Number(prompt("Absences: "));
    if((weightedAverage >= 7) && (absences <= 10)){
        Passed = true;
    }
    const person = {name, firstGrade, secondGrade, thirdGrade, weightedAverage, absences, Passed};
    student.push(person);
    i++;
}

//console.log(student);
let countPassed = 0;

console.info("\nThe list of the students that passed:");
for(let e = 0; e < student.length; e++){
    if(student[e].Passed == true){
     countPassed++;
     console.log(student[e].name);
    }
}
console.info(`Total: ${countPassed}`);

let countDntPass = ((student.length) - countPassed);
console.info("\nThe list of the students that didn't pass:");
for(let a = 0; a < student.length; a++){
    if(student[a].Passed == false){
     console.log(student[a].name);
    }
}
console.info(`Total: ${countDntPass}`);