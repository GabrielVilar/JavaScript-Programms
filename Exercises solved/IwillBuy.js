/*
Implement the function using JavaScript that receives as parameters 2 
numbers, the installment value and the number of installments, and 
returns I will buy or I will not buy according to the following rule:
- Values above 1000 and only in the case where you have 10 or 
more installments you always buy.
- Values above 500 and with 5 or more installments, also, it's always 
bought.
- Values less than or equal to 500 are always bought.
- Any other situation is never bought.

Example: must return "I will buy" when passed price=1200 and parcels=10.
*/
const prompt = require('prompt-sync')();
var installment = Number(prompt("Installment: "));
var numInstallment = Number(prompt("Number of installments: "));

function shouldIBuy(installment, numInstallment){
    if(installment > 1000 && numInstallment >=10){
        return "I will buy";
    }else if(installment > 500 && numInstallment >= 5){
        return "I will buy";
    }else if(installment <=500){
        return "I will buy";
    }else{
        return "I will not buy";
    }
}
console.log(shouldIBuy(installment, numInstallment));