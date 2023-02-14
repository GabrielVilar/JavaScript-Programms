/* My First JavaScript programm 
   It calculates the weighted average betwenn three grades,
   with the first having a weight of 3, the second having a
   weight of 3, and the third having a weight of 4:
*/
function weightedAverage(grade1, grade2, grade3){
    return (grade1 * 3 + grade2 * 3 + grade3 * 4)/10;
}

const result = weightedAverage(7, 10, 10);
console.log(result);

/*
   The function 'weightedAverage' takes in three arguments,
  witch repressnte the three grades. The function calculates
  the weighted average by multiplying each grade by its 
  corresponding weight and then dividing the sum by the
  total weight (ten in this case). The result id then
  logged to the console.
*/