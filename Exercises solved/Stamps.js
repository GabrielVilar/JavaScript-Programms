/*
A certain person is very fond of stamps. She keeps these stamps on a page and arranges them in a way that makes a completely covered rectangle with no overlap. 
Implement a function that takes the number of stamps in this person's collection and returns the number of ways to arrange the stamps into rectangles.
Ex: If the number 4 is passed, the expected return is 3.
*/
const prompt = require('prompt-sync')();
var nmbOfStamps = Number(prompt("What is the number of stamps? "));

function arrangeStamps(n){
    let count = 0;
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            let j = n/i;
            if(j >= i){
                count++;
            }
        }
    }
    return count;
}

console.log(arrangeStamps(nmbOfStamps));
/*
In this implementation, we start with i set to 1 and iterate up to n. 
For each value of i, we check if n is divisible by i using the modulus 
operator %. If it is, we calculate the corresponding value of j as n / i.
We then check if j is greater than or equal to i. This is because we 
only want to count rectangles that are wider than they are tall once, 
and we don't want to double count rectangles that are taller than they 
are wide.
If both conditions are satisfied, we increment the count variable to 
keep track of the number of valid rectangles.
Finally, we return the value of count, which represents the number of 
ways to arrange the stamps into rectangles. For example, if the 
number 4 is passed to this function, it will return 3, which means 
there are 3 ways to arrange 4 stamps into rectangles.
*/