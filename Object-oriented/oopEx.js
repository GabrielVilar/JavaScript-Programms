let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 37,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
console.log(employee.getWage());

/*
Encapsulation = Reduce complexity + increase resuability
Abstraction = Reduce complexity + isolate impact of changes
Inheritance = Eliminate redutant code
Polymorphism = Refactor ugly switch/case statements
*/