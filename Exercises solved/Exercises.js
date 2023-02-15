/*
1. Implemente uma função usando JS que recebe uma string e retorna um array contendo a distância de cada letra da string original para a vogal mais próxima no alfabeto.
Exemplo: Se for passada a palavra uva, o retorno esperado é [0,1,0] pois “u” e “a” são vogais então a distância é 0. A vogal mais próxima de “v” é a letra “u” que fica a 1 letra de distância.
Exemplo: Se for passada a palavra “faz”, o retorno esperado é [1,0,5]. A vogal mais perto de “f” é a letra “e” com 1 letra de distância. A letra “a” já é uma vogal, logo a distância é 0. A vogal mais perto da letra “z” é a letra “u” que dista 5 letras do “z”.

2. A certain person is very fond of stamps. She keeps these stamps on a page and arranges them in a way that makes a completely covered rectangle with no overlap. 
Implement a function that takes the number of stamps in this person's collection and returns the number of ways to arrange the stamps into rectangles.
Ex: If the number 4 is passed, the expected return is 3. 

3. In chess, a rook is a piece that moves horizontally or vertically as many spaces as it wants, as in the image below. Also, a rook captures another rook if they occupy the same position on the board.
Implement the function that receives 2 strings, the position where your rook is and the position where the opponent's piece is and must return "Yes" if the rook can capture the opponent's piece with only 1 move or "No" otherwise.
Example:
If positionTower=11 and positionAdversary=31 are passed, the function should return "Yes". In this case the rook can move along column 1 and reach the position of the other piece.
If you pass positionTower=11 and positionAdversary=14, the function should return "Yes". In this case, for the rook can move along row 1 and arrive at the position of the other piece.
If you pass positionTower=11 and positionAdversary=22, the function should return "No". In that case, there is no way the rook can move only along 1 row or 1 column and arrive at the position of the other piece.
Remark:
the position of the pieces will be given in the format "xy" where x represents the row the piece is in and y the column the piece is in, i.e. position "12" means the piece is in the 1st row and in the 2nd column

4.implement a JavaScript function that is able to execute the following command:
Given an array of 5 positive integers, find the minimum value and the maximum value that can be calculated by adding exactly four of the five numbers in that array.
Your function should return a list, with two elements, the first should be the value found for the minimum sum and the second should be the value found for the maximum sum.
Example:
If lst = [5, 2, 3, 4, 1] is passed then your function must return [10, 14].
Because 10 is the smallest value that can be obtained by adding 4 of the 5 values and 14 is the largest value that can be obtained by adding 4 of the 5 values in the lst array.
Remark:
There may be repeated numbers in this array.

5.
*/