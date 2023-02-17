/*
Implement a JavaScript function that is able to execute the following 
command:
Given an array of 5 positive integers, find the minimum value and 
the maximum value that can be calculated by adding exactly four of the 
five numbers in that array. Your function should return a list, with 
two elements, the first should be the value found for the minimum sum 
and the second should be the value found for the maximum sum.
Example:
If lst = [5, 2, 3, 4, 1] is passed then your function must 
return [10, 14]. Because 10 is the smallest value that can be obtained 
by adding 4 of the 5 values and 14 is the largest value that can be 
obtained by adding 4 of the 5 values in the lst array.
Remark:
There may be repeated numbers in this array.
*/
const prompt = require('prompt-sync')();
var lst = [];
let i = 1;
while(i <= 5){
    let nmb = Number(prompt(`Input the ${i}º number: `));
    lst.push(nmb);
    i++;
}
function findMinMaxSun(lst){
    lst.sort((a,b) => a - b);
    //Sort the array in ascending order
    const minSum = lst[0] + lst[1] + lst[2] + lst[3];
    const maxSum = lst[1] + lst[2] + lst[3] + lst[4];
    return [minSum, maxSum];
}
console.log(findMinMaxSun(lst));
